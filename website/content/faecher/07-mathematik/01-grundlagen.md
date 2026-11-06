---
title: "Grundlagen: Brüche, Potenzen, Summenzeichen"
order: 1
summary: "Der Schulstoff, den die Vorlesung voraussetzt: Bruchrechnen, Potenzen, das Summenzeichen Σ, Fakultät, Prozent, Betrag und Rechnen mit unendlich."
klausur: "teilweise"
---

Dieses Kapitel ist kein Vorlesungsstoff. Es ist das Werkzeug, das die Vorlesung stillschweigend voraussetzt. Fast alle Fehler bei Folgen und Reihen sind in Wahrheit Fehler beim Bruchrechnen, bei Potenzen oder beim Lesen des Summenzeichens.

Ein Alltagsbeispiel: Du legst 100 € zu 5 % Zinsen an. Nach zwei Jahren hast du nicht 110 €, sondern 110,25 €. Um das sicher zu rechnen, brauchst du Prozent als Dezimalzahl und Potenzen. Genau solche Werkzeuge stehen hier.

## Bruchrechnen

### Was ist das?

Ein Bruch 3/4 heißt „3 geteilt durch 4“ = 0,75. Oben steht der Zähler, unten der Nenner.

| Regel | So geht es | Beispiel |
|---|---|---|
| Kürzen | oben und unten durch dieselbe Zahl teilen | 12/99 = 4/33 |
| Plus, Minus | erst auf gleichen Nenner bringen | 1/2 + 1/3 = 3/6 + 2/6 = 5/6 |
| Mal | Zähler mal Zähler, Nenner mal Nenner | 3/4 · 2/9 = 6/36 = 1/6 |
| Geteilt | mit dem Kehrwert malnehmen | 3/5 : 9/10 = 3/5 · 10/9 = 2/3 |

Ein Doppelbruch (Bruch im Bruch) ist einfach „geteilt“. Den brauchst du bei der geometrischen Reihe ständig: (3/10)/(9/10) = 3/10 · 10/9 = 1/3.

> [!IMPORTANT]
> **Das Wichtigste**
> Plus nur bei gleichem Nenner. Geteilt = mal Kehrwert. Ein Bruch wird klein, wenn der Nenner groß wird: 1/10, 1/100, 1/1000 …

> [!WARNING]
> **Achtung**
> 1/2 + 1/3 ist nicht 2/5. Nenner werden nie einfach addiert. Kürzen darf man nur Faktoren, keine Summanden: (2 + 3)/2 ist 2,5, nicht 3.

## Potenzen und Wurzeln

### Was ist das?

Eine Potenz ist abgekürztes Malnehmen: 2³ = 2 · 2 · 2 = 8. Unten steht die Basis, oben der Exponent.

| Regel | Allgemein | Mit Zahlen |
|---|---|---|
| hoch 0 | a⁰ = 1 | 5⁰ = 1 |
| negativer Exponent | a⁻ⁿ = 1/aⁿ | 2⁻³ = 1/8 |
| gleiche Basis mal | aᵐ · aⁿ = aᵐ⁺ⁿ | 3² · 3³ = 3⁵ = 243 |
| gleiche Basis geteilt | aᵐ/aⁿ = aᵐ⁻ⁿ | 2⁷/2⁴ = 2³ = 8 |
| Potenz einer Potenz | (aᵐ)ⁿ = aᵐ·ⁿ | (2³)² = 2⁶ = 64 |
| gleicher Exponent | aᵏ · bᵏ = (a · b)ᵏ | 2ᵏ · 5ᵏ = 10ᵏ |

Die letzte Regel war am 04.11. der Schlüssel zu Aufgabe R-2c: (−1)ᵏ · (⅕)ᵏ = (−⅕)ᵏ.

(−1)ᵏ ist ein Vorzeichen-Schalter: Gerade k ergibt +1, ungerade k ergibt −1. Eine Zahl zwischen −1 und 1 hoch k wird immer kleiner: (½)⁵ = 0,03125.

Eine Wurzel ist eine Potenz mit Bruch-Exponent: √a ist dasselbe wie a hoch ½. √49 = 7, weil 7 · 7 = 49.

> [!IMPORTANT]
> **Das Wichtigste**
> Gleiche Basis: Exponenten addieren oder abziehen. Gleicher Exponent: Basen zusammenfassen. Alles hoch 0 ist 1.

> [!WARNING]
> **Achtung**
> (−2)² = 4, aber −2² = −4. Die Klammer entscheidet. 3 · 2ᵏ ist nicht 6ᵏ. Und √(a + b) ist nicht √a + √b: √(9 + 16) = 5, aber √9 + √16 = 7.

## Das Summenzeichen Σ

### Was ist das?

Σ (Sigma) heißt: „Zähle zusammen“. Unter dem Zeichen steht der Startwert, darüber der Endwert. Wir schreiben hier Σ von k = 1 bis 4 über k² so: Σₖ₌₁⁴ k².

So schreibst du eine Summe aus:

1. Setze für k nacheinander jeden Wert vom Start bis zum Ende ein: k = 1, 2, 3, 4.
2. Rechne den Ausdruck für jeden Wert aus: 1, 4, 9, 16.
3. Zähle alles zusammen: 1 + 4 + 9 + 16 = 30.

Der Startindex ändert alles:

- Σₖ₌₀³ (½)ᵏ = 1 + 0,5 + 0,25 + 0,125 = 1,875
- Σₖ₌₁³ (½)ᵏ = 0,5 + 0,25 + 0,125 = 0,875

Anzahl der Summanden = Ende − Start + 1. Konstante Faktoren darf man herausziehen: Σₖ₌₀² 3 · 2ᵏ = 3 + 6 + 12 = 21 = 3 · (1 + 2 + 4). Steht ∞ oben, hört die Summe nie auf. Was das bedeutet, klärt Kapitel 3.

> [!IMPORTANT]
> **Das Wichtigste**
> Immer zuerst das erste Glied ausrechnen. Beim Start k = 0 ist q⁰ = 1, beim Start k = 1 ist das erste Glied q.

> [!WARNING]
> **Achtung**
> Σₖ₌₀³ 2ᵏ beginnt mit 2⁰ = 1, nicht mit 0.

## Fakultät, Prozent und Betrag

### Was ist das?

**Fakultät:** n! heißt, alle ganzen Zahlen von 1 bis n malnehmen. 5! = 120, und festgelegt ist 0! = 1. Der wichtigste Trick: (k + 1)! = (k + 1) · k!. Darum kürzt sich k!/(k + 1)! = 1/(k + 1).

**Prozent:** In jede Formel setzt du den Zinssatz als Dezimalzahl ein. 5 % = 0,05, der Wachstumsfaktor ist 1 + i = 1,05. 100 € nach zwei Jahren: 100 · 1,05² = 110,25 €.

**Betrag:** |a − b| ist der Abstand zwischen a und b auf dem Zahlenstrahl. |x − 2| < 0,5 heißt: x ist weniger als 0,5 von 2 entfernt, also 1,5 < x < 2,5.

> [!IMPORTANT]
> **Das Wichtigste**
> (k + 1)! = (k + 1) · k!. Prozent immer als Dezimalzahl. |aₙ − a| < ε heißt „Abstand kleiner als ε“.

> [!WARNING]
> **Achtung**
> 5 % ist 0,05, nicht 0,5. Und 1,05² ist 1,1025, nicht 1,10: Es gibt Zinsen auf die Zinsen.

## Rechnen mit unendlich

### Was ist das?

∞ ist keine Zahl. „n → ∞“ heißt nur: n wird immer größer, ohne Ende. Man fragt, was dann mit einem Ausdruck passiert.

| Kurzschrift | Zahlenprobe | Ergebnis |
|---|---|---|
| 1/∞ | 1/1000 = 0,001 | → 0 |
| ∞ + 5, 3 · ∞ | 1000 + 5, 3 · 1000 | → ∞ |
| −2 · ∞ | −2000 | → −∞ |
| qⁿ mit 0 < q < 1 | 0,5¹⁰ ≈ 0,001 | → 0 |
| qⁿ mit q > 1 | 2¹⁰ = 1024 | → ∞ |
| e⁻ⁿ = 1/eⁿ | e⁻¹⁰ ≈ 0,0000454 | → 0 |

Wer schneller wächst, gewinnt. Von langsam nach schnell: ln n ≪ √n ≪ n ≪ n² ≪ 2ⁿ ≪ eⁿ ≪ n!

> [!IMPORTANT]
> **Das Wichtigste**
> Feste Zahl durch riesige Zahl → 0. Die stärkste Größe entscheidet, wohin ein Ausdruck läuft.

> [!WARNING]
> **Achtung**
> ∞ − ∞, ∞/∞ und 0 · ∞ sind **unbestimmt**. 2n/n = 2, aber n²/n = n → ∞, obwohl beides „∞/∞“ ist. Dann musst du umformen (Kapitel 2).

## Übungen

> [!TIP]
> **Übung 1 · leicht**
> Rechne ohne Taschenrechner: a) 1/2 + 1/3 · b) 3/5 : 9/10 · c) (1/4)/(1 − 1/4)
>
> Quelle: eigene Aufgabe

> [!TIP]
> **Übung 2 · leicht**
> Berechne: a) 2⁻³ · b) (½)⁻² · c) 3² · 3³ · d) qᵏ⁺¹/qᵏ. Fasse zusammen: e) (−1)ᵏ · (1/3)ᵏ
>
> Quelle: eigene Aufgabe

> [!TIP]
> **Übung 3 · mittel**
> Schreibe aus und rechne aus: a) Σₖ₌₀³ 2ᵏ · b) Σₖ₌₂⁵ 1 · c) Σₖ₌₀⁴ (−1)ᵏ. Schreibe mit Σ: d) 3 + 6 + 9 + … + 30 und rechne aus.
>
> Quelle: eigene Aufgabe

> [!TIP]
> **Übung 4 · mittel**
> a) Kürze (k + 2)!/k!. b) Wie viel sind 100 € nach 2 Jahren bei 3 % mit Zinseszins?
>
> Quelle: eigene Aufgabe

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> Was passiert für n → ∞? a) 7/n · b) −2n² · c) 0,9ⁿ · d) 1,1ⁿ · e) n² − n (Vorsicht: „∞ − ∞“)
>
> Quelle: eigene Aufgabe

## Lösungen

### Übung 1

a) Gleicher Nenner 6: 3/6 + 2/6 = 5/6.

b) Mit dem Kehrwert malnehmen: 3/5 · 10/9 = 30/45 = 2/3.

c) Erst den Nenner: 1 − 1/4 = 3/4. Dann 1/4 : 3/4 = 1/4 · 4/3 = 1/3.

### Übung 2

a) 2⁻³ = 1/2³ = 1/8 = 0,125.

b) Bruch hoch negativ: umdrehen, Minus weg. (½)⁻² = 2² = 4.

c) Gleiche Basis, Exponenten addieren: 3⁵ = 243. Probe: 9 · 27 = 243.

d) Exponenten abziehen: q⁽ᵏ⁺¹⁾⁻ᵏ = q.

e) Gleicher Exponent: (−1 · 1/3)ᵏ = (−1/3)ᵏ. Probe k = 3: −1/27 = (−1/3)³.

### Übung 3

a) 1 + 2 + 4 + 8 = 15. Das erste Glied ist 2⁰ = 1.

b) Der Ausdruck ist immer 1. k läuft von 2 bis 5, das sind 5 − 2 + 1 = 4 Summanden: 4.

c) 1 − 1 + 1 − 1 + 1 = 1.

d) Das sind die Vielfachen von 3: Σₖ₌₁¹⁰ 3k. Den Faktor 3 herausziehen: 3 · (1 + 2 + … + 10) = 3 · 55 = 165.

### Übung 4

a) (k + 2)! = (k + 2) · (k + 1) · k!. Also bleibt (k + 2)(k + 1). Probe k = 3: 5!/3! = 120/6 = 20 = 5 · 4.

b) Jahr 1: 100 · 1,03 = 103 €. Jahr 2: 103 · 1,03 = 106,09 €. Kurz: 100 · 1,03² = 106,09 €.

### Übung 5

a) 7 durch eine riesige Zahl → 0.

b) Negative Zahl mal riesig → −∞.

c) q = 0,9 liegt zwischen −1 und 1 → 0. Zahlenprobe: 0,9⁵⁰ ≈ 0,005.

d) q = 1,1 > 1 → +∞. Zahlenprobe: 1,1⁵⁰ ≈ 117.

e) „∞ − ∞“ ist unbestimmt, also umformen: n² − n = n · (n − 1). Beide Faktoren → ∞, also +∞. Zahlenprobe n = 1000: 999 000.
