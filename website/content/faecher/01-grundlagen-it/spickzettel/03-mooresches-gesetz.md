## Original (1965)

- Die **Anzahl** der Transistoren (Komponenten) pro Chip **verdoppelt sich jährlich**; später korrigiert auf **alle zwei Jahre**.
- Grund für den Preiseffekt: Fläche ist der wichtigste Kostenfaktor. Mehr Transistoren pro Fläche = mehr Leistung fürs gleiche Geld.

## Drei Interpretationen (nicht von Moore)

1. Leistung von **Mikroprozessoren** verdoppelt sich alle 18 Monate.
2. Leistung von **Computern** verdoppelt sich alle 18 Monate.
3. **Preis** für rechnergestützte Informationsverarbeitung **halbiert** sich alle 18 Monate.

| | Was ändert sich? | Zeitraum |
|---|---|---|
| Original | Anzahl Transistoren pro Chip ×2 | jährlich, später 2 Jahre |
| Interpretationen | Leistung ×2 bzw. Preis ÷2 | 18 Monate |

## Mit Verdopplungen rechnen

Faktor = 2 hoch (t / T). t = gesamter Zeitraum, T = Zeit für eine Verdopplung, t / T = Anzahl Verdopplungen.

1. t / T = Anzahl der Verdopplungen.
2. 2 hoch diese Anzahl = Wachstumsfaktor.
3. Startwert × Faktor.

| Verdopplungen | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 10 |
|---|---|---|---|---|---|---|---|---|
| Faktor | 1 | 2 | 4 | 8 | 16 | 32 | 64 | 1 024 |

- 1 Mrd. Transistoren, 10 Jahre, T = 2: 10 / 2 = 5 → 2⁵ = 32 → **32 Mrd.**
- 12 Jahre, T = 2: 6 Verdopplungen → 2⁶ = 64 → **64 Mrd.**
- 6 Jahre, T = 18 Monate: 6 / 1,5 = 4 → Faktor **16**.

## Grenzen und Auswege

- **Grenzen:** Kosten pro Transistor steigen bei immer kleineren Strukturen wieder; Energiebedarf und Kühlung wachsen mit der Rechenleistung.
- **Auswege:** neue Materialien und Lithographie-Verfahren, 3D-Chipdesign, Quantencomputer, Skalierung über viele GPUs, Cluster, Rechenzentren.
- Größenordnung: aktueller KI-Chip ca. 208 Mrd. Transistoren.

## Multiple Choice: Bewertung

- Mindestens eine Antwort ist immer richtig.
- Jede richtige Entscheidung (angekreuzt **oder** nicht angekreuzt) +½, jede falsche −½. Negative Summe = 0. Nichts ankreuzen = 0.
- 4 Optionen, alles richtig entschieden: 4 × ½ = **2 P.** Eine falsche zusätzlich angekreuzt: 3 × ½ − ½ = **1 P.**
- Vorgehen: jede Option Wort für Wort lesen, das eine falsche Wort suchen (verdreifacht/verdoppelt, Speicher/Leistung, Größe/Anzahl), einzeln entscheiden.

## Fünf Treiber des Fortschritts

1. Mooresches Gesetz und Mikroprozessorleistung
2. Digitale Massenspeicher: Kapazität steigt, Preise fallen; Datenmenge verdoppelt sich grob jedes Jahr
3. Gesetz von Metcalfe: Nutzen eines Netzes wächst überproportional mit der Teilnehmerzahl
4. Sinkende Kommunikationskosten und Wachstum des Internets
5. Standardisierung (ASCII, Ethernet, TCP/IP, HTTP): kompatible Geräte, sinkende Preise

## Metcalfe rechnen

Verbindungen = n · (n − 1). n = Teilnehmerzahl; jeder erreicht die n − 1 anderen (A→B und B→A getrennt gezählt).

| n | 8 | 9 | 10 | 11 | 20 |
|---|---|---|---|---|---|
| n · (n − 1) | 56 | 72 | 90 | 110 | 380 |

Doppelt so viele Teilnehmer (10 → 20) → gut viermal so viele Verbindungen.

## Typische Fehler

- „Original: Leistung verdoppelt sich alle 18 Monate.“ Das ist eine Interpretation.
- Verdreifacht statt verdoppelt.
- „Speicherkapazität verdoppelt sich“: keine Interpretation.
- „Größe eines Transistors halbiert sich“: es geht um die Anzahl.
- „Kosten verdoppeln sich“: sie halbieren sich.
- „Taktfrequenz verdoppelt sich“: keine Interpretation.
- 5 Verdopplungen als 5 × 2 = 10 rechnen statt 2⁵ = 32.
- Bei „zwei Grenzen und zwei Auswege“ nur Auswege nennen.
- Metcalfe „exponentiell“ nachrechnen wollen: die Formel n · (n − 1) wächst quadratisch.
