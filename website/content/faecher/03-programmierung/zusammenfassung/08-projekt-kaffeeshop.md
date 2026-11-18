Dieses Kapitel bringt keinen neuen Stoff, sondern ein Projekt: einen kleinen Onlineshop für Kaffee und Zubehör in der Kommandozeile. Dabei kommt alles aus den Kapiteln 4 bis 7 zusammen. Für die Klausur zählt nicht das Projekt selbst, sondern die Muster darin. Du findest ein Element in einer Liste, sammelst Treffer, summierst auf und veränderst ein Objekt über mehrere Namen.

### Stufe 1: Lager und Warenkorb

In Stufe 1 gibt es keine Vererbung, alle Beziehungen sind „hat ein“. Das `Lager` hat viele Produkte. `finden(nummer)` geht die Produkte durch und gibt beim Treffer sofort mit `return` das Produkt zurück. „Nicht gefunden“ darf erst nach der Schleife kommen, als `return None`. Ein `else: return None` direkt unter dem `if` beendet die Suche schon nach dem ersten falschen Produkt. `suchen(text)` hört dagegen nicht beim ersten Treffer auf. Es sammelt alle Treffer: leere Liste vor der Schleife, `append` in der Schleife, Liste zurückgeben. Gibt es keinen Treffer, kommt `[]` heraus, nicht `None`. Mit `.lower()` auf beiden Seiten spielt die Groß- und Kleinschreibung keine Rolle.

Der `Warenkorb` hat einen Kunden und viele Positionen. Eine Position hat ein Produkt und eine Menge. `hinzufuegen()` prüft zuerst, ob Menge im Korb plus neue Menge den Bestand übersteigt. Dann liefert es `False` und ändert nichts. Sonst erhöht es eine vorhandene Position oder hängt eine neue an. Liegen 3 French Press im Korb und sind 3 auf Lager, wird `hinzufuegen(french_press, 1)` abgelehnt, weil 3 + 1 > 3. Die Gesamtsumme ist das Aufsummieren aus Kapitel 2. Lager und Warenkorb legst du im Menü einmal vor der `while`-Schleife an, sonst ist der Korb nach jeder Wahl leer.

### Stufe 2 und 3: Produktarten und Zusatzaufgaben

In Stufe 2 wird `Produkt` abstrakt mit der Methode `mwst_satz()`. `Lebensmittel` liefert 7 %, `Zubehoer` 19 %. `bruttopreis` steht nur einmal in `Produkt` und ruft `self.mwst_satz()` auf. Welcher Satz gilt, entscheidet das Objekt. Das ist Polymorphie aus Kapitel 7. Beim Leeren des Korbs gibt es eine Falle: `korb.positionen.clear()` leert auch die Bestellung, die auf dieselbe Liste zeigt. Richtig ist `korb.positionen = []`. Stufe 3 bietet Zusatzaufgaben wie Versandkosten oder Selbst-Sortieren.

### Ein Beispiel, das alles verbindet

```python
from dataclasses import dataclass


@dataclass
class Produkt:
    nummer: int
    name: str


def finden(produkte: list[Produkt], nummer: int) -> Produkt | None:
    for produkt in produkte:
        if produkt.nummer == nummer:
            return produkt
    return None


def suchen(produkte: list[Produkt], text: str) -> list[Produkt]:
    treffer: list[Produkt] = []
    for produkt in produkte:
        if text.lower() in produkt.name.lower():
            treffer.append(produkt)
    return treffer


sortiment = [Produkt(101, "Kaffee Hausmischung"), Produkt(203, "French Press"), Produkt(202, "Kaffeemühle")]
print(finden(sortiment, 203))
print(finden(sortiment, 999))
print(len(suchen(sortiment, "kaffee")), suchen(sortiment, "Zucker"))
```

```text
Produkt(nummer=203, name='French Press')
None
2 []
```

`finden(…, 203)` prüft 101, dann 203 und endet dort sofort. 202 wird nie angeschaut. Bei 999 sind alle drei Runden „nein“, erst danach kommt `None`. `suchen` findet „kaffee“ in zwei Namen, weil beide Seiten klein geschrieben werden. „Zucker“ steht nirgends, also kommt die leere Liste zurück.

### Das musst du können

- eine Methode `finden()` mit `return` in der Schleife und `return None` danach schreiben
- Treffer in einer neuen Liste sammeln und zurückgeben
- `hinzufuegen()` mit Bestandsprüfung in einer Tabelle nachverfolgen
- erklären, warum `clear()` auch die Bestellung leert und `= []` nicht
- `bruttopreis` mit abstraktem `mwst_satz()` als Polymorphie erklären
