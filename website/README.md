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

## Entwicklung

```bash
pnpm install
pnpm dev                                    # http://localhost:3000 mit website/content
CONTENT_DIR=tests/fixtures/content pnpm dev # mit den Test-Fixtures
pnpm verify                                 # lint + typecheck + test + build
```

`CONTENT_DIR` (relativ zu `website/`) wählt den Content-Ordner; ohne Angabe gilt `content/`. Die Tests nutzen die Fixtures in `tests/fixtures/`, `tests/content-validation.test.ts` prüft zusätzlich den echten Content.

## Deployment

Vercel: Projekt aus dem Repo `fluory/dhbw` anlegen, **Root Directory `website`**, Framework Next.js, Build-Befehl `pnpm build`. Alle Seiten sind statisch; es gibt keine Umgebungsvariablen, die gesetzt werden müssen.

## Struktur

```
app/                 Routen (App Router), globals.css, Schriften
components/reader/   Markdown-Renderer, Callouts, Leser, Inhaltsverzeichnis, Fortschritt, Pager
components/site/     Kopf, Fuß, Badges, Countdown, Theme-Umschalter
lib/content/         Schema (zod) und Loader mit Validierung
lib/markdown/        unified-Pipeline: Alerts, Überschriften-IDs, Links, Lesezeit
tests/               vitest + Fixtures
```
