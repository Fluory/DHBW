Ohne Kontrollstrukturen läuft ein Programm einfach von oben nach unten. Dieses Kapitel bringt zwei Ideen dazu: Code nur unter einer Bedingung ausführen und Code wiederholen. Dazu kommen Listen, in denen du viele Werte unter einem Namen speicherst. Die `for`-Schleife kennst du schon aus Kapitel 2. Hier kommen `if`, `while`, `break`, `continue` und die Arbeit mit Indizes dazu.

### Verzweigungen

Bei `if`–`elif`–`else` prüft Python die Bedingungen von oben nach unten und **stoppt beim ersten Treffer**. Höchstens ein Zweig läuft. Deshalb gehört die strengste Bedingung nach oben. Steht `punkte >= 50` vor `punkte >= 90`, bekommt auch jemand mit 95 Punkten „ausreichend“. `match` vergleicht einen Wert mit festen Fällen, `case _:` passt immer. Für Bereiche nimmst du `if`. In Bedingungen gilt die Rangfolge `not`, `and`, `or`. Bei `and` wird die rechte Seite nicht mehr ausgewertet, wenn die linke falsch ist. Die Absicherung `anzahl > 0` gehört deshalb nach vorn. Leere Werte wie `0`, `""`, `[]` und `None` gelten als falsch, `"0"` aber als wahr.

### Schleifen mit while, break und continue

`while` wiederholt, solange die Bedingung stimmt. Du nimmst es, wenn du vorher nicht weißt, wie oft. Du musst selbst dafür sorgen, dass die Bedingung irgendwann falsch wird. Python hat kein `do-while`. Für „mindestens einmal, bis es passt“ schreibst du `while True:` und darin `break`, sobald die Eingabe gültig ist. `break` beendet die ganze Schleife. `continue` beendet nur die aktuelle Runde. Stehen beide in einer Schleife, entscheidet die Reihenfolge im Code. Nach `break` behält die Schleifenvariable den Wert der Abbruchrunde. Endet die Schleife normal, behält sie den letzten Wert der Folge.

### Listen und Indizes

Eine Liste speichert viele Werte geordnet. Der Index beginnt bei 0. Bei n Elementen gehen die Indizes von 0 bis n − 1, `liste[-1]` ist das letzte Element. `append()` hängt hinten an, `sorted()` liefert eine sortierte Kopie. Eine `while`-Schleife über eine Liste startet mit `i = 0` und prüft `i < len(liste)`. Mit `<=` greift sie einmal daneben und bricht mit `IndexError` ab. Ein Start bei 1 gibt keinen Absturz, aber eine falsche Summe. Am sichersten ist `for element in liste:`. Das Maximum suchst du mit dem ersten Element als Startwert, nicht mit 0. Zwei Fallen noch: `[[0] * 4] * 3` kopiert nur den Verweis auf eine Zeile. Ein Tupel `(3, 4)` kann man lesen, aber nicht ändern.

### Ein Beispiel, das alles verbindet

```python
punkte = [12, 7, 9, 15, 4]
summe = 0
for p in punkte:
    if p < 8:
        continue
    if p > 14:
        break
    summe += p
print(summe, p)
```

```text
21 15
```

| p | p < 8? → continue | p > 14? → break | summe danach |
|---|---|---|---|
| 12 | nein | nein | 12 |
| 7 | ja, nächste Runde | – | 12 |
| 9 | nein | nein | 21 |
| 15 | nein | ja, Abbruch | 21 |

Die 4 kommt nie dran. Die 15 wird nicht addiert, weil `break` vor dem Addieren steht. Nach dem Abbruch steht in `p` noch 15.

### Das musst du können

- eine `if`–`elif`–`else`-Kette mit richtiger Reihenfolge schreiben und auswerten
- `continue` und `break` in einer Rundentabelle nachverfolgen, auch den Wert der Schleifenvariable danach
- eine Eingabeprüfung mit `while True` und `break` schreiben
- einen `IndexError` in einer `while`-Schleife mit beiden Ursachen erklären und korrigieren
- Listen mit Index, negativem Index, `append` und `len` benutzen
