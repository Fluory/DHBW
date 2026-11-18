In Kapitel 7 ging es darum, wie Daten im Speicher geordnet sind. Dieses Kapitel fragt, wie man in diesen Daten etwas findet und wie man sie sortiert. Zu jedem Verfahren solltest du drei Dinge sagen können: die Voraussetzung, den Ablauf an einem kleinen Beispiel und den Aufwand in O-Notation. In der Klausur gibt es dafür 6 Punkte.

### Die O-Notation

Die O-Notation beschreibt, wie der Aufwand wächst, wenn die Datenmenge n wächst. Konstante Faktoren lässt man weg. Von schnell nach langsam gilt: O(1) < O(log n) < O(n) < O(n log n) < O(n²). log n sagt, wie oft du n halbieren kannst, bis 1 übrig ist. Für n = 1 000 sind das etwa 10-mal. Verdoppelt sich n, bleibt O(1) gleich, O(n) verdoppelt sich und O(n²) vervierfacht sich. Braucht ein O(n²)-Verfahren für 1 000 Elemente 3 Sekunden, braucht es für 2 000 Elemente 3 · 2² = 12 Sekunden.

### Suchen: linear und binär

Die **lineare Suche** vergleicht alle Elemente der Reihe nach. Sie hat keine Voraussetzung. Ihr Aufwand ist O(n). Die **binäre Suche** ist viel schneller, braucht aber sortierte Daten mit Indexzugriff, also ein sortiertes Array. Sie prüft die Mitte m = (lo + hi) / 2, abgerundet. Ist der gesuchte Wert größer, sucht sie rechts weiter, ist er kleiner, links. So halbiert jeder Schritt den Bereich, der Aufwand ist O(log n). Die höchste Schrittzahl ist die kleinste Zahl k mit 2ᵏ > n. Bei 1 000 Elementen sind das 10 Schritte statt bis zu 1 000.

### Sortieren: Bubble Sort und Merge Sort

**Bubble Sort** vergleicht immer zwei Nachbarn und tauscht sie, wenn sie falsch herum stehen. Nach dem ersten Durchlauf steht das größte Element hinten. Das Verfahren endet, wenn ein Durchlauf ohne Tausch bleibt. Bei n Elementen sind es bis zu n · (n − 1) / 2 Vergleiche, der Aufwand ist also O(n²). **Merge Sort** arbeitet nach Teile und Herrsche aus Kapitel 6. Du teilst das Array so lange in der Mitte, bis jedes Stück nur ein Element hat. Dann führst du je zwei sortierte Stücke zusammen, indem du immer die vordersten Elemente vergleichst und das kleinere übernimmst. Die eigentliche Arbeit steckt also im Zusammenführen, nicht im Teilen. Es gibt etwa log₂ n Ebenen, und auf jeder wird jedes Element einmal angefasst. Das ergibt O(n log n). Quicksort und Selection Sort werden nur genannt.

### Ein Beispiel, das alles verbindet

Gegeben ist [5, 1, 4, 2, 8]. Du willst darin die 4 finden. Weil die Liste unsortiert ist, geht nur die lineare Suche. Sie findet die 4 nach drei Vergleichen. Also sortierst du zuerst mit Bubble Sort. Im ersten Durchlauf tauschst du 5 und 1, dann 5 und 4, dann 5 und 2. Das ergibt [1, 4, 2, 5, 8], die 8 ist fertig. Im zweiten Durchlauf tauschst du 4 und 2 und erhältst [1, 2, 4, 5, 8]. Der dritte Durchlauf bleibt ohne Tausch, die Liste ist sortiert. Jetzt ist die binäre Suche möglich. Der Bereich ist Index 0 bis 4, die Mitte ist Index 2 mit dem Wert 4. Gefunden nach einem Vergleich. Bei 5 Elementen braucht die binäre Suche höchstens 3 Schritte, weil 2³ = 8 > 5 ist. Sortieren lohnt sich also vor allem, wenn du danach oft suchst.

### Das musst du können

- die O-Klassen ordnen und eine Laufzeit für ein größeres n hochrechnen
- für jedes Verfahren Voraussetzung, Prinzip und Aufwand nennen
- eine binäre Suche mit Bereich, Mitte und Entscheidung in einer Tabelle durchführen
- Bubble Sort Durchlauf für Durchlauf aufschreiben
- Merge Sort mit Teilen und Zusammenführen an einem Beispiel zeigen
