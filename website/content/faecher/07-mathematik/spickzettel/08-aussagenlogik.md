## Zeichen

| Zeichen | lies | heißt |
|---|---|---|
| ¬A | nicht A | dreht den Wert um |
| A ∧ B | A und B | beide wahr |
| A ∨ B | A oder B | mindestens eine wahr (auch beide) |
| A ⊻ B | entweder A oder B | genau eine wahr |
| A → B | wenn A, dann B | Baustein **in** einer Formel |
| A ↔ B | A genau dann, wenn B | beide gleich, Baustein in einer Formel |
| F₁ ⇒ F₂ | aus F₁ folgt F₂ | F₁ → F₂ ist Tautologie |
| F₁ ≡ F₂ | gleichwertig | F₁ ↔ F₂ ist Tautologie |

w = wahr, f = falsch. Vorrang: **¬ vor ∧ vor ∨ vor → vor ↔** (wie Minus, Mal, Plus). A ∨ B ∧ C heißt A ∨ (B ∧ C).

## Wahrheitstafel

| A | B | ¬A | A ∧ B | A ∨ B | A ⊻ B | A → B | A ↔ B |
|---|---|---|---|---|---|---|---|
| w | w | f | w | w | f | w | w |
| w | f | f | f | w | w | **f** | f |
| f | w | w | f | w | w | w | f |
| f | f | w | f | f | f | w | w |

1. n Variablen → 2ⁿ Zeilen.
2. Erste Spalte halb w, halb f, letzte w, f, w, f.
3. Zwischenergebnisse je eigene Spalte, von innen nach außen.

## Implikation

A → B ist **nur** falsch bei A = w, B = f. „Aus Falschem folgt alles.“

| Umformung | gilt? |
|---|---|
| A → B ≡ ¬A ∨ B | ja |
| A → B ≡ ¬B → ¬A (Kontraposition) | ja |
| A ↔ B ≡ (A → B) ∧ (B → A) | ja |
| A → B ≡ ¬A → ¬B (Umkehrschluss) | **nein** |

**Erfüllbar:** mindestens ein w. **Tautologie:** nur w (A ∨ ¬A). **Widerspruch:** kein w (A ∧ ¬A).

## Gesetze

| Gesetz | für ∧ | für ∨ |
|---|---|---|
| Distributivität | A ∧ (B ∨ C) ≡ (A ∧ B) ∨ (A ∧ C) | A ∨ (B ∧ C) ≡ (A ∨ B) ∧ (A ∨ C) |
| De Morgan (Klammer verneinen) | ¬(A ∧ B) ≡ ¬A ∨ ¬B | ¬(A ∨ B) ≡ ¬A ∧ ¬B |
| Komplement | A ∧ ¬A ≡ f | A ∨ ¬A ≡ w |
| Neutralität | A ∧ w ≡ A | A ∨ f ≡ A |
| Dominanz | A ∧ f ≡ f | A ∨ w ≡ w |
| Absorption | A ∧ (A ∨ B) ≡ A | A ∨ (A ∧ B) ≡ A |

Dazu: Idempotenz (A ∧ A ≡ A), Reihenfolge und Klammern egal, ¬¬A ≡ A. **Dualität:** ∧ ↔ ∨ und w ↔ f tauschen gibt wieder ein Gesetz.

Vereinfachen (je Zeile ein Gesetz):
(A ∧ B) ∨ (A ∧ ¬B) ≡ A ∧ (B ∨ ¬B) ≡ A ∧ w ≡ **A**.

## DNF und KNF

| | DNF | KNF |
|---|---|---|
| Zeilen mit | w | f |
| Wert w | A | ¬A |
| Wert f | ¬A | A |
| Block | ∧ | ∨ |
| verbunden mit | ∨ | ∧ |

In jedem Block stehen **alle** Variablen.

DNF: g wahr bei (A, B, C) = (f, w, f), (f, w, w), (w, w, w):

1. (f, w, f) → ¬A ∧ B ∧ ¬C.
2. (f, w, w) → ¬A ∧ B ∧ C.
3. (w, w, w) → A ∧ B ∧ C.
4. Mit ∨ verbinden.

Vereinfacht: (¬A ∧ B) ∨ (B ∧ C) ≡ **B ∧ (¬A ∨ C)**.

KNF: Zeile (f, f, w) falsch → Block **A ∨ B ∨ ¬C**. Probe: f ∨ f ∨ f = f.

## Quantoren

∀x P(x) heißt: für alle x gilt P(x). ∃x P(x) heißt: es gibt mindestens ein x mit P(x).

- **Verneinen:** ¬∀x P(x) ≡ ∃x ¬P(x). ¬∃x P(x) ≡ ∀x ¬P(x).
- „Jedes Q ist G“ = ∀x (Q(x) → G(x)), mit → statt ∧.
- Verschiedene Quantoren nicht tauschen: ∀y ∃x ist nicht ∃x ∀y.

1. Jeden Quantor umdrehen, Reihenfolge bleibt.
2. ¬ nach innen bis vors Prädikat.
3. Innen umformen: ¬(Q → G) ≡ Q ∧ ¬G.

∀x (Q(x) → G(x)) verneint: **∃x (Q(x) ∧ ¬G(x))** = „Es gibt eine ungerade Quadratzahl“ (9).

## Vollständige Induktion

A(1) ∧ ∀n (A(n) → A(n + 1)) → ∀n A(n) heißt: Gilt es für 1 und überträgt es sich von n auf n + 1, gilt es für alle n.

1. **Anfang:** n = 1 nachrechnen.
2. **Annahme:** gilt für ein festes n.
3. **Schluss:** A(n + 1) aufschreiben, Annahme einsetzen, umformen.

1 + … + n = n(n + 1)/2: Anfang 1 = 1 · 2/2. Schluss: n(n + 1)/2 + (n + 1) = (n + 1)(n + 2)/2.

## Typische Fehler

- ∨ als entweder-oder gelesen.
- A → B bei A = f für falsch gehalten.
- Umkehrschluss statt Kontraposition.
- ¬(A ∧ B) als ¬A ∧ ¬B.
- KNF wie DNF verneint.
- ¬∀ als ∀¬ statt ∃¬.
- Induktion: Anfang vergessen, Annahme „für alle n“, Annahme nicht benutzt.
- Beispiele als Beweis.
