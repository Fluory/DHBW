---
title: "Quellen: Grundlagen der Programmierung"
summary: "Woraus die Kapitel zusammengestellt sind: Foliensätze, Selbsttest-Quizze und Musterlösungen aus Moodle, eigene Lernseite und Vorlesungsnotizen. Stand 06.11.2026."
---

## Stand

Stand der Inhalte: **06.11.2026**. Abgedeckt sind VL1 bis VL7. Der Rest von VL6 und der Start von VL7 waren für den 06.11. geplant; ob die Vorlesung genau so lief, ist noch nicht bestätigt. VL8 (Standardbibliothek) ist noch nicht eingearbeitet.

## Offizielle Quellen (Moodle-Kurs 18617)

Diese Materialien stammen vom Dozenten. Sie sind nicht wörtlich übernommen; Erklärungen und Aufgaben sind sinngemäß und in eigenen Worten.

| Quelle | Inhalt | Kapitel |
|---|---|---|
| Folien VL1 „Einführung“ (79 Folien) | Algorithmen, Datenstrukturen, Übersetzung, Werkzeuge | 1 |
| Folien VL2 „Variablen, Datentypen und Operatoren“ (95 Folien) | Typen, Variablen, Operatoren, Fehlerarten | 3 |
| Folien VL3 „Kontrollstrukturen“ (111 Folien) | if, match, while, for, Listen | 2, 4 |
| Folien VL4 „Funktionen und Rekursion“ (87 Folien) | Funktionen, Rekursion, Testen | 5 |
| Folien VL5 „Objektorientierte Programmierung I“ (64 Folien) | Klassen, Properties, @dataclass | 6 |
| Folien VL6 „Objektorientierte Programmierung II“ (60 Folien) | Vererbung, Polymorphie, ABC | 7 |
| Folien VL7 „Projekt: Ein kleiner Kaffeeshop“ (23 Folien) und Startpaket | Projektaufgabe Stufe 1–3 | 8 |
| Selbsttest-Quizze VL2 bis VL6 | Aufgaben „Was gibt das aus?“ | 3–7 |
| Musterlösungen VL1 bis VL6 (Python-Dateien) | Lösungen zu den Übungen der Folien | 1, 3–7 |

Foliennummern wie „F. 45“ beziehen sich auf den Foliensatz der jeweiligen Vorlesung. Übungen mit der Quelle „Übung N (sinngemäß)“ oder „Selbsttest-Quiz (sinngemäß)“ sind an offizielle Aufgaben angelehnt. Lösungen, die sich auf die Musterlösung stützen, sind im Text so gekennzeichnet.

## Eigene Quellen

- Eigene Lernseite „Python bis OOP“ und eigene Zusammenfassung Programmierung (Klausurordner des Repos). Daraus stammen die Erklärungen, Bilder im Kopf und der Abschnitt „for-Schleifen ganz langsam“.
- Eigene Vorlesungsnotizen zu den Terminen 1 bis 8 (05.10. bis 06.11.2026), darunter der Stand der Vorlesung.
- Alle Rundentabellen, alle Aufgaben mit der Quelle „eigene Aufgabe“ und der komplette Code zum Kaffeeshop sind eigene Arbeit. Eine offizielle Musterlösung zum Projekt gibt es erst nach dem Projekt. Die Klasse `Produkt` in Kapitel 8 ist eine vereinfachte eigene Fassung der Datei aus dem Startpaket.

## Bekannte Folienfehler

- VL4 F. 59: Im Python-Code zu h(p, q, x, y) fehlt `* y` (richtig: `5 * x - 3 * y`).
- VL6 F. 10: In einer `def`-Zeile fehlt der Doppelpunkt; so abgetippt gäbe es einen `SyntaxError`.

## Wie der Code geprüft wurde

Jedes Codebeispiel und jede Lösung wurde mit `python3 -I` (Python 3.13) ausgeführt. Die gezeigten Ausgaben sind echt und automatisch eingefügt. Der Kurs nutzt Python 3.14; Abweichungen in der Form von Fehlermeldungen sind möglich. In Fehlermeldungen heißt die Datei immer `beispiel.py`. Meldungen von `ruff` und `ty` sind nicht selbst erzeugt, sondern stammen von den Folien und aus den Musterlösungen.
