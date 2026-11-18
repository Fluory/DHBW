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

## match und bedingter Ausdruck

`match note:` mit `case "A" | "B":` und `case _:` (wie default). Kein `break` nötig, Bereiche mit `if`.

Bedingter Ausdruck: `x = "offen" if betrag > 0 else "bezahlt"`.

**Falsy:** `False`, `None`, `0`, `0.0`, `""`, `[]`. Alles andere ist truthy, auch `"0"` und `[0]`.

## Logik

- Rangfolge: Vergleiche → `not` → `and` → `or`.
- Kurzschluss: Absicherung nach vorn.

```python
anzahl = 0
print(anzahl > 0 and 10 / anzahl > 1)
# False, keine Division
```

## while

Wiederholt, **solange** die Bedingung wahr ist. Für unbekannte Rundenzahl.

`i = 1`, `while i <= 5:` mit `i = i + 2` gibt 1, 3, 5 aus. Bei `i = 7` ist `7 <= 5` falsch: Ende.

Kein `do`–`while`. Für „mindestens einmal, bis es passt“:

```python
while True:
    text = input("Menge: ")
    if text.isdigit() and int(text) > 0:
        break                 # gültig: raus
    print("Ungültig")
```

## for, break, continue

```python
ergebnis = 1
for i in range(1, 5):  # 1, 2, 3, 4
    ergebnis = ergebnis * i
print(ergebnis)  # 24
```

```python
summe = 0
for i in range(1, 12):
    if i % 3 == 0:
        continue   # nur diese Runde
    if i > 8:
        break      # ganze Schleife
    summe += i
print(summe, i)    # 27 10
```

Addiert: 1, 2, 4, 5, 7, 8. Bei 3, 6, 9 `continue` (die 9 fängt schon `continue`, nicht `break`), bei 10 `break`. Nach `break` behält `i` den Abbruchwert, nach normalem Ende den letzten Wert (`range(3)` → 2).

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

`enumerate(tage)` liefert `(0, "Mo")`, `(1, "Di")`. `zip(tage, werte)` geht zwei Listen im Gleichschritt durch.

Tupel `(3, 4)`: nicht änderbar.

## IndexError in while (Off-by-one)

```python
punkte = [12, 7, 9]
summe = 0
i = 1                       # Fehler 1: erstes Element ist Index 0
while i <= len(punkte):     # Fehler 2: i = 3 gibt es nicht
    summe += punkte[i]      # IndexError, keine Ausgabe
```

Richtig: `i = 0` und `while i < len(punkte):`, oder `for p in punkte:`. n Elemente → Indizes 0 bis n − 1.

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
- `break` und `continue` verwechselt; Wert der Abbruchrunde mitgezählt.
- `while` über Liste mit Start 1 oder `<=`: Element fehlt bzw. `IndexError`.
- Division vor der Absicherung: `ZeroDivisionError`.
- Maximum mit 0 gestartet: falsch bei negativen Werten.
- `[[0] * 4] * 3` kopiert nur den Verweis: Ändern einer Zeile ändert alle.
