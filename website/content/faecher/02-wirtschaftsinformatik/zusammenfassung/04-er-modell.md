Nach dem Ablauf in Kapitel 3 geht es jetzt um die Daten. Ein Datenmodell zeigt statisch, welche Daten es gibt und wie sie zusammenhängen. Ziel ist, dass jede Information nur einmal gespeichert wird. Du sollst ein ER-Modell selbst zeichnen und in Relationen überführen können. Das ist eine typische Transferaufgabe.

### Warum man Daten modelliert

Stehen Daten mehrfach da, nennt man das Redundanz. Sie führt zu drei Anomalien. Bei der Einfügeanomalie kann man einen neuen Artikel nicht eintragen, solange er nie bestellt wurde. Bei der Änderungsanomalie muss man einen Umzug in vielen Zeilen ändern und vergisst eine. Bei der Löschanomalie verschwindet mit einem Auftrag auch der einzige Eintrag des Kunden. Der Entwurf läuft deshalb in drei Stufen: konzeptionell mit dem ER-Modell, logisch mit dem Relationenmodell, physisch in der Datenbank.

### Das ER-Modell

Im ER-Modell nach Chen ist ein Entity-Typ ein Rechteck, etwa Kunde. Das einzelne Objekt, etwa die Meier GmbH, ist ein Entity und wird nicht gezeichnet. Attribute sind Ellipsen. Das Schlüsselattribut identifiziert jedes Entity eindeutig und wird unterstrichen. Ist eine Angabe laut Text nicht eindeutig, ergänzt du eine Nummer. Beziehungen sind Rauten. Die Faustregel lautet: Substantive werden Entity-Typen, Verben werden Relationships.

Die Kardinalität fragst du immer in beide Richtungen ab. „Wie viele B hat ein A?“ und „Wie viele A hat ein B?“. So entstehen 1:1, 1:n und n:m. Ein Attribut, das erst für ein Paar feststeht, kommt an die Raute.

### Vom ER-Modell zu Relationen

Danach überführst du das Modell in Tabellen. Jeder Entity-Typ wird eine Relation, das Schlüsselattribut wird Primärschlüssel. Bei 1:n bekommt die n-Seite den Primärschlüssel der 1-Seite als Fremdschlüssel. Bei 1:1 steht der Fremdschlüssel in einer der beiden Relationen. Bei n:m entsteht eine eigene Relation. Beide Primärschlüssel werden dort Fremdschlüssel und bilden zusammen den Primärschlüssel. Der Grund: Jede Zelle darf nur einen Wert haben, der Fremdschlüssel steht also dort, wo er nur einen Wert hat.

### Ein durchgespieltes Beispiel

Ein Kunde erteilt Aufträge, ein Auftrag enthält mehrere Artikel in einer Menge, und zu jedem Auftrag gibt es genau eine Rechnung. Ein Kunde hat viele Aufträge, ein Auftrag gehört zu einem Kunden: Kunde 1:n Auftrag. Ein Auftrag enthält viele Artikel, ein Artikel steht in vielen Aufträgen: n:m, mit der Menge an der Raute. Auftrag und Rechnung stehen 1:1. Daraus folgen die Relationen:

Kunde(**Kunden-Nr.**, K-Name, K-Adresse)

Auftrag(**Auftrags-Nr.**, Datum, Kunden-Nr.↑)

Artikel(**Artikel-Nr.**, Bezeichnung, Preis)

enthält(**Auftrags-Nr.↑**, **Artikel-Nr.↑**, Menge)

Rechnung(**Rechnungs-Nr.**, Rechnungsdatum, Auftrags-Nr.↑)

Fett ist der Primärschlüssel, ↑ markiert den Fremdschlüssel. Würdest du nur fragen, wie viele Artikel ein Auftrag hat, käme fälschlich 1:n heraus.

Zum Schluss unterscheidet das Kapitel drei Begriffe. Die Datenbank ist der Datenbestand, das DBMS ist die Software, die ihn verwaltet. Beides zusammen ist das Datenbanksystem.

### Das musst du können

- die drei Anomalien und die drei Entwurfsstufen nennen
- aus einem Falltext ein ER-Modell zeichnen und fehlende Schlüssel ergänzen
- Kardinalitäten aus beiden Richtungen bestimmen und Attribute an die Raute hängen
- ein ER-Modell nach den Regeln für 1:1, 1:n und n:m in Relationen überführen
- DB, DBMS und DBS unterscheiden
