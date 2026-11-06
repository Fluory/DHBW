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
5. `## Lösungen`: zu jeder Übung `### Übung N` mit Lösung Schritt für Schritt.

## Stil

- Deutsch, Du-Form, kurze Sätze, aktiv. Erst einfach, dann genau.
- Sachlich: keine Metaphern über Tiefe, Licht, Reisen oder Verwandlung, keine Esoterik, kein Pathos.
- Nichts erfinden. Was nur vermutet ist (z. B. Vorlesung noch nicht gehalten), wird so gesagt.
- Zahlen und Code geprüft (Python), offizielle Lösungen als solche gekennzeichnet.
- Texte sind öffentlich lesbar: keine personenbezogenen Details über Kommilitonen; Dozentennamen nur im Frontmatter.
- Kein Material aus Moodle wörtlich übernehmen (Urheberrecht): eigene Erklärungen, Aufgaben sinngemäß.
