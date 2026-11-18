In Kapitel 4 waren Bits Zahlen. Hier sind sie Wahrheitswerte: 1 heißt wahr, 0 heißt falsch. Du lernst, wie man mit „und“, „oder“ und „nicht“ rechnet und wie ein Rechner das mit Gattern umsetzt. In der Klausur gibt es dafür 4 Punkte. Verlangt wird die „Analyse und Synthese“ von Wahrheitstabellen, Ausdrücken und Schaltungen.

### Operatoren und Gatter

Es gibt drei Grundoperatoren. **AND** (∧) ist nur 1, wenn alle Eingänge 1 sind. **OR** (∨) ist nur 0, wenn alle Eingänge 0 sind. **NOT** (¬) dreht den Wert um. Die Rangfolge ist wie Punkt vor Strich: zuerst ¬, dann ∧, dann ∨. Dazu kommen vier weitere Gatter mit zwei Eingängen. **XOR** ist 1, wenn die Eingänge verschieden sind, **XNOR**, wenn sie gleich sind. **NAND** und **NOR** sind AND und OR mit umgedrehtem Ergebnis. In der Klausur zeichnest du die Symbole nach IEC 60617-12: Kästchen mit &, ≥1, 1 oder =1. Ein kleiner Kreis am Ausgang bedeutet Negation. NAND ist ein Universalgatter. Damit lassen sich NOT, AND und OR nachbauen.

### Rechengesetze und De Morgan

Mit den Rechengesetzen formst du Ausdrücke um. Wichtig sind vor allem Distributivgesetz, Komplement (a ∨ ¬a = 1) und Neutralität (a ∧ 1 = a). Besonders oft gebraucht wird **De Morgan**: ¬(A ∧ B) = ¬A ∨ ¬B und ¬(A ∨ B) = ¬A ∧ ¬B. Ziehst du die Negation in die Klammer, wird jede Variable negiert und aus UND wird ODER. Der häufigste Fehler ist, das Zeichen in der Mitte nicht umzudrehen.

### Von der Beschreibung zur Schaltung

Die typische Aufgabe führt von einem Text über die Wahrheitstabelle zum Ausdruck und zur Schaltung. Bei n Eingängen hat die Tabelle 2ⁿ Zeilen. Zähl die Eingänge wie Binärzahlen hoch. Aus der Tabelle gewinnst du die **disjunktive Normalform (DNF)**. Dafür nimmst du nur die Zeilen mit Ergebnis 1. Jede davon wird ein UND-Term, in dem eine 1 zur Variablen und eine 0 zur negierten Variablen wird. Alle Terme verbindest du mit ∨. Die DNF stimmt immer. Vereinfachen kannst du mit der Kernregel: Unterscheiden sich zwei Terme in genau einer Variablen, fällt diese weg, weil X ∨ ¬X = 1 ist. Ein Term darf dabei mehrfach benutzt werden. Für die Schaltung baust du den Ausdruck von innen nach außen nach, jede Operation wird ein Gatter. Der Rückweg heißt Analyse: Du legst für jedes Gatter eine Hilfsspalte an und rechnest Zeile für Zeile.

### Ein Beispiel, das alles verbindet

Eine Alarmanlage Y löst aus, wenn sie scharf ist (S) und die Tür (T) oder das Fenster (F) offen ist. Drei Eingänge ergeben 8 Zeilen. Ergebnis 1 haben nur die Zeilen 101, 110 und 111. Die DNF lautet Y = (S ∧ ¬T ∧ F) ∨ (S ∧ T ∧ ¬F) ∨ (S ∧ T ∧ F). Beim Vereinfachen benutzt du den letzten Term zweimal. (S ∧ ¬T ∧ F) ∨ (S ∧ T ∧ F) ergibt S ∧ F. (S ∧ T ∧ ¬F) ∨ (S ∧ T ∧ F) ergibt S ∧ T. Zusammen ist Y = (S ∧ F) ∨ (S ∧ T) = S ∧ (T ∨ F). Probe mit 101: 1 ∧ (0 ∨ 1) = 1 ✓. Die Schaltung braucht nur zwei Gatter: ein ≥1 für T und F, dahinter ein & mit S. Nach demselben Rezept entsteht der **Halbaddierer**. Die Tabelle für A + B hat als Summe genau XOR und als Übertrag genau AND. Zwei Halbaddierer und ein ODER ergeben einen Volladdierer.

### Das musst du können

- die Wahrheitstabellen der sieben Gatter und ihre IEC-Symbole
- De Morgan korrekt anwenden
- aus einem Text eine Wahrheitstabelle und daraus die DNF aufstellen
- eine DNF mit der Kernregel vereinfachen und mit einer Zeile prüfen
- einen Ausdruck als Schaltung zeichnen und eine Schaltung in eine Tabelle zurückübersetzen
- den Halbaddierer aus XOR und AND erklären
