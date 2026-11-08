---
title: "for-Schleifen ganz langsam"
order: 2
summary: "Schleifen Runde für Runde verstehen: range(), Listen durchgehen, aufsummieren und zählen, jeweils mit einer Rundentabelle."
klausur: "relevant"
---

Fast jedes Programm ab VL3 enthält eine `for`-Schleife: die Personalkosten in VL6, `finden()` und `suchen()` im Kaffeeshop. Wenn sich Schleifen für dich abstrakt anfühlen, fang hier an. Du brauchst nur `print()` und Variablen. Beides kommt ausführlich in Kapitel 3, hier reicht: `summe = 0` gibt dem Namen `summe` den Wert 0.

**In einem Satz:** Eine `for`-Schleife sagt dem Computer: „Mach dasselbe noch einmal, und zwar für jedes Ding in dieser Reihe, eins nach dem anderen.“

Es gibt nur einen Trick. Du gehst die Schleife Runde für Runde durch und schreibst nach jeder Runde auf, welchen Wert jede Variable hat. Das ist eine **Rundentabelle**. Sie hilft bei jeder Klausuraufgabe der Art „Was gibt das Programm aus?“.

> [!NOTE]
> **Beispiel: Die Kassiererin**
> Auf dem Band liegen drei Waren. Die Kassiererin nimmt eine Ware in die Hand, scannt sie, legt sie weg und nimmt die nächste. Das ist eine Runde. Ist das Band leer, sagt sie die Summe. Bei `for ware in einkauf:` ist `ware` die Hand: In jeder Runde liegt eine andere Ware darin.
>
> Übersetzt in Code-Teile:
>
> | Im Supermarkt | Im Code |
> |---|---|
> | das Band mit allen Waren | die Liste `einkauf` |
> | die Hand, in der gerade eine Ware liegt | die Schleifenvariable `ware` |
> | „scannen“, was sie mit jeder Ware tut | die eingerückten Zeilen |
> | das Display der Kasse, das mitzählt | eine Variable wie `summe` |
> | Band leer, Summe ansagen | die erste Zeile nach der Schleife, nicht eingerückt |

Dieses Kapitel ist eine Ergänzung zur Vorlesung. Die Inhalte (`for`, `range()`) stehen auf den Folien von VL3 (F. 69–77). Die Rundentabellen und die Aufgaben sind eigene Übungen.

## Schritt 1: range() zählt für dich

### Was ist das?

```python
for i in range(3):
    print("Runde", i)
print("fertig")
```

```text
Runde 0
Runde 1
Runde 2
fertig
```

Lies die erste Zeile so: „Für jedes `i` aus der Reihe 0, 1, 2 mach Folgendes.“ `range(3)` liefert die Zahlen 0, 1, 2. Es beginnt bei 0, und die 3 selbst ist nicht dabei. Drei Zahlen, also drei Runden. Alles, was eingerückt unter der `for`-Zeile steht, läuft in jeder Runde. `print("fertig")` ist nicht eingerückt. Es läuft nur einmal, nach der letzten Runde.

| Runde | i | Ausgabe |
|---|---|---|
| 1 | 0 | Runde 0 |
| 2 | 1 | Runde 1 |
| 3 | 2 | Runde 2 |
| nach der Schleife | 2 (bleibt) | fertig |

Mit zwei Zahlen gibst du den Start an: `range(1, 4)` liefert 1, 2, 3. Mit drei Zahlen kommt die Schrittweite dazu: `range(0, 10, 3)` liefert 0, 3, 6, 9.

```python
for i in range(1, 4):
    print(i, "mal 10 ist", i * 10)
```

```text
1 mal 10 ist 10
2 mal 10 ist 20
3 mal 10 ist 30
```

| Runde | i | i * 10 | Ausgabe |
|---|---|---|---|
| 1 | 1 | 10 | 1 mal 10 ist 10 |
| 2 | 2 | 20 | 2 mal 10 ist 20 |
| 3 | 3 | 30 | 3 mal 10 ist 30 |

> [!IMPORTANT]
> **Das Wichtigste**
> `range(start, stop, schritt)`: Start ist dabei, Stopp nicht. Ohne Start beginnt es bei 0. Eingerückte Zeilen laufen in jeder Runde, nicht eingerückte danach einmal.

> [!WARNING]
> **Achtung**
> `range(1, 5)` liefert nur 1 bis 4. Für „1 bis 5“ brauchst du `range(1, 6)`. Dieser Fehler heißt **Off-by-one**: Die Schleife läuft einmal zu oft oder zu selten (VL3 F. 78).

## Schritt 2: eine Liste durchgehen

### Was ist das?

Statt Zahlen kann die Schleife direkt die Elemente einer Liste nehmen. Das ist der häufigste Fall in OOP-Aufgaben, etwa `for produkt in self.produkte:`.

```python
einkauf = ["Kaffee", "Tee", "Kakao"]
for ware in einkauf:
    print("Ich kaufe", ware)
```

```text
Ich kaufe Kaffee
Ich kaufe Tee
Ich kaufe Kakao
```

| Runde | ware | Ausgabe |
|---|---|---|
| 1 | "Kaffee" (Element 0) | Ich kaufe Kaffee |
| 2 | "Tee" (Element 1) | Ich kaufe Tee |
| 3 | "Kakao" (Element 2) | Ich kaufe Kakao |

Den Namen `ware` hast du selbst gewählt. Python setzt ihn in jeder Runde auf das nächste Element. Du musst nichts hochzählen und keinen Index verwalten.

> [!IMPORTANT]
> **Das Wichtigste**
> `for element in liste:` hat so viele Runden, wie die Liste Elemente hat. In jeder Runde zeigt der Name auf das nächste Element.

> [!WARNING]
> **Achtung**
> Die Schleifenvariable muss nicht benutzt werden. Auch dann läuft die Schleife so oft, wie die Liste lang ist.

## Schritt 3: aufsummieren

### Was ist das?

Das Muster steckt in vielen Aufgaben, zum Beispiel in `gesamtsumme()` im Kaffeeshop. Es hat drei Teile, und jeder steht an seiner festen Stelle:

1. **Vor der Schleife:** Startwert, `summe = 0`. Die Kassiererin stellt die Kasse auf null.
2. **In der Schleife:** einen Wert dazuzählen, `summe = summe + preis`. Eine Ware scannen.
3. **Nach der Schleife:** das Ergebnis benutzen, mit `print` oder `return`. Die Summe ansagen.

```python
preise = [3, 5, 2]
summe = 0
for preis in preise:
    summe = summe + preis
    print("nach", preis, "ist summe", summe)
print("Gesamt:", summe)
```

```text
nach 3 ist summe 3
nach 5 ist summe 8
nach 2 ist summe 10
Gesamt: 10
```

| Runde | preis | summe vorher | Rechnung | summe nachher | Ausgabe |
|---|---|---|---|---|---|
| Start | – | – | summe = 0 | 0 | – |
| 1 | 3 | 0 | 0 + 3 | 3 | nach 3 ist summe 3 |
| 2 | 5 | 3 | 3 + 5 | 8 | nach 5 ist summe 8 |
| 3 | 2 | 8 | 8 + 2 | 10 | nach 2 ist summe 10 |
| danach | – | – | – | 10 | Gesamt: 10 |

Wichtig ist die Spalte „summe vorher“: Der Wert vom Ende einer Runde ist der Wert am Anfang der nächsten. `summe += preis` ist dieselbe Rechnung in kurz.

> [!IMPORTANT]
> **Das Wichtigste**
> Startwert vor die Schleife, Dazuzählen in die Schleife, Ergebnis nach die Schleife. Bei einer Summe startest du mit 0, bei einem Produkt mit 1.

> [!WARNING]
> **Achtung**
> Steht `summe = 0` eingerückt **in** der Schleife, wird die Kasse in jeder Runde wieder auf null gestellt. Am Ende steht nur der letzte Preis da.

```python
preise = [3, 5, 2]
for preis in preise:
    summe = 0  # FEHLER: steht in der Schleife
    summe = summe + preis
print("Gesamt:", summe)
```

```text
Gesamt: 2
```

Runde 1: summe 0 → 3. Runde 2: wieder 0 → 5. Runde 3: wieder 0 → 2. Genauso falsch ist ein `return summe` in der Schleife. Dann ist nach Runde 1 Schluss. Beides siehst du an der Einrückung.

## Schritt 4: zählen statt summieren

### Was ist das?

Das gleiche Muster, aber du zählst nur, wenn eine Bedingung stimmt. `if` prüft die Bedingung (mehr dazu in Kapitel 4).

```python
zahlen = [4, 7, 1, 9]
anzahl = 0
for zahl in zahlen:
    if zahl > 5:
        anzahl += 1
print(anzahl)
```

```text
2
```

| Runde | zahl | zahl > 5? | anzahl danach |
|---|---|---|---|
| Start | – | – | 0 |
| 1 | 4 | nein | 0 |
| 2 | 7 | ja → += 1 | 1 |
| 3 | 1 | nein | 1 |
| 4 | 9 | ja → += 1 | 2 |

> [!IMPORTANT]
> **Das Wichtigste**
> Zählen ist Aufsummieren mit `+= 1`, aber nur im `if`-Zweig.

> [!WARNING]
> **Achtung**
> Das `anzahl += 1` muss eine Stufe tiefer eingerückt sein als das `if`. Sonst zählt die Schleife jede Runde mit.

## So legst du eine Rundentabelle an

1. Schreib eine Spalte für die Runde und eine Spalte für jede Variable, die sich ändert.
2. Trag in die Zeile „Start“ die Werte vor der Schleife ein.
3. Geh die Schleife Zeile für Zeile durch. Trag am Ende jeder Runde die neuen Werte ein.
4. Schreib in eine eigene Spalte, was `print` in dieser Runde ausgibt.
5. Nach der letzten Runde: Was steht nach der Schleife?

Durchgerechnet für `for i in range(2, 9, 3): print(i * i)`: Start 2, Schritt 3, Stopp 9 nicht dabei. Also i = 2, 5, 8. Runde 1: 4. Runde 2: 25. Runde 3: 64. Danach wäre i = 11, und das ist schon zu groß.

## Übungen

> [!TIP]
> **Übung 1 · leicht**
> Was gibt das Programm aus?
>
> ```python
> for i in range(4):
>     print(i)
> ```
>
> Quelle: eigene Aufgabe

> [!TIP]
> **Übung 2 · leicht**
> Was gibt das Programm aus? Wie oft erscheint „Hallo“, wie oft „Tschüss“?
>
> ```python
> for x in [1, 2]:
>     print("Hallo")
> print("Tschüss")
> ```
>
> Quelle: eigene Aufgabe

> [!TIP]
> **Übung 3 · mittel**
> Was gibt das Programm aus? Achte auf die Schrittweite.
>
> ```python
> for i in range(2, 7, 2):
>     print(i)
> ```
>
> Quelle: eigene Aufgabe

> [!TIP]
> **Übung 4 · mittel**
> Fülle die Rundentabelle aus. Was wird am Ende ausgegeben?
>
> ```python
> woerter = ["a", "bb", "ccc"]
> laenge = 0
> for wort in woerter:
>     laenge += len(wort)
> print(laenge)
> ```
>
> Quelle: eigene Aufgabe

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> Schreibe eine Funktion `produkt_aller(zahlen: list[int]) -> int`, die alle Zahlen miteinander multipliziert. `produkt_aller([2, 3, 4])` soll 24 liefern. Welcher Startwert ist richtig? Was liefert die leere Liste? (Funktionen kommen ausführlich in Kapitel 5.)
>
> Quelle: eigene Aufgabe

## Lösungen

### Übung 1

1. Was liefert `range(4)`? Start fehlt, also ab 0. Stopp 4 ist nicht dabei. Also 0, 1, 2, 3.
2. Vier Zahlen, also vier Runden.
3. In jeder Runde wird `i` ausgegeben.

| Runde | i | Ausgabe |
|---|---|---|
| 1 | 0 | 0 |
| 2 | 1 | 1 |
| 3 | 2 | 2 |
| 4 | 3 | 3 |

```python
for i in range(4):
    print(i)
```

```text
0
1
2
3
```

### Übung 2

Die Liste hat zwei Elemente, also zwei Runden mit „Hallo“. `x` wird nicht benutzt, das ist egal. „Tschüss“ ist nicht eingerückt und kommt einmal am Ende.

| Runde | x | Ausgabe |
|---|---|---|
| 1 | 1 | Hallo |
| 2 | 2 | Hallo |
| nach der Schleife | 2 (bleibt) | Tschüss |

```python
for x in [1, 2]:
    print("Hallo")
print("Tschüss")
```

```text
Hallo
Hallo
Tschüss
```

### Übung 3

1. Start ist 2, Schrittweite 2, Stopp 7.
2. Zahlen aufschreiben: 2, dann 2 + 2 = 4, dann 4 + 2 = 6.
3. Die nächste wäre 6 + 2 = 8. 8 ist nicht kleiner als 7, also Schluss.

| Runde | i | Ausgabe |
|---|---|---|
| 1 | 2 | 2 |
| 2 | 4 | 4 |
| 3 | 6 | 6 |

```python
for i in range(2, 7, 2):
    print(i)
```

```text
2
4
6
```

### Übung 4

| Runde | wort | len(wort) | laenge danach |
|---|---|---|---|
| Start | – | – | 0 |
| 1 | "a" | 1 | 1 |
| 2 | "bb" | 2 | 3 |
| 3 | "ccc" | 3 | 6 |

```python
woerter = ["a", "bb", "ccc"]
laenge = 0
for wort in woerter:
    laenge += len(wort)
print(laenge)
```

```text
6
```

### Übung 5

1. Startwert ist 1, nicht 0. Mit 0 wäre jedes Produkt 0.
2. In der Schleife: `ergebnis = ergebnis * zahl`.
3. Nach der Schleife: `return ergebnis`.

```python
def produkt_aller(zahlen: list[int]) -> int:
    ergebnis = 1  # bei einem Produkt mit 1 starten
    for zahl in zahlen:
        ergebnis = ergebnis * zahl
    return ergebnis


print(produkt_aller([2, 3, 4]))
print(produkt_aller([]))
```

```text
24
1
```

| Runde | zahl | ergebnis vorher | Rechnung | ergebnis nachher |
|---|---|---|---|---|
| Start | – | – | ergebnis = 1 | 1 |
| 1 | 2 | 1 | 1 · 2 | 2 |
| 2 | 3 | 2 | 2 · 3 | 6 |
| 3 | 4 | 6 | 6 · 4 | 24 |
| danach | – | – | return | 24 |

Bei der leeren Liste läuft keine einzige Runde. Der Startwert 1 bleibt stehen und wird zurückgegeben.
