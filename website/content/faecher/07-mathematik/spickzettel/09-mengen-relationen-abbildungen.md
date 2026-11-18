## Mengen

| Zeichen | heißt | Beispiel |
|---|---|---|
| x ∈ M | x liegt in M | 2 ∈ {1, 2} |
| \|M\| | Anzahl Elemente | \|{∅, 1, {1}}\| = 3 |
| M ⊆ N | alles aus M liegt in N | {1} ⊆ {1, 2} |
| M ⊂ N | echte Teilmenge (⊆ und ≠) | {1} ⊂ {1, 2} |
| 𝒫(M) | alle Teilmengen, 2^\|M\| Stück | 𝒫({1, 2}) = {∅, {1}, {2}, {1, 2}} |
| M × N | alle Paare (x, y), \|M\| · \|N\| Stück | {1, 2} × {a} = {(1, a), (2, a)} |

Keine Reihenfolge, keine Wiederholung. ℕ = {1, 2, …}, ℕ₀ mit 0. ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. Gleichheit: M ⊆ N und N ⊆ M. {1} ∈ 𝒫({1, 2}), aber 1 ∉ 𝒫({1, 2}).

## Operationen = Logik

| Menge | Logik | G = {1, …, 8}, M = {1, 3, 5}, N = {2, 3, 5} |
|---|---|---|
| M ∩ N | ∧ | {3, 5} |
| M ∪ N | ∨ | {1, 2, 3, 5} |
| M ∖ N = M ∩ N̅ | ∧ ¬ | {1} (N ∖ M = {2}) |
| M̅ = G ∖ M | ¬ | {2, 4, 6, 7, 8} |
| ∅ | f | disjunkt: M ∩ N = ∅ |

De Morgan: (M ∪ N)̅ = M̅ ∩ N̅, (M ∩ N)̅ = M̅ ∪ N̅. Distributiv, kommutativ, assoziativ wie in der Logik.

## Relationen

R ⊆ M × M, xRy. „Nein“ per Gegenbeispiel, „ja“ für alle.

| Eigenschaft | Bedingung | Kreuztabelle |
|---|---|---|
| reflexiv | xRx | Diagonale voll |
| symmetrisch | xRy → yRx | spiegelbildlich |
| antisymmetrisch | xRy ∧ yRx → x = y | nie beide Kreuze außerhalb der Diagonale |
| transitiv | xRy ∧ yRz → xRz | Kette hat Abkürzung |

| | refl. | symm. | antisymm. | trans. |
|---|---|---|---|---|
| ≤ | ja | nein | ja | ja |
| > | nein | nein | ja | ja |
| ≠ | nein | ja | nein | nein |
| = | ja | ja | ja | ja |

**Äquivalenzrelation** = reflexiv + symmetrisch + transitiv. Klasse [a] = {x ∣ xRa}. Klassen disjunkt, zusammen ganz M. R₅ (m − n = 5k): Klassen [0] … [4].

## Abbildungen

f : M → N: jedes x **genau ein** f(x) (Kreuztabelle: jede Zeile genau ein Kreuz).

- Bildmenge f(M) ⊆ Zielmenge N.
- Bild f(U) = {f(x) ∣ x ∈ U}: wohin? Urbild f⁻¹(V) = {x ∣ f(x) ∈ V}: woher? Gibt es immer, kann ∅ sein.
- g ∘ f: erst f, dann g. f = x², g = x + 1: (g ∘ f)(2) = 5, (f ∘ g)(2) = 9.

| | heißt |
|---|---|
| injektiv | f(x₁) = f(x₂) → x₁ = x₂, nichts doppelt |
| surjektiv | jedes y getroffen |
| bijektiv | beides, dann f⁻¹ |

x² : ℝ → ℝ weder noch, ℝ₀⁺ → ℝ₀⁺ bijektiv.

## Reste und ℤₙ

a mod n = r mit a = q · n + r, 0 ≤ r < n. 17 mod 5 = 2, −3 mod 5 = 2. Vorher Reste nehmen erlaubt. ℤₙ = {0, …, n − 1}, rechnen, dann Rest.

## Strukturen

| | Regeln | Beispiele |
|---|---|---|
| Gruppe (G, ∗) | neutral e, Inverse, assoziativ (+ kommutativ = abelsch) | (ℤ, +), (ℤₙ, +), (ℝ ∖ {0}, ·) |
| Ring | (R, +) abelsche Gruppe, · assoziativ, distributiv | ℤ, ℤₙ |
| Körper | kommutativer Ring, 1 ≠ 0, Inverse für alle a ≠ 0 | ℚ, ℝ, ℤₚ (p prim) |

Tafel: Zeile von e = Kopfzeile, jede Zeile enthält e. (ℤₙ, +): −a = n − a. (a ∗ b)⁻¹ = b⁻¹ ∗ a⁻¹. Untergruppe: U ≠ ∅, a ∗ b ∈ U, a⁻¹ ∈ U. ℤ₆ kein Körper: 2 · 3 = 0.

## Inverses in ℤₙ

Existiert ⇔ ggT(a, n) = 1. (ℤ₁₀)* = {1, 3, 7, 9}.

1. Teilen mit Rest bis Rest 0.
2. Rückwärts bis 1 = s · a + t · n.
3. Inverses = s mod n, Probe.

7 in ℤ₁₀: 10 = 1 · 7 + 3, 7 = 2 · 3 + 1. 1 = 7 − 2 · (10 − 7) = 3 · 7 − 2 · 10 → **3** (21 mod 10 = 1).

## Typische Fehler

- ∈ und ⊆ verwechselt, ⊂ als „oder gleich“.
- M ∖ N = N ∖ M angenommen.
- antisymmetrisch = nicht symmetrisch.
- „ja“ mit Beispiel begründet.
- g ∘ f von links gelesen.
- Urbild nur bei bijektiv.
- negativer Rest; s nicht mod n.
- (ℝ, ·), ℤ₆ als Gruppe/Körper.
