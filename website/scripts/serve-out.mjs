// Kleiner statischer Server für den Export in out/ (für scripts/spickzettel-seiten.mjs und lokale Kontrolle).
// Ohne Login: Den Passwortschutz übernimmt erst Cloudflare (functions/_middleware.ts).
// Aufruf: node scripts/serve-out.mjs [port]   (Standard 3100)
import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..", "out");
const port = Number(process.argv[2] ?? 3100);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".pdf": "application/pdf",
  ".woff2": "font/woff2",
  ".png": "image/png",
};

function resolve(urlPath) {
  const clean = decodeURIComponent(urlPath.split("?")[0]);
  const base = path.join(root, path.normalize(clean));
  if (!base.startsWith(root)) return null;
  for (const candidate of [base, `${base}.html`, path.join(base, "index.html")]) {
    if (existsSync(candidate) && statSync(candidate).isFile()) return candidate;
  }
  return null;
}

createServer((request, response) => {
  const file = resolve(request.url ?? "/");
  if (!file) {
    const notFound = path.join(root, "404.html");
    response.writeHead(404, { "Content-Type": types[".html"] });
    if (existsSync(notFound)) createReadStream(notFound).pipe(response);
    else response.end("Nicht gefunden");
    return;
  }
  response.writeHead(200, { "Content-Type": types[path.extname(file)] ?? "application/octet-stream" });
  createReadStream(file).pipe(response);
}).listen(port, () => console.log(`out/ auf http://localhost:${port}`));
