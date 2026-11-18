---
title: "Einführung: Algorithmen, Übersetzung und das erste Programm"
order: 1
summary: "Was ein Algorithmus ist (terminierend, determiniert, deterministisch), welche Datenstrukturen es gibt, wie aus Quellcode über Bytecode ein laufendes Programm wird, die Werkzeuge uv, ruff, ty und pytest sowie Module und Importe."
klausur: "relevant"
---

Bevor du programmierst, brauchst du ein paar Begriffe. Was ist ein Algorithmus? Wie wird aus einer Textdatei ein Programm, das läuft? Und warum bricht ein Programm manchmal sofort ab und manchmal erst in Zeile 2?

Ein Alltagsbeispiel: Ein Kochrezept ist ein Algorithmus. Es beschreibt Schritt für Schritt, wie du zum Ergebnis kommst. Ein Programm ist ein Algorithmus, der in einer Programmiersprache aufgeschrieben ist. In diesem Kapitel wird noch wenig programmiert. Dafür kommen viele Begriffe vor, die sich gut für Wissensfragen in der Klausur eignen (VL1).

## Algorithmen

### Was ist das?

**In einem Satz:** Ein Algorithmus ist eine Anleitung, die so genau ist, dass jemand sie stur abarbeiten kann, ohne nachzufragen.

**Stell dir vor:** Du schreibst deiner Mitbewohnerin auf, wie sie Nudeln kocht. „Koch die Nudeln“ hilft ihr nicht. „1. Topf mit 1 Liter Wasser füllen. 2. Herd auf Stufe 9. 3. Warten, bis das Wasser blubbert. 4. 250 g Nudeln rein. 5. 10 Minuten warten. 6. Abgießen.“ Das kann sie abarbeiten, auch wenn sie nie gekocht hat. Ein Computer ist wie eine Mitbewohnerin, die nichts selbst denkt: Er braucht genau so eine Liste.

Auf der Folie steht es formaler: Ein Algorithmus ist eine Schrittfolge, die ein Problem systematisch löst (VL1 F. 10). Er hängt nicht von einer bestimmten Programmiersprache ab. Jeder Schritt muss so genau sein, dass eine Person oder ein Computer ihn ohne Rückfrage ausführen kann.

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

**Stell dir vor:** Du fährst mit dem Navi von der Wohnung zur Hochschule.

- **Terminierend:** Das Navi sagt irgendwann „Sie haben Ihr Ziel erreicht“. Es schickt dich nicht endlos im Kreis.
- **Determiniert:** Egal welche Strecke, du kommst immer an derselben Hochschule an. Gleiche Eingabe (Start und Ziel), gleiches **Ergebnis**.
- **Deterministisch:** An jeder Kreuzung steht fest, ob es links oder rechts geht. Gleiche Eingabe, gleicher **Weg**. Ein Navi, das bei Stau mal so und mal so fährt, ist nicht deterministisch, kommt aber trotzdem an. Es ist also determiniert.

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

## Terminierend, determiniert, deterministisch genau unterscheiden

### Was ist das?

**In einem Satz:** Die drei Wörter stellen drei verschiedene Fragen an einen Algorithmus: Hört er auf? Kommt bei gleicher Eingabe immer dasselbe heraus? Steht jeder einzelne Schritt fest?

**Stell dir vor:** Drei Prüferinnen testen dasselbe Rezept.

- Die erste fragt nur: Ist man irgendwann fertig, egal mit welchen erlaubten Zutaten? Das ist **terminierend**.
- Die zweite kocht das Rezept zweimal mit genau denselben Zutaten und vergleicht die Teller. Liegt beide Male dasselbe darauf? Das ist **determiniert**.
- Die dritte schaut beim Kochen zu. Wurde beide Male in genau derselben Reihenfolge gearbeitet, ohne dass irgendwo „mach, wie du willst“ stand? Das ist **deterministisch**.

**Mit Code: terminierend oder nicht?** Diese Funktion zieht so lange 2 ab, bis `n` genau 0 ist, und zählt die Schritte:

```python
def runterzaehlen(n: int) -> int:
    schritte = 0
    while n != 0:
        n = n - 2
        schritte += 1
    return schritte


print(runterzaehlen(6))
print(runterzaehlen(4))
```

```text
3
2
```

Bei 6 und 4 klappt es. Jetzt die Eingabe 5. Vor jeder Runde fragt Python: Ist `n != 0`?

| Runde | n vorher | n != 0? | n danach |
|---|---|---|---|
| 1 | 5 | ja | 3 |
| 2 | 3 | ja | 1 |
| 3 | 1 | ja | −1 |
| 4 | −1 | ja | −3 |
| … | … | immer ja | … |

`n` springt über die 0 hinweg und wird nie genau 0. Die Schleife läuft endlos. Ist 5 eine erlaubte Eingabe, dann ist der Algorithmus **nicht terminierend**. Eine einzige erlaubte Eingabe ohne Ende reicht dafür. Mit `while n > 0:` hört er bei jeder Eingabe auf.

**Mit Code: determiniert, aber nicht deterministisch.** Diese Funktion wirft eine Münze, ob sie die Liste von vorne oder von hinten addiert:

```python
import random


def summe_irgendwie(zahlen: list[int]) -> int:
    if random.choice(["vorne", "hinten"]) == "vorne":
        reihenfolge = zahlen
    else:
        reihenfolge = list(reversed(zahlen))
    summe = 0
    for zahl in reihenfolge:
        summe += zahl
    return summe


print(summe_irgendwie([4, 7, 9]))
print(summe_irgendwie([4, 7, 9]))
print(summe_irgendwie([4, 7, 9]))
```

```text
20
20
20
```

Der **Weg** hängt vom Zufall ab: einmal 4 + 7 + 9, einmal 9 + 7 + 4. Der nächste Schritt steht also nicht fest, die Funktion ist **nicht deterministisch**. Das **Ergebnis** ist aber immer 20. Sie ist **determiniert**.

**Ohne Code: weder noch.** Ein Würfel-Algorithmus „gib eine Zufallszahl von 1 bis 6 aus“ (`random.randint(1, 6)`) liefert bei gleicher Eingabe mal 2, mal 5. Er ist nicht determiniert und deshalb auch nicht deterministisch.

| Algorithmus | terminierend? | determiniert? | deterministisch? |
|---|---|---|---|
| `runterzaehlen` mit `while n > 0` | ja | ja | ja |
| `runterzaehlen` mit `while n != 0`, Eingabe 5 erlaubt | nein | – (es gibt kein Ergebnis) | ja, jeder Schritt steht fest |
| `summe_irgendwie` | ja | ja | nein |
| Würfeln mit `random.randint(1, 6)` | ja | nein | nein |

**Die Regel:** Ist ein Algorithmus deterministisch (und terminierend), dann ist er auch determiniert. Wenn jeder Schritt feststeht, kommt bei gleicher Eingabe zwangsläufig dasselbe heraus. Umgekehrt gilt das nicht, siehe `summe_irgendwie`.

**So steht es auf der Folie (VL1 F. 11):** terminierend = endet für jede zulässige Eingabe nach endlich vielen Schritten; determiniert = bei gleichen Eingaben und Startbedingungen dasselbe Ergebnis; deterministisch = zu jedem Zeitpunkt ist der nächste Schritt eindeutig festgelegt. Auf Deutsch heißt das: Hört er auf? Gleiches Ergebnis? Gleicher Weg?

### So prüfst du einen Algorithmus

1. **Terminierend?** Suche eine erlaubte Eingabe, bei der er nie aufhört (Bedingung bleibt immer wahr, Zähler springt am Ziel vorbei). Findest du eine: nicht terminierend.
2. **Determiniert?** Stell dir zwei Läufe mit derselben Eingabe vor. Kann am Ende etwas anderes herauskommen, etwa durch Zufall oder die Uhrzeit? Dann nicht determiniert.
3. **Deterministisch?** Gibt es eine Stelle, an der der nächste Schritt nicht feststeht („nimm irgendeinen“, Münzwurf)? Dann nicht deterministisch.
4. Gegenprobe: Hast du „deterministisch: ja“ und „determiniert: nein“ angekreuzt, stimmt etwas nicht.

> [!IMPORTANT]
> **Das Wichtigste**
> Terminierend = hört bei jeder erlaubten Eingabe auf. Determiniert = gleiche Eingabe, gleiches Ergebnis. Deterministisch = gleiche Eingabe, gleicher Weg, jeder Schritt steht fest. Deterministisch ⇒ determiniert, nicht umgekehrt.

> [!WARNING]
> **Typischer Fehler**
> „Terminierend“ und „determiniert“ klingen ähnlich und werden in der Single-Choice-Frage gern vertauscht. Merkhilfe: **termin**ierend wie „Termin“, also das Ende. Determin**iert** gehört zum Ergebnis, determin**istisch** zum Weg. Und: Ein Algorithmus, der „nur manchmal“ endlos läuft, ist nicht terminierend.

## Datenstrukturen

### Was ist das?

**In einem Satz:** Eine Datenstruktur ist die Art, wie du Sachen ablegst, damit du sie schnell wiederfindest.

**Stell dir vor:** Deine Unterlagen kannst du auf einen Stapel legen, in einen Ordner mit Unterordnern sortieren oder nummeriert in eine Schublade stecken. Jede Art ist für etwas anderes gut. Beim Stapel kommst du nur an das oberste Blatt. Im Ordner findest du Themen schnell. Genau diese Wahl triffst du im Programm auch.

Formal: Eine Datenstruktur legt fest, wie Daten organisiert und gespeichert werden, damit man schnell auf sie zugreifen und sie ändern kann (F. 17). Alle Programme bestehen aus Algorithmen und Datenstrukturen (F. 21).

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

**In einem Satz:** Dein Code ist Text, und irgendwer muss diesen Text in Befehle übersetzen, die der Prozessor versteht.

**Stell dir vor:** Du hast ein englisches Buch und willst es auf Deutsch.

- **Interpreter** = Dolmetscherin, die neben dir sitzt und Satz für Satz übersetzt, während du zuhörst. Du kannst sofort anfangen, aber jeder Satz kostet ein bisschen Wartezeit.
- **Compiler** = Übersetzer, der das ganze Buch vorher übersetzt und drucken lässt. Danach liest du schnell. Bei jeder Änderung muss er aber neu übersetzen, und die deutsche Ausgabe hilft niemandem, der nur Französisch kann (nur eine Zielplattform).
- **Zwischencode** = Das Buch wird in eine einfache Zwischensprache übersetzt, die überall auf der Welt ein Vorleser (die virtuelle Maschine) vorlesen kann. So arbeitet Python.

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

### Bytecode und virtuelle Maschine

**In einem Satz:** Bytecode ist eine einfache Zwischensprache, und die virtuelle Maschine ist ein Programm, das diese Zwischensprache Befehl für Befehl ausführt.

**Stell dir vor:** Ein Musikstück wird als Notenblatt aufgeschrieben. Das Notenblatt ist nicht die Musik selbst, aber jede Musikerin auf der Welt kann es spielen, egal welches Instrument sie hat. Das Notenblatt ist der **Bytecode**, die Musikerin ist die **virtuelle Maschine (VM)**. „Virtuell“ heißt: Sie ist kein Bauteil im Rechner, sondern ein Programm, das sich wie ein kleiner Prozessor verhält.

Was bei `uv run programm.py` passiert, Schritt für Schritt:

| Schritt | Wer? | Was? |
|---|---|---|
| 1 | uv | findet das Projekt und die passende Python-Version |
| 2 | CPython | liest `programm.py` (Quellcode, also Text) und prüft die Syntax der ganzen Datei |
| 3 | CPython | übersetzt den Quellcode in **Bytecode** (bei importierten Modulen landet er als `.pyc`-Datei im Ordner `__pycache__`) |
| 4 | Python-VM | führt den Bytecode Anweisung für Anweisung aus, dabei entstehen die Ausgaben |

In der Probeklausur steht genau diese Frage als Single Choice. Die falschen Antworten sind typische Verwechslungen:

| Aussage | stimmt? | warum |
|---|---|---|
| Quellcode → Bytecode → Python-VM führt ihn aus | ja | so arbeitet CPython |
| Es entsteht eine `.exe`-Datei, die dann startet | nein | das macht ein Compiler wie bei C, nicht Python |
| Der Code wird zuerst in Java übersetzt | nein | Java hat eine eigene VM, die JVM, mit Python hat sie nichts zu tun |
| Der Code wird an einen Server geschickt | nein | alles läuft auf deinem Rechner |

> [!IMPORTANT]
> **Das Wichtigste**
> `uv run programm.py`: Quellcode → Bytecode → Python-VM. Die VM ist ein Programm, kein Bauteil. Deshalb läuft derselbe Python-Code auf Windows, macOS und Linux.

> [!WARNING]
> **Typischer Fehler**
> „Python erzeugt eine .exe“ oder „Python ist eine reine Interpretersprache“ ankreuzen. Beides ist laut Folien falsch.

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

## Ein Projekt mit uv: init, add, run und die Prüfwerkzeuge

### Was ist das?

**In einem Satz:** uv richtet dein Projekt ein und startet alles, ruff, ty und pytest prüfen deinen Code auf drei verschiedene Arten.

**Stell dir vor:** Eine Werkstatt. **uv** ist der Hausmeister: Er schließt die Werkstatt auf (`uv init`), besorgt Werkzeug (`uv add`) und schaltet die Maschinen ein (`uv run`). **ruff** ist der Korrekturleser, der auf Ordnung und Schlamperei achtet. **ty** ist die Prüferin, die den Bauplan nachrechnet, ohne etwas zu bauen: Passen die Teile zusammen? **pytest** ist der Testfahrer, der das fertige Teil wirklich ausprobiert und mit dem erwarteten Ergebnis vergleicht.

| Befehl | was er tut |
|---|---|
| `uv init --bare --python 3.14 prog1` | Projektordner `prog1` mit der Datei `pyproject.toml` anlegen |
| `uv add --dev ruff ty` | Prüfwerkzeuge ins Projekt holen (`--dev`: nur zum Entwickeln) |
| `uv add paketname` | Paket von pypi.org herunterladen und im Projekt eintragen |
| `uv run hallo.py` | Programm mit der Python-Version des Projekts starten |
| `uv run ruff format .` | Code einheitlich formatieren |
| `uv run ruff check .` | Stilfehler und typische Fehler finden |
| `uv run ty check` | Typangaben prüfen, ohne das Programm zu starten |
| `uv run pytest` | alle Funktionen `test_…` in Dateien `test_*.py` ausführen |

**Mit Code:** Diese Datei hat zwei Probleme.

```python
import os


def brutto(anzahl: int, preis: float) -> float:
    return anzahl * preis


print(brutto("3", 2.0))
```

- `uv run ruff check .` meldet vor dem Start die Regel `F401` („`os` imported but unused“). Der Import ist überflüssig.
- `uv run ty check` meldet vor dem Start einen Fehler `invalid-argument-type`: `"3"` ist ein `str`, verlangt ist `int`.
- `uv run beispiel.py` startet trotzdem und bricht erst beim Rechnen ab:

```text
Traceback (most recent call last):
  File "beispiel.py", line 8, in <module>
    print(brutto("3", 2.0))
          ~~~~~~^^^^^^^^^^
  File "beispiel.py", line 5, in brutto
    return anzahl * preis
           ~~~~~~~^~~~~~~
TypeError: can't multiply sequence by non-int of type 'float'
```

| Problem | wer findet es? | wann? |
|---|---|---|
| fehlende Klammer, fehlender Doppelpunkt | Python selbst (`SyntaxError`), auch ruff | vor dem Start |
| unbenutzter Import, unsauberer Stil | ruff | vor dem Start |
| `"3"` übergeben, wo `int` stehen soll | ty | vor dem Start |
| Funktion rechnet falsch (Logikfehler) | pytest, wenn ein Test das richtige Ergebnis kennt | beim Testlauf |

**Pakete von pypi.org:** `import` lädt nichts herunter. Es sucht nur auf deinem Rechner. Fehlt das Paket, kommt beim Start ein Fehler:

```python
import emoji
```

```text
Traceback (most recent call last):
  File "beispiel.py", line 1, in <module>
    import emoji
ModuleNotFoundError: No module named 'emoji'
```

So nutzt du ein fremdes Paket:

1. Im Projektordner `uv add emoji` ausführen. uv lädt das Paket herunter und trägt es in `pyproject.toml` ein.
2. In der Datei `import emoji` schreiben.
3. Mit `uv run programm.py` starten.

> [!IMPORTANT]
> **Das Wichtigste**
> uv = Projekt, Pakete, Starten. ruff = Stil und typische Fehler. ty = Typen vor dem Start. pytest = Tests. Ein fremdes Paket holst du zuerst mit `uv add paketname`.

> [!WARNING]
> **Typischer Fehler**
> Glauben, `ruff` oder `pytest` melde den falschen Typ `"3"` vor dem Start. Das macht **ty**. Und glauben, `import paket` lade das Paket aus dem Internet: Ohne `uv add` kommt `ModuleNotFoundError`.

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

**Stell dir vor:** Du gibst einen Aufsatz ab. Die Lehrerin liest ihn erst einmal nur auf Satzbau durch (fehlt ein Punkt, eine Klammer?). Findet sie einen Grammatikfehler, gibt sie den ganzen Aufsatz zurück, ohne ein Wort vorzulesen. Das ist der **Syntaxfehler**. Ist die Grammatik in Ordnung, liest sie ihn laut vor, Satz für Satz. Stolpert sie in Satz 2 über ein Wort, das es nicht gibt, hört sie dort auf. Satz 1 hat sie aber schon vorgelesen. Das ist der **Laufzeitfehler**.

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

## Module und Importe

### Was ist das?

**In einem Satz:** Ein Modul ist eine Python-Datei mit fertigen Funktionen, und mit `import` holst du sie in dein Programm.

**Stell dir vor:** Ein Werkzeugkasten mit der Aufschrift `math`.

- `import math` heißt: Du stellst den **ganzen Kasten** auf den Tisch. Jedes Werkzeug holst du mit dem Kastennamen davor: `math.ceil`, `math.floor`, `math.sqrt`.
- `from math import ceil` heißt: Du nimmst **nur die eine Zange** heraus und legst sie direkt auf den Tisch. Sie heißt jetzt einfach `ceil`. Der Kasten `math` selbst steht aber nicht auf dem Tisch.

**Mit Code:** `math.ceil` rundet immer **auf** (zur nächsten ganzen Zahl nach oben), `math.floor` immer **ab**.

```python
import math

print(math.ceil(3.2), math.floor(3.8), math.sqrt(16))
print(ceil(3.2))
```

```text
4 3 4.0
Traceback (most recent call last):
  File "beispiel.py", line 4, in <module>
    print(ceil(3.2))
          ^^^^
NameError: name 'ceil' is not defined
```

Umgekehrt, mit `from … import …`:

```python
from math import ceil

print(ceil(3.2))
print(math.ceil(3.2))
```

```text
4
Traceback (most recent call last):
  File "beispiel.py", line 4, in <module>
    print(math.ceil(3.2))
          ^^^^
NameError: name 'math' is not defined. Did you forget to import 'math'?
```

| Importzeile | das klappt | das gibt `NameError` |
|---|---|---|
| `import math` | `math.ceil(3.2)` | `ceil(3.2)` |
| `from math import ceil` | `ceil(3.2)` | `math.ceil(3.2)` |
| `from math import ceil, floor` | `ceil(3.2)`, `floor(3.8)` | `math.floor(3.8)` |

| Ausdruck | Ergebnis | warum |
|---|---|---|
| `math.ceil(3.2)` | 4 | auf die nächste ganze Zahl nach oben |
| `math.ceil(3.0)` | 3 | schon ganz, bleibt |
| `math.ceil(-3.2)` | -3 | „oben“ ist auf dem Zahlenstrahl rechts, also −3 |
| `math.floor(-3.2)` | -4 | „unten“ ist links, also −4 |

**Eigene Module:** Jede `.py`-Datei ist ein Modul. Liegt `preise.py` im selben Ordner, kann `shop.py` sie importieren. Python führt beim Import die **ganze** Datei `preise.py` einmal aus. Steht dort ein Test-`print` direkt im Code, erscheint er auch im Shop. Dagegen hilft `if __name__ == "__main__":`.

```python
# preise.py
from typing import Final

MWST_SATZ: Final = 0.19


def brutto(netto: float) -> float:
    return round(netto * (1 + MWST_SATZ), 2)


def main() -> None:
    print("Test in preise.py:", brutto(10.0))


if __name__ == "__main__":
    main()
```

```python
# shop.py
from preise import MWST_SATZ, brutto

print("Im Shop:", brutto(100.0))
print("Satz:", MWST_SATZ)
```

`uv run shop.py` gibt aus:

```text
Im Shop: 119.0
Satz: 0.19
```

`uv run preise.py` gibt aus:

```text
Test in preise.py: 11.9
```

Python setzt in jeder Datei automatisch die Variable `__name__`:

| gestartet mit | `__name__` in `preise.py` | läuft `main()`? |
|---|---|---|
| `uv run preise.py` (direkt) | `"__main__"` | ja |
| `uv run shop.py` (importiert `preise`) | `"preise"` (der Modulname) | nein |

Ohne die `if`-Zeile, also mit `print("Test in preise.py:", …)` direkt unten in `preise.py`, gäbe `uv run shop.py` zuerst `Test in preise.py: 11.9` und dann erst `Im Shop: 119.0` aus.

### So beantwortest du „Welcher Aufruf klappt?“

1. Lies die Importzeile ganz oben.
2. Steht dort `import math`: Jeder Aufruf braucht `math.` davor.
3. Steht dort `from math import ceil`: Nur `ceil(…)` ohne Vorsilbe klappt, und nur für die Namen hinter `import`.
4. Alles andere gibt beim Ausführen `NameError`.

> [!IMPORTANT]
> **Das Wichtigste**
> `import math` → `math.ceil(x)`. `from math import ceil` → `ceil(x)`. Eigene Module importierst du genauso. `if __name__ == "__main__":` sorgt dafür, dass `main()` nur beim direkten Start läuft, nicht beim Import.

> [!WARNING]
> **Typischer Fehler**
> Nach `from math import ceil` trotzdem `math.ceil(…)` schreiben: `NameError`. `math.ceil` mit normalem Runden verwechseln: `math.ceil(2.1)` ist 3, nicht 2. Und eine eigene Datei so nennen wie ein Modul der Standardbibliothek, etwa `random.py`: Dann importiert Python deine Datei statt des echten Moduls.

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

> [!TIP]
> **Übung 7 · mittel**
> Terminierend, determiniert, deterministisch? Entscheide je dreimal ja oder nein. (a) `while n != 0: n = n - 3`, erlaubt ist jede positive ganze Zahl. (b) Lottozahlen mit `random` ziehen. (c) Das Maximum einer Liste mit der Schleife aus Kapitel 4 suchen. (d) „Nimm irgendeinen noch nicht gezählten Artikel aus dem Regal und zähle ihn, bis keiner mehr übrig ist. Gib die Anzahl aus.“
>
> Quelle: offizielle Probeklausur, A1.1 (sinngemäß, erweitert), eigene Aufgabe

> [!TIP]
> **Übung 8 · leicht**
> (a) Oben steht `from math import ceil`. Welcher Aufruf klappt: `math.ceil(3.2)`, `ceil(3.2)` oder `Math.ceil(3.2)`? (b) Oben steht nur `import math`. Was passiert bei `print(ceil(7 / 2))`? (c) Was ergeben `math.ceil(7 / 2)`, `math.floor(7 / 2)` und `math.ceil(4.0)`?
>
> Quelle: offizielle Probeklausur, A1.5 (sinngemäß, erweitert)

> [!TIP]
> **Übung 9 · Prüfungsniveau**
> (a) Du willst ein Paket von pypi.org nutzen. Was ist im Projektordner der erste Schritt? (b) Welches Werkzeug meldet `brutto("3", 2.0)` bei der Typangabe `anzahl: int` schon **vor** dem Start: ruff, ty, pytest oder `uv add`? (c) Beschreibe in drei Schritten, was bei `uv run programm.py` passiert. (d) `shop.py` importiert `preise.py`. In `preise.py` steht ganz unten `print("Test")` ohne `if`. Was erscheint bei `uv run shop.py`, und wie verhinderst du das?
>
> Quelle: offizielle Probeklausur, A1.2, A1.4, A1.6 (sinngemäß, erweitert)

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

(a) Schritt für Schritt:

1. Syntaxprüfung der ganzen Datei: `Print(...)` ist grammatisch ein ganz normaler Funktionsaufruf. Kein Fehler.
2. Zeile 1 läuft: Die Ausgabe erscheint.
3. Zeile 2 läuft: Python sucht eine Funktion namens `Print` (großes P) und findet keine. Abbruch mit `NameError: name 'Print' is not defined`.
4. Zeile 3 wird nie erreicht.

Ergebnis: genau eine Ausgabezeile, dann die Fehlermeldung.

(b) Schritt für Schritt:

1. Syntaxprüfung der ganzen Datei: In Zeile 2 wird eine Klammer geöffnet, aber nie geschlossen. Das ist ein Grammatikfehler.
2. Python bricht sofort ab mit `SyntaxError: '(' was never closed`.
3. Keine Zeile wird ausgeführt, auch nicht die fehlerfreie Zeile 1.

Ergebnis: keine Ausgabe, nur die Fehlermeldung. Grund: CPython prüft vor dem Start die Syntax der ganzen Datei. Die echten Ausgaben stehen im Abschnitt „Was bei `uv run hallo.py` passiert“.

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

### Übung 7

| | terminierend? | determiniert? | deterministisch? |
|---|---|---|---|
| (a) | nein | – | ja |
| (b) | ja | nein | nein |
| (c) | ja | ja | ja |
| (d) | ja | ja | nein |

(a) Für 9 klappt es (9, 6, 3, 0). Für 10 nicht: 10, 7, 4, 1, −2, −5, … Die 0 wird übersprungen, die Schleife endet nie. Eine erlaubte Eingabe ohne Ende reicht: nicht terminierend. Jeder Schritt steht aber fest.

(b) Gleiche Eingabe, andere Zahlen: nicht determiniert. Der Zufall entscheidet die Schritte: nicht deterministisch. Er endet aber nach sechs Zügen.

(c) Jeder Schritt steht fest, das Ergebnis ist immer das Maximum.

(d) Welcher Artikel als Nächstes gezählt wird, steht nicht fest: nicht deterministisch. Die Anzahl am Ende ist aber immer dieselbe: determiniert.

### Übung 8

(a) Nur `ceil(3.2)`. `math.ceil` gibt `NameError`, weil der Name `math` nicht importiert wurde. `Math` mit großem M gibt es gar nicht.

(b) `NameError: name 'ceil' is not defined`. Nach `import math` heißt es `math.ceil`.

(c) 7 / 2 = 3.5. Aufrunden: `4`. Abrunden: `3`. `math.ceil(4.0)` ist schon ganz: `4`.

```python
import math

print(math.ceil(7 / 2), math.floor(7 / 2), math.ceil(4.0))
```

```text
4 3 4
```

### Übung 9

(a) `uv add paketname`. Ein `import` allein lädt nichts herunter, sondern gibt `ModuleNotFoundError`.

(b) **ty**. ruff prüft Stil und typische Fehler, pytest führt Tests aus, `uv add` fügt ein Paket hinzu.

(c) 1. CPython liest den Quellcode und prüft die Syntax der ganzen Datei. 2. Er übersetzt ihn in Bytecode. 3. Die Python-VM führt den Bytecode aus.

(d) Beim Import führt Python die ganze Datei `preise.py` aus. Deshalb erscheint zuerst `Test`, dann die Ausgaben von `shop.py`. Abhilfe: den Test in eine Funktion `main()` packen und unten `if __name__ == "__main__":` und eingerückt `main()` schreiben. Beim Import ist `__name__` dann `"preise"`, und `main()` läuft nicht.
