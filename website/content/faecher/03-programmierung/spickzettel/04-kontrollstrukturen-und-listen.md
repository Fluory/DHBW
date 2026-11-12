## if, elif, else

```python
t = 22
if t < 0:
    print("Gefriert!")
elif t < 20:
    print("Kühl.")
elif t < 30:
    print("Angenehm.")  # läuft
else:
    print("Heiß!")
```

Merksatz: Python stoppt beim **ersten** wahren Zweig, also strengste Bedingung nach oben.

Testen an den Grenzen: 90/89, 75/74 usw.

## match und bedingter Ausdruck

```python
note = "B"
match note:
    case "A" | "B" | "C":
        print("Bestanden")  # läuft
    case _:              # wie default
        print("Ungültig")
```

Kein `break` nötig. Nur für feste Werte, Bereiche mit `if`.

```python
betrag = 25.0
x = "offen" if betrag > 0 else "bezahlt"
# x = "offen"
```

**Falsy:** `False`, `None`, `0`, `0.0`, `""`, `[]`. Alles andere ist truthy, auch `"0"` und `[0]`.

## Logik

- Rangfolge: Vergleiche → `not` → `and` → `or`.
- Umkehren: jede Teilbedingung umkehren, `and` ↔ `or`. Gegenteil von `>= 50` ist `< 50`.
- Kurzschluss: Absicherung nach vorn.

```python
anzahl = 0
print(anzahl > 0 and 10 / anzahl > 1)
# False, keine Division
```

## while

Wiederholt, **solange** die Bedingung wahr ist. Für unbekannte Rundenzahl.

```python
i = 1
while i <= 5:
    print(i, end=" ")
    i = i + 2
# 1 3 5
```

| i vorher | i <= 5? | Ausgabe | i danach |
|---|---|---|---|
| 1 | ja | 1 | 3 |
| 3 | ja | 3 | 5 |
| 5 | ja | 5 | 7 |
| 7 | nein | Ende | 7 |

Kein `do`–`while`: `while True:` mit `break`.

## for, break, continue

```python
ergebnis = 1
for i in range(1, 5):  # 1, 2, 3, 4
    ergebnis = ergebnis * i
print(ergebnis)  # 24
```

```python
for i in range(1, 6):
    if i == 3:
        continue   # nur diese Runde
    if i == 5:
        break      # ganze Schleife
    print(i)
# 1 / 2 / 4
```

## Listen

| Ausdruck | `n = [15, 13, 8, 10, 17]` |
|---|---|
| `n[0]` / `n[-1]` | 15 / 17 |
| `n[1:3]` | [13, 8] |
| `len(n)` | 5 |
| `sum(n)`, `min(n)`, `max(n)` | 63, 8, 17 |
| `8 in n` | True |
| `sorted(n)` | neue sortierte Liste |
| `n.append(12)` | hängt hinten an |
| `n[5]` | `IndexError` |

Gültig: Index 0 bis `len(n) - 1`.

```python
tage = ["Mo", "Di"]
werte = [18.5, 21.0]
for i, tag in enumerate(tage):
    print(i, tag)       # 0 Mo / 1 Di
for t, w in zip(tage, werte):
    print(t, w)         # Mo 18.5 / Di 21.0
```

Tupel `(3, 4)`: lesen wie Liste, nicht änderbar.

## Maximum selbst finden

```python
werte = [-3, -1, -7]
hoechster = werte[0]  # nicht 0!
for wert in werte:
    if wert > hoechster:
        hoechster = wert
print(hoechster)  # -1
```

## Typische Fehler

- Doppelpunkt oder Einrückung vergessen.
- `>= 50` vor `>= 90` geprüft: alle bekommen „ausreichend“.
- `while`-Variable nie geändert: Endlosschleife (Strg+C).
- `break` und `continue` verwechselt.
- Division vor der Absicherung: `ZeroDivisionError`.
- Maximum mit 0 gestartet: falsch bei negativen Werten.
- `[[0] * 4] * 3` kopiert nur den Verweis: Ändern einer Zeile ändert alle.
- `"0"` für falsy gehalten.
