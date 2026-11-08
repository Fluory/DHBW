---
title: "Materialwirtschaft"
order: 8
summary: "Skript-Kapitel 9: Beschaffungsprinzipien, ABC-Analyse, Bedarfs-, Bestands- und Beschaffungsplanung mit Meldebestand und optimaler Bestellmenge, Sourcing-Varianten und Lagerkennzahlen."
klausur: "relevant"
---

Um 4 Uhr morgens braucht die Bäckerei genug Mehl in der Backstube. Fehlt das Mehl, gibt es keine Brötchen. Liegt zu viel Mehl im Lager, ist Geld gebunden und das Mehl wird alt. Wann bestellt man nach? Wie viel auf einmal? Bei welchem Lieferanten? Darum geht es in der Materialwirtschaft.

Hier wird viel gerechnet: ABC-Analyse, Meldebestand, optimale Bestellmenge und Lagerkennzahlen. In der Musterklausur 2025 gab es dafür 16 von 72 Punkten.

> [!WARNING]
> **Achtung: Vorlesung folgt noch**
>
> Dieses Kapitel ist Kapitel 9 im Skript. Es wurde bis 06.11.2026 noch nicht in der Vorlesung behandelt. Der Inhalt stammt aus dem Skript. Offizielle Lösungen gibt es nur für die Musterklausur-Aufgaben 6 und 7. Die Lösungen zu den Skript-Übungen sind eigene Lösungen. Wenn die Vorlesung etwas anders setzt, gilt die Vorlesung.

## Materialwirtschaft: Begriff und Ziele

**Was ist das?** Materialwirtschaft umfasst alles, damit das Material wirtschaftlich bereitsteht: Beschaffung, Lagerung, Verteilung und Entsorgung. Das Ziel heißt materialwirtschaftliches Optimum: das richtige Material in der richtigen Menge und Qualität, zur richtigen Zeit am richtigen Ort, zu möglichst geringen Kosten.

> [!NOTE]
> **Beispiel: Die Bäckerei**
>
> Zu wenig Mehl heißt: keine Brötchen, Kunden gehen zur Konkurrenz (Fehlmengenkosten). Zu viel Mehl heißt: Lagerplatz und Geld sind gebunden, das Mehl verdirbt (Lagerkosten).

> [!IMPORTANT]
> **Das Wichtigste**
>
> - Formalziel: langfristige Gewinnoptimierung. Sachziel: das materialwirtschaftliche Optimum.
> - Unterziele: Beschaffungs-, Transport-, Lager- und Fehlmengenkosten möglichst gering halten.

> [!WARNING]
> **Achtung**
>
> Die Ziele stehen im Konflikt: niedrige Kosten, hohe Qualität und hohe Lieferbereitschaft gehen nicht alle gleichzeitig maximal.

## Beschaffungsprinzipien mit Vor- und Nachteilen

**Was ist das?** Wann und wie viel kauft ein Betrieb ein? Es gibt drei Grundprinzipien.

| | Einzelbeschaffung im Bedarfsfall | Fertigungssynchron (Just-in-time) | Vorratsbeschaffung |
|---|---|---|---|
| Idee | erst kaufen, wenn ein konkreter Bedarf da ist | Lieferung direkt in die Produktion, kaum Lager | ein Lager trennt Beschaffung und Produktion |
| Vorteile | niedrige Lager- und Transportkosten | geringe Lagerkosten | Produktion entlastet, sicher |
| Nachteile | hohe Beschaffungskosten, lange Wartezeit | enge Bindung an den Lieferanten, hohe Preise, störanfällig, Umweltbelastung | hohe Lager- und Kapitalbindungskosten |
| passt für | teure, individuelle Teile, Kunden warten | teure Teile, gut planbare Massenproduktion | unregelmäßiger Bedarf, kurze Lieferzeiten |

> [!NOTE]
> **Beispiel: Die Bäckerei**
>
> Für eine Hochzeitstorte mit Sonderwunsch kauft die Bäckerei die Zutaten erst nach der Bestellung (Einzelbeschaffung). Die Brötchentüten kommen jeden Morgen genau passend (Just-in-time). Mehl liegt immer für zwei Wochen im Lager (Vorratsbeschaffung).

> [!IMPORTANT]
> **Das Wichtigste**
>
> Drei Prinzipien: Einzelbeschaffung, Just-in-time, Vorrat. Zu jedem einen Vorteil und einen Nachteil nennen können.

> [!WARNING]
> **Achtung**
>
> Nachteile von Just-in-time laut Musterlösung (A7b): enge Lieferantenbindung, hohe Preise, Umweltbelastung. Dazu passt: Stillstand bei Lieferstörungen, etwa durch Stau oder Streik.

## ABC-Analyse

**In einem Satz:** Die ABC-Analyse sortiert das Material nach seinem Wert, damit du weißt, wo sich Aufpassen lohnt.

**Stell dir vor:** Dein Wocheneinkauf. Auf dem Kassenzettel stehen 25 Posten. Käse, Fleisch und Kaffee machen aber schon den größten Teil der Summe aus. Bei diesen wenigen teuren Dingen lohnt sich der Preisvergleich. Bei Salz und Zahnstochern lohnt er sich nicht, die kaufst du einfach mit. Genauso: Wenige teure Dinge (A) machen den Großteil des Werts aus, viele billige Dinge (C) fast nichts.

**Mit Zahlen: der Monatseinkauf der Bäckerei (eigene Zahlen)**

| Artikel | Wert im Monat | Anteil | kumuliert | Klasse |
|---|---|---|---|---|
| Mehl | 900 € | 45,0 % | 45,0 % | A |
| Butter | 500 € | 25,0 % | 70,0 % | A |
| Schokolade | 200 € | 10,0 % | 80,0 % | A |
| Eier | 150 € | 7,5 % | 87,5 % | B |
| Zucker | 100 € | 5,0 % | 92,5 % | B |
| Hefe | 60 € | 3,0 % | 95,5 % | C |
| Sesam | 40 € | 2,0 % | 97,5 % | C |
| Salz | 20 € | 1,0 % | 98,5 % | C |
| Backpapier | 20 € | 1,0 % | 99,5 % | C |
| Zahnstocher | 10 € | 0,5 % | 100,0 % | C |
| **Summe** | **2.000 €** | **100 %** | | |

3 von 10 Artikeln (30 %) machen 80 % des Werts aus. 5 von 10 Artikeln (50 %) machen nur 7,5 % aus. „Kumuliert“ heißt: von oben aufaddiert. 45 + 25 = 70, 70 + 10 = 80 und so weiter.

Die A-Güter plant man genau. Die vielen billigen C-Güter behandelt man einfach.

| Klasse | Mengenanteil | Wertanteil | Behandlung |
|---|---|---|---|
| A | etwa 20 % (gering) | etwa 80 % (hoch) | genau planen, programmorientiert, Just-in-time, Preisverhandlungen |
| B | etwa 30 % | etwa 10 % | mittel |
| C | etwa 50 % (hoch) | etwa 10 % (gering) | vereinfacht, verbrauchsorientiert, Bestellpunktverfahren, Lager |

### Rechenweg: ABC-Analyse

1. Verbrauchswert je Artikel = Menge · Preis.
2. Artikel nach dem Verbrauchswert absteigend sortieren.
3. Wertanteil = Verbrauchswert / Gesamtwert · 100, mit 2 Nachkommastellen.
4. Wertanteile kumulieren, also von oben aufaddieren.
5. Einteilen: bis etwa 75 bis 80 % kumuliert = A, dann B, der Rest C.

**Durchgerechnet: Skript-Übung 40 (eigene Lösung).** Die Verbrauchswerte von acht Teilen sind schon berechnet. Gesamtwert 373.000 €.

| Rang | Teil | Wert in € | Anteil | kumuliert | Klasse |
|---|---|---|---|---|---|
| 1 | 5005 | 180.000 | 48,26 % | 48,26 % | A |
| 2 | 5008 | 100.000 | 26,81 % | 75,07 % | A |
| 3 | 5002 | 50.000 | 13,40 % | 88,47 % | B |
| 4 | 5001 | 20.000 | 5,36 % | 93,83 % | C |
| 5 | 5007 | 15.000 | 4,02 % | 97,86 % | C |
| 6 | 5004 | 6.000 | 1,61 % | 99,46 % | C |
| 7 | 5006 | 1.200 | 0,32 % | 99,79 % | C |
| 8 | 5003 | 800 | 0,21 % | 100,00 % | C |

Die C-Güter haben zusammen 11,53 %. Die Grenzen sind Richtwerte. Wer C streng auf höchstens 10 % begrenzt, nimmt 5001 noch zu B.

Als Ergänzung gibt es die **XYZ-Analyse**: Wie gut lässt sich der Verbrauch vorhersagen? X = konstant, Y = schwankend, Z = unregelmäßig. AX-Güter sind typische Kandidaten für Just-in-time.

> [!IMPORTANT]
> **Das Wichtigste**
>
> Wenige A-Güter tragen den meisten Wert. Dort lohnt sich genaue Planung.

> [!WARNING]
> **Achtung**
>
> - Typischer Fehler: nach der Menge oder nach dem Stückpreis sortieren. Sortiert wird nach dem Verbrauchswert (Menge · Preis). Ein teures Teil, das man nur einmal im Jahr braucht, kann trotzdem ein C-Gut sein.
> - Den Verbrauchswert ausdrücklich hinschreiben. Das bringt Punkte.

## Materialbedarfsplanung

**Was ist das?** Wie viel Material wird gebraucht? Es gibt zwei Wege.

- **Programmorientiert:** aus dem Produktionsplan und den Stücklisten genau ausrechnen. Für A- und B-Güter.
- **Verbrauchsorientiert:** aus dem Verbrauch der Vergangenheit schätzen. Vor allem für C-Güter.

> [!NOTE]
> **Beispiel: Die Bäckerei**
>
> Für 300 bestellte Geburtstagstorten rechnet die Bäckerei genau aus, wie viel Butter sie braucht (programmorientiert). Beim Backpapier schaut sie, wie viel in den letzten Monaten verbraucht wurde (verbrauchsorientiert).

### Rechenweg: Prognose mit Mittelwerten

1. Einfacher Mittelwert: alle Werte addieren und durch die Anzahl teilen.
2. Gewogener Mittelwert: jeden Wert mit seinem Gewicht malnehmen und addieren. Die Gewichte ergeben zusammen 1. Neuere Werte bekommen meist mehr Gewicht.

**Durchgerechnet: Skript-Übung 41 (eigene Lösung).** Verbrauch der letzten 5 Monate: 600, 550, 530, 560, 540 Stück.

1. Einfach: (600 + 550 + 530 + 560 + 540) / 5 = 2.780 / 5 = 556 Stück.
2. Gewogen mit 0,10 · 0,15 · 0,20 · 0,25 · 0,30: 60 + 82,5 + 106 + 140 + 162 = 550,5 Stück.

> [!IMPORTANT]
> **Das Wichtigste**
>
> A- und B-Güter programmorientiert, C-Güter verbrauchsorientiert.

> [!WARNING]
> **Achtung**
>
> Beim gewogenen Mittelwert prüfen, ob die Gewichte zusammen 1 ergeben. Sonst stimmt das Ergebnis nicht.

## Materialbestandsplanung: Arten von Beständen und Meldebestand

**In einem Satz:** Der Meldebestand ist die Füllhöhe im Lager, bei der du nachbestellen musst.

**Stell dir vor:** Die Tankanzeige im Auto. Du tankst nicht erst, wenn der Tank leer ist. Du fährst los, sobald noch genug drin ist, um zur Tankstelle zu kommen, plus eine kleine Reserve für einen Stau. Die Strecke bis zur Tankstelle ist die Lieferzeit. Die Reserve ist der Sicherheitsbestand.

Im Lager gibt es verschiedene „Marken“ für den Bestand. Die wichtigste ist der Meldebestand: Ist er erreicht, reicht der Rest genau, bis die Lieferung da ist, und der Sicherheitsbestand bleibt unberührt.

| Bestand | Bedeutung |
|---|---|
| Lagerbestand | körperlich vorhanden (= Inventurbestand) |
| Höchstbestand | Obergrenze gegen zu viel Lager und Kapitalbindung |
| Sicherheitsbestand | „eiserne Reserve“ für Lieferprobleme, Mehrbedarf, Ausschuss |
| Meldebestand | wird er erreicht, wird bestellt (Bestellpunkt) |
| Buchbestand | Bestand laut Rechnungswesen, kann abweichen (Schwund, Fehler) |

> [!NOTE]
> **Beispiel: Die Bäckerei (eigene Zahlen)**
>
> Die Bäckerei braucht 30 kg Mehl am Tag. Der Lieferant braucht 3 Tage. Als Reserve sollen immer 60 kg da sein. Meldebestand = 60 + 3 · 30 = 60 + 90 = 150 kg. Zeigt die Waage 150 kg, wird bestellt.
>
> | Tag | Mehl im Lager | was passiert |
> |---|---|---|
> | 0 | 150 kg | Meldebestand erreicht, Bestellung geht raus |
> | 1 | 120 kg | 30 kg verbraucht |
> | 2 | 90 kg | 30 kg verbraucht |
> | 3 | 60 kg | Lieferung kommt, die Reserve ist noch unberührt |

### Rechenweg: Meldebestand

1. Tagesverbrauch = Verbrauch / Anzahl der Verbrauchstage.
2. Meldebestand = Sicherheitsbestand + Lieferzeit · Tagesverbrauch.
3. Auf ganze Stück runden, wenn verlangt.

**Durchgerechnet: Skript-Übung 42 (eigene Lösung).** Tagesverbrauch 20 Stück, Sicherheitsbestand für 5 Tage, Lieferzeit 14 Tage, Bestellmenge 400 Stück.

1. Tagesverbrauch = 20 Stück, Sicherheitsbestand = 5 · 20 = 100 Stück.
2. Meldebestand = 100 + 14 · 20 = 380 Stück.
3. Bestellrhythmus = 400 / 20 = 20 Tage.
4. Bei nur 7 Tagen Lieferzeit: Meldebestand = 100 + 7 · 20 = 240 Stück.

Zwei Bestellverfahren:

- **Bestellpunktverfahren:** bestellen, wenn der Meldebestand erreicht ist, mit fester Menge. Für C-Güter, teils B-Güter.
- **Bestellrhythmusverfahren:** feste Termine, die Menge richtet sich nach dem Verbrauch.

> [!IMPORTANT]
> **Das Wichtigste**
>
> Meldebestand = Sicherheitsbestand + Lieferzeit · Tagesverbrauch.

> [!WARNING]
> **Achtung**
>
> - Der Meldebestand hängt nicht von der Bestellmenge ab.
> - Tagesverbrauch = Verbrauch / Tage, an denen tatsächlich etwas abfließt. In der Musterklausur waren es 130 Tage, nicht 180 Kalendertage.

## Materialbeschaffungsplanung: optimale Bestellmenge

**In einem Satz:** Die optimale Bestellmenge ist die Menge pro Bestellung, bei der Bestellkosten und Lagerkosten zusammen am kleinsten sind.

**Stell dir vor:** Du kaufst Mineralwasser. Fährst du jeden Tag einzeln zum Laden, kostet dich das viel Zeit und Sprit (Bestellkosten). Kaufst du einmal für das ganze Jahr, ist der Keller voll und das Geld steckt im Wasser statt auf dem Konto (Lagerkosten). Irgendwo dazwischen ist der beste Kompromiss. Das ist ein Zielkonflikt: Was die eine Kostenart senkt, erhöht die andere.

**Mit Zahlen: Zucker in der Bäckerei (eigene Zahlen)**

Die Bäckerei braucht 3.600 kg Zucker im Jahr. Jede Bestellung kostet 20 € (Versand, Verwaltung). 1 kg kostet 1 €. Der Lagerkostensatz ist 10 %: Jeder Euro, der im Lager liegt, kostet im Jahr 10 Cent (Zinsen, Platz, Versicherung).

| Menge je Bestellung | Bestellungen im Jahr | Bestellkosten | Ø Lagerbestand | Lagerkosten | Summe |
|---|---|---|---|---|---|
| 300 kg | 12 | 240 € | 150 kg | 15 € | 255 € |
| 600 kg | 6 | 120 € | 300 kg | 30 € | 150 € |
| 900 kg | 4 | 80 € | 450 kg | 45 € | 125 € |
| **1.200 kg** | **3** | **60 €** | **600 kg** | **60 €** | **120 €** |
| 1.800 kg | 2 | 40 € | 900 kg | 90 € | 130 € |
| 3.600 kg | 1 | 20 € | 1.800 kg | 180 € | 200 € |

Liest du die Tabelle von oben nach unten, fallen die Bestellkosten und die Lagerkosten steigen. Die Summe ist bei 1.200 kg am kleinsten. Genau dort sind beide Kostenarten gleich hoch (60 € und 60 €).

Warum ist der durchschnittliche Lagerbestand die halbe Bestellmenge? Nach jeder Lieferung ist das Lager voll (1.200 kg), kurz vor der nächsten fast leer (0 kg). Im Mittel liegt also die Hälfte da: 1.200 / 2 = 600 kg.

**Die Formel (Andler):** xopt = √(2 · xB · Kf / (k · kL))

- xopt ist die optimale Bestellmenge, das gesuchte Ergebnis.
- √ heißt „Wurzel aus“: die Zahl, die mit sich selbst malgenommen den Wert unter der Wurzel ergibt.
- xB ist der Jahresbedarf (3.600 kg).
- Kf sind die fixen Kosten je Bestellung (20 €).
- k ist der Preis je Stück (1 € je kg).
- kL ist der Zins- und Lagerkostensatz als Dezimalzahl (10 % = 0,10).

**Auf Deutsch heißt das:** Zwei mal Jahresbedarf mal Bestellkosten, geteilt durch Preis mal Lagerkostensatz, und daraus die Wurzel.

Für den Zucker: xopt = √(2 · 3.600 · 20 / (1 · 0,10)) = √(144.000 / 0,10) = √1.440.000 = 1.200 kg. Das passt zur Tabelle.

### Rechenweg: optimale Bestellmenge (Andler)

1. Jahresbedarf xB bestimmen. Ist nur ein Halbjahr gegeben: mal 2.
2. Lagerkostensatz als Dezimalzahl schreiben (12 % = 0,12).
3. Einsetzen: xopt = √(2 · xB · Kf / (k · kL)). Erst den Bruch ausrechnen, dann die Wurzel ziehen.
4. Anzahl der Bestellungen = xB / xopt.
5. Probe: Lagerkosten = xopt / 2 · k · kL und Bestellkosten = Anzahl · Kf sind gleich hoch.

**Durchgerechnet: Skript-Übung 43a (eigene Lösung).** Jahresbedarf 1.000 Stück, fixe Kosten je Bestellung 50 €, Preis 100 €, Lagerkostensatz 10 %.

1. xB = 1.000 Stück.
2. kL = 0,10.
3. xopt = √(2 · 1.000 · 50 / (100 · 0,10)) = √(100.000 / 10) = √10.000 = 100 Stück.
4. Bestellungen = 1.000 / 100 = 10.
5. Probe: Lagerkosten = 100 / 2 · 100 · 0,10 = 500 €. Bestellkosten = 10 · 50 = 500 €. Zusammen 1.000 €.

> [!IMPORTANT]
> **Das Wichtigste**
>
> Annahmen der Andler-Formel: konstanter, bekannter Bedarf, konstante Preise ohne Rabatte, konstante Kostensätze, keine Fehlmengen, sofortige Lieferung, unbegrenzte Lager- und Finanzkapazität.

> [!WARNING]
> **Achtung**
>
> - Typischer Fehler: die Wurzel vergessen oder nur über den Zähler ziehen. Erst den ganzen Bruch ausrechnen, dann die Wurzel.
> - Halbjahreswerte verdoppeln.
> - Prozent als Dezimalzahl einsetzen.
> - Bestellmenge und Zahl der Bestellungen auf ganze Zahlen runden, wenn verlangt.

## Sourcing-Varianten

**Was ist das?** „Sourcing“ heißt: Bei wie vielen Lieferanten kaufe ich ein?

| Variante | Bedeutung |
|---|---|
| Solo-Sourcing | erzwungen: Es gibt nur einen Lieferanten am Markt. |
| Single-Sourcing | bewusst: langfristig ein Lieferant je Materialart. |
| Multiple-Sourcing | viele Lieferanten, man nutzt den Wettbewerb bei Preis und Technik. |

> [!NOTE]
> **Beispiel: Die Bäckerei**
>
> Im Ort gibt es nur eine Mühle mit Dinkel (Solo). Die Bäckerei kauft bewusst nur bei einer Mühle, weil die Qualität stimmt (Single). Sie fragt jede Woche fünf Händler nach dem besten Preis (Multiple).

> [!IMPORTANT]
> **Das Wichtigste**
>
> Single-Sourcing: Vorteile sind enge Partnerschaft, gute Qualität, wenig Abstimmungsaufwand, Mengenrabatte. Nachteile sind Abhängigkeit, Risiko eines Lieferausfalls, kein Preiswettbewerb.

> [!WARNING]
> **Achtung**
>
> Solo = gezwungen, weil nur einer da ist. Single = freiwillig, einer wurde ausgewählt.

## Lagerkennzahlen

**In einem Satz:** Lagerkennzahlen zeigen, wie lange Ware im Lager liegt und wie viel Geld dort festsitzt.

**Stell dir vor:** Ein Brotkorb, der jeden Tag leer gegessen und neu gefüllt wird, schlägt sich im Jahr 360-mal um. Ein Gewürzregal, das man einmal im Jahr auffüllt, schlägt sich nur einmal um. Je öfter sich das Lager im Jahr leert und wieder füllt, desto kürzer liegt die Ware und desto weniger Geld ist gebunden.

> [!NOTE]
> **Beispiel: Die Bäckerei (eigene Zahlen)**
>
> Im Schnitt liegen 100 kg Mehl im Lager. Im Jahr werden 3.600 kg verbraucht. Umschlagshäufigkeit = 3.600 / 100 = 36. Das Mehl liegt im Schnitt 360 / 36 = 10 Tage.

### Rechenweg: Lagerkennzahlen

1. Durchschnittlicher Lagerbestand = (Anfangsbestand + Endbestand) / 2 oder (Anfangsbestand + 12 Monatsendbestände) / 13.
2. Umschlagshäufigkeit = Verbrauch / durchschnittlicher Lagerbestand. Verbrauch = Anfangsbestand + Zugänge − Endbestand.
3. Durchschnittliche Lagerdauer = 360 / Umschlagshäufigkeit, in Tagen.
4. Lagerzinssatz = Jahreszins · Lagerdauer / 360.
5. Lagerzinsen = durchschnittlicher Lagerbestand · Preis · Lagerzinssatz / 100.

**Durchgerechnet: Skript-Übung 51 (eigene Lösung).** Durchschnittlicher Lagerwert 350.000 €, Materialeinsatz im Jahr 3,85 Mio. €, Jahreszins 15 %.

1. Der durchschnittliche Lagerwert ist gegeben: 350.000 €.
2. Umschlagshäufigkeit = 3.850.000 / 350.000 = 11.
3. Lagerdauer = 360 / 11 = 32,7 Tage.
4. Lagerzinssatz = 15 · 32,7 / 360 = 1,36 %.
5. Lagerzinsen (eigene Ergänzung) = 350.000 · 1,36 / 100 = 4.760 €. Hier ist der Lagerwert schon in €, deshalb fällt der Preis weg. Mit dem ungerundeten Zinssatz 1,3636 % sind es 4.772,73 €.

> [!IMPORTANT]
> **Das Wichtigste**
>
> Hohe Umschlagshäufigkeit ist gut: kurze Lagerdauer, wenig gebundenes Kapital, niedrige Lagerzinsen.

> [!WARNING]
> **Achtung**
>
> Beim Monatsdurchschnitt durch 13 teilen: Anfangsbestand plus 12 Monatsendbestände.

## Übungen

> [!TIP]
> **Übung 1 · leicht**
>
> *Quelle: Musterklausur 2025, A7b (3 Punkte)*
>
> Nenne zwei Nachteile der Just-in-time-Beschaffung.

> [!TIP]
> **Übung 2 · mittel**
>
> *Quelle: Skript, Übung 39b und 46*
>
> a) Welches Beschaffungsprinzip passt? Delta: unregelmäßiger Bedarf, Kunden erwarten kurze Lieferzeiten. Omega: teure, individuelle Teile, Kunden warten gern. Alpha: teure Teile, gut planbare Massenproduktion. b) Nenne Vor- und Nachteile von Single-Sourcing.

> [!TIP]
> **Übung 3 · mittel**
>
> *Quelle: Musterklausur 2025, A6b (3 Punkte)*
>
> Im Halbjahr gehen 3.350 Paletten an 130 Tagen aus dem Lager. Der Sicherheitsbestand ist 50 Paletten, die Lieferzeit 9 Tage. Berechne den Meldebestand.

> [!TIP]
> **Übung 4 · Prüfungsniveau**
>
> *Quelle: Musterklausur 2025, A6a (4 Punkte)*
>
> Verbrauch im Halbjahr: 600, 700, 500, 400, 550, 600 Paletten. Fixe Kosten je Bestellung 400 €, Preis 6.000 € je Palette, Lagerkostensatz 12 %. Berechne die optimale Bestellmenge nach Andler und die Zahl der Bestellungen im Jahr.

> [!TIP]
> **Übung 5 · Prüfungsniveau**
>
> *Quelle: Musterklausur 2025, A7a (6 Punkte)*
>
> Ein Unternehmen kauft im Jahr 25.000 t Polypropylen (PP) zu 1.750 € je Tonne. Der Bestellwert aller Materialien ist 90,0 Mio. €. Ordne PP rechnerisch in die ABC-Analyse ein. Beurteile den Vorschlag, PP just in time zu beschaffen.

> [!TIP]
> **Übung 6 · Prüfungsniveau**
>
> *Quelle: Skript, Übung 50a*
>
> Ein Bauteil (Werte in Tausend Stück): Anfangsbestand 14, Monatsendbestände 18, 21, 12, 36, 60, 63, 65, 61, 59, 54, 50, 18. Verbrauch im Jahr 331. Preis 6 € je Stück, Jahreszins 10 %. Berechne durchschnittlichen Lagerbestand, Umschlagshäufigkeit, Lagerdauer, Lagerzinssatz und Lagerzinsen.

## Lösungen

### Übung 1

Offizielle Musterlösung, zwei nennen:

- enge Bindung an den Lieferanten (Abhängigkeit)
- hohe Preise
- Umweltbelastung durch mehr Verkehr

Auch richtig: Stillstand der Produktion bei Lieferstörungen wie Stau oder Streik.

### Übung 2

Eigene Lösung:

- a) Delta → Vorratsbeschaffung, weil das Lager die Schwankungen auffängt. Omega → Einzelbeschaffung im Bedarfsfall. Alpha → Just-in-time.
- b) Vorteile: enge Partnerschaft, gute Qualität, weniger Abstimmungsaufwand, Mengenrabatte. Nachteile: Abhängigkeit, Risiko eines Lieferausfalls, kein Preiswettbewerb.

### Übung 3

Ergebnis laut offizieller Musterlösung.

1. Tagesverbrauch = 3.350 / 130 = 25,77 Paletten. Durch die Abflusstage teilen, nicht durch 180.
2. Verbrauch während der Lieferzeit = 9 · 25,77 = 231,9 Paletten.
3. Meldebestand = 50 + 231,9 = 281,9 ≈ 282 Paletten.

### Übung 4

Ergebnisse laut offizieller Musterlösung.

1. Halbjahr = 600 + 700 + 500 + 400 + 550 + 600 = 3.350 Paletten. Jahresbedarf = 2 · 3.350 = 6.700 Paletten.
2. kL = 0,12.
3. Zähler: 2 · 6.700 · 400 = 5.360.000. Nenner: 6.000 · 0,12 = 720. xopt = √(5.360.000 / 720) = √7.444,4 = 86,3 ≈ 86 Paletten.
4. Bestellungen = 6.700 / 86,3 = 77,6 ≈ 78 im Jahr.

### Übung 5

Offizielle Musterlösung.

1. Verbrauchswert PP = 25.000 · 1.750 = 43.750.000 € = 43,75 Mio. €. Ausdrücklich hinschreiben.
2. Wertanteil = 43,75 / 90,0 · 100 = 48,61 %. Fast die Hälfte des Werts → eindeutig ein A-Gut.
3. Just-in-time ist sinnvoll: Als wertvolles A-Gut verursacht PP hohe Lagerkosten, die bei fertigungssynchroner Beschaffung wegfallen. Die großen Mengen und der gleichmäßige Verbrauch über das Jahr sprechen ebenfalls für Just-in-time.

### Übung 6

Eigene Lösung, gerechnet mit gerundeten Zwischenwerten:

1. Summe = 14 + 18 + 21 + 12 + 36 + 60 + 63 + 65 + 61 + 59 + 54 + 50 + 18 = 531. Durchschnittlicher Bestand = 531 / 13 = 40,8 ≈ 41 Tausend Stück.
2. Umschlagshäufigkeit = 331 / 41 = 8,07 ≈ 8.
3. Lagerdauer = 360 / 8 = 45 Tage.
4. Lagerzinssatz = 10 · 45 / 360 = 1,25 %.
5. Lagerzinsen = 41.000 · 6 · 1,25 / 100 = 3.075 €.
