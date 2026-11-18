Kapitel 2 hat gezeigt, wie sich die IT-Infrastruktur vom Großrechner bis zur Cloud entwickelt hat. Dieses Kapitel erklärt, warum das so schnell ging. Der wichtigste Grund ist das Mooresche Gesetz. Dazu kommen vier weitere Treiber des Fortschritts. In der Klausur ist das Aufgabe 3 mit 2 Punkten, oft als Multiple Choice. Deshalb kommt es hier auf einzelne Wörter an.

### Original und Interpretationen

Gordon Moore schrieb 1965: Die **Anzahl** der Transistoren auf einem Chip hat sich jährlich verdoppelt. Später korrigierte er die Rate auf eine Verdopplung **alle zwei Jahre**. Das hängt mit dem Preis zusammen, weil die Fläche der wichtigste Kostenfaktor eines Chips ist. Mehr Transistoren auf derselben Fläche bedeuten mehr Leistung für dasselbe Geld. Aus dieser Aussage sind drei Interpretationen entstanden, die nicht von Moore stammen. Alle drei rechnen mit **18 Monaten**: Die Leistung von Mikroprozessoren verdoppelt sich, die Leistung von Computern verdoppelt sich, und der Preis der Informationsverarbeitung halbiert sich. Typische Fallen im Multiple Choice sind „Speicherkapazität“, „Größe eines Transistors“ oder „Kosten verdoppeln sich“.

### Mit Verdopplungen rechnen

Verdoppeln heißt: jedes Mal mal 2, nicht jedes Mal etwas dazu. Du teilst zuerst den Zeitraum durch die Verdopplungszeit. Das ist die Anzahl der Verdopplungen. Dann rechnest du 2 hoch diese Anzahl und nimmst den Startwert damit mal. Als Formel: Faktor = 2^(t / T). Eine Halbierung rechnest du genauso, nur teilst du am Ende durch den Faktor. Der häufigste Fehler ist, 5 Verdopplungen als 5 · 2 = 10-fach zu rechnen. Richtig ist 2⁵ = 32-fach.

### Grenzen und weitere Treiber

Inzwischen zeigt das Gesetz eine Sättigung. Bei sehr kleinen Strukturen steigen die Kosten pro Transistor wieder, und Energiebedarf und Kühlung wachsen mit. Als Auswege gelten neue Materialien und Lithographie-Verfahren, 3D-Chips, Quantencomputer und vor allem viele Chips parallel in Clustern und Rechenzentren. Moore ist aber nur einer von fünf Treibern. Dazu kommen digitale Massenspeicher mit wachsender Kapazität und fallenden Preisen, das Gesetz von Metcalfe, sinkende Kommunikationskosten und die Standardisierung (etwa ASCII, Ethernet, TCP/IP, HTTP). Metcalfe besagt, dass der Nutzen eines Netzes mit der Zahl der Teilnehmer überproportional wächst. Mit n Teilnehmern gibt es n · (n − 1) mögliche Verbindungen, das wächst quadratisch.

### Ein Beispiel, das alles verbindet

Ein Chip hat heute 1 Milliarde Transistoren. Wie viele hat er nach 10 Jahren? Nach dem Original verdoppelt sich die Anzahl alle 2 Jahre. Das sind 10 / 2 = 5 Verdopplungen, also der Faktor 2⁵ = 32. Der Chip hat dann 32 Milliarden Transistoren. Nach der Preis-Interpretation halbiert sich der Preis dagegen alle 18 Monate. Ein Rechenauftrag für 800 € kostet nach 6 Jahren noch 800 / 2⁴ = 50 €, denn 6 / 1,5 = 4 Halbierungen. Zum Nachzählen: 800, 400, 200, 100, 50. Jetzt eine MC-Frage mit vier Optionen, von denen nur „Die Anzahl der Transistoren verdoppelt sich“ stimmt. Kreuzt du nur diese an, triffst du vier richtige Entscheidungen und bekommst 4 · ½ = 2 Punkte. Kreuzt du zusätzlich „Die Speicherkapazität verdoppelt sich“ an, sind es 3 · ½ − ½ = 1 Punkt. Zum Schluss Metcalfe: 10 Teilnehmer haben 10 · 9 = 90 Verbindungen, 20 Teilnehmer schon 20 · 19 = 380.

### Das musst du können

- Moores Originalaussage wörtlich wiedergeben: Anzahl, verdoppeln, jährlich bzw. alle zwei Jahre
- die drei Interpretationen mit 18 Monaten nennen und von Fallen unterscheiden
- Verdopplungen und Halbierungen mit 2^(t / T) ausrechnen
- je zwei Grenzen und Auswege nennen
- die fünf Treiber nennen und Metcalfe mit n · (n − 1) rechnen
