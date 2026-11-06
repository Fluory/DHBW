# CLAUDE.md · Website

- Prüfen: `pnpm verify` (lint + typecheck + test + build). Muss grün sein, bevor etwas als fertig gilt.
- Inhalte: Format und Regeln stehen in `CONTENT_SPEC.md`. Schema in `lib/content/schema.ts`, Validierung in `lib/content/loader.ts`.
- Tests nutzen `tests/fixtures/`; `tests/content-validation.test.ts` prüft den echten Content in `content/`.
- Content-Fehler meldet der Build mit Datei und Grund. Content nicht „passend machen“, ohne die Autorin bzw. den Auftrag zu fragen.
- Gestaltung: schlicht und ruhig. Keine Animationsbibliotheken, kein WebGL, keine Esoterik, kein Grün. Tokens nur in `app/globals.css` (`:root` und `[data-theme="dark"]`).
- Kein `dangerouslySetInnerHTML` für Inhalte (einzige Ausnahme: das Theme-Init-Skript im Layout). Neue Abhängigkeiten nur mit einer Zeile in `DECISIONS.md`.
- Paketmanager: pnpm.
