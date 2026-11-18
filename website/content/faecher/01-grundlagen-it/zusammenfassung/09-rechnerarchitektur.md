Bisher ging es um Zahlen, Gatter, Programme und Datenstrukturen. Dieses Kapitel setzt alles zu einem Rechner zusammen. Es zeigt, aus welchen Bauteilen er besteht und wie er ein Programm Befehl für Befehl abarbeitet. Das ist der größte Einzelblock der Klausur mit 8 Punkten für „Skizzen, Eigenschaften, Pro und Con“. Du musst beide Architekturen aus dem Kopf zeichnen können.

### Die Von-Neumann-Architektur

Die Grundidee von John von Neumann (1946) ist einfach. Programme und Daten werden binär kodiert und liegen im **gleichen Speicher**. Sie laufen über den **gleichen Bus**, also dasselbe Bündel von Leitungen. Deshalb kann man Programme wie Daten laden und ändern, der Rechner ist universell programmierbar. Er besteht aus fünf Komponenten: Rechenwerk (ALU), Steuerwerk, Bussystem, Speicherwerk und Ein-/Ausgabewerk. Steuerwerk und Rechenwerk bilden zusammen die **CPU**. In die Skizze gehören alle fünf Kästen, die CPU als Rahmen, beim Speicher der Zusatz „Programme und Daten“, ein gemeinsamer Bus und Pfeile in beide Richtungen. Am häufigsten fehlt der Bus. Dazu kommen die Register, kleine schnelle Speicher in der CPU. Der **Befehlszähler** enthält die Adresse des nächsten Befehls, das **Befehlsregister** den aktuellen Befehl selbst, der **Akkumulator** Operanden und Ergebnisse.

### Der Befehlszyklus

Jeder Befehl läuft in fünf Phasen ab. Bei **FETCH** wird der Befehl ins Befehlsregister geladen. Bei **DECODE** entschlüsselt das Steuerwerk ihn. Bei **FETCH OPERANDS** werden die Werte aus dem Speicher geholt. Bei **EXECUTE** rechnet die ALU. Bei **UPDATE INSTRUCTION POINTER** wird der Befehlszähler erhöht oder bei einem Sprung neu gesetzt. Gefragt ist diese Fassung mit fünf Phasen, nicht nur „Fetch, Decode, Execute“. Jeder Speicherzugriff nutzt drei Busse: Der Steuerbus sagt, **ob** gelesen oder geschrieben wird, der Adressbus, **wo**, und der Datenbus, **was**.

### Harvard und der Vergleich

Der gemeinsame Bus ist der Schwachpunkt von Von Neumann. Befehl und Daten müssen nacheinander darüber, eine Anweisung braucht also mindestens zwei Takte. Das ist der **Von-Neumann-Flaschenhals**. Der Engpass ist der Bus, nicht die ALU. Ein zweiter Nachteil ist die Sicherheit: Weil Code und Daten im selben Speicher liegen, kann man als Daten getarnten Code einschleusen. Die **Harvard-Architektur** trennt deshalb beides. Sie hat getrennte Speicher **und** getrennte Busse für Befehle und Daten. So holt sie Befehl und Daten gleichzeitig, sie ist schneller, aber teurer. Von Neumann bleibt einfacher und billiger. Intel x86 nutzt Von Neumann, Mikrocontroller wie AVR nutzen Harvard. ARM und Apple nutzen eine modifizierte Harvard-Architektur: innen getrennt, der Hauptspeicher gemeinsam. Rechnergenerationen und der KI-Exkurs sind nicht klausurrelevant.

### Ein Beispiel, das alles verbindet

Der Befehl ADC NUM2 aus Kapitel 6 soll eine Zahl zum Akkumulator addieren. Bei FETCH schickt die CPU über den Steuerbus „lesen“ und über den Adressbus die Adresse aus dem Befehlszähler. Der Befehl kommt über den Datenbus ins Befehlsregister. Bei DECODE erkennt das Steuerwerk „addiere zum Akkumulator“. Bei FETCH OPERANDS läuft dieselbe Kette noch einmal, diesmal mit der Adresse NUM2. Bei EXECUTE addiert die ALU, im Kern mit Addierwerken aus Kapitel 5. Bei UPDATE zeigt der Befehlszähler auf den nächsten Befehl. Im Von-Neumann-Rechner müssen der Befehl und der Wert NUM2 nacheinander über denselben Bus. Im Harvard-Rechner kommt der nächste Befehl über den Befehlsbus, während der Wert über den Datenbus geholt wird. Genau daraus entsteht der Geschwindigkeitsvorteil.

### Das musst du können

- die Von-Neumann- und die Harvard-Architektur vollständig beschriftet skizzieren
- die fünf Komponenten nennen und ihre Aufgaben erklären
- die fünf Phasen des Befehlszyklus in der richtigen Reihenfolge erläutern
- Befehlszähler und Befehlsregister sowie Steuer-, Adress- und Datenbus unterscheiden
- Pro und Contra beider Architekturen paarweise gegenüberstellen und den Flaschenhals erklären
