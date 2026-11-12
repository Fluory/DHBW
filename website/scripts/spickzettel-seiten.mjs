// Prüft, ob jeder Spickzettel beim Drucken auf genau eine DIN-A4-Seite passt.
// Aufruf (Server läuft, z. B. `SITE_PASSWORD=lokaltest pnpm dev --port 3100`):
//   node scripts/spickzettel-seiten.mjs [fach-slug ...]
// Umgebung: BASE_URL (Standard http://localhost:3100), SITE_PASSWORD (Standard lokaltest), PDF_DIR (optional: PDFs ablegen).
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const base = process.env.BASE_URL ?? "http://localhost:3100";
const password = process.env.SITE_PASSWORD ?? "lokaltest";
const pdfDir = process.env.PDF_DIR;
const only = new Set(process.argv.slice(2));
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..", "content", "faecher");

const sheets = [];
for (const dir of fs.readdirSync(root).sort()) {
  const subjectSlug = dir.replace(/^\d{2}-/, "");
  if (only.size > 0 && !only.has(subjectSlug)) continue;
  const sheetDir = path.join(root, dir, "spickzettel");
  if (!fs.existsSync(sheetDir)) continue;
  for (const file of fs.readdirSync(sheetDir).sort()) {
    if (file.endsWith(".md")) sheets.push({ subjectSlug, chapter: file.replace(/^\d{2}-/, "").replace(/\.md$/, ""), file: `${dir}/spickzettel/${file}` });
  }
}

const token = crypto.createHmac("sha256", password).update("semester-1-session").digest("hex");
const browser = await chromium.launch();
const context = await browser.newContext();
await context.addCookies([{ name: "semester-auth", value: token, url: base }]);
const page = await context.newPage();
let failed = 0;
for (const sheet of sheets) {
  const url = `${base}/${sheet.subjectSlug}/${sheet.chapter}/spickzettel`;
  const response = await page.goto(url, { waitUntil: "networkidle" });
  if (!response || !response.ok()) {
    console.log(`FEHLER  ${sheet.file}: HTTP ${response?.status()}`);
    failed += 1;
    continue;
  }
  await page.emulateMedia({ media: "print" });
  const pdf = await page.pdf({ format: "A4", preferCSSPageSize: true, printBackground: true });
  await page.emulateMedia({ media: "screen" });
  const pages = (pdf.toString("latin1").match(/\/Type\s*\/Page[^s]/g) ?? []).length;
  if (pdfDir) {
    fs.mkdirSync(pdfDir, { recursive: true });
    fs.writeFileSync(path.join(pdfDir, `${sheet.subjectSlug}-${sheet.chapter}.pdf`), pdf);
  }
  const ok = pages === 1;
  if (!ok) failed += 1;
  console.log(`${ok ? "ok     " : "ZU LANG"} ${pages} Seite(n)  ${sheet.file}`);
}
await browser.close();
console.log(failed === 0 ? `Alle ${sheets.length} Spickzettel passen auf eine Seite.` : `${failed} von ${sheets.length} Spickzetteln passen nicht.`);
process.exit(failed === 0 ? 0 : 1);
