"""Projekt Kaffeeshop, Stufe 1: Kunde, Position und Warenkorb."""

from dataclasses import dataclass
from decimal import Decimal

from produkt import Produkt


@dataclass
class Kunde:
    name: str
    email: str


@dataclass
class Position:
    produkt: Produkt  # Position HAT ein Produkt
    menge: int

    def summe(self) -> Decimal:
        return self.produkt.bruttopreis * self.menge


class Warenkorb:
    def __init__(self, kunde: Kunde) -> None:
        self.kunde = kunde  # Warenkorb HAT einen Kunden
        self.positionen: list[Position] = []  # ... und viele Positionen

    def position_finden(self, nummer: int) -> Position | None:
        for position in self.positionen:
            if position.produkt.nummer == nummer:
                return position
        return None

    def menge_im_korb(self, nummer: int) -> int:
        position = self.position_finden(nummer)
        if position is None:
            return 0
        return position.menge

    def hinzufuegen(self, produkt: Produkt, menge: int) -> bool:
        """False, wenn die Menge (mit dem, was schon im Korb liegt) nicht auf Lager ist."""
        if menge <= 0:
            return False
        if self.menge_im_korb(produkt.nummer) + menge > produkt.bestand:
            return False
        position = self.position_finden(produkt.nummer)
        if position is None:
            self.positionen.append(Position(produkt, menge))  # neue Position
        else:
            position.menge += menge  # schon im Korb: nur Menge erhöhen
        return True

    def entfernen(self, nummer: int) -> bool:
        position = self.position_finden(nummer)
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
        if self.ist_leer():
            print("Der Warenkorb ist leer.")
            return
        for position in self.positionen:
            print(f"{position.menge} x {position.produkt.name}: {position.summe()} Euro")
        print(f"Summe: {self.gesamtsumme()} Euro")
