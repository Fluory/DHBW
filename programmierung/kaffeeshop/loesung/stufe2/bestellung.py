"""Projekt Kaffeeshop, Stufe 2: eine abgeschlossene Bestellung."""

from dataclasses import dataclass
from decimal import Decimal

from warenkorb import Kunde, Position
from zahlungsarten import Zahlungsart


@dataclass
class Bestellung:
    nummer: int
    kunde: Kunde
    positionen: list[Position]
    zahlungsart: Zahlungsart

    def summe(self) -> Decimal:
        summe = Decimal(0)
        for position in self.positionen:
            summe += position.summe()
        return summe

    def ausgeben(self) -> None:
        print(f"Bestellung {self.nummer} von {self.kunde.name}")
        for position in self.positionen:
            prozent = int(position.produkt.mwst_satz() * 100)
            print(
                f"   {position.menge} x {position.produkt.name} "
                f"({prozent} % MwSt): {position.summe()} Euro"
            )
        print(f"   Summe: {self.summe()} Euro")
        print(f"   {self.zahlungsart.bezahlen(self.summe())}")
