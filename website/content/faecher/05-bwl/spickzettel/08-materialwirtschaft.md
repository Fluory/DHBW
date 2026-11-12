## Ziele

Materialwirtschaftliches Optimum: richtiges Material, richtige Menge und Qualität, richtige Zeit, richtiger Ort, geringe Kosten. Formalziel: langfristige Gewinnoptimierung. Unterziele: Beschaffungs-, Transport-, Lager-, Fehlmengenkosten gering halten.

## Beschaffungsprinzipien

| | Einzelbeschaffung | Just-in-time | Vorrat |
|---|---|---|---|
| Idee | kaufen bei konkretem Bedarf | Lieferung direkt in die Produktion | Lager trennt Beschaffung und Produktion |
| Vorteil | niedrige Lager- und Transportkosten | geringe Lagerkosten | entlastet Produktion, sicher |
| Nachteil | hohe Beschaffungskosten, Wartezeit | Lieferantenbindung, hohe Preise, störanfällig, Umweltbelastung | hohe Lager- und Kapitalbindungskosten |
| passt für | teure Einzelteile, Kunde wartet | teure Teile, planbare Massenproduktion | unregelmäßiger Bedarf, kurze Lieferzeiten |

## ABC-Analyse

1. Verbrauchswert = Menge · Preis (hinschreiben).
2. Absteigend nach Verbrauchswert sortieren.
3. Wertanteil = Wert ÷ Gesamtwert · 100.
4. Kumulieren.
5. Bis ca. 75–80 % = A, dann B, Rest C.

| Klasse | Mengenanteil | Wertanteil | Behandlung |
|---|---|---|---|
| A | ca. 20 % | ca. 80 % | genau, programmorientiert, JIT |
| B | ca. 30 % | ca. 10 % | mittel |
| C | ca. 50 % | ca. 10 % | verbrauchsorientiert, Bestellpunkt, Lager |

25.000 t · 1.750 € = 43,75 Mio. € ÷ 90 Mio. € = **48,61 %** → A-Gut.
XYZ: X konstant, Y schwankend, Z unregelmäßig. AX → Just-in-time.

## Bedarfsplanung

Programmorientiert (Stücklisten, A/B) oder verbrauchsorientiert (Vergangenheit, C).
600, 550, 530, 560, 540: einfach 2.780 ÷ 5 = **556**; gewogen (0,10 … 0,30, Summe 1) = **550,5**.

## Meldebestand

**Meldebestand = Sicherheitsbestand + Lieferzeit · Tagesverbrauch**; Tagesverbrauch = Verbrauch ÷ Verbrauchstage.

3.350 Paletten an 130 Tagen, SB 50, Lieferzeit 9 Tage:
1. 3.350 ÷ 130 = 25,77
2. 9 · 25,77 = 231,9
3. 50 + 231,9 ≈ **282 Paletten**

Bestände: Lager- (= Inventur-), Höchst-, Sicherheits- („eiserne Reserve“), Melde-, Buchbestand.
Bestellpunktverfahren: bei Meldebestand, feste Menge. Bestellrhythmusverfahren: feste Termine.

## Optimale Bestellmenge (Andler)

**xopt = √(2 · xB · Kf ÷ (k · kL))**: xB Jahresbedarf, Kf fixe Kosten je Bestellung, k Stückpreis, kL Lagerkostensatz als Dezimalzahl.

1. Jahresbedarf (Halbjahr · 2).
2. kL dezimal (12 % = 0,12).
3. Bruch ausrechnen, dann Wurzel.
4. Bestellungen = xB ÷ xopt.
5. Probe: Lagerkosten xopt ÷ 2 · k · kL = Bestellkosten.

xB 1.000, Kf 50 €, k 100 €, kL 0,10: √(100.000 ÷ 10) = **100 Stück**, 10 Bestellungen, je 500 € Lager- und Bestellkosten.

Annahmen: konstanter Bedarf, Preise ohne Rabatt, konstante Kostensätze, keine Fehlmengen, sofortige Lieferung, unbegrenzte Kapazität.

## Sourcing

Solo: nur ein Anbieter (erzwungen). Single: bewusst einer (Partnerschaft, Qualität, Rabatte; aber Abhängigkeit, Ausfallrisiko). Multiple: viele, Wettbewerb nutzen.

## Lagerkennzahlen

1. Ø Bestand = (AB + EB) ÷ 2 oder (AB + 12 Monatsendbestände) ÷ 13
2. Umschlagshäufigkeit = Verbrauch ÷ Ø Bestand
3. Lagerdauer = 360 ÷ Umschlagshäufigkeit
4. Lagerzinssatz = Jahreszins · Lagerdauer ÷ 360
5. Lagerzinsen = Ø Bestand · Preis · Lagerzinssatz ÷ 100

Ø Wert 350.000 €, Einsatz 3,85 Mio. €, Zins 15 %: Umschlag **11**, Dauer **32,7 Tage**, Zinssatz **1,36 %**, Zinsen ≈ 4.773 €.

## Typische Fehler

- ABC nach Menge oder Stückpreis sortieren statt nach Verbrauchswert.
- Tagesverbrauch durch Kalendertage (180) statt Abflusstage (130).
- Meldebestand von der Bestellmenge abhängig machen.
- Andler: Wurzel nur über Zähler, Prozent nicht dezimal, Halbjahr nicht verdoppelt.
- Monatsdurchschnitt durch 12 statt 13 teilen.
- Gewichte, die nicht 1 ergeben.
- Solo und Single verwechseln.
