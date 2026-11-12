## Geschäftsprozess

Sachlogisch-zeitliche Abfolge von Tätigkeiten: durch **Ereignisse ausgelöst**, endet mit **definiertem Ergebnis**, abteilungsübergreifend, wiederkehrend, standardisierbar.

| Art | Merkmal | Beispiel |
|---|---|---|
| Kernprozess | direkt wertschöpfend, vom Kunden zum Kunden | Autokauf von Anfrage bis Rechnung |
| Managementprozess | steuert das Unternehmen | Strategie, Controlling |
| Unterstützungsprozess | ermöglicht Kernprozesse | Rechnungswesen, IT |

- **Prozessmodell** (EPK) = dynamisch (was wann, wer). **Datenmodell** (ER) = statisch (welche Daten, wie verknüpft).
- Vorgehen: **Ist-Modell** → **Soll-Modell** → Umsetzung im IS.

## Elemente

| Element | Symbol | Benennung |
|---|---|---|
| Ereignis | Sechseck | Zustand: „Auftrag eingegangen“ |
| Funktion | abgerundetes Rechteck | Tätigkeit: „Auftrag prüfen“ |
| Konnektor | Kreis: XOR, ∨, ∧ | verzweigt / führt zusammen |
| Kontrollfluss | Pfeil | Reihenfolge |

| Konnektor | Bedeutung | Beispiel |
|---|---|---|
| XOR | genau ein Weg | Ware vorrätig / nicht vorrätig |
| ∨ (OR) | mindestens einer, auch mehrere | Rechnung per Post und/oder E-Mail |
| ∧ (AND) | alle, parallel | Rechnung erstellen und Kundin benachrichtigen |

**eEPK:** an Funktionen Organisationseinheit, Rolle, Informationsobjekt, Dokument, Anwendungssystem; Linien **ohne Pfeil**. **Prozesswegweiser** = Verweis auf Teilprozess.

## Die sechs Regeln

1. **Start und Ende sind Ereignisse** (ein Start, mindestens ein Ende).
2. **Ereignis und Funktion wechseln sich ab**, auch über Konnektoren.
3. **Je eine Kante rein, eine raus** bei Ereignis/Funktion; verzweigen nur über Konnektoren.
4. **Nur Funktionen entscheiden:** kein XOR-/OR-Split nach Ereignis; AND-Split erlaubt.
5. **Zusammenführen wie aufgeteilt:** XOR→XOR, AND→AND, OR→OR.
6. **Richtig benennen:** Ereignis „Auftrag erfasst“, Funktion „Auftrag erfassen“.

Regel 4 gilt nur für Splits: Ein Join nach Ereignissen ist erlaubt.

## Prüfen in 7 Schritten

1. Anfang und Ende (R1) · 2. Wechsel Ereignis/Funktion (R2) · 3. Kanten zählen (R3) · 4. Was steht vor jedem Split? (R4) · 5. Split ↔ Join zuordnen (R5) · 6. Beschriftungen (R6) · 7. Stimmt der Ablauf fachlich?

Ein Modell kann alle Regeln einhalten und trotzdem **fachlich falsch** sein.

## Mini-Beispiel

⟨Kundenauftrag eingegangen⟩ → (Verfügbarkeit prüfen) → XOR → ⟨Ware vorrätig⟩ | ⟨Ware nicht vorrätig⟩ → (Fertigung beauftragen) → ⟨Leuchten gefertigt⟩ → XOR-Join → (Ware versenden) → ⟨Ware versandt⟩ → (Rechnung erstellen) → ⟨Rechnung erstellt⟩

## Fehlerkatalog

| Fehler | Falsch | Richtig | Regel |
|---|---|---|---|
| Ereignis entscheidet | „Reklamation eingegangen“ → XOR | „Garantie prüfen“ → XOR | 4 |
| Funktion auf Funktion | anfordern → versenden | anfordern → „Leuchte eingetroffen“ → versenden | 2 |
| falscher Join | XOR-Split … AND-Join | XOR-Join | 5 |
| Tätigkeit als Ereignis | „Garantie prüfen“ | „Garantie gültig“ | 6 |
| Start fehlt | beginnt mit Funktion | Startereignis ergänzen | 1 |
| zwei Eingänge | zwei Kanten direkt in Funktion | XOR-Join davor | 3 |

**Deadlock:** XOR-Split + AND-Join: nur ein Weg kommt an, AND wartet ewig.

## Typische Fehler

- OR statt XOR, wenn nur ein Weg möglich ist (Flug verfügbar oder nicht).
- XOR statt OR, wenn „beide Wege“ möglich sind.
- XOR-/OR-Split direkt nach einem Ereignis.
- Zwei Kanten ohne Konnektor aus oder in eine Funktion.
- Startereignis als Tätigkeit formulieren („Kunde erteilt Flugauftrag“ statt „Flugauftrag eingegangen“).
- Zwei verschiedene Ergebnisse in ein Endereignis führen; besser zwei Endereignisse.
- eEPK-Zuordnungen mit Pfeil zeichnen.
- Behaupten, die EPK zeige Daten und ihre Zusammenhänge: Das macht das Datenmodell.
