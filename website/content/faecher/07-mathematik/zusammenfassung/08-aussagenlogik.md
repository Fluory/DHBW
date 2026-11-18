Mit diesem Kapitel beginnt der zweite Teil von Mathematik I, „Logik und Algebra“. Die Logik ist die Sprache, in der alle späteren Kapitel geschrieben sind: Mengen, Relationen und Strukturen werden mit „für alle“, „es gibt“ und „wenn …, dann …“ definiert. Vieles kennst du aus Grundlagen der IT, nur mit w (wahr) und f (falsch) statt 1 und 0.

### Aussagen, Verknüpfungen und Wahrheitstafeln

Eine **Aussage** ist ein Satz, bei dem man sinnvoll fragen kann, ob er stimmt. Den Wert muss man nicht kennen. Aus Aussagen baust du größere mit vier Bausteinen. ¬A („nicht A“) dreht den Wert um. A ∧ B („A und B“) ist nur wahr, wenn beide wahr sind. A ∨ B („A oder B“) ist wahr, wenn mindestens eine wahr ist, also auch bei beiden. A ⊻ B („entweder A oder B“) ist wahr, wenn genau eine wahr ist. Eine **Wahrheitstafel** listet alle Belegungen auf. Bei n Variablen hat sie 2ⁿ Zeilen. Ausgewertet wird von innen nach außen, mit dem Vorrang ¬ vor ∧ vor ∨ vor → vor ↔.

### Implikation, Äquivalenz und Gleichwertigkeit

A → B („wenn A, dann B“) ist ein Versprechen. Es ist **nur** falsch, wenn A wahr und B falsch ist. Ist A falsch, ist A → B immer wahr. A ↔ B („genau dann, wenn“) ist wahr, wenn beide denselben Wert haben. Gleichwertig zu A → B sind die **Kontraposition** ¬B → ¬A und ¬A ∨ B. Der **Umkehrschluss** ¬A → ¬B ist es nicht, er ist ein Denkfehler.

Eine Formel ist **erfüllbar**, wenn in ihrer Ergebnisspalte mindestens ein w steht, eine **Tautologie** bei nur w und ein **Widerspruch** bei keinem w. F₁ ≡ F₂ heißt, beide Formeln haben in jeder Zeile denselben Wert. F₁ ⇒ F₂ heißt, F₁ → F₂ ist eine Tautologie. → und ↔ stehen also **in** einer Formel, ⇒ und ≡ sagen etwas **über** Formeln.

### Gesetze, boolesche Funktionen und Normalformen

Die **logischen Gesetze** sind Rechenregeln, mit denen du ohne Tafel umformst. Am wichtigsten sind De Morgan, ¬(A ∧ B) ≡ ¬A ∨ ¬B, die Distributivität in beide Richtungen, Komplement, Neutralität und Absorption. Jede Formel mit n Variablen beschreibt eine **boolesche Funktion**. Davon gibt es 2^(2ⁿ), bei zwei Variablen also 16. Aus jeder Tafel liest du eine **DNF** ab: Pro w-Zeile ein ∧-Block, die Blöcke werden mit ∨ verbunden. Die **KNF** verbietet dagegen jede f-Zeile mit einem ∨-Block, verbunden mit ∧. In der KNF wird eine Variable mit Wert w verneint.

### Quantoren und Beweise

Ein **Prädikat** ist ein Satz mit Lücke, etwa P(x) = „x ist gerade“. ∀x P(x) heißt „für alle x gilt P(x)“, ∃x P(x) heißt „es gibt mindestens ein x“. Beim Verneinen dreht sich jeder Quantor um: ¬∀x P(x) ≡ ∃x ¬P(x). Von den fünf Beweismustern ist die **vollständige Induktion** am wichtigsten. Sie hat drei Schritte: Anfang A(1), Annahme A(n) für ein festes n, Schluss auf A(n + 1) mit markierter Stelle, an der die Annahme eingesetzt wird.

### Ein Beispiel, das alles verbindet

Vereinfache F = ¬(A → B) ∨ B und bestimme die KNF. Zuerst schreibst du die Implikation als Oder: ¬(¬A ∨ B) ∨ B. Mit De Morgan und doppelter Negation wird daraus (A ∧ ¬B) ∨ B. Die Distributivität ergibt (A ∨ B) ∧ (¬B ∨ B). Nach dem Komplementgesetz ist ¬B ∨ B ≡ w, und mit Neutralität bleibt F ≡ A ∨ B. Die Tafel zeigt: F ist nur in der Zeile A = f, B = f falsch. Also ist F erfüllbar, aber keine Tautologie. Für die KNF nimmst du genau diese f-Zeile. Beide Variablen haben den Wert f und bleiben deshalb unverneint, der Block ist A ∨ B. Die DNF bräuchte drei Blöcke.

### Das musst du können

- Wahrheitstafeln für ¬, ∧, ∨, ⊻, → und ↔ aufstellen und Gleichwertigkeit Zeile für Zeile prüfen
- Kontraposition und Umkehrschluss unterscheiden; Tautologie, Widerspruch und erfüllbar erkennen
- Formeln mit den Gesetzen vereinfachen und jede Umformung benennen
- DNF und KNF aus einer Wahrheitstafel ablesen
- Sätze mit ∀ und ∃ formalisieren und verneinen
- einen Induktionsbeweis in drei Schritten führen
