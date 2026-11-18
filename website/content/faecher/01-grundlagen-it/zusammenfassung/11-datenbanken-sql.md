Im letzten Kapitel ging es darum, wo Daten physisch liegen: im RAM, auf der SSD oder im RAID. Dieses Kapitel fragt, wie ein Unternehmen seine Daten logisch ordnet, damit alle Abteilungen dieselben, richtigen Daten nutzen. Die Antwort ist eine Datenbank, die man mit SQL abfragt. In der Klausur ist das Aufgabe 11 mit 4–6 Punkten: Eigenschaften, SQL lesen und SQL schreiben.

### Vom Dateiansatz zum DBMS

Früher hatte jede Abteilung eigene Programme mit eigenen Dateien. Dieser **Dateiansatz** hat vier Probleme: Redundanz und Inkonsistenz, die Abhängigkeit zwischen Programm und Daten, fehlender Datenaustausch und mangelnde Datensicherheit. Das Problem ist nicht die Kopie, sondern dass Kopien auseinanderlaufen. Eine **Datenbank** ist eine Sammlung logisch zusammenhängender Daten. Das **DBMS** ist die Software, die sie verwaltet, und beides zusammen heißt Datenbanksystem. Das DBMS speichert neben den Nutzdaten auch Metadaten im **Data Dictionary**: welche Tabellen, Spalten, Datentypen und Regeln es gibt. Es bietet Redundanzkontrolle, Zugriffsrechte, Mehrbenutzerbetrieb, Integritätsbedingungen und Wiederherstellung. Nachteil: hohe Anfangskosten.

### ER-Modell und Tabellen

Bevor man Tabellen anlegt, modelliert man die Daten im **ER-Modell**. Ein Rechteck ist ein Entitätstyp, eine Ellipse ein Attribut, ein unterstrichenes Attribut der Schlüssel und eine Raute eine Beziehung. Die **Kardinalität** fragst du immer aus beiden Richtungen: Wie viele B hat ein A, und wie viele A hat ein B? So ist Rechnung zu Posten 1:n und Student zu Vorlesung m:n. Im **relationalen Modell** wird daraus eine Sammlung von Tabellen. Eine Zeile heißt Tupel, eine Spalte Attribut. Der **Primärschlüssel** identifiziert jede Zeile eindeutig. Ein **Fremdschlüssel** verweist auf den Primärschlüssel einer anderen Tabelle. Bei 1:n steht er auf der n-Seite, eine m:n-Beziehung braucht eine eigene Hilfstabelle.

### SQL lesen und schreiben

SQL ist deklarativ: Du sagst, was du willst, nicht wie gesucht wird. CREATE, INSERT, UPDATE und DELETE legen an, fügen ein, ändern und löschen. Ohne WHERE wirken UPDATE und DELETE auf alle Zeilen. Eine Abfrage liest du in der Reihenfolge, in der sie ausgeführt wird: FROM, dann WHERE, dann GROUP BY, dann SELECT. Aggregatfunktionen wie SUM, MAX, MIN, AVG und COUNT fassen viele Zeilen zusammen, ohne GROUP BY zu genau einer Zeile. Stehen die Spalten in verschiedenen Tabellen, brauchst du einen **Join**: Im WHERE steht dann „Fremdschlüssel = Primärschlüssel“. Beim Schreiben fragst du in derselben Logik: Was ausgeben, aus welchen Tabellen, welche Zeilen, und steht „pro“ in der Frage? Zum Schluss unterscheidet das Kapitel **OLTP** für das Tagesgeschäft (zeilenweise gespeichert) und **OLAP** für Analysen (spaltenweise). ETL bringt die Daten von einem ins andere.

### Ein Beispiel, das alles verbindet

Gesucht ist für jede Abteilung der Name, die Zahl der Angestellten mit mehr als 25000 Gehalt und deren Durchschnitt. Der Name steht in ABTEILUNG, das Gehalt in ANGESTELLTER. Du brauchst also einen Join über den Fremdschlüssel ABT.

```sql
SELECT ANAME, COUNT(*), AVG(GEHALT)
FROM ANGESTELLTER, ABTEILUNG
WHERE ABT = ABTNUMMER AND GEHALT > 25000
GROUP BY ANAME;
```

FROM und Join ordnen jedem Angestellten seine Abteilung zu. WHERE wirft Zelaya, English und Jabbar mit genau 25000 hinaus, denn „mehr als“ heißt >. GROUP BY bildet die Gruppen. Research hat Smith, Wong und Narayan: 3 Personen, (30000 + 40000 + 38000) / 3 = 36000. Administration hat nur Wallace mit 43000, Headquarters nur Borg mit 55000. Mit >= statt > hätte Research 4 Personen und den Durchschnitt 33250.

### Das musst du können

- die vier Probleme des Dateiansatzes nennen und DB, DBMS und Data Dictionary unterscheiden
- ein kleines ER-Modell zeichnen und Kardinalitäten aus beiden Richtungen bestimmen
- Primär- und Fremdschlüssel erklären und ein ER-Modell in Tabellen übersetzen
- eine SQL-Abfrage mit WHERE, GROUP BY, Aggregat und Join von Hand ausführen
- eine einfache Abfrage selbst schreiben
- OLTP und OLAP unterscheiden
