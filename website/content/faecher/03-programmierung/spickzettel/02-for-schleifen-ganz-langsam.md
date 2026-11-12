## Grundform

```python
for i in range(3):
    print("Runde", i)  # läuft 3-mal
print("fertig")        # läuft 1-mal danach
# Runde 0 / Runde 1 / Runde 2 / fertig
```

- Eingerückt = läuft in **jeder** Runde.
- Nicht eingerückt = läuft **einmal nach** der Schleife.
- Doppelpunkt am Ende der `for`-Zeile.

## range-Varianten

`range(start, stop, schritt)`: Start ist dabei, Stopp **nicht**.

| Aufruf | Zahlen | Runden |
|---|---|---|
| `range(3)` | 0, 1, 2 | 3 |
| `range(4)` | 0, 1, 2, 3 | 4 |
| `range(1, 4)` | 1, 2, 3 | 3 |
| `range(1, 6)` | 1, 2, 3, 4, 5 | 5 |
| `range(2, 7, 2)` | 2, 4, 6 | 3 |
| `range(0, 10, 3)` | 0, 3, 6, 9 | 4 |
| `range(2, 9, 3)` | 2, 5, 8 | 3 |

Merksatz: Für „1 bis n“ schreibst du `range(1, n + 1)`.

## Liste durchgehen

```python
einkauf = ["Kaffee", "Tee", "Kakao"]
for ware in einkauf:
    print("Ich kaufe", ware)
# Ich kaufe Kaffee / ... Tee / ... Kakao
```

| Runde | ware | Ausgabe |
|---|---|---|
| 1 | "Kaffee" | Ich kaufe Kaffee |
| 2 | "Tee" | Ich kaufe Tee |
| 3 | "Kakao" | Ich kaufe Kakao |

So viele Runden, wie die Liste Elemente hat, auch wenn du die Variable nicht benutzt.

## Muster Aufsummieren

1. **Vor** der Schleife: Startwert (`summe = 0`, Produkt: `1`).
2. **In** der Schleife: dazuzählen.
3. **Nach** der Schleife: `print` oder `return`.

```python
preise = [3, 5, 2]
summe = 0
for preis in preise:
    summe = summe + preis
print("Gesamt:", summe)  # Gesamt: 10
```

| Runde | preis | summe vorher | summe nachher |
|---|---|---|---|
| Start | – | – | 0 |
| 1 | 3 | 0 | 3 |
| 2 | 5 | 3 | 8 |
| 3 | 2 | 8 | 10 |

`summe += preis` ist dasselbe in kurz.

## Muster Zählen

```python
zahlen = [4, 7, 1, 9]
anzahl = 0
for zahl in zahlen:
    if zahl > 5:
        anzahl += 1  # nur im if
print(anzahl)  # 2
```

| Runde | zahl | zahl > 5? | anzahl |
|---|---|---|---|
| Start | – | – | 0 |
| 1 | 4 | nein | 0 |
| 2 | 7 | ja | 1 |
| 3 | 1 | nein | 1 |
| 4 | 9 | ja | 2 |

## Rundentabelle anlegen

1. Spalte für Runde, je eine Spalte pro Variable, die sich ändert.
2. Zeile „Start“: Werte vor der Schleife.
3. Pro Runde Zeile für Zeile durchgehen, neue Werte eintragen.
4. Eigene Spalte für die Ausgabe.
5. Am Ende: Was passiert nach der Schleife?

Merksatz: Der Wert am Ende einer Runde ist der Wert am Anfang der nächsten.

## Typische Fehler

- Off-by-one: `range(1, 5)` liefert nur 1 bis 4.
- Vergessen, dass `range` bei 0 beginnt.
- `summe = 0` **in** der Schleife: Am Ende steht nur der letzte Wert (bei `[3, 5, 2]` → 2).
- `return summe` in der Schleife: nach Runde 1 Schluss.
- Produkt mit Startwert 0: Ergebnis immer 0.
- `anzahl += 1` nicht tiefer als das `if` eingerückt: zählt jede Runde.
- Zeile nach der Schleife versehentlich eingerückt: läuft in jeder Runde.
