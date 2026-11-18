Dieses Kapitel schließt den Funktionen-Strang ab, der in Kapitel 5 begann. Anschaulich heißt **stetig**: Du kannst den Graphen zeichnen, ohne den Stift abzusetzen, also ohne Loch und ohne Sprung. Um das zu prüfen, brauchst du die Grenzwerte aus Kapitel 6. Dazu kommen zwei Werkzeuge: Funktionen hintereinander ausführen und sicher mit ln und e rechnen.

### Verkettung: zwei Automaten hintereinander

Bei der Verkettung steckst du das Ergebnis der einen Funktion direkt in die nächste. Man schreibt (g ∘ f)(x) = g(f(x)) und liest „g nach f“. Obwohl g vorne steht, läuft f zuerst. Die Reihenfolge zählt: Mit f(x) = x + 1 und g(x) = x² ist g(f(3)) = 16, aber f(g(3)) = 10. Die Folie verlangt außerdem f(D_f) ⊆ D_g. Das Zeichen ⊆ heißt „liegt ganz in“. Gemeint ist: Alles, was f ausgibt, muss g annehmen können. Das prüfst du, bevor du einsetzt.

### Stetigkeit und der Parameter c

f ist stetig an der Stelle x̂ (lies „x Dach“), wenn lim (x → x̂) f(x) = f(x̂) gilt. Darin stecken drei Prüfungen. f(x̂) muss existieren, der Grenzwert muss existieren, links also gleich rechts sein, und beide Werte müssen übereinstimmen. Polynome, eˣ, ln, sin und cos sind auf ihrem Definitionsbereich stetig, und Summen, Produkte, Quotienten und Verkettungen stetiger Funktionen ebenso. Prüfen musst du deshalb fast nur Nennernullstellen und die Nahtstellen stückweise definierter Funktionen.

Eine typische Aufgabe lautet: „Bestimme c so, dass f stetig ist.“ Dann rechnest du den Grenzwert an der kritischen Stelle aus, meistens mit Faktorisieren und Kürzen. Dieser Grenzwert ist c. Ist f nicht stetig, unterscheidet die Folie drei Arten. Bei einer **Sprungstelle** sind linker und rechter Grenzwert verschieden. Bei einer **Polstelle** laufen die Werte nach ±∞, etwa 1/(x − 2) bei 2. Bei einer **Oszillationsstelle** schwingen die Werte immer schneller, wie sin(1/x) bei 0.

### ln und e

e ist die Eulersche Zahl, ungefähr 2,718. Der natürliche Logarithmus ln beantwortet die Frage: „e hoch wie viel ergibt a?“ ln a = k bedeutet also dasselbe wie eᵏ = a, und a muss größer als 0 sein. Daraus folgen ln 1 = 0 und ln e = 1. Alle Regeln kommen aus den Potenzregeln: Mal wird plus, ln(a · b) = ln a + ln b. Geteilt wird minus, ln(a/b) = ln a − ln b. Die Hochzahl kommt nach vorne, ln(aʳ) = r · ln a. Außerdem heben sich e und ln auf. Für Summen gibt es dagegen keine Regel: ln(a + b) ist nicht ln a + ln b. Eine Gleichung mit e löst du, indem du auf beiden Seiten ln nimmst.

### Ein Beispiel, das alles verbindet

Gegeben ist h(x) = ln(x² − 9) − ln(x − 3) für x > 3 und h(3) = c. Bestimme c so, dass h auf [3, ∞) stetig ist. Zuerst wendest du „geteilt wird minus“ rückwärts an: h(x) = ln((x² − 9)/(x − 3)). Mit der dritten binomischen Formel ist x² − 9 = (x − 3)(x + 3). Du kürzt (x − 3), das ist erlaubt, weil x > 3 ist. Es bleibt h(x) = ln(x + 3). Das ist eine Verkettung: Erst läuft u(x) = x + 3, dann ln, also h = ln ∘ u. Beide Funktionen sind stetig, darum ist auch die Verkettung stetig. Den Grenzwert bekommst du durch Einsetzen: lim (x → 3⁺) ln(x + 3) = ln 6. Also muss c = ln 6 ≈ 1,792 sein. Probe: h(3,001) ≈ 1,7919 ✓. Jedes andere c ergäbe eine Sprungstelle bei 3.

### Das musst du können

- Verkettungen g ∘ f bilden, die Reihenfolge beachten und f(D_f) ⊆ D_g prüfen
- Stetigkeit an einer Stelle mit den drei Prüfungen nachweisen oder widerlegen
- einen Parameter c über den Grenzwert bestimmen
- Sprung-, Pol- und Oszillationsstelle unterscheiden
- mit den ln-Regeln ohne Taschenrechner vereinfachen und Gleichungen mit e lösen
