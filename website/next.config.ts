import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Next.js soll CLAUDE.md/AGENTS.md des Repos nicht automatisch umschreiben.
  agentRules: false,
  // website/ ist ein Unterordner des Repos: Wurzel festlegen, damit Next keine fremde Lockfile wählt.
  turbopack: { root: path.resolve(__dirname) },
  outputFileTracingRoot: path.resolve(__dirname),
  // Statischer Export für Cloudflare Pages: alle Seiten sind vorab gebaut, der Login läuft in functions/.
  output: "export",
};

export default nextConfig;
