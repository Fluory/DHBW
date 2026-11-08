---
title: "Datenstrukturen: Array, Liste, Stack, Queue, Baum"
order: 7
summary: "Wie Daten im Speicher geordnet werden: Array, verkettete und sortierte Liste, Stack (LIFO), Queue (FIFO) und geordneter Binärbaum mit Einfügen, Suchen und Löschen."
klausur: "relevant"
---

Ein Tellerstapel, eine Schlange an der Supermarktkasse und ein Stammbaum haben etwas gemeinsam: Sie ordnen Dinge auf eine bestimmte Art. Beim Tellerstapel nimmst du immer den obersten, an der Kasse ist der Erste zuerst dran, und im Stammbaum hat jede Person Vorfahren und Nachkommen. Genau diese Ordnungen nutzt ein Programm, um Daten im Speicher abzulegen.

Das ist einer der größten Blöcke der Klausur: 6–8 Punkte für „Bedeutung, Funktionsweise und APIs“. Die Klausurliste verlangt die „Anwendung der Datenstrukturen Stack, Queue, Liste, sortierte Liste, binäre Bäume“. Anwenden heißt: Du spielst Operationen von Hand durch, baust einen Binärbaum aus einer Zahlenfolge und begründest Vor- und Nachteile.

## Datentypen und Datenstrukturen

**Was ist das?** Elementare Datentypen sind die Grundbausteine, zum Beispiel eine ganze Zahl mit 32 Bit oder ein Zeichen. Datenstrukturen legen mehrere Daten, auch verschiedener Typen, gemeinsam im Speicher ab.

- **String:** eine Folge von Zeichen.
- **Selbstdefinierte Struktur:** zum Beispiel „Kunde“ mit ID (int), Name (String) und Jahresumsatz (float). Das entspricht einer Zeile in einer Datenbank.
- **Tabelle:** viele solche Strukturen in einem Array oder einer Liste, mit einer Spalte als eindeutigem Schlüssel (Vorgriff auf Kapitel 11).

> [!IMPORTANT]
> **Das Wichtigste**
> Welche Datenstruktur passt, hängt davon ab, was du mit den Daten machen willst: oft lesen, oft einfügen oder immer nur das neueste Element nehmen.

> [!WARNING]
> **Achtung**
> Datentyp und Datenstruktur nicht verwechseln. int ist ein Datentyp, ein Array von int ist eine Datenstruktur.

## Array

**In einem Satz:** Ein Array ist eine Reihe nummerierter Fächer mit fester Anzahl.

**Stell dir vor:** Eine Wand mit Schließfächern im Schwimmbad, Fach 0 bis Fach 9. Willst du an Fach 7, gehst du direkt hin, ohne die anderen zu öffnen. Mehr Fächer bekommst du aber nur, wenn jemand eine neue, größere Wand baut.

**Was ist das?** Ein Array speichert seine Elemente unter einem fortlaufenden **Index**, der bei 0 beginnt. Jedes Element ist über den Index direkt erreichbar. Die **Länge ist fest** und wird beim Anlegen bestimmt.

```text
Index:  0       1      2      3     …  9
        Walter  Heinz  Frank  Karl  …  Horst      a[9] liest das letzte Element
```

- **Vorteil:** einfach; sehr schneller direkter Zugriff über den Index.
- **Nachteil:** Die Länge ist fest. Einfügen und Entfernen gehen nur durch Verschieben und Umkopieren.

**Beispiel:** Willst du zwischen Heinz und Frank einen Namen einfügen, musst du Frank, Karl und alle folgenden um einen Platz nach hinten schieben. Ist das Array voll, brauchst du ein neues, größeres Array.

> [!IMPORTANT]
> **Das Wichtigste**
> Array: Index ab 0, feste Länge, schneller Zugriff, langsames Einfügen.

> [!WARNING]
> **Achtung**
> Ein Array mit 10 Elementen hat die Indizes 0 bis 9. a[10] gibt es nicht.

## Verkettete Listen

**In einem Satz:** Eine verkettete Liste ist eine Kette von Elementen, in der jedes nur weiß, wo das nächste liegt.

**Stell dir vor:** Eine Schnitzeljagd. Am Start (Kopf) liegt ein Zettel mit einer Aufgabe und dem Hinweis „weiter unter der Bank“. Dort liegt der nächste Zettel mit dem nächsten Hinweis. Zum fünften Zettel kommst du nur, wenn du den vier Hinweisen davor folgst. Dafür kannst du ganz leicht einen neuen Zettel einschieben: Du änderst nur einen Hinweis.

**Was ist das?** Eine **einfach verkettete Liste** hat keinen Index. Bekannt ist nur das erste Element, der **Kopf**. Jedes Element speichert seine Daten und einen **Zeiger** (**next**) auf das nächste Element. Ein Zeiger ist nichts anderes als die Adresse, unter der das nächste Element im Speicher liegt, also der Hinweis auf dem Zettel. Das letzte zeigt auf nichts (null).

```text
Kopf → [A | next] → [B | next] → [C | next] → null
```

**Einfügen von X hinter A:**

1. X zeigt auf das, worauf A bisher gezeigt hat: X.next = A.next (also auf B).
2. A zeigt auf X: A.next = X.

```text
vorher:   A → B
nachher:  A → X → B
```

Die Reihenfolge ist wichtig. Biegst du zuerst A auf X um, ist der Weg zu B verloren.

**Löschen von B:** Den Vorgänger A suchen und auf den Nachfolger von B zeigen lassen: A.next = B.next. Damit ist B aus der Kette heraus.

- **Vorteil:** Einfügen und Löschen ohne Umkopieren, nur Zeiger umhängen. Die Länge kann sich jederzeit ändern.
- **Nachteil:** Um ein bestimmtes Element zu lesen, musst du die Liste vom Kopf aus durchlaufen.

In einer **doppelt verketteten Liste** kennt jedes Element Vorgänger (prev) und Nachfolger (next). Du kannst in beide Richtungen laufen, und beim Löschen musst du den Vorgänger nicht erst suchen. Der Preis ist ein zweiter Zeiger, also mehr Speicher.

```text
null ← [prev | A | next] ⇄ [prev | B | next] ⇄ [prev | C | next] → null
```

### Sortierte Liste

Die sortierte Liste steht in der Klausurliste, auf den Folien aber nicht. Die Erklärung ist eine Ergänzung. Die Elemente sind immer geordnet. Ein neues Element kommt gleich an die richtige Stelle:

1. Vom Kopf aus durchlaufen, bis das erste Element kommt, das größer ist als das neue.
2. Das neue Element davor einhängen.

**Durchgerechnetes Beispiel:** Liste 10 → 19 → 36, einfügen: 25

1. 10 < 25, weiter. 19 < 25, weiter. 36 > 25, stopp.
2. Zwischen 19 und 36 einhängen: 19.next = 25, 25.next = 36.
3. Ergebnis: 10 → 19 → 25 → 36 → null.

> [!IMPORTANT]
> **Das Wichtigste**
> Liste: kein Index, nur der Kopf ist bekannt. Einfügen und Löschen = Zeiger umhängen. Suchen = vom Kopf aus durchlaufen.

> [!WARNING]
> **Achtung**
> Beim Einfügen zuerst den Zeiger des neuen Elements setzen, dann den des Vorgängers. Sonst geht der Rest der Liste verloren.

## Stack (Stapel)

**In einem Satz:** Beim Stack kommt immer das zuletzt Hingelegte zuerst wieder heraus.

**Was ist das?** Ein Stack ist eine Liste, bei der du nur an das **oberste** Element herankommst, wie beim Tellerstapel. Das Prinzip heißt **LIFO**: Last In, First Out.

| Operation | Wirkung |
|---|---|
| push(x) | x oben auf den Stapel legen |
| pop() | oberstes Element herunternehmen und zurückgeben |
| top() | oberstes Element lesen, aber liegen lassen |
| Fehlerfall | pop() oder top() auf einem leeren Stapel: Fehler melden |

Anwendungen (Ergänzung): der Aufrufstapel bei Rekursion, „Rückgängig“ im Editor, Klammern prüfen.

Ein Stack lässt sich als Array mit einem Index auf das oberste Element bauen oder als Liste, bei der immer nur am Kopf eingefügt und gelöscht wird.

## Queue (Warteschlange)

**In einem Satz:** Bei der Queue kommt immer das am längsten Wartende zuerst heraus.

**Was ist das?** Eine Queue funktioniert wie die Schlange an der Kasse: Wer zuerst kommt, ist zuerst dran. Das Prinzip heißt **FIFO**: First In, First Out.

| Operation | Wirkung |
|---|---|
| put(x) (auch enqueue) | x hinten anstellen |
| get() (auch dequeue) | vorderstes Element entnehmen |
| Fehlerfall | get() auf einer leeren Queue |

Eine Queue lässt sich als **Ringpuffer** in einem Array bauen. Stell dir ein Sushi-Laufband im Kreis vor: Zwei Indizes zeigen auf Anfang und Ende. Erreicht ein Index das Ende des Arrays, beginnt er wieder vorne.

### Stack und Queue durchspielen

So gehst du bei jeder Aufgabe vor:

1. Struktur als Liste aufschreiben. Markiere, wo oben (Stack) bzw. vorne (Queue) ist.
2. Jede Operation einzeln ausführen und den neuen Zustand notieren.
3. Bei pop, top und get die Ausgabe notieren.

**Durchgerechnetes Beispiel** (Stack: oben = rechts, Queue: vorne = links):

| Stack-Operation | Stack | Ausgabe | Queue-Operation | Queue | Ausgabe |
|---|---|---|---|---|---|
| push(3) | [3] | | put(3) | [3] | |
| push(7) | [3, 7] | | put(7) | [3, 7] | |
| pop() | [3] | 7 | get() | [7] | 3 |
| push(1) | [3, 1] | | put(1) | [7, 1] | |
| top() | [3, 1] | 1 (bleibt) | put(9) | [7, 1, 9] | |
| push(9) | [3, 1, 9] | | get() | [1, 9] | 7 |

> [!IMPORTANT]
> **Das Wichtigste**
> Stack = Tellerstapel = LIFO (push, pop, top). Queue = Kasse = FIFO (put, get).

> [!WARNING]
> **Achtung**
> LIFO und FIFO nicht vertauschen. top() liest nur, pop() entfernt. Und den Fehlerfall nicht vergessen: pop, top oder get auf eine leere Struktur.

## Bäume: Begriffe

**Was ist das?** Ein Baum erweitert die Liste: Ein Element kann mehrere Nachfolger haben. Die **Wurzel** ist der Ursprung und wird oben gezeichnet.

```text
Ebene 0:          A
                /   \
Ebene 1:       B     C
              / \     \
Ebene 2:     D   E     F
```

| Begriff | Bedeutung | im Bild |
|---|---|---|
| Wurzel | Ursprung des Baums | A |
| Vorgänger, Nachfolger | Jeder Knoten außer der Wurzel hat genau einen Vorgänger. | B ist Vorgänger von D und E |
| Blatt | Knoten ohne Nachfolger | D, E, F |
| innerer Knoten | Knoten mit mindestens einem Nachfolger | A, B, C |
| Ebene | Anzahl der Kanten von der Wurzel bis zum Knoten | A: 0, B: 1, D: 2 |
| Höhe | höchste Ebenennummer | 2 |
| Pfadlänge | Summe der Ebenen aller Knoten | 0 + 1 + 1 + 2 + 2 + 2 = 8 |

> [!IMPORTANT]
> **Das Wichtigste**
> Die Wurzel liegt auf Ebene 0. Die Höhe ist die tiefste Ebene. Blätter haben keine Kinder.

> [!WARNING]
> **Achtung**
> Ebenen zählen ab 0, nicht ab 1. Ein Baum mit Wurzel und einer Ebene darunter hat die Höhe 1.

## Geordneter Binärbaum

**In einem Satz:** Ein geordneter Binärbaum sortiert jede Zahl durch Fragen „kleiner oder größer?“ an ihren Platz.

**Stell dir vor:** Das Spiel „Ich denke mir eine Zahl zwischen 1 und 100“. Du fragst „Ist sie kleiner als 50?“, und mit jeder Antwort fällt die Hälfte weg. Der Binärbaum speichert genau diese Fragen: Jeder Knoten ist eine Frage, links geht es weiter bei „kleiner“, rechts bei „größer“.

**Was ist das?** In einem **Binärbaum** hat jeder Knoten höchstens zwei Kinder, ein linkes und ein rechtes. **Geordnet** heißt: Im linken Teilbaum stehen nur kleinere Werte, im rechten nur größere. So verbindet der Baum schnelles Suchen (wie ein Array) mit leichtem Einfügen (wie eine Liste).

### Einfügen und Suchen

1. An der Wurzel beginnen.
2. Vergleichen: Ist der Wert kleiner, nach links gehen, sonst nach rechts.
3. Wiederholen, bis ein freier Platz kommt. Dort den Wert als neues Blatt anhängen.

Die Suche läuft genauso, mit einem Vergleich pro Ebene.

**Durchgerechnetes Beispiel (Folienaufgabe):** Bilde einen Binärbaum aus [26, 5, 18, 16, 1, 43, 39, 27, 12]. Füge genau in dieser Reihenfolge ein:

| Zahl | Weg | Platz |
|---|---|---|
| 26 | – | Wurzel |
| 5 | < 26 | links von 26 |
| 18 | < 26, > 5 | rechts von 5 |
| 16 | < 26, > 5, < 18 | links von 18 |
| 1 | < 26, < 5 | links von 5 |
| 43 | > 26 | rechts von 26 |
| 39 | > 26, < 43 | links von 43 |
| 27 | > 26, < 43, < 39 | links von 39 |
| 12 | < 26, > 5, < 18, < 16 | links von 16 |

```text
Ebene 0:              26
                    /    \
Ebene 1:           5      43
                  / \     /
Ebene 2:         1  18   39
                    /    /
Ebene 3:          16    27
                  /
Ebene 4:        12
```

Höhe 4. **Probe:** Liest du den Baum von links nach rechts (links – Knoten – rechts), kommt die sortierte Folge heraus: 1, 5, 12, 16, 18, 26, 27, 39, 43 ✓

### Knoten löschen

Beim Löschen darf die Ordnung nicht kaputtgehen. Es gibt drei Fälle:

1. **Blatt:** einfach entfernen.
2. **Ein Kind:** Das Kind rückt mit seinem ganzen Unterbaum an die freie Stelle.
3. **Zwei Kinder:** Den Knoten ersetzen durch den **größten Wert im linken Teilbaum** (einmal links, dann ganz nach rechts) oder durch den **kleinsten Wert im rechten Teilbaum** (einmal rechts, dann ganz nach links). Der Ersatzknoten wird an seiner alten Stelle nach Fall 1 oder 2 entfernt.

**Durchgerechnetes Beispiel (Fortsetzung der Folienaufgabe):**

- **18 löschen:** 18 hat nur ein Kind (16). Also rückt 16 mit seinem Unterbaum (12) an die Stelle von 18.
- **Danach 26 löschen** (zwei Kinder):
  - Variante „größter links“: einmal links zu 5, dann rechts zu 16, weiter rechts geht es nicht. 16 wird die neue Wurzel, an seiner alten Stelle rückt 12 nach.
  - Variante „kleinster rechts“: einmal rechts zu 43, dann links 39, links 27. 27 wird die neue Wurzel.

Beide Varianten sind richtig. Gib in der Klausur an, welche du nimmst.

### Voll, vollständig, balanciert, degeneriert

| Begriff | Bedeutung |
|---|---|
| voll | Jeder Knoten hat 0 oder 2 Kinder, keiner hat nur eins. |
| vollständig | voll, und alle Blätter liegen auf der letzten Ebene |
| balanciert | Alle Blätter liegen auf der letzten oder vorletzten Ebene. Die Tiefe ist etwa log₂(n + 1). |
| degeneriert | Jeder Knoten hat höchstens ein Kind. Der Baum ist praktisch eine Liste. |

Warum ist das wichtig? Der Aufwand einer Suche hängt von der Länge des Wegs ab. Ein balancierter Baum mit 1 000 Knoten ist nur etwa 10 Ebenen tief. Fügst du aber schon sortierte Werte ein (1, 2, 3, 4), hängt jeder neue Knoten rechts am vorherigen: Der Baum degeneriert zur Liste.

> [!IMPORTANT]
> **Das Wichtigste**
> Links kleiner, rechts größer. Einfügen: an der Wurzel starten und vergleichen, bis ein freier Platz kommt. Löschen mit zwei Kindern: größter links oder kleinster rechts.

> [!WARNING]
> **Achtung**
> Die Zahlen genau in der gegebenen Reihenfolge einfügen. Beim Löschen mit zwei Kindern nie einfach das linke Kind hochziehen, sonst ist die Ordnung kaputt. Mach immer die Probe: von links nach rechts gelesen muss die Folge sortiert sein.

## Vergleich der Datenstrukturen

Die O-Angaben sind eine Ergänzung (O-Notation in Kapitel 8). Auf Deutsch: O(1) heißt „ein Schritt, egal wie viele Daten“, O(n) heißt „im schlimmsten Fall einmal alles ansehen“, O(log n) heißt „bei jedem Schritt fällt die Hälfte weg“.

| Struktur | Prinzip | Operationen | Zugriff | Vorteil / Nachteil |
|---|---|---|---|---|
| Array | feste Länge, Index ab 0 | a[i] lesen, schreiben | direkt, O(1) | schneller Zugriff / starre Länge |
| einfach verkettete Liste | Zeiger auf Nachfolger | suchen, einfügen, löschen | ab Kopf, O(n) | flexible Größe / langsame Suche |
| doppelt verkettete Liste | Zeiger auf Vorgänger und Nachfolger | wie oben, beide Richtungen | O(n) | bequemer / mehr Speicher |
| sortierte Liste | immer geordnet | sortiert einfügen, suchen | O(n) | immer sortiert / Einfügen teurer |
| Stack | LIFO | push, pop, top | nur oben | einfach / kein freier Zugriff |
| Queue | FIFO | put, get | nur vorne | faire Reihenfolge / kein freier Zugriff |
| geordneter Binärbaum | links kleiner, rechts größer | suchen, einfügen, löschen | balanciert O(log n) | schnell / kann degenerieren |

## Übungen

> [!TIP]
> **Übung 1 · leicht**
> Ein leerer Stack: push(4), push(8), push(2), pop(), push(5), top(), pop(), pop(). Welche Werte werden ausgegeben, und was liegt am Ende im Stack?
> *Quelle: Lernseite GIT, Aufgabe 7.1 (eigene Aufgabe)*

> [!TIP]
> **Übung 2 · leicht**
> Eine leere Queue: put(4), put(8), put(2), get(), put(5), get(), get(). Welche Werte werden ausgegeben, was steht am Ende in der Queue?
> *Quelle: Lernseite GIT, Aufgabe 7.2 (eigene Aufgabe)*

> [!TIP]
> **Übung 3 · mittel**
> In die sortierte Liste 3 → 9 → 14 → 20 sollen nacheinander 11 und 1 eingefügt werden. Wie sieht die Liste danach aus, und wie viele Elemente musst du jeweils ansehen?
> *Quelle: Lernseite GIT, Aufgabe 7.6 (eigene Aufgabe)*

> [!TIP]
> **Übung 4 · mittel**
> Nennen Sie für den Baum aus der Folienaufgabe [26, 5, 18, 16, 1, 43, 39, 27, 12] die Wurzel, alle Blätter und die Höhe. Auf welcher Ebene liegt 12?
> *Quelle: Folie GIT VL02 F. 133 und Rückschau F. 49, sinngemäß*

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> Bilden Sie einen geordneten Binärbaum aus [40, 20, 60, 10, 30, 50, 70, 25]. Ist er voll? Ist er vollständig?
> *Quelle: Lernseite GIT, Aufgabe 7.8 (eigene Aufgabe im Klausurstil)*

> [!TIP]
> **Übung 6 · Prüfungsniveau**
> Löschen Sie im Baum aus Übung 5 den Knoten 20. Geben Sie beide Varianten an.
> *Quelle: Lernseite GIT, Aufgabe 7.9 (eigene Aufgabe im Klausurstil)*

## Lösungen

### Übung 1

| Operation | Stack (oben = rechts) | Ausgabe |
|---|---|---|
| push(4) | [4] | |
| push(8) | [4, 8] | |
| push(2) | [4, 8, 2] | |
| pop() | [4, 8] | 2 |
| push(5) | [4, 8, 5] | |
| top() | [4, 8, 5] | 5 (bleibt) |
| pop() | [4, 8] | 5 |
| pop() | [4] | 8 |

Ausgaben: **2, 5, 5, 8**. Am Ende liegt nur noch **[4]** im Stack.

### Übung 2

| Operation | Queue (vorne = links) | Ausgabe |
|---|---|---|
| put(4) | [4] | |
| put(8) | [4, 8] | |
| put(2) | [4, 8, 2] | |
| get() | [8, 2] | 4 |
| put(5) | [8, 2, 5] | |
| get() | [2, 5] | 8 |
| get() | [5] | 2 |

Ausgaben: **4, 8, 2**. Am Ende steht **[5]** in der Queue.

### Übung 3

1. 11 einfügen: 3 < 11 weiter, 9 < 11 weiter, 14 > 11 stopp. Du siehst **3 Elemente** an und hängst 11 zwischen 9 und 14 ein: zuerst 11.next = 14, dann 9.next = 11.
2. 1 einfügen: 3 > 1. Du siehst **1 Element** an. Die 1 wird der neue Kopf.
3. Ergebnis: **1 → 3 → 9 → 11 → 14 → 20**.

### Übung 4

- Wurzel: **26**.
- Blätter: **1, 12, 27**.
- Höhe: **4**.
- 12 liegt auf **Ebene 4** (Weg 26 → 5 → 18 → 16 → 12).

### Übung 5

1. 40 wird Wurzel.
2. 20 < 40: links. 60 > 40: rechts.
3. 10 < 40, < 20: links von 20. 30 < 40, > 20: rechts von 20.
4. 50 > 40, < 60: links von 60. 70 > 40, > 60: rechts von 60.
5. 25 < 40, > 20, < 30: links von 30.

```text
              40
            /    \
          20      60
         /  \    /  \
       10   30  50   70
            /
          25
```

Probe von links nach rechts: 10, 20, 25, 30, 40, 50, 60, 70 ✓

Der Baum ist **nicht voll**, weil 30 nur ein Kind (25) hat. Damit ist er auch **nicht vollständig**. Ohne die 25 wäre er vollständig.

### Übung 6

20 hat zwei Kinder (10 und 30).

- **Variante „größter im linken Teilbaum“:** einmal links zu 10, dann ganz nach rechts. 10 hat kein rechtes Kind, also ist 10 schon der größte Wert. 10 ersetzt 20, an der alten Stelle fällt das Blatt 10 weg. 30 mit 25 bleibt rechts. Ergebnis (Schreibweise: Knoten(linkes Kind, rechtes Kind), – = leer): 40(10(–, 30(25)), 60(50, 70)).
- **Variante „kleinster im rechten Teilbaum“:** einmal rechts zu 30, dann ganz nach links zu 25. 25 ersetzt 20, und an der alten Stelle fällt das Blatt 25 weg. Ergebnis: 40(25(10, 30), 60(50, 70)).

Die zweite Variante ergibt sogar einen vollständigen Baum.

```text
Variante kleinster rechts:
              40
            /    \
          25      60
         /  \    /  \
       10   30  50   70
```
