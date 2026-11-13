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
| 5 | 23.10.2026 | Wiederholung, Selbsttest-Quizze; OOP I bis Übung 3 (Klassen, Objekte, Methoden, self, Klassenattribute) – Properties, dataclass und OOP II folgen | Folien „vl05_oop_1“ (bis Folie 41) + Rückmeldung | [05](vorlesungen/05_2026-10-23.md) |
| 6 | 27.10.2026 | Rest OOP I: Kapselung/Properties (Ü4), Hat-ein, Module, @dataclass (Ü5) – korrigiert 06.11.: VL06 begann erst an Termin 7 | Folien „vl05_oop_1“ ab Folie 42 + Rückmeldung 03.11. | [06](vorlesungen/06_2026-10-27.md) |
| 7 | 03.11.2026 | Start OOP II: Vererbung, super(), Überschreiben, @override (VL06 Ü1–2) | Folien „vl06_oop_2“ Folie 1–29 + Rückmeldung („bei VL06 am Anfang, Übung 1“, dann Übung 2) | [07](vorlesungen/07_2026-11-03.md) |
| 8 | 06.11.2026 | Rest OOP II: Polymorphie, Typangabe vs. Objekt, Duck Typing, object/__repr__, ABC/@abstractmethod, Fähigkeiten (Ü3–5); vermutlich nachmittags Start VL07 Projekt „Kaffeeshop“ (Aufgabe, Startpaket, Stufe 1) | Folien „vl06_oop_2“ ab Folie 30 + „vl07_projekt_onlineshop“ Folie 1–13 (Sicherheit mittel); Nachtrag 09.11.: Wiederholungsmaterial „Fitnessstudio“ VL01–VL06 in der Notiz | [08](vorlesungen/08_2026-11-06.md) |
| 9 | 13.11.2026 | (vorbereitet) Projekt „Kaffeeshop“ (VL07): Stufe 1 Lager/Warenkorb/Bestellung, Stufe 2 Produktarten und Zahlungsarten, Stufe 3 Zusatz; Vorstellung und Musterlösung | Folien „vl07_projekt_onlineshop“ + Startpaket (Fortschritt vermutet, Sicherheit mittel) | [09](vorlesungen/09_2026-11-13.md) |

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
| Vorlesung 5 – Objektorientierte Programmierung I (Folien) | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=190874) | 16.10.2026 | Termin 5 (Folie 1–41), Termin 6 (ab Folie 42) |
| Vorlesung 5 – Folien als HTML mit Animationen | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=190875) | 16.10.2026 | Termin 5–6 |
| Vorlesung 5 – Lösungen als Python-Dateien | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=190876) | 16.10.2026 | Termin 5 (Ü1–3), Termin 6 (Ü4–5) |
| Vorlesung 2 – Folien als HTML mit Animationen | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=191318) | 23.10.2026 | Termin 2 (interaktiv) |
| Vorlesung 2 – Selbsttest-Quiz (HTML) | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=191319) | 23.10.2026 | Termin 2 (Selbsttest) |
| Vorlesung 3 – Selbsttest-Quiz (HTML) | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=191320) | 23.10.2026 | Termin 3 (Selbsttest) |
| Vorlesung 4 – Selbsttest-Quiz (HTML) | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=191321) | 23.10.2026 | Termin 4 (Selbsttest) |
| Vorlesung 5 – Selbsttest-Quiz (HTML) | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=191322) | 23.10.2026 | Termin 5 (Selbsttest) |
| Vorlesung 6 – Objektorientierte Programmierung II (Folien) | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=191323) | 23.10.2026 | Termin 7 (Folie 1–29, Ü1–2, laut Rückmeldung), Termin 8 (ab Folie 30, Ü3–5) |
| Vorlesung 6 – Folien als HTML mit Animationen | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=191324) | 23.10.2026 | Termin 7–8 (interaktiv) |
| Vorlesung 6 – Lösungen als Python-Dateien (ZIP) | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=191325) | 23.10.2026 | Termin 7 (Ü1–2), Termin 8 (Ü3–5, ausgewertet) |
| Vorlesung 6 – Selbsttest-Quiz (HTML) | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=191326) | 23.10.2026 | Termin 7–8 (Selbsttest) |
| Vorlesung 7 – Projekt Kaffeeshop (Folien) | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=191374) | 26.10.2026 | vermutlich Termin 8 nachmittags (Aufgabe + Stufe 1, ausgewertet 06.11.), Stufen 2–3 vermutlich Termin 9 – Projekt zu zweit |
| Vorlesung 7 – Projekt Kaffeeshop (Startpaket) | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=191372) | 26.10.2026 | Termin 8: VL07-Projekt (produkt.py, daten.py, main.py; gelesen 06.11.) |
| Vorlesung 8 – Standardbibliothek und Datenstrukturen (Folien) | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=191387) | 26.10.2026 | vermutlich Termin 9/10 (nach VL07; nicht im Detail ausgewertet) |
| Vorlesung 8 – Folien als HTML mit Animationen | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=191388) | 26.10.2026 | vermutlich Termin 9/10 (nach VL07; nicht im Detail ausgewertet) |
| Vorlesung 8 – Lösungen als Python-Dateien | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=191389) | 26.10.2026 | vermutlich Termin 9/10 (nach VL07; nicht im Detail ausgewertet) |
| Vorlesung 8 – Selbsttest-Quiz (HTML) | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=191390) | 26.10.2026 | vermutlich Termin 9/10 (nach VL07; nicht im Detail ausgewertet) |
| Vorlesung 5 – Prompt für KI-Lernpartner (Text, Stoff VL01–VL05) | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=191612) | 28.10.2026 | Klausurvorbereitung (Abfrage VL01–VL05) |
| Wiederholung VL01 bis VL06 – Fitnessstudio (Folien) | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=192161) | 09.11.2026 | Klausurvorbereitung VL01–VL06; zusammengefasst in Notiz 08 (ob am 06.11. gezeigt, unklar) |
| Wiederholung VL01 bis VL06 – Fitnessstudio (Beispielcode als Python-Dateien, ZIP) | [Link](https://moodle.heilbronn.dhbw.de/mod/resource/view.php?id=192162) | 09.11.2026 | Klausurvorbereitung VL01–VL06; `fitnessstudio.py` ausgeführt, siehe Notiz 08 |

## Prüfung (laut Veranstaltungs- und Prüfungsübersicht)

Quelle: „Veranstaltungs- und Prüfungsübersicht 1. Semester“ (Kurs „WI26A2: Infos für Studierende“, Link auf eine
Google-Tabelle, gesehen 12.11.2026) + Folien „Prüfungsrechtliche Regelungen“ (gesehen 12.11.2026).

- **Prüfungsform:** Klausur, **120 Minuten** (Grundlagen der Programmierung, Dr. Markus Rosenfelder).
- **Modul:** „Grundlagen der Programmierung“ (5 ECTS), Modulprüfung „Klausur oder Kombinierte Modulprüfung (Klausur
  und Assignment)“; die Lehrveranstaltung ist die einzige im Modul.
- **Punkte/Gewichtung:** **120 von 120 Punkten (100 %)** – die Klausur ist die ganze Modulnote (Klausurdauer in
  Minuten = maximale Punkte; bestanden ab Note 4,0).
- **Hilfsmittel:** in der Übersicht nicht angegeben.

## Eigene Notizen

<!-- Hier kannst du selbst Korrekturen eintragen, z. B. „Termin 3 fiel aus“ oder „Heute nur Übung“.
     Die Routine liest diesen Abschnitt und überschreibt ihn nie. -->
