/**
 * Passwortschutz der Website. Läuft mit Web Crypto, also gleich in Node (Tests) und in den
 * Cloudflare Pages Functions (`functions/`), die jede Anfrage prüfen.
 */

/** Name des Cookies, der den Zugang merkt. */
export const AUTH_COOKIE = "semester-auth";
/** Wie lange ein Login gilt (Sekunden): 30 Tage. */
export const AUTH_MAX_AGE = 60 * 60 * 24 * 30;

const encoder = new TextEncoder();

async function sha256(value: string): Promise<Uint8Array> {
  return new Uint8Array(await crypto.subtle.digest("SHA-256", encoder.encode(value)));
}

function constantTimeEqual(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) diff |= a[i] ^ b[i];
  return diff === 0;
}

/** Vergleich in konstanter Zeit, unabhängig von der Länge der Eingaben (beide Seiten werden erst gehasht). */
export async function passwordMatches(input: string, password: string): Promise<boolean> {
  return constantTimeEqual(await sha256(input), await sha256(password));
}

/** Wert des Cookies: HMAC über eine feste Zeichenkette, abgeleitet vom Passwort. Ändert sich das Passwort, verfallen alle Logins. */
export async function sessionToken(password: string): Promise<string> {
  const key = await crypto.subtle.importKey("raw", encoder.encode(password), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const signature = new Uint8Array(await crypto.subtle.sign("HMAC", key, encoder.encode("semester-1-session")));
  return Array.from(signature, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

export async function isAuthorized(cookieValue: string | undefined | null, password: string): Promise<boolean> {
  if (!cookieValue) return false;
  return passwordMatches(cookieValue, await sessionToken(password));
}

/** Liest einen Cookie aus dem Cookie-Header. */
export function readCookie(header: string | null, name: string): string | undefined {
  if (!header) return undefined;
  for (const part of header.split(";")) {
    const index = part.indexOf("=");
    if (index === -1) continue;
    if (part.slice(0, index).trim() === name) return part.slice(index + 1).trim();
  }
  return undefined;
}

/** Nur Pfade auf dieser Website als Weiterleitungsziel zulassen (kein offener Redirect). */
export function safeNext(value: unknown): string {
  // Steuerzeichen (z. B. Tab in "/\t/evil.example") und Backslashes entfernt der URL-Parser still und
  // machen daraus "//evil.example"; solche Werte werden deshalb gar nicht erst angenommen.
  if (typeof value !== "string" || /[\u0000-\u001F\u007F\\]/.test(value)) return "/";
  if (!value.startsWith("/") || value.startsWith("//")) return "/";
  const base = "http://internal.invalid";
  let url: URL;
  try {
    url = new URL(value, base);
  } catch {
    return "/";
  }
  if (url.origin !== base) return "/";
  if (url.pathname === "/login" || url.pathname.startsWith("/api/")) return "/";
  return `${url.pathname}${url.search}${url.hash}`;
}

/** Pfade, die ohne Login erreichbar sind: die Anmeldeseite selbst und die statischen Next-Dateien. */
export function isOpenPath(pathname: string): boolean {
  return (
    pathname === "/login" ||
    pathname === "/login.html" ||
    pathname === "/login.txt" ||
    pathname === "/api/login" ||
    pathname === "/icon.svg" ||
    pathname.startsWith("/_next/static/")
  );
}

type Env = { SITE_PASSWORD?: string };

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/** Prüft jede Anfrage (Cloudflare Pages Middleware). `next` liefert die statische Datei. */
export async function handleRequest(request: Request, env: Env, next: () => Promise<Response>): Promise<Response> {
  const url = new URL(request.url);
  if (isOpenPath(url.pathname)) return next();

  const password = env.SITE_PASSWORD;
  if (!password) {
    return new Response("Zugang ist nicht eingerichtet (SITE_PASSWORD fehlt).", {
      status: 503,
      headers: { "Cache-Control": "no-store", "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  if (await isAuthorized(readCookie(request.headers.get("Cookie"), AUTH_COOKIE), password)) {
    const response = await next();
    const result = new Response(response.body, response);
    // Nur im eigenen Browser zwischenspeichern, nie in einem geteilten Cache.
    result.headers.set("Cache-Control", "private, no-cache");
    return result;
  }

  const login = new URL("/login", url);
  if (url.pathname !== "/") login.searchParams.set("next", `${url.pathname}${url.search}`);
  return new Response(null, { status: 302, headers: { Location: login.toString(), "Cache-Control": "no-store" } });
}

/** Verarbeitet das Login-Formular (POST /api/login). */
export async function handleLogin(request: Request, env: Env, delayMs = 700): Promise<Response> {
  const password = env.SITE_PASSWORD;
  if (!password) return new Response("Zugang ist nicht eingerichtet.", { status: 503 });

  const form = await request.formData().catch(() => null);
  const input = form?.get("passwort");
  const rawNext = form?.get("next");
  const next = safeNext(typeof rawNext === "string" && rawNext.length <= 500 ? rawNext : undefined);
  const url = new URL(request.url);

  const valid = typeof input === "string" && input.length >= 1 && input.length <= 200;
  if (!valid || !(await passwordMatches(input, password))) {
    // Kleine Bremse gegen automatisches Durchprobieren.
    await wait(delayMs);
    const retry = new URL("/login", url);
    retry.searchParams.set("fehler", "1");
    if (next !== "/") retry.searchParams.set("next", next);
    return new Response(null, { status: 303, headers: { Location: retry.toString(), "Cache-Control": "no-store" } });
  }

  const target = new URL(next, url);
  // Zweite Absicherung: nie auf eine fremde Herkunft weiterleiten.
  const destination = target.origin === url.origin ? target : new URL("/", url);
  const secure = url.protocol === "https:" ? "; Secure" : "";
  return new Response(null, {
    status: 303,
    headers: {
      Location: destination.toString(),
      "Cache-Control": "no-store",
      "Set-Cookie": `${AUTH_COOKIE}=${await sessionToken(password)}; Path=/; Max-Age=${AUTH_MAX_AGE}; HttpOnly; SameSite=Lax${secure}`,
    },
  });
}
