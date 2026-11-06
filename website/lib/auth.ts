import { createHash, createHmac, timingSafeEqual } from "node:crypto";

/** Name des Cookies, der den Zugang merkt. */
export const AUTH_COOKIE = "semester-auth";
/** Wie lange ein Login gilt (Sekunden): 30 Tage. */
export const AUTH_MAX_AGE = 60 * 60 * 24 * 30;

/** Das gemeinsame Passwort kommt nur aus der Umgebung (`SITE_PASSWORD`), nie aus dem Code. */
export function getSitePassword(): string | null {
  const value = process.env.SITE_PASSWORD;
  return value && value.length > 0 ? value : null;
}

const digest = (value: string) => createHash("sha256").update(value).digest();

/** Vergleich in konstanter Zeit, unabhängig von der Länge der Eingaben. */
export function passwordMatches(input: string, password: string): boolean {
  return timingSafeEqual(digest(input), digest(password));
}

/** Wert des Cookies: HMAC über eine feste Zeichenkette, abgeleitet vom Passwort. Ändert sich das Passwort, verfallen alle Logins. */
export function sessionToken(password: string): string {
  return createHmac("sha256", password).update("semester-1-session").digest("hex");
}

export function isAuthorized(cookieValue: string | undefined, password: string): boolean {
  if (!cookieValue) return false;
  return passwordMatches(cookieValue, sessionToken(password));
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
