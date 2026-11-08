---
title: "Arten betrieblicher Informationssysteme"
order: 2
summary: "Wie man Informationssysteme nach Reichweite und Anwendungszweck ordnet, was ERP, SCM und CRM leisten und was horizontale und vertikale Integration bedeuten."
klausur: "relevant"
---

In einem Unternehmen laufen viele Systeme nebeneinander: ein Onlineshop, eine Warenwirtschaft, ein Lohnprogramm, ein Chat für das Team, ein Dashboard für die Chefin. Wie behält man da den Überblick? Man ordnet die Systeme nach einfachen Fragen: Wer nutzt es, innen oder außen? Und wofür, für Buchungen, für Entscheidungen oder für Zusammenarbeit?

Der Block liefert zwei Kriterien für diese Ordnung, die wichtigsten Systemtypen (ERP, SCM, CRM) und den Gedanken der Integration. Ein Merksatz der Folie: „Ein Schema ist ein Werkzeug für eine bestimmte Frage, keine Wahrheit.“

## Schritt 1: Reichweite

**Was ist das?** Die erste Frage lautet: Wie weit reicht das System über das eigene Unternehmen hinaus? Wie bei einer Wohnung: Was nur die Familie nutzt (Küche), was du mit dem Nachbarn teilst (Gartentor), was jeder Besucher nutzt (Klingel). B2B heißt „Business to Business“, also Firma zu Firma. B2C heißt „Business to Consumer“, also Firma zu Endkunde.

| Reichweite | Was es tut | Beispiel |
|---|---|---|
| innerbetrieblich | unterstützt Prozesse im eigenen Unternehmen | Lohnabrechnung, Lagerverwaltung |
| zwischenbetrieblich (B2B) | verbindet Prozesse mit Lieferanten und Partnern | Bestellungen per EDI, Lieferantenportal |
| endkundenorientiert (B2C) | macht Endkunden zu Nutzern der eigenen Systeme | Onlineshop, Kundenportal, App |

B2B und B2C zusammen heißen **überbetrieblich**. Sie werden mit der Digitalisierung immer wichtiger.

> [!IMPORTANT]
> **Das Wichtigste**
> Drei Reichweiten: innerbetrieblich, zwischenbetrieblich (B2B), endkundenorientiert (B2C).

> [!WARNING]
> **Achtung**
> Ein Onlineshop ist nicht innerbetrieblich. Er macht Endkunden zu Nutzern, also B2C.

## Schritt 2: Anwendungszweck

**Was ist das?** Die zweite Frage lautet: Wofür wird das System genutzt? Auf Deutsch übersetzt: **Record** heißt „Aufzeichnung“ (wie ein Kassenbuch: was ist passiert?), **Insight** heißt „Einblick“ (wie ein Monatsbericht: was lernen wir daraus?), **Engagement** heißt „Einbindung“ (wie ein Gespräch: wir reden miteinander).

| Zweck | auch genannt | Beispiel Leuchtenhändler |
|---|---|---|
| Transaktion | Systems of Record, operative Systeme | Auftrag über 40 Stehleuchten wird gebucht, der Bestand sinkt. |
| Entscheidungsunterstützung | Systems of Insight, Management-Unterstützungssysteme | „Welche Leuchtenserie verliert seit dem Sommer Umsatz?“ |
| Interaktion und Zusammenarbeit | Systems of Engagement | Kundin fragt im Shop-Chat; das Lagerteam stimmt sich ab. |

Zuordnung zu den Unternehmensebenen: Transaktionssysteme liegen vor allem auf der **operativen** Ebene (Tagesgeschäft). Entscheidungsunterstützung liegt beim **mittleren und oberen** Management. Interaktionssysteme liegen **quer über alle Ebenen**, intern und nach außen.

**Untertypen (Exkurs):** Administrationssysteme rationalisieren Massendaten wie die Lohnabrechnung. Dispositionssysteme unterstützen oder ersetzen operative Entscheidungen, zum Beispiel eine automatische Bestellung, sobald der Meldebestand unterschritten ist.

> [!IMPORTANT]
> **Das Wichtigste**
> Record = Transaktion, Insight = Entscheidung, Engagement = Interaktion.

> [!WARNING]
> **Achtung**
> Interaktionssysteme werden nicht nur vom oberen Management genutzt. Sie liegen quer über alle Ebenen.

## Systemlandschaft und Grenzfälle

**Was ist das?** Mit beiden Kriterien entsteht eine Matrix. So hat die Gruppenarbeit die Systeme des Leuchtenhändlers eingeordnet:

| | Transaktion | Entscheidung | Interaktion |
|---|---|---|---|
| intern | ERP/Warenwirtschaft, Lohnabrechnung | BI-Dashboard Absatz, Excel-Planung (?) | Microsoft Teams, Wiki |
| überbetrieblich | Lieferantenportal, Versandsoftware des Paketdienstes | Verkaufsberichte vom Marktplatz | Onlineshop, CRM mit Newsletter (?) |

Die Einordnung ist selten eindeutig. Ein CRM erfasst Verkaufschancen (Transaktion) und spricht Kunden an (Interaktion). Excel ist je nach Nutzung Liste, Planung oder Auswertung. Entscheidend ist eine nachvollziehbare **Begründung**, nicht das Kästchen.

> [!IMPORTANT]
> **Das Wichtigste**
> Manche Systeme passen in mehrere Felder. In der Klausur zählt die Begründung.

> [!WARNING]
> **Achtung**
> „Jedes IS lässt sich eindeutig genau einer Klasse zuordnen“ ist falsch.

## ERP, SCM und CRM

**In einem Satz:** Ein ERP ist ein gemeinsames Ordnersystem für die ganze Firma statt vieler einzelner Excel-Listen.

**Stell dir vor:** Ohne ERP führt der Vertrieb eine Kundenliste, das Lager eine Bestandsliste und die Buchhaltung eine Rechnungsliste. Jede Abteilung tippt dieselbe Bestellung neu ab. Mit ERP gibt es einen gemeinsamen Schrank: Jede Abteilung hat ihre eigene Schublade (Modul), aber alle greifen auf dieselben Akten zu (gemeinsame Datenbasis).

| System | Kern | Einordnung | Beispiele |
|---|---|---|---|
| ERP (Enterprise Resource Planning) | modular aufgebautes, integriertes System, das alle operativen Tätigkeiten erfasst. Module je Fachbereich, **gemeinsame Datenbasis**, Standardsoftware mit Anpassung. Das „Rückgrat“ der Informationsverarbeitung. | Transaktion, intern | SAP S/4HANA |
| SCM (Supply Chain Management) | gestaltet die ganze Lieferkette bis zum Endkunden, gemeinsame Bedarfsplanung mit Lieferanten | Transaktion, B2B | SAP IBP |
| CRM (Customer Relationship Management) | Aufbau und Pflege dauerhafter, profitabler Kundenbeziehungen; zuerst ein betriebswirtschaftliches Konzept, das IS unterstützen | Transaktion und Interaktion, B2B/B2C | Salesforce, HubSpot |

Weitere Typen: E-Business (Shopify), BI (Power BI), Dokumentenmanagement (DMS) und Groupware (Teams).

Beim CRM unterscheidet man **operatives** CRM (Kontakte, Verkaufschancen, Service) und **analytisches** CRM (Kundendaten auswerten).

Der **Bullwhip-Effekt** (Peitscheneffekt): Bei einer Peitsche wird aus einer kleinen Handbewegung am Ende ein großer Ausschlag. Ausgedachtes Zahlenbeispiel: Kunden kaufen 10 % mehr. Der Händler bestellt zur Sicherheit 20 % mehr, der Großhändler 40 % mehr, der Hersteller produziert 80 % mehr. Kleine Nachfrageschwankungen beim Endkunden schaukeln sich entlang der Lieferkette zu immer größeren Bestellschwankungen auf. Geteilte Absatz- und Bestandsdaten im SCM dämpfen ihn.

**Beispiel ERP:** Beim Leuchtenhändler geht ein Auftrag über 40 Stehleuchten ein.

1. Auftrag im Vertriebsmodul anlegen (Kunde, Artikel, Preise).
2. Verfügbarkeit prüfen und Bestand reservieren.
3. Bei Bedarf Fertigungs- oder Bestellvorschlag.
4. Lieferschein und Warenausgang, der Bestand sinkt.
5. Rechnung und Buchung in der Finanzbuchhaltung.

Alles läuft auf einer Datenbasis, ohne neue Eingabe.

> [!IMPORTANT]
> **Das Wichtigste**
> ERP = integriert, gemeinsame Datenbasis, intern. SCM = Lieferkette, B2B. CRM = Kundenbeziehung, zuerst ein Konzept.

> [!WARNING]
> **Achtung**
> ERP heißt Enterprise Resource Planning, nicht „Entity Relationship Program“. Diese Frage steht als Beispiel in den offiziellen Klausurhinweisen.

## Integration

**In einem Satz:** Integration heißt, dass eine Angabe einmal eingetippt wird und dann überall dort ankommt, wo sie gebraucht wird.

**Stell dir vor:** **Horizontal** ist ein Staffellauf: Der Auftrag wird wie ein Stab von Abteilung zu Abteilung weitergereicht, ohne dass ihn jemand neu schreibt. **Vertikal** ist eine Zusammenfassung für die Chefin: Aus hunderten Einzelaufträgen wird eine Zahl pro Monat.

**Was ist das?** Integration heißt, Daten, Vorgänge und Aufgaben sinnvoll zu verzahnen. Ziel: **Daten nur einmal erfassen und überall nutzen.**

- **Horizontale Integration:** Ein Auftrag läuft ohne Neuerfassung durch alle Fachbereiche entlang des Prozesses: Vertrieb → Produktion → Lager/Versand → Buchhaltung.
- **Vertikale Integration:** Operative Daten werden verdichtet und nach oben gereicht, zum Beispiel Umsatz je Leuchtenserie und Monat für das Management.

```text
                 Management: Umsatz je Serie und Monat
                          ↑  vertikal (verdichten)
Vertrieb  →  Produktion  →  Lager/Versand  →  Buchhaltung
Auftrag      Fertigung      Lieferschein      Rechnung
            horizontal (entlang des Prozesses)
```

Ohne Integration entsteht ein **Medienbruch** (die Information wechselt das „Medium“, zum Beispiel von E-Mail zu Excel, und muss dabei von Hand übertragen werden): Der Auftrag kommt per E-Mail, wird in Excel abgetippt und in der Produktion noch einmal eingegeben. Folgen: doppelte Arbeit, Tippfehler, Verzögerung.

> [!IMPORTANT]
> **Das Wichtigste**
> Horizontal = entlang des Prozesses, quer durch die Abteilungen. Vertikal = hoch durch die Ebenen.

> [!WARNING]
> **Achtung**
> „Vertikale Integration heißt: Ein Auftrag läuft ohne Neuerfassung durch Vertrieb, Lager und Buchhaltung“ ist falsch. Das ist horizontale Integration.

## Übungen

> [!TIP]
> **Übung 1 · leicht**
> Welcher Begriff ist ein Synonym für Entscheidungsunterstützungssysteme? A Systems of Record · B Systems of Insight · C Systems of Engagement · D OLTP-Systeme
> *Quelle: Lernseite WI, Aufgabe 2.7 (eigene Aufgabe nach T1B2 F. 9)*

> [!TIP]
> **Übung 2 · leicht**
> Wofür steht im Kontext der Informationssysteme die Abkürzung ERP? Entity Relationship Program · Enterprise Resource Planning · Ecological Resource Planning · Equal Relationship Program (2 Punkte)
> *Quelle: offizielle Beispielaufgabe aus den Klausurhinweisen (offizielle Lösung)*

> [!TIP]
> **Übung 3 · mittel**
> Stimmt das? „Vertikale Integration heißt: Ein Auftrag läuft ohne Neuerfassung durch Vertrieb, Lager und Buchhaltung.“ Begründe kurz.
> *Quelle: Folie T1B3 F. 2 („Stimmt das?“), sinngemäß*

> [!TIP]
> **Übung 4 · mittel**
> Ein System löst automatisch eine Bestellung beim Lieferanten aus, sobald der Meldebestand einer Leuchte unterschritten wird. Um welchen Systemtyp handelt es sich? A Administrationssystem · B Dispositionssystem · C Executive Support System · D Zusammenarbeitssystem
> *Quelle: Lernseite WI, Aufgabe 2.5 (eigene Aufgabe nach T1B2 F. 11–12)*

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> Ordne ein und begründe kurz nach Reichweite und Zweck: SAP S/4HANA, Salesforce, Power BI, Lieferantenportal, Microsoft Teams.
> *Quelle: Folie T1B2 F. 15, sinngemäß*

> [!TIP]
> **Übung 6 · Prüfungsniveau**
> Frau Weber aus Heilbronn bestellt im Onlineshop die Stehleuchte „Luna“ für 189 €. Welche Daten muss man nur einmal erfassen, und was braucht das Management (vertikale Integration)?
> *Quelle: Folie T1B2 F. 23, sinngemäß*

## Lösungen

### Übung 1

**B.** Record = Transaktion, Insight = Entscheidung, Engagement = Interaktion.

### Übung 2

Offizielle Lösung: **Enterprise Resource Planning.** Nur diese Option ankreuzen, dann sind alle vier Entscheidungen richtig: 4 × ½ = 2 Punkte.

### Übung 3

**Falsch.** Das beschreibt die horizontale Integration. Vertikal heißt: Daten werden für das Management verdichtet und nach oben gereicht.

### Übung 4

**B, Dispositionssystem.** „Disponieren“ heißt „einteilen, entscheiden“. Das System ersetzt eine operative Entscheidung (wann bestellen). Ein Administrationssystem rationalisiert Massendaten wie die Lohnabrechnung.

### Übung 5

| System | Reichweite | Zweck | Begründung |
|---|---|---|---|
| SAP S/4HANA | intern | Transaktion | ERP mit gemeinsamer Datenbasis |
| Salesforce | überbetrieblich | Transaktion und Interaktion | CRM, Grenzfall |
| Power BI | intern | Entscheidung | Auswertung von Kennzahlen |
| Lieferantenportal | B2B | Transaktion | Bestellungen mit Lieferanten |
| Microsoft Teams | intern | Interaktion | Zusammenarbeit im Team |

Andere Antworten sind vertretbar, wenn sie begründet sind.

### Übung 6

- **Einmal erfassen:** Kunden- und Auftragsdaten bei der Bestellung im Shop: Name, Liefer- und Rechnungsadresse, Artikel, Menge, Preis, Zahlungsart. Vertrieb, Lager und Buchhaltung nutzen sie weiter.
- **Management (vertikal):** verdichtete Zahlen wie Umsatz je Serie, Monat und Region, Retourenquote, Lieferzeiten und Zahlungsausfälle für die Sortiments- und Einkaufsplanung.
