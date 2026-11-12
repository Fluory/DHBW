## Datentypen

| Typ | Beispiele | Wichtig |
|---|---|---|
| `int` | 42, -7, 1_000_000 | beliebig groß |
| `float` | 3.14, 2.0 | binär gespeichert, ungenau |
| `str` | "Hallo", "" | Text, unveränderlich |
| `bool` | True, False | großgeschrieben |
| `None` | None | kein Wert, nicht 0, nicht "" |

```python
print(type(3.14))       # <class 'float'>
print(0.1 + 0.2 == 0.3) # False
print(ord("A"), chr(66))  # 65 B
```

Postleitzahlen, Telefonnummern: `str`. Python ist dynamisch typisiert, mit Typangaben + ty graduell.

## Variablen

`=` heißt „zeigt ab jetzt auf“. Rechte Seite wird zuerst ausgerechnet.

```python
zahl = 10
zahl = zahl + 1    # 11
a, b = 1, 2
a, b = b, a        # a = 2, b = 1
wert = 3,5         # Tupel (3, 5)!
alter: int = 25    # Typangabe, prüft ty
```

- Namen: Buchstaben, Ziffern, `_`, nicht mit Ziffer beginnen, kein Schlüsselwort.
- `snake_case` (Variablen, Funktionen), `PascalCase` (Klassen), `UPPER_SNAKE_CASE` (Konstanten).
- Konstante: `MWST_SATZ: Final = 0.19` (`from typing import Final`), ty meldet Neuzuweisung.
- Kommentar `#`, Docstring `"""…"""` unter `def`/`class`.

## Operatoren

| Ausdruck | Ergebnis | Regel |
|---|---|---|
| `7 / 2` | 3.5 | immer `float` |
| `6 / 3` | 2.0 | auch hier `float` |
| `7 // 2` | 3 | ganzzahlig, rundet **ab** |
| `-7 // 2` | -4 | ab = zur kleineren Zahl |
| `7 % 3` | 1 | Rest |
| `2 ** 10` | 1024 | Potenz |
| `2 + 3 * 4` | 14 | Punkt vor Strich |

- Gerade: `n % 2 == 0`.
- `x += 1` statt `x = x + 1`; kein `x++`.
- Vergleiche `== != < > <= >=` liefern `bool`. `is` nur für `None`.
- `18 <= alter <= 65` ist erlaubt.

**Rangfolge:** Klammern → `**` → `* / // %` (von links) → `+ -`.

```python
print(2 + 17 % 5 * 2 // 3)  # 3
# 17%5=2, 2*2=4, 4//3=1, 2+1=3
```

## Strings und f-Strings

```python
print("ha" * 3, len("Hallo"))  # hahaha 5
print("Hallo"[0], "Hallo"[-1]) # H o
print("Hallo"[1:3])            # al
print("ll" in "Hallo")         # True
```

Index ab 0, `[1:3]` ohne Position 3.

```python
preis = 3.5
print(f"{preis:.2f} €")  # 3.50 €
```

## Typumwandlung

| Ausdruck | Ergebnis |
|---|---|
| `int(9.99)` | 9 (schneidet ab) |
| `int("42")` | 42 |
| `float(5)` | 5.0 |
| `str(42)` | '42' |
| `round(9.5)` | 10 |
| `5 + 2.0` | 7.0 |
| `True + 1` | 2 |
| `"12" + "3"` | '123' |

Geld: `Decimal("19.99")` mit Anführungszeichen (`from decimal import Decimal`).

```python
print(int(19.99 * 100))   # 1998
print(round(19.99 * 100)) # 1999
```

## Fehlerarten

| Art | Beispiel | Wann? |
|---|---|---|
| Syntax | `print("Hallo"` | vor dem Start |
| Typ | `"Alter: " + 36` | ty vorher, sonst `TypeError` |
| Laufzeit | `a / 0` | `ZeroDivisionError` |
| Logik | `5 - 3` statt `+` | nie automatisch |

Traceback von unten lesen: letzte Zeile = was, darüber = wo.

## Typische Fehler

- `-7 // 2` für −3 gehalten (richtig −4).
- `n / 2 == 0` statt `n % 2 == 0`.
- `alter == "30"` ist `False`: Zahl ≠ Text.
- `"Alter: " + 36` gibt `TypeError`, besser f-String.
- `int()` rundet nicht, es schneidet ab.
- `true` statt `True`.
- Variable nur im übersprungenen `if` gesetzt: `NameError`.
- `5 + 2 / 2` statt `(5 + 2) / 2`.
