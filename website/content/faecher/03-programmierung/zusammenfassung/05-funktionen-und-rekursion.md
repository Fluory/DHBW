Eine Funktion ist ein Codeblock mit Namen. Sie bekommt Eingaben, rechnet und liefert ein Ergebnis zurück. Bisher lief dein Code von oben nach unten durch. Jetzt packst du Schleifen und Verzweigungen aus Kapitel 4 in wiederverwendbare Bausteine. Ab hier steht jeder Programmablauf in einer Funktion `main()`.

### Definieren, aufrufen, zurückgeben

`def` legt eine Funktion nur an. Der Rumpf läuft erst beim Aufruf mit Klammern. **Parameter** sind die Platzhalter in der Definition, **Argumente** die Werte beim Aufruf. Der wichtigste Unterschied ist der zwischen `print` und `return`. `print` zeigt einen Wert nur an. `return` gibt ihn an den Aufrufer zurück und beendet die Funktion sofort. Eine Funktion ohne `return` liefert `None`. Das gilt auch, wenn nur in einem Zweig das `return` fehlt. `break` verlässt dagegen nur die Schleife, der Rest der Funktion läuft weiter.

### Gültigkeit und Parameterübergabe

Jeder Aufruf hat seine eigenen lokalen Variablen. Nach dem `return` sind sie weg, wer sie außen benutzt, bekommt `NameError`. Eine globale Variable darfst du in der Funktion lesen. Weist du ihr dort etwas zu, wird der Name lokal. `x = 99` in der Funktion ändert also das globale `x` nicht, und `zaehler += 1` gibt `UnboundLocalError`.

Beim Aufruf wird nichts kopiert. Der Parameter zeigt auf **dasselbe Objekt** wie das Argument. Daraus folgt die Regel: Wer das Objekt verändert (`liste[i] = …`, `append`), ändert es auch für den Aufrufer. Wer den Parameter neu zuweist (`zahl = 0`), hängt nur das lokale Namensschild um. Zahlen und Texte kann man nicht verändern. Deshalb ändert eine Funktion nie eine Zahl in `main`.

### Standardwerte statt Überladung

Python kennt keine Überladung. Ein zweites `def` mit demselben Namen ersetzt das erste. Ein falscher Aufruf gibt dann einen `TypeError`, keinen `SyntaxError`. Varianten baust du mit Standardwerten: `def tische(gaeste, je_tisch=4)`. Fehlt das Argument, gilt der Standard. Schlüsselwortargumente wie `je_tisch=3` ordnet Python nach dem Namen zu. Als Standardwert für Listen nimmst du `None`, nicht `[]`.

### Rekursion und Tests

Eine rekursive Funktion ruft sich selbst mit einem kleineren Problem auf. Sie braucht eine Abbruchbedingung, etwa `if n == 0: return 1` bei der Fakultät. Fehlt sie oder wird sie nie erreicht, bricht Python mit `RecursionError` ab. Getestet wird mit `assert` und `pytest`: Testfunktionen heißen `test_…` und laufen mit `uv run pytest`.

### Ein Beispiel, das alles verbindet

```python
def erhoehen(preise: list[float], prozent: int = 10) -> None:
    for i in range(len(preise)):
        preise[i] = preise[i] * (100 + prozent) / 100
    prozent = 0


liste = [20.0, 50.0]
satz = 20
ergebnis = erhoehen(liste, satz)
print(liste, satz, ergebnis)
```

```text
[24.0, 60.0] 20 None
```

`prozent` bekommt das Argument 20, der Standardwert 10 gilt nicht. `preise` und `liste` zeigen auf dieselbe Liste. Die Schleife rechnet 20,0 · 120 / 100 = 24,0 und 50,0 · 120 / 100 = 60,0 direkt in diese Liste hinein. `prozent = 0` hängt nur den lokalen Namen um, `satz` bleibt 20. Die Funktion hat kein `return`, also ist `ergebnis` gleich `None`.

### Das musst du können

- eine Funktion mit Parametern, Typangaben und `return` schreiben
- `print` und `return` unterscheiden und sagen, wann `None` herauskommt
- erklären, warum sich eine Liste ändert, eine Zahl aber nicht (zwei Sätze)
- lokale und globale Variablen auseinanderhalten (`NameError`, `UnboundLocalError`)
- Aufrufe mit Standardwerten und Schlüsselwortargumenten auswerten, auch mit `math.ceil`
- eine rekursive Funktion mit Abbruchbedingung schreiben und Aufruf für Aufruf nachrechnen
