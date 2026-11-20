import { describe, expect, it } from "vitest";
import { AUTH_COOKIE, handleLogin, handleRequest, isAuthorized, isOpenPath, passwordMatches, readCookie, safeNext, sessionToken } from "@/lib/auth";

const env = { SITE_PASSWORD: "geheim" };
const page = () => Promise.resolve(new Response("Inhalt", { headers: { "Content-Type": "text/html" } }));

function loginRequest(fields: Record<string, string>): Request {
  const body = new FormData();
  for (const [key, value] of Object.entries(fields)) body.set(key, value);
  return new Request("https://semester.example/api/login", { method: "POST", body });
}

describe("Passwortschutz", () => {
  it("vergleicht Passwörter exakt", async () => {
    expect(await passwordMatches("geheim", "geheim")).toBe(true);
    expect(await passwordMatches("Geheim", "geheim")).toBe(false);
    expect(await passwordMatches("", "geheim")).toBe(false);
  });

  it("erkennt gültige und ungültige Cookies (Wert wie bisher: HMAC-SHA256)", async () => {
    const token = await sessionToken("geheim");
    expect(token).toMatch(/^[0-9a-f]{64}$/);
    expect(await isAuthorized(token, "geheim")).toBe(true);
    expect(await isAuthorized(token, "anderes")).toBe(false);
    expect(await isAuthorized("irgendwas", "geheim")).toBe(false);
    expect(await isAuthorized(undefined, "geheim")).toBe(false);
  });

  it("liest Cookies und kennt die offenen Pfade", () => {
    expect(readCookie("a=1; semester-auth=xyz; b=2", AUTH_COOKIE)).toBe("xyz");
    expect(readCookie(null, AUTH_COOKIE)).toBeUndefined();
    expect(isOpenPath("/login")).toBe(true);
    expect(isOpenPath("/_next/static/chunks/a.js")).toBe(true);
    expect(isOpenPath("/grundlagen-it")).toBe(false);
    expect(isOpenPath("/spickzettel/bwl.pdf")).toBe(false);
  });

  it("leitet nur auf Pfade dieser Website weiter", () => {
    expect(safeNext("/bwl/rechnungswesen")).toBe("/bwl/rechnungswesen");
    expect(safeNext("//evil.example")).toBe("/");
    expect(safeNext("https://evil.example")).toBe("/");
    expect(safeNext("/\\evil.example")).toBe("/");
    expect(safeNext("/login?fehler=1")).toBe("/");
    expect(safeNext("/api/login")).toBe("/");
    expect(safeNext("/\t/evil.example")).toBe("/");
    expect(safeNext("/\n/evil.example")).toBe("/");
    expect(safeNext("/bwl?x=1#a")).toBe("/bwl?x=1#a");
    expect(safeNext(undefined)).toBe("/");
  });

  it("sperrt ohne Passwort-Variable und ohne Cookie", async () => {
    const locked = await handleRequest(new Request("https://semester.example/bwl"), {}, page);
    expect(locked.status).toBe(503);
    const redirect = await handleRequest(new Request("https://semester.example/bwl/rechnungswesen"), env, page);
    expect(redirect.status).toBe(302);
    expect(redirect.headers.get("Location")).toBe("https://semester.example/login?next=%2Fbwl%2Frechnungswesen");
    const pdf = await handleRequest(new Request("https://semester.example/spickzettel/bwl.pdf"), env, page);
    expect(pdf.status).toBe(302);
  });

  it("lässt mit gültigem Cookie durch und speichert nicht geteilt", async () => {
    const cookie = `${AUTH_COOKIE}=${await sessionToken("geheim")}`;
    const ok = await handleRequest(new Request("https://semester.example/bwl", { headers: { Cookie: cookie } }), env, page);
    expect(ok.status).toBe(200);
    expect(await ok.text()).toBe("Inhalt");
    const cacheControl = ok.headers.get("Cache-Control") ?? "";
    expect(cacheControl).toBe("private, max-age=300, must-revalidate");
    // Nie in einem geteilten Cache: kein public, kein s-maxage.
    expect(cacheControl.split(",")[0].trim()).toBe("private");
    expect(cacheControl).not.toMatch(/public|s-maxage/);
    const open = await handleRequest(new Request("https://semester.example/login"), env, page);
    expect(open.status).toBe(200);
  });

  it("setzt beim richtigen Passwort den Cookie und leitet nur intern weiter", async () => {
    const good = await handleLogin(loginRequest({ passwort: "geheim", next: "/bwl" }), env, 0);
    expect(good.status).toBe(303);
    expect(good.headers.get("Location")).toBe("https://semester.example/bwl");
    const cookie = good.headers.get("Set-Cookie") ?? "";
    expect(cookie).toContain(`${AUTH_COOKIE}=${await sessionToken("geheim")}`);
    expect(cookie).toContain("HttpOnly");
    expect(cookie).toContain("Secure");

    const evil = await handleLogin(loginRequest({ passwort: "geheim", next: "//evil.example" }), env, 0);
    expect(evil.headers.get("Location")).toBe("https://semester.example/");

    const bad = await handleLogin(loginRequest({ passwort: "falsch", next: "/bwl" }), env, 0);
    expect(bad.status).toBe(303);
    expect(bad.headers.get("Location")).toBe("https://semester.example/login?fehler=1&next=%2Fbwl");
    expect(bad.headers.get("Set-Cookie")).toBeNull();
  });
});
