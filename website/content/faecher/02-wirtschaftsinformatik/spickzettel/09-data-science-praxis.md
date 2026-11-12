*Laut Kapitel nicht klausurrelevant: Praxiswissen zur Einordnung.*

## Train-Test-Split

- **Trainingsdaten** (z. B. 80 %): Modell lernt; ein Teil kann als **Validierung** zum Abstimmen der Einstellungen dienen.
- **Testdaten** (z. B. 20 %): fertiges Modell einmal abschließend bewerten; Modell sieht die Antworten nicht.
- **Overfitting:** Trainingsdaten samt Rauschen auswendig gelernt → im Training sehr gut, auf neuen Daten deutlich schlechter.
- **Underfitting:** Modell zu einfach, schon im Training schlecht.

## Entscheidungsbaum und Hyperparameter

**Entscheidungsbaum:** teilt Daten Schritt für Schritt an Fragen („Lernstunden < 5?“); Blätter enthalten die Vorhersage; leicht zu erklären.

| | Modellparameter | Hyperparameter |
|---|---|---|
| wann | nach dem Training, aus Daten gelernt | vor dem Training festgelegt |
| was | Regeln, nach denen vorhergesagt wird | steuern, wie gelernt wird |
| Beispiel | konkrete Fragen im Baum | maximale Tiefe, k bei k-Means |

**Grid Search:** alle Kombinationen eines Rasters ausprobieren (Tiefe 1–4 × Merkmale 1–4 = 16), jede auf Validierungsdaten bewerten, beste nehmen.

## Modelle bewerten

Konfusionsmatrix (200 Testbuchungen, 10 wirklich storniert):

| | vorhergesagt storniert | vorhergesagt nicht storniert |
|---|---|---|
| wirklich storniert | TP = 8 | FN = 2 |
| wirklich nicht storniert | FP = 12 | TN = 178 |

1. **Accuracy** = (TP + TN) / alle = 186 / 200 = **93 %**
2. **Precision** = TP / (TP + FP) = 8 / 20 = **40 %** (Wie viele Alarme stimmen?)
3. **Recall** = TP / (TP + FN) = 8 / 10 = **80 %** (Wie viele echte Fälle gefunden?)

- True/False = Vorhersage richtig/falsch; Positive/Negative = vorhergesagt „storniert“/„nicht storniert“.
- Bei seltenen Ereignissen ist Accuracy irreführend.
- **Data Leakage:** Merkmal enthält Information, die bei der Vorhersage noch nicht bekannt wäre (Erstattungsbetrag nach Storno) → Spalte entfernen.

## k-Means-Clustering

Teilt Daten ohne Zielspalte in k Gruppen:

1. k festlegen (Hyperparameter), k Startzentren setzen.
2. Jeden Punkt dem nächsten Zentrum zuordnen.
3. Jedes Zentrum auf den Mittelwert seiner Punkte verschieben.
4. 2 und 3 wiederholen, bis sich die Zuordnung nicht mehr ändert.

- Ergebnis: Zuordnung der Punkte und Zentren (nicht k).
- Merkmale vorher **skalieren**, sonst dominiert z. B. Umsatz in Euro die Anzahl Buchungen.
- Segmentierung: Kunden ohne Buchung entfernen (eigenes nutzloses Cluster, Division durch null bei „Umsatz pro Buchung“); Kennungen (Kundennummer, Name) und Postleitzahl als Zahl nicht nutzen.

## GenAI-Stufen und Dataiku

Anpassungsstufen: fertige Sprachmodelle → Prompt Engineering → eigenes Wissen (RAG) → Fine-Tuning. So einfach wie möglich anfangen.

| Dataiku-Begriff | Bedeutung |
|---|---|
| Flow | visuelle Pipeline aus Datasets, Recipes, Modellen |
| Dataset | Zeiger auf Datenquelle, keine Kopie |
| Recipe | Aktion auf Datasets: Stack, Join, Prepare, Split |
| Lab / AutoML | trainiert und vergleicht mehrere Modelle |
| Deploy, Score | bestes Modell übernehmen, auf neue Daten anwenden |

Titanic-Aufgabe: Survived = 0/1 → binäre Klassifikation.

## Typische Fehler

- Hohe Genauigkeit auf Trainingsdaten als Beleg für gute Vorhersagen nehmen.
- Maximale Baumtiefe als Modellparameter bezeichnen: Hyperparameter.
- 95 % Accuracy bei 5 % positiven Fällen für gut halten.
- Precision und Recall vertauschen.
- k für das Ergebnis von k-Means halten.
- Merkmale vor k-Means nicht skalieren.
- Survived = 0/1 als Regression einordnen.
- Kundensegmentierung als Klassifikation bezeichnen: Clustering.
