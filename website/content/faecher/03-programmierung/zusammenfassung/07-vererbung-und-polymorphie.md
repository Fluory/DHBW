Dieses Kapitel baut direkt auf Kapitel 6 auf. Das Konto von dort wird zur **Oberklasse**. Neue Klassen wie Sparkonto und Girokonto übernehmen alles davon und ergänzen nur, was bei ihnen anders ist. Damit kommen die übrigen drei Grundprinzipien der OOP dazu: Vererbung, Polymorphie und Abstraktion.

### Vererbung und super()

Bei der Vererbung übernimmt eine **Unterklasse** die Attribute und Methoden ihrer Oberklasse. Du schreibst sie in Klammern: `class Sparkonto(Konto):`. Vererbung passt nur, wenn man „ist ein“ sagen kann. Ein Sparkonto ist ein Konto. Für „hat ein“ nimmst du ein Attribut. Hat die Unterklasse ein eigenes `__init__`, ruft sie zuerst `super().__init__(…)` auf, ohne `self` in den Argumenten. Python ruft den Konstruktor der Oberklasse nicht von selbst auf. Fehlt der Aufruf, kommt der Fehler erst später als `AttributeError`. `isinstance(objekt, Klasse)` prüft, ob ein Objekt zu einer Klasse oder einer ihrer Unterklassen gehört.

### Überschreiben

Eine Unterklasse kann eine geerbte Methode ersetzen. Sie schreibt dazu eine Methode mit gleichem Namen und gleichen Parametern. Das heißt **Überschreiben**. Python sucht eine Methode zuerst in der Klasse des Objekts, dann in der Oberklasse, bis hinauf zu `object`. Die erste Fundstelle gewinnt. Mit `super().methode()` kannst du die alte Fassung mitbenutzen. `@override` aus `typing` lässt ty Tippfehler im Namen finden, beim Ausführen ändert es nichts. Verwechsle das nicht mit **Überladen**: gleiche Namen, verschiedene Parameter in einer Klasse. Das gibt es in Python nicht.

### Polymorphie

Polymorphie heißt: Derselbe Aufruf führt je nach Klasse des Objekts zu anderem Verhalten. In einer Schleife über verschiedene Zahlungsarten steht nur `zahlung.bezahlen(betrag)`. Welches `bezahlen` läuft, entscheidet das Objekt. Kommt eine neue Zahlungsart dazu, bleibt dieser Code gleich. Python prüft dabei nur, ob die Methode da ist. Das nennt man Duck Typing.

### Abstrakte Klassen und Fähigkeiten

Jede Klasse erbt von `object`. Eine **abstrakte Klasse** erbt von `ABC` und hat mindestens eine `@abstractmethod`. Von ihr kann man keine Objekte erzeugen, das gibt `TypeError`. Jede Unterklasse muss alle abstrakten Methoden überschreiben, sonst ist sie selbst abstrakt. Fähigkeiten wie `Druckbar` sind abstrakte Klassen mit nur abstrakten Methoden. Eine Klasse hat eine Kategorie als Oberklasse und beliebig viele Fähigkeiten dazu.

### Ein Beispiel, das alles verbindet

```python
from abc import ABC, abstractmethod
from typing import override


class Versand(ABC):
    def __init__(self, empfaenger: str) -> None:
        self.empfaenger = empfaenger

    @abstractmethod
    def kosten(self, kg: float) -> float: ...


class Standard(Versand):
    @override
    def kosten(self, kg: float) -> float:
        return 4.90


class Express(Versand):
    def __init__(self, empfaenger: str, zuschlag: float) -> None:
        super().__init__(empfaenger)
        self.zuschlag = zuschlag

    @override
    def kosten(self, kg: float) -> float:
        return 4.90 + kg * self.zuschlag


for sendung in [Standard("Ada"), Express("Ben", 2.00)]:
    print(sendung.empfaenger, f"{sendung.kosten(3.0):.2f}")
v = Versand("Cem")
```

```text
Ada 4.90
Ben 10.90
Traceback (most recent call last):
  File "beispiel.py", line 31, in <module>
    v = Versand("Cem")
TypeError: Can't instantiate abstract class Versand without an implementation for abstract method 'kosten'
```

`Express` legt über `super().__init__` den Empfänger an und ergänzt den Zuschlag. In der Schleife steht zweimal derselbe Aufruf `kosten(3.0)`. Runde 1 nutzt die Methode aus `Standard`, Runde 2 die aus `Express`: 4,90 + 3,0 · 2,00 = 10,90. Das ist Polymorphie. Die letzte Zeile scheitert, weil `Versand` abstrakt ist.

### Das musst du können

- mit „ist ein“ und „hat ein“ zwischen Vererbung und Attribut entscheiden
- eine Unterklasse mit `super().__init__(…)` und einer überschriebenen Methode schreiben
- Überladen und Überschreiben unterscheiden
- in einer Schleife sagen, welche Methode läuft, und die Ausgabe ausrechnen
- einen Lückentext mit `ABC`, `@abstractmethod`, `super()` und Polymorphie füllen
- sagen, wann ein `TypeError` bei einer abstrakten Klasse kommt
