## Verkettung

(g ∘ f)(x) = g(f(x)) heißt: ∘ liest du „nach“. f ist der innere Teil und läuft **zuerst**, g bekommt das Ergebnis.

f(x) = x + 1, g(x) = x²:

1. g(f(3)): f(3) = 4, g(4) = **16**.
2. f(g(3)): g(3) = 9, f(9) = **10**.

16 ≠ 10: Reihenfolge ist wichtig.

Folie: f(D_f) ⊆ D_g, dann g ∘ f: D_f → ℝ, x ↦ g(f(x)) → auf Deutsch: „Alles, was f ausgibt, muss in den Definitionsbereich von g passen.“ ⊆ heißt „liegt ganz in“.

**Rezept:**

1. Was gibt f aus?
2. Passt das in D_g? Sonst die x ausschließen, bei denen es nicht passt.
3. In g jedes x durch f(x) ersetzen.
4. Probe mit einer Zahl.

f = sin, g(x) = 1 − x² auf [−2, 2]: sin liegt in [−1, 1], passt. **h(x) = 1 − sin²(x)**. Probe x = 1: 1 − 0,8415² ≈ 0,2919.

## Stetigkeit

f stetig in x̂, wenn lim (x → x̂) f(x) = f(x̂). heißt: x̂ ist die geprüfte Stelle, der Grenzwert ist, wohin der Graph von links und rechts läuft, f(x̂) ist der Wert genau dort.

Drei Bedingungen:

1. f(x̂) existiert (kein Loch).
2. Grenzwert existiert, links = rechts (keine Stufe).
3. Beide sind gleich.

Anschaulich: Graph ohne Absetzen zeichnen. Kleine Änderung bei x → kleine Änderung bei f(x).

Paketpreis 5 € bis 2 kg, darüber 8 €: links → 5, rechts → 8 → bei 2 **nicht stetig**.

**Stetig sind:** Polynome überall, Brüche wo Nenner ≠ 0, Wurzeln auf [0, ∞), eˣ, ln, sin, cos auf ihrem Definitionsbereich, sowie Summen, Produkte, Quotienten und Verkettungen davon.
Kritisch nur: Nenner = 0 und Stellen, an denen die Formel wechselt.

## Parameter c bestimmen (F. 79)

f(x) = (x² + 2x − 3)/(x² + x − 2) für x ≠ 1, f(1) = c:

1. c = lim (x → 1) f(x).
2. Einsetzen: 0/0.
3. Faktorisieren: (x + 3)(x − 1)/((x + 2)(x − 1)).
4. Kürzen: (x + 3)/(x + 2).
5. Einsetzen: 4/3 → **c = 4/3 ≈ 1,3333**.
6. Probe: f(0,999) ≈ 1,3334, f(1,001) ≈ 1,3332.

## Unstetigkeiten

| Typ | heißt | Beispiel | Zahlen |
|---|---|---|---|
| Sprungstelle | links ≠ rechts | −1 für x < 0, 1 für x ≥ 0 | f(−0,001) = −1, f(0,001) = 1 |
| Polstelle | \|f(x)\| wächst über alle Grenzen | 1/(x − 2) bei 2 | f(1,99) = −100, f(2,01) = 100 |
| Oszillationsstelle | schwingt immer schneller | sin(1/x) bei 0 | 1, −1, 1, −1 … |

Stellen außerhalb von D nicht prüfen: 1/(x − 2) ist auf ℝ \ {2} stetig.

## ln und e

ln a = k bedeutet dasselbe wie eᵏ = a. heißt: ln fragt „e hoch wie viel ergibt a?“. e ≈ 2,718, a > 0.

| k | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| eᵏ | 1 | ≈ 2,72 | ≈ 7,39 | ≈ 20,09 |

ln 1 = 0, ln e = 1.

| Regel | auf Deutsch |
|---|---|
| e^(ln a) = a, ln(eᵃ) = a | heben sich auf |
| ln(a · b) = ln a + ln b | mal wird plus |
| ln(a/b) = ln a − ln b | geteilt wird minus |
| ln(aʳ) = r · ln a | Hochzahl nach vorne |
| log₂ a = ln a/ln 2 | Basis umrechnen |

Herkunft: eᵃ · eᵇ = e^(a + b), wie 2² · 2³ = 2⁵. Probe: log₂ 8 = 2,0794/0,6931 = 3.

**Zusammenfassen** ln(2x) + ln(2y) − ln(z) − ln(4):

1. Hochzahlen nach vorne (hier keine).
2. Plus in den Zähler, Minus in den Nenner: ln((2x · 2y)/(z · 4)).
3. 4xy/(4z), kürzen: **ln(xy/z)**.
4. Probe x = 1,5, y = 2, z = 3: beide Seiten 0.

Gleichung mit e: auf beiden Seiten ln. eˣ = 7,39 ⇒ x = ln 7,39 ≈ 2.

## Typische Fehler

- g ∘ f mit f ∘ g verwechselt. In g ∘ f läuft f zuerst.
- Nicht geprüft, ob der Ausgang von f in D_g passt.
- Stetigkeit an Stellen außerhalb von D geprüft.
- c durch Einsetzen in die ungekürzte Formel gesucht (0/0).
- Oszillation heißt nicht, dass die Werte riesig werden: sin(1/x) bleibt zwischen −1 und 1.
- ln(a + b) = ln a + ln b. Falsch: ln 2 ≈ 0,69, aber ln 1 + ln 1 = 0.
- ln von 0 oder negativen Zahlen.
