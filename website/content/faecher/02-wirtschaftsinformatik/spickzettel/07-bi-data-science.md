## Informationsbedarf

Art, Menge und Qualität der Informationen, die eine Person für ihre Aufgabe in einer bestimmten Zeit braucht.

| Begriff | Bedeutung |
|---|---|
| objektiver Bedarf | was die Aufgabe wirklich erfordert |
| subjektiver Bedarf | was die Person für nötig hält |
| Nachfrage | was sie tatsächlich anfragt |
| Angebot | was verfügbar ist |

Ziel: möglichst große Schnittmenge. **Pull** = Nutzer holt (Abfrage). **Push** = System liefert von sich aus (Montagsbericht, Warnung).

## BI und Data Warehouse

**BI:** Konzepte, Prozesse, Werkzeuge, um Unternehmens- und Wettbewerbsdaten in Wissen für Entscheidungen umzuwandeln.

Aufbau: operative Systeme (OLTP) + externe Daten → **ETL** → **Data Warehouse** → **Data Marts** → BI-Frontend (Berichte, Analysen)

- **DWH:** aktuelle **und historische** Daten, verdichtet.
- **Data Mart:** Teilbereich des DWH, v. a. für Geschwindigkeit (z. B. Vertrieb).
- **ETL:** extrahieren, transformieren, laden.
- DWH-Anforderungen: **Themenorientierung**, **Vereinheitlichung**, **Beständigkeit** (nicht mehr geändert), **Zeitraumbezug**.

Transformation (das T):

| Schritt | Beispiel |
|---|---|
| Bereinigung | fehlende/falsche Werte, Platzhalter „01.01.1900“ |
| Harmonisierung | „Spanien“, „ES“, „España“ → eine Schreibweise |
| Verdichtung | Umsatz je Reiseziel und Monat |
| Anreicherung | Kennzahl berechnen: Deckungsbeitrag je Reise |

## Vier Analysestufen

| Stufe | Frage | Beispiel |
|---|---|---|
| 1 deskriptiv | Was ist passiert? | Umsatz je Reiseziel letztes Quartal |
| 2 diagnostisch | Warum? | Warum sanken Spanien-Buchungen? |
| 3 prädiktiv | Was wird passieren? | Buchungen Griechenland Sommer 2027 |
| 4 präskriptiv | Was sollen wir tun? | Welches Angebot an welchen Kunden? |

BI: vor allem Stufe 1–2, Data Science: 3–4 (vereinfacht).

## Data Science, KI, ML

- **Data Science:** interdisziplinär (Informatik, Statistik, Fachwissen), gewinnt mit wissenschaftlichem Vorgehen Informationen aus großen Datenbeständen für Entscheidungen.
- KI ⊃ Machine Learning ⊃ Deep Learning ⊃ Generative KI.
- **Expertensystem:** feste Regeln von Menschen. **ML:** lernt Regeln aus Daten.
- ML ist ein Werkzeug der Data Science, nicht umgekehrt.

**CRISP-DM** (mit Rücksprüngen, kein Wasserfall):
1. Business Understanding · 2. Data Understanding · 3. Data Preparation · 4. Modelling · 5. Evaluation · 6. Deployment

## Methode wählen

Zeile = Beobachtung, Spalte = Merkmal (Feature), **Zielspalte** (Target) = was vorhergesagt wird.

1. Zielspalte mit bekannten Antworten? Nein → **unüberwacht: Clustering** (Gruppen finden).
2. Ja → **überwacht**. Zielspalte ist Zahl → **Regression**; Kategorie → **Klassifikation**.
3. Gegenprobe: Reicht Summieren/Aufschlüsseln vorhandener Zahlen? → **BI-Bericht**, kein Modell.

| Frage | Methode |
|---|---|
| Umsatz je Reiseziel letztes Quartal | BI-Bericht |
| Buchungen Kreta Juli 2027 | Regression |
| Wird die Buchung storniert? | Klassifikation |
| Kundengruppen mit ähnlichem Verhalten | Clustering |
| Mail: Beschwerde, Umbuchung oder Info? | Klassifikation |
| Warum war die Stornoquote im Mai hoch? | BI-Bericht (Drill-down) |
| Kreditkartenbetrug? | Klassifikation oder Ausreißererkennung |

Clustering: ähnlich innerhalb, verschieden zwischen Gruppen; Bedeutung gibt der Mensch.
**Train/Test:** z. B. 80 % lernen, 20 % testen; Modell sieht Testantworten nicht; erkennt Overfitting (Auswendiglernen).

## Typische Fehler

- Nachfrage mit objektivem Bedarf verwechseln.
- DWH speichere nur aktuelle Einzelbuchungen: falsch, auch historische, verdichtet.
- „Warum“-Fragen als prädiktiv einordnen: Sie sind diagnostisch.
- Harmonisierung und Bereinigung vertauschen.
- Methode nach Speicherform wählen: „storniert ja/nein“ als 1/0 bleibt Klassifikation.
- Anzahl (Buchungen im Juli) als Klassifikation einordnen: Regression.
- Für reine Auswertungen ein Modell vorschlagen statt eines BI-Berichts.
- Data Science als Werkzeug des ML bezeichnen.
