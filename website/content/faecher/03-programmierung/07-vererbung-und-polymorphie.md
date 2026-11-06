---
title: "Vererbung und Polymorphie (OOP II)"
order: 7
summary: "Unterklassen mit super(), Methoden überschreiben mit @override, Polymorphie und Duck Typing, object, abstrakte Klassen und Fähigkeiten statt Interfaces."
klausur: "relevant"
---

VL6 baut direkt auf Kapitel 6 auf. Das Konto von dort wird zur **Oberklasse**. Neue Klassen wie Sparkonto und Girokonto übernehmen alles davon und ergänzen nur, was bei ihnen anders ist. Danach geht es um die anderen drei Grundprinzipien: Vererbung, Polymorphie und Abstraktion.

Ein Alltagsbeispiel: Im Onlineshop klickst du auf „Jetzt bezahlen“. Ob Kreditkarte, Lastschrift oder Rechnung: Der Knopf ist derselbe, aber jede Zahlungsart tut etwas anderes. Genau das ist Polymorphie.

> [!NOTE]
> **Stand der Vorlesung**
> Am 03.11. wurden Vererbung, `super()` und Überschreiben behandelt (VL6 F. 1–29, Übung 1 und 2). Der Rest ab F. 30 (Polymorphie, `object`, abstrakte Klassen, Fähigkeiten, Übung 3 bis 5) ist laut Plan für den 06.11. vorgesehen. Ob das so stattgefunden hat, ist noch nicht bestätigt.

In diesem Kapitel liegt die Oberklasse in einer eigenen Datei `konto.py`. Die Beispiele holen sie mit `from konto import Konto`, wie auf den Folien:

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

    def __str__(self) -> str:
        return f"Konto von {self.inhaber}: {self.kontostand} Euro"
```

## Vererbung und super()

### Was ist das?

Bei der Vererbung übernimmt eine Klasse die Attribute und Methoden einer anderen (VL6 F. 6). Die allgemeinere Klasse heißt **Oberklasse** (Basisklasse), die speziellere **Unterklasse**. Die Unterklasse kann Neues ergänzen und Geerbtes ändern.

Der Test: Vererbung passt nur, wenn man „**ist ein**“ sagen kann. Ein Sparkonto ist ein Konto. Für „**hat ein**“ ist Vererbung das falsche Werkzeug: Ein Konto hat einen Kunden. Dafür nimmst du ein Attribut (F. 7).

Die Unterklasse nennt ihre Oberklasse in Klammern. Das entspricht `extends` in Java (F. 9):

```python
from konto import Konto


class Sparkonto(Konto):  # Sparkonto erbt von Konto
    def __init__(self, inhaber: str, kontostand: int, zinssatz: int) -> None:
        super().__init__(inhaber, kontostand)  # Konto-Teil anlegen
        self.zinssatz = zinssatz  # neu: Zinssatz in Prozent

    def zinsen_gutschreiben(self) -> None:  # neu: nur im Sparkonto
        zinsen = self.kontostand * self.zinssatz // 100
        self.einzahlen(zinsen)  # geerbte Methode


anna = Sparkonto("Anna", 1000, 2)
anna.einzahlen(500)  # geerbt aus Konto
anna.zinsen_gutschreiben()  # 1500 * 2 // 100 = 30
print(anna)  # __str__ geerbt aus Konto
print(vars(anna))
```

```text
Konto von Anna: 1530 Euro
{'inhaber': 'Anna', 'kontostand': 1530, 'zinssatz': 2}
```

### Was bei `Sparkonto("Anna", 1000, 2)` passiert

1. Python legt ein leeres Sparkonto-Objekt an und ruft `Sparkonto.__init__` auf.
2. `super().__init__(inhaber, kontostand)` ruft das `__init__` von Konto auf, mit demselben `self`. Es legt `inhaber` und `kontostand` an.
3. Zurück in `Sparkonto.__init__` kommt `zinssatz` dazu.
4. Ergebnis: ein Objekt mit allen drei Attributen. Merk dir `super()` als „die Oberklasse von mir“.

`isinstance(objekt, Klasse)` prüft, ob ein Objekt zu einer Klasse **oder einer ihrer Unterklassen** gehört (Java: `instanceof`). `type()` nennt nur die genaue Klasse (F. 15).

```python
from konto import Konto


class Sparkonto(Konto):
    pass  # pass: Block ohne Inhalt


anna = Sparkonto("Anna", 1000)
print(isinstance(anna, Konto), type(anna) is Konto, issubclass(Sparkonto, Konto))
```

```text
True False True
```

> [!IMPORTANT]
> **Das Wichtigste**
> Eigenes `__init__` in der Unterklasse → `super().__init__(…)` ist Pflicht. Kein eigenes `__init__` → das der Oberklasse wird geerbt, nichts tun. Für „ist ein …?“ nimmst du `isinstance`.

> [!WARNING]
> **Achtung**
> Python ruft das `__init__` der Oberklasse nicht von selbst auf (F. 10). Fehlt `super().__init__`, kommt der Fehler erst später, bei der ersten Methode, die auf `kontostand` zugreift:

```python
from konto import Konto


class Sparkonto(Konto):
    def __init__(self, inhaber: str, kontostand: int, zinssatz: int) -> None:
        self.zinssatz = zinssatz  # super().__init__ fehlt!


anna = Sparkonto("Anna", 1000, 2)
anna.einzahlen(500)
```

```text
Traceback (most recent call last):
  File "beispiel.py", line 10, in <module>
    anna.einzahlen(500)
    ~~~~~~~~~~~~~~^^^^^
  File "konto.py", line 7, in einzahlen
    self.kontostand += betrag
    ^^^^^^^^^^^^^^^
AttributeError: 'Sparkonto' object has no attribute 'kontostand'
```

## Methoden überschreiben

### Was ist das?

Ein Girokonto darf bis zum Dispo ins Minus. `abheben()` aus Konto passt deshalb nicht. Die Unterklasse schreibt eine Methode mit **gleichem Namen und gleichen Parametern**. Sie ersetzt für Girokonten die Version der Oberklasse. Das heißt **Überschreiben** (F. 19). Mit `super().methode()` kann die Unterklasse die Version der Oberklasse mitbenutzen (F. 20).

```python
from typing import override

from konto import Konto


class Girokonto(Konto):
    def __init__(self, inhaber: str, kontostand: int, dispo: int) -> None:
        super().__init__(inhaber, kontostand)
        self.dispo = dispo

    @override
    def abheben(self, betrag: int) -> bool:
        if betrag > self.kontostand + self.dispo:
            print("Abgelehnt: Der Dispo ist ausgeschöpft.")
            return False
        self.kontostand -= betrag
        return True

    @override
    def __str__(self) -> str:
        return f"{super().__str__()} (Dispo {self.dispo} Euro)"


ben = Girokonto("Ben", 100, 500)
print(ben.abheben(400))
print(ben.abheben(300))
print(ben)
print(Konto("Anna", 100).abheben(400))  # normales Konto: alte Regel
```

```text
True
Abgelehnt: Der Dispo ist ausgeschöpft.
False
Konto von Ben: -300 Euro (Dispo 500 Euro)
Abgelehnt: Der Kontostand reicht nicht.
False
```

Schritt für Schritt: Bei 100 Euro sind 400 erlaubt, weil 400 nicht größer als 100 + 500 = 600 ist. Danach steht das Konto bei −300. Für weitere 300 Euro: 300 > −300 + 500 = 200 ist wahr, also abgelehnt.

**Wo sucht Python eine Methode?** Python fängt in der Klasse des Objekts an. Findet es die Methode dort nicht, geht es in die Oberklasse, und so weiter bis `object`. Die erste Fundstelle gewinnt (F. 21–25). Die Reihenfolge steht in `__mro__`.

`@override` aus `typing` sagt: „Diese Methode soll eine Methode der Oberklasse ersetzen.“ Python ignoriert die Angabe beim Ausführen. ty prüft sie und findet so Tippfehler (F. 26). Ohne `@override` würde `def abhebn(…)` still eine neue Methode anlegen.

| (F. 28) | Überladen | Überschreiben |
|---|---|---|
| Wo? | in derselben Klasse | Ober- und Unterklasse |
| Parameter | verschieden | gleich |
| in Python | gibt es nicht, die zweite `def` ersetzt die erste | ja, Auswahl nach der Klasse des Objekts |

> [!IMPORTANT]
> **Das Wichtigste**
> Überschreiben = gleicher Name, gleiche Parameter, in der Unterklasse. `super().methode()` ergänzt statt zu ersetzen. `@override` lässt ty Tippfehler finden.

> [!WARNING]
> **Achtung**
> Überladen und Überschreiben sind ein Klausurklassiker. `super.__init__(…)` ohne Klammern hinter `super` ist falsch. `from typing import override` nicht vergessen, sonst `NameError`.

## Polymorphie

### Was ist das?

**Polymorphie** (Vielgestaltigkeit) heißt: Derselbe Methodenaufruf führt zu unterschiedlichem Verhalten, je nachdem, zu welcher Klasse das Objekt gehört (F. 32). Der Kassencode muss die Zahlungsarten nicht unterscheiden. Er ruft immer `bezahlen()` auf.

```python
from decimal import Decimal
from typing import override


class Zahlungsart:
    def bezahlen(self, betrag: Decimal) -> str:
        return f"{betrag} Euro bezahlt"


class Kreditkarte(Zahlungsart):
    def __init__(self, nummer: str) -> None:
        self.nummer = nummer

    @override
    def bezahlen(self, betrag: Decimal) -> str:
        return f"{betrag} Euro von Karte ...{self.nummer[-4:]} abgebucht"


class Rechnungskauf(Zahlungsart):
    @override
    def bezahlen(self, betrag: Decimal) -> str:
        return f"Rechnung über {betrag} Euro, zahlbar in 14 Tagen"


zahlungen: list[Zahlungsart] = [Kreditkarte("4111111111111234"), Rechnungskauf(), Zahlungsart()]
for zahlung in zahlungen:
    print(zahlung.bezahlen(Decimal("10.00")))
```

```text
10.00 Euro von Karte ...1234 abgebucht
Rechnung über 10.00 Euro, zahlbar in 14 Tagen
10.00 Euro bezahlt
```

| Runde | zahlung zeigt auf | Python findet bezahlen … | Ausgabe |
|---|---|---|---|
| 1 | Kreditkarte-Objekt | in Kreditkarte | 10.00 Euro von Karte ...1234 abgebucht |
| 2 | Rechnungskauf-Objekt | in Rechnungskauf | Rechnung über 10.00 Euro, zahlbar in 14 Tagen |
| 3 | Zahlungsart-Objekt | in Zahlungsart | 10.00 Euro bezahlt |

Die **Typangabe** `Zahlungsart` legt fest, was ty erlaubt: nur das, was jede Zahlungsart hat. Das **Objekt** legt beim Ausführen fest, welches `bezahlen()` läuft (F. 35). Kommt eine neue Zahlungsart dazu, etwa Lastschrift, bleibt der Kassencode unverändert (F. 36).

**Duck Typing** (F. 40): Python prüft beim Ausführen nur, ob das Objekt eine Methode `bezahlen` hat. Von welcher Klasse es stammt, spielt keine Rolle. „Wenn es aussieht wie eine Ente und quakt wie eine Ente, ist es eine Ente.“ ty meldet so ein Objekt trotzdem, wenn es nicht zur Typangabe passt.

> [!IMPORTANT]
> **Das Wichtigste**
> Polymorphie: Eine Zeile Code, verschiedenes Verhalten. Welche Methode läuft, entscheidet die Klasse des Objekts.

> [!WARNING]
> **Achtung**
> Brauchst du etwas, das nur eine Unterklasse hat (etwa `nummer`), prüfst du vorher mit `isinstance()`. Sonst meldet ty `unresolved-attribute`.

## object und abstrakte Klassen

### Was ist das?

Jede Klasse erbt von **object**, auch wenn das nicht dasteht (F. 43). Von `object` stammen die schlichten Standardfassungen von `__str__`, `__repr__` und `__eq__`. Als du in Kapitel 6 `__str__` geschrieben hast, hast du schon eine Methode von `object` überschrieben.

Für `__repr__` verwenden die Folien das Format `Klassenname(attribut=wert, …)`. `type(self).__name__` liefert den Namen der tatsächlichen Klasse, so passt die Ausgabe auch für Unterklassen (F. 44).

Eine „Zahlungsart an sich“ gibt es nicht, nur Kreditkarte, Rechnung und so weiter. Zahlungsart ist eine **Abstraktion**. Eine **abstrakte Klasse** erbt von `ABC` aus dem Modul `abc`. Von ihr kann man keine Objekte erzeugen (F. 45–46). Eine Methode mit `@abstractmethod` ist ein Pflichtfeld: Jede Unterklasse muss sie umsetzen (F. 47).

```python
from abc import ABC, abstractmethod
from decimal import Decimal
from typing import override


class Zahlungsart(ABC):
    @abstractmethod
    def bezahlen(self, betrag: Decimal) -> str:
        """Jede konkrete Zahlungsart muss das umsetzen."""

    def beleg(self, betrag: Decimal) -> str:  # konkret: für alle gleich
        return f"Beleg: {self.bezahlen(betrag)}"


class Rechnungskauf(Zahlungsart):
    @override
    def bezahlen(self, betrag: Decimal) -> str:
        return f"Rechnung über {betrag} Euro, zahlbar in 14 Tagen"


print(Rechnungskauf().beleg(Decimal("80.00")))
z = Zahlungsart()
```

```text
Beleg: Rechnung über 80.00 Euro, zahlbar in 14 Tagen
Traceback (most recent call last):
  File "beispiel.py", line 22, in <module>
    z = Zahlungsart()
TypeError: Can't instantiate abstract class Zahlungsart without an implementation for abstract method 'bezahlen'
```

> [!IMPORTANT]
> **Das Wichtigste**
> Abstrakte Klasse: `class X(ABC):` mit mindestens einer `@abstractmethod`. Keine Objekte von X. Jede Unterklasse muss alle abstrakten Methoden überschreiben, sonst ist sie selbst abstrakt.

> [!WARNING]
> **Achtung**
> Ohne `(ABC)` hinter dem Klassennamen wirkt `@abstractmethod` nicht. Den Import `from abc import ABC, abstractmethod` nicht vergessen.

## Fähigkeiten statt Interfaces

### Was ist das?

Rechnungen, Lieferscheine und Newsletter sind alle **Dokumente** (Kategorie, „ist ein“). Manche kann man drucken, manche versenden. Das sind **Fähigkeiten** („kann“), und sie gehen quer durch die Klassen (F. 50).

Java erlaubt nur eine Oberklasse und beschreibt Fähigkeiten mit `interface`. Python hat kein `interface`, erlaubt aber mehrere Oberklassen. Eine Fähigkeit ist hier eine abstrakte Klasse, die nur abstrakte Methoden hat (F. 51–52).

```python
from abc import ABC, abstractmethod
from typing import override


class Druckbar(ABC):  # Fähigkeit
    @abstractmethod
    def drucken(self) -> None: ...


class Versendbar(ABC):  # Fähigkeit
    @abstractmethod
    def versenden(self, email: str) -> None: ...


class Dokument:  # Kategorie mit Attribut und Konstruktor
    def __init__(self, nummer: str) -> None:
        self.nummer = nummer


class Rechnung(Dokument, Druckbar, Versendbar):  # erst Kategorie, dann Fähigkeiten
    @override
    def drucken(self) -> None:
        print(f"Rechnung {self.nummer} wird gedruckt")

    @override
    def versenden(self, email: str) -> None:
        print(f"Rechnung {self.nummer} geht an {email}")


class Lieferschein(Dokument, Druckbar):
    @override
    def drucken(self) -> None:
        print(f"Lieferschein {self.nummer} wird gedruckt")


ablage: list[Dokument] = [Rechnung("R-1001"), Lieferschein("L-2001")]
for dokument in ablage:
    if isinstance(dokument, Druckbar):
        dokument.drucken()
    if isinstance(dokument, Versendbar):
        dokument.versenden("einkauf@kunde.de")
```

```text
Rechnung R-1001 wird gedruckt
Rechnung R-1001 geht an einkauf@kunde.de
Lieferschein L-2001 wird gedruckt
```

| Runde | dokument | Druckbar? | Versendbar? |
|---|---|---|---|
| 1 | Rechnung R-1001 | ja | ja |
| 2 | Lieferschein L-2001 | ja | nein |

| (F. 57) | Abstrakte Klasse (Kategorie) | Fähigkeit (Interface) |
|---|---|---|
| Beziehung | „ist ein …“ | „kann …“ |
| Methoden | konkrete und abstrakte | nur abstrakte |
| Attribute, Konstruktor | ja | nein |
| wie viele je Klasse? | eine | beliebig viele |

> [!IMPORTANT]
> **Das Wichtigste**
> Eine Kategorie als Oberklasse, beliebig viele Fähigkeiten dazu. Was ein Objekt kann, prüfst du mit `isinstance(objekt, Faehigkeit)`.

> [!WARNING]
> **Achtung**
> Ohne `isinstance`-Prüfung gibt `schein.versenden(…)` beim Lieferschein einen `AttributeError`. Mehrere Oberklassen nutzen wir nur für Fähigkeiten, nicht für mehrere Kategorien.

## Übungen

> [!TIP]
> **Übung 1 · leicht**
> Vererbung oder Attribut? (a) Werkstudent → Mitarbeiter (b) Bestellung → Position (c) Laptop → Gerät (d) Konto → Kunde
>
> Quelle: VL6 F. 7 (sinngemäß)

> [!TIP]
> **Übung 2 · leicht**
> Was ist der Unterschied zwischen Überladen und Überschreiben? Welches davon gibt es in Python?
>
> Quelle: VL6 F. 28, Selbsttest-Quiz VL6 (sinngemäß)

> [!TIP]
> **Übung 3 · mittel**
> Was gibt das Programm aus? Warum?
>
> ```python
> from konto import Konto
>
>
> class Festgeld(Konto):
>     def __init__(self, inhaber: str, kontostand: int, laufzeit: int) -> None:
>         super().__init__(inhaber, kontostand)
>         self.kontostand = laufzeit
>
>
> f = Festgeld("Anna", 5000, 12)
> print(f)
> ```
>
> Quelle: VL6 F. 27 (sinngemäß)

> [!TIP]
> **Übung 4 · Prüfungsniveau**
> Schreibe eine abstrakte Klasse `Mitarbeiter` mit `name` und der abstrakten Methode `monatskosten() -> int`. Unterklassen: `Festangestellter` (Gehalt plus 20 % Nebenkosten, ganzzahlig) und `Werkstudent` (Stunden · Stundenlohn). Schreibe eine Funktion `personalkosten(team)`, die die Summe aller Monatskosten liefert, ohne die Klassen zu unterscheiden. Teste mit einem Festangestellten (4000 €) und einem Werkstudenten (40 h · 15 €).
>
> Quelle: VL6 Übung 3 „Personalkosten“ und Übung 4 (sinngemäß, eigene Zahlen)

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> Eine Klasse `PayPal(Zahlungsart)` hat ein `__init__` mit `email`, aber kein `bezahlen()`. `Zahlungsart` ist abstrakt wie im Abschnitt „object und abstrakte Klassen“. Was passiert bei `PayPal("anna@example.com")`? Wann kommt der Fehler?
>
> Quelle: VL6 F. 47 (sinngemäß)

## Lösungen

### Übung 1

(a) Ein Werkstudent ist ein Mitarbeiter: Vererbung. (b) Eine Bestellung hat Positionen: Attribut (Liste). (c) Ein Laptop ist ein Gerät: Vererbung. (d) Ein Konto hat einen Kunden: Attribut.

### Übung 2

Überladen: mehrere Methoden mit gleichem Namen, aber verschiedenen Parametern in derselben Klasse. Gibt es in Python nicht, die zweite `def` ersetzt die erste. Überschreiben: Die Unterklasse ersetzt eine geerbte Methode mit gleichem Namen und gleichen Parametern. Gibt es in Python.

### Übung 3

Ober- und Unterklasse schreiben in **dasselbe** Attribut des Objekts. In Java entstünden zwei getrennte Felder, in Python gibt es nur ein `kontostand`. Die 5000 Euro sind weg.

```python
from konto import Konto


class Festgeld(Konto):
    def __init__(self, inhaber: str, kontostand: int, laufzeit: int) -> None:
        super().__init__(inhaber, kontostand)
        self.kontostand = laufzeit


f = Festgeld("Anna", 5000, 12)
print(f)
```

```text
Konto von Anna: 12 Euro
```

Richtig wäre ein eigener Name wie `self.laufzeit`.

### Übung 4

1. `Mitarbeiter(ABC)` mit `name` im `__init__` und `@abstractmethod monatskosten`.
2. Jede Unterklasse ruft `super().__init__(name)` auf und überschreibt `monatskosten`.
3. `personalkosten` summiert in einer Schleife. Welches `monatskosten()` läuft, entscheidet das Objekt.

```python
from abc import ABC, abstractmethod
from typing import override


class Mitarbeiter(ABC):
    def __init__(self, name: str) -> None:
        self.name = name

    @abstractmethod
    def monatskosten(self) -> int: ...


class Festangestellter(Mitarbeiter):
    def __init__(self, name: str, gehalt: int) -> None:
        super().__init__(name)
        self.gehalt = gehalt

    @override
    def monatskosten(self) -> int:
        return self.gehalt * 120 // 100


class Werkstudent(Mitarbeiter):
    def __init__(self, name: str, stunden: int, stundenlohn: int) -> None:
        super().__init__(name)
        self.stunden = stunden
        self.stundenlohn = stundenlohn

    @override
    def monatskosten(self) -> int:
        return self.stunden * self.stundenlohn


def personalkosten(team: list[Mitarbeiter]) -> int:
    summe = 0
    for person in team:
        summe += person.monatskosten()
    return summe


team: list[Mitarbeiter] = [Festangestellter("Lena", 4000), Werkstudent("Max", 40, 15)]
print(personalkosten(team))
```

```text
5400
```

| Runde | person | monatskosten() | summe danach |
|---|---|---|---|
| Start | – | – | 0 |
| 1 | Lena (Festangestellter) | 4000 · 120 // 100 = 4800 | 4800 |
| 2 | Max (Werkstudent) | 40 · 15 = 600 | 5400 |

### Übung 5

`PayPal` überschreibt die abstrakte Methode nicht und bleibt deshalb selbst abstrakt. Der Fehler kommt schon **beim Erzeugen** des Objekts, nicht erst beim Aufruf von `bezahlen()`. ty meldet ihn vor dem Start.

```python
from abc import ABC, abstractmethod
from decimal import Decimal


class Zahlungsart(ABC):
    @abstractmethod
    def bezahlen(self, betrag: Decimal) -> str: ...


class PayPal(Zahlungsart):
    def __init__(self, email: str) -> None:
        self.email = email


p = PayPal("anna@example.com")
```

```text
Traceback (most recent call last):
  File "beispiel.py", line 15, in <module>
    p = PayPal("anna@example.com")
TypeError: Can't instantiate abstract class PayPal without an implementation for abstract method 'bezahlen'
```
