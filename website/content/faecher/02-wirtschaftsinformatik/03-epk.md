---
title: "Geschäftsprozessmodellierung mit EPK"
order: 3
summary: "Was ein Geschäftsprozess ist, wie eine ereignisgesteuerte Prozesskette (EPK) aufgebaut ist, wie man sie mit sechs Regeln prüft und typische Fehler findet."
klausur: "relevant"
---

Wenn du einen Freund fragst, wie bei ihm im Job eine Bestellung abläuft, erzählt er vielleicht: „Erst kommt die Mail, dann prüfe ich, ob die Ware da ist, dann …“. Das ist eine Prozessbeschreibung in Worten. Eine EPK macht daraus ein Bild, das jeder gleich lesen kann. So sieht man, wer was tut, wo entschieden wird und wo es hakt.

Das ist der praktischste Block des ersten Tages. Laut Lernzielen sollst du eine EPK lesen und Fehler finden können. Eine kleine EPK selbst zu zeichnen, solltest du auch üben.

## Was ist ein Geschäftsprozess?

**Was ist das?** Ein Geschäftsprozess ist eine sachlogisch-zeitliche Abfolge von Tätigkeiten. Seine Merkmale:

- Er wird durch ein oder mehrere **Ereignisse ausgelöst** und endet mit einem **definierten Ergebnis**.
- Er geht über Grenzen: mehrere Abteilungen, auch Kunden, Lieferanten, Dokumente und IS.
- Tätigkeiten laufen nacheinander, parallel, alternativ oder wiederholt ab.
- Er ist wiederkehrend und weitgehend standardisierbar, deshalb gut durch IS zu unterstützen.

Es gibt drei Prozessarten:

| Art | Merkmal | Beispiel Kfz-Betrieb |
|---|---|---|
| Kernprozess | direkt wertschöpfend, vom Kunden zum Kunden | Autokauf von der Anfrage bis zur Rechnung |
| Managementprozess | steuert das Unternehmen | Strategie, Controlling, Produktplanung |
| Unterstützungsprozess | ermöglicht die Kernprozesse | Rechnungswesen, IT, Verwaltung |

Ein **Prozessmodell** ist dynamisch: Was passiert wann, wer ist beteiligt? Ein **Datenmodell** ist statisch: Welche Daten gibt es, wie hängen sie zusammen? Das Vorgehen ist: **Ist-Modell** (wie läuft es wirklich?) → **Soll-Modell** (Schwachstellen beseitigen) → Umsetzung im IS.

> [!IMPORTANT]
> **Das Wichtigste**
> Prozessmodell (EPK) = Ablauf, dynamisch. Datenmodell (ER) = Daten, statisch. Erst Ist, dann Soll.

> [!WARNING]
> **Achtung**
> „Die EPK zeigt, welche Daten es gibt und wie sie zusammenhängen“ ist falsch. Das leistet das Datenmodell.

## Die Elemente der EPK

**Was ist das?** Die EPK (ereignisgesteuerte Prozesskette) zeigt einen Prozess als Wechsel von Ereignissen und Funktionen.

| Element | Symbol | Bedeutung | Benennung |
|---|---|---|---|
| Ereignis | Sechseck | ein Zustand ist eingetreten | Zustand: „Auftrag eingegangen“ |
| Funktion | abgerundetes Rechteck | eine Tätigkeit, die den Zustand ändert | Substantiv + Verb: „Auftrag prüfen“ |
| Konnektor | Kreis mit XOR, ∨ oder ∧ | verzweigt oder führt zusammen | – |
| Kontrollfluss | Pfeil | Reihenfolge | – |

Die **Konnektoren**:

| Konnektor | Bedeutung | Beispiel |
|---|---|---|
| XOR (exklusives Oder) | genau ein Weg | „Ware vorrätig“ oder „Ware nicht vorrätig“ |
| ∨ (OR, inklusives Oder) | mindestens ein Weg, auch mehrere | Versand per Post und/oder per E-Mail |
| ∧ (AND) | alle Wege, parallel | Rechnung erstellen **und** Kundin benachrichtigen |

Die **erweiterte EPK (eEPK)** hängt an Funktionen zusätzliche Informationen: Organisationseinheit (zum Beispiel Vertrieb), Rolle, Informationsobjekt, Dokument, Anwendungssystem (zum Beispiel ERP-System). Diese Zuordnungen sind Linien **ohne** Pfeil, denn sie sind kein Kontrollfluss. Ein **Prozesswegweiser** verweist auf einen Teilprozess mit eigener EPK.

> [!IMPORTANT]
> **Das Wichtigste**
> Ereignis = Zustand (Sechseck). Funktion = Tätigkeit (abgerundetes Rechteck). XOR = genau einer, OR = mindestens einer, AND = alle.

> [!WARNING]
> **Achtung**
> Wenn „beide Wege“ möglich sind, ist es OR, nicht XOR. Und zwei Kanten ohne Konnektor aus einer Funktion sind nicht erlaubt.

## Eine EPK lesen

**Beispiel Kundenauftrag beim Leuchtenhändler:**

```text
        ⟨ Kundenauftrag eingegangen ⟩
                    │
        ( Verfügbarkeit prüfen )   ── Vertrieb, ERP-System
                    │
                  (XOR)            ← Split: die Funktion entscheidet
               ┌────┴────┐
   ⟨ Ware vorrätig ⟩   ⟨ Ware nicht vorrätig ⟩
         │                   │
         │          ( Fertigung beauftragen )  ── Produktion
         │                   │
         │          ⟨ Leuchten gefertigt ⟩
               └────┬────┘
                  (XOR)            ← Join
                    │
           ( Ware versenden )      ── Lager
                    │
            ⟨ Ware versandt ⟩
                    │
          ( Rechnung erstellen )   ── Buchhaltung
                    │
          ⟨ Rechnung erstellt ⟩

⟨ ⟩ = Ereignis (Sechseck), ( ) = Funktion, (XOR) = Konnektor
```

So liest du sie: Geht ein Kundenauftrag ein, prüft der Vertrieb im ERP-System die Verfügbarkeit. Ist die Ware vorrätig, geht es direkt weiter. Sonst beauftragt die Produktion die Fertigung. Beide Wege laufen im XOR-Join zusammen. Dann versendet das Lager die Ware, und die Buchhaltung erstellt die Rechnung.

Auf der Folie folgt auf „Fertigung beauftragen“ direkt „Leuchten gefertigt“. Sauberer wäre „Fertigung beauftragt“ → „Leuchten fertigen“ → „Leuchten gefertigt“.

## Die sechs Modellierungsregeln

**Was ist das?** Mit diesen sechs Regeln prüfst du jede EPK:

1. **Start und Ende sind Ereignisse:** ein Startereignis, mindestens ein Endereignis.
2. **Ereignis und Funktion wechseln sich ab**, auch über Konnektoren hinweg.
3. **Je eine Kante rein, eine raus** bei Ereignissen und Funktionen. Verzweigen und Zusammenführen nur über Konnektoren.
4. **Nur Funktionen entscheiden:** Nach einem Ereignis kommt kein XOR- und kein OR-Split. AND ist erlaubt.
5. **Zusammenführen wie aufgeteilt:** XOR-Split → XOR-Join, AND-Split → AND-Join, OR → OR.
6. **Richtig benennen:** Ereignis als Zustand („Auftrag erfasst“), Funktion als Tätigkeit („Auftrag erfassen“).

So prüfst du eine gegebene EPK:

1. Anfang und Ende ansehen (Regel 1).
2. Von oben nach unten gehen und prüfen, ob Ereignis und Funktion sich abwechseln (Regel 2).
3. Bei jedem Element die Kanten zählen (Regel 3).
4. Bei jedem Split schauen, was davor steht (Regel 4).
5. Jeden Split seinem Join zuordnen (Regel 5).
6. Alle Beschriftungen lesen (Regel 6).
7. Zum Schluss fragen: Stimmt der Ablauf auch fachlich?

| Typischer Fehler | Falsch | Richtig | Regel |
|---|---|---|---|
| Ereignis entscheidet | „Reklamation eingegangen“ → XOR | „Garantie prüfen“ → XOR | 4 |
| Funktion folgt auf Funktion | anfordern → versenden | anfordern → „Leuchte eingetroffen“ → versenden | 2 |
| falscher Join | XOR-Split … AND-Join | XOR-Split … XOR-Join | 5 |
| Tätigkeit als Ereignis | Ereignis „Garantie prüfen“ | Ereignis „Garantie gültig“ | 6 |
| Start fehlt | Modell beginnt mit einer Funktion | Startereignis ergänzen | 1 |

Warum XOR-Split mit AND-Join nicht geht: Nach dem XOR kommt nur ein Weg an. Der AND-Join wartet aber auf alle Wege, also für immer. Der Prozess endet nie (Deadlock).

> [!IMPORTANT]
> **Das Wichtigste**
> Die sechs Regeln auswendig lernen. Sie sind das Werkzeug für jede Fehlersuche.

> [!WARNING]
> **Achtung**
> Regel 4 gilt nur für Verzweigungen (Splits). Ein XOR-**Join** direkt nach Ereignissen ist erlaubt, denn ein Ereignis kann nichts entscheiden, aber Wege können zusammenlaufen. Und: Ein Modell kann alle Regeln einhalten und trotzdem fachlich falsch sein.

## Übungen

> [!TIP]
> **Übung 1 · leicht**
> Stimmt das? „In einer EPK darf direkt nach einem Ereignis mit XOR verzweigt werden.“ Begründe kurz.
> *Quelle: Folie T2B1 F. 2 („Stimmt das?“), sinngemäß*

> [!TIP]
> **Übung 2 · leicht**
> Welche Benennung eignet sich für ein Ereignis? A „Rechnung erstellen“ · B „Rechnung erstellt“ · C „Rechnungserstellung durch Buchhaltung“ · D „Buchhaltung“
> *Quelle: Lernseite WI, Aufgabe 3.7 (eigene Aufgabe nach T1B3 F. 18)*

> [!TIP]
> **Übung 3 · mittel**
> Nach der Funktion „Versandart festlegen“ kann die Rechnung per Post, per E-Mail oder auf beiden Wegen verschickt werden. Welcher Konnektor passt? A XOR · B OR (∨) · C AND (∧) · D kein Konnektor, zwei Kanten genügen
> *Quelle: Lernseite WI, Aufgabe 3.6 (eigene Aufgabe nach T1B3 F. 13)*

> [!TIP]
> **Übung 4 · Prüfungsniveau**
> Was ist an dieser EPK falsch? Finde die Fehler, nenne jeweils die verletzte Regel und beschreibe die Korrektur.
>
> Ereignis „Kunde erteilt Flugauftrag“ → Funktion „Auftrag erfassen“ → Ereignis „Auftrag erfasst“ → Funktion „Verfügbarkeit prüfen“ → OR-Split in die Ereignisse „Flug nicht verfügbar“ und „Flug verfügbar“. Nach „Flug nicht verfügbar“: Funktion „Alternative vorschlagen“ → XOR-Split in „Kunde ist nicht einverstanden“ (→ Funktion „Auftrag stornieren“) und „Kunde ist einverstanden“. Das Ereignis „Kunde ist einverstanden“ und das Ereignis „Flug verfügbar“ führen beide direkt in die Funktion „Reise buchen und bestätigen“. „Auftrag stornieren“ und „Reise buchen und bestätigen“ laufen in einen AND-Join → Ereignis „Bearbeitung beendet“.
>
> *Quelle: Folie T1B3 F. 19, sinngemäß (offizielle Lösung T1B3 mit Lösungen, F. 20)*

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> Modelliere als EPK: Bei der Sonnenschein AG geht eine Stornoanfrage ein. Der Kundenservice prüft die Stornobedingungen im Buchungssystem. Ist die Stornierung kostenfrei, wird die Buchung direkt storniert. Fallen Gebühren an, wird zuerst eine Gebührenrechnung erstellt und dann storniert. Nach der Stornierung werden gleichzeitig das Hotel informiert und der Kunde benachrichtigt. Danach ist die Stornierung abgeschlossen.
> *Quelle: Lernseite WI, Aufgabe 3.15 (eigene Aufgabe)*

## Lösungen

### Übung 1

**Falsch.** Nach einem Ereignis gibt es keinen XOR- oder OR-Split, denn nur Funktionen entscheiden (Regel 4). Ein Join nach Ereignissen ist dagegen erlaubt.

### Übung 2

**B.** Ereignisse sind Zustände (Partizip: „erstellt“). A ist eine Funktion, D eine Organisationseinheit.

### Übung 3

**B, OR.** Mindestens ein Weg, auch beide: inklusives Oder. XOR würde „beide“ ausschließen. Zwei Kanten ohne Konnektor verletzen Regel 3.

### Übung 4

Offizielle Lösung (T1B3 mit Lösungen): drei Regelverstöße, ein fachlicher Fehler, eine Schwäche.

1. **OR nach „Verfügbarkeit prüfen“, fachlicher Fehler:** Ein Flug ist verfügbar oder nicht, nie beides. Richtig ist XOR.
2. **Zwei Eingänge bei „Reise buchen und bestätigen“, Regel 3:** Davor gehört ein XOR-Join.
3. **AND-Join führt XOR-Wege zusammen, Regel 5:** Das AND wartet ewig. Richtig ist ein XOR-Join.
4. **Startereignis als Tätigkeit formuliert, Regel 6:** „Kunde erteilt Flugauftrag“ besser als „Flugauftrag eingegangen“.
5. **Ein Ende für zwei Ergebnisse, Schwäche:** Besser zwei Endereignisse „Auftrag storniert“ und „Reise gebucht“.

Korrigierter Ablauf:

1. Ereignis „Flugauftrag eingegangen“ → Funktion „Auftrag erfassen“ → Ereignis „Auftrag erfasst“.
2. Funktion „Verfügbarkeit prüfen“ → **XOR-Split** in „Flug verfügbar“ und „Flug nicht verfügbar“.
3. Nach „Flug nicht verfügbar“: Funktion „Alternative vorschlagen“ → XOR-Split in „Kunde ist einverstanden“ und „Kunde ist nicht einverstanden“.
4. „Kunde ist nicht einverstanden“ → Funktion „Auftrag stornieren“ → Endereignis „Auftrag storniert“.
5. „Flug verfügbar“ und „Kunde ist einverstanden“ laufen in einen **XOR-Join** → Funktion „Reise buchen und bestätigen“ → Endereignis „Reise gebucht“.

### Übung 5

```text
⟨ Stornoanfrage eingegangen ⟩
            │
( Stornobedingungen prüfen )   ── Kundenservice, Buchungssystem
            │
          (XOR)
     ┌──────┴──────┐
⟨ Storno kostenfrei ⟩   ⟨ Gebühr fällig ⟩
     │                     │
     │          ( Gebührenrechnung erstellen )
     │                     │
     │          ⟨ Gebührenrechnung erstellt ⟩
     └──────┬──────┘
          (XOR)
            │
   ( Buchung stornieren )
            │
   ⟨ Buchung storniert ⟩
            │
           (∧)
     ┌──────┴──────┐
( Hotel informieren )  ( Kunde benachrichtigen )
     └──────┬──────┘
           (∧)
            │
⟨ Stornierung abgeschlossen ⟩
```

Prüfpunkte:

1. Start und Ende sind Ereignisse (Regel 1).
2. Der XOR-Split folgt auf eine Funktion (Regel 4) und wird mit XOR zusammengeführt (Regel 5).
3. Der AND-Split folgt auf ein Ereignis. Das ist erlaubt.
4. Nach dem AND-Join folgt ein Ereignis. So wechseln sich Funktion und Ereignis auch über den Konnektor ab (Regel 2).
