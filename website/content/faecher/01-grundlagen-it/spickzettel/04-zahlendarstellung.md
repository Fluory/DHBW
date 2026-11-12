## Auswendig können

| Basis | Stellenwerte (von rechts) |
|---|---|
| 2 | 1 · 2 · 4 · 8 · 16 · 32 · 64 · 128 · 256 · 512 · 1024 |
| 8 | 1 · 8 · 64 · 512 |
| 16 | 1 · 16 · 256 · 4096 |

Hexziffern: A = 10, B = 11, C = 12, D = 13, E = 14, F = 15.

## Umrechnen

**Basis b → dezimal:** jede Ziffer mal ihren Stellenwert, alles addieren.
1011₂ = 8 + 0 + 2 + 1 = **11**. 2F₁₆ = 2 · 16 + 15 = **47**.

**Dezimal → Basis b (Restwertmethode):** immer wieder durch b teilen, Reste **von unten nach oben** lesen.

| 13 : 2 | Rest |
|---|---|
| 13 → 6 | 1 |
| 6 → 3 | 0 |
| 3 → 1 | 1 |
| 1 → 0 | 1 |

13 = **1101₂**

**Binär ↔ Oktal / Hex:** Gruppen bilden, **immer von rechts**. 3 Bit = 1 Oktalziffer, 4 Bit = 1 Hexziffer.
0110 0100₂ = **64₁₆**. 001 100 100₂ = **144₈**. Beides = 100.

## Binär addieren

- 0 + 0 = 0 · 0 + 1 = 1 · 1 + 1 = 0, Übertrag 1 · 1 + 1 + 1 = 1, Übertrag 1
- Übertrag aus der Spalte rechts immer mitzählen.

## Negative Zahlen: Zweierkomplement (feste Bitbreite!)

1. Positive Zahl in n Bit schreiben: 25 = 0001 1001
2. Alle Bits umdrehen: 1110 0110
3. Plus 1: **1110 0111 = −25**

**Ablesen:** Ganz links eine 1 → negativ. Umdrehen + 1 ergibt den Betrag, Minus davor.
8 Bit: Bereich **−128 … +127**. Allgemein −2ⁿ⁻¹ … 2ⁿ⁻¹ − 1.

## Subtrahieren

a − b = a + (Zweierkomplement von **b**). Übertrag links aus den n Bit fällt weg.

30 − 45: 0001 1110 + 1101 0011 (= −45) = 1111 0001 = **−15** ✓

## Überlauf

Das Ergebnis passt nicht in den Bereich. Erkennbar am Vorzeichen:

- plus + plus = minus → Überlauf
- minus + minus = plus → Überlauf
- plus + minus → nie ein Überlauf

127 + 127 = 254: in 8 Bit **ohne** Vorzeichen ok, im 8-Bit-Zweierkomplement Überlauf.

## Kommazahlen

Nachkommateil fortlaufend **mal 2**, die Ziffer vor dem Komma ist das nächste Bit, von **oben nach unten** lesen.
0,625 · 2 = 1,25 → 1 · 0,25 · 2 = 0,5 → 0 · 0,5 · 2 = 1,0 → 1 ⇒ **0,101₂**

## Typische Fehler

- Stellen von links zählen. Die letzte Stelle hat immer den Wert 1 (Position 0).
- Gruppen von links bilden statt von rechts.
- Restwertmethode von oben gelesen statt von unten.
- Beim Zweierkomplement die +1 vergessen, oder das Komplement von der falschen Zahl gebildet.
- 1110 0111 als 231 lesen, obwohl es eine Zahl mit Vorzeichen ist.
- Hinter dem Komma durch 2 teilen statt mal 2 nehmen.
- Probe vergessen: Ergebnis zurück ins Dezimalsystem rechnen.
