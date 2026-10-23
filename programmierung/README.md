# Grundlagen der Programmierung

Moodle: [Kurs 18617](https://moodle.heilbronn.dhbw.de/course/view.php?id=18617) · Kalender-Titel: „Grundlagen Programmierung“ · Dozent: Dr. Markus Rosenfelder · Prüfung: Klausur 120 Min (11.12.2026)

Agenda laut VL 1: Einführung → Variablen, Datentypen, Operatoren → Kontrollstrukturen → Funktionen
und Rekursion → OOP I–III → Standardbibliothek → Klausurvorbereitung. Werkzeuge: Texteditor,
Terminal, `uv`, Python 3.14, `ruff`, `ty` – bewusst ohne IDE und ohne KI-Assistent.

## Fortschritt

| Nr | Datum | Thema | Grundlage | Notiz |
|---|---|---|---|---|
| 1 | 05.10.2026 | Kennenlernen, Organisatorisches & Einführung | Folien „Vorlesung 1 – Einführung“ | [01](vorlesungen/01_2026-10-05.md) |
| 2 | 09.10.2026 | Variablen, Datentypen und Operatoren | Folien „Vorlesung 2“ | [02](vorlesungen/02_2026-10-09.md) |
| 3 | 13.10.2026 | Kontrollstrukturen und Listen | Folien „Vorlesung 3“ | [03](vorlesungen/03_2026-10-13.md) |
| 4 | 16.10.2026 | Funktionen (Parameter, Rückgabe, main, Gültigkeit, Übergabe), Standardwerte, Rekursion, Testen mit pytest | Folien „vl04_funktionen_rekursion“ | [04](vorlesungen/04_2026-10-16.md) |
| 5 | 23.10.2026 | OOP I (Klassen, Objekte, self, Klassenattribute, Kapselung/Property, dataclass) und vermutlich OOP II (Vererbung, Überschreiben, Polymorphie, abstrakte Klassen) | Folien „vl05_oop_1“ + „vl06_oop_2“ | [05](vorlesungen/05_2026-10-23.md) |

## Materialien in Moodle

| Material | Link | gesehen am | genutzt für |
|---|---|---|---|
| Vorlesung 1 – Einführung (Folien) | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=189987) | 06.10.2026 | Termin 1 |
| Vorlesung 2 – Variablen, Datentypen und Operatoren (Folien) | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=189988) | 06.10.2026 | Termin 2 |
| Vorlesung 3 – Kontrollstrukturen (Folien) | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=189989) | 06.10.2026 | Termin 3 |
| Vorlesung 2 – Lösungen als Python-Dateien (ZIP, 5 Dateien) | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=190620) | 13.10.2026 | Termin 2 (Musterlösungen) |
| Vorlesung 1 – Einführung (Folien, Neufassung) | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=190866) | 16.10.2026 | Termin 1 |
| Vorlesung 1 – Folien als HTML mit Animationen | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=190867) | 16.10.2026 | Termin 1 (interaktiv) |
| Vorlesung 1 – Lösungen als Python-Dateien | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=190868) | 16.10.2026 | Termin 1 (Musterlösungen) |
| Vorlesung 3 – Folien als HTML mit Animationen | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=190869) | 16.10.2026 | Termin 3 (interaktiv) |
| Vorlesung 3 – Lösungen als Python-Dateien (ZIP) | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=190870) | 16.10.2026 | Termin 3 (Musterlösungen) |
| Vorlesung 4 – Funktionen und Rekursion (Folien) | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=190871) | 16.10.2026 | Termin 4 |
| Vorlesung 4 – Folien als HTML mit Animationen | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=190872) | 16.10.2026 | Termin 4 (interaktiv) |
| Vorlesung 4 – Lösungen als Python-Dateien (ZIP) | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=190873) | 16.10.2026 | Termin 4 (Musterlösungen) |
| Vorlesung 5 – Objektorientierte Programmierung I (Folien) | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=190874) | 16.10.2026 | Termin 5 |
| Vorlesung 5 – Folien als HTML mit Animationen | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=190875) | 16.10.2026 | Termin 5 |
| Vorlesung 5 – Lösungen als Python-Dateien | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=190876) | 16.10.2026 | Termin 5 |
| Vorlesung 2 – Folien als HTML mit Animationen | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=191318) | 23.10.2026 | Termin 2 (interaktiv) |
| Vorlesung 2 – Selbsttest-Quiz (HTML) | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=191319) | 23.10.2026 | Termin 2 (Selbsttest) |
| Vorlesung 3 – Selbsttest-Quiz (HTML) | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=191320) | 23.10.2026 | Termin 3 (Selbsttest) |
| Vorlesung 4 – Selbsttest-Quiz (HTML) | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=191321) | 23.10.2026 | Termin 4 (Selbsttest) |
| Vorlesung 5 – Selbsttest-Quiz (HTML) | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=191322) | 23.10.2026 | Termin 5 (Selbsttest) |
| Vorlesung 6 – Objektorientierte Programmierung II (Folien) | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=191323) | 23.10.2026 | Termin 5 (vermutlich nachmittags) |
| Vorlesung 6 – Folien als HTML mit Animationen | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=191324) | 23.10.2026 | Termin 5 (interaktiv) |
| Vorlesung 6 – Lösungen als Python-Dateien (ZIP) | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=191325) | 23.10.2026 | Termin 5 (Musterlösungen) |
| Vorlesung 6 – Selbsttest-Quiz (HTML) | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=191326) | 23.10.2026 | Termin 5 (Selbsttest) |

## Eigene Notizen

<!-- Hier kannst du selbst Korrekturen eintragen, z. B. „Termin 3 fiel aus“ oder „Heute nur Übung“.
     Die Routine liest diesen Abschnitt und überschreibt ihn nie. -->
