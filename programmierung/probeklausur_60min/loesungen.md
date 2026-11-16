# Lösungen: Probeklausur Grundlagen der Programmierung (60 Minuten)

*Jede Ausgabe und jeder Fehler wurde mit Python 3.13 ausgeführt und geprüft.*

**Bewertung (Beispiel):** ab 30 Punkten bestanden, ab 54 sehr gut.

---

## Aufgabe 1 · Multiple Choice (10 P)

| Frage | Antwort | Warum |
|---|---|---|
| 1.1 | **b** | `uv run` startet ein Programm im Projekt. |
| 1.2 | **b** | ruff ist der **Linter**: Stil und typische Fehler. |
| 1.3 | **a** | ty prüft die **Typangaben**. |
| 1.4 | **b** | `from modul import funktion`, ohne `.py`. |
| 1.5 | **b** | Beim `import` ist `__name__` der Modulname, also läuft der Code darunter dann nicht. |
| 1.6 | **c** | Die Indizes gehen von 0 bis 2, Index 3 gibt es nicht. |
| 1.7 | **b** | Ohne `return` liefert eine Funktion `None`. |
| 1.8 | **d** | `a` hat keinen Standardwert und muss übergeben werden: `TypeError`. |
| 1.9 | **b** | Zwei Strings werden aneinandergehängt: `"34"`. |
| 1.10 | **c** | pytest findet Funktionen, die mit `test_` beginnen. |

---

## Aufgabe 2 · Ausgaben (10 P)

**2a** `7 3 5`
- Nach `append` ist die Liste `[4, 7, 1, 9, 3]`.
- `[1]` ist das zweite Element, also `7`. `[-1]` ist das letzte, also `3`. Die Länge ist `5`.

**2b** `9`
- `range(1, 6, 2)` liefert 1, 3, 5. Die Summe ist 1 + 3 + 5 = 9.

| Runde | i | summe danach |
|---|---|---|
| 1 | 1 | 1 |
| 2 | 3 | 4 |
| 3 | 5 | 9 |

**2c** `[2, 4, 6]`
- Die Funktion **verändert die Liste selbst**, weil `werte` und `liste` dieselbe Liste sind. Deshalb ist die Änderung auch außerhalb der Funktion sichtbar.

**2d**
```
Hallo, Ben!
Moin, Ben!
Hi, Lea!
```
- Ohne zweites Argument gilt der Standardwert `"Hallo"`. Bei Schlüsselwort-Argumenten ist die Reihenfolge egal.

**2e** `K e aff`
- `[0]` ist das erste Zeichen, also `K`.
- `[-2]` ist das vorletzte Zeichen, also `e`.
- `[1:4]` sind die Zeichen 1, 2 und 3 (ohne 4), also `aff`.

---

## Aufgabe 3 · Fehler finden (8 P)

| Zeile | Art | Fehler | Korrektur |
|---|---|---|---|
| **1** | Syntax | Doppelpunkt fehlt am Ende von `def` | `def durchschnitt(noten: list[float]) -> float:` |
| **18** | Syntax | Klammer von `print(` wird nicht geschlossen | `print("Beste Note:", beste_note(noten))` |
| **17** | Laufzeit | `str + float` → `TypeError: can only concatenate str (not "float") to str` | `print("Durchschnitt:", durchschnitt(noten))` oder `"Durchschnitt: " + str(durchschnitt(noten))` |
| **11** | Logik | `>` sucht die **größte** Zahl, also die **schlechteste** Note. Das Programm gibt 3.7 aus statt 1.3. | `if note < beste:` |

Nach allen Korrekturen gibt das Programm aus:
```
Durchschnitt: 2.3333333333333335
Beste Note: 1.3
```

**So unterscheidest du die drei Fehlerarten:**
- **Syntaxfehler:** Python startet gar nicht erst, weil ein Doppelpunkt, eine Klammer oder ein Anführungszeichen fehlt.
- **Laufzeitfehler:** Das Programm startet, stürzt aber an einer Stelle ab, zum Beispiel mit `TypeError`, `IndexError` oder `ZeroDivisionError`.
- **Logikfehler:** Es gibt keinen Absturz, aber ein **falsches Ergebnis**.

---

## Aufgabe 4 · Kontrollstrukturen (8 P)

**4a**
- 95 → `"sehr gut"`
- 90 → `"sehr gut"`, denn 90 >= 90 ist wahr
- 69 → `"bestanden"`
- 0 → `"nicht bestanden"`

**4b** Mit `>` statt `>=`:
- 90 → `"gut"`, weil 90 > 90 falsch ist und erst 90 > 70 greift
- 70 → `"bestanden"`
- 50 → `"nicht bestanden"`

Die Grenzwerte rutschen also jeweils eine Stufe nach unten.

**4c** `22`

| zahl | Vergleich mit 5 | anzahl danach |
|---|---|---|
| 3 | kleiner, nichts passiert | 0 |
| 8 | größer, +1 | 1 |
| 5 | gleich, +10 | 11 |
| 10 | größer, +1 | 12 |
| 5 | gleich, +10 | 22 |

**4d**
- Mit Grenze 8 kommt `11` heraus: nur 10 ist größer (+1), und 8 ist gleich (+10).
- `zaehle([], 5)` liefert `0`, weil die Schleife bei einer leeren Liste gar nicht läuft.

---

## Aufgabe 5 · Funktionen schreiben (10 P)

**5a** (4 P)
```python
def groesster_wert(werte: list[float]) -> float:
    groesster = werte[0]          # mit dem ersten Wert starten
    for wert in werte:
        if wert > groesster:
            groesster = wert
    return groesster              # nach der Schleife!
```

Punkte:
- 1 P für die Kopfzeile mit Typangaben
- 1 P für den Startwert `werte[0]`
- 1 P für Schleife und Vergleich
- 1 P für `return` nach der Schleife

**Achtung:** Startest du mit `groesster = 0`, ist das bei `[-5, -2, -8]` falsch, denn dann kommt 0 statt −2 heraus.

**5b** (6 P)
```python
def fahrpreis(alter: int, km: float) -> float:
    if alter < 6:
        return 0.0
    preis = 2.0 + 0.30 * km
    if alter < 18:
        preis = preis / 2
    elif alter >= 65:
        preis = preis * 0.8
    return round(preis, 2)
```

Kontrolle:
- `fahrpreis(30, 10)` = 2 + 3 = **5.0**
- `fahrpreis(10, 10)` = 5 / 2 = **2.5**
- `fahrpreis(4, 10)` = **0.0**
- `fahrpreis(70, 10)` = 5 · 0,8 = **4.0**

Punkte:
- 1 P für die Kopfzeile
- 1 P für den Fall „unter 6“
- 1 P für den Grundpreis
- 1 P für die Hälfte bei unter 18
- 1 P für die 20 % bei 65 und älter
- 1 P für das Runden und `return`

**Achtung:** Die Reihenfolge ist wichtig. Prüfst du „unter 18“ **vor** „unter 6“, zahlt ein 4-Jähriger den halben Preis statt nichts.

---

## Aufgabe 6 · Lücken (8 P)

| Lücke | Lösung |
|---|---|
| (1) | `[]` |
| (2) | `in` |
| (3) | `<=` (4.0 ist noch bestanden) |
| (4) | `append` |
| (5) | `return` |
| (6) | `__init__` |
| (7) | `self` |
| (8) | `+=` |

**Typischer Fehler:** Bei (3) `<` statt `<=` schreiben. Dann fällt die 4.0 heraus.

---

## Aufgabe 7 · Syntaktisch falsch (4 P)

| Nr | Ergebnis | Grund |
|---|---|---|
| a | **falsch** | Ein Vergleich braucht `==`. Ein `=` ist eine Zuweisung. |
| b | **falsch** | Nach `range(10)` fehlt der Doppelpunkt. |
| c | richtig | Syntaktisch ok. Ob `name` existiert, merkt Python erst zur Laufzeit. |
| d | richtig | |
| e | **falsch** | Die eckige Klammer wird nicht geschlossen. |
| f | richtig | |
| g | **falsch** | In Python heißt es `elif`, nicht `else if`. |
| h | richtig | Mit `str()` umgewandelt, deshalb klappt das `+`. |

---

## Aufgabe 8 · Klassen (2 P)

```
Bello sagt Wuff
Mia sagt Miau
Nemo sagt ...
3 3
```

- `vorstellen()` steht nur in `Tier`, ruft aber `self.laut()` auf. Welches `laut()` dabei läuft, hängt vom **Objekt** ab. Das ist **Polymorphie**.
- `Katze` ruft mit `super().__init__(name)` den Konstruktor von `Tier` auf und speichert zusätzlich `alter`.
- `len(tiere)` ist 3, und `tiere[1]` ist die Katze mit dem Alter 3.
