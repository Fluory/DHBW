---
title: "Rechnerarchitektur: Von Neumann und Harvard"
order: 9
summary: "Die fünf Komponenten des Von-Neumann-Rechners, der Befehlszyklus in fünf Phasen, die Harvard-Architektur mit getrennten Speichern und Bussen, Pro und Contra sowie CPU und Bussystem."
klausur: "relevant"
---

Stell dir eine Küche mit nur einer Tür vor. Der Koch muss durch diese Tür das Rezept holen und durch dieselbe Tür die Zutaten. Beides gleichzeitig geht nicht. Hätte die Küche zwei Türen, ginge es schneller, aber der Umbau wäre teurer. Genau das ist der Unterschied zwischen der Von-Neumann- und der Harvard-Architektur.

Das ist der größte Einzelblock der Klausur: 8 Punkte für „Skizzen, Eigenschaften, Pro und Con“. Du musst beide Architekturen aus dem Kopf zeichnen, die Komponenten und den Befehlszyklus erklären und Vor- und Nachteile gegenüberstellen. Übe die beiden Skizzen, bis du jede in zwei Minuten schaffst.

## Die Von-Neumann-Architektur

**Was ist das?** John von Neumann beschrieb 1946 einen Universalrechner, der nicht an ein festes Programm gebunden ist. Der Kern der Idee:

- Daten **und** Programme werden binär kodiert und liegen im **gleichen Speicher**.
- Programmcode und Daten werden über den **gleichen Bus** transportiert.

Daraus folgt: Programme können wie Daten geladen, geändert und gespeichert werden. Deshalb ist der Rechner universell programmierbar (Stored-Program-Prinzip). Befehle werden der Reihe nach abgearbeitet. Steuerung und Rechnen sind getrennt.

> [!IMPORTANT]
> **Das Wichtigste**
> Von Neumann: **ein** gemeinsamer Speicher für Programme und Daten, **ein** gemeinsamer Bus.

> [!WARNING]
> **Achtung**
> Die Folie schreibt, wesentliche Ideen seien 1937 in der Zuse Z1 realisiert worden. Das ist umstritten: Die Z1 las ihr Programm von Lochstreifen und hatte keinen gemeinsamen Speicher für Programm und Daten. Für die Klausur gilt: Von-Neumann-Architektur, 1946, John von Neumann.

## Die fünf Komponenten und die Skizze

**Was ist das?** Ein Von-Neumann-Rechner besteht aus fünf Komponenten:

| Komponente | Aufgabe |
|---|---|
| Rechenwerk (ALU) | führt Rechenoperationen und logische Verknüpfungen aus |
| Steuerwerk (Control Unit) | interpretiert die Befehle und regelt die Befehlsfolge |
| Bussystem | verbindet alle Komponenten (Steuer-, Adress-, Datenbus) |
| Speicherwerk (RAM) | speichert Programme **und** Daten |
| Ein-/Ausgabewerk | Verbindung zu Tastatur, Bildschirm und anderen Systemen |

Steuerwerk und Rechenwerk bilden zusammen mit ihren Registern die **CPU**.

So zeichnest du die Skizze:

```text
┌──────────── CPU ────────────┐
│  ┌────────────┐ ┌─────────┐ │
│  │ Steuerwerk │ │Rechen-  │ │
│  │            │ │werk ALU │ │
│  └────────────┘ └─────────┘ │
└──────────────┬──────────────┘
               ⇅
═══════════════╪═══════════════════════  Bussystem (ein gemeinsamer Bus)
        ⇅                   ⇅
┌────────────────┐   ┌─────────────────┐
│  Speicherwerk  │   │ Ein-/Ausgabewerk│
│ Programme UND  │   │ Tastatur,       │
│ Daten          │   │ Bildschirm      │
└────────────────┘   └─────────────────┘
```

Was unbedingt in die Skizze gehört:

1. Alle fünf Kästen, beschriftet.
2. Steuerwerk und Rechenwerk zusammen als CPU umrahmt.
3. Beim Speicher „Programme und Daten“ dazuschreiben.
4. Der Bus als eine gemeinsame Leitung.
5. Pfeile in beide Richtungen, weil gelesen und geschrieben wird.

### Register

Register sind sehr schnelle, kleine Speicher direkt in der CPU. Sie gehören nicht zum Hauptspeicher.

- **Akkumulator** (im Rechenwerk): hält Operanden und Ergebnisse.
- **Befehlszähler** (Program Counter, im Steuerwerk): enthält die **Adresse** des nächsten Befehls.
- **Befehlsregister** (Instruction Register, im Steuerwerk): enthält den **aktuellen Befehl** selbst.
- **Statusregister:** zum Beispiel „wahr“ oder „falsch“ nach einem Vergleich.

> [!IMPORTANT]
> **Das Wichtigste**
> Fünf Komponenten: Rechenwerk, Steuerwerk, Bussystem, Speicherwerk, Ein-/Ausgabewerk. CPU = Steuerwerk + Rechenwerk.

> [!WARNING]
> **Achtung**
> Der Bus wird in der Skizze am häufigsten vergessen. Ohne ihn fehlt die Hälfte der Aussage. Und: Befehlszähler und Befehlsregister nicht verwechseln (Adresse gegen Befehl).

## Der Von-Neumann-Zyklus

**Was ist das?** Der Rechner arbeitet jeden Befehl in fünf Phasen ab. Danach beginnt der Zyklus von vorne.

1. **FETCH:** den Befehl aus dem Speicher in das Befehlsregister laden.
2. **DECODE:** Das Steuerwerk entschlüsselt den Befehl in Schaltanweisungen für das Rechenwerk.
3. **FETCH OPERANDS:** die Operanden (Werte) aus dem Speicher holen.
4. **EXECUTE:** Das Rechenwerk führt die Operation aus und schreibt ggf. das Ergebnis in den Speicher.
5. **UPDATE INSTRUCTION POINTER:** Der Befehlszähler wird erhöht oder bei einem Sprung neu gesetzt.

**Beispiel (Ergänzung)** mit dem Assemblerbefehl ADC NUM2 aus Kapitel 6: FETCH holt den Befehl von der Adresse im Befehlszähler. DECODE erkennt „addiere zum Akkumulator“. FETCH OPERANDS holt den Wert an der Adresse NUM2. EXECUTE addiert in der ALU. UPDATE setzt den Befehlszähler auf den nächsten Befehl.

> [!IMPORTANT]
> **Das Wichtigste**
> Fünf Phasen in fester Reihenfolge: Fetch, Decode, Fetch Operands, Execute, Update Instruction Pointer.

> [!WARNING]
> **Achtung**
> Nicht nur „Fetch – Decode – Execute“ nennen. In der Rückschau ist die Fassung mit fünf Phasen gefragt.

## Die Harvard-Architektur

**Was ist das?** Die Harvard-Architektur wurde entwickelt, um den Engpass der Von-Neumann-Architektur zu umgehen. Ihre Merkmale:

- **Getrennte Speicher** für Befehle und Daten, mit eigenen Adressen.
- **Getrennte Busse** für Befehle und Daten.
- **Einzelzyklus:** Befehl und Daten können in einem Schritt gleichzeitig geholt werden. Dadurch ist sie schneller.
- **Kosten:** in der Regel teurer.
- **Einsatz:** Mikrocontroller, Signalverarbeitung, spezielle Rechner für maschinelles Lernen, zunehmend auch PCs und Server.

```text
┌─────────────────┐            ┌─────────────────┐
│ Befehlsspeicher │            │  Datenspeicher  │
│ nur Programm    │            │  nur Daten      │
└────────┬────────┘            └────────┬────────┘
         ⇅ Befehlsbus                   ⇅ Datenbus
┌────────┴─────────── CPU ──────────────┴────────┐
│      Steuerwerk            Rechenwerk (ALU)    │
└───────────────────────┬────────────────────────┘
                        ⇅
               ┌─────────────────┐
               │ Ein-/Ausgabewerk│
               └─────────────────┘
```

> [!IMPORTANT]
> **Das Wichtigste**
> Harvard: **zwei** Speicher, **zwei** Busse. Befehl und Daten werden gleichzeitig geholt.

> [!WARNING]
> **Achtung**
> Der Unterschied besteht aus Speicher **und** Bus. Nur „getrennte Speicher“ zu nennen, reicht nicht.

## Vergleich: Pro und Contra

**Was ist das?** Die Folie nennt für Von Neumann zwei Nachteile und einen Vorteil:

- **Nachteil 1, Von-Neumann-Flaschenhals:** Code und Daten laufen nacheinander über den gemeinsamen Bus. Eine Anweisung braucht mindestens zwei Takte: einen für den Befehl, einen für die Daten. Der Engpass ist der Bus, nicht das Rechenwerk.
- **Nachteil 2, Sicherheit:** Weil Code und Daten im selben Speicher liegen, kann man Code einschleusen, der als Daten getarnt ist (zum Beispiel über einen Buffer Overflow).
- **Vorteil:** einfacher zu bauen und billiger als Harvard.

| Kriterium | Von Neumann | Harvard |
|---|---|---|
| Speicher | ein gemeinsamer Speicher | getrennte Speicher |
| Bus | ein gemeinsamer Bus | getrennte Busse |
| Ablauf | Befehl und Daten nacheinander, mindestens 2 Takte | gleichzeitig, „Einzelzyklus“ |
| Geschwindigkeit | durch den Flaschenhals begrenzt | schneller |
| Kosten | Pro: einfacher, billiger | Contra: teurer |
| Sicherheit | Contra: als Daten getarnter Code | Code und Daten getrennt, dieser Angriff ist erschwert (Ergänzung) |
| Einsatz | klassische PCs, Intel x86 | Mikrocontroller, Signalverarbeitung, KI-Rechner |

Welche Prozessoren nutzen was?

| Prozessorfamilie | Architektur |
|---|---|
| Intel x86 | Von Neumann |
| AVR-Mikrocontroller (zum Beispiel Arduino) | Harvard |
| Apple A- und M-Serie | modifizierte Harvard-Architektur |
| ARM (zum Beispiel Qualcomm Snapdragon) | modifizierte Harvard-Architektur |

„Modifiziert“ heißt: Innen, zwischen CPU und Caches, ist alles getrennt wie bei Harvard. Der große Hauptspeicher ist aber gemeinsam wie bei Von Neumann.

> [!NOTE]
> **Beispiel: Musterantwort „Erläutern Sie den Unterschied“**
> Beim Von-Neumann-Rechner liegen Programme und Daten in einem gemeinsamen Speicher und werden über einen gemeinsamen Bus transportiert. Deshalb müssen Befehl und Daten nacheinander geholt werden. Dieser Von-Neumann-Flaschenhals begrenzt die Geschwindigkeit, und als Daten getarnter Code kann eingeschleust werden. Die Harvard-Architektur trennt Befehls- und Datenspeicher und nutzt getrennte Busse. So können Befehl und Daten gleichzeitig geladen werden. Sie ist dadurch schneller, aber aufwendiger und teurer. Die Von-Neumann-Architektur ist einfacher und günstiger zu bauen.

> [!IMPORTANT]
> **Das Wichtigste**
> Pro und Contra immer paarweise: Harvard schneller, aber teurer. Von Neumann billiger, aber mit Flaschenhals und Sicherheitsrisiko.

> [!WARNING]
> **Achtung**
> „Der Flaschenhals entsteht, weil die ALU zu langsam rechnet“ ist falsch. Der Engpass ist der gemeinsame Bus.

## CPU und Bussystem im Detail

**Was ist das?** Das **Steuerwerk** holt Befehle aus dem Hauptspeicher, lädt Operanden in die Register, lässt das Rechenwerk rechnen und entscheidet, wo es im Programm weitergeht. Das **Rechenwerk** führt die arithmetischen und logischen Operationen aus. **Cache-Speicher** sind schnelle Zwischenspeicher (mehr in Kapitel 10).

Moderne CPUs werden schneller durch größere, mehrstufige Caches (L1 bis L3), Sprungvorhersage, spekulative Ausführung und mehrere Kerne (Multicore).

Das Mainboard verbindet alles über drei Busse:

| Bus | Was läuft darüber? |
|---|---|
| Steuerbus | **ob** gelesen oder geschrieben wird |
| Adressbus | **wo** gelesen oder geschrieben wird |
| Datenbus | **was** gelesen oder geschrieben wird |

So läuft ein Lesezugriff:

1. Lesebefehl über den Steuerbus.
2. Adresse der Speicherzelle über den Adressbus.
3. Daten von der Zelle zur CPU über den Datenbus.

Ein Schreibzugriff läuft genauso, nur fließen die Daten im 3. Schritt von der CPU zur Zelle.

> [!IMPORTANT]
> **Das Wichtigste**
> Steuerbus = ob, Adressbus = wo, Datenbus = was.

> [!WARNING]
> **Achtung**
> Adress- und Datenbus nicht verwechseln. Über den Adressbus läuft nur die Speicheradresse, die eigentlichen Daten laufen über den Datenbus.

> [!CAUTION]
> **Nicht klausurrelevant**
> Die Geschichte der Rechnergenerationen und der Exkurs zu KI-Hardware (GPU, NPU, TPU) sind nicht prüfungsrelevant. Kurz: GPUs sind für KI wichtig, weil sie sehr viele Matrixrechnungen gleichzeitig ausführen.

## Übungen

> [!TIP]
> **Übung 1 · leicht**
> Nennen Sie die fünf Phasen des Von-Neumann-Zyklus in der richtigen Reihenfolge.
> *Quelle: Lernseite GIT, Aufgabe 9.3 (eigene Aufgabe nach VL03a F. 26)*

> [!TIP]
> **Übung 2 · mittel**
> Von Neumann, Harvard oder modifizierte Harvard? a) Arduino (AVR) b) Intel-x86-PC c) Apple M1 d) Signalprozessor
> *Quelle: Lernseite GIT, Aufgabe 9.6 (eigene Aufgabe nach VL03a F. 30, 33)*

> [!TIP]
> **Übung 3 · mittel**
> Beschreiben Sie, welche Busse bei einem Schreibzugriff der CPU auf den Speicher was übertragen.
> *Quelle: Lernseite GIT, Aufgabe 9.8 (eigene Aufgabe nach VL03b F. 9)*

> [!TIP]
> **Übung 4 · Prüfungsniveau**
> Skizzieren Sie den Aufbau eines Von-Neumann-Rechners und beschriften Sie alle Komponenten. (3 Punkte)
> *Quelle: Lernseite GIT, Aufgabe 9.1 (eigene Aufgabe nach Punkteverteilung KV F. 9)*

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> Erläutern Sie den Von-Neumann-Flaschenhals und wie die Harvard-Architektur ihn vermeidet. (3 Punkte)
> *Quelle: Lernseite GIT, Aufgabe 9.4 (eigene Aufgabe im Klausurstil)*

> [!TIP]
> **Übung 6 · Prüfungsniveau**
> Multiple Choice (2 Punkte). Welche Aussagen sind korrekt?
> 1. Bei Von Neumann liegen Programme und Daten im selben Speicher.
> 2. Die Harvard-Architektur ist in der Regel billiger.
> 3. Der Von-Neumann-Zyklus hat fünf Phasen.
> 4. Der Flaschenhals entsteht, weil die ALU zu langsam rechnet.
>
> *Quelle: Lernseite GIT, Aufgabe 9.9 (eigene Aufgabe im Klausurstil)*

## Lösungen

### Übung 1

1. FETCH
2. DECODE
3. FETCH OPERANDS
4. EXECUTE
5. UPDATE INSTRUCTION POINTER

### Übung 2

- a) **Harvard**
- b) **Von Neumann**
- c) **modifizierte Harvard**
- d) **Harvard** (Signalverarbeitung)

### Übung 3

1. **Steuerbus:** der Schreibbefehl.
2. **Adressbus:** die Adresse der Speicherzelle.
3. **Datenbus:** die Daten von der CPU zur Zelle.

### Übung 4

Die Skizze aus dem Abschnitt „Die fünf Komponenten und die Skizze“. Für volle Punkte prüfst du:

1. Fünf beschriftete Kästen: Steuerwerk, Rechenwerk, Speicherwerk, Ein-/Ausgabewerk, Bussystem.
2. Steuerwerk und Rechenwerk als CPU umrahmt.
3. Beim Speicherwerk steht „Programme und Daten“.
4. Ein gemeinsamer Bus verbindet alles.
5. Pfeile in beide Richtungen.

### Übung 5

Beim Von-Neumann-Rechner liegen Befehle und Daten im selben Speicher und werden über denselben Bus transportiert. Deshalb müssen Befehl und Daten nacheinander geholt werden, und eine Anweisung braucht mindestens zwei Taktzyklen. Der Bus wird so zum Engpass, egal wie schnell die CPU rechnet. Die Harvard-Architektur hat getrennte Speicher und getrennte Busse für Befehle und Daten. Dadurch kann sie beide in einem Schritt gleichzeitig laden.

### Übung 6

Richtig sind **1 und 3**.

- Option 2 ist falsch: Harvard ist in der Regel teurer.
- Option 4 ist falsch: Der Engpass ist der gemeinsame Bus, nicht die ALU.
