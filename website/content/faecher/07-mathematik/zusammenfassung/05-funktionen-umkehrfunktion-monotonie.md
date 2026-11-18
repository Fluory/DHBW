Mit diesem Kapitel beginnt der zweite Strang der Analysis: Funktionen. Eine Folge aus Kapitel 2 ordnet jeder Platznummer eine Zahl zu. Eine Funktion macht dasselbe für jede erlaubte reelle Zahl. Du lernst hier, was rein darf und was herauskommt, wann man eine Funktion rückwärts laufen lassen kann und wie man Monotonie und Beschränktheit nachweist.

### Funktion, Definitionsmenge und Bild

Eine Funktion ist ein Automat: Jede erlaubte Zahl x geht hinein, genau eine Zahl f(x) kommt heraus. Die Folie schreibt f: D → Z, x ↦ f(x). Vorgelesen: „f geht von D nach Z, x wird auf f(x) abgebildet.“ Die **Definitionsmenge** D sagt, was hinein darf. Die **Zielmenge** Z wird festgelegt. Das **Bild** f(D) ist das, was wirklich herauskommt, und muss ausgerechnet werden. Für die größte Definitionsmenge merkst du dir zwei Verbote: Ein Nenner darf nicht 0 sein, und unter einer Wurzel darf nichts Negatives stehen. Intervalle schreibst du mit Klammern: [2, ∞) heißt „alle x ≥ 2“, die eckige Klammer schließt den Rand ein, die runde nicht.

### Injektiv, surjektiv, bijektiv und die Umkehrfunktion

Denk an einen Kinosaal: Die x sind Personen, die Ergebnisse sind Stühle. **Injektiv** heißt, kein Stuhl ist doppelt besetzt, aus x₁ ≠ x₂ folgt also f(x₁) ≠ f(x₂). **Surjektiv** heißt, kein Stuhl in Z bleibt leer. **Bijektiv** heißt beides. Die Antwort hängt von D und Z ab. So ist x² auf ℝ nicht injektiv, weil f(−2) = f(2) ist, auf [0, ∞) aber schon.

Nur eine bijektive Funktion hat eine **Umkehrfunktion** f⁻¹ (lies „f invers“). Sie lässt den Automaten rückwärts laufen, es gilt f⁻¹(f(x)) = x. Gemeint ist nicht der Kehrwert 1/f. Das Rezept lautet: y = f(x) schreiben, nach x auflösen, x und y tauschen, Probe machen. Das Bild von f wird dabei zur Definitionsmenge von f⁻¹.

Bei Parabeln kommt x zweimal vor, deshalb brauchst du vorher die **quadratische Ergänzung**: x² + bx + c = (x + b/2)² − (b/2)² + c. Du halbierst die Zahl vor x, quadrierst sie, ergänzt sie und ziehst sie gleich wieder ab. Danach kommt x nur noch einmal vor, und du liest den Scheitel ab.

### Monotonie und Beschränktheit

Bei Funktionen gibt es kein „nächstes x“ wie bei Folgen. Darum vergleichst du zwei beliebige Stellen x₁ < x₂. **Streng monoton wachsend** heißt: Aus x₁ < x₂ folgt f(x₁) < f(x₂). Zum Nachweis rechnest du f(x₂) − f(x₁), klammerst (x₂ − x₁) aus und prüfst das Vorzeichen jedes Faktors. Ein paar eingesetzte Zahlen sind nur eine Vermutung. Eine streng monotone Funktion ist immer injektiv. **Beschränkt** heißt wie bei Folgen |f(x)| ≤ C für alle x aus D. Das prüfst du an den Rändern von D, bei offenen Rändern mit Zahlen nahe am Rand.

### Ein Beispiel, das alles verbindet

Gegeben ist f: [−1, ∞) → [−4, ∞), x ↦ x² + 2x − 3. Quadratische Ergänzung: Die Zahl vor x ist 2, halbiert 1, quadriert 1. Also x² + 2x + 1 − 1 − 3 = (x + 1)² − 4. Weil (x + 1)² nie negativ ist, ist das Bild [−4, ∞), und f ist surjektiv. Monotonie: f(x₂) − f(x₁) = (x₂ − x₁)(x₁ + x₂ + 2). Beide x sind mindestens −1 und verschieden, also ist x₁ + x₂ + 2 > 0. Zusammen mit x₂ − x₁ > 0 ist f streng wachsend und damit injektiv, insgesamt bijektiv. Umkehrfunktion: y = (x + 1)² − 4, also y + 4 = (x + 1)². Weil x + 1 ≥ 0 ist, gilt nur die positive Wurzel: x = −1 + √(y + 4). Getauscht: f⁻¹(x) = −1 + √(x + 4) mit f⁻¹: [−4, ∞) → [−1, ∞). Probe: f(2) = 4 + 4 − 3 = 5 und f⁻¹(5) = −1 + √9 = 2 ✓.

### Das musst du können

- die größte Definitionsmenge und das Bild einer Funktion bestimmen
- injektiv, surjektiv und bijektiv unterscheiden und mit D und Z begründen
- eine Umkehrfunktion bestimmen, auch mit quadratischer Ergänzung, und die Probe machen
- Monotonie mit x₁ < x₂ und f(x₂) − f(x₁) nachweisen
- Beschränktheit an den Rändern der Definitionsmenge prüfen
