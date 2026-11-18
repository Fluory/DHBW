Eine Folge ist eine nummerierte Liste von Zahlen, die einer Regel folgt. Das Kapitel stellt eine einzige große Frage: Wohin läuft die Liste, wenn man immer weiter geht? Dafür brauchst du Potenzen, den Betrag und das Rechnen mit unendlich aus Kapitel 1. Folgen sind die Grundlage für Reihen (Kapitel 3) und für Grenzwerte von Funktionen (Kapitel 6).

### Folgen, Bildungsgesetze und zwei wichtige Typen

Jede Zahl der Folge hat eine Platznummer, den **Index** n. Die Zahl auf Platz n heißt **Glied** und wird aₙ geschrieben (lies „a n“). aₙ₊₁ ist das nächste Glied. Die Regel heißt **Bildungsgesetz**. Explizit setzt du die Platznummer direkt ein, etwa aₙ = n². Rekursiv gibt es einen Startwert und eine Regel, wie das neue Glied aus dem alten entsteht, etwa a₁ = 1, aₙ = n · aₙ₋₁.

Zwei Typen kommen immer wieder. Bei einer **arithmetischen** Folge kommt jedes Mal dieselbe Zahl d dazu: aₙ = a₁ + (n − 1) · d. Bei einer **geometrischen** Folge wird jedes Mal mit derselben Zahl q malgenommen: aₙ = a₁ · qⁿ⁻¹. Du erkennst sie an konstanten Differenzen oder Quotienten. Die Summe der ersten n Glieder einer geometrischen Folge ist a₁ · (qⁿ − 1)/(q − 1). Sie wird in Kapitel 3 und 4 zentral.

### Monotonie und Beschränktheit

Eine Folge ist **monoton wachsend**, wenn aₙ ≤ aₙ₊₁ für alle n gilt. Das Zeichen ≤ heißt „kleiner oder gleich“. Bei „streng“ muss das nächste Glied echt größer sein. Nachweisen kannst du das mit dem Differenz-Test: Rechne aₙ₊₁ − aₙ aus. Ist das Ergebnis für alle n positiv, wächst die Folge, ist es immer negativ, fällt sie. Drei ausgerechnete Glieder sind kein Beweis.

Eine Folge ist **beschränkt**, wenn es eine Zahl C gibt mit |aₙ| ≤ C für alle n. Sie hat also eine Decke und einen Boden. Bei einer fallenden Folge ist das erste Glied die Decke, bei einer wachsenden der Boden.

### Grenzwert und wie man ihn berechnet

Eine Folge **konvergiert** gegen a, wenn ihre Glieder a beliebig nahe kommen und dort bleiben. Die Folie schreibt das als ∀ε > 0 ∃n₀ ∈ ℕ: |aₙ − a| < ε für alle n ≥ n₀. Vorgelesen: „Für jede Genauigkeit ε gibt es einen Platz n₀, ab dem alle Glieder näher als ε an a liegen.“ Man schreibt lim (n → ∞) aₙ = a. Ohne Grenzwert heißt sie divergent: **bestimmt** bei +∞ oder −∞, **unbestimmt**, wenn sie springt wie (−1)ⁿ. Drei Sätze verbinden die Begriffe: Jede konvergente Folge ist beschränkt. Eine Folge hat höchstens einen Grenzwert. Und beschränkt **und** monoton zusammen ergibt konvergent.

Grenzwerte darfst du addieren, malnehmen und teilen, solange der Nenner nicht gegen 0 geht. Bei Brüchen aus Potenzen von n teilst du jeden Summanden oben und unten durch die höchste Potenz des Nenners. Daraus folgt die Grad-Regel: gleicher Grad gibt den Quotienten der Vorzahlen, Nenner höher gibt 0, Zähler höher gibt ±∞.

### Ein Beispiel, das alles verbindet

Untersuche aₙ = (4n + 3)/(2n). Monotonie: aₙ₊₁ − aₙ = (4n + 7)/(2n + 2) − (4n + 3)/(2n). Auf einen Nenner gebracht und gekürzt ergibt das −3/(2n(n + 1)). Das ist immer negativ, die Folge fällt streng. Die Decke ist also a₁ = 3,5. Weil aₙ = 2 + 3/(2n) ist und 3/(2n) positiv bleibt, ist 2 ein Boden. Beschränkt und monoton heißt: Die Folge konvergiert. Den Grenzwert findest du durch Teilen durch n: (4 + 3/n)/2 → 4/2 = 2. Für ε = 0,01 verlangst du 3/(2n) < 0,01, also n > 150. Ab n₀ = 151 liegen alle Glieder näher als 0,01 an 2. Probe: a₁₀₀₀ = 2,0015 ✓.

### Das musst du können

- aus einem Bildungsgesetz Glieder berechnen und umgekehrt ein Bildungsgesetz finden
- arithmetische und geometrische Folgen erkennen und ihre Formeln anwenden
- Monotonie mit aₙ₊₁ − aₙ nachweisen und Beschränktheit begründen
- die ε-Definition in eigenen Worten erklären und ein n₀ ausrechnen
- konvergent, bestimmt divergent und unbestimmt divergent unterscheiden
- Grenzwerte mit „durch die höchste Potenz teilen“ bestimmen
