Kapitel 6 hat gezeigt, wie ein Programm entsteht. Dieses Kapitel fragt, wie ein Programm seine Daten im Speicher ordnet. Das ist einer der größten Blöcke der Klausur mit 6–8 Punkten. „Anwenden“ heißt dort: Operationen von Hand durchspielen, einen Binärbaum bauen und Vor- und Nachteile begründen.

### Array und Liste

Ein **Array** ist eine Reihe nummerierter Fächer mit fester Länge. Der Index beginnt bei 0, ein Array mit 10 Elementen hat also die Indizes 0 bis 9. Über den Index greifst du direkt und schnell auf jedes Element zu. Einfügen und Entfernen gehen aber nur durch Verschieben. Die **verkettete Liste** löst genau dieses Problem. Sie hat keinen Index, bekannt ist nur der Kopf. Jedes Element speichert seine Daten und einen Zeiger auf das nächste, das letzte zeigt auf null. Zum Einfügen von X hinter A setzt du zuerst X.next = A.next und dann A.next = X. Die Reihenfolge ist wichtig, sonst geht der Rest der Liste verloren. Dafür musst du zum Lesen vom Kopf aus durchlaufen. In einer **sortierten Liste** hängst du ein neues Element vor dem ersten größeren ein.

### Stack und Queue

Beim **Stack** kommst du nur an das oberste Element, wie beim Tellerstapel. Das Prinzip heißt **LIFO** (Last In, First Out). push legt oben drauf, pop nimmt das oberste herunter, top liest es nur. Die **Queue** funktioniert wie die Schlange an der Kasse, also **FIFO** (First In, First Out). put stellt hinten an, get nimmt vorne heraus. In beiden Fällen gehört der Fehlerfall dazu: pop, top oder get auf einer leeren Struktur.

### Geordneter Binärbaum

Ein Baum erweitert die Liste: Ein Knoten kann mehrere Nachfolger haben. Die Wurzel liegt auf Ebene 0, die Höhe ist die tiefste Ebene. Im **Binärbaum** hat jeder Knoten höchstens zwei Kinder. **Geordnet** heißt: links kleiner, rechts größer. Beim Einfügen startest du an der Wurzel und gehst nach jedem Vergleich links oder rechts, bis ein freier Platz kommt. Beim Löschen gibt es drei Fälle. Ein Blatt entfernst du einfach, bei einem Kind rückt dieses nach. Bei zwei Kindern ersetzt du den Knoten durch den größten Wert im linken oder den kleinsten im rechten Teilbaum. Fügst du schon sortierte Werte ein, degeneriert der Baum zu einer Liste.

### Ein Beispiel, das alles verbindet

Füge [26, 5, 18, 16, 1, 43, 39, 27, 12] in dieser Reihenfolge ein. 26 wird die Wurzel. 5 geht nach links, 18 rechts unter die 5, 16 links unter die 18, 1 links unter die 5. 43, 39 und 27 landen rechts von der Wurzel. Die 12 wandert über 26, 5, 18 und 16 bis auf Ebene 4. Der Baum hat also die Höhe 4. Probe: Von links nach rechts gelesen ergibt sich 1, 5, 12, 16, 18, 26, 27, 39, 43, also sortiert ✓. Löschst du jetzt 18, rückt ihr einziges Kind 16 mit der 12 nach. Löschst du danach die Wurzel 26 mit zwei Kindern, nimmst du zum Beispiel den kleinsten Wert rechts: rechts zu 43, dann ganz nach links zu 27. Die 27 wird neue Wurzel. Für die Wahl der Struktur fragst du: Welches Element brauche ich als Nächstes? Das neueste (Stack), das älteste (Queue), eines über seine Nummer (Array) oder eines über „kleiner oder größer“ (Binärbaum)?

### Das musst du können

- Array und verkettete Liste mit Vor- und Nachteilen vergleichen
- ein Element in eine Liste einfügen und die richtige Reihenfolge der Zeiger begründen
- eine Folge von Stack- und Queue-Operationen durchspielen, mit Ausgaben
- einen geordneten Binärbaum aus einer Zahlenfolge bauen und die Probe machen
- Knoten in allen drei Fällen löschen
- zu einer Situation die passende Datenstruktur wählen und mit dem Prinzip begründen
