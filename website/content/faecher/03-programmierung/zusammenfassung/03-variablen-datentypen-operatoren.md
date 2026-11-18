Jede Zeile Code besteht aus Werten, Namen für diese Werte und Operatoren, die mit ihnen rechnen. In Kapitel 1 hast du gesehen, wie Python eine Datei ausführt. Hier lernst du, was in den Zeilen steht. Viele Klausurfragen sind „Was zeigt Python an?“-Aufgaben. Die Regeln musst du deshalb im Kopf anwenden können.

### Datentypen und Variablen

Python kennt fünf einfache Typen: `int` für ganze Zahlen, `float` für Kommazahlen, `str` für Text, `bool` für `True` und `False` und `None` für „kein Wert“. Eine Variable ist ein Name, der auf einen Wert zeigt. Bei `zahl = zahl + 1` rechnet Python zuerst die rechte Seite aus und hängt dann den Namen um. Python ist **dynamisch, aber stark typisiert**. Dynamisch heißt: Der Typ klebt am Wert, nicht am Namen. Nach `x = 5` darf `x = "fünf"` folgen. Stark heißt: Text und Zahl werden nie heimlich gemischt, `"3" + 4` gibt einen `TypeError`. Typangaben wie `menge: int = 3` ignoriert Python beim Ausführen. Erst `ty` prüft sie vor dem Start. Das gilt auch für Konstanten: `MWST_SATZ: Final = 0.19` mit `from typing import Final`. Dann meldet ty jede neue Zuweisung. `const` oder `final` gibt es in Python nicht.

### Rechnen, Abschneiden und Runden

Mit diesen Werten rechnest du. `/` liefert immer ein `float`, auch bei `6 / 3`. `//` teilt ganzzahlig und rundet dabei **ab**, also nach links auf dem Zahlenstrahl: `-7 // 2` ist −4. `%` ist der Rest. Die Probe lautet: (a // b) · b + a % b = a. `int()` schneidet dagegen nur ab, Richtung 0: `int(-3.7)` ist −3. `round()` rundet zur nächsten Zahl, genau bei x,5 zur geraden: `round(2.5)` ist 2. Beim Vorrang gilt: Klammern, dann `**`, dann Punkt- vor Strichrechnung, dann Vergleiche, zuletzt `not`, `and`, `or`. Kommazahlen sind binär gespeichert und ungenau. `0.1 + 0.2 == 0.3` ist `False`. Für Geld nimmst du `Decimal("19.99")` mit Anführungszeichen.

### Texte und Umwandlung

Strings verbindest du mit `+` nur mit anderen Strings. Zahlen setzt du mit einem f-String ein: `f"{preis:.2f} €"` zeigt zwei Nachkommastellen. Umgewandelt wird, indem du den Typ wie eine Funktion aufrufst: `int("42")`, `str(36)`.

### Vier Fehlerarten

Ein **Syntaxfehler** stoppt das Programm vor dem Start. Ein **Typfehler** wird von ty vorher gemeldet, sonst bricht er beim Ausführen ab. Ein **Laufzeitfehler** wie die Division durch 0 tritt erst beim Ausführen auf. Den **Logikfehler** meldet kein Werkzeug. Du findest ihn nur durch Nachrechnen.

### Ein Beispiel, das alles verbindet

```python
from typing import Final

MWST_SATZ: Final = 0.19
menge = "4"
preis = 2.50
netto = int(menge) * preis
print(f"Brutto: {netto * (1 + MWST_SATZ):.2f} Euro")
print(17 // 5, 17 % 5, -7 // 2, int(-3.7), round(2.5))
print(0.1 + 0.2 == 0.3)
```

```text
Brutto: 11.90 Euro
3 2 -4 -3 2
False
```

`menge` ist Text. Ohne `int()` gäbe `"4" * 2.50` einen `TypeError`, also einen Laufzeitfehler. Mit Umwandlung: 4 · 2,50 = 10,00, mal 1,19 ergibt 11,90. Hätte jemand `netto * MWST_SATZ` geschrieben, käme 1.90 heraus, ohne Fehlermeldung. Das wäre ein Logikfehler. Die zweite Zeile zeigt die Rundungsregeln: 17 = 3 · 5 + 2, −3,5 abgerundet ist −4, −3,7 abgeschnitten ist −3, 2,5 geht zur geraden 2.

### Das musst du können

- `/`, `//`, `%`, `int()` und `round()` sicher im Kopf ausrechnen, auch mit negativen Zahlen
- den Typ eines Ergebnisses angeben (`float` nach `/`)
- „dynamisch, aber stark typisiert“ erklären und `"3" + 4` begründen
- eine Konstante mit `Final` schreiben und sagen, wer sie prüft
- in einem Programm Syntax-, Laufzeit- und Logikfehler finden, benennen und korrigieren
