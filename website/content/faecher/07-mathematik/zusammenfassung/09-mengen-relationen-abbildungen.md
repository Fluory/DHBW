Dieses Kapitel baut direkt auf der Aussagenlogik aus Kapitel 8 auf. Es führt die Bausteine ein, aus denen fast die ganze Mathematik gebaut ist: Mengen, Relationen, Abbildungen und algebraische Strukturen. Jeder Baustein nutzt den vorigen: Eine Relation ist eine Menge von Paaren, eine Abbildung eine besondere Relation, eine Struktur eine Menge mit Verknüpfungen.

### Mengen: Logik in neuer Schreibweise

Eine Menge ist eine Sammlung ohne Reihenfolge und ohne Wiederholung. x ∈ M heißt „x liegt in M“, |M| ist die Anzahl der Elemente. M ⊆ N („Teilmenge“) heißt, jedes Element von M liegt auch in N. ⊂ verlangt auf diesen Folien eine **echte** Teilmenge. Die **Potenzmenge** 𝒫(M) enthält alle Teilmengen und hat 2^|M| Elemente. Die Operationen entsprechen der Logik: ∩ („geschnitten“) ist das ∧, ∪ („vereinigt“) ist das ∨, das Komplement ist das ¬. Deshalb gelten alle Gesetze aus Kapitel 8 weiter, auch De Morgan. Das **kartesische Produkt** M × N ist die Menge aller geordneten Paare (x, y). Es hat |M| · |N| Elemente.

### Relationen und Äquivalenzklassen

Eine **Relation** auf M ist eine Teilmenge von M × M. Statt (x, y) ∈ R schreibst du xRy. Vier Eigenschaften werden geprüft. Reflexiv heißt xRx für alle x, symmetrisch heißt xRy → yRx. Antisymmetrisch bedeutet, dass aus xRy und yRx schon x = y folgt. Transitiv heißt, aus xRy und yRz folgt xRz. Für „nein“ reicht ein Gegenbeispiel. Ist eine Relation reflexiv, symmetrisch und transitiv, heißt sie **Äquivalenzrelation**. Sie sortiert M in **Äquivalenzklassen** [a], wie Schubladen: Jedes Element liegt in genau einer.

### Abbildungen

Eine **Abbildung** f: M → N gibt jedem x genau ein f(x). Das Bild f(U) fragt „wohin?“, das **Urbild** f⁻¹(V) fragt „wer landet hier?“. Das Urbild gibt es für jede Abbildung, es kann auch leer sein. g ∘ f heißt wieder „erst f, dann g“. Injektiv, surjektiv und bijektiv bedeuten dasselbe wie in Kapitel 5, nur jetzt auch ohne Zahlen.

### Reste und algebraische Strukturen

a mod n ist der Rest beim Teilen durch n, immer zwischen 0 und n − 1. In ℤₙ = {0, 1, …, n − 1} rechnest du normal und nimmst am Ende den Rest. Eine **Gruppe** ist eine Menge mit einer Verknüpfung, die assoziativ ist, ein neutrales Element hat und zu jedem Element ein Inverses. An der Verknüpfungstafel muss jede Zeile das neutrale Element enthalten. Ein **Ring** hat zwei Verknüpfungen + und ·, die über die Distributivgesetze zusammenpassen. Ein **Körper** ist ein kommutativer Ring, in dem jedes a ≠ 0 ein Inverses bezüglich · hat. ℤₙ ist genau dann ein Körper, wenn n eine Primzahl ist, denn a hat in ℤₙ genau dann ein Inverses, wenn ggT(a, n) = 1 ist. Dieses Inverse findest du mit dem **erweiterten euklidischen Algorithmus**.

### Ein Beispiel, das alles verbindet

„m − n ist durch 7 teilbar“ ist eine Äquivalenzrelation auf ℤ. Ihre Klassen sind die Reste 0 bis 6, zum Beispiel liegen 3, 10 und −4 in [3]. Mit diesen Klassen entsteht ℤ₇, ein Körper, weil 7 prim ist. Löse dort 3 · x = 4. Dazu brauchst du das Inverse von 3. Euklid: 7 = 2 · 3 + 1, also 1 = 7 − 2 · 3 = (−2) · 3 + 1 · 7. Damit ist s = −2, und −2 mod 7 = 5. Probe: 3 · 5 = 15 = 2 · 7 + 1 ✓. Nun multiplizierst du beide Seiten mit 5: x = 5 · 4 = 20 mod 7 = 6. Probe: 3 · 6 = 18 = 2 · 7 + 4 ✓.

### Das musst du können

- ∈ und ⊆ unterscheiden, Potenzmenge und kartesisches Produkt bilden, ∩, ∪, ∖ und Komplement ausrechnen
- eine Relation auf reflexiv, symmetrisch, antisymmetrisch und transitiv prüfen und Äquivalenzklassen angeben
- Bild, Urbild und Komposition einer Abbildung bestimmen; injektiv, surjektiv und bijektiv begründen
- mit a mod n rechnen und eine Gruppe an der Verknüpfungstafel prüfen
- Ring und Körper unterscheiden und begründen, wann ℤₙ ein Körper ist
- ein Inverses in ℤₙ mit dem erweiterten euklidischen Algorithmus bestimmen
