// Spickzettel prüfen und als PDF ablegen.
// Server muss laufen, z. B. `pnpm build && SITE_PASSWORD=lokaltest pnpm start --port 3100`.
//   node scripts/spickzettel-seiten.mjs [fach-slug ...]         prüft: jeder Spickzettel = genau eine A4-Seite
//   node scripts/spickzettel-seiten.mjs --pdf [fach-slug ...]   legt zusätzlich die PDFs in public/spickzettel/ ab
//                                                               (je Kapitel und je Fach) und aktualisiert manifest.json
// Umgebung: BASE_URL (Standard http://localhost:3100), SITE_PASSWORD (Standard lokaltest).
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const args = process.argv.slice(2);
const writePdf = args.includes("--pdf");
const only = new Set(args.filter((arg) => !arg.startsWith("--")));
const base = process.env.BASE_URL ?? "http://localhost:3100";
const password = process.env.SITE_PASSWORD ?? "lokaltest";
const websiteDir = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const root = path.join(websiteDir, "content", "faecher");
const outDir = path.join(websiteDir, "public", "spickzettel");
const manifestFile = path.join(outDir, "manifest.json");
const sha = (text) => crypto.createHash("sha256").update(text).digest("hex");

const subjects = [];
for (const dir of fs.readdirSync(root).sort()) {
  const slug = dir.replace(/^\d{2}-/, "");
  if (only.size > 0 && !only.has(slug)) continue;
  const sheetDir = path.join(root, dir, "spickzettel");
  if (!fs.existsSync(sheetDir)) continue;
  const sheets = fs
    .readdirSync(sheetDir)
    .filter((file) => file.endsWith(".md"))
    .sort()
    .map((file) => ({
      chapter: file.replace(/^\d{2}-/, "").replace(/\.md$/, ""),
      file: `${dir}/spickzettel/${file}`,
      hash: sha(fs.readFileSync(path.join(sheetDir, file), "utf8")),
    }));
  if (sheets.length > 0) subjects.push({ slug, sheets });
}

const token = crypto.createHmac("sha256", password).update("semester-1-session").digest("hex");
const browser = await chromium.launch();
const context = await browser.newContext();
await context.addCookies([{ name: "semester-auth", value: token, url: base }]);
const page = await context.newPage();

async function render(url) {
  const response = await page.goto(url, { waitUntil: "networkidle" });
  if (!response || !response.ok()) throw new Error(`HTTP ${response?.status()} für ${url}`);
  await page.emulateMedia({ media: "print" });
  const pdf = await page.pdf({ format: "A4", preferCSSPageSize: true, printBackground: true });
  await page.emulateMedia({ media: "screen" });
  return pdf;
}
const countPages = (pdf) => (pdf.toString("latin1").match(/\/Type\s*\/Page[^s]/g) ?? []).length;

const manifest = fs.existsSync(manifestFile) ? JSON.parse(fs.readFileSync(manifestFile, "utf8")) : {};
let failed = 0;
let total = 0;
for (const subject of subjects) {
  for (const sheet of subject.sheets) {
    total += 1;
    let pdf;
    try {
      pdf = await render(`${base}/${subject.slug}/${sheet.chapter}/spickzettel`);
    } catch (error) {
      console.log(`FEHLER  ${sheet.file}: ${error.message}`);
      failed += 1;
      continue;
    }
    const pages = countPages(pdf);
    const ok = pages === 1;
    if (!ok) failed += 1;
    console.log(`${ok ? "ok     " : "ZU LANG"} ${pages} Seite(n)  ${sheet.file}`);
    if (writePdf && ok) {
      fs.mkdirSync(path.join(outDir, subject.slug), { recursive: true });
      fs.writeFileSync(path.join(outDir, subject.slug, `${sheet.chapter}.pdf`), pdf);
      manifest[`${subject.slug}/${sheet.chapter}`] = sheet.hash;
    }
  }
  if (writePdf) {
    const all = await render(`${base}/${subject.slug}/spickzettel`);
    const pages = countPages(all);
    if (pages !== subject.sheets.length) {
      console.log(`FEHLER  ${subject.slug}: Gesamt-PDF hat ${pages} Seiten statt ${subject.sheets.length}`);
      failed += 1;
    } else {
      fs.writeFileSync(path.join(outDir, `${subject.slug}.pdf`), all);
      manifest[subject.slug] = sha(subject.sheets.map((sheet) => sheet.hash).join(""));
      console.log(`ok      Gesamt-PDF ${subject.slug} (${pages} Seiten)`);
    }
  }
}
await browser.close();
if (writePdf) {
  const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
  fs.writeFileSync(manifestFile, `${JSON.stringify(sorted, null, 2)}\n`);
}
console.log(failed === 0 ? `Alle ${total} Spickzettel passen auf eine Seite.` : `${failed} Problem(e) bei ${total} Spickzetteln.`);
process.exit(failed === 0 ? 0 : 1);
