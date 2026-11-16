# Probeklausur Grundlagen der Programmierung (60 Minuten)

*Eigene Übungsklausur nach den Hinweisen aus der Vorlesung (Aufbau: Grundlagen/Multiple Choice, Ausgabe vorhersagen,
Fehler finden, Kontrollstrukturen, Code schreiben, Lückentext, Syntaxfehler). Keine offizielle Klausur.*

**Bearbeitungszeit:** 60 Minuten · **Punkte:** 60 (1 Punkt ≈ 1 Minute) · **Hilfsmittel:** keine
Alle Programme sind Python 3. Wenn nach einer Ausgabe gefragt ist, schreib genau das auf, was im Terminal erscheint.

| Aufgabe | Thema | Punkte |
|---|---|---|
| 1 | Grundlagen: Multiple Choice | 10 |
| 2 | Was wird ausgegeben? | 10 |
| 3 | Fehler finden | 8 |
| 4 | Kontrollstrukturen | 8 |
| 5 | Funktionen selbst schreiben | 10 |
| 6 | Code mit Lücken | 8 |
| 7 | Was ist syntaktisch falsch? | 4 |
| 8 | Klassen: Was wird ausgegeben? | 2 |
| **Summe** | | **60** |

---

## Aufgabe 1 · Grundlagen: Multiple Choice (10 Punkte)

Kreuze bei jeder Frage **genau eine** Antwort an. Pro richtiger Antwort gibt es 1 Punkt.

**1.1** Mit welchem Befehl startest du `main.py` in einem uv-Projekt?
- [ ] a) `uv check main.py`
- [ ] b) `uv run main.py`
- [ ] c) `python run main.py`
- [ ] d) `uv start main.py`

**1.2** Was macht `uv run ruff check .`?
- [ ] a) Es führt die Tests aus.
- [ ] b) Es prüft den Code auf Stilprobleme und typische Fehler (Linter).
- [ ] c) Es prüft nur die Typangaben.
- [ ] d) Es installiert fehlende Pakete.

**1.3** Was prüft `uv run ty check`?
- [ ] a) ob die Typangaben zusammenpassen, zum Beispiel ob eine Funktion mit `-> int` auch einen `int` liefert
- [ ] b) ob das Programm schnell genug läuft
- [ ] c) ob alle Tests grün sind
- [ ] d) ob die Einrückung 4 Leerzeichen hat

**1.4** In `rechner.py` steht die Funktion `addiere`. Welche Zeile in `main.py` importiert sie richtig?
- [ ] a) `import rechner.py`
- [ ] b) `from rechner import addiere`
- [ ] c) `include rechner`
- [ ] d) `from addiere import rechner`

**1.5** Wozu dient `if __name__ == "__main__":` am Ende einer Datei?
- [ ] a) Damit die Datei schneller läuft.
- [ ] b) Der Code darunter läuft nur, wenn die Datei direkt gestartet wird, nicht beim Import.
- [ ] c) Damit Python weiß, wie das Programm heißt.
- [ ] d) Es ist Pflicht, sonst startet kein Programm.

**1.6** `liste = [5, 6, 7]`. Was passiert bei `print(liste[3])`?
- [ ] a) Es wird `7` ausgegeben.
- [ ] b) Es wird `None` ausgegeben.
- [ ] c) Es gibt einen `IndexError`.
- [ ] d) Es wird `[5, 6, 7]` ausgegeben.

**1.7** Was liefert eine Funktion, die kein `return` hat?
- [ ] a) `0`
- [ ] b) `None`
- [ ] c) einen leeren String `""`
- [ ] d) einen Fehler

**1.8** Gegeben ist `def f(a, b=2): return a + b`. Welcher Aufruf führt zu einem Fehler?
- [ ] a) `f(1)`
- [ ] b) `f(1, 3)`
- [ ] c) `f(b=3, a=1)`
- [ ] d) `f()`

**1.9** Was ist das Ergebnis von `"3" + "4"`?
- [ ] a) `7`
- [ ] b) `"34"`
- [ ] c) `34`
- [ ] d) ein `TypeError`

**1.10** Welche Funktion erkennt pytest automatisch als Test?
- [ ] a) `def pruefe_summe():`
- [ ] b) `def summe_test():`
- [ ] c) `def test_summe():`
- [ ] d) `def Test():`

---

## Aufgabe 2 · Was wird ausgegeben? (10 Punkte)

Schreib die Ausgabe jedes Programms auf.

**2a** (2 Punkte)
```python
zahlen = [4, 7, 1, 9]
zahlen.append(3)
print(zahlen[1], zahlen[-1], len(zahlen))
```

**2b** (2 Punkte)
```python
summe = 0
for i in range(1, 6, 2):
    summe += i
print(summe)
```

**2c** (2 Punkte)
```python
def verdoppeln(liste):
    for i in range(len(liste)):
        liste[i] = liste[i] * 2

werte = [1, 2, 3]
verdoppeln(werte)
print(werte)
```

**2d** (2 Punkte)
```python
def gruss(name, anrede="Hallo"):
    return f"{anrede}, {name}!"

print(gruss("Ben"))
print(gruss("Ben", "Moin"))
print(gruss(anrede="Hi", name="Lea"))
```

**2e** (2 Punkte)
```python
text = "Kaffee"
print(text[0], text[-2], text[1:4])
```

---

## Aufgabe 3 · Fehler finden (8 Punkte)

Das Programm soll den Durchschnitt und die **beste** (also kleinste) Schulnote ausgeben. Es enthält **genau vier Fehler**: **zwei Syntaxfehler**, **einen Laufzeitfehler** und **einen Logikfehler**.

Gib für jeden Fehler die **Zeile**, die **Art** des Fehlers und die **Korrektur** an. Pro Fehler gibt es 2 Punkte.

```text
 1  def durchschnitt(noten: list[float]) -> float
 2      summe = 0
 3      for note in noten:
 4          summe += note
 5      return summe / len(noten)
 6
 7
 8  def beste_note(noten: list[float]) -> float:
 9      beste = noten[0]
10      for note in noten:
11          if note > beste:
12              beste = note
13      return beste
14
15
16  noten = [2.0, 1.3, 3.7]
17  print("Durchschnitt: " + durchschnitt(noten))
18  print("Beste Note:", beste_note(noten)
```

| Zeile | Art (Syntax / Laufzeit / Logik) | Korrektur |
|---|---|---|
| | | |
| | | |
| | | |
| | | |

---

## Aufgabe 4 · Kontrollstrukturen (8 Punkte)

```python
def bewerten(punkte: int) -> str:
    if punkte >= 90:
        return "sehr gut"
    elif punkte >= 70:
        return "gut"
    elif punkte >= 50:
        return "bestanden"
    else:
        return "nicht bestanden"


def zaehle(liste: list[int], grenze: int) -> int:
    anzahl = 0
    for zahl in liste:
        if zahl > grenze:
            anzahl += 1
        elif zahl == grenze:
            anzahl += 10
    return anzahl
```

**4a** (2 Punkte) Was liefert `bewerten` für 95, 90, 69 und 0?

**4b** (2 Punkte) Jetzt wird in **allen drei** Bedingungen `>=` durch `>` ersetzt. Was liefert die Funktion dann für 90, 70 und 50?

**4c** (2 Punkte) Was liefert `zaehle([3, 8, 5, 10, 5], 5)`? Schreib kurz auf, wie du darauf kommst.

**4d** (2 Punkte) Was liefert dieselbe Liste mit `grenze = 8`? Und was liefert `zaehle([], 5)`?

---

## Aufgabe 5 · Funktionen selbst schreiben (10 Punkte)

Schreib die Funktionen mit **Typangaben**. Eingebaute Funktionen wie `max()` oder `sum()` sind **nicht** erlaubt.

**5a** (4 Punkte) `groesster_wert(werte: list[float]) -> float` gibt den größten Wert der Liste zurück. Die Liste ist nie leer.
Beispiele: `groesster_wert([3, 9, 2])` → `9`, `groesster_wert([-5, -2, -8])` → `-2`

**5b** (6 Punkte) `fahrpreis(alter: int, km: float) -> float` berechnet einen Busfahrpreis:
- Grundpreis 2,00 € plus 0,30 € pro Kilometer.
- Kinder **unter 6** fahren kostenlos (`0.0`).
- Wer **unter 18** ist, zahlt die Hälfte.
- Wer **65 oder älter** ist, bekommt 20 % Rabatt.
- Das Ergebnis wird auf 2 Nachkommastellen gerundet.

Beispiele: `fahrpreis(30, 10)` → `5.0`, `fahrpreis(10, 10)` → `2.5`, `fahrpreis(4, 10)` → `0.0`, `fahrpreis(70, 10)` → `4.0`

---

## Aufgabe 6 · Code mit Lücken (8 Punkte)

Füll die 8 Lücken so aus, dass der Code funktioniert. Pro Lücke gibt es 1 Punkt.
`bestanden([1.7, 4.0, 5.0, 2.3])` soll `[1.7, 4.0, 2.3]` liefern. Nach zwei Einzahlungen von 50 und 20.5 soll `stand` den Wert `70.5` haben.

```text
def bestanden(noten: list[float]) -> list[float]:
    ergebnis: list[float] = ___(1)___
    for note ___(2)___ noten:
        if note ___(3)___ 4.0:
            ergebnis.___(4)___(note)
    ___(5)___ ergebnis


class Konto:
    def ___(6)___(self, inhaber: str, stand: float = 0) -> None:
        self.inhaber = inhaber
        self.stand = stand

    def einzahlen(___(7)___, betrag: float) -> None:
        self.stand ___(8)___ betrag
```

---

## Aufgabe 7 · Was ist syntaktisch falsch? (4 Punkte)

Welche Zeilen bzw. Blöcke sind **syntaktisch falsch**? Es sind genau vier. Pro richtiger Zuordnung gibt es 0,5 Punkte, für **richtig** wie für **falsch**.

| Nr | Code | richtig / falsch |
|---|---|---|
| a | `if x = 5:` | |
| b | `for i in range(10)` (darunter eingerückt `print(i)`) | |
| c | `print("Hallo", name)` | |
| d | `def f(a, b=2):` | |
| e | `liste = [1, 2, 3` | |
| f | `while True:` (darunter eingerückt `break`) | |
| g | `else if x > 3:` | |
| h | `x = "Preis: " + str(5)` | |

---

## Aufgabe 8 · Klassen: Was wird ausgegeben? (2 Punkte)

```python
class Tier:
    def __init__(self, name: str) -> None:
        self.name = name

    def laut(self) -> str:
        return "..."

    def vorstellen(self) -> str:
        return f"{self.name} sagt {self.laut()}"


class Hund(Tier):
    def laut(self) -> str:
        return "Wuff"


class Katze(Tier):
    def __init__(self, name: str, alter: int) -> None:
        super().__init__(name)
        self.alter = alter

    def laut(self) -> str:
        return "Miau"


tiere = [Hund("Bello"), Katze("Mia", 3), Tier("Nemo")]
for tier in tiere:
    print(tier.vorstellen())
print(len(tiere), tiere[1].alter)
```
