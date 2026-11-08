---
title: "Variablen, Datentypen und Operatoren"
order: 3
summary: "Werte und ihre Typen, Namen für Werte, Rechnen und Vergleichen, Texte und f-Strings, Typumwandlung und die vier Fehlerarten."
klausur: "relevant"
---

Jede Zeile Code besteht aus denselben Bausteinen: Werten, Namen für diese Werte und Operatoren, die mit ihnen rechnen. In VL2 lernst du diese Bausteine kennen. Viele Fragen im Selbsttest-Quiz zu VL2 sind „Was zeigt Python an?“-Aufgaben. Die Regeln hier musst du deshalb sicher im Kopf anwenden können.

Ein Alltagsbeispiel: Beim Online-Einkauf steht im Warenkorb „Menge: 3“, „Preis: 3,50 €“, „Artikel: Kaffee“. Das sind drei verschiedene Arten von Werten: eine ganze Zahl, eine Kommazahl und ein Text. Python unterscheidet sie genauso.

## Kommentare und Docstrings

### Was ist das?

Ein Kommentar beginnt mit `#` und reicht bis zum Zeilenende. Python ignoriert ihn, er richtet sich an Menschen (VL2 F. 8). Ein guter Kommentar erklärt, **warum** der Code etwas tut. Was er tut, zeigt der Code selbst (F. 9).

Ein **Docstring** `"""…"""` steht direkt unter einer `def`- oder `class`-Zeile und beschreibt Funktion oder Klasse (F. 10). Mehr dazu in Kapitel 5.

> [!WARNING]
> **Achtung**
> Einen Block-Kommentar wie `/* … */` aus Java gibt es in Python nicht. Für mehrere Zeilen beginnt jede Zeile mit `#`.

## Datentypen

### Was ist das?

**In einem Satz:** Der Datentyp sagt, was für eine Sorte Wert du vor dir hast: ganze Zahl, Kommazahl, Text, Ja/Nein oder „nichts“.

**Stell dir vor:** In der Küche gibt es Eier (zählt man ganz: 3 Stück), Mehl (wiegt man: 250,5 g), Etiketten (Text: „Zucker“) und Lichtschalter (an oder aus). Mit Eiern kannst du zählen, mit einem Etikett nicht rechnen. Genauso erlaubt Python je nach Typ andere Operationen.

Ein Datentyp beschreibt, welche Art von Wert vorliegt. Er legt fest, welche Operationen erlaubt sind: Zahlen kann man teilen, Texte nicht (F. 13). In Python ist jeder Wert ein Objekt (F. 15).

| Typ | Beispiele | Wichtig | Java |
|---|---|---|---|
| `int` | 42, -7, 1_000_000 | beliebig groß, kein Überlauf | int, long |
| `float` | 3.14, 2.0 | Dezimalpunkt, binär gespeichert, daher ungenau | double |
| `str` | "Hallo", "" | Text, unveränderlich | String, char |
| `bool` | True, False | großgeschrieben | boolean |
| `None` | None | „kein Wert vorhanden“, nicht 0 und nicht "" | null |

```python
print(type(42), type(3.14), type(True), type("Hallo"), type(None))
print(2 ** 100)
print(0.1 + 0.2)
print(0.1 + 0.2 == 0.3)
print(ord("A"), chr(66))
```

```text
<class 'int'> <class 'float'> <class 'bool'> <class 'str'> <class 'NoneType'>
1267650600228229401496703205376
0.30000000000000004
False
65 B
```

Jedes Zeichen ist intern eine Zahl nach dem Unicode-Standard. `ord()` liefert die Zahl zu einem Zeichen, `chr()` das Zeichen zu einer Zahl (F. 18). Faustregel (F. 25): `int` für ganze Zahlen, `float` für Messwerte, `str` für alles, womit man nicht rechnet, also auch Postleitzahlen und Telefonnummern.

Sprachen prüfen Typen zu verschiedenen Zeitpunkten (F. 14):

| Typisierung | Beispiele | Prüfung |
|---|---|---|
| statisch | Java, C | beim Kompilieren |
| dynamisch | Python, JavaScript | beim Ausführen |
| graduell | Python mit Typangaben + ty | vor dem Ausführen durch ein Prüfwerkzeug |

Im Kurs nutzen wir die dritte Zeile.

> [!IMPORTANT]
> **Das Wichtigste**
> Fünf einfache Typen: `int`, `float`, `str`, `bool`, `None`. `type(wert)` zeigt den Typ. Kommazahlen sind ungenau: `0.1 + 0.2` ist nicht genau `0.3`.

> [!WARNING]
> **Achtung**
> `true` (klein) ist ein Fehler, richtig ist `True`. Und `None` ist nicht dasselbe wie `0` oder `""`.

## Variablen und Konstanten

### Was ist das?

**In einem Satz:** Eine Variable ist ein Name, unter dem du dir einen Wert merkst, damit du ihn später wieder benutzen kannst.

**Stell dir vor:** Du klebst einen Notizzettel mit der Aufschrift `zahl` an eine Kiste, in der eine 10 liegt. Wenn du später „zahl“ sagst, schaut Python in die Kiste mit diesem Zettel und holt die 10 heraus. Bei `zahl = zahl + 1` passiert in genau dieser Reihenfolge:

1. Rechte Seite zuerst: In die Kiste `zahl` schauen. Da liegt 10.
2. 10 + 1 rechnen. Ergebnis 11.
3. Den Zettel `zahl` jetzt an die 11 kleben. Die 10 ist damit vergessen.

| Zeile | was Python tut | zahl danach |
|---|---|---|
| `zahl = 10` | Zettel `zahl` an die 10 kleben | 10 |
| `zahl = zahl + 1` | 10 holen, 10 + 1 = 11, Zettel an die 11 kleben | 11 |

Genauer gesagt ist eine Variable in Python ein **Name, der auf einen Wert zeigt**, wie ein Namensschild. Sie entsteht bei der ersten Zuweisung. Eine Deklaration wie `int zahl;` gibt es nicht (F. 31). Das `=` heißt „zeigt ab jetzt auf“, nicht „ist gleich“. Bei `zahl = zahl + 1` rechnet Python zuerst die rechte Seite aus (F. 32).

Mit `name: typ = wert` schreibst du den erwarteten Typ dazu, etwa `alter: int = 25` (F. 33). Python ignoriert die Angabe beim Ausführen. Erst `uv run ty check` prüft sie.

```python
zahl = 10
zahl = zahl + 1
breite, hoehe = 1920, 1080
a, b = 1, 2
a, b = b, a  # tauschen
print(zahl, breite, hoehe, a, b)
wert = 3,5
print(wert, type(wert))
```

```text
11 1920 1080 2 1
(3, 5) <class 'tuple'>
```

Bei `a, b = b, a` wertet Python zuerst die ganze rechte Seite aus und weist dann beiden Namen gleichzeitig zu (F. 35). Die letzte Zeile zeigt eine Falle: `wert = 3,5` ist kein Fehler, sondern ein Tupel aus zwei Zahlen.

**Namensregeln** (F. 45–46): Buchstaben, Ziffern und `_`, nicht mit einer Ziffer beginnen, kein Schlüsselwort wie `if`. Variablen und Funktionen schreibt man in `snake_case`, Klassen in `PascalCase`, Konstanten in `UPPER_SNAKE_CASE`. Python kennt kein `final`. Für Konstanten nimmt man Großbuchstaben und `Final` aus dem Modul `typing`. Dann meldet ty jede neue Zuweisung, Python selbst verhindert sie nicht (F. 47).

```python
from typing import Final

MWST_SATZ: Final = 0.19
netto = 100.0
print(netto * (1 + MWST_SATZ))
```

```text
119.0
```

> [!IMPORTANT]
> **Das Wichtigste**
> Der Typ gehört zum Wert, nicht zum Namen. Nach `x = 5` darf `x = "fünf"` folgen. Typangaben sind ein Versprechen, das ty prüft, nicht Python.

> [!WARNING]
> **Achtung**
> Eine Variable, die nur in einem übersprungenen `if`-Block einen Wert bekommt, gibt es danach nicht. Dann kommt ein `NameError` (F. 44):

```python
alter = 15
if alter >= 18:
    status = "volljährig"
print(status)
```

```text
Traceback (most recent call last):
  File "beispiel.py", line 4, in <module>
    print(status)
          ^^^^^^
NameError: name 'status' is not defined
```

## Operatoren

### Was ist das?

```python
print(7 / 2, 7 // 2, 7 % 2)
print(6 / 3, -7 // 2)
print(2 + 3 * 4, (2 + 3) * 4, 2 ** 10)
print(7 % 3, 8 % 3, 9 % 3, 13 % 2 == 0)
```

```text
3.5 3 1
2.0 -4
14 20 1024
1 2 0 False
```

- `/` liefert immer ein `float`, auch bei `6 / 3`.
**Stell dir vor:** 7 Stück Pizza für 2 Personen. Mit `/` teilst du genau: 3,5 Stück pro Person. Mit `//` gibt es nur ganze Stücke: 3 pro Person. Mit `%` fragst du, was übrig bleibt: 1 Stück.

| Ausdruck | Frage dazu | Ergebnis |
|---|---|---|
| `7 / 2` | Wie viel bekommt jede Person genau? | 3.5 |
| `7 // 2` | Wie viele **ganze** Stücke bekommt jede Person? | 3 |
| `7 % 2` | Wie viele Stücke bleiben übrig? | 1 |

Probe: 3 · 2 + 1 = 7. Ganzer Teil mal Teiler plus Rest ergibt wieder die Ausgangszahl.

- `//` ist die ganzzahlige Division und rundet **ab**, zur kleineren Zahl hin. Deshalb ist `-7 // 2` gleich `-4`. Denk an einen Zahlenstrahl: −7 / 2 = −3,5. „Abrunden“ heißt nach links gehen, und links von −3,5 liegt die −4, nicht die −3. Java liefert hier −3 (F. 53).
- `%` liefert den Rest: 7 = 2 · 3 + 1, also `7 % 3` = 1. Eine Zahl ist gerade, wenn `n % 2 == 0` (F. 54).
- Punkt vor Strich, `**` bindet am stärksten, Klammern legen die Reihenfolge fest (F. 64).

`x += 1` ist die Kurzform von `x = x + 1`. Ebenso gibt es `-=`, `*=`, `/=`, `//=` und `%=` (F. 55–57). Ein `x++` gibt es nicht.

Vergleiche (`==`, `!=`, `<`, `>`, `<=`, `>=`) liefern immer ein `bool` (F. 59). `==` vergleicht den Inhalt, auch bei Texten. `is` fragt „dasselbe Objekt?“ und wird vorerst nur für `None` benutzt (F. 60). Logisch verknüpft wird mit `and`, `or` und `not` (F. 62). `18 <= alter <= 65` bedeutet `alter >= 18 and alter <= 65` (F. 63).

### Rechenausdrücke auswerten: Schritt für Schritt

So gehst du bei einer „Was zeigt Python an?“-Aufgabe vor. Beispiel: `2 + 17 % 5 * 2 // 3`.

1. Klammern zuerst. Hier gibt es keine.
2. `**` als Nächstes. Gibt es keins.
3. `*`, `/`, `//`, `%` von links nach rechts: `17 % 5` = 2, dann `2 * 2` = 4, dann `4 // 3` = 1.
4. `+` und `-` zuletzt: 2 + 1 = 3.
5. Typ prüfen: Kam irgendwo `/` oder ein `float` vor? Nein, also `int`.

```python
print(2 + 17 % 5 * 2 // 3)
```

```text
3
```

> [!IMPORTANT]
> **Das Wichtigste**
> `/` gibt immer `float`. `//` rundet ab. `%` ist der Rest. `=` weist zu, `==` vergleicht.

> [!WARNING]
> **Achtung**
> Typische Fehler: `-7 // 2` für −3 halten (richtig: −4). `n / 2 == 0` statt `n % 2 == 0` zum Prüfen auf gerade. `alter == "30"` ist `False`, weil die Zahl 30 nicht der Text "30" ist. `x++` ist ein `SyntaxError`, `++x` ist gültig und tut nichts (zweimal Vorzeichen Plus, F. 58).

## Strings, f-Strings und Typumwandlung

### Was ist das?

```python
print("Hal" + "lo", "ha" * 3, len("Hallo"))
print("Hallo"[0], "Hallo"[-1], "Hallo"[1:3])
print("ll" in "Hallo", "python".upper())
```

```text
Hallo hahaha 5
H o al
True PYTHON
```

Positionen zählen ab 0, negative von hinten. Ein Ausschnitt `[1:3]` enthält Position 1 und 2, aber nicht 3 (F. 70). Strings sind unveränderlich (F. 23).

`+` verbindet nur Strings mit Strings. Ein **f-String** `f"…"` setzt Werte jeden Typs in geschweiften Klammern ein. Stell ihn dir als Lückentext vor: `f"{name} ist {alter} Jahre alt"` ist der Satz „___ ist ___ Jahre alt“, und Python füllt die Lücken mit dem, was gerade in den Kisten `name` und `alter` liegt. In den Klammern darf gerechnet werden, und `:.2f` formatiert mit zwei Nachkommastellen (F. 71).

```python
name = "Ada"
alter = 36
preis = 3.5
print(f"{name} ist {alter} Jahre alt")
print(f"Preis: {preis:.2f} €")
print(f"In 5 Jahren: {alter + 5}")
```

```text
Ada ist 36 Jahre alt
Preis: 3.50 €
In 5 Jahren: 41
```

Umgewandelt wird, indem man den Typ wie eine Funktion aufruft (F. 72). Automatisch wandelt Python nur zwischen Zahlen um: `bool` → `int` → `float` (F. 73). Text und Zahl mischt Python nie von selbst. Das meint „stark typisiert“.

```python
print(int(9.99), float(5), str(42), int("42"))
print(round(2.675, 2), round(9.5), 5 + 2.0, True + 1)
print("Alter: " + str(36))
```

```text
9 5.0 42 42
2.67 10 7.0 2
Alter: 36
```

`int()` schneidet ab und rundet nicht. `int("3.5")` geht nicht, weil der Text keine ganze Zahl ist. `round(2.675, 2)` ergibt wegen der binären Speicherung 2.67.

**Geld:** Kommazahlen sind binär gespeichert und deshalb ungenau. Für Geld nimmt man `Decimal` aus dem Modul `decimal`. Den Wert übergibst du als Text (F. 78–81):

```python
from decimal import Decimal

preis = 19.99
print(preis * 100)
print(int(preis * 100))
print(round(preis * 100))
print(Decimal("19.99") * 100)
print(Decimal(19.99))
```

```text
1998.9999999999998
1998
1999
1999.00
19.989999999999998436805981327779591083526611328125
```

Die letzte Zeile zeigt, warum der Text wichtig ist: `Decimal(19.99)` übernimmt die schon ungenaue Kommazahl.

> [!IMPORTANT]
> **Das Wichtigste**
> Text und Zahl verbindest du mit `str()` oder einem f-String. `int()` schneidet ab. Für Geld: `Decimal("19.99")` mit Anführungszeichen.

> [!WARNING]
> **Achtung**
> `"Alter: " + 36` gibt einen `TypeError`. `"12" + "3"` ergibt `"123"`, nicht 15. `int(19.99 * 100)` ergibt 1998: Ein Cent ist weg.

## Syntax, Semantik und Fehlerarten

### Was ist das?

**Syntax** ist die Form des Codes, die Grammatik. **Semantik** ist die Bedeutung, also was der Code bewirkt (F. 85).

| Fehlerart | Beispiel | Wann bemerkt? (F. 86) |
|---|---|---|
| Syntaxfehler | `print("Hallo"` | vor dem Start: `SyntaxError` |
| Typfehler | `"Alter: " + 36` | durch ty vor dem Start, sonst `TypeError` beim Ausführen |
| Laufzeitfehler | `a / b` mit `b = 0` | beim Ausführen: `ZeroDivisionError` |
| Logikfehler | `summe = 5 - 3` statt `+` | nie automatisch, nur durch Nachdenken und Testen |

Ein Semantikfehler aus Übung 5: Punkt vor Strich, gemeint war 3,5.

```python
# Durchschnitt von 5 und 2
durchschnitt = 5 + 2 / 2
print(durchschnitt)
durchschnitt = (5 + 2) / 2
print(durchschnitt)
```

```text
6.0
3.5
```

So liest du eine Fehlermeldung (Traceback) von unten nach oben (F. 92):

```python
summe = 10
anzahl = 0
durchschnitt = summe / anzahl
print(durchschnitt)
```

```text
Traceback (most recent call last):
  File "beispiel.py", line 3, in <module>
    durchschnitt = summe / anzahl
                   ~~~~~~^~~~~~~~
ZeroDivisionError: division by zero
```

1. Letzte Zeile: **Was** ist passiert? `ZeroDivisionError`, Division durch null.
2. Darüber: **Wo?** Datei `beispiel.py`, Zeile 3.
3. Die Markierung `^` zeigt die genaue Stelle.

> [!IMPORTANT]
> **Das Wichtigste**
> Vier Fehlerarten: Syntax, Typ, Laufzeit, Logik. Nur den Logikfehler meldet kein Werkzeug.

> [!WARNING]
> **Achtung**
> Ein Programm, das ohne Fehlermeldung läuft, ist nicht automatisch richtig. Prüfe das Ergebnis mit einem Beispiel, das du im Kopf rechnen kannst.

## Übungen

> [!TIP]
> **Übung 1 · leicht**
> Bestimme ohne Rechner: `7 / 2`, `7 // 2`, `-7 // 2`, `7 % 3`, `6 / 3`, `2 + 3 * 4`.
>
> Quelle: Selbsttest-Quiz VL2 (sinngemäß)

> [!TIP]
> **Übung 2 · mittel**
> Welchen Wert und Typ hat `x` nach jeder Zeile?
>
> ```python
> x = 9.99
> x = int(x)
> x = x / 3
> x = str(x)
> ```
>
> Quelle: Selbsttest-Quiz VL2 (sinngemäß)

> [!TIP]
> **Übung 3 · mittel**
> Syntax-, Typ-, Laufzeit- oder Logikfehler? (a) `x = 5 +` (b) `summe / anzahl` mit `anzahl = 0` (c) `brutto = netto * 0.19`, gemeint war der Bruttopreis (d) `"Alter: " + 36`
>
> Quelle: VL2 F. 86, Selbsttest-Quiz VL2 (sinngemäß)

> [!TIP]
> **Übung 4 · mittel**
> Was gibt `print(int(19.99 * 100))` aus? Warum? Wie geht es richtig?
>
> Quelle: VL2 F. 78–81, Selbsttest-Quiz VL2 (sinngemäß)

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> Gegeben sind `a = "12"` und `b = "3"`. Wandle beide in `int` um und gib mit einem f-String genau diese Zeile aus: `a=12, b=3 | sum=15, diff=9, prod=36, quot=4.0`. Was ergäbe `a + b` ohne Umwandlung?
>
> Quelle: VL2 F. 82, Übung „Mini-Rechner“ (sinngemäß)

> [!TIP]
> **Übung 6 · Prüfungsniveau**
> Berechne aus `jahr = "2026"` die Zahl 2026, nur mit `ord()`, Indexzugriff und Rechenoperatoren, ohne `int()`. Tipp: `ord("7") - ord("0")` ergibt 7.
>
> Quelle: VL2 F. 82, Knobelaufgabe (sinngemäß)

## Lösungen

### Übung 1

Je Ausdruck: Erst schauen, welcher Operator dasteht, dann rechnen.

- `7 / 2`: genaue Division, immer `float` → `3.5`.
- `7 // 2`: wie viele ganze Zweier passen in 7? Drei (2 · 3 = 6) → `3`.
- `-7 // 2`: −3,5 abrunden, also nach links auf dem Zahlenstrahl → `-4`.
- `7 % 3`: 7 = 3 · 2 + 1, der Rest ist → `1`.
- `6 / 3`: geht glatt auf, aber `/` liefert trotzdem `float` → `2.0`.
- `2 + 3 * 4`: Punkt vor Strich, erst 3 · 4 = 12, dann 2 + 12 → `14`.

Kurz: `3.5` · `3` · `-4` (abrunden zur kleineren Zahl) · `1` · `2.0` (`/` gibt immer `float`) · `14` (Punkt vor Strich).

```python
print(7 / 2, 7 // 2, -7 // 2, 7 % 3, 6 / 3, 2 + 3 * 4)
```

```text
3.5 3 -4 1 2.0 14
```

### Übung 2

1. `9.99` (`float`)
2. `9` (`int`, abgeschnitten)
3. `3.0` (`float`, weil `/`)
4. `'3.0'` (`str`)

```python
x = 9.99
x = int(x)
print(x, type(x))
x = x / 3
print(x, type(x))
x = str(x)
print(repr(x), type(x))
```

```text
9 <class 'int'>
3.0 <class 'float'>
'3.0' <class 'str'>
```

### Übung 3

(a) Syntaxfehler. (b) Laufzeitfehler (`ZeroDivisionError`). (c) Logikfehler, es müsste `netto * 1.19` heißen. (d) Typfehler. Nur den Logikfehler meldet kein Werkzeug.

### Übung 4

1. `19.99 * 100` ergibt intern `1998.9999999999998`.
2. `int()` schneidet ab, also kommt `1998` heraus.
3. Richtig: `round(19.99 * 100)` oder `int(Decimal("19.99") * 100)`, beides 1999.

```python
from decimal import Decimal

print(int(19.99 * 100))
print(round(19.99 * 100), int(Decimal("19.99") * 100))
```

```text
1998
1999 1999
```

### Übung 5

1. `a` und `b` sind Texte. `a + b` klebt sie aneinander: `"12"` + `"3"` = `"123"`.
2. Umwandeln: `ai = int(a)` ergibt die Zahl 12, `bi = int(b)` die Zahl 3.
3. Rechnen: 12 + 3 = 15, 12 − 3 = 9, 12 · 3 = 36, 12 / 3 = 4.0.
4. Alles in einen f-String setzen. Die Lücken `{…}` dürfen Rechnungen enthalten.

```python
a = "12"
b = "3"
print(a + b)
ai = int(a)
bi = int(b)
print(f"a={ai}, b={bi} | sum={ai + bi}, diff={ai - bi}, prod={ai * bi}, quot={ai / bi}")
```

```text
123
a=12, b=3 | sum=15, diff=9, prod=36, quot=4.0
```

Ohne Umwandlung verkettet `+` die Texte zu `"123"`. Der Quotient ist `4.0`, weil `/` immer ein `float` liefert.

### Übung 6

Die Ziffern 0 bis 9 stehen im Unicode direkt hintereinander. Deshalb liefert `ord(ziffer) - ord("0")` den Wert der Ziffer. Dann multiplizierst du mit dem Stellenwert.

```python
jahr = "2026"
null = ord("0")
zahl = (
    (ord(jahr[0]) - null) * 1000
    + (ord(jahr[1]) - null) * 100
    + (ord(jahr[2]) - null) * 10
    + (ord(jahr[3]) - null)
)
print(zahl, type(zahl))
```

```text
2026 <class 'int'>
```
