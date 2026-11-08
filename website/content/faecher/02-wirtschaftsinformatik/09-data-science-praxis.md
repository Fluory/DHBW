---
title: "Data Science in der Praxis: ML-Recap und Dataiku"
order: 9
summary: "Tag 3 als Vertiefung: Train-Test-Split und Overfitting, Entscheidungsbaum und Hyperparameter, Modelle bewerten mit Accuracy, Precision und Recall, k-Means-Clustering und das Werkzeug Dataiku."
klausur: "nicht-relevant"
---

Ein Modell, das vorhersagt, ob eine Buchung storniert wird, klingt gut. Aber woher weißt du, ob es wirklich etwas taugt? Wenn nur jede 20. Buchung storniert wird, liegt ein Modell, das immer „nicht storniert“ sagt, schon zu 95 % richtig, und findet trotzdem keinen einzigen Storno. Tag 3 zeigt, wie man Modelle richtig prüft und mit dem Werkzeug Dataiku ohne Programmieren baut.

Dieses Kapitel ist bewusst kürzer. Klickwege in Dataiku musst du nicht lernen.

> [!CAUTION]
> **Nicht klausurrelevant**
> Die offiziellen Klausurhinweise nennen als Stoff die „Finalen Decks für die Klausur“. Das sind nur die Foliensätze von Tag 1 und Tag 2. Tag 3 ist nicht dabei, und die Hinweise nennen keine Inhalte von Tag 3. Dieses Kapitel ist deshalb voraussichtlich nicht klausurrelevant. Die Grundbegriffe (überwacht/unüberwacht, Regression/Klassifikation/Clustering, Train/Test, RAG, Agent) lernst du ohnehin in Kapitel 7 und 8.

## Train-Test-Split und Overfitting

**Was ist das?** Man teilt die Daten mit bekannten Antworten:

- **Trainingsdaten** (zum Beispiel 80 %): Damit lernt das Modell. Ein Teil davon kann als **Validierung** dienen, um Einstellungen abzustimmen.
- **Testdaten** (zum Beispiel 20 %): Damit wird das fertige Modell einmal abschließend bewertet. Das Modell sieht die Antworten nicht.

**Overfitting:** Das Modell lernt die Trainingsdaten samt Zufallsrauschen auswendig. Es ist im Training sehr gut, auf neuen Daten deutlich schlechter. Wie jemand, der nur die Altklausur auswendig lernt. **Underfitting:** Das Modell ist zu einfach und schon im Training schlecht.

> [!IMPORTANT]
> **Das Wichtigste**
> Lernen auf Trainingsdaten, bewerten auf Testdaten. Gut im Training, schlecht im Test = Overfitting.

> [!WARNING]
> **Achtung**
> Eine hohe Genauigkeit auf den Trainingsdaten sagt nichts darüber, wie gut das Modell bei neuen Daten ist.

## Entscheidungsbaum, Parameter und Hyperparameter

**Was ist das?** Ein **Entscheidungsbaum** teilt die Daten Schritt für Schritt an Fragen wie „Lernstunden < 5?“. Die Blätter enthalten die Vorhersage. Er ist leicht zu erklären.

**Stell dir vor:** Beim Backen stellst du vorher die Ofentemperatur ein (Hyperparameter). Wie der Kuchen am Ende innen aussieht, ergibt sich beim Backen (Parameter).

| | Modellparameter | Hyperparameter |
|---|---|---|
| wann | nach dem Training, aus den Daten gelernt | vor dem Training festgelegt |
| was | die Regeln, nach denen das Modell vorhersagt | Einstellungen, die steuern, wie gelernt wird |
| Beispiel | die konkreten Fragen im Baum | maximale Tiefe des Baums, k bei k-Means |

**Grid Search:** Alle Kombinationen eines Rasters ausprobieren, zum Beispiel maximale Tiefe 1–4 mal maximale Merkmale 1–4 = 16 Kombinationen. Jede auf den Validierungsdaten bewerten und die beste nehmen.

> [!IMPORTANT]
> **Das Wichtigste**
> Hyperparameter setzt du vorher, Parameter lernt das Modell.

> [!WARNING]
> **Achtung**
> Die maximale Tiefe eines Baums ist ein Hyperparameter, kein Modellparameter.

## Modelle bewerten

**Was ist das?** Die **Konfusionsmatrix** zählt auf den Testdaten, wie oft das Modell richtig und falsch lag. Eigenes Beispiel: 200 Testbuchungen, 10 davon wirklich storniert.

| | vorhergesagt: storniert | vorhergesagt: nicht storniert |
|---|---|---|
| wirklich storniert | 8 (True Positive, TP) | 2 (False Negative, FN) |
| wirklich nicht storniert | 12 (False Positive, FP) | 178 (True Negative, TN) |

**Stell dir vor:** Ein Rauchmelder. **Precision** fragt: Wenn er piept, brennt es dann wirklich? **Recall** fragt: Wenn es brennt, piept er dann auch? Ein Melder, der bei jedem Toast piept, hat hohen Recall, aber schlechte Precision. Die Kürzel übersetzt: True/False = die Vorhersage war richtig/falsch, Positive/Negative = vorhergesagt wurde „storniert“/„nicht storniert“.

So berechnest du die drei Kennzahlen:

1. **Accuracy** = richtige Vorhersagen / alle = (TP + TN) / alle = (8 + 178) / 200 = 186 / 200 = **93 %**.
2. **Precision** = von allem als „storniert“ Vorhergesagten, wie viel stimmt? = TP / (TP + FP) = 8 / 20 = **40 %**.
3. **Recall** = von allen echten Stornos, wie viele wurden gefunden? = TP / (TP + FN) = 8 / 10 = **80 %**.

Bei seltenen Ereignissen ist Accuracy irreführend. **Data Leakage:** Ein Merkmal enthält Information, die zum Zeitpunkt der Vorhersage noch nicht bekannt wäre, zum Beispiel ein Erstattungsbetrag, der erst nach dem Storno feststeht. Solche Spalten müssen raus.

> [!IMPORTANT]
> **Das Wichtigste**
> Accuracy = alle richtigen. Precision = wie viele Alarme stimmen. Recall = wie viele echte Fälle gefunden.

> [!WARNING]
> **Achtung**
> 95 % Accuracy klingt gut, kann aber nutzlos sein, wenn nur 5 % der Fälle positiv sind.

## k-Means-Clustering

**Stell dir vor:** Eine Stadt will k = 3 Eisdielen so aufstellen, dass jeder es nicht weit hat. Erst stellst du sie irgendwo hin. Jeder Einwohner geht zur nächsten. Dann rückst du jede Eisdiele in die Mitte ihrer Kundschaft. Jetzt ist für manche eine andere Eisdiele näher, sie wechseln. Das wiederholst du, bis keiner mehr wechselt.

**Was ist das?** k-Means teilt Daten ohne Zielspalte in k Gruppen:

1. k festlegen (ein Hyperparameter) und k Startzentren setzen.
2. Jeden Punkt dem nächstgelegenen Zentrum zuordnen.
3. Jedes Zentrum auf den Mittelwert seiner Punkte verschieben.
4. Schritte 2 und 3 wiederholen, bis sich die Zuordnung nicht mehr ändert.

Im Beispiel der Vorlesung wurden die Kunden der Sonnenschein AG mit k = 3 nach „Umsatz pro Buchung“ und „Anzahl Buchungen“ in drei Segmente geteilt. Weil k-Means mit Abständen rechnet, muss man die Merkmale vorher skalieren. Sonst dominiert der Umsatz in Euro die Anzahl der Buchungen.

> [!IMPORTANT]
> **Das Wichtigste**
> k-Means: zuordnen, Zentren verschieben, wiederholen. k gibst du vor.

> [!WARNING]
> **Achtung**
> k ist nicht das Ergebnis des Algorithmus. Ergebnis sind die Zuordnung der Punkte und die Zentren.

## GenAI-Recap und Dataiku

**Was ist das?** Tag 3 wiederholt die GenAI-Begriffe aus Kapitel 8 in vier Stufen der Anpassung: fertige Sprachmodelle → Prompt Engineering → eigenes Wissen (RAG) → Fine-Tuning. Man fängt so einfach wie möglich an.

**Dataiku** ist ein Werkzeug, in dem man Daten aufbereitet und Modelle ohne Programmieren baut:

| Begriff | Bedeutung |
|---|---|
| Flow | visuelle Pipeline aus Datasets, Recipes und Modellen |
| Dataset | ein Zeiger auf eine Datenquelle, keine Kopie |
| Recipe | Aktion auf Datasets: Stack (untereinanderhängen), Join (über Schlüssel verbinden), Prepare (bereinigen), Split |
| Lab / AutoML | Experimentierbereich, trainiert und vergleicht mehrere Modelle |
| Deploy, Score | bestes Modell übernehmen und auf neue Daten anwenden |

Ablauf in Kurzform: Daten teilen → im Lab Modelle trainieren → bewerten → bestes Modell übernehmen → neue Daten vorhersagen.

Die beiden Aufgaben des Tages waren eine **Kundensegmentierung** der Sonnenschein AG mit k-Means und die **Titanic-Aufgabe**: aus Passagierdaten vorhersagen, wer überlebt hat (binäre Klassifikation, Survived = 0 oder 1).

> [!IMPORTANT]
> **Das Wichtigste**
> In Dataiku ist ein Dataset ein Zeiger, keine Kopie. Ein Recipe macht aus Datasets neue Datasets.

> [!WARNING]
> **Achtung**
> Survived = 0/1 ist Klassifikation, nicht Regression. Es zählt der Typ der Zielspalte, nicht dass sie aus Zahlen besteht.

## Übungen

> [!TIP]
> **Übung 1 · leicht**
> Stimmt das? „Kundensegmentierung ist eine Klassifikationsaufgabe.“ Begründe kurz.
> *Quelle: Lernseite WI, Aufgabe 9.1 (eigene Aussage)*

> [!TIP]
> **Übung 2 · leicht**
> Stimmt das? „Die maximale Tiefe eines Entscheidungsbaums ist ein Modellparameter.“ Begründe kurz.
> *Quelle: Lernseite WI, Aufgabe 9.2 (eigene Aussage nach Recap F. 8)*

> [!TIP]
> **Übung 3 · mittel**
> Ein Stornomodell nutzt das Merkmal „Erstattungsbetrag“, das erst nach einer Stornierung bekannt ist. Wie heißt das Problem? A Overfitting · B Data Leakage · C Underfitting · D Bullwhip-Effekt
> *Quelle: Lernseite WI, Aufgabe 9.7 (eigene Aufgabe nach DI F. 120)*

> [!TIP]
> **Übung 4 · Prüfungsniveau**
> Ein Betrugsmodell liefert auf 1 000 Testtransaktionen: TP = 15, FN = 5, FP = 30, TN = 950. Berechne Accuracy, Precision und Recall. Was sagt das?
> *Quelle: Lernseite WI, Aufgabe 9.8 (eigene Aufgabe)*

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> Welche Merkmale würdest du für die Kundensegmentierung der Sonnenschein AG nutzen, welche nicht? Warum entfernt man Kunden ohne Buchung?
> *Quelle: Slide deck Tag 3 F. 6 (Aufgabe Kundensegmentierung), sinngemäß*

## Lösungen

### Übung 1

**Falsch.** Es gibt keine Zielspalte. Segmentierung ist Clustering (unüberwacht). Klassifikation bräuchte vorgegebene Klassen.

### Übung 2

**Falsch.** Die maximale Tiefe wird vor dem Training festgelegt, ist also ein Hyperparameter. Die konkreten Fragen im Baum sind Modellparameter.

### Übung 3

**B, Data Leakage.** Das Merkmal enthält Information, die zum Zeitpunkt der Vorhersage noch nicht vorliegt.

### Übung 4

1. Accuracy = (TP + TN) / alle = (15 + 950) / 1 000 = **96,5 %**.
2. Precision = TP / (TP + FP) = 15 / (15 + 30) = 15 / 45 ≈ **33 %**.
3. Recall = TP / (TP + FN) = 15 / (15 + 5) = 15 / 20 = **75 %**.

Probe: TP + FN + FP + TN = 15 + 5 + 30 + 950 = 1 000 ✓

Die hohe Accuracy täuscht, weil Betrug selten ist. Das Modell findet drei Viertel der Betrugsfälle, aber zwei von drei Alarmen sind Fehlalarme.

### Übung 5

- **Nutzen:** Anzahl Buchungen, Umsatz pro Buchung, eventuell Gesamtumsatz, Alter, Zeit seit der letzten Buchung. Wenige, gut erklärbare Merkmale.
- **Nicht nutzen:** Kundennummer, Name, Adresse, E-Mail (Kennungen und Freitext ohne Aussage), Postleitzahl als Zahl (Abstände zwischen Postleitzahlen sind sinnlos).
- **Kunden ohne Buchung entfernen:** Sie bilden sonst ein eigenes, nutzloses Cluster, und „Umsatz pro Buchung“ wäre eine Division durch null.
