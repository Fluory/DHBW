---
title: "Mooresches Gesetz und Treiber des Fortschritts"
order: 3
summary: "Was Gordon Moore 1965 wirklich gesagt hat, welche drei Interpretationen daraus entstanden sind, wie man mit Verdopplungen rechnet und welche weiteren Treiber den technischen Fortschritt bestimmen."
klausur: "relevant"
---

Dein Handy ist heute schneller als ein Großrechner vor 40 Jahren und kostet einen Bruchteil davon. Warum ist das so? Eine wichtige Erklärung ist das Mooresche Gesetz: Auf einen Chip passen alle paar Jahre doppelt so viele Transistoren.

In der Klausur ist dieser Block 2 Punkte wert. Die Klausurliste nennt das „Moore’sche Gesetz und seine Interpretationen“. Das einzige Multiple-Choice-Beispiel der Klausurvorbereitung handelt genau davon. Hier kommt es auf einzelne Wörter an: verdoppeln oder verdreifachen, Anzahl oder Größe, Leistung oder Speicher.

## Was Moore wirklich gesagt hat

**Was ist das?** Gordon Moore (später Mitgründer von Intel) schrieb 1965: Seit dem ersten Mikrochip 1959 hat sich die **Anzahl der Komponenten**, also der Transistoren, auf einem Chip **jährlich verdoppelt**. Er sagte das für die nächsten zehn Jahre voraus. Später korrigierte er die Rate auf eine Verdopplung **alle zwei Jahre**.

Warum hängt die Transistorzahl mit dem Preis zusammen? Die Fläche ist der wichtigste Kostenfaktor bei Chips. Passen mehr Transistoren auf dieselbe Fläche, bekommst du mehr Leistung für dasselbe Geld.

> [!IMPORTANT]
> **Das Wichtigste**
> Original: Die **Anzahl** der Transistoren pro Chip verdoppelt sich, zuerst jährlich, später alle zwei Jahre. Es geht um eine Anzahl, nicht um Leistung, Größe oder Preis.

> [!WARNING]
> **Achtung**
> „Moore sagte, die Leistung verdoppelt sich alle 18 Monate“ ist falsch. Das ist eine Interpretation, nicht Moores eigene Aussage.

## Die drei Interpretationen

**Was ist das?** Aus Moores Aussage sind mindestens drei Interpretationen entstanden. Keine davon stammt von Moore selbst:

1. Die Leistung von **Mikroprozessoren** verdoppelt sich alle 18 Monate.
2. Die Leistung von **Computern** verdoppelt sich alle 18 Monate.
3. Der **Preis** für rechnergestützte Informationsverarbeitung **halbiert** sich alle 18 Monate.

| | Was ändert sich? | Zeitraum | Von wem? |
|---|---|---|---|
| Original | Anzahl der Transistoren pro Chip verdoppelt sich | jährlich, später 2 Jahre | Moore 1965 |
| Interpretationen | Leistung verdoppelt sich bzw. Preis halbiert sich | 18 Monate | nicht von Moore |

> [!IMPORTANT]
> **Das Wichtigste**
> Drei Interpretationen, alle mit 18 Monaten: Prozessorleistung verdoppelt, Computerleistung verdoppelt, Preis halbiert.

> [!WARNING]
> **Achtung**
> Typische falsche Optionen: „Speicherkapazität verdoppelt sich“ (Speicher ist keine Interpretation), „Größe eines Transistors halbiert sich“ (es geht um die Anzahl), „Kosten verdoppeln sich“ (sie halbieren sich).

## Mit Verdopplungen rechnen

**In einem Satz:** Verdoppeln heißt, du nimmst nicht jedes Mal etwas dazu, sondern jedes Mal mal 2.

**Stell dir vor:** Du faltest ein Blatt Papier. Nach einmal Falten liegen 2 Lagen aufeinander, nach zweimal 4, nach dreimal 8. Jede Faltung verdoppelt.

| Verdopplungen | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| Faktor | 1 | 2 | 4 | 8 | 16 | 32 |

**Die Formel:** Diese Rechnung ist eine Ergänzung zur Veranschaulichung. Wenn sich etwas alle T Jahre verdoppelt, wächst es in t Jahren um den Faktor 2 hoch (t / T). Dabei ist t der ganze Zeitraum (zum Beispiel 10 Jahre), T die Zeit für eine Verdopplung (zum Beispiel 2 Jahre) und t / T die Anzahl der Verdopplungen.

So gehst du vor:

1. Zeitraum durch die Verdopplungszeit teilen. Das ist die Anzahl der Verdopplungen.
2. 2 hoch diese Anzahl rechnen. Das ist der Wachstumsfaktor.
3. Startwert mal Faktor.

**Durchgerechnetes Beispiel:** Ein Chip hat 1 Milliarde Transistoren. Wie viele hat er nach 10 Jahren bei Verdopplung alle 2 Jahre?

1. 10 / 2 = 5 Verdopplungen.
2. 2⁵ = 32.
3. 1 Milliarde × 32 = 32 Milliarden Transistoren.

Weitere Werte: 6 Jahre bei 18 Monaten ergibt 6 / 1,5 = 4 Verdopplungen, also Faktor 2⁴ = 16. 20 Jahre bei 2 Jahren ergibt 10 Verdopplungen, also Faktor 2¹⁰ = 1 024.

> [!IMPORTANT]
> **Das Wichtigste**
> Erst die Verdopplungen zählen, dann 2 hoch diese Zahl rechnen.

> [!WARNING]
> **Achtung**
> Nicht mal 2 rechnen. 5 Verdopplungen sind nicht 5 × 2 = 10-fach, sondern 2⁵ = 32-fach.

## Grenzen und Auswege

**Was ist das?** Lange hielt das Gesetz sehr gut, inzwischen zeigt sich eine Sättigung. Die Folien nennen zwei Grenzen:

- Bei immer kleineren Strukturen steigen die Kosten pro Transistor wieder.
- Energiebedarf und Kühlung wachsen mit der Rechenleistung.

Als Auswege werden diskutiert: neue Materialien und Lithographie-Verfahren, Chipdesign in der dritten Dimension (3D), Quantencomputer und vor allem Skalierung über viele GPUs, Cluster und Rechenzentren. Zur Größenordnung: Ein aktueller KI-Chip von Nvidia hat 208 Milliarden Transistoren.

> [!IMPORTANT]
> **Das Wichtigste**
> Grenzen: steigende Kosten pro Transistor, steigender Energie- und Kühlungsbedarf. Auswege: neue Materialien, 3D-Chips, Quantencomputer, viele Chips parallel.

> [!WARNING]
> **Achtung**
> Bei „Nennen Sie zwei Grenzen und zwei Auswege“ nicht nur Auswege aufzählen. Beides gehört dazu.

## Multiple Choice richtig beantworten

**Was ist das?** So bewertet der Dozent Multiple Choice: Mindestens eine Antwort ist immer richtig. Jede richtige Entscheidung (angekreuzt oder nicht angekreuzt) bringt +½ Punkt, jede falsche −½ Punkt. Eine negative Summe zählt als 0. Gar nichts ankreuzen ergibt 0 Punkte.

So gehst du vor:

1. Jede Option einzeln lesen, Wort für Wort.
2. Das eine falsche Wort suchen: verdreifacht statt verdoppelt, Speicher statt Leistung, Größe statt Anzahl.
3. Für jede Option entscheiden: richtig oder falsch.
4. Nur die richtigen ankreuzen.

**Durchgerechnetes Beispiel:** Bei vier Optionen mit nur einer richtigen bekommst du für die richtige Lösung 4 × ½ = 2 Punkte. Kreuzt du zusätzlich eine falsche an, hast du drei richtige und eine falsche Entscheidung: 3 × ½ − ½ = 1 Punkt.

> [!IMPORTANT]
> **Das Wichtigste**
> Bei Multiple Choice wird jede Option einzeln gewertet, auch die nicht angekreuzten.

> [!WARNING]
> **Achtung**
> Nicht nach Gefühl ankreuzen. Die Fallen stecken in einzelnen Wörtern.

## Die weiteren Treiber des technischen Fortschritts

**Was ist das?** Die erste Vorlesung nennt fünf Treiber, die die Rechenleistung steigen und die Kosten sinken ließen:

1. **Mooresches Gesetz** und Mikroprozessorleistung.
2. **Digitale Massenspeicher:** Die Kapazität wächst stark, die Preise fallen. Die Menge digitaler Daten verdoppelt sich grob geschätzt jedes Jahr.
3. **Gesetz von Metcalfe:** Der Nutzen eines Netzwerks wächst überproportional mit der Zahl der Teilnehmer.
4. **Sinkende Kommunikationskosten** und das Wachstum des Internets.
5. **Standardisierung:** Gemeinsame Standards wie ASCII, Ethernet, TCP/IP oder HTTP machen Geräte kompatibel und senken die Preise.

### Das Gesetz von Metcalfe

**Stell dir vor:** Ein Telefon allein ist nutzlos. Mit zwei Telefonen kann A B anrufen und B A. Mit drei Telefonen kann jeder jeden der beiden anderen anrufen. Jeder neue Teilnehmer bringt Verbindungen zu *allen* bisherigen mit.

Mit n Teilnehmern gibt es n · (n − 1) mögliche Verbindungen. Auf Deutsch: Jeder der n Teilnehmer kann die n − 1 anderen erreichen. Die Formel zählt „A ruft B an“ und „B ruft A an“ getrennt. So rechnest du:

1. Teilnehmerzahl n bestimmen.
2. n mit (n − 1) multiplizieren.

**Durchgerechnetes Beispiel:** 10 Teilnehmer ergeben 10 · 9 = 90 Verbindungen. Mit 11 Teilnehmern sind es 11 · 10 = 110, also 20 mehr. Mit 20 Teilnehmern sind es 20 · 19 = 380: doppelt so viele Teilnehmer, aber gut viermal so viele Verbindungen.

> [!IMPORTANT]
> **Das Wichtigste**
> Fünf Treiber: Moore, Massenspeicher, Metcalfe, sinkende Kommunikationskosten, Standardisierung. Metcalfe: n · (n − 1).

> [!WARNING]
> **Achtung**
> Die Folie nennt das Wachstum bei Metcalfe „exponentiell“. Die Formel n · (n − 1) wächst aber quadratisch. Wenn du rechnen sollst, nimm die Formel.

## Übungen

> [!TIP]
> **Übung 1 · leicht**
> Was besagt das Mooresche Gesetz in seiner ursprünglichen Form?
> *Quelle: Lernseite GIT, Aufgabe 3.1 (eigene Aufgabe nach VL01 F. 46)*

> [!TIP]
> **Übung 2 · leicht**
> Nennen Sie die drei Interpretationen des Mooreschen Gesetzes.
> *Quelle: Lernseite GIT, Aufgabe 3.2 (eigene Aufgabe nach VL01 F. 47)*

> [!TIP]
> **Übung 3 · mittel**
> Ein Chip hat 1 Milliarde Transistoren. Wie viele hätte er nach 12 Jahren bei einer Verdopplung alle 2 Jahre?
> *Quelle: Lernseite GIT, Aufgabe 3.4 (eigene Aufgabe)*

> [!TIP]
> **Übung 4 · mittel**
> Wie viele mögliche Verbindungen hat ein Netz mit 8 Teilnehmern nach Metcalfe? Wie viele kommen dazu, wenn ein neunter beitritt?
> *Quelle: Lernseite GIT, Aufgabe 3.6 (eigene Aufgabe nach VL01 F. 61)*

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> Multiple Choice (2 Punkte). Welche Aussagen zum Mooreschen Gesetz sind korrekt?
> 1. Die Anzahl der Transistoren auf einem Chip verdreifacht sich alle 1–2 Jahre.
> 2. Die Leistung von Mikroprozessoren verdoppelt sich alle ca. 18 Monate.
> 3. Die in einem Computer verbaute Speicherkapazität verdoppelt sich regelmäßig alle 18 Monate.
> 4. Die Größe eines Transistors halbiert sich alle 1–2 Jahre.
>
> *Quelle: Klausurvorbereitung VL05 F. 5–6, sinngemäß (offizielle Lösung)*

> [!TIP]
> **Übung 6 · Prüfungsniveau**
> Multiple Choice (2 Punkte). Welche Aussagen sind korrekte Interpretationen des Mooreschen Gesetzes?
> 1. Die Kosten für Informationsverarbeitung verdoppeln sich alle 18 Monate.
> 2. Die Leistung von Computern verdoppelt sich alle 18 Monate.
> 3. Die Taktfrequenz verdoppelt sich jährlich.
> 4. Der Preis für rechnergestützte Informationsverarbeitung halbiert sich alle 18 Monate.
>
> *Quelle: Lernseite GIT, Aufgabe 3.3 (eigene Aufgabe im Klausurstil)*

## Lösungen

### Übung 1

Gordon Moore stellte 1965 fest, dass sich die Anzahl der Transistoren (Komponenten) auf einem Chip jährlich verdoppelt. Später korrigierte er auf eine Verdopplung alle zwei Jahre.

### Übung 2

- Die Leistung von Mikroprozessoren verdoppelt sich alle 18 Monate.
- Die Leistung von Computern verdoppelt sich alle 18 Monate.
- Der Preis für rechnergestützte Informationsverarbeitung halbiert sich alle 18 Monate.

### Übung 3

1. Verdopplungen: 12 / 2 = 6.
2. Faktor: 2⁶ = 64.
3. Ergebnis: 1 Milliarde × 64 = **64 Milliarden** Transistoren.

Zum Nachzählen: 1 → 2 → 4 → 8 → 16 → 32 → 64 Milliarden nach 2, 4, 6, 8, 10, 12 Jahren.

### Übung 4

1. 8 Teilnehmer: 8 · 7 = 56 Verbindungen.
2. 9 Teilnehmer: 9 · 8 = 72 Verbindungen.
3. Differenz: 72 − 56 = **16** neue Verbindungen.

### Übung 5

Offizielle Lösung: Nur **Option 2** ist richtig.

- Option 1 ist falsch: verdoppelt, nicht verdreifacht.
- Option 3 ist falsch: Speicherkapazität ist keine der Interpretationen.
- Option 4 ist falsch: Es geht um die Anzahl, nicht um die Größe.

Wer nur Option 2 ankreuzt, hat vier richtige Entscheidungen: 4 × ½ = 2 Punkte.

### Übung 6

Richtig sind **2 und 4**.

- Option 1 ist falsch: Die Kosten halbieren sich, sie verdoppeln sich nicht.
- Option 3 ist falsch: Die Taktfrequenz ist keine Interpretation aus der Vorlesung.
