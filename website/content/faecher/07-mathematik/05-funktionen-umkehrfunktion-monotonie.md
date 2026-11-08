---
title: "Funktionen, Umkehrfunktion und Monotonie"
order: 5
summary: "Definitionsmenge, Zielmenge und Bild, injektiv, surjektiv und bijektiv, die Umkehrfunktion mit quadratischer Ergänzung sowie Monotonie und Beschränktheit von Funktionen."
klausur: "relevant"
---

Eine Funktion ist ein Automat: Oben wirfst du eine Zahl x hinein, unten kommt genau eine Zahl f(x) heraus. In diesem Kapitel lernst du, wann man den Automaten rückwärts laufen lassen kann (Umkehrfunktion), wie man prüft, ob er immer größere oder immer kleinere Zahlen ausgibt (Monotonie), und ob seine Ergebnisse in einem Bereich bleiben (Beschränktheit).

Ein Alltagsbeispiel aus der Ökonomie (Folie): Die verkaufte Menge bestimmt den Umsatz. Umsatz = 2 € · Menge ist eine Funktion. Rückwärts gefragt: Wie viel muss ich verkaufen, um 500 € Umsatz zu machen? Antwort: 500 : 2 = 250 Stück. Das ist die Umkehrfunktion. Dieses Kapitel gehört zum Nachmittag des 04.11. (Folien „Analysis – Reihen + Funktionen“).

## Was ist eine Funktion?

**In einem Satz:** Eine Funktion ist eine feste Regel, die aus jeder erlaubten Zahl genau ein Ergebnis macht.

**Stell dir vor:** ein Getränkeautomat. Du drückst eine Taste und bekommst genau ein Getränk. Nie zwei auf einmal, nie gar keins. Dieselbe Taste gibt jedes Mal dasselbe Getränk. Eine Funktion ist so ein Automat für Zahlen: Zahl rein, genau eine Zahl raus.

**Mit Zahlen:** Der Automat f(x) = x² + 1 rechnet „Zahl mal sich selbst, dann plus 1“.

| x (rein) | −2 | −1 | 0 | 1 | 2 | 3 |
|---|---|---|---|---|---|---|
| f(x) (raus) | 5 | 2 | 1 | 2 | 5 | 10 |

Jedes x bekommt genau ein Ergebnis. Dass −1 und 1 dasselbe Ergebnis 2 haben, ist erlaubt. Verboten wäre nur, dass ein x zwei Ergebnisse bekommt.

**Die Formel:** Zu jedem Automaten gehören drei Mengen. Eine **Menge** ist einfach eine Sammlung von Zahlen.

| Begriff | Frage dazu | bei f(x) = x² + 1 |
|---|---|---|
| Definitionsmenge D | Was darf rein? | ℝ (alle reellen Zahlen) |
| Zielmenge Z (Folie: „Wertemenge“) | Wo dürfen Ergebnisse liegen? Wird festgelegt. | ℝ |
| Bild f(D) | Was kommt wirklich raus? Muss man ausrechnen. | [1, ∞), weil x² nie negativ ist |

Das Bild ist also ein Teil der Zielmenge. Vergleich: Die Zielmenge ist „irgendein Getränk“, das Bild sind die Getränke, die wirklich im Automaten sind.

Kurzschrift für Bereiche (**Intervalle**):

- [2, ∞) heißt „alle x mit x ≥ 2“. Die eckige Klammer heißt: Der Rand 2 gehört dazu.
- (−1, 1) heißt „alle x mit −1 < x < 1“. Die runde Klammer heißt: Der Rand gehört nicht dazu.
- Bei ∞ steht immer eine runde Klammer, denn ∞ ist keine Zahl, die man erreicht.
- ℝ \ {0} heißt „alle reellen Zahlen außer 0“.

**So steht es auf der Folie:** f: D → Z, x ↦ f(x). Beispiel: f: ℝ → ℝ, x ↦ x² + 1.

Auf Deutsch heißt das: „f geht von D nach Z. Die Zahl x wird auf f(x) abgebildet.“ Der einfache Pfeil → verbindet die Mengen, der Pfeil mit Strich ↦ sagt, was mit einer einzelnen Zahl passiert. x ∈ D liest du „x liegt in D“.

**Der Graph:** Das ist die Menge aller Punkte (x | f(x)), also die Kurve, die du zeichnest. Senkrechter Test: Bei einer Funktion trifft jede senkrechte Linie den Graphen höchstens einmal, weil jedes x nur ein Ergebnis hat. Ein Kreis ist deshalb kein Funktionsgraph: Eine senkrechte Linie durch die Mitte trifft ihn oben und unten.

**Größte Definitionsmenge finden.** Oft ist nur die Formel gegeben, und du sollst herausfinden, was rein darf. Zwei Verbote merken:

1. Nicht durch 0 teilen: Nenner ≠ 0.
2. Keine Wurzel aus negativen Zahlen: unter der Wurzel ≥ 0.

**So rechnest du:** größte Definitionsmenge und Bild von f(x) = 1/(x − 3).

1. Gibt es einen Nenner? Ja, x − 3.
2. Nenner = 0 setzen: x − 3 = 0 ⇒ x = 3. Diese Zahl ist verboten.
3. D = ℝ \ {3}.
4. Bild: Ein Bruch 1/(etwas) ist nie 0. Jede andere Zahl kommt vor (zum Beispiel f(4) = 1, f(2) = −1, f(13) = 0,1). Bild = ℝ \ {0}.

**Funktionen kombinieren:** f + g, f − g und f · g darf man dort bilden, wo beide definiert sind. Bei f/g muss zusätzlich g(x) ≠ 0 sein. Beispiel: f(x) = √x und g(x) = x − 1. √x braucht x ≥ 0, und g(x) = 0 bei x = 1. Also ist f/g definiert auf [0, ∞) ohne die 1.

> [!IMPORTANT]
> **Das Wichtigste**
> Funktion = Automat: jede erlaubte Zahl rein, genau eine raus. D = was darf rein, Z = wo dürfen Ergebnisse liegen, Bild = was kommt wirklich raus. Größter Definitionsbereich: Nenner ≠ 0, unter der Wurzel ≥ 0.

> [!WARNING]
> **Typischer Fehler**
> Zielmenge und Bild gleichsetzen. Bei f: ℝ → ℝ, x ↦ x² + 1 ist die Zielmenge ℝ, das Bild aber nur [1, ∞). Und: Eine Vorschrift, die einem x zwei Ergebnisse gibt („x ↦ ±√x“) oder einem erlaubten x gar keins, ist keine Funktion.

## injektiv, surjektiv, bijektiv

**In einem Satz:** Diese drei Wörter beschreiben, ob jedes Ergebnis höchstens einmal, mindestens einmal oder genau einmal herauskommt.

**Stell dir vor:** einen Kinosaal (Bild aus der Mitschrift vom 04.11.). Die Personen sind die x, die Stühle sind die y. Dass f eine Funktion ist, heißt: Jede Person sitzt auf genau einem Stuhl. Jetzt schaust du auf die Stühle:

| Begriff | im Kino | Frage an die Stühle |
|---|---|---|
| injektiv | Kein Stuhl ist doppelt besetzt. | Sitzt auf jedem Stuhl höchstens eine Person? |
| surjektiv | Kein Stuhl bleibt leer. | Sitzt auf jedem Stuhl mindestens eine Person? |
| bijektiv | Jeder Stuhl ist mit genau einer Person besetzt. | beides |

Nur im bijektiven Fall kannst du jeden Stuhl fragen: „Wer sitzt auf dir?“ und bekommst immer genau eine Antwort. Genau das braucht die Umkehrfunktion.

**Mit Zahlen:** f(x) = x² mit den Personen x = −3, −2, −1, 0, 1, 2, 3.

| x (Person) | −3 | −2 | −1 | 0 | 1 | 2 | 3 |
|---|---|---|---|---|---|---|---|
| x² (Stuhl) | 9 | 4 | 1 | 0 | 1 | 4 | 9 |

- Auf Stuhl 4 sitzen zwei Personen: −2 und 2. Auch Stuhl 1 und Stuhl 9 sind doppelt besetzt. Also ist x² auf ℝ **nicht injektiv**.
- Stuhl −4 bleibt immer leer, denn x² ist nie negativ. Auch Stuhl 2 und Stuhl 3 bleiben bei diesen Personen leer (√2 und √3 kommen hier nicht vor). Wenn die Zielmenge ℝ ist, ist x² **nicht surjektiv**.

Jetzt schickst du die negativen Personen weg (D = [0, ∞)):

| x | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| x² | 0 | 1 | 4 | 9 |

Jetzt ist kein Stuhl mehr doppelt besetzt: injektiv. Und wenn du die Stühle mit negativen Nummern abbaust (Z = [0, ∞)), bleibt auch kein Stuhl leer: surjektiv.

Darum hängt die Antwort von D und Z ab:

| f(x) = x² mit | injektiv? | surjektiv? |
|---|---|---|
| ℝ → ℝ | nein: f(−2) = f(2) = 4 | nein: −4 kommt nie heraus |
| ℝ → [0, ∞) | nein | ja |
| [0, ∞) → ℝ | ja | nein |
| [0, ∞) → [0, ∞) | ja | ja, also bijektiv |

**Die Formel:**

- injektiv: Aus x₁ ≠ x₂ folgt f(x₁) ≠ f(x₂). In Worten: Zwei verschiedene Personen sitzen nie auf demselben Stuhl.
- surjektiv: Zu jedem y aus Z gibt es ein x aus D mit f(x) = y. In Worten: Jeder Stuhl wird besetzt.
- bijektiv: injektiv und surjektiv.

**So steht es auf der Folie:** x₁ ≠ x₂ ⇒ f(x₁) ≠ f(x₂).

Auf Deutsch heißt das: ≠ liest du „ungleich“, ⇒ liest du „daraus folgt“. Also: „Wenn die Eingaben verschieden sind, dann sind auch die Ergebnisse verschieden.“ Zeichnerisch: Jede waagrechte Linie trifft den Graphen höchstens einmal.

**So rechnest du:** Ist f(x) = 2x + 1 von ℝ nach ℝ bijektiv?

1. Injektiv? Angenommen f(x₁) = f(x₂). Dann 2x₁ + 1 = 2x₂ + 1. Minus 1: 2x₁ = 2x₂. Durch 2: x₁ = x₂. Gleiche Ergebnisse gibt es also nur bei gleichen Eingaben. Injektiv.
2. Surjektiv? Nimm irgendein y, zum Beispiel y = 8. Gesucht x mit 2x + 1 = 8. Minus 1: 2x = 7. Durch 2: x = 3,5. Das geht für jedes y: x = (y − 1)/2. Surjektiv.
3. Beides ja ⇒ bijektiv.

> [!IMPORTANT]
> **Das Wichtigste**
> Nur eine bijektive Funktion hat eine Umkehrfunktion auf der ganzen Zielmenge. Nicht injektiv → D verkleinern (Personen wegschicken). Nicht surjektiv → Z auf das Bild verkleinern (leere Stühle abbauen).

> [!WARNING]
> **Typischer Fehler**
> Die beiden Linientests verwechseln. Der senkrechte Test prüft „Funktion oder nicht“ (jede Person auf genau einem Stuhl). Der waagrechte Test prüft „injektiv oder nicht“ (kein Stuhl doppelt).

## Die Umkehrfunktion

**In einem Satz:** Die Umkehrfunktion beantwortet die Frage „Welche Zahl muss ich hineinwerfen, damit dieses Ergebnis herauskommt?“

**Stell dir vor:** Du lässt den Automaten rückwärts laufen. Der Automat für Grad Celsius in Grad Fahrenheit macht zwei Schritte: erst „mal 1,8“, dann „plus 32“. Rückwärts musst du die Schritte rückgängig machen, und zwar in umgekehrter Reihenfolge: erst „minus 32“, dann „geteilt durch 1,8“. Wie beim Anziehen: erst Socken, dann Schuhe. Beim Ausziehen erst die Schuhe, dann die Socken.

**Mit Zahlen:**

| Celsius C | 0 | 10 | 20 | 100 |
|---|---|---|---|---|
| Fahrenheit F = 1,8 · C + 32 | 32 | 50 | 68 | 212 |

Rückwärts: Es sind 68 °F. Wie viel Grad Celsius? 68 − 32 = 36, dann 36 : 1,8 = 20 °C. Stimmt mit der Tabelle.

Noch einfacher mit f(x) = 2x + 1 (erst mal 2, dann plus 1):

| x | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| f(x) = 2x + 1 | 1 | 3 | 5 | 7 |

Rückwärts (erst minus 1, dann durch 2): Aus 7 wird 7 − 1 = 6, dann 6 : 2 = 3. Also f⁻¹(7) = 3.

| x | 1 | 3 | 5 | 7 |
|---|---|---|---|---|
| f⁻¹(x) = (x − 1)/2 | 0 | 1 | 2 | 3 |

Die zweite Tabelle ist die erste Tabelle mit vertauschten Zeilen.

**Die Formel:** f⁻¹(f(x)) = x.

- f⁻¹ liest du „f hoch minus 1“ oder „f invers“. Gemeint ist der rückwärts laufende Automat.
- f⁻¹(f(x)) = x heißt: Erst vorwärts, dann rückwärts, und du bist wieder bei der Zahl, mit der du angefangen hast.
- Der Graph von f⁻¹ ist der Graph von f, gespiegelt an der Geraden y = x. Grund: Aus jedem Punkt (1 | 3) von f wird der Punkt (3 | 1) von f⁻¹, x und y tauschen.
- Jede **streng monotone** Funktion (siehe unten: immer steigend oder immer fallend) ist injektiv und hat deshalb eine Umkehrfunktion.

**So rechnest du (einfacher Fall):** Umkehrfunktion von f(x) = 2x + 1.

1. Schreibe y statt f(x): y = 2x + 1.
2. Löse nach x auf. Minus 1: y − 1 = 2x.
3. Durch 2: x = (y − 1)/2.
4. Buchstaben tauschen, weil man die Eingabe wieder x nennt: f⁻¹(x) = (x − 1)/2.
5. Probe: f(3) = 7 und f⁻¹(7) = (7 − 1)/2 = 3.

## Quadratische Ergänzung

Bei Parabeln wie x² − 4x + 1 kannst du nicht direkt nach x auflösen, weil x zweimal vorkommt (in x² und in −4x). Die quadratische Ergänzung schreibt den Ausdruck so um, dass x nur noch einmal vorkommt.

**In einem Satz:** Du ergänzt eine Zahl, damit eine binomische Formel entsteht, und ziehst dieselbe Zahl gleich wieder ab.

**Stell dir vor:** Ein Puzzle, bei dem ein Teil fehlt. Du legst das fehlende Teil hinein, damit das Bild vollständig ist (die binomische Formel). Damit sich am Wert nichts ändert, schreibst du daneben „minus dieses Teil“. Plus 4 und minus 4 ist zusammen 0, also hast du nichts verändert.

**Mit Zahlen:** Die binomische Formel (x − 2)² = x² − 4x + 4. Unser Ausdruck x² − 4x + 1 sieht fast so aus, nur steht hinten 1 statt 4. Es fehlen 3. Also ist x² − 4x + 1 = (x − 2)² − 3.

| x | 0 | 1 | 5 |
|---|---|---|---|
| x² − 4x + 1 | 0 − 0 + 1 = 1 | 1 − 4 + 1 = −2 | 25 − 20 + 1 = 6 |
| (x − 2)² − 3 | 4 − 3 = 1 | 1 − 3 = −2 | 9 − 3 = 6 |

Beide Zeilen sind gleich. Die Umformung stimmt.

**Die Formel:** x² + b·x + c = (x + b/2)² − (b/2)² + c.

- b ist die Zahl vor dem x (mit Vorzeichen!), bei x² − 4x + 1 also b = −4.
- b/2 ist die Hälfte davon, hier −2.
- (b/2)² ist diese Hälfte zum Quadrat, hier (−2)² = 4. Das ist das fehlende Puzzleteil.
- c ist die Zahl ohne x, hier 1.

**So rechnest du:** x² − 4x + 1.

1. Zahl vor dem x ablesen: −4.
2. Halbieren: −4 : 2 = −2.
3. Quadrieren: (−2)² = 4.
4. Plus 4 und minus 4 einfügen: x² − 4x + 4 − 4 + 1.
5. Die ersten drei Teile sind eine binomische Formel: x² − 4x + 4 = (x − 2)². In die Klammer kommt die Hälfte aus Schritt 2.
6. Den Rest ausrechnen: −4 + 1 = −3.
7. Ergebnis: (x − 2)² − 3.
8. Probe mit einer Zahl, zum Beispiel x = 5: links 6, rechts 6.

Was du jetzt ablesen kannst: Der **Scheitel** (tiefster Punkt der Parabel) liegt bei (2 | −3). Denn (x − 2)² ist nie negativ und genau bei x = 2 gleich 0.

> [!WARNING]
> **Typischer Fehler**
> Das Abziehen vergessen. x² − 4x + 1 ist nicht (x − 2)² + 1. Probe x = 0: links 1, rechts 4 + 1 = 5. Falsch. Du musst die ergänzte 4 wieder abziehen. Zweiter Fehler: das Vorzeichen in der Klammer. Bei −4x steht (x − 2), bei +4x stünde (x + 2).

## Umkehrfunktion einer Parabel: Folie 62

Bestimmen Sie die Umkehrfunktion für f: [2, ∞) → ℝ, x ↦ x² − 4x + 1.

Erst die Wertetabelle, damit du das Verhalten siehst:

| x | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
| f(x) | 1 | −2 | −3 | −2 | 1 | 6 | 13 |

Links von 2 fällt f, rechts von 2 steigt f. Auf ganz ℝ wäre f nicht injektiv: f(0) = 1 = f(4), auf Stuhl 1 sitzen zwei Personen. Die Folie lässt deshalb nur x ≥ 2 hinein. Dann bleibt nur der steigende rechte Ast (2 | −3), (3 | −2), (4 | 1), (5 | 6), … und kein Wert kommt doppelt vor.

**So rechnest du:**

1. **Quadratische Ergänzung** (siehe oben): x² − 4x + 1 = (x − 2)² − 3.
2. **Injektiv?** Für x ≥ 2 wird x − 2 größer, wenn x größer wird, also auch (x − 2)². f steigt immer. Ja, injektiv.
3. **Bild bestimmen:** (x − 2)² ≥ 0, also f(x) ≥ 0 − 3 = −3. Der kleinste Wert ist f(2) = −3, nach oben geht es ohne Ende. Bild = [−3, ∞).
4. **y schreiben:** y = (x − 2)² − 3.
5. **Plus 3:** y + 3 = (x − 2)².
6. **Wurzel ziehen:** x − 2 = √(y + 3) oder x − 2 = −√(y + 3). Weil x ≥ 2 ist, ist x − 2 ≥ 0. Also gilt nur das Plus: x − 2 = √(y + 3).
7. **Plus 2:** x = 2 + √(y + 3).
8. **Tauschen:** f⁻¹(x) = 2 + √(x + 3), mit f⁻¹: [−3, ∞) → [2, ∞). Was vorher das Bild von f war, ist jetzt das, was in f⁻¹ hinein darf.
9. **Probe:** f(5) = 6 und f⁻¹(6) = 2 + √9 = 2 + 3 = 5. Noch eine: f(3) = −2 und f⁻¹(−2) = 2 + √1 = 3.

> [!IMPORTANT]
> **Das Wichtigste**
> Rezept: quadratisch ergänzen → prüfen, ob injektiv → Bild bestimmen → nach x auflösen → x und y tauschen → Probe. Das Bild von f ist die Definitionsmenge von f⁻¹. Das Vorzeichen vor der Wurzel richtet sich nach der Definitionsmenge von f.

> [!WARNING]
> **Typischer Fehler**
> f⁻¹ mit 1/f verwechseln. Bei f(x) = 2x + 1 ist f⁻¹(7) = 3 (rückwärts laufen), aber 1/f(7) = 1/15 (Kehrwert). Das „hoch minus 1“ heißt hier „rückwärts“, nicht „Kehrwert“. Zur Folie 62: Dort steht die Zielmenge ℝ. So ist f nicht surjektiv (Werte unter −3 kommen nie heraus); sauber ist f: [2, ∞) → [−3, ∞).

## Monotonie und Beschränktheit

**In einem Satz:** Monoton wachsend heißt „weiter rechts ist immer höher“, beschränkt heißt „die Werte bleiben zwischen einem Boden und einer Decke“.

**Stell dir vor:** zwei Testpersonen, die auf dem Graphen stehen wie auf einem Hang. Die eine steht bei x₁, die andere weiter rechts bei x₂. Bei einer wachsenden Funktion muss die rechte Person **immer** höher stehen als die linke, egal wo du die beiden hinstellst. Findest du auch nur ein Paar, bei dem die rechte Person tiefer steht oder gleich hoch, ist die Funktion nicht streng wachsend.

Bei Folgen (Kapitel „Folgen“) vergleicht man aₙ mit dem nächsten Glied aₙ₊₁. Bei Funktionen gibt es kein „nächstes x“, denn zwischen 1 und 2 liegen unendlich viele Zahlen. Darum vergleicht man zwei beliebige Stellen: die zwei Testpersonen.

**Mit Zahlen:**

| Funktion | linke Person x₁ | rechte Person x₂ | f(x₁) | f(x₂) | rechte höher? |
|---|---|---|---|---|---|
| 2x + 1 | 1 | 4 | 3 | 9 | ja |
| 2x + 1 | −5 | −4 | −9 | −7 | ja |
| x² auf ℝ | 1 | 3 | 1 | 9 | ja |
| x² auf ℝ | −3 | −1 | 9 | 1 | nein |

Bei 2x + 1 steht die rechte Person immer höher. Bei x² auf ganz ℝ findest du ein Paar (−3 und −1), bei dem die rechte Person tiefer steht. Also ist x² auf ℝ nicht monoton. Auf [0, ∞) wäre x² dagegen streng wachsend.

**Die Formel:**

- **streng monoton wachsend:** Aus x₁ < x₂ folgt f(x₁) < f(x₂). In Worten: rechts ist immer höher.
- **streng monoton fallend:** Aus x₁ < x₂ folgt f(x₁) > f(x₂). In Worten: rechts ist immer tiefer.
- **beschränkt:** Es gibt eine Zahl C mit |f(x)| ≤ C für alle x aus D. In Worten: Es gibt einen Boden −C und eine Decke C, und der Graph bleibt dazwischen. |f(x)| ist der Betrag, also der Wert ohne Vorzeichen.
- **nach unten beschränkt:** Es gibt einen Boden, unter den f nie fällt. Nach oben beschränkt: Es gibt eine Decke.

Rechentrick für die Monotonie: Statt „f(x₁) < f(x₂)“ prüfst du „f(x₂) − f(x₁) > 0“. Rechts minus links positiv heißt: rechts höher.

Beispiel 2x + 1: f(x₂) − f(x₁) = (2x₂ + 1) − (2x₁ + 1) = 2x₂ − 2x₁ = 2 · (x₂ − x₁). Weil x₂ rechts von x₁ steht, ist x₂ − x₁ > 0, also das Ganze > 0. Streng wachsend.

**So steht es auf der Folie:** (Folie 73) x₁ < x₂ ⇒ f(x₁) < f(x₂) für alle x₁, x₂ ∈ D.

Auf Deutsch heißt das: „Für jedes Paar von Stellen aus D gilt: Wenn x₁ links von x₂ liegt, dann ist f(x₁) kleiner als f(x₂).“ Das „für alle“ ist wichtig: Es reicht nicht, ein paar Zahlen einzusetzen. Zahlen helfen beim Vermuten, beweisen muss man es mit x₁ und x₂.

### So rechnest du: Folie 73, Nr. 1

Überprüfen Sie f: (1, ∞) → ℝ, x ↦ x²/(x + 1) auf Beschränktheit und Monotonie.

1. **Zahlen einsetzen (vermuten):**

   | x | 1,01 | 1,1 | 1,5 | 2 | 3 | 5 | 10 | 100 |
   |---|---|---|---|---|---|---|---|---|
   | f(x) | 0,51 | 0,58 | 0,9 | 1,33 | 2,25 | 4,17 | 9,09 | 99,01 |

   Vermutung: steigt immer, startet knapp über ½, wird beliebig groß.

2. **Umschreiben**, damit x nur noch einfach im Bruch steht: x²/(x + 1) = x − 1 + 1/(x + 1). Probe: (x − 1)(x + 1) + 1 = x² − 1 + 1 = x², geteilt durch (x + 1) ergibt den Bruch. Zahlenprobe x = 2: 2 − 1 + 1/3 = 4/3. Stimmt.

3. **Rechts minus links:** f(x₂) − f(x₁) = (x₂ − 1 + 1/(x₂ + 1)) − (x₁ − 1 + 1/(x₁ + 1)).
   - Die −1 heben sich weg: = (x₂ − x₁) + 1/(x₂ + 1) − 1/(x₁ + 1).
   - Die zwei Brüche auf einen Nenner: 1/(x₂ + 1) − 1/(x₁ + 1) = ((x₁ + 1) − (x₂ + 1))/((x₁ + 1)(x₂ + 1)) = (x₁ − x₂)/((x₁ + 1)(x₂ + 1)).
   - x₁ − x₂ ist dasselbe wie −(x₂ − x₁). Also: = (x₂ − x₁) − (x₂ − x₁)/((x₁ + 1)(x₂ + 1)).
   - (x₂ − x₁) ausklammern: = (x₂ − x₁) · (1 − 1/((x₁ + 1)(x₂ + 1))).
   - Zahlenprobe x₁ = 2, x₂ = 5: f(5) − f(2) = 4,1667 − 1,3333 = 2,8333. Formel: 3 · (1 − 1/(3 · 6)) = 3 · 17/18 = 2,8333. Stimmt.

4. **Vorzeichen jedes Faktors prüfen:**
   - x₂ − x₁ > 0, weil x₂ rechts liegt.
   - Beide x sind größer als 1, also x₁ + 1 > 2 und x₂ + 1 > 2. Das Produkt ist größer als 4. Dann ist 1/(Produkt) kleiner als ¼, und die Klammer ist größer als 1 − ¼ = ¾. Positiv.
   - Positiv mal positiv ist positiv ⇒ streng monoton wachsend.

5. **Ränder anschauen (Beschränktheit):**
   - Linker Rand x → 1 (gelesen: „x läuft gegen 1“): f(x) läuft gegen 1²/(1 + 1) = ½. Weil x = 1 nicht erlaubt ist, wird ½ nie erreicht, aber f bleibt immer darüber. Boden: ½.
   - Rechter Rand x → ∞: f(x) = x − 1 + (etwas Positives) > x − 1. Das wird beliebig groß. Keine Decke.

Ergebnis: streng monoton wachsend, nach unten durch ½ beschränkt, nach oben unbeschränkt, also insgesamt nicht beschränkt.

### Folie 73, Nr. 2

g: (−1, 1) → ℝ, x ↦ x/(1 − x²).

| x | −0,99 | −0,9 | −0,5 | 0 | 0,5 | 0,9 | 0,99 |
|---|---|---|---|---|---|---|---|
| g(x) | −49,7 | −4,74 | −0,67 | 0 | 0,67 | 4,74 | 49,7 |

1. **Rechts minus links:** g(x₂) − g(x₁) = x₂/(1 − x₂²) − x₁/(1 − x₁²).
2. **Auf einen Nenner:** Zähler = x₂(1 − x₁²) − x₁(1 − x₂²) = x₂ − x₁²x₂ − x₁ + x₁x₂².
3. **Sortieren und ausklammern:** = (x₂ − x₁) + x₁x₂(x₂ − x₁) = (x₂ − x₁)(1 + x₁x₂).
4. **Zusammen:** g(x₂) − g(x₁) = (x₂ − x₁)(1 + x₁x₂)/((1 − x₁²)(1 − x₂²)).
5. **Vorzeichen:** x₂ − x₁ > 0. Beide x liegen zwischen −1 und 1, also ist x₁x₂ zwischen −1 und 1 und damit 1 + x₁x₂ > 0. Ebenso ist x² < 1, also 1 − x₁² > 0 und 1 − x₂² > 0. Alle Faktoren positiv ⇒ streng monoton wachsend.
6. **Ränder:** Nahe x = 1 wird der Nenner 1 − x² winzig, darum wird g riesig (g(0,99) ≈ 49,7, g(0,999) ≈ 499,75). Nahe x = −1 wird g genauso riesig negativ. Keine Decke, kein Boden.

Merke daraus: Ein kleiner Definitionsbereich heißt nicht automatisch beschränkte Werte.

> [!IMPORTANT]
> **Das Wichtigste**
> Monotonie: zwei Testpersonen x₁ < x₂, rechne f(x₂) − f(x₁), bring alles auf einen Nenner, klammere (x₂ − x₁) aus, prüfe das Vorzeichen jedes Faktors. Beschränktheit: an den Rändern von D schauen, ob es einen Boden und eine Decke gibt.

> [!WARNING]
> **Typischer Fehler**
> Am offenen Rand einsetzen. g(1) gibt es nicht, der Nenner wäre 0. Setz stattdessen Zahlen nahe am Rand ein (0,9; 0,99; 0,999). Zweiter Fehler: ein paar Zahlen einsetzen und das als Beweis nehmen. Zahlen sind nur die Vermutung. Dritter: Streng monoton ⇒ injektiv, aber nur „monoton“ (auch gleich hoch erlaubt) reicht dafür nicht.

## Übungen

> [!TIP]
> **Übung 1 · mittel**
> Welche dieser Funktionen besitzt eine Umkehrfunktion? Geben Sie diese gegebenenfalls an. a) ℝ \ {0} → ℝ \ {0}, x ↦ 1/x³ · b) ℝ → ℝ, x ↦ x² − 4x + 2
>
> Quelle: Folien 04.11., Aufgabe FU-3

> [!TIP]
> **Übung 2 · mittel**
> Gegeben ist f: [1, ∞) → ℝ, f(x) = x² − 2x + 3. a) Quadratische Ergänzung. b) Ist f beschränkt? c) Wähle die Zielmenge so, dass f bijektiv ist, und bestimme f⁻¹ mit Probe.
>
> Quelle: eigene Aufgabe, Klausurstil wie Folie 62

> [!TIP]
> **Übung 3 · Prüfungsniveau**
> Bestimmen Sie jeweils den größtmöglichen Definitionsbereich D ⊂ ℝ und das Bild von f: D → ℝ: b) x ↦ 1/(x⁴ − 2x² + 1) · c) x ↦ (x² + 3x + 2)/(x² + x − 2) · d) x ↦ √(x² − 2x − 1)
>
> Quelle: Folien 04.11., Aufgabe FU-2 (ohne Teil a, siehe Lösung)

> [!TIP]
> **Übung 4 · Prüfungsniveau**
> Entwickeln Sie p um x₀, also p(x) = a₀ + a₁(x − x₀) + a₂(x − x₀)² + …: a) p(x) = x³ − x² − 4x + 2, x₀ = 1 · b) p(x) = x⁴ + 6x³ + 10x², x₀ = −2
>
> Quelle: Folien 04.11., Aufgabe FU-4

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> Bestimmen Sie die Umkehrfunktion von f: ℝ → ℝ mit f(x) = x² − 2x + 2 für x ≥ 1 und f(x) = 4x − 2x² − 1 für x < 1. Weisen Sie nach, dass es wirklich die Umkehrfunktion ist.
>
> Quelle: Folien 04.11., Aufgabe FU-8

## Lösungen

### Übung 1

a) f(x) = 1/x³ auf ℝ \ {0}.

1. Wertetabelle:

   | x | −2 | −1 | −½ | ½ | 1 | 2 |
   |---|---|---|---|---|---|---|
   | 1/x³ | −1/8 | −1 | −8 | 8 | 1 | 1/8 |

   Kein Ergebnis kommt doppelt vor.
2. Injektiv: x³ ist streng monoton wachsend, verschiedene x geben verschiedene x³ und damit verschiedene Kehrwerte 1/x³.
3. Surjektiv: Jedes y ≠ 0 kommt heraus, siehe Schritt 4 (dort findest du zu jedem y ein passendes x). Die 0 kommt nie heraus, sie gehört aber auch nicht zur Zielmenge ℝ \ {0}. Also bijektiv.
4. Auflösen: y = 1/x³. Mal x³: y · x³ = 1. Durch y: x³ = 1/y. Dritte Wurzel: x = ∛(1/y) = 1/∛y.
5. Tauschen: f⁻¹: ℝ \ {0} → ℝ \ {0}, x ↦ 1/∛x.
6. Probe: f(2) = 1/8, f⁻¹(1/8) = 1/∛(1/8) = 1/½ = 2. Negativ: f(−1) = −1, f⁻¹(−1) = 1/∛(−1) = 1/(−1) = −1.

b) f(x) = x² − 4x + 2 auf ℝ → ℝ.

1. Quadratische Ergänzung: Zahl vor x ist −4, Hälfte −2, Quadrat 4. x² − 4x + 4 − 4 + 2 = (x − 2)² − 2.
2. Nicht injektiv: f(0) = 2 und f(4) = 16 − 16 + 2 = 2. Zwei Personen auf Stuhl 2.
3. Nicht surjektiv: (x − 2)² ≥ 0, also f(x) ≥ −2. Werte unter −2 (etwa −5) kommen nie heraus.
4. Also keine Umkehrfunktion auf ℝ → ℝ.
5. Eingeschränkt auf [2, ∞) → [−2, ∞) ginge es: y + 2 = (x − 2)², x = 2 + √(y + 2), also f⁻¹(x) = 2 + √(x + 2). Probe: f(5) = 25 − 20 + 2 = 7, f⁻¹(7) = 2 + √9 = 5.

### Übung 2

a) Zahl vor x ist −2, Hälfte −1, Quadrat 1. x² − 2x + 1 − 1 + 3 = (x − 1)² + 2. Scheitel (1 | 2). Probe x = 3: 9 − 6 + 3 = 6 und 4 + 2 = 6.

b)

| x | 1 | 2 | 3 | 11 | 101 |
|---|---|---|---|---|---|
| f(x) | 2 | 3 | 6 | 102 | 10 002 |

1. Boden: (x − 1)² ≥ 0, also f(x) ≥ 2. Der kleinste Wert ist f(1) = 2.
2. Decke: keine. f(101) = 10 002, und es geht immer weiter nach oben.
3. Also nach unten beschränkt, nach oben nicht, insgesamt nicht beschränkt.

c)

1. Für x ≥ 1 wird (x − 1)² mit x immer größer: f ist streng wachsend, also injektiv.
2. Bild = [2, ∞). Damit f surjektiv ist, Zielmenge = Bild: f: [1, ∞) → [2, ∞) ist bijektiv.
3. y = (x − 1)² + 2. Minus 2: y − 2 = (x − 1)².
4. Wurzel: x − 1 = √(y − 2). Nur Plus, weil x ≥ 1 und damit x − 1 ≥ 0.
5. Plus 1: x = 1 + √(y − 2).
6. Tauschen: f⁻¹(x) = 1 + √(x − 2), f⁻¹: [2, ∞) → [1, ∞).
7. Probe: f(3) = 6, f⁻¹(6) = 1 + √4 = 1 + 2 = 3.

### Übung 3

Teil a lautet auf der Folie (x + 1)/(x − x). Der Nenner x − x ist immer 0, D wäre leer. Vermutlich ein Tippfehler; was gemeint war, ist offen. Deshalb fehlt a hier.

b) f(x) = 1/(x⁴ − 2x² + 1).

1. Nenner umschreiben. Setze u = x², dann x⁴ = u². Der Nenner wird u² − 2u + 1 = (u − 1)² = (x² − 1)².
2. Nenner = 0: x² − 1 = 0 ⇒ x² = 1 ⇒ x = 1 oder x = −1.
3. D = ℝ \ {−1, 1}.
4. Werte:

   | x | 0 | 1,1 | 2 | 3 |
   |---|---|---|---|---|
   | (x² − 1)² | 1 | 0,0441 | 9 | 64 |
   | f(x) | 1 | 22,68 | 0,11 | 0,016 |

5. Bild: Der Nenner ist ein Quadrat und auf D nie 0, also immer positiv. Damit ist f(x) immer positiv. Für x knapp über 1 wird der Nenner beliebig klein (f riesig), für große x beliebig groß (f winzig), und dazwischen kommt jeder Wert vor. Bild = (0, ∞).

c) f(x) = (x² + 3x + 2)/(x² + x − 2).

1. Zähler faktorisieren: zwei Zahlen mit Produkt 2 und Summe 3 sind 1 und 2. Also (x + 1)(x + 2).
2. Nenner faktorisieren: Produkt −2, Summe 1 sind 2 und −1. Also (x + 2)(x − 1).
3. Nenner = 0 bei x = −2 und x = 1. D = ℝ \ {−2, 1}.
4. Kürzen (erlaubt, weil x ≠ −2): f(x) = (x + 1)/(x − 1).
5. Umschreiben: (x + 1)/(x − 1) = (x − 1 + 2)/(x − 1) = 1 + 2/(x − 1). Probe x = 3: (9 + 9 + 2)/(9 + 3 − 2) = 20/10 = 2 und 1 + 2/2 = 2.
6. 2/(x − 1) ist nie 0, also kommt der Wert 1 nie heraus.
7. Jeder andere Wert y: 1 + 2/(x − 1) = y ⇒ 2/(x − 1) = y − 1 ⇒ x = 1 + 2/(y − 1).
8. Falle: Für y = 1/3 ergibt das x = 1 + 2/(−2/3) = 1 − 3 = −2. Aber −2 ist verboten. Also kommt 1/3 auch nicht heraus.
9. Bild = ℝ \ {1/3, 1}.

d) f(x) = √(x² − 2x − 1).

1. Unter der Wurzel quadratisch ergänzen: Hälfte von −2 ist −1, Quadrat 1. x² − 2x + 1 − 1 − 1 = (x − 1)² − 2.
2. Bedingung: (x − 1)² − 2 ≥ 0 ⇔ (x − 1)² ≥ 2.
3. Das heißt: x − 1 ist mindestens √2 weit von 0 weg, also x − 1 ≥ √2 oder x − 1 ≤ −√2. Kurz: |x − 1| ≥ √2.
4. Mit √2 ≈ 1,414: x ≥ 1 + √2 ≈ 2,414 oder x ≤ 1 − √2 ≈ −0,414.
5. D = (−∞, 1 − √2] ∪ [1 + √2, ∞). Das Zeichen ∪ heißt „vereinigt mit“, also „das eine oder das andere Stück“.
6. Probe: x = 3 gibt √(9 − 6 − 1) = √2, x = −1 gibt √(1 + 2 − 1) = √2, x = 0 gibt √(−1), verboten. Passt zu D.
7. Bild: Am Rand x = 1 + √2 ist der Wert √0 = 0, nach außen wird er beliebig groß. Wurzeln sind nie negativ. Bild = [0, ∞).

### Übung 4

**Was ist gemeint?** Du schreibst dasselbe Polynom so um, dass statt x überall (x − x₀) steht. Das ist wie ein Umzug des Nullpunkts nach x₀. Trick: Setze t = x − x₀, also x = t + x₀, setze ein, multipliziere aus und sortiere nach Potenzen von t.

a) x₀ = 1, also x = t + 1.

1. (t + 1)³ = t³ + 3t² + 3t + 1.
2. −(t + 1)² = −t² − 2t − 1.
3. −4(t + 1) = −4t − 4.
4. +2.
5. Sortieren: t³ + (3 − 1)t² + (3 − 2 − 4)t + (1 − 1 − 4 + 2) = t³ + 2t² − 3t − 2.
6. t = x − 1 zurück: p(x) = −2 − 3(x − 1) + 2(x − 1)² + (x − 1)³.
7. Probe x = 3: alt 27 − 9 − 12 + 2 = 8. Neu (x − 1 = 2): −2 − 6 + 8 + 8 = 8.

b) x₀ = −2, also x = t − 2.

1. (t − 2)⁴ = t⁴ − 8t³ + 24t² − 32t + 16.
2. 6(t − 2)³ = 6(t³ − 6t² + 12t − 8) = 6t³ − 36t² + 72t − 48.
3. 10(t − 2)² = 10(t² − 4t + 4) = 10t² − 40t + 40.
4. Sortieren: t⁴ + (−8 + 6)t³ + (24 − 36 + 10)t² + (−32 + 72 − 40)t + (16 − 48 + 40) = t⁴ − 2t³ − 2t² + 0 · t + 8.
5. t = x + 2 zurück: p(x) = 8 − 2(x + 2)² − 2(x + 2)³ + (x + 2)⁴.
6. Probe x = 0: alt 0. Neu (x + 2 = 2): 8 − 8 − 16 + 16 = 0.

Schnellprobe: a₀ ist immer p(x₀). p(1) = 1 − 1 − 4 + 2 = −2 und p(−2) = 16 − 48 + 40 = 8. Passt.

### Übung 5

1. **Erster Teil quadratisch ergänzen (x ≥ 1):** x² − 2x + 2 = (x − 1)² + 1. Für x ≥ 1 steigend, kleinster Wert f(1) = 1. Werte [1, ∞).
2. **Zweiter Teil (x < 1):** 4x − 2x² − 1 = −2(x² − 2x) − 1 = −2((x − 1)² − 1) − 1 = −2(x − 1)² + 2 − 1 = 1 − 2(x − 1)². Für x < 1 wird (x − 1)² kleiner, je näher x an 1 kommt. Also steigt f. Werte (−∞, 1), die 1 selbst wird nicht erreicht.
3. **Wertetabelle:**

   | x | −2 | −1 | 0 | 0,5 | 1 | 2 | 3 |
   |---|---|---|---|---|---|---|---|
   | f(x) | −17 | −7 | −1 | 0,5 | 1 | 2 | 5 |

   Immer steigend, kein Wert doppelt.
4. **Bijektiv:** Der linke Teil liefert (−∞, 1), der rechte [1, ∞). Beide passen lückenlos und ohne Überlappung zusammen. Jedes y wird genau einmal getroffen.
5. **Fall y ≥ 1** (kommt vom rechten Teil): y = (x − 1)² + 1 ⇒ y − 1 = (x − 1)² ⇒ x − 1 = √(y − 1), Plus wegen x ≥ 1 ⇒ x = 1 + √(y − 1).
6. **Fall y < 1** (kommt vom linken Teil): y = 1 − 2(x − 1)² ⇒ 2(x − 1)² = 1 − y ⇒ (x − 1)² = (1 − y)/2 ⇒ x − 1 = −√((1 − y)/2), Minus wegen x < 1 ⇒ x = 1 − √((1 − y)/2).
7. **Ergebnis:** f⁻¹(x) = 1 + √(x − 1) für x ≥ 1 und f⁻¹(x) = 1 − √((1 − x)/2) für x < 1.
8. **Nachweis f⁻¹(f(x)) = x:**
   - Für x ≥ 1: f(x) − 1 = (x − 1)², also f⁻¹(f(x)) = 1 + √((x − 1)²) = 1 + |x − 1| = 1 + (x − 1) = x, weil x − 1 ≥ 0.
   - Für x < 1: (1 − f(x))/2 = (x − 1)², also f⁻¹(f(x)) = 1 − √((x − 1)²) = 1 − |x − 1| = 1 − (1 − x) = x, weil x − 1 < 0.
9. **Zahlenprobe:** f(3) = 5, f⁻¹(5) = 1 + √4 = 3. f(−1) = −7, f⁻¹(−7) = 1 − √(8/2) = 1 − 2 = −1. f(0) = −1, f⁻¹(−1) = 1 − √(2/2) = 0.

√((x − 1)²) ist |x − 1| (der Abstand ohne Vorzeichen), nicht einfach x − 1. Genau deshalb braucht man die Fallunterscheidung.
