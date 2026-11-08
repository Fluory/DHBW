---
title: "Projekt Kaffeeshop"
order: 8
summary: "Ein kleiner Onlineshop in der Kommandozeile: Lager, Warenkorb und Bestellung in Stufe 1, Produktarten und Zahlungsarten in Stufe 2, Zusatzaufgaben in Stufe 3."
klausur: "teilweise"
---

VL7 bringt keinen neuen Stoff, sondern ein Projekt. Ihr schreibt zu zweit einen kleinen Onlineshop für Kaffee und Zubehör, der in der Kommandozeile läuft. Kunden sehen das Sortiment, suchen, legen Produkte in den Warenkorb und bestellen. Dabei kommt alles zusammen: Klassen, Properties und `@dataclass` (Kapitel 6), Listen, Schleifen und `match` (Kapitel 4), Funktionen und Module (Kapitel 5), Vererbung, abstrakte Klassen und Polymorphie (Kapitel 7) (VL7 F. 3).

Für die Klausur zählt nicht das Projekt selbst, sondern die Muster darin: ein Element in einer Liste finden, Treffer sammeln, aufsummieren, ein Objekt über mehrere Namen verändern. Genau diese Muster übst du hier mit Rundentabellen.

> [!NOTE]
> **Stand und Herkunft**
> Das Projekt beginnt laut Plan am 06.11. mit Stufe 1. Stufe 2 und 3 folgen eher am nächsten Termin. Eine offizielle Musterlösung gibt es laut F. 22 erst nach dem Projekt. Der Code hier ist deshalb eine **eigene Lösung** der Folienaufgaben. Die Klasse `Produkt` ist eine vereinfachte eigene Fassung der Datei aus dem Startpaket.

## Das Projekt und das Startpaket

### Was ist das?

Ablauf (F. 4): Aufgabe und Startpaket → Stufe 1 (Lager, Warenkorb, Bestellung) → Zwischenstand → Stufe 2 (Produktarten, Zahlungsarten) → Stufe 3 (Zusatzaufgaben) → Vorstellung und Musterlösung. Gearbeitet wird zu zweit (Pair Programming, F. 5): Eine Person tippt, die andere liest mit; etwa alle 30 Minuten wird gewechselt. Beide sollen jede Zeile erklären können.

Das Startpaket aus Moodle enthält drei Dateien (F. 8):

| Datei | Inhalt | Was du tust |
|---|---|---|
| `produkt.py` | Klasse `Produkt` mit Artikelnummer, Properties `preis`, `bestand`, `bruttopreis` (19 %), `einlagern()`, `verkaufen()` | nur benutzen |
| `daten.py` | `beispielsortiment()` mit acht Produkten (101–104 Lebensmittel, 201–204 Zubehör) | nur benutzen |
| `main.py` | Menü mit `while True` und `match`, dazu `zahl_einlesen()` | ausbauen |

In Stufe 1 gibt es keine Vererbung. Alle Beziehungen sind „hat ein“ (F. 7):

| Klasse | hat | Methoden |
|---|---|---|
| Lager | viele Produkte | `anzeigen()`, `finden(nummer)`, `suchen(text)` |
| Warenkorb | einen Kunden, viele Positionen | `hinzufuegen()`, `entfernen()`, `gesamtsumme()`, `ist_leer()`, `anzeigen()` |
| Position | ein Produkt, eine Menge | `summe()` |

> [!NOTE]
> **Beispiel: Regal und Einkaufskorb**
> Das Lager ist ein Regal voller Produkte. Im Warenkorb liegen keine Produkte direkt, sondern Zettel (Positionen): „3 × French Press“. Ein Zettel hat ein Produkt und eine Menge.

## Stufe 1: Das Lager

### Was ist das?

Aufgabe (F. 10): eine Klasse `Lager` in `lager.py`. `finden(nummer)` liefert das Produkt mit dieser Artikelnummer oder `None`. `suchen(text)` liefert alle Produkte, deren Name den Text enthält, ohne Rücksicht auf Groß- und Kleinschreibung.

```python
from produkt import Produkt


class Lager:
    def __init__(self, produkte: list[Produkt]) -> None:
        self.produkte = produkte

    def anzeigen(self) -> None:
        for produkt in self.produkte:
            print(produkt)

    def finden(self, nummer: int) -> Produkt | None:
        for produkt in self.produkte:
            if produkt.nummer == nummer:
                return produkt  # gefunden: sofort raus aus der Methode
        return None  # Schleife ganz durchgelaufen, nichts gefunden

    def suchen(self, text: str) -> list[Produkt]:
        treffer: list[Produkt] = []
        for produkt in self.produkte:
            if text.lower() in produkt.name.lower():
                treffer.append(produkt)
        return treffer
```

`Produkt | None` heißt: Die Methode liefert ein Produkt oder `None`.

**Stell dir vor:** Du suchst im Regal die Packung mit der Nummer 203. Du nimmst eine Packung nach der anderen in die Hand und schaust auf die Nummer. Passt sie, hörst du sofort auf und gibst die Packung heraus (`return produkt`). „Gibt es nicht“ darfst du erst sagen, wenn du **alle** Packungen angeschaut hast (`return None` nach der Schleife). Beim Suchen nach „kaffee“ legst du dagegen jede passende Packung in einen Korb und gibst am Ende den ganzen Korb heraus, auch wenn er leer ist.

```python
from daten import beispielsortiment
from lager import Lager

lager = Lager(beispielsortiment())
print(lager.finden(203))
print(lager.finden(999))
for produkt in lager.suchen("kaffee"):
    print(produkt.name)
print(lager.suchen("Zucker"))
```

```text
203  French Press 1 l: 24.87 Euro (3 auf Lager)
None
Kaffee Hausmischung 1 kg
Kaffeemühle mit Handkurbel
[]
```

Rundentabelle für `finden(203)` (Reihenfolge im Sortiment: 101, 102, 103, 104, 201, 202, 203, 204):

| Runde | produkt.nummer | == 203? | was passiert |
|---|---|---|---|
| 1–6 | 101 … 202 | nein | weiter |
| 7 | 203 | ja | `return produkt`, die Methode endet sofort |

Bei `finden(999)` lautet die Antwort in allen acht Runden „nein“. Erst nach der Schleife kommt `return None`.

`suchen()` hört nicht beim ersten Treffer auf, sondern sammelt alle. Das Muster ist dasselbe wie beim Aufsummieren: leere Liste vor der Schleife, `append` in der Schleife, `return` nach der Schleife.

> [!IMPORTANT]
> **Das Wichtigste**
> Finden: beim Treffer sofort `return`, „nicht gefunden“ erst nach der Schleife. Sammeln: leere Liste, `append`, Liste zurückgeben. Kein Treffer ergibt `[]`, nicht `None`.

> [!WARNING]
> **Achtung**
> Der häufigste Fehler bei `finden()` ist ein `else: return None` direkt unter dem `if`. Dann endet die Suche schon nach dem ersten falschen Produkt. `return None` gehört hinter die Schleife, eine Stufe weniger eingerückt als `for`.

## Stufe 1: Der Warenkorb

### Was ist das?

Aufgabe (F. 12): `Kunde` und `Position` aus VL5 Übung 5 übernehmen, `summe()` rechnet mit dem Bruttopreis. `hinzufuegen()` liefert `False`, wenn die Menge nicht auf Lager ist. Was schon im Warenkorb liegt, zählt mit. Liegt das Produkt schon im Korb, wird die Menge dieser Position erhöht.

```python
from dataclasses import dataclass
from decimal import Decimal

from produkt import Produkt


@dataclass
class Kunde:
    name: str
    email: str


@dataclass
class Position:
    produkt: Produkt
    menge: int

    def summe(self) -> Decimal:
        return self.produkt.bruttopreis * self.menge


class Warenkorb:
    def __init__(self, kunde: Kunde) -> None:
        self.kunde = kunde
        self.positionen: list[Position] = []

    def position_zu(self, nummer: int) -> Position | None:
        for position in self.positionen:
            if position.produkt.nummer == nummer:
                return position
        return None

    def menge_im_korb(self, nummer: int) -> int:
        position = self.position_zu(nummer)
        if position is None:
            return 0
        return position.menge

    def hinzufuegen(self, produkt: Produkt, menge: int) -> bool:
        schon_im_korb = self.menge_im_korb(produkt.nummer)
        if schon_im_korb + menge > produkt.bestand:
            return False  # nicht genug auf Lager
        position = self.position_zu(produkt.nummer)
        if position is None:
            self.positionen.append(Position(produkt, menge))  # neue Position
        else:
            position.menge += menge  # vorhandene Position erhöhen
        return True

    def entfernen(self, nummer: int) -> bool:
        position = self.position_zu(nummer)
        if position is None:
            return False
        self.positionen.remove(position)
        return True

    def gesamtsumme(self) -> Decimal:
        summe = Decimal(0)
        for position in self.positionen:
            summe += position.summe()
        return summe

    def ist_leer(self) -> bool:
        return len(self.positionen) == 0

    def anzeigen(self) -> None:
        print(f"Warenkorb von {self.kunde.name}")
        for position in self.positionen:
            print(f"{position.menge} x {position.produkt.name}: {position.summe()} Euro")
        print(f"Summe: {self.gesamtsumme()} Euro")
```

`position_zu()` und `menge_im_korb()` sind eigene Hilfsmethoden. `position_zu()` ist gebaut wie `finden()`, nur über die Positionen.

### hinzufuegen() Schritt für Schritt

1. Was liegt schon im Korb? `schon_im_korb = self.menge_im_korb(produkt.nummer)`.
2. Reicht der Bestand für beides zusammen? Wenn `schon_im_korb + menge > produkt.bestand`: `return False`. Nichts wird geändert.
3. Zettel neu oder ergänzen? Gibt es noch keine Position: neue anhängen. Sonst deren `menge` erhöhen. Dann `return True`.

```python
from daten import beispielsortiment
from lager import Lager
from warenkorb import Kunde, Warenkorb

lager = Lager(beispielsortiment())
korb = Warenkorb(Kunde("Anna Berger", "anna.berger@example.com"))
french_press = lager.finden(203)
kaffee = lager.finden(101)
assert french_press is not None and kaffee is not None
print(korb.hinzufuegen(french_press, 5))  # nur 3 auf Lager
print(korb.hinzufuegen(french_press, 3))
print(korb.hinzufuegen(french_press, 1))  # 3 liegen schon im Korb
print(korb.hinzufuegen(kaffee, 2))
print(korb.hinzufuegen(kaffee, 1))
print(len(korb.positionen))
korb.anzeigen()
```

```text
False
True
False
True
True
2
Warenkorb von Anna Berger
3 x French Press 1 l: 74.61 Euro
3 x Kaffee Hausmischung 1 kg: 46.38 Euro
Summe: 120.99 Euro
```

| hinzufuegen(…) | schon_im_korb | Prüfung | Ergebnis | Positionen danach |
|---|---|---|---|---|
| french_press, 5 | 0 | 0 + 5 > 3 → ja | False | keine |
| french_press, 3 | 0 | 0 + 3 > 3 → nein | True | 3 × French Press |
| french_press, 1 | 3 | 3 + 1 > 3 → ja | False | 3 × French Press |
| kaffee, 2 | 0 | 0 + 2 > 40 → nein | True | 3 × FP, 2 × Kaffee |
| kaffee, 1 | 2 | 2 + 1 > 40 → nein | True | 3 × FP, 3 × Kaffee |

Am Ende gibt es zwei Positionen, nicht drei. `position.menge += menge` ändert das Position-Objekt, das in der Liste liegt. Name und Listeneintrag zeigen auf dasselbe Objekt (Kapitel 6).

Rundentabelle für `gesamtsumme()`:

| Runde | position | position.summe() | summe danach |
|---|---|---|---|
| Start | – | – | 0 |
| 1 | 3 × French Press | 3 · 24.87 = 74.61 | 74.61 |
| 2 | 3 × Kaffee Hausmischung | 3 · 15.46 = 46.38 | 120.99 |

> [!IMPORTANT]
> **Das Wichtigste**
> `hinzufuegen()` liefert nur `True` oder `False`. Die Meldung an den Kunden schreibt `main.py`. So bleibt der Warenkorb ohne `input` und `print` testbar.

> [!WARNING]
> **Achtung**
> Zwei typische Fehler: nur `menge > produkt.bestand` prüfen und die Menge im Korb vergessen. Dann liegen am Ende 4 von 3 French Press im Korb. Oder immer `append`, ohne nach einem vorhandenen Zettel zu schauen. Dann gibt es Kaffee zweimal als zwei Positionen.

## Stufe 1: Das Menü

### Was ist das?

Aufgabe (F. 13): Am Anfang nach Name und E-Mail fragen. Menüpunkte für „In den Warenkorb“, „Warenkorb anzeigen“, „Entfernen“ und „Bestellen“. Beim Bestellen wird für jede Position der Bestand mit `verkaufen()` verringert, die Summe ausgegeben und der Warenkorb geleert. Ein leerer Warenkorb kann nicht bestellt werden. Tipp von F. 11: für jeden Menüpunkt eine eigene Funktion.

Die fertige Funktion `zahl_einlesen()` aus dem Startpaket fragt so lange, bis nur Ziffern eingegeben werden:

```python
def zahl_einlesen(frage: str) -> int:
    """Fragt so lange nach, bis eine ganze Zahl ab 0 eingegeben wird."""
    while True:
        eingabe = input(frage)
        if eingabe.isdigit():  # True, wenn der Text nur aus Ziffern besteht
            return int(eingabe)
        print("Bitte eine ganze Zahl eingeben.")
```

| Runde | eingabe | eingabe.isdigit() | was passiert |
|---|---|---|---|
| 1 | "abc" | False | Meldung, nächste Runde |
| 2 | "999" | True | `return 999`: Schleife und Funktion enden |

Die Menüfunktion fürs Bestellen, ohne Eingaben:

```python
from daten import beispielsortiment
from warenkorb import Kunde, Warenkorb


def bestellen(korb: Warenkorb) -> None:
    if korb.ist_leer():
        print("Der Warenkorb ist leer.")
        return
    for position in korb.positionen:
        position.produkt.verkaufen(position.menge)
    print(f"Vielen Dank, {korb.kunde.name}! Ihre Bestellung über {korb.gesamtsumme()} Euro.")
    korb.positionen = []  # neue, leere Liste


kaffee = beispielsortiment()[0]
korb = Warenkorb(Kunde("Anna Berger", "anna.berger@example.com"))
korb.hinzufuegen(kaffee, 2)
bestellen(korb)
print(kaffee)
bestellen(korb)
```

```text
Vielen Dank, Anna Berger! Ihre Bestellung über 30.92 Euro.
101  Kaffee Hausmischung 1 kg: 15.46 Euro (38 auf Lager)
Der Warenkorb ist leer.
```

> [!IMPORTANT]
> **Das Wichtigste**
> Lager, Kunde und Warenkorb werden in `main()` einmal **vor** der `while`-Schleife angelegt. Ein frühes `return` in einer Menüfunktion heißt nur „Schluss für diesen Menüpunkt“; das Menü läuft weiter.

> [!WARNING]
> **Achtung**
> Stünde `korb = Warenkorb(kunde)` in der Schleife, wäre der Korb nach jeder Menüwahl wieder leer, wie bei `summe = 0` in der Schleife (Kapitel 2).

## Stufe 2: Produktarten und Zahlungsarten

### Was ist das?

In Stufe 2 kommt Kapitel 7 dazu. Für die meisten Lebensmittel gilt in Deutschland der ermäßigte Mehrwertsteuersatz von 7 %, auch für Kaffee und Tee (F. 16). Die Aufgabe: `Produkt` wird abstrakt mit der abstrakten Methode `mwst_satz()`. `bruttopreis` rechnet mit `self.mwst_satz()`. Unterklassen sind `Lebensmittel` (7 %) und `Zubehoer` (19 %).

```python
from abc import ABC, abstractmethod
from decimal import Decimal
from typing import override


class Produkt(ABC):
    def __init__(self, nummer: int, name: str, preis: Decimal) -> None:
        self.nummer = nummer
        self.name = name
        self._preis = preis

    @abstractmethod
    def mwst_satz(self) -> Decimal: ...

    @property
    def bruttopreis(self) -> Decimal:
        return (self._preis * (1 + self.mwst_satz())).quantize(Decimal("0.01"))


class Lebensmittel(Produkt):
    @override
    def mwst_satz(self) -> Decimal:
        return Decimal("0.07")


class Zubehoer(Produkt):
    @override
    def mwst_satz(self) -> Decimal:
        return Decimal("0.19")


sortiment: list[Produkt] = [
    Lebensmittel(101, "Kaffee Hausmischung 1 kg", Decimal("12.99")),
    Zubehoer(203, "French Press 1 l", Decimal("20.90")),
]
for produkt in sortiment:
    print(produkt.nummer, produkt.name, produkt.bruttopreis)
```

```text
101 Kaffee Hausmischung 1 kg 13.90
203 French Press 1 l 24.87
```

Das sind die Kontrollwerte von F. 16: Die Kaffee Hausmischung kostet jetzt 13.90 Euro (12,99 · 1,07 = 13,8993 → 13,90), die French Press bleibt bei 24.87. Das ist Polymorphie: `bruttopreis` steht nur einmal in `Produkt`. Welches `mwst_satz()` läuft, entscheidet das Objekt.

Dazu kommen Zahlungsarten (F. 17): eine abstrakte Klasse `Zahlungsart` mit `bezahlen(betrag)`, Unterklassen `Kreditkarte`, `Lastschrift` und `Rechnungskauf`, und eine `@dataclass Bestellung` mit Nummer, Kunde, Positionen und Zahlungsart.

> [!IMPORTANT]
> **Das Wichtigste**
> Lager, Warenkorb und Menü ändern sich für die Produktarten gar nicht. Die Typangabe `list[Produkt]` passt weiter, weil ein Lebensmittel ein Produkt ist.

> [!WARNING]
> **Achtung**
> Beim Leeren des Warenkorbs (F. 18): `Bestellung(1, korb.kunde, korb.positionen, …)` kopiert die Liste nicht. Korb und Bestellung zeigen danach auf **dieselbe** Liste. `korb.positionen.clear()` leert deshalb auch die Bestellung. Richtig ist `korb.positionen = []`: Der Korb bekommt eine neue Liste.

## Stufe 3: Zusatzaufgaben

Wer fertig ist, sucht sich etwas aus (F. 21): Versandkosten (4,90 €, ab 50 € Warenwert frei), ein Rabattcode mit `match`, ein Mitarbeiterbereich (Produkte mit weniger als 5 Stück anzeigen und nachbestellen), das Sortiment selbst nach Preis sortieren (ohne `sorted()`) oder Tests mit pytest.

Beim Selbst-Sortieren holt man das günstigste Produkt nach vorn, dann das zweitgünstigste und so weiter (Tipp der Folie). In der Klausur käme so etwas eher als „Was steht nach Runde 2 in der Liste?“.

## Übungen

> [!TIP]
> **Übung 1 · leicht**
> Was liefert `lager.suchen("tee")` mit dem Beispielsortiment? Wie viele Treffer sind es, und warum findet die Suche auch „Grüner Tee“?
>
> Quelle: VL7 F. 10, eigene Aufgabe

> [!TIP]
> **Übung 2 · mittel**
> Was gibt das Programm aus? Lege eine Rundentabelle an.
>
> ```python
> from daten import beispielsortiment
> from produkt import Produkt
>
>
> def finden_kaputt(produkte: list[Produkt], nummer: int) -> Produkt | None:
>     for produkt in produkte:
>         if produkt.nummer == nummer:
>             return produkt
>         else:
>             return None
>
>
> sortiment = beispielsortiment()
> print(finden_kaputt(sortiment, 101))
> print(finden_kaputt(sortiment, 203))
> ```
>
> Quelle: eigene Aufgabe

> [!TIP]
> **Übung 3 · mittel**
> Ein leerer Warenkorb, Thermobecher (204) hat Bestand 15. Was liefern nacheinander `hinzufuegen(becher, 10)`, `hinzufuegen(becher, 6)`, `hinzufuegen(becher, 5)`? Wie viele Positionen gibt es danach, und mit welcher Menge?
>
> Quelle: VL7 F. 12 und F. 14, eigene Aufgabe

> [!TIP]
> **Übung 4 · Prüfungsniveau**
> Was gibt das Programm aus? Erkläre das Ergebnis mit „Namen zeigen auf Objekte“.
>
> ```python
> korb_positionen = ["2 x Kaffee"]
> bestellung_positionen = korb_positionen
> korb_positionen.clear()
> print(bestellung_positionen)
> korb_positionen = ["1 x Tee"]
> bestellung2_positionen = korb_positionen
> korb_positionen = []
> print(bestellung2_positionen, korb_positionen)
> ```
>
> Quelle: VL7 F. 18 (sinngemäß, vereinfacht)

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> Sortiere die Preise `[13.90, 8.45, 3.73, 2.99]` mit dem Verfahren „Günstigstes nach vorn tauschen“. Wie sieht die Liste nach Runde 1 und nach Runde 2 aus? Schreibe die Funktion.
>
> Quelle: VL7 F. 21 (Zusatzaufgabe Sortieren, sinngemäß)

## Lösungen

### Übung 1

`.lower()` macht beide Texte klein. Dann prüft `in`, ob „tee“ irgendwo im Namen vorkommt. Nur „Grüner Tee 100 g“ enthält „tee“: ein Treffer.

```python
from daten import beispielsortiment
from lager import Lager

lager = Lager(beispielsortiment())
treffer = lager.suchen("tee")
print(len(treffer), [p.name for p in treffer])
```

```text
1 ['Grüner Tee 100 g']
```

### Übung 2

Aufruf mit 101:

| Runde | produkt.nummer | == 101? | was passiert |
|---|---|---|---|
| 1 | 101 | ja | `return produkt`, gefunden |

Aufruf mit 203:

| Runde | produkt.nummer | == 203? | was passiert |
|---|---|---|---|
| 1 | 101 | nein | `else`: `return None`, Suche vorbei |
| 2–8 | – | – | werden nie erreicht |

101 wird gefunden, weil es zufällig an erster Stelle steht. Bei 203 ist schon Runde 1 „nein“, und das `else` beendet die Methode, bevor das zweite Produkt überhaupt angeschaut wird. Das ist so, als würdest du nach der ersten falschen Packung sagen: „Gibt es nicht.“

```python
from daten import beispielsortiment
from produkt import Produkt


def finden_kaputt(produkte: list[Produkt], nummer: int) -> Produkt | None:
    for produkt in produkte:
        if produkt.nummer == nummer:
            return produkt
        else:
            return None


sortiment = beispielsortiment()
print(finden_kaputt(sortiment, 101))
print(finden_kaputt(sortiment, 203))
```

```text
101  Kaffee Hausmischung 1 kg: 15.46 Euro (40 auf Lager)
None
```

### Übung 3

| hinzufuegen(…) | schon_im_korb | Prüfung | Ergebnis |
|---|---|---|---|
| becher, 10 | 0 | 0 + 10 > 15 → nein | True, neue Position mit 10 |
| becher, 6 | 10 | 10 + 6 > 15 → ja | False |
| becher, 5 | 10 | 10 + 5 > 15 → nein | True, Menge auf 15 erhöht |

```python
from daten import beispielsortiment
from lager import Lager
from warenkorb import Kunde, Warenkorb

lager = Lager(beispielsortiment())
korb = Warenkorb(Kunde("Ben", "ben@example.com"))
becher = lager.finden(204)
assert becher is not None
print(korb.hinzufuegen(becher, 10), korb.hinzufuegen(becher, 6), korb.hinzufuegen(becher, 5))
print(len(korb.positionen), korb.positionen[0].menge)
```

```text
True False True
1 15
```

Eine Position mit Menge 15.

### Übung 4

1. `bestellung_positionen = korb_positionen` macht keine Kopie. Beide Namen zeigen auf dieselbe Liste.
2. `clear()` leert diese eine Liste. Deshalb ist auch `bestellung_positionen` leer.
3. `korb_positionen = []` bindet nur den Namen `korb_positionen` an eine neue Liste. Die alte Liste mit „1 x Tee“ gehört jetzt nur noch `bestellung2_positionen`.

```python
korb_positionen = ["2 x Kaffee"]
bestellung_positionen = korb_positionen
korb_positionen.clear()
print(bestellung_positionen)
korb_positionen = ["1 x Tee"]
bestellung2_positionen = korb_positionen
korb_positionen = []
print(bestellung2_positionen, korb_positionen)
```

```text
[]
['1 x Tee'] []
```

### Übung 5

1. Runde 1 (Platz 0): Das günstigste von allen ist 2.99 auf Platz 3. Tausch 0 ↔ 3: `[2.99, 8.45, 3.73, 13.9]`.
2. Runde 2 (Platz 1): Das günstigste ab Platz 1 ist 3.73 auf Platz 2. Tausch 1 ↔ 2: `[2.99, 3.73, 8.45, 13.9]` (Python schreibt 13.90 als 13.9).
3. Runde 3 und 4: Alles steht schon richtig.

Die innere Schleife in Runde 1 genau (i = 0, sie merkt sich die Position des bisher günstigsten Preises):

| j | preise[j] | kleiner als preise[guenstigstes]? | guenstigstes danach |
|---|---|---|---|
| Start | – | – | 0 (13.9) |
| 1 | 8.45 | 8.45 < 13.9? ja | 1 |
| 2 | 3.73 | 3.73 < 8.45? ja | 2 |
| 3 | 2.99 | 2.99 < 3.73? ja | 3 |

Danach tauscht die Zeile `preise[i], preise[guenstigstes] = …` Platz 0 und Platz 3.

```python
def sortieren(preise: list[float]) -> None:
    for i in range(len(preise)):
        guenstigstes = i
        for j in range(i + 1, len(preise)):
            if preise[j] < preise[guenstigstes]:
                guenstigstes = j
        preise[i], preise[guenstigstes] = preise[guenstigstes], preise[i]
        print(f"nach Runde {i + 1}: {preise}")


preise = [13.90, 8.45, 3.73, 2.99]
sortieren(preise)
```

```text
nach Runde 1: [2.99, 8.45, 3.73, 13.9]
nach Runde 2: [2.99, 3.73, 8.45, 13.9]
nach Runde 3: [2.99, 3.73, 8.45, 13.9]
nach Runde 4: [2.99, 3.73, 8.45, 13.9]
```

Die innere Schleife sucht, die äußere zählt die Plätze. Die Funktion ändert die Liste selbst und gibt nichts zurück, wie `list.sort()`.
