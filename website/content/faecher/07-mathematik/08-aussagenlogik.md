---
title: "Aussagenlogik"
order: 8
summary: "Der Start in den Teil „Logik und Algebra“: Aussagen, ¬ ∧ ∨ ⊻, Wahrheitstafeln, Implikation und Kontraposition, Tautologien, ≡ und ⇒, logische Gesetze, boolesche Funktionen, DNF und KNF, Quantoren, Beweismuster und vollständige Induktion."
klausur: "relevant"
---

Mit dem 09.11. beginnt der zweite Teil von Mathematik I: „Logik und Algebra“. Das erste Kapitel ist die Logik. Sie ist die Sprache, in der alle späteren Kapitel geschrieben sind: Mengen, Relationen, Gruppen und Matrizen werden mit „für alle“, „es gibt“ und „wenn …, dann …“ definiert. Wer diese Wörter sicher liest, versteht die Folien danach viel schneller.

Ein Alltagsbeispiel: Eine Bank prüft einen Kredit mit einer Regel wie „Einkommen über 2000 € **und** (keine Schulden **oder** Bürge vorhanden)“. Ob die Regel bei einem Kunden passt, ist eine reine Logikfrage. Genau solche Regeln zerlegst, prüfst und vereinfachst du in diesem Kapitel.

Gute Nachricht: Du kennst schon viel davon. In **Grundlagen der IT** (Kapitel „Wahrheitstabellen, boolesche Ausdrücke, Logikgatter“) hast du NOT, AND, OR und XOR mit 0 und 1 gerechnet, De Morgan benutzt und aus einer Tabelle eine DNF gebaut. Hier ist es dieselbe Idee. Nur die Zeichen sind andere: w statt 1, f statt 0, ¬ statt NOT, ∧ statt AND, ∨ statt OR.

> [!NOTE]
> **Stand**
> Grundlage sind die Folien „VL01 – Aussagenlogik“ (142 Folien, Abschnitte 1.1 bis 1.7) mit allen Folienaufgaben. Ob am 09.11. das ganze Kapitel geschafft wurde oder ob es am 16.11. weitergeht, ist nicht bekannt. Wie viel der Logik-Teil in der Klausur zählt, hat die Vorlesung noch nicht gesagt.

## Die Schreibweise der Folien

Bevor es losgeht: Die Folien benutzen für ähnliche Dinge verschiedene Pfeile. Das ist am Anfang verwirrend, darum hier vorab die Übersicht.

| Zeichen | So liest du es vor | Was es ist |
|---|---|---|
| A, B, C | „A“, „B“, „C“ | Platzhalter für Aussagen (in anderen Büchern p, q) |
| w, f | „wahr“, „falsch“ | die zwei Wahrheitswerte (in GIT: 1 und 0) |
| ¬A | „nicht A“ | Negation |
| A ∧ B | „A und B“ | Konjunktion |
| A ∨ B | „A oder B“ | Disjunktion (einschließendes Oder) |
| A ⊻ B | „entweder A oder B“ | exklusives Oder (XOR) |
| A → B | „wenn A, dann B“ | Implikation, ein Baustein **in** einer Formel |
| A ↔ B | „A genau dann, wenn B“ | Äquivalenz, ein Baustein **in** einer Formel |
| F₁ ⇒ F₂ | „aus F₁ folgt logisch F₂“ | eine Aussage **über** zwei Formeln |
| F₁ ≡ F₂ | „F₁ ist gleichwertig zu F₂“ | eine Aussage **über** zwei Formeln |
| ∀x | „für alle x“ | Allquantor |
| ∃x | „es gibt (mindestens) ein x“ | Existenzquantor |

## Aussagen

### In einem Satz

Eine Aussage ist ein Satz, bei dem man sinnvoll fragen kann: „Stimmt das oder stimmt das nicht?“

### Stell dir vor

Ein Lichtschalter ist an oder aus. Ein Zwischending gibt es nicht. Jede Aussage ist so ein Schalter: wahr oder falsch, nichts dazwischen. Die Folien nennen das das **Prinzip vom ausgeschlossenen Dritten**.

Eine Frage wie „Wie spät ist es?“ ist dagegen gar kein Schalter. Man kann nicht fragen, ob sie stimmt.

### Mit Beispielen

| Satz | Aussage? | Warum |
|---|---|---|
| „5 ist kleiner als 3.“ | ja, falsch | man kann es prüfen |
| „Paris ist die Hauptstadt Frankreichs.“ | ja, wahr | man kann es prüfen |
| „Jede gerade Zahl größer als 2 ist Summe zweier Primzahlen.“ | ja, Wert unbekannt | Goldbach-Vermutung: Sie ist wahr oder falsch, nur weiß es bis heute niemand |
| „Logik ist schön.“ | nein | Geschmackssache |
| „Komm pünktlich!“ | nein | Aufforderung |
| „x + 2 = 5“ | nein | solange x offen ist, weder wahr noch falsch |

### So steht es auf der Folie

Definition 1.1.1: Eine Aussage ist ein Sachverhalt, bei dem die Frage nach wahr oder falsch Sinn ergibt.

Auf Deutsch heißt das: Prüfe immer die Frage „Kann man sinnvoll fragen, ob das stimmt?“ Es ist **nicht** nötig, dass du die Antwort kennst.

Dazu Definition 1.1.2: Eine **Aussagenvariable** ist ein Platzhalter A, B, C, … für irgendeine Aussage, so wie x in 3x² ein Platzhalter für irgendeine Zahl ist. Wenn du jeder Variable einen Wert w oder f gibst, heißt das eine **Belegung**.

> [!IMPORTANT]
> **Das Wichtigste**
> Aussage = man kann sinnvoll nach wahr oder falsch fragen. Der Wert darf unbekannt sein. Fragen, Befehle und Meinungen sind keine Aussagen.

> [!WARNING]
> **Typischer Fehler**
> „Die Goldbach-Vermutung ist keine Aussage, weil niemand weiß, ob sie stimmt.“ Falsch. Eine Aussage muss nur wahr **oder** falsch sein, man muss nicht wissen, was davon.

## Nicht, und, oder, entweder-oder

### In einem Satz

Mit vier Bausteinen baust du aus kleinen Aussagen größere: ¬ dreht um, ∧ verlangt beide, ∨ verlangt mindestens eine, ⊻ verlangt genau eine.

### Stell dir vor

Eine Tür mit zwei Schlössern:

- **∧ (und):** Die Tür geht nur auf, wenn **beide** Schlüssel stecken.
- **∨ (oder):** Ein Haus mit zwei Eingängen. Du kommst hinein, wenn **mindestens ein** Eingang offen ist. Sind beide offen, kommst du erst recht hinein.
- **⊻ (entweder-oder):** Ein Flurlicht mit zwei Schaltern unten und oben. Das Licht brennt, wenn die beiden Schalter **verschieden** stehen.
- **¬ (nicht):** Ein Schalter, der alles umdreht: an wird aus, aus wird an.

### Mit Zahlen: die Wahrheitstafel

Eine **Wahrheitstafel** listet alle Belegungen auf, eine pro Zeile, und ganz rechts das Ergebnis. Bei zwei Variablen gibt es 4 Zeilen.

| A | B | ¬A | A ∧ B | A ∨ B | A ⊻ B |
|---|---|---|---|---|---|
| w | w | f | w | w | **f** |
| w | f | f | f | w | w |
| f | w | w | f | w | w |
| f | f | w | f | f | f |

So liest du eine Zeile: Zeile 2 heißt „A ist wahr, B ist falsch“. Dann ist A ∧ B falsch (B fehlt), A ∨ B wahr (A reicht) und A ⊻ B wahr (genau eine ist wahr).

Ein Beispiel der Folie mit echten Aussagen: A = „Berlin ist Hauptstadt von Deutschland“ (w), B = „Heilbronn ist Hauptstadt von Baden-Württemberg“ (f), C = „Stuttgart ist Hauptstadt von Baden-Württemberg“ (w).

- A ∧ B = w ∧ f = **f**
- A ∧ C = w ∧ w = **w**
- A ∨ B = w ∨ f = **w**
- A ⊻ C = w ⊻ w = **f**, denn beide sind wahr
- A ⊻ B = w ⊻ f = **w**

### Die Formel

- **¬A** ist wahr, wenn A falsch ist, und umgekehrt.
- **A ∧ B** ist nur wahr, wenn **beide** wahr sind.
- **A ∨ B** ist nur falsch, wenn **beide** falsch sind.
- **A ⊻ B** ist wahr, wenn **genau eine** wahr ist. Man kann es mit den anderen Bausteinen schreiben: A ⊻ B ≡ (A ∨ B) ∧ ¬(A ∧ B), also „mindestens eine, aber nicht beide“.

Bei n Variablen hat die Tafel **2ⁿ Zeilen**: Jede neue Variable verdoppelt die Zeilen. 2 Variablen: 4 Zeilen, 3 Variablen: 8 Zeilen.

### So steht es auf der Folie

Definitionen 1.1.3 bis 1.1.7 legen die Tafeln für ¬, ∧, ∨ und ⊻ fest. Die Folien schreiben die Zeilen in einer festen Reihenfolge: **mit w anfangen**, die erste Variable wechselt am langsamsten (bei drei Variablen: www, wwf, wfw, wff, fww, fwf, ffw, fff).

Auf Deutsch heißt das: Du zählst die Fälle wie einen Kilometerzähler, der rückwärts läuft. So vergisst du keine Zeile.

### So rechnest du eine Wahrheitstafel

1. Zähle die Variablen: n Stück ergeben 2ⁿ Zeilen.
2. Fülle die Variablenspalten aus. Erste Spalte: halb w, halb f. Zweite Spalte: im halben Takt. Letzte Spalte: w, f, w, f, …
3. Mach für jedes Zwischenergebnis eine eigene Spalte, von innen nach außen. Bei ¬A ∨ B also erst ¬A, dann ¬A ∨ B.
4. Rechne jede Zeile einzeln mit der Grundtafel oben.

> [!IMPORTANT]
> **Das Wichtigste**
> ∧: beide wahr. ∨: mindestens eine wahr, auch beide. ⊻: genau eine wahr. ¬: umdrehen. Aus GIT kennst du das als AND, OR, XOR und NOT mit 1 und 0.

> [!WARNING]
> **Typischer Fehler**
> „Oder“ als Entweder-oder lesen. „Kaffee oder Tee?“ meint im Alltag eins von beiden. Das logische ∨ ist aber auch dann wahr, wenn beides stimmt. Für Entweder-oder gibt es ⊻. Und: ¬(Berlin ist Hauptstadt) heißt „Berlin ist **nicht** Hauptstadt“, nicht „München ist Hauptstadt“. Die Negation dreht nur den Wahrheitswert um.

## Die Implikation A → B

### In einem Satz

„Wenn A, dann B“ ist ein Versprechen, das nur dann gebrochen ist, wenn A eintritt und B ausbleibt.

### Stell dir vor

Du versprichst: „Wenn es regnet, nehme ich einen Schirm mit.“ Wann hast du gelogen?

- Es regnet, du hast einen Schirm: Versprechen gehalten.
- Es regnet, du hast **keinen** Schirm: gelogen. Das ist der einzige Fall.
- Es regnet nicht, du hast trotzdem einen Schirm: nicht gelogen. Du hast nichts über trockene Tage versprochen.
- Es regnet nicht, du hast keinen Schirm: auch nicht gelogen.

### Mit Zahlen

| A (es regnet) | B (Schirm dabei) | A → B |
|---|---|---|
| w | w | w |
| w | f | **f** |
| f | w | w |
| f | f | w |

### Die Formel

A → B ist falsch **nur** bei A = w und B = f. A heißt **Voraussetzung**, B heißt **Folgerung**.

Zwei Faustregeln der Folie:

- **„Aus Falschem folgt alles.“** Ist A falsch, ist A → B immer wahr (Zeilen 3 und 4).
- **„Etwas Falsches kann nicht aus etwas Wahrem folgen.“** Das ist Zeile 2.

Darum funktioniert die Redewendung „Wenn Weihnachten auf Ostern fällt, fresse ich einen Besen“. Die Voraussetzung ist falsch, also ist der ganze Satz wahr, und man muss den Besen nie essen.

### So steht es auf der Folie

Definition 1.2.1: A → B ist genau dann falsch, wenn A wahr und B falsch ist.

Auf Deutsch heißt das: Eine Implikation prüfst du, indem du nach dem einen verbotenen Fall suchst: Voraussetzung erfüllt, Folgerung nicht. Gibt es diesen Fall nicht, ist sie wahr.

> [!WARNING]
> **Typischer Fehler**
> A → B mit „A ist wahr und B ist wahr“ verwechseln. Die Implikation sagt nichts darüber, ob A gilt. Sie sagt nur: **Falls** A gilt, dann auch B. Die Zeilen mit A = f sind alle wahr.

## Äquivalenz, Kontraposition und Umkehrschluss

### In einem Satz

A ↔ B heißt „A und B haben immer denselben Wert“. Eine Implikation darfst du umdrehen, aber nur, wenn du beide Seiten verneinst.

### Stell dir vor

Ein Bewegungsmelder mit Licht: Das Licht ist **genau dann** an, wenn sich jemand bewegt. Bewegung ohne Licht gibt es nicht, Licht ohne Bewegung auch nicht. Beide Werte sind immer gleich: Das ist ↔.

Zurück zum Schirm-Versprechen: „Wenn es regnet, habe ich einen Schirm“ heißt auch: „Wenn ich **keinen** Schirm habe, regnet es **nicht**.“ Das ist die Kontraposition. Aber es heißt **nicht**: „Wenn es nicht regnet, habe ich keinen Schirm.“ Das ist der Umkehrschluss, und der ist ein Denkfehler.

### Mit Zahlen

| A | B | A → B | A ↔ B | ¬B → ¬A (Kontraposition) | ¬A ∨ B | ¬A → ¬B (Umkehrschluss) |
|---|---|---|---|---|---|---|
| w | w | w | w | w | w | w |
| w | f | **f** | f | **f** | **f** | w |
| f | w | w | f | w | w | **f** |
| f | f | w | w | w | w | w |

Die Spalten A → B, ¬B → ¬A und ¬A ∨ B sind in jeder Zeile gleich. Die Spalte ¬A → ¬B weicht in den Zeilen 2 und 3 ab.

Ein Zahlenbeispiel der Folie: A = „n ist durch 4 teilbar“, B = „n ist gerade“.

- A → B stimmt: Ist n = 4k, dann ist n = 2 · (2k), also gerade.
- B → A stimmt nicht: n = 6 ist gerade, aber nicht durch 4 teilbar.
- Also ist A ↔ B falsch. „Durch 4 teilbar“ und „gerade“ sind nicht äquivalent.

### Die Formel

- **A ↔ B** ist wahr, wenn A und B **gleich** sind (beide w oder beide f). Es ist die Implikation in beide Richtungen: A ↔ B ≡ (A → B) ∧ (B → A).
- **Kontraposition:** A → B ≡ ¬B → ¬A. Seiten tauschen **und** beide verneinen.
- **Implikation als Oder:** A → B ≡ ¬A ∨ B. „Entweder A gilt nicht, oder B gilt.“
- **Umkehrschluss:** ¬A → ¬B ist **nicht** gleichwertig zu A → B.

### So steht es auf der Folie

Definition 1.2.2: A ↔ B („genau dann A, wenn B“) ist wahr, wenn A und B denselben Wahrheitswert haben. Zwei Aussagen heißen **gleichwertig**, wenn ihre Werte bei **jeder** Belegung übereinstimmen.

Auf Deutsch heißt das: Gleichwertig prüfst du mit der Wahrheitstafel. Zwei Spalten, die in jeder Zeile gleich sind, sind gleichwertig. Eine einzige abweichende Zeile reicht für „nicht gleichwertig“.

### So prüfst du, ob zwei Formeln gleichwertig sind

1. Schreib die Wahrheitstafel mit allen Variablen beider Formeln.
2. Rechne jede Formel in einer eigenen Spalte aus.
3. Vergleiche Zeile für Zeile.
4. Alle Zeilen gleich: gleichwertig. Mindestens eine Zeile verschieden: nicht gleichwertig, und diese Zeile ist dein Gegenbeispiel.

> [!WARNING]
> **Typischer Fehler**
> Der Umkehrschluss. „Wer täglich eine Stunde Logik lernt, besteht“ heißt **nicht** „Wer nicht täglich lernt, fällt durch“. Jemand kann auch ohne tägliches Lernen bestehen, das verbietet die Aussage nicht. Richtig umdrehen geht nur mit Kontraposition: „Wer nicht besteht, hat nicht täglich gelernt.“

## Formeln: Syntax, Semantik und Vorrang

### In einem Satz

Die **Syntax** sagt, welche Zeichenketten gültige Formeln sind. Die **Semantik** sagt, welchen Wahrheitswert eine Formel bei einer Belegung hat.

### Stell dir vor

Programmieren in Python. `(a and b) or not c` ist gültiger Code, `a or and b` gibt einen Syntaxfehler. Das ist Syntax. Was bei gültigem Code herauskommt, hängt davon ab, welche Werte a, b und c gerade haben. Das ist Semantik.

### Mit Beispielen

| Zeichenkette | Formel? | Warum |
|---|---|---|
| ((A ∧ B) ∨ (¬C)) | ja | nach den Bauregeln zusammengesetzt |
| (A ∨ ∧B) | nein | dem ∧ fehlt links etwas |
| (¬ ∨ A) | nein | hinter ¬ fehlt eine Formel |

Auswerten geht **von innen nach außen**. Beispiel F₃ = (A ∧ B) ∨ ¬C bei A = w, B = f, C = w:

1. Innen: A ∧ B = w ∧ f = f.
2. Innen: ¬C = ¬w = f.
3. Außen: f ∨ f = **f**.

Mit C = f wäre ¬C = w und F₃ = f ∨ w = **w**.

### So steht es auf der Folie

Definition 1.3.1 (aussagenlogische Formel): (1) Jede Aussagenvariable ist eine Formel. (2) Sind F₁ und F₂ Formeln, dann auch (F₁ ∧ F₂), (F₁ ∨ F₂), (¬F₁), (F₁ → F₂) und (F₁ ↔ F₂). Auch w und f dürfen vorkommen. A ⊻ B gilt als Abkürzung.

Auf Deutsch heißt das: Formeln sind wie Legosteine. Eine einzelne Variable ist ein Stein. Zwei Steine darfst du mit ∧, ∨, → oder ↔ verbinden, einen Stein darfst du mit ¬ verneinen. Alles, was so entsteht, ist eine Formel, sonst nichts.

### Vorrangregeln

Damit man nicht überall Klammern schreiben muss, gibt es eine Reihenfolge (Definition 1.3.6): Klammern zuerst, dann

**¬ vor ∧ vor ∨ vor → vor ↔**

Die Eselsbrücke der Folie: ¬ ist wie das Minus-Vorzeichen, ∧ wie Malnehmen, ∨ wie Plus. So wie man −a · b + c als ((−a) · b) + c liest, liest man ¬A ∧ B ∨ C als ((¬A) ∧ B) ∨ C. Python macht es genauso (not vor and vor or), SQL-Bedingungen auch.

Warum das wichtig ist: A ∨ B ∧ C mit A = w und C = f.

- Richtig gelesen als A ∨ (B ∧ C): w ∨ (B ∧ f) = w ∨ f = **w**.
- Falsch gelesen als (A ∨ B) ∧ C: (w ∨ B) ∧ f = w ∧ f = **f**.

Weitere Regeln: Mehrere ∧ hintereinander (oder mehrere ∨) brauchen keine Klammern. Ketten mit → oder ↔ immer klammern.

> [!WARNING]
> **Typischer Fehler**
> Bei ¬ die Klammer weglassen. ¬(C ∧ D) ist etwas anderes als ¬C ∧ D. Die Klammer hinter ¬ bleibt, sobald mehr als eine Variable verneint werden soll.

## Erfüllbar, Tautologie, Widerspruch

### In einem Satz

Eine Formel ist **erfüllbar**, wenn sie in mindestens einer Zeile wahr ist, eine **Tautologie**, wenn sie in allen Zeilen wahr ist, und ein **Widerspruch**, wenn sie in keiner Zeile wahr ist.

### Stell dir vor

Ein Wetterbericht. „Morgen regnet es“ kann stimmen oder nicht: erfüllbar. „Morgen regnet es oder es regnet nicht“ stimmt immer, egal welches Wetter kommt: Tautologie. Sie ist immer richtig, sagt aber nichts. „Morgen regnet es und es regnet nicht“ stimmt nie: Widerspruch.

### Mit Zahlen

| A | ¬A | A ∨ ¬A | A ∧ ¬A |
|---|---|---|---|
| w | f | w | f |
| f | w | w | f |

A ∨ ¬A ist in jeder Zeile w: Tautologie. A ∧ ¬A ist in keiner Zeile w: Widerspruch.

### So steht es auf der Folie

- Definition 1.3.2: F heißt erfüllbar, wenn es eine Belegung gibt, die F wahr macht (eine **erfüllende Belegung**).
- Definition 1.3.3: F heißt Tautologie, wenn F bei **allen** Belegungen wahr ist, und Widerspruch, wenn F bei **keiner** Belegung wahr ist.

Auf Deutsch heißt das: Schau nur in die Ergebnisspalte. Mindestens ein w: erfüllbar. Nur w: Tautologie. Kein w: Widerspruch. Wenn du eine Tautologie verneinst, wird jedes w zu f, also entsteht ein Widerspruch. Und umgekehrt.

Benannte Tautologien der Folie:

| Name | Formel | auf Deutsch |
|---|---|---|
| Satz vom ausgeschlossenen Dritten | A ∨ ¬A | jede Aussage ist wahr oder falsch |
| Satz vom Widerspruch | ¬(A ∧ ¬A) | nichts ist zugleich wahr und falsch |
| Modus Ponens | (A ∧ (A → B)) → B | gilt A und „wenn A, dann B“, dann gilt B |
| Kontraposition | (A → B) ↔ (¬B → ¬A) | siehe oben |

> [!WARNING]
> **Typischer Fehler**
> Den „Satz vom Widerspruch“ für einen Widerspruch halten. ¬(A ∧ ¬A) ist eine **Tautologie**, also immer wahr. Der Widerspruch ist A ∧ ¬A ohne das ¬ davor.

## ≡ und ⇒: Aussagen über Formeln

### In einem Satz

F₁ ≡ F₂ heißt „die beiden Formeln haben immer denselben Wert“, und F₁ ⇒ F₂ heißt „immer wenn F₁ wahr ist, ist auch F₂ wahr“.

### Stell dir vor

→ und ↔ sind Bausteine **in** einem Satz, wie das Wort „wenn“ in einem Satz. ⇒ und ≡ sind ein Urteil **über** Sätze, wie ein Lehrer, der sagt: „Diese zwei Sätze bedeuten immer dasselbe.“ A → B kann wahr oder falsch sein, je nach Belegung. „F₁ ⇒ F₂“ ist dagegen eine Behauptung, die entweder für die ganze Tafel stimmt oder nicht.

### Mit Zahlen

Folgt aus A ∨ B die Aussage A? Schau die Zeilen an, in denen A ∨ B wahr ist:

| A | B | A ∨ B | A |
|---|---|---|---|
| w | w | w | w |
| w | f | w | w |
| f | w | w | **f** |
| f | f | f | f |

In Zeile 3 ist A ∨ B wahr, A aber falsch. Also folgt A **nicht** aus A ∨ B. Eine Zeile reicht als Gegenbeispiel.

### So steht es auf der Folie

- Definition 1.3.4: F₁ ≡ F₂ (gleichwertig), wenn beide bei jeder Belegung denselben Wert haben. Das gilt genau dann, wenn F₁ ↔ F₂ eine Tautologie ist.
- Definition 1.3.5: F₁ ⇒ F₂ (logische Folgerung), wenn in jeder Zeile, in der F₁ wahr ist, auch F₂ wahr ist.
- Satz 1.3.1: F₁ ⇒ F₂ gilt genau dann, wenn F₁ → F₂ eine Tautologie ist.

Auf Deutsch heißt das: Um F₁ ⇒ F₂ zu prüfen, schreibst du die Tafel für F₁ → F₂. Steht in der Ergebnisspalte nur w, gilt die Folgerung. Um F₁ ≡ F₂ zu prüfen, vergleichst du die beiden Spalten Zeile für Zeile.

> [!IMPORTANT]
> **Das Wichtigste**
> → und ↔ stehen **in** einer Formel und haben je nach Zeile einen Wert. ⇒ und ≡ sagen etwas **über** Formeln, nämlich: „gilt in jeder Zeile“. F₁ ⇒ F₂ heißt: F₁ → F₂ ist eine Tautologie. F₁ ≡ F₂ heißt: F₁ ↔ F₂ ist eine Tautologie.

> [!WARNING]
> **Typischer Fehler**
> In der Analysis schreibt man oft x = 2 ⇒ x² = 4 und meint „daraus folgt“. Das passt zu ⇒. Wenn die Folien aber eine Formel bauen, steht dort →. Schreib in Logik-Aufgaben A → B, wenn du den Baustein meinst.

## Logische Gesetze

### In einem Satz

Die logischen Gesetze sind Rechenregeln, mit denen du Formeln umformst, ohne jedes Mal eine Wahrheitstafel zu rechnen.

### Stell dir vor

Terme vereinfachen in der Schule: a · (b + c) = a · b + a · c. In der Logik geht das genauso, wenn du ∧ als „mal“ und ∨ als „plus“ liest. Ein Unterschied: In der Logik darf man auch andersherum ausmultiplizieren, also ∨ über ∧ verteilen. Das geht bei Zahlen nicht.

### Mit Zahlen: De Morgan an der Tafel

| A | B | ¬(A ∧ B) | ¬A ∨ ¬B | ¬A ∧ ¬B |
|---|---|---|---|---|
| w | w | f | f | f |
| w | f | w | w | **f** |
| f | w | w | w | **f** |
| f | f | w | w | w |

¬(A ∧ B) und ¬A ∨ ¬B sind gleich. ¬A ∧ ¬B weicht ab. Im Alltag: „Nicht (Kaffee und Kuchen)“ heißt „kein Kaffee **oder** kein Kuchen“. Wer nur Kaffee trinkt, hat nicht beides.

### Die Gesetze

Alle mit Python über alle Belegungen geprüft (Sätze 1.4.1 bis 1.4.6):

| Gesetz | für ∧ | für ∨ |
|---|---|---|
| Idempotenz | A ∧ A ≡ A | A ∨ A ≡ A |
| Kommutativität | A ∧ B ≡ B ∧ A | A ∨ B ≡ B ∨ A |
| Assoziativität | (A ∧ B) ∧ C ≡ A ∧ (B ∧ C) | (A ∨ B) ∨ C ≡ A ∨ (B ∨ C) |
| Distributivität | A ∧ (B ∨ C) ≡ (A ∧ B) ∨ (A ∧ C) | A ∨ (B ∧ C) ≡ (A ∨ B) ∧ (A ∨ C) |
| De Morgan | ¬(A ∧ B) ≡ ¬A ∨ ¬B | ¬(A ∨ B) ≡ ¬A ∧ ¬B |
| Komplement | A ∧ ¬A ≡ f | A ∨ ¬A ≡ w |
| Neutralität | A ∧ w ≡ A | A ∨ f ≡ A |
| Dominanz | A ∧ f ≡ f | A ∨ w ≡ w |
| Absorption | A ∧ (A ∨ B) ≡ A | A ∨ (A ∧ B) ≡ A |
| Doppelte Negation | ¬(¬A) ≡ A | |

In Worten:

- **Idempotenz:** Doppelt gesagt ist einmal gesagt.
- **Kommutativität, Assoziativität:** Reihenfolge und Klammern sind bei lauter ∧ (oder lauter ∨) egal.
- **Distributivität:** Ausmultiplizieren, in beide Richtungen.
- **De Morgan:** Das ¬ wandert in die Klammer und dreht dabei ∧ und ∨ um.
- **Neutralität:** w wirkt bei ∧ wie die 1 beim Malnehmen, f wirkt bei ∨ wie die 0 beim Addieren.
- **Dominanz:** f bei ∧ wirkt wie „mal 0“, w bei ∨ gewinnt immer.
- **Absorption:** A ∧ (A ∨ B): Wenn A schon verlangt ist, ist „A oder B“ automatisch erfüllt. Übrig bleibt A.

### Dualität

Korollar 1.4.1 der Folie: Tauschst du in einem gültigen Gesetz überall ∧ mit ∨ und w mit f, bekommst du wieder ein gültiges Gesetz.

Auf Deutsch heißt das: Die zwei Spalten der Tabelle oben sind Spiegelbilder. Kennst du eine, kennst du die andere. Aus A ∧ w ≡ A wird A ∨ f ≡ A.

### So rechnest du: vereinfachen mit Gesetzen

1. Schreib in jeder Zeile genau eine Umformung.
2. Schreib den Namen des Gesetzes dahinter.
3. Hör auf, wenn nichts mehr kürzer wird.
4. Probe: Setz eine Belegung in Anfang und Ende ein, beide müssen gleich sein.

Beispiel: (A ∧ B) ∨ (A ∧ ¬B)

1. ≡ A ∧ (B ∨ ¬B) (Distributivität rückwärts, A ausklammern)
2. ≡ A ∧ w (Komplement)
3. ≡ A (Neutralität)

Probe mit A = w, B = f: Anfang (w ∧ f) ∨ (w ∧ w) = f ∨ w = w. Ende A = w. Passt.

> [!WARNING]
> **Typischer Fehler**
> Bei De Morgan nur die Variablen verneinen und den Operator stehen lassen: ¬(A ∧ B) ist **nicht** ¬A ∧ ¬B. Gegenprobe A = w, B = f: links ¬(w ∧ f) = ¬f = w, rechts f ∧ w = f.

## Boolesche Funktionen

### In einem Satz

Eine boolesche Funktion bekommt n Wahrheitswerte und gibt einen Wahrheitswert zurück. Ihre Wertetabelle ist eine Wahrheitstafel.

### Stell dir vor

Ein Automat mit zwei Knöpfen und einer Lampe. Für jede der vier Knopf-Kombinationen legst du fest, ob die Lampe leuchtet. Jede mögliche Festlegung ist eine andere boolesche Funktion. Wie viele gibt es? 4 Zeilen, in jeder Zeile 2 Möglichkeiten (Lampe an oder aus): 2 · 2 · 2 · 2 = 16.

### Mit Zahlen

| Anzahl Variablen n | Zeilen 2ⁿ | Funktionen 2^(2ⁿ) |
|---|---|---|
| 1 | 2 | 4 |
| 2 | 4 | 16 |
| 3 | 8 | 256 |

### Die Formel

g : {w, f}ⁿ → {w, f}

- **g** ist der Name der Funktion.
- **{w, f}ⁿ** heißt: Eingabe sind n Wahrheitswerte, zum Beispiel bei n = 2 ein Paar wie (w, f).
- **→ {w, f}**: Ausgabe ist ein Wahrheitswert.

Satz 1.5.1: Es gibt **2^(2ⁿ)** n-stellige boolesche Funktionen. Jede Formel mit n Variablen beschreibt eine davon. Gleichwertige Formeln beschreiben dieselbe Funktion.

### So steht es auf der Folie: die 16 Funktionen g₁ bis g₁₆

Achtung, hier wechseln die Folien die Reihenfolge der Zeilen: Jetzt kommt **f zuerst**, wie beim Binärzählen mit f = 0 und w = 1: ff, fw, wf, ww. Die Spalte von g_k, von oben nach unten gelesen, ist die Binärzahl k − 1.

Beispiel: A ∧ B hat die Spalte f, f, f, w = 0001 = 1, also k − 1 = 1 und k = 2. Darum heißt A ∧ B auf der Folie g₂.

| Name | g_k | Formel | Spalte (ff, fw, wf, ww) | wahr genau dann, wenn … |
|---|---|---|---|---|
| Konjunktion | g₂ | A ∧ B | f f f w | beide wahr |
| – | g₃ | A ∧ ¬B | f f w f | nur A wahr |
| XOR | g₇ | (A ∨ B) ∧ ¬(A ∧ B) | f w w f | die Werte verschieden sind |
| Disjunktion | g₈ | A ∨ B | f w w w | mindestens einer wahr |
| NOR | g₉ | ¬(A ∨ B) | w f f f | beide falsch |
| Äquivalenz | g₁₀ | (A ∧ B) ∨ ¬(A ∨ B) | w f f w | die Werte gleich sind |
| – | g₁₃ | ¬A | w w f f | A falsch |
| Implikation | g₁₄ | ¬A ∨ B | w w f w | nicht (A wahr und B falsch) |
| NAND | g₁₅ | ¬(A ∧ B) | w w w f | nicht beide wahr |

NAND und NOR kennst du aus GIT als Gatter. Laut Folien kommen sie in Kapitel 3.3 (Schaltnetze) wieder.

### So rechnest du: zu einer Formel das passende g_k finden

1. Schreib die Zeilen in der Reihenfolge ff, fw, wf, ww.
2. Rechne die Formel in jeder Zeile aus.
3. Lies die Spalte von oben nach unten als Binärzahl (f = 0, w = 1).
4. k = Binärzahl + 1.

Beispiel ¬A: Zeilen ff, fw, wf, ww ergeben w, w, f, f = 1100 = 12. Also k = 13, ¬A ist g₁₃.

> [!WARNING]
> **Typischer Fehler**
> Bei den g_k die Zeilenreihenfolge aus den Tafeln vorher benutzen (w zuerst). Dann kommt eine falsche Nummer heraus. Für g_k immer **f zuerst**: ff, fw, wf, ww.

## Normalformen: DNF und KNF

### In einem Satz

Aus jeder Wahrheitstafel kannst du mechanisch eine Formel ablesen: Die **DNF** sammelt die Zeilen mit w, die **KNF** verbietet die Zeilen mit f.

### Stell dir vor

Ein Türsteher vor einem Club.

- Die **DNF** ist eine Gästeliste: „Rein darf Fall 1 **oder** Fall 2 **oder** Fall 3 …“ Jeder Eintrag beschreibt genau einen erlaubten Fall.
- Die **KNF** ist eine Liste von Hausregeln, die **alle** gelten müssen: „Regel 1 **und** Regel 2 **und** …“ Jede Regel schließt genau einen verbotenen Fall aus.

Ist die Gästeliste kurz (wenige w), nimmst du die DNF. Gibt es nur wenige verbotene Fälle (wenige f), nimmst du die KNF.

### Mit Zahlen

Warum braucht man das? Weil eine Funktion viele Formeln hat. A ∧ ¬B ∨ ¬A, ¬A ∨ ¬B und ¬(A ∧ B) sehen verschieden aus, sind aber alle NAND (mit Python geprüft). Eine Normalform ist eine feste Standard-Schreibweise.

Zwei neue Wörter:

- **Vollkonjunktion** (auch Minterm): Alle Variablen kommen genau einmal vor, verbunden mit ∧, manche verneint. Beispiel A ∧ ¬B ∧ C. Sie ist in **genau einer** Zeile wahr, hier bei A = w, B = f, C = w.
- **Volldisjunktion** (auch Maxterm): Alle Variablen genau einmal, verbunden mit ∨. Beispiel A ∨ ¬B ∨ C. Sie ist in **genau einer** Zeile falsch, hier bei A = f, B = w, C = f.

Bei drei Variablen ist A ∧ C **keine** Vollkonjunktion, denn B fehlt.

### So steht es auf der Folie

Definition 1.6.2: Die **DNF** (disjunktive Normalform) ist eine Disjunktion (∨) von Vollkonjunktionen. Die **KNF** (konjunktive Normalform) ist eine Konjunktion (∧) von Volldisjunktionen. Beide sind bis auf die Reihenfolge eindeutig.

Auf Deutsch heißt das: DNF = „oder“ von „und“-Blöcken. KNF = „und“ von „oder“-Blöcken. In jedem Block stehen alle Variablen.

Sonderfälle: Ist eine Funktion nie wahr, gibt es keine DNF, man schreibt A ∧ ¬A. Ist sie immer wahr, gibt es keine KNF, man schreibt A ∨ ¬A.

### So rechnest du (Algorithmus 1.6.1 und 1.6.2)

| | DNF | KNF |
|---|---|---|
| Welche Zeilen? | mit **w** | mit **f** |
| Variable hat Wert w | steht so da | wird **verneint** |
| Variable hat Wert f | wird **verneint** | steht so da |
| Blöcke | Vollkonjunktionen (∧) | Volldisjunktionen (∨) |
| verbunden mit | ∨ | ∧ |
| günstig, wenn | w selten | f selten |

Folienbeispiel DNF: g ist wahr in den Zeilen (A, B, C) = (f, w, f), (f, w, w) und (w, w, w).

1. Zeile (f, w, f): A ist f, also ¬A. B ist w, also B. C ist f, also ¬C. Block: ¬A ∧ B ∧ ¬C.
2. Zeile (f, w, w): ¬A ∧ B ∧ C.
3. Zeile (w, w, w): A ∧ B ∧ C.
4. Mit ∨ verbinden: g = (¬A ∧ B ∧ ¬C) ∨ (¬A ∧ B ∧ C) ∨ (A ∧ B ∧ C).

Folienbeispiel KNF: u ist falsch in den Zeilen (f, f, w), (f, w, f) und (w, w, f).

1. Zeile (f, f, w): A ist f, bleibt A. B ist f, bleibt B. C ist w, wird ¬C. Block: A ∨ B ∨ ¬C. Probe: Bei (f, f, w) ist das f ∨ f ∨ f = f. Genau diese Zeile wird verboten.
2. Zeile (f, w, f): A ∨ ¬B ∨ C.
3. Zeile (w, w, f): ¬A ∨ ¬B ∨ C.
4. Mit ∧ verbinden: u = (A ∨ B ∨ ¬C) ∧ (A ∨ ¬B ∨ C) ∧ (¬A ∨ ¬B ∨ C).

### Vereinfachen

Zwei Blöcke, die sich nur in **einer** Variable unterscheiden, kannst du zusammenfassen. Diese Variable fällt weg:

(¬A ∧ B ∧ ¬C) ∨ (¬A ∧ B ∧ C) ≡ ¬A ∧ B ∧ (¬C ∨ C) ≡ ¬A ∧ B ∧ w ≡ ¬A ∧ B.

Für g brauchst du den Block ¬A ∧ B ∧ C zweimal (Idempotenz erlaubt das Verdoppeln): einmal mit ¬A ∧ B ∧ ¬C zu ¬A ∧ B, einmal mit A ∧ B ∧ C zu B ∧ C. Ergebnis g ≡ (¬A ∧ B) ∨ (B ∧ C) ≡ **B ∧ (¬A ∨ C)** (mit Python geprüft). Systematisch geht das laut Folien später mit KV-Diagrammen (Kapitel 3.2).

> [!WARNING]
> **Typischer Fehler**
> Bei der KNF die Verneinung wie bei der DNF setzen. In der KNF wird eine Variable mit Wert **w verneint**, denn der Block soll genau in dieser Zeile **falsch** werden. Mach immer die Probe: Setz die Zeile in ihren Block ein. Bei der DNF muss w herauskommen, bei der KNF f.

## Prädikate und Quantoren

### In einem Satz

Ein Prädikat ist ein Satz mit einer Lücke, der erst zur Aussage wird, wenn du etwas einsetzt oder „für alle“ bzw. „es gibt“ davorschreibst.

### Stell dir vor

Ein Formular mit Lücke: „___ ist ein Schaltjahr.“ So ist der Satz weder wahr noch falsch. Schreibst du 2024 hinein, ist er wahr. Bei 1900 ist er falsch. Oder du schreibst davor „**Für alle** Jahre gilt: …“ (falsch) oder „**Es gibt** ein Jahr, das …“ (wahr). Dann ist die Lücke auch gefüllt.

### Mit Zahlen

- S(x) = „x ist ein Schaltjahr“ (eine Lücke, Zahlen aus ℕ): S(2024) = w, S(1900) = f.
- A(x, y) = „x > y“ (zwei Lücken, Zahlen aus ℝ): A(3, 1) = w.
- Z(x, y, z) = „x + y = z“ (drei Lücken): Z(1, 2, 3) = w.
- Prädikate lassen sich verknüpfen: Q(x) ∧ ¬G(x) mit Q = „Quadratzahl“, G = „gerade“ heißt „x ist eine ungerade Quadratzahl“. Wahr für 1 und 9, falsch für 4 und 7.

Quantoren auf ℕ mit G(x) = „x ist gerade“:

- ∀x G(x): „Jede natürliche Zahl ist gerade.“ **Falsch**, x = 1 ist ein Gegenbeispiel.
- ∃x G(x): „Es gibt eine gerade natürliche Zahl.“ **Wahr**, x = 2.

Vier Fälle auf ℝ:

| Formel | auf Deutsch | Wert |
|---|---|---|
| ∀x: x² ≥ 0 | jedes Quadrat ist mindestens 0 | w |
| ∀x ¬(x² < 0) | kein Quadrat ist negativ | w |
| ∃x: x² > 2 | es gibt eine Zahl mit Quadrat über 2 | w, z. B. x = 2 |
| ∃x ¬(x² > 2) | es gibt eine Zahl, deren Quadrat nicht über 2 liegt | w, z. B. x = 0 |

### Die Formel

- **Prädikat** (Definition 1.7.1): P : Mⁿ → {w, f}. M ist die Menge, aus der man einsetzen darf. Sie heißt **Individuenbereich**. n ist die Zahl der Lücken.
- **∀x P(x)** (Definition 1.7.2): „Für alle x aus M gilt P(x).“
- **∃x P(x)**: „Es gibt **mindestens ein** x aus M mit P(x).“ Es dürfen auch mehrere sein.

### Frei und gebunden

In ∀x A(x, y) ist x **gebunden**: Der Quantor kümmert sich um x. y ist **frei**: noch offen. Eine Aussage entsteht erst, wenn jede Variable gebunden oder eingesetzt ist.

Wie im Code: In `for x in M:` ist x die Schleifenvariable, y bleibt ein Parameter, den jemand von außen liefern muss. Jede Variable bekommt höchstens **einen** Quantor. ∃x ∀x … ist verboten.

### Reihenfolge der Quantoren

Gleiche Quantoren darfst du tauschen: ∀x ∀y ist dasselbe wie ∀y ∀x. Verschiedene **nicht**.

Das Folienbeispiel: T(x, y) = „x teilt y“, x aus D = {2, 3, 5}, y aus M = {4, 6, 9, 10}. Ein Kreuz heißt „x teilt y“:

| y \ x | 2 | 3 | 5 |
|---|---|---|---|
| 4 | × | | |
| 6 | × | × | |
| 9 | | × | |
| 10 | × | | × |

- ∀y ∃x T(x, y): „Jede Zahl y hat einen Teiler aus D.“ Prüfe jede **Zeile**: Hat sie ein Kreuz? Ja, alle vier. **Wahr.**
- ∃x ∀y T(x, y): „Es gibt einen Teiler, der alle y teilt.“ Prüfe jede **Spalte**: Ist eine voll? Nein. **Falsch.**

Gleiche Buchstaben, andere Reihenfolge, anderes Ergebnis (mit Python geprüft).

### Quantoren verneinen

Satz 1.7.1:

- ¬(∀x P(x)) ≡ ∃x ¬P(x)
- ¬(∃x P(x)) ≡ ∀x ¬P(x)

Auf Deutsch heißt das: Das Gegenteil von „alle haben ein Ticket“ ist „**mindestens einer** hat keins“, nicht „keiner hat eins“. Das Gegenteil von „es gibt einen mit Ticket“ ist „alle haben keins“.

Warum das stimmt: ∀ ist ein großes ∧ („x₁ und x₂ und x₃ …“), ∃ ist ein großes ∨. Dann ist das einfach De Morgan.

### So verneinst du eine Formel mit Quantoren

1. Jeden Quantor umdrehen: ∀ wird ∃, ∃ wird ∀. Die Reihenfolge bleibt.
2. Das ¬ wandert nach innen bis vor das Prädikat.
3. Innen weiter mit den Gesetzen umformen, z. B. ¬(Q → G) ≡ ¬(¬Q ∨ G) ≡ Q ∧ ¬G.

Beispiel: „Jede Quadratzahl ist gerade“ = ∀x (Q(x) → G(x)). Verneint: ∃x ¬(Q(x) → G(x)) ≡ ∃x (Q(x) ∧ ¬G(x)): „Es gibt eine ungerade Quadratzahl.“ Das stimmt, die 9.

> [!WARNING]
> **Typische Fehler**
> (1) Beim Verneinen den Quantor stehen lassen: ¬∀x P(x) ist **nicht** ∀x ¬P(x). (2) „Jede Quadratzahl ist gerade“ mit ∧ statt → schreiben: ∀x (Q(x) ∧ G(x)) hieße „jede Zahl ist eine gerade Quadratzahl“. Bei „jedes … ist …“ steht nach ∀ fast immer ein →. (3) ∀ und ∃ vertauschen.

## Beweismuster

### In einem Satz

Ein Beweis zeigt, dass etwas **immer** gilt, und die Folien nennen fünf feste Muster dafür.

### Stell dir vor

Beim Kochen gibt es feste Grundtechniken: anbraten, kochen, backen. Bei jedem Rezept wählst du die passende. Beim Beweisen ist es genauso. Erst überlegst du, welches Muster passt, dann arbeitest du es Schritt für Schritt ab.

### Die fünf Muster

| Muster | Idee | Wann nehmen? |
|---|---|---|
| 1 · Direkter Beweis | von der Voraussetzung Schritt für Schritt zum Ziel | wenn die Umformung naheliegt |
| 2 · Kontraposition | statt A → B zeigst du ¬B → ¬A | wenn „nicht B“ leichter zu benutzen ist als A |
| 3 · Widerspruch | Gegenteil annehmen, bis A ∧ ¬A herauskommt | bei „es gibt kein …“ oder „unendlich viele“ |
| 4 · Gegenbeispiel | ein einziger Fall widerlegt ein „für alle“ | wenn eine Behauptung falsch ist |
| 5 · Vollständige Induktion | erster Fall + „von n auf n + 1“ | bei „für alle n ∈ ℕ“ mit Formeln in n |

### Mit Zahlen

**Direkter Beweis** (mit Gesetzen): A ∧ (A → B) ≡ A ∧ (¬A ∨ B) ≡ (A ∧ ¬A) ∨ (A ∧ B) ≡ f ∨ (A ∧ B) ≡ A ∧ B. Die Gesetze: Implikation als Oder, Distributivität, Komplement, Neutralität.

**Kettenschluss:** ((A → B) ∧ (B → C)) → (A → C) ist eine Tautologie (mit Python geprüft). Beispiel: Durch 400 teilbar → durch 100 teilbar → durch 4 teilbar. Also: Durch 400 teilbar → durch 4 teilbar.

**Äquivalenzbeweis:** Für A ⇔ B zeigst du zwei Richtungen, A ⇒ B und B ⇒ A. Bei vier gleichwertigen Aussagen reicht ein **Ringschluss** A ⇒ B ⇒ C ⇒ D ⇒ A: 4 Beweise statt 12.

**Kontraposition:** Behauptung: „Ist n² gerade, dann ist n gerade.“ Direkt ist das schwer. Zeig stattdessen: „Ist n ungerade, dann ist n² ungerade.“

1. n ungerade heißt n = 2k + 1 für eine ganze Zahl k.
2. n² = (2k + 1)² = 4k² + 4k + 1.
3. = 2 · (2k² + 2k) + 1. Das ist „2 mal etwas plus 1“, also ungerade.

**Widerspruch:** Euklid zeigt, dass es keine größte Primzahl gibt.

1. Annahme: 2, 3, 5, …, p sind alle Primzahlen.
2. Bilde N = 2 · 3 · 5 · … · p + 1.
3. Teilst du N durch eine dieser Primzahlen, bleibt immer Rest 1. Also hat N einen Primteiler, der nicht in der Liste steht.
4. Das widerspricht der Annahme. Mit 2, 3, 5, 7 ist N = 211, und 211 ist selbst eine Primzahl.

**Gegenbeispiel:** „Jede Quadratzahl ist gerade“ widerlegt die 9. Aber Achtung: Beispiele **beweisen** nie ein „für alle“. Dass es für 1, 2 und 3 stimmt, heißt nichts für 4.

> [!WARNING]
> **Typischer Fehler**
> Mit Beispielen „beweisen“. „Ich habe n = 1, 2, 3 probiert, also gilt es für alle n.“ Das ist kein Beweis. Ein einzelnes Gegenbeispiel widerlegt, aber viele Beispiele beweisen nichts.

## Vollständige Induktion

### In einem Satz

Du zeigst, dass etwas für n = 1 gilt und dass es immer vom einen n auf das nächste n + 1 weitergegeben wird. Dann gilt es für alle n.

### Stell dir vor

Eine lange Reihe Dominosteine. Du musst zwei Dinge sicherstellen: Der erste Stein fällt (Anfang). Und jeder fallende Stein stößt den nächsten um (Schluss). Dann fallen alle, auch der millionste, ohne dass du jeden einzeln anschaust.

### Mit Zahlen

Behauptung: 1 + 2 + … + n = n(n + 1)/2.

| n | links | rechts n(n + 1)/2 |
|---|---|---|
| 1 | 1 | 1 · 2/2 = 1 |
| 2 | 1 + 2 = 3 | 2 · 3/2 = 3 |
| 3 | 1 + 2 + 3 = 6 | 3 · 4/2 = 6 |
| 4 | 1 + 2 + 3 + 4 = 10 | 4 · 5/2 = 10 |

Die Tabelle zeigt nur, dass es plausibel ist. Der Beweis kommt unten.

### Die Formel

Satz 1.7.2: A(1) ∧ ∀n (A(n) → A(n + 1)) → ∀n A(n).

Auf Deutsch heißt das: Gilt die Aussage für 1, **und** folgt sie für jedes n aus der für n davor, dann gilt sie für alle natürlichen Zahlen. A(n) ist hier ein Prädikat: die Behauptung für die Zahl n.

### So rechnest du

1. **Induktionsanfang:** A(1) nachrechnen. Linke und rechte Seite für n = 1 getrennt ausrechnen.
2. **Induktionsannahme:** „A(n) gilt für **ein festes** n.“ Schreib die Formel für n hin.
3. **Induktionsschluss:** A(n + 1) hinschreiben. Die linke Seite so umbauen, dass der Teil aus der Annahme auftaucht. Dort die Annahme einsetzen und **die Stelle markieren**. Dann zur rechten Seite für n + 1 umformen.

Beispiel 1 + 2 + … + n = n(n + 1)/2:

1. Anfang n = 1: links 1, rechts 1 · 2/2 = 1. ✓
2. Annahme: Für ein festes n gilt 1 + 2 + … + n = n(n + 1)/2.
3. Schluss: Ziel ist 1 + … + n + (n + 1) = (n + 1)(n + 2)/2.
   - 1 + … + n + (n + 1) = **n(n + 1)/2** + (n + 1) (← hier die Annahme)
   - = (n(n + 1) + 2(n + 1))/2 (auf einen Bruch)
   - = (n + 1)(n + 2)/2 ((n + 1) ausklammern) ✓

Ein weiteres Folienbeispiel: Eine Wahrheitstafel mit n Variablen hat 2ⁿ Zeilen. Anfang: 1 Variable, 2 Zeilen = 2¹. Schluss: Eine neue Variable verdoppelt die Zeilen (jede alte Zeile einmal mit w, einmal mit f), also 2 · 2ⁿ = 2ⁿ⁺¹.

> [!WARNING]
> **Typischer Fehler**
> (1) Den Induktionsanfang weglassen. Ohne ersten Stein fällt nichts. (2) Die Annahme „für alle n“ formulieren. Dann hättest du das Ziel schon vorausgesetzt. Richtig ist „für ein festes n“. (3) Im Schluss die Annahme nicht benutzen. Wenn du sie nirgends brauchst, stimmt meist etwas nicht.

## Übungen

Die Übungen 1 bis 21 stehen sinngemäß auf den Folien VL01. Die Übungen 22 bis 24 sind eigene Aufgaben im Klausurstil. Zu den Folienaufgaben stehen die Lösungen in der Vorlesung; hier sind sie selbst gerechnet und mit Python über alle Belegungen geprüft.

> [!TIP]
> **Übung 1 · leicht**
> Welche Sätze sind Aussagen? Wenn ja: wahr oder falsch? a) „5 ist kleiner als 3.“ b) „Paris ist die Hauptstadt Frankreichs.“ c) „Das Studium der Data Science ist sehr schwierig.“ d) „Nach dem Essen Zähneputzen!“ e) „Nachts ist es kälter als draußen.“ f) „x + 2 = 5“
>
> Quelle: VL01, Aufgabe 1.1.1

> [!TIP]
> **Übung 2 · leicht**
> Zerlege in einfache Aussagen und schreib mit ¬, ∧, ∨, ⊻: a) „12 ist durch 3 und durch 4 teilbar.“ b) „n ist entweder gerade oder ungerade.“ c) „7 ist keine Quadratzahl.“ d) „n ist weder durch 2 noch durch 3 teilbar.“
>
> Quelle: VL01, Aufgabe 1.1.2

> [!TIP]
> **Übung 3 · leicht**
> Stelle die Wahrheitstafeln von ¬A, A ∧ B und A ∨ B auf.
>
> Quelle: VL01, Aufgabe 1.1.3

> [!TIP]
> **Übung 4 · leicht**
> A = „Weihnachten ist am 24.12.“, B = „Ich fresse einen Besen“, C = „Weihnachten fällt auf Ostern“. Bestimme den Wahrheitswert von a) A → B, b) C → B, c) C → A.
>
> Quelle: VL01, Aufgabe 1.2.1

> [!TIP]
> **Übung 5 · mittel**
> A = „Bernd lernt täglich eine Stunde Logik“, B = „Bernd besteht die Klausur“. Ist A → B gleichwertig zu ¬A → ¬B? Begründe mit einer Wahrheitstafel.
>
> Quelle: VL01, Aufgabe 1.2.2

> [!TIP]
> **Übung 6 · mittel**
> Zeige mit einer Wahrheitstafel, dass A → B gleichwertig ist zu ¬B → ¬A und zu ¬A ∨ B.
>
> Quelle: VL01, Aufgabe 1.2.3

> [!TIP]
> **Übung 7 · leicht**
> Sind A ∨ ¬A und A ∧ ¬A erfüllbar?
>
> Quelle: VL01, Aufgabe 1.3.1

> [!TIP]
> **Übung 8 · mittel**
> Welche Formeln sind Tautologien? a) (A ∨ B) ↔ (¬A ∧ B) b) (A → B) ↔ (A ∨ B) c) (A → B) ↔ (¬A ∨ B) d) (A ↔ B) ↔ ((A ∧ B) ∨ (¬A ∧ ¬B))
>
> Quelle: VL01, Aufgabe 1.3.2

> [!TIP]
> **Übung 9 · mittel**
> Zeige mit einer Wahrheitstafel, dass der Modus Ponens (A ∧ (A → B)) → B eine Tautologie ist.
>
> Quelle: VL01, Aufgabe 1.3.3

> [!TIP]
> **Übung 10 · mittel**
> Lass mit den Vorrangregeln so viele Klammern wie möglich weg: a) A ∨ (B ∧ C) b) (A ∧ ¬B) ∨ ¬(C ∧ D) c) (A ∨ B) ∧ (A ∨ C) d) (¬A ∧ B) → (¬(C ∨ D))
>
> Quelle: VL01, Aufgabe 1.3.4

> [!TIP]
> **Übung 11 · mittel**
> Zeige die Assoziativgesetze (A ∧ B) ∧ C ≡ A ∧ (B ∧ C) und (A ∨ B) ∨ C ≡ A ∨ (B ∨ C) mit einer Wahrheitstafel.
>
> Quelle: VL01, Aufgabe 1.4.1

> [!TIP]
> **Übung 12 · mittel**
> Zeige die Distributivgesetze A ∧ (B ∨ C) ≡ (A ∧ B) ∨ (A ∧ C) und A ∨ (B ∧ C) ≡ (A ∨ B) ∧ (A ∨ C) mit einer Wahrheitstafel.
>
> Quelle: VL01, Aufgabe 1.4.2

> [!TIP]
> **Übung 13 · mittel**
> Vereinfache mit den logischen Gesetzen und nenne jedes Gesetz: a) ¬(¬A ∧ ¬B) b) (A ∧ B) ∨ (A ∧ ¬B) c) A ∨ (¬A ∧ B)
>
> Quelle: VL01, Aufgabe 1.4.3

> [!TIP]
> **Übung 14 · Prüfungsniveau**
> Ein Jahr ist ein Schaltjahr, wenn es durch 4 teilbar ist, ausgenommen die Jahre, die durch 100, aber nicht durch 400 teilbar sind. Schreib S mit A = „durch 4 teilbar“, B = „durch 100 teilbar“, C = „durch 400 teilbar“ und vereinfache. Prüfe 2024, 1900 und 2000.
>
> Quelle: VL01, Aufgabe 1.4.4

> [!TIP]
> **Übung 15 · leicht**
> Welche der Funktionen g₁ bis g₁₆ sind A ∧ ¬B und ¬A?
>
> Quelle: VL01, Flüsterrunde in Abschnitt 1.5

> [!TIP]
> **Übung 16 · mittel**
> Welche Formeln sind in den Variablen A, B, C eine DNF, eine KNF oder keins von beiden? a) (A ∧ ¬B ∧ C) ∨ (¬A ∧ B ∧ C) b) (A ∨ B ∨ ¬C) ∧ (¬A ∨ B ∨ C) c) (A ∧ B) ∨ (¬A ∧ B ∧ C) d) ¬A ∨ B ∨ ¬C
>
> Quelle: VL01, Aufgabe 1.6.1

> [!TIP]
> **Übung 17 · Prüfungsniveau**
> Bestimme die DNF von k(A, B, C) = ¬A ∨ (¬B ∧ C) über die Wahrheitstafel. Wäre die KNF kürzer?
>
> Quelle: VL01, Aufgabe 1.6.2

> [!TIP]
> **Übung 18 · mittel**
> Auf ℝ seien A(x, y) = „x² > y“ und B(x) = „x > 0“. a) Ist ∀y ∀x (A(x, y) ∧ B(x)) eine Formel? b) Ist es eine Aussage, und wenn ja, ist sie wahr?
>
> Quelle: VL01, Aufgabe 1.7.1

> [!TIP]
> **Übung 19 · Prüfungsniveau**
> Auf ℕ = {1, 2, 3, …} seien Q(x) = „x ist Quadratzahl“, G(x) = „x ist gerade“, T(x, y) = „x teilt y“. Formalisiere und bestimme den Wahrheitswert: (1) „Jede Quadratzahl ist gerade.“ (2) „Es gibt eine Zahl, die alle Zahlen teilt.“ (3) „Keine Zahl wird von allen Zahlen geteilt.“ Verneine (1) und (2).
>
> Quelle: VL01, Aufgabe 1.7.2

> [!TIP]
> **Übung 20 · Prüfungsniveau**
> Stimmt das? Begründe mit einem passenden Beweismuster. a) Aus A ∧ ¬B → C und ¬C folgt ¬A ∨ B. b) ¬(A ∧ B) ∨ A ist eine Tautologie. c) A → B und B → A haben immer denselben Wahrheitswert.
>
> Quelle: VL01, Aufgabe 1.7.3

> [!TIP]
> **Übung 21 · Prüfungsniveau**
> Zeige mit vollständiger Induktion: 1 + 2 + 4 + … + 2ⁿ = 2ⁿ⁺¹ − 1 für alle n ∈ ℕ.
>
> Quelle: VL01, Aufgabe 1.7.4

> [!TIP]
> **Übung 22 · Prüfungsniveau**
> Ist die Implikation „assoziativ“? Prüfe mit einer Wahrheitstafel, ob (A → B) → C und A → (B → C) gleichwertig sind. Gib bei Nein eine Belegung an, in der sie sich unterscheiden. Zeige außerdem mit Gesetzen: A → (B → C) ≡ A ∧ B → C.
>
> Quelle: eigene Aufgabe

> [!TIP]
> **Übung 23 · Prüfungsniveau**
> Ein Prüfungsausschuss mit drei Mitgliedern A, B, C stimmt ab. Ein Antrag geht durch, wenn mindestens zwei zustimmen (Mehrheit M). a) Stelle die Wahrheitstafel auf. b) Bestimme DNF und KNF. c) Vereinfache die DNF zu (A ∧ B) ∨ (A ∧ C) ∨ (B ∧ C).
>
> Quelle: eigene Aufgabe

> [!TIP]
> **Übung 24 · Prüfungsniveau**
> Aus der Analysis: Eine Folge (aₙ) konvergiert gegen a, wenn gilt: ∀ε > 0 ∃n₀ ∈ ℕ ∀n ≥ n₀: |aₙ − a| < ε. a) Lies die Formel in einem deutschen Satz vor. b) Verneine sie Schritt für Schritt. c) Was bedeutet die Verneinung auf Deutsch?
>
> Quelle: eigene Aufgabe

## Lösungen

### Übung 1

Prüffrage bei jedem Satz: Kann man sinnvoll fragen, ob das stimmt?

- a) Aussage, **falsch**.
- b) Aussage, **wahr**.
- c) **Keine** Aussage. „Sehr schwierig“ ist eine Meinung.
- d) **Keine** Aussage. Das ist eine Aufforderung.
- e) **Keine** Aussage. „Nachts“ ist eine Zeit, „draußen“ ein Ort. Der Vergleich ergibt keinen Sinn.
- f) **Keine** Aussage, solange x offen ist. Das ist ein Prädikat (siehe Abschnitt Prädikate). Mit x = 3 würde es eine wahre Aussage.

### Übung 2

1. a) A = „12 ist durch 3 teilbar“, B = „12 ist durch 4 teilbar“. Das „und“ wird zu ∧: **A ∧ B**.
2. b) A = „n ist gerade“, B = „n ist ungerade“. „Entweder … oder“ ist ⊻: **A ⊻ B**.
3. c) A = „7 ist eine Quadratzahl“. „keine“ ist die Verneinung: **¬A**.
4. d) A = „n ist durch 2 teilbar“, B = „n ist durch 3 teilbar“. „Weder … noch“ heißt „nicht A und nicht B“: **¬A ∧ ¬B**. Nach De Morgan dasselbe wie ¬(A ∨ B).

### Übung 3

| A | B | ¬A | A ∧ B | A ∨ B |
|---|---|---|---|---|
| w | w | f | w | w |
| w | f | f | f | w |
| f | w | w | f | w |
| f | f | w | f | f |

### Übung 4

Zuerst die Werte: A = w (Weihnachten ist am 24.12.), B = f (niemand frisst einen Besen), C = f.

- a) A → B = w → f = **falsch**. Das ist der einzige verbotene Fall.
- b) C → B = f → f = **wahr**. Aus Falschem folgt alles. Davon lebt die Redewendung.
- c) C → A = f → w = **wahr**.

### Übung 5

| A | B | A → B | ¬A | ¬B | ¬A → ¬B | gleich? |
|---|---|---|---|---|---|---|
| w | w | w | f | f | w | ja |
| w | f | f | f | w | w | **nein** |
| f | w | w | w | f | f | **nein** |
| f | f | w | w | w | w | ja |

**Nicht gleichwertig**, die Zeilen 2 und 3 weichen ab. Zeile 3 ist Bernd, der nicht täglich lernt und trotzdem besteht. Das verbietet A → B nicht, ¬A → ¬B aber schon. Der Umkehrschluss ist ein Denkfehler.

### Übung 6

| A | B | A → B | ¬B | ¬A | ¬B → ¬A | ¬A ∨ B |
|---|---|---|---|---|---|---|
| w | w | w | f | f | w | w |
| w | f | f | w | f | f | f |
| f | w | w | f | w | w | w |
| f | f | w | w | w | w | w |

Die Spalten ¬B → ¬A und ¬A ∨ B stimmen in jeder Zeile mit A → B überein. Also sind **beide gleichwertig** zu A → B. Beispiel: „Ist n durch 4 teilbar, dann ist n gerade“ sagt dasselbe wie „Ist n ungerade, dann ist n nicht durch 4 teilbar“.

### Übung 7

| A | ¬A | A ∨ ¬A | A ∧ ¬A |
|---|---|---|---|
| w | f | w | f |
| f | w | w | f |

- A ∨ ¬A ist in beiden Zeilen wahr: **erfüllbar**, sogar eine Tautologie.
- A ∧ ¬A ist in keiner Zeile wahr: **nicht erfüllbar**, ein Widerspruch.

Ergänzung von der Folie: Verneinst du eine Tautologie, wird jedes w zu f. Es entsteht ein Widerspruch, etwa ¬(A ∨ ¬A).

### Übung 8

Erst die Teilformeln, dann die ↔-Spalte (w, wenn beide Seiten gleich sind):

| A | B | A ∨ B | ¬A ∧ B | (a) | A → B | (b) | ¬A ∨ B | (c) | A ↔ B | (A ∧ B) ∨ (¬A ∧ ¬B) | (d) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| w | w | w | f | f | w | w | w | w | w | w | w |
| w | f | w | f | f | f | f | f | w | f | f | w |
| f | w | w | w | w | w | w | w | w | f | f | w |
| f | f | f | f | w | w | f | w | w | w | w | w |

- a) **Keine** Tautologie (Zeilen 1 und 2 sind f), aber erfüllbar.
- b) **Keine** Tautologie (Zeilen 2 und 4). → ist nicht dasselbe wie ∨.
- c) **Tautologie**. Das ist die Regel A → B ≡ ¬A ∨ B als eine Formel geschrieben.
- d) **Tautologie**. ↔ heißt „beide wahr oder beide falsch“, und genau das sagt die rechte Seite.

### Übung 9

| A | B | A → B | A ∧ (A → B) | (A ∧ (A → B)) → B |
|---|---|---|---|---|
| w | w | w | w | w |
| w | f | f | f | w |
| f | w | w | f | w |
| f | f | w | f | w |

1. Spalte A → B nach der Grundtafel.
2. A ∧ (A → B) ist nur in Zeile 1 wahr.
3. Letzte Spalte: In Zeile 1 ist es w → w = w, in den anderen Zeilen ist die Voraussetzung f, also w.
4. Nur w: **Tautologie**. Nach Satz 1.3.1 gilt damit auch die Folgerung A ∧ (A → B) ⇒ B.

### Übung 10

- a) **A ∨ B ∧ C**. ∧ bindet stärker als ∨, die Klammer ist überflüssig.
- b) **A ∧ ¬B ∨ ¬(C ∧ D)**. Die linke Klammer fällt weg (∧ vor ∨). Die Klammer hinter ¬ muss bleiben, sonst würde nur C verneint.
- c) **(A ∨ B) ∧ (A ∨ C)** bleibt so. Ohne Klammern hieße es A ∨ (B ∧ A) ∨ C, etwas anderes.
- d) **¬A ∧ B → ¬(C ∨ D)**. → bindet schwächer als ∧ und ¬. Die äußere Klammer um ¬(C ∨ D) fällt weg, die innere bleibt.

### Übung 11

Zeilen in der Reihenfolge www, wwf, wfw, wff, fww, fwf, ffw, fff:

| A B C | www | wwf | wfw | wff | fww | fwf | ffw | fff |
|---|---|---|---|---|---|---|---|---|
| (A ∧ B) ∧ C | w | f | f | f | f | f | f | f |
| A ∧ (B ∧ C) | w | f | f | f | f | f | f | f |
| (A ∨ B) ∨ C | w | w | w | w | w | w | w | f |
| A ∨ (B ∨ C) | w | w | w | w | w | w | w | f |

Die Paare stimmen in allen 8 Zeilen überein. Die ↔-Spalte wäre jeweils überall w. Beide Gesetze gelten.

### Übung 12

Gleiche Reihenfolge:

| A B C | www | wwf | wfw | wff | fww | fwf | ffw | fff |
|---|---|---|---|---|---|---|---|---|
| A ∧ (B ∨ C) | w | w | w | f | f | f | f | f |
| (A ∧ B) ∨ (A ∧ C) | w | w | w | f | f | f | f | f |
| A ∨ (B ∧ C) | w | w | w | w | w | f | f | f |
| (A ∨ B) ∧ (A ∨ C) | w | w | w | w | w | f | f | f |

Jeweils in allen Zeilen gleich. Beide Distributivgesetze gelten.

### Übung 13

a) ¬(¬A ∧ ¬B)

1. ≡ ¬¬A ∨ ¬¬B (De Morgan)
2. ≡ **A ∨ B** (doppelte Negation)

b) (A ∧ B) ∨ (A ∧ ¬B)

1. ≡ A ∧ (B ∨ ¬B) (Distributivität rückwärts)
2. ≡ A ∧ w (Komplement)
3. ≡ **A** (Neutralität)

c) A ∨ (¬A ∧ B)

1. ≡ (A ∨ ¬A) ∧ (A ∨ B) (Distributivität, ∨ über ∧)
2. ≡ w ∧ (A ∨ B) (Komplement)
3. ≡ (A ∨ B) ∧ w (Kommutativität)
4. ≡ **A ∨ B** (Neutralität)

Probe c) mit A = f, B = w: Anfang f ∨ (w ∧ w) = w, Ende f ∨ w = w. Passt.

### Übung 14

1. „Durch 4 teilbar“ ist A.
2. Die Ausnahme „durch 100, aber nicht durch 400“ ist B ∧ ¬C.
3. „A, ausgenommen die Ausnahme“ heißt: A und nicht die Ausnahme. S ≡ A ∧ ¬(B ∧ ¬C).
4. De Morgan: ¬(B ∧ ¬C) ≡ ¬B ∨ ¬¬C.
5. Doppelte Negation: ≡ ¬B ∨ C.
6. Ergebnis: **S ≡ A ∧ (¬B ∨ C)**. Auf Deutsch: durch 4 teilbar und (nicht durch 100 oder durch 400).

Probe:

| Jahr | A | B | C | ¬B ∨ C | S |
|---|---|---|---|---|---|
| 2024 | w | f | f | w | **w** |
| 1900 | w | w | f | f | **f** |
| 2000 | w | w | w | w | **w** |

Zusätzlich mit Python für alle Jahre 1 bis 3000 gegen die Definition geprüft.

### Übung 15

Zeilen in der Reihenfolge ff, fw, wf, ww:

1. A ∧ ¬B: f, f, w, f = 0010 = 2, also k = 3: **g₃**.
2. ¬A: w, w, f, f = 1100 = 12, also k = 13: **g₁₃**.

### Übung 16

- a) **DNF**. Zwei Blöcke mit allen drei Variablen, innen ∧, außen ∨.
- b) **KNF**. Zwei Blöcke mit allen drei Variablen, innen ∨, außen ∧.
- c) **Keins von beiden**. Im Block A ∧ B fehlt C, er ist keine Vollkonjunktion.
- d) **KNF** mit nur einem Block: ¬A ∨ B ∨ ¬C ist eine Volldisjunktion. Als DNF gelesen wären ¬A, B, ¬C einzelne Blöcke, und die enthalten nicht alle Variablen.

### Übung 17

1. Wahrheitstafel von k = ¬A ∨ (¬B ∧ C). Ist A = f, ist ¬A = w und damit k = w. Ist A = w, entscheidet ¬B ∧ C.

| A | B | C | ¬B ∧ C | k | Vollkonjunktion |
|---|---|---|---|---|---|
| f | f | f | f | w | ¬A ∧ ¬B ∧ ¬C |
| f | f | w | w | w | ¬A ∧ ¬B ∧ C |
| f | w | f | f | w | ¬A ∧ B ∧ ¬C |
| f | w | w | f | w | ¬A ∧ B ∧ C |
| w | f | f | f | f | |
| w | f | w | w | w | A ∧ ¬B ∧ C |
| w | w | f | f | f | |
| w | w | w | f | f | |

2. Für jede w-Zeile die Vollkonjunktion: Wert w bleibt, Wert f wird verneint.
3. Mit ∨ verbinden:

k = (¬A ∧ ¬B ∧ ¬C) ∨ (¬A ∧ ¬B ∧ C) ∨ (¬A ∧ B ∧ ¬C) ∨ (¬A ∧ B ∧ C) ∨ (A ∧ ¬B ∧ C).

4. **Ja, die KNF wäre kürzer**: Es gibt nur drei f-Zeilen statt fünf w-Zeilen. Für jede f-Zeile eine Volldisjunktion (Wert w wird verneint, Wert f bleibt):

k = (¬A ∨ B ∨ C) ∧ (¬A ∨ ¬B ∨ C) ∧ (¬A ∨ ¬B ∨ ¬C).

Beide mit Python über alle 8 Belegungen geprüft.

### Übung 18

- a) **Ja, eine Formel.** A und B haben denselben Individuenbereich ℝ. Also ist A(x, y) ∧ B(x) eine Formel mit den freien Variablen x und y. ∀x bindet x, danach bindet ∀y das noch freie y.
- b) **Ja, eine Aussage**, denn jetzt sind alle Variablen gebunden. Auf Deutsch: „Für alle y und alle x gilt x² > y und x > 0.“ Sie ist **falsch**. Gegenbeispiel: x = 0, dann ist x > 0 falsch, egal welches y.

### Übung 19

(1) „Jede Quadratzahl ist gerade“:

1. „Jede … ist …“ heißt: für alle x, wenn x Quadratzahl, dann gerade.
2. **∀x (Q(x) → G(x))**.
3. Wert: **falsch**, Gegenbeispiel 9 (Quadratzahl, ungerade).

(2) „Es gibt eine Zahl, die alle Zahlen teilt“:

1. **∃x ∀y T(x, y)**.
2. Wert: **wahr**, x = 1 teilt jede Zahl.

(3) „Keine Zahl wird von allen Zahlen geteilt“:

1. „Es gibt eine Zahl y, die von allen x geteilt wird“ wäre ∃y ∀x T(x, y). „Keine“ verneint das: ¬(∃y ∀x T(x, y)).
2. Quantoren umdrehen: ≡ **∀y ∃x ¬T(x, y)**.
3. Wert: **wahr**. Zu jedem y nimm x = y + 1. Eine größere Zahl teilt y nicht.

Verneinung von (1):

1. ¬∀x (Q(x) → G(x)) ≡ ∃x ¬(Q(x) → G(x)).
2. Innen: ¬(Q → G) ≡ ¬(¬Q ∨ G) ≡ Q ∧ ¬G (Implikation als Oder, De Morgan, doppelte Negation).
3. **∃x (Q(x) ∧ ¬G(x))**: „Es gibt eine ungerade Quadratzahl.“ Wahr, die 9.

Verneinung von (2):

1. ¬∃x ∀y T(x, y) ≡ **∀x ∃y ¬T(x, y)**.
2. Auf Deutsch: „Zu jeder Zahl x gibt es ein y, das x nicht teilt.“ Falsch, denn x = 1 teilt alles. Passt: (2) war wahr, die Verneinung ist falsch.

### Übung 20

a) **Stimmt.** Muster Kontraposition:

1. Aus A ∧ ¬B → C folgt per Kontraposition ¬C → ¬(A ∧ ¬B).
2. ¬C ist gegeben, also gilt ¬(A ∧ ¬B) (Modus Ponens).
3. De Morgan: ¬(A ∧ ¬B) ≡ ¬A ∨ ¬¬B ≡ ¬A ∨ B (doppelte Negation).

Dieser Schluss („aus A → B und ¬B folgt ¬A“) heißt **Modus tollens**. Auch mit einer 8-Zeilen-Tafel prüfbar (mit Python geprüft).

b) **Stimmt.** Direkter Beweis:

1. ¬(A ∧ B) ∨ A ≡ ¬A ∨ ¬B ∨ A (De Morgan)
2. ≡ (A ∨ ¬A) ∨ ¬B (Kommutativität, Assoziativität)
3. ≡ w ∨ ¬B (Komplement)
4. ≡ w (Dominanz). Also eine Tautologie.

c) **Falsch.** Muster Gegenbeispiel: A = w, B = f. Dann ist A → B = w → f = f, aber B → A = f → w = w. Eine Belegung reicht.

### Übung 21

1. **Induktionsanfang** n = 1: links 1 + 2 = 3, rechts 2² − 1 = 4 − 1 = 3. ✓
2. **Induktionsannahme:** Für ein festes n gilt 1 + 2 + … + 2ⁿ = 2ⁿ⁺¹ − 1.
3. **Induktionsschluss:** Ziel ist 1 + 2 + … + 2ⁿ + 2ⁿ⁺¹ = 2ⁿ⁺² − 1.
   - 1 + 2 + … + 2ⁿ + 2ⁿ⁺¹ = **(2ⁿ⁺¹ − 1)** + 2ⁿ⁺¹ (← hier die Annahme)
   - = 2 · 2ⁿ⁺¹ − 1 (zweimal dasselbe)
   - = 2ⁿ⁺² − 1 ✓ (Potenzregel 2 · 2ᵐ = 2ᵐ⁺¹)

Zusätzlich für n = 1 bis 59 mit Python nachgerechnet. Das ist kein Beweis, nur eine Probe. Du kennst die Formel schon als endliche geometrische Reihe aus Kapitel 3.

### Übung 22

1. Wahrheitstafel, Zeilen www bis fff:

| A | B | C | A → B | (A → B) → C | B → C | A → (B → C) |
|---|---|---|---|---|---|---|
| w | w | w | w | w | w | w |
| w | w | f | w | f | f | f |
| w | f | w | f | w | w | w |
| w | f | f | f | w | w | w |
| f | w | w | w | w | w | w |
| f | w | f | w | **f** | f | **w** |
| f | f | w | w | w | w | w |
| f | f | f | w | **f** | w | **w** |

2. Vergleich: In den Zeilen (f, w, f) und (f, f, f) weichen die Spalten ab. **Nicht gleichwertig.** Beispiel A = f, B = f, C = f: (f → f) → f = w → f = f, aber f → (f → f) = w, denn aus Falschem folgt alles.
3. Folgerung: Bei Ketten mit → immer Klammern setzen. Genau das sagen die Vorrangregeln.
4. Mit Gesetzen:
   - A → (B → C) ≡ ¬A ∨ (¬B ∨ C) (zweimal Implikation als Oder)
   - ≡ (¬A ∨ ¬B) ∨ C (Assoziativität)
   - ≡ ¬(A ∧ B) ∨ C (De Morgan rückwärts)
   - ≡ A ∧ B → C (Implikation als Oder rückwärts)

Auf Deutsch: „Wenn A, dann (wenn B, dann C)“ heißt dasselbe wie „Wenn A und B, dann C“. Mit Python geprüft.

### Übung 23

a) M ist wahr, wenn mindestens zwei der drei w sind:

| A | B | C | M |
|---|---|---|---|
| w | w | w | w |
| w | w | f | w |
| w | f | w | w |
| w | f | f | f |
| f | w | w | w |
| f | w | f | f |
| f | f | w | f |
| f | f | f | f |

b) DNF aus den vier w-Zeilen (w bleibt, f wird verneint):

M = (A ∧ B ∧ C) ∨ (A ∧ B ∧ ¬C) ∨ (A ∧ ¬B ∧ C) ∨ (¬A ∧ B ∧ C).

KNF aus den vier f-Zeilen (w wird verneint, f bleibt):

M = (¬A ∨ B ∨ C) ∧ (A ∨ ¬B ∨ C) ∧ (A ∨ B ∨ ¬C) ∧ (A ∨ B ∨ C).

Probe für den ersten KNF-Block in seiner Zeile (w, f, f): ¬w ∨ f ∨ f = f ∨ f ∨ f = f. Richtig, diese Zeile wird verboten.

c) Vereinfachen. Der Block A ∧ B ∧ C passt zu allen drei anderen Blöcken (jeweils nur eine Variable verschieden). Verdopple ihn darum zweimal (Idempotenz):

1. (A ∧ B ∧ C) ∨ (A ∧ B ∧ ¬C) ≡ A ∧ B ∧ (C ∨ ¬C) ≡ A ∧ B
2. (A ∧ B ∧ C) ∨ (A ∧ ¬B ∧ C) ≡ A ∧ C ∧ (B ∨ ¬B) ≡ A ∧ C
3. (A ∧ B ∧ C) ∨ (¬A ∧ B ∧ C) ≡ B ∧ C ∧ (A ∨ ¬A) ≡ B ∧ C
4. Ergebnis: **M ≡ (A ∧ B) ∨ (A ∧ C) ∨ (B ∧ C)**. Auf Deutsch: Irgendein Paar stimmt zu.

DNF, KNF und Kurzform mit Python über alle 8 Belegungen geprüft.

### Übung 24

a) Vorgelesen: „Für jedes ε größer 0 gibt es ein n₀ aus ℕ, so dass für alle n ab n₀ gilt: Der Abstand von aₙ zu a ist kleiner als ε.“ Auf Deutsch: Egal wie klein du die Genauigkeit wählst, ab einem Platz liegen alle Glieder so nah an a.

b) Verneinen nach dem Rezept:

1. ¬(∀ε > 0 ∃n₀ ∀n ≥ n₀: |aₙ − a| < ε)
2. ∀ wird ∃: ∃ε > 0 ¬(∃n₀ ∀n ≥ n₀: |aₙ − a| < ε)
3. ∃ wird ∀: ∃ε > 0 ∀n₀ ¬(∀n ≥ n₀: |aₙ − a| < ε)
4. ∀ wird ∃: ∃ε > 0 ∀n₀ ∃n ≥ n₀ ¬(|aₙ − a| < ε)
5. Innen: ¬(… < ε) heißt ≥ ε.

**∃ε > 0 ∀n₀ ∈ ℕ ∃n ≥ n₀: |aₙ − a| ≥ ε**

Achtung: Die Bedingungen ε > 0 und n ≥ n₀ werden **nicht** verneint. Sie sagen nur, wo gesucht wird.

c) Auf Deutsch: „Es gibt einen Mindestabstand ε, so dass hinter jedem Platz n₀ noch ein Glied kommt, das mindestens ε von a entfernt ist.“ Die Folge kommt a also nie dauerhaft nahe. Beispiel aus Kapitel 2: aₙ = (−1)ⁿ und a = 1. Mit ε = 1 ist hinter jedem n₀ noch ein ungerades n mit |−1 − 1| = 2 ≥ 1.
