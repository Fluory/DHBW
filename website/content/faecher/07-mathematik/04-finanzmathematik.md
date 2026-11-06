---
title: "Anwendung: Finanzmathematik"
order: 4
summary: "Zinseszins als geometrische Folge, der Sparplan als endliche geometrische Reihe, die Endwertformel und die ewige Rente."
klausur: "relevant"
---

„Die geometrische Reihe ist die Grundlage der Finanzmathematik“ (Folie 04.11.). Hier siehst du, warum. Zinseszins ist eine geometrische Folge. Ein Sparplan ist eine endliche geometrische Reihe.

Ein Alltagsbeispiel: Du zahlst drei Jahre lang am Jahresende je 100 € auf ein Sparkonto mit 5 % Zinsen. Am Ende hast du nicht 300 €, sondern 315,25 €. Woher die 15,25 € kommen und wie man das für 10 oder 60 Einzahlungen schnell rechnet, zeigt dieses Kapitel.

## Zinseszins

### Was ist das?

Du zahlst im Jahr 0 einmal den Betrag r ein, Zinssatz i pro Jahr. So stand es an der Tafel:

| Jahr | Kontostand | mit r = 1000 €, i = 5 % |
|---|---|---|
| 0 | r | 1000,00 € |
| 1 | (1 + i) · r | 1050,00 € |
| 2 | (1 + i)² · r | 1102,50 € |
| 3 | (1 + i)³ · r | 1157,63 € |
| n | (1 + i)ⁿ · r | n = 10: 1628,89 € |

Das ist eine geometrische Folge mit q = 1 + i. Im zweiten Jahr gibt es auch Zinsen auf die Zinsen des ersten Jahres (2,50 € extra). Darum heißt es Zinseszins.

> [!IMPORTANT]
> **Das Wichtigste**
> Kₙ = r · (1 + i)ⁿ. Jedes Jahr wird mit demselben Faktor 1 + i malgenommen.

> [!WARNING]
> **Achtung**
> Den Zinssatz immer als Dezimalzahl einsetzen: 5 % = 0,05, nicht 5 und nicht 0,5.

## Sparplan: jedes Jahr r einzahlen

### Was ist das?

Jetzt zahlst du jedes Jahr denselben Betrag r ein, insgesamt n Mal, jeweils am Jahresende. Jede Einzahlung wird unterschiedlich lange verzinst. Die Herleitung von der Tafel:

1. Endwert = Summe aller einzeln verzinsten Einzahlungen. Die letzte hat 0 Jahre Zinsen, die erste n − 1 Jahre: Eₙ = r + r(1 + i) + r(1 + i)² + … + r(1 + i)ⁿ⁻¹.
2. r vor die Summe ziehen: Eₙ = r · Σₖ₌₀ⁿ⁻¹ (1 + i)ᵏ.
3. Erkennen: endliche geometrische Reihe mit q = 1 + i und n Summanden. Ihre Summe ist (qⁿ − 1)/(q − 1).
4. q = 1 + i einsetzen. Der Nenner wird (1 + i) − 1 = i.

**Endwert eines Sparplans: Eₙ = r · ((1 + i)ⁿ − 1)/i**

### Die Formel anwenden

Durchgerechnet für r = 100 €, i = 5 %, n = 3:

1. Werte als Dezimalzahl: r = 100, i = 0,05, n = 3.
2. (1 + i)ⁿ = 1,05³ = 1,157625.
3. Minus 1: 0,157625.
4. Geteilt durch i: 0,157625 : 0,05 = 3,1525.
5. Mal r: 100 · 3,1525 = 315,25 €.

Probe zu Fuß: 100 · 1,05² + 100 · 1,05 + 100 = 110,25 + 105 + 100 = 315,25 €. Eingezahlt sind 300 €, die Zinsen 15,25 €.

Das Beispiel von der Folie: r = 100 € pro Monat, i = 0,25 % pro Monat, n = 60 Monate. E₆₀ = 100 · (1,0025⁶⁰ − 1)/0,0025 ≈ 6464,67 €. Die Folie rundet auf 6460 €. Eingezahlt sind 6000 €.

> [!IMPORTANT]
> **Das Wichtigste**
> Sparplan = endliche geometrische Reihe mit q = 1 + i. Zins und Laufzeit müssen zur selben Periode passen, etwa beides in Monaten.

> [!WARNING]
> **Achtung**
> Beim Sparplan ist q = 1 + i größer als 1. Darum gilt nur die endliche Formel. Die unendliche Formel erstes Glied/(1 − q) gilt nur für |q| < 1. Die Formel gibt den Stand direkt nach der n-ten Einzahlung an.

## Rate berechnen und ewige Rente

### Was ist das?

Ist das Ziel bekannt und die Rate gesucht, stellt man die Formel nach r um (Ergänzung, nicht auf den Folien): r = Eₙ · i/((1 + i)ⁿ − 1).

**Ewige Rente** (Folie „Sparplan und Rentenrechnung“): Wie viel ist es heute wert, ab nächstem Jahr für immer jedes Jahr r zu bekommen? Geld in der Zukunft ist heute weniger wert: 100 € in einem Jahr entsprechen heute 100/1,05 ≈ 95,24 €. Das heißt **abzinsen**.

1. Barwert = 100/1,05 + 100/1,05² + … = Σₖ₌₁^∞ 100 · (1/1,05)ᵏ.
2. q = 1/1,05 ≈ 0,952 < 1, erstes Glied 100/1,05.
3. Wert = (100/1,05)/(1 − 1/1,05) = (100/1,05)/(0,05/1,05) = 100/0,05 = 2000 €.

Allgemein: **Barwert der ewigen Rente = r/i.** Folienbeispiel: r = 1000 € pro Jahr, i = 4 %: 1000/0,04 = 25 000 €.

> [!IMPORTANT]
> **Das Wichtigste**
> Abzinsen: q = 1/(1 + i) < 1, darum darf man hier die unendliche Formel benutzen. Probe: 2000 € zu 5 % bringen jedes Jahr genau 100 € Zinsen.

> [!WARNING]
> **Achtung**
> Nicht verwechseln: Aufzinsen (Sparplan, q = 1 + i > 1) und Abzinsen (Barwert, q = 1/(1 + i) < 1).

## Übungen

> [!TIP]
> **Übung 1 · leicht**
> Du legst 1000 € zu 5 % pro Jahr an. Wie viel ist es nach 1, 2 und 3 Jahren, und wie viel nach 10 Jahren?
>
> Quelle: eigene Aufgabe, wie Tafel 04.11.

> [!TIP]
> **Übung 2 · mittel**
> Jährlich 1200 € am Jahresende, 3 % Zinsen, 10 Jahre. a) Endwert? b) Wie viel davon sind Zinsen?
>
> Quelle: eigene Aufgabe

> [!TIP]
> **Übung 3 · mittel**
> Eine Stiftung soll für immer jedes Jahr 600 € auszahlen (erste Zahlung in einem Jahr), Zins 4 %. Wie viel Kapital braucht sie heute?
>
> Quelle: eigene Aufgabe, wie Folie „Sparplan und Rentenrechnung“

> [!TIP]
> **Übung 4 · Prüfungsniveau**
> Zinssatz 4 %, Laufzeit 10 Jahre. Option A: heute einmalig 5000 € anlegen. Option B: 10 Jahre lang am Jahresende je 500 € einzahlen. a) Berechne beide Endwerte. b) Beide Male werden 5000 € eingezahlt. Erkläre den Unterschied.
>
> Quelle: eigene Aufgabe, Klausurstil

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> r = 200 € jährlich am Jahresende, i = 10 %, n = 4. a) Schreibe den Endwert als Summe der vier verzinsten Einzahlungen und rechne aus. b) Schreibe die Summe mit Σ, ziehe r heraus und nenne q. c) Prüfe mit der Formel Eₙ = r · ((1 + i)ⁿ − 1)/i.
>
> Quelle: eigene Aufgabe, wie Tafel 04.11.

## Lösungen

### Übung 1

Formel r · (1 + i)ⁿ mit i = 0,05:

- 1 Jahr: 1000 · 1,05 = 1050,00 €.
- 2 Jahre: 1000 · 1,1025 = 1102,50 €.
- 3 Jahre: 1000 · 1,157625 = 1157,63 €.
- 10 Jahre: 1000 · 1,628895 = 1628,89 €. Ohne Zinseszins wären es nur 1500 €.

### Übung 2

a) 1,03¹⁰ ≈ 1,343916. E₁₀ = 1200 · (1,343916 − 1)/0,03 = 1200 · 11,46388 ≈ 13 756,66 €.

b) Eingezahlt: 10 · 1200 = 12 000 €. Zinsen: 1756,66 €.

### Übung 3

1. Barwert = Σₖ₌₁^∞ 600/1,04ᵏ, geometrisch mit q = 1/1,04 ≈ 0,9615 < 1.
2. Wert = r/i = 600/0,04 = 15 000 €.
3. Probe: 4 % von 15 000 € sind genau 600 € pro Jahr.

### Übung 4

a) A: 5000 · 1,04¹⁰ = 5000 · 1,480244 ≈ 7401,22 €. B: 500 · (1,04¹⁰ − 1)/0,04 = 500 · 12,00611 ≈ 6003,05 €.

b) Bei A liegt das ganze Geld alle 10 Jahre auf dem Konto. Bei B wird die erste Rate 9 Jahre verzinst, die letzte gar nicht. Im Schnitt liegt das Geld kürzer da. Darum gibt es weniger Zinsen: 1003,05 € statt 2401,22 €.

### Übung 5

a) Letzte Einzahlung 0 Jahre: 200. Dritte 1 Jahr: 220. Zweite 2 Jahre: 200 · 1,21 = 242. Erste 3 Jahre: 200 · 1,331 = 266,20. Summe: 928,20 €.

b) E₄ = Σₖ₌₀³ 200 · 1,1ᵏ = 200 · Σₖ₌₀³ 1,1ᵏ. Endliche geometrische Reihe mit q = 1 + i = 1,1.

c) 200 · (1,1⁴ − 1)/0,1 = 200 · (1,4641 − 1)/0,1 = 200 · 4,641 = 928,20 €. Stimmt.
