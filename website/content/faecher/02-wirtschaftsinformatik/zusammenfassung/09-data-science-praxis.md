Dieses Kapitel vertieft Tag 3 und ist voraussichtlich nicht klausurrelevant, denn die offiziellen Klausurdecks umfassen nur Tag 1 und Tag 2. Es zeigt, wie man ein Modell aus Kapitel 7 richtig prüft und mit dem Werkzeug Dataiku ohne Programmieren baut. Die Grundbegriffe kennst du schon: überwachtes und unüberwachtes Lernen, Regression, Klassifikation und Clustering.

### Trainieren und testen

Daten mit bekannten Antworten teilt man auf. Mit den Trainingsdaten, zum Beispiel 80 %, lernt das Modell. Ein Teil davon kann als Validierung dienen, um Einstellungen abzustimmen. Mit den Testdaten, zum Beispiel 20 %, wird das fertige Modell einmal abschließend bewertet. Ist ein Modell im Training sehr gut und im Test deutlich schlechter, hat es die Trainingsdaten auswendig gelernt. Das heißt Overfitting. Ist es schon im Training schlecht, ist es zu einfach. Das heißt Underfitting.

### Modelle und ihre Einstellungen

Ein Entscheidungsbaum teilt die Daten Schritt für Schritt an Fragen und ist leicht zu erklären. Dabei unterscheidet man zwei Arten von Werten. Modellparameter lernt das Modell aus den Daten, etwa die konkreten Fragen im Baum. Hyperparameter legst du vorher fest, etwa die maximale Tiefe des Baums. Eine Grid Search probiert alle Kombinationen eines Rasters aus: Tiefe 1 bis 4 mal Merkmale 1 bis 4 ergibt 16 Kombinationen. Ohne Zielspalte nutzt man k-Means. Es ordnet jeden Punkt dem nächsten Zentrum zu, verschiebt die Zentren in die Mitte ihrer Punkte und wiederholt das, bis sich nichts mehr ändert. k gibst du vor. Die Merkmale musst du vorher skalieren, weil k-Means mit Abständen rechnet.

### Modelle bewerten

Die Konfusionsmatrix zählt auf den Testdaten richtige und falsche Vorhersagen. Daraus berechnest du drei Kennzahlen. Accuracy ist der Anteil aller richtigen Vorhersagen. Precision sagt, wie viele Alarme stimmen: TP / (TP + FP). Recall sagt, wie viele echte Fälle gefunden wurden: TP / (TP + FN). Bei seltenen Ereignissen ist Accuracy irreführend. Außerdem darf kein Merkmal Information enthalten, die zum Zeitpunkt der Vorhersage noch nicht bekannt ist. Das wäre Data Leakage.

### Ein durchgerechnetes Beispiel

Ein Modell soll für 200 Testbuchungen Stornos vorhersagen, 10 davon sind wirklich storniert. Es erkennt 8 davon (TP) und übersieht 2 (FN). Bei 12 Buchungen meldet es fälschlich einen Storno (FP), 178 sind richtig als „nicht storniert“ erkannt (TN). Accuracy = (8 + 178) / 200 = 93 %. Precision = 8 / (8 + 12) = 40 %. Recall = 8 / (8 + 2) = 80 %. Die 93 % klingen gut, aber nur zwei von fünf Alarmen stimmen. In Dataiku baust du so ein Modell im Flow aus Datasets und Recipes. Das Lab trainiert und vergleicht mehrere Modelle, das beste wird übernommen und auf neue Daten angewendet. Klickwege musst du nicht lernen.

### Das musst du können

- den Zweck von Trainings-, Validierungs- und Testdaten erklären
- Overfitting und Underfitting erkennen
- Modellparameter und Hyperparameter unterscheiden
- Accuracy, Precision und Recall aus einer Konfusionsmatrix berechnen
- den Ablauf von k-Means beschreiben
