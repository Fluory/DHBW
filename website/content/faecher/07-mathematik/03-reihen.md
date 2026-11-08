---
title: "Reihen"
order: 3
summary: "Partialsummen, die geometrische Reihe, Periodenzahlen, das Divergenzkriterium, die harmonische Reihe, Σ 1/kᵖ, das Quotientenkriterium und die Teleskopsumme."
klausur: "relevant"
---

Eine Reihe entsteht, wenn man die Glieder einer Folge aufaddiert: a₁ + a₂ + a₃ + …, und zwar unendlich lange. Die große Frage ist: Kommt dabei eine endliche Zahl heraus? Manchmal ja (½ + ¼ + ⅛ + … = 1), manchmal nein (1 + ½ + ⅓ + … wird unendlich groß).

Ein Alltagsbeispiel: Du isst eine halbe Pizza. Dann die Hälfte vom Rest (¼), dann wieder die Hälfte vom Rest (⅛), und so weiter. Unendlich viele Stücke, aber zusammen nie mehr als eine Pizza. Dieses Kapitel gehört zum Termin am 04.11. (Folien „Analysis – Reihen + Funktionen“). Es baut direkt auf Kapitel 2 auf: Eine Reihe ist am Ende wieder eine Folge, nämlich die Folge der Zwischensummen.

## Partialsummen und Konvergenz

**In einem Satz:** Bei einer Reihe zählst du immer weiter Zahlen zusammen und schaust, ob der Gesamtbetrag sich bei einer festen Zahl einpendelt.

**Stell dir vor:** ein Konto. Jeden Monat kommt eine Einzahlung dazu. Die Einzahlungen sind die Glieder aₖ. Der Kontostand nach n Monaten ist die **Partialsumme** sₙ (Teilsumme): alles, was bis dahin eingezahlt wurde. Die Frage der Reihe lautet: Wächst der Kontostand ohne Ende, oder nähert er sich einem festen Betrag?

**Mit Zahlen:** Die Einzahlungen halbieren sich jeden Monat: ½ €, ¼ €, ⅛ € …

| Monat n | Einzahlung aₙ = (½)ⁿ | Kontostand sₙ | was bis 1 € fehlt |
|---|---|---|---|
| 1 | 0,5 | 0,5 | 0,5 |
| 2 | 0,25 | 0,75 | 0,25 |
| 3 | 0,125 | 0,875 | 0,125 |
| 4 | 0,0625 | 0,9375 | 0,0625 |
| 5 | 0,03125 | 0,96875 | 0,03125 |

Der Kontostand kommt der 1 immer näher. Was fehlt, halbiert sich jedes Mal. Der Wert der Reihe ist 1.

Jetzt ein Konto, bei dem die Einzahlungen wachsen: 1 €, 2 €, 4 €, 8 € …

| Monat | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Einzahlung 2ᵏ (ab k = 0) | 1 | 2 | 4 | 8 | 16 | 32 |
| Kontostand | 1 | 3 | 7 | 15 | 31 | 63 |

Der Kontostand wächst ohne Ende. Diese Reihe ist divergent.

**Die Formel:** sₙ = Σₖ₌₁ⁿ aₖ, und die Reihe ist Σₖ₌₁^∞ aₖ = lim (n → ∞) sₙ.

- aₖ ist die k-te Einzahlung (das k-te Glied).
- sₙ ist der Kontostand nach n Einzahlungen.
- Σₖ₌₁^∞ aₖ ist der Kontostand „am Ende von unendlich vielen Einzahlungen“, also der Grenzwert der Kontostände.

Hat die Folge sₙ einen endlichen Grenzwert s, heißt die Reihe **konvergent** mit Wert s. Sonst ist sie **divergent**.

**So steht es auf der Folie, sinngemäß:** „s₀ = a₀, s₁ = a₀ + a₁, … allgemein sₙ = Σₖ₌₀ⁿ aₖ. Kommen die Teilsummen einer Zahl s beliebig nahe, heißt die Reihe konvergent mit Summe s = lim sₙ.“

Auf Deutsch heißt das: „Schreib die Kontostände nacheinander auf. Diese Kontostände sind eine Folge. Hat diese Folge einen Grenzwert (Kapitel 2), dann ist das der Wert der Reihe.“

Bei den meisten Reihen kann man den Wert gar nicht ausrechnen. Ein **Konvergenzkriterium** ist ein Test, der nur die Ja/Nein-Frage beantwortet: Gibt es einen endlichen Wert? Darum steht bei R-1 und R-4: „Ein Grenzwert braucht nicht angegeben zu werden.“

Für konvergente Reihen gelten Rechenregeln (Folie „Rechenregeln“): Konstante Faktoren darf man vor die Summe ziehen, und Σ(aₖ ± bₖ) = Σaₖ ± Σbₖ. Folienbeispiel: Σₖ₌₁^∞ 6/k² = 6 · Σ 1/k² = 6 · π²/6 = π² ≈ 9,87.

**So rechnest du** die ersten Partialsummen:

1. Schreib die ersten Glieder a₁, a₂, a₃, a₄ auf.
2. s₁ = a₁.
3. Jede nächste Partialsumme = vorige Partialsumme + neues Glied.
4. Sieh nach: Nähern sich die sₙ einer Zahl oder wachsen sie ohne Ende?

> [!IMPORTANT]
> **Das Wichtigste**
> Zwei verschiedene Folgen: die Einzahlungen aₖ und die Kontostände sₙ. Der Wert der Reihe ist der Grenzwert der Kontostände.

> [!WARNING]
> **Typischer Fehler**
> „Die Glieder gehen gegen 0, also ist die Reihe 0“ ist falsch. Die Einzahlungen ½, ¼, ⅛ gehen gegen 0, der Kontostand geht gegen 1. Rechenregeln nur bei konvergenten Reihen: Die Folie zeigt, dass man für 1 + 2 + 4 + … sonst den Unsinn „= −1“ herausbekommt (tut man so, als gäbe es x = 1 + 2 + 4 + …, dann wäre x = 1 + 2x, also x = −1).

## Die geometrische Reihe

**In einem Satz:** Eine geometrische Reihe zählt Zahlen zusammen, bei denen jede nächste Zahl das q-fache der vorigen ist.

**Stell dir vor:** die Pizza von oben. Du isst ½, dann ¼, dann ⅛. Jedes Stück ist halb so groß wie das vorige, also q = ½. Weil nach jedem Stück genau die Hälfte vom Rest übrig bleibt, wirst du nie mehr als die ganze Pizza essen. Wäre jedes Stück dagegen doppelt so groß wie das vorige (q = 2), wäre bald keine Pizza der Welt groß genug.

**Mit Zahlen:** drei Werte für q, jeweils ab k = 0 (erstes Glied 1):

| n | Σₖ₌₀ⁿ (½)ᵏ | Σₖ₌₀ⁿ (⅓)ᵏ | Σₖ₌₀ⁿ 2ᵏ |
|---|---|---|---|
| 0 | 1 | 1 | 1 |
| 1 | 1,5 | 1,333 | 3 |
| 2 | 1,75 | 1,444 | 7 |
| 3 | 1,875 | 1,481 | 15 |
| 4 | 1,9375 | 1,494 | 31 |
| 5 | 1,96875 | 1,498 | 63 |
| wohin? | → 2 | → 1,5 | → ∞ |

Bei q = ½ geht es gegen 2, bei q = ⅓ gegen 1,5, bei q = 2 ohne Ende nach oben.

**Die Formel:** für endlich viele Glieder (k = 0 bis n), so stand es an der Tafel:

Σₖ₌₀ⁿ v₀ · qᵏ = v₀ · (1 − qⁿ⁺¹)/(1 − q), für q ≠ 1

- v₀ ist das erste Glied (bei k = 0).
- q ist der Faktor, mit dem jedes Mal malgenommen wird.
- n ist der letzte Index, also gibt es n + 1 Summanden.

Probe: Σₖ₌₀⁴ 2ᵏ = 1 + 2 + 4 + 8 + 16 = 31, und (1 − 2⁵)/(1 − 2) = (1 − 32)/(−1) = 31. Passt.

Für n → ∞ und |q| < 1 geht qⁿ⁺¹ → 0 (Kapitel 1: eine Zahl zwischen −1 und 1 hoch riesig wird winzig). Dann bleibt v₀ · 1/(1 − q). Kurz:

**Wert = erstes Glied/(1 − q)**, nur für |q| < 1. Für |q| ≥ 1 divergiert die Reihe.

- |q| < 1 liest du „Betrag von q kleiner 1“, also −1 < q < 1.
- „erstes Glied“ ist das Glied am Startindex, nicht immer 1.

Probe mit der Tabelle: q = ½, erstes Glied 1: 1/(1 − ½) = 1/½ = 2. q = ⅓: 1/(1 − ⅓) = 1/(2/3) = 3/2 = 1,5. Passt beides.

**So steht es auf der Folie:**

> Σₖ₌₀^∞ qᵏ = 1/(1 − q) für |q| < 1

Auf Deutsch heißt das: „Die Summe von k gleich 0 bis unendlich über q hoch k ist 1 geteilt durch (1 minus q), aber nur, wenn q zwischen −1 und 1 liegt.“ Startet die Summe nicht bei k = 0, sagt die Folie: erstes Glied/(1 − q).

### So rechnest du: Rezept in vier Schritten

1. **Erkennen:** k steht im Exponenten einer festen Zahl. Vorher zusammenfassen: 2ᵏ/3ᵏ = (⅔)ᵏ.
2. **q ablesen und prüfen:** Ist |q| < 1? Wenn nein: divergent, fertig.
3. **Erstes Glied** ausrechnen: Startindex einsetzen. Start k = 0 → q⁰ = 1. Start k = 1 → q.
4. **Wert** = erstes Glied/(1 − q).

Durchgerechnet für Σₖ₌₀^∞ (−½)ᵏ:

1. k steht im Exponenten von −½: geometrisch.
2. q = −½. |q| = ½ < 1: konvergent.
3. Start k = 0: erstes Glied (−½)⁰ = 1.
4. Wert: 1/(1 − (−½)) = 1/(1 + ½) = 1/(3/2) = 2/3.

Probe mit Partialsummen: 1; 0,5; 0,75; 0,625; 0,6875; 0,65625. Sie springen um 2/3 ≈ 0,667 herum und kommen immer näher.

| Reihe | q | erstes Glied | Wert |
|---|---|---|---|
| Σₖ₌₀^∞ (½)ᵏ | ½ | 1 | 1/(1 − ½) = 2 |
| Σₖ₌₁^∞ (½)ᵏ | ½ | ½ | ½/(1 − ½) = 1 |
| Σₖ₌₀^∞ (⅓)ᵏ | ⅓ | 1 | 1/(1 − ⅓) = 3/2 |
| Σₖ₌₀^∞ 2ᵏ | 2 | 1 | divergent, weil \|q\| ≥ 1 |

> [!IMPORTANT]
> **Das Wichtigste**
> Geometrische Reihe: konvergent genau dann, wenn |q| < 1. Wert = erstes Glied/(1 − q).

> [!WARNING]
> **Typischer Fehler**
> Drei Fallen: Der Startindex bestimmt das erste Glied (Σₖ₌₁^∞ (½)ᵏ ist 1, nicht 2). Bei |q| ≥ 1 gibt die Formel Unsinn. Bei negativem q wird aus 1 − q eine Summe: 1 − (−⅕) = 1 + ⅕ = 6/5.

## Periodenzahlen

**In einem Satz:** Eine Zahl wie 0,777… ist in Wahrheit eine unendliche Summe, und zwar eine geometrische Reihe.

**Stell dir vor:** Du schreibst 0,777… Ziffer für Ziffer auf. Jede neue 7 steht eine Stelle weiter rechts, ist also ein Zehntel so viel wert wie die vorige: 0,7, dann 0,07, dann 0,007. Das ist genau „jedes Mal mal 1/10“, also q = 1/10.

**Mit Zahlen:**

| n | neues Glied | Partialsumme |
|---|---|---|
| 1 | 0,7 | 0,7 |
| 2 | 0,07 | 0,77 |
| 3 | 0,007 | 0,777 |
| 4 | 0,0007 | 0,7777 |

**Die Formel:** 0,777… = 7/10 + 7/100 + 7/1000 + … mit erstem Glied 7/10 und q = 1/10.

- Periodenlänge 1 (eine Ziffer wiederholt sich) → q = 1/10.
- Periodenlänge 2 (zwei Ziffern wiederholen sich, wie 0,1212…) → q = 1/100.

**So steht es auf der Folie, sinngemäß:** „0,1̄ = 1/10 + 1/100 + … = (1/10) · 1/(1 − 1/10) = 1/9“. Der Strich über der 1 heißt „die 1 wiederholt sich unendlich oft“. Überraschung der Folie: 0,9̄ = 1, denn (9/10)/(9/10) = 1.

Auf Deutsch heißt das: Erstes Glied 1/10, Faktor 1/10, Rezept „erstes Glied/(1 − q)“ anwenden.

**So rechnest du** 0,777…:

1. Erstes Glied: 7/10.
2. q = 1/10 (Periodenlänge 1). |q| < 1.
3. 1 − q = 1 − 1/10 = 9/10.
4. Wert: (7/10)/(9/10) = 7/10 · 10/9 = 7/9.
5. Probe: 7 : 9 = 0,777…

> [!IMPORTANT]
> **Das Wichtigste**
> Periode der Länge L → q = 1/10ᴸ. Steht vor der Periode noch etwas, trennst du es zuerst ab.

> [!WARNING]
> **Typischer Fehler**
> Bei 4,31222… wiederholt sich nur die 2. Die 4,31 ist kein Teil der Reihe. Erst abtrennen, dann rechnen (Übung 3c).

## Divergenzkriterium und harmonische Reihe

**In einem Satz:** Wenn die Zahlen, die du addierst, nicht winzig werden, wächst die Summe ohne Ende.

**Stell dir vor:** Du zahlst jeden Monat mindestens 50 Cent aufs Konto, für immer. Dann wird der Kontostand irgendwann größer als jede Zahl, die du nennst. Damit eine unendliche Summe endlich bleibt, müssen die Einzahlungen auf jeden Fall gegen 0 gehen.

**Mit Zahlen:** Σ k/(k + 1):

| k | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Glied k/(k + 1) | 0,5 | 0,667 | 0,75 | 0,8 | 0,833 |
| Partialsumme | 0,5 | 1,167 | 1,917 | 2,717 | 3,55 |

Die Glieder gehen gegen 1, nicht gegen 0. Jeden Schritt kommt fast 1 dazu. Die Summe wächst ohne Ende.

**Die Formel:** Wenn aₖ nicht gegen 0 geht, divergiert Σ aₖ.

**So steht es auf der Folie (notwendiges Kriterium):**

> Σ aₖ konvergent ⇒ aₖ → 0

Auf Deutsch heißt das: „Wenn die Reihe einen endlichen Wert hat, dann gehen die Glieder gegen 0.“ ⇒ liest man „daraus folgt“. Umgedreht benutzt: Gehen die Glieder **nicht** gegen 0, kann die Reihe nicht konvergieren. Die Folie betont: Die Umkehrung gilt **nicht**.

### Die harmonische Reihe

Die **harmonische Reihe** Σₖ₌₁^∞ 1/k = 1 + ½ + ⅓ + ¼ + … ist das Beispiel dafür, dass „Glieder → 0“ nicht reicht. Die Glieder gehen gegen 0, die Summe trotzdem gegen ∞.

| n | 1 | 2 | 3 | 4 | 10 | 100 |
|---|---|---|---|---|---|---|
| sₙ = 1 + ½ + … + 1/n | 1 | 1,5 | 1,833 | 2,083 | 2,929 | 5,187 |

Sie wächst nur sehr langsam, aber sie hört nie auf zu wachsen. Begründung in Schritten:

1. Fasse Glieder in Gruppen zusammen: ⅓ + ¼, dann ⅕ + ⅙ + 1/7 + ⅛, dann die nächsten 8 Glieder und so weiter.
2. Jede Gruppe ist mindestens ½. Beispiel: ⅓ + ¼ = 7/12 ≈ 0,583 ≥ ½. Und ⅕ + ⅙ + 1/7 + ⅛ ≈ 0,635 ≥ ½.
3. Es gibt unendlich viele solche Gruppen.
4. Unendlich oft mindestens ½ dazu ergibt ∞.

### Die Familie Σ 1/kᵖ

An der Tafel stand dazu „Riemann“: Σ 1/kᵖ ist **konvergent genau dann, wenn p > 1**.

- p ist der feste Exponent über dem k.
- „genau dann, wenn“ (⇔) heißt: gilt in beide Richtungen. p > 1 ⇒ konvergent, und p ≤ 1 ⇒ divergent.

| p | Reihe | s₁₀ | s₁₀₀ | Ergebnis |
|---|---|---|---|---|
| ½ | Σ 1/√k | ≈ 5,02 | ≈ 18,59 | divergent |
| 1 | Σ 1/k | ≈ 2,93 | ≈ 5,19 | divergent |
| 2 | Σ 1/k² | ≈ 1,550 | ≈ 1,635 | konvergent, Wert π²/6 ≈ 1,645 |

**Potenzabstand-Regel** (Mitschrift 04.11.): Bei einem Bruch aus Potenzen von k berechnest du Abstand = Grad des Nenners − Grad des Zählers. Abstand > 1: konvergent. Abstand ≤ 1: divergent. Der Grund ist derselbe wie in Kapitel 2: Für großes k zählt nur der stärkste Term.

**So rechnest du** mit der Potenzabstand-Regel, Beispiel Σ k/(k² + 5):

1. Grad des Zählers: k hat Grad 1.
2. Grad des Nenners: k² + 5 hat Grad 2.
3. Abstand: 2 − 1 = 1.
4. 1 ist nicht > 1, also divergent. Für großes k ist k/(k² + 5) ungefähr k/k² = 1/k, also wie die harmonische Reihe.

> [!IMPORTANT]
> **Das Wichtigste**
> aₖ → 0 ist notwendig, aber nicht hinreichend. Das Divergenzkriterium kann nur „divergent“ beweisen, nie „konvergent“.

> [!WARNING]
> **Typischer Fehler**
> Bei 1/kᵖ steht k unten, der Exponent ist fest. Bei der geometrischen Reihe qᵏ ist die Basis fest und k steht oben. k⁻² = 1/k² ist also **keine** geometrische Reihe.

## Das Quotientenkriterium

**In einem Satz:** Du prüfst, ob jedes Glied auf lange Sicht um einen festen Faktor kleiner als 1 schrumpft, dann verhält sich die Reihe wie eine konvergente geometrische Reihe.

**Stell dir vor:** Du vergleichst jede Einzahlung mit der vorigen. Ist jede neue Einzahlung irgendwann höchstens etwa halb so groß wie die vorige, dann ist dein Konto am Ende nicht größer als bei der Pizza-Reihe mit q = ½. Es bleibt endlich.

**Mit Zahlen:** Σₖ₌₁^∞ k/2ᵏ:

| k | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| Glied aₖ = k/2ᵏ | 0,5 | 0,5 | 0,375 | 0,25 | 0,156 | 0,094 | 0,055 | 0,031 |
| Quotient aₖ₊₁/aₖ | 1 | 0,75 | 0,667 | 0,625 | 0,6 | 0,583 | 0,571 | 0,5625 |

Der Quotient rutscht Richtung 0,5. Also schrumpft jedes Glied am Ende ungefähr um die Hälfte. Die Partialsumme bis k = 10 ist ≈ 1,988 (der Wert der Reihe ist 2).

**Die Formel:** L = lim (k → ∞) |aₖ₊₁/aₖ|.

- aₖ₊₁/aₖ ist „nächstes Glied geteilt durch jetziges“, der Schrumpf-Faktor.
- Die Betragsstriche sorgen dafür, dass Vorzeichen keine Rolle spielen.
- L ist der Schrumpf-Faktor auf lange Sicht.

| L | Ergebnis |
|---|---|
| L < 1 | konvergent |
| L > 1 | divergent |
| L = 1 | keine Aussage, anderes Kriterium nehmen |

**So steht es auf der Folie:** gar nicht. Laut eigener Auswertung steht das Quotientenkriterium nicht auf den Folien. R-1a und R-4b brauchen aber eins, darum steht es hier.

### So rechnest du

Durchgerechnet für Σₖ₌₁^∞ k/2ᵏ:

1. aₖ₊₁ hinschreiben (jedes k durch k + 1 ersetzen): (k + 1)/2ᵏ⁺¹.
2. Quotient bilden. Geteilt durch aₖ heißt mal Kehrwert: (k + 1)/2ᵏ⁺¹ · 2ᵏ/k.
3. Sortieren: (k + 1)/k · 2ᵏ/2ᵏ⁺¹.
4. Kürzen: 2ᵏ/2ᵏ⁺¹ = 1/2. Also (k + 1)/k · ½.
5. Grenzwert: (k + 1)/k = 1 + 1/k → 1. Also L = 1 · ½ = ½ < 1. Konvergent.

Zwei Helfer zum Kürzen: qᵏ⁺¹/qᵏ = q und k!/(k + 1)! = 1/(k + 1).

> [!IMPORTANT]
> **Das Wichtigste**
> Quotientenkriterium, wenn k! oder xᵏ vorkommen. Bei Brüchen aus reinen Potenzen ist L immer 1, dort nimmst du die Potenzabstand-Regel.

> [!WARNING]
> **Typischer Fehler**
> Σ 1/k und Σ 1/k² haben beide L = 1. Die erste divergiert, die zweite konvergiert. L = 1 sagt also nichts. Wer bei L = 1 „konvergent“ oder „divergent“ hinschreibt, verliert Punkte.

## Teleskopsumme

**In einem Satz:** Bei einer Teleskopsumme heben sich fast alle Teile gegenseitig weg, nur das erste und das letzte Stück bleiben übrig.

**Stell dir vor:** einen Raum, in dem Leute rein- und rausgehen. Jede Person, die hereinkommt, geht im nächsten Schritt wieder hinaus. Wer kam und wieder ging, zählt am Ende nicht. Übrig bleiben nur zwei: die Person ganz vom Anfang und die Person, die gerade als Letzte unterwegs ist. In einer Teleskopsumme taucht jede Zahl einmal mit Plus („kommt rein“) und gleich danach einmal mit Minus („geht raus“) auf.

**Mit Zahlen:** (5 − 3) + (3 − 2) + (2 − 1):

1. Die 3 kommt mit Minus und gleich danach mit Plus: weg.
2. Die 2 genauso: weg.
3. Übrig: 5 − 1 = 4.
4. Probe ohne Trick: 2 + 1 + 1 = 4. Passt.

**Die Formel:** Σₖ₌₁ⁿ (bₖ − bₖ₊₁) = b₁ − bₙ₊₁.

- bₖ ist das Stück, das in Klammer k mit Plus steht.
- bₖ₊₁ ist dasselbe Stück eine Nummer weiter. Es steht in Klammer k mit Minus und in Klammer k + 1 mit Plus, darum hebt es sich weg.
- b₁ ist das erste Stück (bleibt übrig), bₙ₊₁ das letzte (bleibt übrig).

**So steht es auf der Folie (Aufgabe R-5):** „Tipp: 1/(k(k + 1)) = 1/k − 1/(k + 1).“

Auf Deutsch heißt das: Jeder Summand ist „ein Stück mit k minus dasselbe Stück mit k + 1“. Genau das ist die Form bₖ − bₖ₊₁ mit bₖ = 1/k.

### So rechnest du: Rezept in vier Schritten

Durchgerechnet für Σₖ₌₁^∞ 1/((k + 1)(k + 2)), mit 1/((k + 1)(k + 2)) = 1/(k + 1) − 1/(k + 2):

1. **Zerlegung prüfen:** auf gleichen Nenner bringen. 1/(k + 1) − 1/(k + 2) = ((k + 2) − (k + 1))/((k + 1)(k + 2)) = 1/((k + 1)(k + 2)). Passt.
2. **Ausschreiben:** sₙ = (½ − ⅓) + (⅓ − ¼) + (¼ − ⅕) + … + (1/(n + 1) − 1/(n + 2)).
3. **Wegstreichen:** ⅓ kommt rein und geht raus, ¼ auch, und so weiter. Übrig bleiben ½ und −1/(n + 2). Also sₙ = ½ − 1/(n + 2).
4. **Grenzwert:** 1/(n + 2) → 0, also sₙ → ½.

Probe mit Zahlen:

| n | sₙ einzeln addiert | ½ − 1/(n + 2) |
|---|---|---|
| 1 | 1/6 | ½ − ⅓ = 1/6 |
| 2 | 1/6 + 1/12 = 1/4 | ½ − ¼ = 1/4 |
| 3 | 1/4 + 1/20 = 3/10 | ½ − ⅕ = 3/10 |

> [!IMPORTANT]
> **Das Wichtigste**
> „Etwas mit k minus dasselbe mit k + 1“ ⇒ Teleskop. sₙ = erstes Stück − letztes Stück.

> [!WARNING]
> **Typischer Fehler**
> Ist der Abstand 2 (etwa 1/k − 1/(k + 2)), bleiben am Anfang zwei Stücke übrig, nicht eins: Eine Zahl geht erst zwei Klammern später wieder hinaus.

## Welches Kriterium? Die Reihenfolge

Geh die Fragen in dieser Reihenfolge durch. Bei der ersten passenden hörst du auf.

1. Gehen die Glieder gegen 0? Nein → divergent.
2. Geometrisch (k im Exponenten, qᵏ)? → konvergent genau für |q| < 1.
3. Bruch aus Potenzen von k? → Potenzabstand > 1 heißt konvergent.
4. k! oder xᵏ? → Quotientenkriterium.
5. „Etwas mit k minus dasselbe mit k + 1“? → Teleskop, dann kannst du sogar den Wert ausrechnen.

## Übungen

> [!TIP]
> **Übung 1 · mittel**
> Welche Reihen sind konvergent? Ein Grenzwert braucht nicht angegeben zu werden. a) Σₖ₌₀^∞ 1/k! · b) Σₙ₌₁^∞ 1/n⁹
>
> Quelle: Folien 04.11., Aufgabe R-1

> [!TIP]
> **Übung 2 · mittel**
> Welche Reihe ist eine geometrische Reihe? Bestimmen Sie gegebenenfalls ihren Grenzwert. a) Σₖ₌₁^∞ k⁻² · b) Σₖ₌₁^∞ (½)ᵏ · c) Σₖ₌₀^∞ (−1)ᵏ(⅕)ᵏ
>
> Quelle: Folien 04.11., Aufgabe R-2 (Folie 48)

> [!TIP]
> **Übung 3 · mittel**
> Schreiben Sie die Zahlen mithilfe einer geometrischen Reihe als Bruch: a) 0,333… · b) 0,121212… · c) 4,31222… (nur die 2 wiederholt sich)
>
> Quelle: Folien 04.11., Aufgabe R-3 (an der Tafel vorgerechnet)

> [!TIP]
> **Übung 4 · Prüfungsniveau**
> Welche Reihen sind konvergent? Testen Sie mit einem geeigneten Kriterium. a) Σₖ₌₁^∞ 1/(2k⁵) · b) Σₖ₌₁^∞ k³xᵏ/k!
>
> Quelle: Folien 04.11., Aufgabe R-4

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> Berechnen Sie den Grenzwert der Reihe Σₖ₌₁^∞ 1/(k(k + 1)). Tipp: 1/(k(k + 1)) = 1/k − 1/(k + 1).
>
> Quelle: Folien 04.11., Aufgabe R-5 (Folie 55)

## Lösungen

### Übung 1

a) Σₖ₌₀^∞ 1/k!: Es kommt k! vor → Quotientenkriterium.

1. aₖ = 1/k!, aₖ₊₁ = 1/(k + 1)!.
2. Quotient: aₖ₊₁/aₖ = 1/(k + 1)! · k!/1 = k!/(k + 1)!.
3. Kürzen mit (k + 1)! = (k + 1) · k!: k!/((k + 1) · k!) = 1/(k + 1).
4. Für k → ∞ geht 1/(k + 1) → 0. L = 0 < 1 ⇒ konvergent.

Zur Info: Der Wert ist e ≈ 2,718. Die Partialsummen 1; 2; 2,5; 2,667; 2,708; 2,717; 2,718 zeigen das.

b) Σₙ₌₁^∞ 1/n⁹: Form 1/nᵖ mit p = 9. 9 > 1 ⇒ konvergent. (Der Buchstabe n statt k ändert nichts.)

### Übung 2

a) Σₖ₌₁^∞ k⁻²:

1. Umschreiben: k⁻² = 1/k².
2. Hier ist k die Basis und der Exponent (2) fest. Bei einer geometrischen Reihe wäre es umgekehrt. → keine geometrische Reihe.
3. Sie konvergiert trotzdem (Form 1/kᵖ, p = 2 > 1), Wert π²/6 ≈ 1,645.

b) Σₖ₌₁^∞ (½)ᵏ:

1. k im Exponenten der festen Zahl ½: geometrisch, q = ½.
2. |q| = ½ < 1: konvergent.
3. Start k = 1, erstes Glied (½)¹ = ½.
4. Wert: ½/(1 − ½) = ½/½ = 1.

c) Σₖ₌₀^∞ (−1)ᵏ(⅕)ᵏ:

1. Zusammenfassen (gleicher Exponent): (−1)ᵏ(⅕)ᵏ = (−1 · ⅕)ᵏ = (−⅕)ᵏ.
2. Geometrisch mit q = −⅕. |q| = ⅕ < 1: konvergent.
3. Start k = 0, erstes Glied (−⅕)⁰ = 1.
4. 1 − q = 1 − (−⅕) = 1 + ⅕ = 6/5.
5. Wert: 1/(6/5) = 5/6 ≈ 0,833.
6. Probe: Partialsummen 1; 0,8; 0,84; 0,832; 0,8336 → 5/6.

### Übung 3

a) 0,333…:

1. Ausschreiben: 3/10 + 3/100 + 3/1000 + … = Σₖ₌₁^∞ 3 · (1/10)ᵏ.
2. Erstes Glied 3/10, q = 1/10 (Periodenlänge 1).
3. 1 − q = 9/10.
4. (3/10)/(9/10) = 3/10 · 10/9 = 3/9 = 1/3.

b) 0,121212…:

1. Ausschreiben: 12/100 + 12/10 000 + … Periodenlänge 2, also q = 1/100.
2. Erstes Glied 12/100.
3. 1 − q = 99/100.
4. (12/100)/(99/100) = 12/99. Kürzen durch 3: 4/33.

c) 4,31222…:

1. Den Teil vor der Periode abtrennen: 4,31222… = 4,31 + 0,00222…
2. Die Reihe: 0,002 + 0,0002 + … Erstes Glied 2/1000, q = 1/10.
3. Wert der Reihe: (2/1000)/(9/10) = 2/1000 · 10/9 = 20/9000 = 2/900.
4. 4,31 = 431/100 = 3879/900 (oben und unten mal 9).
5. Zusammen: 3879/900 + 2/900 = 3881/900.
6. Probe: 3881 : 900 = 4,31222…

### Übung 4

a) Σₖ₌₁^∞ 1/(2k⁵):

1. Bruch aus Potenzen von k. Den Faktor ½ herausziehen: ½ · Σ 1/k⁵.
2. Form 1/kᵖ mit p = 5 > 1 ⇒ konvergent.
3. Der Faktor ½ ändert daran nichts. (Mit der Potenzabstand-Regel: Abstand 5 − 0 = 5 > 1.)

b) Σₖ₌₁^∞ k³xᵏ/k!: k! und xᵏ → Quotientenkriterium. x ist eine feste Zahl, k läuft.

1. aₖ₊₁ hinschreiben: (k + 1)³xᵏ⁺¹/(k + 1)!.
2. Quotient: aₖ₊₁/aₖ = (k + 1)³xᵏ⁺¹/(k + 1)! · k!/(k³xᵏ).
3. Sortieren in drei Teile: (k + 1)³/k³ · xᵏ⁺¹/xᵏ · k!/(k + 1)!.
4. Kürzen: ((k + 1)/k)³ · x · 1/(k + 1).
5. Grenzwerte: ((k + 1)/k)³ = (1 + 1/k)³ → 1. Und 1/(k + 1) → 0.
6. L = 1 · |x| · 0 = 0 < 1.
7. Konvergent für jedes x ∈ ℝ.

Bei x = 10 sind die Glieder erst riesig (bei k = 10 etwa 2,76 Millionen), dann schrumpfen sie, weil k! schneller wächst (bei k = 30 etwa 102, bei k = 40 etwa 0,0008). Für Konvergenz zählt nur das Ende.

### Übung 5

1. Tipp prüfen: 1/k − 1/(k + 1) = ((k + 1) − k)/(k(k + 1)) = 1/(k(k + 1)). Passt.
2. Ausschreiben: sₙ = (1 − ½) + (½ − ⅓) + (⅓ − ¼) + … + (1/n − 1/(n + 1)).
3. Wegstreichen: ½ kommt rein und geht raus, ⅓ auch und so weiter. Übrig: sₙ = 1 − 1/(n + 1).
4. Grenzwert: 1/(n + 1) → 0, also Wert 1.

Probe:

| n | einzeln addiert | 1 − 1/(n + 1) |
|---|---|---|
| 1 | ½ | 1 − ½ = ½ |
| 2 | ½ + 1/6 = ⅔ | 1 − ⅓ = ⅔ |
| 3 | ⅔ + 1/12 = ¾ | 1 − ¼ = ¾ |
| 4 | ¾ + 1/20 = ⅘ | 1 − ⅕ = ⅘ |
