## Datentypen und Typisierung

| Typ | Beispiele | Wichtig |
|---|---|---|
| `int` | 42, -7, 1_000_000 | beliebig groß |
| `float` | 3.14, 2.0 | binär gespeichert, ungenau |
| `str` | "Hallo", "" | Text, unveränderlich |
| `bool` | True, False | großgeschrieben |
| `None` | None | kein Wert, nicht 0, nicht "" |

- **Dynamisch typisiert:** Typ gehört zum Wert, `x = 5` und danach `x = "fünf"` ist erlaubt. Geprüft wird erst beim Ausführen.
- **Stark typisiert:** `"3" + 4` → `TypeError` (nicht 7, nicht "34").
- Typangaben `menge: int = 3`, `def f(x: float) -> str:`, `-> None`, `list[int]`: Python ignoriert sie, **ty** prüft sie vor dem Start.

## Variablen und Konstanten

`=` heißt „zeigt ab jetzt auf“. Rechte Seite zuerst.

```python
zahl = zahl + 1    # erst rechnen, dann umhängen
a, b = b, a        # tauschen
wert = 3,5         # Tupel (3, 5)!
```

- `snake_case` (Variablen, Funktionen), `PascalCase` (Klassen), `UPPER_SNAKE_CASE` (Konstanten).
- Konstante: `MWST_SATZ: Final = 0.19` mit `from typing import Final`. Nur so meldet ty eine Neuzuweisung, Python selbst lässt sie zu.
- `const X = 5`, `final double X`: gibt es nicht (`SyntaxError`). Nur Großschreibung = bloße Vereinbarung.

## Operatoren und Runden

| Ausdruck | Ergebnis | Regel |
|---|---|---|
| `7 / 2`, `6 / 3` | 3.5, 2.0 | `/` immer `float` |
| `7 // 2` | 3 | wie oft passt 2 ganz? |
| `-7 // 2` | -4 | rundet ab = nach links |
| `17 % 5` | 2 | Rest: 17 = 3 · 5 + 2 |
| `int(9.99)`, `int(-9.99)` | 9, -9 | **abschneiden**, Richtung 0 |
| `round(9.99)` | 10 | nächste ganze Zahl |
| `round(2.5)`, `round(3.5)` | 2, 4 | bei x,5 zur geraden Zahl |
| `round(3.14159, 2)` | 3.14 | Nachkommastellen |
| `0.1 + 0.2 == 0.3` | False | 0.30000000000000004 |
| `"12" + "3"` | '123' | Texte verketten |
| `5 + 2.0`, `True + 1` | 7.0, 2 | `bool` → `int` → `float` |

Kommazahlen nie mit `==` vergleichen: runden oder `math.isclose`. Geld: `Decimal("19.99")` mit Anführungszeichen. `int(19.99 * 100)` = 1998, `round(…)` = 1999.

**Rangfolge:** Klammern → `**` (von rechts) → Vorzeichen → `* / // %` (von links) → `+ -` → Vergleiche → `not` → `and` → `or`.

```python
print(2 + 17 % 5 * 2 // 3)  # 3: 17%5=2, 2*2=4, 4//3=1, 2+1
print(-2 ** 2, 2 ** 3 ** 2) # -4 512
# x = 10, dann x -= 3, dann x *= 2: 10 → 7 → 14
```

## Strings und f-Strings

```python
print("ha" * 3, "Hallo"[0], "Hallo"[-1], "Hallo"[1:3])  # hahaha H o al
preis = 3.5
print(f"{preis:.2f} €")  # 3.50 €
```

## Fehlerarten

| Art | Beispiel | Wann? |
|---|---|---|
| Syntax | `:` oder `)` oder `"` fehlt | vor dem Start, keine Zeile läuft |
| Typ | `"Alter: " + 36` | ty vorher, sonst `TypeError` |
| Laufzeit | `"4" * 2.5`, `a / 0` | Programm startet, bricht ab |
| Logik | `* RABATT` statt `* (1 - RABATT)` | nie automatisch |

**Fehler finden:** 1. Jede Zeile auf `:`, Klammern, Anführungszeichen prüfen (Python meldet nur einen Syntaxfehler auf einmal). 2. Wert und Typ jeder Variable notieren: Text statt Zahl? 3. Ergebnis mit Kopfrechnung vergleichen. Traceback von unten lesen: letzte Zeile = was, darüber = wo.

## Typische Fehler

- `int(9.99)` für 10 gehalten, `int(-2.7)` (−2) mit `-7 // 2` (−4) verwechselt.
- `round(2.5)` für 3 gehalten.
- `0.1 + 0.2 == 0.3` für `True` gehalten.
- `n / 2 == 0` statt `n % 2 == 0`; `alter == "30"` ist `False`.
- Konstante ohne `Final` oder mit `const`.
- `TypeError` als Syntaxfehler benannt: Er ist ein Laufzeitfehler.
- `5 + 2 / 2` statt `(5 + 2) / 2`.
