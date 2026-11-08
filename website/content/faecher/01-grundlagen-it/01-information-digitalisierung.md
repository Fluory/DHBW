---
title: "Information und Digitalisierung"
order: 1
summary: "Was Daten von Information unterscheidet, was „Digitalisierung“ aus drei Blickwinkeln bedeutet und in welchen Phasen sie in Unternehmen abläuft."
klausur: "relevant"
---

Auf deinem Handy steht die Zahl 7. Ist das viel oder wenig? Das kannst du erst sagen, wenn du weißt, was die 7 bedeutet: 7 Grad Celsius, 7 Grad Fahrenheit oder 7 neue Nachrichten. Genau um diesen Unterschied geht es in diesem Kapitel: Daten sind nur Zeichen, erst mit einem Zusammenhang werden sie zu einer Information.

Das zweite Thema ist der Begriff „Digitalisierung“. Er wird ständig benutzt, meint aber je nach Blickwinkel etwas anderes. In der Klausur ist dieser Block 3 Punkte wert. Gefragt wird mit den Operatoren „nennen“, „kurz erläutern“ und „erläutern“. Du musst hier nicht rechnen, sondern Begriffe sauber trennen und mit einem Beispiel erklären.

## Daten, Information, Wissen, Handlung

**Was ist das?** Die Vorlesung beschreibt eine Kette mit vier Stufen:

1. **Daten** sind Rohdaten: Zahlen, Texte oder Symbole ohne Bedeutung, zum Beispiel die Bitfolge 000000111, also die Zahl 7.
2. **Information** entsteht, wenn ein Kontext dazukommt: „Es sind 7 °C.“
3. **Wissen** entsteht, wenn du Informationen verknüpfst: „7 °C ist in Deutschland kalt.“
4. **Handlung** folgt aus dem Wissen: „Ich ziehe eine Jacke an.“

Dieselben Daten können je nach Kontext ganz verschiedene Informationen sein:

| Daten | Kontext | Information | Wissen | Handlung |
|---|---|---|---|---|
| 7 | Temperatur in °C in Deutschland | Es ist 7 Grad. | Es ist kalt. | Jacke anziehen |
| 7 | Temperatur in °C in Kanada | Es ist 7 Grad. | Es ist warm. | kurze Hose |
| 7 | Temperatur in °F in den USA | Es ist 7 Grad. | sehr kalt (etwa −14 °C) | Wintersachen |
| 42 | Kontostand in Euro | Ich habe 42 €. | Kinokarte kostet 14 €. | Ich gehe ins Kino. |

Die Informatik schaut auf drei Aspekte von Information. Am Beispiel einer roten Ampel:

| Aspekt | Fachwort heißt auf Deutsch | Ampel-Beispiel |
|---|---|---|
| **syntaktisch** | Form: Wie sieht das Zeichen aus, welcher Datentyp? | Das obere Licht leuchtet rot. |
| **semantisch** | Bedeutung: Was heißt das Zeichen? | „Halt.“ |
| **pragmatisch** | Nutzen: Was mache ich jetzt damit? | Ich bremse. |
 Jede Verarbeitung folgt dem **EVA-Prinzip**: Eingabe → Verarbeitung → Ausgabe.

Rechner stellen alles binär dar: 0 heißt keine Spannung, 1 heißt Spannung. Eine Stelle heißt **Bit**, 8 Bit sind ein **Byte**.

> [!IMPORTANT]
> **Das Wichtigste**
> Daten + Kontext = Information. Information verknüpft ergibt Wissen, und Wissen führt zu einer Handlung.

> [!WARNING]
> **Achtung**
> Daten und Information sind nicht dasselbe. Wenn du den Unterschied erklären sollst, nimm das 7-Grad-Beispiel: gleiche Daten, verschiedene Informationen.

## Informationstheorie nach Shannon

**Was ist das?** Claude E. Shannon hat 1948 untersucht, wie man Information sicher über einen Kanal schickt. Sein Modell ist eine Kette: Quelle → Sender → Kanal → Empfänger → Ziel. Auf den Kanal wirken Störungen.

Wichtig ist der Begriff **Redundanz**: Das ist der Teil einer Nachricht, der eigentlich überflüssig ist. Am Telefon buchstabierst du „M wie Martha“: Das „wie Martha“ ist überflüssig, hilft aber, wenn die Leitung rauscht. Man kann mit Redundanz in zwei Richtungen arbeiten:

| Ziel | Redundanz … | Beispiel |
|---|---|---|
| Kompression | entfernen | RLE: AAAABBBCC wird zu 4A3B2C |
| Fehlererkennung | hinzufügen | Paritätsbit, Hamming-Code |

Bei RLE (Lauflängenkodierung) schreibst du für jede Folge gleicher Zeichen: Anzahl + Zeichen.

> [!IMPORTANT]
> **Das Wichtigste**
> Kompression entfernt Redundanz und spart Bits. Fehlererkennung fügt Redundanz hinzu und braucht mehr Bits.

> [!WARNING]
> **Achtung**
> Nicht verwechseln: Ein Paritätsbit macht die Nachricht länger, nicht kürzer.

## Digitalisierung: drei Sichtweisen

**Was ist das?** „Digitalisierung“ hat drei Bedeutungen. Diese Unterscheidung ist eine typische „Nennen Sie“- oder „Erläutern Sie“-Frage.

| Sichtweise | Kernaussage | Stichwort |
|---|---|---|
| betriebswirtschaftlich | Daten und Algorithmen werden für neue oder bessere Prozesse, Produkte und Geschäftsmodelle genutzt. Analoge Arbeit wird ganz oder teilweise durch ein digitales Modell ersetzt. | Querschnittstechnologie in fast allen Branchen |
| gesellschaftlich | Lebens- und Arbeitswelten werden auf eine digitale Ebene übertragen, oft verbunden mit großen wirtschaftlichen Umbrüchen. | „Disruption“ (ein Markt wird umgekrempelt, wie Streaming die Videothek verdrängt hat) |
| technisch | Begriff aus der Elektrotechnik: analoge Signale werden in zeit- und wertediskrete, meist binäre Signale umgewandelt. So kann man sie elektronisch übertragen, speichern und verarbeiten. | zeit- und wertediskret |

**Stell dir vor:** Ein Thermometer mit Quecksilbersäule zeigt jeden beliebigen Wert, ständig (analog). Eine Wetterstation schreibt dagegen jede volle Stunde einen Wert auf, gerundet auf ganze Grad (digital). „Diskret“ heißt also „in einzelnen, abzählbaren Schritten“, wie Treppenstufen statt einer Rampe.

**Beispiel zu „zeit- und wertediskret“:** Ein Mikrofon liefert eine Spannung, die sich ständig ändert. Beim Digitalisieren misst du nur in festen Abständen, zum Beispiel 44 100-mal pro Sekunde (zeitdiskret). Jeden Messwert rundest du auf eine von endlich vielen Stufen, zum Beispiel 65 536 Stufen bei 16 Bit (wertediskret). Danach ist jeder Messwert eine Zahl, die der Rechner binär speichern kann.

> [!IMPORTANT]
> **Das Wichtigste**
> Drei Sichtweisen: betriebswirtschaftlich, gesellschaftlich, technisch. Technisch heißt: analog → zeit- und wertediskret, meist binär.

> [!WARNING]
> **Achtung**
> Bei der technischen Sicht nicht „kontinuierlich“ schreiben. Digital heißt gerade: diskret, also in festen Schritten.

## Phasen der Digitalisierung im Unternehmen

**Was ist das?** Aus betrieblicher Sicht läuft die Digitalisierung in Phasen ab (nach Österle, Fleisch und Alt 2000). Von Phase zu Phase wird der digitale Bereich größer: erst ein Arbeitsschritt, dann eine Abteilung, dann die ganze Firma, dann ein Partner, dann alle. „1:1“ heißt: eine Firma ist mit genau einem Partner verbunden. „m:n“ heißt: viele Firmen sind mit vielen Partnern verbunden, wie auf einem Marktplatz.

| Phase | Was wird digitalisiert? | Beispiel |
|---|---|---|
| 1 | einzelne Funktionen | Rechnungen automatisch erstellen |
| 2 | ganze Funktionsbereiche | das Rechnungswesen |
| 3 | integrierte Prozesse über Abteilungsgrenzen | die Auftragsbearbeitung |
| 4 | 1:1-Verbindung mit einem Partner | lieferantengeführte Bestände |
| heute | m:n-Vernetzung mit allen Partnern bis zum Endkunden | B2B- und B2C-Marktplätze, Produktion „on demand“ |

> [!IMPORTANT]
> **Das Wichtigste**
> Die Reichweite wächst: Funktion → Bereich → Prozess → ein Partner (1:1) → alle Partner (m:n).

> [!WARNING]
> **Achtung**
> Die Phasen der Digitalisierung (wirtschaftliche Sicht) sind nicht die fünf Epochen der IT-Infrastruktur (technische Sicht, Großrechner bis Cloud, Kapitel 2). Die Folien warnen ausdrücklich vor dieser Verwechslung.

## Rolle und Nutzen der IT im Unternehmen

**Was ist das?** Vor dem Internet war IT eine „EDV-Abteilung“ für Routinearbeit. Sie galt nicht als strategisch. Mit dem Internet wurde IT Teil des Kerngeschäfts: Vertrieb wurde digital (Shopsysteme, CRM), und manche Produkte sind ganz digital (Musikstreaming).

Den Nutzen beschreibt die Vorlesung in drei aufeinander aufbauenden Stufen:

1. **Automatisierung:** Abläufe, die Menschen erledigt haben, macht jetzt die IT. Sie laufen schneller und einheitlich.
2. **Informatisierung:** Durch die Automatisierung entstehen Daten. Diese wertet man aus, um bessere Entscheidungen zu treffen (zum Beispiel mit einem Data Warehouse).
3. **Transformation:** Man baut nicht nur alte Abläufe nach, sondern gestaltet völlig neue Geschäftsprozesse.

**Beispiel Onlineshop:** Er schreibt Rechnungen automatisch (Automatisierung). Er wertet Verkaufsdaten aus, um das Sortiment zu planen (Informatisierung). Er bietet Produkte an, die erst nach der Bestellung gefertigt werden (Transformation).

Die Folien nennen außerdem ökonomische Folgen der Digitalisierung: Eine digitale Kopie kostet fast nichts. Plattformen vermitteln, ohne eigene Güter zu besitzen (Uber, Airbnb). Im Onlinehandel lohnt sich ein riesiges Sortiment (Long Tail, „langer Schwanz“: viele Nischenartikel, die einzeln selten, zusammen aber oft verkauft werden). Freemium-Modelle bieten eine Gratisversion an und verkaufen ein Abo. Die Eintrittsbarrieren sinken, weil ein Onlineshop billiger ist als eine Filiale.

> [!IMPORTANT]
> **Das Wichtigste**
> Automatisierung → Informatisierung → Transformation. Jede Stufe baut auf der vorherigen auf.

> [!WARNING]
> **Achtung**
> Daten auswerten ist Informatisierung, nicht Automatisierung. Transformation heißt: ein neues Geschäftsmodell, nicht nur ein schnellerer alter Ablauf.

## Exkurs: Zeichen kodieren mit ASCII und UTF-8

> [!CAUTION]
> **Nicht klausurrelevant**
> Kodierungen stehen in keiner Rückschau und nicht in der Themenliste der Klausurvorbereitung. Sie sind ein Exkurs. Sie sind aber gutes Training für Binär und Hex aus Kapitel 4.

**Was ist das?** Ein Rechner kann nur Bits speichern. Für Text braucht er eine Tabelle, die jedem Zeichen ein Bitmuster zuordnet.

**ASCII** ist eine 7-Bit-Kodierung. Mit 7 Bit gibt es 2⁷ = 128 Zeichen. Großbuchstaben beginnen bei 65 (hex 41), Kleinbuchstaben bei 97 (hex 61), Ziffern 0–9 bei 48–57. Das 8. Bit war früher ein **Paritätsbit**: Es wird so gesetzt, dass die Anzahl der Einsen insgesamt gerade ist.

So bestimmst du das Paritätsbit:

1. Zeichen in der Tabelle nachschlagen: A = 65.
2. In 7 Bit umrechnen: 65 = 64 + 1 = 100 0001.
3. Einsen zählen: zwei Einsen, also gerade.
4. Paritätsbit wählen: bei gerader Anzahl 0, bei ungerader 1. Für A ist es 0.

**UTF-8** kodiert Unicode, also Zeichen aus allen Schriften. Die ersten 128 Zeichen sind gleich wie ASCII und brauchen 1 Byte. Andere Zeichen brauchen 2 bis 4 Byte. Ein ä ist C3 A4, das €-Zeichen ist E2 82 AC. Deshalb hat „Grüße“ 5 Zeichen, aber 7 Byte.

## Übungen

> [!TIP]
> **Übung 1 · leicht**
> Nennen Sie die drei Sichtweisen auf den Begriff Digitalisierung.
> *Quelle: Lernseite GIT, Aufgabe 1.2 (eigene Aufgabe nach VL01 F. 15–16)*

> [!TIP]
> **Übung 2 · leicht**
> Komprimieren Sie WWWWWBBBWW mit RLE. Wird dabei Redundanz hinzugefügt oder entfernt?
> *Quelle: Lernseite GIT, Aufgabe 1.6 (eigene Aufgabe)*

> [!TIP]
> **Übung 3 · mittel**
> Automatisierung, Informatisierung oder Transformation? a) Ein Data Warehouse wertet Verkaufsdaten für die Planung aus. b) Rechnungen werden automatisch erzeugt. c) Ein Händler baut ein Geschäftsmodell auf, das ohne Internet nicht möglich wäre.
> *Quelle: Lernseite GIT, Aufgabe 1.5 (eigene Aufgabe nach VL01 F. 20)*

> [!TIP]
> **Übung 4 · mittel**
> Bringen Sie in die richtige Reihenfolge: Auftragsbearbeitung als integrierter Prozess · B2B-Marktplätze · automatisierte Rechnungserstellung · lieferantengeführte Bestände · digitalisiertes Rechnungswesen.
> *Quelle: Lernseite GIT, Aufgabe 1.4 (eigene Aufgabe nach VL01 F. 17)*

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> Erläutern Sie kurz den Unterschied zwischen Daten und Information an einem Beispiel.
> *Quelle: Lernseite GIT, Aufgabe 1.1 (eigene Aufgabe im Klausurstil)*

> [!TIP]
> **Übung 6 · Prüfungsniveau**
> Erläutern Sie die technische Sichtweise der Digitalisierung.
> *Quelle: Lernseite GIT, Aufgabe 1.3 (eigene Aufgabe im Klausurstil)*

## Lösungen

### Übung 1

- betriebswirtschaftlich
- gesellschaftlich
- technisch

„Nennen“ heißt: Stichpunkte reichen, keine Erklärung.

### Übung 2

1. Gleiche Zeichen zusammenfassen: WWWWW | BBB | WW.
2. Jede Gruppe als Anzahl + Zeichen schreiben: 5W, 3B, 2W.
3. Ergebnis: **5W3B2W**.

Redundanz wird **entfernt**, denn das ist Kompression. Fehlererkennung würde Redundanz hinzufügen.

### Übung 3

- a) **Informatisierung:** Vorhandene Daten werden ausgewertet.
- b) **Automatisierung:** Ein bisheriger Ablauf läuft jetzt in der IT.
- c) **Transformation:** Es entsteht ein ganz neues Geschäftsmodell.

### Übung 4

1. automatisierte Rechnungserstellung (einzelne Funktion)
2. digitalisiertes Rechnungswesen (Funktionsbereich)
3. Auftragsbearbeitung (integrierter Prozess)
4. lieferantengeführte Bestände (1:1 mit einem Partner)
5. heute: B2B-Marktplätze (m:n mit allen Partnern)

### Übung 5

Daten sind unverarbeitete Zeichen ohne Bedeutung, zum Beispiel die Bitfolge 000000111, also 7. Erst durch einen Kontext werden sie zur Information: „Es sind 7 °C in Deutschland“ bedeutet etwas anderes als „Es sind 7 °F in den USA“.

### Übung 6

Musterantwort in mehreren Sätzen: Digitalisierung ist im Kern ein Begriff aus der Elektrotechnik. Gemeint ist die Umwandlung analoger Signale in zeit- und wertediskrete, meist binäre Signale. Zeitdiskret heißt, dass man nur in festen Abständen misst. Wertediskret heißt, dass jeder Messwert auf eine von endlich vielen Stufen gerundet wird. Das geschieht, damit man die Werte elektronisch übertragen, speichern und verarbeiten kann. Texte, Bilder, Töne und Filme werden so als Folgen von 0 und 1 dargestellt.
