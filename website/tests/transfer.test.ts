import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { assertProtectedHost } from "@/lib/hosting";
import { isOpenPath } from "@/lib/auth";

// Schutz gegen unnötigen Datenverkehr durch den Passwortschutz (README, Abschnitt „Datenverkehr“).
const root = path.resolve(__dirname, "..");

function sourceFiles(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return sourceFiles(full);
    return /\.(tsx?|jsx?)$/.test(entry.name) ? [full] : [];
  });
}

describe("Datenverkehr durch den Passwortschutz", () => {
  it("nutzt nur den Link ohne automatisches Vorladen", () => {
    const offenders = [...sourceFiles(path.join(root, "app")), ...sourceFiles(path.join(root, "components"))]
      .filter((file) => !file.endsWith(path.join("components", "site", "Link.tsx")))
      .filter((file) => /from\s+["']next\/link["']/.test(fs.readFileSync(file, "utf8")))
      .map((file) => path.relative(root, file));
    expect(offenders).toEqual([]);
  });

  it("lädt im Link standardmäßig nichts vor und setzt nirgends prefetch", () => {
    const link = fs.readFileSync(path.join(root, "components", "site", "Link.tsx"), "utf8");
    expect(link).toMatch(/prefetch = false/);
    const eager = [...sourceFiles(path.join(root, "app")), ...sourceFiles(path.join(root, "components"))]
      .filter((file) => /prefetch(=\{true\}|\s*=\s*\{?["']auto|\.prefetch\()/.test(fs.readFileSync(file, "utf8")))
      .map((file) => path.relative(root, file));
    expect(eager).toEqual([]);
  });

  it("nimmt nur Unvertrauliches von den Functions aus", () => {
    const routes = JSON.parse(fs.readFileSync(path.join(root, "public", "_routes.json"), "utf8"));
    expect(routes.include).toEqual(["/*"]);
    expect(routes.exclude).toEqual(["/_next/static/*", "/icon.svg", "/robots.txt"]);
    // Was ausgenommen ist, muss auch der Schutz selbst als offen kennen – sonst wäre die Liste falsch.
    expect(isOpenPath("/_next/static/chunks/a.js")).toBe(true);
    expect(isOpenPath("/icon.svg")).toBe(true);
    expect(isOpenPath("/robots.txt")).toBe(true);
    expect(isOpenPath("/spickzettel/mathematik.pdf")).toBe(false);
    // Gleiche Liste für den Worker (wrangler.jsonc, JSON mit Kommentaren).
    const wrangler = JSON.parse(
      fs.readFileSync(path.join(root, "wrangler.jsonc"), "utf8").replace(/^\s*\/\/.*$/gm, ""),
    );
    expect(wrangler.assets.run_worker_first).toEqual(["/*", "!/_next/static/*", "!/icon.svg", "!/robots.txt"]);
  });

  it("sperrt Suchmaschinen per robots.txt aus", () => {
    expect(fs.readFileSync(path.join(root, "public", "robots.txt"), "utf8")).toBe("User-agent: *\nDisallow: /\n");
  });

  it("baut nicht auf Vercel, weil dort kein Passwortschutz liefe", () => {
    expect(() => assertProtectedHost({ VERCEL: "1" })).toThrow(/Vercel/);
    expect(() => assertProtectedHost({ CF_PAGES: "1" })).not.toThrow();
    const vercel = JSON.parse(fs.readFileSync(path.join(root, "vercel.json"), "utf8"));
    expect(vercel.git.deploymentEnabled).toBe(false);
  });
});
