Dieses Kapitel klärt die Grundbegriffe, mit denen das ganze Fach arbeitet. Es geht um zwei Fragen: Was unterscheidet bloße Daten von einer Information? Und was meint man eigentlich, wenn man „Digitalisierung“ sagt? Rechnen musst du hier nicht. Du musst Begriffe sauber trennen und mit einem Beispiel erklären können. In der Klausur ist das Aufgabe 1 mit 3 Punkten.

### Von Daten zur Handlung

Daten sind reine Zeichen ohne Bedeutung, zum Beispiel die Zahl 7. Erst ein Kontext macht daraus eine **Information**: „Es sind 7 °C.“ Verknüpfst du diese Information mit anderer, entsteht **Wissen**: „7 °C ist in Deutschland kalt.“ Aus dem Wissen folgt eine **Handlung**: Du ziehst eine Jacke an. Dieselben Daten können also je nach Kontext ganz verschiedene Informationen sein. 7 °F in den USA bedeutet etwas völlig anderes als 7 °C in Deutschland. Die Informatik betrachtet Information außerdem unter drei Aspekten. **Syntaktisch** geht es um die Form des Zeichens, **semantisch** um seine Bedeutung und **pragmatisch** um den Nutzen. Bei einer Ampel heißt das: Das obere Licht leuchtet rot, das bedeutet „Halt“, also bremst du.

### Redundanz nach Shannon

Damit Information auch ankommt, muss sie übertragen werden. Shannons Modell beschreibt dafür eine Kette: Quelle, Sender, Kanal, Empfänger, Ziel. Auf den Kanal wirken Störungen. Der zentrale Begriff ist **Redundanz**, also der überflüssige Teil einer Nachricht. Mit ihr arbeitest du in zwei Richtungen. Bei der Kompression entfernst du Redundanz, etwa mit RLE oder Huffman. Bei der Fehlererkennung fügst du Redundanz hinzu, etwa ein Paritätsbit. Das macht die Nachricht länger, aber sicherer.

### Digitalisierung: drei Sichtweisen und fünf Phasen

Der Begriff Digitalisierung hat drei Bedeutungen. **Betriebswirtschaftlich** nutzt man Daten und Algorithmen für bessere Prozesse, Produkte und Geschäftsmodelle. **Gesellschaftlich** werden Lebens- und Arbeitswelten auf eine digitale Ebene übertragen, oft mit Umbrüchen („Disruption“). **Technisch** werden analoge Signale in zeit- und wertediskrete, meist binäre Signale umgewandelt. Im Unternehmen läuft die Digitalisierung in Phasen ab, und die Reichweite wächst dabei: erst eine Funktion, dann ein Funktionsbereich, dann ein abteilungsübergreifender Prozess, dann ein Partner (1:1) und heute alle Partner (m:n). Den Nutzen der IT beschreiben drei aufeinander aufbauende Stufen: **Automatisierung**, **Informatisierung** und **Transformation**. Ein Onlineshop schreibt Rechnungen automatisch, wertet Verkaufsdaten aus und bietet schließlich Produkte an, die erst nach der Bestellung gefertigt werden. Der Exkurs zu ASCII und UTF-8 ist nicht klausurrelevant.

### Ein Fall, der alles verbindet

Ein Sensor misst die Außentemperatur. Er liefert eine Spannung, die sich ständig ändert. Die Wetterstation misst nur jede volle Stunde und rundet auf ganze Grad. Das ist die technische Digitalisierung: zeitdiskret und wertediskret. Gespeichert wird die Bitfolge 0000 0111, also die Zahl 7. Das sind Daten. Mit dem Kontext „°C in Deutschland“ wird daraus eine Information, mit dem Vergleich zu üblichen Temperaturen Wissen, und du nimmst die Jacke mit. Soll der Wert sicher übertragen werden, hängt der Sender ein gerades Paritätsbit an. 0000 0111 hat drei Einsen, also ist das Paritätsbit 1. Kommt beim Empfänger eine gerade Anzahl Einsen an, ist alles in Ordnung. Kippt ein Bit, zählt er eine ungerade Anzahl und erkennt den Fehler. Welches Bit gekippt ist, weiß er aber nicht.

### Das musst du können

- den Unterschied zwischen Daten und Information an einem Beispiel erläutern
- die Kette Daten → Information → Wissen → Handlung durchspielen
- erklären, wann Redundanz entfernt (Kompression) und wann hinzugefügt wird (Fehlererkennung)
- die drei Sichtweisen der Digitalisierung nennen und die technische erläutern
- die Phasen der Digitalisierung ordnen und Automatisierung, Informatisierung, Transformation unterscheiden
