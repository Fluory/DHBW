# Semester 1 · Website

Der Stoff des ersten Semesters Wirtschaftsinformatik (Data Science) an der DHBW Heilbronn als ruhige Lese-Bibliothek: acht Fächer, je Fach Kapitel mit Beispielen, Übungen und Lösungen, dazu ein Quellen-Dossier und ein Prolog.

Aufbau nach dem Vorbild von DeepResearch (Markdown → validiert → statisch generiert), aber schlicht: keine Animationen, kein WebGL, kein Zugangsschutz.

## Inhalte

Alle Texte liegen als Markdown in [`content/`](content/). Format und Regeln: [`CONTENT_SPEC.md`](CONTENT_SPEC.md). Jede Datei wird beim Build gegen das Schema geprüft; ein Fehler bricht den Build mit Datei und Grund ab. Fehlende Fächer sind erlaubt.

## Routen

| Route | Inhalt |
|---|---|
| `/` | Übersicht: Fächer mit Stand, Prüfungsdatum und Countdown, Prüfungsplan |
| `/prolog` | `content/prolog.md` |
| `/<fach>` | Fach: Dozent, Prüfung, Moodle-Link, „Zu diesem Fach“, Kapitelliste |
| `/<fach>/<kapitel>` | Leser mit Inhaltsverzeichnis, Lesefortschritt, Lesezeit, Vor/Zurück |
| `/<fach>/quellen` | Quellen-Dossier des Fachs |
| `/<fach>/lernen` | Lernen-Bereich des Fachs (nur wenn `karteikarten.json` existiert): Tabs Karteikarten, Quiz, Feynman (`#karteikarten`, `#quiz`, `#feynman`) |
| `/lernen` | Alle Fächer mit Lernstand, gemischtes Quiz (15 Fragen über alle Fächer), kurze Lernmethoden |

## Lernen-Bereich

Quelle sind die optionalen `karteikarten.json` je Fach (Format: `CONTENT_SPEC.md`, Abschnitt „Karteikarten und Quiz“). Der Loader prüft sie mit zod (IDs eindeutig im Fach und fachübergreifend, genau 4 Optionen, `correct` 0–3, keine leeren Texte); Fehler brechen `pnpm verify`. Texte laufen über die Markdown-Pipeline (`lib/markdown/inline.ts`, `\n` = Zeilenumbruch), Code als `<pre><code>`.

- **Karteikarten:** Frage zeigen, „Antwort zeigen“ (Leertaste/Enter), selbst bewerten: Nicht gewusst / Unsicher / Wusste ich (Tasten 1/2/3). Leitner-Fächer je Karten-ID; Reihenfolge Nicht gewusst → Neu → Unsicher → Sitzt. Filter nach Thema, Klausurpunkten und Wackelkandidaten, Rundenende mit „Neue Runde“, Lernstand zurücksetzen.
- **Quiz:** 10 zufällige oder alle Fragen, Antwort per Klick oder A–D/1–4, sofort Auflösung mit Erklärung, Bestwert je Fach, „Falsche wiederholen“.
- **Feynman:** zieht einen Klausurpunkt, der noch nicht sitzt; eigene Erklärung schreiben, mit den Unterlagen vergleichen, vier Selbstprüf-Fragen mit Link zum passenden Kapitel, Bewertung geht in dieselben Fächer.

Der Lernstand liegt nur im Browser (`localStorage`, Schlüssel `semester-lernen-v1:*`), ohne Konto und ohne Server. Die Logik (Reihenfolge, Filter, Auswertung, Bestwerte) steht testbar in `lib/lernen/`, die Oberfläche in `components/lernen/`.

## Entwicklung

```bash
pnpm install
pnpm dev                                    # http://localhost:3000 mit website/content
CONTENT_DIR=tests/fixtures/content pnpm dev # mit den Test-Fixtures
pnpm verify                                 # lint + typecheck + test + build
```

`CONTENT_DIR` (relativ zu `website/`) wählt den Content-Ordner; ohne Angabe gilt `content/`. Die Tests nutzen die Fixtures in `tests/fixtures/`, `tests/content-validation.test.ts` prüft zusätzlich den echten Content.

## Deployment

**Cloudflare Pages** (seit 20.11.2026; Vercel war wegen des Datenlimits im kostenlosen Tarif pausiert).
Die Website ist ein statischer Export (`output: "export"` → `out/`). Den Passwortschutz übernehmen
Pages Functions in `functions/` (`_middleware.ts` prüft jede Anfrage, `api/login.ts` setzt den Cookie),
die Logik steht in `lib/auth.ts` und ist getestet.

**Weg A, Cloudflare Workers (empfohlen):** `wrangler.jsonc` + `worker/index.ts` liefern `out/` als statische Assets
aus, der Worker prüft vorher den Login. Workers & Pages → Create → Import a repository → `Fluory/DHBW`:
Build command `pnpm build`, Deploy command `npx wrangler deploy`, Path `/website`, Build-Variablen
`NODE_VERSION` = `22` und `PNPM_VERSION` = `10.28.0`. Nach dem ersten Deploy unter Settings → Variables and Secrets
`SITE_PASSWORD` als **Secret** anlegen (bis dahin zeigt die Seite „Zugang ist nicht eingerichtet“).

**Weg B, Cloudflare Pages:** Einstellungen im Projekt (Workers & Pages → Create → „Looking to deploy Pages?“ → Connect to Git → `Fluory/DHBW`):

- Production branch: `main`
- Framework preset: None · Build command: `pnpm build` · Build output directory: `out`
- Root directory: `website`
- Variablen: `NODE_VERSION` = `22`, `PNPM_VERSION` = `10.28.0`, `SITE_PASSWORD` = gemeinsames Passwort
  (als Secret). Ohne `SITE_PASSWORD` ist die Seite gesperrt.

`public/_routes.json` nimmt `/_next/static/*` von den Functions aus (spart Aufrufe), `public/_headers` setzt
die Sicherheits-Header. Lokal ansehen: `pnpm build && node scripts/serve-out.mjs 3100` (ohne Login).

## Datenverkehr (Kostenbremse)

Vercel hat das Konto im November 2026 pausiert (14,45 von 10 GB „Fast Origin Transfer“ im kostenlosen Tarif).
Laut Vercel zählt dazu jeder Byte zwischen CDN und Rechenzeit, auch Middleware („Fast Origin Transfer is
incurred when using several Vercel products including Vercel Functions, Middleware, Blob and Data Cache“,
<https://vercel.com/docs/manage-cdn-usage>, gelesen 20.11.2026). Hier lief jede Seite durch `proxy.ts`, mit
`private, no-store` (kein Browser-Cache) und Prefetch jedes sichtbaren Links.

Auf Cloudflare Pages kostet jede Anfrage, die die Functions startet (also alles außer `public/_routes.json` →
`exclude`), ein Stück vom Tageskontingent (kostenlos 100.000 Anfragen pro Tag); statische Dateien ohne Function
sind frei. Gemessen mit `scripts/measure-transfer.mjs` (Besuch: Start → Fach → Kapitel → Zusammenfassung →
Alles lesen → Lernpfad, lokal gebauter Export):

| Stand | Anfragen durch den Schutz | Bytes durch den Schutz (unkomprimiert / gzip) | zweiter Besuch |
|---|---|---|---|
| Vercel mit `proxy.ts` (bis 19.11.) | ca. 35–45 | ca. 6 MB / 1,4 MB | genauso viel (`no-store`) |
| Export mit Prefetch (20.11. früh) | ca. 130 | ca. 11,6 MB / 2,7 MB | genauso viel |
| jetzt | 6 | 3,3 MB / 0,7 MB | 0 innerhalb von 5 Minuten |

Zwei Regeln für jede Änderung:

1. **Kein Vorladen.** Interne Links nur über `@/components/site/Link` (lädt erst beim Klick), nie `next/link`
   direkt und nie `prefetch`. `tests/transfer.test.ts` prüft das.
2. **Nur Unvertrauliches am Schutz vorbei.** `public/_routes.json` nimmt nur `/_next/static/*`, `/icon.svg` und
   `robots.txt` aus; geschützte Antworten tragen `private, max-age=300, must-revalidate` (nur der eigene
   Browser, nie ein geteilter Cache). PDFs und Seiten bleiben hinter dem Login.

Nachmessen: `pnpm build && node scripts/serve-out.mjs 3100`, dann in einem zweiten Terminal
`node scripts/measure-transfer.mjs` (braucht Playwright mit Chromium; `MAX_GATE_MB=5` lässt den Lauf
scheitern, wenn ein Besuch mehr als 5 MB unkomprimiert durch den Schutz schickt). Die echten Zahlen stehen nur
im Cloudflare-Dashboard (Workers & Pages → Projekt → Metriken).

Nicht auf Vercel bauen: Der Export hätte dort keinen Passwortschutz. `vercel.json` schaltet Git-Deployments ab,
und `next.config.ts` bricht einen Build mit `VERCEL=1` ab (`lib/hosting.ts`).

## Struktur

```
app/                 Routen (App Router), globals.css, Schriften
components/reader/   Markdown-Renderer, Callouts, Leser, Inhaltsverzeichnis, Fortschritt, Pager
components/site/     Kopf, Fuß, Badges, Countdown, Theme-Umschalter
lib/content/         Schema (zod) und Loader mit Validierung
lib/markdown/        unified-Pipeline: Alerts, Überschriften-IDs, Links, Lesezeit, Inline-Texte
lib/lernen/          Leitner-Logik, Quiz-Auswertung, Thema→Kapitel, Speicher im Browser
components/lernen/   Karteikarten, Quiz, Feynman, Tabs, Übersicht
tests/               vitest + Fixtures
```
