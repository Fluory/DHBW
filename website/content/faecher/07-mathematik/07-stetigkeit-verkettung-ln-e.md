---
title: "Stetigkeit, Verkettung, ln und e"
order: 7
summary: "Funktionen hintereinander ausführen, Stetigkeit und den Parameter c bestimmen, die drei Arten von Unstetigkeiten und Rechnen mit ln und e ohne Taschenrechner."
klausur: "relevant"
---

Stetig heißt anschaulich: Du kannst den Graphen zeichnen, ohne den Stift abzusetzen, also ohne Lücke und ohne Sprung. Dazu kommen in diesem Kapitel zwei Werkzeuge: Funktionen hintereinander ausführen (Verkettung) und Rechnen mit ln und e.

Ein Alltagsbeispiel: Ein Paketdienst berechnet den Preis nach Gewicht. Bis 2 kg kostet es 5 €, darüber 8 €. Bei 2 kg springt der Preis. Diese Preisfunktion ist dort **nicht stetig**. Ein Taxameter dagegen zählt gleichmäßig hoch. Der Stoff stammt vom 04.11. (Folien 68, 79, 80 und 85 sowie die Aufgaben FU-1, FU-6 und FU-7).

Du brauchst dafür nur das Rezept aus Kapitel 6: Grenzwerte ausrechnen durch Einsetzen, Faktorisieren und Kürzen. Alles andere wird hier Schritt für Schritt erklärt.

## Verkettung von Funktionen

### In einem Satz

Verkettung heißt: Du rechnest erst die eine Funktion aus und steckst das Ergebnis gleich in die nächste.

### Stell dir vor

Zwei Automaten stehen hintereinander. Du wirfst x in den ersten Automaten f. Was unten herauskommt, fällt direkt in den Einwurf des zweiten Automaten g. Erst g gibt das Endergebnis aus.

Das klappt nur, wenn der Ausgang des ersten in den Eingang des zweiten passt. Spuckt f etwas aus, das g nicht annimmt (wie eine Münze, die nicht in den Schlitz passt), bleibt die Maschine stecken.

### Mit Zahlen

f(x) = x + 1 und g(x) = x². Rechne g(f(3)):

1. Erst f: f(3) = 3 + 1 = 4.
2. Dann g mit der 4: g(4) = 4² = 16.

Andersherum, f(g(3)):

1. Erst g: g(3) = 3² = 9.
2. Dann f mit der 9: f(9) = 9 + 1 = 10.

16 ist nicht 10. Die Reihenfolge ist wichtig.

| x | f(x) = x + 1 | g(f(x)) = (x + 1)² | g(x) = x² | f(g(x)) = x² + 1 |
|---|---|---|---|---|
| 0 | 1 | 1 | 0 | 1 |
| 1 | 2 | 4 | 1 | 2 |
| 2 | 3 | 9 | 4 | 5 |
| 3 | 4 | 16 | 9 | 10 |

### Die Formel

(g ∘ f)(x) = g(f(x))

- **∘** ist ein kleiner Kreis und heißt „nach“. g ∘ f liest du „g nach f“.
- **f(x)** wird zuerst ausgerechnet, es ist der innere Automat.
- **g( … )** bekommt das Ergebnis von f als Eingabe, es ist der äußere Automat.

Achtung beim Lesen: In g ∘ f steht g vorne, aber f läuft zuerst. Man liest von rechts nach links, so wie in g(f(x)) die innere Klammer zuerst dran ist.

### So steht es auf der Folie

Folie 68 schreibt (sinngemäß): f: D_f → ℝ, g: D_g → ℝ mit f(D_f) ⊆ D_g, dann ist g ∘ f: D_f → ℝ, x ↦ g(f(x)).

Auf Deutsch heißt das:

- **f: D_f → ℝ** heißt: f nimmt Zahlen aus der Menge D_f (dem Definitionsbereich, also allem, was f annimmt) und gibt reelle Zahlen aus.
- **f(D_f) ⊆ D_g** heißt: Alles, was f ausgibt, liegt im Definitionsbereich von g. ⊆ liest du „liegt ganz in“. Das ist genau „der Ausgang passt in den Eingang“.
- **x ↦ g(f(x))** heißt: „x wird geschickt auf g(f(x))“. Der Pfeil ↦ zeigt, was mit einem einzelnen x passiert.

### So rechnest du

Durchgerechnet für f: ℝ → ℝ, x ↦ sin(x) und g: [−2, 2] → ℝ, x ↦ 1 − x²:

1. **Was gibt f aus?** sin(x) liegt immer zwischen −1 und 1.
2. **Passt das in g?** g nimmt alles von −2 bis 2. Das Stück von −1 bis 1 liegt darin. Ja, es passt.
3. **Einsetzen:** In g(x) = 1 − x² schreibst du für jedes x den Ausdruck sin(x): h(x) = 1 − (sin(x))² = 1 − sin²(x).
4. **Probe mit Zahlen:**

| x | sin(x) | h(x) = 1 − sin²(x) |
|---|---|---|
| 0 | 0 | 1 − 0 = 1 |
| 1 | 0,8415 | 1 − 0,7081 = 0,2919 |
| π/2 ≈ 1,5708 | 1 | 1 − 1 = 0 |

Zweites Folienbeispiel: g: (0, 1) → ℝ, x ↦ 1/(x² − x) und f: ℝ → ℝ, x ↦ 1/(1 + x²).

1. **Was gibt f aus?** 1 + x² ist immer mindestens 1. Also ist 1/(1 + x²) immer größer als 0 und höchstens 1. f gibt Werte in (0, 1] aus. Die eckige Klammer heißt: Die 1 gehört dazu.
2. **Passt das in g?** g nimmt nur (0, 1). Die runde Klammer heißt: 0 und 1 gehören **nicht** dazu. Bei x = 0 ist f(0) = 1/(1 + 0) = 1, und die 1 passt nicht in g. Für x = 0 geht g ∘ f also nicht. Für alle anderen x ist f(x) < 1, das passt.
3. **Einsetzen:** Schreibe kurz u = f(x) = 1/(1 + x²). Dann ist u² − u = u · (u − 1).
   - u − 1 = 1/(1 + x²) − (1 + x²)/(1 + x²) = −x²/(1 + x²)
   - u · (u − 1) = 1/(1 + x²) · (−x²/(1 + x²)) = −x²/(1 + x²)²
   - g(u) = 1/(u² − u) = 1/(−x²/(1 + x²)²) = −(1 + x²)²/x²
4. Ergebnis für x ≠ 0: h(x) = −(1 + x²)²/x².
5. **Probe:**

| x | f(x) | g(f(x)) direkt | Formel −(1 + x²)²/x² |
|---|---|---|---|
| 1 | ½ | 1/(¼ − ½) = 1/(−¼) = −4 | −2²/1 = −4 |
| 2 | 0,2 | 1/(0,04 − 0,2) = 1/(−0,16) = −6,25 | −5²/4 = −6,25 |

> [!IMPORTANT]
> **Das Wichtigste**
> Bei g ∘ f läuft f zuerst. Was f ausgibt, muss im Definitionsbereich von g liegen.

> [!WARNING]
> **Typischer Fehler**
> g ∘ f mit f ∘ g verwechseln. Meistens ist das nicht dasselbe (16 ≠ 10 oben). Und: Erst prüfen, ob der Ausgang von f in den Eingang von g passt, dann einsetzen.

## Stetigkeit

### In einem Satz

Eine Funktion ist stetig, wenn ihr Graph eine durchgehende Linie ist, ohne Loch und ohne Stufe.

### Stell dir vor

Du fährst mit dem Fahrrad eine Straße entlang. Ist sie stetig, kommst du ohne Ruckeln durch. Es gibt kein Loch, in das du fällst, und keine Stufe, an der du hoch- oder runterspringen musst. Gleichbedeutend: Du kannst die Linie mit dem Stift zeichnen, ohne ihn abzusetzen.

### Mit Zahlen

Der Paketpreis: 5 € bis einschließlich 2 kg, darüber 8 €.

| Gewicht in kg | 1,9 | 1,99 | 1,999 | 2 | 2,001 | 2,01 | 2,1 |
|---|---|---|---|---|---|---|---|
| Preis in € | 5 | 5 | 5 | 5 | 8 | 8 | 8 |

Von links läufst du auf 5 zu, von rechts auf 8. Da ist eine Stufe. Nicht stetig bei 2.

Dagegen f(x) = x²:

| x | 1,9 | 1,99 | 2 | 2,01 | 2,1 |
|---|---|---|---|---|---|
| x² | 3,61 | 3,9601 | 4 | 4,0401 | 4,41 |

Von beiden Seiten geht es auf 4 zu, und der Wert genau bei 2 ist auch 4. Stetig bei 2.

### Die Formel

f ist stetig in x̂, wenn lim (x → x̂) f(x) = f(x̂).

- **x̂** („x Dach“) ist die Stelle, die du prüfst.
- **lim (x → x̂) f(x)** ist der Grenzwert: wohin die Straße von links und rechts läuft.
- **f(x̂)** ist der Funktionswert genau an der Stelle: wo die Straße an diesem Punkt wirklich ist.

Stetig heißt also drei Dinge auf einmal:

1. f(x̂) gibt es (kein Loch).
2. Der Grenzwert existiert, links = rechts (keine Stufe).
3. Beide sind gleich (der Punkt liegt genau auf der Linie).

### So steht es auf der Folie

Sinngemäß: f: D → ℝ heißt stetig in x̂ ∈ D, falls lim (x → x̂) f(x) existiert und lim (x → x̂) f(x) = f(x̂) gilt. f heißt stetig, wenn f in jedem x̂ ∈ D stetig ist.

Auf Deutsch heißt das: x̂ ∈ D liest du „x Dach liegt in D“, die Stelle gehört also zum Definitionsbereich. Dort muss der Ort, auf den die Straße zuläuft, genau der Ort sein, an dem sie wirklich ist. Und eine stetige Funktion ist eine, bei der das an jeder Stelle klappt.

Anschaulich sagt die Vorlesung dazu: Eine kleine Änderung bei x bewirkt nur eine kleine Änderung bei f(x).

### Welche Funktionen sind stetig?

- Polynome (wie x² + 3x − 1) überall.
- Brüche p(x)/q(x) überall, wo der Nenner q(x) ≠ 0 ist.
- Wurzeln auf [0, ∞).
- eˣ, ln, sin und cos auf ihrem ganzen Definitionsbereich.
- Summen, Produkte, Quotienten und Verkettungen stetiger Funktionen sind wieder stetig.

Kritisch sind also fast nur zwei Arten von Stellen: wo ein Nenner 0 wird, und wo eine Funktion „stückweise“ definiert ist und die Formel wechselt.

> [!WARNING]
> **Typischer Fehler**
> Stetigkeit an einer Stelle prüfen, die gar nicht in D liegt. 1/(x − 2) hat bei 2 eine Polstelle, ist aber auf ihrem Definitionsbereich ℝ \ {2} („alle reellen Zahlen ohne die 2“) stetig. An x = 2 fährt diese Straße gar nicht vorbei.

## Den Parameter c bestimmen (Folie 79)

### In einem Satz

Du suchst genau den Wert, den die Funktion an einer Stelle haben muss, damit dort kein Loch und kein Sprung ist.

### Stell dir vor

In der Straße ist ein Loch an einer Stelle. Du sollst einen Stein hineinlegen, und zwar genau so hoch, dass die Straße danach glatt ist. Ein zu hoher Stein wäre eine Beule, ein zu niedriger eine Delle. Die passende Höhe ist die Höhe, auf die die Straße von beiden Seiten zuläuft: der Grenzwert.

### Mit Zahlen

Die Aufgabe (Folie 79): Bestimmen Sie c so, dass f stetig ist: f(x) = (x² + 2x − 3)/(x² + x − 2) für x ≠ 1, f(1) = c.

Bei x = 1 ist das Loch, denn dort wäre der Nenner 1 + 1 − 2 = 0. Erst die Zahlen nahe dran:

| x | 0,9 | 0,99 | 0,999 | 1,001 | 1,01 | 1,1 |
|---|---|---|---|---|---|---|
| f(x) | 1,3448 | 1,3344 | 1,3334 | 1,3332 | 1,3322 | 1,3226 |

Von beiden Seiten geht es auf etwa 1,3333 zu. Das ist 4/3.

### So rechnest du

1. **Idee:** c muss genau dort liegen, wo der Graph bei x = 1 hinläuft. Also c = lim (x → 1) f(x).
2. **Einsetzen:** oben 1 + 2 − 3 = 0, unten 1 + 1 − 2 = 0. Also 0/0 ⇒ umformen.
3. **Faktorisieren:** Weil beide bei 1 null sind, steckt in beiden (x − 1).
   - x² + 2x − 3 = (x + 3)(x − 1). Probe: x² − x + 3x − 3 = x² + 2x − 3.
   - x² + x − 2 = (x + 2)(x − 1). Probe: x² − x + 2x − 2 = x² + x − 2.
4. **Kürzen:** (x − 1) fällt weg. Übrig: (x + 3)/(x + 2).
5. **Neu einsetzen:** (1 + 3)/(1 + 2) = 4/3.
6. **Ergebnis:** c = 4/3 ≈ 1,3333. Das passt zur Tabelle. Jedes andere c ergibt eine Beule oder Delle, also ist f dann nicht stetig.

> [!IMPORTANT]
> **Das Wichtigste**
> „Bestimme c, damit f stetig ist“ heißt: Grenzwert an der kritischen Stelle ausrechnen. Der ist c.

> [!WARNING]
> **Typischer Fehler**
> c einfach durch Einsetzen in die ursprüngliche Formel bestimmen wollen. Das gibt 0/0 und hilft nicht. Erst kürzen, dann einsetzen.

## Unstetigkeiten

### In einem Satz

Wenn eine Funktion an einer Stelle nicht stetig ist, gibt es drei typische Gründe: eine Stufe, einen Absturz ins Unendliche oder ein wildes Hin und Her.

### Stell dir vor

Drei kaputte Straßen:

- **Sprungstelle:** eine Stufe, wie beim Paketpreis. Links und rechts endet die Straße auf verschiedener Höhe.
- **Polstelle:** links und rechts geht die Straße immer steiler nach oben oder unten, ohne Ende.
- **Oszillationsstelle:** die Straße wird zu einer Wellenbahn, deren Wellen immer enger werden, wie ein Scheibenwischer, der immer schneller wird.

### Mit Zahlen

Teste jeweils mit Zahlen knapp links und knapp rechts (Folie „Unstetigkeiten“):

| Typ | Was passiert | Beispiel | Zahlen |
|---|---|---|---|
| Sprungstelle | links und rechts verschiedene Grenzwerte | 1 für x ≥ 0, −1 für x < 0, bei 0 | f(−0,001) = −1, f(0,001) = 1 |
| Polstelle | \|f(x)\| wächst über alle Grenzen | 1/(x − 2) bei 2 | f(1,99) = −100, f(2,01) = 100 |
| Oszillationsstelle | f schwingt immer schneller | sin(1/x) bei 0 | f(0,2122) = −1, f(0,1273) = 1, f(0,0909) = −1 |

|f(x)| heißt „Betrag von f(x)“, also der Wert ohne Vorzeichen: |−100| = 100.

> [!IMPORTANT]
> **Das Wichtigste**
> Sprung: links ≠ rechts. Pol: Werte laufen nach ±∞. Oszillation: Werte kommen keiner Zahl nahe.

> [!WARNING]
> **Typischer Fehler**
> Auf der Folie steht bei der Oszillation „unbeschränkte Schwankungen“. Das klingt, als würden die Werte riesig. sin(1/x) bleibt aber zwischen −1 und 1. Gemeint ist: Die Schwankungen werden nicht kleiner, sie hören nie auf.

## ln und e ohne Taschenrechner

### In einem Satz

ln beantwortet die Frage: „Welche Hochzahl brauche ich, damit e hoch diese Zahl herauskommt?“

### Stell dir vor

e ist eine feste Zahl, ungefähr 2,72, so wie π ungefähr 3,14 ist. Potenzieren heißt: Du kennst die Hochzahl und rechnest das Ergebnis aus. ln ist der Rückwärtsgang: Du kennst das Ergebnis und suchst die Hochzahl.

Wie bei 2er-Potenzen: 2³ = 8. Die Frage „2 hoch wie viel ist 8?“ hat die Antwort 3. Genau dieselbe Frage stellt ln, nur mit e statt 2.

### Mit Zahlen

| Hochzahl k | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| eᵏ | 1 | ≈ 2,72 | ≈ 7,39 | ≈ 20,09 |

Rückwärts gelesen:

| Zahl a | 1 | 2,72 | 7,39 | 20,09 |
|---|---|---|---|---|
| ln a („welche Hochzahl?“) | 0 | ≈ 1 | ≈ 2 | ≈ 3 |

Deshalb gilt exakt: ln 1 = 0 und ln e = 1.

### Die Formel

ln a = k bedeutet genau dasselbe wie eᵏ = a.

- **e** ist die Eulersche Zahl, e ≈ 2,718.
- **a** ist die Zahl, deren Hochzahl du suchst. a muss größer als 0 sein, denn e hoch irgendwas ist nie 0 oder negativ.
- **k** ist die gesuchte Hochzahl.
- Das Zeichen ^ heißt hier „hoch“: e^(ln a) ist e hoch (ln a).

### Warum die Rechenregeln gelten

Alle ln-Regeln kommen von den Potenzregeln. Erst mit 2er-Potenzen, da kannst du alles im Kopf nachrechnen:

**Mal wird plus.** 2² · 2³ = 4 · 8 = 32 = 2⁵. Die Hochzahlen addieren sich: 2 + 3 = 5. Allgemein eᵃ · eᵇ = e^(a + b). Mit Zahlen: e¹ · e² ≈ 2,72 · 7,39 ≈ 20,1 ≈ e³. Weil ln nach der Hochzahl fragt: ln(a · b) = ln a + ln b. Probe: ln(2,72 · 7,39) ≈ ln(20,09) ≈ 3 = 1 + 2.

**Geteilt wird minus.** 2⁵/2² = 32/4 = 8 = 2³. Die Hochzahlen ziehen sich ab: 5 − 2 = 3. Also ln(a/b) = ln a − ln b.

**Hochzahl nach vorne.** (2²)³ = 4³ = 64 = 2⁶. Die Hochzahlen multiplizieren sich: 2 · 3 = 6. Also ln(aʳ) = r · ln a. Probe: ln(7,39) ≈ 2 = 2 · ln(2,72).

**e und ln heben sich auf.** ln fragt „welche Hochzahl?“. Bei eᵃ ist die Hochzahl a, also ln(eᵃ) = a. Umgekehrt ist ln a die Hochzahl, mit der e zu a wird, also e^(ln a) = a.

**Basis umrechnen.** log₂ a fragt „2 hoch wie viel ist a?“. Schreibe a = 2ʸ. ln auf beiden Seiten: ln a = y · ln 2. Also y = ln a/ln 2. Probe: log₂ 8 = ln 8/ln 2 ≈ 2,0794/0,6931 = 3, und 2³ = 8.

### So steht es auf der Folie

| Regel | Auf Deutsch |
|---|---|
| e^(ln a) = a, ln(eᵃ) = a | e und ln heben sich auf |
| ln(a · b) = ln a + ln b | mal wird plus |
| ln(a/b) = ln a − ln b | geteilt wird minus |
| ln(aʳ) = r · ln a | Hochzahl nach vorne |
| log₂ a = ln a/ln 2 | Basis umrechnen |

### So rechnest du

Durchgerechnet für ln(2x) + ln(2y) − ln(z) − ln(4) mit x, y, z > 0:

1. Hochzahlen nach vorne holen. Hier gibt es keine.
2. Plus kommt in den Zähler, Minus in den Nenner: ln((2x · 2y)/(z · 4)).
3. Ausmultiplizieren: 2x · 2y = 4xy, also ln(4xy/(4z)).
4. Kürzen: Die 4 fällt weg. Ergebnis: ln(xy/z).
5. Probe mit x = 1,5, y = 2, z = 3: ln 3 + ln 4 − ln 3 − ln 4 = 0, und ln(1,5 · 2/3) = ln 1 = 0.

Eine Gleichung mit e löst du, indem du auf beiden Seiten ln nimmst. Beispiel: eˣ = 7,39 ⇒ x = ln 7,39 ≈ 2.

> [!IMPORTANT]
> **Das Wichtigste**
> Mal wird plus, geteilt wird minus, die Hochzahl kommt nach vorne. Eine Gleichung mit e löst du, indem du auf beiden Seiten ln nimmst.

> [!WARNING]
> **Typischer Fehler**
> ln(a + b) = ln a + ln b. Das ist falsch. Für Summen gibt es keine ln-Regel. Probe: ln(1 + 1) = ln 2 ≈ 0,69, aber ln 1 + ln 1 = 0 + 0 = 0.

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

**a)** √(e^(3 ln 4))

1. Hochzahl nach hinten (Regel rückwärts): 3 ln 4 = ln(4³) = ln 64.
2. e und ln heben sich auf: e^(ln 64) = 64.
3. Wurzel: √64 = 8.

Ergebnis: 8.

**b)** ½ · log₂(4e²) − 1/ln 2

1. Mal wird plus: log₂(4e²) = log₂ 4 + log₂(e²).
2. log₂ 4 = 2, denn 2² = 4.
3. Hochzahl nach vorne: log₂(e²) = 2 · log₂ e.
4. Basis umrechnen: log₂ e = ln e/ln 2 = 1/ln 2. Also log₂(e²) = 2/ln 2.
5. Zusammen: log₂(4e²) = 2 + 2/ln 2.
6. Die Hälfte: ½ · (2 + 2/ln 2) = 1 + 1/ln 2.
7. Minus 1/ln 2: 1 + 1/ln 2 − 1/ln 2 = 1.

Ergebnis: 1.

**c)** ln(x² − y²) − ln(2(x − y))

1. Geteilt wird minus (rückwärts): ln((x² − y²)/(2(x − y))).
2. Dritte binomische Formel: x² − y² = (x − y)(x + y).
3. Einsetzen: ln((x − y)(x + y)/(2(x − y))).
4. Kürzen: (x − y) fällt weg. Das geht, weil x > y, also x − y ≠ 0.
5. Ergebnis: ln((x + y)/2).

Probe mit x = 3, y = 1: ln(9 − 1) − ln(2 · 2) = ln 8 − ln 4 = ln 2, und ln((3 + 1)/2) = ln 2.

**d)** ln(x^(2/3)) − ln(∛(x⁴))

1. Hochzahl nach vorne: ln(x^(2/3)) = ⅔ · ln x.
2. Eine dritte Wurzel ist die Hochzahl ⅓: ∛(x⁴) = (x⁴)^(1/3) = x^(4/3).
3. Hochzahl nach vorne: ln(x^(4/3)) = (4/3) · ln x.
4. Abziehen: ⅔ ln x − (4/3) ln x = (2/3 − 4/3) ln x = −⅔ ln x.

Ergebnis: −⅔ ln x. Probe mit x = 2: beide Seiten ≈ −0,4621.

### Übung 2

1. ln auf beiden Seiten: ln(e^(2x − 1)) = ln 5.
2. e und ln heben sich auf: 2x − 1 = ln 5.
3. Plus 1 auf beiden Seiten: 2x = 1 + ln 5.
4. Durch 2: x = (1 + ln 5)/2.

Das ist die exakte Lösung. Zur Kontrolle mit Taschenrechner: ln 5 ≈ 1,6094, also x ≈ 2,6094/2 ≈ 1,305.

Probe: 2 · 1,305 − 1 = 1,609, und e hoch 1,609 ≈ 5.

### Übung 3

1. Kritische Stelle: x = 2, dort wechselt die Formel. Überall sonst sind beide Teile Polynome, also stetig.
2. Von links und genau bei 2 gilt die erste Formel: 2² + 1 = 4 + 1 = 5.
3. Von rechts gilt die zweite Formel: Sie läuft auf a · 2 − 3 = 2a − 3 zu.
4. Kein Sprung heißt: beide Seiten gleich. 2a − 3 = 5.
5. Plus 3: 2a = 8. Durch 2: a = 4.

Probe mit a = 4:

| x | 1,9 | 1,99 | 2 | 2,01 | 2,1 |
|---|---|---|---|---|---|
| f(x) | 4,61 | 4,9601 | 5 | 5,04 | 5,4 |

Von beiden Seiten geht es auf 5 zu. Kein Sprung.

### Übung 4

1. Einsetzen x = 1: Zähler 1 − 2 − 5 + 6 = 0, Nenner 1 − 1 = 0 ⇒ 0/0 ⇒ umformen.
2. Der Zähler ist bei 1 null, also steckt (x − 1) darin. Horner-Schema mit 1, Vorzahlen 1, −2, −5, 6:

| | 1 | −2 | −5 | 6 |
|---|---|---|---|---|
| + (vorige Zahl · 1) | | 1 | −1 | −6 |
| = | 1 | −1 | −6 | 0 |

Also Zähler = (x − 1)(x² − x − 6).
3. x² − x − 6 zerlegen: Gesucht sind zwei Zahlen mit Produkt −6 und Summe −1. Das sind −3 und 2. Also x² − x − 6 = (x − 3)(x + 2).
4. Nenner: x ausklammern, dann binomische Formel. x³ − x = x(x² − 1) = x(x − 1)(x + 1). Die Nullstellen 0 und −1 liegen nicht in D = (0, ∞), nur die 1 ist kritisch.
5. Kürzen: (x − 1) fällt weg. Übrig: (x − 3)(x + 2)/(x(x + 1)).
6. Neu einsetzen x = 1: (1 − 3)(1 + 2)/(1 · (1 + 1)) = (−2) · 3/2 = −6/2 = −3.

Also c = −3. Probe:

| x | 0,99 | 0,999 | 1,001 | 1,01 |
|---|---|---|---|---|
| f(x) | −3,0506 | −3,005 | −2,995 | −2,9505 |

### Übung 5

Für „falsch“ reicht ein einziges Gegenbeispiel.

**a) Falsch.** Gegenbeispiel: f(x) = 0 für x ≠ 0 und f(0) = 1. Von links und von rechts läuft die Straße auf 0 zu, beide Grenzwerte sind gleich. Aber der Punkt selbst liegt bei 1, wie ein Stein, der aus der Straße herausragt. Es fehlt die Bedingung „= f(x̂)“.

**b) Richtig.** Das ist genau die Definition: Grenzwert existiert und ist gleich dem Funktionswert.

**c) Falsch.** Beschränkt heißt: Die Werte bleiben unter einer festen Obergrenze und über einer festen Untergrenze. Das Intervall (a, b) ist aber offen, die Ränder gehören nicht dazu. Gegenbeispiel: 1/x auf (0, 1) ist stetig, aber f(0,1) = 10, f(0,01) = 100, f(0,001) = 1000, es läuft nach +∞.

**d) Falsch.** Gegenbeispiel: x² auf (−1, 1). Es hat die Nullstelle 0 und ist nicht überall 0, aber x² wird nie negativ. Die Kurve berührt die Achse nur und geht wieder hoch.

**e) Falsch.** Monoton heißt nur „wird nie kleiner“ (oder nie größer). Gegenbeispiel: f(x) = 5 ist monoton und stetig, nimmt den Wert 5 aber überall an, nicht genau einmal. Erst „streng monoton“ (wird immer echt größer) macht die Aussage richtig.

Die Fallen stecken in kleinen Wörtern: offen oder geschlossen, monoton oder streng monoton.
