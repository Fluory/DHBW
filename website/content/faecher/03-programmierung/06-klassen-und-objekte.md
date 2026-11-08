---
title: "Klassen und Objekte (OOP I)"
order: 6
summary: "Klassen, Objekte, __init__ und self, Methoden, __str__ und __repr__, Klassenattribute, Kapselung mit Properties, Hat-ein-Beziehung, Module und @dataclass."
klausur: "relevant"
---

Mit VL5 beginnt die objektorientierte Programmierung (OOP). Ein Programm besteht dann aus Objekten, die zusammenarbeiten. Jedes Objekt hat Daten und kann etwas tun.

Ein Alltagsbeispiel: Ein Bankkonto hat einen Inhaber und einen Kontostand (Daten). Man kann einzahlen und abheben (Verhalten). Die Bank hat einen Bauplan für Konten. Nach diesem Bauplan entstehen Annas Konto und Bens Konto, jedes mit eigenem Kontostand. Der Bauplan ist die **Klasse**, die Konten sind **Objekte**. Durchgehendes Beispiel der Folien ist genau dieses Konto. Beträge stehen auf den Folien als `int` in ganzen Euro, damit der Code kurz bleibt.

## Klassen und Objekte

### Was ist das?

**In einem Satz:** Eine Klasse beschreibt, was ein Ding hat und kann. Ein Objekt ist ein einzelnes, echtes Ding, das nach dieser Beschreibung gebaut wurde.

**Stell dir vor:** Eine Keksform in Sternform ist die **Klasse**. Mit ihr stichst du beliebig viele Kekse aus. Jeder Keks ist ein **Objekt**. Alle haben dieselbe Form, aber jeder hat seinen eigenen Zuckerguss: Der eine ist rot, der andere blau. Isst du den roten Keks, ist der blaue noch da. Die Form selbst kannst du nicht essen. Sie ist nur die Vorlage.

| Keksbäckerei | Code |
|---|---|
| Keksform „Stern“ | `class Konto:` |
| einen Keks ausstechen | `Konto("Anna", 100)` |
| der einzelne Keks | das Objekt, auf das `anna` zeigt |
| seine Farbe, sein Belag | Attribute: `anna.inhaber`, `anna.kontostand` |
| was man mit jedem Keks machen kann | Methoden: `einzahlen()`, `abheben()` |

Formal auf der Folie: Ein Objekt (VL5 F. 6)

- hat **Attribute**: Daten, die seinen Zustand beschreiben, etwa `inhaber` und `kontostand`;
- hat **Methoden**: Funktionen, die sein Verhalten beschreiben, etwa `einzahlen()`;
- gehört zu einer **Klasse**. Die Klasse ist der Bauplan. Ein Objekt heißt auch **Instanz** der Klasse.

Jedes Objekt hat eigene Werte für die Attribute. Die Methoden stehen nur einmal in der Klasse (F. 8). Objekte benutzt du schon längst: `42` ist ein Objekt der Klasse `int`, `noten.append(3)` ruft eine Methode eines `list`-Objekts auf (F. 9).

```python
class Konto:
    def __init__(self, inhaber: str, kontostand: int) -> None:
        self.inhaber = inhaber  # Attribut links, Parameter rechts
        self.kontostand = kontostand


anna = Konto("Anna", 100)
ben = Konto("Ben", 250)
ben.kontostand = 300
print(anna.inhaber, anna.kontostand)
print(ben.inhaber, ben.kontostand)
```

```text
Anna 100
Ben 300
```

Nach diesen Zeilen gibt es zwei getrennte Objekte. Jedes hat seine eigenen Werte:

| Objekt | inhaber | kontostand |
|---|---|---|
| anna | "Anna" | 100 |
| ben | "Ben" | 300 (vorher 250, dann geändert) |

`ben.kontostand = 300` ändert nur Bens Keks. Annas Konto bleibt bei 100.

- `class Konto:` beginnt die Klasse. Klassennamen schreibt man in PascalCase (F. 10).
- `Konto("Anna", 100)` erzeugt ein Objekt. Man ruft die Klasse wie eine Funktion auf. Ein `new` wie in Java gibt es nicht.
- Attribute erreichst du mit dem Punkt: `anna.kontostand`.

### Was bei `anna = Konto("Anna", 100)` passiert

`__init__` heißt **Konstruktor**. Er läuft automatisch beim Erzeugen und setzt den Anfangszustand (F. 15–19).

1. Python legt ein neues, leeres Konto-Objekt an und ruft damit `__init__` auf. `self` zeigt auf das neue Objekt.
2. `self.inhaber = inhaber` legt das erste Attribut an.
3. `self.kontostand = kontostand` legt das zweite an.
4. `__init__` gibt nichts zurück. Der Aufruf liefert das fertige Objekt, und `anna` zeigt darauf.

> [!IMPORTANT]
> **Das Wichtigste**
> Klasse = Bauplan, Objekt = konkretes Exemplar. `__init__` legt die Attribute an. `self` ist das Objekt selbst; Python übergibt es automatisch.

> [!WARNING]
> **Achtung**
> Ohne eigene Ausgabemethode zeigt `print(anna)` nur Klasse und Speicheradresse, etwa `<__main__.Konto object at 0x…>` (F. 20).

## Methoden und self

### Was ist das?

**In einem Satz:** `self` heißt „dieses Objekt hier“, also genau das Objekt, das links vom Punkt steht.

**Stell dir vor:** In der Bauanleitung für Konten steht: „Zähle den Betrag zu **meinem** Kontostand dazu.“ Wessen Kontostand ist „meiner“? Das hängt davon ab, wer die Anleitung gerade ausführt. Ruft Anna sie auf, ist es Annas Kontostand. Ruft Ben sie auf, Bens. `self` ist dieses Wort „mein“.

| Aufruf | wofür steht `self`? | was `self.kontostand += betrag` ändert |
|---|---|---|
| `anna.einzahlen(50)` | für anna | Annas Kontostand |
| `ben.einzahlen(20)` | für ben | Bens Kontostand |

Eine Methode ist eine Funktion in der Klasse. Ihr erster Parameter ist `self`. Über `self.` liest und ändert sie die Attribute ihres Objekts (F. 22).

```python
class Konto:
    def __init__(self, inhaber: str, kontostand: int = 0) -> None:
        self.inhaber = inhaber
        self.kontostand = kontostand

    def einzahlen(self, betrag: int) -> None:
        self.kontostand += betrag

    def abheben(self, betrag: int) -> bool:
        if betrag > self.kontostand:
            print("Abgelehnt: Der Kontostand reicht nicht.")
            return False
        self.kontostand -= betrag
        return True


anna = Konto("Anna", 100)
ben = Konto("Ben")
anna.einzahlen(50)
print(anna.abheben(500))
print(anna.abheben(30))
Konto.einzahlen(anna, 20)  # dasselbe wie anna.einzahlen(20)
ben.einzahlen(20)  # gleiche Methode, anderes self
print(anna.kontostand, ben.kontostand)
```

```text
Abgelehnt: Der Kontostand reicht nicht.
False
True
140 20
```

Bei `anna.einzahlen(50)` sucht Python die Methode in der Klasse von `anna` und übergibt das Objekt vor dem Punkt als erstes Argument (F. 23). Deshalb hat `einzahlen` zwei Parameter, beim Aufruf steht aber nur ein Argument. `self` entspricht `this` in Java, steht in Python aber ausdrücklich da.

Es gibt **genau ein** `__init__`. Varianten entstehen über Standardwerte: Mit `kontostand: int = 0` gehen `Konto("Anna", 100)` und `Konto("Ben")` (F. 28).

**Ausgabe:** `__str__` ist die Ausgabe für Menschen, `print()` und f-Strings benutzen sie. `__repr__` ist die Ausgabe für Entwickler, die Konsole und Listen benutzen sie (F. 29).

```python
class Konto:
    def __init__(self, inhaber: str, kontostand: int = 0) -> None:
        self.inhaber = inhaber
        self.kontostand = kontostand

    def __str__(self) -> str:
        return f"Konto von {self.inhaber}: {self.kontostand} Euro"

    def __repr__(self) -> str:
        return f"Konto({self.inhaber!r}, {self.kontostand})"


anna = Konto("Anna", 100)
print(anna)
print([anna, Konto("Ben")])
```

```text
Konto von Anna: 100 Euro
[Konto('Anna', 100), Konto('Ben', 0)]
```

> [!IMPORTANT]
> **Das Wichtigste**
> `anna.einzahlen(50)` ist dasselbe wie `Konto.einzahlen(anna, 50)`. Attribute schreibst du in Methoden immer mit `self.` davor.

> [!WARNING]
> **Achtung**
> `self` in der Parameterliste vergessen gibt `TypeError` (ein Argument zu viel). `self.` vor dem Attribut vergessen gibt `UnboundLocalError`. In `__str__` mit `return` einen Text zurückgeben, nicht mit `print` ausgeben.

## Namen, Objekte und Klassenattribute

### Was ist das?

Wie bei Listen gilt: Namen zeigen auf Objekte. `konto2 = konto1` erzeugt kein zweites Konto, sondern nur ein zweites Namensschild (F. 32–37). `is` prüft, ob es dasselbe Objekt ist. `==` vergleicht bei eigenen Klassen zunächst ebenfalls nur die Identität.

```python
class Konto:
    def __init__(self, inhaber: str, kontostand: int = 0) -> None:
        self.inhaber = inhaber
        self.kontostand = kontostand


konto1 = Konto("Anna", 100)
konto2 = konto1  # kein neues Konto, nur ein zweiter Name
konto2.kontostand += 50
konto3 = Konto("Anna", 150)
print(konto1.kontostand)
print(konto1 is konto2, konto1 == konto2)
print(konto1 is konto3, konto1 == konto3)
```

```text
150
True True
False False
```

Ein **Klassenattribut** steht direkt im Klassenrumpf. Es gibt den Wert nur einmal, alle Objekte teilen ihn. In Java heißt das `static` (F. 39).

```python
class Konto:
    anzahl_konten = 0  # Klassenattribut

    def __init__(self, inhaber: str) -> None:
        Konto.anzahl_konten += 1  # immer über den Klassennamen ändern
        self.nummer = f"K{Konto.anzahl_konten:03}"
        self.inhaber = inhaber


anna = Konto("Anna")
ben = Konto("Ben")
print(anna.nummer, ben.nummer, Konto.anzahl_konten)
ben.anzahl_konten += 1  # Falle: legt ein Instanzattribut bei ben an
print(ben.anzahl_konten, Konto.anzahl_konten)
```

```text
K001 K002 2
3 2
```

> [!IMPORTANT]
> **Das Wichtigste**
> Zwei Namen können auf ein Objekt zeigen. Klassenattribute änderst du immer über den Klassennamen: `Konto.anzahl_konten += 1`.

> [!WARNING]
> **Achtung**
> Zuweisen über ein Objekt (`ben.anzahl_konten += 1` oder `self.anzahl += 1`) legt ein neues Instanzattribut an. Der Zähler in der Klasse bleibt gleich (F. 40–41). Ein Tippfehler wie `anna.kontostnad = 500` legt still ein neues Attribut an; nur ty meldet das (F. 38).

## Kapselung mit Properties

### Was ist das?

Die Folien nennen vier Grundprinzipien der OOP (F. 43): **Kapselung**, **Vererbung**, **Polymorphismus** und **Abstraktion**. In VL5 geht es um das erste, die anderen kommen in Kapitel 7.

Das Problem (F. 44–45): Mit der bisherigen Klasse kann jeder `anna.kontostand = -999` schreiben. **Kapselung** heißt: Ein Objekt schützt seinen inneren Zustand und bestimmt selbst, wie er geändert wird.

Python hat kein `private`. Es gibt nur eine Abmachung über den Namen (F. 46): `_kontostand` mit einem Unterstrich heißt „intern, bitte nicht von außen benutzen“. Zwei Unterstriche (`__pin`) benennt Python intern um (Name Mangling). Schützen tut beides nicht.

Eine **Property** ist eine Methode, die man von außen wie ein Attribut benutzt, ohne Klammern (F. 48). Davor steht `@property`. So ein `@…` heißt Dekorator.

> [!NOTE]
> **Beispiel: Tresor, Türsteher und Auskunft**
> Der echte Wert liegt im Tresor `_kontostand`. Wer `anna.kontostand = …` schreibt, landet beim Türsteher, dem **Setter**. Er prüft den Wert und legt ihn nur dann in den Tresor, wenn er erlaubt ist. Wer `anna.kontostand` liest, fragt die Auskunft, den **Getter**.

```python
from decimal import Decimal


class Konto:
    def __init__(self, inhaber: str, kontostand: Decimal) -> None:
        self.inhaber = inhaber
        self._kontostand = Decimal(0)  # Tresor anlegen
        self.kontostand = kontostand  # geht schon durch den Türsteher

    @property
    def kontostand(self) -> Decimal:  # Auskunft (Getter)
        return self._kontostand

    @kontostand.setter
    def kontostand(self, neuer_wert: Decimal) -> None:  # Türsteher (Setter)
        if neuer_wert < 0:
            print("Ungültig: negativer Kontostand.")
            return
        self._kontostand = neuer_wert


anna = Konto("Anna", Decimal("100.00"))
anna.kontostand = Decimal("-500")
print(anna.kontostand)
ben = Konto("Ben", Decimal("-50"))
print(ben.kontostand)
```

```text
Ungültig: negativer Kontostand.
100.00
Ungültig: negativer Kontostand.
0
```

### Was bei `anna.kontostand = Decimal("-500")` passiert

1. Python sieht: `kontostand` ist eine Property mit Setter. Es ruft die Setter-Methode auf, mit `neuer_wert = Decimal("-500")`.
2. Der Setter prüft `neuer_wert < 0`. Das ist wahr. Er gibt die Meldung aus und endet mit `return`.
3. Die Zeile `self._kontostand = neuer_wert` wird nie erreicht. Im Tresor liegt weiter 100.00.

Weil `__init__` mit `self.kontostand = kontostand` (ohne Unterstrich) schon den Setter benutzt, gilt die Regel auch beim Anlegen. Deshalb startet Bens Konto bei 0.

| Situation (F. 50) | In Python | Beispiel |
|---|---|---|
| Wert darf frei geändert werden | öffentliches Attribut | `self.inhaber` |
| Wert nur lesbar | `_attribut` + Property ohne Setter | Bestand |
| Änderung nur unter Regeln | `_attribut` + Property mit Setter | `kontostand`, `preis` |
| Wert wird berechnet | Property ohne eigenes Attribut | `jahresgehalt`, `bruttopreis` |

> [!IMPORTANT]
> **Das Wichtigste**
> Dreimal derselbe Name: `@property` über `def kontostand`, dann `@kontostand.setter` über einem zweiten `def kontostand`. Der Tresor heißt anders: `_kontostand`.

> [!WARNING]
> **Achtung**
> Property mit Klammern aufrufen (`lena.jahresgehalt()`) gibt `TypeError: 'int' object is not callable`. Einer Property ohne Setter etwas zuweisen gibt `AttributeError`. Im Setter `self.kontostand = …` statt `self._kontostand = …` ruft den Setter immer wieder auf, bis `RecursionError` kommt.

## Hat-ein-Beziehung, Module und @dataclass

### Was ist das?

Objekte können andere Objekte als Attribute haben. Das heißt **Hat-ein-Beziehung** (has-a) oder Komposition (F. 54): Ein Konto hat einen Kunden. Das Konto speichert keine Kopie, sondern einen Verweis (F. 55).

```python
class Kunde:
    def __init__(self, name: str, ort: str) -> None:
        self.name = name
        self.ort = ort


class Konto:
    def __init__(self, kunde: Kunde, kontostand: int = 0) -> None:
        self.kunde = kunde  # Konto HAT einen Kunden
        self.kontostand = kontostand


anna = Kunde("Anna Berger", "Heilbronn")
giro = Konto(anna, 100)
spar = Konto(anna, 2500)
giro.kunde.ort = "Stuttgart"
print(spar.kunde.ort, giro.kunde is spar.kunde)
```

```text
Stuttgart True
```

**Module und Pakete** (F. 56–57): Jede `.py`-Datei ist ein Modul. Ein Ordner mit Modulen und einer Datei `__init__.py` ist ein Paket. Importiert wird mit `from paket.modul import Name`, etwa `from banking.konto import Konto`.

**@dataclass** (F. 58): Viele Klassen sind reine Datenbehälter. Der Dekorator `@dataclass` aus dem Modul `dataclasses` erzeugt `__init__`, `__repr__` und `__eq__` automatisch aus den annotierten Attributen.

```python
from dataclasses import dataclass


@dataclass
class Kunde:
    name: str
    ort: str


k = Kunde("Anna Berger", "Heilbronn")
print(k)
print(k == Kunde("Anna Berger", "Heilbronn"))
print(k is Kunde("Anna Berger", "Heilbronn"))
```

```text
Kunde(name='Anna Berger', ort='Heilbronn')
True
False
```

Faustregel (F. 59): Kommt es vor allem darauf an, was drinsteht, nimm `@dataclass` (Kunde, Adresse, Bestellposition). Kommt es darauf an, was das Objekt darf und tut, nimm eine normale Klasse mit Properties (Konto, Warenkorb).

> [!IMPORTANT]
> **Das Wichtigste**
> „Hat ein“ = Attribut mit einem anderen Objekt. `@dataclass` spart Schreibarbeit, und `==` vergleicht dann die Werte.

> [!WARNING]
> **Achtung**
> `@dataclass` prüft keine Werte, `Position("Kaffee", -5)` geht durch. Ein Attribut ohne Typangabe ist kein Feld. Die leere Liste gehört in `__init__` (`self.positionen = []`), nicht als Standardwert eines Parameters.

Vor- und Nachteile der OOP (F. 60): Vorteile sind Struktur, Wiederverwendung, Kapselung, Abstraktion und Erweiterbarkeit. Nachteile sind der schwierigere Einstieg, mehr Speicher und Laufzeit und die Gefahr von zu vielen Klassen für ein kleines Problem.

## Übungen

> [!TIP]
> **Übung 1 · leicht**
> Ordne zu, ob Attribut (Zustand) oder Methode (Verhalten): `inhaber`, `einzahlen()`, `preis`, `verkaufen()`, `abteilung`. Was ist der Unterschied zwischen Klasse und Objekt?
>
> Quelle: Selbsttest-Quiz VL5 (sinngemäß)

> [!TIP]
> **Übung 2 · leicht**
> Welcher Aufruf bedeutet dasselbe wie `anna.einzahlen(50)`? (a) `Konto.einzahlen(50)` (b) `Konto.einzahlen(anna, 50)` (c) `einzahlen(anna, 50)` (d) `anna.einzahlen(anna, 50)`
>
> Quelle: Selbsttest-Quiz VL5 (sinngemäß)

> [!TIP]
> **Übung 3 · mittel**
> Mit der Klasse `Konto` aus dem Abschnitt „Methoden und self“: Welchen Wert hat `anna.kontostand` nach jeder Zeile? `anna = Konto("Anna", 100)` · `anna.einzahlen(50)` · `anna.abheben(500)` · `anna.abheben(30)` · `anna.einzahlen(20)`
>
> Quelle: Selbsttest-Quiz VL5 (sinngemäß)

> [!TIP]
> **Übung 4 · mittel**
> Was gibt das Programm aus? Warum?
>
> ```python
> class Produkt:
>     anzahl = 0
>
>     def __init__(self, name: str) -> None:
>         self.anzahl += 1
>         self.name = name
>
>
> kaffee = Produkt("Kaffee")
> tee = Produkt("Tee")
> print(Produkt.anzahl, kaffee.anzahl, tee.anzahl)
> ```
>
> Quelle: VL5 F. 40–41 (sinngemäß)

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> Schreibe eine Klasse `Produkt` mit `name` und einem Preis, der nie negativ werden darf. Nutze eine Property mit Setter. Ein ungültiger Preis soll eine Meldung ausgeben und den alten Wert behalten. Füge eine berechnete Property `bruttopreis` hinzu (19 %, auf Cent gerundet).
>
> Quelle: VL5 Übung 4 (sinngemäß)

## Lösungen

### Übung 1

Attribute: `inhaber`, `preis`, `abteilung`. Methoden: `einzahlen()`, `verkaufen()`. Die Klasse ist der Bauplan. Ein Objekt (eine Instanz) ist ein konkretes Exemplar mit eigenen Attributwerten.

### Übung 2

(b). Lies `anna.einzahlen(50)` so: „Nimm die Methode `einzahlen` aus der Klasse von `anna`, also aus `Konto`, und setz für `self` das Objekt `anna` ein.“ Ausgeschrieben ist das `Konto.einzahlen(anna, 50)`. (a) fehlt `self`, (c) findet keine Funktion `einzahlen` außerhalb der Klasse, (d) übergibt `anna` doppelt. Python übergibt das Objekt vor dem Punkt als erstes Argument. In der Methode heißt es `self`.

### Übung 3

| Zeile | was passiert | anna.kontostand danach |
|---|---|---|
| `anna = Konto("Anna", 100)` | `__init__` setzt den Startwert | 100 |
| `anna.einzahlen(50)` | 100 + 50 | 150 |
| `anna.abheben(500)` | 500 > 150? ja: Meldung, `return False`, nichts abgezogen | 150 |
| `anna.abheben(30)` | 30 > 150? nein: 150 − 30, `return True` | 120 |
| `anna.einzahlen(20)` | 120 + 20 | 140 |

### Übung 4

`self.anzahl += 1` ist ausgeschrieben `self.anzahl = self.anzahl + 1`. Für `kaffee` passiert:

1. Rechte Seite: `self.anzahl` lesen. Der Keks `kaffee` hat noch kein eigenes `anzahl`. Python schaut deshalb in der Form nach, also in der Klasse: 0.
2. 0 + 1 = 1.
3. Linke Seite: `self.anzahl = 1` schreibt auf **diesen Keks**, nicht in die Form. `kaffee` hat jetzt ein eigenes `anzahl` mit dem Wert 1.
4. Bei `tee` dasselbe: wieder 0 aus der Klasse lesen, 1 in `tee` schreiben.

Der Zähler in der Klasse wurde nie beschrieben und bleibt 0.

```python
class Produkt:
    anzahl = 0

    def __init__(self, name: str) -> None:
        self.anzahl += 1
        self.name = name


kaffee = Produkt("Kaffee")
tee = Produkt("Tee")
print(Produkt.anzahl, kaffee.anzahl, tee.anzahl)
```

```text
0 1 1
```

Richtig wäre `Produkt.anzahl += 1`.

### Übung 5

1. Den echten Preis in `_preis` speichern.
2. Getter mit `@property` liefert `_preis`.
3. Setter mit `@preis.setter` prüft den Wert.
4. `__init__` benutzt den Setter, damit die Regel schon beim Anlegen gilt.
5. `bruttopreis` rechnet bei jedem Zugriff neu.

```python
from decimal import Decimal


class Produkt:
    def __init__(self, name: str, preis: Decimal) -> None:
        self.name = name
        self._preis = Decimal("0.00")
        self.preis = preis

    @property
    def preis(self) -> Decimal:
        return self._preis

    @preis.setter
    def preis(self, neuer_preis: Decimal) -> None:
        if neuer_preis < 0:
            print(f"Ungültiger Preis: {neuer_preis}")
            return
        self._preis = neuer_preis

    @property
    def bruttopreis(self) -> Decimal:
        return (self._preis * Decimal("1.19")).quantize(Decimal("0.01"))


kaffee = Produkt("Kaffee 1 kg", Decimal("12.99"))
print(kaffee.bruttopreis)
kaffee.preis = Decimal("-9")
print(kaffee.preis)
```

```text
15.46
Ungültiger Preis: -9
12.99
```

12,99 · 1,19 = 15,4581, auf Cent gerundet 15,46.
