"""Projekt Kaffeeshop, Stufe 2: Zahlungsarten (wie in VL06)."""

from abc import ABC, abstractmethod
from decimal import Decimal
from typing import override


class Zahlungsart(ABC):
    @abstractmethod
    def bezahlen(self, betrag: Decimal) -> str:
        """Jede Zahlungsart bezahlt auf ihre Weise und liefert einen Text."""


class Kreditkarte(Zahlungsart):
    def __init__(self, nummer: str) -> None:
        self.nummer = nummer

    @override
    def bezahlen(self, betrag: Decimal) -> str:
        return f"{betrag} Euro von Karte ...{self.nummer[-4:]} abgebucht"


class Lastschrift(Zahlungsart):
    def __init__(self, iban: str) -> None:
        self.iban = iban

    @override
    def bezahlen(self, betrag: Decimal) -> str:
        return f"{betrag} Euro per Lastschrift vom Konto ...{self.iban[-4:]}"


class Rechnungskauf(Zahlungsart):
    @override
    def bezahlen(self, betrag: Decimal) -> str:
        return f"Rechnung über {betrag} Euro, zahlbar in 14 Tagen"
