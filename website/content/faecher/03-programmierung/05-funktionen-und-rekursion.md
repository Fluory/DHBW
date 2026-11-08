---
title: "Funktionen und Rekursion"
order: 5
summary: "Funktionen definieren und aufrufen, Rückgabewerte, Gültigkeitsbereiche und Parameterübergabe, Standardwerte statt Überladung, Rekursion und Testen mit assert und pytest."
klausur: "relevant"
---

Eine Funktion ist ein abgeschlossener Codeblock mit Namen. Sie bekommt Eingaben, rechnet und liefert ein Ergebnis, wie eine kleine Maschine. VL4 zeigt, wie Werte hinein- und herauskommen, warum Python keine Überladung kennt, was Rekursion ist und wie man Funktionen testet. Ab hier steht jeder Programmablauf in einer Funktion `main()`.

Ein Alltagsbeispiel: Ein Kaffeeautomat hat einen Knopf „Cappuccino“. Du drückst ihn, ohne zu wissen, was innen passiert. Heraus kommt immer dasselbe Ergebnis. Eine Funktion `brutto(netto)` ist so ein Knopf: Du gibst 100 hinein und bekommst 119.0 zurück.

## Funktionen definieren und aufrufen

### Was ist das?

**In einem Satz:** Eine Funktion ist ein Stück Code mit Namen, das du immer wieder benutzen kannst, indem du den Namen mit Klammern hinschreibst.

**Stell dir vor:** Ein Automat mit einem Einwurfschlitz und einem Ausgabefach. Du wirfst zwei Zahlen ein (die **Argumente**), drinnen wird nach einem festen Rezept gerechnet (der **Rumpf**), und unten fällt das Ergebnis ins Ausgabefach (das **`return`**). Was du mit dem Ergebnis machst, entscheidest du draußen: anzeigen, speichern, weiterrechnen.

| Automat | Code |
|---|---|
| Aufschrift „Addierer“ | Funktionsname `addiere` |
| Beschriftung der Schlitze „Zahl a“, „Zahl b“ | Parameter `a`, `b` |
| was du wirklich einwirfst: 5 und 7 | Argumente `5`, `7` |
| das Rezept innen | eingerückter Rumpf |
| Ausgabefach | `return ergebnis` |
| Knopf drücken | Aufruf `addiere(5, 7)` |

```python
def addiere(a: int, b: int) -> int:
    ergebnis = a + b
    return ergebnis


print(addiere(5, 7))
```

```text
12
```

| Teil | Bedeutung (VL4 F. 6) |
|---|---|
| `def` | hier beginnt eine Funktionsdefinition |
| `addiere` | Name in snake_case, am besten ein Verb |
| `(a: int, b: int)` | Parameterliste mit Typannotationen |
| `-> int` | Rückgabetyp |
| `:` und Einrückung | Funktionsrumpf |
| `return` | beendet die Funktion und gibt das Ergebnis zurück |

So läuft `print(addiere(5, 7))` ab, Schritt für Schritt:

1. Python sieht `addiere(5, 7)` und springt in die Funktion.
2. Der Parameter `a` bekommt den Wert 5, `b` bekommt 7.
3. `ergebnis = a + b` rechnet 5 + 7 = 12.
4. `return ergebnis` legt die 12 ins Ausgabefach und verlässt die Funktion.
5. An der Stelle des Aufrufs steht jetzt 12. Aus `print(addiere(5, 7))` wird `print(12)`.
6. `print` zeigt 12 an.

`def` legt die Funktion nur an. Das ist wie ein Rezept ins Kochbuch schreiben: Davon wird noch nichts gekocht. Der Rumpf läuft erst beim **Aufruf** mit Klammern. **Parameter** sind die Platzhalter in der Definition (`a`, `b`). **Argumente** sind die Werte beim Aufruf (`5`, `7`) (F. 11). Typannotationen ignoriert Python beim Ausführen. Erst ty meldet einen unpassenden Aufruf (F. 12).

Der Einstiegspunkt eines Programms ist eine Funktion `main()` (F. 8):

```python
def begruessung(name: str) -> None:
    print(f"Hallo {name}!")


def main() -> None:
    begruessung("Alice")
    begruessung("Bob")


if __name__ == "__main__":
    main()
```

```text
Hallo Alice!
Hallo Bob!
```

`__name__` hat den Wert `"__main__"`, wenn die Datei direkt gestartet wird. Wird sie von einer anderen Datei importiert, läuft `main()` nicht los. So lassen sich ihre Funktionen wiederverwenden und testen.

> [!IMPORTANT]
> **Das Wichtigste**
> Definition (`def`) ist kein Aufruf. Erst `name(argumente)` führt den Rumpf aus. Die Definition muss vor dem ersten Aufruf stehen.

> [!WARNING]
> **Achtung**
> `main` ohne Klammern ruft nichts auf. Und `begruessung(42)` läuft trotz der Typangabe `str`, nur ty meldet es.

## Rückgabewerte

### Was ist das?

**In einem Satz:** `return` legt das Ergebnis ins Ausgabefach, damit der Code draußen damit weiterarbeiten kann.

### print oder return?

Das ist der häufigste Anfängerfehler. **Stell dir vor:** Du fragst einen Kollegen nach dem Bruttopreis. `print` heißt: Er ruft die Zahl laut in den Raum. Du hast sie gehört, aber nicht aufgeschrieben. `return` heißt: Er gibt dir einen Zettel mit der Zahl in die Hand. Damit kannst du weiterrechnen.

```python
def brutto_print(netto: float) -> None:
    print(netto * 1.19)


def brutto_return(netto: float) -> float:
    return netto * 1.19


a = brutto_print(100)
b = brutto_return(100)
print("a ist", a)
print("b ist", b)
print("b doppelt:", b * 2)
```

```text
119.0
a ist None
b ist 119.0
b doppelt: 238.0
```

Was passiert ist:

1. `brutto_print(100)` zeigt sofort `119.0` an. Das ist die erste Ausgabezeile. Ins Ausgabefach legt die Funktion nichts, also bekommt `a` den Wert `None`.
2. `brutto_return(100)` zeigt nichts an. Es legt 119.0 ins Ausgabefach, und `b` bekommt 119.0.
3. Mit `b` kannst du weiterrechnen. Mit `a * 2` gäbe es einen `TypeError`, weil `None` keine Zahl ist.

| | `print(x)` | `return x` |
|---|---|---|
| zeigt etwas auf dem Bildschirm? | ja | nein |
| kann der Aufrufer mit dem Wert weiterrechnen? | nein (er bekommt `None`) | ja |
| beendet die Funktion? | nein | ja, sofort |

### Mehrere Werte und fehlendes return

`return` beendet die Funktion sofort und liefert einen Wert. „Mehrere Rückgabewerte“ sind in Wahrheit ein Tupel, das der Aufrufer wieder auspackt (F. 21). Jede Funktion ohne `return` liefert `None` (F. 22).

```python
def min_max(zahlen: list[int]) -> tuple[int, int]:
    return min(zahlen), max(zahlen)


def vorzeichen(x: int) -> str:
    if x > 0:
        return "positiv"
    # x <= 0: kein return!


kleinste, groesste = min_max([4, 9, 2, 7])
print(kleinste, groesste)
print(vorzeichen(5), vorzeichen(-1))
```

```text
2 9
positiv None
```

`break` verlässt nur die aktuelle Schleife, der Rest der Funktion läuft weiter. `return` verlässt die ganze Funktion (F. 23):

```python
def mit_break() -> None:
    for i in range(1, 11):
        if i == 5:
            break
        print(i, end=" ")
    print("Schleife beendet.")


def mit_return() -> None:
    for i in range(1, 11):
        if i == 5:
            return
        print(i, end=" ")
    print("Schleife beendet.")


mit_break()
mit_return()
print()
```

```text
1 2 3 4 Schleife beendet.
1 2 3 4 
```

Beim Aufruf legt Python einen neuen **Rahmen** (Stack Frame) auf den **Aufrufstapel** und bindet darin die Parameter. Mit `return` verschwindet der Rahmen samt aller lokalen Variablen (F. 16–19).

> [!IMPORTANT]
> **Das Wichtigste**
> `return` liefert ein Ergebnis, `print` zeigt nur etwas an. Ohne `return` kommt `None` heraus.

> [!WARNING]
> **Achtung**
> `print` statt `return`: Die Funktion zeigt etwas an, liefert aber `None`. Dann ist `ergebnis = f(…)` gleich `None`. Fehlt in einem Zweig das `return`, kommt dort ebenfalls `None`.

## Gültigkeitsbereiche und Parameterübergabe

### Was ist das?

**Stell dir vor:** Jeder Aufruf bekommt einen eigenen Schmierzettel. Darauf rechnet die Funktion. Nach dem `return` wird der Zettel weggeworfen. Was darauf stand, kann draußen niemand mehr lesen. Beim nächsten Aufruf gibt es einen neuen, leeren Zettel.

Variablen, die in einer Funktion entstehen, sind **lokal**: Sie leben nur während des Aufrufs (F. 26). `if` und `for` bilden keinen eigenen Gültigkeitsbereich, Funktionen schon. Einen Namen sucht Python in der Reihenfolge LEGB: Local, Enclosing, Global, Built-in (F. 27). Eine globale Variable zu lesen geht. Eine Zuweisung in der Funktion macht den Namen aber lokal:

```python
zaehler = 0


def erhoehe() -> None:
    zaehler += 1


erhoehe()
```

```text
Traceback (most recent call last):
  File "beispiel.py", line 8, in <module>
    erhoehe()
    ~~~~~~~^^
  File "beispiel.py", line 5, in erhoehe
    zaehler += 1
    ^^^^^^^
UnboundLocalError: cannot access local variable 'zaehler' where it is not associated with a value
```

Beim Aufruf zeigt der Parameter auf **dasselbe Objekt** wie das Argument (F. 28–33). Daraus folgen zwei Fälle:

- **Neue Zuweisung** an den Parameter (`liste = [7, 7, 7]`) bindet nur das lokale Namensschild neu. Außen ändert sich nichts.
- **Veränderung des Objekts** (`liste[0] = 99`, `liste.append(…)`) ist außen sichtbar. Das heißt Nebeneffekt.

```python
def aendere_erstes(liste: list[int]) -> None:
    liste[0] = 99  # verändert das Objekt selbst
    liste = [7, 7, 7]  # neue Bindung, nur lokal


zahlen = [1, 2, 3]
aendere_erstes(zahlen)
print(zahlen)
```

```text
[99, 2, 3]
```

Ein Standardwert wird **einmal** beim Definieren erzeugt (F. 34). Eine Liste als Standardwert wird deshalb zwischen den Aufrufen geteilt. Richtig ist `None` als Standardwert:

```python
def anhaengen_falsch(wert: int, liste: list[int] = []) -> list[int]:
    liste.append(wert)
    return liste


def anhaengen(wert: int, liste: list[int] | None = None) -> list[int]:
    if liste is None:
        liste = []
    liste.append(wert)
    return liste


print(anhaengen_falsch(1), anhaengen_falsch(2))
print(anhaengen(1), anhaengen(2))
```

```text
[1, 2] [1, 2]
[1] [2]
```

> [!IMPORTANT]
> **Das Wichtigste**
> Parameter sind Namen für dieselben Objekte, keine Kopien. Neubindung wirkt nur lokal, Veränderung auch außen.

> [!WARNING]
> **Achtung**
> Lokale Variable außen benutzen gibt `NameError`. Globale Variable in der Funktion ändern gibt `UnboundLocalError`. Eine Liste als Standardwert meldet ruff mit B006.

## Standardwerte statt Überladung

### Was ist das?

Java löst „gleiche Aufgabe, andere Eingaben“ mit Überladung. Python kennt **keine Überladung**. Ein zweites `def` mit demselben Namen ersetzt das erste (F. 39). Stattdessen gibt es Standardwerte und Schlüsselwortargumente (F. 40–41):

```python
def brutto(netto: float, satz: float = 0.19) -> float:
    return round(netto * (1 + satz), 2)


print(brutto(100))
print(brutto(100, 0.07))
print(brutto(satz=0.07, netto=100))
```

```text
119.0
107.0
107.0
```

Parameter mit Standardwert müssen hinter denen ohne stehen. Ein `*` vor einem Parameter sammelt beliebig viele Argumente in einem Tupel (F. 42):

```python
def summe(*zahlen: int) -> int:
    ergebnis = 0
    for zahl in zahlen:
        ergebnis += zahl
    return ergebnis


print(summe(1, 2), summe(1, 2, 3, 4), summe())
```

```text
3 10 0
```

> [!IMPORTANT]
> **Das Wichtigste**
> Pro Name gibt es genau eine Funktion. Varianten entstehen über Standardwerte oder `*args`.

> [!WARNING]
> **Achtung**
> Zwei `def addiere` hintereinander geben keinen `SyntaxError`. Der Fehler kommt erst beim Aufruf als `TypeError`, wenn die Anzahl der Argumente nicht zur zweiten Fassung passt. ruff warnt vorher mit F811.

## Imperativ und applikativ

### Was ist das?

Ein Paradigma ist ein Denkmuster für Algorithmen (F. 55).

| | imperativ | applikativ (funktional) |
|---|---|---|
| Denkschema | Wie mache ich es? | Was ist das Ergebnis? |
| Zustand | Variablen ändern sich ständig | bleibt unverändert |
| Wiederholung | `for`, `while` | Rekursion |
| Nebenwirkungen | häufig | unerwünscht |

```python
# imperativ: Zustand (summe) ändert sich Schritt für Schritt
summe = 0
for zahl in range(1, 8):
    summe += zahl
print(summe)


# applikativ: Ergebnis entsteht nur durch Funktionsanwendung
def summe_bis(n: int) -> int:
    return 0 if n == 0 else n + summe_bis(n - 1)


print(summe_bis(7))
```

```text
28
28
```

> [!WARNING]
> **Achtung**
> Folienfehler (F. 59): Im Python-Code zu h(p, q, x, y) = if p ∧ q then 4x + 2y else 5x − 3y fehlt hinten das `* y`. Richtig ist `5 * x - 3 * y`. Das Selbsttest-Quiz zu VL4 verwendet die richtige Fassung.

## Rekursion

### Was ist das?

**In einem Satz:** Eine rekursive Funktion löst eine Aufgabe, indem sie eine etwas kleinere Version derselben Aufgabe an sich selbst weitergibt.

**Stell dir vor:** Du stehst in einer langen Schlange und willst wissen, an welcher Stelle du bist. Du fragst die Person vor dir: „An welcher Stelle bist du?“ Die fragt wieder die Person vor ihr, und so weiter. Die erste Person in der Schlange sieht niemanden vor sich und sagt: „Ich bin 1.“ (das ist der **Basisfall**). Jetzt läuft die Antwort zurück: Jede Person zählt 1 dazu und sagt es nach hinten weiter. Bei dir kommt die richtige Zahl an.

Auf der Folie: Rekursion heißt, eine Funktion ruft sich selbst auf, um ein kleineres Teilproblem derselben Art zu lösen (F. 62). Jede rekursive Funktion hat zwei Pflichtteile (F. 63):

- **Abbruchbedingung** (Basisfall): Wann hört sie auf?
- **Rekursiver Aufruf** mit einem einfacheren Argument, das sich der Abbruchbedingung nähert.

```python
def fakultaet(n: int) -> int:
    """Berechnet n! rekursiv."""
    if n == 0:  # Abbruchbedingung
        return 1
    return n * fakultaet(n - 1)  # rekursiver Aufruf


print(fakultaet(5))
```

```text
120
```

### fakultaet(3) Schritt für Schritt

Jeder Aufruf bekommt einen eigenen Rahmen mit eigenem `n` (F. 67–71).

1. Abstieg: `fakultaet(3)` wartet auf `fakultaet(2)`.
2. `fakultaet(2)` wartet auf `fakultaet(1)`.
3. `fakultaet(1)` wartet auf `fakultaet(0)`.
4. `fakultaet(0)` trifft die Abbruchbedingung und liefert 1.
5. Aufstieg: 1 · 1 = 1, dann 2 · 1 = 2, dann 3 · 2 = 6.

| Aufruf | wartet auf | liefert |
|---|---|---|
| fakultaet(3) | fakultaet(2) | 3 · 2 = 6 |
| fakultaet(2) | fakultaet(1) | 2 · 1 = 2 |
| fakultaet(1) | fakultaet(0) | 1 · 1 = 1 |
| fakultaet(0) | – | 1 |

Wird die Abbruchbedingung nie erreicht, wächst der Stapel, bis Python nach etwa 1000 Rahmen mit `RecursionError` abbricht (F. 72). Für große n löst man das Problem mit einer Schleife (F. 73).

Vorteile (F. 74): kurze Lösungen für selbstähnliche Probleme, mathematische Definitionen direkt umsetzbar. Nachteile: speicherintensiv, langsamer als Schleifen, schwerer zu debuggen.

> [!IMPORTANT]
> **Das Wichtigste**
> Ohne erreichbare Abbruchbedingung keine Rekursion. Jeder Aufruf muss das Problem kleiner machen.

> [!WARNING]
> **Achtung**
> `return 0` als Basisfall der Fakultät macht jedes Ergebnis zu 0, denn 0! = 1. `fakultaet(-1)` läuft an `n == 0` vorbei und endet mit `RecursionError`. Robuster ist oft `if n <= 0`.

## Funktionen testen

### Was ist das?

`assert bedingung` tut nichts, wenn die Bedingung stimmt. Sonst bricht das Programm mit `AssertionError` ab (F. 76):

```python
def fakultaet(n: int) -> int:
    if n == 0:
        return 1
    return n * fakultaet(n - 1)


assert fakultaet(5) == 120
print("Test 1 bestanden")
assert fakultaet(3) == 7
print("Test 2 bestanden")
```

```text
Test 1 bestanden
Traceback (most recent call last):
  File "beispiel.py", line 9, in <module>
    assert fakultaet(3) == 7
           ^^^^^^^^^^^^^^^^^
AssertionError
```

**pytest** ist das Standard-Testwerkzeug, das Gegenstück zu JUnit (F. 77–78). So richtest du es ein:

1. Einmal pro Projekt: `uv add --dev pytest`.
2. Testdatei `test_fakultaet.py` neben den Code legen.
3. Jede Testfunktion beginnt mit `test_` und prüft mit `assert`.
4. Ausführen mit `uv run pytest`. Ein Punkt heißt bestanden, ein `F` fehlgeschlagen.

```python
def test_fakultaet_null() -> None:
    assert fakultaet(0) == 1


def test_fakultaet_fuenf() -> None:
    assert fakultaet(5) == 120
```

Gute Tests prüfen auch Randfälle, etwa die leere Liste oder den Exponenten 0 (Musterlösung).

> [!IMPORTANT]
> **Das Wichtigste**
> Ein Test vergleicht das tatsächliche mit dem erwarteten Ergebnis. Mehrere Tests finden mehr Fehler als einer.

> [!WARNING]
> **Achtung**
> Ein einzelner Test kann zufällig bestehen. Eine kaputte Fakultät mit `+` statt `*` besteht den Test für 0 trotzdem.

## Übungen

> [!TIP]
> **Übung 1 · leicht**
> Was gibt `main()` aus?
>
> ```python
> def main() -> None:
>     for i in range(1, 11):
>         if i == 4:
>             return
>         print(i)
>     print("Schleife beendet.")
> ```
>
> Quelle: Selbsttest-Quiz VL4 (sinngemäß)

> [!TIP]
> **Übung 2 · mittel**
> Eine Datei definiert erst `addiere(a, b)` und danach `addiere(a, b, c)`. Was passiert bei `print(addiere(1, 2))`? (a) 3 (b) `TypeError` (c) `SyntaxError` beim zweiten `def`
>
> Quelle: Selbsttest-Quiz VL4 (sinngemäß)

> [!TIP]
> **Übung 3 · mittel**
> Schreibe `flaeche(breite, hoehe=None, dreieck=False)`: `flaeche(3)` berechnet ein Quadrat, `flaeche(4, 6)` ein Rechteck, `flaeche(4, 6, dreieck=True)` ein Dreieck (½ · g · h). Mit Typannotationen.
>
> Quelle: VL4 F. 53, Übung „Flächenrechner“ (sinngemäß)

> [!TIP]
> **Übung 4 · Prüfungsniveau**
> Was liefern diese beiden kaputten Fakultäten für `fakultaet_a(5)`, `fakultaet_b(0)` und `fakultaet_b(5)`? Welcher Test bemerkt den Fehler in `fakultaet_b` nicht?
>
> ```python
> def fakultaet_a(n: int) -> int:
>     if n == 0:
>         return 0
>     return n * fakultaet_a(n - 1)
>
>
> def fakultaet_b(n: int) -> int:
>     if n == 0:
>         return 1
>     return n + fakultaet_b(n - 1)
> ```
>
> Quelle: Selbsttest-Quiz VL4 (sinngemäß)

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> Schreibe rekursiv, ohne eingebaute Hilfen: (a) `zaehle_zeichen(text, zeichen)` ohne `text.count()`, (b) `potenz(basis, exponent)` ohne `**`, auch für negative Exponenten.
>
> Quelle: VL4 F. 82–85, Übung Teil 2 (sinngemäß)

## Lösungen

### Übung 1

| i | i == 4? | was passiert |
|---|---|---|
| 1 | nein | 1 ausgeben |
| 2 | nein | 2 ausgeben |
| 3 | nein | 3 ausgeben |
| 4 | ja | `return`: die ganze Funktion ist sofort zu Ende |

Also 1, 2, 3, je in einer Zeile. `return` verlässt die ganze Funktion. Deshalb kommt auch „Schleife beendet.“ nicht.

```python
def main() -> None:
    for i in range(1, 11):
        if i == 4:
            return
        print(i)
    print("Schleife beendet.")


main()
```

```text
1
2
3
```

### Übung 2

(b). Die zweite Definition ersetzt die erste. Beim Aufruf fehlt das Argument für `c`.

```python
def addiere(a: int, b: int) -> int:
    return a + b


def addiere(a: int, b: int, c: int) -> int:
    return a + b + c


print(addiere(1, 2))
```

```text
Traceback (most recent call last):
  File "beispiel.py", line 9, in <module>
    print(addiere(1, 2))
          ~~~~~~~^^^^^^
TypeError: addiere() missing 1 required positional argument: 'c'
```

### Übung 3

1. Welche Fälle gibt es? Nur `breite` (Quadrat), `breite` und `hoehe` (Rechteck), dazu `dreieck=True` (Dreieck).
2. `hoehe` bekommt den Standardwert `None`. So erkennt die Funktion „keine Höhe angegeben“.
3. Zuerst prüfen: Ist `hoehe is None`? Dann Quadrat, breite · breite.
4. Sonst: Ist `dreieck` wahr? Dann ½ · breite · hoehe.
5. Sonst: Rechteck, breite · hoehe.

```python
def flaeche(breite: float, hoehe: float | None = None, dreieck: bool = False) -> float:
    """Fläche von Quadrat, Rechteck oder Dreieck."""
    if hoehe is None:
        return breite * breite
    if dreieck:
        return 0.5 * breite * hoehe
    return breite * hoehe


print(flaeche(3))
print(flaeche(4, 6))
print(flaeche(4, 6, dreieck=True))
```

```text
9
24
12.0
```

In Java bräuchte man dafür mehrere Überladungen.

### Übung 4

1. `fakultaet_a` hat den falschen Basisfall. Mit `return 0` wird am Ende alles mit 0 multipliziert: 5 · 4 · 3 · 2 · 1 · 0 = 0.
2. `fakultaet_b(0)` liefert 1, das ist zufällig richtig.
3. `fakultaet_b(5)` addiert statt zu multiplizieren: 5 + 4 + 3 + 2 + 1 + 1 = 16.
4. Der Test `fakultaet(0) == 1` besteht bei `fakultaet_b` trotzdem.

```python
def fakultaet_a(n: int) -> int:
    if n == 0:
        return 0
    return n * fakultaet_a(n - 1)


def fakultaet_b(n: int) -> int:
    if n == 0:
        return 1
    return n + fakultaet_b(n - 1)


print(fakultaet_a(5), fakultaet_b(0), fakultaet_b(5))
```

```text
0 1 16
```

### Übung 5

Jede Funktion hat einen Basisfall (leerer Text, Exponent 0) und einen Aufruf mit kleinerem Problem (`text[1:]`, `exponent - 1`). Bei negativem Exponenten gilt basis⁻ⁿ = 1/basisⁿ.

`zaehle_zeichen("banana", "a")` Aufruf für Aufruf. `text[1:]` ist der Text ohne den ersten Buchstaben.

| Aufruf mit text | erster Buchstabe a? | treffer | liefert |
|---|---|---|---|
| "banana" | b, nein | 0 | 0 + 3 = 3 |
| "anana" | a, ja | 1 | 1 + 2 = 3 |
| "nana" | n, nein | 0 | 0 + 2 = 2 |
| "ana" | a, ja | 1 | 1 + 1 = 2 |
| "na" | n, nein | 0 | 0 + 1 = 1 |
| "a" | a, ja | 1 | 1 + 0 = 1 |
| "" | Basisfall | – | 0 |

Die Spalte „liefert“ liest du von unten nach oben: Erst wenn der leere Text 0 zurückgibt, können die anderen Aufrufe fertig rechnen.

`potenz(2, -2)`: Exponent negativ, also 1 / potenz(2, 2). potenz(2, 2) = 2 · potenz(2, 1) = 2 · 2 · potenz(2, 0) = 2 · 2 · 1.0 = 4.0. Ergebnis 1 / 4.0 = 0.25.

```python
def zaehle_zeichen(text: str, zeichen: str) -> int:
    if text == "":
        return 0
    treffer = 1 if text[0] == zeichen else 0
    return treffer + zaehle_zeichen(text[1:], zeichen)


def potenz(basis: float, exponent: int) -> float:
    if exponent == 0:
        return 1.0
    if exponent < 0:
        return 1 / potenz(basis, -exponent)
    return basis * potenz(basis, exponent - 1)


print(zaehle_zeichen("banana", "a"), zaehle_zeichen("", "a"))
print(potenz(2, 4), potenz(2, -2), potenz(5, 0))
```

```text
3 0
16.0 0.25 1.0
```
