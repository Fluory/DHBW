## Folge lesen

aₙ heißt: die Zahl auf Platz n. n ist der **Index** (Platznummer), aₙ das **Glied**, aₙ₊₁ das nächste Glied.

Folie: a: ℕ → ℝ, n ↦ aₙ → auf Deutsch: „Jeder Platznummer n wird genau eine Zahl aₙ zugeordnet.“

| Art | Idee | Beispiel | Glieder |
|---|---|---|---|
| explizit | n einsetzen, fertig | aₙ = n² | 1, 4, 9, 16 |
| rekursiv | Startwert plus „neu aus alt“ | a₁ = 1, aₙ = n · aₙ₋₁ | 1, 2, 6, 24 |

Faktor (−1)ⁿ: Vorzeichen wechselt ständig, Folge heißt **alternierend**.

## Arithmetisch und geometrisch

| | arithmetisch | geometrisch |
|---|---|---|
| Idee | immer d dazu | immer mal q |
| explizit | aₙ = a₁ + (n − 1) · d | aₙ = a₁ · qⁿ⁻¹ |
| Summe erste n | Sₙ = n/2 · (a₁ + aₙ) | Sₙ = a₁ · (qⁿ − 1)/(q − 1), q ≠ 1 |
| Beispiel | 3, 7, 11, 15 … | 2, 6, 18, 54 … |

heißt: a₁ erstes Glied, d Differenz, q Quotient, n − 1 Anzahl Schritte bis Platz n.

- a₁ = 3, d = 4: a₁₀ = 3 + 9 · 4 = **39**, S₁₀ = 5 · (3 + 39) = **210**.
- a₁ = 2, q = 3: a₈ = 2 · 3⁷ = **4374**, S₆ = 2 · 728/2 = **728**.

**Erkennen:** Differenzen gleich → arithmetisch. Quotienten gleich → geometrisch.

## Monotonie

| Begriff | Bedingung |
|---|---|
| monoton wachsend | aₙ ≤ aₙ₊₁ für alle n |
| streng wachsend | aₙ < aₙ₊₁ |
| monoton fallend | aₙ ≥ aₙ₊₁ |
| streng fallend | aₙ > aₙ₊₁ |

**Differenz-Test:**

1. aₙ₊₁ hinschreiben: jedes n durch (n + 1) ersetzen, mit Klammer.
2. aₙ₊₁ − aₙ ausrechnen.
3. Immer > 0 → streng wachsend. Immer < 0 → streng fallend. Wechselt → nicht monoton.

aₙ = n²: (n + 1)² − n² = **2n + 1 > 0** → streng wachsend.
bₙ = 1/n: 1/(n + 1) − 1/n = **−1/(n(n + 1)) < 0** → streng fallend.

## Beschränktheit

|aₙ| ≤ C für alle n heißt: Es gibt eine feste Zahl C, jedes Glied liegt zwischen −C und C.

Folie: ∃C ∈ ℝ ∀n ∈ ℕ: |aₙ| ≤ C → auf Deutsch: „Es gibt ein C, so dass für alle n gilt: |aₙ| ≤ C.“

1. Erste Glieder ausrechnen.
2. Fallend → erstes Glied ist Decke. Wachsend → erstes Glied ist Boden.
3. Andere Grenze: Wohin läuft die Folge? Gegen ∞ → keine Decke.

bₙ = 1 + 1/n: fallend, Decke 2, Boden 1 → **beschränkt**.

## Grenzwert

lim (n → ∞) aₙ = a heißt: Für immer größere n kommen die Glieder a beliebig nahe und bleiben dort. a ist der **Grenzwert**.

Folie: ∀ε > 0 ∃n₀ ∈ ℕ: |aₙ − a| < ε für alle n ≥ n₀ → auf Deutsch: „Egal wie klein der Abstand ε: Ab einem Platz n₀ liegen alle Glieder näher als ε an a.“

aₙ = 1 − 1/n → 1. Abstand 1/n < 0,01 ab n₀ = 101.

- **Bestimmt divergent:** → ±∞, z. B. n².
- **Unbestimmt divergent:** springt, z. B. (−1)ⁿ.
- **Nullfolge:** Grenzwert 0, z. B. 1/n, qⁿ mit |q| < 1.

Sätze: höchstens ein Grenzwert. Konvergent ⇒ beschränkt. Beschränkt **und** monoton ⇒ konvergent.

Rechenregeln: Summe, Produkt, Quotient der Grenzwerte (Quotient nur, wenn b ≠ 0).

## Durch die höchste Potenz teilen

cₙ = (2n² − 3)/(n² + n + 1):

1. Höchste Potenz im Nenner: n².
2. Jeden Summanden teilen: (2 − 3/n²)/(1 + 1/n + 1/n²).
3. Zahl/nᵖ → 0.
4. (2 − 0)/(1 + 0 + 0) = **2**. Probe n = 1000: ≈ 1,998.

| Grad oben vs. unten | Ergebnis | Beispiel |
|---|---|---|
| gleich | Vorzahlen teilen | (3n² + 2)/(6n² − n) → 1/2 |
| oben kleiner | 0 | (−5n + 1)/(4n² − 7) → 0 |
| oben größer | ±∞ | (n³ − 1)/(2n² + 5) → +∞ |

Ohne Bruch: höchste Potenz ausklammern. −7n³ + 4n² + 10 = n³(−7 + 4/n + 10/n³) → −∞.

## Typische Fehler

- Index und Wert verwechseln: bei 1/n ist a₄ = 0,25, nicht 4.
- n statt n − 1 in aₙ = a₁ + (n − 1)d oder a₁ · qⁿ⁻¹. Probe mit n = 1.
- Konstante Folge 7, 7, 7 ist wachsend und fallend, aber nicht streng.
- Drei Glieder ausrechnen ist kein Beweis für Monotonie.
- Nach unten beschränkt reicht nicht für beschränkt.
- Beschränkt allein reicht nicht für konvergent: (−1)ⁿ.
- Vor dem Gradvergleich nicht zusammengefasst oder nur einen Summanden geteilt.
