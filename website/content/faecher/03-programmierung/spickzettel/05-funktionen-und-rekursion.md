## Definieren und aufrufen

```python
def addiere(a: int, b: int) -> int:
    ergebnis = a + b
    return ergebnis

print(addiere(5, 7))  # 12
```

`a`, `b` = Parameter (Platzhalter), `5`, `7` = Argumente (Werte beim Aufruf), `-> int` = Rückgabetyp (prüft nur ty). `def` legt nur an, erst `name(...)` führt aus. `if __name__ == "__main__": main()` startet nur bei direktem Start.

## print oder return?

| | `print(x)` | `return x` |
|---|---|---|
| zeigt etwas an? | ja | nein |
| weiterrechnen möglich? | nein (`None`) | ja |
| beendet Funktion? | nein | ja, sofort |

- Ohne `return` (auch in einem Zweig): `None`.
- `break` verlässt die Schleife, `return` die ganze Funktion.

## Gültigkeit und Parameter

- Variablen in der Funktion sind **lokal** (eigener Rahmen auf dem Aufrufstapel). Außen benutzt: `NameError`. `x = 99` in der Funktion ändert ein globales `x` nicht.
- `if`/`for` bilden keinen eigenen Bereich, Funktionen schon. Suche: LEGB.
- Globale Variable in der Funktion zuweisen: `UnboundLocalError`.
- Parameter zeigt auf **dasselbe Objekt** wie das Argument.

```python
def aendere(liste: list[int]) -> None:
    liste[0] = 99      # außen sichtbar
    liste = [7, 7, 7]  # nur lokal

z = [1, 2, 3]
aendere(z)
print(z)  # [99, 2, 3]
```

Zahl als Parameter: `menge = 0` in der Funktion hängt nur den lokalen Namen um, außen bleibt der alte Wert. Begründung in zwei Sätzen: „Parameter und Variable zeigen auf **dieselbe Liste**, `liste[i] = …` verändert sie. `menge = 0` verändert kein Objekt, nur der **lokale Name** zeigt auf eine neue Zahl.“

## Standardwerte statt Überladung

Keine Überladung: Zweites `def` mit gleichem Namen ersetzt das erste.

```python
def brutto(netto, satz=0.19):
    return round(netto * (1 + satz), 2)

print(brutto(100))            # 119.0
print(brutto(100, 0.07))      # 107.0
print(brutto(satz=0.07, netto=100))  # 107.0
```

```python
def tische(gaeste: int, je_tisch: int = 4) -> int:
    return math.ceil(gaeste / je_tisch)  # immer aufrunden

tische(10)                   # 10/4 = 2.5 → 3
tische(10, 6)                # Standard gilt nicht → 2
tische(je_tisch=3, gaeste=7) # Name zählt → 3
```

Standardwert-Parameter stehen hinten, beim Aufruf erst ohne, dann mit Namen. `math.ceil(x=2.3)`: `TypeError`. Zweites `def flaeche(a, b)` ersetzt `def flaeche(a)`: `flaeche(3)` → `TypeError: missing … 'b'`. Lösung: `b: float | None = None`. `*zahlen` sammelt beliebig viele Argumente. Liste als Standardwert: stattdessen `None` und in der Funktion `[]`.

## Imperativ und applikativ

Imperativ: Wie? Zustand ändert sich, `for`/`while`. Applikativ: Was ist das Ergebnis? Zustand bleibt, Rekursion.

## Rekursion

Pflicht: **Abbruchbedingung** und **Aufruf mit kleinerem Problem**.

```python
def fakultaet(n: int) -> int:
    if n == 0:        # Basisfall
        return 1
    return n * fakultaet(n - 1)

print(fakultaet(3))  # 6
```

| Aufruf | wartet auf | liefert |
|---|---|---|
| fakultaet(3) | fakultaet(2) | 3 · 2 = 6 |
| fakultaet(2) | fakultaet(1) | 2 · 1 = 2 |
| fakultaet(1) | fakultaet(0) | 1 · 1 = 1 |
| fakultaet(0) | – | 1 |

Tabelle von unten nach oben lesen. Ohne Abbruch: `RecursionError` (ca. 1000 Rahmen).

## Testen

```python
assert fakultaet(5) == 120  # nichts
assert fakultaet(3) == 7    # AssertionError
```

pytest: `uv add --dev pytest`, Datei `test_….py`, Funktionen `test_…`, `uv run pytest`. Randfälle mittesten (leere Liste, Exponent 0).

## Typische Fehler

- `print` statt `return`: Ergebnis ist `None`.
- `main` ohne Klammern: nichts passiert.
- Fehlendes `return` in einem Zweig.
- Zwei `def addiere`: `TypeError` beim Aufruf, kein `SyntaxError`.
- Glauben, eine Zahl in `main` ändere sich durch die Funktion.
- `math.ceil` mit Runden verwechselt; Schlüsselwortargumente nach Reihenfolge zugeordnet.
- Liste als Standardwert: wird zwischen Aufrufen geteilt.
- Basisfall `return 0` bei der Fakultät: alles wird 0.
- `fakultaet(-1)`: läuft an `n == 0` vorbei, `RecursionError`.
- Nur ein Test: kann zufällig bestehen.
