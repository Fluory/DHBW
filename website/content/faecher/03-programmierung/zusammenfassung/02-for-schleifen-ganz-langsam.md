Fast jedes Programm ab VL3 enthält eine `for`-Schleife. Dieses Kapitel zeigt sie ganz langsam, Runde für Runde. Du brauchst dafür nur `print()` und Variablen. Das wichtigste Werkzeug ist die **Rundentabelle**: Du schreibst nach jeder Runde auf, welchen Wert jede Variable hat. Sie hilft bei jeder Aufgabe der Art „Was gibt das Programm aus?“.

### range() zählt für dich

Eine `for`-Schleife sagt: „Mach dasselbe für jedes Ding in dieser Reihe, eins nach dem anderen.“ Die Reihe liefert oft `range()`. `range(3)` ergibt 0, 1, 2. Der Start ist dabei, der Stopp nicht. Mit zwei Zahlen gibst du den Start an: `range(1, 4)` ergibt 1, 2, 3. Mit drei Zahlen kommt die Schrittweite dazu: `range(0, 10, 3)` ergibt 0, 3, 6, 9. Wer für „1 bis 5“ `range(1, 5)` schreibt, macht einen **Off-by-one-Fehler**. Richtig ist `range(1, 6)`. Alles, was eingerückt unter der `for`-Zeile steht, läuft in jeder Runde. Die erste Zeile ohne Einrückung läuft einmal danach.

### Eine Liste durchgehen

Statt Zahlen kann die Schleife direkt die Elemente einer Liste nehmen: `for ware in einkauf:`. In jeder Runde zeigt `ware` auf das nächste Element. Du musst nichts hochzählen. Die Schleife hat so viele Runden, wie die Liste Elemente hat. Das gilt auch dann, wenn du die Schleifenvariable gar nicht benutzt.

### Aufsummieren und zählen

Darauf baut das häufigste Muster auf. Es hat drei Teile an festen Stellen. Vor der Schleife steht der Startwert, `summe = 0`. In der Schleife wird dazugezählt, `summe += preis`. Nach der Schleife wird das Ergebnis benutzt, mit `print` oder `return`. Bei einem Produkt startest du mit 1, sonst wäre alles 0. Zählen ist dasselbe Muster mit `+= 1`, aber nur im `if`-Zweig. Die Einrückung entscheidet über alles. Steht `summe = 0` in der Schleife, beginnt jede Runde wieder bei null. Steht `return` in der Schleife, ist nach Runde 1 Schluss.

### Ein Beispiel, das alles verbindet

Das Programm summiert alle Preise und zählt die über 5.

```python
preise = [4, 7, 1, 9]
summe = 0
anzahl = 0
for preis in preise:
    summe += preis
    if preis > 5:
        anzahl += 1
print(summe, anzahl)
```

```text
21 2
```

| Runde | preis | summe danach | preis > 5? | anzahl danach |
|---|---|---|---|---|
| Start | – | 0 | – | 0 |
| 1 | 4 | 4 | nein | 0 |
| 2 | 7 | 11 | ja | 1 |
| 3 | 1 | 12 | nein | 1 |
| 4 | 9 | 21 | ja | 2 |

Der Wert am Ende einer Runde ist der Startwert der nächsten. `print` steht ohne Einrückung, deshalb erscheint nur eine Zeile, und zwar nach Runde 4.

### Das musst du können

- sagen, welche Zahlen `range(start, stop, schritt)` liefert, auch mit Schrittweite
- eine Rundentabelle für eine `for`-Schleife anlegen und die Ausgabe ablesen
- das Muster Startwert, Dazuzählen, Ergebnis an die richtige Stelle schreiben
- mit `if` und `+= 1` zählen, wie oft eine Bedingung stimmt
- Fehler durch falsche Einrückung erkennen (`summe = 0` oder `return` in der Schleife)
