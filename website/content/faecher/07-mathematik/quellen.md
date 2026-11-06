---
title: "Quellen: Mathematik I"
summary: "Woraus die Kapitel zusammengestellt sind: Foliensätze und Aufgaben aus Moodle, Tafelbilder und eigene Mitschrift, eigene Lernseite. Stand 06.11.2026."
---

## Stand

Stand der Inhalte: **06.11.2026**. Abgedeckt sind die Termine vom 19.10. und 04.11.2026. Die Termine am 20.11. und 02.12. (vermutlich Differential- und Integralrechnung) sind noch nicht eingearbeitet.

## Offizielle Quellen (Moodle-Kurs 18613)

Diese Materialien stammen von den Dozenten. Sie sind nicht wörtlich übernommen; Erklärungen sind eigene, Aufgaben sinngemäß wiedergegeben.

| Quelle | Inhalt | Kapitel |
|---|---|---|
| Folien „Analysis – Folgen“, 19.10.2026 (35 Folien) | Folgen, Monotonie, Beschränktheit, Konvergenz, Rechenregeln, arithmetische und geometrische Folgen, Aufgaben F-1 bis F-6 | 2 |
| Folien „Analysis – Reihen + Funktionen“, 04.11.2026 (53 Folien; in Moodle mit Tippfehler „04.11.2027“) | Reihen, geometrische Reihe, Sparplan, ewige Rente, Funktionen, Grenzwerte, Stetigkeit, Aufgaben R-1 bis R-5 und FU-1 bis FU-8 | 3–7 |
| Modulhandbuch Wirtschaftsinformatik Heilbronn, Modul W4WI_108 | Klausur 120 Minuten, Modulinhalte | Zu diesem Fach |

Folienaufgaben sind als „Folien …, Aufgabe F-1“ usw. gekennzeichnet. Zu ihnen gibt es keine offiziellen Lösungen; alle Lösungen sind selbst gerechnet. Folien-Nummern wie „Folie 62“ stammen von Fotos in der Vorlesung.

## Eigene Quellen

- Eigene Mitschrift vom 04.11.2026 mit Tafelbildern (Periodenzahlen, Herleitung des Sparplans) und Rückfragen (Potenzabstand-Regel, „konvergent für alle x“).
- Eigene Notizen zum Termin vom 19.10.2026.
- Eigene Lernseite und eigener Kurs „Mathematik I“ (Klausurordner des Repos). Daraus stammen Erklärungen, Bilder wie die Sitzplätze bei injektiv/surjektiv und alle Aufgaben mit der Quelle „eigene Aufgabe“.
- Kapitel 1 ist Schulstoff. Die Formel für die Rate, das Quotientenkriterium als Rechenweg und die Umschreibung x²/(x + 1) = x − 1 + 1/(x + 1) sind Ergänzungen aus Lehrbüchern bzw. eigene Umformungen.

## Korrekturen gegenüber den Unterlagen

- Folie „Pseudozufallszahlen“ (F. 12): Die Folge lautet 3, 7, 8, 6, 1, 2, 0, 4, 5, 3.
- Folie 62: Mit der Zielmenge ℝ ist f nicht surjektiv. Für eine bijektive Funktion muss sie [−3, ∞) sein.
- Aufgabe FU-2 a: Dort steht (x + 1)/(x − x). Der Nenner ist immer 0, vermutlich ein Tippfehler. Die Aufgabe ist deshalb weggelassen.
- Folie „Beispiel: Sparplan“: Der Endwert ist ≈ 6464,67 €; die Folie rundet auf 6460 €.
- Folie „Unstetigkeiten“: sin(1/x) schwankt nicht unbeschränkt, sondern zwischen −1 und 1.

## Offen

- Ob Quotienten-, Leibniz- oder Vergleichskriterium Klausurstoff sind. Laut Auswertung stehen sie nicht auf den Folien; R-1 a und R-4 b brauchen aber ein solches Kriterium.
- Hilfsmittel in der Klausur.

## Wie die Zahlen geprüft wurden

Jede Zahl in den Beispielen und Lösungen wurde mit Python nachgerechnet (Brüche exakt mit `fractions`, Grenzwerte mit Zahlenproben nahe der Stelle).
