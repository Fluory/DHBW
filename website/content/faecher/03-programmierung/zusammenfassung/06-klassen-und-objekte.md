Mit diesem Kapitel beginnt die objektorientierte Programmierung. Ein Programm besteht jetzt aus Objekten, die Daten haben und etwas tun können. Das durchgehende Beispiel ist ein Bankkonto. Vieles kennst du schon: Methoden sind Funktionen aus Kapitel 5, und wie bei Listen zeigen Namen auf Objekte.

### Klasse, Objekt und self

Eine **Klasse** ist der Bauplan, ein **Objekt** ein einzelnes Exemplar danach. Ein Objekt hat **Attribute** (Zustand, etwa `kontostand`) und **Methoden** (Verhalten, etwa `einzahlen()`). `Konto("Anna", 100)` erzeugt ein Objekt. Dabei läuft automatisch der Konstruktor `__init__`. Er legt mit `self.kontostand = kontostand` die Attribute an. `self` ist das Objekt, das links vom Punkt steht. `anna.einzahlen(50)` bedeutet deshalb dasselbe wie `Konto.einzahlen(anna, 50)`. In Methoden schreibst du Attribute immer mit `self.` davor. Es gibt genau ein `__init__`, Varianten entstehen über Standardwerte. `__str__` liefert mit `return` den Text für `print`, `__repr__` den Text für Entwickler.

### Namen, Objekte und Klassenattribute

`b = a` baut kein neues Objekt, sondern gibt demselben Objekt einen zweiten Namen. Was du über `b` änderst, siehst du auch bei `a`. Nur ein neuer Aufruf `Konto(…)` baut ein neues Objekt. `is` fragt: dasselbe Objekt? Bei einer normalen Klasse fragt `==` dasselbe. Zwei Konten mit gleichen Werten sind also nicht `==`. Ein **Klassenattribut** steht direkt im Klassenrumpf und gilt für alle Objekte gemeinsam. Du änderst es über den Klassennamen: `Konto.anzahl += 1`. Schreibst du `self.anzahl += 1`, legst du stattdessen ein neues Instanzattribut an, und der Zähler in der Klasse bleibt gleich.

### Kapselung mit Properties

Kapselung heißt: Ein Objekt schützt seinen Zustand. Python hat kein `private`. Ein Unterstrich wie in `_kontostand` heißt nur „intern“. Eine **Property** ist eine Methode mit `@property`, die man ohne Klammern wie ein Attribut liest. Mit `@kontostand.setter` prüfst du neue Werte, bevor sie in `_kontostand` landen. Eine Property ohne Setter ist nur lesbar, jede Zuweisung gibt `AttributeError`. Innen schreibst du deshalb immer auf `self._kontostand`. Öffentliche Methoden haben keinen Unterstrich.

### Hat-ein und @dataclass

Ein Objekt kann ein anderes als Attribut haben: Ein Konto hat einen Kunden. Das heißt Hat-ein-Beziehung. Für reine Datenbehälter erzeugt `@dataclass` automatisch `__init__`, `__repr__` und `__eq__`. Dann vergleicht `==` die Werte.

### Ein Beispiel, das alles verbindet

```python
class Konto:
    anzahl = 0

    def __init__(self, inhaber: str, kontostand: int = 0) -> None:
        Konto.anzahl += 1
        self.inhaber = inhaber
        self._kontostand = kontostand

    @property
    def kontostand(self) -> int:
        return self._kontostand

    def einzahlen(self, betrag: int) -> None:
        self._kontostand += betrag


a = Konto("Anna", 100)
b = a
c = Konto("Anna", 100)
b.einzahlen(50)
print(a.kontostand, c.kontostand, a is b, a == c, Konto.anzahl)
a.kontostand = 0
```

```text
150 100 True False 2
Traceback (most recent call last):
  File "beispiel.py", line 22, in <module>
    a.kontostand = 0
    ^^^^^^^^^^^^
AttributeError: property 'kontostand' of 'Konto' object has no setter
```

Es gibt zwei Aufrufe `Konto(…)`, also zwei Objekte und `anzahl` 2. `b` ist nur ein zweiter Name für `a`. Die Einzahlung über `b` landet deshalb bei `a`: 100 + 50 = 150. `c` bleibt bei 100. `a == c` ist `False`, weil es verschiedene Objekte sind. Die letzte Zeile scheitert gewollt: Die Property hat keinen Setter.

### Das musst du können

- Klasse, Objekt, Attribut, Methode, `__init__` und `self` erklären
- eine Klasse mit Konstruktor, Methoden und `__str__` schreiben
- bei `b = a` und `==`/`is` die Ausgabe bestimmen und in einem Satz begründen
- Klassen- und Instanzattribute unterscheiden
- eine Property mit und ohne Setter schreiben und Kapselungsfehler finden und korrigieren
