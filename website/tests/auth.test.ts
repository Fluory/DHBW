import { describe, expect, it } from "vitest";
import { isAuthorized, passwordMatches, safeNext, sessionToken } from "@/lib/auth";

describe("Passwortschutz", () => {
  it("vergleicht Passwörter exakt", () => {
    expect(passwordMatches("geheim", "geheim")).toBe(true);
    expect(passwordMatches("Geheim", "geheim")).toBe(false);
    expect(passwordMatches("", "geheim")).toBe(false);
  });

  it("erkennt gültige und ungültige Cookies", () => {
    const token = sessionToken("geheim");
    expect(isAuthorized(token, "geheim")).toBe(true);
    expect(isAuthorized(token, "anderes")).toBe(false);
    expect(isAuthorized("irgendwas", "geheim")).toBe(false);
    expect(isAuthorized(undefined, "geheim")).toBe(false);
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
});
