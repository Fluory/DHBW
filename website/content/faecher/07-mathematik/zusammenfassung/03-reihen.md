Eine Reihe entsteht, wenn du die Glieder einer Folge unendlich lange aufaddierst: a₁ + a₂ + a₃ + … Die Frage ist, ob dabei eine endliche Zahl herauskommt. Das Kapitel baut direkt auf Kapitel 2 auf, denn eine Reihe ist am Ende wieder eine Folge, nämlich die Folge der Zwischensummen. Die geometrische Reihe aus diesem Kapitel ist außerdem die Grundlage der Finanzmathematik in Kapitel 4.

### Partialsummen: eine Reihe ist eine Folge

Die **Partialsumme** sₙ ist der Zwischenstand nach n Gliedern: sₙ = Σₖ₌₁ⁿ aₖ. Stell dir ein Konto vor. Die Glieder aₖ sind die Einzahlungen, sₙ ist der Kontostand. Die Reihe Σₖ₌₁^∞ aₖ (lies „Summe von k gleich 1 bis unendlich über a k“) ist der Grenzwert dieser Kontostände. Hat die Folge sₙ einen endlichen Grenzwert s, heißt die Reihe **konvergent** mit Wert s, sonst **divergent**. Wichtig sind also zwei verschiedene Folgen: die Glieder und die Zwischensummen. Dass die Glieder gegen 0 gehen, heißt noch lange nicht, dass die Summe 0 ist.

Bei den meisten Reihen kann man den Wert gar nicht ausrechnen. Ein **Konvergenzkriterium** beantwortet deshalb nur die Ja/Nein-Frage, ob es einen endlichen Wert gibt. Rechenregeln wie „Faktor vor die Summe ziehen“ gelten nur für konvergente Reihen.

### Die geometrische Reihe und Periodenzahlen

Bei der geometrischen Reihe ist jedes Glied das q-fache des vorigen. Sie konvergiert genau dann, wenn |q| < 1 ist, also −1 < q < 1. Dann gilt: **Wert = erstes Glied/(1 − q)**. Das erste Glied hängt vom Startindex ab. Bei k = 0 ist es q⁰ = 1, bei k = 1 ist es q. Für endlich viele Glieder gibt es die Formel Σₖ₌₀ⁿ v₀ · qᵏ = v₀ · (1 − qⁿ⁺¹)/(1 − q), die du in Kapitel 4 brauchst.

Eine Anwendung sind Periodenzahlen. 0,777… ist 7/10 + 7/100 + … mit erstem Glied 7/10 und q = 1/10. Der Wert ist (7/10)/(9/10) = 7/9. Bei einer Periode aus zwei Ziffern ist q = 1/100. Steht vor der Periode noch etwas, trennst du es zuerst ab.

### Die anderen Kriterien

Das **Divergenzkriterium** sagt: Gehen die Glieder nicht gegen 0, divergiert die Reihe. Die Umkehrung gilt nicht. Das zeigt die **harmonische Reihe** 1 + ½ + ⅓ + …: Ihre Glieder gehen gegen 0, die Summe wächst trotzdem ohne Ende. Allgemein ist Σ 1/kᵖ genau dann konvergent, wenn p > 1 ist. Daraus folgt die Potenzabstand-Regel für Brüche aus Potenzen von k: Ist Grad des Nenners minus Grad des Zählers größer als 1, konvergiert die Reihe.

Kommen k! oder xᵏ vor, nimmst du das **Quotientenkriterium**. Du berechnest L = lim |aₖ₊₁/aₖ|, den Schrumpf-Faktor auf lange Sicht. L < 1 heißt konvergent, L > 1 divergent, bei L = 1 gibt es keine Aussage. Eine **Teleskopsumme** erkennst du an der Form „etwas mit k minus dasselbe mit k + 1“. Dann heben sich fast alle Teile weg, und Σₖ₌₁ⁿ (bₖ − bₖ₊₁) = b₁ − bₙ₊₁. Die Reihenfolge der Prüfung ist: Glieder gegen 0? Geometrisch? Potenzbruch? k! oder xᵏ? Teleskop?

### Ein Beispiel, das alles verbindet

Untersuche Σₖ₌₁^∞ 2ᵏ/3ᵏ. Zuerst fasst du mit der Potenzregel zusammen: 2ᵏ/3ᵏ = (⅔)ᵏ. Die Glieder gehen gegen 0, das Divergenzkriterium greift also nicht. Weil k im Exponenten steht, ist die Reihe geometrisch mit q = ⅔. Es gilt |q| < 1, sie konvergiert. Der Start ist k = 1, das erste Glied also ⅔. Der Wert ist (⅔)/(1 − ⅔) = (⅔)/(⅓) = 2. Probe mit den Partialsummen: s₁ ≈ 0,667, s₂ ≈ 1,111, s₃ ≈ 1,407, s₄ ≈ 1,605. Sie nähern sich 2 ✓. Mit Start k = 0 wäre der Wert 3.

### Das musst du können

- Partialsummen ausrechnen und Glieder von Zwischensummen unterscheiden
- eine geometrische Reihe erkennen, |q| < 1 prüfen und den Wert mit dem richtigen ersten Glied berechnen
- eine Periodenzahl als Bruch schreiben
- das passende Kriterium wählen und begründen: Divergenzkriterium, geometrisch, Σ 1/kᵖ, Quotientenkriterium
- eine Teleskopsumme ausschreiben, wegstreichen und ihren Grenzwert bestimmen
