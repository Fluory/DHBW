## Was heißt lim (x → a)?

lim (x → a) f(x) = g heißt: x rückt immer näher an a heran (wird nie genau a), und f(x) kommt dabei der Zahl g immer näher. g ist der **Grenzwert**.

Was **bei** x = a passiert, ist egal. Es zählt nur die Nähe.

(x² − 4)/(x − 2) bei a = 2:

| x | 1,9 | 1,99 | 2,01 | 2,1 |
|---|---|---|---|---|
| f(x) | 3,9 | 3,99 | 4,01 | 4,1 |

→ Grenzwert **4**, obwohl f(2) nicht definiert ist.

Folie: lim (x → x̂) f(x) = y heißt, für jede Folge xₙ → x̂ gilt f(xₙ) → y → auf Deutsch: „Jede Zahlenreihe, die auf x̂ zuläuft, eingesetzt in f, läuft auf dasselbe y zu.“

## Einseitig

- x → 0⁺ (Folie auch x ↓ 0): von rechts, Zahlen größer als 0.
- x → 0⁻ (Folie auch x ↑ 0): von links, Zahlen kleiner als 0.

| x | −0,01 | −0,001 | 0,001 | 0,01 |
|---|---|---|---|---|
| 1/x | −100 | −1000 | 1000 | 100 |

lim (x → 0⁺) 1/x = +∞, lim (x → 0⁻) 1/x = −∞ → lim (x → 0) 1/x **existiert nicht**.

Beidseitiger Grenzwert existiert ⇔ linker und rechter existieren und sind gleich.

## Drei mögliche Ergebnisse

| Ergebnis | heißt | Beispiel |
|---|---|---|
| konvergent | Werte kommen einer festen Zahl nah | (x² − 4)/(x − 2), x → 2: 4 |
| uneigentlich | Werte → +∞ oder −∞ | 1/x, x → 0⁺: +∞ |
| existiert nicht | schwingt oder links ≠ rechts | sin(1/x), x → 0 |

## Die Taktik

1. a einsetzen.
2. Normale Zahl? Fertig.
3. Zahl/0? Vorzeichen prüfen, links und rechts.
4. 0/0? Faktorisieren, kürzen, neu einsetzen.
5. ∞/∞ (x → ∞)? Durch die höchste Potenz teilen.
6. Probe mit Zahlen nahe dran (1,99 und 2,01).

Faktorisieren: a² − b² = (a − b)(a + b), z. B. x² − 9 = (x − 3)(x + 3). Ist p(a) = 0, steckt (x − a) in p(x), Rest per Polynomdivision.

## 0/0: faktorisieren und kürzen

lim (x → 2) (x² − 4)/(x − 2):

1. Einsetzen: 0/0.
2. x² − 4 = (x − 2)(x + 2).
3. (x − 2) kürzen (erlaubt, x ist nie genau 2).
4. x + 2 → 2 + 2 = **4**.

## Standard-Grenzwert

lim (x → 0) sin(x)/x = **1**. Merken, kürzen geht nicht.

| x | 1 | 0,1 | 0,01 |
|---|---|---|---|
| sin(x)/x | 0,8415 | 0,9983 | 0,99998 |

Taschenrechner auf Bogenmaß (RAD).

## ∞/∞: höchste Potenz

lim (x → ∞) (2x² + 3x − 1)/(x² + 5):

1. Höchste Potenz x².
2. Jeden Summanden teilen: (2 + 3/x − 1/x²)/(1 + 5/x²).
3. 3/x, 1/x², 5/x² → 0.
4. 2/1 = **2**. Probe x = 1000: 2,003.

Gleicher Grad → Verhältnis der Vorzahlen. Unten höherer Grad → 0.

## Zahl/0: Vorzeichen

1. Nur auf die Vorzeichen schauen.
2. Zähler positiv, Nenner winzig positiv → +∞.
3. Genau ein Minus → −∞.
4. Zwei Minus → +∞.
5. Ohne ⁺ oder ⁻: beide Seiten. Verschieden → existiert nicht.

## Existiert nicht

sin(1/x) für x → 0: 1/x wird riesig, der Sinus schwingt immer schneller zwischen 1 und −1.

| x | 2/π | 2/(3π) | 2/(5π) | 2/(7π) |
|---|---|---|---|---|
| sin(1/x) | 1 | −1 | 1 | −1 |

## Typische Fehler

- „f(a) nicht definiert, also kein Grenzwert.“ Falsch.
- Nur von rechts getestet und „+∞“ geschrieben.
- „0/0 ist 0“ oder „0/0 ist 1“. 0/0 heißt nur: umformen.
- Beim Teilen durch die höchste Potenz einen Summanden vergessen.
- sin(x)/x (→ 1) mit sin(1/x) (existiert nicht) verwechselt.
- Taschenrechner in Grad statt Bogenmaß.
