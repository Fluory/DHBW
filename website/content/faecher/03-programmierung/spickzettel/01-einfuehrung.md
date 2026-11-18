## Algorithmus

Eine genaue, endliche Schrittfolge, die ein Problem löst. Jeder Schritt ist ohne Rückfrage ausführbar.

Anforderungen: **Endlichkeit**, **Ausführbarkeit**, **Korrektheit**, **Effizienz**.

| Begriff | Bedeutung |
|---|---|
| terminierend | endet nach endlich vielen Schritten |
| determiniert | gleiche Eingabe → gleiches **Ergebnis** |
| deterministisch | nächster Schritt immer eindeutig → gleicher **Weg** |

Merksatz: Deterministisch ist immer auch determiniert, umgekehrt nicht.

- `while n != 0: n -= 2` mit erlaubtem n = 5: 5, 3, 1, −1 … endet nie → **nicht terminierend**.
- Münzwurf, ob von vorne oder hinten addiert wird: Weg zufällig, Summe gleich → determiniert, **nicht deterministisch**.
- Würfeln mit `random`: weder determiniert noch deterministisch.

## Datenstrukturen

| Struktur | Idee | Beispiel |
|---|---|---|
| Array | gleicher Typ, hintereinander, Index | Matrizen |
| Liste | Elemente verweisen aufeinander | dynamische Sammlungen |
| Baum | Knoten mit Unterknoten | Dateisystem |
| Graph | Knoten und Kanten | Routenplanung |
| Stack | LIFO: Letztes zuerst raus | Zurück-Taste |
| Queue | FIFO: Erstes zuerst raus | Druckaufträge, Rechnungen nach Eingang |

In Python eingebaut: `list`, `tuple`, `dict`, `set`.

## Paradigmen

Imperativ (C), objektorientiert (Java), funktional (Haskell), deklarativ (SQL). Python ist **multiparadigmatisch**.

## Vom Quellcode zum Programm

| Variante | Ablauf | Beispiele |
|---|---|---|
| Interpreter | Anweisung für Anweisung sofort ausführen | Shell, PHP |
| Compiler | vorab alles in Maschinencode | C, C++, Rust, Go |
| Zwischencode | Bytecode, eine VM führt ihn aus | Java, C#, Python |

- Compiler: schnell, aber vor jedem Test kompilieren, nur eine Zielplattform.
- JIT: VM übersetzt oft genutzten Code zur Laufzeit in Maschinencode.
- `uv run p.py`: CPython prüft die Syntax, übersetzt in **Bytecode**, die **Python-VM** (ein Programm, kein Bauteil) führt ihn aus. Keine `.exe`, kein Java, kein Server.

## Werkzeuge

| Aufruf | Aufgabe |
|---|---|
| `uv init --bare prog1` | Projekt anlegen |
| `uv add paket` | Paket von pypi.org holen (`--dev`: Werkzeug) |
| `uv run hallo.py` | Programm starten |
| `uv run ruff check .` | Stil, typische Fehler (z. B. unbenutzter Import) |
| `uv run ty check` | Typen **vor dem Start** prüfen (`"3"` statt `int`) |
| `uv run pytest` | Tests `test_…` in `test_*.py` ausführen |

`import paket` lädt nichts herunter: ohne `uv add` → `ModuleNotFoundError`.

## Module und Importe

| Import | klappt | `NameError` |
|---|---|---|
| `import math` | `math.ceil(3.2)` | `ceil(3.2)` |
| `from math import ceil` | `ceil(3.2)` | `math.ceil(3.2)` |

`math.ceil` rundet **auf** (3.2 → 4, −3.2 → −3), `math.floor` **ab**. Eigene Datei `preise.py` = Modul: `from preise import brutto`. Beim Import läuft die ganze Datei, deshalb:

```python
if __name__ == "__main__":  # nur bei direktem Start
    main()
```

## Das erste Programm

`print("Hello World!")` gibt `Hello World!` aus, `#` leitet einen Kommentar ein.

- Einrückung bildet Blöcke (4 Leerzeichen), Doppelpunkt leitet sie ein.
- Kein Semikolon, eine Zeile = eine Anweisung.
- Groß-/Kleinschreibung zählt: `Print` ≠ `print`.
- Konsole (`>>>`) zeigt Werte auch ohne `print`, Text mit Anführungszeichen: `'Hallo'`. In einer `.py`-Datei brauchst du `print()`.

## Syntaxfehler oder Laufzeitfehler?

Beim Start prüft CPython zuerst die **Syntax der ganzen Datei**, dann läuft sie Zeile für Zeile.

- `Print("B")` in Zeile 2: Zeile 1 läuft, dann `NameError` (Laufzeitfehler).
- `print("B"` ohne `)` in Zeile 2: `SyntaxError`, **keine** Zeile läuft, auch Zeile 1 nicht.

## Typische Fehler

- Determiniert (Ergebnis) und deterministisch (Weg) verwechselt, terminierend (Ende) mit determiniert.
- Nach `from math import ceil` trotzdem `math.ceil`: `NameError`.
- LIFO und FIFO vertauscht.
- „Python ist eine reine Interpretersprache“: falsch, Python nutzt Zwischencode.
- Nicht ausführbarer Schritt wie „Rechnung prüfen“, kein Fall für Abweichungen.
- `Print` statt `print`, fehlendes Anführungszeichen oder Klammer.
- In der `.py`-Datei Ausdruck ohne `print()` und Ausgabe erwartet.
