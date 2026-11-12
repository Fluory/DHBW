## Zwei Wörter

- **Zinssatz i:** Prozent pro Periode als Dezimalzahl. 5 % = 0,05.
- **Zinsfaktor q = 1 + i:** damit wird der Kontostand jede Periode malgenommen. 5 % → 1,05.

## Die Formeln

| Was | Formel | Folge/Reihe |
|---|---|---|
| Zinseszins (einmal anlegen) | Kₙ = r · (1 + i)ⁿ | geometrische Folge, q = 1 + i |
| Sparplan (Endwert) | Eₙ = r · ((1 + i)ⁿ − 1)/i | endliche geometrische Reihe |
| Rate für ein Ziel | r = Eₙ · i/((1 + i)ⁿ − 1) | Endwertformel umgestellt |
| Ewige Rente (Barwert) | Barwert = r/i | unendliche Reihe, q = 1/(1 + i) |

heißt: Kₙ Kontostand nach n Jahren, r Startbetrag bzw. Rate pro Periode, n Anzahl Perioden bzw. Einzahlungen, Eₙ Kontostand direkt nach der n-ten Einzahlung (am Periodenende), Barwert = was Zahlungen **heute** wert sind.

## Zinseszins

1000 € zu 5 %, 10 Jahre:

1. i = 0,05.
2. q = 1,05.
3. 1,05¹⁰ ≈ 1,628895.
4. 1000 · 1,628895 ≈ **1628,89 €** (ohne Zinseszins nur 1500 €).

Folie: r, (1 + i) · r, (1 + i)² · r, … → auf Deutsch: geometrische Folge, jedes Glied ist das vorige mal 1 + i.

## Sparplan

3 Jahre je 100 € am Jahresende, 5 %:

| Einzahlung | verzinst | Wert am Ende |
|---|---|---|
| 1. | 2 Jahre | 100 · 1,05² = 110,25 € |
| 2. | 1 Jahr | 105,00 € |
| 3. | 0 Jahre | 100,00 € |
| Summe | | **315,25 €** |

Mit Formel:

1. 1,05³ = 1,157625.
2. Minus 1: 0,157625.
3. Durch i: 3,1525.
4. Mal r: **315,25 €**.

Folie: Eₙ = r · Σₖ₌₀ⁿ⁻¹ (1 + i)ᵏ → auf Deutsch: „Alle Einzahlungen mit ihren Zinsen addieren, die letzte hat 0 Jahre Zinsen, die erste n − 1.“ Mit Σₖ₌₀ⁿ⁻¹ qᵏ = (qⁿ − 1)/(q − 1) und q − 1 = i folgt die Endwertformel.

Folienbeispiel: 100 € pro Monat, 0,25 % pro Monat, 60 Monate:
1,0025⁶⁰ ≈ 1,161617 → 0,161617 : 0,0025 ≈ 64,6467 → **≈ 6464,67 €** (Folie: rund 6460 €). Eingezahlt 6000 €.

## Rate berechnen

Ziel 10 000 €, 10 Jahre, 5 %:

1. 1,05¹⁰ − 1 ≈ 0,628895.
2. 10 000 · 0,05 = 500.
3. 500 : 0,628895 ≈ **795,05 €** pro Jahr.

## Ewige Rente

Bild: Geld anlegen, nur die Zinsen abheben, Kontostand bleibt gleich.

- 100 € pro Jahr, 5 %: 100/0,05 = **2000 €**.
- 1000 € pro Jahr, 4 %: 1000/0,04 = **25 000 €**. Probe: 4 % von 25 000 = 1000.

**Abzinsen:** 100 € in einem Jahr sind heute 100/1,05 ≈ 95,24 €.

Folie: Barwert = Σₖ₌₁^∞ r · (1/(1 + i))ᵏ → auf Deutsch: „Jede Zahlung in k Jahren k-mal durch 1 + i teilen, alles addieren.“

1. q = 1/1,05 ≈ 0,952 < 1, unendliche Formel erlaubt.
2. Erstes Glied: 100/1,05.
3. Nenner: 1 − 1/1,05 = 0,05/1,05.
4. (100/1,05) : (0,05/1,05) = 100/0,05 = **2000 €**.

## Aufzinsen oder Abzinsen?

| | Sparplan | Barwert |
|---|---|---|
| Richtung | Geld wächst in die Zukunft | Zukunftsgeld auf heute |
| Faktor | q = 1 + i > 1 | q = 1/(1 + i) < 1 |
| Formel | nur endlich | unendlich erlaubt |

## Typische Fehler

- 5 % als 5 oder 0,5 eingesetzt statt 0,05.
- Mit 0,05 malgenommen statt mit 1,05.
- Beim Sparplan „erstes Glied/(1 − q)“ benutzt. Geht nicht, q > 1.
- Zins pro Jahr mit Laufzeit in Monaten gemischt.
- Rate = Ziel durch Jahre (10 000/10 = 1000 €). Vergisst die Zinsen.
- Aufzinsen und Abzinsen verwechselt.
