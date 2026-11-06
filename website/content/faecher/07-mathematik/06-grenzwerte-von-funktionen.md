---
title: "Grenzwerte von Funktionen"
order: 6
summary: "Was lim (x → a) bedeutet, einseitige Grenzwerte, die drei möglichen Ergebnisse und die Taktik: einsetzen, faktorisieren und kürzen, durch die höchste Potenz teilen."
klausur: "relevant"
---

Bei Folgen lief n immer weiter: 1, 2, 3, … Bei Funktionen rückt x immer näher an eine Stelle a heran. Die Frage ist dieselbe: Wohin laufen die Werte? Ganz am Ende des 04.11. kam dazu Folie 75 mit sechs Beispielen.

Ein Alltagsbeispiel: Ein Navi zeigt die Durchschnittsgeschwindigkeit „Strecke durch Zeit“. Direkt beim Start ist die Zeit 0, die Formel geht nicht. Trotzdem kann man fragen, welchem Wert die Anzeige kurz nach dem Start immer näher kommt. Genau das misst ein Grenzwert.

## Was heißt lim (x → a)?

### Was ist das?

lim (x → a) f(x) = g heißt: Wenn x ganz nah an a rückt, kommt f(x) ganz nah an g. Es geht um die Werte **nahe bei a, nicht an a**. f muss bei a nicht einmal definiert sein.

| x | 1,9 | 1,99 | 1,999 | 2 | 2,001 | 2,01 | 2,1 |
|---|---|---|---|---|---|---|---|
| (x² − 4)/(x − 2) | 3,9 | 3,99 | 3,999 | nicht erlaubt | 4,001 | 4,01 | 4,1 |

Von beiden Seiten kommen die Werte der 4 beliebig nahe. Also ist der Grenzwert 4, obwohl man bei x = 2 nichts ausrechnen kann.

Die Folie definiert es über Folgen: lim (x → x̂) f(x) = y heißt, für **jede** Folge xₙ → x̂ gilt f(xₙ) → y. Das ist die Brücke zu Kapitel 2.

**Einseitige Grenzwerte:** x → 0⁺ heißt „von rechts“ (0,1; 0,01; 0,001 …). x → 0⁻ heißt „von links“ (−0,1; −0,01 …). Der beidseitige Grenzwert existiert nur, wenn beide Seiten denselben Wert liefern.

| Ergebnis (Folie 75) | Bedeutung | Beispiel |
|---|---|---|
| konvergent | die Werte kommen einer festen Zahl beliebig nah | (x² − 4)/(x − 2) → 4 |
| uneigentlich | die Werte laufen nach +∞ oder −∞ | 1/x für x → 0⁺: +∞ |
| existiert nicht | keine Zahl, kein ±∞ (schwingt, oder links ≠ rechts) | sin(1/x) für x → 0 |

> [!IMPORTANT]
> **Das Wichtigste**
> Der Grenzwert schaut auf die Nähe von a, nicht auf a selbst. Bei Folgen hießen die drei Fälle konvergent, bestimmt divergent und unbestimmt divergent.

> [!WARNING]
> **Achtung**
> Ein beidseitiger Grenzwert ohne + oder − existiert nur, wenn links und rechts gleich sind. Bei 1/x ist links −∞ und rechts +∞, also existiert lim (x → 0) 1/x nicht.

## Die Taktik

### Was ist das?

Fast jede Aufgabe läuft nach demselben Plan (Mitschrift 04.11.):

1. **Einsetzen.** Kommt eine Zahl heraus, bist du fertig.
2. **„Zahl/0“:** Vorzeichen des Nenners prüfen. Ergebnis +∞ oder −∞, oder links ≠ rechts.
3. **„0/0“ oder „∞/∞“:** umformen. Bei x → Zahl faktorisieren und kürzen. Bei x → ∞ durch die höchste Potenz teilen.
4. **Schwingt die Funktion** oder ist links ≠ rechts? Dann existiert der Grenzwert nicht.
5. **Notfall und Probe:** Zahlen nahe dran einsetzen.

Werkzeuge zum Faktorisieren: die dritte binomische Formel a² − b² = (a − b)(a + b). Und: Ist p(a) = 0, steckt der Faktor (x − a) in p(x). Den Rest liefert die Polynomdivision.

> [!IMPORTANT]
> **Das Wichtigste**
> Erst einsetzen, dann je nach Ergebnis weitermachen. Die Zahlenprobe zeigt immer die Richtung.

> [!WARNING]
> **Achtung**
> „0/0“ heißt nicht „Ergebnis 0“ und nicht „Ergebnis 1“. Es heißt nur: So geht es nicht, erst umformen.

## Die Beispiele von Folie 75

### Konvergente Grenzwerte

**a) lim (x → 2) (x² − 4)/(x − 2) = 4**

1. Einsetzen: 0/0 ⇒ umformen.
2. Faktorisieren: x² − 4 = (x − 2)(x + 2).
3. Kürzen: x + 2. Erlaubt, weil x nur nahe 2 ist, also x − 2 ≠ 0.
4. Einsetzen: 2 + 2 = 4.

**b) lim (x → 0) sin(x)/x = 1**

Einsetzen gibt 0/0. Kürzen geht hier nicht. Das ist ein Standard-Grenzwert, den man sich merkt. Probe im Bogenmaß: sin(0,1)/0,1 ≈ 0,9983, sin(0,01)/0,01 ≈ 0,99998. Für kleine x ist sin(x) fast genau x.

**c) lim (x → ∞) (2x² + 3x − 1)/(x² + 5) = 2**

1. Einsetzen: ∞/∞ ⇒ umformen.
2. Durch x² teilen: (2 + 3/x − 1/x²)/(1 + 5/x²).
3. Alle Reste → 0. Übrig bleibt 2/1 = 2.
4. Probe: x = 100 ergibt ≈ 2,029, x = 1000 ergibt ≈ 2,003.

### Uneigentliche Grenzwerte

**d) lim (x → 0⁺) 1/x = +∞** und **e) lim (x → 0⁻) 1/x = −∞**

1 geteilt durch etwas winzig Positives ist riesig positiv. 1 geteilt durch etwas winzig Negatives ist riesig negativ.

| x | −0,01 | −0,001 | 0,001 | 0,01 |
|---|---|---|---|---|
| 1/x | −100 | −1000 | 1000 | 100 |

Faustregel für „Zahl/0“: Nur die Vorzeichen von Zähler und Nenner anschauen. Ein Minus ⇒ −∞, zwei Minus ⇒ +∞.

### Ein Grenzwert, der nicht existiert

**f) lim (x → 0) sin(1/x) existiert nicht**

Wenn x → 0⁺, wird 1/x riesig. Der Sinus wächst aber nicht, er schwingt zwischen −1 und 1. Bei x = 2/π ist sin(1/x) = 1, bei x = 2/(3π) ist er −1, und so weiter, immer näher an 0. Der Wert kommt keiner Zahl dauerhaft nahe.

> [!IMPORTANT]
> **Das Wichtigste**
> Gleicher Grad oben und unten bei x → ∞: Grenzwert = Verhältnis der Vorzahlen. Das ist dasselbe Rezept wie bei Folgen.

> [!WARNING]
> **Achtung**
> Bei sin(x)/x geht das Argument des Sinus gegen 0, da ist alles ruhig. Bei sin(1/x) geht es gegen ∞, da schwingt es. Erst schauen, was im Sinus steht. Den Taschenrechner auf Bogenmaß (RAD) stellen.

## Übungen

> [!TIP]
> **Übung 1 · leicht**
> Berechne lim (x → 3) (x² − 9)/(x − 3).
>
> Quelle: eigene Aufgabe, wie Folie 75 a

> [!TIP]
> **Übung 2 · mittel**
> Berechne a) lim (x → ∞) (3x² − x)/(6x² + 1) und b) lim (x → ∞) (5x + 7)/(x² + 1).
>
> Quelle: eigene Aufgabe, wie Folie 75 c

> [!TIP]
> **Übung 3 · mittel**
> Berechne lim (x → 2⁺) 1/(x − 2) und lim (x → 2⁻) 1/(x − 2). Existiert lim (x → 2) 1/(x − 2)?
>
> Quelle: eigene Aufgabe, wie Folie 75 d/e

> [!TIP]
> **Übung 4 · Prüfungsniveau**
> Berechne lim (x → 0) (√(x + 4) − 2)/x. Tipp: mit (√(x + 4) + 2) erweitern.
>
> Quelle: eigene Aufgabe, Klausurstil

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> Berechnen Sie: a) lim (x → 2) (x⁴ − 2x³ − 7x² + 20x − 12)/(x⁴ − 6x³ + 9x² + 4x − 12) · b) lim (x → 1) (2x − 3)/(x − 1) · c) lim (x → +∞) (√(x + 1) − √x) · d) lim (x → 0) (1/x − 1/x²)
>
> Quelle: Folien 04.11., Aufgabe FU-5

## Lösungen

### Übung 1

1. Einsetzen: 0/0 ⇒ umformen.
2. Faktorisieren: x² − 9 = (x − 3)(x + 3).
3. Kürzen: x + 3. Einsetzen: 6.

Probe: x = 3,01 ergibt 6,01.

### Übung 2

a) Gleicher Grad 2: Verhältnis der Vorzahlen 3/6 = ½. Ausführlich durch x² teilen: (3 − 1/x)/(6 + 1/x²) → 3/6.

b) Zählergrad 1 < Nennergrad 2 ⇒ 0. Durch x² teilen: (5/x + 7/x²)/(1 + 1/x²) → 0/1 = 0.

### Übung 3

Einsetzen gibt 1/0, also Vorzeichen prüfen.

- Von rechts: x − 2 ist winzig positiv ⇒ +∞. Probe x = 2,01: 100.
- Von links: x − 2 ist winzig negativ ⇒ −∞. Probe x = 1,99: −100.

Links ≠ rechts, also existiert der beidseitige Grenzwert nicht. Bei x = 2 hat die Funktion eine Polstelle.

### Übung 4

1. Einsetzen: (2 − 2)/0 = 0/0.
2. Erweitern: (√(x + 4) − 2)(√(x + 4) + 2) = (x + 4) − 4 = x.
3. Kürzen: x/(x · (√(x + 4) + 2)) = 1/(√(x + 4) + 2).
4. Einsetzen: 1/(2 + 2) = ¼.

Probe: x = 0,01 ergibt ≈ 0,24984, x = −0,01 ergibt ≈ 0,25016.

### Übung 5

a) Einsetzen: Zähler 16 − 16 − 28 + 40 − 12 = 0, Nenner 16 − 48 + 36 + 8 − 12 = 0. Also 0/0. Polynomdivision durch (x − 2), zweimal:

- Zähler = (x − 2)²(x + 3)(x − 1)
- Nenner = (x − 2)²(x − 3)(x + 1)

Kürzen und einsetzen: (5 · 1)/((−1) · 3) = −5/3 ≈ −1,667.

b) Einsetzen: (−1)/0, also Polstelle. Von rechts (x = 1,001): −1 durch winzig Positives ⇒ −∞. Von links ⇒ +∞. Links ≠ rechts ⇒ existiert nicht.

c) „∞ − ∞“ ⇒ mit (√(x + 1) + √x) erweitern: Zähler (x + 1) − x = 1. Also 1/(√(x + 1) + √x) → 0. Probe x = 10 000: ≈ 0,005.

d) Auf einen Bruch: (x − 1)/x². Zähler → −1, Nenner → 0 und immer positiv ⇒ −∞ von beiden Seiten. Probe x = 0,01: −9900.
