---
title: "Grenzwerte von Funktionen"
order: 6
summary: "Was lim (x → a) bedeutet, einseitige Grenzwerte, die drei möglichen Ergebnisse und die Taktik: einsetzen, faktorisieren und kürzen, durch die höchste Potenz teilen."
klausur: "relevant"
---

Bei Folgen lief n immer weiter: 1, 2, 3, … Bei Funktionen rückt x immer näher an eine Stelle a heran. Die Frage ist dieselbe: Wohin laufen die Werte? Ganz am Ende des 04.11. kam dazu Folie 75 mit sechs Beispielen.

Ein Alltagsbeispiel: Ein Navi zeigt die Durchschnittsgeschwindigkeit „Strecke durch Zeit“. Direkt beim Start ist die Zeit 0, die Formel geht nicht. Trotzdem kann man fragen, welchem Wert die Anzeige kurz nach dem Start immer näher kommt. Genau das misst ein Grenzwert.

Keine Sorge, wenn die Folien hier abstrakt wirken. Fast jede Aufgabe läuft nach einem festen Plan ab, und den lernst du in diesem Kapitel Schritt für Schritt.

## Was heißt lim (x → a)?

### In einem Satz

Der Grenzwert ist die Zahl, der die Funktionswerte immer näher kommen, wenn x immer näher an eine bestimmte Stelle heranrückt.

### Stell dir vor

Du gehst auf ein Haus zu. Die Tür ist verschlossen, du kommst nicht hinein. Trotzdem weißt du genau, auf welches Haus du zuläufst: Mit jedem Schritt bist du näher dran.

So ist es beim Grenzwert. Die Stelle a ist das Haus. Ob du hineinkommst (ob f bei a überhaupt einen Wert hat), ist egal. Es zählt nur, wohin du beim Näherkommen läufst.

### Mit Zahlen

Nimm f(x) = (x² − 4)/(x − 2) und die Stelle a = 2. Bei x = 2 selbst steht unten 2 − 2 = 0. Durch 0 darf man nicht teilen, die Tür ist zu. Also gehst du nahe heran, einmal von links (Zahlen kleiner als 2) und einmal von rechts (Zahlen größer als 2):

| x (von links) | 1,9 | 1,99 | 1,999 |
|---|---|---|---|
| f(x) | 3,9 | 3,99 | 3,999 |

| x (von rechts) | 2,1 | 2,01 | 2,001 |
|---|---|---|---|
| f(x) | 4,1 | 4,01 | 4,001 |

Rechne eine Zeile nach: x = 1,9 ergibt oben 1,9² − 4 = 3,61 − 4 = −0,39 und unten 1,9 − 2 = −0,1. Also −0,39/(−0,1) = 3,9.

Von beiden Seiten kommen die Werte der 4 immer näher. Also ist der Grenzwert 4, obwohl man bei x = 2 nichts ausrechnen kann.

### Die Formel

lim (x → a) f(x) = g

- **lim** ist die Abkürzung für Limes (lateinisch: Grenze). Lies es als „wohin läuft es, wenn …“.
- **x → a** heißt: x rückt immer näher an die Zahl a heran, wird aber nie genau a.
- **f(x)** ist der Funktionswert, also das, was herauskommt.
- **g** ist die Zahl, der f(x) dabei immer näher kommt: der Grenzwert.

Im Beispiel: lim (x → 2) (x² − 4)/(x − 2) = 4.

### So steht es auf der Folie

Die Folie definiert es (sinngemäß) über Folgen: lim (x → x̂) f(x) = y heißt, für **jede** Folge xₙ → x̂ gilt f(xₙ) → y.

Auf Deutsch heißt das: Nimm irgendeine Zahlenreihe, die auf x̂ zuläuft, zum Beispiel 1,9; 1,99; 1,999; … für x̂ = 2. Setze jede Zahl in f ein. Dann muss immer dasselbe Ziel y herauskommen, egal welche Zahlenreihe du nimmst. x̂ liest du „x Dach“, es ist einfach die Stelle, auf die du zuläufst. Das ist die Brücke zu Kapitel 2 (Folgen).

> [!IMPORTANT]
> **Das Wichtigste**
> Der Grenzwert schaut auf die Nähe von a, nicht auf a selbst. Was bei x = a passiert, ist für den Grenzwert egal.

> [!WARNING]
> **Typischer Fehler**
> „Bei x = 2 ist f nicht definiert, also gibt es keinen Grenzwert.“ Falsch. Gerade dann ist der Grenzwert interessant. Die verschlossene Tür hindert dich nicht daran, auf das Haus zuzulaufen.

## Einseitige Grenzwerte

### In einem Satz

Ein einseitiger Grenzwert fragt nur, wohin die Werte laufen, wenn du dich von **einer** Seite näherst.

### Stell dir vor

Zwei Leute laufen von beiden Ufern auf die Mitte einer Brücke zu, einer von links, einer von rechts. Kommen beide am selben Punkt an, passt die Brücke zusammen. Kommen sie an verschiedenen Punkten an (der eine oben, der andere unten), dann klafft in der Mitte ein Spalt.

Genauso beim Grenzwert: Der linke und der rechte Grenzwert müssen gleich sein, sonst gibt es keinen gemeinsamen (beidseitigen) Grenzwert.

### Mit Zahlen

Nimm f(x) = 1/x an der Stelle 0.

| x (von links) | −0,1 | −0,01 | −0,001 |
|---|---|---|---|
| 1/x | −10 | −100 | −1000 |

| x (von rechts) | 0,1 | 0,01 | 0,001 |
|---|---|---|---|
| 1/x | 10 | 100 | 1000 |

Von links geht es immer tiefer ins Minus, von rechts immer höher ins Plus. Die beiden treffen sich nicht.

### Die Formel

- **x → 0⁺** (mit kleinem Plus oben): x kommt von rechts, also mit Zahlen größer als 0: 0,1; 0,01; 0,001 …
- **x → 0⁻** (mit kleinem Minus oben): x kommt von links, also mit Zahlen kleiner als 0: −0,1; −0,01; −0,001 …

lim (x → 0⁺) 1/x = +∞ und lim (x → 0⁻) 1/x = −∞.

### So steht es auf der Folie

Von rechts: lim (x → x̂⁺) f(x) = lim (x ↓ x̂) f(x). Von links: lim (x → x̂⁻) f(x) = lim (x ↑ x̂) f(x). Die Pfeile ↓ und ↑ zeigen, dass x von oben (größere Zahlen) bzw. von unten (kleinere Zahlen) kommt.

Ergänzung, nicht wörtlich auf der Folie: lim (x → x̂) f(x) existiert genau dann, wenn beide einseitigen Grenzwerte existieren und gleich sind.

Auf Deutsch heißt das: Der beidseitige Grenzwert ist nur da, wenn beide Brückenhälften am selben Punkt ankommen.

> [!WARNING]
> **Typischer Fehler**
> Nur von rechts testen und dann „Grenzwert +∞“ schreiben. Bei 1/x ist links −∞ und rechts +∞, also existiert lim (x → 0) 1/x **nicht**. Ohne kleines + oder − musst du immer beide Seiten prüfen.

## Die drei möglichen Ergebnisse

Folie 75 unterscheidet drei Fälle. Bei Folgen hießen sie konvergent, bestimmt divergent und unbestimmt divergent.

| Ergebnis (Folie 75) | Auf Deutsch | Beispiel | Zahlen |
|---|---|---|---|
| konvergent | die Werte kommen einer festen Zahl beliebig nah | (x² − 4)/(x − 2) für x → 2: Ergebnis 4 | 3,99 / 4,01 |
| uneigentlich | die Werte werden immer größer (+∞) oder immer kleiner (−∞) | 1/x für x → 0⁺: +∞ | 100 / 1000 |
| existiert nicht | weder eine Zahl noch ±∞: es schwingt, oder links ≠ rechts | sin(1/x) für x → 0 | 1, −1, 1, −1 … |

„∞“ heißt unendlich. Es ist keine Zahl, sondern bedeutet „wird größer als jede Zahl, die du dir ausdenkst“.

## Die Taktik

### In einem Satz

Du setzt zuerst einfach ein, und je nachdem, was herauskommt, weißt du, was als Nächstes zu tun ist.

### Stell dir vor

Ein Entscheidungsbaum wie an einer Weiche: Du schaust, was beim Einsetzen herauskommt, und nimmst dann genau einen von vier Wegen.

### So rechnest du

Schritt 1 ist immer: **Setze a in die Funktion ein.** Dann schau in die Tabelle (Mitschrift 04.11.):

| Beim Einsetzen kommt heraus … | Das heißt … | Was du tust |
|---|---|---|
| eine normale Zahl, z. B. 7 | alles in Ordnung | fertig, das ist der Grenzwert |
| Zahl/0, z. B. 1/0 | die Werte werden riesig | Vorzeichen von Zähler und Nenner prüfen (links und rechts): +∞, −∞ oder „existiert nicht“ |
| 0/0 | unklar, so geht es nicht | faktorisieren und kürzen, dann neu einsetzen |
| ∞/∞ (bei x → ∞) | unklar, so geht es nicht | Zähler und Nenner durch die höchste Potenz von x teilen |
| es schwingt, oder links ≠ rechts | kein Ziel | Grenzwert existiert nicht |

Und immer gilt: **Probe mit Zahlen nahe dran.** Setze zum Beispiel 1,99 und 2,01 ein. Das zeigt dir die Richtung und deckt Rechenfehler auf.

Als Liste zum Auswendiglernen:

1. Einsetzen.
2. Zahl? Fertig.
3. Zahl/0? Vorzeichen prüfen.
4. 0/0? Faktorisieren und kürzen.
5. ∞/∞? Durch die höchste Potenz teilen.
6. Probe mit Zahlen.

Werkzeuge zum Faktorisieren:

- Die dritte binomische Formel a² − b² = (a − b)(a + b). Beispiel: x² − 9 = (x − 3)(x + 3).
- Ist p(a) = 0, steckt der Faktor (x − a) in p(x). Den Rest liefert die Polynomdivision (oder das Horner-Schema, siehe Lösung zu Übung 5).

> [!IMPORTANT]
> **Das Wichtigste**
> Erst einsetzen, dann je nach Ergebnis weitermachen. Die Zahlenprobe zeigt immer die Richtung.

> [!WARNING]
> **Typischer Fehler**
> „0/0 ist 0“ oder „0/0 ist 1“. Beides falsch. 0/0 heißt nur: So geht es nicht, erst umformen. Bei (x² − 4)/(x − 2) kommt nach dem Umformen 4 heraus, bei anderen Aufgaben etwas ganz anderes.

## Die Beispiele von Folie 75

### a) 0/0: faktorisieren und kürzen

**lim (x → 2) (x² − 4)/(x − 2) = 4**

1. Einsetzen: oben 4 − 4 = 0, unten 2 − 2 = 0. Also 0/0 ⇒ umformen.
2. Faktorisieren mit der binomischen Formel: x² − 4 = x² − 2² = (x − 2)(x + 2).
3. Hinschreiben: (x − 2)(x + 2)/(x − 2).
4. Kürzen: (x − 2) steht oben und unten, es fällt weg. Übrig bleibt x + 2. Das ist erlaubt, weil x nur nahe bei 2 ist und nie genau 2. Also ist x − 2 nie 0.
5. Neu einsetzen: 2 + 2 = 4.

Die Wertetabelle oben bestätigt das: 3,999 und 4,001.

### b) sin(x)/x: ein Standard-Grenzwert

**lim (x → 0) sin(x)/x = 1**

Einsetzen gibt sin(0)/0 = 0/0. Kürzen geht hier nicht, denn sin(x) lässt sich nicht in Faktoren zerlegen. Das ist ein Standard-Grenzwert, den du dir merkst. Die Tabelle zeigt, warum er stimmt (Taschenrechner im Bogenmaß, RAD):

| x | 1 | 0,5 | 0,1 | 0,01 |
|---|---|---|---|---|
| sin(x)/x | 0,8415 | 0,9589 | 0,9983 | 0,99998 |

Von links (x = −0,1) kommt dasselbe heraus: 0,9983. Für kleine x ist sin(x) fast genau x, und x/x = 1.

### c) ∞/∞: durch die höchste Potenz teilen

**lim (x → ∞) (2x² + 3x − 1)/(x² + 5) = 2**

Erst die Zahlen:

| x | 10 | 100 | 1000 |
|---|---|---|---|
| f(x) | 2,181 | 2,029 | 2,003 |

Jetzt die Rechnung:

1. Einsetzen: oben und unten wird es riesig, ∞/∞ ⇒ umformen.
2. Die höchste Potenz ist x². Teile jeden einzelnen Summanden oben und unten durch x²:
   - 2x²/x² = 2, 3x/x² = 3/x, 1/x² bleibt 1/x²
   - x²/x² = 1, 5/x² bleibt 5/x²
3. Ergebnis: (2 + 3/x − 1/x²)/(1 + 5/x²).
4. Für riesige x werden 3/x, 1/x² und 5/x² winzig, also praktisch 0. Beispiel: 3/1000 = 0,003.
5. Übrig bleibt 2/1 = 2.

Abkürzung: Haben oben und unten dieselbe höchste Potenz (gleicher Grad), ist der Grenzwert das Verhältnis der Vorzahlen vor dieser Potenz, hier 2/1. Ist die Potenz unten höher, ist der Grenzwert 0. Das ist dasselbe Rezept wie bei Folgen.

### d) und e) Zahl/0: Vorzeichen prüfen

**lim (x → 0⁺) 1/x = +∞** und **lim (x → 0⁻) 1/x = −∞**

**Stell dir vor:** Du teilst eine Pizza durch immer kleinere Stückgrößen. Je kleiner das Stück, desto mehr Stücke bekommst du.

| Rechnung | 1/0,1 | 1/0,01 | 1/0,001 | 1/0,0001 |
|---|---|---|---|---|
| Ergebnis | 10 | 100 | 1000 | 10 000 |

Jedes Mal, wenn der Nenner zehnmal kleiner wird, wird das Ergebnis zehnmal größer. Das hört nie auf, also +∞. Ist der Nenner winzig und negativ (−0,001), kommt −1000 heraus, also −∞.

**So rechnest du bei „Zahl/0“:**

1. Schau nur auf die Vorzeichen.
2. Zähler positiv, Nenner winzig positiv ⇒ +∞.
3. Genau ein Minus (oben oder unten) ⇒ −∞.
4. Zwei Minus (oben und unten) ⇒ +∞.
5. Ohne + oder − an der Stelle: beide Seiten prüfen. Verschieden ⇒ existiert nicht.

### f) Ein Grenzwert, der nicht existiert

**lim (x → 0) sin(1/x) existiert nicht**

**Stell dir vor:** Ein Scheibenwischer, der zwischen ganz oben (1) und ganz unten (−1) hin und her schwingt, und zwar immer schneller, je näher x an 0 kommt. Er bleibt nie an einem Punkt stehen.

| x | 0,6366 | 0,2122 | 0,1273 | 0,0909 |
|---|---|---|---|---|
| genauer Wert | 2/π | 2/(3π) | 2/(5π) | 2/(7π) |
| sin(1/x) | 1 | −1 | 1 | −1 |

Warum? Wenn x winzig wird, wird 1/x riesig (siehe d). Der Sinus wächst aber nicht mit, er schwingt immer zwischen −1 und 1. Die Stellen, an denen er 1 oder −1 erreicht, rücken immer dichter zusammen. Der Wert kommt also keiner Zahl dauerhaft nahe, und er läuft auch nicht nach ±∞.

> [!IMPORTANT]
> **Das Wichtigste**
> Gleicher Grad oben und unten bei x → ∞: Grenzwert = Verhältnis der Vorzahlen. Zahl/0: nur Vorzeichen anschauen. sin(1/x): schwingt, existiert nicht.

> [!WARNING]
> **Typischer Fehler**
> sin(x)/x und sin(1/x) verwechseln. Bei sin(x)/x geht das, was im Sinus steht, gegen 0, da ist alles ruhig. Bei sin(1/x) geht es gegen ∞, da schwingt es. Erst schauen, was im Sinus steht. Und: Taschenrechner auf Bogenmaß (RAD) stellen.

## Übungen

> [!TIP]
> **Übung 1 · leicht**
> Berechne lim (x → 3) (x² − 9)/(x − 3).
>
> Quelle: eigene Aufgabe, wie Folie 75 a

> [!TIP]
> **Übung 2 · mittel**
> Berechne a) lim (x → ∞) (3x² − x)/(6x² + 1) und b) lim (x → ∞) (5x + 7)/(x² + 1).
>
> Quelle: eigene Aufgabe, wie Folie 75 c

> [!TIP]
> **Übung 3 · mittel**
> Berechne lim (x → 2⁺) 1/(x − 2) und lim (x → 2⁻) 1/(x − 2). Existiert lim (x → 2) 1/(x − 2)?
>
> Quelle: eigene Aufgabe, wie Folie 75 d/e

> [!TIP]
> **Übung 4 · Prüfungsniveau**
> Berechne lim (x → 0) (√(x + 4) − 2)/x. Tipp: mit (√(x + 4) + 2) erweitern.
>
> Quelle: eigene Aufgabe, Klausurstil

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> Berechnen Sie: a) lim (x → 2) (x⁴ − 2x³ − 7x² + 20x − 12)/(x⁴ − 6x³ + 9x² + 4x − 12) · b) lim (x → 1) (2x − 3)/(x − 1) · c) lim (x → +∞) (√(x + 1) − √x) · d) lim (x → 0) (1/x − 1/x²)
>
> Quelle: Folien 04.11., Aufgabe FU-5

## Lösungen

### Übung 1

1. Einsetzen: oben 3² − 9 = 9 − 9 = 0, unten 3 − 3 = 0. Also 0/0 ⇒ umformen.
2. Faktorisieren mit der binomischen Formel: x² − 9 = x² − 3² = (x − 3)(x + 3).
3. Hinschreiben: (x − 3)(x + 3)/(x − 3).
4. Kürzen: (x − 3) fällt weg. Übrig bleibt x + 3.
5. Neu einsetzen: 3 + 3 = 6.

Probe:

| x | 2,9 | 2,99 | 3,01 | 3,1 |
|---|---|---|---|---|
| f(x) | 5,9 | 5,99 | 6,01 | 6,1 |

Ergebnis: Der Grenzwert ist 6.

### Übung 2

**a)** (3x² − x)/(6x² + 1)

1. Einsetzen: ∞/∞ ⇒ umformen.
2. Höchste Potenz ist x². Jeden Summanden durch x² teilen: 3x²/x² = 3, x/x² = 1/x, 6x²/x² = 6, 1/x² bleibt.
3. Ergebnis: (3 − 1/x)/(6 + 1/x²).
4. 1/x und 1/x² werden winzig, also 0. Übrig bleibt 3/6.
5. Kürzen: 3/6 = ½.

Probe: x = 10 ergibt 0,4825, x = 100 ergibt 0,4983, x = 1000 ergibt 0,4998. Abkürzung: gleicher Grad 2, also Vorzahlen 3/6 = ½.

**b)** (5x + 7)/(x² + 1)

1. Einsetzen: ∞/∞ ⇒ umformen.
2. Höchste Potenz ist x² (im Nenner). Jeden Summanden durch x² teilen: 5x/x² = 5/x, 7/x², x²/x² = 1, 1/x².
3. Ergebnis: (5/x + 7/x²)/(1 + 1/x²).
4. Oben wird alles winzig, unten bleibt 1. Also 0/1 = 0.

Probe: x = 10 ergibt 0,564, x = 100 ergibt 0,0507, x = 1000 ergibt 0,005. Abkürzung: Grad oben (1) kleiner als Grad unten (2) ⇒ 0.

### Übung 3

1. Einsetzen: 1/(2 − 2) = 1/0. Also Zahl/0 ⇒ Vorzeichen prüfen.
2. Von rechts (x etwas größer als 2): x − 2 ist winzig positiv. 1 durch winzig Positives ⇒ +∞.
3. Von links (x etwas kleiner als 2): x − 2 ist winzig negativ. 1 durch winzig Negatives ⇒ −∞.

| x | 1,9 | 1,99 | 1,999 | 2,001 | 2,01 | 2,1 |
|---|---|---|---|---|---|---|
| 1/(x − 2) | −10 | −100 | −1000 | 1000 | 100 | 10 |

4. Links −∞, rechts +∞: Die Brückenhälften treffen sich nicht. Der beidseitige Grenzwert existiert nicht. Bei x = 2 hat die Funktion eine Polstelle.

### Übung 4

1. Einsetzen: oben √4 − 2 = 2 − 2 = 0, unten 0. Also 0/0 ⇒ umformen.
2. Erweitern heißt: oben und unten mit demselben Ausdruck malnehmen. Hier mit (√(x + 4) + 2).
3. Oben mit der binomischen Formel (a − b)(a + b) = a² − b²: (√(x + 4) − 2)(√(x + 4) + 2) = (x + 4) − 4 = x.
4. Unten: x · (√(x + 4) + 2).
5. Zusammen: x/(x · (√(x + 4) + 2)). Das x kürzt sich weg: 1/(√(x + 4) + 2).
6. Neu einsetzen: 1/(√4 + 2) = 1/(2 + 2) = ¼.

Probe:

| x | −0,1 | −0,01 | 0,01 | 0,1 |
|---|---|---|---|---|
| f(x) | 0,25158 | 0,25016 | 0,24984 | 0,24846 |

Ergebnis: ¼ = 0,25.

### Übung 5

**a)** Einsetzen x = 2:

- Zähler: 2⁴ − 2 · 2³ − 7 · 2² + 20 · 2 − 12 = 16 − 16 − 28 + 40 − 12 = 0
- Nenner: 2⁴ − 6 · 2³ + 9 · 2² + 4 · 2 − 12 = 16 − 48 + 36 + 8 − 12 = 0

Also 0/0. Weil beide bei 2 null sind, steckt in beiden der Faktor (x − 2). Teile mit dem Horner-Schema durch (x − 2): Vorzahlen hinschreiben, die erste herunterholen, mal 2 nehmen, zur nächsten addieren, und so weiter.

Zähler, Vorzahlen 1, −2, −7, 20, −12:

| | 1 | −2 | −7 | 20 | −12 |
|---|---|---|---|---|---|
| + (vorige Zahl · 2) | | 2 | 0 | −14 | 12 |
| = | 1 | 0 | −7 | 6 | 0 |

Rest 0, also Zähler = (x − 2)(x³ − 7x + 6). Auch x³ − 7x + 6 ist bei 2 null (8 − 14 + 6 = 0). Noch einmal:

| | 1 | 0 | −7 | 6 |
|---|---|---|---|---|
| + (vorige Zahl · 2) | | 2 | 4 | −6 |
| = | 1 | 2 | −3 | 0 |

Also x³ − 7x + 6 = (x − 2)(x² + 2x − 3) = (x − 2)(x + 3)(x − 1).

Nenner, Vorzahlen 1, −6, 9, 4, −12:

| | 1 | −6 | 9 | 4 | −12 |
|---|---|---|---|---|---|
| + (vorige Zahl · 2) | | 2 | −8 | 2 | 12 |
| = | 1 | −4 | 1 | 6 | 0 |

Also Nenner = (x − 2)(x³ − 4x² + x + 6). Bei 2: 8 − 16 + 2 + 6 = 0. Noch einmal:

| | 1 | −4 | 1 | 6 |
|---|---|---|---|---|
| + (vorige Zahl · 2) | | 2 | −4 | −6 |
| = | 1 | −2 | −3 | 0 |

Also x³ − 4x² + x + 6 = (x − 2)(x² − 2x − 3) = (x − 2)(x − 3)(x + 1).

Zusammen:

- Zähler = (x − 2)²(x + 3)(x − 1)
- Nenner = (x − 2)²(x − 3)(x + 1)

Kürzen: (x − 2)² fällt weg. Übrig: (x + 3)(x − 1)/((x − 3)(x + 1)).

Neu einsetzen: (5 · 1)/((−1) · 3) = 5/(−3) = −5/3 ≈ −1,667.

Probe: x = 1,99 ergibt ≈ −1,636, x = 2,01 ergibt ≈ −1,698. Beide liegen um −1,667 herum.

**b)** (2x − 3)/(x − 1)

1. Einsetzen: oben 2 − 3 = −1, unten 0. Also Zahl/0 ⇒ Vorzeichen prüfen.
2. Von rechts: Nenner winzig positiv. −1 durch winzig Positives: ein Minus ⇒ −∞.
3. Von links: Nenner winzig negativ. −1 durch winzig Negatives: zwei Minus ⇒ +∞.

| x | 0,9 | 0,99 | 0,999 | 1,001 | 1,01 | 1,1 |
|---|---|---|---|---|---|---|
| f(x) | 12 | 102 | 1002 | −998 | −98 | −8 |

4. Links ≠ rechts ⇒ der Grenzwert existiert nicht (Polstelle bei 1).

**c)** √(x + 1) − √x

1. Einsetzen: ∞ − ∞. Das ist wie 0/0 unklar ⇒ umformen.
2. Erweitern: oben und unten mit (√(x + 1) + √x) malnehmen. Unten stand vorher stillschweigend 1.
3. Oben mit (a − b)(a + b) = a² − b²: (x + 1) − x = 1.
4. Ergebnis: 1/(√(x + 1) + √x).
5. Unten wird es riesig, oben bleibt 1. Also → 0.

| x | 1 | 100 | 10 000 | 1 000 000 |
|---|---|---|---|---|
| √(x + 1) − √x | 0,4142 | 0,0499 | 0,005 | 0,0005 |

Ergebnis: 0.

**d)** 1/x − 1/x²

1. Einsetzen: ∞ − ∞ ⇒ umformen.
2. Auf einen Bruch bringen, gemeinsamer Nenner x²: 1/x = x/x². Also x/x² − 1/x² = (x − 1)/x².
3. Einsetzen: oben 0 − 1 = −1, unten 0. Also Zahl/0 ⇒ Vorzeichen.
4. x² ist immer positiv, egal ob x von links oder rechts kommt. Also −1 durch winzig Positives ⇒ −∞, von beiden Seiten.

| x | −0,1 | −0,01 | 0,01 | 0,1 |
|---|---|---|---|---|
| f(x) | −110 | −10 100 | −9900 | −90 |

Ergebnis: −∞ (uneigentlicher Grenzwert, beide Seiten gleich).
