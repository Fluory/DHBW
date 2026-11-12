## Anomalien (durch Redundanz)

| Anomalie | Beispiel |
|---|---|
| Einfügeanomalie | neue Leuchte, nie bestellt: wohin eintragen? |
| Änderungsanomalie | Kunde zieht um, eine von mehreren Zeilen vergessen → Widerspruch |
| Löschanomalie | Auftrag gelöscht → einziger Eintrag der Schulz KG weg |

## Drei Entwurfsstufen

1. **Konzeptionell:** Was speichern? → ER-Modell, technikunabhängig
2. **Logisch:** Welche Tabellen? → Relationenmodell mit Primär-/Fremdschlüsseln
3. **Physisch:** Datenbanksprache → SQL, physische DB

## ER-Notation (Chen)

| Begriff | Bedeutung | Symbol |
|---|---|---|
| Entity | konkretes Objekt (eine Kundin) | – |
| Entity-Typ | alle gleichartigen Entities (Kunde) | Rechteck |
| Attribut | Eigenschaft | Ellipse |
| Schlüsselattribut | identifiziert eindeutig | Ellipse, unterstrichen |
| Relationship | Beziehung, kann Attribute haben | Raute |
| Kardinalität | 1, n, m | an der Linie |

Faustregel: Entity-Typen = Substantive, Relationships = Verben („Mitarbeiter betreut Kunde“).

## Kardinalitäten

| Typ | Beispiel |
|---|---|
| 1:1 | Mitarbeiter – PC |
| 1:n | Mitarbeiter betreut Kunden (Kunde hat genau einen Betreuer) |
| n:m | Kunde bucht Reisen, Reise von vielen Kunden gebucht |

**Vorgehen:** 1. „Wie viele B hat ein A?“ 2. „Wie viele A hat ein B?“ 3. n steht auf der Seite, von der es viele gibt.
Beispiel: Ein Mitarbeiter betreut mehrere Kunden (n beim Kunden), ein Kunde hat einen Mitarbeiter (1 beim Mitarbeiter) → **Mitarbeiter 1:n Kunde**.

Attribut, das zur **Kombination** gehört (Buchungsdatum, Menge, Sonderrabatt), kommt an die **Raute**.

## ER → Relationen

| ER | Relationenmodell |
|---|---|
| Entity-Typ | Relation (Tabelle) |
| Attribut | Spalte |
| Entity | Tupel (Zeile) |
| Schlüsselattribut | Primärschlüssel |

Schreibweise: Primärschlüssel **fett**, Fremdschlüssel ↑.

1. Jeder Entity-Typ → Relation, Schlüsselattribut → Primärschlüssel.
2. **1:n:** Fremdschlüssel auf die **n-Seite**: Kunde(**Kunden-Nr.**, Name, M-Nr.↑)
3. **1:1:** Fremdschlüssel in eine der beiden: PC(**PC-Nr.**, Modell, Mitarbeiter-Nr.↑)
4. **n:m:** **eigene Relation**, beide Primärschlüssel als Fremdschlüssel = zusammengesetzter Primärschlüssel, Raute-Attribute wandern mit: bucht(**Kunden-Nr.↑**, **Reise-Nr.↑**, Buchungsdatum)

Merksatz: Fremdschlüssel steht dort, wo er nur **einen Wert** hat (Werte müssen atomar sein).

## Mini-Beispiel Leuchtenhändler

- Kunde(**Kunden-Nr.**, K-Name, K-Adresse)
- Auftrag(**Auftrags-Nr.**, Datum, Kunden-Nr.↑) – 1:n
- Artikel(**Artikel-Nr.**, Bezeichnung, Preis)
- enthält(**Auftrags-Nr.↑**, **Artikel-Nr.↑**, Menge) – n:m
- Rechnung(**Rechnungs-Nr.**, Rechnungsdatum, Auftrags-Nr.↑) – 1:1

Kein eindeutiges Attribut (Name, Adresse)? → Schlüssel ergänzen (Kunden-Nr.).

## Datenbanksystem

- **DB:** gespeicherter Datenbestand · **DBMS:** verwaltende Software (PostgreSQL, MySQL, Oracle) · **DBS = DB + DBMS**
- DBMS-Funktionen: Speichern/Abfragen (SQL), Sicherheit und Integrität (referentielle Integrität), Mehrbenutzerbetrieb, Effizienz.

## Typische Fehler

- Kardinalität nur aus einer Richtung fragen („Auftrag enthält mehrere Artikel“ ist n:m, nicht 1:n).
- Bei 1:n Fremdschlüssel auf die 1-Seite setzen.
- n:m über einen einzelnen Fremdschlüssel abbilden.
- Beziehungsattribut (Menge, Rabatt) an einen Entity-Typ hängen.
- Konkretes Objekt („Meier GmbH“) statt Entity-Typ modellieren.
- Nicht eindeutiges Attribut (Bezeichnung, Name+Adresse) als Schlüssel nehmen.
- Relationenmodell der konzeptionellen Stufe zuordnen.
- DB und DBMS vertauschen.
