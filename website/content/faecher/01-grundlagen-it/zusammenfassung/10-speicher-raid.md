In Kapitel 9 lagen Programme und Daten einfach „im Speicher“. Dieses Kapitel schaut genauer hin. Es gibt verschiedene Speicherarten, die nach Tempo, Größe und Preis geordnet sind. Und mit RAID schützt man Daten vor dem Ausfall einer Festplatte. In der Klausur ist das Aufgabe 10 mit 4 Punkten: allgemeine Fragen, Hierarchie, RAID und zwei kleine Rechnungen.

### Speicherarten und Cache

Vom schnellsten zum langsamsten geordnet gibt es Register, Cache (L1 bis L3), Hauptspeicher (RAM) und Flash. Register und Cache sitzen in der CPU und sind klein und teuer. Der RAM verliert ohne Strom seinen Inhalt, Flash behält ihn. Der Cache hilft, weil die CPU viel schneller ist als der Hauptspeicher. Dass ein so kleiner Speicher genügt, liegt an der **Lokalität**. Programme greifen in kurzer Zeit nur auf einen kleinen Teil des Speichers zu, zum Beispiel in Schleifen oder bei benachbarten Einträgen eines Arrays. Deshalb lädt man beim Zugriff gleich die Nachbarn mit. Fehlt ein Bereich doch, gibt es einen **Cache-Miss**, und er wird aus dem RAM nachgeladen.

### Adressleitungen und Hierarchie

Jede Speicherzelle des Arbeitsspeichers hat 8 Bit und eine Adresse. Mit n Adressleitungen gibt es 2ⁿ Adressen, also 2ⁿ Byte. Du brauchst dafür 2¹⁰ = 1 KB, 2²⁰ = 1 MB, 2³⁰ = 1 GB und 2⁴⁰ = 1 TB. Jede zusätzliche Leitung verdoppelt den Speicher. Den ganzen Speicher kann man aber nicht schnell bauen, das wäre unbezahlbar. Deshalb gibt es die **Speicherhierarchie** als Pyramide: oben Register und Caches, dann RAM, dann SSD und Festplatte, unten Band und Cloud. Nach unten werden Zugriffszeit, Kapazität und Bits pro Euro größer. Zwischen RAM und SSD liegt die Grenze von **volatil** (Inhalt weg ohne Strom) zu **persistent**.

### RAID

RAID fasst mehrere Platten zu einem logischen Laufwerk zusammen. **Striping** verteilt die Daten reihum, sodass alle Platten parallel arbeiten. **Mirroring** spiegelt sie auf eine zweite Platte. RAID 0 nutzt nur Striping. Es ist schnell, aber fällt eine Platte aus, sind alle Daten weg. RAID 1 spiegelt und verkraftet einen Ausfall je Paar. RAID 5 braucht mindestens 3 Platten und verteilt pro Zeile einen Paritätsblock reihum. Es verkraftet einen Ausfall. RAID 6 hat doppelte Parität, braucht mindestens 4 Platten und verkraftet zwei Ausfälle. Bei n Platten mit der Größe C ist die Nutzkapazität n · C (RAID 0), n · C / 2 (RAID 1), (n − 1) · C (RAID 5) und (n − 2) · C (RAID 6). Die Parität ist das bitweise XOR aller Datenblöcke, wie beim Paritätsbit aus Kapitel 1. RAID ersetzt kein Backup.

### Ein Beispiel, das alles verbindet

Ein Server hat 4 Platten à 4 TB. Im RAID 5 bleiben (4 − 1) · 4 = 12 TB nutzbar, im RAID 6 nur (4 − 2) · 4 = 8 TB. Eine Zeile im RAID 5 enthält die Datenblöcke 1010, 0111 und 1001. Die Parität ist 1010 XOR 0111 XOR 1001 = 0100. Jetzt fällt Platte 2 aus. Du verknüpfst die übrigen Blöcke mit der Parität: 1010 XOR 1001 XOR 0100 = 0111. Das ist genau der verlorene Block ✓. Hat der Server 36 Adressleitungen, kann er 2³⁶ Byte ansprechen. Das sind 2⁶ · 2³⁰ = 64 GB. Rückwärts geht es genauso: 512 GB = 2⁹ · 2³⁰, also braucht man 9 + 30 = 39 Leitungen.

### Das musst du können

- Register, Cache, RAM und Flash ordnen und beschreiben
- erklären, warum ein kleiner Cache wegen der Lokalität so viel bringt
- aus der Zahl der Adressleitungen die Speichergröße berechnen und umgekehrt
- die Speicherhierarchie skizzieren und die Grenze volatil/persistent einzeichnen
- RAID 0, 1, 5 und 6 mit Prinzip, Mindestplatten, Ausfällen und Nutzkapazität angeben
- einen ausgefallenen Block über XOR-Parität wiederherstellen
