## Begriffe

| Begriff | Bedeutung |
|---|---|
| Klasse | Bauplan, `class Konto:` (PascalCase) |
| Objekt / Instanz | konkretes Exemplar, `Konto("A", 100)` |
| Attribut | Daten, Zustand: `a.stand` |
| Methode | Funktion in der Klasse: `a.einzahlen(50)` |
| `__init__` | Konstruktor, legt Attribute an |
| `self` | das Objekt links vom Punkt |

Merksatz: Jedes Objekt hat eigene Attributwerte, die Methoden stehen nur einmal in der Klasse.

## Klasse mit Methoden

```python
class Konto:
    def __init__(self, inhaber, stand=0):
        self.inhaber = inhaber
        self.stand = stand

    def einzahlen(self, betrag):
        self.stand += betrag

a = Konto("A", 100)
b = Konto("B")
a.einzahlen(50)
print(a.stand, b.stand)  # 150 0
```

- Erzeugen ohne `new`. `a.einzahlen(50)` = `Konto.einzahlen(a, 50)`. Genau ein `__init__`.

## Ausgabe: __str__ und __repr__

`__str__` für Menschen (`print()`, f-Strings), `__repr__` für Entwickler (Konsole, Listen). `__str__` gibt mit `return` einen Text zurück. Ohne `__str__` zeigt `print(a)` nur `<__main__.Konto object at 0x…>`.

## Namen und Klassenattribute

```python
a = Konto("A", 100)
b = a                  # kein neues Objekt, zweiter Name
c = Konto("A", 100)    # eigenes Objekt
b.einzahlen(50)
print(a.stand, c.stand)        # 150 100
print(a is b, a == c, a is c)  # True False False
```

Jedes `Konto(…)` = genau ein neues Objekt. `is`: dasselbe Objekt? `==` bei eigenen Klassen ohne `@dataclass`: auch nur Identität. Kopie: `copy.copy(a)`.

| | Klassenattribut | Instanzattribut |
|---|---|---|
| steht | direkt im Klassenrumpf | `self.x = …` in `__init__` |
| gibt es | einmal für alle | einmal pro Objekt |
| ändern | `Konto.anzahl += 1` | `self.x = …` |

`objekt.klassenattr = 10` legt ein **Instanzattribut** nur bei diesem Objekt an.

## Kapselung mit Properties

- `_name`: intern (nur Abmachung), `__name`: Name Mangling. Kein echtes `private`.
- Property: Methode, die wie ein Attribut benutzt wird (ohne Klammern).

```python
class Konto:
    def __init__(self, stand):
        self._stand = 0
        self.stand = stand  # nutzt Setter

    @property
    def stand(self):         # Getter
        return self._stand

    @stand.setter
    def stand(self, wert):   # Setter
        if wert < 0:
            print("Ungültig")
            return
        self._stand = wert

k = Konto(100)
k.stand = -5      # Ungültig
print(k.stand)    # 100
```

| Situation | Lösung |
|---|---|
| frei änderbar | öffentliches Attribut |
| nur lesbar | `_attr` + Property ohne Setter |
| Änderung mit Regeln | `_attr` + Property mit Setter |
| berechnet | Property ohne eigenes Attribut |

**Kapselungsfehler finden** (Plan: `_bestand` intern, Property nur lesbar, nur `verkaufen` ändert):

1. `self.bestand = …` / `self.bestand -= …` ohne Unterstrich → schreibt über Property ohne Setter: `AttributeError: property … has no setter`. Korrektur: `self._bestand`.
2. Property verändert etwas (`self._bestand = 0`) → nur `return self._bestand`.
3. Öffentliche Methode mit `_` (`_verkaufen`) → `verkaufen`.
4. Zweiter Weg zum Ändern (Setter, `bestand_setzen`) → streichen.

Setter ergänzen „repariert“ den Absturz, verletzt aber den Plan.

## Hat-ein, Module, @dataclass

- **Hat ein**: Attribut mit anderem Objekt (`self.kunde = kunde`), Verweis, keine Kopie.
- Modul = `.py`-Datei, Paket = Ordner mit `__init__.py`: `from banking.konto import Konto`.

`@dataclass` über `class Kunde:` mit `name: str` und `ort: str` erzeugt `__init__`, `__repr__`, `__eq__`: `Kunde("A", "N") == Kunde("A", "N")` ist `True`. Für Datenbehälter; für Verhalten mit Regeln normale Klasse mit Properties.

## Typische Fehler

- `self` in der Parameterliste vergessen: `TypeError`.
- `self.` vor dem Attribut vergessen.
- In `__str__` `print` statt `return`.
- `self.anzahl += 1` legt ein Instanzattribut an, Klassenzähler bleibt.
- `a == c` bei gleichen Werten für `True` gehalten.
- Property mit Klammern aufgerufen: `TypeError`.
- Im Setter `self.stand = …` statt `self._stand`: `RecursionError`.
