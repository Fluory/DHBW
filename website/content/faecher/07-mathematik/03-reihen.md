---
title: "Reihen"
order: 3
summary: "Partialsummen, die geometrische Reihe, Periodenzahlen, das Divergenzkriterium, die harmonische Reihe, Σ 1/kᵖ, das Quotientenkriterium und die Teleskopsumme."
klausur: "relevant"
---

Eine Reihe entsteht, wenn man die Glieder einer Folge aufaddiert: a₁ + a₂ + a₃ + …, und zwar unendlich lange. Die große Frage ist: Kommt dabei eine endliche Zahl heraus? Manchmal ja (½ + ¼ + ⅛ + … = 1), manchmal nein (1 + ½ + ⅓ + … wird unendlich groß).

Ein Alltagsbeispiel: Du isst einen halben Kuchen. Dann die Hälfte vom Rest (¼), dann wieder die Hälfte vom Rest (⅛), und so weiter. Unendlich viele Stücke, aber zusammen nie mehr als ein Kuchen. Dieses Kapitel gehört zum Termin am 04.11. (Folien „Analysis – Reihen + Funktionen“).

## Partialsummen und Konvergenz

### Was ist das?

Man addiert Schritt für Schritt. Die Zwischenergebnisse heißen **Partialsummen** sₙ:

| n | neues Glied (½)ⁿ | Partialsumme sₙ |
|---|---|---|
| 1 | 0,5 | 0,5 |
| 2 | 0,25 | 0,75 |
| 3 | 0,125 | 0,875 |
| 4 | 0,0625 | 0,9375 |

sₙ = Σₖ₌₁ⁿ aₖ. Die Reihe Σₖ₌₁^∞ aₖ ist der Grenzwert der Partialsummen. Hat die Folge sₙ einen endlichen Grenzwert s, heißt die Reihe **konvergent** mit Wert s. Sonst ist sie **divergent**.

Bei den meisten Reihen kann man den Wert gar nicht ausrechnen. Ein **Konvergenzkriterium** beantwortet nur die Ja/Nein-Frage, ob es einen endlichen Wert gibt. Darum steht bei R-1 und R-4: „Ein Grenzwert braucht nicht angegeben zu werden.“

Für konvergente Reihen gelten Rechenregeln (Folie „Rechenregeln“): Konstante Faktoren darf man vor die Summe ziehen, und Σ(aₖ ± bₖ) = Σaₖ ± Σbₖ.

> [!IMPORTANT]
> **Das Wichtigste**
> Zwei verschiedene Folgen: die Summanden aₖ und die Partialsummen sₙ. Der Wert der Reihe ist der Grenzwert der Partialsummen.

> [!WARNING]
> **Achtung**
> „Die Glieder gehen gegen 0, also ist die Reihe 0“ ist falsch. Rechenregeln nur bei konvergenten Reihen: Die Folie zeigt, dass man für 1 + 2 + 4 + … sonst den Unsinn „= −1“ herausbekommt.

## Die geometrische Reihe

### Was ist das?

Eine geometrische Reihe addiert die Glieder einer geometrischen Folge. Für endlich viele Glieder (k = 0 bis n) gilt, so stand es an der Tafel:

Σₖ₌₀ⁿ v₀ · qᵏ = v₀ · (1 − qⁿ⁺¹)/(1 − q), für q ≠ 1

Probe: Σₖ₌₀⁴ 2ᵏ = 1 + 2 + 4 + 8 + 16 = 31, und (1 − 2⁵)/(1 − 2) = 31.

Für n → ∞ und |q| < 1 geht qⁿ⁺¹ → 0. Dann bleibt:

**Wert = erstes Glied/(1 − q)**, nur für |q| < 1. Für |q| ≥ 1 divergiert die Reihe.

### Rezept in vier Schritten

1. **Erkennen:** k steht im Exponenten einer festen Zahl. Vorher zusammenfassen: 2ᵏ/3ᵏ = (⅔)ᵏ.
2. **q ablesen und prüfen:** Ist |q| < 1? Wenn nein: divergent, fertig.
3. **Erstes Glied** ausrechnen: Startindex einsetzen. Start k = 0 → q⁰ = 1. Start k = 1 → q.
4. **Wert** = erstes Glied/(1 − q).

Durchgerechnet für Σₖ₌₀^∞ (−½)ᵏ: q = −½, |q| < 1. Erstes Glied 1. Wert 1/(1 + ½) = 1/(3/2) = 2/3.

| Reihe | q | erstes Glied | Wert |
|---|---|---|---|
| Σₖ₌₀^∞ (½)ᵏ | ½ | 1 | 2 |
| Σₖ₌₁^∞ (½)ᵏ | ½ | ½ | 1 |
| Σₖ₌₀^∞ (⅓)ᵏ | ⅓ | 1 | 3/2 |
| Σₖ₌₀^∞ 2ᵏ | 2 | 1 | divergent |

**Periodenzahlen** sind geometrische Reihen. 0,777… = 7/10 + 7/100 + … mit erstem Glied 7/10 und q = 1/10. Wert: (7/10)/(9/10) = 7/9. Trick von der Tafel: Periodenlänge 1 → q = 1/10, Länge 2 → q = 1/100.

> [!IMPORTANT]
> **Das Wichtigste**
> Geometrische Reihe: konvergent genau dann, wenn |q| < 1. Wert = erstes Glied/(1 − q).

> [!WARNING]
> **Achtung**
> Drei Fallen: Der Startindex bestimmt das erste Glied. Bei |q| ≥ 1 gibt die Formel Unsinn. Bei negativem q wird aus 1 − q eine Summe: 1 − (−⅕) = 6/5.

## Divergenzkriterium und harmonische Reihe

### Was ist das?

Wenn man unendlich oft etwas addiert, das nicht klein wird, wächst die Summe ohne Ende:

**Wenn aₖ nicht gegen 0 geht, divergiert Σ aₖ.**

Beispiel: Σ k/(k + 1). Die Glieder ½, ⅔, ¾ … gehen gegen 1 ≠ 0. Also divergent.

Die **harmonische Reihe** Σₖ₌₁^∞ 1/k = 1 + ½ + ⅓ + ¼ + … divergiert, obwohl die Glieder gegen 0 gehen. Sie wächst nur sehr langsam: s₁₀ ≈ 2,93, s₁₀₀ ≈ 5,19. Begründung: Man fasst Glieder in Gruppen zusammen, von denen jede mindestens ½ ergibt: ⅓ + ¼ ≥ ½, ⅕ + ⅙ + 1/7 + ⅛ ≥ ½ und so weiter. Unendlich viele Gruppen mit je mindestens ½ ergeben ∞.

Die Familie Σ 1/kᵖ (an der Tafel „Riemann“): **konvergent genau dann, wenn p > 1.**

| p | Reihe | Ergebnis |
|---|---|---|
| ½ | Σ 1/√k | divergent |
| 1 | Σ 1/k | divergent |
| 2 | Σ 1/k² | konvergent, Wert π²/6 ≈ 1,645 |

**Potenzabstand-Regel** (Mitschrift 04.11.): Bei einem Bruch aus Potenzen von k berechnest du Abstand = Grad des Nenners − Grad des Zählers. Abstand > 1: konvergent. Abstand ≤ 1: divergent. Beispiel: Σ k/(k² + 5) hat Abstand 1, also divergent wie die harmonische Reihe.

> [!IMPORTANT]
> **Das Wichtigste**
> aₖ → 0 ist notwendig, aber nicht hinreichend. Das Divergenzkriterium kann nur „divergent“ beweisen, nie „konvergent“.

> [!WARNING]
> **Achtung**
> Bei 1/kᵖ steht k unten, der Exponent ist fest. Bei der geometrischen Reihe qᵏ ist die Basis fest. k⁻² ist also **keine** geometrische Reihe.

## Das Quotientenkriterium

### Was ist das?

Idee: Man schaut, um welchen Faktor ein Glied gegenüber dem vorigen schrumpft.

L = lim (k → ∞) |aₖ₊₁/aₖ|. L < 1: konvergent. L > 1: divergent. L = 1: keine Aussage.

Vorgehen, durchgerechnet für Σₖ₌₁^∞ k/2ᵏ:

1. aₖ₊₁ hinschreiben: (k + 1)/2ᵏ⁺¹.
2. Quotient bilden: (k + 1)/2ᵏ⁺¹ · 2ᵏ/k.
3. Kürzen: (k + 1)/k · 1/2. Helfer: qᵏ⁺¹/qᵏ = q und k!/(k + 1)! = 1/(k + 1).
4. Grenzwert: 1 · ½ = ½ < 1. Also konvergent.

> [!IMPORTANT]
> **Das Wichtigste**
> Quotientenkriterium, wenn k! oder xᵏ vorkommen. Bei Brüchen aus reinen Potenzen ist L immer 1, dort nimmst du die Potenzabstand-Regel.

> [!WARNING]
> **Achtung**
> Σ 1/k und Σ 1/k² haben beide L = 1. Die erste divergiert, die zweite konvergiert. L = 1 sagt also nichts. Das Quotientenkriterium steht laut eigener Auswertung nicht auf den Folien, R-1a und R-4b brauchen aber eins.

## Teleskopsumme

### Was ist das?

Bei einer Teleskopsumme heben sich fast alle Teile weg. Bild: Du fährst mit dem Zug von Stuttgart über Heilbronn nach Würzburg. Für die ganze Fahrt zählen nur Start und Ziel.

Klein: (5 − 3) + (3 − 2) + (2 − 1) = 5 − 1 = 4. Allgemein: Σₖ₌₁ⁿ (bₖ − bₖ₊₁) = b₁ − bₙ₊₁.

### Rezept in vier Schritten

Durchgerechnet für Σₖ₌₁^∞ 1/((k + 1)(k + 2)), mit 1/((k + 1)(k + 2)) = 1/(k + 1) − 1/(k + 2):

1. **Zerlegung prüfen:** 1/(k + 1) − 1/(k + 2) = ((k + 2) − (k + 1))/((k + 1)(k + 2)) = 1/((k + 1)(k + 2)).
2. **Ausschreiben:** sₙ = (½ − ⅓) + (⅓ − ¼) + … + (1/(n + 1) − 1/(n + 2)).
3. **Wegstreichen:** Übrig bleiben ½ und −1/(n + 2). Also sₙ = ½ − 1/(n + 2).
4. **Grenzwert:** 1/(n + 2) → 0, also sₙ → ½. Probe s₂ = 1/6 + 1/12 = 3/12 = ¼ = ½ − ¼.

> [!IMPORTANT]
> **Das Wichtigste**
> „Etwas mit k minus dasselbe mit k + 1“ ⇒ Teleskop. sₙ = erstes Stück − letztes Stück.

> [!WARNING]
> **Achtung**
> Ist der Abstand 2 (etwa 1/k − 1/(k + 2)), bleiben am Anfang zwei Stücke übrig, nicht eins.

### Welches Kriterium? Die Reihenfolge

1. Gehen die Glieder gegen 0? Nein → divergent.
2. Geometrisch (qᵏ)? → konvergent genau für |q| < 1.
3. Bruch aus Potenzen von k? → Potenzabstand > 1 heißt konvergent.
4. k! oder xᵏ? → Quotientenkriterium.

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

a) Es kommt k! vor → Quotientenkriterium.

1. aₖ₊₁/aₖ = 1/(k + 1)! · k!/1 = 1/(k + 1), weil (k + 1)! = (k + 1) · k!.
2. Für k → ∞ geht 1/(k + 1) → 0 < 1 ⇒ konvergent. Zur Info: Der Wert ist e ≈ 2,718.

b) Form 1/nᵖ mit p = 9 > 1 ⇒ konvergent.

### Übung 2

a) k⁻² = 1/k². Hier ist k die Basis, der Exponent fest → keine geometrische Reihe. Sie konvergiert trotzdem (p = 2 > 1), Wert π²/6 ≈ 1,645.

b) Geometrisch mit q = ½. Start k = 1, erstes Glied ½. Wert: ½/(1 − ½) = 1.

c) Erst zusammenfassen: (−1)ᵏ(⅕)ᵏ = (−⅕)ᵏ. Geometrisch mit q = −⅕, |q| < 1. Start k = 0, erstes Glied 1. Wert: 1/(1 + ⅕) = 5/6 ≈ 0,833. Probe: Partialsummen 1; 0,8; 0,84; 0,832; 0,8336 → 5/6.

### Übung 3

a) 0,333… = Σₖ₌₁^∞ 3 · (1/10)ᵏ. Erstes Glied 3/10, q = 1/10: (3/10)/(9/10) = 1/3.

b) Periodenlänge 2, also q = 1/100. Erstes Glied 12/100: (12/100)/(99/100) = 12/99 = 4/33.

c) Den Teil vor der Periode abtrennen: 4,31222… = 4,31 + (0,002 + 0,0002 + …). Reihe: erstes Glied 2/1000, q = 1/10: (2/1000)/(9/10) = 2/900. Zusammen: 431/100 + 2/900 = 3879/900 + 2/900 = 3881/900. Probe: 3881 : 900 = 4,31222…

### Übung 4

a) Bruch aus Potenzen von k. Den Faktor ½ herausziehen: ½ · 1/k⁵. p = 5 > 1 ⇒ konvergent.

b) k! und xᵏ → Quotientenkriterium. x ist eine feste Zahl, k läuft.

1. aₖ₊₁/aₖ = (k + 1)³xᵏ⁺¹/(k + 1)! · k!/(k³xᵏ).
2. Sortieren: ((k + 1)/k)³ · x · 1/(k + 1).
3. ((k + 1)/k)³ → 1 und 1/(k + 1) → 0. Also L = 1 · |x| · 0 = 0 < 1.
4. Konvergent für jedes x ∈ ℝ.

Bei x = 10 sind die Glieder erst riesig (bei k = 10 etwa 2,76 Millionen), dann schrumpfen sie, weil k! schneller wächst. Für Konvergenz zählt nur das Ende.

### Übung 5

1. Tipp prüfen: 1/k − 1/(k + 1) = ((k + 1) − k)/(k(k + 1)) = 1/(k(k + 1)).
2. Ausschreiben: sₙ = (1 − ½) + (½ − ⅓) + … + (1/n − 1/(n + 1)).
3. Wegstreichen: sₙ = 1 − 1/(n + 1).
4. Grenzwert: 1/(n + 1) → 0, also Wert 1.

Probe n = 3: ½ + 1/6 + 1/12 = 9/12 = ¾ = 1 − ¼.
