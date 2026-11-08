---
title: "Kontrollstrukturen und Listen"
order: 4
summary: "Verzweigungen mit if, elif, else und match, logische Operatoren, Schleifen mit while und for, break und continue sowie Listen und Tupel."
klausur: "relevant"
---

Ohne Kontrollstrukturen läuft ein Programm einfach von oben nach unten. VL3 bringt zwei Ideen, mit denen Programme erst nützlich werden: Code nur unter einer Bedingung ausführen und Code wiederholen. Dazu kommen Listen, in denen du viele Werte unter einem Namen speicherst.

Ein Alltagsbeispiel: Ein Onlineshop prüft „Ist der Bestellwert mindestens 50 €? Dann versandkostenfrei.“ Das ist eine Verzweigung. Und er geht alle Artikel im Warenkorb durch, um die Summe zu bilden. Das ist eine Schleife über eine Liste. Fast jede Programmieraufgabe in der Klausur braucht beides.

Es gibt drei Grundformen (VL3 F. 7): **Sequenz** (Zeilen nacheinander), **Selektion** (einen Weg wählen: `if`, `match`) und **Iteration** (wiederholen: `while`, `for`). Ein Doppelpunkt öffnet einen Block. Alle Zeilen, die vier Leerzeichen weiter eingerückt sind, gehören dazu (F. 13). In Python ist Einrückung Syntax, nicht nur Optik (F. 23).

## Verzweigungen mit if, elif und else

### Was ist das?

**In einem Satz:** Mit `if` sagst du: „Nur wenn das hier stimmt, mach Folgendes.“

**Stell dir vor:** Du stehst morgens vor dem Kleiderschrank und schaust aufs Thermometer. Unter 0 Grad: dicke Jacke. Sonst unter 20 Grad: Pulli. Sonst unter 30 Grad: T-Shirt. Sonst: kurze Hose. Du gehst die Fragen von oben nach unten durch und hörst bei der ersten auf, die passt. Genau so arbeitet `if`–`elif`–`else`.

So prüft Python das Beispiel unten bei `temperatur = 22`:

| Schritt | Zeile | Frage | Antwort | was passiert |
|---|---|---|---|---|
| 1 | `if temperatur < 0:` | 22 < 0? | nein | weiter zur nächsten Frage |
| 2 | `elif temperatur < 20:` | 22 < 20? | nein | weiter zur nächsten Frage |
| 3 | `elif temperatur < 30:` | 22 < 30? | ja | „Angenehm.“ ausgeben, **fertig** |
| – | `else:` | – | wird nicht mehr angeschaut | – |

```python
temperatur = 22
if temperatur < 0:
    print("Gefriert!")
elif temperatur < 20:
    print("Kühl.")
elif temperatur < 30:
    print("Angenehm.")
else:
    print("Heiß!")
```

```text
Angenehm.
```

- Um die Bedingung stehen keine Klammern. Am Zeilenende steht ein Doppelpunkt.
- `else` steht auf derselben Ebene wie `if`. Bei `if`–`else` läuft genau ein Block.
- `elif` heißt „else if“. Python prüft die Bedingungen nacheinander und **stoppt beim ersten Treffer** (F. 19–22). Bei 22 Grad ist `22 < 20` falsch und `22 < 30` wahr. Der Rest wird nicht mehr geprüft.

### Die Reihenfolge entscheidet

Übung 1 (F. 27) ordnet Punkten eine Note zu. Weil Python beim ersten Treffer stoppt, muss die strengste Bedingung zuerst stehen. Steht `punkte >= 50` oben, bekommt auch jemand mit 95 Punkten „ausreichend“, ohne Fehlermeldung. Das ist ein Logikfehler.

```python
punkte = 95
if punkte >= 50:
    print("ausreichend")
elif punkte >= 90:
    print("sehr gut")
else:
    print("nicht bestanden")
```

```text
ausreichend
```

Getestet wird an den Grenzen: je ein Wert genau auf und knapp unter jeder Grenze, also 90/89, 75/74 und so weiter (Musterlösung).

> [!IMPORTANT]
> **Das Wichtigste**
> Bei `if`–`elif`–`else` läuft höchstens ein Zweig, nämlich der erste, dessen Bedingung wahr ist. Die strengste Bedingung gehört nach oben.

> [!WARNING]
> **Achtung**
> Fehlender Doppelpunkt, fehlende Einrückung und ein `else` ohne direkt vorangehendes `if` meldet Python vor dem Start (F. 24, 26). Eine Zeile, die nicht eingerückt ist, gehört nicht mehr zum Block und läuft immer.

## match, bedingter Ausdruck und Wahrheitswerte

### Was ist das?

`match` vergleicht einen Wert der Reihe nach mit festen Fällen, wie `switch` in Java (F. 29). Der erste passende Fall läuft, danach ist Schluss. Ein `break` ist nicht nötig. `case _:` passt immer, wie `default`. Mehrere Werte verbindest du mit `|` (F. 31).

```python
for note in ["B", "E", "X"]:
    match note:
        case "A" | "B" | "C":
            print(note, "Bestanden")
        case "D" | "E" | "F":
            print(note, "Nicht bestanden")
        case _:
            print(note, "Ungültige Eingabe")
```

```text
B Bestanden
E Nicht bestanden
X Ungültige Eingabe
```

Der **bedingte Ausdruck** wählt zwischen zwei Werten: `WertWennWahr if Bedingung else WertWennFalsch` (F. 35).

```python
betrag = 25.0
status = "offen" if betrag > 0 else "bezahlt"
print(status)
```

```text
offen
```

In einer Bedingung darf jeder Wert stehen. Als falsch gelten `False`, `None`, `0`, `0.0`, der leere String und die leere Liste. Alles andere gilt als wahr, auch `-1`, `"0"` und `[0]` (F. 37). Man sagt *falsy* und *truthy*.

> [!IMPORTANT]
> **Das Wichtigste**
> `match` nur für feste Werte. Bereiche wie `note < 3` prüfst du mit `if`–`elif` (F. 30). Leere Dinge (`0`, `""`, `[]`, `None`) gelten als falsch.

> [!WARNING]
> **Achtung**
> `"0"` ist ein nicht leerer Text und gilt deshalb als wahr.

## Logische Operatoren in Bedingungen

### Was ist das?

Python wertet zuerst die Vergleiche aus, dann `not`, dann `and`, zuletzt `or` (F. 43). Klammern gehen vor.

**Bedingung umkehren** (F. 44): Jede Teilbedingung umkehren und aus `or` wird `and` (und umgekehrt). Das Gegenteil von `bestellwert >= 50 or ist_premium` ist `bestellwert < 50 and not ist_premium`. Das Gegenteil von `>= 50` ist `< 50`, nicht `<= 50`.

**Kurzschlussauswertung** (F. 45): Python wertet von links nach rechts aus und hört auf, sobald das Ergebnis feststeht. Ist bei `and` die linke Seite falsch, wird die rechte gar nicht mehr berechnet. Die Absicherung gehört deshalb nach vorn:

```python
anzahl = 0
umsatz = 0.0
print(anzahl > 0 and umsatz / anzahl > 100)
```

```text
False
```

Ein Klassiker aus Übung 3 ist das Schaltjahr: durch 4 teilbar und nicht durch 100, oder durch 400 teilbar.

```python
for jahr in [1900, 2000, 2024, 2026]:
    ist_schaltjahr = jahr % 4 == 0 and (jahr % 100 != 0 or jahr % 400 == 0)
    print(jahr, ist_schaltjahr)
```

```text
1900 False
2000 True
2024 True
2026 False
```

> [!IMPORTANT]
> **Das Wichtigste**
> Rangfolge: Vergleiche, dann `not`, dann `and`, dann `or`. Sobald `and` und `or` zusammen vorkommen, setzt du Klammern.

> [!WARNING]
> **Achtung**
> `umsatz / anzahl > 100 and anzahl > 0` stürzt bei `anzahl = 0` mit `ZeroDivisionError` ab, weil die Division zuerst ausgewertet wird.

## Schleifen mit while

### Was ist das?

**In einem Satz:** `while` heißt „solange“: Wiederhole den Block, solange die Bedingung noch stimmt.

**Stell dir vor:** Du füllst eine Gießkanne am Wasserhahn. Du schaust nicht vorher nach, wie viele Sekunden das dauert. Du schaust immer wieder hin: Noch nicht voll? Weiter laufen lassen. Voll? Hahn zu. Bei `for` weißt du vorher, wie viele Runden es gibt (so viele Waren auf dem Band). Bei `while` weißt du es nicht, du prüfst vor jeder Runde neu.

`while` wiederholt den Block, solange die Bedingung `True` ist. Ist sie von Anfang an `False`, läuft der Block kein einziges Mal (F. 57). Nimm `while`, wenn du vorher nicht weißt, wie oft wiederholt wird.

```python
kontostand = 1000.0
jahre = 0
while kontostand < 2000:
    kontostand *= 1.05
    jahre += 1
print(f"Nach {jahre} Jahren: {kontostand:.2f} Euro")
```

```text
Nach 15 Jahren: 2078.93 Euro
```

Die Rundentabelle (gekürzt, Kontostand gerundet). Vor jeder Runde fragt Python: Ist `kontostand < 2000`?

| Runde | Frage vorher | kontostand danach | jahre danach |
|---|---|---|---|
| Start | – | 1000.00 | 0 |
| 1 | 1000.00 < 2000? ja | 1050.00 | 1 |
| 2 | 1050.00 < 2000? ja | 1102.50 | 2 |
| 3 | 1102.50 < 2000? ja | 1157.62 | 3 |
| … | … | … | … |
| 14 | 1885.65 < 2000? ja | 1979.93 | 14 |
| 15 | 1979.93 < 2000? ja | 2078.93 | 15 |
| Ende | 2078.93 < 2000? **nein** | Schleife endet | 15 |

Python hat kein `do`–`while`. Für „mindestens einmal“ nimmt man `while True:` mit einem `break` am Ende (F. 65). Typischer Einsatz ist die Eingabeprüfung: so lange fragen, bis die Eingabe passt (F. 66).

> [!IMPORTANT]
> **Das Wichtigste**
> Bei `while` musst du selbst dafür sorgen, dass die Bedingung irgendwann falsch wird.

> [!WARNING]
> **Achtung**
> Typische Fehler (F. 62–64): Endlosschleife, weil die Zählvariable im Block nie geändert wird (abbrechen mit Strg+C). Falscher Startwert, dann läuft die Schleife nie. Falsche Schrittweite, etwa `i = i + 2`.

## Schleifen mit for, break und continue

### Was ist das?

Die `for`-Schleife geht eine Folge von Werten durch (F. 69). Zahlenfolgen liefert `range(start, stop, schritt)`: Start ist dabei, Stopp nicht (F. 70). Ausführlich mit Rundentabellen steht das in Kapitel 2.

```python
n = 7
ergebnis = 1
for i in range(1, n + 1):  # n + 1, weil stop nicht dazugehört
    ergebnis = ergebnis * i
print(f"Fakultät von {n} ist: {ergebnis}")
```

```text
Fakultät von 7 ist: 5040
```

| Runde | i | Rechnung | ergebnis danach |
|---|---|---|---|
| Start | – | ergebnis = 1 | 1 |
| 1 | 1 | 1 · 1 | 1 |
| 2 | 2 | 1 · 2 | 2 |
| 3 | 3 | 2 · 3 | 6 |
| 4 | 4 | 6 · 4 | 24 |
| 5 | 5 | 24 · 5 | 120 |
| 6 | 6 | 120 · 6 | 720 |
| 7 | 7 | 720 · 7 | 5040 |

`break` verlässt die Schleife sofort. `continue` überspringt nur den Rest der aktuellen Runde (F. 79–80).

**Stell dir vor:** Die Kassiererin scannt Ware für Ware. Bei `break` ruft jemand „Kasse schließt!“, und sie hört sofort ganz auf, auch wenn noch Waren auf dem Band liegen. Bei `continue` liegt ein Pfandbon auf dem Band. Den legt sie zur Seite, ohne ihn zu scannen, und nimmt die nächste Ware. Die Schleife läuft weiter.

```python
for i in range(1, 11):
    if i == 4:
        break
    print("break-Schleife:", i)
for i in range(1, 6):
    if i == 3:
        continue
    print("continue-Schleife:", i)
```

```text
break-Schleife: 1
break-Schleife: 2
break-Schleife: 3
continue-Schleife: 1
continue-Schleife: 2
continue-Schleife: 4
continue-Schleife: 5
```

| Schleife | i | Bedingung | was passiert |
|---|---|---|---|
| break | 1 | 1 == 4? nein | Ausgabe „break-Schleife: 1“ |
| break | 2 | 2 == 4? nein | Ausgabe „break-Schleife: 2“ |
| break | 3 | 3 == 4? nein | Ausgabe „break-Schleife: 3“ |
| break | 4 | 4 == 4? ja | `break`: Schleife sofort zu Ende, 5 bis 10 kommen nie dran |
| continue | 1 | 1 == 3? nein | Ausgabe „continue-Schleife: 1“ |
| continue | 2 | 2 == 3? nein | Ausgabe „continue-Schleife: 2“ |
| continue | 3 | 3 == 3? ja | `continue`: `print` überspringen, gleich weiter mit i = 4 |
| continue | 4 | 4 == 3? nein | Ausgabe „continue-Schleife: 4“ |
| continue | 5 | 5 == 3? nein | Ausgabe „continue-Schleife: 5“ |

> [!IMPORTANT]
> **Das Wichtigste**
> `break`, wenn das Ergebnis feststeht (gefunden). `continue`, wenn bestimmte Werte übersprungen werden sollen (F. 84).

> [!WARNING]
> **Achtung**
> `break` beendet die ganze Schleife, `continue` nur diese Runde. Eine Summe startet mit 0, ein Produkt mit 1.

## Listen und Tupel

### Was ist das?

**In einem Satz:** Eine Liste ist ein Name für viele Werte in einer festen Reihenfolge.

**Stell dir vor:** Ein Schubladenschrank mit dem Etikett `noten`. Die Schubladen sind durchnummeriert, aber die oberste hat die Nummer **0**, nicht 1. Mit `noten[2]` ziehst du Schublade Nummer 2 auf, das ist die dritte von oben.

| Schublade (Index) | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Inhalt | 15 | 13 | 8 | 10 | 17 |
| von hinten gezählt | -5 | -4 | -3 | -2 | -1 |

`noten[2]` ist 8. `noten[-1]` ist die unterste Schublade, 17. `noten[5]` gibt es nicht: Fünf Schubladen haben die Nummern 0 bis 4.

Auf der Folie: Eine Liste speichert viele Werte geordnet unter einem Namen (F. 88). Der Index beginnt bei 0. Bei 5 Elementen sind 0 bis 4 gültig, negative Indizes zählen von hinten (F. 89). `append()` hängt hinten an.

```python
noten = [15, 13, 8, 10, 17]
noten[2] = 9
noten.append(12)
print(noten, len(noten))
print(sum(noten), min(noten), max(noten), 8 in noten)
print(noten[1:3], sorted(noten), noten[-1])
```

```text
[15, 13, 9, 10, 17, 12] 6
76 9 17 False
[13, 9] [9, 10, 12, 13, 15, 17] 12
```

`sorted()` liefert eine sortierte Kopie. Die Liste selbst bleibt unverändert (F. 97).

Durchlaufen geht direkt über die Elemente. Brauchst du die Position, nimmst du `enumerate()`. Zwei Listen im Gleichschritt gehst du mit `zip()` durch (F. 98–99).

```python
tage = ["Mo", "Di", "Mi"]
werte = [18.5, 21.0, 19.2]
for i, tag in enumerate(tage):
    print(i, tag)
for tag, wert in zip(tage, werte, strict=True):
    print(f"{tag}: {wert} °C")
```

```text
0 Mo
1 Di
2 Mi
Mo: 18.5 °C
Di: 21.0 °C
Mi: 19.2 °C
```

Eine Liste kann Listen enthalten, etwa für Tabellen. Der erste Index wählt die Zeile, der zweite die Spalte (F. 100). Die Falle: `* 3` kopiert nicht die Zeile, sondern nur den Verweis (F. 102–106). Stell dir drei Zettel vor, auf denen dieselbe Schrankadresse steht. Es gibt nur **einen** Schrank. Legst du über Zettel 1 etwas hinein, siehst du es auch über Zettel 2 und 3.

```python
falsch = [[0] * 4] * 3
falsch[0][0] = 1
print(falsch)
richtig = []
for _ in range(3):
    richtig.append([0] * 4)
richtig[0][0] = 1
print(richtig)
```

```text
[[1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0]]
[[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
```

Ein **Tupel** schreibt man mit runden Klammern: `punkt = (3, 4)`. Lesen geht wie bei Listen, ändern nicht. Es passt für feste Zusammenstellungen wie Koordinaten (F. 107).

### Höchsten Wert selbst finden: Schritt für Schritt

1. Starte mit dem **ersten Element**: `hoechster = werte[0]`.
2. Geh alle Werte durch.
3. Ist ein Wert größer als `hoechster`, merk ihn dir.
4. Nach der Schleife steht in `hoechster` das Maximum.

| Runde | wert | wert > hoechster? | hoechster danach |
|---|---|---|---|
| Start | – | – | -3 |
| 1 | -3 | nein | -3 |
| 2 | -1 | ja | -1 |
| 3 | -7 | nein | -1 |

```python
werte = [-3, -1, -7]
hoechster = werte[0]
for wert in werte:
    if wert > hoechster:
        hoechster = wert
print(hoechster)
```

```text
-1
```

> [!IMPORTANT]
> **Das Wichtigste**
> Index ab 0, letzter gültiger Index ist `len(liste) - 1`. Direkt über Elemente laufen ist der Python-Weg.

> [!WARNING]
> **Achtung**
> Startest du das Maximum mit `hoechster = 0`, ist das Ergebnis bei lauter negativen Werten falsch (Musterlösung Übung 6). `noten[5]` bei fünf Elementen gibt `IndexError`.

## Übungen

> [!TIP]
> **Übung 1 · leicht**
> Was wird bei `temperatur = 15` mit dem `if`–`elif`-Beispiel aus dem ersten Abschnitt ausgegeben?
>
> Quelle: Selbsttest-Quiz VL3 (sinngemäß)

> [!TIP]
> **Übung 2 · mittel**
> Was geben diese Zeilen aus?
>
> ```python
> i = 1
> while i <= 5:
>     print(i, end=" ")
>     i = i + 2
> print()
> for i in range(1, 5):
>     if i == 2:
>         continue
>     print(f"i = {i}")
> ```
>
> Quelle: Selbsttest-Quiz VL3 (sinngemäß)

> [!TIP]
> **Übung 3 · mittel**
> Was zeigt Python nach `falsch = [[0] * 2] * 2` und `falsch[0][0] = 1` für `falsch` an?
>
> Quelle: Selbsttest-Quiz VL3 (sinngemäß)

> [!TIP]
> **Übung 4 · Prüfungsniveau**
> Parkgebühren: PKW 2,00 €/h, ab 10 Stunden 10 % Rabatt; Motorrad 1,00 €/h; Transporter 3,50 €/h, ab 5 Stunden 20 % Rabatt. Für jedes Fahrzeug kommen 1,50 € Grundgebühr dazu, höchstens kostet es 50,00 €. Ungültige Typen führen zu einer Meldung. Schreibe die Berechnung mit `match`. Was kostet ein Transporter für 6 Stunden?
>
> Quelle: VL3 F. 38–39, Übung 2 (sinngemäß)

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> Stromkosten mit Staffelpreisen: bis 100 kWh 0,25 €/kWh, 101–300 kWh 0,22 €/kWh, ab 301 kWh 0,19 €/kWh, jede Stufe nur für die kWh in ihrem Bereich. Dazu immer 12,90 € Grundpreis. Mit Öko-Tarif und höchstens 250 kWh gibt es 5 € Bonus. Mehr als 100 € werden auf 100 € gesetzt. Was kosten 180 kWh mit Öko-Tarif?
>
> Quelle: VL3 F. 51–52, Übung 3 (sinngemäß)

## Lösungen

### Übung 1

1. `15 < 0`? Nein, weiter.
2. `15 < 20`? Ja. Also wird `Kühl.` ausgegeben.
3. Fertig. `elif temperatur < 30` und `else` werden nicht mehr geprüft, obwohl 15 < 30 auch stimmen würde.

### Übung 2

Die `while`-Schleife springt um 2: 1, 3, 5. Danach ist `i` gleich 7 und die Bedingung falsch. `continue` überspringt nur die Runde mit `i == 2`. `end=" "` sorgt dafür, dass nach jeder Zahl ein Leerzeichen statt eines Zeilenumbruchs kommt. Das leere `print()` beendet die Zeile.

| Schleife | i | Frage | was passiert |
|---|---|---|---|
| while | 1 | 1 <= 5? ja | „1 “ ausgeben, i = 3 |
| while | 3 | 3 <= 5? ja | „3 “ ausgeben, i = 5 |
| while | 5 | 5 <= 5? ja | „5 “ ausgeben, i = 7 |
| while | 7 | 7 <= 5? nein | Schleife endet |
| for | 1 | 1 == 2? nein | „i = 1“ |
| for | 2 | 2 == 2? ja | `continue`, nichts ausgeben |
| for | 3 | 3 == 2? nein | „i = 3“ |
| for | 4 | 4 == 2? nein | „i = 4“ (range(1, 5) endet vor 5) |

```python
i = 1
while i <= 5:
    print(i, end=" ")
    i = i + 2
print()
for i in range(1, 5):
    if i == 2:
        continue
    print(f"i = {i}")
```

```text
1 3 5 
i = 1
i = 3
i = 4
```

### Übung 3

1. `[0] * 2` baut **eine** innere Liste `[0, 0]`.
2. `[...] * 2` legt zwei Verweise auf genau diese eine innere Liste in die äußere Liste. Zwei Zettel, ein Schrank.
3. `falsch[0][0] = 1` ändert in dieser einen inneren Liste die erste Stelle.
4. Weil `falsch[1]` auf dieselbe Liste zeigt, sieht man die 1 in beiden Zeilen.

```python
falsch = [[0] * 2] * 2
falsch[0][0] = 1
print(falsch)
```

```text
[[1, 0], [1, 0]]
```

### Übung 4

Reihenfolge wie in der Musterlösung: Rabatt nur auf den Stundenpreis, dann die Grundgebühr, zuletzt der Höchstpreis. Statt `input()` steht hier eine Funktion mit festen Werten.

```python
from typing import Final

GRUNDGEBUEHR: Final = 1.50
HOECHSTPREIS: Final = 50.00


def gebuehr(fahrzeug: str, stunden: int) -> None:
    kosten = 0.0
    gueltig = True
    match fahrzeug:
        case "PKW":
            kosten = stunden * 2.00
            if stunden >= 10:
                kosten *= 0.90
        case "Motorrad":
            kosten = stunden * 1.00
        case "Transporter":
            kosten = stunden * 3.50
            if stunden >= 5:
                kosten *= 0.80
        case _:
            print(f"Unbekannter Fahrzeugtyp: {fahrzeug}")
            gueltig = False
    if gueltig:
        kosten += GRUNDGEBUEHR
        if kosten > HOECHSTPREIS:
            kosten = HOECHSTPREIS
        print(f"{fahrzeug}, {stunden} h: {kosten:.2f} Euro")


gebuehr("Transporter", 6)
gebuehr("PKW", 12)
gebuehr("Transporter", 24)
gebuehr("Bus", 2)
```

```text
Transporter, 6 h: 18.30 Euro
PKW, 12 h: 23.10 Euro
Transporter, 24 h: 50.00 Euro
Unbekannter Fahrzeugtyp: Bus
```

Transporter 6 h, Schritt für Schritt:

1. `match` findet den Fall `"Transporter"`.
2. Stundenpreis: 6 · 3,50 = 21,00 €.
3. Rabatt? 6 >= 5, ja. 20 % weniger heißt mal 0,8: 21,00 · 0,8 = 16,80 €.
4. Grundgebühr dazu: 16,80 + 1,50 = 18,30 €.
5. Mehr als 50 €? Nein, also bleibt es bei 18,30 €.

### Übung 5

1. Stufe finden: 180 kWh liegt in der zweiten Stufe.
2. Die ersten 100 kWh kosten je 0,25 €: 25,00 €.
3. Die restlichen 80 kWh kosten je 0,22 €: 17,60 €.
4. Grundpreis dazu: 25,00 + 17,60 + 12,90 = 55,50 €.
5. Öko-Tarif und höchstens 250 kWh: − 5,00 € = 50,50 €.
6. Deckel 100 € greift nicht.

```python
from typing import Final

PREIS_1: Final = 0.25
PREIS_2: Final = 0.22
PREIS_3: Final = 0.19
GRUNDPREIS: Final = 12.90

for verbrauch_kwh, oeko in [(180, True), (80, False), (400, False)]:
    if verbrauch_kwh <= 100:
        kosten = verbrauch_kwh * PREIS_1
    elif verbrauch_kwh <= 300:
        kosten = 100 * PREIS_1 + (verbrauch_kwh - 100) * PREIS_2
    else:
        kosten = 100 * PREIS_1 + 200 * PREIS_2 + (verbrauch_kwh - 300) * PREIS_3
    kosten += GRUNDPREIS
    if oeko and verbrauch_kwh <= 250:
        kosten -= 5
    if kosten > 100:
        kosten = 100
    print(f"{verbrauch_kwh} kWh, Öko {oeko}: {kosten:.2f} Euro")
```

```text
180 kWh, Öko True: 50.50 Euro
80 kWh, Öko False: 32.90 Euro
400 kWh, Öko False: 100.00 Euro
```

„Staffelpreis“ heißt laut Musterlösung: Jede Preisstufe gilt nur für die kWh in ihrem Bereich, nicht für alle 180 kWh.
