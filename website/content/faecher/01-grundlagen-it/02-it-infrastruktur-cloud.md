---
title: "IT-Infrastruktur und Cloud-Computing"
order: 2
summary: "Die sieben Komponenten einer IT-Infrastruktur, die fünf Epochen von Großrechner bis Cloud, das Client-Server-Prinzip und die Servicemodelle IaaS, PaaS und SaaS."
klausur: "relevant"
---

Stell dir vor, du gründest eine kleine Firma. Du brauchst Laptops, ein Betriebssystem, eine Datenbank für Kunden, WLAN, ein Buchhaltungsprogramm, einen Internetanschluss und vielleicht jemanden, der dir alles einrichtet. All das zusammen ist deine IT-Infrastruktur.

Die Klausur fragt in Aufgabe 2 (4 Punkte): „Welche Komponenten können Sie in einem Unternehmen vorfinden?“ und „Wie kann die IT-Landschaft strukturiert werden?“. Dazu brauchst du die sieben Komponenten, die fünf Epochen und die Ideen Client-Server und Cloud.

## Die sieben Hauptkomponenten

**Was ist das?** Eine moderne IT-Infrastruktur besteht aus sieben Hauptkomponenten. Du merkst sie dir am besten als Stapel von unten nach oben (die Stapel-Reihenfolge ist eine Merkhilfe, nicht von den Folien):

| Nr | Komponente | Beispiel |
|---|---|---|
| 1 | Hardwareplattformen | Server, PCs |
| 2 | Betriebssystem-Plattformen | Windows, Linux |
| 3 | Datenverwaltung und -speicherung | Datenbankmanagementsystem |
| 4 | Netzwerke und Telekommunikation | LAN |
| 5 | Anwendungssysteme | ERP (SAP), CRM |
| 6 | Internet (als Plattform) | Webdienste |
| 7 | Beratungsdienste und Systemintegratoren | Firmen, die alles einrichten |

> [!IMPORTANT]
> **Das Wichtigste**
> Sieben Komponenten, von der Hardware bis zu den Menschen, die alles zusammenbauen. Diese Liste ist die Antwort auf „Welche Komponenten finden Sie in einem Unternehmen?“.

> [!WARNING]
> **Achtung**
> Am häufigsten vergessen werden „Internet als Plattform“ und „Beratungsdienste und Systemintegratoren“, weil sie keine Technik im engeren Sinn sind. Zähl beim Nennen nach: Es müssen sieben sein.

## Fünf Epochen der IT-Infrastruktur

**Was ist das?** Die IT-Landschaft hat sich in fünf technischen Epochen entwickelt. Die Epochen lösen sich nicht ab, sie **überlagern** sich: Großrechner gibt es bis heute.

| Epoche | Name | Merkmal |
|---|---|---|
| 1 | Groß- und Minirechner (ab 1959) | Ein Großrechner bedient viele Terminals. Hardware und Software kommen meist von einem Anbieter. |
| 2 | Personal Computing (ab 1981) | Der IBM-PC und der „Wintel“-PC werden Standard. Zuerst sind PCs Einzelplätze, ab etwa 1990 vernetzt. |
| 3 | Client-Server | Arbeitsplatzrechner (Clients) sind mit leistungsstarken Servern vernetzt. |
| 4 | internetbasierte Informationssysteme | Unternehmen verbinden ihre Netze über TCP/IP. Kunden und Lieferanten werden über das Internet angebunden. |
| 5 | Cloud Computing | Programme und Daten werden von externen Anbietern über das Internet bezogen. |

> [!IMPORTANT]
> **Das Wichtigste**
> Reihenfolge: Großrechner → PC → Client-Server → Internet → Cloud. Alle Epochen bestehen bis heute nebeneinander.

> [!WARNING]
> **Achtung**
> Jahreszahlen sind „historische Bezüge“ und laut erster Vorlesung nicht prüfungsrelevant. Die Reihenfolge und je ein Merkmal solltest du trotzdem kennen. Verwechsle die Epochen nicht mit den Phasen der Digitalisierung aus Kapitel 1.

## Client-Server-Computing

**Was ist das?** Die Rollen sind klar verteilt:

- Der **Client** ist die Eingabestelle des Benutzers, zum Beispiel dein Laptop.
- Der **Server** verarbeitet und speichert die gemeinsam genutzten Daten, liefert Webseiten aus oder verwaltet das Netz.

So kann ein Unternehmen die Arbeit auf viele günstige Maschinen verteilen.

Im einfachsten Fall spricht der Client direkt mit einem Server. Das heißt **2-Tier** (zwei Schichten). Die meisten Unternehmen nutzen aber **N-Tier** (mehrschichtig): Die Arbeit wird auf mehrere Server-Ebenen verteilt. Das Internet ist dabei nur der Zugang zum Webserver.

```text
2-Tier:   Client  <-->  Server (Daten + Logik)

N-Tier:   Client  <-- Internet -->  Webserver  <-->  Anwendungsserver  <-->  Datenbankserver
```

> [!IMPORTANT]
> **Das Wichtigste**
> Client = Eingabe beim Benutzer. Server = gemeinsame Daten und Dienste. N-Tier verteilt die Arbeit auf mehrere Server-Schichten.

> [!WARNING]
> **Achtung**
> Rollen nicht vertauschen. Der Server hält die gemeinsamen Daten, nicht der Client. In einer Skizze gehören Pfeile in beide Richtungen, denn es wird angefragt und geantwortet.

## Cloud Computing

**Was ist das?** Lösungen, die früher im eigenen Unternehmen liefen, werden von externen Anbietern über das Internet bezogen. Programme und Daten liegen nicht mehr auf eigenen Rechnern. Man zahlt meist ein Abo, der Zugang läuft oft über den Browser. Die Anbieter stellen flexible, skalierbare virtuelle Rechner bereit.

**Beispiel aus der Vorlesung:** Die New York Times mietete viele Rechner bei Amazon und wandelte damit rund 11 Millionen Artikel in 24 Stunden in PDF um. Eigene Rechner dafür zu kaufen, hätte sich nicht gelohnt.

Ein großer Schub kam von Amazon: Das Unternehmen brauchte viel Rechenleistung für das Weihnachtsgeschäft und wollte sie im Rest des Jahres vermieten. Daraus wurde AWS. Große Anbieter heißen **Hyperscaler**: AWS, Microsoft Azure, Google Cloud und STACKIT (Schwarz-Gruppe, Neckarsulm).

### IaaS, PaaS, SaaS

Die Folien nennen die drei Servicemodelle nur mit Namen. Die Erklärung hier ist eine Ergänzung. Die Frage ist immer: Wie viel betreibt der Anbieter, und wie viel machst du selbst?

| Modell | Was mietest du? | Was machst du selbst? | Beispiel |
|---|---|---|---|
| IaaS – Infrastructure as a Service | Rechenleistung, Speicher, Netz als virtuelle Maschinen | Betriebssystem und Anwendungen | virtueller Server bei AWS oder STACKIT |
| PaaS – Platform as a Service | zusätzlich Laufzeitumgebung und Datenbank | nur deine Anwendung | Google App Engine, SAP BTP |
| SaaS – Software as a Service | eine fertige Anwendung im Browser | nichts, du nutzt sie nur | Salesforce, Microsoft 365 |

> [!NOTE]
> **Beispiel: Wie kann die IT-Landschaft strukturiert werden?**
> Eine gute Antwort nennt drei Blickwinkel. Nach **Schichten**: die sieben Komponenten von der Hardware bis zur Anwendung. Nach **Architektur**: zentral am Großrechner, Client-Server mit 2-Tier oder N-Tier, verteilt über das Internet. Nach **Betriebsmodell**: eigener Betrieb im Unternehmen oder Bezug aus der Cloud als IaaS, PaaS oder SaaS.

> [!IMPORTANT]
> **Das Wichtigste**
> Cloud = über das Internet beziehen statt selbst betreiben, meist im Abo. IaaS: Infrastruktur mieten. PaaS: Plattform mieten. SaaS: fertige Software mieten.

> [!WARNING]
> **Achtung**
> Mit der Cloud sind Großrechner nicht verschwunden. Die Epochen überlagern sich. Das ist eine typische falsche Option im Multiple Choice.

## Übungen

> [!TIP]
> **Übung 1 · leicht**
> Ordnen Sie die Epochen: Cloud Computing · Personal Computing · Groß- und Minirechner · internetbasierte Informationssysteme · Client-Server.
> *Quelle: Lernseite GIT, Aufgabe 2.2 (eigene Aufgabe nach VL01 F. 25)*

> [!TIP]
> **Übung 2 · mittel**
> IaaS, PaaS oder SaaS? a) Ein Unternehmen nutzt Salesforce im Browser. b) Ein Start-up mietet virtuelle Server und installiert Linux selbst. c) Ein Entwickler lädt nur seinen Code auf eine Plattform, die Laufzeit und Datenbank bereitstellt.
> *Quelle: Lernseite GIT, Aufgabe 2.5 (eigene Aufgabe)*

> [!TIP]
> **Übung 3 · mittel**
> Erläutern Sie kurz das Client-Server-Prinzip und skizzieren Sie eine N-Tier-Architektur.
> *Quelle: Lernseite GIT, Aufgabe 2.3 (eigene Aufgabe nach VL01 F. 33–35)*

> [!TIP]
> **Übung 4 · Prüfungsniveau**
> Nennen Sie die sieben Hauptkomponenten einer modernen IT-Infrastruktur. (2 Punkte)
> *Quelle: Lernseite GIT, Aufgabe 2.1 (eigene Aufgabe nach VL01 F. 24 und Punkteverteilung KV F. 8)*

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> Multiple Choice (2 Punkte). Welche Aussagen sind korrekt?
> 1. AWS entstand, weil Amazon Rechenleistung für Spitzenzeiten vorhalten musste.
> 2. In der Epoche der internetbasierten Systeme verbanden Unternehmen ihre Netze über TCP/IP.
> 3. Mit dem Cloud Computing verschwanden die Großrechner.
> 4. STACKIT ist ein Hyperscaler.
>
> *Quelle: Lernseite GIT, Aufgabe 2.6 (eigene Aufgabe im Klausurstil)*

## Lösungen

### Übung 1

1. Groß- und Minirechner
2. Personal Computing
3. Client-Server
4. internetbasierte Informationssysteme
5. Cloud Computing

Alle Epochen bestehen bis heute nebeneinander.

### Übung 2

- a) **SaaS:** fertige Anwendung im Browser, du betreibst nichts.
- b) **IaaS:** nur die virtuelle Maschine ist gemietet, das Betriebssystem installierst du selbst.
- c) **PaaS:** Laufzeit und Datenbank kommen vom Anbieter, du lieferst nur den Code.

### Übung 3

Clients sind die Eingabestellen der Benutzer. Server verarbeiten und speichern die gemeinsam genutzten Daten, liefern Webseiten oder verwalten das Netz.

```text
Client  <-- Internet -->  Webserver  <-->  Anwendungsserver  <-->  Datenbankserver
```

Wichtig in der Skizze: alle Kästen beschriftet, Pfeile in beide Richtungen.

### Übung 4

- Hardwareplattformen
- Betriebssystem-Plattformen
- Datenverwaltung und -speicherung
- Netzwerke und Telekommunikation
- Anwendungssysteme
- Internet (als Plattform)
- Beratungsdienste und Systemintegratoren

### Übung 5

Richtig sind **1, 2 und 4**. Falsch ist 3, denn die Epochen überlagern sich und Großrechner gibt es bis heute.

Punkte bei korrekter Antwort: vier richtige Entscheidungen × ½ = 2 Punkte.
