## Reihe lesen

sₙ = Σₖ₌₁ⁿ aₖ heißt: **Partialsumme** = Summe der ersten n Glieder (Kontostand nach n Einzahlungen).
Σₖ₌₁^∞ aₖ = lim (n → ∞) sₙ heißt: Der Wert der Reihe ist der Grenzwert der Partialsummen.

Grenzwert endlich → **konvergent**. Sonst **divergent**. Ein Konvergenzkriterium beantwortet nur Ja/Nein.

Rechenregeln (nur bei konvergenten Reihen): Faktoren vorziehen, Σ(aₖ ± bₖ) = Σaₖ ± Σbₖ. Σ 6/k² = 6 · π²/6 = π² ≈ 9,87.

## Geometrische Reihe

Endlich: Σₖ₌₀ⁿ v₀ · qᵏ = v₀ · (1 − qⁿ⁺¹)/(1 − q), q ≠ 1. heißt: v₀ erstes Glied, q Faktor, n + 1 Summanden.
Probe: Σₖ₌₀⁴ 2ᵏ = 31 = (1 − 32)/(1 − 2).

Unendlich: **Wert = erstes Glied/(1 − q)**, nur für |q| < 1 (also −1 < q < 1). Sonst divergent.

1. Erkennen: k im Exponenten. Zusammenfassen: 2ᵏ/3ᵏ = (⅔)ᵏ.
2. q ablesen, |q| < 1 prüfen.
3. Erstes Glied: Startindex einsetzen (k = 0 → 1, k = 1 → q).
4. Wert = erstes Glied/(1 − q).

Σₖ₌₀^∞ (−½)ᵏ: q = −½, erstes Glied 1, Wert 1/(1 + ½) = **2/3**.

| Reihe | q | erstes Glied | Wert |
|---|---|---|---|
| Σₖ₌₀^∞ (½)ᵏ | ½ | 1 | 2 |
| Σₖ₌₁^∞ (½)ᵏ | ½ | ½ | 1 |
| Σₖ₌₀^∞ (⅓)ᵏ | ⅓ | 1 | 3/2 |
| Σₖ₌₀^∞ 2ᵏ | 2 | 1 | divergent |

## Periodenzahlen

Periode der Länge L → q = 1/10ᴸ.

1. 0,777… = 7/10 + 7/100 + …, erstes Glied 7/10.
2. q = 1/10.
3. (7/10)/(9/10) = **7/9**.

0,9̄ = (9/10)/(9/10) = 1. Steht vor der Periode etwas (4,31222…), zuerst abtrennen.

## Divergenzkriterium

Folie: Σ aₖ konvergent ⇒ aₖ → 0 → auf Deutsch: „Gehen die Glieder **nicht** gegen 0, divergiert die Reihe.“ Umkehrung gilt nicht.

Σ k/(k + 1): Glieder → 1 → divergent.

**Harmonische Reihe** Σ 1/k: Glieder → 0, trotzdem divergent. Gruppen ⅓ + ¼, ⅕ + … + ⅛ usw. sind je ≥ ½, unendlich oft ½ → ∞.

## Σ 1/kᵖ und Potenzabstand

Σ 1/kᵖ konvergent ⇔ p > 1. heißt: p ist der feste Exponent unter dem Bruchstrich, ⇔ gilt in beide Richtungen.

| p | Reihe | Ergebnis |
|---|---|---|
| ½ | Σ 1/√k | divergent |
| 1 | Σ 1/k | divergent |
| 2 | Σ 1/k² | konvergent, π²/6 ≈ 1,645 |

**Potenzabstand** = Grad Nenner − Grad Zähler. > 1 → konvergent, ≤ 1 → divergent.
Σ k/(k² + 5): 2 − 1 = 1 → **divergent**.

## Quotientenkriterium

L = lim (k → ∞) |aₖ₊₁/aₖ| heißt: Schrumpf-Faktor „nächstes durch jetziges Glied“ auf lange Sicht.

| L | Ergebnis |
|---|---|
| L < 1 | konvergent |
| L > 1 | divergent |
| L = 1 | keine Aussage |

Σ k/2ᵏ:

1. aₖ₊₁ = (k + 1)/2ᵏ⁺¹.
2. Mal Kehrwert: (k + 1)/2ᵏ⁺¹ · 2ᵏ/k.
3. Kürzen: (k + 1)/k · ½.
4. L = 1 · ½ = **½ < 1** → konvergent.

Helfer: qᵏ⁺¹/qᵏ = q, k!/(k + 1)! = 1/(k + 1).

## Teleskopsumme

Σₖ₌₁ⁿ (bₖ − bₖ₊₁) = b₁ − bₙ₊₁ heißt: Fast alles hebt sich weg, nur erstes und letztes Stück bleiben.

Σ 1/((k + 1)(k + 2)) mit 1/(k + 1) − 1/(k + 2):

1. Zerlegung auf gleichen Nenner prüfen.
2. Ausschreiben: (½ − ⅓) + (⅓ − ¼) + …
3. Wegstreichen: sₙ = ½ − 1/(n + 2).
4. Grenzwert: **½**. Probe n = 2: 1/6 + 1/12 = 1/4 = ½ − ¼.

## Welches Kriterium?

1. Glieder → 0? Nein → divergent.
2. qᵏ? → |q| < 1.
3. Bruch aus Potenzen? → Potenzabstand.
4. k! oder xᵏ? → Quotientenkriterium.
5. bₖ − bₖ₊₁? → Teleskop, Wert ausrechnen.

## Typische Fehler

- „Glieder → 0, also Reihe = 0“ oder „also konvergent“.
- Startindex ignoriert: Σₖ₌₁^∞ (½)ᵏ ist 1, nicht 2.
- Formel bei |q| ≥ 1 benutzt.
- Negatives q: 1 − (−⅕) = 6/5.
- k⁻² = 1/k² ist keine geometrische Reihe.
- Bei L = 1 „konvergent“ oder „divergent“ hingeschrieben.
- Teleskop mit Abstand 2: am Anfang bleiben zwei Stücke übrig.
- Rechenregeln auf divergente Reihen angewendet.
