---
title: "Anwendung: Finanzmathematik"
order: 4
summary: "Zinseszins als geometrische Folge, der Sparplan als endliche geometrische Reihe, die Endwertformel und die ewige Rente."
klausur: "relevant"
---

Auf der Folie vom 04.11. steht: „Die geometrische Reihe ist die Grundlage der Finanzmathematik.“ Das klingt abstrakt. In diesem Kapitel siehst du, dass dahinter nur ein Sparkonto steckt. Zinseszins ist eine geometrische Folge. Ein Sparplan ist eine endliche geometrische Reihe. Mehr ist es nicht.

Ein Alltagsbeispiel: Du zahlst drei Jahre lang am Jahresende je 100 € auf ein Sparkonto mit 5 % Zinsen. Am Ende hast du nicht 300 €, sondern 315,25 €. Woher die 15,25 € kommen und wie du das für 10 oder 60 Einzahlungen schnell rechnest, zeigt dieses Kapitel. Wir rechnen alles erst Jahr für Jahr mit kleinen Zahlen und zeigen danach, dass die Formel genau dasselbe ausrechnet.

Zwei Wörter vorab:

- **Zinssatz i:** wie viel Prozent die Bank pro Jahr dazugibt. In Formeln immer als Dezimalzahl: 5 % = 5/100 = 0,05.
- **Zinsfaktor q = 1 + i:** die Zahl, mit der der Kontostand jedes Jahr malgenommen wird. Bei 5 % ist q = 1,05. Mal 1,05 heißt: „das Alte bleibt (die 1) und 5 % kommen dazu (die 0,05)“.

## Zinseszins

**In einem Satz:** Du legst einmal Geld an, und jedes Jahr bekommst du Zinsen, auch auf die Zinsen der Vorjahre.

**Stell dir vor:** Ein Schneeball rollt einen Hang hinunter. Jede Runde bleibt Schnee an ihm hängen, und zwar umso mehr, je größer er schon ist. Ein großer Schneeball sammelt mehr Schnee als ein kleiner. Genau so ist es mit dem Geld: Die Bank gibt 5 % vom aktuellen Kontostand. Ist der Kontostand gewachsen, sind auch die 5 % mehr Euro.

**Mit Zahlen:** Du legst 1000 € zu 5 % an und hebst nichts ab.

| Jahr | Kontostand am Anfang | Zinsen in diesem Jahr (5 %) | Kontostand am Ende |
|---|---|---|---|
| 1 | 1000,00 € | 50,00 € | 1050,00 € |
| 2 | 1050,00 € | 52,50 € | 1102,50 € |
| 3 | 1102,50 € | 55,13 € | 1157,63 € |

Schau auf die Spalte „Zinsen“: 50 €, dann 52,50 €, dann 55,13 €. Die Zinsen wachsen, weil der Schneeball größer wird. Die 2,50 € extra im zweiten Jahr sind 5 % von den 50 € Zinsen aus Jahr 1. Das sind die „Zinsen auf die Zinsen“, darum heißt es **Zinseszins**.

Ohne Zinseszins (jedes Jahr nur 50 € auf die ursprünglichen 1000 €) hättest du nach 10 Jahren 1500 €. Mit Zinseszins sind es 1628,89 €.

**Die Formel:** Jedes Jahr wird mit 1,05 malgenommen. Nach 3 Jahren also dreimal: 1000 · 1,05 · 1,05 · 1,05 = 1000 · 1,05³. Allgemein:

**Kₙ = r · (1 + i)ⁿ**

- Kₙ: der Kontostand nach n Jahren (K wie Kapital).
- r: der Betrag, den du am Anfang einmal einzahlst.
- i: der Zinssatz als Dezimalzahl (5 % = 0,05).
- 1 + i: der Zinsfaktor, mit dem jedes Jahr malgenommen wird.
- n: die Anzahl der Jahre. Der Exponent n zählt, wie oft malgenommen wird.

**So steht es auf der Folie:** Die Tafel vom 04.11. schreibt die Kontostände untereinander: r, (1 + i) · r, (1 + i)² · r, …, (1 + i)ⁿ · r.

Auf Deutsch heißt das: Das ist eine geometrische Folge. Jedes Glied ist das vorige mal derselben Zahl q = 1 + i. Das kennst du aus dem Kapitel „Folgen“.

| Jahr n | Kontostand allgemein | mit r = 1000 €, i = 5 % |
|---|---|---|
| 0 | r | 1000,00 € |
| 1 | (1 + i) · r | 1050,00 € |
| 2 | (1 + i)² · r | 1102,50 € |
| 3 | (1 + i)³ · r | 1157,63 € |
| 10 | (1 + i)¹⁰ · r | 1628,89 € |

**So rechnest du:** Kontostand nach 10 Jahren bei 1000 € und 5 %.

1. Zinssatz als Dezimalzahl: i = 0,05.
2. Zinsfaktor: q = 1 + 0,05 = 1,05.
3. Hoch Anzahl Jahre: 1,05¹⁰ ≈ 1,628895.
4. Mal Startbetrag: 1000 · 1,628895 ≈ 1628,89 €.

> [!IMPORTANT]
> **Das Wichtigste**
> Kₙ = r · (1 + i)ⁿ. Jedes Jahr wird mit demselben Faktor 1 + i malgenommen. Das ist eine geometrische Folge mit q = 1 + i.

> [!WARNING]
> **Typischer Fehler**
> Den Zinssatz falsch einsetzen. 5 % ist 0,05, nicht 5 und nicht 0,5. Und der Faktor ist 1,05, nicht 0,05: Mit 0,05 malnehmen hieße, dass nur die Zinsen übrig bleiben und dein eigenes Geld verschwindet.

## Sparplan: jedes Jahr r einzahlen

**In einem Satz:** Du zahlst jedes Jahr denselben Betrag ein, und am Ende willst du wissen, wie viel insgesamt mit Zinsen auf dem Konto liegt.

**Stell dir vor:** Jedes Jahr rollst du einen neuen, kleinen Schneeball los. Die älteren Schneebälle rollen schon länger und sind deshalb größer. Der Schneeball vom ersten Jahr ist am größten, der vom letzten Jahr ist gerade erst gemacht und noch klein. Am Ende legst du alle Schneebälle auf einen Haufen. Der Endwert ist die Größe des ganzen Haufens.

**Mit Zahlen:** Du zahlst 3 Jahre lang jeweils **am Jahresende** 100 € ein, Zinssatz 5 %.

Variante 1, Jahr für Jahr wie auf dem Kontoauszug:

| Jahr | Kontostand am Anfang | Zinsen (5 % davon) | Einzahlung am Jahresende | Kontostand am Ende |
|---|---|---|---|---|
| 1 | 0,00 € | 0,00 € | 100 € | 100,00 € |
| 2 | 100,00 € | 5,00 € | 100 € | 205,00 € |
| 3 | 205,00 € | 10,25 € | 100 € | 315,25 € |

Im ersten Jahr gibt es keine Zinsen, weil das Geld erst am Jahresende kommt. Im zweiten Jahr bringen die 100 € 5 € Zinsen. Im dritten Jahr bringen die 205 € 10,25 € Zinsen.

Variante 2, Schneeball für Schneeball (jede Einzahlung einzeln verzinst):

| Einzahlung | wie lange verzinst | Rechnung | Wert am Ende |
|---|---|---|---|
| 1. (Ende Jahr 1) | 2 Jahre | 100 · 1,05² | 110,25 € |
| 2. (Ende Jahr 2) | 1 Jahr | 100 · 1,05 | 105,00 € |
| 3. (Ende Jahr 3) | 0 Jahre | 100 | 100,00 € |
| **Summe** | | | **315,25 €** |

Beide Wege geben 315,25 €. Eingezahlt hast du 300 €, die Zinsen sind 15,25 €.

**Die Formel:** Die Summe aus Variante 2 lautet allgemein Eₙ = r + r · (1 + i) + r · (1 + i)² + … + r · (1 + i)ⁿ⁻¹. Das ist eine geometrische Reihe: Jeder Summand ist der vorige mal 1 + i. Für so eine Summe gibt es eine fertige Formel (Kapitel „Reihen“). Damit wird daraus:

**Eₙ = r · ((1 + i)ⁿ − 1)/i**

- Eₙ: der Endwert, also der Kontostand direkt nach der n-ten Einzahlung (E wie Endwert).
- r: die Rate, also der Betrag, den du jedes Mal einzahlst.
- i: der Zinssatz pro Periode als Dezimalzahl.
- n: wie oft du einzahlst.
- (1 + i)ⁿ − 1: „Zinsfaktor hoch n, minus 1“.
- geteilt durch i: Das kommt aus der Reihenformel, dort steht im Nenner q − 1 = (1 + i) − 1 = i.

**Probe mit unserem Beispiel:** r = 100, i = 0,05, n = 3.

1. (1 + i)ⁿ = 1,05³ = 1,157625.
2. Minus 1: 1,157625 − 1 = 0,157625.
3. Geteilt durch i: 0,157625 : 0,05 = 3,1525.
4. Mal r: 100 · 3,1525 = 315,25 €.

Die Formel gibt genau das, was wir in der Tabelle Jahr für Jahr ausgerechnet haben. Sie ist nur schneller, wenn es 10 oder 60 Einzahlungen sind.

**So steht es auf der Folie:** Die Herleitung von der Tafel in vier Zeilen:

1. Eₙ = r + r(1 + i) + r(1 + i)² + … + r(1 + i)ⁿ⁻¹.
   Auf Deutsch heißt das: Alle Schneebälle zusammenzählen. Der letzte hat 0 Jahre Zinsen, der erste n − 1 Jahre.
2. Eₙ = r · Σₖ₌₀ⁿ⁻¹ (1 + i)ᵏ.
   Auf Deutsch heißt das: Σ liest du „Summe von k = 0 bis n − 1“. Du setzt nacheinander k = 0, 1, 2, …, n − 1 ein und zählst alles zusammen. Das r steht vor dem Σ, weil jeder Summand den Faktor r hat (Ausklammern).
3. Σₖ₌₀ⁿ⁻¹ qᵏ = (qⁿ − 1)/(q − 1) mit q = 1 + i.
   Auf Deutsch heißt das: Das ist die Summenformel der endlichen geometrischen Reihe mit n Summanden.
4. Eₙ = r · ((1 + i)ⁿ − 1)/i.
   Auf Deutsch heißt das: q = 1 + i eingesetzt, und unten wird (1 + i) − 1 einfach zu i.

**So rechnest du:** Das Beispiel von der Folie: 100 € pro Monat, 0,25 % Zinsen pro Monat, 60 Monate (5 Jahre).

1. Periode prüfen: Rate, Zins und Laufzeit sind alle in Monaten. Passt.
2. Werte als Dezimalzahl: r = 100, i = 0,25 % = 0,0025, n = 60.
3. (1 + i)ⁿ = 1,0025⁶⁰ ≈ 1,161617.
4. Minus 1: 0,161617.
5. Geteilt durch i: 0,161617 : 0,0025 ≈ 64,6467.
6. Mal r: 100 · 64,6467 ≈ 6464,67 €. Die Folie rundet auf 6460 €.
7. Einordnen: Eingezahlt sind 60 · 100 = 6000 €. Zinsen also rund 464,67 €.

> [!IMPORTANT]
> **Das Wichtigste**
> Sparplan = viele Schneebälle = endliche geometrische Reihe mit q = 1 + i. Endwert Eₙ = r · ((1 + i)ⁿ − 1)/i. Zins und Laufzeit müssen zur selben Periode passen, etwa beides in Monaten.

> [!WARNING]
> **Typischer Fehler**
> Die unendliche Formel „erstes Glied/(1 − q)“ benutzen. Die gilt nur, wenn |q| < 1 ist, also wenn die Summanden kleiner werden. Beim Sparplan ist q = 1 + i größer als 1, die Schneebälle werden größer. Darum gilt nur die endliche Formel. Zweiter Fehler: Zins pro Jahr mit Laufzeit in Monaten mischen.

## Die Rate berechnen

**In einem Satz:** Du kennst dein Sparziel und fragst, wie viel du jedes Jahr einzahlen musst.

**Stell dir vor:** Du willst am Ende einen Haufen einer bestimmten Größe haben und fragst, wie groß jeder einzelne neue Schneeball sein muss.

**Die Formel:** Die Endwertformel nach r umstellen (das ist eine Ergänzung, nicht auf den Folien). Aus Eₙ = r · ((1 + i)ⁿ − 1)/i wird durch Teilen durch den Bruch:

**r = Eₙ · i/((1 + i)ⁿ − 1)**

**Mit Zahlen:** Erst die Probe mit dem bekannten Beispiel. Ziel 315,25 €, i = 0,05, n = 3: r = 315,25 · 0,05/0,157625 = 15,7625/0,157625 = 100 €. Stimmt.

**So rechnest du:** Ziel 10 000 € in 10 Jahren, 5 % Zinsen, Einzahlung am Jahresende.

1. 1,05¹⁰ ≈ 1,628895.
2. Minus 1: 0,628895.
3. Ziel mal i: 10 000 · 0,05 = 500.
4. Teilen: 500 : 0,628895 ≈ 795,05 €.
5. Probe: 795,05 · 0,628895/0,05 ≈ 10 000 €.

> [!WARNING]
> **Typischer Fehler**
> Einfach Ziel durch Anzahl Jahre rechnen: 10 000/10 = 1000 €. Das vergisst die Zinsen. Weil die Zinsen mithelfen, reicht eine kleinere Rate.

## Ewige Rente

**In einem Satz:** Wie viel Geld musst du heute anlegen, damit du für immer jedes Jahr denselben Betrag bekommst?

**Stell dir vor:** Du legst Geld auf ein Konto und hebst jedes Jahr nur die Zinsen ab. Das Geld selbst rührst du nie an. Dann bleibt der Kontostand immer gleich, und du kannst für immer jedes Jahr dieselben Zinsen abheben.

**Mit Zahlen:** Du willst jedes Jahr 100 € abheben, der Zinssatz ist 5 %. Du legst 2000 € an.

| Jahr | Kontostand am Anfang | Zinsen (5 %) | du hebst ab | Kontostand am Ende |
|---|---|---|---|---|
| 1 | 2000 € | 100 € | 100 € | 2000 € |
| 2 | 2000 € | 100 € | 100 € | 2000 € |
| 3 | 2000 € | 100 € | 100 € | 2000 € |
| … | 2000 € | 100 € | 100 € | 2000 € |

Das geht ewig so weiter. Also sind „für immer 100 € pro Jahr“ heute genau 2000 € wert. Die Rechnung dazu: Welcher Betrag bringt bei 5 % genau 100 € Zinsen? 100 : 0,05 = 2000.

**Die Formel:**

**Barwert der ewigen Rente = r/i**

- Barwert: was die Zahlungen **heute** wert sind (bar = sofort auf die Hand).
- r: der Betrag, der jedes Jahr ausgezahlt wird. Die erste Zahlung kommt in einem Jahr.
- i: der Zinssatz als Dezimalzahl.

Folienbeispiel: r = 1000 € pro Jahr, i = 4 %: 1000/0,04 = 25 000 €. Probe: 4 % von 25 000 € sind 1000 €.

**So steht es auf der Folie:** Die Folie „Sparplan und Rentenrechnung“ rechnet mit **Abzinsen**. Das heißt: Geld, das erst in der Zukunft kommt, ist heute weniger wert. 100 € in einem Jahr entsprechen heute 100/1,05 ≈ 95,24 €, denn 95,24 € zu 5 % angelegt werden in einem Jahr wieder 100 €.

Barwert = Σₖ₌₁^∞ r · (1/(1 + i))ᵏ.

Auf Deutsch heißt das: Σ von k = 1 bis ∞ heißt „zähle für k = 1, 2, 3, … ohne Ende zusammen“. Jede künftige Zahlung wird auf heute zurückgerechnet (die Zahlung in k Jahren wird k-mal durch 1 + i geteilt), und alle diese heutigen Werte werden addiert.

| Zahlung in Jahr k | heutiger Wert 100/1,05ᵏ | Summe bis hier |
|---|---|---|
| 1 | 95,24 € | 95,24 € |
| 2 | 90,70 € | 185,94 € |
| 3 | 86,38 € | 272,32 € |
| bis 10 | | 772,17 € |
| bis 50 | | 1825,59 € |
| bis 100 | | 1984,79 € |
| unendlich viele | | 2000,00 € |

Die Summe wächst immer langsamer und kommt der 2000 immer näher. Das passt zur Konto-Tabelle oben.

**So rechnest du:** mit der Reihenformel (wie auf der Folie), r = 100 €, i = 5 %.

1. Faktor bestimmen: q = 1/1,05 ≈ 0,952. Das ist kleiner als 1. Darum darf man die unendliche Formel benutzen.
2. Erstes Glied: 100/1,05.
3. Unendliche Formel: Summe = erstes Glied/(1 − q) = (100/1,05)/(1 − 1/1,05).
4. Nenner ausrechnen: 1 − 1/1,05 = 1,05/1,05 − 1/1,05 = 0,05/1,05.
5. Teilen: (100/1,05) : (0,05/1,05). Die 1,05 kürzt sich weg. Es bleibt 100/0,05 = 2000 €.

> [!IMPORTANT]
> **Das Wichtigste**
> Ewige Rente: Barwert = r/i. Bild: Geld anlegen und nur die Zinsen abheben. Abzinsen heißt q = 1/(1 + i) < 1, darum darf man hier die unendliche Formel benutzen.

> [!WARNING]
> **Typischer Fehler**
> Aufzinsen und Abzinsen verwechseln. Sparplan: Das Geld wächst in die Zukunft, q = 1 + i > 1, nur die endliche Formel. Barwert: Zukunftsgeld wird auf heute zurückgerechnet, q = 1/(1 + i) < 1, die unendliche Formel ist erlaubt.

## Übungen

> [!TIP]
> **Übung 1 · leicht**
> Du legst 1000 € zu 5 % pro Jahr an. Wie viel ist es nach 1, 2 und 3 Jahren, und wie viel nach 10 Jahren?
>
> Quelle: eigene Aufgabe, wie Tafel 04.11.

> [!TIP]
> **Übung 2 · mittel**
> Jährlich 1200 € am Jahresende, 3 % Zinsen, 10 Jahre. a) Endwert? b) Wie viel davon sind Zinsen?
>
> Quelle: eigene Aufgabe

> [!TIP]
> **Übung 3 · mittel**
> Eine Stiftung soll für immer jedes Jahr 600 € auszahlen (erste Zahlung in einem Jahr), Zins 4 %. Wie viel Kapital braucht sie heute?
>
> Quelle: eigene Aufgabe, wie Folie „Sparplan und Rentenrechnung“

> [!TIP]
> **Übung 4 · Prüfungsniveau**
> Zinssatz 4 %, Laufzeit 10 Jahre. Option A: heute einmalig 5000 € anlegen. Option B: 10 Jahre lang am Jahresende je 500 € einzahlen. a) Berechne beide Endwerte. b) Beide Male werden 5000 € eingezahlt. Erkläre den Unterschied.
>
> Quelle: eigene Aufgabe, Klausurstil

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> r = 200 € jährlich am Jahresende, i = 10 %, n = 4. a) Schreibe den Endwert als Summe der vier verzinsten Einzahlungen und rechne aus. b) Schreibe die Summe mit Σ, ziehe r heraus und nenne q. c) Prüfe mit der Formel Eₙ = r · ((1 + i)ⁿ − 1)/i.
>
> Quelle: eigene Aufgabe, wie Tafel 04.11.

## Lösungen

### Übung 1

Einmal anlegen, nichts abheben: Das ist Zinseszins, Kₙ = r · (1 + i)ⁿ.

1. i = 5 % = 0,05, Zinsfaktor 1,05, r = 1000.
2. Nach 1 Jahr: 1000 · 1,05 = 1050,00 €.
3. Nach 2 Jahren: 1,05² = 1,1025, also 1000 · 1,1025 = 1102,50 €.
4. Nach 3 Jahren: 1,05³ = 1,157625, also 1000 · 1,157625 = 1157,625 ≈ 1157,63 €.
5. Nach 10 Jahren: 1,05¹⁰ ≈ 1,628895, also 1000 · 1,628895 ≈ 1628,89 €.

Vergleich: Ohne Zinseszins (jedes Jahr nur 50 €) wären es nach 10 Jahren 1000 + 10 · 50 = 1500 €. Der Zinseszins bringt 128,89 € mehr.

### Übung 2

Jedes Jahr dieselbe Einzahlung: Sparplan, Eₙ = r · ((1 + i)ⁿ − 1)/i.

a)

1. r = 1200, i = 3 % = 0,03, n = 10.
2. 1,03¹⁰ ≈ 1,343916.
3. Minus 1: 0,343916.
4. Geteilt durch i: 0,343916 : 0,03 ≈ 11,463879.
5. Mal r: 1200 · 11,463879 ≈ 13 756,66 €.

Kontrolle Jahr für Jahr (gerundet):

| Jahr | Zinsen | Einzahlung | Kontostand am Ende |
|---|---|---|---|
| 1 | 0,00 € | 1200 € | 1200,00 € |
| 2 | 36,00 € | 1200 € | 2436,00 € |
| 3 | 73,08 € | 1200 € | 3709,08 € |
| 4 | 111,27 € | 1200 € | 5020,35 € |
| 5 | 150,61 € | 1200 € | 6370,96 € |
| 6 | 191,13 € | 1200 € | 7762,09 € |
| 7 | 232,86 € | 1200 € | 9194,95 € |
| 8 | 275,85 € | 1200 € | 10 670,80 € |
| 9 | 320,12 € | 1200 € | 12 190,93 € |
| 10 | 365,73 € | 1200 € | 13 756,66 € |

b)

1. Eingezahlt: 10 · 1200 = 12 000 €.
2. Zinsen = Endwert minus Eingezahltes: 13 756,66 − 12 000 = 1756,66 €.

### Übung 3

Für immer jedes Jahr denselben Betrag: ewige Rente, Barwert = r/i.

1. r = 600, i = 4 % = 0,04.
2. Barwert = 600/0,04 = 15 000 €.
3. Probe mit dem Bild „nur Zinsen abheben“: 4 % von 15 000 € sind 0,04 · 15 000 = 600 €. Die Stiftung zahlt die 600 € aus, das Kapital bleibt bei 15 000 €, für immer.
4. So steht es mit der Reihe: Barwert = Σₖ₌₁^∞ 600/1,04ᵏ. Das ist geometrisch mit q = 1/1,04 ≈ 0,9615 < 1. Erstes Glied 600/1,04. Summe = (600/1,04)/(1 − 1/1,04) = (600/1,04)/(0,04/1,04) = 600/0,04 = 15 000 €.

### Übung 4

a)

Option A ist Zinseszins (ein großer Schneeball):

1. 1,04¹⁰ ≈ 1,480244.
2. 5000 · 1,480244 ≈ 7401,22 €.

Option B ist ein Sparplan (zehn kleine Schneebälle):

1. (1,04¹⁰ − 1) = 0,480244.
2. Geteilt durch 0,04: 0,480244 : 0,04 ≈ 12,006107.
3. Mal 500: 500 · 12,006107 ≈ 6003,05 €.

b)

1. Zinsen bei A: 7401,22 − 5000 = 2401,22 €.
2. Zinsen bei B: 6003,05 − 5000 = 1003,05 €.
3. Grund: Bei A liegen die ganzen 5000 € alle 10 Jahre auf dem Konto. Bei B wird die erste Rate nur 9 Jahre verzinst, die zweite 8 Jahre, …, die letzte gar nicht. Im Schnitt liegt das Geld also viel kürzer auf dem Konto. Kürzer verzinst heißt weniger Zinsen.

### Übung 5

a) Jede Einzahlung einzeln verzinsen:

| Einzahlung | wie lange verzinst | Rechnung | Wert am Ende |
|---|---|---|---|
| 1. | 3 Jahre | 200 · 1,1³ = 200 · 1,331 | 266,20 € |
| 2. | 2 Jahre | 200 · 1,1² = 200 · 1,21 | 242,00 € |
| 3. | 1 Jahr | 200 · 1,1 | 220,00 € |
| 4. | 0 Jahre | 200 | 200,00 € |
| **Summe** | | 266,20 + 242 + 220 + 200 | **928,20 €** |

Gegenprobe Jahr für Jahr: Ende Jahr 1: 200. Jahr 2: 200 + 20 Zinsen + 200 = 420. Jahr 3: 420 + 42 + 200 = 662. Jahr 4: 662 + 66,20 + 200 = 928,20 €.

b)

1. Von der kleinsten Potenz aus geschrieben: E₄ = 200 · 1,1⁰ + 200 · 1,1¹ + 200 · 1,1² + 200 · 1,1³.
2. Mit Σ: E₄ = Σₖ₌₀³ 200 · 1,1ᵏ. Gelesen: „Summe von k = 0 bis 3 von 200 mal 1,1 hoch k“.
3. r = 200 steckt in jedem Summanden, also ausklammern: E₄ = 200 · Σₖ₌₀³ 1,1ᵏ.
4. Das ist eine endliche geometrische Reihe mit q = 1 + i = 1,1 und 4 Summanden.

c)

1. 1,1⁴ = 1,4641.
2. Minus 1: 0,4641.
3. Geteilt durch i: 0,4641 : 0,1 = 4,641.
4. Mal r: 200 · 4,641 = 928,20 €. Stimmt mit a) überein.
