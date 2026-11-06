---
title: "Suchen und Sortieren"
order: 8
summary: "O-Notation, lineare und binäre Suche, Bubble Sort und Merge Sort: Voraussetzung, Ablauf an einem Beispiel und Aufwand jedes Verfahrens."
klausur: "relevant"
---

Du suchst im Telefonbuch nach „Müller“. Du fängst nicht bei A an und liest jede Seite, sondern schlägst ungefähr in der Mitte auf und entscheidest: weiter vorne oder weiter hinten? Das geht nur, weil das Telefonbuch sortiert ist. Wie viel schneller das ist, beschreibt die O-Notation.

In der Klausur gibt es 6 Punkte für die „Eigenschaften der verschiedenen Verfahren“. Für jedes Verfahren solltest du drei Dinge sagen können: Was ist die Voraussetzung? Wie funktioniert es an einem kleinen Beispiel? Wie hoch ist der Aufwand in O-Notation?

## O-Notation

**Was ist das?** Die O-Notation beschreibt, wie der Aufwand eines Algorithmus wächst, wenn die Datenmenge n wächst. Es geht nicht um Millisekunden, sondern um das Wachstum. Konstante Faktoren lässt man weg.

| Klasse | Name | Beispiel | n = 1 000 | n = 1 000 000 |
|---|---|---|---|---|
| O(1) | konstant | Zugriff auf a[5] in einem Array | 1 | 1 |
| O(log n) | logarithmisch | binäre Suche | etwa 10 | etwa 20 |
| O(n) | linear | lineare Suche | 1 000 | 1 000 000 |
| O(n log n) | „n log n“ | Merge Sort | etwa 10 000 | etwa 20 000 000 |
| O(n²) | quadratisch | Bubble Sort („jeder mit jedem“) | 1 000 000 | 10¹² |

**Faustregel:** Verdoppelt sich n, dann bleibt O(1) gleich, O(log n) braucht einen Schritt mehr, O(n) verdoppelt sich und O(n²) vervierfacht sich.

> [!IMPORTANT]
> **Das Wichtigste**
> Reihenfolge von schnell nach langsam: O(1) < O(log n) < O(n) < O(n log n) < O(n²).

> [!WARNING]
> **Achtung**
> Die Folie ordnet die Multiplikation zweier Matrizen unter O(n²) ein. Für zwei n × n-Matrizen braucht das einfache Verfahren O(n³); so steht es auch richtig im KI-Exkurs.

## Lineare Suche

**Was ist das?** Alle Elemente werden der Reihe nach mit dem gesuchten Wert verglichen. Das funktioniert auch bei **unsortierten** Daten und bei Listen, die man nur von vorne durchlaufen kann.

- **Voraussetzung:** keine.
- **Aufwand:** O(n). Im schlechtesten Fall (Element ganz hinten oder gar nicht da) brauchst du n Vergleiche.

> [!IMPORTANT]
> **Das Wichtigste**
> Lineare Suche: keine Voraussetzung, O(n).

> [!WARNING]
> **Achtung**
> Lineare Suche ist nicht „schlecht“. Bei unsortierten Daten ist sie die einzige Möglichkeit.

## Binäre Suche

**Was ist das?** Die binäre Suche setzt voraus, dass die Daten **sortiert** sind und man per Index direkt auf jedes Element zugreifen kann (Array). Sie prüft das mittlere Element und verwirft dann die Hälfte, in der der Wert nicht sein kann.

1. Bereich festlegen: lo = erster Index, hi = letzter Index.
2. Mitte berechnen: m = (lo + hi) / 2, abgerundet.
3. Vergleichen: Ist a[m] der gesuchte Wert, bist du fertig.
4. Ist der gesuchte Wert größer, weiter mit lo = m + 1. Ist er kleiner, weiter mit hi = m − 1.
5. Wiederholen. Ist lo > hi, ist der Wert nicht vorhanden.

**Durchgerechnetes Beispiel (Folie):** Suche 61 in [10, 19, 23, 25, 36, 61, 79, 81, 99] (Index 0–8).

| Schritt | Bereich | Mitte | Wert | Entscheidung |
|---|---|---|---|---|
| 1 | 0–8 | 4 | 36 | 61 > 36 → rechts weiter |
| 2 | 5–8 | 6 | 79 | 61 < 79 → links weiter |
| 3 | 5–5 | 5 | 61 | gefunden |

Gefunden nach 3 Vergleichen.

### Wie viele Schritte höchstens?

Diese Rechnung ist eine Ergänzung. Weil jeder Schritt den Bereich halbiert, ist die höchste Schrittzahl die kleinste Zahl k mit 2ᵏ > n.

| n | Rechnung | höchstens |
|---|---|---|
| 15 | 2⁴ = 16 > 15 | 4 Schritte |
| 100 | 2⁷ = 128 > 100 | 7 Schritte |
| 1 000 | 2¹⁰ = 1 024 > 1 000 | 10 Schritte |
| 1 000 000 | 2²⁰ ≈ 1,05 Mio. > 1 Mio. | 20 Schritte |

Die lineare Suche bräuchte bei 1 000 000 Elementen bis zu 1 000 000 Vergleiche.

> [!IMPORTANT]
> **Das Wichtigste**
> Binäre Suche: nur auf sortierten Daten mit Indexzugriff, Aufwand O(log n). Jeder Schritt halbiert den Suchbereich.

> [!WARNING]
> **Achtung**
> Die binäre Suche funktioniert nicht auf unsortierten Daten. Ihr Aufwand ist O(log n), nicht O(n log n) (das ist Merge Sort). Bei gerader Anzahl gibt es zwei mögliche „Mitten“; bleib bei einer Regel, zum Beispiel immer abrunden.

## Bubble Sort

**Was ist das?** Bubble Sort vergleicht immer zwei Nachbarn und tauscht sie, wenn sie falsch herum stehen. So läuft es von vorne nach hinten. Nach dem ersten Durchlauf steht das **größte** Element am Ende, es ist wie eine Blase nach oben gestiegen.

1. Von vorne beginnen und je zwei Nachbarn vergleichen.
2. Stehen sie falsch herum, tauschen.
3. Bis zum Ende des unsortierten Teils weitergehen. Das letzte Element ist jetzt fertig.
4. Neuen Durchlauf starten.
5. Aufhören, wenn ein Durchlauf ohne Tausch bleibt.

**Durchgerechnetes Beispiel:** [5, 1, 4, 2, 8]

```text
Durchlauf 1:  5↔1 → [1, 5, 4, 2, 8]
              5↔4 → [1, 4, 5, 2, 8]
              5↔2 → [1, 4, 2, 5, 8]
              5 < 8, kein Tausch        → 8 ist fertig
Durchlauf 2:  1 < 4 ok; 4↔2 → [1, 2, 4, 5, 8]; 4 < 5 ok   → 5 ist fertig
Durchlauf 3:  kein Tausch mehr → sortiert
```

- **Voraussetzung:** keine.
- **Aufwand:** O(n²).
- Höchstens n − 1 Durchläufe sind nötig. Die Folie sagt „so viele wie Elemente“; genau genommen reichen n − 1.

> [!IMPORTANT]
> **Das Wichtigste**
> Bubble Sort: Nachbarn vergleichen und tauschen, das Größte wandert nach hinten, O(n²).

> [!WARNING]
> **Achtung**
> „Nach dem ersten Durchlauf steht das kleinste Element vorne“ ist falsch. Das größte steht hinten. Das kleinste wandert pro Durchlauf nur eine Stelle nach vorne.

## Merge Sort

**Was ist das?** Merge Sort arbeitet nach **Teile und Herrsche** (Kapitel 6):

1. Das Array in der Mitte teilen.
2. Die Hälften wieder teilen, bis jedes Stück nur ein Element hat. Ein einzelnes Element ist immer sortiert.
3. Je zwei sortierte Stücke zusammenführen („mergen“): Immer die vordersten Elemente beider Stücke vergleichen und das kleinere übernehmen.
4. So lange zusammenführen, bis nur noch ein Stück übrig ist.

**Durchgerechnetes Beispiel:** [38, 27, 43, 3, 9, 82, 10]

```text
Teilen:   [38, 27, 43]              [3, 9, 82, 10]
          [38] [27, 43]             [3, 9] [82, 10]
          [38] [27] [43]            [3] [9] [82] [10]
Mischen:  [38] [27, 43]             [3, 9] [10, 82]
          [27, 38, 43]              [3, 9, 10, 82]
          [3, 9, 10, 27, 38, 43, 82]
```

Der letzte Merge Schritt für Schritt:

1. 27 gegen 3 → 3 übernehmen.
2. 27 gegen 9 → 9.
3. 27 gegen 10 → 10.
4. 27 gegen 82 → 27.
5. 38 gegen 82 → 38.
6. 43 gegen 82 → 43.
7. Linke Seite leer, Rest 82 anhängen → [3, 9, 10, 27, 38, 43, 82].

- **Voraussetzung:** keine.
- **Aufwand:** O(n log n). Es gibt etwa log₂ n Ebenen, und auf jeder Ebene wird jedes Element einmal angefasst.

> [!IMPORTANT]
> **Das Wichtigste**
> Merge Sort: teilen bis zu Einzelelementen, dann sortiert zusammenführen. Teile und Herrsche, rekursiv, O(n log n).

> [!WARNING]
> **Achtung**
> Das Sortieren passiert nicht beim Teilen. Geteilt wird immer stumpf in der Mitte. Die eigentliche Arbeit steckt im Zusammenführen.

## Vergleich der Verfahren

Quicksort und Selection Sort werden auf den Folien nur genannt. Ihre Beschreibung und die Spalte „stabil“ sind Ergänzungen.

| Verfahren | Typ | Voraussetzung | Prinzip | Aufwand |
|---|---|---|---|---|
| lineare Suche | Suchen | keine | alle nacheinander prüfen | O(n) |
| binäre Suche | Suchen | sortiert, Indexzugriff | Mitte prüfen, Hälfte verwerfen | O(log n) |
| Suche im Binärbaum | Suchen | geordneter Binärbaum | links kleiner, rechts größer | balanciert O(log n), degeneriert O(n) |
| Bubble Sort | Sortieren | keine | Nachbarn vergleichen und tauschen | O(n²) |
| Merge Sort | Sortieren | keine | Teile und Herrsche, mischen | O(n log n) |
| Quicksort | Sortieren | keine | Pivot wählen, kleiner/größer trennen, rekursiv | im Mittel O(n log n), schlimmstenfalls O(n²) |
| Selection Sort | Sortieren | keine | kleinstes Element suchen, nach vorne tauschen | O(n²) |

## Übungen

> [!TIP]
> **Übung 1 · leicht**
> Vergleichen Sie lineare und binäre Suche nach Voraussetzung und Aufwand.
> *Quelle: Lernseite GIT, Aufgabe 8.1 (eigene Aufgabe nach VL02 F. 136)*

> [!TIP]
> **Übung 2 · mittel**
> Suchen Sie im sortierten Array [3, 8, 12, 17, 21, 26, 30, 34, 41, 47, 52, 58, 63, 70, 77] (Index 0–14) binär nach 58 und danach nach 50. Geben Sie in jedem Schritt die geprüfte Mitte an (abrunden).
> *Quelle: Lernseite GIT, Aufgaben 8.2 und 8.3 (eigene Aufgaben)*

> [!TIP]
> **Übung 3 · mittel**
> Wie viele Vergleiche braucht die binäre Suche bei 500 sortierten Elementen höchstens? Und die lineare Suche?
> *Quelle: Lernseite GIT, Aufgabe 8.4 (eigene Aufgabe)*

> [!TIP]
> **Übung 4 · mittel**
> Sortieren Sie [7, 3, 9, 1, 5] mit Bubble Sort. Geben Sie das Array nach jedem Durchlauf an.
> *Quelle: Lernseite GIT, Aufgabe 8.5 (eigene Aufgabe)*

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> Sortieren Sie [6, 2, 8, 4, 1, 9] mit Merge Sort. Stellen Sie Teilen und Mischen dar.
> *Quelle: Lernseite GIT, Aufgabe 8.6 (eigene Aufgabe im Klausurstil)*

> [!TIP]
> **Übung 6 · Prüfungsniveau**
> Multiple Choice (2 Punkte). Welche Aussagen sind korrekt?
> 1. Merge Sort arbeitet nach dem Prinzip Teile und Herrsche.
> 2. Die binäre Suche funktioniert auch auf unsortierten Arrays.
> 3. Nach dem ersten Durchlauf von Bubble Sort steht das größte Element am Ende.
> 4. Bubble Sort hat den Aufwand O(n log n).
>
> *Quelle: Lernseite GIT, Aufgabe 8.9 (eigene Aufgabe im Klausurstil)*

## Lösungen

### Übung 1

| | lineare Suche | binäre Suche |
|---|---|---|
| Voraussetzung | keine, auch unsortiert | sortiert und direkt per Index erreichbar |
| Aufwand | O(n) | O(log n) |

### Übung 2

**Suche nach 58:**

| Schritt | Bereich | Mitte | Wert | Entscheidung |
|---|---|---|---|---|
| 1 | 0–14 | 7 | 34 | 58 > 34 → rechts |
| 2 | 8–14 | 11 | 58 | gefunden |

Gefunden nach **2 Schritten**.

**Suche nach 50:**

| Schritt | Bereich | Mitte | Wert | Entscheidung |
|---|---|---|---|---|
| 1 | 0–14 | 7 | 34 | 50 > 34 → rechts |
| 2 | 8–14 | 11 | 58 | 50 < 58 → links |
| 3 | 8–10 | 9 | 47 | 50 > 47 → rechts |
| 4 | 10–10 | 10 | 52 | 50 < 52 → links |
| – | lo = 10 > hi = 9 | | | Bereich leer |

Nach **4 Vergleichen** ist der Bereich leer: 50 ist nicht vorhanden.

### Übung 3

1. Kleinste Zweierpotenz größer als 500 suchen: 2⁸ = 256 ist zu klein, 2⁹ = 512 > 500.
2. Binäre Suche: höchstens **9 Vergleiche**.
3. Lineare Suche: bis zu **500 Vergleiche**.

### Übung 4

| nach Durchlauf | Array |
|---|---|
| 1 | [3, 7, 1, 5, 9] |
| 2 | [3, 1, 5, 7, 9] |
| 3 | [1, 3, 5, 7, 9] |
| 4 | kein Tausch mehr → fertig |

Durchlauf 1 im Detail: 7↔3, 7 < 9 ok, 9↔1, 9↔5.

### Übung 5

```text
Teilen:   [6, 2, 8]          [4, 1, 9]
          [6] [2, 8]         [4] [1, 9]
          [6] [2] [8]        [4] [1] [9]
Mischen:  [6] [2, 8]         [4] [1, 9]
          [2, 6, 8]          [1, 4, 9]
          [1, 2, 4, 6, 8, 9]
```

Letzter Merge: 2 gegen 1 → 1; 2 gegen 4 → 2; 6 gegen 4 → 4; 6 gegen 9 → 6; 8 gegen 9 → 8; Rest 9 → **[1, 2, 4, 6, 8, 9]**.

### Übung 6

Richtig sind **1 und 3**.

- Option 2 ist falsch: Die Daten müssen sortiert sein.
- Option 4 ist falsch: Bubble Sort ist O(n²).
