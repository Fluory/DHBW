"""Projekt Kaffeeshop, Stufe 1: das Lager."""

from produkt import Produkt


class Lager:
    def __init__(self, produkte: list[Produkt]) -> None:
        self.produkte = produkte  # Lager HAT viele Produkte

    def anzeigen(self) -> None:
        for produkt in self.produkte:
            print(produkt)

    def finden(self, nummer: int) -> Produkt | None:
        """Das Produkt mit dieser Artikelnummer, sonst None."""
        for produkt in self.produkte:
            if produkt.nummer == nummer:
                return produkt  # gefunden: sofort raus
        return None  # Schleife ganz durch, nichts gefunden

    def suchen(self, text: str) -> list[Produkt]:
        """Alle Produkte, deren Name den Text enthält (groß/klein egal)."""
        treffer: list[Produkt] = []
        for produkt in self.produkte:
            if text.lower() in produkt.name.lower():
                treffer.append(produkt)
        return treffer
