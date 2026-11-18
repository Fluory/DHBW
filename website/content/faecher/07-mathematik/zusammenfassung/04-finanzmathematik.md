Dieses Kapitel zeigt, wofür du Folgen und Reihen im Alltag brauchst. Die Folie sagt: „Die geometrische Reihe ist die Grundlage der Finanzmathematik.“ Dahinter steckt nur ein Sparkonto. Zinseszins ist eine geometrische Folge aus Kapitel 2, ein Sparplan ist eine endliche geometrische Reihe aus Kapitel 3, und die ewige Rente ist eine unendliche geometrische Reihe. Zwei Wörter brauchst du überall: Der **Zinssatz** i ist der Prozentsatz als Dezimalzahl, also 5 % = 0,05. Der **Zinsfaktor** q = 1 + i ist die Zahl, mit der der Kontostand pro Periode malgenommen wird.

### Zinseszins: eine geometrische Folge

Legst du einmal einen Betrag r an, wird der Kontostand jedes Jahr mit 1 + i malgenommen. Nach n Jahren gilt Kₙ = r · (1 + i)ⁿ. Die Kontostände r, (1 + i) · r, (1 + i)² · r, … bilden eine geometrische Folge mit q = 1 + i. Die Zinsen wachsen von Jahr zu Jahr, weil es auch Zinsen auf die Zinsen gibt. Aus 1000 € werden bei 5 % nach 10 Jahren 1000 · 1,05¹⁰ ≈ 1628,89 €, ohne Zinseszins wären es nur 1500 €.

### Sparplan: eine endliche geometrische Reihe

Beim Sparplan zahlst du jede Periode am Ende denselben Betrag r ein. Jede Einzahlung wird unterschiedlich lange verzinst: die letzte gar nicht, die erste n − 1 Perioden. Zusammen ergibt das Eₙ = r + r(1 + i) + … + r(1 + i)ⁿ⁻¹ = r · Σₖ₌₀ⁿ⁻¹ (1 + i)ᵏ. Mit der Summenformel der endlichen geometrischen Reihe wird daraus der **Endwert**

Eₙ = r · ((1 + i)ⁿ − 1)/i.

Das i im Nenner entsteht, weil q − 1 = (1 + i) − 1 = i ist. Zinssatz, Rate und Laufzeit müssen zur selben Periode passen. Das Folienbeispiel mit 100 € pro Monat, 0,25 % pro Monat und 60 Monaten ergibt rund 6464,67 €. Stellst du die Formel nach r um, bekommst du die nötige Rate für ein Sparziel: r = Eₙ · i/((1 + i)ⁿ − 1).

Die unendliche Formel „erstes Glied/(1 − q)“ ist hier verboten. Beim Sparplan ist q = 1 + i größer als 1, die Summanden werden also größer, und die Reihe würde divergieren.

### Ewige Rente: eine unendliche geometrische Reihe

Bei der ewigen Rente fragst du umgekehrt: Wie viel muss ich heute anlegen, um für immer jedes Jahr r zu bekommen? Die Idee ist einfach: Du hebst nur die Zinsen ab, das Kapital bleibt gleich. Darum gilt **Barwert = r/i**. Die Folie rechnet über **Abzinsen**: Eine Zahlung in k Jahren ist heute r/(1 + i)ᵏ wert. Der Barwert ist Σₖ₌₁^∞ r · (1/(1 + i))ᵏ. Hier ist q = 1/(1 + i) kleiner als 1, deshalb darfst du die unendliche Formel benutzen. Sie ergibt nach Kürzen genau r/i.

### Ein Beispiel, das alles verbindet

Du willst in 10 Jahren 10 000 € haben, der Zins ist 5 % pro Jahr, Einzahlung am Jahresende. Danach soll das Geld als ewige Rente laufen. Zuerst die Rate: 1,05¹⁰ ≈ 1,628895, minus 1 ergibt 0,628895. Dann ist r = 10 000 · 0,05/0,628895 = 500/0,628895 ≈ 795,05 €. Probe mit der Endwertformel: 795,05 · 0,628895/0,05 ≈ 10 000 € ✓. Eingezahlt hast du 10 · 795,05 = 7950,50 €, der Rest sind Zinsen. Nun die ewige Rente aus 10 000 €: Aus Barwert = r/i folgt r = 10 000 · 0,05 = 500 € pro Jahr. Probe: 500/0,05 = 10 000 ✓. Für den Sparplan galt q = 1,05 > 1, also die endliche Formel. Für die Rente gilt q = 1/1,05 < 1, also die unendliche.

### Das musst du können

- Zinseszins mit Kₙ = r · (1 + i)ⁿ rechnen und als geometrische Folge erkennen
- die Sparplan-Formel aus der geometrischen Reihe herleiten und anwenden
- eine Rate für ein Sparziel berechnen und mit der Endwertformel prüfen
- den Barwert einer ewigen Rente mit r/i berechnen
- begründen, warum beim Sparplan nur die endliche und bei der ewigen Rente die unendliche Formel gilt
