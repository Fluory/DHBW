# Kernpunkte: Grundlagen der IT

> Für Vortest, Blurting und Active Recall. Klausurrelevant ist, was im Skript bzw. auf den Folien steht; alles, was darüber hinausgeht, ist mit „(über das Skript hinaus)“ markiert.

## Kernpunkte pro Thema

### T01 – Daten, Information und Informationstheorie
- **Daten** = Rohdaten, unverarbeitete Fakten, ohne Kontext keine Bedeutung (Zahlen, Texte, Symbole); **Informationen** = verarbeitete Daten mit Bedeutung und Kontext, unterstützen Entscheidungen, aggregieren sich zu **Wissen**, Wissen führt zu **Handlung** (VL01 F. 12).
- Beispiel `000000111` ⇒ 7: als °C in DE „kalt → Jacke“, in Kanada „warm → kurze Hose“, als °F in den USA „sehr kalt (≈ −13 °C) → Wintersachen“; `000101010` ⇒ 42 € Kontostand → Kino (14 €) (VL01 F. 12).
- **Shannon (1948):** Informationsquelle → Sender → Kanal → Empfänger → Ziel; zentrale Konzepte: Bit als Grundeinheit, Entropie H(X) = durchschnittlicher Informationsgehalt einer Quelle, Redundanz, Trennung von Bedeutung und technischer Übertragung, Kanalkapazität/Shannon-Grenze = maximale Datenrate eines gestörten Kanals bei beliebig kleiner Fehlerwahrscheinlichkeit (VL01 F. 13).
- **Kompression** = Redundanz entfernen → weniger Bit: RLE `AAAABBBCC → 4A3B2C`; Huffman: häufige Zeichen kurz, seltene lang (wie Morse) (VL01 F. 14).
- **Fehlererkennung/-korrektur** = Redundanz hinzufügen → mehr Bit, geringere effektive Datenrate: Paritätsbit, Wiederholungscodes, Hamming-Codes; Viking 1975: (32,6)-Reed-Muller-Code (6 Informationsbits auf 32 Bit). JPEG/MP3/MP4 lassen unwichtige Information weg (VL01 F. 14).

**Typische Aufgaben:**
1. Erklären Sie an der Bitfolge `000101010` den Weg Daten → Information → Wissen → Handlung in zwei verschiedenen Kontexten.
2. Komprimieren Sie `CCCCCAAABBBBBBD` mit RLE und erklären Sie, warum ein Paritätsbit das Gegenteil von Kompression bewirkt.

### T02 – Digitalisierung: drei Sichtweisen und fünf Phasen
- **Betriebswirtschaftlich (BMWK):** Verwendung von Daten und algorithmischen Systemen für neue oder verbesserte Prozesse, Produkte und Geschäftsmodelle; Querschnittstechnologie; analoge Leistungserbringung wird ganz oder teilweise durch Leistungserbringung in einem digitalen, computerhandhabbaren Modell ersetzt (VL01 F. 15).
- **Gesellschaftlich:** Übertragung der Lebens- und Arbeitswelten des Menschen auf eine digitale Ebene; heute oft im Kontext umwälzender Innovationen („Disruption“) (VL01 F. 15).
- **Technisch:** Digitaltechnik = elektronische Schaltungen auf Basis zeit- und wertediskreter (insb. binärer) Signale; Überführung analoger in digitale Werte, um sie elektronisch zu übertragen, zu speichern und zu verarbeiten; binäre Repräsentation von Texten, Bildern, Tönen, Filmen als Folgen aus 1 und 0 (VL01 F. 16).
- **Phasen (Österle/Fleisch/Alt 2000):** 1 einzelne Funktionen (automatisierte Rechnungserstellung) → 2 ganze Funktionsbereiche (Rechnungswesen) → 3 integrierte Prozesse über Grenzen der Aufbauorganisation (Auftragsbearbeitung) → 4 individuelle 1:1-Integration überbetrieblicher Prozesse (lieferantengeführte Bestände) → heute durchgängige m:n-Integration bis zum Endkunden über eine globale Infrastruktur (B2B/B2C-Marktplätze, Produktion on demand, Availability to promise, Long-Tail- und digital-only-Produkte) (VL01 F. 17).

**Typische Aufgaben:**
1. Nennen Sie die drei Sichtweisen auf Digitalisierung und erläutern Sie jede in einem Satz.
2. Ordnen Sie den Phasen zu: „Lieferant steuert die Lagerbestände seines Kunden“, „Marktplatz verbindet viele Händler mit vielen Endkunden“, „Rechnungen werden automatisch erstellt“.

### T03 – Rolle, Nutzen und Ökonomie der IT
- **Prä-Internet:** IT als untergeordnete Managementaufgabe in der „EDV-Abteilung“, nötig für Effizienz in Routineabläufen, aber nicht strategisch (Carr 2003: „IT doesn't matter“) (VL01 F. 18).
- **Internet-Zeitalter:** IT wird Teil des Kerngeschäfts – digitale Kommunikations- und Vertriebskanäle (CRM, Shopsysteme), digitale Produkte (Spotify); aktuell Cloud-Betriebsmodelle (SaaS, PaaS), strategische Vorteile aus Data Analytics, KI, Machine Learning (VL01 F. 19).
- **Nutzen in drei Stufen:** Automatisierung (Abläufe „in IT gegossen“ → schneller, standardisiert) → Informatisierung (anfallende Daten für bessere Managemententscheidungen: Business Intelligence, Data Warehouse, Business Analytics) → Transformation (völlig neue Geschäftsprozesse, die an Verarbeitungskapazität oder Medienbrüchen scheiterten; Business Process Reengineering) (VL01 F. 20).
- **Ökonomie:** gleiche Regeln, aber verschobene Gewichte (Fix- vs. variable Kosten, Netzwerkeffekte, Plattformökonomie); Long Tail, Freemium (z. B. Fernlichtassistent als Cloud-Abo), Plattformen ohne eigene Assets (Uber, Airbnb), niedrigere Eintrittsbarrieren, Verschiebung von Kompetenzen, Konvergenz von Branchen (Versandhandel, Musik, Film) (VL01 F. 21–22).

**Typische Aufgaben:**
1. Erklären Sie Automatisierung, Informatisierung und Transformation am Beispiel eines Onlinehändlers.
2. Erläutern Sie zwei ökonomische Besonderheiten digitaler Geschäftsmodelle mit je einem Beispiel.

### T04 – Sieben Komponenten; Epochen 1–3
- **7 Hauptkomponenten:** Hardwareplattformen, Betriebssystem-Plattformen, Datenverwaltung und -speicherung, Netzwerke und Telekommunikation, Anwendungssysteme, Internet (als Plattform), Beratungsdienste und Systemintegratoren (VL01 F. 24).
- **5 technische Epochen** (nicht mit den Phasen der Digitalisierung verwechseln; sie überlagern sich; Treiber: Hardware schneller/kleiner/billiger, neue Architekturen, Anforderungen der Algorithmen): Groß-/Minirechner (1959–heute), Personal Computing (1981–heute), Client-Server (1983–heute), betriebliche und internetbasierte Informationssysteme (1992–heute), Cloud Computing (2000–heute) (VL01 F. 25).
- **Epoche 1:** transistorbasierte IBM 1401/7090 (1959), Tausende Terminals an einem Großrechner, alles von einem Anbieter; DEC-Minicomputer (PDP-11, VAX; ab 1965) deutlich günstiger → EDV dezentralisiert (VL01 F. 27).
- **Epoche 2:** IBM-PC 1981, Wintel-Standard, Tabellenkalkulation und Textverarbeitung; Einzelplatzsysteme, vernetzt erst um 1990 (Novell NetWare, LAN Manager; Token Ring, Ethernet) (VL01 F. 30).
- **Epoche 3:** Client = Eingabestelle des Benutzers; Server verarbeitet/speichert gemeinsam genutzte Daten, liefert Webseiten, verwaltet Netzwerkaktivitäten; 2-Tier → N-Tier (Client – Internet – Webserver – Anwendungsserver – Daten; Internet „nur“ als technischer Zugang); Rechenlast auf viele günstige Maschinen verteilt; Beispiel SAP R/3 mit Internet Transaction Server und separatem Datenbankserver (VL01 F. 33–35).

**Typische Aufgaben:**
1. Nennen Sie die sieben Hauptkomponenten einer modernen IT-Infrastruktur.
2. Erklären Sie das Client-Server-Prinzip und skizzieren Sie eine N-Tier-Architektur mit Beschriftung.

### T05 – Epochen 4–5: internetbasierte Informationssysteme und Cloud Computing
- **Epoche 4 (1992–heute):** Netzwerkstandards integrieren Anwendungen unternehmensweit; ab 1995 verbindet TCP/IP heterogene Netze → unternehmensübergreifende Kommunikation, verteilte Anwendungen (heute REST-APIs), Load-Balancing, Browser-Anwendungen auf vielen Endgeräteklassen; Kunden und Lieferanten verbinden sich (Supply Chain, Shops mit Lagerzugriff, Marktplätze) (VL01 F. 36–37).
- **Cloud Computing (Epoche 5, 2000–heute; Vertiefung im 2. Semester):** vormals im Unternehmen betriebene Lösungen werden von externen Anbietern über das Internet bezogen (IaaS, PaaS, SaaS), meist als Abo, Zugang i. d. R. per Browser; flexible, skalierbare virtuelle Instanzen; Hadoop verteilt parallelisierbare Last; Beispiel New York Times: ca. 11 Mio. Artikel in 24 h zu PDF (VL01 F. 38–39).
- **Ursprung und Anbieter:** Amazon hielt Rechenleistung für Weihnachts-/„Back2School“-Geschäft vor und monetarisierte sie → AWS seit 2002; Hyperscaler: AWS, Microsoft Azure, Google Cloud (GCP), STACKIT (Schwarz-Gruppe, Neckarsulm); SaaS-Pionier Salesforce (CRM) (VL01 F. 40–41).
- **Vergleich der Epochen** nach Dimensionen (maßgebliche Unternehmen, Hardware, Betriebssystem, Anwendungssoftware, Netz, Systemintegration, Datenhaltung, Internetplattform), z. B. Cloud: unternehmensexterne Server, Software-as-a-Service-Unternehmen, externe Datenbankserver (VL01 F. 42–43).

**Typische Aufgaben:**
1. Definieren Sie Cloud Computing und nennen Sie die drei Servicemodelle sowie zwei Hyperscaler.
2. Erklären Sie, welche Rolle TCP/IP für die 4. Epoche spielte.

### T06 – Treiber 1: Moore'sches Gesetz
- Technischer Fortschritt = exponentiell steigende Rechenleistung bei exponentiell sinkenden Kosten; fünf Treiber: Moore'sches Gesetz, digitale Massenspeicher, Gesetz von Metcalfe, sinkende Kommunikationskosten, Standardisierung (VL01 F. 45).
- **Moore 1965** (Fairchild, später Intel-Gründer): Zahl der Komponenten (Transistoren) pro Chip verdoppelt sich **jährlich** („for the next 10 years“); später korrigiert auf **alle zwei Jahre** (Tuomi 2002) (VL01 F. 46).
- **Drei Interpretationen, keine von Moore:** Leistung der Mikroprozessoren verdoppelt sich alle 18 Monate; Leistung von Computern verdoppelt sich alle 18 Monate; Preis der rechnergestützten Informationsverarbeitung halbiert sich alle 18 Monate. Fläche ist wichtigster Kostenfaktor bei Chips (VL01 F. 47).
- **Grenzen:** Sättigung (Temperatur, Kosten); Kosten pro Transistor steigen bei kleineren Strukturen wieder; Energie- und Kühlungsbedarf steigt. **Auswege:** neue Materialien/Lithographie (ASML, TSMC), Chipdesign in 3D, Quantencomputer (VL01 F. 48–49).
- **„in Action“:** Nvidia Ampere 54 Mrd., Hopper 80 Mrd., Blackwell 208 Mrd. Transistoren; 2025 keine größeren Chips, Skalierung über mehrere GPUs/Cluster/Rechenzentren; GPU-Preise ×7,5, Leistung ×1000 in acht Jahren (VL01 F. 52–55).

**Typische Aufgaben:**
1. Geben Sie Moores Aussage von 1965, ihre spätere Korrektur und die drei gängigen Interpretationen wieder.
2. Um welchen Faktor wächst die Transistorzahl in 20 Jahren bei Verdopplung alle zwei Jahre, und um welchen bei jährlicher Verdopplung?

### T07 – Treiber 2–5: Massenspeicher, Metcalfe, Kommunikationskosten, Standardisierung
- **Massenspeicher:** exponentieller Kapazitätszuwachs bei drastisch fallenden Preisen; Datenmenge verdoppelt sich grob jedes Jahr (Lyman/Varian 2003), fast alles auf Magnetspeichern; weltweit erzeugtes Datenvolumen laut Statista-Grafik 2 (2010) → 64,2 (2020) → 181 (2025, Prognose; Zettabyte) (VL01 F. 57–59).
- Dozenten-Beispiel: 1995 alle Daten (ca. 150 MB) auf 100 Disketten à 1,44 MB (ca. 400 DM); heute ca. 10 TB auf 5 SSDs à 2 TB (ca. 1000 €), Faktor > 60.000 (VL01 F. 60).
- **Gesetz von Metcalfe** (Erfinder von Ethernet): Wert eines Netzes wächst überproportional mit der Teilnehmerzahl; bei n Mitgliedern **n·(n−1)** potenzielle Kommunikationsverbindungen („quadratischer Effekt“); gilt auch für soziale Netzwerke (VL01 F. 61).
- **Kommunikationskosten** nähern sich 0; über 5 Mrd. Menschen mit Internetzugang; IPv4-Adressen erschöpft (VL01 F. 63).
- **Standardisierung** (Stango 2004): Spezifikationen für Kompatibilität und Kommunikationsfähigkeit → Skaleneffekte, Preissenkungen; Beispiele: TTL (Hardware), Ethernet IEEE 802.3 (1973), Token Ring IEEE 802.5, TCP/IP (1974; IPv4 1981, IPv6 seit 1998), WWW (1989–1993), ASCII (1958, ANSI 1963), Unix (1969–1975), Windows 3.0 (1990), IBM/Microsoft/Intel-PC (1981), Fortran (1957), heute Node.js, REST, Angular/React, W3C (HTML, XML, CSS, WCAG) (VL01 F. 64–68).

**Typische Aufgaben:**
1. Berechnen Sie nach Metcalfe die potenziellen Verbindungen für 5, 10 und 20 Teilnehmer und beschreiben Sie das Wachstum.
2. Erklären Sie, wie Standardisierung Kosten senkt, mit zwei Beispielen aus verschiedenen Bereichen.

### T08 – Informationsdarstellung: Aspekte, EVA, Kodierung, Bit und Byte
- Leitfragen Teil II: Wie „rechnen“ Computer? Wie „funktioniert“ Programmierung? Welche Algorithmen werden am meisten genutzt? (VL02 F. 4 = RS02 F. 2). Die Geschichte der Rechenmaschinen (F. 6–9: Abakus, Ries, Schickard, Pascal, Leibniz, Zuse Z3, ENIAC) ist laut VL01 F. 8 **nicht prüfungsrelevant**.
- **Drei Aspekte:** syntaktisch (Form, Auswertbarkeit – entspricht dem *Typ* einer Variablen), semantisch (Bedeutung durch Kontext – sollte dem *Namen* der Variablen entsprechen), pragmatisch (Handlung/Verhaltensauswahl: „Was mache ich jetzt damit?“) (VL02 F. 11, 13).
- **EVA-Prinzip** Eingabe – Verarbeiten – Ausgabe (speichern) = IPO (Input – Process – Output); **Kodierung** übersetzt Daten für Speicherung, Verarbeitung und Übertragung; Sender und Empfänger brauchen dieselbe „Sprache“ (VL02 F. 11–12).
- **Arecibo-Botschaft (1974):** 1669 Bit ohne bekannte Kodierung; 1669 = 23 × 73 (Primzahlen) → als Rechteck angeordnet entsteht ein Bild; erst Kontext und Annahmen machen Daten zu Information (VL02 F. 14–15).
- **Binär:** 0 = keine Spannung, 1 = Spannung; Bit (binary digit) = kleinste Informationseinheit; Flipflop (bistabile Kippstufe) speichert 1 Bit, solange Spannung anliegt; **1 Byte = 8 Bit**, 1 KB = 1024 Byte, 1 MB = 1024 KB, 1 GB = 1024 MB, 1 TB = 1024 GB (frühe Bytes hatten 6 Bit) (VL02 F. 13, 16–17).

**Typische Aufgaben:**
1. Ordnen Sie für die Variable `int kontostand = 42;` den syntaktischen, semantischen und pragmatischen Aspekt zu.
2. Wie viele Bit sind 2 KB laut Foliendefinition, und wie viele Byte sind 1 MB?

### T09 – Stellenwertsysteme: dezimal, dual, oktal, hexadezimal
- **Ziffernmengen:** dezimal {0, …, 9}, dual {0, 1}, oktal {0, …, 7}, hexadezimal {0, …, 9, A, …, F} mit A = 10, B = 11, C = 12, D = 13, E = 14, F = 15 (VL02 F. 20, 24).
- **Stellenwertprinzip:** Wert = Summe aus Ziffer · Basis^Position, Position 0 ganz rechts. 235₁₀ = 2·100 + 3·10 + 5·1 = 11101011₂ (1·128 + 1·64 + 1·32 + 0·16 + 1·8 + 0·4 + 1·2 + 1·1) = 353₈ (3·64 + 5·8 + 3) = EB₁₆ (14·16 + 11) (VL02 F. 21–24).
- Wertigkeiten parat haben: 2⁰ … 2¹⁰ = 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024; 8² = 64, 8³ = 512; 16² = 256, 16³ = 4096 (über das Skript hinaus).
- **Anwendungen:** Bits (binär), CSS-Farbcodes wie `#1a0dab` (hex), Transpondercodes in der Luftfahrt wie 0036 für Polizeiflüge (oktal) (VL02 F. 20).
- **Römisches System:** kein Stellenwertsystem, keine Null, schon Addition nicht einfach abbildbar; Rechner haben nur endlich viele Darstellungen, manche Zahlen (π) nur angenähert (VL02 F. 19).

**Typische Aufgaben:**
1. Berechnen Sie den Dezimalwert von 1011 0110₂, 266₈ und B6₁₆ als Stellenwertsumme. Was fällt auf?
2. Warum kommt im Oktalsystem keine Ziffer 8 vor, und wie viele Bit braucht man für eine Hexadezimalziffer?

### T10 – Umrechnung zwischen Zahlensystemen
- **Dezimal → Basis b (Restwertmethode):** 1) Zahl ganzzahlig durch b teilen, Rest notieren; 2) mit dem Quotienten wiederholen, bis der Quotient 0 ist; 3) Reste **von unten nach oben** lesen (Tipp der Folie: gleich von rechts nach links notieren); bei b = 16 Reste 10–15 als A–F. Beispiele: 235 : 2 → Reste 1, 1, 0, 1, 0, 1, 1, 1 → 11101011₂; 235 : 8 → 3, 5, 3 → 353₈; 235 : 16 → 11 (B), 14 (E) → EB₁₆ (VL02 F. 25–27).
- **Basis b → dezimal:** Stellenwertsumme bilden (siehe T09).
- **Binär ↔ oktal/hex (Gruppenbildung):** von **rechts** in Gruppen zu 3 Bit (8 = 2³) bzw. 4 Bit (16 = 2⁴) teilen, links mit Nullen auffüllen, jede Gruppe = eine Ziffer: `011 101 011` = 353₈, `1110 1011` = EB₁₆; rückwärts jede Ziffer in 3 bzw. 4 Bit zerlegen (VL02 F. 28–29).
- **Oktal ↔ hex:** über binär gehen (3er-Gruppen auflösen, in 4er-Gruppen neu bündeln) (über das Skript hinaus).
- **Größenvergleich:** alle Zahlen ins selbe System bringen (z. B. binär per 4er-Gruppen nach hex, dann ziffernweise von links vergleichen); Folienaufgabe: E7E5₁₆, 59364₁₀, 1110 0111 1110 0110₂ (VL02 F. 33).
- **Probe:** Ergebnis per Stellenwertsumme zurückrechnen; bei binär/oktal/hex zusätzlich den anderen Weg (Restwertmethode vs. Gruppenbildung) gegenrechnen. Übungen mit Lösung: 458₁₀ = 111001010₂ = 712₈; 10010010₂ = 222₈ = 92₁₆ (VL02 F. 30); weitere Aufgaben bei serlo.org (F. 33).

**Typische Aufgaben:**
1. Rechnen Sie 347₁₀ ins Dual-, Oktal- und Hexadezimalsystem um und machen Sie die Probe.
2. Ordnen Sie der Größe nach: 3F8₁₆, 1777₈, 1017₁₀, 11 1111 1010₂.

### T11 – Binäre Addition und Überlauf
- **Regeln:** 0+0 = 0, 0+1 = 1+0 = 1, 1+1 = 0 Übertrag 1 (VL02 F. 31); mit eingehendem Übertrag 1+1+1 = 1 Übertrag 1 (über das Skript hinaus).
- **Verfahren:** 1) Zahlen rechtsbündig untereinander mit gleicher Bitbreite; 2) spaltenweise von rechts addieren, Übertrag in die nächste Spalte schreiben; 3) Übertrag aus der höchsten Stelle notieren. Beispiel 0100 0001 (65) + 0101 1010 (90) = 1001 1011 (155) (VL02 F. 31).
- 1111111 + 1111111 = 11111110: bei fester Speichergröße ginge das führende Bit verloren → **Überlauf**; „In der Programmierpraxis: Die verwendeten Datentypen definieren den verfügbaren Wertebereich“ (VL02 F. 32; Java-Typen F. 41).
- **Probe:** Summanden und Ergebnis dezimal umrechnen und vergleichen (65 + 90 = 155); bei vorzeichenlosen 8 Bit bedeutet ein Ergebnis über 255 Überlauf (über das Skript hinaus).

**Typische Aufgaben:**
1. Addieren Sie 1011 0110₂ + 0110 1101₂ mit 8 Bit (vorzeichenlos). Entsteht ein Überlauf? Machen Sie die Dezimalprobe.
2. Welchen Wertebereich hat eine vorzeichenlose 8-Bit-Zahl, und was passiert bei 1111 1111₂ + 1?

### T12 – Vorzeichen-Betrag, Einer- und Zweierkomplement
- **Vorzeichen und Betrag:** 1 Bit Vorzeichen (0 = +, 1 = −), 7 Bit Betrag; +42 = 0 0101010, −42 = 1 0101010; Wertebereich −127 … +127; sehr anschaulich, aber zwei Nullen (+0/−0) und Sonderregeln/Fallunterscheidungen beim Addieren (VL02 F. 34).
- **Einerkomplement:** jedes Bit invertieren; −42 = 1 1010101; Wertebereich −127 … +127; zwei Nullen; Übertrag aus dem höchstwertigen Bit muss zum niederwertigsten addiert werden (End-around Carry) (VL02 F. 35).
- **Zweierkomplement (Standard) – Verfahren für −x mit 8 Bit:** 1) +x mit 8 Bit schreiben (führende Nullen!); 2) alle Bits invertieren; 3) 1 addieren. −42: 0010 1010 → 1101 0101 → **1101 0110**; Wertebereich **−128 … +127**, nur eine Null; das höchste Bit hat die Wertigkeit −128 (VL02 F. 36).
- **Probe/Rückwandlung:** −128 · MSB + Summe der übrigen Stellenwerte (−128 + 64 + 16 + 4 + 2 = −42) (VL02 F. 36); alternativ erneut Zweierkomplement bilden → Betrag, oder x + (−x) = 0 bei verworfenem Übertrag (über das Skript hinaus).
- **Vorteil:** Addition und Subtraktion mit derselben Addierschaltung, keine Fallunterscheidung → technisch einfacher; Java-Ganzzahlen sind Zweierkomplement-Werte: byte 8 Bit (−128 … 127), short 16 Bit (−32.768 … 32.767), int 32 Bit, long 64 Bit (−2⁶³ … 2⁶³−1) (VL02 F. 36, 41).
- **Achtung Folienfehler:** VL02 F. 36 und RS02 F. 15 zeigen beim Zweierkomplement „−42 = 1 0101010“ (das ist Vorzeichen-Betrag); richtig ist 1 1010110 (folgt aus den beiden Schritten auf derselben Folie).

**Typische Aufgaben:**
1. Stellen Sie −37 mit 8 Bit in Vorzeichen-Betrag, Einerkomplement und Zweierkomplement dar.
2. Welchen Dezimalwert hat 1001 1100 als Zweierkomplementzahl? Begründen Sie mit den Stellenwerten.

### T13 – Rechnen im Einer- und Zweierkomplement
- **Subtraktion im Zweierkomplement:** a − b = a + (−b): 1) b ins Zweierkomplement bringen; 2) normal binär addieren; 3) Übertrag aus der höchsten Stelle **ignorieren**. Beispiel 42 − 17: 0010 1010 + 1110 1111 = (1) 0001 1001 = 25 (VL02 F. 40).
- 5-Bit-Beispiel 14 + (−9): 01110 + 10111 = (1) 00101 = +5, letzter Übertrag ignoriert; „Subtraktion im Zweier-Komplement ist identisch mit Addition“ (VL02 F. 38).
- **Einerkomplement-Addition (2 Schritte):** 1) normal addieren; 2) letzten Übertrag (ist 1, wenn die Null durchschritten wird) zum Zwischenergebnis addieren: 1011 (−4) + 0110 (+6) = (1) 0001 → + 1 → 0010 (+2); 1011 (−4) + 0011 (+3) = 1110 (−1), Übertrag 0 (VL02 F. 37).
- **Ergebnis lesen:** MSB = 0 → positiv, direkt ablesen; MSB = 1 → negativ, Betrag durch erneutes Zweierkomplement (bzw. Invertieren beim Einerkomplement) (über das Skript hinaus).
- **Probe:** Ergebnis über die Wertigkeit −128 dezimal zurückrechnen und mit der Dezimalrechnung vergleichen; Überlauf liegt vor, wenn das Ergebnis außerhalb −128 … +127 liegt, erkennbar daran, dass zwei Operanden mit gleichem Vorzeichen ein Ergebnis mit anderem Vorzeichen liefern (über das Skript hinaus).
- **Übungen der Folie:** 42, −17, −42, 0, −1 ins Zweierkomplement; 42 − 42, −42 − 17, −1 − 17 berechnen (VL02 F. 39).

**Typische Aufgaben:**
1. Berechnen Sie 25 − 58 im 8-Bit-Zweierkomplement und machen Sie die Probe.
2. Berechnen Sie (−5) + 7 im 4-Bit-Einerkomplement einschließlich End-around Carry.

### T14 – Exkurs: Shift, binäre Kommazahlen, Gleitkomma (IEEE 754)
- **Status:** als Exkurs markiert (laut VL01 F. 8 nicht prüfungsrelevant) und nicht in RS02 – die Modulbeschreibung nennt aber „Fließkommadarstellung“ (VL01 F. 4) → beim Dozenten klären.
- **Shift:** logische Verschiebung nach links (Java `<<`) = ×2 je Stelle, nach rechts (`>>`) = ÷2 ohne Rest, bei vorzeichenlosen Ganzzahlen; 23 << 1 = 46, 23 << 2 = 92; Shift-Register im Rechenwerk (VL02 F. 43–44).
- **Binäre Kommazahl:** Nachkommastellen haben die Wertigkeiten 2⁻¹ = ½, 2⁻² = ¼, 2⁻³ = ⅛ …; Verfahren: Nachkommateil fortlaufend ×2, die Stelle vor dem Komma ist das nächste Bit, bis 0 übrig bleibt: 0,375 → 0,75 (0) → 1,5 (1) → 1,0 (1) ⇒ 0,011₂; 4,375₁₀ = 100,011₂ (VL02 F. 45).
- **Gleitkomma:** Z = m · b^e (Mantisse, Basis, Exponent), z. B. 2022 = 2,022 · 10³; IEEE 754 einfache Genauigkeit 32 Bit = 1 Vorzeichen + 8 Exponent (Bias 127) + 23 Mantisse, doppelte 64 Bit = 1 + 11 (Bias 1023) + 52; normalisieren auf 1,… (Hidden Bit entfällt), Charakteristik = Exponent + Bias; 18,4 → 0 10000011 00100110011…, Ungenauigkeit durch Abschneiden der Mantisse (VL02 F. 46–48).

**Typische Aufgaben:**
1. Wandeln Sie 6,625₁₀ in eine binäre Kommazahl um.
2. Welche Werte liefern 13 << 2 und 13 >> 1 (vorzeichenlos), und warum?

### T15 – Boolesche Algebra: AND, OR, NOT und Schalter
- George Boole (Mitte 19. Jh.): nur zwei Werte, 0 = falsch (keine Spannung), 1 = wahr (Spannung); Grundlage der Digitaltechnik; Rechenregeln für Mengenlehre, Aussagenlogik und Schaltalgebra (VL02 F. 50).
- **OR** (logische Summe, Disjunktion; OR, +, ∨): wahr, wenn mindestens eine Einzelbedingung wahr ist, nur falsch, wenn alle falsch sind. **AND** (logisches Produkt, Konjunktion; AND, ·, &, ∧): wahr nur, wenn alle wahr sind. **NOT** (Negation, ¬): kehrt den Wert um (VL02 F. 51–52).
- Eine Wahrheitstabelle mit n Eingängen hat 2ⁿ Zeilen; AND liefert nur bei 1/1 eine 1, OR nur bei 0/0 eine 0 (über das Skript hinaus, Ergänzung zur Tabelle F. 51).
- **Schalter:** OR = Parallelschaltung, AND = Serien-/Reihenschaltung; in Chips übernehmen Transistoren (MOSFET) die Schalterrolle (bis 100 Mrd. Schaltvorgänge pro Sekunde; IBM 2 nm: 333 Mio. Transistoren pro mm²) (VL02 F. 53–54).

**Typische Aufgaben:**
1. Stellen Sie die Wahrheitstabellen von AND, OR und NOT auf und begründen Sie, warum AND einer Reihenschaltung entspricht.
2. Werten Sie (A ∨ B) ∧ ¬A für alle vier Belegungen aus.

### T16 – Logikgatter, NAND-Vollständigkeit, Rechengesetze und De Morgan
- **7 Gatter:** AND, OR, XOR (entweder oder, „ungleich“), NOT (Invertierung), NAND (NOT AND), NOR (NOT OR), XNOR (NOT XOR, „gleich“) (VL02 F. 56).
- **Symbole nach IEC 60617-12 (Europa):** Kasten mit `&` = AND, `≥1` = OR, `=1` = XOR, `1` = NOT; Kreis am Ausgang = Negation (NOT, NAND, NOR, XNOR); daneben US ANSI 91-1984 (runde Formen), DIN 40700 veraltet (VL02 F. 57).
- **NAND/NOR** = AND/OR mit nachgeschaltetem NOT; allein mit NAND (oder NOR) lassen sich alle Verknüpfungen bauen („vollständige Abbildung“) → Vorteile: Chipproduktion, FPGA, nur eine IC-Sorte vorhalten. NOT = NAND mit verbundenen Eingängen; AND = NAND + NAND als Inverter; OR = NAND mit vorher invertierten Eingängen (VL02 F. 58, 61).
- **Rechengesetze:** Priorität ¬ vor ∧ vor ∨; Kommutativ-, Assoziativ-, Idempotenz-, Distributivgesetz; Neutralität a∧1 = a, a∨0 = a; Extremal a∧0 = 0, a∨1 = 1; Doppelnegation; Komplementär a∧¬a = 0, a∨¬a = 1; Absorption a∨(a∧b) = a; **De Morgan: ¬(a∧b) = ¬a∨¬b, ¬(a∨b) = ¬a∧¬b** (VL02 F. 59).
- **Probe einer Substitution:** Wahrheitstabellen beider Schaltungen vergleichen oder mit De Morgan „nachrechnen“, z. B. NAND(NAND(a,b), NAND(a,b)) = ¬(¬(a∧b)) = a∧b; De Morgan dient beim Schaltungsentwurf zum Austausch von Gattertypen und zum Einsparen von Bauteilen (VL02 F. 61).

**Typische Aufgaben:**
1. Bauen Sie eine OR-Schaltung nur aus NAND-Gattern und weisen Sie die Korrektheit mit De Morgan nach.
2. Zeichnen Sie die IEC-Symbole von XOR, NAND und NOR und geben Sie ihre Wahrheitstabellen an.

### T17 – Wahrheitstabelle → boolescher Ausdruck → Schaltung
- **Zuordnungsaufgabe:** Ausdruck wählen, der genau die 1-Zeilen trifft; nur Zeile A = 1, B = 0 → **A ∧ ¬B**; nur A = 0, B = 1 → **B ∧ ¬A** (VL02 F. 62–64).
- **Standardvorgehen:** 1) Zeilen mit Out = 1 markieren; 2) pro Zeile einen Teilausdruck als UND aller Eingänge bilden – Eingang 0 negiert, Eingang 1 direkt; 3) Teilausdrücke mit ODER verbinden. Beispiel Out = 1 bei 00 und 11: (¬A ∧ ¬B) ∨ (A ∧ B) (VL02 F. 65–67).
- **Schaltung:** NOT-Gatter für negierte Eingänge, je Teilausdruck ein AND-Gatter, ein OR-Gatter sammelt alle Teilausdrücke; Kurzform erkennen: (¬A∧¬B) ∨ (A∧B) = **XNOR** (VL02 F. 68).
- **Probe:** alle 2ⁿ Belegungen in den Ausdruck einsetzen und mit der Tabelle vergleichen (über das Skript hinaus); Kontrolle auch in Python möglich: `(a and not b) or (b and not a)` = XOR, `not(a and b)` = NAND, `not(a or b)` = NOR (VL02 F. 69).

**Typische Aufgaben:**
1. Bestimmen Sie für die Tabelle mit Out = 1 genau bei (A, B) = (0, 1) und (1, 0) den Ausdruck nach dem Standardvorgehen, zeichnen Sie die Schaltung und nennen Sie das Gatter, das sie ersetzt.
2. Stellen Sie für drei Eingänge A, B, C den Ausdruck für „Out = 1, wenn mindestens zwei Eingänge 1 sind“ nach dem Standardvorgehen auf.

### T18 – Halbaddierer, Volladdierer, 4-Bit-Addierwerk (Exkurs Flipflop)
- **Halbaddierer:** bildet die Summe aus 2 Binärziffern; Tabelle A B → s c: 00 → 0 0, 01 → 1 0, 10 → 1 0, 11 → 0 1; **s = (¬A∧B) ∨ (A∧¬B) = A XOR B**, **c = A ∧ B**; aufbaubar aus Invertern, AND- und OR-Gattern (VL02 F. 70).
- **Volladdierer:** Summe aus 2 Binärziffern **unter Berücksichtigung des vorherigen Übertrags (carry_in)**; Aufbau aus 2 Halbaddierern und 1 OR-Gatter: HA1(a, b) → S, Ü; HA2(S, carry_in) → Summe, Ü; OR der beiden Überträge → carry_out (VL02 F. 70–71).
- **4-Bit-Addierwerk:** Bit 0 mit Halbaddierer, Bits 1–3 mit Volladdierern; der Übertrag wird jeweils an die nächste Stufe weitergereicht; Ausgänge a0–a3 plus a4 (Endübertrag) (VL02 F. 71; als „Nachtrag“ in RS02 F. 26).
- **Probe:** Volladdierer-Tabelle hat 8 Zeilen – Summe = 1 bei ungerader Anzahl Einsen, carry_out = 1 bei mindestens zwei Einsen (über das Skript hinaus); Ergebnis des Addierwerks mit schriftlicher Binäraddition (T11) vergleichen.
- **Exkurs Flipflop (nicht prüfungsrelevant):** Schaltung mit 2 stabilen Zuständen aus zwei rückgekoppelten NOR- bzw. NAND-Gattern, speichert 1 Bit; S = Set (Bit auf 1), R = Reset (Bit auf 0); S = R = 0 → Q bleibt; „Vorgeschichte“ = aktueller Speicherzustand; die Zustandstabelle der Folie vertauscht S und R (VL02 F. 72).

**Typische Aufgaben:**
1. Stellen Sie die Wahrheitstabelle eines Volladdierers auf und zeichnen Sie ihn aus zwei Halbaddierern und einem OR-Gatter.
2. Verfolgen Sie 0110 + 0111 durch ein 4-Bit-Addierwerk: Welche Summen- und Übertragsbits liefert jede Stufe?

### T19 – Algorithmus, Programm, Prozess
- **Algorithmus** = Handlungsvorschrift zur Lösung eines Problems oder zum Erreichen eines Ziels **in endlicher Zeit** (Rezept zum Backen eines Kuchens, schrittweises Sortieren von Zahlen) (VL02 F. 74).
- **Grafische Modellierung** (Beispiel Selection Sort): Struktogramm (erlaubt kein GOTO) und UML-Aktivitätsdiagramm (VL02 F. 74).
- **Programm** = umgesetzte Version eines Algorithmus in einer Programmiersprache oder Notation; kann mehrere zusammenarbeitende Algorithmen umfassen und endliche wie unendliche Abläufe enthalten (Serverprozesse); „Gib jede Sekunde eine um 1 erhöhte Zahl aus“ ist streng genommen kein Algorithmus (nicht endlich), aber ein Programm (VL02 F. 75).
- **Prozess** = laufendes Programm mit allen Daten, Variablenwerten und Verwaltungsinformationen des Betriebssystems (Vertiefung im 2. Semester) (VL02 F. 75).

**Typische Aufgaben:**
1. Grenzen Sie Algorithmus, Programm und Prozess voneinander ab und begründen Sie, ob ein dauerhaft laufender Webserver ein Algorithmus ist.
2. Nennen Sie zwei grafische Darstellungsformen für Algorithmen und eine Besonderheit des Struktogramms.

### T20 – Programmiersprachen: Maschinensprache, Assembler, höhere Sprachen
- Programmiersprachen formulieren Algorithmen in für Menschen verständlicher Form (Python, Java, C++); Computer führen nur binäre Maschinenbefehle aus – für Menschen praktisch unlesbar und je Prozessor verschieden (VL02 F. 76).
- **Assembler** = symbolische Namen für Maschinenbefehle (z. B. ADD) – erste Abstraktion Richtung Programmiersprache; Beispiele 6502 (`LDA`, `CLC`, `ADC`, `STA`, `BRK`), x86 (`mov`, `add`, `int 0x80`), 68000 (`MOVE.L`, `ADD.L`): Werte in **Register** laden, rechnen, Ergebnis an **symbolische Adresse** speichern (VL02 F. 76–77).
- **Höhere Sprachen:** Assembler wurde bei komplexen Programmen unübersichtlich → Programmierparadigmen → höhere Sprachen, die ein Übersetzungsprogramm (Compiler oder Interpreter) brauchen (VL02 F. 78).
- **TIOBE-Index** = Indikator der *Popularität* (Entwickler weltweit, Kurse, Anbieter, Suchmaschinen), ausdrücklich *nicht* die beste Sprache und nicht die Sprache mit den meisten Codezeilen; Sept. 2026: Python vor C, C++, Java (VL02 F. 79–80).
- **Entwicklungslinien:** Abstraktion (BASIC 1964, GOTO) → strukturierte Programmierung (Pascal 1972, Niklaus Wirth; function, procedure) → Referenzen und dynamische Datentypen (new) → Kapselung/Objektorientierung (C++, Java) → Fehlerquellen, Speichersicherheit (aktuell Rust) (VL02 F. 81–82).

**Typische Aufgaben:**
1. Erklären Sie den Unterschied zwischen Maschinensprache, Assembler und höherer Programmiersprache.
2. Was misst der TIOBE-Index, und was misst er ausdrücklich nicht?

### T21 – Syntax, Semantik, Typen, Grundkonstrukte, Variablen
- **Syntax** = korrekte Schreibweise; Verstoß meldet der Compiler (Java: fehlende `)` vor dem Semikolon → „')' expected“). **Semantik** = korrekte Bedeutung; Verstoß läuft ohne Fehlermeldung (Variablen `age`/`name` vertauscht → „My name is 32 and I am Giacomo years old“) (VL02 F. 83–85).
- **Typ-Falle:** `int z1 = 10; int z2 = 3; double res = z1 / z2;` → 3, weil int/int als Ganzzahldivision gerechnet und erst danach nach double umgewandelt wird; mit Cast `(double) z1 / z2` → 3,33… (VL02 F. 86).
- **Grundkonstrukte fast aller Sprachen:** Zuweisen/Lesen von Variablen, eigene Datentypen (struct, record), mathematische Funktionen, Schleifen (feste Anzahl oder Abbruchkriterium), logische Operatoren, bedingte Ausführung, Fehlerbehandlung (Exceptions), Unterprogramme und Funktionen, Zugriff auf das Betriebssystem (Ein-/Ausgabe, Dateisystem, Netzwerk), Bibliotheken (VL02 F. 88).
- **Variablen bei statischer Typisierung (Java):** Speicherplatz im Arbeitsspeicher mit Name und Typ; Deklaration `Typ Name;`, mit Initialisierung `Typ Name = Wert;`; lesbar erst nach einer Zuweisung; änderbar mit `Name = neuer Wert;` (VL02 F. 89).

**Typische Aufgaben:**
1. Unterscheiden Sie Syntax- und Semantikfehler an je einem eigenen Beispiel; welcher wird vom Compiler gemeldet?
2. Was liefert in Java `int a = 7; int b = 2; double r = a / b;`, und wie korrigiert man das?

### T22 – Werkzeuge: Modellieren, Compiler, Interpreter
- **Werkzeuge der Softwareentwicklung:** Modellieren (Realitätsausschnitt abbilden, grafisch z. B. UML oder mathematisch exakt), Programmieren (spezifizierte Abläufe in einer Sprache umsetzen), Compilieren, Interpretieren (VL02 F. 91).
- **Modellierung:** umgangssprachliche Sachverhalte mathematisch/formal; Software über Diagramme, Architekturmodelle, Ablaufpläne oder Datenstrukturen (Stapel, Liste, Baum, Graph); Quelltext-Generator erzeugt Code-Rahmen aus dem Modell (VL02 F. 92).
- **Compilieren** = jeder Befehl wird vorab in Maschinenbefehle für eine konkrete Hardware übersetzt → schwer lesbares, prozessorspezifisches Maschinenprogramm. **Interpretieren** = Übersetzung erst zur Laufzeit mit direkter Ausführung; Optimierung durch Vorübersetzung in maschinenunabhängigen **Bytecode** (Java, Python) (VL02 F. 91).
- **Compiler-Phasen:** Quellprogramm → **Scanner** (lexikalische Analyse → Folge von Grundsymbolen) → **Parser** (syntaktische Analyse → Struktur-/Syntaxbaum) → **semantische Analyse** (attributierter Syntaxbaum) und maschinenabhängige Optimierung → **Codeerzeugung** und -optimierung → Programm in Maschinensprache (VL02 F. 93).

**Typische Aufgaben:**
1. Nennen Sie die Phasen eines Compilers in der richtigen Reihenfolge mit dem jeweiligen Zwischenergebnis.
2. Vergleichen Sie Compiler und Interpreter hinsichtlich Zeitpunkt der Übersetzung, Hardwarebindung und Bytecode.

### T23 – Linker, Lader, Debugger, IDE
- **Linker:** Programme bestehen aus Modulen, die getrennt (von verschiedenen Entwicklern, zu verschiedenen Zeiten) compiliert werden; Compiler → Assembler-Programm → Assembler → verschiebbarer Maschinencode (Objektdatei, Referenzen noch nicht aufgelöst); der Linker verbindet die Objektdateien zu ausführbarem Maschinencode (VL02 F. 94).
- **Statisches Linken:** alle benötigten Funktionen (insb. Bibliotheken) werden zusammengebunden → Vorhandensein sichergestellt (sonst Fehler beim Linken), aber große, monolithische Datei. **Dynamisches Linken:** Funktion wird erst beim Aufruf zur Laufzeit identifiziert (DLLs, Shared Libraries) → gemeinsame Speichernutzung, Austauschbarkeit; aber Programmabbruch, wenn die Funktion fehlt (VL02 F. 95).
- **Lader (Loader):** lädt den Maschinencode an eine beliebige Stelle im Arbeitsspeicher, z. B. 0x4000, und addiert diesen Offset zu allen Adressen im Programm; nach dem Rechnerstart wird der Lader selbst an fest vorgegebene Adressen geladen (**Bootstrap**) (VL02 F. 96).
- **Debugger** (Qualitätssicherung; „Bug“ = Käfer aus der Röhrenrechnerzeit): Programm schrittweise durchlaufen und Zustand prüfen (Arbeitsspeicher, Register, Variablen, Quelltext, Assemblercode); **Run** (starten), **Step** (nächste Anweisung im Assemblerprogramm), **Next** (nächste Anweisung im Programm), **Cont** (bis zum nächsten Haltepunkt), **Undo** (letzte Steueranweisung zurücknehmen). **IDE** (z. B. Eclipse) vereint Editor, Compiler und Debugger (VL02 F. 97–98).

**Typische Aufgaben:**
1. Vergleichen Sie statisches und dynamisches Linken mit je einem Vor- und Nachteil.
2. Ein Programm wird an Adresse 0x2000 geladen. Was macht der Lader mit der Programmadresse 0x0010, und was bedeutet Bootstrap?

### T24 – Datentypen und einfache Strukturen: String, Struktur, Array, Tabelle
- **Elementare (primitive) Datentypen:** boolean; numerisch: Ganzzahl (byte, short, int, long, char), Gleitkomma (float, double) – **Datenstrukturen (nicht primitiv):** Class, Array, Interface, String (VL02 F. 100).
- **Datenstrukturen** = strukturierte Ablage im Hauptspeicher: mehrere (auch verschiedenartige) Daten gemeinsam adressiert, schachtelbar, vom Anwendungskontext abhängig; sie beruhen auf wenigen elementaren Typen (z. B. 32-Bit-Ganzzahl, 1 Zeichen = 1 Byte). Java: byte 1 Byte, short 2, int 4, long 8, float 4, double 8, boolean 1 Bit, char 2 Byte (Unicode) (VL02 F. 101–102).
- **String** = Folge von Char-Werten; Operationen: vergleichen, Zeichen anfügen, Teile auslesen. **Selbstdefinierte Struktur „Kunde“:** ID (Int), Name (String), Umsatz/Jahr (Float) – „flach“ wie in relationalen Datenbanken; hierarchische Strukturen (Produktkatalog) sind komplexer (VL02 F. 103–104).
- **Array:** älteste Struktur; Elemente unter fortlaufendem Index (ab 0) direkt ansprechbar, mehrdimensional möglich, **feste Länge**. Vorteile: einfach, effizienter Direktzugriff über den Index; Nachteile: Länge nicht direkt änderbar, Einfügen/Entfernen nur durch Umkopieren und Verschieben „simulierbar“ (VL02 F. 105–106).
- **Tabelle (Vorgriff auf SQL)** = Struktur + Array/Liste; eine Spalte mit **eindeutigem Schlüssel** (Kundennummer); SQL (1970): Data Definition (Schema), Data Manipulation (ändern, einfügen, löschen), Data Query (Abfrage und Aufbereitung); Beziehungen zwischen Tabellen (Relationen) per ER-Diagramm; Speicherung in einem Datenbankserver(-Prozess) (VL02 F. 107).

**Typische Aufgaben:**
1. Nennen Sie je zwei Vor- und Nachteile eines Arrays und begründen Sie sie.
2. Entwerfen Sie eine Struktur „Artikel“ mit passenden elementaren Datentypen und erklären Sie, was daraus eine Tabelle mit Schlüssel macht.

### T25 – Einfach und doppelt verkettete Listen
- **Einfach verkettete Liste:** nicht zwingend ein Index; bekannt ist nur die Position des 1. Elements (Kopf); weitere Elemente beliebig im Speicher verstreut; jedes Element kennt nur seinen **Nachfolger** (next); neue Elemente dynamisch anlegen und einketten (VL02 F. 109).
- **Operationen** Suchen, Einfügen, Löschen; Nachteil: Lesezugriff durch Suche ab dem Startelement ineffizient; Vorteile: Einfügen/Löschen ohne Kopieren anderer Daten, Länge frei veränderlich (VL02 F. 110).
- **Einfügen:** neues Element anlegen → dessen next auf den künftigen Nachfolger setzen → next des Vorgängers auf das neue Element umhängen (VL02 F. 111). **Löschen:** 1) zu löschendes Element suchen (Vorgänger merken); 2) Zeiger im Vorgänger auf den Nachfolger umsetzen (VL02 F. 112).
- **Doppelt verkettete Liste:** jedes Element kennt Vorgänger (prev) **und** Nachfolger (next) → beim Löschen eines bekannten Elements muss der Vorgänger nicht erst durch Durchlaufen gesucht werden (VL02 F. 113).

**Typische Aufgaben:**
1. Skizzieren Sie das Einfügen von „Berta“ zwischen „Anna“ und „Carl“ in einer einfach verketteten Liste und nummerieren Sie die Zeigeränderungen.
2. Vergleichen Sie Array und verkettete Liste beim Direktzugriff und beim Einfügen in der Mitte.

### T26 – Stack (LIFO) und Queue (FIFO)
- **Stack (Stapel):** spezielle Liste ohne freien Zugriff, Prinzip **LIFO**; push() legt ein Element oben auf, pop() nimmt das oberste weg, top() liest das oberste, ohne es zu entfernen; Fehlerfall: pop()/top() auf leerem Stapel (VL02 F. 115). Beispiel: push(5), push(3), push(−1), top() → −1, pop() → oben 3 (VL02 F. 116).
- **Realisierung Stack:** als Array mit Index auf das oberste Element (push: Index +1, dann speichern; pop: lesen, dann Index −1) oder als verkettete Liste (oberstes Element = 1. Listenelement) (VL02 F. 117).
- **Queue (Warteschlange):** Prinzip **FIFO**; put() fügt am Ende ein, get() entnimmt am Anfang; Fehlerfall: get() auf leerer Queue (VL02 F. 118). Beispiel: put(6), put(2), put(8), put(3), get() → 6 (VL02 F. 119).
- **Realisierung Queue:** Ringpuffer im Array mit zwei Indizes (Anfang, Ende), am Arrayende wird vorne weitergemacht; oder doppelt verkettete Liste (VL02 F. 120).
- **Probe bei Operationsfolgen:** nach jedem Schritt den kompletten Inhalt notieren und „oben“ bzw. „Anfang/Ende“ markieren; Rückgabewerte von pop/top/get getrennt notieren (über das Skript hinaus).

**Typische Aufgaben:**
1. Geben Sie den Stack-Inhalt nach push(4), push(9), pop(), push(2), top(), push(7), pop() an sowie den Rückgabewert von top().
2. Welche Werte entnimmt get() bei put(4), put(9), get(), put(2), put(7), get(), und was bleibt in der Queue?

### T27 – Bäume: Begriffe und Eigenschaften
- **Baum** = zweidimensionale Erweiterung verketteter Listen; nicht-leere Menge von **Knoten** (Objekt mit Namen und Informationen) und **Kanten** (Verbindung zweier Knoten); **Pfad** = Folge unterschiedlicher, durch Kanten verbundener Knoten; **Wurzel** = Ursprung des Baums (VL02 F. 122).
- Jeder Knoten außer der Wurzel hat **genau einen Vorgänger** und 0 bis n Nachfolger; **Blätter** (End-/äußere Knoten) haben keine Nachfolger, **innere Knoten** mindestens einen; jeder Knoten ist Wurzel eines **Unterbaums** (VL02 F. 123–124).
- **Ebene** eines Knotens = Anzahl Kanten auf dem Pfad von der Wurzel (Wurzel = Ebene 0); **Höhe** = höchste Ebenennummer; **Pfadlänge** = Summe der Ebenen aller Knoten; **Wald** = Menge von Bäumen; **n-ärer Baum** = Knoten dürfen nur eine bestimmte Anzahl Nachfolger haben (VL02 F. 124).
- **Beispiel:** Baum mit 12 Knoten auf Ebene 0–3 → Höhe 3, Pfadlänge 3·1 + 4·2 + 4·3 = 23; daneben ein Wald aus drei Bäumen (die Unterbäume unter der Wurzel) (VL02 F. 125).
- **Probe Pfadlänge:** Knoten je Ebene zählen, Anzahl × Ebenennummer aufsummieren; Gesamtzahl der Knoten muss stimmen (über das Skript hinaus).

**Typische Aufgaben:**
1. Baum: Wurzel A mit Kindern B und C; B hat D und E; C hat F; F hat G. Bestimmen Sie Blätter, innere Knoten, Höhe und Pfadlänge.
2. Erklären Sie die Begriffe Wald und n-ärer Baum und ordnen Sie den Binärbaum ein.

### T28 – Geordnete Binärbäume: Aufbau, Löschen, voll/vollständig/balanciert
- **Binärbaum:** einfachster n-ärer Baum; die Nachfolger eines inneren Knotens sind der „linke“ und der „rechte“ (höchstens zwei); **geordnet**, wenn jeder Knoten größer als sein linker und kleiner als sein rechter Nachfolger ist (kleinere Elemente im linken, größere im rechten Teilbaum); Suche braucht höchstens so viele Schritte, wie der Baum Ebenen hat; vereint Vorteile von Array (schnelles Finden) und Liste (leichtes Einfügen/Entfernen) (VL02 F. 126–127, 129).
- **Einfügen:** an der Wurzel beginnen, kleiner → links, größer → rechts, bis ein freier Platz erreicht ist; die Einfügereihenfolge bestimmt die Form (Beispiel 7, 13, 11, 5, 14, 2) (VL02 F. 130).
- **Löschen:** Knoten mit zwei Nachfolgern wird ersetzt durch den **größten Knoten im linken** oder den **kleinsten Knoten im rechten Teilbaum** (Lösung A/B) (VL02 F. 131); Blatt einfach entfernen, Knoten mit einem Kind durch dieses Kind ersetzen (über das Skript hinaus).
- **Begriffe:** voll = keine „Halbblätter“ (alle inneren Knoten haben zwei Nachfolger); vollständig = voll und Blätter nur auf der letzten Ebene; balanciert = alle Blätter auf der letzten oder vorletzten Ebene, Tiefe bei n Knoten log₂(n+1); degeneriert = Knoten haben nur einen Nachfolger, Suche muss den ganzen Baum durchlaufen (Worst Case) (VL02 F. 126, 128, 132).
- **Probe:** an jedem Knoten prüfen, dass alles links kleiner und alles rechts größer ist; Knotenzahl = Anzahl der Werte; Inorder-Durchlauf (links – Knoten – rechts) muss die sortierte Folge ergeben (über das Skript hinaus).
- **Folienaufgabe:** Baum aus [26, 5, 18, 16, 1, 43, 39, 27, 12] bilden, 18 löschen, vollständig? voll? 26 und danach 12 löschen, wieder prüfen; Was ist ein degenerierter Binärbaum? (VL02 F. 133 = RS02 F. 49; Lösungsskizze in Notiz 02).

**Typische Aufgaben:**
1. Bauen Sie aus [40, 22, 61, 10, 30, 50, 75, 27, 35] einen geordneten Binärbaum. Ist er voll, ist er vollständig? Löschen Sie 22 nach beiden Ersetzungsregeln.
2. Fügen Sie [1, 2, 3, 4, 5] in dieser Reihenfolge ein. Wie heißt die entstehende Form, und wie viele Vergleiche braucht die Suche nach 5?

### T29 – Lineare und binäre Suche
- **Meistgenutzte Algorithmen:** Sortieren (Mergesort, Quicksort, naiv Bubblesort), Suchen (linear, binär), Graphen/kürzeste Wege (A* für Navigation, Robotik), in RS02 zusätzlich Klassifikation/Machine Learning/Data Mining (VL02 F. 135; RS02 F. 51).
- **Lineare Suche:** ALLE Elemente nacheinander anspringen und mit dem Suchkriterium vergleichen; geeignet für **unsortierte** Arrays/Listen; Aufwand steigt linear: **O(n)** (VL02 F. 136).
- **Binäre Suche – Verfahren:** Voraussetzung: Daten **sortiert**. 1) mittleres Element prüfen; 2) gesuchter Wert kleiner → in der linken Hälfte weitersuchen, größer → in der rechten; 3) wiederholen, bis gefunden oder Bereich leer; Aufwand auf die Anzahl der Halbierungen begrenzt: **O(log n)** (VL02 F. 136).
- **Beispiel** [10, 19, 23, 25, 36, 61, 79, 81, 99]: 61 → 36 (61 > 36, rechts) → 79 (61 < 79, links) → 61 gefunden; 19 → 36 → 23 → 19 (VL02 F. 136–137). Bei gerader Bereichsgröße gibt es zwei Mitten – Konvention angeben (die Folie ist hier uneinheitlich).
- **Probe:** Schrittzahl höchstens ⌊log₂ n⌋ + 1 (bei 9 Elementen max. 4); jede Richtungsentscheidung mit „<“ bzw. „>“ begründen (über das Skript hinaus).

**Typische Aufgaben:**
1. Suchen Sie binär nach 47 in [3, 8, 15, 21, 29, 34, 47, 52, 66, 70, 88] (Mitte abrunden) und notieren Sie die geprüften Elemente; wie viele Vergleiche bräuchte die lineare Suche?
2. Begründen Sie, warum binäre Suche auf unsortierten Daten scheitert, und schätzen Sie die maximale Schrittzahl für 1.000 Elemente.

### T30 – Komplexität: O-Notation
- **Zweck:** asymptotische Laufzeit eines Algorithmus in Bezug auf die Eingabegröße – wie „skaliert“ er bei wachsender Zahl zu bearbeitender Elemente (VL02 F. 138, als Exkurs markiert).
- **Klassen mit Vorlesungsbeispielen:** O(1) konstant – Addition von 10 Zahlen; O(log n) logarithmisch – binäre Suche im sortierten Array; O(n) linear – Suche in unsortierter Liste, Skalarprodukt; O(n log n) – Merge Sort; O(n²) quadratisch – Bubble Sort („jedes mit jedem vergleichen“), Multiplikation zweier Matrizen, Party „alle stoßen miteinander an“: n·(n−1)/2 (VL02 F. 136, 138–140).
- **Wachstumsreihenfolge:** O(1) < O(log n) < O(n) < O(n log n) < O(n²); bei Verdopplung von n: O(1) gleich, O(log n) ein Schritt mehr, O(n) doppelt, O(n²) vierfach (über das Skript hinaus).
- **Exkurs KI-Rechenzentren:** Matrixmultiplikation (Training und Inferenz), Matrix-/Vektoroperationen, Faltung (CNN, Bildverarbeitung), Attention (LLMs/GPT), Softmax (Mehrklassen-Klassifikation), Sigmoid (binäre Klassifikation) (VL02 F. 141).
- **Probe:** Wertetabelle für n = 10, 100, 1000 aufstellen und die Klassen vergleichen (über das Skript hinaus).

**Typische Aufgaben:**
1. Ordnen Sie O(n²), O(1), O(n log n), O(log n), O(n) nach Wachstum und nennen Sie je ein Beispiel aus der Vorlesung.
2. Auf einer Feier mit 30 Gästen stößt jeder mit jedem an. Wie oft klirrt es, und welcher Komplexitätsklasse entspricht das?

### T31 – Bubble Sort und Merge Sort
- **Bubble Sort:** je 2 benachbarte Elemente vergleichen und ggf. gemäß Sortierkriterium tauschen; am Ende des 1. Durchlaufs steht das **größte Element am Ende**; laut Folie so viele Durchläufe wie Elemente; Aufwand **O(n²)**. Beispiel 1. Durchlauf: 6 5 3 1 8 7 2 4 → 5 3 1 6 7 2 4 8 (VL02 F. 139).
- **Ablauf Bubble Sort:** 1) von links paarweise vergleichen; 2) links > rechts → tauschen; 3) bis zum Ende des unsortierten Teils; 4) unsortierten Teil um 1 verkürzen und wiederholen, bis kein Tausch mehr nötig ist (über das Skript hinaus).
- **Merge Sort:** Array in 2 Hälften teilen, beide Hälften jede für sich sortieren (**Rekursion**), dann die sortierten Hälften zusammenführen („Merge“: jeweils das kleinere der beiden vorderen Elemente übernehmen); Aufwand **O(n log n)**. Beispiel 5 0 2 6 7 1 8 3 → Teilen bis zu Einzelelementen → 05 26 17 38 → 0256 1378 → 01235678 (VL02 F. 140).
- **Probe:** nach jedem Bubble-Durchlauf steht das größte Element des unsortierten Teils ganz rechts; bei Merge Sort enthält jede Ebene alle n Elemente und jede gemischte Teilliste ist sortiert; am Ende aufsteigend sortiert, gleiche Elementanzahl (über das Skript hinaus).

**Typische Aufgaben:**
1. Führen Sie Bubble Sort auf [7, 3, 9, 1, 5] durch und notieren Sie das Array nach jedem Durchlauf.
2. Sortieren Sie [6, 2, 9, 4, 1, 8, 3, 7] mit Merge Sort und zeichnen Sie die Teilen- und Mischen-Ebenen.

### T32 – Textkodierung: ASCII, ISO 8859-1, Zeichenketten
- Für Texte werden Zeichen (Groß-/Kleinbuchstaben, Satzzeichen, Sonderzeichen wie +, %, &, $) und Steuerzeichen (Leerzeichen SP, Wagenrücklauf CR, Tabulator TAB) in Bitfolgen kodiert; populärste Kodierung: ASCII (American Standard Code for Information Interchange) (VL02 F. 143).
- **ASCII:** 7-Bit-Code → 2⁷ = **128 Zeichen**: 33 nicht druckbare, 95 druckbare (beginnend mit dem Leerzeichen); Standard seit 1963, letzte Aktualisierung 1968; das **8. Bit** diente als **Paritätsbit** (0, wenn die Anzahl der Einsen in den übrigen 7 Bit gerade ist, sonst 1), heute fast immer für 8-Bit-Erweiterungen genutzt (VL02 F. 144).
- **ASCII-Tabelle (Dec/Hex/Oct):** Ankerwerte merken: Leerzeichen 32 = 0x20, „0“ = 48 = 0x30, „A“ = 65 = 0x41, „a“ = 97 = 0x61; Kleinbuchstabe = Großbuchstabe + 32 (VL02 F. 145).
- **8-Bit-Erweiterungen** (2⁸ = 256 Zeichen), mit ASCII weitgehend kompatibel (ASCII-Zeichen behalten ihre Bitmuster); z. B. **ISO 8859-1 (Latin 1)** mit Umlauten und Sonderzeichen (ä = 0xE4, ß = 0xDF) (VL02 F. 146–147).
- **Zeichenkette kodieren:** Zeichen für Zeichen (auch das Leerzeichen) durch die Tabellennummer ersetzen → hexadezimal (zwei Ziffern pro Zeichen) → binär (8 Bit pro Zeichen). „Vorlesung Netzwerke.“ → 086 111 114 108 … → 56 6F 72 6C … → 01010110 01101111 … (VL02 F. 150).
- **Probe:** Hex ↔ binär über 4er-Gruppen gegenprüfen (0x56 = 0101 0110 = 86); Anzahl der Bytes = Anzahl der Zeichen (über das Skript hinaus).

**Typische Aufgaben:**
1. Kodieren Sie „Bit!“ in ASCII dezimal, hexadezimal und binär.
2. Bestimmen Sie nach der Regel der Folie das Paritätsbit für die ASCII-Zeichen „C“ und „D“.

### T33 – Unicode und UTF-8
- **Unicode:** soll jedes Schriftzeichen aller bekannten Schriftkulturen und Zeichensysteme enthalten; Ziel: keine unterschiedlichen, inkompatiblen Länderkodierungen; 1.114.112 Codepunkte möglich, über 100.000 belegt, wird ständig erweitert; Standards UTF-2, UTF-7, UTF-8, UTF-16; international standardisiert (Folie: „ISO-Norm 10636“, korrekt ISO/IEC 10646) (VL02 F. 148).
- **UTF-8** (am populärsten) = Mehrbyte-Kodierung: die ersten 128 Zeichen mit 1 Byte, **identisch mit ASCII**; alle anderen 2 bis 4 Byte (historisch bis 6) (VL02 F. 148).
- **Bytemuster:** 1 Byte `0xxxxxxx` (7 Nutzbits) · 2 Byte `110xxxxx 10xxxxxx` (11) · 3 Byte `1110xxxx 10xxxxxx 10xxxxxx` (16) · 4 Byte `11110xxx 10xxxxxx 10xxxxxx 10xxxxxx` (21); Regel: Byte mit 0 vorne = 7-Bit-ASCII-Zeichen; bei n ≥ 2 Byte beginnt das erste Byte mit n Einsen, jedes der n−1 Folgebytes mit 10 (VL02 F. 149).
- **Kodieren – Verfahren:** 1) Codepunkt binär schreiben; 2) benötigte Bitzahl → Bytelänge wählen (≤ 7 → 1, ≤ 11 → 2, ≤ 16 → 3, ≤ 21 → 4); 3) Bits von rechts in die x-Stellen füllen, links mit 0 auffüllen. Beispiel ä = U+00E4 = 000 1110 0100 → **11000011 10100100** = C3 A4 (über das Skript hinaus; Codepunkt wie Latin-1-Wert aus F. 147, da die ersten 256 Unicode-Codepunkte Latin 1 entsprechen).
- **Probe/Dekodieren:** führende Einsen des ersten Bytes zählen = Bytelänge; jedes Folgebyte muss mit 10 beginnen; Präfixe entfernen, Nutzbits zusammensetzen → Codepunkt. Speicherbedarf eines Textes: ASCII-Zeichen 1 Byte, Umlaute und ß 2 Byte (über das Skript hinaus).

**Typische Aufgaben:**
1. Wie viele Byte belegt „Größe“ in UTF-8? Begründen Sie mit der Byte-Regel.
2. Kodieren Sie „é“ (U+00E9) in UTF-8 als Bitmuster und hexadezimal und machen Sie die Probe durch Dekodieren.

### T34 – Von-Neumann- und Harvard-Architektur (Material folgt)
- **Termin 16.10.:** „Rechnerarchitektur – Von-Neumann Architektur – Komponenten eines Rechnersystems → ggf. Präsentationen“ (VL01 F. 5); Ausblick VL02: „Rechnerarchitekturen (Von-Neumann-Architektur, Harvard-Architektur), Komponenten eines Rechnersystems“ (VL02 F. 152).
- **Modulbeschreibung:** Komponenten eines Rechnersystems, Von-Neumann-Architektur, Interrupts, Asynchronität, Ereignissteuerung, Memory Management (HW), parallele Architekturen (VL01 F. 4).
- **Vermuteter Inhalt (Lehrbuchwissen, noch nicht im Material):** Von-Neumann-Rechner = Steuerwerk und Rechenwerk (CPU), ein gemeinsamer Speicher für Programm **und** Daten, Ein-/Ausgabe, Bussystem; Befehlszyklus (holen – dekodieren – ausführen); Von-Neumann-Flaschenhals; Harvard-Architektur = getrennte Speicher und Busse für Befehle und Daten.
- **Bezug zum bisherigen Stoff:** Rechenwerk ↔ Addierwerk aus Volladdierern (T18), Register (T20), Flipflop als 1-Bit-Speicher (T08, T18), Lader und Adressen (T23).

**Typische Aufgaben (vermutet):**
1. Skizzieren Sie die Von-Neumann-Architektur und beschriften Sie die Komponenten.
2. Vergleichen Sie Von-Neumann- und Harvard-Architektur.

### T35 – Komponenten eines Rechnersystems, Interrupts, Speicherverwaltung (Material folgt)
- **Vermutete Inhalte laut Modulbeschreibung:** Komponenten eines Rechnersystems, Interrupts, Asynchronität, Ereignissteuerung, Memory Management (HW), parallele Architekturen (VL01 F. 4).
- Laut Agenda „ggf. Präsentationen“ zu den Komponenten (VL01 F. 5) – möglicherweise Vorträge der Studierenden; Prüfungsrelevanz offen.
- **Vermutet (Lehrbuchwissen):** CPU, Arbeitsspeicher (RAM), Massenspeicher, Bus, Ein-/Ausgabegeräte; Interrupt = Unterbrechungssignal, mit dem ein Ereignis die CPU zur Reaktion veranlasst; Speicherverwaltung durch Hardware; Mehrkern-CPUs und GPU-Cluster als parallele Architekturen (vgl. VL01 F. 54).

**Typische Aufgaben (vermutet):**
1. Erklären Sie, was ein Interrupt ist und warum er ereignisgesteuerte Verarbeitung ermöglicht.
2. Nennen Sie fünf Komponenten eines Rechnersystems mit ihrer Aufgabe.

### T36 – Relationale Datenbanken: Historie und Grundbegriffe (Material folgt)
- **Termin 19.10.:** „Einführung (relationale) Datenbanken – Historie – Grundlegende Begriffe, SQL“ (VL01 F. 5; ohne „SQL“ in VL01 F. 71, VL02 F. 2 und 160).
- **Vorgriff in VL02:** flache Struktur „Kunde“ entspricht der Speicherung in relationalen Datenbanken (VL02 F. 104); Tabelle = Struktur + Array/Liste mit eindeutigem Schlüssel (Kundennummer), Relationen und Beziehungen per ER-Diagramm, Datenbankserver(-Prozess) (VL02 F. 107; RS02 F. 33, 36).
- **Vermutet:** Relation/Tabelle, Tupel/Datensatz, Attribut/Spalte, Primär- und Fremdschlüssel, Entity-Relationship-Modell, Historie des relationalen Modells.

**Typische Aufgaben (vermutet):**
1. Erklären Sie Tabelle, Datensatz, Attribut und Schlüssel am Beispiel einer Kundentabelle.
2. Was stellt ein ER-Diagramm dar? Skizzieren Sie Kunde – Auftrag.

### T37 – SQL-Grundlagen (Material folgt)
- **SQL** (Structured Query Language, laut Folie 1970), eigenständig oder eingebettet in andere Sprachen nutzbar: **Data Definition** (Datenbankschema: Datenstruktur + ggf. Schlüsselfelder), **Data Manipulation** (Datensätze ändern, einfügen, löschen), **Data Query** (Abfrage und Aufbereitung der gesuchten Information) (VL02 F. 107).
- **Vermutet:** CREATE TABLE (Definition), INSERT/UPDATE/DELETE (Manipulation), SELECT … FROM … WHERE (Abfrage).
- „Dies ist KEIN Programmierkurs“ (VL01 F. 8) → eher Begriffe und einfache Abfragen als umfangreiche SQL-Syntax (Einschätzung).

**Typische Aufgaben (vermutet):**
1. Ordnen Sie zu: Tabelle anlegen, Datensatz ändern, alle Kunden mit Umsatz über 10.000 anzeigen → Data Definition, Data Manipulation oder Data Query?
2. Formulieren Sie eine einfache SELECT-Abfrage auf eine Kundentabelle (falls am 19.10. behandelt).

### T38 – Wiederholung und Klausurvorbereitung (Material folgt)
- **Termin 21.10.:** „Wdh, Klausurvorbereitung“ (VL01 F. 7; Agenda VL01 F. 5, VL02 F. 160).
- **Erwartet:** Hinweise zu Aufgabentypen, Hilfsmitteln (Taschenrechner?), Punkten, ggf. Probeaufgaben → sofort festhalten und diesen Plan (Relevanz, Minuten) anpassen.
- **Bisher bekannt:** exakt 48 Minuten; kein Programmierkurs; historische Bezüge und Exkurse nicht prüfungsrelevant (VL01 F. 7–8).

**Typische Aufgaben:**
1. Gemischte Probeklausur in 48 Minuten: je eine Aufgabe zu Umrechnung, Zweierkomplement, Wahrheitstabelle → Schaltung, Binärbaum und UTF-8.
2. Blurting: alle O-Klassen, Datenstrukturen und Kodierungen aus dem Gedächtnis aufschreiben und danach mit diesem Plan abgleichen.

## Typische Klausurfallen

**Zahlensysteme und Addition**
- Restwertmethode: Reste von unten nach oben lesen (bzw. gleich von rechts nach links notieren) – sonst steht die Zahl gespiegelt da.
- Gruppenbildung immer rechts beim niederwertigsten Bit beginnen und links mit Nullen auffüllen; 3 Bit für oktal, 4 Bit für hex nicht verwechseln.
- Hex-Reste 10–15 als Buchstaben schreiben (14 → E), nicht als zweistellige „14“.
- Die Stellenwerte beginnen rechts mit Exponent 0 (2⁰ = 1).
- Binäraddition: 1 + 1 + 1 = 1 Übertrag 1 wird gern vergessen.
- KB = 1024 Byte laut Folie (VL02 F. 17), nicht 1000.

**Negative Zahlen**
- Zweierkomplement = invertieren **und +1**; nur invertieren ergibt das Einerkomplement.
- Feste Bitbreite beachten: die positive Zahl vorher mit führenden Nullen auf 8 Bit bringen, sonst stimmt das Vorzeichenbit nicht.
- Positive Zahlen sehen in Vorzeichen-Betrag, Einer- und Zweierkomplement gleich aus – nur negative Zahlen umwandeln.
- Zweierkomplement: Übertrag aus dem MSB ignorieren; Einerkomplement: Übertrag zum LSB addieren (End-around Carry).
- Wertebereich 2K −128 … +127 (eine Null) vs. Vorzeichen-Betrag/1K −127 … +127 (zwei Nullen).
- Den Folienfehler nicht abschreiben: VL02 F. 36 / RS02 F. 15 „−42 = 1 0101010“ ist Vorzeichen-Betrag; im 2K gilt −42 = 1101 0110.
- Ignorierter Übertrag ≠ Überlauf: Überlauf heißt, das Ergebnis verlässt den Wertebereich (z. B. 100 + 100 mit 8 Bit) (über das Skript hinaus).

**Logik und Schaltungen**
- OR ist auch bei 1/1 wahr; „entweder oder“ ist XOR. XOR = „ungleich“, XNOR = „gleich“.
- IEC-Symbole: `≥1` = OR, `=1` = XOR, `&` = AND, `1` = NOT; der Kreis am Ausgang bedeutet Negation.
- De Morgan: beim Negieren wechselt ∧ ↔ ∨ **und** jede Variable wird negiert; ¬(a ∧ b) ist nicht ¬a ∧ ¬b.
- Priorität ¬ vor ∧ vor ∨ – im Zweifel Klammern setzen.
- Standardvorgehen: Teilausdrücke nur aus Zeilen mit Out = 1, Eingang mit 0 wird negiert, Teilausdrücke mit ∨ (nicht ∧) verbinden.
- Halbaddierer: Summe = XOR (nicht OR), Übertrag = AND; Volladdierer = 2 Halbaddierer + **OR**.

**Programmierung und Werkzeuge**
- Ein Algorithmus muss endlich sein; eine Endlosschleife ist ein Programm, aber kein Algorithmus.
- Semantikfehler meldet der Compiler nicht; int/int ist in Java Ganzzahldivision (10 / 3 = 3).
- Debugger: Step = nächste Assembler-Anweisung, Next = nächste Programmanweisung.
- Statisches Linken: groß, aber vollständig; dynamisches: klein und austauschbar, aber Abbruchgefahr zur Laufzeit – Vor- und Nachteile nicht vertauschen.
- Compiler-Reihenfolge: Scanner (lexikalisch) → Parser (syntaktisch) → semantische Analyse → Codeerzeugung.

**Datenstrukturen, Bäume, Algorithmen**
- Stack LIFO (push/pop/top), Queue FIFO (put/get); top() entfernt nichts.
- Einfach verkettete Liste: Löschen braucht den Vorgänger (Suche); erst die doppelt verkettete Liste spart das.
- Ebene zählt Kanten (Wurzel = Ebene 0); Höhe = höchste Ebene; Pfadlänge = Summe der Ebenen **aller** Knoten.
- voll ≠ vollständig: voll = keine Halbblätter; vollständig = zusätzlich alle Blätter auf der letzten Ebene (Definitionen aus VL02 F. 126/128 verwenden; F. 132 ist hier ungenau).
- Löschen mit zwei Kindern: größter Knoten im **linken** oder kleinster im **rechten** Teilbaum.
- Binäre Suche nur auf sortierten Daten; bei zwei möglichen Mitten die Konvention angeben.
- Bubble Sort schiebt das **größte** Element nach hinten; O(n²) vs. Merge Sort O(n log n); lineare Suche O(n) vs. binäre O(log n).

**Kodierung**
- ASCII ist ein 7-Bit-Code (128 Zeichen); 256 Zeichen erst mit 8-Bit-Erweiterungen wie ISO 8859-1.
- Unicode = Zeichensatz (Codepunkte), UTF-8 = Kodierung mit 1–4 Byte.
- UTF-8-Folgebytes beginnen mit **10**; das erste Byte mit n Einsen und einer 0; Nutzbits von rechts auffüllen.
- Das Leerzeichen ist ein Zeichen (32 = 0x20) und zählt beim Kodieren von Zeichenketten mit.
- ASCII-Jahreszahlen: 1958 (VL01 F. 64/67, ANSI-Übernahme 1963) vs. „Standard seit 1963, letzte Aktualisierung 1968“ (VL02 F. 144).

**Teil I (VL01)**
- Phasen der Digitalisierung (ökonomisch, Österle/Fleisch/Alt) ≠ Epochen der IT-Infrastruktur (technisch) – die Folie warnt ausdrücklich davor (VL01 F. 25).
- Moore 1965: jährliche Verdopplung, später alle 2 Jahre; die „18 Monate“ sind Interpretationen, die nicht von Moore stammen.
- Metcalfe: n·(n−1) Verbindungen (die Folie sagt „exponentiell“, die Formel ist quadratisch); das Anstoß-Beispiel der O-Notation ist n·(n−1)/2.
- Daten ≠ Information: erst Kontext macht aus Daten Information.

## Visualisierungsideen

| Themen | Art | Was sie zeigt |
|---|---|---|
| T01 | Mermaid-Flowchart | Shannon-Kette Quelle → Sender → Kanal (Störung) → Empfänger → Ziel, darunter Daten → Information → Wissen → Handlung am 42-€-Beispiel. |
| T02 | Mermaid-Timeline | Die fünf Phasen der Digitalisierung mit je einem Beispiel, bewusst getrennt von den Epochen. |
| T03 | Tabelle | Automatisierung, Informatisierung und Transformation mit Ziel, Werkzeug (z. B. BI) und Beispiel. |
| T04–T05 | Mermaid-Timeline + Mermaid-Flowchart | Zeitstrahl der fünf Epochen (1959, 1981, 1983, 1992, 2000 – alle „bis heute“) und die N-Tier-Kette Client – Internet – Webserver – Anwendungsserver – Daten. |
| T06 | matplotlib-Plot (log-Skala) | Transistorzahl bei Verdopplung alle 1 bzw. 2 Jahre, dazu die Nvidia-Punkte 54/80/208 Mrd. |
| T07 | matplotlib-Plot | n·(n−1) (Metcalfe) gegen n·(n−1)/2 und n – zeigt das quadratische Wachstum. |
| T08 | SVG-Skizze | 1669 Bit als 23 × 73-Raster (Arecibo-Idee) und eine Einheiten-Treppe Bit → Byte → KB → MB (Faktor 8, dann 1024). |
| T09–T10 | interaktive HTML-Seite | Zahlensystem-Trainer: Restwertmethode Schritt für Schritt, farbige 3er/4er-Bitgruppen und automatische Probe. |
| T11–T13 | interaktive HTML-Seite + SVG-Zahlenkreis | Acht klickbare Bits mit gleichzeitiger Anzeige als vorzeichenlos, Vorzeichen-Betrag, Einer- und Zweierkomplement; ein 4-Bit-Zahlenkreis zeigt, wo der Überlauf liegt. |
| T14 | SVG-Skizze | IEEE-754-Bitfeld (1 + 8 + 23 Bit) mit dem Folienbeispiel 18,4. |
| T15–T17 | interaktive HTML-Seite | Wahrheitstabelle anklicken → Teilausdrücke und Gesamtausdruck entstehen, die Schaltung wird als SVG gezeichnet und gegen alle Belegungen geprüft. |
| T16 | Tabelle | Die sieben Gatter mit IEC-Symbol, ANSI-Form, Ausdruck und Merkwort („gleich“/„ungleich“). |
| T18 | SVG-Skizze mit Animation | Halbaddierer → Volladdierer → 4-Bit-Addierwerk mit durchlaufendem Übertrag. |
| T19–T23 | Mermaid-Flowchart | Werkzeugkette Modell → Quelltext → Scanner → Parser → semantische Analyse → Codeerzeugung → Objektdatei → Linker → Lader → laufender Prozess. |
| T24–T26 | SVG-Skizze + HTML-Animation | Kästchen-und-Zeiger-Diagramme für Array und Listen; push/pop und put/get (inkl. Ringpuffer) als Schrittfolge. |
| T27–T28 | Mermaid-Graph + interaktive HTML-Seite | Binärsuchbaum zum Einfügen und Löschen (beide Ersetzungsregeln) mit Anzeige von Ebene, Höhe, Pfadlänge, voll/vollständig. |
| T29–T31 | matplotlib-Plot + HTML-Animation | Kurven von O(1) bis O(n²) für n = 1 … 100 sowie Bubble Sort, Merge Sort und binäre Suche Schritt für Schritt mit Vergleichszähler. |
| T32–T33 | SVG-Skizze + interaktive HTML-Seite | UTF-8-Bytemuster mit farbigen Präfixbits; ein Eingabefeld zeigt pro Zeichen Codepunkt, ASCII-/Latin-1-Wert, UTF-8-Bytes und Byteanzahl. |
| T34–T35 | Mermaid-Flowchart | Von-Neumann-Blockschaltbild (Steuerwerk, Rechenwerk, Speicher, E/A, Bus) neben Harvard mit getrennten Speichern – nach dem 16.10. mit den Folien abgleichen. |
| T36–T37 | Mermaid-erDiagram + Tabelle | Kunde – Auftrag – Artikel mit Schlüsseln und eine Zuordnung von Befehlen zu Data Definition, Manipulation und Query. |
| T38 | Tabelle | Klausur-Simulationsplan mit Aufgabentyp, Zeitbudget (von 48 Minuten) und Selbsteinschätzung. |
