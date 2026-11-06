---
title: "Business Intelligence und Data Science"
order: 7
summary: "Informationsbedarf, Data Warehouse und ETL, die vier Analysestufen, CRISP-DM und die Wahl zwischen Regression, Klassifikation und Clustering."
klausur: "relevant"
---

Die Sonnenschein AG hat jetzt ein CRM voller Daten: Buchungen, Feedback, Stornierungen. Die Chefin will wissen, wie viel letztes Quartal nach Spanien gebucht wurde. Das ist ein Bericht. Sie will aber auch wissen, wie viele Buchungen es nächsten Sommer für Griechenland geben wird. Das ist eine Prognose. Berichte liefert Business Intelligence, Prognosen liefert Data Science.

Klausurrelevant sind: Informationsbedarf, der Aufbau eines BI-Systems mit Data Warehouse und ETL, die vier Analysestufen, CRISP-DM und vor allem die Wahl der richtigen Methode.

## Informationsbedarf

**Was ist das?** Der Informationsbedarf ist Art, Menge und Qualität der Informationen, die eine Person für ihre Aufgabe in einer bestimmten Zeit braucht. Vier Begriffe musst du trennen:

| Begriff | Bedeutung |
|---|---|
| objektiver Bedarf | was die Aufgabe wirklich erfordert |
| subjektiver Bedarf | was die Person für nötig hält |
| Nachfrage | was sie tatsächlich anfragt |
| Angebot | was verfügbar ist |

Ziel ist, dass sich diese vier Mengen möglichst stark überschneiden.

**Pull:** Der Nutzer holt die Information selbst (Suche, Abfrage). **Push:** Das System liefert sie von sich aus (Bericht jeden Montag, Warnmeldung).

> [!IMPORTANT]
> **Das Wichtigste**
> Objektiver Bedarf ≠ subjektiver Bedarf ≠ Nachfrage ≠ Angebot. Push = System liefert, Pull = Nutzer holt.

> [!WARNING]
> **Achtung**
> „Der objektive Informationsbedarf ist das, was eine Managerin bei der IT anfragt“ ist falsch. Das ist die Nachfrage.

## Business Intelligence und Data Warehouse

**Was ist das?** Business Intelligence (BI) umfasst Konzepte, Prozesse und Werkzeuge, um Unternehmens- und Wettbewerbsdaten in Wissen für Entscheidungen umzuwandeln.

```text
operative Systeme (OLTP)  +  externe Daten
              │
             ETL  (extrahieren, transformieren, laden)
              │
        Data Warehouse
          /        \
    Data Mart    Data Mart
          \        /
   BI-Frontend: Berichte, Analysen
```

- **Data Warehouse (DWH):** speichert aktuelle **und historische** Daten in verdichteter Form.
- **Data Marts:** Teilbereiche des DWH, vor allem für mehr Geschwindigkeit, zum Beispiel für den Vertrieb.
- **ETL:** Daten aus den operativen Systemen **e**xtrahieren, **t**ransformieren und ins DWH **l**aden.

Anforderungen an ein DWH (nach Inmon): **Themenorientierung** (Vertrieb, Produktion), **Vereinheitlichung** (gleiche Datumsformate), **Beständigkeit** (gespeicherte Daten werden nicht mehr geändert), **Zeitraumbezug** (Quartalsumsätze).

Aufbereitet wird im T von ETL, in vier Schritten:

| Schritt | Was passiert | Beispiel |
|---|---|---|
| Bereinigung | Fehler beseitigen | fehlende oder falsche Werte, einheitliches Datumsformat |
| Harmonisierung | gleiche Dinge gleich benennen | „Spanien“, „ES“, „España“ → eine Schreibweise |
| Verdichtung | zusammenfassen | Umsatz je Reiseziel und Monat |
| Anreicherung | Kennzahlen berechnen | Deckungsbeitrag je Reise |

> [!IMPORTANT]
> **Das Wichtigste**
> OLTP-Systeme → ETL → Data Warehouse → Data Marts → Berichte. Vier Transformationsschritte: bereinigen, harmonisieren, verdichten, anreichern.

> [!WARNING]
> **Achtung**
> Ein Data Warehouse speichert nicht nur aktuelle Einzelbuchungen. Es speichert auch historische Daten, meist verdichtet.

## Vier Analysestufen

**Was ist das?** Nach Gartner gibt es vier Stufen. Mit jeder steigen Nutzen und Anspruch.

| Stufe | Frage | Beispiel Sonnenschein AG |
|---|---|---|
| 1 deskriptiv | Was ist passiert? | Umsatz je Reiseziel im letzten Quartal |
| 2 diagnostisch | Warum ist es passiert? | Warum sind die Buchungen für Spanien gesunken? |
| 3 prädiktiv | Was wird passieren? | Buchungen für Griechenland im Sommer 2027 |
| 4 präskriptiv | Was sollen wir tun? | Welches Angebot an welchen Kunden? |

BI beantwortet vor allem die Stufen 1 und 2, Data Science die Stufen 3 und 4 (laut Folie vereinfacht).

> [!IMPORTANT]
> **Das Wichtigste**
> Was? → Warum? → Was wird? → Was tun? (deskriptiv, diagnostisch, prädiktiv, präskriptiv)

> [!WARNING]
> **Achtung**
> „Warum“-Fragen sind diagnostisch, nicht prädiktiv. Prädiktiv fragt nach der Zukunft.

## Data Science, KI und Machine Learning

**Was ist das?** Data Science ist ein interdisziplinäres Fachgebiet (Informatik, Statistik, Fachwissen). Mit wissenschaftlichem Vorgehen werden relevante Informationen aus großen Datenbeständen gewonnen und für Entscheidungen nutzbar gemacht.

Die Begriffe sind ineinander verschachtelt: **Künstliche Intelligenz** ⊃ **Machine Learning** ⊃ **Deep Learning** ⊃ **Generative KI**. Ein **Expertensystem** ist KI mit festen Regeln, die Menschen vorgeben. **Machine Learning** lernt die Regeln aus Daten. Data Science ist die Disziplin mit dem ganzen Prozess, ML ist eines ihrer Werkzeuge.

**CRISP-DM** ist das Vorgehensmodell für Data-Science-Projekte, mit sechs Phasen:

1. **Business Understanding:** Welches betriebliche Problem?
2. **Data Understanding:** Welche Daten haben wir, eignen sie sich?
3. **Data Preparation:** bereinigen, umformen, auswählen.
4. **Modelling:** Verfahren anwenden, ein Modell entsteht.
5. **Evaluation:** Löst das Modell das betriebliche Problem? Sonst zurück.
6. **Deployment:** im Unternehmen einsetzen.

Die Phasen haben Rücksprünge, es ist kein Wasserfall.

> [!IMPORTANT]
> **Das Wichtigste**
> Expertensystem: Regeln von Menschen. ML: Regeln aus Daten. CRISP-DM: sechs Phasen mit Rücksprüngen.

> [!WARNING]
> **Achtung**
> „Data Science ist ein Werkzeug des Machine Learning“ ist falsch. Es ist umgekehrt.

## Die richtige Methode wählen

**Was ist das?** Machine Learning lässt Systeme aus Erfahrung lernen, ohne dass man jede Regel programmiert. Im Datensatz ist jede Zeile eine Beobachtung, jede Spalte ein Merkmal (Feature). Die **Zielspalte** (Target) ist das, was vorhergesagt werden soll.

So wählst du die Methode:

1. **Frage 1:** Gibt es eine Zielspalte mit bekannten Antworten?
   - Ja → **überwachtes Lernen**, weiter mit Frage 2.
   - Nein → **unüberwachtes Lernen**, zum Beispiel **Clustering** (Gruppen finden).
2. **Frage 2:** Ist die Zielspalte eine Zahl oder eine Kategorie?
   - Zahl → **Regression** („Wie viele Buchungen für Griechenland 2027?“).
   - Kategorie → **Klassifikation** („Wird die Buchung storniert, ja oder nein?“).
3. **Gegenprobe:** Reicht es, vorhandene Zahlen zu summieren oder aufzuschlüsseln? Dann ist es ein **BI-Bericht**, kein Modell.

**Clustering-Beispiel aus der Vorlesung:** 46 Kunden, x = Anzahl Buchungen, y = Umsatz pro Buchung. Es entstehen drei Gruppen: wenige teure Reisen, Vielbucher, Gelegenheitskunden. Ähnlich innerhalb, verschieden zwischen den Gruppen. Die Bedeutung der Gruppen gibt der Mensch.

**Train/Test (Anhang):** Man teilt alte Daten, zum Beispiel 80 % zum Lernen und 20 % zum Testen. Das Modell sieht die Testantworten nicht. So erkennt man, ob es nur auswendig gelernt hat (Overfitting).

> [!IMPORTANT]
> **Das Wichtigste**
> Zielspalte? Nein → Clustering. Ja und Zahl → Regression. Ja und Kategorie → Klassifikation.

> [!WARNING]
> **Achtung**
> Es entscheidet der **Typ der Zielspalte**. „Storniert ja/nein“ bleibt Klassifikation, auch wenn man es als 1/0 speichert. „Zahl der Buchungen im Juli“ ist Regression.

## Übungen

> [!TIP]
> **Übung 1 · leicht**
> Die Geschäftsleitung bekommt jeden Montag automatisch einen Umsatzbericht per E-Mail. Wie heißt dieses Prinzip? A Pull · B Push · C Drill-down · D ETL
> *Quelle: Lernseite WI, Aufgabe 7.9 (eigene Aufgabe nach T2B3 F. 9)*

> [!TIP]
> **Übung 2 · leicht**
> „Warum ist die Stornoquote für Kreta im Mai so hoch?“ Welche Analysestufe ist das? A deskriptiv · B diagnostisch · C prädiktiv · D präskriptiv
> *Quelle: Lernseite WI, Aufgabe 7.5 (eigene Aufgabe nach T2B3 F. 15)*

> [!TIP]
> **Übung 3 · mittel**
> Welcher Transformationsschritt löst welches Problem? (1) „Spanien“, „ES“, „España“ · (2) Geburtsdatum „01.01.1900“ oder leer · (3) Umsatz je Reiseziel und Monat statt 2 Mio. Einzelbuchungen · (4) Deckungsbeitrag je Reise fehlt.
> *Quelle: Folie T2B3 F. 13, sinngemäß*

> [!TIP]
> **Übung 4 · mittel**
> Stimmt das? „Soll die Zahl der Buchungen im nächsten Juli vorhergesagt werden, ist das eine Klassifikation.“ Begründe kurz.
> *Quelle: Folie T2B4 F. 2 („Stimmt das?“), sinngemäß*

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> Welche Methode passt: BI-Bericht, Regression, Klassifikation, Clustering oder etwas anderes? (1) Umsatz je Reiseziel im letzten Quartal · (2) Buchungen für Kreta im Juli 2027 · (3) Welche Buchungen werden storniert? · (4) Kundengruppen mit ähnlichem Buchungsverhalten · (5) Ist eine Kreditkartenzahlung Betrug? · (6) Verkaufte Stehleuchten 4711 im Dezember · (7) Ist eine Kundenmail Beschwerde, Umbuchung oder Information? · (8) Warum war die Stornoquote für Kreta im Mai so hoch?
> *Quelle: Folie T2B3 F. 26, sinngemäß (offizielle Lösung T2B3 mit Lösungen, F. 27)*

> [!TIP]
> **Übung 6 · Prüfungsniveau**
> Im Onlineshop werden Hotels falsch reserviert, Sonderwünsche gehen verloren. Der Produktmanager fragt nach „jede Woche Anzahl der Beschwerden und Kulanzkosten je Hotel“. Angeboten wird ein monatlicher Standardbericht mit Umsatz und Auslastung je Hotel. Was braucht er wirklich, was fragt er nicht nach, was braucht er nicht?
> *Quelle: Folie T2B3 F. 7, sinngemäß*

## Lösungen

### Übung 1

**B, Push.** Das System liefert von sich aus. Eine selbst gestartete Abfrage wäre Pull.

### Übung 2

**B, diagnostisch.** Die Frage lautet „Warum ist es passiert?“.

### Übung 3

1. **Harmonisierung:** unterschiedliche Bezeichnungen für dasselbe.
2. **Bereinigung:** falsche bzw. fehlende Werte.
3. **Verdichtung:** zusammenfassen.
4. **Anreicherung:** Kennzahl berechnen.

### Übung 4

**Falsch.** Das Ziel ist eine Zahl, also Regression.

### Übung 5

Offizielle Lösung:

| Nr | Methode | Begründung |
|---|---|---|
| 1 | BI-Bericht | vorhandene Zahlen summieren, kein Modell nötig |
| 2 | Regression | Anzahl Buchungen, eine Zahl |
| 3 | Klassifikation | storniert ja oder nein |
| 4 | Clustering | keine Zielspalte, Gruppen entstehen aus den Daten |
| 5 | Klassifikation oder Ausreißererkennung (Grenzfall) | Gibt es bekannte Betrugsfälle? Wenn nein, Auffälliges suchen |
| 6 | Regression | Absatzmenge, eine Zahl |
| 7 | Klassifikation | drei Kategorien |
| 8 | BI-Bericht (Drill-down) | vorhandene Daten aufschlüsseln, kein Modell nötig |

Regression und Klassifikation sind überwacht, Clustering ist unüberwacht.

### Übung 6

- **Objektiver Bedarf:** Daten zur Ursache. Welche Reservierungen waren fehlerhaft, an welcher Stelle (Eingabe im Shop, Übermittlung ans Hotel, Hotel), wurden Sonderwünsche übertragen, welche Hotels und Zeitpunkte?
- **Nicht nachgefragt:** alles zur Ursache. Er fragt nur nach Symptomen (Anzahl, Kosten).
- **Nicht nötig:** Umsatz und Auslastung je Hotel. Das ist Angebot ohne Bedarf.

Nachfrage, Bedarf und Angebot sind verschieden. Ziel ist, ihre Schnittmenge zu vergrößern.
