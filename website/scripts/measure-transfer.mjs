// Misst, wie viele Bytes ein typischer Besuch durch den Passwortschutz schickt.
// Alles, was der Schutz prüft (alles außer /_next/static/*, /_next/image und /icon.svg), läuft über
// Rechenzeit (früher Vercel-Middleware, heute Cloudflare Pages Functions) statt direkt aus dem CDN.
//
// Server muss laufen, z. B. `pnpm build && node scripts/serve-out.mjs 3100`.
//   node scripts/measure-transfer.mjs                 Besuch: Start → Fach → Kapitel → Zusammenfassung → Alles lesen → Lernpfad
//   node scripts/measure-transfer.mjs --json          dasselbe als JSON (für Vergleiche)
// Umgebung: BASE_URL (Standard http://localhost:3100), SITE_PASSWORD (Standard lokaltest),
//           VISIT (Pfade mit Komma getrennt), MAX_GATE_MB (Grenze in MB unkomprimiert: Exit 1, wenn der erste Besuch mehr schickt).
//
// Gezählt wird je Antwort: Header + Body, einmal gzip-komprimiert (wie ein CDN ausliefert) und einmal
// unkomprimiert (obere Schätzung: Vercel komprimiert erst im CDN, zwischen CDN und Rechenzeit fließt der
// rohe Body). So sind ein Server ohne Kompression (serve-out.mjs) und next start vergleichbar.
import zlib from "node:zlib";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const base = process.env.BASE_URL ?? "http://localhost:3100";
const password = process.env.SITE_PASSWORD ?? "lokaltest";
const visit = (process.env.VISIT ?? "/,/mathematik,/mathematik/folgen,/mathematik/zusammenfassung,/mathematik/alles,/mathematik/lernpfad")
  .split(",")
  .map((item) => item.trim())
  .filter(Boolean);
const asJson = process.argv.includes("--json");
const maxGateMb = process.env.MAX_GATE_MB ? Number(process.env.MAX_GATE_MB) : undefined;

/** Pfade, die der Passwortschutz nicht anfasst (siehe public/_routes.json und lib/auth.ts). */
export function passesGate(pathname) {
  return !(pathname.startsWith("/_next/static/") || pathname.startsWith("/_next/image") || pathname === "/icon.svg");
}

const isText = (type) => /text|javascript|json|svg|xml|x-component/.test(type ?? "");

async function run() {
  const browser = await chromium.launch({ executablePath: process.env.PW_CHROMIUM_PATH || undefined });
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });

  // Anmelden (bei serve-out.mjs gibt es keinen Login; dann zählt nur der Besuch).
  const login = await context.request.post(`${base}/api/login`, {
    form: { passwort: password, next: "/" },
    maxRedirects: 0,
    failOnStatusCode: false,
  });
  const loggedIn = login.status() === 303;

  async function measure(label) {
    const page = await context.newPage();
    const pending = [];
    page.on("requestfinished", (request) => {
      pending.push(
        (async () => {
          const response = await request.response();
          if (!response) return null;
          const url = new URL(request.url());
          if (url.origin !== new URL(base).origin) return null;
          const sizes = await request.sizes();
          // Aus dem Browser-Cache (ohne Anfrage an den Server) meldet Chromium eine negative Body-Größe.
          if (sizes.responseBodySize < 0) return null;
          const type = response.headers()["content-type"];
          let body = sizes.responseBodySize;
          let rawBody = sizes.responseBodySize;
          if (response.status() === 200) {
            const raw = await response.body().catch(() => null);
            if (raw && raw.length > 0) {
              rawBody = raw.length;
              if (isText(type)) {
                const encoded = response.headers()["content-encoding"];
                body = encoded ? sizes.responseBodySize : zlib.gzipSync(raw).length;
              }
            }
          }
          return {
            path: url.pathname + url.search,
            status: response.status(),
            gate: passesGate(url.pathname),
            rsc: request.headers()["rsc"] === "1" || url.pathname.endsWith(".txt"),
            bytes: sizes.responseHeadersSize + body,
            rawBytes: sizes.responseHeadersSize + rawBody,
            cacheControl: response.headers()["cache-control"] ?? "",
          };
        })(),
      );
    });

    // Jede Seite wird direkt aufgerufen (wie aus Lesezeichen oder neuem Tab); das hält die Messung
    // reproduzierbar. Prefetches der sichtbaren Links zählen trotzdem mit.
    for (const target of visit) {
      await page.goto(`${base}${target}`, { waitUntil: "networkidle" });
      // Wie beim Lesen: einmal bis ans Ende scrollen, damit Links im Sichtfeld auftauchen.
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 700) {
          window.scrollTo(0, y);
          await new Promise((resolve) => setTimeout(resolve, 40));
        }
      });
      await page.waitForLoadState("networkidle");
      await page.waitForTimeout(400);
    }
    await page.close();
    const entries = (await Promise.all(pending)).filter(Boolean);
    const gate = entries.filter((entry) => entry.gate);
    const sum = (list) => list.reduce((total, entry) => total + entry.bytes, 0);
    return {
      label,
      requests: entries.length,
      gateRequests: gate.length,
      gateRscRequests: gate.filter((entry) => entry.rsc).length,
      gateBytes: sum(gate),
      gateRawBytes: gate.reduce((total, entry) => total + entry.rawBytes, 0),
      gateRscBytes: sum(gate.filter((entry) => entry.rsc)),
      cdnBytes: sum(entries.filter((entry) => !entry.gate)),
      largest: [...gate].sort((a, b) => b.rawBytes - a.rawBytes).slice(0, 8),
      all: gate,
    };
  }

  const first = await measure("erster Besuch");
  const repeat = await measure("zweiter Besuch (Browser-Cache)");
  await browser.close();

  const result = { base, loggedIn, visit, first, repeat };
  if (asJson) {
    console.log(JSON.stringify(result, null, 2));
  } else {
    const mb = (bytes) => (bytes / 1_000_000).toFixed(2);
    console.log(`Basis ${base} · Login ${loggedIn ? "ja" : "nein (Server ohne Login)"} · Besuch: ${visit.join(" → ")}`);
    for (const part of [first, repeat]) {
      console.log(
        `${part.label}: ${part.gateRequests} Anfragen durch den Schutz (${part.gateRscRequests} RSC/Prefetch), ` +
          `${mb(part.gateBytes)} MB gzip (${mb(part.gateRawBytes)} MB unkomprimiert), davon ${mb(part.gateRscBytes)} MB RSC · ` +
          `aus dem CDN ${mb(part.cdnBytes)} MB`,
      );
      for (const entry of part.largest) console.log(`   ${mb(entry.rawBytes)} MB  ${entry.status}  ${entry.path}`);
    }
  }
  if (maxGateMb !== undefined && first.gateRawBytes / 1_000_000 > maxGateMb) {
    console.error(`Zu viel: ${(first.gateRawBytes / 1_000_000).toFixed(2)} MB > ${maxGateMb} MB je Besuch.`);
    process.exitCode = 1;
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
