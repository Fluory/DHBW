Dieses Kapitel liefert die Begriffe, die du vor dem eigentlichen Programmieren brauchst. Es geht um drei Fragen: Was ist ein Algorithmus? Wie wird aus einer Textdatei ein laufendes Programm? Und warum bricht ein Programm manchmal sofort ab und manchmal erst später? Viele Wissensfragen der Klausur kommen genau von hier.

### Algorithmen und Datenstrukturen

Ein Algorithmus ist eine Schrittfolge, die so genau ist, dass man sie ohne Rückfrage abarbeiten kann. Er soll endlich, ausführbar, korrekt und effizient sein. Drei Eigenschaften werden gern verwechselt. **Terminierend** heißt: Er hört bei jeder erlaubten Eingabe auf. **Determiniert** heißt: Gleiche Eingabe, gleiches Ergebnis. **Deterministisch** heißt: Jeder nächste Schritt steht fest, also gleicher Weg. Wer den Weg festlegt, legt damit auch das Ergebnis fest. Deshalb gilt: deterministisch ⇒ determiniert, aber nicht umgekehrt. Eine einzige erlaubte Eingabe ohne Ende reicht, und der Algorithmus ist nicht terminierend.

Algorithmen arbeiten mit Datenstrukturen. Merk dir vor allem zwei Paare. Ein Stapel arbeitet nach LIFO (das Letzte kommt zuerst raus), eine Warteschlange nach FIFO (das Erste zuerst). Hierarchien legt man in einem Baum ab, beliebige Verbindungen in einem Graphen.

### Vom Quellcode zum Programm

Ein Prozessor versteht nur Maschinensprache. Dein Code muss also übersetzt werden. Ein Interpreter übersetzt Zeile für Zeile, ein Compiler alles vorab. Python nutzt den dritten Weg, den Zwischencode: CPython prüft die Syntax der ganzen Datei, übersetzt sie in **Bytecode**, und die **Python-VM** führt ihn aus. „Python ist eine reine Interpretersprache“ ist deshalb laut Folien falsch.

Daraus folgt der wichtigste Unterschied bei Fehlern. Ein **Syntaxfehler** wie eine fehlende Klammer fällt vor dem Start auf. Dann läuft keine einzige Zeile. Ein **Laufzeitfehler** wie `Print` statt `print` fällt erst auf, wenn die Zeile drankommt. Alles davor läuft noch. Eine Fehlermeldung liest du von unten: Was ist passiert, dann wo.

### Werkzeuge und Importe

Im Kurs startet `uv` alles: `uv add paket` holt ein Paket, `uv run datei.py` startet ein Programm. `ruff` findet Stilfehler und unbenutzte Importe. `ty` prüft die Typen vor dem Start. `pytest` führt Tests aus. Ein `import` lädt nichts aus dem Internet. Bei Modulen gilt: Nach `import math` schreibst du `math.ceil(…)`, nach `from math import ceil` nur `ceil(…)`. `if __name__ == "__main__":` sorgt dafür, dass `main()` nur beim direkten Start läuft, nicht beim Import.

### Ein Beispiel, das alles verbindet

```python
import math

print(math.ceil(7 / 2), math.floor(7 / 2))
print(ceil(7 / 2))
```

```text
4 3
Traceback (most recent call last):
  File "beispiel.py", line 4, in <module>
    print(ceil(7 / 2))
          ^^^^
NameError: name 'ceil' is not defined
```

Die Syntax ist in Ordnung, also startet das Programm. Zeile 3 rechnet 7 / 2 = 3.5, aufgerundet 4, abgerundet 3. Erst Zeile 4 bricht ab: Nach `import math` gibt es den Namen `ceil` allein nicht. Das ist ein Laufzeitfehler, deshalb steht die erste Ausgabe schon da. Fehlte in Zeile 3 eine Klammer, käme gar keine Ausgabe.

### Das musst du können

- terminierend, determiniert und deterministisch an einem Beispiel unterscheiden
- Stapel (LIFO) und Warteschlange (FIFO) zuordnen
- den Weg Quellcode → Bytecode → Python-VM beschreiben
- Syntaxfehler und Laufzeitfehler unterscheiden und sagen, was dann ausgegeben wird
- sagen, welches Werkzeug was prüft (uv, ruff, ty, pytest)
- `import math` und `from math import ceil` richtig benutzen
