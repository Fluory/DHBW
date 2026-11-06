---
title: "Folgen und ihre Grenzwerte"
order: 2
summary: "Bildungsgesetze, arithmetische und geometrische Folgen, Monotonie, Beschränktheit, Konvergenz und das Rezept „durch die höchste Potenz teilen“."
klausur: "relevant"
---

Eine Folge ist eine nummerierte Liste von Zahlen, die einer Regel folgt. Das ganze Kapitel dreht sich um eine Frage: Wohin läuft die Liste, wenn man immer weiter geht? Bevor man das beantworten kann, braucht man ein paar Begriffe: Bildungsgesetz, Monotonie und Beschränktheit.

Ein Alltagsbeispiel: Du legst 1000 € zu 5 % an. Die Kontostände am Ende jedes Jahres, 1050; 1102,50; 1157,63; …, bilden eine Folge. Jedes Glied ist das vorige mal 1,05. Dieses Kapitel gehört zum ersten Termin (19.10., Folien „Analysis – Folgen“). Die Hausaufgaben F-1 bis F-6 wurden am 04.11. besprochen.

## Was ist eine Folge?

### Was ist das?

Eine (reelle) Folge ist eine Funktion a: ℕ → ℝ, n ↦ aₙ (F. 7). Jeder Platznummer n = 1, 2, 3, … wird genau eine Zahl aₙ zugeordnet. Die Zahlen aₙ heißen **Glieder**, n heißt **Index**.

| n | 1 | 2 | 3 | 4 | 5 | 10 |
|---|---|---|---|---|---|---|
| aₙ = 1/n | 1 | 0,5 | 0,333 | 0,25 | 0,2 | 0,1 |

Das Bildungsgesetz gibt es in zwei Arten (F. 8–10):

- **explizit:** eine direkte Formel. aₙ = n² liefert sofort a₅ = 25.
- **rekursiv:** ein Startwert und eine Regel „neues Glied aus altem“. Fakultät: a₁ = 1, aₙ = n · aₙ₋₁ ergibt 1, 2, 6, 24, 120.

Eine Folge mit dem Faktor (−1)ⁿ wechselt ständig das Vorzeichen. Sie heißt **alternierend** (F. 10).

> [!WARNING]
> **Achtung**
> Index und Wert nicht verwechseln. Bei aₙ = 1/n ist a₄ der 4. Platz, sein Wert ist 0,25.

## Arithmetische und geometrische Folgen

### Was ist das?

| | arithmetisch (F. 30–31) | geometrisch (F. 32–33) |
|---|---|---|
| Idee | immer dieselbe Zahl d dazu | immer mit derselben Zahl q mal |
| explizit | aₙ = a₁ + (n − 1) · d | aₙ = a₁ · qⁿ⁻¹ |
| Summe der ersten n Glieder | Sₙ = n/2 · (a₁ + aₙ) | Sₙ = a₁ · (qⁿ − 1)/(q − 1), q ≠ 1 |
| Folienbeispiel | a₁ = 3, d = 4: 3, 7, 11, 15 … | a₁ = 2, q = 3: 2, 6, 18, 54 … |

Erkennungstest in zwei Schritten:

1. **Differenzen** bilden. Immer gleich → arithmetisch. 5, 8, 11, 14: Differenz 3.
2. **Quotienten** bilden. Immer gleich → geometrisch. 3, 6, 12, 24: Quotient 2.

Durchgerechnet für das arithmetische Folienbeispiel: a₁₀ = 3 + 9 · 4 = 39 und S₁₀ = 10/2 · (3 + 39) = 210. Geometrisch: a₈ = 2 · 3⁷ = 4374 und S₆ = 2 · (3⁶ − 1)/(3 − 1) = 728.

> [!IMPORTANT]
> **Das Wichtigste**
> Steht n im Exponenten einer festen Zahl (3 · 2ⁿ), ist die Folge geometrisch. Steht n einfach als Faktor da (3n + 1), ist sie arithmetisch.

> [!WARNING]
> **Achtung**
> In aₙ = a₁ + (n − 1) · d steht n − 1, nicht n. Das 10. Glied hat erst 9 Schritte hinter sich. Probe immer mit n = 1: Es muss a₁ herauskommen.

## Monotonie und Beschränktheit

### Was ist das?

Eine Folge heißt **monoton wachsend**, wenn aₙ ≤ aₙ₊₁ für alle n, **monoton fallend**, wenn aₙ ≥ aₙ₊₁. **Streng** monoton heißt: sogar < bzw. > (F. 14).

Der Differenz-Test:

1. Schreib aₙ₊₁ hin: Ersetze jedes n durch (n + 1).
2. Rechne aₙ₊₁ − aₙ aus und vereinfache.
3. Ist das Ergebnis für alle n > 0: streng wachsend. Ist es < 0: streng fallend. Wechselt das Vorzeichen: nicht monoton.

| Folge (F. 15) | aₙ₊₁ − aₙ | Ergebnis |
|---|---|---|
| aₙ = n² | (n + 1)² − n² = 2n + 1 > 0 | streng wachsend |
| bₙ = 1/n | 1/(n + 1) − 1/n = −1/(n(n + 1)) < 0 | streng fallend |
| cₙ = (−1)ⁿ | +2, −2, +2 … | nicht monoton |

Eine Folge heißt **beschränkt**, wenn es eine Zahl C gibt mit |aₙ| ≤ C für alle n (F. 16). Sie bleibt in einem Streifen zwischen Boden und Decke. Beispiel: 0 < 1/n ≤ 1.

> [!IMPORTANT]
> **Das Wichtigste**
> Monotonie: Vorzeichen von aₙ₊₁ − aₙ. Bei einer fallenden Folge ist das erste Glied die Decke, bei einer wachsenden der Boden.

> [!WARNING]
> **Achtung**
> Eine konstante Folge wie eₙ = 7 ist monoton wachsend **und** monoton fallend, aber nicht streng. Das war die Falle in F-2e.

## Grenzwert und Konvergenz

### Was ist das?

Eine Folge aₙ heißt **konvergent gegen a**, wenn es für jede noch so kleine Zahl ε > 0 einen Index n₀ gibt, so dass alle Glieder ab n₀ näher als ε an a liegen (F. 20):

∀ε > 0 ∃n₀ ∈ ℕ: |aₙ − a| < ε für alle n ≥ n₀

In Worten: Egal wie streng die Genauigkeit ist, ab einer Platznummer liegen **alle** späteren Glieder so nah am Grenzwert. Man schreibt lim (n → ∞) aₙ = a.

Mit Zahlen für aₙ = 1/n → 0: Der Abstand ist 1/n. Für ε = 0,01 braucht man n > 100, also n₀ = 101. Für ε = 0,001 ist n₀ = 1001. Für jedes ε findet man ein n₀.

Eine Folge, die nicht konvergiert, heißt **divergent** (F. 21):

- **bestimmt divergent:** Die Glieder laufen nach +∞ oder −∞, etwa n².
- **unbestimmt divergent:** Die Folge springt ohne Richtung, etwa (−1)ⁿ.

Drei Sätze (F. 25): Eine Folge hat höchstens einen Grenzwert. Jede konvergente Folge ist beschränkt. Beschränkt **und** monoton ⇒ konvergent. Die wichtigsten Nullfolgen: 1/n → 0 und qⁿ → 0 für |q| < 1.

> [!IMPORTANT]
> **Das Wichtigste**
> Konvergenz betrifft „fast alle“ Glieder, nicht einzelne. Am Anfang darf die Folge machen, was sie will.

> [!WARNING]
> **Achtung**
> Die Sätze gelten nur in eine Richtung. (−1)ⁿ ist beschränkt, aber divergent. „Beschränkt“ allein reicht nicht für Konvergenz. Und „bestimmt divergent“ ist divergent, ∞ ist kein Grenzwert im Sinn der Konvergenz.

## Grenzwerte berechnen

### Was ist das?

Wenn aₙ → a und bₙ → b, darf man Grenzwerte „durchrechnen“: Summe, Differenz, Produkt, Vielfaches und Quotient (falls b ≠ 0) (F. 26). Beispiel: 1/n + 2/n² → 0 + 0 = 0.

Bei Brüchen, in denen Zähler und Nenner gegen ∞ laufen („∞/∞“), hilft ein Rezept (F. 27–29).

### Rezept: durch die höchste Potenz teilen

Beispiel (F. 27): cₙ = (2n² − 3)/(n² + n + 1).

1. Suche die höchste Potenz von n im Nenner: n².
2. Teile jeden Summanden oben und unten dadurch: (2 − 3/n²)/(1 + 1/n + 1/n²).
3. Jeder Rest der Form Zahl/nᵖ geht gegen 0.
4. Rest ausrechnen: (2 − 0)/(1 + 0 + 0) = 2.
5. Probe mit n = 1000: 1 999 997/1 001 001 ≈ 1,998.

| Fall | Ergebnis | Beispiel |
|---|---|---|
| Zählergrad = Nennergrad | Quotient der Vorzahlen | (3n² + 2)/(6n² − n) → 1/2 |
| Zählergrad < Nennergrad | 0 | (−5n + 1)/(4n² − 7) → 0 |
| Zählergrad > Nennergrad | +∞ oder −∞ | (n³ − 1)/(2n² + 5) → +∞ |

> [!IMPORTANT]
> **Das Wichtigste**
> Bei Brüchen aus Potenzen entscheidet der Grad. Ohne Bruch gilt dasselbe: Die stärkste Größe gewinnt. −7n³ + 4n² + 10 = n³ · (−7 + 4/n + 10/n³) → −∞.

> [!WARNING]
> **Achtung**
> Erst zusammenfassen, dann den Grad ablesen. In F-4c gehören −1 und −7 im Zähler zusammen zu −8.

## Übungen

> [!TIP]
> **Übung 1 · leicht**
> Geben Sie ein Bildungsgesetz für jede Folge an: a) 9, 9, 9, … · b) 2, 4, 8, 16, 32, … · c) −3, 3, −3, 3, … · d) 1, 1/4, 1/9, 1/16, …
>
> Quelle: Folien „Folgen“, Aufgabe F-1 (F. 13)

> [!TIP]
> **Übung 2 · mittel**
> Geben Sie die ersten 5 Glieder an. Ist die Folge (streng) monoton? Ist sie beschränkt? a) aₙ = 2n − 1 · b) bₙ = 1 + 1/n · c) cₙ = (−1)ⁿ · 2n · d) d₁ = 2, dₙ = dₙ₋₁ + 3 · e) eₙ = 7
>
> Quelle: Folien „Folgen“, Aufgabe F-2 (F. 19)

> [!TIP]
> **Übung 3 · mittel**
> Ist die Folge bestimmt divergent? Bestimmen Sie dann +∞ oder −∞. a) aₙ = ln(n) + 4n² − 16e⁻ⁿ · b) bₙ = 4 − 1/n − n³ · c) cₙ = −7n³ + 4n² + 10 · d) dₙ = eⁿ(1 − 1/n)²
>
> Quelle: Folien „Folgen“, Aufgabe F-3 (F. 28)

> [!TIP]
> **Übung 4 · Prüfungsniveau**
> Bestimmen Sie den Grenzwert (auch ±∞): a) aₙ = (1 − (½)ⁿ)/(3n²) · b) bₙ = 4 · (e⁻ⁿ + 3) + n² · c) cₖ = (8k³ − 1 − 4k² − 7)/(6k³ + 2k − 1) · d) fₙ = (3n² + 1)/(n · ln n) · e) gₙ = −n² · ln(n) + 3
>
> Quelle: Folien „Folgen“, Aufgabe F-4 (F. 29), Auswahl

> [!TIP]
> **Übung 5 · mittel**
> Die Heron-Folge Hₙ₊₁ = ½ · (Hₙ + x/Hₙ) konvergiert gegen √x. Berechnen Sie H₁ bis H₃ für x = 5 mit Startwert H₀ = 2. Wie nah ist H₃ an √5?
>
> Quelle: Folien „Folgen“, Aufgabe F-5 (F. 34)

> [!TIP]
> **Übung 6 · mittel**
> Fibonacci: F₀ = 0, F₁ = 1, Fₙ₊₁ = Fₙ + Fₙ₋₁. Berechnen Sie die Glieder bis F₁₀ und die Quotienten Fₙ₊₁/Fₙ für n = 1 bis 9. Vergleichen Sie mit (1 + √5)/2 ≈ 1,618.
>
> Quelle: Folien „Folgen“, Aufgabe F-6 (F. 35)

## Lösungen

Die Lösungen sind selbst nachgerechnet. Die Besprechung in der Vorlesung kann in der Schreibweise abweichen.

### Übung 1

Trick: Schreib die Platznummer n = 1, 2, 3 … über die Glieder.

a) aₙ = 9 (konstante Folge).

b) 2 = 2¹, 4 = 2², 8 = 2³: aₙ = 2ⁿ. Rekursiv: a₁ = 2, aₙ₊₁ = 2 · aₙ.

c) Betrag 3, das Vorzeichen beginnt mit Minus: aₙ = (−1)ⁿ · 3. Probe n = 2: +3.

d) Die Nenner sind 1², 2², 3², 4²: aₙ = 1/n².

### Übung 2

a) 1, 3, 5, 7, 9. Differenz (2n + 1) − (2n − 1) = 2 > 0: streng wachsend. Nach unten durch 1 beschränkt, nach oben nicht. Also nicht beschränkt.

b) 2; 1,5; 1,333; 1,25; 1,2. Differenz 1/(n + 1) − 1/n < 0: streng fallend. 1 < bₙ ≤ 2: beschränkt.

c) −2, 4, −6, 8, −10. Nicht monoton. Der Betrag 2n wächst ohne Grenze: nicht beschränkt.

d) 2, 5, 8, 11, 14. Arithmetisch mit d = 3, explizit dₙ = 3n − 1. Streng wachsend. Nach unten beschränkt (≥ 2), nach oben nicht.

e) 7, 7, 7, 7, 7. Monoton wachsend und fallend, aber nicht streng. Beschränkt.

### Übung 3

Vorgehen: Jeden Baustein einzeln ansehen, dann den stärksten finden.

a) ln n → ∞, 4n² → ∞, 16e⁻ⁿ → 0. Also → +∞.

b) 4 − 0 − ∞ → −∞.

c) „∞ − ∞“, also ausklammern: n³ · (−7 + 4/n + 10/n³). Die Klammer → −7, also → −∞.

d) (1 − 1/n)² → 1 und eⁿ → ∞. Produkt → +∞.

Alle vier sind bestimmt divergent.

### Übung 4

a) Zähler → 1, Nenner 3n² → ∞. „1/∞“ → 0.

b) e⁻ⁿ → 0, also 4 · 3 = 12. Dazu n² → ∞: → +∞.

c) Erst zusammenfassen: (8k³ − 4k² − 8)/(6k³ + 2k − 1). Durch k³ teilen: (8 − 4/k − 8/k³)/(6 + 2/k² − 1/k³) → 8/6 = 4/3. Probe k = 1000: ≈ 1,3327.

d) Oben und unten durch n teilen: (3n + 1/n)/ln n. n wächst viel schneller als ln n → +∞. Probe n = 1000: ≈ 434.

e) n² · ln n → ∞, mit Minus → −∞. Die 3 ändert nichts.

### Übung 5

1. H₁ = ½ · (2 + 5/2) = ½ · 4,5 = 2,25.
2. H₂ = ½ · (2,25 + 5/2,25) = ½ · (2,25 + 2,2222…) = 2,2361111…
3. H₃ = ½ · (2,2361111 + 2,2360248) = 2,2360679779…

√5 = 2,2360679775… Der Abstand von H₃ ist nur noch etwa 0,0000000004. Die Zahl der richtigen Stellen verdoppelt sich ungefähr mit jedem Schritt.

### Übung 6

Jedes Glied ist die Summe der beiden vorigen: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55.

| n | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|
| Fₙ₊₁/Fₙ | 1 | 2 | 1,5 | 1,667 | 1,6 | 1,625 | 1,615 | 1,619 | 1,6176 |

Die Quotienten liegen abwechselnd über und unter 1,618 und kommen immer näher. Die Quotientenfolge ist nicht monoton, aber konvergent gegen den Goldenen Schnitt.
