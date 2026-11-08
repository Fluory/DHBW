---
title: "Wahrheitstabellen, boolesche Ausdrücke, Logikgatter"
order: 5
summary: "Die sieben Gatter, Rechengesetze und De Morgan, der Weg von einem Text über die Wahrheitstabelle zum Ausdruck (DNF) und zur Schaltung, Vereinfachen und der Halbaddierer."
klausur: "relevant"
---

Eine Alarmanlage soll losgehen, wenn sie scharf geschaltet ist und die Tür oder das Fenster offen ist. Solche Regeln aus „und“, „oder“ und „nicht“ sind überall in der Technik. Ein Rechner setzt sie mit winzigen Schaltern um, den Transistoren. Mehrere Transistoren bilden ein **Gatter**, und aus Gattern entsteht am Ende ein ganzer Prozessor.

In Kapitel 4 waren die Bits Zahlen, hier sind sie Wahrheitswerte: 1 heißt wahr, 0 heißt falsch. Die Klausur gibt dafür 4 Punkte und verlangt „Analyse und Synthese von Wahrheitstabellen, Ausdrücken und Schaltungen“. Auch dieser Teil ist laut Dozent „Übungssache“.

## Die Grundoperatoren

**In einem Satz:** Boolesche Algebra ist Rechnen mit „ja“ und „nein“ statt mit Zahlen.

**Was ist das?** Die boolesche Algebra (nach George Boole) kennt nur zwei Werte: 0 (falsch, aus) und 1 (wahr, an). Ein **Operator** verknüpft solche Werte, so wie + zwei Zahlen verknüpft. Es gibt drei Grundoperatoren:

| Operator | Schreibweisen | Bedeutung |
|---|---|---|
| AND (UND) | A ∧ B, A · B | nur wahr, wenn alle Eingänge wahr sind |
| OR (ODER) | A ∨ B, A + B | nur falsch, wenn alle Eingänge falsch sind |
| NOT (NICHT) | ¬A | dreht den Wert um |

**Stell dir vor:**

- **AND** ist ein Bankschließfach mit zwei Schlüsseln. Es geht nur auf, wenn du *und* die Bank aufschließt.
- **OR** ist eine Haustür mit Klingel vorne und hinten. Es klingelt, wenn vorne *oder* hinten jemand drückt (oder beide).
- **NOT** ist ein Lichtschalter, der genau das Gegenteil macht.

Ein **Transistor** ist ein elektronischer Schalter. Zwei Schalter hintereinander (in Serie) ergeben ein AND: Strom fließt nur, wenn beide geschlossen sind. Zwei Schalter nebeneinander (parallel) ergeben ein OR: Einer reicht. Für die Klausur reicht es, auf der Ebene der Gatter zu denken.

> [!IMPORTANT]
> **Das Wichtigste**
> AND ist nur 1, wenn alle Eingänge 1 sind. OR ist nur 0, wenn alle Eingänge 0 sind. NOT dreht um.

> [!WARNING]
> **Achtung**
> Die Rangfolge ist wie Punkt vor Strich: zuerst ¬, dann ∧, dann ∨. Schreib im Zweifel Klammern.

## Die sieben Gatter

**Was ist das?** Neben NOT gibt es sechs Gatter mit zwei Eingängen:

| A | B | AND | OR | XOR | NAND | NOR | XNOR |
|---|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 |
| 0 | 1 | 0 | 1 | 1 | 1 | 0 | 0 |
| 1 | 0 | 0 | 1 | 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 | 0 | 0 | 0 | 1 |

Merkhilfe: XOR heißt „ungleich“, also 1, wenn die Eingänge verschieden sind. XNOR heißt „gleich“. NAND, NOR und XNOR sind AND, OR und XOR mit umgedrehter Spalte.

Klausurrelevant sind die Symbole nach der europäischen Norm **IEC 60617-12**: rechteckige Kästchen mit einem Zeichen darin. Ein kleiner Kreis am Ausgang bedeutet Negation.

| Gatter | Zeichen im Kästchen | Kreis am Ausgang? |
|---|---|---|
| AND | & | nein |
| OR | ≥1 | nein |
| NOT | 1 | ja |
| XOR | =1 | nein |
| NAND | & | ja |
| NOR | ≥1 | ja |
| XNOR | =1 | ja |

> [!IMPORTANT]
> **Das Wichtigste**
> Lerne die Tabelle der sechs Gatter und die IEC-Zeichen &, ≥1, 1, =1. Der Kreis am Ausgang heißt „nicht“.

> [!WARNING]
> **Achtung**
> OR ist nicht XOR. Bei A = B = 1 ist OR gleich 1, XOR aber 0.

## Rechengesetze und De Morgan

**Was ist das?** Mit den Rechengesetzen formst du Ausdrücke um und vereinfachst sie:

| Gesetz | UND | ODER |
|---|---|---|
| Kommutativ | a ∧ b = b ∧ a | a ∨ b = b ∨ a |
| Distributiv | a ∧ (b ∨ c) = (a ∧ b) ∨ (a ∧ c) | a ∨ (b ∧ c) = (a ∨ b) ∧ (a ∨ c) |
| Idempotenz | a ∧ a = a | a ∨ a = a |
| Neutralität | a ∧ 1 = a | a ∨ 0 = a |
| Extremal | a ∧ 0 = 0 | a ∨ 1 = 1 |
| Komplement | a ∧ ¬a = 0 | a ∨ ¬a = 1 |
| Doppelnegation | ¬¬a = a | |
| De Morgan | ¬(a ∧ b) = ¬a ∨ ¬b | ¬(a ∨ b) = ¬a ∧ ¬b |
| Absorption | a ∨ (a ∧ b) = a | a ∧ (a ∨ b) = a |

**De Morgan in einem Satz:** Ziehst du die Negation über die Klammer, wird aus UND ein ODER (und umgekehrt), und jede Variable wird negiert.

**Stell dir vor:** „Es stimmt nicht, dass ich Kaffee *und* Kuchen bekomme“ heißt: Mir fehlt der Kaffee *oder* der Kuchen (oder beides). Also ¬(K ∧ U) = ¬K ∨ ¬U. Und „Es stimmt nicht, dass es regnet *oder* schneit“ heißt: Es regnet nicht *und* es schneit nicht. Also ¬(R ∨ S) = ¬R ∧ ¬S.

**Durchgerechnetes Beispiel:** ¬(¬A ∨ B)

1. Negation in die Klammer ziehen, ∨ wird zu ∧: ¬¬A ∧ ¬B.
2. Doppelnegation auflösen: A ∧ ¬B.

> [!IMPORTANT]
> **Das Wichtigste**
> De Morgan: ¬(A ∧ B) = ¬A ∨ ¬B und ¬(A ∨ B) = ¬A ∧ ¬B.

> [!WARNING]
> **Achtung**
> Häufigster Fehler: ¬(A ∧ B) = ¬A ∧ ¬B. Das ist falsch, das ∧ muss zu ∨ werden.

## Von der Beschreibung zur Schaltung

Die Klausurvorbereitung nennt drei Aufgabentypen: eine Wahrheitstabelle aus einem Text aufstellen, einen Ausdruck aus einer Wahrheitstabelle aufstellen und eine einfache Schaltung aus Tabelle oder Ausdruck zeichnen. Dazu kommt der Rückweg (Analyse): von der Schaltung zur Tabelle.

```text
Text → Wahrheitstabelle → Ausdruck (DNF) → vereinfachter Ausdruck → Schaltung
  ↑                                                                    |
  └──────────────────────────── Analyse ───────────────────────────────┘
```

### Schritt 1: Text → Wahrheitstabelle

1. Eingänge zählen. Bei n Eingängen hat die Tabelle 2ⁿ Zeilen.
2. Die Eingänge wie Binärzahlen von 000 bis 111 hochzählen. So fehlt keine Zeile.
3. Für jede Zeile fragen: Ist der Ausgang 1 oder 0?

**Durchgerechnetes Beispiel (eigenes Übungsbeispiel):** „Die Alarmanlage Y löst aus, wenn sie scharf geschaltet ist (S) und die Tür (T) oder das Fenster (F) offen ist.“ Drei Eingänge, also 8 Zeilen.

| S | T | F | Y | Teilausdruck |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | |
| 0 | 0 | 1 | 0 | |
| 0 | 1 | 0 | 0 | |
| 0 | 1 | 1 | 0 | |
| 1 | 0 | 0 | 0 | |
| 1 | 0 | 1 | 1 | S ∧ ¬T ∧ F |
| 1 | 1 | 0 | 1 | S ∧ T ∧ ¬F |
| 1 | 1 | 1 | 1 | S ∧ T ∧ F |

### Schritt 2: Wahrheitstabelle → Ausdruck (DNF)

**In einem Satz:** Die DNF schreibt jede Zeile mit Ergebnis 1 als eigene Bedingung auf und verbindet alle mit „oder“.

Das Verfahren mit der Spalte „Teilausdruck“ heißt **disjunktive Normalform (DNF)**. Auf Deutsch: „disjunktiv“ heißt „mit ODER verbunden“, „Normalform“ heißt „feste Schreibweise nach Rezept“. Jeder UND-Term beschreibt genau eine Zeile, wie ein Steckbrief: „S ist an, T ist aus, F ist an“.

1. Nur die Zeilen mit Ausgang 1 nehmen.
2. Für jede 1-Zeile einen UND-Term bauen: Eine 1 wird zur Variablen, eine 0 zur negierten Variablen. Zeile 1 0 1 wird zu S ∧ ¬T ∧ F.
3. Alle UND-Terme mit ∨ verbinden.

Ergebnis: Y = (S ∧ ¬T ∧ F) ∨ (S ∧ T ∧ ¬F) ∨ (S ∧ T ∧ F)

Die DNF funktioniert immer, weil sie die Tabelle Zeile für Zeile nachbaut. Die unvereinfachte DNF ist korrekt und bringt die Punkte, solange nicht ausdrücklich „vereinfachen“ verlangt ist.

### Schritt 3: Vereinfachen

Die **Kernregel**: Kommt eine Variable in zwei sonst gleichen UND-Termen einmal normal und einmal negiert vor, fällt sie weg.

**Stell dir vor:** „Ich gehe raus, wenn die Sonne scheint und es warm ist. Ich gehe auch raus, wenn die Sonne scheint und es nicht warm ist.“ Dann ist die Temperatur offenbar egal: Ich gehe raus, wenn die Sonne scheint. Genau das macht die Kernregel.

```text
(A ∧ B) ∨ (A ∧ ¬B)
= A ∧ (B ∨ ¬B)     A ausklammern (Distributivgesetz)
= A ∧ 1            B ∨ ¬B = 1 (Komplement)
= A                A ∧ 1 = A (Neutralität)
```

So gehst du vor:

1. Paare suchen: Welche Terme unterscheiden sich in genau einer Variablen?
2. Ausklammern, was beide gemeinsam haben.
3. X ∨ ¬X = 1 streichen.
4. Wiederholen, bis kein Paar mehr übrig ist.
5. Prüfen: eine 1-Zeile und eine 0-Zeile einsetzen.

Ein Term darf mehrfach benutzt werden, weil x ∨ x = x gilt (Idempotenz).

**Durchgerechnetes Beispiel: Alarmanlage**

1. Der Term S ∧ T ∧ F passt zu beiden anderen. Du benutzt ihn zweimal.
2. (S ∧ ¬T ∧ F) ∨ (S ∧ T ∧ F) = S ∧ F ∧ (¬T ∨ T) = S ∧ F.
3. (S ∧ T ∧ ¬F) ∨ (S ∧ T ∧ F) = S ∧ T ∧ (¬F ∨ F) = S ∧ T.
4. Y = (S ∧ F) ∨ (S ∧ T) = **S ∧ (T ∨ F)**.
5. Probe: Zeile S = 1, T = 0, F = 1 ergibt 1 ∧ (0 ∨ 1) = 1 ✓. Zeile S = 0, T = 1, F = 1 ergibt 0 ✓.

Das Ergebnis ist genau der Satz aus der Aufgabe: scharf und (Tür oder Fenster).

**Muster erkennen:** (¬A ∧ B) ∨ (A ∧ ¬B) ist XOR. (¬A ∧ ¬B) ∨ (A ∧ B) ist XNOR. Diese Terme unterscheiden sich in zwei Variablen und lassen sich mit der Kernregel nicht kürzen, aber sie sind jeweils ein einziges Gatter.

### Schritt 4: Ausdruck → Schaltung

Du baust den Ausdruck von innen nach außen nach. Jede Operation wird ein Gatter. Das Standard-Vorgehen der Folien setzt die DNF direkt um: NOT-Gatter für negierte Eingänge, ein UND je Teilausdruck, ein ODER am Ende.

```text
Alarmanlage vereinfacht: Y = S ∧ (T ∨ F)

T ──┐
    ├─[≥1]──┐
F ──┘       ├─[&]── Y
S ──────────┘
```

### Rückweg: Schaltung → Tabelle (Analyse)

1. Für jedes Gatter eine Hilfsspalte anlegen.
2. Zeile für Zeile von innen nach außen rechnen.

**Durchgerechnetes Beispiel:** Y = (A ∨ B) ∧ ¬C

| A | B | C | A ∨ B | ¬C | Y |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 0 |
| 0 | 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 | 1 | 1 |
| 0 | 1 | 1 | 1 | 0 | 0 |
| 1 | 0 | 0 | 1 | 1 | 1 |
| 1 | 0 | 1 | 1 | 0 | 0 |
| 1 | 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 1 | 1 | 0 | 0 |

> [!IMPORTANT]
> **Das Wichtigste**
> DNF-Rezept: 2ⁿ Zeilen hochzählen, jede 1-Zeile als UND-Term (1 → Variable, 0 → ¬Variable), alle Terme mit ∨ verbinden. Vereinfachen mit der Kernregel (X ∨ ¬X = 1).

> [!WARNING]
> **Achtung**
> Nur die 1-Zeilen gehören in die DNF, nicht die 0-Zeilen. Beim Vereinfachen nur Terme zusammenfassen, die sich in genau einer Variablen unterscheiden. Und immer mit einer Zeile prüfen.

## NAND-Substitution

**In einem Satz:** Mit einer einzigen Sorte Baustein, dem NAND, kannst du alle anderen Gatter nachbauen.

**Was ist das?** Wie mit nur einer Sorte Legostein, aus der du trotzdem jedes Modell baust: Allein aus NAND-Gattern kann man jede logische Verknüpfung bauen. Das vereinfacht die Chip-Produktion.

- **NOT A** = NAND(A, A): beide Eingänge zusammenschalten.
- **A AND B** = zwei NANDs hintereinander. Das erste liefert ¬(A ∧ B), das zweite dreht es zurück.
- **A OR B** = NAND(¬A, ¬B), also drei NANDs. Nach De Morgan ist ¬(¬A ∧ ¬B) = A ∨ B.

> [!IMPORTANT]
> **Das Wichtigste**
> NAND ist ein Universalgatter: Damit lassen sich NOT, AND und OR bauen.

> [!WARNING]
> **Achtung**
> Für AND reicht ein NAND nicht. Du brauchst ein zweites NAND als NOT dahinter.

## Rechnen mit Gattern: der Halbaddierer

**In einem Satz:** Ein Halbaddierer ist die kleinste Schaltung, die zwei einzelne Bits addiert.

**Was ist das?** Die Additionsregeln aus Kapitel 4 sind selbst eine Wahrheitstabelle:

| A | B | Summe s | Übertrag c |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

Die Summenspalte ist genau XOR, die Übertragsspalte genau AND. Ein **Halbaddierer** besteht also aus einem XOR- und einem AND-Gatter. Ein **Volladdierer** nimmt zusätzlich den Übertrag der vorigen Stelle auf und besteht aus zwei Halbaddierern und einem ODER. Mehrere Volladdierer hintereinander ergeben ein Addierwerk.

> [!IMPORTANT]
> **Das Wichtigste**
> Halbaddierer: Summe = XOR, Übertrag = AND.

> [!WARNING]
> **Achtung**
> Die Summe ist nicht OR. Bei 1 + 1 muss die Summe 0 sein, deshalb XOR.

> [!CAUTION]
> **Nicht klausurrelevant**
> Das Flipflop (zwei rückgekoppelte NOR- oder NAND-Gatter, die sich ein Bit merken) ist ein Exkurs und steht in keiner Rückschau.

## Übungen

> [!TIP]
> **Übung 1 · leicht**
> Eine Lampe L leuchtet, wenn genau einer der beiden Schalter A und B an ist. Stelle die Wahrheitstabelle und den DNF-Ausdruck auf. Welches Gatter ist das?
> *Quelle: Lernseite GIT, Aufgabe 5.1 (eigene Aufgabe)*

> [!TIP]
> **Übung 2 · mittel**
> Stelle die Tabelle für Y = ¬(A ∨ B) ∧ C mit Hilfsspalten auf. In wie vielen Zeilen ist Y = 1?
> *Quelle: Lernseite GIT, Aufgabe 5.5 (eigene Aufgabe)*

> [!TIP]
> **Übung 3 · mittel**
> Vereinfache: (¬A ∧ ¬B) ∨ (¬A ∧ B) ∨ (A ∧ ¬B)
> *Quelle: Lernseite GIT, Training V5 (eigene Aufgabe)*

> [!TIP]
> **Übung 4 · mittel**
> Baue eine AND-Schaltung nach IEC 60617-12 für a und b, ohne ein AND-Gatter zu verwenden.
> *Quelle: Folie GIT VL02 F. 60–61, sinngemäß*

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> Mehrheitsentscheid: Y = 1, wenn mindestens zwei von drei Personen A, B, C zustimmen. Stelle die Wahrheitstabelle und die DNF auf und vereinfache.
> *Quelle: Lernseite GIT, Aufgabe 5.4 (eigene Aufgabe im Klausurstil)*

> [!TIP]
> **Übung 6 · Prüfungsniveau**
> Y = 1 genau in den Zeilen ABC = 001, 011, 101, 111. Stelle die DNF auf und vereinfache.
> *Quelle: Lernseite GIT, Training V7 (eigene Aufgabe)*

## Lösungen

### Übung 1

| A | B | L |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

1. 1-Zeilen: 01 und 10.
2. Teilausdrücke: Zeile 01 heißt „A aus, B an“ → ¬A ∧ B. Zeile 10 heißt „A an, B aus“ → A ∧ ¬B.
3. DNF: L = (¬A ∧ B) ∨ (A ∧ ¬B).

Das ist **XOR** („ungleich“).

### Übung 2

| A | B | C | A ∨ B | ¬(A ∨ B) | Y |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 0 |
| 0 | 0 | 1 | 0 | 1 | 1 |
| 0 | 1 | 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 | 0 | 0 |
| 1 | 0 | 0 | 1 | 0 | 0 |
| 1 | 0 | 1 | 1 | 0 | 0 |
| 1 | 1 | 0 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 | 0 | 0 |

So rechnest du jede Zeile: Erst A ∨ B, dann umdrehen, dann mit C verunden. Beispiel Zeile 001: A ∨ B = 0 ∨ 0 = 0, umgedreht 1, und 1 ∧ C = 1 ∧ 1 = 1.

Y = 1 in **genau einer Zeile**: A = 0, B = 0, C = 1.

### Übung 3

1. Paar 1: (¬A ∧ ¬B) ∨ (¬A ∧ B) = ¬A ∧ (¬B ∨ B) = ¬A.
2. Paar 2: (¬A ∧ ¬B) ∨ (A ∧ ¬B) = ¬B ∧ (¬A ∨ A) = ¬B. Der Term ¬A ∧ ¬B wird zweimal benutzt.
3. Ergebnis: **¬A ∨ ¬B**. Das ist NAND.
4. Probe: Nur bei A = B = 1 ist ¬A ∨ ¬B = 0. In der Ausgangsformel ist das auch die einzige fehlende Zeile ✓

### Übung 4

Zwei NAND-Gatter hintereinander:

```text
a ──┐
    ├──[&]o── x ──┬──┐
b ──┘             └──┴──[&]o── y = a ∧ b

[&]o = NAND (Kästchen mit &, Kreis am Ausgang)
```

1. Das erste NAND liefert x = ¬(a ∧ b).
2. Beim zweiten NAND sind beide Eingänge mit x verbunden. Es wirkt als NOT: y = ¬x = a ∧ b.

### Übung 5

| A | B | C | Y |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 |

1. 1-Zeilen: 011, 101, 110, 111 (überall mindestens zwei Einsen). DNF: Y = (¬A ∧ B ∧ C) ∨ (A ∧ ¬B ∧ C) ∨ (A ∧ B ∧ ¬C) ∨ (A ∧ B ∧ C).
2. A ∧ B ∧ C passt zu allen drei anderen. Du benutzt ihn dreimal.
3. (A ∧ B ∧ C) ∨ (A ∧ B ∧ ¬C) = A ∧ B ∧ (C ∨ ¬C) = A ∧ B.
4. (A ∧ B ∧ C) ∨ (A ∧ ¬B ∧ C) = A ∧ C ∧ (B ∨ ¬B) = A ∧ C.
5. (A ∧ B ∧ C) ∨ (¬A ∧ B ∧ C) = B ∧ C ∧ (A ∨ ¬A) = B ∧ C.
6. Ergebnis: **Y = (A ∧ B) ∨ (A ∧ C) ∨ (B ∧ C)**, also „irgendein Paar stimmt zu“.

Mit Python über alle 8 Zeilen geprüft: DNF und vereinfachter Ausdruck sind gleich.

### Übung 6

1. DNF: (¬A ∧ ¬B ∧ C) ∨ (¬A ∧ B ∧ C) ∨ (A ∧ ¬B ∧ C) ∨ (A ∧ B ∧ C).
2. 001 und 011 zusammenfassen: (¬A ∧ ¬B ∧ C) ∨ (¬A ∧ B ∧ C) = ¬A ∧ C ∧ (¬B ∨ B) = ¬A ∧ C (B fällt weg).
3. 101 und 111 zusammenfassen: (A ∧ ¬B ∧ C) ∨ (A ∧ B ∧ C) = A ∧ C ∧ (¬B ∨ B) = A ∧ C (B fällt weg).
4. (¬A ∧ C) ∨ (A ∧ C) = C (A fällt weg).
5. Ergebnis: **Y = C**. In allen 1-Zeilen ist C = 1, A und B sind egal.
