Dieses Kapitel ist kein neuer Vorlesungsstoff. Es sammelt den Schulstoff, den die Folien stillschweigend voraussetzen: Brüche, Potenzen, das Summenzeichen, Fakultät, Prozent, Betrag und das Rechnen mit unendlich. Das lohnt sich, weil fast jeder Fehler bei Folgen und Reihen in Wahrheit ein Fehler bei genau diesen Werkzeugen ist.

### Brüche und Potenzen

Ein Bruch wie 3/4 ist eine Geteilt-Aufgabe: Der **Zähler** oben zählt die Stücke, der **Nenner** unten sagt, in wie viele Teile das Ganze geschnitten ist. Addieren darfst du nur bei gleichem Nenner: 1/2 + 1/3 = 3/6 + 2/6 = 5/6. Teilen heißt mit dem Kehrwert malnehmen: 3/5 : 9/10 = 3/5 · 10/9 = 2/3. Auf den Folien tauchen oft Doppelbrüche auf. Dann rechnest du zuerst den Nenner aus, danach teilst du: (3/10)/(1 − 1/10) = 3/10 : 9/10 = 1/3.

Eine Potenz aⁿ (lies „a hoch n“) heißt: die **Basis** a wird n-mal mit sich malgenommen, n ist der **Exponent**. Bei gleicher Basis addierst du die Exponenten beim Malnehmen und ziehst sie beim Teilen ab. Bei gleichem Exponenten darfst du die Basen zusammenfassen: (−1)ᵏ · (⅕)ᵏ = (−⅕)ᵏ. Außerdem gilt a⁰ = 1 und a⁻ⁿ = 1/aⁿ. (−1)ᵏ ist ein Vorzeichen-Schalter: gerades k gibt +1, ungerades −1. Und eine Zahl zwischen −1 und 1 hoch k wird immer kleiner.

### Summenzeichen und Fakultät

Σ (griechisch „Sigma“) ist ein Befehl: Setze für die **Laufvariable** k jeden Wert vom Startwert unten bis zum Endwert oben ein und zähle alles zusammen. So ist Σₖ₌₁⁴ k² = 1 + 4 + 9 + 16 = 30. Der Startwert ändert das Ergebnis. Beim Start k = 0 ist das erste Glied q⁰ = 1, beim Start k = 1 ist es q. Konstante Faktoren darfst du vor das Σ ziehen.

Die **Fakultät** n! (lies „n Fakultät“) ist 1 · 2 · … · n, also zum Beispiel 4! = 24, und 0! = 1 ist so festgelegt. Der wichtigste Trick ist (k + 1)! = (k + 1) · k!. Damit kürzt du jeden Fakultätsbruch: k!/(k + 1)! = 1/(k + 1).

### Prozent, Betrag und unendlich

Prozent heißt „von hundert“, also 5 % = 0,05. Beim **Zinseszins** wird jedes Jahr mit dem Wachstumsfaktor 1 + i malgenommen: Kₙ = K₀ · (1 + i)ⁿ. Aus 100 € werden bei 5 % nach zwei Jahren 100 · 1,05² = 110,25 €. Diese Formel kommt in Kapitel 4 wieder.

Der **Betrag** |x| ist der Abstand einer Zahl von 0, ohne Vorzeichen. |a − b| ist der Abstand zwischen a und b. Das brauchst du für die Grenzwert-Definition in Kapitel 2, wo |aₙ − a| < ε steht: „Der Abstand ist kleiner als ε.“ Das Zeichen ∞ ist keine Zahl, sondern heißt „ohne Ende größer“. Eine feste Zahl durch etwas Riesiges geht gegen 0. Ausdrücke wie ∞ − ∞ oder ∞/∞ sind dagegen unbestimmt, dort musst du umformen. Dafür helfen die drei **binomischen Formeln**, vor allem rückwärts: x² − 9 = (x + 3)(x − 3). Aus einer Summe wird so ein Produkt, und Produkte kann man kürzen.

### Ein Beispiel, das alles verbindet

Berechne Σₖ₌₁³ (−1)ᵏ · (½)ᵏ. Zuerst fasst du mit der Regel „gleicher Exponent“ zusammen: (−1)ᵏ · (½)ᵏ = (−½)ᵏ. Dann liest du den Startwert ab: k beginnt bei 1, nicht bei 0. Du setzt ein: k = 1 gibt −1/2, k = 2 gibt +1/4, k = 3 gibt −1/8. Zum Addieren bringst du alles auf den Nenner 8: −4/8 + 2/8 − 1/8 = −3/8. Probe als Dezimalzahl: −0,5 + 0,25 − 0,125 = −0,375 = −3/8 ✓. Würde die Summe bei k = 0 starten, käme noch (−½)⁰ = 1 dazu, und das Ergebnis wäre 5/8.

### Das musst du können

- Brüche addieren, teilen, kürzen und Doppelbrüche ausrechnen
- die Potenzregeln anwenden, vor allem „gleiche Basis“ und „gleicher Exponent“
- eine Σ-Summe ausschreiben und dabei auf den Startwert achten
- Fakultätsbrüche mit (k + 1)! = (k + 1) · k! kürzen
- Zinseszins mit Kₙ = K₀ · (1 + i)ⁿ rechnen
- einschätzen, wohin ein Ausdruck für n → ∞ läuft, und unbestimmte Fälle erkennen
