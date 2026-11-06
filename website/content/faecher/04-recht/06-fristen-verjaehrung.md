---
title: "Fristen und Verjährung"
order: 6
summary: "Fristen nach §§ 186–193 BGB Schritt für Schritt berechnen und verstehen, wann ein Anspruch verjährt: drei Jahre, Beginn am Jahresende, Hemmung und Neubeginn."
klausur: "relevant"
---

Recht hat ein Verfallsdatum. Eine Anfechtung muss innerhalb einer Frist erklärt werden. Eltern haben zwei Wochen, um auf eine Aufforderung nach § 108 II zu reagieren. Und ein Anspruch auf Zahlung verjährt irgendwann. Wann genau, ist reines Rechnen nach festen Regeln. Das Skript behandelt das nur kurz auf S. 28. Die Vorlesung dazu war vermutlich am 26.10.2026. Die Rechenregeln unten stammen aus dem Gesetz. Alle Wochentage sind mit Python nachgerechnet.

Ein Alltagsbeispiel: Ein Händler schreibt den Eltern eines 16-Jährigen, sie sollen den Kauf eines E-Bikes genehmigen. Der Brief kommt an einem Freitag an. Bis wann können die Eltern antworten? Nicht „bis Donnerstag in zwei Wochen“, sondern bis Freitag in zwei Wochen, 24 Uhr.

## Fristen berechnen, §§ 186–193

**Was ist das?** Eine **Frist** ist ein abgegrenzter, bestimmter oder bestimmbarer Zeitraum. Ein **Termin** ist ein bestimmter Zeitpunkt, an dem etwas geschehen soll oder eine Frist beginnt oder endet (S. 28). Die §§ 186 ff. gelten für Fristen in Gesetzen, Verträgen und Urteilen.

So rechnest du eine Frist in vier Schritten:

1. **Beginn klären.** Beginnt die Frist mit einem Ereignis im Lauf eines Tages (Zugang, Lieferung, Entdeckung), zählt dieser Tag nicht mit (§ 187 I). Ist der Beginn eines Tages maßgeblich („ab dem 1.“), zählt er mit (§ 187 II 1). Beim Lebensalter zählt der Geburtstag mit (§ 187 II 2).
2. **Ende bei Tagesfristen:** mit Ablauf des letzten Tages um 24 Uhr (§ 188 I).
3. **Ende bei Wochen-, Monats- und Jahresfristen:** mit Ablauf des Tages, der nach Name oder Zahl dem Ereignistag entspricht (§ 188 II). Gibt es diesen Tag im letzten Monat nicht, endet die Frist am letzten Tag des Monats (§ 188 III).
4. **Wochenende und Feiertag prüfen:** Ist eine Willenserklärung abzugeben oder eine Leistung zu bewirken und fällt der letzte Tag auf Samstag, Sonntag oder Feiertag, tritt der nächste Werktag an seine Stelle (§ 193).

> [!NOTE]
> **Beispiel: Zwei-Wochen-Frist nach § 108 II**
> Die Aufforderung geht am Donnerstag, 15.10.2026, zu.
> 1. Ereignis im Lauf des Tages: Der 15.10. zählt nicht (§ 187 I). Tag 1 ist Freitag, 16.10.
> 2. Zwei Wochen enden am gleichnamigen Wochentag (§ 188 II): Donnerstag, 29.10.2026.
> 3. Der 29.10.2026 ist ein Werktag. § 193 spielt keine Rolle.
> 4. Ergebnis: Die Eltern haben bis Donnerstag, 29.10.2026, 24 Uhr Zeit.

| Ereignis | Frist | Ende | Regel |
|---|---|---|---|
| Zugang Mo 26.10.2026 | 2 Wochen | Mo 09.11.2026, 24 Uhr | §§ 187 I, 188 II |
| Ereignis So 31.01.2027 | 1 Monat | 28.02.2027 ist ein Sonntag → Mo 01.03.2027 | §§ 188 III, 193 |
| Täuschung entdeckt Do 15.10.2026 | 1 Jahr (§ 124) | Fr 15.10.2027, 24 Uhr | §§ 187 I, 188 II |
| geboren am 26.10.2008 | 18 Jahre | volljährig ab Mo 26.10.2026, 0 Uhr | § 187 II 2 |

> [!IMPORTANT]
> **Das Wichtigste**
> Ereignistag zählt nicht (§ 187 I). Wochenfristen enden am gleichnamigen Wochentag (§ 188 II). Fällt das Ende auf ein Wochenende, gilt der nächste Werktag (§ 193).

> [!WARNING]
> **Achtung**
> „Zwei Wochen ab Zugang am Montag“ heißt nicht „bis Sonntag“. Die Frist endet am Montag zwei Wochen später um 24 Uhr. Und wer am 26.10. Geburtstag hat, ist an diesem Tag ab 0 Uhr volljährig, nicht erst abends.

## Verjährung, §§ 194 ff.

**Was ist das?** Der verjährte Anspruch erlischt nicht. Er besteht weiter. Der Schuldner ist aber berechtigt, die Leistung zu verweigern (§ 214 I). Verjährung ist eine Einrede (S. 28).

- **Was verjährt?** Nur Ansprüche (§ 194 I). Gestaltungsrechte wie Anfechtung oder Rücktritt haben eigene Fristen.
- **Regelmäßige Frist:** 3 Jahre (§ 195).
- **Beginn (§ 199 I):** mit dem Schluss des Jahres, in dem der Anspruch entstanden ist und der Gläubiger von den Umständen und der Person des Schuldners Kenntnis erlangt hat oder ohne grobe Fahrlässigkeit hätte erlangen müssen.

So rechnest du die regelmäßige Verjährung:

1. Entstehung und Kenntnis feststellen: Kaufpreisanspruch entsteht am 30.10.2026, der Verkäufer kennt den Käufer.
2. Fristbeginn ist der Schluss dieses Jahres: 31.12.2026, 24 Uhr.
3. Drei Jahre dazurechnen (§ 195): Ablauf am 31.12.2029.
4. Ergebnis: Der Anspruch verjährt mit Ablauf von Montag, 31.12.2029.

| Anspruch | Frist | Beginn |
|---|---|---|
| Regelfall, z. B. Kaufpreis, Werklohn, Miete | 3 Jahre, § 195 | Jahresende nach Entstehung und Kenntnis, § 199 I |
| Mängel bei gekaufter Sache | meist 2 Jahre, § 438 I Nr. 3 | Ablieferung, § 438 II |
| Mängel beim Werkvertrag | 2 bzw. 5 Jahre, § 634a | Abnahme |
| Ersatzansprüche des Vermieters | 6 Monate, § 548 | Rückgabe der Mietsache |
| Mängel digitaler Produkte | 2 Jahre, § 327j | Bereitstellung |
| Rechte an Grundstücken | 10 Jahre, § 196 | Entstehung, § 200 |
| Herausgabe aus Eigentum, Ansprüche aus Urteil | 30 Jahre, § 197 | Entstehung bzw. Rechtskraft |

> [!IMPORTANT]
> **Das Wichtigste**
> Drei Jahre, Beginn am Jahresende (Ultimoverjährung). Ob der Anspruch im März oder Oktober 2026 entsteht, er verjährt mit Ablauf des 31.12.2029.

> [!WARNING]
> **Achtung**
> Ein Tag Unterschied kann ein Jahr ausmachen. Ein Anspruch vom 31.12.2025 verjährt Ende 2028, einer vom 01.01.2026 erst Ende 2029. Und Mängelansprüche nach § 438 beginnen mit der Ablieferung, nicht am Jahresende.

## Hemmung und Neubeginn

**Was ist das?** Das Gesetz kann die Verjährungsuhr anhalten oder neu starten. Das Skript nennt diese Regeln nur kurz. Die Details sind Ergänzung aus dem Gesetz.

- **Hemmung (§ 209):** Die Uhr wird angehalten. Die Zeit der Hemmung zählt nicht. Beispiele: Die Parteien verhandeln (§ 203; Verjährung frühestens drei Monate nach Ende der Verhandlungen), Klage oder Mahnbescheid (§ 204).
- **Neubeginn (§ 212):** Die Uhr wird auf null gestellt. Beispiel: Der Schuldner erkennt den Anspruch an, etwa durch eine Abschlagszahlung (§ 212 I Nr. 1).

> [!IMPORTANT]
> **Das Wichtigste**
> Hemmung = Pause. Neubeginn = Neustart. Wer trotz Verjährung zahlt, kann das Geld nicht zurückverlangen (§ 214 II).

> [!WARNING]
> **Achtung**
> Das Gericht prüft die Verjährung nicht von selbst. Der Schuldner muss sie erheben (Einrede). Schreib in der Klausur also: „S kann die Einrede der Verjährung erheben (§ 214 I).“

## Übungen

> [!TIP]
> **Übung 1 · leicht**
> Ein Händler fordert die Eltern eines 16-Jährigen schriftlich zur Genehmigung auf. Der Brief geht am Freitag, 30.10.2026, zu. Bis wann können die Eltern genehmigen?
> Quelle: eigene Aufgabe

> [!TIP]
> **Übung 2 · mittel**
> Ein Ereignis tritt am Samstag, 31.10.2026, ein. Die Frist beträgt einen Monat. Wann endet sie?
> Quelle: eigene Aufgabe

> [!TIP]
> **Übung 3 · mittel**
> Eine vertragliche Zahlungsfrist endet rechnerisch am Samstag, 12.12.2026. Bis wann muss gezahlt werden?
> Quelle: eigene Aufgabe

> [!TIP]
> **Übung 4 · leicht**
> Lena ist am 14.12.2008 geboren. Ab wann ist sie voll geschäftsfähig?
> Quelle: eigene Aufgabe

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> Ein mangelhaftes Fahrrad wird am Freitag, 30.10.2026, abgeliefert. Am selben Tag entsteht der Kaufpreisanspruch des Händlers. Wann verjähren a) der Kaufpreisanspruch und b) die Mängelansprüche des Käufers? Warum enden sie nicht am selben Tag?
> Quelle: eigene Aufgabe

> [!TIP]
> **Übung 6 · mittel**
> a) Gläubiger und Schuldner verhandeln drei Monate über eine Ratenzahlung. b) Der Schuldner zahlt eine Abschlagsrate. Was passiert jeweils mit der Verjährung?
> Quelle: eigene Aufgabe

## Lösungen

### Übung 1

*Eigene Lösung.*

1. Ereignisfrist: Der Zugang am 30.10. zählt nicht (§ 187 I).
2. Zwei Wochen enden am gleichnamigen Wochentag (§ 188 II): Freitag, 13.11.2026.
3. Der 13.11.2026 ist ein Werktag.
4. Ergebnis: bis Freitag, 13.11.2026, 24 Uhr. Danach gilt die Genehmigung als verweigert (§ 108 II 2).

### Übung 2

*Eigene Lösung.*

1. Ereignisfrist, der 31.10. zählt nicht (§ 187 I).
2. Ende am Tag mit derselben Zahl im Folgemonat (§ 188 II). Einen 31.11. gibt es nicht.
3. Nach § 188 III endet die Frist am letzten Tag des Monats: Montag, 30.11.2026.
4. Das ist ein Werktag, § 193 spielt keine Rolle. Ergebnis: Ende am 30.11.2026, 24 Uhr.

### Übung 3

*Eigene Lösung.*

1. Es ist eine Leistung zu bewirken.
2. Der letzte Tag ist ein Samstag.
3. Nach § 193 tritt der nächste Werktag an seine Stelle.
4. Ergebnis: Montag, 14.12.2026.

### Übung 4

*Eigene Lösung.*

1. Beim Lebensalter zählt der Geburtstag mit (§ 187 II 2).
2. Das 18. Lebensjahr endet mit Ablauf des 13.12.2026.
3. Ergebnis: Lena ist ab Montag, 14.12.2026, 0 Uhr volljährig und voll geschäftsfähig (§ 2).

### Übung 5

*Eigene Lösung.*

**a) Kaufpreisanspruch**

1. Regelmäßige Verjährung: 3 Jahre (§ 195).
2. Beginn mit dem Schluss des Jahres 2026 (§ 199 I).
3. Ergebnis: Verjährung mit Ablauf von Montag, 31.12.2029.

**b) Mängelansprüche**

1. Frist: 2 Jahre (§ 438 I Nr. 3).
2. Beginn: mit der Ablieferung (§ 438 II). Das ist ein Ereignis, der 30.10. zählt nicht (§ 187 I).
3. Ende am gleichen Datum zwei Jahre später (§ 188 II): Montag, 30.10.2028.

**Warum verschieden?** Das Jahresende gilt nur für die regelmäßige Verjährung nach § 199 I. § 438 II legt einen eigenen Beginn fest.

### Übung 6

*Eigene Lösung.*

a) Hemmung (§ 203). Die drei Monate zählen nicht mit. Die Verjährung tritt frühestens drei Monate nach Ende der Verhandlungen ein.
b) Neubeginn (§ 212 I Nr. 1). Die Abschlagszahlung ist ein Anerkenntnis. Die Frist beginnt neu.
