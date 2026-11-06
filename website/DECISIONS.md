# Entscheidungen

Jede Abhängigkeit mit einer Zeile Begründung. Vorbild ist die Architektur von DeepResearch; übernommen wurde nur der Kern (Markdown, Validierung, Leser), weggelassen alles Schwere (three.js, GSAP, Lenis, Audio, Zugangsschutz).

## Laufzeit-Abhängigkeiten

| Paket | Warum |
|---|---|
| `next` | App Router mit statischer Generierung (`generateStaticParams`, `dynamicParams = false`), `next/font` für selbst gehostete Schriften; Vercel-nativ. |
| `react`, `react-dom` | Von Next.js vorausgesetzt; Server Components halten die Markdown-Verarbeitung auf dem Server. |
| `gray-matter` | Robustes Frontmatter-Parsing für alle Markdown-Dateien. |
| `zod` | Validierung aller Frontmatter-Felder mit deutschen Fehlermeldungen. |
| `unified`, `remark-parse`, `remark-gfm`, `remark-rehype` | GFM inkl. Tabellen, Fußnoten und Aufgabenlisten; roher HTML-Code wird verworfen. |
| `hast-util-to-jsx-runtime` | Rendert den hast-Baum direkt als React (ohne `dangerouslySetInnerHTML`) und erlaubt eigene Komponenten für Callouts, Tabellen und Links. |
| `mdast-util-to-string`, `unist-util-visit` | Kleine Hilfen der unified-Familie für die eigenen Plugins (Alerts, Überschriften-IDs, Link-Umschreibung). |
| `github-slugger` | Überschriften-IDs identisch zu GitHub, damit Anker auf GitHub und auf der Website gleich sind. |

## Entwicklungs-Abhängigkeiten

| Paket | Warum |
|---|---|
| `typescript` (5.x) | Strict-Modus; 5.x, weil Next.js und typescript-eslint darauf abgestimmt sind. |
| `eslint` (9.x), `eslint-config-next` | Next-Regeln inkl. React-Hooks und Core Web Vitals; 9.x, weil `eslint-config-next` darauf abgestimmt ist. |
| `vitest` | Schnelle Tests für Schema, Loader, Markdown-Pipeline, Links, Datumslogik und den echten Content. |
| `@types/*` (`node`, `react`, `react-dom`, `hast`, `mdast`) | Typen für strict TypeScript. |

## Weitere Entscheidungen

- **Reines CSS statt Tailwind:** Die Seite hat wenige, wiederkehrende Bausteine (Karte, Badge, Callout, Leser). Ein Stylesheet mit Tokens als CSS-Variablen ist kürzer als Utility-Klassen in jedem Element, braucht keinen PostCSS-Schritt und keine zwei Abhängigkeiten, und das Dunkel-Schema ist nur ein zweiter Satz Variablen unter `[data-theme="dark"]`.
- **Hell ist Standard, unabhängig vom System:** Dunkel nur über den Umschalter, gemerkt in `localStorage`. Ein kleines Inline-Skript im `<head>` setzt die Wahl vor dem ersten Zeichnen (kein Aufblitzen). Hintergrund `#fbfbfa` statt Reinweiß, Text `#24272e` statt Schwarz, Callouts nur leicht getönt (`color-mix`, 7 %), damit lange Lernsitzungen nicht blenden.
- **Lesemaße:** 18 px Fließtext (17 px mobil), Zeilenhöhe 1,7, Spaltenbreite ca. 66 Zeichen. Kleiner Text im Signalton nutzt eine dunklere Variante (`--signal-ink`, AA-Kontrast); der Originalton `#b4652a` bleibt für Linien und Flächen.
- **Kein Grün:** Badges und Callouts nutzen nur Akzent (Blau), Signal (Orange) und Grau.
- **Kein Syntax-Highlighter:** Code-Blöcke sind ruhig gesetzt (Mono, Fläche, eigene Scrollleiste). Das spart Abhängigkeiten und Bundle.
- **Content-Root konfigurierbar:** Parameter von `scanContent`/`loadLibrary` oder `CONTENT_DIR`; Tests nutzen Fixtures, der Build `content/`.
- **Statische Parameter je Seite vollständig:** Jede Route erzeugt ihre Parameter selbst. Ein Fach ohne Kapitel oder ohne `quellen.md` verhindert so keine anderen Seiten; `/<fach>/quellen` existiert nur, wenn die Datei da ist.
- **Feste Fächer:** Ordner und Nummern sind im Schema hinterlegt (`SUBJECTS`); unbekannte Ordner oder falsche Nummern brechen den Build.
- **Countdown im Browser:** Statische Seiten würden sonst mit dem Build-Datum veralten; der Server rendert einen leeren Platzhalter (`useSyncExternalStore`), keine Hydration-Abweichung.
- **Content-Cache nach Dateisignatur** (wie DeepResearch): Der Loader liest nur neu ein, wenn sich Pfade, Größen oder Änderungszeiten ändern.
- **`agentRules: false`** in `next.config.ts`, damit `next dev` die `CLAUDE.md` nicht umschreibt; `turbopack.root` auf `website/`, weil die Website ein Unterordner des Repos ist.
