---
title: "Datenmodellierung: ER-Modell und Relationen"
order: 4
summary: "Warum doppelte Daten zu Anomalien führen, wie man ein ER-Modell nach Chen zeichnet, Kardinalitäten liest und das Modell mit Primär- und Fremdschlüsseln in Relationen überführt."
klausur: "relevant"
---

Stell dir vor, alle Aufträge des Leuchtenhändlers stehen in einer einzigen langen Liste: Auftragsnummer, Datum, Kunde, Ort, Artikel, Menge. Die Meier GmbH aus Heilbronn steht dort zehnmal. Zieht sie um, musst du zehn Zeilen ändern. Vergisst du eine, hast du zwei verschiedene Adressen. Ein gutes Datenmodell verhindert das: Jede Information steht nur einmal da.

Nach dem Ablauf (EPK, Kapitel 3) geht es jetzt um die Daten. Laut Lernzielen sollst du ein ER-Modell selbst zeichnen und in Relationen überführen können. Das braucht Übung.

## Redundanz und Anomalien

**Was ist das?** Wenn Daten mehrfach gespeichert sind (Redundanz), entstehen Anomalien:

| Anomalie | Beispiel |
|---|---|
| Einfügeanomalie | Eine neue Leuchte ist im Sortiment, wurde aber noch nie bestellt. Wo trägt man sie ein? |
| Änderungsanomalie | Meier GmbH zieht um: mehrere Zeilen ändern. Eine vergessen → widersprüchliche Daten. |
| Löschanomalie | Ein Auftrag wird storniert und gelöscht. Damit verschwindet die Schulz KG ganz aus den Daten. |

Der Datenbankentwurf läuft in drei Stufen (nach Scheer): erst das Was, dann das Wie.

1. **Konzeptionell:** Welche Informationen speichern? → ER-Modell, unabhängig von der Technik.
2. **Logisch:** Welche Tabellen? → Relationenmodell mit Primär- und Fremdschlüsseln.
3. **Physisch:** in die Sprache des Datenbanksystems überführen → SQL, physische Datenbank.

> [!IMPORTANT]
> **Das Wichtigste**
> Drei Anomalien: Einfügen, Ändern, Löschen. Drei Entwurfsstufen: konzeptionell (ER), logisch (Relationen), physisch (Datenbank).

> [!WARNING]
> **Achtung**
> Das Relationenmodell gehört zur logischen Stufe, nicht zur konzeptionellen.

## Das ER-Modell nach Chen

**Was ist das?** Das Entity-Relationship-Modell (Chen, 1976) beschreibt, welche Dinge es gibt und wie sie zusammenhängen.

| Begriff | Bedeutung | Symbol |
|---|---|---|
| Entity | ein konkretes Objekt, zum Beispiel die Kundin Lisa Maier | – |
| Entity-Typ | alle Entities gleichen Typs, zum Beispiel Kunde | Rechteck |
| Attribut | Eigenschaft eines Entity-Typs | Ellipse |
| Schlüsselattribut | identifiziert jedes Entity eindeutig | Ellipse, unterstrichen |
| Relationship | Beziehung zwischen Entity-Typen, kann eigene Attribute haben | Raute |
| Kardinalität | wie viele Beziehungen auftreten (1, n, m) | an der Linie |

**Faustregel:** Entity-Typen sind Substantive, Relationships sind Verben. „Mitarbeiter betreut Kunde.“

## Kardinalitäten

**Was ist das?**

| Typ | Beispiel |
|---|---|
| 1:1 | Einem Mitarbeiter ist genau ein PC zugeordnet und umgekehrt. |
| 1:n | Ein Mitarbeiter betreut mehrere Kunden; ein Kunde wird von genau einem Mitarbeiter betreut. |
| n:m | Ein Kunde bucht mehrere Reisen; eine Reise wird von mehreren Kunden gebucht. |

So bestimmst du die Kardinalität:

1. „Wie viele B hat ein A?“
2. „Wie viele A hat ein B?“
3. Das n steht auf der Seite, von der es viele gibt.

Ein Attribut, das weder allein zum einen noch allein zum anderen Entity-Typ passt, gehört an die **Raute**. Beispiel: Das Buchungsdatum gehört zur konkreten Buchung, also zur Kombination Kunde–Reise.

**Beispiel Sonnenschein AG (vereinfacht):**

```text
[Mitarbeiter] 1 ── <betreut> ── n [Kunde] n ── <bucht> ── m [Reise]
                                                  |
                                           (Buchungsdatum)

[Reiseveranstalter] 1 ── <bietet an> ── n [Reise]

[ ] = Entity-Typ, < > = Relationship, ( ) = Attribut
```

> [!IMPORTANT]
> **Das Wichtigste**
> Kardinalität immer aus beiden Richtungen fragen. Attribute, die zur Kombination gehören, kommen an die Raute.

> [!WARNING]
> **Achtung**
> Nur in eine Richtung zu fragen, ist der häufigste Fehler. „Ein Auftrag enthält mehrere Artikel“ allein ergibt noch kein 1:n, denn ein Artikel steht auch in vielen Aufträgen: n:m.

## Vom ER-Modell zu Relationen

**Was ist das?** Das Relationenmodell (Codd, 1970) stellt Daten als Tabellen dar.

| ER-Modell | Relationenmodell |
|---|---|
| Entity-Typ | Relation (Tabelle) |
| Attribut | Spalte |
| Entity | Tupel (Zeile) |
| Schlüsselattribut | Primärschlüssel |

Schreibweise auf dieser Seite: Primärschlüssel **fett**, Fremdschlüssel mit ↑. Beispiel: Kunde(**Kunden-Nr.**, K-Name, K-Adresse).

So überführst du Beziehungen:

| Kardinalität | Regel | Beispiel |
|---|---|---|
| 1:n | Die Relation auf der **n-Seite** bekommt den Primärschlüssel der 1-Seite als Fremdschlüssel. | Kunde(**Kunden-Nr.**, Name, M-Nr.↑) |
| 1:1 | Fremdschlüssel in einer der beiden Relationen | PC(**PC-Nr.**, Modell, Mitarbeiter-Nr.↑) |
| n:m | **eigene Relation**; beide Primärschlüssel werden Fremdschlüssel und bilden zusammen den Primärschlüssel; Attribute der Beziehung wandern mit | bucht(**Kunden-Nr.↑**, **Reise-Nr.↑**, Buchungsdatum) |

Schritt für Schritt:

1. Jeder Entity-Typ wird eine Relation mit seinen Attributen. Das Schlüsselattribut wird Primärschlüssel.
2. Für jede 1:n-Beziehung: Fremdschlüssel auf die n-Seite.
3. Für jede 1:1-Beziehung: Fremdschlüssel auf eine Seite.
4. Für jede n:m-Beziehung: neue Relation mit beiden Schlüsseln und den Attributen der Raute.

**Merksatz:** Der Fremdschlüssel steht immer dort, wo er nur einen Wert hat. Bei n:m gibt es diese Seite nicht, deshalb entsteht eine eigene Relation.

> [!IMPORTANT]
> **Das Wichtigste**
> 1:n → Fremdschlüssel auf der n-Seite. n:m → eigene Relation mit zusammengesetztem Primärschlüssel.

> [!WARNING]
> **Achtung**
> „Eine n:m-Beziehung wird über einen Fremdschlüssel abgebildet“ ist falsch. Und bei 1:n gehört der Fremdschlüssel nie auf die 1-Seite, sonst müsste dort eine Liste stehen.

## Das Datenbanksystem

**Was ist das?** Die **Datenbank (DB)** ist der gespeicherte Datenbestand. Das **DBMS** ist die Software, die die DB verwaltet (zum Beispiel PostgreSQL, MySQL, Oracle). **Datenbanksystem (DBS) = DB + DBMS.**

Funktionen eines DBMS:

- **Speichern und Abfragen:** anlegen, ändern, löschen, lesen, zum Beispiel mit SQL.
- **Sicherheit und Integrität:** Zugriffsrechte, widerspruchsfreie Daten. Beispiel: kein Auftrag mit einer unbekannten Kundennummer (referentielle Integrität).
- **Mehrbenutzerbetrieb:** viele gleichzeitig, ohne sich zu stören.
- **Effizienz:** schneller Zugriff, kurze Antwortzeiten.

> [!IMPORTANT]
> **Das Wichtigste**
> DB = Daten, DBMS = Software, DBS = beides zusammen.

> [!WARNING]
> **Achtung**
> DB und DBMS werden in Multiple-Choice-Fragen gern vertauscht.

## Übungen

> [!TIP]
> **Übung 1 · leicht**
> Ein Auftrag wird storniert und gelöscht. Dabei verschwindet auch die einzige Information über den Kunden Schulz KG. Welche Anomalie liegt vor? A Einfügeanomalie · B Änderungsanomalie · C Löschanomalie · D Integritätsanomalie
> *Quelle: Lernseite WI, Aufgabe 4.2 (eigene Aufgabe nach T1B4 F. 7)*

> [!TIP]
> **Übung 2 · leicht**
> Stimmt das? „Eine n:m-Beziehung wird im Relationenmodell über einen Fremdschlüssel abgebildet.“ Begründe kurz.
> *Quelle: Folie T2B1 F. 2 („Stimmt das?“), sinngemäß*

> [!TIP]
> **Übung 3 · mittel**
> Überführe in Relationen: Lehrer (PersonalNr, Name, Teilzeit) lehrt Klasse (Klasse, Elternsprecher, Klassenlehrer) mit den Attributen Fach und Wochenstunden (n:m). Eine Klasse besteht aus mehreren Schülern (SchuelerNr, Name, Geburtsdatum), ein Schüler gehört zu genau einer Klasse (1:n).
> *Quelle: Folie T1B4 F. 24, sinngemäß*

> [!TIP]
> **Übung 4 · Prüfungsniveau**
> Leuchtenhändler: Ein Kunde (Kunden-Nr., Name, Adresse) erteilt Aufträge (Auftrags-Nr., Datum). Ein Auftrag enthält mehrere Artikel (Artikel-Nr., Bezeichnung, Preis) in einer bestimmten Menge; ein Artikel kommt in vielen Aufträgen vor. Zu jedem Auftrag gibt es genau eine Rechnung (Rechnungs-Nr., Rechnungsdatum). a) Erstelle das ER-Modell. b) Überführe es in Relationen.
> *Quelle: Folie T1B4 F. 15 und F. 19, sinngemäß (offizielle Lösung T1B4 mit Lösungen, F. 16 und 21)*

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> Fall Gerätehersteller (gekürzt). Jedes Bauteil hat eine eindeutige Bauteilnummer, eine Bezeichnung (kann mehrfach vorkommen), einen Einkaufspreis und einen Vorrat. Jedes Gerät hat eine eindeutige Bezeichnung, einen Lagerbestand und einen Verkaufspreis. Ein Gerät besteht aus mehreren Bauteilen; jedes Bauteil wird in genau einem Gerät verwendet. Zu jedem Kunden werden Name und Adresse gespeichert; beides ist nicht eindeutig. Ein Kunde bezieht mehrere Geräte, ein Gerät geht an mehrere Kunden. Für bestimmte Kombinationen aus Kunde und Gerät ist ein Sonderrabatt in Prozent vereinbart. a) Erstelle das ER-Modell und ergänze, wo nötig, einen Schlüssel. b) Überführe es in Relationen.
> *Quelle: Zusatzaufgabe Datenmodellierung „Gerätehersteller“ (Moodle), sinngemäß (offizielle Musterlösung)*

## Lösungen

### Übung 1

**C, Löschanomalie.** Beim Löschen eines Datensatzes gehen ungewollt andere Informationen verloren.

### Übung 2

**Falsch.** Eine n:m-Beziehung braucht eine eigene Relation mit beiden Primärschlüsseln als Fremdschlüssel. Diese bilden zusammen den Primärschlüssel. Ein einzelner Fremdschlüssel reicht nur bei 1:n und 1:1.

### Übung 3

1. Entity-Typen werden Relationen: Lehrer, Klasse, Schüler.
2. 1:n Klasse–Schüler: Fremdschlüssel Klasse auf die n-Seite (Schüler).
3. n:m Lehrer–Klasse: eigene Relation lehrt mit Fach und Wochenstunden.

- Lehrer(**PersonalNr**, Name, Teilzeit)
- Klasse(**Klasse**, Elternsprecher, Klassenlehrer)
- Schüler(**SchuelerNr**, Name, Geburtsdatum, Klasse↑)
- lehrt(**PersonalNr↑**, **Klasse↑**, Fach, Wochenstunden)

Hinweis: Unterrichtet ein Lehrer dieselbe Klasse in zwei Fächern, muss Fach mit in den Primärschlüssel.

### Übung 4

Offizielle Lösung (T1B4 mit Lösungen).

a) ER-Modell:

```text
[Kunde] 1 ── <erteilt> ── n [Auftrag] n ── <enthält> ── m [Artikel]
                               |              |
                               1           (Menge)
                               |
                         <gehört zu>
                               |
                               1
                          [Rechnung]

Kunde: (Kunden-Nr.) (K-Name) (K-Adresse)
Auftrag: (Auftrags-Nr.) (Datum)
Artikel: (Artikel-Nr.) (Bezeichnung) (Preis)
Rechnung: (Rechnungs-Nr.) (Rechnungsdatum)
```

b) Relationen:

- Kunde(**Kunden-Nr.**, K-Name, K-Adresse)
- Auftrag(**Auftrags-Nr.**, Datum, Kunden-Nr.↑): 1:n, Fremdschlüssel auf der n-Seite
- Artikel(**Artikel-Nr.**, Bezeichnung, Preis)
- enthält(**Auftrags-Nr.↑**, **Artikel-Nr.↑**, Menge): n:m, eigene Relation, die Menge wandert mit
- Rechnung(**Rechnungs-Nr.**, Rechnungsdatum, Auftrags-Nr.↑): 1:1, Fremdschlüssel in einer der beiden Relationen

Typische Fehler laut Folie: „Meier GmbH“ statt des Entity-Typs Kunde modellieren, die Menge an den falschen Ort hängen, nur in eine Richtung fragen.

### Übung 5

Offizielle Musterlösung (Zusatzaufgabe Datenmodellierung).

a) ER-Modell:

1. Kunde bekommt einen **ergänzten Schlüssel Kunden-Nr.**, weil Name und Adresse nicht eindeutig sind.
2. Gerät 1 — besteht aus — n Bauteil, weil jedes Bauteil zu genau einem Gerät gehört.
3. Kunde n — bezieht — m Gerät.
4. Der Sonderrabatt hängt an der Raute „bezieht“, weil er erst für ein Paar aus Kunde und Gerät feststeht.

```text
[Bauteil] n ── <besteht aus> ── 1 [Gerät] m ── <bezieht> ── n [Kunde]
                                                   |
                                            (Sonderrabatt)
```

b) Relationen:

- Kunde(**Kunden-Nr.**, K-Name, K-Adresse)
- Gerät(**G-Bezeichnung**, Lagerbestand, Verkaufspreis)
- Bauteil(**Bauteil-Nr.**, B-Bezeichnung, Einkaufspreis, Vorrat, G-Bezeichnung↑): 1:n, Fremdschlüssel auf der n-Seite
- bezieht(**Kunden-Nr.↑**, **G-Bezeichnung↑**, Sonderrabatt): n:m, eigene Relation

Typische Fehler laut Musterlösung: Kunde ohne Schlüssel oder mit (Name, Adresse) als Schlüssel, B-Bezeichnung als Schlüssel von Bauteil, Bauteil-Nr. als Fremdschlüssel in Gerät, Sonderrabatt als Attribut von Kunde oder Gerät.
