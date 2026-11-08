---
title: "Folgen und ihre Grenzwerte"
order: 2
summary: "Bildungsgesetze, arithmetische und geometrische Folgen, Monotonie, Beschränktheit, Konvergenz und das Rezept „durch die höchste Potenz teilen“."
klausur: "relevant"
---

Eine Folge ist eine nummerierte Liste von Zahlen, die einer Regel folgt. Das ganze Kapitel dreht sich um eine Frage: Wohin läuft die Liste, wenn man immer weiter geht? Bevor man das beantworten kann, braucht man ein paar Begriffe: Bildungsgesetz, Monotonie und Beschränktheit. Jeder Begriff kommt hier zuerst als Bild und mit Zahlen, erst danach als Formel.

Ein Alltagsbeispiel: Du legst 1000 € zu 5 % an. Die Kontostände am Ende jedes Jahres, 1050; 1102,50; 1157,63; …, bilden eine Folge. Jedes Glied ist das vorige mal 1,05. Dieses Kapitel gehört zum ersten Termin (19.10., Folien „Analysis – Folgen“). Die Hausaufgaben F-1 bis F-6 wurden am 04.11. besprochen.

## Was ist eine Folge?

**In einem Satz:** Eine Folge ist eine Liste von Zahlen, bei der jede Zahl eine feste Platznummer hat.

**Stell dir vor:** eine Sitzreihe im Kino mit nummerierten Plätzen 1, 2, 3, 4 … Auf jedem Platz sitzt genau eine Zahl. Die Platznummer heißt **Index** (n). Die Zahl, die dort sitzt, heißt **Glied** (aₙ). Der Platz ist nie leer, und auf keinem Platz sitzen zwei Zahlen.

**Mit Zahlen:** Die Regel heißt „auf Platz n sitzt 1/n“:

| Platz n | 1 | 2 | 3 | 4 | 5 | 10 |
|---|---|---|---|---|---|---|
| Glied aₙ = 1/n | 1 | 0,5 | 0,333 | 0,25 | 0,2 | 0,1 |

Auf Platz 4 sitzt also a₄ = 0,25.

**Die Formel:** Eine Folge schreibt man aₙ = (Regel mit n).

- n ist die Platznummer: 1, 2, 3, … (manchmal beginnt man bei 0).
- aₙ (lies: „a n“) ist die Zahl auf Platz n.
- aₙ₊₁ (lies: „a n plus 1“) ist die Zahl auf dem nächsten Platz.

Die Regel heißt **Bildungsgesetz**. Es gibt sie in zwei Arten (F. 8–10):

| Art | Idee | Beispiel | Glieder |
|---|---|---|---|
| **explizit** | direkte Formel: Platznummer einsetzen, fertig | aₙ = n² | 1, 4, 9, 16, 25 |
| **rekursiv** | Startwert plus Regel „neues Glied aus dem alten“ | a₁ = 1, aₙ = n · aₙ₋₁ | 1, 2, 6, 24, 120 |

Bei der expliziten Form springst du direkt zu jedem Platz: a₅ = 5² = 25. Bei der rekursiven Form musst du dich Platz für Platz vorarbeiten, wie beim Durchzählen in der Sitzreihe: a₂ = 2 · 1 = 2, a₃ = 3 · 2 = 6, a₄ = 4 · 6 = 24, a₅ = 5 · 24 = 120.

Eine Folge mit dem Faktor (−1)ⁿ wechselt ständig das Vorzeichen: −, +, −, + … Sie heißt **alternierend** (F. 10).

**So steht es auf der Folie (F. 7):**

> Eine (reelle) Folge ist eine Funktion a: ℕ → ℝ, n ↦ aₙ.

Auf Deutsch heißt das: „Jeder Platznummer n aus 1, 2, 3, … (das ist ℕ) wird genau eine Zahl aₙ (aus ℝ, den Zahlen auf dem Zahlenstrahl) zugeordnet.“ Der Pfeil ↦ liest sich „wird zu“: Platz n wird zur Zahl aₙ. Wenn die Folie (aₙ)ₙ∈ℕ schreibt, meint sie die ganze Sitzreihe, nicht ein einzelnes Glied.

**So rechnest du** die ersten Glieder aus einem Bildungsgesetz, Beispiel aₙ = (−1)ⁿ · 3:

1. Setze n = 1 ein: (−1)¹ · 3 = −3.
2. Setze n = 2 ein: (−1)² · 3 = +3.
3. Setze n = 3 ein: (−1)³ · 3 = −3.
4. Schreib die Liste auf: −3, 3, −3, 3, …

Und umgekehrt, ein Bildungsgesetz finden:

1. Schreib die Platznummern n = 1, 2, 3 … über die Glieder.
2. Suche einen Zusammenhang zwischen Platz und Zahl (Quadrat? Zweierpotenz? Vorzeichenwechsel?).
3. Probe: Setze n = 1 und n = 2 in deine Formel ein. Es müssen die ersten Glieder herauskommen.

> [!IMPORTANT]
> **Das Wichtigste**
> Index n = Platznummer. Glied aₙ = Zahl auf diesem Platz. Explizit: direkt einsetzen. Rekursiv: Schritt für Schritt aus dem Vorgänger.

> [!WARNING]
> **Typischer Fehler**
> Index und Wert verwechseln. Bei aₙ = 1/n ist a₄ der 4. Platz, sein Wert ist 0,25, nicht 4.

## Arithmetische Folgen

**In einem Satz:** Bei einer arithmetischen Folge kommt jedes Mal dieselbe Zahl dazu.

**Stell dir vor:** Du hast 20 € im Sparschwein und wirfst jede Woche 5 € hinein. Jede Woche wächst der Inhalt um genau 5 €, nie mehr, nie weniger.

**Mit Zahlen:**

| Woche n | 1 | 2 | 3 | 4 | 5 | 10 |
|---|---|---|---|---|---|---|
| Inhalt aₙ | 20 | 25 | 30 | 35 | 40 | 65 |
| Differenz zum Vorgänger | – | 5 | 5 | 5 | 5 | … |

Für Woche 10 musst du nicht alle Wochen durchzählen: Von Woche 1 bis Woche 10 sind es 9 Einwürfe. 20 + 9 · 5 = 65.

**Die Formel:** aₙ = a₁ + (n − 1) · d.

- a₁ ist der Startwert (das erste Glied, hier 20 €).
- d ist die **Differenz**: die Zahl, die jedes Mal dazukommt (hier 5 €).
- n − 1 ist die Anzahl der Schritte bis Platz n. Auf Platz 1 hast du noch 0 Schritte gemacht.

Summe der ersten n Glieder: Sₙ = n/2 · (a₁ + aₙ). Idee: Erstes und letztes Glied zusammen sind genauso viel wie zweites und vorletztes. Bei 1 + 2 + … + 10 ist 1 + 10 = 11, 2 + 9 = 11 und so weiter, 5 Paare, also 55.

**So steht es auf der Folie (F. 30–31), sinngemäß:** „Arithmetische Folge: konstante Differenz d. aₙ = a₁ + (n − 1) · d, rekursiv aₙ₊₁ = aₙ + d.“

Auf Deutsch heißt das: „Das nächste Glied ist das jetzige plus d.“ Folienbeispiel a₁ = 3, d = 4: 3, 7, 11, 15, …

**So rechnest du** das Folienbeispiel:

1. Ablesen: a₁ = 3, d = 4.
2. Gesucht a₁₀. Schritte bis Platz 10: 10 − 1 = 9.
3. a₁₀ = 3 + 9 · 4 = 3 + 36 = 39.
4. Summe der ersten 10 Glieder: S₁₀ = 10/2 · (3 + 39) = 5 · 42 = 210.
5. Probe mit n = 1: a₁ = 3 + 0 · 4 = 3. Passt.

> [!IMPORTANT]
> **Das Wichtigste**
> Arithmetisch = immer dasselbe d dazu. Steht n einfach als Faktor da (3n + 1), ist die Folge arithmetisch.

> [!WARNING]
> **Typischer Fehler**
> In aₙ = a₁ + (n − 1) · d steht n − 1, nicht n. Das 10. Glied hat erst 9 Schritte hinter sich. Probe immer mit n = 1: Es muss a₁ herauskommen.

## Geometrische Folgen

**In einem Satz:** Bei einer geometrischen Folge wird jedes Mal mit derselben Zahl malgenommen.

**Stell dir vor:** In einer Schale liegt 1 Bakterium. Jede Stunde teilt sich jedes Bakterium in zwei. Die Zahl verdoppelt sich also jede Stunde. Am Anfang passiert wenig, dann explodiert es.

**Mit Zahlen:**

| Stunde n | 1 | 2 | 3 | 4 | 5 | 6 | 10 |
|---|---|---|---|---|---|---|---|
| Bakterien aₙ | 1 | 2 | 4 | 8 | 16 | 32 | 512 |
| Quotient zum Vorgänger | – | 2 | 2 | 2 | 2 | 2 | … |

Vergleich mit dem Sparschwein: Dort kommt jedes Mal dasselbe **dazu** (+5). Hier wird jedes Mal mit demselben **malgenommen** (· 2).

**Die Formel:** aₙ = a₁ · qⁿ⁻¹.

- a₁ ist das erste Glied (hier 1 Bakterium).
- q ist der **Quotient** (Faktor): die Zahl, mit der jedes Mal malgenommen wird (hier 2).
- n − 1 ist wieder die Anzahl der Schritte bis Platz n.

Summe der ersten n Glieder: Sₙ = a₁ · (qⁿ − 1)/(q − 1), nur für q ≠ 1.

**So steht es auf der Folie (F. 32–33), sinngemäß:** „Geometrische Folge: konstanter Quotient q. aₙ = a₁ · qⁿ⁻¹, rekursiv aₙ₊₁ = aₙ · q.“

Auf Deutsch heißt das: „Das nächste Glied ist das jetzige mal q.“ Folienbeispiel a₁ = 2, q = 3: 2, 6, 18, 54, …

**So rechnest du** das Folienbeispiel:

1. Ablesen: a₁ = 2, q = 3.
2. Gesucht a₈. Schritte: 8 − 1 = 7.
3. a₈ = 2 · 3⁷ = 2 · 2187 = 4374.
4. Summe der ersten 6 Glieder: S₆ = 2 · (3⁶ − 1)/(3 − 1) = 2 · (729 − 1)/2 = 728.
5. Probe zu Fuß: 2 + 6 + 18 + 54 + 162 + 486 = 728. Passt.

**Erkennungstest** für eine unbekannte Liste:

1. **Differenzen** bilden (Glied minus Vorgänger). Immer gleich → arithmetisch. 5, 8, 11, 14: Differenz 3.
2. **Quotienten** bilden (Glied geteilt durch Vorgänger). Immer gleich → geometrisch. 3, 6, 12, 24: Quotient 2.

| | arithmetisch (Sparschwein) | geometrisch (Bakterien) |
|---|---|---|
| Idee | immer dieselbe Zahl d dazu | immer mit derselben Zahl q mal |
| explizit | aₙ = a₁ + (n − 1) · d | aₙ = a₁ · qⁿ⁻¹ |
| Summe der ersten n Glieder | Sₙ = n/2 · (a₁ + aₙ) | Sₙ = a₁ · (qⁿ − 1)/(q − 1), q ≠ 1 |
| Folienbeispiel | 3, 7, 11, 15 … | 2, 6, 18, 54 … |

> [!IMPORTANT]
> **Das Wichtigste**
> Steht n im Exponenten einer festen Zahl (3 · 2ⁿ), ist die Folge geometrisch. Steht n einfach als Faktor da (3n + 1), ist sie arithmetisch.

> [!WARNING]
> **Typischer Fehler**
> Auch hier steht qⁿ⁻¹, nicht qⁿ. Probe n = 1: a₁ · q⁰ = a₁ · 1 = a₁. Passt nur mit n − 1.

## Monotonie

**In einem Satz:** Eine Folge ist monoton, wenn sie immer nur in eine Richtung geht: nur hoch oder nur runter.

**Stell dir vor:** eine Treppe. Bei einer monoton wachsenden Folge gehst du nur hinauf, nie hinunter. Ein Treppenabsatz (gleiche Höhe) ist erlaubt. Bei **streng** monoton wachsend muss jede Stufe echt höher sein, Absätze sind verboten. Eine Folge, die mal hoch und mal runter geht, ist wie eine Achterbahn: nicht monoton.

**Mit Zahlen:**

| n | 1 | 2 | 3 | 4 | 5 | Richtung |
|---|---|---|---|---|---|---|
| aₙ = n² | 1 | 4 | 9 | 16 | 25 | nur hoch: streng wachsend |
| bₙ = 1/n | 1 | 0,5 | 0,333 | 0,25 | 0,2 | nur runter: streng fallend |
| cₙ = (−1)ⁿ | −1 | 1 | −1 | 1 | −1 | hoch, runter, hoch: nicht monoton |
| eₙ = 7 | 7 | 7 | 7 | 7 | 7 | nur Absätze: wachsend und fallend, nicht streng |

**Die Formel:** Monoton wachsend heißt aₙ ≤ aₙ₊₁ für alle n.

- aₙ ist die jetzige Stufe, aₙ₊₁ die nächste.
- ≤ heißt „kleiner oder gleich“: Die nächste Stufe ist höher oder gleich hoch.
- „für alle n“: Das muss an jeder Stelle der Treppe gelten, nicht nur am Anfang.

| Begriff | Bedingung | Treppe |
|---|---|---|
| monoton wachsend | aₙ ≤ aₙ₊₁ | hoch oder gleich |
| streng monoton wachsend | aₙ < aₙ₊₁ | immer echt hoch |
| monoton fallend | aₙ ≥ aₙ₊₁ | runter oder gleich |
| streng monoton fallend | aₙ > aₙ₊₁ | immer echt runter |

**So steht es auf der Folie (F. 14), sinngemäß:** „monoton wachsend: aₙ ≤ aₙ₊₁ für alle n“.

Auf Deutsch heißt das: „Für jede Platznummer n ist das nächste Glied mindestens so groß wie das jetzige.“ Oft steht dabei noch n ∈ ℕ, gelesen „n aus den natürlichen Zahlen“, also n = 1, 2, 3, …

**So rechnest du** (der Differenz-Test): Rechne aus, wie hoch die nächste Stufe gegenüber der jetzigen ist.

1. Schreib aₙ₊₁ hin: Ersetze jedes n durch (n + 1). Mit Klammer!
2. Rechne aₙ₊₁ − aₙ aus und vereinfache.
3. Ist das Ergebnis für alle n > 0: streng wachsend. Ist es < 0: streng fallend. Wechselt das Vorzeichen: nicht monoton.

Durchgerechnet für aₙ = n²:

1. aₙ₊₁ = (n + 1)².
2. (n + 1)² − n² = n² + 2n + 1 − n² = 2n + 1.
3. Für n = 1, 2, 3 … ist 2n + 1 = 3, 5, 7 … immer positiv. Also streng wachsend.

Durchgerechnet für bₙ = 1/n:

1. bₙ₊₁ = 1/(n + 1).
2. 1/(n + 1) − 1/n. Gleicher Nenner n(n + 1): n/(n(n + 1)) − (n + 1)/(n(n + 1)) = −1/(n(n + 1)).
3. Oben −1, unten etwas Positives, also immer negativ. Streng fallend.

| Folge (F. 15) | aₙ₊₁ − aₙ | Ergebnis |
|---|---|---|
| aₙ = n² | 2n + 1 > 0 | streng wachsend |
| bₙ = 1/n | −1/(n(n + 1)) < 0 | streng fallend |
| cₙ = (−1)ⁿ | +2, −2, +2 … | nicht monoton |

> [!IMPORTANT]
> **Das Wichtigste**
> Monotonie = Vorzeichen von aₙ₊₁ − aₙ. Immer positiv: wachsend. Immer negativ: fallend.

> [!WARNING]
> **Typischer Fehler**
> Eine konstante Folge wie eₙ = 7 ist monoton wachsend **und** monoton fallend, aber nicht streng. Das war die Falle in F-2e. Und: Drei Glieder ausrechnen ist kein Beweis, du brauchst die Rechnung für alle n.

## Beschränktheit

**In einem Satz:** Eine Folge ist beschränkt, wenn sie nie über eine feste Grenze nach oben und nie unter eine feste Grenze nach unten kommt.

**Stell dir vor:** einen Raum mit Decke und Boden. Ein Ball springt darin herum. Egal wie er springt: Er stößt nie durch die Decke und fällt nie durch den Boden. Die Folge ist der Ball. Gibt es nur einen Boden, aber keine Decke (der Ball fliegt beliebig hoch), ist die Folge nur nach unten beschränkt.

**Mit Zahlen:**

| n | 1 | 2 | 3 | 4 | 5 | 100 | Boden | Decke |
|---|---|---|---|---|---|---|---|---|
| 1/n | 1 | 0,5 | 0,333 | 0,25 | 0,2 | 0,01 | 0 | 1 |
| n² | 1 | 4 | 9 | 16 | 25 | 10 000 | 1 | keine |
| (−1)ⁿ | −1 | 1 | −1 | 1 | −1 | 1 | −1 | 1 |

1/n und (−1)ⁿ sind beschränkt. n² ist nur nach unten beschränkt, also nicht beschränkt.

**Die Formel:** Beschränkt heißt: Es gibt eine Zahl C mit |aₙ| ≤ C für alle n.

- C ist eine feste Zahl, die du dir aussuchen darfst.
- |aₙ| ist der Betrag, also der Abstand des Glieds von 0.
- |aₙ| ≤ C heißt: Jedes Glied liegt zwischen −C (Boden) und C (Decke).

**So steht es auf der Folie (F. 16), sinngemäß:** „beschränkt: |aₙ| ≤ C für alle n“. In Symbolen schreibt man das auch ∃C ∈ ℝ ∀n ∈ ℕ: |aₙ| ≤ C.

Auf Deutsch heißt das: „Es gibt (∃) eine Zahl C, so dass für alle (∀) Platznummern n der Abstand des Glieds von 0 höchstens C ist.“ Die Folie spricht auch von einem „Streifen“: Alle Glieder liegen in einem Streifen zwischen −C und C.

**So rechnest du** (Beschränktheit prüfen):

1. Rechne die ersten Glieder aus und sieh dir an, ob die Folge hoch, runter oder hin und her geht.
2. Bei einer fallenden Folge ist das erste Glied die Decke. Bei einer wachsenden Folge ist das erste Glied der Boden.
3. Für die andere Grenze: Frag, wohin die Folge für große n läuft. Läuft sie gegen eine feste Zahl, ist das die zweite Grenze. Läuft sie gegen ∞, gibt es keine Decke.

Beispiel bₙ = 1 + 1/n: fallend (siehe Monotonie), also Decke b₁ = 2. Für große n wird 1/n winzig, die Glieder bleiben aber über 1. Boden 1. Also 1 < bₙ ≤ 2: beschränkt.

> [!IMPORTANT]
> **Das Wichtigste**
> Beschränkt = Decke **und** Boden. Bei einer fallenden Folge ist das erste Glied die Decke, bei einer wachsenden der Boden.

> [!WARNING]
> **Typischer Fehler**
> „Nach unten beschränkt“ reicht nicht für „beschränkt“. 2n − 1 hat den Boden 1, aber keine Decke. Damit ist die Folge nicht beschränkt.

## Grenzwert und Konvergenz

**In einem Satz:** Eine Folge konvergiert gegen eine Zahl a, wenn ihre Glieder dieser Zahl beliebig nahe kommen und dann auch dort bleiben.

**Stell dir vor:** Ein Läufer läuft auf eine Ziellinie zu. Mit jedem Schritt kommt er näher. Egal, welchen kleinen Abstand du dir vorstellst (1 Meter, 1 Zentimeter, 1 Millimeter): Irgendwann ist er näher dran und bleibt auch so nah. Die Ziellinie ist der **Grenzwert**. Wichtig: Es reicht nicht, dass er einmal nah dran ist und dann wieder wegläuft. Ab einem Zeitpunkt müssen **alle** weiteren Schritte so nah sein.

**Mit Zahlen:** aₙ = 1 − 1/n läuft auf die Ziellinie 1 zu:

| n | 1 | 2 | 10 | 100 | 1000 |
|---|---|---|---|---|---|
| aₙ = 1 − 1/n | 0 | 0,5 | 0,9 | 0,99 | 0,999 |
| Abstand zu 1 | 1 | 0,5 | 0,1 | 0,01 | 0,001 |

Jetzt das Spiel der Definition. Jemand gibt dir eine Genauigkeit vor, die heißt ε (Epsilon). Du suchst den Platz n₀, ab dem der Abstand kleiner als ε ist. Der Abstand ist 1/n, und 1/n < ε gilt, sobald n > 1/ε:

| geforderte Genauigkeit ε | ab Platz n₀ | Abstand dort |
|---|---|---|
| 0,1 | 11 | 1/11 ≈ 0,091 |
| 0,01 | 101 | 1/101 ≈ 0,0099 |
| 0,001 | 1001 | 1/1001 ≈ 0,000999 |

Für jedes noch so kleine ε findest du ein n₀. Genau das heißt „konvergent“.

**Die Formel:** lim (n → ∞) aₙ = a.

- lim heißt „Limes“ (lateinisch für Grenze).
- n → ∞ heißt „n wird immer größer“.
- a ist die Ziellinie, der **Grenzwert**.
- Ganz gelesen: „Der Grenzwert von aₙ für n gegen unendlich ist a.“

**So steht es auf der Folie (F. 20):**

> ∀ε > 0 ∃n₀ ∈ ℕ: |aₙ − a| < ε für alle n ≥ n₀

Auf Deutsch heißt das, Symbol für Symbol:

| Symbol | vorgelesen | gemeint |
|---|---|---|
| ∀ε > 0 | „für jedes ε größer 0“ | egal, welche Genauigkeit jemand verlangt |
| ∃n₀ ∈ ℕ | „gibt es eine Platznummer n₀“ | du findest einen Platz in der Reihe |
| \|aₙ − a\| < ε | „Abstand von aₙ zu a kleiner ε“ | das Glied ist näher als ε an der Ziellinie |
| für alle n ≥ n₀ | „für alle Plätze ab n₀“ | und das gilt für jeden späteren Platz auch |

Zusammen: „Egal, wie genau du es haben willst, ab einem Platz liegen **alle** späteren Glieder so nah an a.“

**Divergent** heißt: nicht konvergent. Es gibt zwei Arten (F. 21):

| Art | Bild | Beispiel | Zahlen |
|---|---|---|---|
| **bestimmt divergent** | der Läufer rennt immer weiter weg, in eine Richtung | n² → +∞ | 1, 4, 9, 16, 25 |
| **unbestimmt divergent** | der Läufer springt hin und her, ohne Ziel | (−1)ⁿ | −1, 1, −1, 1 |

Eine Folge mit Grenzwert 0 heißt **Nullfolge**. Die wichtigsten: 1/n → 0 und qⁿ → 0 für |q| < 1 (zum Beispiel 0,5; 0,25; 0,125; …).

**Drei Sätze von der Folie (F. 25):**

1. Eine Folge hat höchstens einen Grenzwert. (Ein Läufer kann nicht gleichzeitig auf zwei Ziellinien zulaufen.)
2. Jede konvergente Folge ist beschränkt. (Wer auf eine Ziellinie zuläuft, bleibt in deren Nähe.)
3. Beschränkt **und** monoton ⇒ konvergent. (Wer nur hochsteigt und an eine Decke stößt, muss irgendwo zur Ruhe kommen.)

**So rechnest du** (Grenzwert vermuten und prüfen):

1. Rechne Glieder für n = 10, 100, 1000 aus.
2. Sieh nach, ob sie sich einer Zahl nähern.
3. Rechne den Abstand zu dieser Zahl aus, als Formel in n.
4. Prüfe, ob dieser Abstand → 0 geht.

> [!IMPORTANT]
> **Das Wichtigste**
> Konvergenz betrifft „fast alle“ Glieder, nicht einzelne. Am Anfang darf die Folge machen, was sie will. Es zählt nur, wo sie am Ende bleibt.

> [!WARNING]
> **Typischer Fehler**
> Die Sätze gelten nur in eine Richtung. (−1)ⁿ ist beschränkt, aber divergent. „Beschränkt“ allein reicht nicht für Konvergenz, es braucht zusätzlich Monotonie. Und „bestimmt divergent“ ist divergent: ∞ ist kein Grenzwert im Sinn der Konvergenz.

## Grenzwerte berechnen

**In einem Satz:** Wenn n riesig wird, zählt in einer Formel nur noch der stärkste Teil, der Rest wird unwichtig.

**Stell dir vor:** Du hast ein Konto mit 2 Millionen € und findest 3 € auf der Straße. Für deinen Kontostand ist das egal. Genauso ist es mit Potenzen von n: Bei n = 1000 ist n² eine Million, n ist tausend, und eine feste Zahl wie 3 ist fast nichts. Der Teil mit der höchsten Potenz bestimmt alles.

**Mit Zahlen:** cₙ = (2n² − 3)/(n² + n + 1). Erst einzeln, wie groß die Teile sind:

| n | 2n² | −3 | n² | n | 1 |
|---|---|---|---|---|---|
| 10 | 200 | −3 | 100 | 10 | 1 |
| 100 | 20 000 | −3 | 10 000 | 100 | 1 |
| 1000 | 2 000 000 | −3 | 1 000 000 | 1000 | 1 |

Oben zählt nur 2n², unten nur n². Also sollte der Bruch gegen 2n²/n² = 2 laufen. Prüfen:

| n | Zähler 2n² − 3 | Nenner n² + n + 1 | cₙ |
|---|---|---|---|
| 10 | 197 | 111 | ≈ 1,775 |
| 100 | 19 997 | 10 101 | ≈ 1,980 |
| 1000 | 1 999 997 | 1 001 001 | ≈ 1,998 |

Die Werte laufen gegen 2.

**Die Formel (Rechenregeln, F. 26):** Wenn aₙ → a und bₙ → b, darf man Grenzwerte „durchrechnen“:

- aₙ + bₙ → a + b und aₙ − bₙ → a − b
- aₙ · bₙ → a · b, und c · aₙ → c · a für eine feste Zahl c
- aₙ/bₙ → a/b, aber nur, wenn b ≠ 0

Beispiel: 1/n + 2/n² → 0 + 0 = 0.

**So steht es auf der Folie (F. 27–29), sinngemäß:** „Standardtrick bei Brüchen von Polynomen: durch die höchste Potenz des Nenners kürzen.“

Auf Deutsch heißt das: Ein **Polynom** ist eine Summe aus Potenzen von n mit Zahlen davor, etwa 2n² − 3. Die **höchste Potenz** ist der größte Exponent, hier n². Du teilst jeden einzelnen Summanden oben und unten durch diese Potenz. Dann bleibt der stärkste Teil als Zahl übrig, alles andere wird zu „Zahl/n“ und verschwindet.

### So rechnest du: durch die höchste Potenz teilen

Beispiel (F. 27): cₙ = (2n² − 3)/(n² + n + 1).

1. Suche die höchste Potenz von n im Nenner: n².
2. Teile jeden Summanden oben und unten durch n²:
   - oben: 2n²/n² − 3/n² = 2 − 3/n²
   - unten: n²/n² + n/n² + 1/n² = 1 + 1/n + 1/n²
3. Jeder Rest der Form Zahl/nᵖ geht gegen 0: 3/n² → 0, 1/n → 0, 1/n² → 0.
4. Rest ausrechnen: (2 − 0)/(1 + 0 + 0) = 2/1 = 2.
5. Probe mit n = 1000: 1 999 997/1 001 001 ≈ 1,998. Passt.

Daraus folgt eine Abkürzung über den **Grad** (die höchste Potenz):

| Fall | Ergebnis | Beispiel | n = 10 | n = 1000 |
|---|---|---|---|---|
| Zählergrad = Nennergrad | Quotient der Vorzahlen | (3n² + 2)/(6n² − n) → 3/6 = 1/2 | ≈ 0,512 | ≈ 0,500 |
| Zählergrad < Nennergrad | 0 | (−5n + 1)/(4n² − 7) → 0 | ≈ −0,125 | ≈ −0,00125 |
| Zählergrad > Nennergrad | +∞ oder −∞ | (n³ − 1)/(2n² + 5) → +∞ | ≈ 4,9 | ≈ 500 |

Ohne Bruch gilt dasselbe: Klammere die höchste Potenz aus. −7n³ + 4n² + 10 = n³ · (−7 + 4/n + 10/n³). Die Klammer → −7, n³ → ∞, zusammen → −∞. Probe n = 10: −7000 + 400 + 10 = −6590.

> [!IMPORTANT]
> **Das Wichtigste**
> Bei riesigem n zählt nur der stärkste Term. Bei Brüchen aus Potenzen entscheidet der Grad: gleich → Vorzahlen teilen, unten größer → 0, oben größer → ±∞.

> [!WARNING]
> **Typischer Fehler**
> Erst zusammenfassen, dann den Grad ablesen. In F-4c gehören −1 und −7 im Zähler zusammen zu −8. Und nicht nur einen Summanden teilen: **jeder** Summand oben und unten wird durch dieselbe Potenz geteilt.

## Übungen

> [!TIP]
> **Übung 1 · leicht**
> Geben Sie ein Bildungsgesetz für jede Folge an: a) 9, 9, 9, … · b) 2, 4, 8, 16, 32, … · c) −3, 3, −3, 3, … · d) 1, 1/4, 1/9, 1/16, …
>
> Quelle: Folien „Folgen“, Aufgabe F-1 (F. 13)

> [!TIP]
> **Übung 2 · mittel**
> Geben Sie die ersten 5 Glieder an. Ist die Folge (streng) monoton? Ist sie beschränkt? a) aₙ = 2n − 1 · b) bₙ = 1 + 1/n · c) cₙ = (−1)ⁿ · 2n · d) d₁ = 2, dₙ = dₙ₋₁ + 3 · e) eₙ = 7
>
> Quelle: Folien „Folgen“, Aufgabe F-2 (F. 19)

> [!TIP]
> **Übung 3 · mittel**
> Ist die Folge bestimmt divergent? Bestimmen Sie dann +∞ oder −∞. a) aₙ = ln(n) + 4n² − 16e⁻ⁿ · b) bₙ = 4 − 1/n − n³ · c) cₙ = −7n³ + 4n² + 10 · d) dₙ = eⁿ(1 − 1/n)²
>
> Quelle: Folien „Folgen“, Aufgabe F-3 (F. 28)

> [!TIP]
> **Übung 4 · Prüfungsniveau**
> Bestimmen Sie den Grenzwert (auch ±∞): a) aₙ = (1 − (½)ⁿ)/(3n²) · b) bₙ = 4 · (e⁻ⁿ + 3) + n² · c) cₖ = (8k³ − 1 − 4k² − 7)/(6k³ + 2k − 1) · d) fₙ = (3n² + 1)/(n · ln n) · e) gₙ = −n² · ln(n) + 3
>
> Quelle: Folien „Folgen“, Aufgabe F-4 (F. 29), Auswahl

> [!TIP]
> **Übung 5 · mittel**
> Die Heron-Folge Hₙ₊₁ = ½ · (Hₙ + x/Hₙ) konvergiert gegen √x. Berechnen Sie H₁ bis H₃ für x = 5 mit Startwert H₀ = 2. Wie nah ist H₃ an √5?
>
> Quelle: Folien „Folgen“, Aufgabe F-5 (F. 34)

> [!TIP]
> **Übung 6 · mittel**
> Fibonacci: F₀ = 0, F₁ = 1, Fₙ₊₁ = Fₙ + Fₙ₋₁. Berechnen Sie die Glieder bis F₁₀ und die Quotienten Fₙ₊₁/Fₙ für n = 1 bis 9. Vergleichen Sie mit (1 + √5)/2 ≈ 1,618.
>
> Quelle: Folien „Folgen“, Aufgabe F-6 (F. 35)

## Lösungen

Die Lösungen sind selbst nachgerechnet. Die Besprechung in der Vorlesung kann in der Schreibweise abweichen.

### Übung 1

Trick: Schreib die Platznummer n = 1, 2, 3 … über die Glieder.

a) Auf jedem Platz sitzt 9. Also aₙ = 9 (konstante Folge).

b)

| n | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Glied | 2 | 4 | 8 | 16 | 32 |
| als Potenz | 2¹ | 2² | 2³ | 2⁴ | 2⁵ |

Der Exponent ist genau die Platznummer: aₙ = 2ⁿ. Rekursiv: a₁ = 2, aₙ₊₁ = 2 · aₙ.

c) Der Betrag ist immer 3. Das Vorzeichen wechselt und beginnt auf Platz 1 mit Minus. (−1)ⁿ ist bei n = 1 gleich −1, bei n = 2 gleich +1. Also aₙ = (−1)ⁿ · 3. Probe n = 1: −3. n = 2: +3. Passt.

d)

| n | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| Glied | 1 | 1/4 | 1/9 | 1/16 |
| Nenner | 1² | 2² | 3² | 4² |

Also aₙ = 1/n².

### Übung 2

a) aₙ = 2n − 1:

1. Glieder: 2 · 1 − 1 = 1, dann 3, 5, 7, 9.
2. aₙ₊₁ = 2(n + 1) − 1 = 2n + 1.
3. aₙ₊₁ − aₙ = (2n + 1) − (2n − 1) = 2 > 0: streng wachsend.
4. Boden 1 (erstes Glied einer wachsenden Folge). Eine Decke gibt es nicht, die Glieder wachsen um 2 pro Platz ohne Ende. Also nicht beschränkt.

b) bₙ = 1 + 1/n:

1. Glieder: 2; 1,5; 1,333; 1,25; 1,2.
2. bₙ₊₁ − bₙ = (1 + 1/(n + 1)) − (1 + 1/n) = 1/(n + 1) − 1/n = −1/(n(n + 1)) < 0: streng fallend.
3. Decke b₁ = 2. Boden 1, denn 1/n ist immer positiv. 1 < bₙ ≤ 2: beschränkt.

c) cₙ = (−1)ⁿ · 2n:

1. Glieder: (−1) · 2 = −2, dann (+1) · 4 = 4, −6, 8, −10.
2. Es geht runter, hoch, runter: nicht monoton.
3. Der Betrag |cₙ| = 2n wächst ohne Grenze (2, 4, 6, 8, 10, …): nicht beschränkt.

d) d₁ = 2, dₙ = dₙ₋₁ + 3:

1. Glieder: 2, 2 + 3 = 5, 5 + 3 = 8, 11, 14.
2. Es kommt immer 3 dazu: arithmetisch mit d = 3. Explizit dₙ = 2 + (n − 1) · 3 = 3n − 1. Probe n = 1: 2. Passt.
3. dₙ₊₁ − dₙ = 3 > 0: streng wachsend.
4. Boden 2, keine Decke. Nicht beschränkt.

e) eₙ = 7:

1. Glieder: 7, 7, 7, 7, 7.
2. eₙ₊₁ − eₙ = 0. Das ist ≥ 0 und ≤ 0, also monoton wachsend und fallend. Nicht streng, weil nicht echt > 0 oder < 0.
3. Boden und Decke 7: beschränkt.

### Übung 3

Vorgehen: Jeden Baustein einzeln ansehen, dann den stärksten finden.

a) aₙ = ln(n) + 4n² − 16e⁻ⁿ:

1. ln n → ∞ (langsam).
2. 4n² → ∞ (schnell).
3. 16e⁻ⁿ = 16/eⁿ → 0.
4. ∞ + ∞ − 0 → +∞. Probe n = 10: ≈ 402.

b) bₙ = 4 − 1/n − n³:

1. 4 bleibt 4. 1/n → 0. n³ → ∞.
2. 4 − 0 − ∞ → −∞. Probe n = 10: 4 − 0,1 − 1000 = −996,1.

c) cₙ = −7n³ + 4n² + 10: Das ist „−∞ + ∞“, also unbestimmt. Darum ausklammern:

1. Höchste Potenz n³ ausklammern: n³ · (−7 + 4/n + 10/n³).
2. 4/n → 0 und 10/n³ → 0, also Klammer → −7.
3. n³ → ∞ mal −7 → −∞. Probe n = 10: −7000 + 400 + 10 = −6590.

d) dₙ = eⁿ(1 − 1/n)²:

1. 1/n → 0, also (1 − 1/n)² → 1² = 1.
2. eⁿ → ∞.
3. ∞ · 1 → +∞.

Alle vier sind bestimmt divergent.

### Übung 4

a) aₙ = (1 − (½)ⁿ)/(3n²):

1. Zähler: (½)ⁿ → 0, also Zähler → 1 − 0 = 1.
2. Nenner: 3n² → ∞.
3. „1/∞“ → 0. Probe n = 10: ≈ 0,0033.

b) bₙ = 4 · (e⁻ⁿ + 3) + n²:

1. e⁻ⁿ → 0, also 4 · (0 + 3) = 12.
2. n² → ∞.
3. 12 + ∞ → +∞. Probe n = 10: ≈ 112.

c) cₖ = (8k³ − 1 − 4k² − 7)/(6k³ + 2k − 1):

1. Zähler zusammenfassen: −1 − 7 = −8, also (8k³ − 4k² − 8)/(6k³ + 2k − 1).
2. Höchste Potenz im Nenner: k³.
3. Jeden Summanden durch k³ teilen: (8 − 4/k − 8/k³)/(6 + 2/k² − 1/k³).
4. Alle Reste → 0: 8/6 = 4/3.
5. Probe k = 1000: ≈ 1,3327. 4/3 ≈ 1,3333. Passt.

d) fₙ = (3n² + 1)/(n · ln n):

1. Oben und unten durch n teilen: (3n + 1/n)/ln n.
2. 1/n → 0. Es bleibt ungefähr 3n/ln n.
3. n wächst viel schneller als ln n (ln 1000 ≈ 6,9). → +∞.
4. Probe n = 1000: ≈ 434.

e) gₙ = −n² · ln(n) + 3:

1. n² → ∞ und ln n → ∞, also n² · ln n → ∞.
2. Mit dem Minus davor → −∞.
3. +3 ändert daran nichts. Probe n = 10: ≈ −227.

### Übung 5

Setze x = 5 und den Startwert H₀ = 2 ein.

1. H₁ = ½ · (2 + 5/2) = ½ · (2 + 2,5) = ½ · 4,5 = 2,25.
2. H₂ = ½ · (2,25 + 5/2,25) = ½ · (2,25 + 2,2222…) = ½ · 4,4722… = 2,2361111…
3. H₃ = ½ · (2,2361111 + 5/2,2361111) = ½ · (2,2361111 + 2,2360248) = 2,2360679779…

| n | Hₙ | Abstand zu √5 |
|---|---|---|
| 0 | 2 | ≈ 0,236 |
| 1 | 2,25 | ≈ 0,014 |
| 2 | 2,2361111 | ≈ 0,000043 |
| 3 | 2,2360679779 | ≈ 0,0000000004 |

√5 = 2,2360679775… Der Abstand von H₃ ist nur noch etwa 0,0000000004. Die Zahl der richtigen Stellen verdoppelt sich ungefähr mit jedem Schritt.

### Übung 6

Jedes Glied ist die Summe der beiden vorigen:

| n | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Fₙ | 0 | 1 | 1 | 2 | 3 | 5 | 8 | 13 | 21 | 34 | 55 |

Zum Beispiel F₂ = 1 + 0 = 1, F₃ = 1 + 1 = 2, F₄ = 2 + 1 = 3, F₁₀ = 34 + 21 = 55.

Quotienten:

| n | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|
| Rechnung | 1/1 | 2/1 | 3/2 | 5/3 | 8/5 | 13/8 | 21/13 | 34/21 | 55/34 |
| Fₙ₊₁/Fₙ | 1 | 2 | 1,5 | 1,667 | 1,6 | 1,625 | 1,615 | 1,619 | 1,6176 |

Die Quotienten liegen abwechselnd über und unter 1,618 und kommen immer näher. Die Quotientenfolge ist nicht monoton, aber konvergent gegen den Goldenen Schnitt.
