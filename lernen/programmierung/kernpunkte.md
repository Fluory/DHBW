# Kernpunkte: Grundlagen der Programmierung

> Für Vortest, Blurting und Active Recall. Klausurrelevant ist, was im Skript bzw. auf den Folien steht; alles, was darüber hinausgeht, ist mit „(über das Skript hinaus)“ markiert.

## Kernpunkte pro Thema

### T01 – Algorithmen und Datenstrukturen
- Algorithmus = „Schrittfolge zur systematischen Lösung eines Problems“. Er beschreibt den Lösungsweg unabhängig von der Programmiersprache (VL1 F. 9).
- Anforderungen: **Endlichkeit** (er terminiert), **Ausführbarkeit**, **Korrektheit**, **Effizienz** (sparsam mit Zeit und Speicher) (VL1 F. 9).
- **terminierend** = endet bei jeder erlaubten Eingabe nach endlich vielen Schritten. **determiniert** = gleiche Eingaben und Startbedingungen liefern immer das gleiche Ergebnis. **deterministisch** = nächster Schritt und Zustand sind jederzeit eindeutig festgelegt (VL1 F. 10).
- Datenstrukturen organisieren Daten so, dass man effizient zugreifen und ändern kann (VL1 F. 12–14):
  - Array: Index, feste Größe
  - Liste: flexible Größe
  - Baum: Hierarchien, Dateisysteme
  - Graph: Netzwerke, Routen
  - Stack **LIFO**: Zurück-Taste
  - Queue **FIFO**: Druckaufträge
  - in Python eingebaut: `list`, `tuple`, `dict`, `set`
- BWL-Bezug: Nachbestellalgorithmus, Kundenwertanalyse, Umsatzprognose, Scoring-Modell, Assoziationsregeln, Multi-Kriterien-Entscheidung, Schichtplanung, Anomalieerkennung (VL1 F. 18–19).

**Klausuraufgaben (Beispiele, ohne Lösung)**
- *Begriffe erklären:* Erklären Sie den Unterschied zwischen „determiniert“ und „deterministisch“. Nennen Sie ein Beispiel für einen Algorithmus, der nicht determiniert ist.
- *Begründet zuordnen:* Welche Datenstruktur passt zur Zurück-Taste im Browser, zur Druckerwarteschlange, zur Ordnerstruktur auf der Festplatte und zur Routenplanung?

### T02 – Von Maschinensprache zu Python: Paradigmen und Übersetzung
- Maschinensprache = binäre Befehle, für Menschen unlesbar. Assembler = symbolische Schreibweise (`MOV`, `ADD`, `CMP`, `JE`), hängt vom Prozessortyp ab (VL1 F. 22–23).
- Höhere Sprachen (ab den 1950er-Jahren) abstrahieren von der Hardware. Früher dachte man in Generationen 1G–5G. Heute existieren **Paradigmen** nebeneinander: imperativ/prozedural, objektorientiert, funktional, deklarativ/logisch. Python ist **multiparadigmatisch** (VL1 F. 24–26).
- **Interpreter**: liest Anweisung für Anweisung und führt sie sofort aus, kein dauerhaftes Programm. Vorteil: schnelles Ausprobieren. Nachteil: langsamer (VL1 F. 31).
- **Compiler**: übersetzt vorab vollständig in Maschinencode für die Zielhardware. Vorteil: hohe Performance. Nachteil: Kompilieren vor jedem Test, läuft nur auf der Zielplattform. Beispiele: C, C++, Rust, Go (VL1 F. 32).
- **Zwischencode**: Bytecode wird von einer virtuellen Maschine ausgeführt, oft mit JIT. Vorteil: portabel. Nachteil: Laufzeitumgebung nötig. Beispiele: Java/JVM, C#/.NET, Python (VL1 F. 33).
- Python: `hallo.py` → CPython übersetzt in Bytecode → Python-VM (Windows, macOS, Linux). Seit 3.13 gibt es einen experimentellen JIT. Übersetzer und VM stecken beide in CPython (VL1 F. 34–36).

**Klausuraufgaben (Beispiele, ohne Lösung)**
- *Vergleichen:* Stellen Sie Interpreter, Compiler und Zwischencode in einer Tabelle gegenüber (Ablauf, Vorteil, Nachteil, Beispielsprache). Ordnen Sie Python ein.
- *Erklären:* Was macht ein JIT-Compiler? Warum verschwimmen die Grenzen zwischen Compiler und Interpreter heute?

### T03 – Python: Eigenschaften, Syntaxregeln, Ausführung, Werkzeuge
- Geschichte: ab 1989 von Guido van Rossum entwickelt, 1991 veröffentlicht. Python 3 (2008) ist bewusst inkompatibel zu Python 2. Im Kurs: **Python 3.14** (VL1 F. 40).
- Eigenschaften: multiparadigmatisch, plattformunabhängig, **dynamisch, aber stark typisiert** („Jeder Wert hat einen festen Typ, Variablen haben keinen“), automatische Speicherverwaltung, „Batteries included“ (VL1 F. 42). Deshalb schreibt der Kurs von Anfang an Typangaben und nutzt ein Prüfwerkzeug (VL1 F. 41).
- Syntax (VL1 F. 43–44):
  - Einrückung bildet Blöcke (Standard 4 Leerzeichen) statt `{ }`.
  - `:` leitet einen Block ein; kein Semikolon.
  - Groß-/Kleinschreibung zählt (`Print` ≠ `print`); `#` leitet einen Kommentar ein.
  - Keine Klasse, keine `main`: Die Datei läuft von oben nach unten.
- `uv run hallo.py`: CPython prüft **zuerst die Syntax** („Ein Tippfehler fällt auf, bevor eine Zeile läuft“). Dann übersetzt es in Bytecode und führt ihn in der VM aus. `__pycache__/` speichert den Bytecode importierter Module (VL1 F. 45–46).
- Werkzeugkette (VL1 F. 47–48, 56):
  - **uv**: installiert Python, verwaltet Projekte und Pakete, startet Programme.
  - CPython 3.14 mit Standardbibliothek; Projektumgebung `.venv`.
  - **ruff**: `uv run ruff format .` und `uv run ruff check .` (Format, typische Fehler, Stil).
  - **ty**: `uv run ty check` prüft die Datentypen, ohne das Programm auszuführen.
  - Konsole: `uv run python`, Prompt `>>>`, beenden mit `exit()`.

**Klausuraufgaben (Beispiele, ohne Lösung)**
- *Was passiert?* Was gibt das Programm aus? Wo bricht es mit welcher Fehlerart ab?
```python
alter = 20
if alter >= 18:
    print("volljährig")
    Print("darf wählen")
print("fertig")
```
- *Unterscheiden:* Welches Werkzeug (uv, ruff, ty, CPython) ist zuständig für: Code einheitlich formatieren, Typwidersprüche vor dem Start finden, Programm ausführen, Pakete ins Projekt installieren?

### T04 – Kommentare, Docstrings und Typisierung
- Ein Kommentar ist Text, den Python ignoriert, und richtet sich an Menschen. Er erklärt, **warum** der Code etwas tut; was er tut, soll der Code selbst zeigen (VL2 F. 7).
- `#` gilt bis zum Zeilenende, auch hinter Code. Mehrzeilig heißt: jede Zeile mit `#` beginnen. Einen Block-Kommentar `/* … */` wie in Java gibt es nicht. Überflüssig sind Kommentare, die den Code wiederholen („Multipliziere netto mit 1.19“) (VL2 F. 8–9).
- Ein Docstring `"""…"""` beschreibt Funktion, Klasse oder Datei; Werkzeuge erzeugen daraus Dokumentation. Im Kurs gilt der **Google-Stil**: Kurzbeschreibung, dann `Args:` und `Returns:` (VL2 F. 8, 10; ausführlich ab VL04).
- Ein Datentyp beschreibt, welche Art von Wert vorliegt und welche Operationen erlaubt sind. `type(42)` → `<class 'int'>`. In der DIKW-Pyramide arbeiten Programme auf der Stufe „Daten“ (VL2 F. 12–13).
- Typisierung (VL2 F. 14):
  - **statisch**: Java, C, C# – Prüfung beim Kompilieren
  - **dynamisch**: Python, JavaScript – Prüfung beim Ausführen
  - **graduell**: Python mit Typangaben und ty – Prüfung vor dem Ausführen (so arbeitet der Kurs)
- In Python ist jeder Wert ein Objekt; „primitive“ Typen wie in Java gibt es nicht. Gliederung: einfache Typen, Sammlungen (`list`, `tuple`, `dict`, `set`), eigene Klassen (VL2 F. 15).

**Klausuraufgaben (Beispiele, ohne Lösung)**
- *Unterscheiden:* Welche Kommentare sind sinnvoll, welche überflüssig? Begründen Sie.
```python
# Setze netto auf 100
netto = 100.0
anzahl = 12
# Rabatt erst ab 10 Stück, siehe AGB § 4
rabatt = 0.05 if anzahl >= 10 else 0.0
# Multipliziere netto mit 1.19
brutto = netto * 1.19
```
- *Code schreiben:* Ergänzen Sie einen Docstring im Google-Stil für `def netto_preis(brutto: float, mwst_satz: float) -> float:`.

### T05 – Einfache Datentypen: int, float, bool, str, None
- `int`: ganze Zahlen, **beliebig groß, kein Überlauf** (`2 ** 100`, `2 ** 64`). Ein einziger Typ statt byte/short/int/long in Java. Unterstriche machen große Zahlen lesbar: `83_500_000` (VL2 F. 16; ML2 uebung1.py).
- `float`: Dezimalpunkt, 64 Bit, etwa 15–16 Stellen (wie `double` in Java). Wird binär gespeichert, daher ergibt `0.1 + 0.2` den Wert `0.30000000000000004` und `0.1 + 0.2 == 0.3` ist `False`. Für Geld ungeeignet, dafür gibt es `decimal.Decimal` (VL2 F. 17).
- Kein `char`: Ein Zeichen ist ein `str` der Länge 1. `ord("A")` → 65, `ord("a")` → 97, `chr(66)` → `'B'`, `ord("☺")` → 9786. Grundlage ist Unicode („Computer sehen letztlich alles als Zahlen“) (VL2 F. 18–21).
- `bool`: genau `True` und `False`, **großgeschrieben** (`true` ist ein Fehler). Entsteht bei Vergleichen (VL2 F. 22).
- `str`: Text in `"…"` oder `'…'`, auch leer (`""`). **Unveränderlich**: Jede „Änderung“ erzeugt einen neuen String. Eine PLZ wird als Text gespeichert: `"74076"` (VL2 F. 23).
- `None` heißt „kein Wert“, ist der einzige Wert von `NoneType` und ist weder `0` noch `""`. Typangabe: `telefon: str | None = None`. Faustregel: `int` für ganze Zahlen, `float` für Messwerte, `str` für alles, womit man nicht rechnet (VL2 F. 24–25).

**Klausuraufgaben (Beispiele, ohne Lösung)**
- *Was gibt das aus?*
```python
print(type(3.0))
print(type("3"))
print(type(None))
print(chr(ord("a") + 2))
print(0.1 + 0.2 == 0.3)
```
- *Begründet zuordnen:* Welcher Datentyp passt jeweils für Postleitzahl, Anzahl Mitarbeitende, Raumtemperatur, Mitgliedsstatus aktiv/inaktiv und eine noch unbekannte Telefonnummer?

### T06 – Variablen, Zuweisung und Typangaben
- Eine Variable ist ein **Name, der auf einen Wert im Speicher zeigt** („Namensschild an einem Wert – nicht eine Box“). Der **Typ gehört zum Wert**, nicht zum Namen (VL2 F. 30).
- Es gibt keine Deklaration: Eine Variable entsteht bei der ersten Zuweisung. `=` heißt „zeigt ab jetzt auf“. Werte, auf die kein Name mehr zeigt, gibt Python selbst frei (VL2 F. 31–32, 37).
- `zahl = zahl + 1`: Erst wird die rechte Seite berechnet (15 + 1), danach wandert das Schild zum neuen Wert (VL2 F. 32, 38).
- Typangabe `alter: int = 25`: Python ignoriert sie beim Ausführen, **ty** prüft sie vorher. Bei `alter = "fünfundzwanzig"` meldet ty `error[invalid-assignment]`. Ohne Typangabe darf `x` erst auf `5` und dann auf `"fünf"` zeigen. „Die Typangabe ist ein Versprechen. ty passt auf, dass Sie es halten.“ (VL2 F. 33–34, 39).
- Mehrere Namen auf einmal (VL2 F. 35, 40–42; ML2 uebung2.py):
  - `breite, hoehe = 1920, 1080`: links und rechts gleich viele Elemente.
  - `x = y = 0`: zwei Schilder am selben Wert.
  - Tauschen mit `a, b = b, a`: Python wertet zuerst die ganze rechte Seite aus.

**Klausuraufgaben (Beispiele, ohne Lösung)**
- *Trace-Tabelle:* Notieren Sie nach jeder Zeile die Werte von `a` und `b`. Was wird ausgegeben?
```python
a = 3
b = a
a = a + 2
b, a = a * 2, b
print(a, b)
```
- *Werkzeug vs. Laufzeit:* Was meldet `uv run ty check`, und was passiert bei `uv run`?
```python
alter: int = 25
alter = "fünfundzwanzig"
print(alter)
```

### T07 – Variablenfehler, Gültigkeit, Namen und Konstanten
- `NameError: name '…' is not defined` hat drei typische Ursachen: (1) Variable nie zugewiesen, (2) falsche Großschreibung (`Zahl` statt `zahl`), (3) nur eine Typangabe ohne Wert (`anzahl: int`). ty meldet alle drei vorab als `unresolved-reference` (VL2 F. 43; ML2 uebung2.py).
- `wert = 3,5` ist kein Fehler, ergibt aber das Tupel `(3, 5)` statt 3.5 (VL2 F. 43).
- Gültigkeit: Anders als in Java endet eine Variable nicht mit dem Block. Eine Variable aus einem `if`- oder Schleifenblock lebt danach weiter. **Falle**: Wurde der Block übersprungen, gibt es sie nicht → `NameError`. Eigene Gültigkeitsbereiche entstehen erst durch Funktionen (VL04) (VL2 F. 44).
- Namensregeln (VL2 F. 45–46):
  - Pflicht, sonst Fehler: Buchstaben, Ziffern und `_`; nicht mit einer Ziffer beginnen; kein Schlüsselwort (`if`, `class`); Groß-/Kleinschreibung zählt.
  - Konventionen: `snake_case` für Variablen, Funktionen und Dateien; `UPPER_SNAKE_CASE` für Konstanten; `PascalCase` für Klassen.
  - camelCase ist Java-/JS-Stil; kebab-case ist in Python-Code ungültig.
  - Umlaute sind technisch erlaubt, im Kurs aber vermieden (`groesse`). ruff prüft Namen mit der Regelgruppe N.
- Konstanten: Python hat kein `final`. Stattdessen `from typing import Final` und `MWST_SATZ: Final = 0.19`. ty meldet jede neue Zuweisung, Python verhindert sie beim Ausführen **nicht**. Nutzen: `netto * MWST_SATZ` sagt mehr als `netto * 0.19`, und eine Änderung ist nur an einer Stelle nötig (VL2 F. 47; ML2 uebung2.py).

**Klausuraufgaben (Beispiele, ohne Lösung)**
- *Unterscheiden:* Welche Namen sind ungültig, welche nur unüblich? `2te_zahl`, `zweite_zahl`, `anzahl-studierende`, `class`, `MaxWert`, `MAX_WERT`, `größe`, `_temp`.
- *Fehler finden:* Was passiert bei `alter = 15`? Wie lautet die Fehlermeldung, und wie beheben Sie das?
```python
alter = 15
if alter >= 18:
    status = "volljährig"
print(status)
```

### T08 – Arithmetische Operatoren und Zuweisungsoperatoren
- Operator-Kategorien: arithmetisch `+ - * / // % **`, Zuweisung `= += -= *= /= //= %=`, Vergleich `== != < > <= >=`, logisch `and or not`, Text `+ * in` (VL2 F. 51).
- Division und Rest (VL2 F. 52–54, 65):
  - `/` liefert **immer** `float`: `5 / 2` → `2.5`, `6 / 3` → `2.0`.
  - `//` ist die ganzzahlige Division und **rundet ab**, also zur kleineren Zahl hin: `7 // 2` → `3`, `-7 // 2` → `-4` (Java: `-3`).
  - `%` liefert den Rest: `7 % 3` → 1, `9 % 3` → 0. Praktisch für „gerade oder ungerade?“ und „jedes n-te Element“.
- Punkt vor Strich, `**` bindet am stärksten: `2 + 3 * 4` → 14, `(2 + 3) * 4` → 20 (VL2 F. 53, 64).
- `x += 3` bedeutet `x = x + 3`. Bei `x /= 2` ist das Ergebnis ein `float`. Mini-Aufgabe von den Folien: `x = 4; x *= 2; x -= 3; x //= 2` (VL2 F. 55–57).
- **Kein `x++`**: `x++` ergibt `SyntaxError: invalid syntax`. `++x` ist gültig (zweimal das Vorzeichen +) und ändert nichts; ruff meldet das mit Regel B002. Stattdessen `x += 1` (VL2 F. 58; ML2 uebung3.py).

**Klausuraufgaben (Beispiele, ohne Lösung)**
- *Was gibt das aus?*
```python
print(17 // 5, 17 % 5, 17 / 5)
print(-17 // 5)
print(2 + 3 * 2 ** 2)
x = 10
x //= 4
x *= 3
x -= 1
print(x)
```
- *Code schreiben:* Zerlegen Sie `sekunden = 7384` mit `//` und `%` in Stunden, Minuten und Sekunden. Geben Sie das Ergebnis mit einem f-String aus.

### T09 – Vergleiche, logische Operatoren und Ausdrucksauswertung
- Vergleichsoperatoren liefern **immer** `bool` (VL2 F. 59).
- `==` vergleicht in Python immer den **Inhalt**, auch bei Strings; Javas `.equals()` braucht man nicht. `is` fragt „dasselbe Objekt im Speicher?“ und wird im Kurs nur für `None` genutzt: `if telefon is None` (VL2 F. 60).
- Zahl und Text sind nie gleich: Bei `alter = 30` ist `alter == "30"` `False` (VL2 F. 61).
- `and` (beide wahr), `or` (mindestens eine wahr), `not` (kehrt um): englische Wörter statt `&& || !` (VL2 F. 51, 62–63).
- Verketteter Vergleich: `18 <= alter <= 65` entspricht `alter >= 18 and alter <= 65` (in Java nicht möglich). `alter % 2 == 0` ergibt ein `bool` (VL2 F. 63, 67).
- Rangfolge als Semantikfehler: `5 + 2 / 2` ergibt `6.0` statt 3.5; richtig ist `(5 + 2) / 2`. Das Programm läuft ohne Fehlermeldung (VL2 F. 66).

**Klausuraufgaben (Beispiele, ohne Lösung)**
- *Was gibt das aus?*
```python
alter = 30
name = "Py" + "thon"
print(alter >= 18 and alter == "30")
print(name == "Python", not alter > 40)
print(10 < alter <= 30)
```
- *Code schreiben:* Bilden Sie einen `bool`-Ausdruck `ist_schaltjahr` für `jahr`: durch 4 teilbar, aber nicht durch 100 – außer bei Teilbarkeit durch 400.

### T10 – Strings und f-Strings
- Verketten mit `"Hal" + "lo"`, wiederholen mit `"ha" * 3` → `"hahaha"`. Länge: `len("Hallo")` → 5. Großbuchstaben: `"python".upper()` → `"PYTHON"` (VL2 F. 70).
- Positionen zählen ab 0, negative von hinten (VL2 F. 70):
  - `"Hallo"[0]` → `"H"`, `"Hallo"[-1]` → `"o"`
  - Slice `"Hallo"[1:3]` → `"al"` (stop gehört nicht dazu)
  - `"ll" in "Hallo"` → `True`
- `+` verbindet nur Strings mit Strings. Ein **f-String** wie `f"{name} ist {alter} Jahre alt"` setzt Werte jedes Typs ein. `{preis:.2f}` formatiert mit zwei Nachkommastellen (`3.50`). In `{ }` darf gerechnet werden: `{alter + 5}` (VL2 F. 71).
- Strings sind unveränderlich (VL2 F. 23).
- Übung 4 verlangt exakt die Zeile `a=12, b=3 | sum=15, diff=9, prod=36, quot=4.0` als f-String (VL2 F. 82; ML2 uebung4.py).

**Klausuraufgaben (Beispiele, ohne Lösung)**
- *Was gibt das aus?*
```python
wort = "Programmierung"
print(wort[0], wort[-1], wort[3:7])
print(len(wort), "mm" in wort)
print(wort[0:3] * 2)
print(f"{len(wort) / 4:.2f}")
```
- *Code schreiben:* Geben Sie für `artikel = "Maus"`, `preis = 19.9` und `menge = 3` genau die Zeile `3 x Maus = 59.70 €` aus.

### T11 – Typumwandlung, Rundung und Geldbeträge
- Umwandeln heißt: den Typ wie eine Funktion aufrufen (VL2 F. 72, 76–77):
  - `int(9.99)` → `9` (**schneidet ab, rundet nicht**)
  - `float(5)` → `5.0`, `str(42)` → `"42"`, `int("42")` → `42`
  - `int("zwei")` → `ValueError: invalid literal for int() with base 10: 'zwei'`
- `round(2.675, 2)` → `2.67` und `round(9.5)` → `10`, auf der Folie mit dem Hinweis „Gleitkomma-Effekte!“ (VL2 F. 72).
- Automatisch wandelt Python nur zwischen Zahlen um: `bool → int → float` (`5 + 2.0` → `7.0`, `True + 1` → `2`). Text plus Zahl ergibt `TypeError: can only concatenate str (not "int") to str` („stark typisiert: Python rät nicht“). Lösung: `str(36)` oder f-String (VL2 F. 73–76).
- Geld: `19.99 * 100` ergibt `1998.9999999999998`, `int(...)` davon `1998` – ein Cent weg. Abhilfe 1: `round()`. Abhilfe 2: `Decimal("19.99")`, **als Text übergeben** (VL2 F. 78; ML2 uebung4.py).
- Ursache: 0.1 hat im Binärsystem unendlich viele Nachkommastellen. Ein float hat 52 Bit für die Stellen und rundet den Rest, und kleine Fehler addieren sich. Mit Decimal gilt `Decimal("0.1") + Decimal("0.2") == Decimal("0.3")` → `True` (VL2 F. 79–81).
- Zusatzaufgabe aus Übung 4: die Jahreszahl ohne `int()` berechnen, über `ord(ziffer) - ord("0")` und Stellenwerte (VL2 F. 82; ML2 uebung4.py).

**Klausuraufgaben (Beispiele, ohne Lösung)**
- *Was gibt das aus – oder welcher Fehler tritt auf?*
```python
print(int(7.9) + float(2))
print(True + True + 0.5)
print(int("12") + int("3"))
print("12" + "3")
print(int("3.5"))
```
- *Erklären:* Warum ergibt `int(19.99 * 100)` den Wert 1998? Nennen Sie zwei Abhilfen.

### T12 – Syntax vs. Semantik: Fehlerarten und Tracebacks
- **Syntax** = Form, also die Grammatik der Sprache. Syntaxfehler sind z. B. eine fehlende Klammer, ein fehlender Doppelpunkt, falsche Einrückung oder ein Tippfehler im Schlüsselwort. **Semantik** = Bedeutung: Der Code ist korrekt geschrieben, tut aber etwas anderes als gedacht (VL2 F. 85).
- Vier Fehlerarten (VL2 F. 86):
  - **Syntaxfehler** `print("Hallo"`: fällt vor dem Start auf (`SyntaxError: '(' was never closed`).
  - **Typfehler** `"Alter: " + 36`: ty meldet ihn vor dem Start, sonst `TypeError` beim Ausführen.
  - **Laufzeitfehler** `a / b` mit `b = 0`: `ZeroDivisionError` beim Ausführen.
  - **Logikfehler** `5 - 3` statt `+`: wird nie automatisch gemeldet, nur durch Nachdenken und Testen gefunden.
- „Vier Fehler, drei Prüfer“ (VL2 F. 87–91):
  - `ruff check` prüft Syntax und Stil (z. B. `invalid-syntax`).
  - `ty check` prüft Datentypen (z. B. `error[unsupported-operator]`).
  - `uv run` führt das Programm aus.
  - Ein Logikfehler besteht alle drei Prüfungen.
- Fehlermeldungen **von unten nach oben** lesen: (1) letzte Zeile = was ist passiert, (2) darüber Datei und Zeile, (3) `^` markiert die genaue Stelle (VL2 F. 92).
- Übung 5: fehlende Klammer in `print(f"Die Zahl ist {zahl}"` und Semantikfehler `5 + 2 / 2` (VL2 F. 93; ML2 uebung5.py).

**Klausuraufgaben (Beispiele, ohne Lösung)**
- *Unterscheiden:* Bestimmen Sie jeweils die Fehlerart (Syntax, Typ, Laufzeit, Logik) und welcher Prüfer anschlägt (ruff, ty, Ausführung, keiner):
  - (a) `print("Summe:", summe`
  - (b) `preis = "3" * 1.5`
  - (c) `mittel = summe / anzahl` mit `anzahl = 0`
  - (d) `brutto = netto * 0.19` (gemeint: Preis inkl. 19 % MwSt.)
- *Fehlermeldung deuten:* Was ist passiert, wo, und welche zwei Korrekturen gibt es?
```text
Traceback (most recent call last):
  File "rechnung.py", line 3, in <module>
    print("Gesamt: " + gesamt)
          ~~~~~~~~~~~^~~~~~~~
TypeError: can only concatenate str (not "float") to str
```

### T13 – Grundformen des Programmflusses und Flussdiagramme
- Ohne Kontrollstrukturen läuft ein Programm Zeile für Zeile ab. Zwei große Ideen: **bedingte Ausführung** (nur etwas tun, wenn eine Aussage wahr ist) und **Wiederholung** (solange etwas gilt) (VL3 F. 5).
- Drei Grundformen (VL3 F. 6):
  - **Sequenz**: nacheinander, von oben nach unten (jede Zeile).
  - **Selektion**: Bedingung prüfen und einen Weg wählen (`if`, `elif`, `else`, `match`).
  - **Iteration**: wiederholen, solange eine Bedingung gilt (`while`, `for`).
- Schema: Rechteck = Anweisung, Raute = „Bedingung?“ mit den Ausgängen wahr und falsch. Bei der Iteration führt der Pfeil nach dem Code zurück zur Raute (VL3 F. 7).
- Beispiele als Flussdiagramm: „Akku unter 10 %?“ (if ohne else), „Regnet es?“ (if–else), Temperaturkaskade < 0 / < 20 / < 30 °C (Mehrfachentscheidung) (VL3 F. 9–11).
- Eine Schleife führt denselben Block mehrfach aus, ohne dass er mehrfach im Code steht. Schema: „Abbruchbedingung erfüllt?“ – nein → Code ausführen → zurück; ja → Schleife beenden, weiter im Programm (VL3 F. 12–13).

**Klausuraufgaben (Beispiele, ohne Lösung)**
- *Flowchart zeichnen:* Zeichnen Sie das Flussdiagramm zu diesem Code:
```python
zahl = 1
while zahl <= 10:
    if zahl % 2 == 0:
        print(f"Gerade Zahl: {zahl}")
    zahl += 1
```
- *Flowchart → Code:* Setzen Sie die Temperaturkaskade (< 0 °C „Gefriert!“, < 20 °C „Kühl.“, < 30 °C „Angenehm.“, sonst „Heiß!“) einmal verschachtelt und einmal mit `elif` um.

### T14 – Blöcke, if und if–else
- Eine Zeile mit Doppelpunkt `:` eröffnet einen Block. Alle folgenden Zeilen mit 4 Leerzeichen mehr gehören dazu. Der Block endet, sobald eine Zeile wieder weniger eingerückt ist (VL3 F. 15).
- Ein Block ist kein eigener Gültigkeitsbereich: `b = 5` im Block von `if a > 5:` lebt danach weiter. Wäre `a` kleiner als 6, bräche `print(b)` mit `NameError` ab (VL3 F. 15–16).
- `if Bedingung:` braucht keine Klammern um die Bedingung, aber den Doppelpunkt am Ende. Der Block ist eingerückt; danach geht es in jedem Fall weiter (VL3 F. 18–19).
- Bei `if`–`else` läuft **genau einer** der beiden Blöcke, nie beide. `else` steht auf derselben Einrückungsebene wie `if` und hat ebenfalls einen Doppelpunkt (VL3 F. 20–21).
- Verschachtelte `if`–`else` funktionieren, sind aber schwer zu lesen: Jede Verzweigung bedeutet eine Ebene mehr Einrückung (VL3 F. 22).

**Klausuraufgaben (Beispiele, ohne Lösung)**
- *Was gibt das aus?* Für `x = 12`, `x = 7` und `x = 3`:
```python
x = 12
if x > 5:
    print("groß")
    if x > 10:
        print("sehr groß")
else:
    print("klein")
print("Ende")
```
- *Code schreiben:* Ab einem `bestellwert` von 50 € ist der Versand kostenlos, sonst kostet er 4,90 €. Geben Sie den Gesamtbetrag mit zwei Nachkommastellen aus.

### T15 – elif und match
- Mit `elif` („else if“, in Java `else if`) lassen sich dieselben Fälle flacher darstellen. Python prüft die Bedingungen **nacheinander** und **stoppt beim ersten Treffer** (VL3 F. 23).
- `match wert:` gibt es seit Python 3.10 als Gegenstück zu Javas `switch`. Es vergleicht den Wert der Reihe nach mit jedem `case`. Der erste passende Fall läuft, danach ist `match` fertig: **kein `break`, kein Durchfallen**. `case _:` passt immer, wie `default` (VL3 F. 24).
- Mehrere Werte in einem Fall verbindet man mit `|`: `case "A" | "B" | "C":` (VL3 F. 26).
- `if`–`elif` bleibt der Normalfall, denn es kann Bereiche prüfen (`note < 3`); `match` vergleicht nur mit festen Werten (VL3 F. 25).

**Klausuraufgaben (Beispiele, ohne Lösung)**
- *Was gibt das aus – und warum wird „gut“ nie ausgegeben?*
```python
punkte = 85
if punkte >= 50:
    print("bestanden")
elif punkte >= 80:
    print("gut")
else:
    print("nicht bestanden")
```
- *Code schreiben:* Geben Sie mit `match` für `tag` aus: `"Mo"` bis `"Fr"` → „Werktag“, `"Sa"`/`"So"` → „Wochenende“, sonst „Ungültige Eingabe“.

### T16 – Bedingter Ausdruck, Wahrheitswerte, Einrückungsfallen
- Der bedingte Ausdruck `WertWennWahr if Bedingung else WertWennFalsch` entspricht Javas `b ? x : y`, z. B. `status = "offen" if betrag > 0 else "bezahlt"`. Nur für die Wahl zwischen zwei Werten verwenden und nicht verschachteln. `ruff check` schlägt die Kurzform vor, wenn ein `if`–`else` nur eine Variable setzt (VL3 F. 27–28).
- Wahrheitswerte (VL3 F. 29):
  - **Falsch** sind `False`, `None`, `0`, `0.0`, `""` und `[]`.
  - **Wahr** ist alles andere, auch `-1`, `"0"`, `" "` und `[0]`.
  - `if warenkorb:` prüft also, ob die Liste nicht leer ist.
- Einrückung **ist** Syntax: Was eingerückt ist, gehört zum Block („Der Code sieht genau so aus, wie er läuft“) (VL3 F. 30).
- Ein fehlender Doppelpunkt ergibt `SyntaxError: expected ':'`. Eine fehlende Einrückung ergibt `IndentationError: expected an indented block after 'if' statement on line 2`. Beide meldet Python vor dem Start (VL3 F. 31).
- Weitere Fallen (VL3 F. 32–33):
  - Eine nicht eingerückte Zeile nach dem `if` läuft **immer**.
  - `else` ohne direkt vorangehendes `if` ergibt `SyntaxError: invalid syntax`.
  - Immer 4 Leerzeichen, nie Tabs mischen. `ruff format` kann nicht raten, welcher Block gemeint ist.

**Klausuraufgaben (Beispiele, ohne Lösung)**
- *Was gibt das aus?*
```python
eingabe = "0"
korb = []
if eingabe:
    print("A")
if not korb:
    print("B")
if eingabe and korb:
    print("C")
print("D" if -1 else "E")
```
- *Fehler finden:* Welche Meldung gibt Python aus? Welche Fehler stecken insgesamt im Code, und wie sieht die korrigierte Fassung aus?
```python
x = 5
if x > 0
    print("Positiv")
print("Fertig")
else:
    print("Nicht positiv")
```

### T17 – Logische Operatoren, Rangfolge, Kurzschlussauswertung
- `and` (Java `&&`): beide wahr. `or` (`||`): mindestens eine wahr. `not` (`!`): kehrt um. XOR bei `bool` schreibt man `a != b` (VL3 F. 35–36).
- Rangfolge von hoch nach niedrig: Klammern → Vergleiche (`<`, `==` …) → `not` → `and` → `or`. Deshalb funktioniert `alter >= 18 and ticket_gueltig` ohne Klammern. `a or b and not c` bedeutet `a or (b and not c)`; `(a or b) and not c` ist etwas anderes (VL3 F. 37–38).
- Logikgesetze: kommutativ (Reihenfolge egal), assoziativ (Klammerung egal), distributiv (`a and (b or c)` = `(a and b) or (a and c)`) (VL3 F. 39–42).
- **Kurzschlussauswertung**: Python wertet von links nach rechts aus und hört auf, sobald das Ergebnis feststeht. `x != 0 and 10 / x > 1` ist sicher; vertauscht gibt es einen `ZeroDivisionError`. „Die Absicherung (`x != 0`) gehört nach vorn“ (VL3 F. 43).
- Kombinationen aus den Folien: `0 < temperatur < 30` statt `temperatur > 0 and temperatur < 30`; `alter < 12 or alter > 65`; Anmeldung mit `==` auf Strings und `elif` (VL3 F. 44–45).

**Klausuraufgaben (Beispiele, ohne Lösung)**
- *Was gibt das aus?*
```python
a, b, c = True, False, True
print(a and b or c)
print(a and (b or not c))
print(not a or b and c)
print(a != b)
```
- *Fehler finden:* Der Sondertarif soll nur für Kinder unter 12 **oder** Senioren über 65 gelten, und nur mit gültigem Ausweis. Warum ist `if alter < 12 or alter > 65 and ausweis_gueltig:` falsch? Korrigieren Sie die Bedingung.

### T18 – Übung: Stromkosten (if/elif) und Parkgebühren (match)
- Stromkosten (VL3 F. 48):
  - Staffelpreise: bis 100 kWh 0,25 €/kWh, 101–300 kWh 0,22 €, ab 301 kWh 0,19 €.
  - Ein Grundpreis von 12,90 € wird immer berechnet.
  - Öko-Tarif und höchstens 250 kWh: 5 € Bonus.
  - Gesamtkosten über 100 € werden auf 100 € gesetzt.
- Codegerüst (VL3 F. 49):
  - `verbrauch_kwh = int(input("Verbrauch in kWh: "))` – `input()` liefert einen `str`, `int()` macht eine Zahl daraus.
  - Konstanten mit `Final` (`GRUNDPREIS`, `PREIS_1` … `OBERGRENZE`).
  - Reihenfolge laut TODOs: Staffelpreis → Grundpreis → Öko-Bonus → Obergrenze.
  - Ausgabe: `f"Gesamtkosten: {kosten:.2f} Euro"`.
- Parkgebühren mit `match fahrzeug:` (VL3 F. 50–51):
  - `"PKW"`: 2,00 €/h, ab 10 h 10 % Rabatt
  - `"Motorrad"`: 1,00 €/h
  - `"Transporter"`: 3,50 €/h, ab 5 h 20 % Rabatt
  - `case _:` ungültiger Fahrzeugtyp → Fehlermeldung
- Danach die Grundgebühr von 1,50 € addieren und den Tageshöchstpreis von 50,00 € beachten (VL3 F. 50–51).
- Für diese Übung gibt es noch keine Musterlösung (Stand 15.10.).

**Klausuraufgaben (Beispiele, ohne Lösung)**
- *Code schreiben:* Programmieren Sie die Stromkosten für `verbrauch_kwh = 280` (ohne `input()`) mit `if`/`elif`/`else` und `Final`-Konstanten. Ausgabe mit zwei Nachkommastellen.
- *Zwischenergebnisse vorhersagen:* Notieren Sie alle Zwischenschritte für „Transporter, 6 Stunden“ und für „PKW, 30 Stunden“.

### T19 – while-Schleife und while True mit break
- Python kommt mit zwei Schleifen aus: `while` (wiederholen, solange eine Bedingung wahr ist) und `for … in …` (für jedes Element einer Folge einmal). Ein **`do`–`while` gibt es nicht** (VL3 F. 53).
- `while` heißt „prüfe zuerst, laufe dann“: Ist die Bedingung von Anfang an `False`, läuft der Block kein einziges Mal (VL3 F. 54).
- Der Zähler muss im Block verändert werden (`zahl = zahl + 1`), sonst entsteht eine Endlosschleife. `if` im Schleifenblock ist möglich, z. B. für gerade Zahlen mit `zahl % 2 == 0` (VL3 F. 55–56).
- „Mindestens einmal“: `while True:` und am Ende `if zahl > 5: break`. Der Block läuft mindestens einmal, weil die Prüfung erst nach dem ersten Durchlauf kommt (VL3 F. 57).
- Typischer Einsatz ist die Eingabeprüfung: so lange fragen, bis `antwort == "j" or antwort == "n"` gilt, dann `break` (VL3 F. 58).

**Klausuraufgaben (Beispiele, ohne Lösung)**
- *Trace-Tabelle:* Notieren Sie `n` und `schritte` für jeden Durchlauf. Was wird ausgegeben?
```python
n = 13
schritte = 0
while n != 1:
    if n % 2 == 0:
        n = n // 2
    else:
        n = 3 * n + 1
    schritte += 1
print(schritte)
```
- *Code schreiben:* Fragen Sie mit `input()` so lange nach einer Zahl, bis sie zwischen 1 und 10 liegt (Muster `while True` mit `break`).

### T20 – for-Schleife und range()
- `for variable in folge:` führt den Block für jeden Wert einmal aus: kein Startwert, keine Bedingung, kein `i++`. Später geht das auch über Listen, Strings und Dateien (VL3 F. 59).
- Folgen mit `range` (VL3 F. 60):
  - `range(5)` → 0, 1, 2, 3, 4
  - `range(1, 6)` → 1 … 5
  - `range(0, 10, 3)` → 0, 3, 6, 9
  - `range(5, 0, -1)` → 5 … 1
  - sichtbar machen mit `list(range(1, 6))`
- **`start` ist dabei, `stop` nicht**: `range(1, 6)` endet bei 5 (VL3 F. 60).
- Javas `for (int i = 1; i <= 5; i++)` entspricht `for i in range(1, 6):` (VL3 F. 61).
- Fakultät: Startwert `ergebnis = 1` (wegen der Multiplikation) und `for i in range(1, n + 1):` – „n + 1, weil stop nicht mehr dazugehört“. Für n = 7 ergibt das 5040 (VL3 F. 62).

**Klausuraufgaben (Beispiele, ohne Lösung)**
- *Was gibt das aus?*
```python
print(list(range(4)))
print(list(range(2, 11, 4)))
print(list(range(10, 0, -3)))
print(list(range(5, 1)))
```
- *Code schreiben:* Berechnen Sie mit `for` und `range` die Summe aller ungeraden Zahlen von 1 bis `n` (einschließlich `n`).

### T21 – break, continue und typische Schleifenfehler
- `break` verlässt die aktuelle Schleife sofort: gesuchter Wert gefunden, Ergebnis steht fest, Benutzer bricht ab („Abbruch mit 0“). `continue` überspringt nur den Rest des aktuellen Durchlaufs, z. B. für negative, ungültige oder uninteressante Werte (VL3 F. 63–65).
- Randnotiz: Ein `else` nach einer Schleife läuft, wenn sie **ohne `break`** endet (VL3 F. 65).
- Endlosschleife: Die Bedingung wird nie `False`, weil `i` nie verändert wird. Abbruch mit Strg+C (`KeyboardInterrupt`) (VL3 F. 66).
- **Off-by-one**: `range(1, 5)` gibt nur 1 bis 4 aus; richtig ist `range(1, 6)`. Bei `while` die Frage: `<=` oder `<`? (VL3 F. 67).
- Falscher Startwert (`i = 10` und `while i < 10:`): keine Ausgabe, keine Fehlermeldung. Falsche Schrittweite (`i = i + 2`): nur 1, 3, 5 (VL3 F. 68–69).

**Klausuraufgaben (Beispiele, ohne Lösung)**
- *Was gibt das aus?*
```python
for i in range(1, 10):
    if i % 3 == 0:
        continue
    if i == 8:
        break
    print(i, end=" ")
print("fertig")
```
- *Fehler finden:* Das Programm soll 10, 9, …, 1 ausgeben. Was passiert tatsächlich? Finden Sie beide Fehler.
```python
i = 10
while i > 1:
    print(i)
i -= 1
```

### T22 – Listen: anlegen, Index, ändern, Slicing, Hilfsfunktionen
- Eine Liste ist eine geordnete Sammlung, erreichbar über einen Index. Anders als ein Java-Array hat sie **keine feste Länge**. Gemischte Typen sind technisch möglich; guter Stil ist ein Typ pro Liste (VL3 F. 71).
- Anlegen (VL3 F. 72):
  - `zahlen = [3, 6, 9, 12, 15]`
  - `leer: list[int] = []` – die Typangabe ist nur bei der leeren Liste nötig
  - `nullen = [0] * 5`
  - `leer.append(42)` hängt hinten an
- Der Index beginnt bei **0**; bei 5 Elementen sind 0–4 gültig. Negative Indizes zählen von hinten (`noten[-1]`). `noten[5]` ergibt `IndexError: list index out of range` (VL3 F. 73).
- Es gibt keine Standardwerte wie bei Javas `new int[5]`. Vorbelegung ausdrücklich mit `[0] * 5`, `[0.0] * 5`, `[False] * 5` oder `[None] * 5`. Meist besser: leere Liste plus `append()` (VL3 F. 74).
- Ändern mit `noten[2] = 9`. Nützlich: `len()` (Java `.length`), `sum`, `min`, `max`, `in`, Slicing `noten[1:3]` (stop exklusiv) und `sorted(noten)`, das eine **sortierte Kopie** liefert (VL3 F. 75–76).

**Klausuraufgaben (Beispiele, ohne Lösung)**
- *Was gibt das aus?*
```python
noten = [12, 7, 15, 9]
noten.append(11)
noten[1] = noten[-1] + 1
print(noten)
print(len(noten), max(noten), noten[1:4])
print(sorted(noten)[0], noten[0])
```
- *Fehlermeldung deuten:* Was liefern `noten[5]` und `noten[-5]` für die Liste oben?

### T23 – Listen durchlaufen: Index, for-each, enumerate, zip
- Mit Index wie in Java: `for i in range(len(noten)):` und darin `noten[i]`. Die Indizes laufen von 0 bis `len(noten) - 1`. Das geht, ist in Python aber nicht der übliche Weg (VL3 F. 77).
- Der Python-Weg entspricht Javas for-each: `for note in noten:` (VL3 F. 78).
- Wert und Position zugleich: `for i, note in enumerate(noten):` (VL3 F. 78).
- Zwei Listen im Gleichschritt: `for tag, wert in zip(tage, werte, strict=True):`. Mit `strict=True` meldet Python einen Fehler, wenn die Listen unterschiedlich lang sind; `ruff check` verlangt diese Angabe (VL3 F. 78).

**Klausuraufgaben (Beispiele, ohne Lösung)**
- *Was gibt das aus?*
```python
tage = ["Mo", "Di", "Mi"]
werte = [18.5, 21.0, 19.2]
for i, tag in enumerate(tage):
    if werte[i] > 19:
        print(f"{i}: {tag} warm")
```
- *Code schreiben:* Gegeben sind `plan = [100, 120, 90]` und `ist = [95, 130, 90]`. Geben Sie mit `zip` je Monat die Abweichung aus und zählen Sie, in wie vielen Monaten der Plan verfehlt wurde.

### T24 – Mehrdimensionale Listen, Verweis-Falle, Tupel
- Eine Liste von Listen bildet eine Tabelle oder Matrix aus Zeilen und Spalten. `matrix[1][2]` ist Zeile 1, Spalte 2; `matrix[0][0] = 10` ändert einen einzelnen Wert (VL3 F. 79).
- Alle Elemente durchgehen: Die äußere Schleife läuft über die Zeilen, die innere über die Werte einer Zeile. `print(wert, end=" ")` verhindert den Zeilenumbruch, ein leeres `print()` bricht um (VL3 F. 80).
- **Falle** `falsch = [[0] * 4] * 3`: `* 3` kopiert nicht die Zeile, sondern nur den **Verweis** darauf. Deshalb ändert `falsch[0][0] = 1` scheinbar alle drei Zeilen (vgl. „Name zeigt auf Objekt“, VL2) (VL3 F. 81).
- Richtig: `matrix: list[list[int]] = []` und dann `for _ in range(3): matrix.append([0] * 4)`. `_` ist der übliche Name für eine Schleifenvariable, die man nicht braucht (VL3 F. 81).
- **Tupel** `punkt = (3, 4)` (VL3 F. 82):
  - runde statt eckige Klammern; lesen wie bei Listen
  - ändern geht nicht: `TypeError: 'tuple' object does not support item assignment`
  - gedacht für feste Zusammenstellungen: Koordinaten, Datum, mehrere Rückgabewerte (VL04)
  - echte Arrays mit festem Typ gibt es im Modul `array` und in NumPy

**Klausuraufgaben (Beispiele, ohne Lösung)**
- *Was gibt das aus? Skizzieren Sie dazu die Verweise im Speicher.*
```python
a = [[0] * 3] * 2
b = []
for _ in range(2):
    b.append([0] * 3)
a[0][1] = 5
b[0][1] = 5
print(a)
print(b)
```
- *Code schreiben:* Geben Sie für `matrix = [[1, 2, 3], [4, 5, 6]]` mit verschachtelten Schleifen jede Zeile und ihre Zeilensumme aus.

### T25 – Übung: Zählen, Multiplikation, Fibonacci, Temperaturen
- Gerade Zahlen von 1 bis 100 ausgeben und zählen, wie viele es sind (Schleife und Bedingung) (VL3 F. 85).
- Zwei positive Zahlen ohne `*` multiplizieren: in einer Schleife `a`-mal die Zahl `b` addieren (VL3 F. 85).
- Die ersten 20 Fibonacci-Zahlen: Start mit `a = 0` und `b = 1`, in jedem Schritt `c = a + b`, dann `a = b` und `b = c`. Kürzer: `a, b = b, a + b` (VL3 F. 86; vgl. VL2 F. 35).
- Temperaturauswertung einer Woche: (1) alle Werte ausgeben, (2) Durchschnitt berechnen, (3) höchsten Wert zeigen. Erst mit einer Schleife, dann mit `sum()` und `max()` (VL3 F. 86).
- Bausteine dahinter: Zähler, Summe und Maximum – erst „von Hand“ mit Schleife, dann mit eingebauten Funktionen (VL3 F. 85–86).

**Klausuraufgaben (Beispiele, ohne Lösung)**
- *Trace-Tabelle:* Notieren Sie `a` und `b` nach jedem Durchlauf. Was wird ausgegeben?
```python
a, b = 0, 1
for _ in range(6):
    print(a, end=" ")
    a, b = b, a + b
```
- *Code schreiben:* Bestimmen Sie für `temperaturen = [18.5, 21.0, 19.2, 23.4, 17.8, 20.1, 22.0]` Durchschnitt und Maximum, ohne `sum()` und `max()` zu verwenden.

### T26 – Übung: Sieb des Eratosthenes
- Ziel: algorithmisches Denken, Listen und Schleifen kombinieren. Gesucht sind alle Primzahlen bis n = 100, markiert in einer `bool`-Liste (VL3 F. 87).
- (1) Eine Liste für die Zahlen 0 bis n anlegen. (2) Alle Zahlen ab 2 als „mögliche Primzahl“ (`True`) markieren (VL3 F. 87).
- (3) Bei der kleinsten Zahl starten, die noch nicht gestrichen ist (anfangs 2); sie ist eine Primzahl. (4) Alle ihre Vielfachen 2·p, 3·p … streichen. (5) Zur nächsten nicht gestrichenen Zahl gehen und Schritt 4 wiederholen (VL3 F. 87).
- (6) Aufhören, wenn die aktuelle Zahl größer als √n ist. (7) Alle nicht gestrichenen Zahlen sind Primzahlen (VL3 F. 87).
- Passende Werkzeuge aus VL3: `[True] * (n + 1)` (VL3 F. 72, 74) und `range(start, stop, schritt)` für die Vielfachen (VL3 F. 60).

**Klausuraufgaben (Beispiele, ohne Lösung)**
- *Von Hand anwenden:* Führen Sie das Sieb für n = 20 durch. Welche Zahlen werden bei p = 2 und p = 3 gestrichen, und warum endet das Verfahren vor p = 5?
- *Code schreiben:* Programmieren Sie das Sieb für n = 100 mit einer `bool`-Liste und `range(2 * p, n + 1, p)`.

### T27 – Funktionen (Material folgt)
- Vermutet laut Agenda (VL1 F. 6) und Vorverweisen: Funktionen mit `def` definieren, Parameter und Rückgabewert mit Typangaben, z. B. `def brutto(netto: float) -> float:` (VL2 F. 8, 10).
- Docstrings im Google-Stil kommen laut Folien „ausführlich ab VL04“ (VL2 F. 8, 10).
- Eigene Gültigkeitsbereiche entstehen erst durch Funktionen (VL2 F. 44). Mehrere Rückgabewerte werden als Tupel geliefert (VL3 F. 82).

**Mögliche Klausuraufgabe (vermutet)**
- *Code schreiben:* Schreiben Sie `kreisflaeche(radius: float) -> float` mit Docstring (Args, Returns) und rufen Sie die Funktion für drei Radien auf.

### T28 – Rekursion (Material folgt)
- Vermutet: Eine Funktion ruft sich selbst auf. Sie braucht einen Basisfall und einen rekursiven Fall, damit sie terminiert (vgl. Algorithmus-Eigenschaft „terminierend“, VL1 F. 10).
- Vermutete Beispiele: Fakultät und Fibonacci, die bereits iterativ geübt wurden (VL3 F. 62, 86).
- Vermutete Aufgabentypen: Aufrufe und Ausgabe vorhersagen; iterativ und rekursiv ineinander umschreiben.

**Mögliche Klausuraufgabe (vermutet)**
- *Code schreiben:* Schreiben Sie die Fakultät rekursiv. Erklären Sie, was ohne Basisfall passiert.

### T29 – OOP I (Material folgt)
- Vermutet: Klassen und Objekte, „Objekte mit Daten und Methoden“ (VL1 F. 26).
- Eigene Klassen als eigene Typen mit Attributen und Methoden (`class Auto: …`, VL2 F. 26); Klassennamen in PascalCase (VL2 F. 45).
- Lernziel „Kontrollstrukturen, Funktionen, Datenstrukturen und Klassen zur Lösung praktischer Probleme anwenden“ (VL1 F. 6).

**Mögliche Klausuraufgabe (vermutet)**
- *Code schreiben:* Modellieren Sie eine Klasse `Konto` mit dem Attribut `saldo` und den Methoden `einzahlen()` und `auszahlen()`.

### T30 – OOP II (Material folgt)
- Inhalt unbekannt; die Agenda nennt nur „Objektorientierte Programmierung I–III“ (VL1 F. 6).
- Vermutet: Vertiefung, z. B. Kapselung oder Beziehungen zwischen Klassen. Wie sich die Themen auf OOP II und III verteilen, ist offen.
- Das Speichermodell (Name zeigt auf Objekt, VL2 F. 30, 40) und die Verweis-Falle (VL3 F. 81) werden bei Objekten vermutlich wieder wichtig.

### T31 – OOP III (Material folgt)
- Inhalt unbekannt (VL1 F. 6).
- Vermutet z. B. Vererbung, Polymorphie und Aufzählungen `class Tag(Enum): …` (Enum angekündigt in VL2 F. 26).
- Nach Erhalt der Folien in Einzelthemen zerlegen.

### T32 – Standardbibliothek (Material folgt)
- „Batteries included“: große Standardbibliothek, dazu Pakete im PyPI (VL1 F. 42). Schon genutzt: `typing.Final` (VL2 F. 47) und `decimal.Decimal` (VL2 F. 78).
- Angekündigt, aber noch nicht behandelt: `dict` und `set` (VL1 F. 14; VL2 F. 26), das Modul `array` (VL3 F. 82), Dateien als Folge in `for` (VL3 F. 59).
- Welche Module konkret drankommen, ist unbekannt.

### T33 – Klausurvorbereitung und Wiederholung (Material folgt)
- Eigener Agendapunkt (VL1 F. 6), vermutlich am letzten Termin (27.11.).
- Erwartet: Klärung von Form, Hilfsmitteln und Aufgabentypen, eventuell Probeaufgaben.
- Bis dahin: die Beispielaufgaben aus diesem Entwurf zum Wiederholen nutzen.

## Typische Klausurfallen

Markierung „(über das Skript hinaus)“ = Python-Verhalten, das nicht auf den Folien steht, aber direkt an deren Inhalt anknüpft.

**Zahlen und Operatoren**
- `/` liefert immer `float`: `6 / 3` → `2.0`, und `x /= 2` macht `x` zum float (VL2 F. 53, 55).
- `//` rundet ab, zur kleineren Zahl hin: `-7 // 2` → `-4`, nicht `-3` wie in Java (VL2 F. 53, 65). (über das Skript hinaus) Passend dazu ist `-7 % 2` → `1`.
- Punkt vor Strich, `**` bindet am stärksten: `5 + 2 / 2` → `6.0` statt Durchschnitt 3.5. Das ist ein Logikfehler ohne jede Meldung (VL2 F. 66, 91).
- `x++` ist ein SyntaxError; `++x` läuft, ändert aber nichts (VL2 F. 58).
- `0.1 + 0.2 == 0.3` ergibt `False`. Floats nie mit `==` auf „krumme“ Werte prüfen (VL2 F. 17, 80).

**Umwandlung und Rundung**
- `int(9.99)` → `9`: schneidet ab, rundet nicht. `int(19.99 * 100)` → `1998` (VL2 F. 72, 78).
- `round(2.675, 2)` → `2.67`, `round(9.5)` → `10` (VL2 F. 72). (über das Skript hinaus) Bei genau .5 rundet Python zur geraden Zahl: `round(2.5)` → `2`, `round(3.5)` → `4`.
- `Decimal("19.99")` als Text übergeben (VL2 F. 78, 81). (über das Skript hinaus) `Decimal(19.99)` übernimmt den float-Fehler (`19.98999…`).
- Text plus Zahl, z. B. `"Alter: " + 36`, ergibt TypeError. `int("zwei")` ergibt ValueError (VL2 F. 73, 77). (über das Skript hinaus) Auch `int("3.5")` ergibt ValueError.
- `True + 1` → `2` und `5 + 2.0` → `7.0`: Automatische Umwandlung gibt es nur zwischen Zahlen (VL2 F. 73).
- `input()` liefert immer `str`. Vor dem Rechnen `int(...)` aufrufen (VL3 F. 49).

**Variablen, Namen, Typen**
- `wert = 3,5` ergibt das Tupel `(3, 5)` statt 3.5 (VL2 F. 43).
- `Zahl` ist nicht `zahl`. `anzahl: int` ohne Wert erzeugt keine Variable → NameError (VL2 F. 43).
- Wird eine Variable nur in einem übersprungenen `if`-Block zugewiesen, folgt ein NameError (VL2 F. 44; VL3 F. 16).
- Typangaben und `Final` werden zur Laufzeit ignoriert: Das Programm läuft, nur ty meldet den Fehler (VL2 F. 34, 47; ML2 uebung2.py).
- `true` und `false` kleingeschrieben sind Fehler; richtig sind `True` und `False` (VL2 F. 22).
- `==` vergleicht den Inhalt; `is` nur für `None` verwenden. `30 == "30"` ergibt `False` (VL2 F. 60–61).
- (über das Skript hinaus) `x = y = []` hängt wie `x = y = 0` zwei Namen an **denselben** Wert (VL2 F. 40). Bei einer veränderlichen Liste ist eine Änderung über `x` auch über `y` sichtbar.

**Strings**
- Index ab 0, `[-1]` ist das letzte Zeichen. Beim Slice gehört stop nicht dazu: `"Hallo"[1:3]` → `"al"` (VL2 F. 70).
- `+` verbindet nur str mit str (VL2 F. 71). Strings sind unveränderlich (VL2 F. 23). (über das Skript hinaus) `s[0] = "h"` ergibt deshalb einen TypeError.

**Bedingungen und Logik**
- Doppelpunkt vergessen → `SyntaxError: expected ':'`. Einrückung vergessen → `IndentationError`. `else` ohne direkt vorangehendes `if` → `SyntaxError` (VL3 F. 31, 33).
- Eine nicht eingerückte Zeile gehört nicht mehr zum Block und läuft immer (VL3 F. 32).
- Bei `elif` gewinnt der erste Treffer. Steht `>= 50` vor `>= 80`, wird der zweite Zweig nie erreicht (VL3 F. 23).
- `match` prüft nur feste Werte, keine Bereiche wie `note < 3`. Kein `break`, kein Durchfallen; `case _` ist der Standardfall (VL3 F. 24–25).
- (über das Skript hinaus) Ein einfacher Name wie `case GRENZE:` vergleicht nicht mit der Konstanten, sondern fängt **jeden** Wert ab. Folgen danach weitere Fälle, gibt es einen SyntaxError. Darum `Final`-Konstanten nicht als case-Muster verwenden.
- Wahrheitswerte: `"0"`, `" "`, `[0]` und `-1` sind wahr; `0`, `0.0`, `""`, `[]` und `None` sind falsch (VL3 F. 29).
- Rangfolge `not` vor `and` vor `or`: `a or b and not c` heißt `a or (b and (not c))`. Für „(Kind oder Senior) und Ausweis“ sind Klammern nötig (VL3 F. 37–38).
- Kurzschlussauswertung: Die Absicherung gehört nach vorn (`x != 0 and 10 / x > 1`); vertauscht gibt es einen ZeroDivisionError (VL3 F. 43).
- `&&`, `||` und `!` gibt es nicht; in Python heißen sie `and`, `or` und `not` (VL2 F. 51).

**Schleifen und range**
- `range(stop)` beginnt bei 0, und stop ist nie enthalten: `range(1, 5)` → 1…4. Fakultät daher mit `range(1, n + 1)` (VL3 F. 60, 62, 67).
- Rückwärts: `range(5, 0, -1)` → 5…1, ohne die 0 (VL3 F. 60). (über das Skript hinaus) `range(5, 1)` ohne negative Schrittweite ist leer.
- Die `while`-Bedingung ist eine **Laufbedingung** („solange wahr“). Das Schema auf VL3 F. 13 fragt dagegen „Abbruchbedingung erfüllt?“ (VL3 F. 7, 13, 54). Flussdiagramme genau lesen.
- Wird der Zähler nicht verändert oder ist `i -= 1` nicht eingerückt, entsteht eine Endlosschleife (VL3 F. 55, 66).
- Ein falscher Startwert lässt die Schleife ohne jede Meldung nie laufen (VL3 F. 68). Auch eine falsche Schrittweite fällt nicht von selbst auf (VL3 F. 69).
- `break` beendet die Schleife, `continue` nur den aktuellen Durchlauf. Das `else` nach einer Schleife läuft nur ohne break (VL3 F. 63–65). (über das Skript hinaus) `break` verlässt nur die innerste Schleife.
- Es gibt kein `do`–`while`. „Mindestens einmal“ schreibt man als `while True:` mit `break` (VL3 F. 57).

**Listen und Tupel**
- Bei 5 Elementen sind 0–4 bzw. −5…−1 gültig; `noten[5]` ergibt IndexError (VL3 F. 73). (über das Skript hinaus) Slicing über das Ende hinaus ist kein Fehler: `[1, 2, 3][1:10]` → `[2, 3]`.
- Es gibt keine automatischen Standardwerte: leere Liste plus `append` oder `[0] * n` (VL3 F. 74).
- `sorted(liste)` liefert eine sortierte Kopie, das Original bleibt unverändert (VL3 F. 76). (über das Skript hinaus) `liste.sort()` sortiert dagegen die Liste selbst und gibt `None` zurück.
- `[[0] * 4] * 3` erzeugt drei Verweise auf **dieselbe** Zeile (VL3 F. 81).
- `zip(…, strict=True)` meldet einen Fehler bei unterschiedlicher Länge (VL3 F. 78). (über das Skript hinaus) Es ist ein ValueError.
- Tupel sind unveränderlich: `punkt[0] = 5` ergibt einen TypeError (VL3 F. 82).
- Fibonacci-Falle: `a = b` und danach `b = a + b` rechnet mit dem schon überschriebenen `a`. Richtig ist `a, b = b, a + b`, weil Python zuerst die ganze rechte Seite auswertet (VL3 F. 86; VL2 F. 42).

**Prüfwerkzeuge und Laufzeit**
- Bei einem Syntaxfehler startet das Programm gar nicht, es gibt also keine Teilausgabe (VL1 F. 46; VL2 F. 88). (über das Skript hinaus) Bei einem Laufzeitfehler erscheinen die Ausgaben vor der Fehlerzeile dagegen schon.
- ty findet Typfehler vor dem Start, aber keine Division durch 0 und keine Logikfehler (VL2 F. 89–91).

## Visualisierungsideen

| Themen | Visualisierung | Was sie zeigt |
|---|---|---|
| T01 | Interaktive HTML-Seite „Stack vs. Queue“ | Beim Hineinlegen und Entnehmen von Elementen wird LIFO (Zurück-Taste) gegenüber FIFO (Druckerwarteschlange) sichtbar. |
| T02 | Mermaid-Flowchart mit drei Spuren | Die Wege Interpreter, Compiler und Zwischencode (Quellcode → … → Ergebnis) nebeneinander; markiert ist, wo CPython mit Bytecode, VM und JIT liegt. |
| T03 | Mermaid-Baum der Werkzeugkette | uv → CPython 3.14 → Standardbibliothek sowie `.venv` → ruff und ty, je Werkzeug mit dem passenden Befehl. |
| T04–T05 | SVG „Zeichen → Unicode-Nummer → Bits“ plus Mermaid-Typbaum | Wie auf VL2 F. 19–21: `"A"` ist intern 65 = 01000001. Der Baum ordnet int, float, bool, str, None, Sammlungen und Klassen ein. |
| T06–T07 | Speicher-/Referenzskizze als SVG in 8 Schritten | Namensschilder mit Pfeilen auf Werte für `zahl = 10` … `a, b = b, a` (wie VL2 F. 36–42). Dazu der Fall „Schild fehlt“ beim NameError. |
| T08–T09 | Interaktiver Operator-Rechner (HTML) plus Ausdrucksbaum (SVG) | Für Eingaben a und b zeigt er `a / b`, `a // b` und `a % b` auf einem Zahlenstrahl (Abrunden bei negativen Zahlen). Der Baum zeigt die Auswertungsreihenfolge von `2 + 3 * 4` und `5 + 2 / 2`. |
| T10 | Index-Leiste als HTML-Slicer | `"Hallo"` mit den Indizes 0…4 und −5…−1; ein Schieberegler markiert den Ausschnitt `[start:stop]` mit exklusivem stop. |
| T11 | Mermaid-Graph der Umwandlungen plus Bit-Grafik zu 0.1 | Pfeile für automatische (bool → int → float) und explizite Umwandlung (int(), float(), str()) mit Fehlerkanten zu TypeError und ValueError; daneben, warum 0.1 + 0.2 ≠ 0.3 ist. |
| T12 | Matrix „Vier Fehler, drei Prüfer“ plus annotierter Traceback (SVG) | Je Fehlerart, welcher Prüfer anschlägt (ruff, ty, uv run). Der Traceback trägt die Lese-Reihenfolge 1–3 von unten nach oben. |
| T13 | Drei Mermaid-Flowcharts mit Code daneben | Sequenz, Selektion und Iteration wie auf VL3 F. 7, jeweils neben dem passenden Python-Code. |
| T14–T16 | Mermaid-Flowchart der Temperaturkaskade plus klickbare Wahrheitswert-Tabelle (HTML) | Das Flowchart zeigt, dass `elif` beim ersten Treffer stoppt. In der Tabelle lässt sich für Werte wie 0, "0", [], [0] und None prüfen, ob sie wahr oder falsch sind. |
| T17 | Wahrheitstabelle plus Kurzschluss-Animation (HTML) | and, or, not und XOR für alle Kombinationen. Die Animation färbt, welcher Teilausdruck tatsächlich ausgewertet wird. |
| T18 | Mermaid-Flowchart der Rechenwege | Stromkosten: Staffelpreis → Grundpreis → Öko-Bonus → Deckel. Parkgebühren: match-Zweige → Rabatt → Grundgebühr → Höchstpreis. |
| T19–T21 | Schrittweise Trace-Tabelle (HTML) plus range-Zahlenstrahl | Je Durchlauf die Variablenwerte, die Bedingung und die Ausgabe. Der Zahlenstrahl zeigt start als gefüllten und stop als leeren Punkt und macht so Off-by-one-Fehler sichtbar. |
| T22–T23 | Interaktive Listen-Ansicht (HTML) | Indizes, Slicing, `append` und die Paare von `enumerate` und `zip` je Schleifendurchlauf. |
| T24 | Speicher-/Referenzskizze als SVG | `[[0] * 4] * 3` (drei Pfeile auf eine Zeile) gegenüber der append-Variante mit drei eigenen Zeilen; dazu das Tupel als „verschlossene“ Box. |
| T25 | Trace-Tabelle Fibonacci | `a` und `b` je Durchlauf. Sie zeigt das gleichzeitige Weiterschieben mit `a, b = b, a + b` im Vergleich zur falschen Variante `a = b; b = a + b`. |
| T26 | Interaktive HTML-Animation des Siebs | Ein Gitter von 2 bis 100, in dem schrittweise die Vielfachen von p gestrichen werden; Stopp bei p > √n. |
| T27–T28 | Aufrufstapel-Visualisierung (SVG/HTML, nach Erhalt des Materials) | Der Stapel der Funktionsaufrufe, z. B. `fakultaet(4)` bis zum Basisfall, und der Rückweg der Rückgabewerte. |
| T29–T31 | Mermaid-classDiagram (nach Erhalt des Materials) | Klassen mit Attributen, Methoden und Beziehungen. |
| T32–T33 | Interaktive Quiz-Seite „Was gibt das aus?“ | Sammelt die Beispielaufgaben aller Themen mit aufdeckbarer Lösung zur Wiederholung vor der Klausur. |
