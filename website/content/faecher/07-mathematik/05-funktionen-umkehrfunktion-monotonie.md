---
title: "Funktionen, Umkehrfunktion und Monotonie"
order: 5
summary: "Definitionsmenge, Zielmenge und Bild, injektiv, surjektiv und bijektiv, die Umkehrfunktion mit quadratischer Ergänzung sowie Monotonie und Beschränktheit von Funktionen."
klausur: "relevant"
---

Eine Funktion ist eine Maschine: Oben wirfst du eine Zahl x hinein, unten kommt genau eine Zahl f(x) heraus. In diesem Kapitel lernst du, wann man die Maschine rückwärts laufen lassen kann (Umkehrfunktion) und wie man prüft, ob sie immer steigt oder fällt (Monotonie) und ob ihre Werte in einem Bereich bleiben (Beschränktheit).

Ein Alltagsbeispiel aus der Ökonomie (Folie): Die verkaufte Menge bestimmt den Umsatz. Umsatz = 2 € · Menge ist eine Funktion. Rückwärts gefragt: Wie viel muss ich verkaufen, um 500 € Umsatz zu machen? Das ist die Umkehrfunktion. Dieses Kapitel gehört zum Nachmittag des 04.11. (Folien „Analysis – Reihen + Funktionen“).

## Was ist eine Funktion?

### Was ist das?

Eine Funktion f ordnet jeder Zahl x aus einer Menge D genau eine Zahl f(x) aus einer Menge Z zu (Folie 62):

f: D → Z, x ↦ f(x). Beispiel: f: ℝ → ℝ, x ↦ x² + 1.

| Begriff | Bedeutung | bei f(x) = x² + 1 |
|---|---|---|
| Definitionsmenge D | was man einsetzen darf | ℝ |
| Zielmenge Z (Folie: „Wertemenge“) | wo Ergebnisse landen dürfen, wird festgelegt | ℝ |
| Bild f(D) | was wirklich herauskommt, muss man ausrechnen | [1, ∞), weil x² ≥ 0 |

Intervalle: [2, ∞) heißt „alle x mit x ≥ 2“, die eckige Klammer schließt den Rand ein. (−1, 1) heißt „−1 < x < 1“, die runde Klammer schließt ihn aus.

Der **Graph** ist die Menge aller Punkte (x, f(x)). Bei einer Funktion trifft jede senkrechte Linie den Graphen höchstens einmal. Ein Kreis ist deshalb kein Funktionsgraph.

Zwei Funktionen kann man kombinieren: f + g, f − g und f · g sind dort definiert, wo beide definiert sind. Bei f/g muss zusätzlich g(x) ≠ 0 sein. Beispiel: f(x) = √x und g(x) = x − 1. Dann ist f/g definiert auf [0, ∞) ohne die 1.

> [!IMPORTANT]
> **Das Wichtigste**
> Größter Definitionsbereich: Nenner ≠ 0, unter der Wurzel ≥ 0. Das Bild kann kleiner sein als die Zielmenge.

> [!WARNING]
> **Achtung**
> Keine Funktion ist eine Vorschrift, die einem x zwei Ergebnisse gibt („x ↦ ±√x“) oder einem erlaubten x gar keins.

## injektiv, surjektiv, bijektiv

### Was ist das?

Bild mit Sitzplätzen (Mitschrift 04.11.): Die Studierenden sind die x, die Stühle die y. Jede Person sitzt auf genau einem Stuhl. Jetzt fragt man nach den Stühlen:

| Begriff | im Hörsaal | in Mathe |
|---|---|---|
| injektiv | kein Stuhl doppelt besetzt | x₁ ≠ x₂ ⇒ f(x₁) ≠ f(x₂); jede waagrechte Linie trifft höchstens einmal |
| surjektiv | kein Stuhl leer | jedes y aus Z wird mindestens einmal getroffen |
| bijektiv | jeder Stuhl genau einmal besetzt | injektiv und surjektiv |

Ob eine Funktion injektiv oder surjektiv ist, hängt auch von D und Z ab:

| f(x) = x² mit | injektiv? | surjektiv? |
|---|---|---|
| ℝ → ℝ | nein: f(−2) = f(2) = 4 | nein: −4 kommt nie heraus |
| ℝ → [0, ∞) | nein | ja |
| [0, ∞) → ℝ | ja | nein |
| [0, ∞) → [0, ∞) | ja | ja, also bijektiv |

> [!IMPORTANT]
> **Das Wichtigste**
> Nur eine bijektive Funktion hat eine Umkehrfunktion auf der ganzen Zielmenge. Nicht injektiv → D verkleinern. Nicht surjektiv → Z auf das Bild verkleinern.

> [!WARNING]
> **Achtung**
> Der senkrechte Test prüft „Funktion oder nicht“. Der waagrechte Test prüft „injektiv oder nicht“. Nicht verwechseln.

## Die Umkehrfunktion

### Was ist das?

Die Umkehrfunktion f⁻¹ macht f rückgängig: f⁻¹(f(x)) = x. Jede streng monotone Funktion ist injektiv und hat deshalb eine Umkehrfunktion. Ihr Graph ist der an der Geraden y = x gespiegelte Graph von f.

### Rezept, durchgerechnet für Folie 62

Bestimmen Sie die Umkehrfunktion für f: [2, ∞) → ℝ, x ↦ x² − 4x + 1.

1. **Quadratische Ergänzung:** Die Hälfte von 4 ist 2, und 2² = 4. x² − 4x + 1 = x² − 4x + 4 − 4 + 1 = (x − 2)² − 3. Probe x = 5: 25 − 20 + 1 = 6 und 9 − 3 = 6.
2. **Injektiv?** Der Scheitel liegt bei (2 | −3). Auf ganz ℝ wäre f nicht injektiv: f(0) = 1 = f(4). Ab x = 2 bleibt nur der steigende rechte Ast.
3. **Bild bestimmen:** (x − 2)² ≥ 0, also f(x) ≥ −3. Bild = [−3, ∞).
4. **Auflösen:** y = (x − 2)² − 3 ⇒ y + 3 = (x − 2)² ⇒ x − 2 = +√(y + 3). Nur „+“, weil x ≥ 2.
5. **Tauschen:** f⁻¹(x) = 2 + √(x + 3), f⁻¹: [−3, ∞) → [2, ∞).
6. **Probe:** f(5) = 6, f⁻¹(6) = 2 + √9 = 5.

| x | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
| f(x) | 1 | −2 | −3 | −2 | 1 | 6 | 13 |

> [!IMPORTANT]
> **Das Wichtigste**
> Das Bild von f ist die Definitionsmenge von f⁻¹. Das Vorzeichen vor der Wurzel richtet sich nach der Definitionsmenge von f.

> [!WARNING]
> **Achtung**
> f⁻¹ heißt nicht 1/f. Bei f(x) = 2x + 1 ist f⁻¹(7) = 3, aber 1/f(7) = 1/15. Auf Folie 62 steht die Zielmenge ℝ. So ist f nicht surjektiv; sauber ist f: [2, ∞) → [−3, ∞).

## Monotonie und Beschränktheit

### Was ist das?

Bei Folgen vergleicht man aₙ mit aₙ₊₁. Bei Funktionen gibt es kein „nächstes x“. Darum vergleicht man zwei beliebige Stellen x₁ < x₂ (Folie 73):

- **streng monoton wachsend:** x₁ < x₂ ⇒ f(x₁) < f(x₂)
- **streng monoton fallend:** x₁ < x₂ ⇒ f(x₁) > f(x₂)
- **beschränkt:** Es gibt C mit |f(x)| ≤ C für alle x aus D.

### Methode, durchgerechnet für Folie 73, Nr. 1

Überprüfen Sie f: (1, ∞) → ℝ, x ↦ x²/(x + 1) auf Beschränktheit und Monotonie.

1. **Zahlen einsetzen:** f(1,01) ≈ 0,51, f(2) ≈ 1,33, f(5) ≈ 4,17, f(100) ≈ 99,01. Vermutung: steigt, startet knapp über ½, wird beliebig groß.
2. **Umschreiben:** x²/(x + 1) = x − 1 + 1/(x + 1). Probe: (x − 1)(x + 1) + 1 = x².
3. **Differenz:** f(x₂) − f(x₁) = (x₂ − x₁) · (1 − 1/((x₁ + 1)(x₂ + 1))).
4. **Vorzeichen:** x₂ − x₁ > 0. Weil beide x > 1 sind, ist (x₁ + 1)(x₂ + 1) > 4, die Klammer also > ¾. Positiv ⇒ streng monoton wachsend.
5. **Ränder:** Für x → 1 geht f gegen ½, das wird nie erreicht. Für x → ∞ ist f(x) > x − 1, also unbeschränkt.

Ergebnis: streng monoton wachsend, nach unten durch ½ beschränkt, nach oben unbeschränkt.

Folie 73, Nr. 2: g: (−1, 1) → ℝ, x ↦ x/(1 − x²). Die Differenz ist g(x₂) − g(x₁) = (x₂ − x₁)(1 + x₁x₂)/((1 − x₁²)(1 − x₂²)). Alle Faktoren sind positiv, also streng wachsend. An den Rändern läuft g gegen −∞ und +∞ (g(0,99) ≈ 49,7). Ein kleiner Definitionsbereich heißt also nicht automatisch beschränkte Werte.

> [!IMPORTANT]
> **Das Wichtigste**
> Monotonie: f(x₂) − f(x₁) auf einen Nenner bringen, (x₂ − x₁) ausklammern, jeden Faktor prüfen. Beschränktheit: an den Rändern von D schauen.

> [!WARNING]
> **Achtung**
> Am offenen Rand nicht einsetzen: g(1) gibt es nicht. Setz Zahlen nahe am Rand ein (0,9; 0,99; 0,999). Und: streng monoton ⇒ injektiv, nur „monoton“ reicht nicht.

## Übungen

> [!TIP]
> **Übung 1 · mittel**
> Welche dieser Funktionen besitzt eine Umkehrfunktion? Geben Sie diese gegebenenfalls an. a) ℝ \ {0} → ℝ \ {0}, x ↦ 1/x³ · b) ℝ → ℝ, x ↦ x² − 4x + 2
>
> Quelle: Folien 04.11., Aufgabe FU-3

> [!TIP]
> **Übung 2 · mittel**
> Gegeben ist f: [1, ∞) → ℝ, f(x) = x² − 2x + 3. a) Quadratische Ergänzung. b) Ist f beschränkt? c) Wähle die Zielmenge so, dass f bijektiv ist, und bestimme f⁻¹ mit Probe.
>
> Quelle: eigene Aufgabe, Klausurstil wie Folie 62

> [!TIP]
> **Übung 3 · Prüfungsniveau**
> Bestimmen Sie jeweils den größtmöglichen Definitionsbereich D ⊂ ℝ und das Bild von f: D → ℝ: b) x ↦ 1/(x⁴ − 2x² + 1) · c) x ↦ (x² + 3x + 2)/(x² + x − 2) · d) x ↦ √(x² − 2x − 1)
>
> Quelle: Folien 04.11., Aufgabe FU-2 (ohne Teil a, siehe Lösung)

> [!TIP]
> **Übung 4 · Prüfungsniveau**
> Entwickeln Sie p um x₀, also p(x) = a₀ + a₁(x − x₀) + a₂(x − x₀)² + …: a) p(x) = x³ − x² − 4x + 2, x₀ = 1 · b) p(x) = x⁴ + 6x³ + 10x², x₀ = −2
>
> Quelle: Folien 04.11., Aufgabe FU-4

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> Bestimmen Sie die Umkehrfunktion von f: ℝ → ℝ mit f(x) = x² − 2x + 2 für x ≥ 1 und f(x) = 4x − 2x² − 1 für x < 1. Weisen Sie nach, dass es wirklich die Umkehrfunktion ist.
>
> Quelle: Folien 04.11., Aufgabe FU-8

## Lösungen

### Übung 1

a) x³ ist streng monoton, also ist 1/x³ injektiv. Jedes y ≠ 0 kommt heraus, also bijektiv.

1. Auflösen: y = 1/x³ ⇒ x³ = 1/y ⇒ x = 1/∛y.
2. f⁻¹: ℝ \ {0} → ℝ \ {0}, x ↦ 1/∛x.
3. Probe: f(2) = 1/8, f⁻¹(1/8) = 1/½ = 2.

b) Quadratische Ergänzung: (x − 2)² − 2. Nicht injektiv: f(0) = 2 = f(4). Nicht surjektiv: Werte unter −2 kommen nie heraus. Also keine Umkehrfunktion. Eingeschränkt auf [2, ∞) → [−2, ∞) ginge es: f⁻¹(x) = 2 + √(x + 2).

### Übung 2

a) Hälfte von 2 ist 1: x² − 2x + 3 = (x − 1)² + 2. Scheitel (1 | 2).

b) Nach unten: f(x) ≥ 2, Minimum f(1) = 2. Nach oben unbeschränkt (f(101) = 10 002). Also insgesamt nicht beschränkt.

c) Bild [2, ∞), also f: [1, ∞) → [2, ∞). Auflösen: y − 2 = (x − 1)² ⇒ x = 1 + √(y − 2), Plus wegen x ≥ 1. f⁻¹(x) = 1 + √(x − 2). Probe: f(3) = 6, f⁻¹(6) = 1 + 2 = 3.

### Übung 3

Teil a lautet auf der Folie (x + 1)/(x − x). Der Nenner ist immer 0, D wäre leer. Vermutlich ein Tippfehler; was gemeint war, ist offen. Deshalb fehlt a hier.

b) Nenner: x⁴ − 2x² + 1 = (x² − 1)². Nenner = 0 bei x = ±1 ⇒ D = ℝ \ {−1, 1}. Das Quadrat ist auf D positiv und wird beliebig klein und beliebig groß. Bild (0, ∞).

c) Faktorisieren: Zähler (x + 1)(x + 2), Nenner (x + 2)(x − 1). D = ℝ \ {−2, 1}. Gekürzt: (x + 1)/(x − 1) = 1 + 2/(x − 1), nimmt jeden Wert außer 1 an. Falle: Bei x = −2 hätte die gekürzte Form den Wert 1/3, aber −2 ist verboten. Bild = ℝ \ {1/3, 1}.

d) Unter der Wurzel: x² − 2x − 1 = (x − 1)² − 2 ≥ 0 ⇔ |x − 1| ≥ √2. D = (−∞, 1 − √2] ∪ [1 + √2, ∞). Bild [0, ∞).

### Übung 4

Trick: x = t + x₀ einsetzen, ausmultiplizieren, nach Potenzen von t sortieren.

a) x = t + 1: (t + 1)³ − (t + 1)² − 4(t + 1) + 2 = t³ + 2t² − 3t − 2. Also p(x) = −2 − 3(x − 1) + 2(x − 1)² + (x − 1)³. Probe x = 3: alt 8, neu −2 − 6 + 8 + 8 = 8.

b) x = t − 2: t⁴ − 2t³ − 2t² + 8. Also p(x) = 8 − 2(x + 2)² − 2(x + 2)³ + (x + 2)⁴. Probe x = 0: 8 − 8 − 16 + 16 = 0.

Schnellprobe: a₀ ist immer p(x₀). p(1) = −2 und p(−2) = 8.

### Übung 5

1. Quadratisch ergänzen: Für x ≥ 1 ist f(x) = (x − 1)² + 1, steigend, Werte [1, ∞). Für x < 1 ist f(x) = 1 − 2(x − 1)², ebenfalls steigend, Werte (−∞, 1).
2. Beide Teile passen lückenlos zusammen ⇒ jedes y wird genau einmal getroffen, f ist bijektiv.
3. Fall y ≥ 1: x = 1 + √(y − 1).
4. Fall y < 1: (x − 1)² = (1 − y)/2 ⇒ x = 1 − √((1 − y)/2), Minus wegen x < 1.
5. Nachweis f⁻¹(f(x)) = x: Für x ≥ 1 ist 1 + √((x − 1)²) = 1 + |x − 1| = x. Für x < 1 ist 1 − |x − 1| = 1 − (1 − x) = x.
6. Zahlenprobe: f(3) = 5, f⁻¹(5) = 1 + 2 = 3. f(−1) = −7, f⁻¹(−7) = 1 − √4 = −1.

√((x − 1)²) ist |x − 1|, nicht einfach x − 1. Genau deshalb braucht man die Fallunterscheidung.
