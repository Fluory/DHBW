## Funktion lesen

Folie: f: D → Z, x ↦ f(x) → auf Deutsch: „f geht von D nach Z, die Zahl x wird auf f(x) abgebildet.“ Jedes x aus D bekommt **genau ein** Ergebnis.

| Begriff | Frage | bei f(x) = x² + 1 |
|---|---|---|
| Definitionsmenge D | Was darf rein? | ℝ |
| Zielmenge Z | Wo dürfen Ergebnisse liegen? (festgelegt) | ℝ |
| Bild f(D) | Was kommt wirklich raus? (ausrechnen) | [1, ∞) |

Intervalle: [2, ∞) heißt x ≥ 2 (eckig = Rand gehört dazu). (−1, 1) heißt −1 < x < 1 (rund = Rand nicht). ℝ \ {0} heißt alle außer 0.

**Größte Definitionsmenge:** Nenner ≠ 0, unter der Wurzel ≥ 0.
f(x) = 1/(x − 3): x − 3 = 0 ⇒ x = 3 verboten. D = ℝ \ {3}, Bild = ℝ \ {0}.

Senkrechte Linie trifft den Graphen höchstens einmal → Funktion.

## injektiv, surjektiv, bijektiv

| Begriff | heißt | Test |
|---|---|---|
| injektiv | x₁ ≠ x₂ ⇒ f(x₁) ≠ f(x₂): kein Ergebnis doppelt | waagrechte Linie trifft höchstens einmal |
| surjektiv | zu jedem y aus Z gibt es ein x mit f(x) = y | Bild = Z |
| bijektiv | beides | nur dann gibt es f⁻¹ |

| f(x) = x² mit | injektiv? | surjektiv? |
|---|---|---|
| ℝ → ℝ | nein: f(−2) = f(2) | nein: −4 nie |
| ℝ → [0, ∞) | nein | ja |
| [0, ∞) → [0, ∞) | ja | ja → bijektiv |

Nicht injektiv → D verkleinern. Nicht surjektiv → Z auf das Bild verkleinern.

## Umkehrfunktion

f⁻¹(f(x)) = x heißt: erst vorwärts, dann rückwärts, du bist wieder bei x. Graph von f⁻¹ = Graph von f gespiegelt an y = x. Streng monoton ⇒ injektiv ⇒ umkehrbar.

f(x) = 2x + 1:

1. y = 2x + 1.
2. y − 1 = 2x.
3. x = (y − 1)/2.
4. Tauschen: **f⁻¹(x) = (x − 1)/2**.
5. Probe: f(3) = 7, f⁻¹(7) = 3.

## Quadratische Ergänzung

x² + bx + c = (x + b/2)² − (b/2)² + c heißt: b Zahl vor dem x (mit Vorzeichen), b/2 die Hälfte, (b/2)² das ergänzte Teil, c Zahl ohne x.

x² − 4x + 1:

1. b = −4, Hälfte −2, Quadrat 4.
2. x² − 4x + 4 − 4 + 1.
3. **(x − 2)² − 3**. Scheitel (2 | −3).
4. Probe x = 5: 25 − 20 + 1 = 6 und 9 − 3 = 6.

## Umkehrfunktion einer Parabel (F. 62)

f: [2, ∞) → ℝ, x ↦ x² − 4x + 1:

1. Ergänzen: (x − 2)² − 3.
2. Für x ≥ 2 steigt f → injektiv.
3. Bild: (x − 2)² ≥ 0 ⇒ [−3, ∞).
4. y + 3 = (x − 2)².
5. x − 2 = √(y + 3), nur Plus, weil x − 2 ≥ 0.
6. **f⁻¹(x) = 2 + √(x + 3)**, f⁻¹: [−3, ∞) → [2, ∞).
7. Probe: f(5) = 6, f⁻¹(6) = 2 + 3 = 5.

Bild von f = Definitionsmenge von f⁻¹.

## Monotonie und Beschränktheit

- **streng wachsend:** x₁ < x₂ ⇒ f(x₁) < f(x₂) für alle x₁, x₂ ∈ D (rechts immer höher).
- **streng fallend:** x₁ < x₂ ⇒ f(x₁) > f(x₂).
- **beschränkt:** es gibt C mit |f(x)| ≤ C für alle x aus D (Boden −C, Decke C).

**Rezept:**

1. Zahlen einsetzen (nur Vermutung).
2. f(x₂) − f(x₁) mit x₁ < x₂ aufschreiben.
3. Auf einen Nenner, (x₂ − x₁) ausklammern.
4. Vorzeichen jedes Faktors: alles > 0 → streng wachsend.
5. Ränder von D: Zahlen nahe am Rand für Boden und Decke.

Beispiel 2x + 1: f(x₂) − f(x₁) = 2(x₂ − x₁) > 0 → streng wachsend.

F. 73: x²/(x + 1) = x − 1 + 1/(x + 1) auf (1, ∞):
f(x₂) − f(x₁) = (x₂ − x₁) · (1 − 1/((x₁ + 1)(x₂ + 1))) > 0 → streng wachsend. Boden ½ (nicht erreicht), keine Decke → nicht beschränkt.

x/(1 − x²) auf (−1, 1): Differenz = (x₂ − x₁)(1 + x₁x₂)/((1 − x₁²)(1 − x₂²)) > 0 → streng wachsend. g(0,99) ≈ 49,7 → unbeschränkt.

## Typische Fehler

- Zielmenge und Bild gleichsetzen.
- Senkrechten Test (Funktion?) und waagrechten Test (injektiv?) verwechseln.
- f⁻¹ mit 1/f verwechseln: f⁻¹(7) = 3, aber 1/f(7) = 1/15.
- Bei der Ergänzung das Abziehen vergessen: nicht (x − 2)² + 1.
- Falsches Vorzeichen in der Klammer: −4x → (x − 2).
- Falsches Vorzeichen vor der Wurzel.
- Am offenen Rand einsetzen: g(1) gibt es nicht.
- Ein paar Zahlen als Beweis nehmen.
- Kleines D heißt nicht beschränkte Werte.
