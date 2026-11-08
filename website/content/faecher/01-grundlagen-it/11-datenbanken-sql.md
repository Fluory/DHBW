---
title: "Datenbanken und SQL"
order: 11
summary: "Warum Unternehmen Datenbanken statt einzelner Dateien nutzen, DBMS und Data Dictionary, ER-Modell und Kardinalitäten, Tabellen mit Primär- und Fremdschlüssel, SQL lesen und schreiben sowie OLTP und OLAP."
klausur: "relevant"
---

Stell dir vor, die Buchhaltung, der Vertrieb und der Versand führen jeweils eine eigene Excel-Liste mit Kundenadressen. Zieht eine Kundin um, muss man drei Listen ändern. Vergisst man eine, landet das Paket an der alten Adresse. Eine Datenbank löst dieses Problem: Die Adresse steht nur einmal drin, und alle greifen darauf zu.

Aufgabe 11 der Klausur (4–6 Punkte) verlangt „Eigenschaften, Analyse SQL, Synthese SQL“. Du musst Begriffe wie DBMS und Data Dictionary erklären, ein kleines ER-Modell zeichnen, eine SQL-Abfrage auf gegebenen Tabellen „von Hand ausführen“ und selbst einfache Abfragen schreiben.

## Vom Dateiansatz zur Datenbank

**Was ist das?** Bis in die 1970er-Jahre hatte jede Abteilung eigene Programme mit eigenen Dateien. Die Folie nennt vier Probleme dieses **Dateiansatzes**:

1. **Redundanz und Inkonsistenz:** Dieselben Daten liegen mehrfach vor und widersprechen sich irgendwann.
2. **Abhängigkeit zwischen Programm und Daten:** Ändert sich die Datenstruktur, muss das Programm geändert werden.
3. **Fehlender Datenaustausch, wenig Flexibilität:** Abläufe über Abteilungsgrenzen sind schwer.
4. **Mangelnde Datensicherheit:** keine saubere Verwaltung von Zugriffsrechten.

> [!IMPORTANT]
> **Das Wichtigste**
> Vier Probleme des Dateiansatzes: Redundanz/Inkonsistenz, Programm-Daten-Abhängigkeit, fehlender Austausch, mangelnde Sicherheit.

> [!WARNING]
> **Achtung**
> Redundanz allein ist nicht der Fehler. Das Problem ist, dass die Kopien auseinanderlaufen (Inkonsistenz).

## Datenbank, DBMS und Data Dictionary

**Was ist das?**

**Stell dir vor:** Eine Bibliothek. Die Bücher im Regal sind die **Datenbank**. Die Bibliothekarin, die Bücher einsortiert, ausgibt und aufpasst, wer was darf, ist das **DBMS**. Der Katalog, in dem steht, welche Regale es gibt und was in welches Regal gehört, ist das **Data Dictionary**.

- Eine **Datenbank (DB)** ist eine Sammlung logisch zusammenhängender Daten für einen bestimmten Zweck.
- Ein **Datenbankmanagementsystem (DBMS)** ist die Software, mit der man eine Datenbank erstellt und pflegt.
- **Datenbanksystem = DB + DBMS** (+ Anwendungen).

Das DBMS verwaltet zwei Arten von Daten: die **Nutzdaten** (Kunden, Lieferanten …) und die **Metadaten** im **Data Dictionary**, dem Datenbankkatalog. Dort steht, welche Tabellen es gibt, welche Spalten und Datentypen sie haben und welche Einschränkungen gelten. Benutzer greifen über SQL, Eingabemasken oder Schnittstellen wie ODBC zu. **Metadaten** heißt auf Deutsch „Daten über Daten“: nicht „Erika wohnt in Musterstadt“, sondern „die Spalte Wohnort ist Text, höchstens 40 Zeichen“.

**Vorteile eines DBMS:** Redundanzkontrolle (Daten nur einmal, verschiedene Sichten über Views), Zugriffsbeschränkungen, dauerhafte Speicherung, Mehrbenutzerzugriff, Integritätsbedingungen (zum Beispiel nur gültige Noten), Wiederherstellung nach Fehlern.

**Nachteile:** hohe Anfangskosten für Hardware, Software und Schulung, für einfache Fälle zu komplex, Mehraufwand für Sicherheit und Wiederherstellung. Dateien bleiben sinnvoll, wenn die Daten sehr einfach sind, harte Echtzeitanforderungen bestehen oder nur eine Person darauf zugreift.

> [!IMPORTANT]
> **Das Wichtigste**
> Data Dictionary = Katalog mit Metadaten (Tabellen, Spalten, Typen, Regeln). DBMS = Software. Datenbanksystem = DB + DBMS.

> [!WARNING]
> **Achtung**
> DBMS und Datenbank nicht vertauschen. Die Datenbank ist der Datenbestand, das DBMS ist das Programm, das ihn verwaltet.

## Das Entity-Relationship-Modell

**In einem Satz:** Ein ER-Modell ist eine Skizze, welche Dinge es gibt, was man über sie weiß und wie sie zusammenhängen.

**Stell dir vor:** Karteikarten an einer Pinnwand. Jede Kartensorte (Leser, Buch) ist ein **Entitätstyp**, jede einzelne Karte eine **Entität**, die Felder auf der Karte (Name, Titel) sind **Attribute**. Wollfäden zwischen den Karten („leiht aus“) sind die **Beziehungen**.

**Was ist das?** Das ER-Modell (Peter Chen, 1976; ER = Entity-Relationship, also „Ding-Beziehung“) beschreibt die Daten aus Sicht der Benutzer, unabhängig von der späteren Software. Man nennt das die **konzeptuelle** Ebene. Darunter liegen die **logische** Ebene (Tabellen) und die **physische** Ebene (Dateien, Indizes).

| Begriff | Bedeutung | Beispiel | Symbol (Chen) |
|---|---|---|---|
| Entität | ein Ding, über das Daten gespeichert werden | die Leserin Erika Mustermann | – |
| Entitätstyp | alle gleichartigen Entitäten | LESER | Rechteck |
| Attribut | eine Eigenschaft | Name, Vorname | Ellipse |
| Schlüsselattribut | eindeutig für jede Entität | Inventarnummer eines Buchs | Ellipse, unterstrichen |
| Beziehungstyp | Zusammenhang zwischen Entitätstypen, kann eigene Attribute haben | Leser leiht Buch aus | Raute |

**Kardinalitäten** sagen, mit wie vielen Entitäten des anderen Typs eine Entität verbunden sein kann:

| Kardinalität | Bedeutung | Beispiel |
|---|---|---|
| 1:1 | genau eine zu genau einer | Leser – Bibliothekskarte |
| 1:n | eine zu vielen, jede davon aber nur zu einer | Rechnung – Posten |
| m:n | auf beiden Seiten viele | Student – Vorlesung |

So findest du die Kardinalität:

1. Erste Frage: „Wie viele B hat ein A?“
2. Zweite Frage: „Wie viele A hat ein B?“
3. Beide Antworten zusammensetzen.

**Durchgerechnetes Beispiel:** Rechnung und Posten.

1. Wie viele Posten hat eine Rechnung? Viele, also n.
2. Zu wie vielen Rechnungen gehört ein Posten? Zu genau einer, also 1.
3. Ergebnis: Rechnung **1 : n** Posten.

```text
Beispiel Bibliothek (Chen-Notation, vereinfacht):

 (Inv.Nr.)  (Titel)                (Rückgabedatum)                (ID)  (Name)
      \      /                            |                         \    /
     [  Buch  ] ── n ──────────── < Ausleihe > ──────────── 1 ── [  Leser  ]

[ ] = Entitätstyp, < > = Beziehungstyp, ( ) = Attribut, Schlüssel unterstreichen
```

Das Rückgabedatum gehört weder zum Buch noch zum Leser, sondern zur einzelnen Ausleihe. Deshalb hängt es an der Raute.

> [!IMPORTANT]
> **Das Wichtigste**
> Rechteck = Entitätstyp, Raute = Beziehung, Ellipse = Attribut, unterstrichen = Schlüssel. Kardinalität immer aus beiden Richtungen fragen.

> [!WARNING]
> **Achtung**
> Nur aus einer Richtung zu fragen, ist der häufigste Fehler. Kommt auf beide Fragen „viele“ heraus, ist es m:n.

## Das relationale Modell

**In einem Satz:** Im relationalen Modell ist alles eine Tabelle, und Tabellen verweisen über Nummern aufeinander.

**Stell dir vor:** Deine Krankenkasse kennt dich über die Versichertennummer (**Primärschlüssel**: eindeutig, nur einmal vergeben). Auf jeder Arztrechnung steht diese Nummer, damit klar ist, zu wem sie gehört (**Fremdschlüssel**: ein Verweis auf den Primärschlüssel in einer anderen Tabelle). Die Rechnung muss deine Adresse nicht noch einmal enthalten.

**Was ist das?** Das relationale Modell (Edgar F. Codd, 1970) stellt die Datenbank als Sammlung von **Relationen**, also Tabellen, dar.

- Eine Zeile ist ein Datensatz und heißt **Tupel**.
- Eine Spalte ist ein **Attribut** mit einem Datentyp (Wertebereich).
- Jeder Wert ist atomar, also nicht weiter zerlegbar.
- Ein **Primärschlüssel** identifiziert jede Zeile eindeutig, zum Beispiel die Matrikelnummer.
- Ein **Fremdschlüssel** ist eine Spalte, die auf den Primärschlüssel einer anderen Tabelle verweist.

Faustregeln für die Übersetzung vom ER-Modell in Tabellen (Ergänzung nach den Folienbeispielen):

| ER-Element | wird zu … |
|---|---|
| Entitätstyp | eigene Tabelle, Schlüsselattribut wird Primärschlüssel |
| 1:n-Beziehung | Fremdschlüssel auf der n-Seite |
| 1:1-Beziehung | Fremdschlüssel auf einer der beiden Seiten |
| m:n-Beziehung | eigene Hilfstabelle mit beiden Fremdschlüsseln, plus Beziehungsattribute |

> [!IMPORTANT]
> **Das Wichtigste**
> Relation = Tabelle, Tupel = Zeile, Attribut = Spalte. m:n braucht immer eine eigene Hilfstabelle.

> [!WARNING]
> **Achtung**
> „Relation“ heißt hier Tabelle, nicht Beziehung. Und bei 1:n gehört der Fremdschlüssel auf die n-Seite, nie auf die 1-Seite.

## Die Beispieltabellen „Firma“

Für die SQL-Abfragen nutzt die Vorlesung die Beispieldaten „Firma“ (Auszug). Primärschlüssel sind SSN, ABTNUMMER und PNUMMER. ABT, MGRSSN und ABTNR sind Fremdschlüssel.

**ANGESTELLTER**

| VNAME | NNAME | SSN | GDATUM | GEHALT | ABT |
|---|---|---|---|---|---|
| John | Smith | 123456789 | 1965-01-09 | 30000 | 5 |
| Franklin | Wong | 333445555 | 1955-12-08 | 40000 | 5 |
| Alicia | Zelaya | 999887777 | 1968-07-19 | 25000 | 4 |
| Jennifer | Wallace | 987654321 | 1941-06-20 | 43000 | 4 |
| Ramesh | Narayan | 666884444 | 1962-09-15 | 38000 | 5 |
| Joyce | English | 453453453 | 1972-07-31 | 25000 | 5 |
| Ahmad | Jabbar | 987987987 | 1969-03-29 | 25000 | 4 |
| James | Borg | 888665555 | 1937-11-10 | 55000 | 1 |

**ABTEILUNG**

| ANAME | ABTNUMMER | MGRSSN |
|---|---|---|
| Research | 5 | 333445555 |
| Administration | 4 | 987654321 |
| Headquarters | 1 | 888665555 |

**PROJEKT**

| PNUMMER | PSTANDORT | ABTNR |
|---|---|---|
| 1 | Bellaire | 5 |
| 2 | Sugarland | 5 |
| 3 | Houston | 5 |
| 10 | Stafford | 4 |
| 20 | Houston | 1 |
| 30 | Stafford | 4 |

## SQL: Daten anlegen und ändern

**Was ist das?** SQL (Structured Query Language) ist seit 1987 ISO-Standard. SQL ist **deklarativ**: Du beschreibst, was du haben willst, nicht wie es gesucht wird. Wie im Restaurant: Du bestellst „eine Pizza Margherita“ und erklärst nicht, wie man Teig knetet.

```sql
CREATE TABLE Firma (
  Kurzname char(15) not null,   -- Text fester Länge, Pflichtfeld
  Name     char(40)
);

INSERT INTO Student (MatrNr, Vorname, Name, Semester)
VALUES (12345678, 'Peter', 'Hinz', 4);

UPDATE Student SET Exmatrikuliert = TRUE WHERE Semester > 99;

DELETE FROM Student WHERE MatrNr = 87654321;
```

> [!IMPORTANT]
> **Das Wichtigste**
> CREATE legt Tabellen an, INSERT fügt Zeilen ein, UPDATE ändert, DELETE löscht.

> [!WARNING]
> **Achtung**
> Ohne WHERE wirken UPDATE und DELETE auf **alle** Zeilen. Texte stehen in einfachen geraden Hochkommas '…'. Standard-SQL schreibt DELETE FROM, nicht nur DELETE.

## SQL-Abfragen analysieren

**In einem Satz:** Eine SQL-Abfrage ist dasselbe wie in Excel eine Tabelle filtern und nur bestimmte Spalten zeigen.

**Stell dir vor:** Du öffnest die Excel-Liste der Angestellten (FROM), setzt einen Filter „Abteilung = 5“ (WHERE) und blendest alle Spalten außer Name und Gehalt aus (SELECT). GROUP BY ist eine Pivot-Tabelle: „Zeig mir pro Abteilung die Summe“.

**Was ist das?** Jede Abfrage hat diese Grundform:

```sql
SELECT Spalten      -- welche Spalten
FROM   Tabellen     -- aus welchen Tabellen
WHERE  Bedingung;   -- welche Zeilen
```

Lies eine Abfrage in der Reihenfolge, in der sie ausgeführt wird:

1. **FROM:** Welche Tabellen? Bei mehreren: Welche Zeilen passen über die Join-Bedingung zusammen?
2. **WHERE:** Zeile für Zeile prüfen, welche durchkommen.
3. **GROUP BY:** Gruppen bilden.
4. **SELECT:** die gewünschten Spalten oder Aggregate ausgeben.

**Durchgerechnetes Beispiel 1:**

```sql
SELECT VNAME, NNAME, GEHALT
FROM ANGESTELLTER
WHERE ABT = 5 AND GEHALT > 30000;
```

1. FROM: Tabelle ANGESTELLTER.
2. WHERE: Abteilung 5 haben Smith, Wong, Narayan und English. Davon verdienen mehr als 30000 nur Wong (40000) und Narayan (38000). Smith hat genau 30000 und fällt bei „>“ heraus.
3. SELECT: Ergebnis **Franklin Wong 40000** und **Ramesh Narayan 38000**.

**Aggregatfunktionen** fassen viele Zeilen zu einem Wert zusammen: SUM, MAX, MIN, AVG, COUNT. Ohne GROUP BY gibt es genau eine Ergebniszeile. Mit GROUP BY gibt es eine Zeile pro Gruppe.

**Durchgerechnetes Beispiel 2:**

```sql
SELECT ABT, COUNT(*), AVG(GEHALT)
FROM ANGESTELLTER
GROUP BY ABT;
```

1. Gruppen bilden: Abteilung 1 (Borg), 4 (Zelaya, Wallace, Jabbar), 5 (Smith, Wong, Narayan, English).
2. Pro Gruppe zählen und mitteln:
   - Abteilung 1: 1 Person, 55000 / 1 = 55000.
   - Abteilung 4: 3 Personen, (25000 + 43000 + 25000) / 3 = 31000.
   - Abteilung 5: 4 Personen, (30000 + 40000 + 38000 + 25000) / 4 = 33250.

| ABT | COUNT(*) | AVG(GEHALT) |
|---|---|---|
| 1 | 1 | 55000 |
| 4 | 3 | 31000 |
| 5 | 4 | 33250 |

**Join:** Das ist der SVERWEIS aus Excel: In der einen Tabelle steht eine Nummer, und du schlägst in der anderen Tabelle nach, was zu dieser Nummer gehört. Stehen die gesuchten Spalten in verschiedenen Tabellen, schreibst du alle Tabellen ins FROM und im WHERE, welcher Fremdschlüssel zu welchem Primärschlüssel passt.

**Durchgerechnetes Beispiel 3 (Folie):** Für jedes Projekt in Stafford die Projektnummer, die Nummer der Abteilung und den Nachnamen ihres Leiters.

```sql
SELECT PNUMMER, ABTNR, NNAME
FROM PROJEKT, ABTEILUNG, ANGESTELLTER
WHERE ABTNR = ABTNUMMER       -- Projekt → Abteilung
  AND MGRSSN = SSN            -- Abteilung → Leiter
  AND PSTANDORT = 'Stafford';
```

1. In Stafford liegen die Projekte 10 und 30, beide mit ABTNR 4.
2. Abteilung 4 ist Administration mit MGRSSN 987654321.
3. Diese SSN gehört Jennifer Wallace.
4. Ergebnis: **10 | 4 | Wallace** und **30 | 4 | Wallace**.

> [!IMPORTANT]
> **Das Wichtigste**
> Reihenfolge beim Lesen: FROM → WHERE → GROUP BY → SELECT. Beim Join gehört „Fremdschlüssel = Primärschlüssel“ ins WHERE.

> [!WARNING]
> **Achtung**
> Typische Fehler: > und >= verwechseln (Smith mit genau 30000), AND und OR verwechseln, bei Aggregaten ohne GROUP BY mehrere Zeilen erwarten, beim Join die Join-Bedingung vergessen. Dann wird jede Zeile mit jeder kombiniert.

## SQL selbst schreiben

So gehst du bei jeder Frage vor:

1. **Was soll ausgegeben werden?** → SELECT. Bei „wie viele“, „Summe“, „Durchschnitt“, „höchstes“ eine Aggregatfunktion.
2. **Wo stehen die Spalten?** → FROM. Bei mehreren Tabellen die Join-Bedingung ins WHERE.
3. **Welche Zeilen?** → WHERE mit AND und OR, Texte in '…'.
4. **Steht „pro“ oder „je“ in der Frage?** → GROUP BY über diese Spalte.

**Durchgerechnetes Beispiel:** „Wie viele Projekte kontrolliert jede Abteilung?“

1. Ausgabe: Abteilungsnummer und Anzahl → SELECT ABTNR, COUNT(*).
2. Tabelle: PROJEKT.
3. Keine Zeilenbedingung.
4. „jede Abteilung“ → GROUP BY ABTNR.

```sql
SELECT ABTNR, COUNT(*) FROM PROJEKT GROUP BY ABTNR;
```

Ergebnis: 1 | 1, 4 | 2, 5 | 3.

Alle SQL-Ergebnisse in diesem Kapitel sind mit SQLite auf den Firmentabellen nachgeprüft.

## OLTP und OLAP

**Stell dir vor:** Die Kasse im Supermarkt bucht jeden Einkauf einzeln und sofort (OLTP). Die Filialleitung schaut sich am Monatsende an, welche Produkte sich wie verkauft haben (OLAP). Das eine ist Tagesgeschäft, das andere Auswertung.

**Was ist das?** Datenbanken dienen zwei verschiedenen Zwecken. Über **ETL** (Extract, Transform, Load) wandern die Daten vom einen ins andere System.

| | OLTP (Online Transaction Processing) | OLAP (Online Analytical Processing) |
|---|---|---|
| Zweck | Tagesgeschäft: Bestellung, Buchung | Analyse: Business Intelligence, Data Warehouse |
| Daten | aktuell | mit Historie |
| Zugriff | ganze Datensätze lesen und schreiben | fast nur lesen, Aggregate |
| Ablage | Row Store: zeilenweise | Column Store: spaltenweise, schnell bei wenigen Spalten |
| Beispiele | Oracle, MySQL | Amazon Redshift, SAP HANA |

**Beispiel:** Daten (Land, Produkt, Umsatz): (US, Alpha, 3000), (US, Beta, 1250), (JP, Alpha, 700), (UK, Alpha, 450). Für den Gesamtumsatz liest ein Column Store nur die Umsatzspalte: 3000 + 1250 + 700 + 450 = 5400.

> [!IMPORTANT]
> **Das Wichtigste**
> OLTP = Tagesgeschäft, Row Store. OLAP = Analyse, Column Store. ETL bringt die Daten von OLTP nach OLAP.

> [!WARNING]
> **Achtung**
> Ein Data Warehouse ist kein OLTP-System. Dort wird nicht gebucht, sondern ausgewertet.

## Übungen

> [!TIP]
> **Übung 1 · leicht**
> Was ist das Data Dictionary, und was unterscheidet DBMS und Datenbanksystem?
> *Quelle: Lernseite GIT, Aufgabe 11.2 (eigene Aufgabe nach VL04 F. 9–10)*

> [!TIP]
> **Übung 2 · mittel**
> 1:1, 1:n oder m:n? a) Person – Personalausweis b) Abteilung – Angestellter (jeder arbeitet in genau einer Abteilung) c) Artikel – Lieferant (ein Artikel kann von mehreren Lieferanten kommen, ein Lieferant liefert mehrere Artikel)
> *Quelle: Lernseite GIT, Aufgabe 11.4 (eigene Aufgabe)*

> [!TIP]
> **Übung 3 · mittel**
> Was liefern diese Abfragen auf den Firmentabellen? a) `SELECT NNAME FROM ANGESTELLTER WHERE ABT = 5 OR GEHALT > 40000;` b) `SELECT ABT, MAX(GEHALT) FROM ANGESTELLTER GROUP BY ABT;`
> *Quelle: Lernseite GIT, Aufgaben 11.5 und 11.6 (eigene Aufgaben)*

> [!TIP]
> **Übung 4 · Prüfungsniveau**
> Was liefert `SELECT PNUMMER, ANAME FROM PROJEKT, ABTEILUNG WHERE ABTNR = ABTNUMMER AND PSTANDORT = 'Houston';`?
> *Quelle: Lernseite GIT, Aufgabe 11.7 (eigene Aufgabe)*

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> Schreiben Sie eine Abfrage, die die Nachnamen aller Angestellten ausgibt, die in der Abteilung „Research“ arbeiten. Die Abteilungsnummer dürfen Sie nicht direkt hinschreiben.
> *Quelle: Lernseite GIT, Aufgabe 11.9 (eigene Aufgabe im Klausurstil)*

> [!TIP]
> **Übung 6 · Prüfungsniveau**
> Modellieren Sie: Ein Student hat eine Matrikelnummer und einen Namen, eine Vorlesung hat eine Nummer und einen Titel. Ein Student besucht beliebig viele Vorlesungen, eine Vorlesung wird von vielen Studierenden besucht. Welche Kardinalität ist das, und wie wird es als Tabellen umgesetzt?
> *Quelle: Lernseite GIT, Aufgabe 11.3 (eigene Aufgabe nach VL04 F. 32, 36)*

## Lösungen

### Übung 1

Das Data Dictionary ist der Datenbankkatalog mit den Metadaten: welche Tabellen, Spalten, Datentypen und Einschränkungen es gibt. Das DBMS ist die Software, die die Datenbank verwaltet. Das Datenbanksystem ist DB + DBMS (+ Anwendungen).

### Übung 2

- a) **1:1**
- b) **1:n** (Fremdschlüssel ABT beim Angestellten)
- c) **m:n** (eigene Hilfstabelle nötig)

### Übung 3

a) Bei OR reicht eine Bedingung.

1. Abteilung 5: Smith, Wong, Narayan, English.
2. Gehalt über 40000: Wallace (43000), Borg (55000). Wong hat genau 40000 und ist nicht „über“, kommt aber schon über Abteilung 5 hinein.
3. Ergebnis in Tabellenreihenfolge: **Smith, Wong, Wallace, Narayan, English, Borg**.

b) Erst Gruppen bilden wie im Beispiel 2: Abteilung 1 (55000), Abteilung 4 (25000, 43000, 25000), Abteilung 5 (30000, 40000, 38000, 25000). Dann pro Gruppe das höchste Gehalt:

| ABT | MAX(GEHALT) |
|---|---|
| 1 | 55000 |
| 4 | 43000 |
| 5 | 40000 |

### Übung 4

1. FROM: Tabellen PROJEKT und ABTEILUNG.
2. WHERE, Teil PSTANDORT = 'Houston': In PROJEKT stehen in Houston die Projekte 3 (ABTNR 5) und 20 (ABTNR 1).
3. WHERE, Teil ABTNR = ABTNUMMER (Join): In ABTEILUNG nachschlagen. ABTNUMMER 5 heißt Research, ABTNUMMER 1 heißt Headquarters.
4. SELECT: nur PNUMMER und ANAME ausgeben.
5. Ergebnis: **3 | Research** und **20 | Headquarters**.

### Übung 5

```sql
SELECT NNAME
FROM ANGESTELLTER, ABTEILUNG
WHERE ABT = ABTNUMMER
  AND ANAME = 'Research';
```

1. Ausgabe: NNAME.
2. Die Spalte ANAME steht in ABTEILUNG, NNAME in ANGESTELLTER. Also Join über ABT = ABTNUMMER.
3. Zeilenbedingung: ANAME = 'Research'. Research hat ABTNUMMER 5, also bleiben die Angestellten mit ABT = 5.

Ergebnis: **Smith, Wong, Narayan, English**.

### Übung 6

Die Kardinalität ist **m:n**: Ein Student besucht viele Vorlesungen, eine Vorlesung hat viele Studierende.

```text
(MatrNr) (Name)                         (VNr) (Titel)
     \    /                                 \   /
  [ STUDENT ] ── m ── < besucht > ── n ── [ VORLESUNG ]
```

Tabellen (Primärschlüssel zuerst):

- STUDENT(**MatrNr**, Name)
- VORLESUNG(**VNr**, Titel)
- BESUCHT(**MatrNr**, **VNr**): Hilfstabelle mit beiden Fremdschlüsseln, die zusammen den Primärschlüssel bilden.
