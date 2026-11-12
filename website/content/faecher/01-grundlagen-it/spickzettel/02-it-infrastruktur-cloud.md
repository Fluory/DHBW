## Sieben Hauptkomponenten

| Nr | Komponente | Beispiel |
|---|---|---|
| 1 | Hardwareplattformen | Server, PCs |
| 2 | Betriebssystem-Plattformen | Windows, Linux |
| 3 | Datenverwaltung und -speicherung | Datenbankmanagementsystem |
| 4 | Netzwerke und Telekommunikation | LAN |
| 5 | Anwendungssysteme | ERP (SAP), CRM |
| 6 | Internet (als Plattform) | Webdienste |
| 7 | Beratungsdienste und Systemintegratoren | Firmen, die alles einrichten |

Antwort auf „Welche Komponenten finden Sie in einem Unternehmen?“. Beim Nennen nachzählen: sieben.

## Fünf Epochen der IT-Infrastruktur

| Epoche | Name | Merkmal |
|---|---|---|
| 1 | Groß- und Minirechner | ein Großrechner bedient viele Terminals; Hard- und Software meist von einem Anbieter |
| 2 | Personal Computing | IBM-PC, „Wintel“-PC als Standard; erst Einzelplätze, ab ca. 1990 vernetzt |
| 3 | Client-Server | Clients mit leistungsstarken Servern vernetzt |
| 4 | internetbasierte Informationssysteme | Netze über TCP/IP verbunden; Kunden und Lieferanten über Internet angebunden |
| 5 | Cloud Computing | Programme und Daten von externen Anbietern über das Internet |

- Epochen **überlagern** sich: Großrechner gibt es bis heute.
- Jahreszahlen nicht prüfungsrelevant, Reihenfolge und je ein Merkmal schon.

## Client-Server

- Der Client fragt, der Server antwortet.
- **Client:** Eingabestelle des Benutzers (Laptop).
- **Server:** verarbeitet und speichert gemeinsam genutzte Daten, liefert Webseiten aus, verwaltet das Netz.
- Arbeit wird auf viele günstige Maschinen verteilt.

```text
2-Tier:  Client <--> Server (Daten + Logik)
N-Tier:  Client <-- Internet --> Webserver <--> Anwendungsserver <--> Datenbankserver
```

- **2-Tier:** Client spricht direkt mit einem Server. **N-Tier** (mehrschichtig): Arbeit auf mehrere Server-Ebenen verteilt, das Internet ist nur der Zugang zum Webserver. Meist genutzt.
- Skizze: alle Kästen beschriften, Pfeile in beide Richtungen.

## Cloud Computing

- Rechner und Programme mieten statt selbst kaufen und betreiben; Bezug von externen Anbietern über das Internet, meist im Abo, oft per Browser.
- **virtuell:** Rechner existiert nur als Software auf einem großen echten Rechner.
- **skalierbar:** per Klick mehr oder weniger mieten.
- Beispiel: New York Times wandelte mit gemieteten Amazon-Rechnern ca. 11 Mio. Artikel in 24 h in PDF um.
- AWS entstand, weil Amazon Rechenleistung fürs Weihnachtsgeschäft brauchte und sie den Rest des Jahres vermieten wollte.
- **Hyperscaler:** AWS, Microsoft Azure, Google Cloud, STACKIT.

## IaaS, PaaS, SaaS

| Modell | Du mietest | Du machst selbst | Beispiel |
|---|---|---|---|
| IaaS (Infrastructure as a Service) | Rechenleistung, Speicher, Netz als VMs | Betriebssystem + Anwendungen | virtueller Server bei AWS/STACKIT |
| PaaS (Platform as a Service) | zusätzlich Laufzeitumgebung, Datenbank | nur deine Anwendung | Google App Engine, SAP BTP |
| SaaS (Software as a Service) | fertige Anwendung im Browser | nichts, nur nutzen | Salesforce, Microsoft 365 |

## IT-Landschaft strukturieren

- nach **Schichten:** die sieben Komponenten
- nach **Architektur:** zentral (Großrechner), Client-Server (2-Tier/N-Tier), verteilt übers Internet
- nach **Betriebsmodell:** eigener Betrieb oder Cloud (IaaS, PaaS, SaaS)

## Typische Fehler

- „Internet als Plattform“ und „Beratungsdienste und Systemintegratoren“ vergessen.
- Glauben, mit der Cloud seien Großrechner verschwunden. Die Epochen überlagern sich.
- Epochen mit den Phasen der Digitalisierung (Kapitel 1) verwechseln.
- Client und Server vertauschen: Der Server hält die gemeinsamen Daten.
- Skizze mit Pfeilen nur in eine Richtung.
- IaaS und PaaS verwechseln: Installierst du das Betriebssystem selbst, ist es IaaS.
