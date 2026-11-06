---
title: "Einführung: Algorithmen, Übersetzung und das erste Programm"
order: 1
summary: "Was ein Algorithmus ist, welche Datenstrukturen es gibt, wie aus Quellcode ein laufendes Programm wird und mit welchen Werkzeugen der Kurs arbeitet."
klausur: "relevant"
---

Bevor du programmierst, brauchst du ein paar Begriffe. Was ist ein Algorithmus? Wie wird aus einer Textdatei ein Programm, das läuft? Und warum bricht ein Programm manchmal sofort ab und manchmal erst in Zeile 2?

Ein Alltagsbeispiel: Ein Kochrezept ist ein Algorithmus. Es beschreibt Schritt für Schritt, wie du zum Ergebnis kommst. Ein Programm ist ein Algorithmus, der in einer Programmiersprache aufgeschrieben ist. In diesem Kapitel wird noch wenig programmiert. Dafür kommen viele Begriffe vor, die sich gut für Wissensfragen in der Klausur eignen (VL1).

## Algorithmen

### Was ist das?

Ein Algorithmus ist eine Schrittfolge, die ein Problem systematisch löst (VL1 F. 10). Er hängt nicht von einer bestimmten Programmiersprache ab. Jeder Schritt muss so genau sein, dass eine Person oder ein Computer ihn ohne Rückfrage ausführen kann.

Vier Anforderungen gehören dazu:

- **Endlichkeit:** Der Algorithmus endet nach endlich vielen Schritten.
- **Ausführbarkeit:** Jeder Schritt lässt sich wirklich ausführen. „Rechnung prüfen“ allein reicht nicht, weil unklar ist, was genau geprüft wird.
- **Korrektheit:** Er liefert das richtige Ergebnis.
- **Effizienz:** Er geht sparsam mit Zeit und Speicher um.

Drei Eigenschaften klingen ähnlich und werden oft verwechselt (F. 11):

| Begriff | Bedeutung | Merkhilfe |
|---|---|---|
| terminierend | endet bei jeder erlaubten Eingabe nach endlich vielen Schritten | Er hört auf. |
| determiniert | gleiche Eingabe und gleiche Startbedingungen liefern immer dasselbe Ergebnis | Es geht um das **Ergebnis**. |
| deterministisch | zu jedem Zeitpunkt ist der nächste Schritt eindeutig festgelegt | Es geht um den **Weg**. |

Ein deterministischer Algorithmus ist immer auch determiniert: Wenn jeder Schritt feststeht, kommt bei gleicher Eingabe dasselbe heraus. Umgekehrt gilt das nicht. Ein Algorithmus kann auf verschiedenen Wegen zum selben Ergebnis kommen.

> [!NOTE]
> **Beispiel: Nachbestellung im Lager (F. 12–15)**
> Jeder Artikel hat einen Bestand, einen Meldebestand und einen Höchstbestand.
>
> 1. Nimm den nächsten Artikel aus der Lagerliste.
> 2. Ist der Bestand kleiner als der Meldebestand? Wenn nein: weiter mit Schritt 5.
> 3. Bestellmenge = Höchstbestand − Bestand.
> 4. Bestellung über die Bestellmenge auslösen.
> 5. Noch Artikel in der Liste? Ja: weiter mit Schritt 1. Nein: fertig.
>
> Schrauben M8 (Bestand 12, Meldebestand 20, Höchstbestand 100): 100 − 12 = 88 Stück. Dichtringe (45, 30, 150): nichts, weil 45 nicht kleiner als 30 ist. Muttern M8 (8, 25, 120): 120 − 8 = 112 Stück. Schritt 2 ist schon eine Verzweigung, Schritt 5 eine Schleife. Beides kommt in Python in Kapitel 4.

> [!IMPORTANT]
> **Das Wichtigste**
> Ein Algorithmus ist eine genaue, endliche Schrittfolge. Determiniert betrifft das Ergebnis, deterministisch den Weg.

> [!WARNING]
> **Achtung**
> Ein Schritt wie „Rechnung prüfen“ ist nicht ausführbar. Schreib genau hin, was verglichen wird. Und denk an den Fall, dass etwas nicht stimmt. Sonst endet der Algorithmus nicht sauber.

## Datenstrukturen

### Was ist das?

Eine Datenstruktur legt fest, wie Daten organisiert und gespeichert werden, damit man schnell auf sie zugreifen und sie ändern kann (F. 17). Alle Programme bestehen aus Algorithmen und Datenstrukturen (F. 21).

| Struktur | Idee | Eigenschaft | Beispiel |
|---|---|---|---|
| Array | Elemente gleichen Typs hintereinander im Speicher | schneller Zugriff über den Index, feste Größe | Matrizen |
| Liste | Elemente verweisen aufeinander | flexible Größe, Einfügen und Löschen günstig | dynamische Sammlungen |
| Baum | Knoten mit untergeordneten Knoten | gut für Hierarchien und Suche | Dateisystem |
| Graph | Knoten und Kanten | beliebige Beziehungen | Routenplanung |
| Stapel (Stack) | LIFO: Last In, First Out | nur das oberste Element ist erreichbar | Zurück-Taste im Browser |
| Warteschlange (Queue) | FIFO: First In, First Out | vorne entnehmen, hinten anfügen | Druckaufträge |

In Python sind `list`, `tuple`, `dict` und `set` schon eingebaut (F. 19). Laut Musterlösung zu Übung 1 passt zu Rechnungen, die in der Reihenfolge ihres Eingangs bearbeitet werden, eine Warteschlange.

> [!IMPORTANT]
> **Das Wichtigste**
> Stack = LIFO (das Letzte kommt zuerst wieder raus). Queue = FIFO (das Erste kommt zuerst wieder raus). Hierarchie = Baum, beliebige Verbindungen = Graph.

> [!WARNING]
> **Achtung**
> LIFO und FIFO nicht verwechseln. Merkhilfe: Beim Tellerstapel nimmst du den obersten Teller, also den zuletzt abgelegten. An der Supermarktkasse kommt dran, wer zuerst da war.

## Von der Maschinensprache zu Python

### Was ist das?

Ein Prozessor führt nur Maschinensprache aus, also Befehle in binärer Form. Für Menschen ist das unlesbar. Deshalb bekommt jeder Maschinenbefehl eine Kurzschreibweise, den Assembler-Befehl, etwa `MOV` (Wert laden), `ADD` (addieren), `CMP` (vergleichen) oder `JE` (springen, falls gleich) (F. 28–29). Assembler hängt vom Prozessortyp ab und ist mühsam. Deshalb gibt es seit den 1950er-Jahren höhere Programmiersprachen, die von der Hardware absehen (F. 30).

Früher teilte man Sprachen in Generationen ein (F. 31). Heute spricht man von **Paradigmen**, die nebeneinander bestehen (F. 32):

| Paradigma | Idee | Beispiel |
|---|---|---|
| imperativ/prozedural | Schritt für Schritt Anweisungen | C |
| objektorientiert | Objekte mit Daten und Methoden | Java |
| funktional | Funktionen ohne Seiteneffekte | Haskell |
| deklarativ/logisch | beschreiben, was erreicht werden soll | SQL |

Python ist **multiparadigmatisch**: Es vereint mehrere Ansätze.

## Vom Quellcode zum Programm

### Was ist das?

Es gibt drei Wege, Quellcode auszuführen (F. 37–42):

| Variante | Ablauf | Vorteil | Nachteil | Beispiele |
|---|---|---|---|---|
| Interpreter | liest Anweisung für Anweisung und führt sie sofort aus | schnelles Ausprobieren | langsamere Ausführung | Shell-Skripte, PHP |
| Compiler | übersetzt den ganzen Code vorab in Maschinencode | hohe Geschwindigkeit | vor jedem Test kompilieren, läuft nur auf der Zielplattform | C, C++, Rust, Go |
| Zwischencode | Compiler erzeugt Bytecode, eine virtuelle Maschine (VM) führt ihn aus | läuft auf vielen Plattformen | Laufzeitumgebung nötig | Java, C#, Python |

Die Grenzen verschwimmen. Viele VMs übersetzen oft genutzten Code während der Laufzeit in Maschinencode. Das heißt JIT (Just-in-Time) (F. 43–44). Für Python gilt (F. 45): Der Standard-Interpreter heißt **CPython**. Er übersetzt deine Datei in Bytecode und führt ihn in der Python-VM aus.

> [!IMPORTANT]
> **Das Wichtigste**
> Python gehört laut Folien zur Variante Zwischencode: Quellcode → Bytecode → Python-VM. Für dich ist das ein einziger Schritt.

> [!WARNING]
> **Achtung**
> „Python ist eine reine Interpretersprache“ ist laut Folien falsch. Diese Aussage ist eine typische Falle.

## Python und die Werkzeuge im Kurs

### Was ist das?

Python wurde ab 1989 von Guido van Rossum entwickelt und 1991 veröffentlicht. Der Name kommt von der Comedy-Gruppe Monty Python (F. 54). Python 3 erschien 2008 und ist nicht kompatibel zu Python 2. Im Kurs nutzen wir Python 3.14.

Wichtige Eigenschaften (F. 56):

- **multiparadigmatisch:** einfache Skripte ohne Klassen, bei Bedarf voll objektorientiert
- **plattformunabhängig:** derselbe Code läuft überall, wo Python installiert ist
- **dynamisch, aber stark typisiert:** Jeder Wert hat einen festen Typ, Variablen haben keinen (mehr in Kapitel 3)
- **automatische Speicherverwaltung**
- **„Batteries included“:** große Standardbibliothek und viele Pakete im Python Package Index (PyPI)

| Werkzeug | Aufgabe | Aufruf |
|---|---|---|
| uv | installiert Python, legt Projekte an, verwaltet Pakete, startet Programme | `uv run hallo.py` |
| ruff | formatiert den Code und findet typische Fehler | `uv run ruff check .` |
| ty | prüft die Datentypen, ohne das Programm auszuführen | `uv run ty check` |

Im Kurs entsteht der Code von Hand in einem einfachen Texteditor, ohne IDE und ohne KI-Assistent (F. 60). Im Editor stellst du den Tabulator auf 4 Leerzeichen und speicherst als UTF-8 (F. 61). Im Terminal reichen wenige Befehle: `pwd` (wo bin ich?), `ls` bzw. `dir` (Inhalt zeigen), `cd prog1` (Ordner wechseln), `cd ..` (eine Ebene hoch) (F. 62).

Mit `uv run python` startest du die **interaktive Konsole**. Hinter `>>>` tippst du eine Anweisung, Python zeigt das Ergebnis sofort an (F. 46–49). Die Konsole zeigt Werte auch ohne `print()`. Texte stehen dann in Anführungszeichen: `'Hallo DHBW'` ist die Darstellung des Werts, `Hallo DHBW` die Ausgabe von `print`. In einer `.py`-Datei brauchst du immer `print()`, sonst siehst du nichts (Musterlösung Übung 2).

## Das erste Programm

### Was ist das?

```python
# Unser erstes Programm
print("Hello World!")
```

```text
Hello World!
```

`print(...)` gibt Text aus. Text steht in Anführungszeichen. `#` leitet einen Kommentar ein (F. 68). Anders als in Java brauchst du keine Klasse und keine `main`-Methode. Python führt die Datei von oben nach unten aus. Die wichtigsten Syntaxregeln (F. 69):

- Einrückung bildet Blöcke. Standard sind 4 Leerzeichen.
- Ein Doppelpunkt leitet einen Block ein.
- Kein Semikolon: eine Zeile, eine Anweisung.
- Groß- und Kleinschreibung zählt: `Print` ist nicht `print`.

### Was bei `uv run hallo.py` passiert

So läuft der Start ab (F. 71–75):

1. uv findet das Projekt und wählt Python 3.14.
2. CPython prüft zuerst die **Syntax der ganzen Datei**.
3. Erst dann wird die Datei in Bytecode übersetzt und ausgeführt.

Daraus folgt ein wichtiger Unterschied. Ein Tippfehler im Namen ist ein **Laufzeitfehler**. Die erste Zeile läuft noch:

```python
print("Lena Wagner")
Print("Muster GmbH, Heilbronn")
print("Lieblingsort: Bodensee")
```

```text
Lena Wagner
Traceback (most recent call last):
  File "beispiel.py", line 2, in <module>
    Print("Muster GmbH, Heilbronn")
    ^^^^^
NameError: name 'Print' is not defined. Did you mean: 'print'?
```

Eine fehlende Klammer ist ein **Syntaxfehler**. Dann läuft gar nichts, auch nicht die richtige erste Zeile (F. 76):

```python
print("Lena Wagner")
print("Muster GmbH, Heilbronn"
print("Lieblingsort: Bodensee")
```

```text
  File "beispiel.py", line 2
    print("Muster GmbH, Heilbronn"
         ^
SyntaxError: '(' was never closed
```

ruff und ty finden den Tippfehler `Print` schon vor dem Start (Musterlösung Übung 4).

> [!IMPORTANT]
> **Das Wichtigste**
> Python prüft vor dem Start die Syntax der ganzen Datei. Bei einem Syntaxfehler läuft keine einzige Zeile. Ein falscher Name fällt erst auf, wenn die Zeile ausgeführt wird.

> [!WARNING]
> **Achtung**
> Typische Fehler in VL1: `Print` statt `print`. Ein fehlendes Anführungszeichen. In einer `.py`-Datei einen Ausdruck ohne `print()` hinschreiben und eine Ausgabe erwarten. Tabs und Leerzeichen mischen.

### Eine Fehlermeldung lesen

Der Dozent nennt das Lesen von Fehlermeldungen die wichtigste Fähigkeit beim Programmieren (VL1 F. 60). So gehst du vor:

1. Lies die **letzte Zeile**: Was ist passiert? Zum Beispiel `NameError`.
2. Lies die Zeile darüber: **Wo?** Datei und Zeilennummer.
3. Lies den Hinweis bis zum Ende. Neuere Python-Versionen schlagen oft den richtigen Namen vor: `Did you mean: 'print'?`

## Übungen

> [!TIP]
> **Übung 1 · leicht**
> Welche Datenstruktur passt? (a) Druckaufträge, (b) Zurück-Taste im Browser, (c) Ordner mit Unterordnern, (d) Straßennetz für die Routenplanung, (e) Rechnungen in der Reihenfolge ihres Eingangs.
>
> Quelle: VL1, Übung 1 (sinngemäß) und eigene Ergänzung

> [!TIP]
> **Übung 2 · leicht**
> Erkläre den Unterschied zwischen *determiniert* und *deterministisch* in je einem Satz.
>
> Quelle: VL1 F. 11, eigene Aufgabe

> [!TIP]
> **Übung 3 · mittel**
> Ordne Interpreter, Compiler und Zwischencode zu: C, Java, Python, Shell-Skript. Nenne für den Compiler einen Vorteil und einen Nachteil.
>
> Quelle: VL1 F. 37–45, eigene Aufgabe

> [!TIP]
> **Übung 4 · mittel**
> Was zeigt die Konsole bei `print("Hallo DHBW")` und was bei `"Hallo DHBW"`? Was ergeben `15 * 4` und `60 * 45 / 60`?
>
> Quelle: VL1 F. 51, Übung 2 (sinngemäß)

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> Ein Programm hat drei `print`-Zeilen. (a) In Zeile 2 steht `Print` statt `print`. (b) Stattdessen fehlt in Zeile 2 die schließende Klammer. Was wird jeweils ausgegeben? Begründe mit dem Ablauf beim Start.
>
> Quelle: VL1 F. 77, Übung 4 (sinngemäß)

> [!TIP]
> **Übung 6 · Prüfungsniveau**
> Beschreibe in nummerierten Schritten, wie eine Lieferantenrechnung geprüft wird, bevor sie bezahlt wird. Bestellung und Lieferschein liegen vor. Welcher Schritt fängt den Fall „Rechnung über 50 Stück, geliefert wurden 40“ ab?
>
> Quelle: VL1 F. 25, Übung 1 (sinngemäß)

## Lösungen

### Übung 1

(a) Warteschlange (FIFO). (b) Stapel (LIFO). (c) Baum. (d) Graph. (e) Warteschlange (FIFO), so auch die offizielle Musterlösung.

### Übung 2

Determiniert: Bei gleicher Eingabe kommt immer dasselbe Ergebnis heraus. Deterministisch: Zu jedem Zeitpunkt steht eindeutig fest, welcher Schritt als nächstes kommt. Das Erste betrifft das Ergebnis, das Zweite den Weg.

### Übung 3

- Compiler: C.
- Zwischencode: Java (JVM) und Python (Bytecode + Python-VM).
- Interpreter: Shell-Skript.

Compiler: Vorteil ist die schnelle Ausführung. Nachteil: Vor jedem Test muss kompiliert werden, und das Ergebnis läuft nur auf der Zielplattform.

### Übung 4

1. `print("Hallo DHBW")` gibt `Hallo DHBW` aus, ohne Anführungszeichen.
2. `"Hallo DHBW"` zeigt die Darstellung des Werts: `'Hallo DHBW'`, mit Anführungszeichen.
3. `15 * 4` ergibt `60`.
4. `60 * 45 / 60` ergibt `45.0`. Der Operator `/` liefert immer eine Kommazahl.

```python
print("Hallo DHBW")
print(repr("Hallo DHBW"))
print(15 * 4)
print(60 * 45 / 60)
```

```text
Hallo DHBW
'Hallo DHBW'
60
45.0
```

### Übung 5

(a) Zeile 1 wird ausgegeben. Dann bricht das Programm mit `NameError: name 'Print' is not defined` ab. Die Syntax ist in Ordnung, der Fehler fällt erst beim Ausführen von Zeile 2 auf.

(b) Es wird gar nichts ausgegeben. Python meldet sofort `SyntaxError: '(' was never closed`. Grund: CPython prüft vor dem Start die Syntax der ganzen Datei. Die echten Ausgaben stehen im Abschnitt „Was bei `uv run hallo.py` passiert“.

### Übung 6

Eine mögliche Lösung, angelehnt an die Musterlösung:

1. Bestellnummer auf der Rechnung ablesen.
2. Bestellung und Lieferschein heraussuchen. Fehlt eines davon: Rechnung an den Einkauf zurückgeben, weiter mit Schritt 7.
3. Für jede Rechnungsposition die Menge mit dem Lieferschein vergleichen.
4. Für jede Rechnungsposition den Preis mit der Bestellung vergleichen.
5. Gesamtbetrag nachrechnen.
6. Stimmen Menge, Preis und Gesamtbetrag: zur Zahlung freigeben. Sonst Abweichung notieren und an den Einkauf zurückgeben.
7. Fertig.

Schritt 3 findet die Abweichung (50 berechnet, 40 geliefert). Schritt 6 gibt die Rechnung zurück. Typische Lücken: ein nicht ausführbarer Schritt wie „Rechnung prüfen“, kein Fall für Abweichungen oder „kleine Abweichungen ignorieren“ ohne genaue Grenze.
