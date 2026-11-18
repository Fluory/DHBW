Bei Folgen lief n immer weiter. Bei Funktionen rückt x immer näher an eine Stelle a heran, und du fragst wieder: Wohin laufen die Werte? Das Kapitel verbindet damit die beiden Stränge der Analysis. Es nutzt die Funktionen aus Kapitel 5 und das Rezept „durch die höchste Potenz teilen“ aus Kapitel 2. Den Grenzwert brauchst du danach in Kapitel 7, um Stetigkeit zu prüfen.

### Was lim (x → a) bedeutet

lim (x → a) f(x) = g liest du: „Der Limes von f von x für x gegen a ist g.“ Gemeint ist: Rückt x immer näher an a heran, ohne a zu erreichen, kommen die Werte f(x) der Zahl g beliebig nahe. Was genau bei x = a passiert, ist egal. Gerade wenn f dort gar nicht definiert ist, wird der Grenzwert interessant. Bei (x² − 4)/(x − 2) steht für x = 2 unten 0, trotzdem laufen die Werte 3,99 und 4,01 auf 4 zu. Die Folie definiert das über Folgen: Für **jede** Folge xₙ → a muss f(xₙ) gegen denselben Wert laufen. Das ist die direkte Brücke zu Kapitel 2.

### Einseitige Grenzwerte und die drei Ergebnisse

x → a⁺ heißt „x kommt von rechts“, also mit Zahlen größer als a. x → a⁻ heißt „von links“. Der beidseitige Grenzwert existiert nur, wenn linker und rechter Grenzwert gleich sind. Bei 1/x an der Stelle 0 geht es von rechts gegen +∞, von links gegen −∞. Deshalb existiert lim (x → 0) 1/x nicht.

Insgesamt gibt es drei mögliche Antworten, genau wie bei Folgen. Kommt eine feste Zahl heraus, ist der Grenzwert **konvergent**. Laufen beide Seiten nach +∞ oder −∞, heißt er **uneigentlich**. Laufen die Seiten auseinander oder schwingen die Werte wie bei sin(1/x), **existiert** er **nicht**. Einen Standard-Grenzwert merkst du dir: lim (x → 0) sin(x)/x = 1.

### Die Taktik

Fast jede Aufgabe folgt demselben Plan. Zuerst setzt du a ein. Kommt eine normale Zahl heraus, bist du fertig. Kommt „Zahl/0“ heraus, prüfst du nur die Vorzeichen von Zähler und Nenner auf beiden Seiten. Kommt „0/0“ heraus, faktorisierst du, kürzt und setzt neu ein. Das Kürzen ist erlaubt, weil x nie genau a ist. Bei x → ∞ und „∞/∞“ teilst du jeden Summanden durch die höchste Potenz von x. Bei gleichem Grad ist der Grenzwert das Verhältnis der Vorzahlen. Zum Schluss machst du immer eine Probe mit Zahlen nahe dran.

### Ein Beispiel, das alles verbindet

Untersuche f(x) = (x² − 1)/(x² − 2x + 1) an der Stelle 1 und für x → ∞. Einsetzen von 1 ergibt oben 1 − 1 = 0 und unten 1 − 2 + 1 = 0, also 0/0. Du faktorisierst: Oben gilt mit der dritten binomischen Formel x² − 1 = (x − 1)(x + 1), unten mit der zweiten x² − 2x + 1 = (x − 1)². Nach dem Kürzen bleibt (x + 1)/(x − 1). Erneutes Einsetzen gibt 2/0, also „Zahl/0“. Jetzt prüfst du die Vorzeichen. Von rechts ist x − 1 winzig positiv, das Ergebnis geht gegen +∞. Von links ist x − 1 winzig negativ, das Ergebnis geht gegen −∞. Die Seiten passen nicht zusammen, lim (x → 1) f(x) existiert also nicht. Probe: f(0,99) = −199 und f(1,01) = 201 ✓. Für x → ∞ haben Zähler und Nenner den Grad 2 mit den Vorzahlen 1 und 1. Der Grenzwert ist 1/1 = 1. Probe: f(1000) ≈ 1,002 ✓.

### Das musst du können

- lim (x → a) f(x) in Worten erklären und wissen, dass der Wert bei a selbst egal ist
- einseitige Grenzwerte bestimmen und daraus entscheiden, ob der Grenzwert existiert
- konvergent, uneigentlich und „existiert nicht“ unterscheiden
- die Taktik anwenden: einsetzen, Vorzeichen prüfen, faktorisieren und kürzen, durch die höchste Potenz teilen
- jedes Ergebnis mit Zahlen nahe an der Stelle prüfen
