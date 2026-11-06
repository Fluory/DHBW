---
title: "Zahlendarstellung und Rechnen"
order: 4
summary: "Umrechnen zwischen den Zahlensystemen 2, 8, 10 und 16, binär addieren, negative Zahlen im Zweierkomplement, Subtraktion, Überlauf und Kommazahlen."
klausur: "relevant"
---

Ein Kilometerzähler im Auto hat eine feste Zahl von Stellen. Fährst du bei 999 999 einen Kilometer weiter, springt er auf 000 000. Genau so arbeitet ein Rechner: Jede Zahl hat eine feste Anzahl von Bits, und was nicht hineinpasst, fällt vorne heraus.

Ein Computer kennt nur zwei Zustände: Spannung oder keine Spannung, also 1 oder 0. Deshalb muss er jede Zahl im Binärsystem darstellen. In der Klausur sind es 3 Punkte, aber der Dozent sagt ausdrücklich: „Das ist Übungssache.“ Gefragt werden drei Dinge: Umrechnen zwischen den Basen 2, 8, 10 und 16, binäres Rechnen mit positiven und negativen ganzen Zahlen und die Darstellung von Kommazahlen. Rechne alles ohne Taschenrechner.

## Stellenwertsysteme

**Was ist das?** Bei einem Stellenwertsystem hängt der Wert einer Ziffer von ihrer Position ab. Jede Stelle hat den Wert **Basis hoch Position**, gezählt von rechts ab 0. Aus dem Alltag kennst du das Dezimalsystem: 235 = 2 · 10² + 3 · 10¹ + 5 · 10⁰.

| System | Basis | Ziffern | 235 dezimal ist … |
|---|---|---|---|
| Binär (Dual) | 2 | 0, 1 | 1110 1011 |
| Oktal | 8 | 0–7 | 353 |
| Dezimal | 10 | 0–9 | 235 |
| Hexadezimal | 16 | 0–9, A=10, B=11, C=12, D=13, E=14, F=15 | EB |

Acht Bit sind ein Byte. Jede der acht Stellen hat einen festen Wert:

```text
Stellenwert: 128  64  32  16   8   4   2   1
Bits:          0   1   0   0   0   0   0   1   = 64 + 1 = 65
```

Mit 8 Bit gibt es 2⁸ = 256 Muster: die Zahlen 0 bis 255 ohne Vorzeichen.

> [!IMPORTANT]
> **Das Wichtigste**
> Lerne auswendig: Zweierpotenzen 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024. Achterpotenzen 1, 8, 64, 512. Sechzehnerpotenzen 1, 16, 256, 4096. Hexziffern A = 10 bis F = 15.

> [!WARNING]
> **Achtung**
> Die Position zählt von rechts und beginnt bei 0. Die letzte Stelle hat immer den Wert 1.

## Umrechnen

### Beliebige Basis → dezimal

1. Über jede Ziffer den Stellenwert schreiben (von rechts: 1, b, b², …).
2. Jede Ziffer mit ihrem Stellenwert multiplizieren.
3. Alles addieren.

**Durchgerechnetes Beispiel:** 1110 1011₂

```text
128  64  32  16   8   4   2   1
  1   1   1   0   1   0   1   1   →  128 + 64 + 32 + 8 + 2 + 1 = 235
```

Genauso: 353₈ = 3 · 64 + 5 · 8 + 3 · 1 = 192 + 40 + 3 = 235. Und EB₁₆ = 14 · 16 + 11 · 1 = 224 + 11 = 235.

### Dezimal → Basis b (Restwertmethode)

1. Die Zahl ganzzahlig durch die Basis teilen. Den Rest notieren.
2. Mit dem Ergebnis weiterrechnen, bis 0 herauskommt.
3. Die Reste **von unten nach oben** lesen.

**Durchgerechnetes Beispiel:** 235 ins Binärsystem

```text
235 : 2 = 117  Rest 1   ← letzte Stelle
117 : 2 =  58  Rest 1
 58 : 2 =  29  Rest 0
 29 : 2 =  14  Rest 1
 14 : 2 =   7  Rest 0
  7 : 2 =   3  Rest 1
  3 : 2 =   1  Rest 1
  1 : 2 =   0  Rest 1   ← erste Stelle
von unten nach oben: 1110 1011
```

Und ins Hexadezimalsystem: 235 : 16 = 14 Rest 11 (B), 14 : 16 = 0 Rest 14 (E). Von unten gelesen: EB₁₆.

### Binär ↔ Oktal und Hex über Gruppen

Weil 8 = 2³ und 16 = 2⁴ ist, entspricht eine Oktalziffer genau drei Bit und eine Hexziffer genau vier Bit.

1. Die Bits **von rechts** in Gruppen teilen: Dreiergruppen für Oktal, Vierergruppen für Hex.
2. Links mit Nullen auffüllen, bis die erste Gruppe voll ist.
3. Jede Gruppe einzeln umrechnen.

**Durchgerechnetes Beispiel:** 100 dezimal = 0110 0100₂

- Hex: 0110 | 0100 → 6 | 4 → **64₁₆**.
- Oktal: von rechts 001 | 100 | 100 → 1 | 4 | 4 → **144₈**.
- Probe: 1 · 64 + 4 · 8 + 4 = 100 ✓

Zwischen Oktal und Hex rechnest du am einfachsten über den Umweg Binär.

> [!IMPORTANT]
> **Das Wichtigste**
> Nach dezimal: Stellenwerte addieren. Von dezimal: durch die Basis teilen, Reste von unten lesen. Binär ↔ Oktal/Hex: Gruppen von 3 bzw. 4 Bit, immer von rechts.

> [!WARNING]
> **Achtung**
> Gruppen nie von links bilden. Bei 0110 0100 ergibt das von links 011 | 001 | 00 und damit eine falsche Zahl. Mach immer die Probe zurück ins Dezimalsystem.

## Binär addieren

**Was ist das?** Du addierst schriftlich wie im Dezimalsystem, von rechts nach links und mit Übertrag. Es gibt nur vier Regeln:

| Rechnung | Ergebnis | Übertrag |
|---|---|---|
| 0 + 0 | 0 | 0 |
| 0 + 1 | 1 | 0 |
| 1 + 1 | 0 | 1 |
| 1 + 1 + 1 | 1 | 1 |

**Durchgerechnetes Beispiel:** 0001 1110 + 1101 0011

```text
Überträge:        1 1 1 1
              0 0 0 1 1 1 1 0
            + 1 1 0 1 0 0 1 1
            = 1 1 1 1 0 0 0 1
```

Schreib die Überträge klein über die nächste Spalte links, dann vergisst du keinen.

Im Rechner hat jede Zahl eine feste Bitbreite. 127 + 127 = 254 zeigt: Das Ergebnis kann ein Bit mehr brauchen als die Summanden. 127 = 111 1111 passt in 7 Bit, 254 = 1111 1110 braucht 8 Bit.

> [!IMPORTANT]
> **Das Wichtigste**
> 1 + 1 = 0, Übertrag 1. 1 + 1 + 1 = 1, Übertrag 1.

> [!WARNING]
> **Achtung**
> Den Übertrag aus der vorherigen Spalte nicht vergessen. Bei drei Einsen in einer Spalte ist das Ergebnis 1 mit Übertrag 1.

## Negative Zahlen

**Was ist das?** Bits kennen kein Minuszeichen. Das Vorzeichen muss in den Bits stecken. Die Folien zeigen drei Verfahren. Beispiel −42 in 8 Bit, wobei +42 = 0010 1010 ist:

| Darstellung | So bildest du −42 | Ergebnis | Wertebereich 8 Bit | Eigenschaft |
|---|---|---|---|---|
| Vorzeichen-Betrag | erstes Bit auf 1 setzen | 1010 1010 | −127 … +127 | zwei Nullen, Rechnen umständlich |
| Einerkomplement | alle Bits umdrehen | 1101 0101 | −127 … +127 | zwei Nullen; ein Übertrag wird rechts wieder addiert |
| Zweierkomplement | alle Bits umdrehen, dann +1 | 1101 0110 | −128 … +127 | eine Null; Subtraktion mit derselben Schaltung wie Addition |

Standard ist das **Zweierkomplement**.

### Zweierkomplement bilden

1. Bitbreite festlegen, zum Beispiel 8 Bit.
2. Den Betrag binär schreiben, mit führenden Nullen.
3. Alle Bits umdrehen (0 → 1, 1 → 0).
4. 1 addieren.

**Durchgerechnetes Beispiel:** −25 in 8 Bit

1. 8 Bit.
2. 25 = 16 + 8 + 1 = 0001 1001.
3. Umdrehen: 1110 0110.
4. +1: **1110 0111**.

### Eine negative Zahl ablesen

Zuerst schaust du aufs erste Bit: 0 heißt positiv, 1 heißt negativ. Dann hast du zwei Wege:

- **−128-Probe:** Das höchste Bit zählt −128, alle anderen wie gewohnt. 1110 0111 = −128 + 64 + 32 + 4 + 2 + 1 = −25 ✓
- **Umdrehen und +1:** 1110 0111 → 0001 1000 → +1 = 0001 1001 = 25. Das ist nur der Betrag. Das Minus setzt du wieder davor: −25.

> [!IMPORTANT]
> **Das Wichtigste**
> Zweierkomplement = Bits umdrehen + 1. Ohne feste Bitbreite ist es nicht definiert. Im 8-Bit-Zweierkomplement reicht der Bereich von −128 bis +127.

> [!WARNING]
> **Achtung**
> Nach dem Umdrehen das Minus nicht vergessen. Die Zahl im Rechner bleibt 1110 0111; die 25 ist nur ein Hilfsschritt. Und: 1110 0111 ist nicht 231, wenn es um Zahlen mit Vorzeichen geht.

## Subtrahieren über das Zweierkomplement

**Was ist das?** Der Rechner braucht keine eigene Subtrahierschaltung. Aus a − b wird a + (−b).

1. a binär in 8 Bit schreiben.
2. Von b (der Zahl **hinter** dem Minus) das Zweierkomplement bilden.
3. Beide addieren.
4. Ein Übertrag, der links aus den 8 Bit herausfällt, wird ignoriert.
5. Ergebnis ablesen: erstes Bit 1 heißt negativ.

**Durchgerechnetes Beispiel 1:** 42 − 17 (Folienaufgabe)

1. 42 = 0010 1010.
2. 17 = 0001 0001 → umdrehen 1110 1110 → +1 = 1110 1111.
3. 0010 1010 + 1110 1111 = (1) 0001 1001.
4. Die vordere 1 fällt weg: 0001 1001.
5. Erstes Bit 0, also positiv: 16 + 8 + 1 = **25** ✓

**Durchgerechnetes Beispiel 2:** 30 − 45

1. 30 = 0001 1110.
2. 45 = 0010 1101 → umdrehen 1101 0010 → +1 = 1101 0011.
3. 0001 1110 + 1101 0011 = 1111 0001 (kein Übertrag).
4. Nichts fällt weg.
5. Erstes Bit 1, also negativ: −128 + 64 + 32 + 16 + 1 = **−15** ✓

> [!IMPORTANT]
> **Das Wichtigste**
> a − b = a + (Zweierkomplement von b). Ein Übertrag links aus den 8 Bit wird einfach weggelassen.

> [!WARNING]
> **Achtung**
> Das Komplement von der richtigen Zahl bilden. Bei 30 − 45 wird die 45 negativ. Wer −30 bildet, rechnet in Wahrheit 45 − 30 = +15.

## Überlauf

**Was ist das?** Ein Überlauf passiert, wenn das Ergebnis nicht in den Wertebereich des Datentyps passt. Es wird dann falsch angezeigt, wie beim Kilometerzähler.

```text
8 Bit ohne Vorzeichen (0 … 255)       8 Bit Zweierkomplement (−128 … 127)
  1111 1111  (255)                       0111 1111  (127)
+ 0000 0001  (1)                       + 0000 0001  (1)
= 1 0000 0000 → 9. Bit fällt weg → 0   = 1000 0000 → wird als −128 gelesen
```

**Übertrag und Überlauf sind nicht dasselbe.** Der Übertrag, der links herausfällt, ist im Zweierkomplement normal (siehe 42 − 17). Ein Überlauf ist ein echter Fehler.

Eine Faustregel (Ergänzung, nicht von den Folien): Ein Überlauf liegt genau dann vor, wenn beide Summanden dasselbe Vorzeichen haben, das Ergebnis aber das andere. Eine positive plus eine negative Zahl kann nie überlaufen.

**Durchgerechnetes Beispiel:** 90 + 60 in 8 Bit Zweierkomplement

1. 90 = 0101 1010, 60 = 0011 1100. Beide positiv.
2. Summe: 1001 0110.
3. Erstes Bit 1, also scheinbar negativ: −128 + 16 + 4 + 2 = −106.
4. Plus + plus ergibt minus: **Überlauf**, denn 150 > 127.

> [!IMPORTANT]
> **Das Wichtigste**
> Überlauf = das Ergebnis passt nicht in den Wertebereich. Erkennbar: plus + plus ergibt minus, oder minus + minus ergibt plus.

> [!WARNING]
> **Achtung**
> 127 + 127 = 254 ist in 8 Bit **ohne** Vorzeichen kein Problem, im 8-Bit-Zweierkomplement aber ein Überlauf. Ob ein Überlauf vorliegt, hängt immer vom Datentyp ab.

## Kommazahlen

**Was ist das?** Nach dem Komma haben die Stellen die Werte ½, ¼, ⅛ und so weiter.

1. Den Teil vor dem Komma wie gewohnt umrechnen.
2. Den Teil nach dem Komma mit 2 multiplizieren.
3. Die Ziffer vor dem Komma (0 oder 1) ist das nächste Bit. Mit dem Rest nach dem Komma weiterrechnen.
4. Aufhören, wenn der Rest 0 ist (oder die Bits reichen).

**Durchgerechnetes Beispiel:** 4,375

1. 4 = 100₂.
2. 0,375 · 2 = 0,75 → Bit 0.
3. 0,75 · 2 = 1,5 → Bit 1, weiter mit 0,5.
4. 0,5 · 2 = 1,0 → Bit 1, Rest 0, fertig.
5. Ergebnis: **100,011₂**. Probe: 4 + ¼ + ⅛ = 4,375 ✓

Manche Dezimalbrüche sind binär periodisch: 0,4 = 0,0110 0110 0110 … Sie lassen sich nicht exakt speichern.

Eine **Gleitkommazahl** besteht aus Mantisse m, Basis b und Exponent e: Z = m · b hoch e, zum Beispiel 2022 = 2,022 · 10³. Nach dem Standard IEEE 754 hat eine 32-Bit-Zahl 1 Bit Vorzeichen, 8 Bit Exponent und 23 Bit Mantisse. Weil viele Dezimalbrüche binär periodisch sind, wird statt 18,4 in Wahrheit 18,3999996… gespeichert.

> [!IMPORTANT]
> **Das Wichtigste**
> Nachkommastellen: fortlaufend mit 2 multiplizieren, die Ziffer vor dem Komma ist das nächste Bit.

> [!WARNING]
> **Achtung**
> Nicht durch 2 teilen wie beim Vorkommateil. Hinter dem Komma wird multipliziert, und die Bits liest man von oben nach unten.

> [!CAUTION]
> **Nicht klausurrelevant**
> Die Details von IEEE 754 (Bias 127, „Hidden Bit“) und der Shift-Operator sind Exkurse. Zum Shift nur so viel: Alle Bits eine Stelle nach links schieben verdoppelt eine Zahl ohne Vorzeichen (23 → 46), nach rechts halbiert sie ganzzahlig (23 → 11).

## Übungen

> [!TIP]
> **Übung 1 · leicht**
> Rechne 100₁₀ ins Dual-, Oktal- und Hexadezimalsystem um.
> *Quelle: Lernseite GIT, Aufgabe 4.1 (eigene Aufgabe)*

> [!TIP]
> **Übung 2 · mittel**
> Was ist am größten: E7E5₁₆, 59364₁₀ oder 1110 0111 1110 0110₂?
> *Quelle: Folie GIT VL02 F. 33, sinngemäß*

> [!TIP]
> **Übung 3 · mittel**
> Bilde −25 im 8-Bit-Zweierkomplement und mache die Probe.
> *Quelle: Lernseite GIT, Aufgabe 4.8 (eigene Aufgabe)*

> [!TIP]
> **Übung 4 · Prüfungsniveau**
> Berechne 30 − 45 im 8-Bit-Zweierkomplement und lies das Ergebnis ab.
> *Quelle: Lernseite GIT, Aufgabe 4.10 (eigene Aufgabe im Klausurstil)*

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> Ist 90 + 60 in 8 Bit (Zweierkomplement) ein Überlauf? Und 127 + 1? Begründe.
> *Quelle: Lernseite GIT, Aufgabe 4.11 (eigene Aufgabe)*

> [!TIP]
> **Übung 6 · mittel**
> Wandle 4,375₁₀ in eine binäre Kommazahl um.
> *Quelle: Lernseite GIT, Aufgabe 4.13 (eigene Aufgabe nach VL02 F. 45)*

## Lösungen

### Übung 1

1. Restwertmethode: 100 : 2 = 50 R 0, 50 : 2 = 25 R 0, 25 : 2 = 12 R 1, 12 : 2 = 6 R 0, 6 : 2 = 3 R 0, 3 : 2 = 1 R 1, 1 : 2 = 0 R 1.
2. Von unten gelesen: 110 0100, in 8 Bit **0110 0100₂**.
3. Oktal: von rechts 001 | 100 | 100 = **144₈**.
4. Hex: 0110 | 0100 = **64₁₆**.
5. Probe: 6 · 16 + 4 = 100 ✓

### Übung 2

1. E7E5₁₆ = 14 · 4096 + 7 · 256 + 14 · 16 + 5 = 57 344 + 1 792 + 224 + 5 = 59 365.
2. Die Binärzahl in Vierergruppen: 1110 | 0111 | 1110 | 0110 = E7E6₁₆ = 59 366.
3. Vergleich: 59 364 < 59 365 < 59 366.

Die **Binärzahl ist am größten**, 59364₁₀ am kleinsten. Tipp: Binär direkt in Hex gruppieren, dann musst du nur die letzte Ziffer vergleichen.

### Übung 3

1. 25 = 16 + 8 + 1 = 0001 1001.
2. Umdrehen: 1110 0110.
3. +1: **1110 0111**.
4. Probe: −128 + 64 + 32 + 4 + 2 + 1 = −25 ✓

### Übung 4

1. 30 = 0001 1110.
2. −45: 45 = 0010 1101 → umdrehen 1101 0010 → +1 = 1101 0011.
3. Addieren: 0001 1110 + 1101 0011 = 1111 0001.
4. Erstes Bit 1, also negativ.
5. −128 + 64 + 32 + 16 + 1 = **−15** ✓

### Übung 5

Beides ist ein **Überlauf**. Der Bereich im 8-Bit-Zweierkomplement ist −128 bis +127.

- 90 + 60 = 150 ergibt 1001 0110. Gelesen wird das als −106.
- 127 + 1 = 128 ergibt 1000 0000. Gelesen wird das als −128.

In beiden Fällen ergibt plus + plus scheinbar minus.

### Übung 6

1. 4 = 100₂.
2. 0,375 · 2 = 0,75 → 0.
3. 0,75 · 2 = 1,5 → 1.
4. 0,5 · 2 = 1,0 → 1, fertig.
5. Ergebnis: **100,011₂**.
