---
title: "Speicher: Arten, Hierarchie, RAID"
order: 10
summary: "Register, Cache, RAM und Flash, warum ein kleiner Cache so viel bringt, wie viel Speicher n Adressleitungen ansprechen, die Speicherhierarchie und RAID 0, 1, 5 und 6 mit Kapazität und Parität."
klausur: "relevant"
---

Auf deinem Schreibtisch liegt, was du gerade brauchst. Im Regal daneben steht mehr, und im Keller lagern alte Ordner. Je weiter weg, desto mehr Platz, aber desto länger dauert es, etwas zu holen. Ein Rechner organisiert seinen Speicher genauso: Ganz nah an der CPU ist der Speicher klein und schnell, weiter weg groß und langsam.

Aufgabe 10 der Klausur (4 Punkte) fragt „allgemeine Fragen, Hierarchie, RAID“. Du solltest die Speicherarten einordnen, die Pyramide skizzieren, erklären, warum ein Cache funktioniert, und für RAID 0, 1, 5 und 6 Prinzip, Mindestzahl der Platten, Ausfallsicherheit und Nutzkapazität angeben. Dazu kommen zwei kleine Rechnungen.

## Speicherarten

**Was ist das?** Die Folie ordnet die Speicher vom schnellsten zum langsamsten:

| Art | Eigenschaften |
|---|---|
| Register | in der CPU, extrem schnell, sehr klein, teuer |
| Cache (L1, L2, L3) | sehr schneller Zwischenspeicher für Daten und Programmteile, Teil der CPU, aus Kostengründen klein |
| Hauptspeicher (RAM) | hält Programme und Daten; verliert ohne Strom seinen Inhalt |
| Flash (früher ROM, EPROM) | meist nur gelesen, etwa für BIOS und Firmware; behält den Inhalt ohne Strom |

> [!IMPORTANT]
> **Das Wichtigste**
> Register → Cache → RAM → Flash: von schnell und klein zu langsam und groß.

> [!WARNING]
> **Achtung**
> Register gehören nicht zum Hauptspeicher. Sie sitzen direkt in der CPU.

## Cache und Lokalität

**In einem Satz:** Der Cache ist ein kleiner, schneller Ablageplatz für das, was die CPU gleich wieder braucht.

**Stell dir vor:** Du lernst für die Klausur. Die Bücher, die du heute brauchst, legst du auf den Schreibtisch (Cache). Der Rest steht im Keller (Hauptspeicher). Holst du ein Buch aus dem Keller, nimmst du die zwei daneben gleich mit, weil du sie wahrscheinlich auch brauchst. Fehlt dir doch eins, musst du in den Keller laufen: Das ist ein Cache-Miss.

**Was ist das?** Die CPU wird immer schneller, der Hauptspeicher kommt nicht hinterher. Den ganzen Speicher auf die CPU zu bauen, wäre viel zu teuer. Der Kompromiss ist ein kleiner, schneller Cache.

Dass ein so kleiner Speicher hilft, liegt an der **Lokalität** (auf Deutsch: „Nähe“): Programme greifen in kurzer Zeit nur auf einen kleinen Teil des Speichers zu. Der nächste Befehl liegt sehr wahrscheinlich direkt neben dem letzten. Deshalb lädt man beim Zugriff auf ein Wort gleich die Nachbarn mit in den Cache.

Zwei Beispiele aus der Vorlesung:

- **Schleifen:** Derselbe Programmteil wird mehrfach durchlaufen.
- **Arrays und Tabellen:** Benachbarte Datensätze werden vorab in den Cache geholt.

Liegt ein benötigter Bereich doch nicht im Cache, muss er aus dem Hauptspeicher nachgeladen werden. Das heißt **Cache-Miss** (die Folie schreibt „Cache-fault“).

> [!IMPORTANT]
> **Das Wichtigste**
> Ein Cache lohnt sich wegen der Lokalität: Was gleich gebraucht wird, liegt meist neben dem, was gerade gebraucht wurde.

> [!WARNING]
> **Achtung**
> „Ein Cache lohnt sich, weil er groß ist“ ist falsch. Er ist gerade klein.

## Arbeitsspeicher und Adressleitungen

**Was ist das?** Der Arbeitsspeicher besteht aus vielen Zellen mit je 8 Bit (einem Byte). Jede Zelle hat eine Nummer, ihre Adresse. Die Zahl der Leitungen im Adressbus bestimmt, wie viele Zellen man ansprechen kann. Mit n Leitungen gibt es 2ⁿ Adressen, genau wie in Kapitel 4.

**Stell dir vor:** Jede Leitung ist ein Schalter, an oder aus. Jede Stellung aller Schalter zusammen ist eine Hausnummer.

| Leitungen | mögliche Adressen |
|---|---|
| 1 | 2 (0, 1) |
| 2 | 4 (00, 01, 10, 11) |
| 3 | 8 |
| 10 | 1 024 = 1 KB |

Du brauchst: 2¹⁰ = 1 KB, 2²⁰ = 1 MB, 2³⁰ = 1 GB, 2⁴⁰ = 1 TB. Die Folien rechnen mit dem Faktor 1 024.

**Vorwärts: Leitungen → Speichergröße**

1. Den Exponenten in einen Teil 10, 20, 30 oder 40 und einen Rest zerlegen.
2. Den Rest als Zweierpotenz ausrechnen.
3. Mit der passenden Einheit verbinden.

**Durchgerechnetes Beispiel:** 32 Leitungen

1. 32 = 2 + 30.
2. 2² = 4.
3. 2³⁰ = 1 GB, also **4 GB**.

Weitere Werte: 16 Leitungen = 2⁶ · 2¹⁰ = 64 KB. 48 Leitungen = 2⁸ · 2⁴⁰ = 256 TB.

**Rückwärts: Speichergröße → Leitungen**

1. Die Zahl vor der Einheit als Zweierpotenz schreiben.
2. Die Einheit als Zweierpotenz schreiben.
3. Die Exponenten addieren.

**Durchgerechnetes Beispiel (Folie):** 512 GB

1. 512 = 2⁹.
2. 1 GB = 2³⁰.
3. 9 + 30 = 39, also **39 Adressleitungen**.

> [!IMPORTANT]
> **Das Wichtigste**
> n Adressleitungen → 2ⁿ Byte. Jede zusätzliche Leitung verdoppelt den Speicher.

> [!WARNING]
> **Achtung**
> Nicht n · 8 oder 2 · n rechnen. Die Zahl der Adressen wächst exponentiell.

## Speicherhierarchie

**Was ist das?** Man kann nicht alles in schnellem Speicher halten, das wäre unbezahlbar. Deshalb gibt es eine Hierarchie. Je weiter du nach unten gehst, desto größer werden drei Werte: die **Zugriffszeit** (also langsamer), die **Kapazität** und die **Bits pro Euro** (also billiger pro Bit).

```text
                 /\
                /  \        Register
               /----\       L1-Cache (kB)
              /      \      L2-Cache (MB)
             /--------\     L3-Cache
            /          \    Hauptspeicher / RAM (GB)
  volatil  ==============   ← Grenze: Strom aus = Inhalt weg
persistent/              \  Flash / SSD (TB)
          /----------------\ Festplatte (TB)
         /                  \ Band, optisch, Cloud (Backup)

oben:  kleiner, schneller, teurer pro Bit
unten: größer, langsamer, billiger pro Bit
```

**Volatil** heißt: Der Inhalt verschwindet ohne Strom (Register, Cache, RAM). **Persistent** heißt: Er bleibt erhalten (Flash, SSD, Festplatte, Band).

Kurz zu den Massenspeichern: Eine **Festplatte** hat magnetisch beschichtete Scheiben und einen Schreib-/Lesekopf. Eine **SSD** besteht aus NAND- bzw. NOR-Gattern, hat keine beweglichen Teile und ist sehr schnell, verträgt aber nur begrenzt viele Schreibzyklen. **Magnetbänder** sind für Backups gedacht.

> [!IMPORTANT]
> **Das Wichtigste**
> Von oben nach unten: langsamer, größer, billiger pro Bit. Die Grenze volatil/persistent liegt zwischen RAM und Flash/SSD.

> [!WARNING]
> **Achtung**
> Die Folie nennt Flash bzw. SSD „Primärspeicher“. Üblich ist: Primärspeicher = Arbeitsspeicher, SSD und Festplatte = Sekundär- oder Massenspeicher. Für die Klausur zählt die Reihenfolge und die Grenze volatil/persistent.

## RAID

**In einem Satz:** RAID verteilt Daten so auf mehrere Platten, dass es schneller geht oder ein Ausfall nichts kaputt macht.

**Stell dir vor:** Bei einem Umzug tragen zwei Leute die Kisten abwechselnd: doppelt so schnell, aber stolpert einer, ist seine Hälfte kaputt (RAID 0). Oder du kopierst deine Mitschrift für eine Freundin: Verliert eine von euch das Heft, hat die andere noch alles (RAID 1). Oder du notierst zu jeder Zeile eine Prüfsumme, mit der du einen fehlenden Wert zurückrechnen kannst (RAID 5).

**Was ist das?** RAID (Redundant Array of Independent Disks, auf Deutsch etwa „Verbund unabhängiger Platten mit Reserve“) fasst mehrere Festplatten zu einem logischen Laufwerk zusammen. Für den Rechner sieht es aus wie eine große Platte. Ziel ist mehr Geschwindigkeit, mehr Ausfallsicherheit oder beides. Zwei Grundtechniken:

- **Striping:** Daten werden in Stücke zerlegt und reihum auf die Platten verteilt. Beim Lesen arbeiten alle Platten parallel.
- **Mirroring:** Daten werden auf eine zweite Platte gespiegelt, also verdoppelt.

```text
RAID 0 (Striping)      RAID 1 (Mirroring)     RAID 5 (Striping + verteilte Parität)
Platte1  Platte2       Platte1  Platte2       P1     P2     P3     P4
Strip0   Strip1        A        A             S0     S1     S2     P0-2
Strip2   Strip3        B        B             S3     S4     P3-5   S5
                                              S6     P6-8   S7     S8
```

| Level | Prinzip | min. Platten | verkraftete Ausfälle | Nutzkapazität bei n Platten à C |
|---|---|---|---|---|
| RAID 0 | Striping ohne Redundanz: schnell, aber fällt eine Platte aus, sind alle Daten weg | 2 | 0 | n · C |
| RAID 1 | Mirroring: jede Platte wird gespiegelt | 2 | 1 je Spiegelpaar | n · C / 2 |
| RAID 5 | Striping plus ein Paritätsblock pro Zeile, reihum verteilt | 3 | 1 | (n − 1) · C |
| RAID 6 | wie RAID 5, aber doppelte Parität | 4 | 2 | (n − 2) · C |

Mindestplatten und Ausfälle für RAID 5 und 6 stehen in der Rückschau. Die Werte für RAID 0 und 1 und die Kapazitätsformeln sind eine Ergänzung.

### Nutzkapazität berechnen

1. Anzahl der Platten n und Größe C je Platte ablesen.
2. Die Formel für das RAID-Level aus der Tabelle nehmen.
3. Einsetzen.

**Durchgerechnetes Beispiel:** 4 Platten à 2 TB

- RAID 0: 4 · 2 = 8 TB
- RAID 1: 4 · 2 / 2 = 4 TB
- RAID 5: (4 − 1) · 2 = 6 TB
- RAID 6: (4 − 2) · 2 = 4 TB

### Wie hilft die Parität?

Diese Erklärung ist eine Ergänzung. Die Idee mit normalen Zahlen: Du hast 3, 5 und 4 gespeichert und dazu die Summe 12. Fällt die 5 weg, rechnest du 12 − 3 − 4 = 5 zurück. RAID macht dasselbe, nur mit XOR statt Plus. Der Paritätsblock einer Zeile ist das bitweise **XOR** aller Datenblöcke (Kapitel 5). Fällt ein Block aus, bekommst du ihn zurück, indem du alle übrigen Blöcke und die Parität wieder XOR-verknüpfst.

1. Parität berechnen: alle Datenblöcke spaltenweise XOR-verknüpfen.
2. Bei einem Ausfall: die übrigen Blöcke und die Parität XOR-verknüpfen.

**Durchgerechnetes Beispiel:**

```text
Platte 1:  1011
Platte 2:  0110
Platte 3:  1100
Parität:   1011 XOR 0110 XOR 1100 = 0001   (Platte 4)

Platte 2 fällt aus:
           1011 XOR 1100 XOR 0001 = 0110   ✓ wiederhergestellt
```

XOR ist 1, wenn die Anzahl der Einsen in einer Spalte ungerade ist, wie beim Paritätsbit in Kapitel 1.

> [!IMPORTANT]
> **Das Wichtigste**
> RAID 0 = schnell, keine Sicherheit. RAID 1 = Spiegel. RAID 5 = Parität, 1 Ausfall, mindestens 3 Platten. RAID 6 = doppelte Parität, 2 Ausfälle, mindestens 4 Platten.

> [!WARNING]
> **Achtung**
> RAID 0 ist nicht ausfallsicher, auch wenn „Redundant“ im Namen steht. Und RAID ersetzt kein Backup: Löschst du versehentlich eine Datei, wird das Löschen sofort auf alle Platten übertragen (Ergänzung).

## Übungen

> [!TIP]
> **Übung 1 · leicht**
> Nennen Sie die beiden Grundtechniken von RAID und je ein RAID-Level, das sie verwendet.
> *Quelle: Lernseite GIT, Aufgabe 10.5 (eigene Aufgabe nach VL03b F. 16–17)*

> [!TIP]
> **Übung 2 · mittel**
> a) Wie viel Speicher kann ein Prozessor mit 24 Adressleitungen ansprechen? b) Wie viele Adressleitungen braucht man für 16 GB?
> *Quelle: Lernseite GIT, Aufgabe 10.3 (eigene Aufgabe nach VL03b F. 10)*

> [!TIP]
> **Übung 3 · mittel**
> Sie haben 5 Platten à 4 TB. Wie groß ist die Nutzkapazität bei RAID 0, 5 und 6, und wie viele Ausfälle verkraftet jeweils das System?
> *Quelle: Lernseite GIT, Aufgabe 10.4 (eigene Aufgabe)*

> [!TIP]
> **Übung 4 · Prüfungsniveau**
> Drei Datenblöcke 1100, 1010, 0111. Berechnen Sie den Paritätsblock und stellen Sie den zweiten Block aus den anderen wieder her.
> *Quelle: Lernseite GIT, Aufgabe 10.6 (eigene Aufgabe)*

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> Skizzieren Sie die Speicherhierarchie und kennzeichnen Sie, was sich von oben nach unten verändert. Wo verläuft die Grenze zwischen volatil und persistent? (2 Punkte)
> *Quelle: Lernseite GIT, Aufgabe 10.1 (eigene Aufgabe nach VL03b F. 12–13)*

> [!TIP]
> **Übung 6 · Prüfungsniveau**
> Multiple Choice (2 Punkte). Welche Aussagen sind korrekt?
> 1. RAID 0 verkraftet den Ausfall einer Platte.
> 2. RAM ist ein volatiler Speicher.
> 3. RAID 5 braucht mindestens drei Platten.
> 4. Je weiter unten in der Speicherhierarchie, desto kürzer die Zugriffszeit.
>
> *Quelle: Lernseite GIT, Aufgabe 10.7 (eigene Aufgabe im Klausurstil)*

## Lösungen

### Übung 1

- **Striping:** RAID 0 (auch RAID 5 und 6).
- **Mirroring:** RAID 1.

### Übung 2

- a) 24 = 4 + 20, also 2²⁴ = 2⁴ · 2²⁰ = 16 · 1 MB = **16 MB**.
- b) 16 GB = 2⁴ · 2³⁰ = 2³⁴, also **34 Leitungen**.

### Übung 3

| Level | Rechnung | Nutzkapazität | Ausfälle |
|---|---|---|---|
| RAID 0 | 5 · 4 | 20 TB | 0 |
| RAID 5 | (5 − 1) · 4 | 16 TB | 1 |
| RAID 6 | (5 − 2) · 4 | 12 TB | 2 |

### Übung 4

1. Parität, spaltenweise (XOR = 1, wenn die Bits verschieden sind):

```text
  1100
⊕ 1010
= 0110
⊕ 0111
= 0001   ← Paritätsblock
```

2. Block 2 wiederherstellen: die übrigen Blöcke und die Parität XOR-verknüpfen: 1100 XOR 0111 = 1011. Dann 1011 XOR 0001 = **1010** ✓ (das ist wieder der ursprüngliche Block 2).

### Übung 5

Pyramide von oben nach unten: Register → L1-Cache → L2-Cache → L3-Cache → RAM | Flash/SSD → Festplatte → Band, optisch, Cloud.

- Nach unten werden Zugriffszeit, Kapazität und Bits pro Euro größer: langsamer, größer, billiger pro Bit.
- Die Grenze volatil/persistent liegt **zwischen RAM und Flash/SSD**.

### Übung 6

Richtig sind **2 und 3**.

- Option 1 ist falsch: RAID 0 hat keine Redundanz.
- Option 4 ist falsch: Nach unten wird die Zugriffszeit länger.
