# Content-Spezifikation · Semester-Website

Alle Texte liegen als reines Markdown (GFM) in `website/content/`. Jede Datei muss auf github.com sauber lesbar sein **und** wird von der Website gerendert. Vorbild für den Aufbau ist das Repo `Fluory/DeepResearch` (Bibliothek → Bände → Kapitel → Recherche-Dossier), aber ohne Esoterik: schlicht, sachlich, für das Lernen gemacht.

## Struktur

```
website/content/
  prolog.md                      # Einstieg: das Semester in einer Seite
  faecher/
    01-grundlagen-it/
      _fach.md                   # Metadaten des Fachs + Einleitung „Zu diesem Fach“
      01-<kapitel-slug>.md       # Kapitel, Reihenfolge über Präfix + `order`
      02-<kapitel-slug>.md
      quellen.md                 # Quellen-Dossier: woraus das Fach zusammengestellt ist
      spickzettel/
        01-<kapitel-slug>.md     # optional: Spickzettel, gleicher Dateiname wie das Kapitel
    02-wirtschaftsinformatik/
    …
```

Feste Ordner und Nummern (Reihenfolge = Klausurtermin):

| Nr | Ordner | Fach |
|---|---|---|
| 1 | `01-grundlagen-it` | Grundlagen der IT |
| 2 | `02-wirtschaftsinformatik` | Einführung in die Wirtschaftsinformatik |
| 3 | `03-programmierung` | Grundlagen der Programmierung |
| 4 | `04-recht` | Vertrags- und Schuldrecht |
| 5 | `05-bwl` | Einführung in die BWL |
| 6 | `06-marketing` | Marketing |
| 7 | `07-mathematik` | Mathematik I |
| 8 | `08-lernen-praesentieren` | Lernen, Präsentieren und Kommunizieren |

## Frontmatter

`_fach.md`

```yaml
number: 1                     # 1–8, siehe Tabelle
slug: "grundlagen-it"         # = Ordnername ohne Nummernpräfix
title: "Grundlagen der IT"
short: "GIT"                  # Kürzel, 2–6 Großbuchstaben
dozent: "Gisbert Loff"
pruefung: "Klausur, 48 Minuten"
pruefungsdatum: "2026-12-07"  # ISO-Datum; beim Portfolio das Abgabedatum
moodle: 18618                 # Moodle-Kurs-ID
stand: "fertig"               # fertig | laeuft | vorbereitet  (vorbereitet = Vorlesung noch nicht oder kaum gelaufen)
description: "1–2 Sätze, worum es im Fach geht."
```

Kapitel `NN-<slug>.md`

```yaml
title: "Zahlensysteme und Zweierkomplement"
order: 1
summary: "1–2 Sätze, worum es geht."
klausur: "relevant"           # relevant | teilweise | nicht-relevant
```

`quellen.md`: `title: "Quellen: <Fach>"`, `summary`.
`prolog.md`: `title`, `summary`.

## Markdown-Regeln

- Kein H1 im Body (Titel kommt aus dem Frontmatter). Gliederung ab `##`, darunter `###`.
- Erlaubt: GFM (Tabellen, Fußnoten `[^1]`, Aufgabenlisten), Blockzitate, Code-Blöcke mit Sprache (` ```python `), `---`.
- Kein rohes HTML, kein MDX, keine Bilder.
- Formeln als Unicode-Text (x², √, Σ, ≤, →, ½), keine LaTeX-Syntax.
- Hervorgehobene Blöcke als GitHub-Alerts. Erste Zeile im Block = fettes Label:

| Alert | Bedeutung | Beispiel-Label |
|---|---|---|
| `> [!IMPORTANT]` | Das Wichtigste / Merksatz | `**Das Wichtigste**` |
| `> [!WARNING]` | Achtung: typische Fehler und Klausurfallen | `**Achtung**` |
| `> [!NOTE]` | Beispiel oder Einordnung | `**Beispiel: Die Bäckerei**` |
| `> [!TIP]` | Übung oder Lernhinweis | `**Übung 1**` |
| `> [!CAUTION]` | Nicht klausurrelevant / nur Hintergrund | `**Nicht klausurrelevant**` |

## Aufbau eines Kapitels

1. Ein bis zwei Einstiegsabsätze: Worum geht es, warum braucht man das? Mit einem konkreten Alltagsbeispiel.
2. Abschnitte (`##`) je Thema, jeweils: **Was ist das?** (eigene Worte, Beispiel mit Zahlen oder Code) → `> [!IMPORTANT]` Das Wichtigste → `> [!WARNING]` Achtung.
3. Rechenverfahren als nummerierte Schritte mit vollständig durchgerechnetem Beispiel.
4. `## Übungen`: 3–6 Aufgaben (leicht bis Prüfungsniveau), jede als `> [!TIP]` mit Label `**Übung N · leicht|mittel|Prüfungsniveau**` und Quellenangabe (z. B. „Skript, Übung 26“, „Musterklausur 2025, A5“, „eigene Aufgabe“).
5. `## Lösungen`: zu jeder Übung `### Übung N` mit Lösung Schritt für Schritt. Die Website zeigt jede Lösung als kleinen Aufklapper „Lösung“ direkt unter ihrer Übung (Zuordnung über die Nummer). Probeklausuren: Aufgaben als `### Aufgabe N …`, Lösungen als `### Aufgabe N` oder `### Lösung Aufgabe N …` unter `## Lösungen …`; die Lösung erscheint am Ende des Aufgaben-Abschnitts.

Die Zusammenfassung (am Kapitelende und unter `/<fach>/zusammenfassung`) baut die Website selbst: Der Inhalt aller `[!IMPORTANT]`-Kästen wird je Abschnitt zu Stichpunkten, die `[!WARNING]`-Kästen stehen eingerückt darunter als „Typische Fehler“.

## Karteikarten und Quiz

Pro Fach optional `faecher/NN-<slug>/karteikarten.json`:

```json
{
  "cards": [
    { "id": "git-k001", "topic": "Zahlendarstellung", "front": "Frage oder Begriff", "back": "Antwort, 1–4 kurze Sätze oder eine Mini-Rechnung", "exam": true }
  ],
  "quiz": [
    { "id": "git-q001", "topic": "Logik", "q": "Frage", "code": "optional: Python-Code, \\n für Zeilenumbrüche",
      "options": ["A", "B", "C", "D"], "correct": 2, "explain": "1–2 Sätze, warum" }
  ]
}
```

- `id` ist dauerhaft (der Lernstand im Browser hängt daran): nie umnummerieren, neue Einträge bekommen die nächste freie Nummer, gelöschte Nummern werden nicht wiederverwendet. Präfixe: `git`, `wi`, `prog`, `recht`, `bwl`, `mkt`, `mathe`, `lpk`.
- `topic` sollte einem Kapitelthema entsprechen. `exam: true` = typischer oder offizieller Klausurpunkt; Inhalte, die laut Klausurhinweis nicht drankommen, haben `exam: false` und das Topic „Nicht klausurrelevant“.
- Texte: Inline-Markdown (`**fett**`, `*kursiv*`, `` `code` ``), Zeilenumbruch `\n`, Formeln als Unicode. Kein HTML.
- Quiz: genau 4 Optionen, `correct` ist der Index 0–3, falsche Optionen sind typische Fehler.

## Spickzettel

Pro Kapitel optional `faecher/NN-<slug>/spickzettel/NN-<kapitel-slug>.md` (gleicher Dateiname wie das Kapitel, Probeklausuren haben keinen). Seite: `/<fach>/<kapitel>/spickzettel`, alle eines Fachs unter `/<fach>/spickzettel`.

- Kein Frontmatter (Titel kommt vom Kapitel), kein H1, Gliederung mit `##`.
- Muss beim Drucken auf **eine DIN-A4-Seite** passen (zweispaltig). Höchstens 650 Wörter (prüft der Build); ob es wirklich passt, prüft `node scripts/spickzettel-seiten.mjs [fach]` gegen einen laufenden Server.
- Stichpunkte, kompakte Tabellen, Formeln mit Bedeutung der Symbole, Rechenwege als kurze Schritte mit Mini-Beispiel. Keine Alerts/Kästen. Letzter Abschnitt `## Typische Fehler`.
- Nur, was im Kapitel steht.

## Greifbar erklären (gilt für jedes neue Konzept)

Die Folien der Vorlesung sind oft formal und schwer verständlich. Die Website übersetzt sie. Jedes Konzept wird in dieser Reihenfolge erklärt, erst die Anschauung, dann die Formel:

1. **In einem Satz:** was es ist, in Alltagssprache, ohne Fachwort.
2. **Stell dir vor:** ein konkretes Bild aus dem Alltag (Treppe, Konto, Pizza, Wasserhahn, Sitzplätze, Warteschlange …), das wirklich zur Mathematik passt.
3. **Mit Zahlen:** eine kleine Tabelle oder Rechnung, an der man das Verhalten sieht, bevor es allgemein formuliert wird.
4. **Die Formel:** erst jetzt, und jedes Symbol wird in Worten erklärt („q ist der Faktor, mit dem jedes Mal malgenommen wird“).
5. **So steht es auf der Folie:** die formale Schreibweise der Vorlesung und darunter „Auf Deutsch heißt das: …“. Symbole werden vorgelesen (Σ = „Summe von … bis …“, lim = „wohin läuft es, wenn …“, ∈ = „liegt in“).
6. **So rechnest du:** nummerierte Schritte mit vollständigem Beispiel.
7. **Typischer Fehler** als `> [!WARNING]`.

Dazu: Jeder Gedankenschritt steht einzeln da, nichts wird „offensichtlich“ übersprungen. Fachwörter werden beim ersten Auftreten erklärt. Lieber ein Beispiel mehr als ein Satz Theorie mehr.

## Stil

- Deutsch, Du-Form, kurze Sätze, aktiv. Erst einfach, dann genau.
- Sachlich: keine Metaphern über Tiefe, Licht, Reisen oder Verwandlung, keine Esoterik, kein Pathos.
- Nichts erfinden. Was nur vermutet ist (z. B. Vorlesung noch nicht gehalten), wird so gesagt.
- Zahlen und Code geprüft (Python), offizielle Lösungen als solche gekennzeichnet.
- Texte sind öffentlich lesbar: keine personenbezogenen Details über Kommilitonen; Dozentennamen nur im Frontmatter.
- Kein Material aus Moodle wörtlich übernehmen (Urheberrecht): eigene Erklärungen, Aufgaben sinngemäß.
