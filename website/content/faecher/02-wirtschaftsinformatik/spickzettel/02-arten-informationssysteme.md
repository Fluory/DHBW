## Kriterium 1: Reichweite

| Reichweite | Was es tut | Beispiel |
|---|---|---|
| innerbetrieblich | Prozesse im eigenen Unternehmen | Lohnabrechnung, Lagerverwaltung |
| zwischenbetrieblich (B2B) | verbindet mit Lieferanten, Partnern | EDI-Bestellungen, Lieferantenportal |
| endkundenorientiert (B2C) | Endkunden nutzen eigene Systeme | Onlineshop, Kundenportal, App |

B2B + B2C = **überbetrieblich**. B2B = Business to Business, B2C = Business to Consumer.

## Kriterium 2: Anwendungszweck

| Zweck | auch genannt | Ebene |
|---|---|---|
| Transaktion | Systems of **Record**, operative Systeme | operativ (Tagesgeschäft) |
| Entscheidungsunterstützung | Systems of **Insight**, Management-Unterstützungssysteme | mittleres, oberes Management |
| Interaktion, Zusammenarbeit | Systems of **Engagement** | quer über alle Ebenen, intern und extern |

Untertypen:
- **Administrationssystem:** rationalisiert Massendaten (Lohnabrechnung).
- **Dispositionssystem:** unterstützt/ersetzt operative Entscheidungen (automatische Bestellung bei Unterschreiten des Meldebestands).

## Matrix und Grenzfälle

| | Transaktion | Entscheidung | Interaktion |
|---|---|---|---|
| intern | ERP, Lohnabrechnung | BI-Dashboard | Teams, Wiki |
| überbetrieblich | Lieferantenportal | Marktplatz-Berichte | Onlineshop, CRM mit Newsletter |

- Einordnung selten eindeutig (CRM: Transaktion + Interaktion; Excel je nach Nutzung). Es zählt die **Begründung**.

## ERP, SCM, CRM

| System | Kern | Einordnung | Beispiel |
|---|---|---|---|
| ERP (Enterprise Resource Planning) | modular, integriert, alle operativen Tätigkeiten, **gemeinsame Datenbasis**, Standardsoftware mit Anpassung; „Rückgrat“ | Transaktion, intern | SAP S/4HANA |
| SCM (Supply Chain Management) | ganze Lieferkette bis zum Endkunden, gemeinsame Bedarfsplanung | Transaktion, B2B | SAP IBP |
| CRM (Customer Relationship Management) | dauerhafte, profitable Kundenbeziehungen; zuerst **betriebswirtschaftliches Konzept** | Transaktion + Interaktion, B2B/B2C | Salesforce, HubSpot |

- CRM: **operativ** (Kontakte, Verkaufschancen, Service) vs. **analytisch** (Kundendaten auswerten).
- Weitere: E-Business (Shopify), BI (Power BI), DMS, Groupware (Teams).
- **Bullwhip-Effekt:** kleine Nachfrageschwankungen beim Endkunden schaukeln sich entlang der Lieferkette zu großen Bestellschwankungen auf (10 % → 20 % → 40 % → 80 %). Gegenmittel: geteilte Absatz- und Bestandsdaten im SCM.

**ERP-Auftrag:** 1. Auftrag im Vertriebsmodul anlegen → 2. Verfügbarkeit prüfen, reservieren → 3. ggf. Fertigungs-/Bestellvorschlag → 4. Lieferschein, Warenausgang → 5. Rechnung, Buchung. Alles auf einer Datenbasis.

## Integration

Ziel: **Daten nur einmal erfassen, überall nutzen.**

| | horizontal | vertikal |
|---|---|---|
| Richtung | entlang des Prozesses, quer durch Abteilungen | hoch durch die Ebenen |
| Beispiel | Vertrieb → Produktion → Lager/Versand → Buchhaltung ohne Neuerfassung | Umsatz je Serie und Monat fürs Management (verdichten) |

- **Medienbruch:** Information wechselt das Medium (E-Mail → Excel) und wird von Hand übertragen. Folgen: doppelte Arbeit, Tippfehler, Verzögerung.

## Typische Fehler

- ERP als „Entity Relationship Program“ ausschreiben.
- Onlineshop als innerbetrieblich einordnen: Er ist B2C.
- Interaktionssysteme nur dem oberen Management zuordnen.
- „Jedes IS lässt sich genau einer Klasse zuordnen“: falsch.
- Auftrag läuft ohne Neuerfassung durch alle Abteilungen als vertikal bezeichnen: Das ist horizontal.
- Record/Insight/Engagement vertauschen.
- Automatische Nachbestellung als Administrationssystem einordnen: Es ist ein Dispositionssystem.
