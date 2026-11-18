Die Sonnenschein AG hat jetzt ein CRM voller Daten. Dieses Kapitel zeigt, wie man daraus Entscheidungen macht. Business Intelligence liefert Berichte über das, was war. Data Science liefert Prognosen über das, was kommt. Es baut auf Kapitel 2 auf, wo Systeme zur Entscheidungsunterstützung schon als Systems of Insight vorkamen.

### Informationsbedarf

Am Anfang steht die Frage, was jemand wissen muss. Der objektive Bedarf ist das, was die Aufgabe wirklich erfordert. Der subjektive Bedarf ist das, was die Person für nötig hält. Die Nachfrage ist das, was sie tatsächlich anfragt. Das Angebot ist das, was verfügbar ist. Die Schnittmenge aus benötigt, nachgefragt und verfügbar heißt Informationsstand, und den will man vergrößern. Holt der Nutzer die Information selbst, spricht man von Pull. Liefert das System sie von sich aus, von Push.

### Von Berichtssystemen zu BI

Managementunterstützungssysteme sind über Jahrzehnte gewachsen. Berichtssysteme liefern einfache Auswertungen. Ein DSS spielt Alternativen durch („Was wäre, wenn?“). Ein Expertensystem arbeitet mit Wenn-dann-Regeln, die Menschen hineinschreiben. Ein EIS zeigt dem Top-Management die wichtigsten Kennzahlen. Business Intelligence baut darauf auf. Daten aus den operativen Systemen werden per ETL extrahiert, transformiert und ins Data Warehouse geladen. Beim Transformieren wird bereinigt, harmonisiert, verdichtet und angereichert. Das Data Warehouse speichert aktuelle und historische Daten, Data Marts sind Teilbereiche für einzelne Abteilungen.

### Analysestufen und Data Science

Vier Analysestufen steigen im Anspruch: deskriptiv (Was ist passiert?), diagnostisch (Warum?), prädiktiv (Was wird passieren?) und präskriptiv (Was sollen wir tun?). BI deckt vor allem die ersten beiden ab, Data Science die letzten beiden. Data Science gewinnt mit wissenschaftlichem Vorgehen Informationen aus großen Datenbeständen. Machine Learning ist eines ihrer Werkzeuge und lernt Regeln aus Daten, anders als ein Expertensystem. Ein Projekt folgt CRISP-DM in sechs Phasen mit Rücksprüngen: Business Understanding, Data Understanding, Data Preparation, Modelling, Evaluation, Deployment.

Die Methode wählst du mit zwei Fragen. Gibt es eine Zielspalte mit bekannten Antworten? Wenn nein, ist es unüberwachtes Lernen, etwa Clustering. Wenn ja, entscheidet ihr Typ: Eine Zahl führt zur Regression, eine Kategorie zur Klassifikation.

### Ein durchgerechnetes Beispiel

Die Sonnenschein AG will wissen, ob eine neue Buchung storniert wird. Das ist eine Frage nach der Zukunft, also prädiktiv. Die Zielspalte „storniert ja/nein“ ist bekannt und eine Kategorie, also Klassifikation. Die Daten kommen aufbereitet aus dem Data Warehouse. Von 1 000 alten Buchungen dienen 80 % zum Training, also 800, und 20 % zum Test, also 200. Das Modell liegt bei 170 der 200 Testfälle richtig: 170 / 200 = 85 %. Vorsicht: Wird nur jede 20. Buchung storniert, sind das 5 %. Ein Modell, das immer „nicht storniert“ sagt, wäre dann zu 95 % richtig und fände keinen einzigen Storno. In der Evaluation prüfst du deshalb, ob das Modell das betriebliche Problem wirklich löst.

### Das musst du können

- objektiven Bedarf, subjektiven Bedarf, Nachfrage und Angebot unterscheiden
- den Aufbau eines BI-Systems mit ETL, Data Warehouse und Data Marts skizzieren
- die vier Analysestufen einer Frage zuordnen
- die sechs Phasen von CRISP-DM nennen
- für eine Fragestellung Regression, Klassifikation oder Clustering begründet wählen
