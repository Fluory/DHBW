---
title: "Mengen, Relationen, Abbildungen und algebraische Strukturen"
order: 9
summary: "Kapitel 2 von „Logik und Algebra“: Mengen und Mengenoperationen als Gegenstück zur Logik, Potenzmenge und kartesisches Produkt, Relationen und Äquivalenzklassen, Abbildungen mit Bild, Urbild und Komposition, Rechnen mit Resten (mod n), Gruppe, Ring, Körper und Inverse mit dem erweiterten euklidischen Algorithmus."
klausur: "relevant"
---

Im zweiten Kapitel von „Logik und Algebra“ geht es um die Bausteine, aus denen fast die ganze Mathematik gebaut ist: **Mengen** (Sammlungen von Dingen), **Relationen** (wer steht mit wem in Beziehung?), **Abbildungen** (wer bekommt welchen Partner?) und **algebraische Strukturen** (mit welchen Regeln darf man rechnen?). Das klingt abstrakt. Es ist aber fast nur eine neue Schreibweise für Dinge, die du schon kennst: Einkaufszettel, Schubladen, Getränkeautomaten und die Uhr.

Ein Alltagsbeispiel: Ein Online-Shop hat die Menge K aller Kundinnen und die Menge P aller Produkte. „Hat gekauft“ ist eine **Relation**: eine Liste von Paaren (Kundin, Produkt). „Kundennummer“ ist eine **Abbildung**: Jede Kundin bekommt genau eine Nummer. Und die Prüfziffer einer IBAN rechnet mit **Resten** (mod 97). Genau diese drei Werkzeuge lernst du hier.

Die gute Nachricht: Das Logik-Kapitel (Kapitel 8) hilft dir sofort. ∩ ist das ∧ der Mengen, ∪ das ∨, das Komplement das ¬, und De Morgan gilt genauso. Wer Kapitel 8 kann, hat die Hälfte von 2.1 schon gelernt.

> [!NOTE]
> **Stand**
> Grundlage sind die Folien „VL02 – Mengen, Relationen, Abbildungen und Strukturen“ (94 Folien, Abschnitte 2.1 bis 2.4 und ein Anhang „Selbststudium“) mit allen acht Übungsaufgaben. Wie weit die Vorlesung am 16.11. gekommen ist, ist nicht bekannt. Vermutlich geht es am 23.11. weiter. Ob der Anhang (unendliche Vereinigungen, Abbildungsgruppen) in der Klausur drankommt, ist offen; er ist hier deshalb nur kurz erwähnt.

## Die Schreibweise der Folien

Die Folien benutzen viele neue Zeichen. Lies sie einmal laut vor, bevor du weiterliest.

| Zeichen | So liest du es vor | Beispiel |
|---|---|---|
| {1, 2, 3} | „die Menge mit den Elementen 1, 2, 3“ | Reihenfolge egal: {1, 2, 3} = {3, 1, 2} |
| x ∈ M, x ∉ M | „x liegt in M“, „x liegt nicht in M“ | 2 ∈ {1, 2}, 5 ∉ {1, 2} |
| {x ∣ P(x)} | „die Menge aller x mit der Eigenschaft P“ | {x ∈ ℕ ∣ x gerade} = {2, 4, 6, …} |
| ∅ | „die leere Menge“ | {x ∈ ℕ ∣ x < 0} = ∅ |
| \|M\| | „Mächtigkeit von M“, also Anzahl der Elemente | \|{a, b, c}\| = 3 |
| M ⊆ N | „M ist Teilmenge von N“ (auch gleich erlaubt) | {1, 2} ⊆ {1, 2} |
| M ⊂ N | „M ist **echte** Teilmenge von N“ (Teilmenge und ungleich) | {1} ⊂ {1, 2} |
| 𝒫(M) | „Potenzmenge von M“: alle Teilmengen | 𝒫({1}) = {∅, {1}} |
| M ∩ N, M ∪ N | „M geschnitten N“, „M vereinigt N“ | {1, 2} ∩ {2, 3} = {2} |
| M ∖ N | „M ohne N“ | {1, 2} ∖ {2, 3} = {1} |
| M̅ | „M quer“, das Komplement von M | in G = {1, 2, 3}: {1}̅ = {2, 3} |
| M × N | „M kreuz N“, alle Paare | {1} × {a, b} = {(1, a), (1, b)} |
| xRy | „x steht in Relation R zu y“ | 2 < 5 |
| [a] | „Klasse von a“ | [2] = alle Zahlen mit Rest 2 |
| f : M → N, x ↦ f(x) | „f bildet M nach N ab, x wird zu f(x)“ | f : ℝ → ℝ, x ↦ x² |
| f⁻¹(V) | „Urbild von V“: wer landet in V? | gibt es für **jede** Abbildung |
| g ∘ f | „g nach f“: erst f, dann g | (g ∘ f)(x) = g(f(x)) |
| a mod n | „a modulo n“: der Rest von a geteilt durch n | 17 mod 5 = 2 |
| ℤₙ | „Z n“: die Reste 0, 1, …, n − 1 | ℤ₅ = {0, 1, 2, 3, 4} |
| ggT(a, b) | „größter gemeinsamer Teiler“ | ggT(4, 10) = 2 |

## Mengen und ihre Schreibweisen

### In einem Satz

Eine Menge ist ein Sack mit Dingen, bei dem nur zählt, **ob** etwas drin ist, nicht in welcher Reihenfolge und nicht wie oft.

### Stell dir vor

Ein Einkaufszettel: M = {Milch, Brot, Eier}. Ob „Brot“ oben oder unten steht, ist egal. Schreibst du „Brot“ zweimal auf, kaufst du trotzdem nur ein Brot. Und was nicht auf dem Zettel steht, gehört nicht dazu.

### Mit Zahlen

| Schreibweise | Beispiel | Was gilt |
|---|---|---|
| aufzählend | {1, 4, 8, 9} | = {8, 4, 9, 1}, Reihenfolge egal |
| mit Wiederholung | {1, 2, 2} | = {1, 2}, doppelt zählt nicht |
| beschreibend | {x ∈ ℕ ∣ x ist gerade} | = {2, 4, 6, …} |
| beschreibend | {x ∣ x ist Primzahl} | = {2, 3, 5, 7, 11, …} |
| gemischt | {1, a, {2}} | auch eine Menge: Zahl, Buchstabe und eine Menge |

### Die Formel

- **x ∈ M** heißt: x ist ein **Element** von M. **x ∉ M** heißt: x ist keins.
- **M = N** heißt: M und N haben genau dieselben Elemente.
- **{x ∣ P(x)}**: Der senkrechte Strich ∣ heißt „mit der Eigenschaft“. P(x) ist ein Prädikat aus Kapitel 8. Es wirkt wie ein **Filter**: In die Menge kommt genau das, wofür P(x) wahr ist.
- **∅** ist die **leere Menge**, die Menge ohne Element.
- **|M|** ist die **Mächtigkeit**: die Anzahl der verschiedenen Elemente. Bei unendlich vielen schreibt man |ℕ| = ∞, aber man rechnet damit nicht wie mit einer Zahl.

Die Zahlenmengen der Folien (Def. 2.1.2):

| Menge | Name | Inhalt |
|---|---|---|
| ℕ | natürliche Zahlen | 1, 2, 3, … (in diesem Kurs **ohne** 0) |
| ℕ₀ | natürliche Zahlen mit 0 | 0, 1, 2, 3, … |
| ℤ | ganze Zahlen | …, −2, −1, 0, 1, 2, … |
| ℚ | rationale Zahlen (Brüche) | p/q mit p ∈ ℤ und q ∈ ℕ, z. B. −3/4 |
| ℝ | reelle Zahlen | alle Zahlen auf dem Zahlenstrahl, auch √2, π, e |

Jede steckt in der nächsten: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ.

**Mächtigkeit zählen:** Zähle nur, was **direkt** in den äußeren Klammern steht.

| Menge | Mächtigkeit | Warum |
|---|---|---|
| {1, 2, 2, 3} | 3 | die 2 zählt einmal |
| {ℕ, ℤ, ℚ, ℝ} | 4 | jede Zahlenmenge ist **ein** Element, egal wie groß sie selbst ist |
| {∅, 1, {1}} | 3 | leere Menge, Zahl 1 und die Menge {1} sind drei verschiedene Dinge |
| {∅} | 1 | ein Sack, in dem ein leerer Sack liegt |
| ∅ | 0 | ein leerer Sack |

### So steht es auf der Folie

Def. 2.1.1 (nach Cantor, 1895): Eine Menge ist eine „Zusammenfassung von bestimmten, wohlunterschiedenen Objekten zu einem Ganzen“.

Auf Deutsch heißt das: „bestimmt“ = man kann bei jedem Ding sagen, ob es dazugehört. „wohlunterschieden“ = jedes Ding ist nur einmal drin. Mehr steckt nicht dahinter.

**Mengen und Quantoren:** ∀x ∈ M: P(x) ist die Kurzschrift für ∀x (x ∈ M → P(x)). ∃x ∈ M: P(x) ist die Kurzschrift für ∃x (x ∈ M ∧ P(x)). Auf Deutsch: Die Menge hinter dem ∈ sagt, welche x geprüft werden. ∀ prüft jedes Element, ∃ sucht eins.

- ∀x ∈ {1, 3, 5}: x ist ungerade. **Wahr**, alle drei sind ungerade.
- ∃x ∈ {1, 3, 5}: x > 4. **Wahr**, x = 5.
- ∀x ∈ ℕ: x ist gerade. **Falsch**, x = 1 ist ein Gegenbeispiel.

> [!IMPORTANT]
> **Das Wichtigste**
> Eine Menge hat keine Reihenfolge und keine Wiederholungen. x ∈ M: x liegt drin. |M| = Anzahl der verschiedenen Elemente, gezählt in den äußeren Klammern. In diesem Kurs ist ℕ = {1, 2, 3, …}, mit 0 heißt sie ℕ₀.

> [!WARNING]
> **Typischer Fehler**
> |{∅}| = 0 sagen. Falsch: Die leere Menge ist hier ein **Element**, also |{∅}| = 1. Genauso ist |{{1, 2, 3}}| = 1, denn außen steht nur ein Ding, nämlich die Menge {1, 2, 3}.

## Teilmenge und Potenzmenge

### In einem Satz

M ist eine Teilmenge von N, wenn alles aus M auch in N liegt, und die Potenzmenge ist die Liste **aller** Teilmengen.

### Stell dir vor

Eine Pizzeria hat drei Beläge: Salami, Pilze, Oliven. Jede Pizza, die du bestellen kannst, ist eine **Teilmenge** der Beläge: nur Salami, Salami und Pilze, gar nichts (Margherita), alle drei … Die **Potenzmenge** ist die ganze Speisekarte, also alle möglichen Pizzen. Bei jedem Belag entscheidest du „drauf oder nicht drauf“: 2 · 2 · 2 = 8 Pizzen.

### Mit Zahlen

Alle Teilmengen von M = {a, b, c}, sortiert nach Größe (so vergisst du keine):

| Größe | Teilmengen | Anzahl |
|---|---|---|
| 0 | ∅ | 1 |
| 1 | {a}, {b}, {c} | 3 |
| 2 | {a, b}, {a, c}, {b, c} | 3 |
| 3 | {a, b, c} | 1 |
| **zusammen** | | **8 = 2³** |

| \|M\| | 0 | 1 | 2 | 3 | 4 | 10 |
|---|---|---|---|---|---|---|
| \|𝒫(M)\| | 1 | 2 | 4 | 8 | 16 | 1024 |

### Die Formel

- **M ⊆ N** (Teilmenge): ∀x (x ∈ M → x ∈ N). Jedes Element von M liegt auch in N. N heißt dann **Obermenge**.
- **M ⊂ N** (echte Teilmenge): M ⊆ N **und** M ≠ N. N hat also mindestens ein Element mehr.
- Immer gilt: M ⊆ M und ∅ ⊆ M.
- **Gleichheit zeigen:** Aus M ⊆ N und N ⊆ M folgt M = N („zwei Inklusionen“).
- **𝒫(M) = {N ∣ N ⊆ M}** (Potenzmenge): die Menge aller Teilmengen. Ihre Elemente sind selbst Mengen. Eine Menge aus Mengen heißt **Mengensystem**.
- **|𝒫(M)| = 2^|M|**: Für jedes Element gibt es zwei Möglichkeiten, drin oder nicht drin. Das ist dieselbe Rechnung wie bei den 2ⁿ Zeilen einer Wahrheitstafel.

### So steht es auf der Folie

Def. 2.1.4: M ⊆ N :⇔ ∀x (x ∈ M → x ∈ N).

Auf Deutsch heißt das: „:⇔“ liest du „ist definiert als“. Und die Formel sagt: Für jedes x gilt, wenn es in M liegt, dann liegt es auch in N.

Warum ist ∅ ⊆ M? In „x ∈ ∅ → x ∈ M“ ist die Voraussetzung nie erfüllt, denn in ∅ liegt nichts. Aus Falschem folgt alles (Kapitel 8), also ist die Implikation immer wahr.

### So rechnest du: Element oder Teilmenge?

Frage dich: Steht links **ein Ding** oder **eine Menge von Dingen**?

1. Steht links ein einzelnes Ding, prüfe ∈: Kommt es **genau so** in der rechten Menge vor?
2. Steht links eine Menge, prüfe ⊆: Liegt **jedes** ihrer Elemente rechts?

Beispiel mit N = {1, 2} und 𝒫(N) = {∅, {1}, {2}, {1, 2}}:

| Aussage | wahr? | Warum |
|---|---|---|
| 1 ∈ N | ja | 1 steht in N |
| {1} ∈ N | nein | in N stehen nur Zahlen, keine Mengen |
| {1} ⊆ N | ja | jedes Element von {1} (nur die 1) liegt in N |
| {1} ∈ 𝒫(N) | ja | {1} ist eine Teilmenge von N, also ein Element der Potenzmenge |
| 1 ∈ 𝒫(N) | nein | in 𝒫(N) stehen nur Mengen |
| ∅ ∈ 𝒫(N) | ja | ∅ ist immer eine Teilmenge |
| {1} ⊂ N | ja | Teilmenge und ungleich (die 2 fehlt) |
| N ⊂ N | nein | gleich, also nicht echt |

> [!IMPORTANT]
> **Das Wichtigste**
> ∈ verbindet ein Element mit einer Menge, ⊆ eine Menge mit einer Menge. ⊆ erlaubt Gleichheit, ⊂ verlangt „echt kleiner“. Die Potenzmenge enthält alle Teilmengen, auch ∅ und M selbst, und hat 2^|M| Elemente.

> [!WARNING]
> **Typischer Fehler**
> ⊂ als „Teilmenge oder gleich“ lesen. Auf diesen Folien heißt ⊂ **echte** Teilmenge, für „oder gleich“ steht ⊆. Zweiter Fehler: in der Potenzmenge Elemente statt Mengen erwarten. 1 ∉ 𝒫({1, 2}), aber {1} ∈ 𝒫({1, 2}).

## Mengenoperationen und die Brücke zur Logik

### In einem Satz

Mit ∩, ∪, ∖ und dem Komplement rechnest du mit Mengen genauso wie mit ∧, ∨ und ¬ in der Logik.

### Stell dir vor

Zwei Einkaufszettel: M = {Milch, Brot, Eier} und N = {Brot, Käse}.

- „Was steht auf **beiden** Zetteln?“ Der **Durchschnitt** M ∩ N = {Brot}.
- „Was steht auf **mindestens einem**?“ Die **Vereinigung** M ∪ N = {Milch, Brot, Eier, Käse}.
- „Was steht auf M, aber **nicht** auf N?“ Die **Differenz** M ∖ N = {Milch, Eier}.
- „Was im Supermarkt (Grundmenge) steht **nicht** auf M?“ Das **Komplement** M̅.

### Mit Zahlen

Grundmenge G = {1, 2, …, 8}, M = {1, 3, 5}, N = {2, 3, 5}, S = {5, 7, 8} (Folienbeispiel):

| Operation | Zeichen | Auf Deutsch | Ergebnis |
|---|---|---|---|
| Durchschnitt | M ∩ N | in M **und** in N | {3, 5} |
| Durchschnitt von dreien | M ∩ N ∩ S | in allen dreien | {5} |
| Vereinigung | M ∪ N | in M **oder** in N (oder beiden) | {1, 2, 3, 5} |
| Differenz | M ∖ N | in M, aber **nicht** in N | {1} |
| Differenz andersrum | N ∖ M | in N, aber nicht in M | {2} |
| Komplement | M̅ | in G, aber nicht in M | {2, 4, 6, 7, 8} |

Zwei Mengen ohne gemeinsames Element heißen **disjunkt**: M ∩ N = ∅. Beispiel: {1, 2} und {a, c} sind disjunkt. Ein Bild mit einem Rechteck für G und Kreisen für die Mengen heißt **Venn-Diagramm**.

### Die Formel

| Mengen | Definition (Def. 2.1.6, 2.1.7) | Logik |
|---|---|---|
| x ∈ M ∩ N | x ∈ M **und** x ∈ N | x ∈ M ∧ x ∈ N |
| x ∈ M ∪ N | x ∈ M **oder** x ∈ N | x ∈ M ∨ x ∈ N |
| x ∈ M ∖ N | x ∈ M **und** x ∉ N | x ∈ M ∧ ¬(x ∈ N) |
| x ∈ M̅ | x ∈ G und x ∉ M, also M̅ = G ∖ M | ¬(x ∈ M) |
| M ⊆ N | jedes Element von M liegt in N | ∀x (x ∈ M → x ∈ N) |
| ∅ | die leere Menge | f |

Die Rechenregeln (Satz 2.1.1 und 2.1.2) sind **dieselben Gesetze wie in Kapitel 8**, nur mit ∩ statt ∧, ∪ statt ∨ und ∅ statt f:

| Gesetz | Mengen | Logik zum Vergleich |
|---|---|---|
| Kommutativ | M ∩ N = N ∩ M, M ∪ N = N ∪ M | A ∧ B ≡ B ∧ A |
| Assoziativ | (M ∩ N) ∩ S = M ∩ (N ∩ S) | (A ∧ B) ∧ C ≡ A ∧ (B ∧ C) |
| Distributiv | S ∩ (M ∪ N) = (S ∩ M) ∪ (S ∩ N) | A ∧ (B ∨ C) ≡ (A ∧ B) ∨ (A ∧ C) |
| Distributiv | S ∪ (M ∩ N) = (S ∪ M) ∩ (S ∪ N) | A ∨ (B ∧ C) ≡ (A ∨ B) ∧ (A ∨ C) |
| Identität | M ∪ ∅ = M, M ∩ ∅ = ∅, M ∖ ∅ = M | A ∨ f ≡ A, A ∧ f ≡ f |
| Differenz | M ∖ N = M ∩ N̅ | A ∧ ¬B |
| De Morgan | (M ∪ N)̅ = M̅ ∩ N̅ | ¬(A ∨ B) ≡ ¬A ∧ ¬B |
| De Morgan | (M ∩ N)̅ = M̅ ∪ N̅ | ¬(A ∧ B) ≡ ¬A ∨ ¬B |
| doppeltes Komplement | (M̅)̅ = M | ¬¬A ≡ A |

(Alle Regeln mit Python für alle Teilmengen einer vierelementigen Grundmenge geprüft.)

### So steht es auf der Folie

Def. 2.1.7: Ist N ⊆ M, heißt M ∖ N das Komplement von N in M. Ist die Grundmenge klar, schreibt man einfach N̅.

Auf Deutsch heißt das: Was „nicht in N“ bedeutet, legt erst die Grundmenge fest. Im Supermarkt G ist „nicht auf dem Zettel“ etwas anderes als im ganzen Universum. Darum braucht das Komplement immer eine Grundmenge, die Differenz M ∖ N geht dagegen für beliebige Mengen.

### So rechnest du: De Morgan mit Zahlen prüfen

Probe der Folie (G = {1, …, 8}, M = {1, 3, 5}, N = {2, 3, 5}): Gilt (M ∩ N)̅ = M̅ ∪ N̅?

1. Links, erst innen: M ∩ N = {3, 5}.
2. Dann das Komplement in G: alles außer 3 und 5, also {1, 2, 4, 6, 7, 8}.
3. Rechts, erst die Komplemente: M̅ = {2, 4, 6, 7, 8} und N̅ = {1, 4, 6, 7, 8}.
4. Vereinigen: {2, 4, 6, 7, 8} ∪ {1, 4, 6, 7, 8} = {1, 2, 4, 6, 7, 8}.
5. Beide Seiten gleich. ✓

> [!IMPORTANT]
> **Das Wichtigste**
> ∩ = und (in beiden), ∪ = oder (in mindestens einer, beide erlaubt), M ∖ N = in M und nicht in N, M̅ = G ∖ M. Alle Gesetze aus Kapitel 8 gelten wörtlich weiter, auch De Morgan: Das Komplement dreht ∩ und ∪ um. Disjunkt heißt M ∩ N = ∅.

> [!WARNING]
> **Typischer Fehler**
> Die Differenz umdrehen: M ∖ N ≠ N ∖ M ({1} ≠ {2} im Beispiel). Bei ∩ und ∪ ist die Reihenfolge egal, bei ∖ nicht. Zweiter Fehler: De Morgan ohne Umdrehen, also (M ∩ N)̅ = M̅ ∩ N̅. Probe: links {1, 2, 4, 6, 7, 8}, rechts nur {4, 6, 7, 8}.

## Das kartesische Produkt

### In einem Satz

Das kartesische Produkt M × N ist die Liste aller Paare, bei denen das erste Teil aus M und das zweite aus N kommt.

### Stell dir vor

Ein Menü: Hauptgericht aus M = {Pasta, Curry}, Getränk aus N = {Wasser, Saft, Tee}. Jede mögliche Bestellung ist ein Paar (Hauptgericht, Getränk). Es gibt 2 · 3 = 6 Bestellungen. Die Reihenfolge im Paar ist fest: Erst kommt das Hauptgericht, dann das Getränk.

### Mit Zahlen

{1, 2} × {a, b, c} (Folienbeispiel), als Tabelle: Zeile = erstes Teil, Spalte = zweites Teil.

| × | a | b | c |
|---|---|---|---|
| **1** | (1, a) | (1, b) | (1, c) |
| **2** | (2, a) | (2, b) | (2, c) |

Das sind 2 · 3 = **6 Paare**. Umgekehrt enthält {a, b, c} × {1, 2} das Paar (a, 1), aber nicht (1, a). Also ist M × N ≠ N × M.

### Die Formel

M × N := {(x, y) ∣ x ∈ M, y ∈ N}

- (x, y) ist ein **geordnetes Paar**: Die Reihenfolge zählt, (5, 3) ≠ (3, 5). Bei Mengen wäre {5, 3} = {3, 5}.
- **|M × N| = |M| · |N|**, darum heißt es „Produkt“.
- Für n Mengen: M₁ × … × Mₙ ist die Menge aller **n-Tupel** (m₁, …, mₙ). Kurz Mⁿ = M × … × M (n-mal).
- ℝ² = ℝ × ℝ ist das Koordinatensystem: Jeder Punkt ist ein Paar (x, y).
- M × ∅ = ∅, denn |M| · 0 = 0.

### So steht es auf der Folie

Def. 2.1.8: M × N := {(x, y) ∣ x ∈ M, y ∈ N}.

Auf Deutsch heißt das: Kombiniere jedes Element links mit jedem Element rechts und schreibe die Kombination als Paar in runden Klammern.

> [!IMPORTANT]
> **Das Wichtigste**
> M × N = alle Paare (x, y) mit x aus M und y aus N. Bei Paaren zählt die Reihenfolge. |M × N| = |M| · |N|.

> [!WARNING]
> **Typischer Fehler**
> Runde und geschweifte Klammern verwechseln. (1, 2) ist ein Paar mit Reihenfolge, {1, 2} eine Menge ohne. Und |M × N| ist |M| · |N|, nicht |M| + |N|: {1, 2} × {a, b, c} hat 6 Paare, nicht 5.

## Relationen und ihre Eigenschaften

### In einem Satz

Eine Relation ist eine Liste von Paaren, die „zueinander in Beziehung stehen“, also eine Teilmenge von M × N.

### Stell dir vor

Eine Kreuztabelle in einem Notenbuch: Links stehen die Studierenden, oben die Fächer. Ein Kreuz heißt „hat das Fach bestanden“. Die Menge aller angekreuzten Paare (Person, Fach) ist die Relation. Mehr ist eine Relation nicht.

### Mit Zahlen

Die Relation „x teilt y“ auf M = {1, 2, 3, 4}. Ein Kreuz in Zeile x, Spalte y heißt x teilt y:

| x \ y | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| **1** | × | × | × | × |
| **2** | | × | | × |
| **3** | | | × | |
| **4** | | | | × |

Als Paarmenge: R = {(1, 1), (1, 2), (1, 3), (1, 4), (2, 2), (2, 4), (3, 3), (4, 4)}. Also 2R4 (2 teilt 4), aber nicht 4R2.

Jetzt die vier Eigenschaften an der Tabelle:

| Eigenschaft | Frage | Test an der Tabelle | hier |
|---|---|---|---|
| reflexiv | Steht jedes x zu sich selbst in Beziehung? | Diagonale voll | ja |
| symmetrisch | Aus xRy folgt yRx? | Tabelle spiegelbildlich zur Diagonale | nein: 1R2, aber nicht 2R1 |
| antisymmetrisch | Aus xRy und yRx folgt x = y? | außerhalb der Diagonale nie beide Kreuze (x, y) und (y, x) | ja |
| transitiv | Aus xRy und yRz folgt xRz? | jede Kette hat eine Abkürzung | ja: 1R2 und 2R4, und 1R4 |

### Die Formel

R ist eine Relation **auf M**, wenn R ⊆ M × M. Statt (x, y) ∈ R schreibt man **xRy**. Eigenschaften (Def. 2.2.2), jeweils für alle x, y, z ∈ M:

- **reflexiv:** xRx. *Jedes Element steht zu sich selbst in Beziehung.*
- **symmetrisch:** xRy → yRx. *Die Reihenfolge im Paar ist egal.*
- **antisymmetrisch:** (xRy ∧ yRx) → x = y. *Hin und zurück gibt es nur bei einem Element mit sich selbst.*
- **transitiv:** (xRy ∧ yRz) → xRz. *Die Beziehung zieht sich wie eine Kette durch.*

Eine Relation und ein zweistelliges Prädikat P(x, y) aus Kapitel 8 sind dasselbe: P(x, y) ist wahr genau dann, wenn (x, y) in R liegt.

### So steht es auf der Folie

Folienbeispiel „>“ auf ℝ:

| Eigenschaft | „>“ | Begründung |
|---|---|---|
| reflexiv | nein | 3 > 3 ist falsch |
| symmetrisch | nein | 5 > 2, aber nicht 2 > 5 |
| antisymmetrisch | **ja** | x > y und y > x gelten nie zugleich. Die Voraussetzung ist nie erfüllt, also ist die Implikation immer wahr |
| transitiv | ja | x > y und y > z ⇒ x > z |

Auf Deutsch heißt das: „Antisymmetrisch“ ist eine Wenn-dann-Aussage. Ist das „wenn“ nie erfüllt, ist sie automatisch wahr (aus Falschem folgt alles).

### So rechnest du: Eigenschaften prüfen

1. Ist R eine Relation **auf einer Menge** (R ⊆ M × M)? Nur dann ergeben die Fragen Sinn.
2. Geh die vier Eigenschaften der Reihe nach durch.
3. Für „**nein**“ reicht **ein Gegenbeispiel** mit konkreten Zahlen.
4. Für „**ja**“ brauchst du ein **Argument für alle** x, y, z (nicht nur Beispiele).

Beispiel ≤ auf ℝ (Aufgabe 2.2.1 der Folien):

1. Reflexiv? x ≤ x gilt immer, denn x = x. **Ja.**
2. Symmetrisch? Gegenbeispiel 2 ≤ 5, aber 5 ≤ 2 ist falsch. **Nein.**
3. Antisymmetrisch? x ≤ y und y ≤ x geht nur bei x = y. **Ja.**
4. Transitiv? x ≤ y und y ≤ z ergibt x ≤ z, die Kette hält. **Ja.**

> [!IMPORTANT]
> **Das Wichtigste**
> Relation = Menge von Paaren, R ⊆ M × N, geschrieben xRy. Die vier Eigenschaften: reflexiv (xRx), symmetrisch (xRy → yRx), antisymmetrisch (xRy ∧ yRx → x = y), transitiv (xRy ∧ yRz → xRz). „Nein“ zeigt man mit einem Gegenbeispiel, „ja“ mit einem Argument für alle.

> [!WARNING]
> **Typischer Fehler**
> „Antisymmetrisch heißt nicht symmetrisch.“ Falsch. „>“ ist antisymmetrisch und nicht symmetrisch, „≠“ ist symmetrisch und **nicht** antisymmetrisch (2 ≠ 5 und 5 ≠ 2, aber 2 ≠ 5 ist nicht 2 = 5), und „=“ ist beides. Zweiter Fehler bei Transitivität: x = z vergessen. Bei ≠ gilt 2 ≠ 5 und 5 ≠ 2, aber 2 ≠ 2 ist falsch, also ist ≠ nicht transitiv.

## Äquivalenzrelation und Äquivalenzklassen

### In einem Satz

Eine Äquivalenzrelation bedeutet „gleich in einem bestimmten Aspekt“ und sortiert alle Elemente in Schubladen, in denen jedes Element in genau einer Schublade liegt.

### Stell dir vor

Socken sortieren nach Farbe. „Hat dieselbe Farbe wie“ ist eine Beziehung zwischen Socken. Jede Socke hat dieselbe Farbe wie sie selbst (reflexiv). Hat die rote Socke dieselbe Farbe wie eine andere, gilt das auch umgekehrt (symmetrisch). Und haben A und B dieselbe Farbe und B und C, dann auch A und C (transitiv). Am Ende liegen die Socken in Schubladen: rot, blau, schwarz. Jede Socke liegt in **genau einer** Schublade. Die Schubladen heißen **Äquivalenzklassen**.

### Mit Zahlen

R₅ auf ℤ: „m − n ist durch 5 teilbar“.

- 7 R₅ 2, denn 7 − 2 = 5.
- 12 R₅ 2, denn 12 − 2 = 10.
- Nicht 13 R₅ 2, denn 13 − 2 = 11.

Die Schubladen sind die Reste bei Division durch 5:

| Klasse | Inhalt | Rest |
|---|---|---|
| [0] | …, −10, −5, 0, 5, 10, … | 0 |
| [1] | …, −9, −4, 1, 6, 11, … | 1 |
| [2] | …, −8, −3, 2, 7, 12, … | 2 |
| [3] | …, −7, −2, 3, 8, 13, … | 3 |
| [4] | …, −6, −1, 4, 9, 14, … | 4 |

Mehr Klassen gibt es nicht. Und [2] = [7] = [12]: Jedes Element einer Schublade kann sie benennen.

### Die Formel

- **Äquivalenzrelation** (Def. 2.2.3): reflexiv **und** symmetrisch **und** transitiv.
- **Äquivalenzklasse** (Def. 2.2.4): [a] := {x ∈ M ∣ xRa}, alle Elemente, die zu a äquivalent sind. Jedes Element einer Klasse heißt **Vertreter** (Repräsentant).
- **Satz 2.2.1:** Verschiedene Klassen sind **disjunkt**, und alle zusammen ergeben **ganz M**. Das heißt **disjunkte Zerlegung**.

Bei der Gleichheit „=“ auf ℝ ist jede Klasse nur ein Element: [a] = {a}.

### So steht es auf der Folie

Folienbeispiel Teilbarkeitsrelation: R₅ = {(m, n) ∈ ℤ × ℤ ∣ m − n ohne Rest durch 5 teilbar}.

Auf Deutsch heißt das: Zwei ganze Zahlen stehen in Beziehung, wenn ihre Differenz ein Vielfaches von 5 ist, also m − n = 5k für eine ganze Zahl k. Das ist genau dann der Fall, wenn beide denselben Rest bei Division durch 5 haben.

### So rechnest du: Äquivalenzrelation nachweisen

Schreibe die Bedingung als Gleichung: m R₅ n heißt m − n = 5k mit k ∈ ℤ. Dann:

1. **Reflexiv:** m − m = 0 = 5 · 0. Also k = 0, und m R₅ m. ✓
2. **Symmetrisch:** Sei m − n = 5k. Dann n − m = −(m − n) = 5 · (−k), und −k ist wieder ganz. Also n R₅ m. ✓
3. **Transitiv:** Sei m − n = 5k und n − p = 5l. Addieren: m − p = (m − n) + (n − p) = 5k + 5l = 5(k + l). Also m R₅ p. ✓
4. Alle drei gelten ⇒ Äquivalenzrelation. Klassen: [0], [1], [2], [3], [4].

Warum jedes Element in genau einer Klasse liegt (Begründung aus dem Anhang): Wegen reflexiv liegt a in seiner eigenen Klasse [a]. Haben [a] und [b] ein gemeinsames x, gilt xRa und xRb. Mit Symmetrie aRx, mit Transitivität aRb, und dann sind die Klassen gleich.

> [!IMPORTANT]
> **Das Wichtigste**
> Äquivalenzrelation = reflexiv + symmetrisch + transitiv, „gleich in einem Aspekt“. Die Klasse [a] ist die Schublade von a. Klassen überlappen nie und decken zusammen ganz M ab. Bei R₅ auf ℤ gibt es genau fünf Klassen, die Reste 0 bis 4.

> [!WARNING]
> **Typischer Fehler**
> Ein „ja“ mit einem Beispiel begründen. „7 R₅ 2 und 2 R₅ 7, also symmetrisch“ ist kein Beweis, das ist nur ein Fall. Du brauchst die Rechnung mit allgemeinem m, n und k. Zweiter Fehler: „≤ ist eine Äquivalenzrelation“. ≤ ist nicht symmetrisch, also nicht.

## Abbildungen: Bild, Urbild und Komposition

### In einem Satz

Eine Abbildung f : M → N ist eine Zuordnung, bei der **jedes** Element links **genau einen** Partner rechts bekommt. Rechts darf dagegen alles passieren.

### Stell dir vor

Ein Getränkeautomat. Jede Taste (links) liefert genau ein Getränk (rechts): nie keins, nie zwei. Zwei Tasten dürfen dasselbe Getränk liefern, und manche Getränke im Lager hat gar keine Taste. Das ist alles erlaubt. Das kennst du schon aus Kapitel 5 („Funktion = Automat“). Neu ist nur: Eine Abbildung muss nicht mit Zahlen arbeiten. Buchstaben, Wahrheitswerte oder Paare gehen auch.

### Mit Zahlen

Folienbeispiel: M = {a, b, c, d}, N = {1, 2, 3, 4}, f(a) = 1, f(b) = 1, f(c) = 3, f(d) = 4.

| Begriff | Frage | hier |
|---|---|---|
| Definitionsmenge D(f) | Was darf rein? | M = {a, b, c, d} |
| Zielmenge | Wo dürfen Ergebnisse liegen? | N = {1, 2, 3, 4} |
| Bildmenge f(M) | Was kommt wirklich heraus? | {1, 3, 4}, die 2 wird nie getroffen |
| Bild von c | Wohin geht c? | f(c) = 3 |
| Urbild von {1} | Wer landet auf 1? | f⁻¹({1}) = {a, b} |
| Urbild von {2} | Wer landet auf 2? | f⁻¹({2}) = ∅ |
| Bild von {a, b} | Wohin gehen a und b? | f({a, b}) = {1} |
| Urbild von {3, 4} | Wer landet auf 3 oder 4? | f⁻¹({3, 4}) = {c, d} |

Weitere Abbildungen der Folien:

| Abbildung | Vorschrift |
|---|---|
| Folge a : ℕ → ℝ | n ↦ aₙ (kennst du aus Kapitel 2) |
| Hashfunktion h : ℕ₀ → {0, …, p − 1} | n ↦ n mod p (Rest bei Division durch p) |
| ASCII-Code {A, …, Z} → {0, …, 127} | A ↦ 65, B ↦ 66, …, Z ↦ 90 |
| identische Abbildung id_M : M → M | x ↦ x (ändert nichts) |
| Prädikat P : ℝ² → {w, f} | (x, y) ↦ w, falls x < y, sonst f |

### Die Formel

- **Abbildung** (Def. 2.3.1): Jedem x ∈ M ist genau ein y ∈ N zugeordnet. Schreibweise f : M → N, x ↦ f(x). Der Pfeil → steht zwischen **Mengen**, ↦ zwischen **Elementen**.
- **Bildmenge** (Def. 2.3.2): f(M) := {y ∈ N ∣ ∃x ∈ M: y = f(x)}. Es gilt immer f(M) ⊆ N.
- **Bild einer Teilmenge** (Def. 2.3.3): f(U) := {f(x) ∣ x ∈ U} für U ⊆ M. *Wo landen diese Elemente?*
- **Urbild:** f⁻¹(V) := {x ∈ M ∣ f(x) ∈ V} für V ⊆ N. *Wer landet hier?*
- **Einschränkung** f|U : U → N: dieselbe Vorschrift, nur auf U.
- **Abbildung als Relation:** f entspricht der Paarmenge {(x, f(x)) ∣ x ∈ M} ⊆ M × N. Test an der Kreuztabelle: Die Relation ist **genau dann eine Abbildung, wenn jede Zeile genau ein Kreuz hat**. „Hat bestanden“ aus dem Notenbuch ist keine Abbildung: Wer drei Fächer bestanden hat, hat drei Kreuze in seiner Zeile.

**Komposition** (Def. 2.3.4): Für f : M → N und g : N → S ist g ∘ f : M → S, x ↦ g(f(x)), gesprochen „g nach f“. Das innere f wirkt **zuerst**.

### So steht es auf der Folie

Folienbeispiel zur Komposition: f : ℝ → ℝ₀⁺, x ↦ x² und g : ℝ₀⁺ → ℝ, x ↦ √x. Dabei ist ℝ₀⁺ = {x ∈ ℝ ∣ x ≥ 0}.

Auf Deutsch heißt das: Erst quadrieren, dann Wurzel ziehen. (g ∘ f)(x) = √(x²) = |x|. Also −2 ↦ 2, 1 ↦ 1, 3 ↦ 3. Das klappt, weil alles, was f ausgibt (Zahlen ≥ 0), in g hineinpasst.

### So rechnest du: Komposition

Beispiel f(x) = x², g(x) = x + 1, jeweils ℝ → ℝ.

1. Für g ∘ f: Setze f(x) in g ein. g(f(x)) = g(x²) = x² + 1.
2. Für f ∘ g: Setze g(x) in f ein. f(g(x)) = f(x + 1) = (x + 1)².
3. Probe mit x = 2: (g ∘ f)(2) = g(4) = 5, (f ∘ g)(2) = f(3) = 9.
4. 5 ≠ 9: Die Reihenfolge zählt.

Die Identität ändert nichts: f ∘ id_M = f und id_N ∘ f = f.

> [!IMPORTANT]
> **Das Wichtigste**
> Abbildung: jedes x bekommt genau ein f(x). Zielmenge = was erlaubt ist, Bildmenge = was wirklich herauskommt. Bild f(U) fragt „wohin?“, Urbild f⁻¹(V) fragt „woher?“ und existiert für jede Abbildung. g ∘ f heißt „erst f, dann g“, von rechts nach links lesen.

> [!WARNING]
> **Typischer Fehler**
> f⁻¹(V) nur bei umkehrbaren f erlauben. Das Urbild einer Menge gibt es **immer**, es kann auch leer sein (f⁻¹({2}) = ∅ oben). Nur die Umkehr**abbildung** f⁻¹ : N → M braucht Bijektivität. Zweiter Fehler: g ∘ f von links nach rechts lesen.

## injektiv, surjektiv, bijektiv

### In einem Satz

Injektiv heißt „rechts wird nichts doppelt getroffen“, surjektiv heißt „rechts bleibt nichts frei“, bijektiv heißt „beides“.

### Stell dir vor

Ein Kinosaal: Die Personen sind die Elemente links, die Stühle die Elemente rechts. Abbildung heißt: Jede Person sitzt auf genau einem Stuhl.

| Begriff | im Kino |
|---|---|
| injektiv | kein Stuhl ist doppelt besetzt |
| surjektiv | kein Stuhl bleibt leer |
| bijektiv | jeder Stuhl hat genau eine Person, dann kann man von jedem Stuhl eindeutig zur Person zurück |

### Mit Zahlen

Die Aufgabe 2.3.2 der Folien:

| Abbildung | injektiv? | surjektiv? |
|---|---|---|
| h : ℕ₀ → {0, …, p − 1}, n ↦ n mod p | nein: h(0) = h(p) = 0 | ja: jeder Rest r wird von n = r getroffen |
| ASCII-Code {A, …, Z} → {0, …, 127} | ja: verschiedene Buchstaben, verschiedene Codes | nein: nur 65 … 90 werden getroffen, z. B. 0 nie |
| id_M : M → M | ja | ja, also **bijektiv** |
| f : ℝ → ℝ, x ↦ x² | nein: f(2) = f(−2) = 4 | nein: −1 kommt nie heraus |
| g : ℝ₀⁺ → ℝ₀⁺, x ↦ x² | ja | ja, also **bijektiv** |

Die letzten beiden Zeilen haben **dieselbe Vorschrift**, aber andere Mengen, und deshalb andere Antworten.

Bei endlichen Mengen hilft das Zählen: f : {1, 2, 3} → {1, …, 9}, x ↦ x² ist injektiv (1, 4, 9 sind verschieden), aber nicht surjektiv. Drei Personen können neun Stühle nicht füllen. Bijektiv geht bei endlichen Mengen nur, wenn **beide gleich viele** Elemente haben.

### Die Formel

Def. 2.3.5:

- **injektiv:** x₁ ≠ x₂ → f(x₁) ≠ f(x₂). Gleichwertig (Kontraposition): f(x₁) = f(x₂) → x₁ = x₂.
- **surjektiv:** ∀y ∈ N ∃x ∈ M: f(x) = y. Also f(M) = N.
- **bijektiv:** injektiv und surjektiv. Dann gibt es die **Umkehrabbildung** f⁻¹ : N → M mit f⁻¹ ∘ f = id_M und f ∘ f⁻¹ = id_N.

### So steht es auf der Folie

„f heißt injektiv, wenn aus x₁ ≠ x₂ folgt f(x₁) ≠ f(x₂).“

Auf Deutsch heißt das: Verschiedene Eingaben geben verschiedene Ergebnisse. Für den Beweis nimmt man meist die Kontraposition aus Kapitel 8: Aus gleichem Ergebnis folgt gleiche Eingabe.

### So rechnest du

1. **Injektiv?** Suche zwei verschiedene x mit gleichem Bild. Findest du welche: „nein“. Sonst zeige: f(x₁) = f(x₂) ⇒ x₁ = x₂.
2. **Surjektiv?** Suche ein y in der Zielmenge, das nie herauskommt. Findest du eins: „nein“. Sonst gib zu jedem y ein passendes x an.
3. **Bijektiv?** Beide ja. Dann die Umkehrabbildung angeben.

Beispiel f : ℝ → ℝ, x ↦ 3x − 2:

1. Injektiv: 3x₁ − 2 = 3x₂ − 2 ⇒ 3x₁ = 3x₂ ⇒ x₁ = x₂. Ja.
2. Surjektiv: Zu y suche x mit 3x − 2 = y ⇒ x = (y + 2)/3. Das geht für jedes y. Ja.
3. Bijektiv mit f⁻¹(y) = (y + 2)/3. Probe: f(4) = 10, f⁻¹(10) = 12/3 = 4. ✓

> [!IMPORTANT]
> **Das Wichtigste**
> injektiv = nichts doppelt getroffen, surjektiv = nichts frei, bijektiv = beides, dann gibt es f⁻¹. Ob etwas injektiv oder surjektiv ist, hängt an Definitions- **und** Zielmenge, nicht nur an der Vorschrift.

> [!WARNING]
> **Typischer Fehler**
> Injektiv und surjektiv nur an der Formel festmachen. x ↦ x² ist auf ℝ → ℝ weder noch, auf ℝ₀⁺ → ℝ₀⁺ bijektiv. Zweiter Fehler: Eine Zuordnung, bei der ein x **zwei** Partner hat, „nicht injektiv“ nennen. Sie ist gar **keine Abbildung**.

## Rechnen mit Resten: mod n und ℤₙ

### In einem Satz

a mod n ist der Rest, der beim Teilen von a durch n übrig bleibt, und in ℤₙ rechnest du nur noch mit diesen Resten.

### Stell dir vor

Eine Uhr. 10 Uhr plus 5 Stunden ist nicht „15 Uhr“ auf dem Zifferblatt, sondern 3 Uhr: Du rechnest mod 12. Oder ein Wochentag: Heute ist Montag, in 10 Tagen ist Donnerstag, denn 10 mod 7 = 3, also drei Tage weiter. Weitere Beispiele der Folien: Minuten (mod 60) und ein Kilometerzähler mit sechs Stellen (mod 10⁶).

### Mit Zahlen

| Rechnung | Teilen mit Rest | Rest |
|---|---|---|
| 17 mod 5 | 17 = 3 · 5 + 2 | 2 |
| 20 mod 4 | 20 = 5 · 4 + 0 | 0 |
| 3 mod 5 | 3 = 0 · 5 + 3 | 3 |
| −3 mod 5 | −3 = (−1) · 5 + 2 | 2 |
| 22 + 5 mod 24 | 27 = 1 · 24 + 3 | 3 (also 3 Uhr) |

Der Rest ist **nie negativ**: Bei −3 gehst du so weit nach unten, bis du ein Vielfaches von 5 unter −3 findest (−5), und zählst dann hoch: −5 + 2 = −3, also Rest 2.

### Die Formel

**Rest (Def. 2.4.2):** Für a ∈ ℤ und n ∈ ℕ gibt es genau ein q ∈ ℤ und ein r mit a = q · n + r und 0 ≤ r < n. Dann ist **a mod n = r**.

- q ist der ganzzahlige Quotient („wie oft passt n hinein?“).
- r ist der Rest, immer zwischen 0 und n − 1.

**Rechenregeln:** (a + b) mod n = ((a mod n) + (b mod n)) mod n, und dasselbe für ·. Du darfst also **vorher schon Reste nehmen**. Folienbeispiel n = 5, a = 17, b = 28:

| | direkt | erst Reste nehmen |
|---|---|---|
| Summe | 45 mod 5 = 0 | (2 + 3) mod 5 = 0 |
| Produkt | 476 mod 5 = 1 (476 = 95 · 5 + 1) | (2 · 3) mod 5 = 6 mod 5 = 1 |

Warum: Vielfache von n ändern den Rest nicht.

**ℤₙ (Def. 2.4.3):** ℤₙ = {0, 1, …, n − 1} mit a ⊕ b := (a + b) mod n und a ⊗ b := (a · b) mod n. Meist schreibt man einfach + und ·. Die Zahlen 0 bis n − 1 sind die Vertreter der Äquivalenzklassen „gleicher Rest“ aus dem Abschnitt oben.

**Verknüpfungstafel:** Zeile a, Spalte b, Eintrag a ∗ b. Zwei Tafeln der Folien (mit Python erzeugt):

(ℤ₅, +):

| + | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| **0** | 0 | 1 | 2 | 3 | 4 |
| **1** | 1 | 2 | 3 | 4 | 0 |
| **2** | 2 | 3 | 4 | 0 | 1 |
| **3** | 3 | 4 | 0 | 1 | 2 |
| **4** | 4 | 0 | 1 | 2 | 3 |

(ℤ₆, ·):

| · | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| **0** | 0 | 0 | 0 | 0 | 0 | 0 |
| **1** | 0 | 1 | 2 | 3 | 4 | 5 |
| **2** | 0 | 2 | 4 | 0 | 2 | 4 |
| **3** | 0 | 3 | 0 | 3 | 0 | 3 |
| **4** | 0 | 4 | 2 | 0 | 4 | 2 |
| **5** | 0 | 5 | 4 | 3 | 2 | 1 |

Ablesen: In ℤ₅ ist 3 + 4 = 7 mod 5 = 2. In ℤ₆ ist 4 · 5 = 20 mod 6 = 2.

### So steht es auf der Folie

Def. 2.4.1 (Verknüpfung): eine Abbildung v : M × M → M, (n, m) ↦ v(n, m).

Auf Deutsch heißt das: **Zwei Elemente rein, eins raus, und das Ergebnis muss wieder in M liegen.** + und · auf ℤ sind Verknüpfungen, ∪ und ∩ auf Mengen auch, ∨ und ∧ auf Aussagen auch. Minus ist **keine** Verknüpfung auf ℕ, denn 3 − 5 = −2 liegt nicht in ℕ. Auf ℤ schon. ⊕ und ⊗ sind Verknüpfungen auf ℤₙ, weil der Rest immer in {0, …, n − 1} landet.

> [!IMPORTANT]
> **Das Wichtigste**
> a mod n = Rest r mit a = q · n + r und 0 ≤ r < n, also nie negativ. In ℤₙ = {0, …, n − 1} rechnest du normal und nimmst am Ende den Rest. Vorher Reste nehmen ist erlaubt. Eine Verknüpfung bildet zwei Elemente auf ein Element **derselben** Menge ab.

> [!WARNING]
> **Typischer Fehler**
> Negative Reste: −3 mod 5 ist 2, nicht −3 und nicht 3. Probe: −3 = (−1) · 5 + 2. Zweiter Fehler: In ℤₙ den Rest am Ende vergessen. In ℤ₆ ist 4 · 5 nicht 20, sondern 2.

## Gruppe

### In einem Satz

Eine Gruppe ist eine Menge mit einer Verknüpfung, bei der es ein „Nichtstun“-Element gibt und jeder Schritt sich rückgängig machen lässt.

### Stell dir vor

Ein Zauberwürfel. Die Menge sind alle Drehungen, die Verknüpfung ist „erst die eine Drehung, dann die andere“. Es gibt das Nichtstun (neutrales Element). Jede Drehung kannst du durch die Gegendrehung rückgängig machen (inverses Element). Und bei drei Drehungen hintereinander ist es egal, wie du sie in Gedanken zusammenfasst (assoziativ). Die Folien vergleichen die Strukturen mit **Vererbung beim Programmieren**: Der Ring erbt alles von der Gruppe und fordert mehr, der Körper erbt vom Ring und fordert noch mehr.

### Mit Zahlen

Prüfe (ℤ₅, +) an der Tafel oben:

| Prüfung | Ergebnis |
|---|---|
| neutrales Element | 0, denn die Zeile von 0 wiederholt die Kopfzeile |
| Inverses zu 1 | 4, denn 1 + 4 = 5 mod 5 = 0 |
| Inverses zu 2 | 3, denn 2 + 3 = 0 |
| Inverses zu 3 | 2 |
| Inverses zu 4 | 1 |
| jede Zeile enthält die 0? | ja ⇒ alle haben ein Inverses |

Jetzt (ℤ₆, ·): Neutral wäre 1. Aber in der Zeile von 2 steht keine 1 (0, 2, 4, 0, 2, 4). Also hat 2 kein Inverses: **keine Gruppe**.

### Die Formel

Gruppe (G, ∗) (Def. 2.4.4): ∗ ist eine Verknüpfung auf G, und es gilt

- **(G1) neutrales Element:** Es gibt e mit a ∗ e = e ∗ a = a für alle a.
- **(G2) inverses Element:** Zu jedem a gibt es a⁻¹ mit a ∗ a⁻¹ = a⁻¹ ∗ a = e.
- **(G3) assoziativ:** a ∗ (b ∗ c) = (a ∗ b) ∗ c.
- Zusätzlich **(G4)** a ∗ b = b ∗ a ⇒ die Gruppe heißt **kommutativ** oder **abelsch**.

Schreibweisen: Bei + heißt das neutrale Element 0 und das Inverse −a. Bei · heißt es 1 und a⁻¹ = 1/a.

Rechenregeln in Gruppen (Satz 2.4.1):

- e und die Inversen sind **eindeutig**.
- Die Gleichung a ∗ x = b hat **genau eine** Lösung: x = a⁻¹ ∗ b.
- **(a ∗ b)⁻¹ = b⁻¹ ∗ a⁻¹.** Bild: Socken an, dann Schuhe an. Rückgängig: erst Schuhe aus, dann Socken aus.

Beispiel Gleichung in (ℤ₅, +): 2 + x = 1. Das Inverse von 2 ist 3, also x = 3 + 1 = 4. Probe: 2 + 4 = 6 mod 5 = 1. ✓

**Untergruppe** (Def. 2.4.5, Kriterium Satz 2.4.2): U ⊆ G ist eine Untergruppe, wenn (U, ∗) selbst eine Gruppe ist. Prüfen mit drei Häkchen:

1. U ≠ ∅,
2. a, b ∈ U ⇒ a ∗ b ∈ U (das Ergebnis bleibt drin),
3. a ∈ U ⇒ a⁻¹ ∈ U (die Inversen bleiben drin).

Beispiel: Die geraden Zahlen 2ℤ in (ℤ, +): 0 ∈ 2ℤ; 2k + 2l = 2(k + l) ist gerade; −2k = 2 · (−k) ist gerade. Untergruppe. Gegenbeispiel: ℕ in (ℤ, +). Summen bleiben in ℕ, aber das Inverse −3 von 3 liegt nicht in ℕ.

### So steht es auf der Folie

Aufgabe 2.4.1: + und · sind auf ℝ assoziativ und kommutativ. Ergänze neutrales Element und Inverses:

| Gruppe | neutral (G1) | invers zu a (G2) |
|---|---|---|
| (ℝ, +) | 0 | −a |
| (ℝ ∖ {0}, ·) | 1 | 1/a |
| (ℝ⁺, ·) mit ℝ⁺ = {x > 0} | 1 | 1/a, wieder positiv |
| (ℤₙ, +) | 0 | n − a (für a ≠ 0), und 0 zu sich selbst |

Auf Deutsch heißt das: **(ℝ, ·) ist keine Gruppe**, weil 0 kein Inverses hat: 0 · x = 0 ≠ 1 für jedes x. Nimmt man die 0 heraus, klappt es.

### So rechnest du: Ist (G, ∗) eine Gruppe?

1. **Verknüpfung?** Liegt a ∗ b für alle a, b wieder in G? (An der Tafel: stehen nur Elemente von G drin?)
2. **Neutrales Element?** Suche die Zeile, die genau die Kopfzeile wiederholt. Ihr Element ist e.
3. **Inverse?** Steht in **jeder Zeile** das e? Dann hat jedes Element ein Inverses.
4. **Assoziativ?** Bei + und · mod n ist das geerbt aus ℤ, das musst du an der Tafel nicht prüfen.
5. **Abelsch?** Ist die Tafel spiegelbildlich zur Diagonale?

> [!IMPORTANT]
> **Das Wichtigste**
> Gruppe = Verknüpfung + (G1) neutrales Element + (G2) Inverse zu allen + (G3) assoziativ; mit (G4) kommutativ heißt sie abelsch. An der Tafel: Die Zeile von e wiederholt die Kopfzeile, und jede Zeile muss e enthalten. (ℤₙ, +) ist immer eine abelsche Gruppe, das Inverse zu a ist n − a.

> [!WARNING]
> **Typischer Fehler**
> (G2) übersehen. (ℝ, ·), (ℤ, ·) und (ℤ₆, ·) scheitern genau am Inversen (der 0, der 2, der 2). Zweiter Fehler: „Inverses“ sagen, ohne die Verknüpfung zu nennen. In ℤ₇ ist das Inverse von 2 bezüglich + die 5, bezüglich · die 4.

## Ring und Körper

### In einem Satz

Ein Ring hat zwei Verknüpfungen + und ·, die sich vertragen, und ein Körper ist ein Ring, in dem man zusätzlich durch alles außer 0 teilen kann.

### Stell dir vor

Ein Werkzeugkasten in drei Ausbaustufen:

- **Gruppe:** nur ein Werkzeug, zum Beispiel Plus und Minus.
- **Ring:** Plus, Minus und Mal. Teilen geht nicht immer. So ist es in ℤ: 7 : 2 ist keine ganze Zahl.
- **Körper:** Plus, Minus, Mal und Geteilt (außer durch 0). So ist es in ℚ und ℝ.

### Mit Zahlen

| Menge | + Gruppe? | · assoziativ, distributiv? | Inverse für alle a ≠ 0 bei ·? | Ergebnis |
|---|---|---|---|---|
| ℤ | ja | ja | nein, 2 · z = 1 hat keine ganze Lösung | Ring, kein Körper |
| ℚ | ja | ja | ja, 2⁻¹ = ½ | Körper |
| ℝ | ja | ja | ja | Körper |
| ℤ₆ | ja | ja | nein, 2 · 3 = 0, die 2 hat kein Inverses | Ring, kein Körper |
| ℤ₇ | ja | ja | ja, siehe Tabelle unten | Körper |

Inverse in ℤ₇ bezüglich · (mit Python geprüft):

| a | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| a⁻¹ | 1 | 4 | 5 | 2 | 3 | 6 |

Probe: 2 · 4 = 8 = 7 + 1, 3 · 5 = 15 = 2 · 7 + 1, 6 · 6 = 36 = 5 · 7 + 1. Alle Rest 1.

### Die Formel

**Ring** (R, +, ·) (Def. 2.4.6):

- **(R1)** (R, +) ist eine kommutative Gruppe.
- **(R2)** · ist assoziativ.
- **(R3)** Distributivgesetze: a · (b + c) = a · b + a · c und (a + b) · c = a · c + b · c.
- Mit **(R4)** a · b = b · a heißt der Ring kommutativ. Beispiele: ℤ, mℤ, ℚ, ℝ, ℤₙ.

Inverse bezüglich · werden im Ring **nicht** verlangt, und auch keine 1 (2ℤ ist ein Ring ohne 1). R3 steht doppelt da, weil · nicht kommutativ sein muss (Matrizen kommen später).

**Unterring** (Satz 2.4.3): S ⊆ R ist ein Unterring, wenn (S, +) eine Untergruppe ist **und** a · b ∈ S für a, b ∈ S. Beispiel: mℤ in ℤ.

**Körper** (K, +, ·) (Def. 2.4.7):

- **(K1)** kommutativer Ring,
- **(K2)** es gibt eine 1 ≠ 0 mit 1 · a = a,
- **(K3)** zu jedem a ≠ 0 gibt es a⁻¹ mit a⁻¹ · a = 1.

Eigenschaften (Satz 2.4.4): a · 0 = 0, und aus a ≠ 0, b ≠ 0 folgt a · b ≠ 0. Es gibt also keine **Nullteiler** (zwei Zahlen ≠ 0 mit Produkt 0). In ℤ₆ ist 2 · 3 = 0, deshalb ist ℤ₆ kein Körper. Warum a · 0 = 0? a · 0 = a · (0 + 0) = a · 0 + a · 0. Zieh auf beiden Seiten a · 0 ab, dann steht 0 = a · 0 da.

### So steht es auf der Folie

| Struktur | Verknüpfungen | dazu kommt | Beispiel |
|---|---|---|---|
| Gruppe (G, ∗) | eine | assoziativ, neutrales Element, Inverse | (ℤₙ, +) |
| Ring (R, +, ·) | zwei | (R, +) abelsch, · assoziativ und distributiv | (ℤₙ, +, ·) |
| Körper (K, +, ·) | zwei, mit Dividieren | · kommutativ, 1 ≠ 0, Inverse für alle a ≠ 0 | ℚ, ℝ, ℤₚ (p prim) |

Auf Deutsch heißt das: Jeder Körper ist ein Ring, jeder Ring ist bezüglich + eine Gruppe. Und **ℤₚ ist genau dann ein Körper, wenn p eine Primzahl ist** (Satz 2.4.6), denn dann ist jedes a von 1 bis p − 1 teilerfremd zu p.

> [!IMPORTANT]
> **Das Wichtigste**
> Ring = (R, +) abelsche Gruppe + · assoziativ + Distributivgesetze. Körper = kommutativer Ring mit 1 ≠ 0, in dem jedes a ≠ 0 ein Inverses bezüglich · hat. ℤ ist ein Ring, aber kein Körper; ℚ, ℝ und ℤₚ mit p prim sind Körper. Nullteiler (a · b = 0 mit a, b ≠ 0) verhindern einen Körper.

> [!WARNING]
> **Typischer Fehler**
> „ℤₙ ist immer ein Körper.“ Nur für Primzahlen n. In ℤ₆ und ℤ₁₀ gibt es Nullteiler (2 · 3 = 0, 2 · 5 = 0). Zweiter Fehler: Beim Körper verlangen, dass auch die 0 ein Inverses hat. Das geht nie, denn 0 · x = 0.

## Inverse in ℤₙ: der erweiterte euklidische Algorithmus

### In einem Satz

Der erweiterte euklidische Algorithmus findet zu a in ℤₙ die Zahl s mit a · s mod n = 1, falls es sie gibt.

### Stell dir vor

Du hast zwei Messbecher, einen mit 7 und einen mit 10 Litern, und willst genau 1 Liter abmessen. Mit 3 vollen 7-Liter-Bechern (21 Liter) hinein und 2 vollen 10-Liter-Bechern (20 Liter) wieder heraus bleibt genau 1 Liter: 3 · 7 − 2 · 10 = 1. Die 3 ist das Inverse von 7 in ℤ₁₀. Der Algorithmus findet diese Mischung systematisch.

### Mit Zahlen

Wann gibt es überhaupt ein Inverses? Schau in die Tafel (ℤ₆, ·): Nur die Zeilen von 1 und 5 enthalten eine 1. Und genau 1 und 5 haben mit 6 keinen gemeinsamen Teiler außer 1.

| a in ℤ₆ | ggT(a, 6) | Inverses? |
|---|---|---|
| 1 | 1 | ja, 1 |
| 2 | 2 | nein |
| 3 | 3 | nein |
| 4 | 2 | nein |
| 5 | 1 | ja, 5 (5 · 5 = 25 = 4 · 6 + 1) |

### Die Formel

**Satz 2.4.5:** a ∈ ℤₙ hat **genau dann** ein Inverses bezüglich ·, wenn **ggT(a, n) = 1**. Man sagt: a und n sind **teilerfremd**.

**Satz 2.4.6:** (ℤₙ)* = {a ∈ ℤₙ ∣ ggT(a, n) = 1} ist mit · mod n eine abelsche Gruppe, die **multiplikative Gruppe**. Beispiele: (ℤ₆)* = {1, 5}, (ℤ₁₀)* = {1, 3, 7, 9}, (ℤ₁₂)* = {1, 5, 7, 11}, (ℤ₇)* = {1, 2, 3, 4, 5, 6}.

### So steht es auf der Folie

Algorithmus 2.4.1, Folienbeispiel a = 5 in ℤ₁₂.

Auf Deutsch heißt das: Erst so lange mit Rest teilen, bis der Rest 0 ist. Dann rückwärts einsetzen, bis 1 = s · 5 + t · 12 dasteht. s ist das Inverse.

### So rechnest du

1. **Teilen mit Rest:** n = q₁ · a + r₁, dann a = q₂ · r₁ + r₂, dann r₁ = q₃ · r₂ + r₃, … bis der Rest 0 ist. Der letzte Rest ≠ 0 ist ggT(a, n). Ist er nicht 1, gibt es kein Inverses, fertig.
2. **Rückwärts einsetzen:** Löse die Zeile mit Rest 1 nach 1 auf. Ersetze dann von unten nach oben jeden Rest durch seine Zeile, bis nur noch a und n vorkommen: 1 = s · a + t · n.
3. **Das Inverse ist s mod n.** Ist s negativ, addiere n.
4. **Probe:** a · s mod n = 1.

Folienbeispiel a = 5, n = 12:

| Schritt | Gleichung | Rest |
|---|---|---|
| 12 : 5 | 12 = 2 · 5 + 2 | 2 |
| 5 : 2 | 5 = 2 · 2 + 1 | 1 |
| 2 : 1 | 2 = 2 · 1 + 0 | 0 |

Letzter Rest ≠ 0 ist 1 = ggT(5, 12). Rückwärts:

1. Aus Zeile 2: 1 = 5 − 2 · 2.
2. Die 2 aus Zeile 1 ersetzen: 2 = 12 − 2 · 5. Also 1 = 5 − 2 · (12 − 2 · 5) = 5 − 2 · 12 + 4 · 5 = 5 · 5 − 2 · 12.
3. s = 5, das Inverse von 5 in ℤ₁₂ ist **5**.
4. Probe: 5 · 5 = 25 = 2 · 12 + 1. ✓

Beispiel mit negativem s: a = 3 in ℤ₇. 7 = 2 · 3 + 1, also 1 = 7 − 2 · 3 = (−2) · 3 + 1 · 7. s = −2, und −2 mod 7 = 5. Probe: 3 · 5 = 15 = 2 · 7 + 1. ✓

> [!IMPORTANT]
> **Das Wichtigste**
> a hat in ℤₙ genau dann ein Inverses bezüglich ·, wenn ggT(a, n) = 1. Rezept: teilen mit Rest bis Rest 0 → rückwärts einsetzen bis 1 = s · a + t · n → Inverses = s mod n → Probe a · s mod n = 1. ℤₚ ist für Primzahlen p ein Körper.

> [!WARNING]
> **Typischer Fehler**
> Am Ende s nicht mod n nehmen. s = −2 ist noch nicht das Inverse in ℤ₇, sondern −2 + 7 = 5. Zweiter Fehler: beim Rückwärtseinsetzen ausmultiplizieren und dabei Vorzeichen verlieren. Lass a und n als Zahlen stehen und sammle nur ihre Vorfaktoren. Die Probe zeigt jeden Fehler.

## Ausblick: Anhang und nächste Vorlesung

> [!CAUTION]
> **Nur Hintergrund**
> Der Anhang der Folien ist zum Selbststudium: unendliche Vereinigungen und Durchschnitte (⋃ = „liegt in mindestens einem“, wie ∃; ⋂ = „liegt in allen“, wie ∀), Begründungen der Sätze und **Abbildungsgruppen** (die bijektiven Abbildungen M → M bilden mit ∘ eine Gruppe, die meist nicht kommutativ ist). Ob das klausurrelevant ist, ist offen. Als Nächstes kommt laut Ausblick die **Boolesche Algebra** (Kapitel 3): zwei Verknüpfungen und ein Komplement, aber keine Inversen. Mengen mit ∪, ∩ und Komplement sind ein Beispiel dafür, Aussagen mit ∨, ∧ und ¬ auch.

## Übungen

Die Übungen 1 bis 8 stehen sinngemäß auf den Folien VL02. Die Übungen 9 bis 12 sind eigene Aufgaben im Klausurstil. Alle Ergebnisse sind mit Python nachgerechnet.

> [!TIP]
> **Übung 1 · leicht**
> A₁ = {1, 2, 3, 4}, A₂ = {3, 4, 5}, A₃ = {a, c, e}. Berechne A₁ ∩ A₂, A₁ ∪ A₂, A₁ ∖ A₂, A₂ ∖ A₁ sowie A₁ ∩ A₃, A₁ ∪ A₃, A₁ ∖ A₃ und A₃ ∖ A₁.
>
> Quelle: VL02, Aufgabe 2.1.1

> [!TIP]
> **Übung 2 · leicht**
> Bilde die Potenzmenge von M = {a, b, c, d}. Wie viele Elemente hat sie? Gibt es eine Formel für |𝒫(M)|?
>
> Quelle: VL02, Aufgabe 2.1.2

> [!TIP]
> **Übung 3 · mittel**
> Prüfe die Relationen ≤ und ≠ auf ℝ auf die vier Eigenschaften reflexiv, symmetrisch, antisymmetrisch und transitiv. Ist eine davon eine Äquivalenzrelation?
>
> Quelle: VL02, Aufgabe 2.2.1

> [!TIP]
> **Übung 4 · Prüfungsniveau**
> Zeige, dass R₅ = {(m, n) ∈ ℤ × ℤ ∣ m − n ist durch 5 teilbar} eine Äquivalenzrelation ist, und gib die Äquivalenzklassen an.
>
> Quelle: VL02, Beispiel Teilbarkeitsrelation (Abschnitt 2.2)

> [!TIP]
> **Übung 5 · mittel**
> f : {a, b, c, d} → {1, 2, 3, 4} mit f(a) = f(b) = 1, f(c) = 3, f(d) = 4. Bestimme a) die Bildmenge, b) die Urbilder von {1} und {2}, c) f({a, b}), d) f⁻¹({3, 4}) und f⁻¹({2, 3}).
>
> Quelle: VL02, Aufgabe 2.3.1

> [!TIP]
> **Übung 6 · mittel**
> Injektiv, surjektiv, bijektiv? a) h : ℕ₀ → {0, …, p − 1}, n ↦ n mod p · b) der ASCII-Code {A, …, Z} → {0, …, 127} · c) id_M · d) f : ℝ → ℝ, x ↦ x² und g : ℝ₀⁺ → ℝ₀⁺, x ↦ x²
>
> Quelle: VL02, Aufgabe 2.3.2

> [!TIP]
> **Übung 7 · mittel**
> Ergänze neutrales Element und Inverses für (ℝ, +), (ℝ ∖ {0}, ·) und (ℝ⁺, ·). Warum ist (ℝ, ·) keine Gruppe?
>
> Quelle: VL02, Aufgabe 2.4.1

> [!TIP]
> **Übung 8 · Prüfungsniveau**
> a) Bestimme das Inverse von 7 in ℤ₁₀ mit dem erweiterten euklidischen Algorithmus. b) Hat 4 ein Inverses in ℤ₁₀? c) Gib (ℤ₁₀)* an. Ist ℤ₁₀ ein Körper?
>
> Quelle: VL02, Aufgabe 2.4.2

> [!TIP]
> **Übung 9 · mittel**
> Grundmenge G = {1, …, 10}, M = {x ∈ G ∣ x gerade}, N = {x ∈ G ∣ x ≤ 4}. a) Schreibe M und N aufzählend. b) Berechne M ∩ N, M ∪ N, M ∖ N und M̅. c) Prüfe De Morgan: (M ∪ N)̅ = M̅ ∩ N̅. d) Wie viele Elemente haben N × M und 𝒫(N)?
>
> Quelle: eigene Aufgabe

> [!TIP]
> **Übung 10 · mittel**
> Auf M = {1, 2, 3} ist R = {(1, 1), (2, 2), (3, 3), (1, 2), (2, 1)} gegeben. a) Prüfe die vier Eigenschaften. b) Ist R eine Äquivalenzrelation? Wenn ja, gib die Klassen an. c) Ist R eine Abbildung M → M?
>
> Quelle: eigene Aufgabe

> [!TIP]
> **Übung 11 · Prüfungsniveau**
> a) Berechne in ℤ₉: 7 + 5, 7 · 5, −4 mod 9 und 38 mod 9. b) Löse 4 + x = 2 in (ℤ₉, +). c) Bestimme das Inverse von 5 in ℤ₁₇ mit dem erweiterten euklidischen Algorithmus und mach die Probe.
>
> Quelle: eigene Aufgabe

> [!TIP]
> **Übung 12 · Prüfungsniveau**
> Ist G = {1, 3, 5, 7} mit der Multiplikation mod 8 eine Gruppe? Stelle die Verknüpfungstafel auf, gib das neutrale Element und alle Inversen an und entscheide, ob die Gruppe abelsch ist. Ist (ℤ₈, +, ·) ein Körper?
>
> Quelle: eigene Aufgabe

## Lösungen

### Übung 1

1. A₁ ∩ A₂: Was steht in beiden? 3 und 4 → **{3, 4}**.
2. A₁ ∪ A₂: alles zusammen, Doppeltes einmal → **{1, 2, 3, 4, 5}**.
3. A₁ ∖ A₂: aus A₁ streichen, was in A₂ ist (3, 4) → **{1, 2}**.
4. A₂ ∖ A₁: aus A₂ 3 und 4 streichen → **{5}**. Also A₁ ∖ A₂ ≠ A₂ ∖ A₁.
5. A₁ ∩ A₃: Zahlen und Buchstaben haben nichts gemeinsam → **∅**. A₁ und A₃ sind **disjunkt**.
6. A₁ ∪ A₃ = **{1, 2, 3, 4, a, c, e}**.
7. A₁ ∖ A₃ = **A₁** und A₃ ∖ A₁ = **A₃**: Bei disjunkten Mengen nimmt die Differenz nichts weg.

### Übung 2

Nach der Größe sortieren:

| Größe | Teilmengen | Anzahl |
|---|---|---|
| 0 | ∅ | 1 |
| 1 | {a}, {b}, {c}, {d} | 4 |
| 2 | {a, b}, {a, c}, {a, d}, {b, c}, {b, d}, {c, d} | 6 |
| 3 | {a, b, c}, {a, b, d}, {a, c, d}, {b, c, d} | 4 |
| 4 | {a, b, c, d} | 1 |

Zusammen 1 + 4 + 6 + 4 + 1 = **16 = 2⁴**. Formel: **|𝒫(M)| = 2^|M|**. Grund: Für jedes der vier Elemente entscheidest du „drin oder nicht“, das sind 2 · 2 · 2 · 2 Möglichkeiten.

### Übung 3

| Relation | reflexiv | symmetrisch | antisymmetrisch | transitiv |
|---|---|---|---|---|
| ≤ | ja | nein: 2 ≤ 5, aber nicht 5 ≤ 2 | ja | ja |
| ≠ | nein: 3 ≠ 3 ist falsch | ja | nein: 2 ≠ 5 und 5 ≠ 2, aber nicht 2 = 5 | nein: 2 ≠ 5 und 5 ≠ 2, aber nicht 2 ≠ 2 |

Begründungen für die „ja“:

- ≤ reflexiv: x ≤ x, weil x = x.
- ≤ antisymmetrisch: x ≤ y und y ≤ x zugleich geht nur bei x = y.
- ≤ transitiv: x ≤ y ≤ z ergibt x ≤ z.
- ≠ symmetrisch: Ist x ≠ y, dann auch y ≠ x.

Keine der beiden ist eine Äquivalenzrelation: ≤ ist nicht symmetrisch, ≠ ist weder reflexiv noch transitiv.

### Übung 4

Schreibe m R₅ n ⇔ m − n = 5k für ein k ∈ ℤ.

1. **Reflexiv:** m − m = 0 = 5 · 0, also m R₅ m.
2. **Symmetrisch:** Aus m − n = 5k folgt n − m = 5 · (−k) mit −k ∈ ℤ, also n R₅ m.
3. **Transitiv:** Aus m − n = 5k und n − p = 5l folgt m − p = (m − n) + (n − p) = 5(k + l), also m R₅ p.
4. Damit ist R₅ eine **Äquivalenzrelation**.
5. Klassen: [0] = {…, −5, 0, 5, 10, …}, [1] = {…, −4, 1, 6, …}, [2] = {…, −3, 2, 7, …}, [3] = {…, −2, 3, 8, …}, [4] = {…, −1, 4, 9, …}. Das sind genau die Zahlen mit Rest 0, 1, 2, 3 und 4 bei Division durch 5.

### Übung 5

- a) Alle Pfeilspitzen einsammeln: f(a) = 1, f(b) = 1, f(c) = 3, f(d) = 4 → **f(M) = {1, 3, 4}**.
- b) Wer zeigt auf 1? a und b → **f⁻¹({1}) = {a, b}**. Wer zeigt auf 2? Niemand → **f⁻¹({2}) = ∅**.
- c) f(a) = 1 und f(b) = 1 → **f({a, b}) = {1}**, doppelt zählt einmal.
- d) Wer landet in {3, 4}? c und d → **f⁻¹({3, 4}) = {c, d}**. Wer landet in {2, 3}? Nur c → **f⁻¹({2, 3}) = {c}**.

f ist nicht injektiv (f(a) = f(b)) und nicht surjektiv (die 2 wird nie getroffen). Trotzdem gibt es alle Urbilder, nur eben manchmal leer.

### Übung 6

- a) **Nicht injektiv**: h(0) = h(p) = 0. **Surjektiv**: Jeder Rest r ∈ {0, …, p − 1} wird von n = r getroffen.
- b) **Injektiv**: 26 verschiedene Buchstaben bekommen 26 verschiedene Codes 65 bis 90. **Nicht surjektiv**: Die 0 (und alles außer 65 bis 90) wird nie getroffen.
- c) id_M ist **injektiv und surjektiv**, also **bijektiv**: Jedes x geht auf sich selbst.
- d) f : ℝ → ℝ, x ↦ x²: **nicht injektiv** (f(2) = f(−2) = 4), **nicht surjektiv** (−1 kommt nie heraus). g : ℝ₀⁺ → ℝ₀⁺, x ↦ x²: **injektiv** (ohne negative Zahlen keine Doppeltreffer) und **surjektiv** (zu y ≥ 0 ist √y das Urbild), also **bijektiv**, mit g⁻¹(y) = √y.

Dieselbe Vorschrift x² gibt mit anderen Mengen andere Antworten.

### Übung 7

| Gruppe | neutral | invers zu a | Probe |
|---|---|---|---|
| (ℝ, +) | 0 | −a | 3 + (−3) = 0 |
| (ℝ ∖ {0}, ·) | 1 | 1/a | 4 · ¼ = 1 |
| (ℝ⁺, ·) | 1 | 1/a | 1/a ist für a > 0 wieder positiv |

Außerdem bleibt man in der Menge: Produkte von Zahlen ≠ 0 sind ≠ 0, Produkte positiver Zahlen sind positiv. **(ℝ, ·) ist keine Gruppe**, weil die 0 kein Inverses hat: 0 · x = 0 ≠ 1 für jedes x.

### Übung 8

a) **Teilen mit Rest:**

| Schritt | Gleichung | Rest |
|---|---|---|
| 10 : 7 | 10 = 1 · 7 + 3 | 3 |
| 7 : 3 | 7 = 2 · 3 + 1 | 1 |
| 3 : 1 | 3 = 3 · 1 + 0 | 0 |

ggT(7, 10) = 1, also gibt es ein Inverses. **Rückwärts:** 1 = 7 − 2 · 3. Die 3 ersetzen: 3 = 10 − 7. Also 1 = 7 − 2 · (10 − 7) = 3 · 7 − 2 · 10. s = 3. **Das Inverse von 7 ist 3.** Probe: 7 · 3 = 21 = 2 · 10 + 1. ✓

b) **Nein.** ggT(4, 10) = 2 ≠ 1. Direkt gesehen: 4 · b ist immer gerade, Zahlen mit Rest 1 bei 10 (1, 11, 21, …) sind ungerade.

c) (ℤ₁₀)* = alle a ∈ {0, …, 9}, die weder durch 2 noch durch 5 teilbar sind: **{1, 3, 7, 9}**. Inverse: 1⁻¹ = 1, 3⁻¹ = 7, 7⁻¹ = 3, 9⁻¹ = 9 (81 = 8 · 10 + 1). **ℤ₁₀ ist kein Körper**, denn 2 · 5 = 10 mod 10 = 0 (Nullteiler), und 2, 4, 5, 6, 8 haben kein Inverses.

### Übung 9

a) M = **{2, 4, 6, 8, 10}**, N = **{1, 2, 3, 4}**.

b)

1. M ∩ N: gerade **und** ≤ 4 → **{2, 4}**.
2. M ∪ N: gerade **oder** ≤ 4 → **{1, 2, 3, 4, 6, 8, 10}**.
3. M ∖ N: gerade, aber nicht ≤ 4 → **{6, 8, 10}**.
4. M̅ = G ∖ M: die ungeraden → **{1, 3, 5, 7, 9}**.

c) Links: (M ∪ N)̅ = G ∖ {1, 2, 3, 4, 6, 8, 10} = **{5, 7, 9}**. Rechts: M̅ = {1, 3, 5, 7, 9}, N̅ = {5, 6, 7, 8, 9, 10}, M̅ ∩ N̅ = **{5, 7, 9}**. Gleich. ✓

d) |N × M| = |N| · |M| = 4 · 5 = **20**. |𝒫(N)| = 2⁴ = **16**.

### Übung 10

a) Kreuztabelle (Zeile x, Spalte y):

| x \ y | 1 | 2 | 3 |
|---|---|---|---|
| **1** | × | × | |
| **2** | × | × | |
| **3** | | | × |

1. **Reflexiv:** (1, 1), (2, 2), (3, 3) liegen in R, die Diagonale ist voll. Ja.
2. **Symmetrisch:** Das einzige Paar außerhalb der Diagonale ist (1, 2), und (2, 1) ist auch drin. Ja.
3. **Antisymmetrisch:** 1R2 und 2R1, aber 1 ≠ 2. Nein.
4. **Transitiv:** Alle Ketten prüfen. 1R2 und 2R1 ergibt 1R1 ✓. 2R1 und 1R2 ergibt 2R2 ✓. Ketten mit der Diagonale ergeben nichts Neues. Ja.

b) Reflexiv, symmetrisch, transitiv ⇒ **Äquivalenzrelation**. Klassen: [1] = [2] = **{1, 2}** und [3] = **{3}**. Probe: Sie sind disjunkt und ergeben zusammen M.

c) **Nein**: In der Zeile von 1 stehen zwei Kreuze (1 ↦ 1 und 1 ↦ 2). Eine Abbildung braucht in jeder Zeile genau ein Kreuz.

### Übung 11

a)

1. 7 + 5 = 12 = 1 · 9 + 3 → **3**.
2. 7 · 5 = 35 = 3 · 9 + 8 → **8**.
3. −4 = (−1) · 9 + 5 → **5**.
4. 38 = 4 · 9 + 2 → **2**.

b) Das Inverse von 4 bezüglich + ist 9 − 4 = 5. Also x = 5 + 2 = 7. Probe: 4 + 7 = 11 = 9 + 2 → Rest 2. ✓ **x = 7**.

c) **Teilen mit Rest:** 17 = 3 · 5 + 2, dann 5 = 2 · 2 + 1, dann 2 = 2 · 1 + 0. ggT = 1.

**Rückwärts:**

1. 1 = 5 − 2 · 2.
2. 2 = 17 − 3 · 5 einsetzen: 1 = 5 − 2 · (17 − 3 · 5) = 5 − 2 · 17 + 6 · 5 = 7 · 5 − 2 · 17.
3. s = 7. **Das Inverse von 5 in ℤ₁₇ ist 7.**
4. Probe: 5 · 7 = 35 = 2 · 17 + 1. ✓

### Übung 12

Verknüpfungstafel (Produkt, dann Rest bei 8):

| · | 1 | 3 | 5 | 7 |
|---|---|---|---|---|
| **1** | 1 | 3 | 5 | 7 |
| **3** | 3 | 1 | 7 | 5 |
| **5** | 5 | 7 | 1 | 3 |
| **7** | 7 | 5 | 3 | 1 |

Zum Beispiel 3 · 5 = 15 = 8 + 7 → 7, und 5 · 7 = 35 = 4 · 8 + 3 → 3.

1. **Verknüpfung:** In der Tafel stehen nur 1, 3, 5, 7. Man bleibt in G. ✓
2. **Neutrales Element:** Die Zeile von 1 wiederholt die Kopfzeile → **e = 1**.
3. **Inverse:** Jede Zeile enthält die 1, und zwar auf der Diagonale: 3 · 3 = 9 → 1, 5 · 5 = 25 → 1, 7 · 7 = 49 → 1. Also ist **jedes Element zu sich selbst invers**.
4. **Assoziativ:** geerbt von der Multiplikation in ℤ.
5. **Abelsch:** Die Tafel ist spiegelbildlich zur Diagonale (a · b = b · a). ✓

G ist eine **abelsche Gruppe**, genau (ℤ₈)*. **(ℤ₈, +, ·) ist kein Körper**, denn 8 ist keine Primzahl: 2 · 4 = 8 mod 8 = 0, und 2 hat kein Inverses.
