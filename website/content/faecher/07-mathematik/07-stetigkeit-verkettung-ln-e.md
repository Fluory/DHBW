---
title: "Stetigkeit, Verkettung, ln und e"
order: 7
summary: "Funktionen hintereinander ausführen, Stetigkeit und den Parameter c bestimmen, die drei Arten von Unstetigkeiten und Rechnen mit ln und e ohne Taschenrechner."
klausur: "relevant"
---

Stetig heißt anschaulich: Du kannst den Graphen zeichnen, ohne den Stift abzusetzen, also ohne Lücke und ohne Sprung. Dazu kommen in diesem Kapitel zwei Werkzeuge: Funktionen hintereinander ausführen (Verkettung) und Rechnen mit ln und e.

Ein Alltagsbeispiel: Ein Paketdienst berechnet den Preis nach Gewicht. Bis 2 kg kostet es 5 €, darüber 8 €. Bei 2 kg springt der Preis. Diese Preisfunktion ist dort **nicht stetig**. Ein Taxameter dagegen zählt gleichmäßig hoch. Der Stoff stammt vom 04.11. (Folien 68, 79, 80 und 85 sowie die Aufgaben FU-1, FU-6 und FU-7).

## Verkettung von Funktionen

### Was ist das?

(g ∘ f)(x) = g(f(x)), gelesen „g nach f“. Zwei Maschinen hintereinander: x geht zuerst in f, das Ergebnis geht dann in g (Folie 68).

Vorgehen, durchgerechnet für f: ℝ → ℝ, x ↦ sin(x) und g: [−2, 2] → ℝ, x ↦ 1 − x²:

1. **Was gibt f aus?** sin(x) liegt immer zwischen −1 und 1.
2. **Passt das in g?** g nimmt alles von −2 bis 2. Ja.
3. **Einsetzen:** Für das x in g schreibst du sin(x): h(x) = 1 − sin²(x).

Zweites Folienbeispiel: g: (0, 1) → ℝ, x ↦ 1/(x² − x) und f: ℝ → ℝ, x ↦ 1/(1 + x²). f gibt Werte in (0, 1] aus. Bei x = 0 ist f(0) = 1, und die 1 gehört nicht zu (0, 1). Für x = 0 geht g ∘ f also nicht. Für x ≠ 0 ergibt sich h(x) = −(1 + x²)²/x². Probe x = 1: f(1) = ½, g(½) = 1/(¼ − ½) = −4, und −2²/1 = −4.

> [!IMPORTANT]
> **Das Wichtigste**
> Bei g ∘ f läuft f zuerst. Was f ausgibt, muss im Definitionsbereich von g liegen.

> [!WARNING]
> **Achtung**
> g ∘ f ist meistens nicht dasselbe wie f ∘ g. Und erst den Definitionsbereich prüfen, dann einsetzen.

## Stetigkeit

### Was ist das?

f ist **stetig in x̂**, wenn lim (x → x̂) f(x) existiert und gleich f(x̂) ist. Anschaulich: Eine kleine Änderung bei x bewirkt nur eine kleine Änderung bei f(x).

### Den Parameter c bestimmen (Folie 79)

Bestimmen Sie c so, dass f stetig ist: f(x) = (x² + 2x − 3)/(x² + x − 2) für x ≠ 1, f(1) = c.

1. **Idee:** c muss genau dort liegen, wo der Graph bei x = 1 hinläuft. Also c = lim (x → 1) f(x).
2. **Einsetzen:** (1 + 2 − 3)/(1 + 1 − 2) = 0/0 ⇒ umformen.
3. **Faktorisieren:** In beiden steckt (x − 1). x² + 2x − 3 = (x + 3)(x − 1) und x² + x − 2 = (x + 2)(x − 1).
4. **Kürzen und einsetzen:** (x + 3)/(x + 2) → 4/3.
5. **Ergebnis:** c = 4/3. Jedes andere c ergibt einen Sprung.

Welche Funktionen sind stetig? Polynome überall. Brüche p(x)/q(x) überall, wo q(x) ≠ 0. Wurzeln auf [0, ∞). eˣ, ln, sin und cos auf ihrem ganzen Definitionsbereich. Summen, Produkte, Quotienten und Verkettungen stetiger Funktionen sind wieder stetig.

> [!IMPORTANT]
> **Das Wichtigste**
> „Bestimme c, damit f stetig ist“ heißt: Grenzwert an der kritischen Stelle ausrechnen. Der ist c.

> [!WARNING]
> **Achtung**
> Stetigkeit prüft man nur an Stellen, die in D liegen. 1/(x − 2) hat bei 2 eine Polstelle, ist aber auf ihrem Definitionsbereich ℝ \ {2} stetig.

## Unstetigkeiten

### Was ist das?

Wenn eine Funktion an einer Stelle nicht stetig ist, gibt es drei typische Gründe (Folie „Unstetigkeiten“). Teste jeweils mit Zahlen knapp links und knapp rechts.

| Typ | Was passiert | Beispiel | Zahlen |
|---|---|---|---|
| Sprungstelle | links und rechts verschiedene Grenzwerte | 1 für x ≥ 0, −1 für x < 0, bei 0 | f(−0,001) = −1, f(0,001) = 1 |
| Polstelle | \|f(x)\| wächst über alle Grenzen | 1/(x − 2) bei 2 | f(2,01) = 100, f(1,99) = −100 |
| Oszillationsstelle | f schwingt immer schneller | sin(1/x) bei 0 | wechselt zwischen 1 und −1 |

> [!IMPORTANT]
> **Das Wichtigste**
> Sprung: links ≠ rechts. Pol: Werte laufen nach ±∞. Oszillation: Werte kommen keiner Zahl nahe.

> [!WARNING]
> **Achtung**
> Auf der Folie steht bei der Oszillation „unbeschränkte Schwankungen“. sin(1/x) bleibt aber zwischen −1 und 1. Gemeint ist: Die Schwankungen werden nicht kleiner.

## ln und e ohne Taschenrechner

### Was ist das?

| Regel | Merksatz |
|---|---|
| e^(ln a) = a, ln(eᵃ) = a | e und ln heben sich auf |
| ln(a · b) = ln a + ln b | mal wird plus |
| ln(a/b) = ln a − ln b | geteilt wird minus |
| ln(aʳ) = r · ln a | Hochzahl nach vorne |
| log₂ a = ln a/ln 2 | Basis umrechnen |

Das Zeichen ^ heißt hier „hoch“: e^(ln a) ist e hoch (ln a).

Vorgehen bei ln-Aufgaben, durchgerechnet für ln(2x) + ln(2y) − ln(z) − ln(4) mit x, y, z > 0:

1. Hochzahlen nach vorne holen. Hier gibt es keine.
2. Plus und Minus zu einem Bruch zusammenfassen: ln((2x · 2y)/(4z)).
3. Kürzen: ln(xy/z).

> [!IMPORTANT]
> **Das Wichtigste**
> Mal wird plus, geteilt wird minus, die Hochzahl kommt nach vorne. Eine Gleichung mit e löst du, indem du auf beiden Seiten ln nimmst.

> [!WARNING]
> **Achtung**
> ln(a + b) ist nicht ln a + ln b. Für Summen gibt es keine ln-Regel.

## Übungen

> [!TIP]
> **Übung 1 · mittel**
> Vereinfachen Sie ohne Taschenrechner: a) √(e^(3 ln 4)) · b) ½ · log₂(4e²) − 1/ln 2 · c) ln(x² − y²) − ln(2(x − y)) für x > y > 0 · d) ln(x^(2/3)) − ln(∛(x⁴)) für x > 0
>
> Quelle: Folien 04.11., Aufgabe FU-1 (Folie 80), Auswahl

> [!TIP]
> **Übung 2 · mittel**
> Löse ohne Taschenrechner: e^(2x − 1) = 5. Gib x exakt an.
>
> Quelle: eigene Aufgabe, Klausurstil

> [!TIP]
> **Übung 3 · mittel**
> f(x) = x² + 1 für x ≤ 2 und f(x) = ax − 3 für x > 2. Bestimme a so, dass f stetig ist.
>
> Quelle: eigene Aufgabe, Klausurstil

> [!TIP]
> **Übung 4 · Prüfungsniveau**
> Wie muss c gewählt werden, damit f stetig ist? D = (0, ∞), f(x) = (x³ − 2x² − 5x + 6)/(x³ − x) für x ≠ 1, f(1) = c.
>
> Quelle: Folien 04.11., Aufgabe FU-7 b

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> Richtig oder falsch? Für f: (a, b) → ℝ gilt: a) f ist stetig, falls linker und rechter Grenzwert überall gleich sind. b) f ist stetig, falls an jeder Stelle der Grenzwert existiert und gleich f(x̂) ist. c) Ist f stetig, so ist f beschränkt. d) Ist f stetig, hat eine Nullstelle und ist nicht konstant 0, so nimmt f Werte < 0 und > 0 an. e) Ist f stetig und monoton, so wird jeder Wert genau einmal angenommen.
>
> Quelle: Folien 04.11., Aufgabe FU-6 (Folie 85, sinngemäß)

## Lösungen

### Übung 1

a) 3 ln 4 = ln 4³ = ln 64. e^(ln 64) = 64. √64 = 8.

b) log₂(4e²) = log₂ 4 + log₂ e² = 2 + 2/ln 2. Die Hälfte: 1 + 1/ln 2. Minus 1/ln 2 ergibt 1.

c) ln((x² − y²)/(2(x − y))) = ln((x − y)(x + y)/(2(x − y))) = ln((x + y)/2). Dritte binomische Formel.

d) ⅔ ln x − (4/3) ln x = −⅔ ln x.

### Übung 2

1. ln auf beiden Seiten: 2x − 1 = ln 5, weil e und ln sich aufheben.
2. Auflösen: x = (1 + ln 5)/2 ≈ 1,305.
3. Probe: 2 · 1,305 − 1 = 1,609, und e hoch 1,609 ≈ 5.

### Übung 3

1. Kritische Stelle x = 2, dort wechselt die Formel.
2. Von links und Funktionswert: 2² + 1 = 5.
3. Von rechts: 2a − 3.
4. Gleichsetzen: 2a − 3 = 5 ⇒ a = 4.

Probe: 4 · 2 − 3 = 5, kein Sprung.

### Übung 4

1. Einsetzen: Zähler 1 − 2 − 5 + 6 = 0, Nenner 1 − 1 = 0 ⇒ 0/0.
2. Zähler durch (x − 1): (x − 1)(x² − x − 6) = (x − 1)(x − 3)(x + 2).
3. Nenner: x³ − x = x(x − 1)(x + 1). Die Nullstellen 0 und −1 liegen nicht in D.
4. Kürzen: (x − 3)(x + 2)/(x(x + 1)). Bei x = 1: (−2) · 3/(1 · 2) = −3.

Also c = −3. Probe: f(1,0001) ≈ −2,9995, f(0,9999) ≈ −3,0005.

### Übung 5

Für „falsch“ reicht ein Gegenbeispiel.

a) Falsch. f(x) = 0 für x ≠ 0 und f(0) = 1: Beide Grenzwerte sind 0, aber der Punkt liegt bei 1. Es fehlt „= f(x̂)“.

b) Richtig. Das ist die Definition.

c) Falsch. Das Intervall ist offen: 1/x auf (0, 1) läuft nach +∞.

d) Falsch. x² auf (−1, 1) hat die Nullstelle 0, wird aber nie negativ.

e) Falsch. f(x) = 5 ist monoton und nimmt 5 überall an. Erst „streng monoton“ macht die Aussage richtig.

Die Fallen stecken in kleinen Wörtern: offen oder geschlossen, monoton oder streng monoton.
