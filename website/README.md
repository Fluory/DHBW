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

Vercel: Projekt aus dem Repo `fluory/dhbw` anlegen, **Root Directory `website`**, Framework Next.js, Build-Befehl `pnpm build`. Alle Seiten sind statisch. Zu setzen ist `SITE_PASSWORD` (gemeinsames Passwort für den Login; ohne die Variable ist die Seite gesperrt, siehe `.env.example`).

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
