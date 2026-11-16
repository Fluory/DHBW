# Lösungen: Übungsaufgaben Aussagenlogik (Logik und Algebra, Dr. Heller)

*Blatt „Übungsaufgaben: Aussagenlogik“ aus Moodle (gesehen 16.11.2026). Eigene Lösungen, keine offizielle Musterlösung.
Alle Wahrheitstafeln sind mit Python nachgerechnet. Schreibweise wie auf den Folien: w = wahr, f = falsch,
→ Implikation, ↔ Äquivalenz, ⇒ „folgt logisch“, ≡ „gleichwertig“. In den Tafeln steht w zuerst.*

**Kurz-Erinnerung, die du fast überall brauchst:**

- **A → B** ist **nur** falsch bei A = w und B = f.
- **A ↔ B** ist wahr, wenn beide **gleich** sind.
- **Vorrang:** ¬ vor ∧ vor ∨ vor → vor ↔ (wie „Minus vor Mal vor Plus“).

---

## Aufgabe 1 · Grundlagen

A = „x durch 2 teilbar“, B = „x durch 3 teilbar“, C = „x durch 6 teilbar“.

**(a)**
1. „Wenn durch 6, dann durch 2“ → **C → A**
2. „genau dann durch 6, wenn durch 2 und durch 3“ → **C ↔ (A ∧ B)**
3. „weder durch 2 noch durch 3“ → **¬A ∧ ¬B** (weder … noch = beides nicht)

**(b)**

| x | A | B | C | C → A | C ↔ (A ∧ B) | ¬A ∧ ¬B |
|---|---|---|---|---|---|---|
| 7 | f | f | f | w | w | w |
| 9 | f | w | f | w | w | f |
| 12 | w | w | w | w | w | f |

*Beachte:* Bei 7 und 9 ist C → A wahr, weil C falsch ist. Aus Falschem folgt alles.

---

## Aufgabe 2 · Implikation

A = „7 ist Primzahl“ = **w**, B = „4 ist ungerade“ = **f**, C = „2 + 2 = 5“ = **f**.

**(a)**

- A → B: w → f = **f**. Das ist der einzige Fall, in dem → falsch ist.
- C → B: f → f = **w**
- C → A: f → w = **w**
- ¬B → C: w → f = **f**
- A ↔ ¬C: w ↔ w = **w**

**(b)**

- ¬B → C: „**Wenn 4 nicht ungerade ist, dann ist 2 + 2 = 5.**“
- A ↔ ¬C: „**7 ist genau dann eine Primzahl, wenn 2 + 2 nicht 5 ist.**“

---

## Aufgabe 3 · Vorrangregeln

**(a) Klammern setzen** (¬ vor ∧ vor ∨ vor → vor ↔):
- F1 = **((¬A) ∧ B) → (¬(C ∨ D))**
- F2 = **(A ∨ (B ∧ C)) ↔ A**
- F3 = **((A ∧ B) ∨ C) → D**

**(b) Belegung A = f, B = w, C = f, D = w:**

- **F1:** Links ¬A ∧ B = w ∧ w = w. Rechts C ∨ D = w, also ¬(C ∨ D) = f. Insgesamt w → f = **f**.
- **F2:** B ∧ C = f, also A ∨ f = f ∨ f = f. Insgesamt f ↔ f (rechts steht A = f) = **w**.
- **F3:** A ∧ B = f, dann f ∨ C = f ∨ f = f. Insgesamt f → w = **w**.

---

## Aufgabe 4 · Erfüllbarkeit und Folgerung

**(a) Ist (A → B) ∧ A ∧ ¬B erfüllbar?**

| A | B | A → B | ¬B | (A → B) ∧ A ∧ ¬B |
|---|---|---|---|---|
| w | w | w | f | f |
| w | f | f | w | f |
| f | w | w | f | f |
| f | f | w | w | f |

**Nein, nicht erfüllbar** (ein Widerspruch). Wenn A wahr ist und B falsch, dann ist A → B falsch.

**(b) Gilt (A ∨ B) ∧ ¬A ⇒ B?**
Die linke Seite ist **nur** in der Zeile A = f, B = w wahr. Dort ist auch B = w. **Ja, es gilt.**
*Idee:* „A oder B, aber nicht A, also B.“

**(c) Gilt A → B ⇒ B → A?**
Nein. Bei A = f, B = w ist A → B = w, aber B → A = f.
*Merke:* Die **Umkehrung** einer Implikation folgt nicht aus ihr.

---

## Aufgabe 5 · Schaltjahr

**(a)** Distributivgesetz: A ∧ (¬B ∨ C) ≡ **(A ∧ ¬B) ∨ (A ∧ C)**

- Teil 1, A ∧ ¬B: „durch 4, aber nicht durch 100 teilbar“
- Teil 2, A ∧ C: „durch 4 und durch 400 teilbar“

**(b)**

| Jahr | A (4) | B (100) | C (400) | A ∧ ¬B | A ∧ C | S |
|---|---|---|---|---|---|---|
| 1600 | w | w | w | f | w | **w** |
| 1700 | w | w | f | f | f | **f** |
| 2028 | w | f | f | w | f | **w** |
| 2100 | w | w | f | f | f | **f** |

---

## Aufgabe 6 · Tautologie?

¬(¬A ∨ B) ↔ A ∧ ¬B

| A | B | ¬A ∨ B | ¬(¬A ∨ B) | A ∧ ¬B | ↔ |
|---|---|---|---|---|---|
| w | w | w | f | f | w |
| w | f | f | w | w | w |
| f | w | w | f | f | w |
| f | f | w | f | f | w |

**Ja, Tautologie.** Ohne Tafel geht es auch: ¬(¬A ∨ B) ≡ ¬¬A ∧ ¬B (De Morgan) ≡ A ∧ ¬B (doppelte Verneinung).

---

## Aufgabe 7 · (A ∨ ¬B) ∧ ¬A

| A | B | A ∨ ¬B | ¬A | Ergebnis |
|---|---|---|---|---|
| w | w | w | f | **f** |
| w | f | w | f | **f** |
| f | w | f | w | **f** |
| f | f | w | w | **w** |

Nur bei A = f, B = f wahr. Die Formel ist also gleichwertig zu ¬A ∧ ¬B.

---

## Aufgabe 8 · Gleichwertig?

**(a) ¬(A ∧ B) ≡ ¬A ∧ ¬B? → Nein.**
Gegenbeispiel A = w, B = f: links ¬(f) = w, rechts f ∧ w = f. Genauso bei A = f, B = w.
*Richtig wäre* (De Morgan): ¬(A ∧ B) ≡ ¬A **∨** ¬B.

**(b) A → (A ∧ B) ≡ A → B? → Ja.**

| A | B | A ∧ B | A → (A ∧ B) | A → B |
|---|---|---|---|---|
| w | w | w | w | w |
| w | f | f | f | f |
| f | w | f | w | w |
| f | f | f | w | w |

**(c) A ↔ B ≡ (A → B) ∧ (B → A)? → Ja.**

| A | B | A ↔ B | A → B | B → A | (A → B) ∧ (B → A) |
|---|---|---|---|---|---|
| w | w | w | w | w | w |
| w | f | f | f | w | f |
| f | w | f | w | f | f |
| f | f | w | w | w | w |

---

## Aufgabe 9 · Tautologie, Widerspruch oder erfüllbar?

| A | B | (a) (A → B) ∨ (B → A) | (b) (A ∨ B) ∧ (¬A ∨ ¬B) | (c) (A ↔ B) ∧ (A ↔ ¬B) |
|---|---|---|---|---|
| w | w | w | f | f |
| w | f | w | w | f |
| f | w | w | w | f |
| f | f | w | f | f |

- **(a) Tautologie.** Einer der beiden Pfeile ist immer wahr.
- **(b) erfüllbar, keine Tautologie.** Das ist genau „entweder oder“ (⊻).
- **(c) Widerspruch.** A kann nicht gleichzeitig gleich B und gleich ¬B sein.

---

## Aufgabe 10 · Acht Zeilen

| A | B | C | A → B | B → C | (A → B) ∧ (B → C) | A → C | B → C für (b) | A → (B → C) | (A → B) → C |
|---|---|---|---|---|---|---|---|---|---|
| w | w | w | w | w | w | w | w | w | w |
| w | w | f | w | f | f | f | f | f | f |
| w | f | w | f | w | f | w | w | w | w |
| w | f | f | f | w | f | f | w | w | w |
| f | w | w | w | w | w | w | w | w | w |
| f | w | f | w | f | f | w | f | **w** | **f** |
| f | f | w | w | w | w | w | w | w | w |
| f | f | f | w | w | w | w | w | **w** | **f** |

**(a)**
- **(A → B) ∧ (B → C) ⇒ A → C gilt.** In jeder Zeile, in der die linke Seite w ist, ist auch A → C = w. Das ist der **Kettenschluss**.
- **Die Umkehrung gilt nicht.** Bei A = w, B = f, C = w ist A → C = w, aber die linke Seite f.

**(b) Nicht gleichwertig.** Bei A = f, B = w, C = f (und bei A = f, B = f, C = f) ist A → (B → C) = w, aber (A → B) → C = f.
*Merke:* Bei Pfeil-Ketten sind die Klammern wichtig.

---

## Aufgabe 11 · Vereinfachen mit Gesetzen

**(a)** (A ∨ B) ∧ (A ∨ ¬B)

- ≡ A ∨ (B ∧ ¬B) — **Distributivgesetz**, A ausklammern
- ≡ A ∨ f — **Komplement**: B ∧ ¬B ist immer falsch
- ≡ **A** — **neutrales Element**: „oder falsch“ ändert nichts

**(b)** (A ∧ B) ∨ (¬A ∧ B) ∨ (A ∧ ¬B)

- ≡ ((A ∨ ¬A) ∧ B) ∨ (A ∧ ¬B) — **Distributivgesetz**, B ausklammern
- ≡ (w ∧ B) ∨ (A ∧ ¬B) — **Komplement**: A ∨ ¬A ist immer wahr
- ≡ B ∨ (A ∧ ¬B) — **neutrales Element**
- ≡ (B ∨ A) ∧ (B ∨ ¬B) — **Distributivgesetz**
- ≡ (B ∨ A) ∧ w — **Komplement**
- ≡ **A ∨ B** — **neutrales Element**, **Kommutativgesetz**

---

## Aufgabe 12 · Mehrheitsfunktion

**(a)** m ist wahr, wenn **mindestens zwei** der drei Eingaben w sind.

| A | B | C | m |
|---|---|---|---|
| w | w | w | w |
| w | w | f | w |
| w | f | w | w |
| w | f | f | f |
| f | w | w | w |
| f | w | f | f |
| f | f | w | f |
| f | f | f | f |

Die Tabelle hat **8 Zeilen** (2³). Es gibt insgesamt **2⁸ = 256** dreistellige boolesche Funktionen.

**(b)**
- Ist **C = f**, müssen A und B **beide** w sein, damit m wahr ist. Also gilt m(A, B, f) = **A ∧ B** (Konjunktion).
- Ist **C = w**, reicht **eins** von A und B. Also gilt m(A, B, w) = **A ∨ B** (Disjunktion).

**(c) 4 Stück**, nämlich eine für jede der 4 Zeilen:

| wahr nur in Zeile | Formel |
|---|---|
| A = w, B = w | A ∧ B |
| A = w, B = f | A ∧ ¬B |
| A = f, B = w | ¬A ∧ B |
| A = f, B = f | ¬A ∧ ¬B (= NOR) |

---

## Aufgabe 13 · Normalformen

„Wenn A nicht gilt oder B gilt, dann gilt C.“ → **(¬A ∨ B) → C**

| A | B | C | ¬A ∨ B | (¬A ∨ B) → C |
|---|---|---|---|---|
| w | w | w | w | **w** |
| w | w | f | w | f |
| w | f | w | f | **w** |
| w | f | f | f | **w** |
| f | w | w | w | **w** |
| f | w | f | w | f |
| f | f | w | w | **w** |
| f | f | f | w | f |

**DNF** (die 5 w-Zeilen, jeweils mit „und“):
(A ∧ B ∧ C) ∨ (A ∧ ¬B ∧ C) ∨ (A ∧ ¬B ∧ ¬C) ∨ (¬A ∧ B ∧ C) ∨ (¬A ∧ ¬B ∧ C)

**KNF** (die 3 f-Zeilen, Werte **umgedreht**, jeweils mit „oder“):
(¬A ∨ ¬B ∨ C) ∧ (A ∨ ¬B ∨ C) ∧ (A ∨ B ∨ C)

**Die KNF ist kürzer**, weil es nur 3 f-Zeilen gibt, aber 5 w-Zeilen.

---

## Aufgabe 14 · Normalformen

„Wenn A nicht gilt oder B nicht gilt, dann gilt C nicht.“ → **(¬A ∨ ¬B) → ¬C**

| A | B | C | ¬A ∨ ¬B | ¬C | Formel |
|---|---|---|---|---|---|
| w | w | w | f | f | **w** |
| w | w | f | f | w | **w** |
| w | f | w | w | f | f |
| w | f | f | w | w | **w** |
| f | w | w | w | f | f |
| f | w | f | w | w | **w** |
| f | f | w | w | f | f |
| f | f | f | w | w | **w** |

**DNF** (5 w-Zeilen):
(A ∧ B ∧ C) ∨ (A ∧ B ∧ ¬C) ∨ (A ∧ ¬B ∧ ¬C) ∨ (¬A ∧ B ∧ ¬C) ∨ (¬A ∧ ¬B ∧ ¬C)

**KNF** (3 f-Zeilen, umgedreht):
(¬A ∨ B ∨ ¬C) ∧ (A ∨ ¬B ∨ ¬C) ∧ (A ∨ B ∨ ¬C)

---

## Aufgabe 15 · KNF von g = A ∨ ¬(B ∧ C)

g ist nur falsch, wenn A = f **und** B ∧ C = w. Das ist genau **eine Zeile**: A = f, B = w, C = w.

**KNF** (diese eine Zeile umgedreht): **A ∨ ¬B ∨ ¬C**
Das ist dasselbe wie g selbst, denn mit De Morgan ist ¬(B ∧ C) = ¬B ∨ ¬C.

**DNF:** Sie bräuchte alle w-Zeilen, das sind 8 − 1 = **7 Vollkonjunktionen**.

---

## Aufgabe 16 · Tautologie?

(A → (B ∧ C)) ↔ (¬A ∨ B) ∧ (¬A ∨ C)

**Ja, Tautologie.** Alle 8 Zeilen sind nachgerechnet und ergeben w. Der Grund in zwei Schritten:

- A → (B ∧ C) ≡ ¬A ∨ (B ∧ C), weil A → X dasselbe ist wie ¬A ∨ X.
- Mit dem **Distributivgesetz** wird daraus (¬A ∨ B) ∧ (¬A ∨ C).

Beide Seiten sind also gleichwertig, und damit ist das ↔ immer wahr.

| A | B | C | A → (B ∧ C) | (¬A ∨ B) ∧ (¬A ∨ C) | ↔ |
|---|---|---|---|---|---|
| w | w | w | w | w | w |
| w | w | f | f | f | w |
| w | f | w | f | f | w |
| w | f | f | f | f | w |
| f | * | * | w | w | w |

(Bei A = f sind beide Seiten in allen 4 Zeilen wahr.)

---

## Aufgabe 17 · h = (A ∧ ¬B) ∨ (B ∧ C)

| A | B | C | A ∧ ¬B | B ∧ C | h |
|---|---|---|---|---|---|
| w | w | w | f | w | **w** |
| w | w | f | f | f | f |
| w | f | w | w | f | **w** |
| w | f | f | w | f | **w** |
| f | w | w | f | w | **w** |
| f | w | f | f | f | f |
| f | f | w | f | f | f |
| f | f | f | f | f | f |

**DNF** (4 w-Zeilen):
(A ∧ B ∧ C) ∨ (A ∧ ¬B ∧ C) ∨ (A ∧ ¬B ∧ ¬C) ∨ (¬A ∧ B ∧ C)

**KNF** (4 f-Zeilen, umgedreht):
(¬A ∨ ¬B ∨ C) ∧ (A ∨ ¬B ∨ C) ∧ (A ∨ B ∨ ¬C) ∧ (A ∨ B ∨ C)

---

## Aufgabe 18 · Quantoren

P(x) = „x ist Primzahl“, G(x) = „x ist gerade“, K(x, y) = „x < y“.

**(a)**
1. „Es gibt eine gerade Primzahl“ → **∃x (P(x) ∧ G(x))**
2. „Jede Primzahl ist ungerade“ → **∀x (P(x) → ¬G(x))**
3. „Zu jeder Zahl gibt es eine größere Primzahl“ → **∀x ∃y (P(y) ∧ K(x, y))**

*Achtung bei (2):* Hier gehört **→** hin, nicht ∧. Die Formel ∀x (P(x) ∧ ¬G(x)) hieße „jede Zahl ist eine ungerade Primzahl“.

**(b)**
- (1) **wahr**: x = 2 ist gerade und prim.
- (2) **falsch**: Gegenbeispiel 2.
- (3) **wahr**: Es gibt unendlich viele Primzahlen (Euklid), also liegt über jeder Zahl noch eine.

---

## Aufgabe 19 · Negieren

Regel: Quantor umdrehen, „nicht“ nach innen schieben. Außerdem gilt **¬(X → Y) ≡ X ∧ ¬Y**.

**Negation von (2):**

- ¬∀x (P(x) → ¬G(x))
- ≡ ∃x ¬(P(x) → ¬G(x))
- ≡ ∃x (P(x) ∧ ¬¬G(x))
- ≡ **∃x (P(x) ∧ G(x))**

In Worten: „**Es gibt eine gerade Primzahl.**“
**Was auffällt:** Das ist genau Aussage (1). Die Aussagen (1) und (2) sind also Negationen voneinander, deshalb ist immer genau eine von beiden wahr.

**Negation von (3):**

- ¬∀x ∃y (P(y) ∧ K(x, y))
- ≡ ∃x ∀y ¬(P(y) ∧ K(x, y))
- ≡ **∃x ∀y (¬P(y) ∨ ¬K(x, y))**

In Worten: „Es gibt eine Zahl x, sodass jede Zahl y keine Primzahl ist oder nicht größer als x.“ Einfacher gesagt: „**Es gibt eine Zahl, über der keine Primzahl mehr kommt.**“ (Das ist falsch.)

---

## Aufgabe 20 · Reihenfolge der Quantoren

T(x, y) = „x teilt y“, x ∈ {2, 3, 4}, y ∈ {6, 8, 9}.

**(a)**

| y \ x | 2 | 3 | 4 |
|---|---|---|---|
| 6 | × | × | |
| 8 | × | | × |
| 9 | | × | |

**(b)**

| Aussage | in Worten | Wie prüfen? | Wert |
|---|---|---|---|
| (a) ∀y ∃x T(x, y) | Jede Zahl y hat einen Teiler aus D. | Jede **Zeile** hat ein Kreuz? Ja. | **w** |
| (b) ∃x ∀y T(x, y) | Ein x teilt alle y. | Gibt es eine **volle Spalte**? Nein. | **f** |
| (c) ∀x ∃y ¬T(x, y) | Jedes x teilt mindestens ein y **nicht**. | Hat jede **Spalte** eine Lücke? Ja. | **w** |
| (d) ∃y ∀x T(x, y) | Ein y wird von allen x geteilt. | Gibt es eine **volle Zeile**? Nein. | **f** |

**(c)** **(b) und (c)** sind Negationen voneinander: ¬∃x ∀y T ≡ ∀x ∃y ¬T. Passend dazu ist die eine f und die andere w.

---

## Aufgabe 21 · Beweismuster

**(a) „Ist 3n + 1 gerade, dann ist n ungerade.“ → wahr. Muster 2: Kontraposition.**
Statt der Aussage zeigst du: Ist n **gerade**, dann ist 3n + 1 **ungerade**.

- n gerade heißt n = 2k.
- Dann ist 3n + 1 = 6k + 1 = 2 · (3k) + 1, und das ist ungerade ✓

**(b) „Es gibt keine größte gerade natürliche Zahl.“ → wahr. Muster 3: Widerspruch.**

- Nimm das Gegenteil an: g ist die größte gerade Zahl.
- Dann ist g + 2 auch gerade **und** größer als g.
- Das widerspricht „g ist die größte“ ✓

**(c) „n² + n + 41 ist für alle n prim.“ → falsch. Muster 4: Gegenbeispiel.**

- Tipp der Aufgabe: Bei **n = 41** ist jeder Summand durch 41 teilbar.
- 41² + 41 + 41 = 41 · (41 + 1 + 1) = 41 · 43 = **1763**, und das ist keine Primzahl ✓
- Weiteres Gegenbeispiel: n = 40 ergibt 1681 = 41².

---

## Aufgabe 22 · Vollständige Induktion

Zu zeigen: 1 + 3 + 5 + … + (2n − 1) = n²

**Vorher prüfen:**

| n | linke Seite | n² |
|---|---|---|
| 1 | 1 | 1 |
| 2 | 1 + 3 = 4 | 4 |
| 3 | 1 + 3 + 5 = 9 | 9 |
| 4 | 1 + 3 + 5 + 7 = 16 | 16 |

**Induktionsanfang (n = 1):** Links steht 1, rechts 1² = 1 ✓

**Induktionsannahme:** Für ein festes n gilt 1 + 3 + … + (2n − 1) = n².

**Induktionsschluss (n → n + 1):** Der nächste Summand ist 2(n + 1) − 1 = 2n + 1.

1 + 3 + … + (2n − 1) + (2n + 1)
= **n²** + (2n + 1)   ← *hier wird die Annahme benutzt*
= n² + 2n + 1
= **(n + 1)²** ✓ (binomische Formel)

Damit gilt die Formel für alle n ∈ ℕ.
*Bild:* Jede neue ungerade Zahl legt eine L-förmige Reihe um ein Quadrat, und es entsteht das nächste Quadrat.
