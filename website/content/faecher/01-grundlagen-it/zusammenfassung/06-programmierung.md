Bis hierher ging es darum, wie ein Rechner Zahlen speichert und mit Gattern rechnet. Dieses Kapitel fragt, wie man ihm sagt, was er tun soll. Das geschieht mit Programmen. Das Fach ist ausdrücklich kein Programmierkurs: Du musst keinen Code schreiben, aber kurzen Code lesen und Begriffe sauber abgrenzen können. In der Klausur gibt es dafür 2 Punkte mit allgemeinen Fragen.

### Algorithmus, Programm, Prozess

Ein **Algorithmus** ist eine Handlungsvorschrift, die ein Problem in endlicher Zeit löst, wie ein Kuchenrezept. Ein **Programm** setzt einen oder mehrere Algorithmen in einer Programmiersprache um. Es darf endlos laufen, etwa ein Webserver. Ein **Prozess** ist ein Programm, das gerade läuft, mit seinen Daten und den Verwaltungsinformationen des Betriebssystems. Merke dir: Nur der Algorithmus muss enden.

### Von der Maschinensprache zur Hochsprache

Der Prozessor versteht nur binäre Maschinenbefehle, und jeder Prozessortyp hat andere. **Assembler** gibt diesen Befehlen kurze Namen wie ADD oder LDA. Jeder Assemblerbefehl entspricht aber genau einem Maschinenbefehl, Assembler ist also keine Hochsprache. **Hochsprachen** wie Python, Java oder C++ sind für Menschen lesbar. Sie wurden immer strukturierter: von GOTO-Sprüngen über strukturierte Programmierung und Objektorientierung bis zur Speichersicherheit. Jede Sprache hat Regeln für die **Syntax**, also die Schreibweise, und für die **Semantik**, also die Bedeutung. Ein Syntaxfehler, etwa eine fehlende Klammer, verhindert die Übersetzung. Ein Semantikfehler ist richtig geschrieben, liefert aber ein falsches Ergebnis ohne Fehlermeldung. Eine typische Falle sind Datentypen: In Java ergibt 10 / 3 mit zwei int-Werten 3, nicht 3,33. Bei Variablen unterscheidest du Deklaration (Typ und Name), Initialisierung (erster Wert) und Zuweisung (neuer Wert).

### Die Werkzeuge

Damit aus Quelltext ein laufender Prozess wird, braucht es Werkzeuge. Ein **Compiler** übersetzt das ganze Programm vorab in Maschinenbefehle für eine bestimmte Hardware. Seine Phasen sind Scanner, Parser, semantische Analyse und Codeerzeugung. Ein **Interpreter** übersetzt erst zur Laufzeit, Befehl für Befehl. Der **Linker** verbindet einzeln übersetzte Module zu einem Programm, statisch in eine große Datei oder dynamisch zur Laufzeit, etwa über DLLs. Der **Lader** bringt das Programm in den Arbeitsspeicher und addiert zu allen Adressen den Startwert. Ein **Debugger** lässt das Programm Schritt für Schritt laufen.

### Ein Beispiel, das alles verbindet

Die Fakultät 4! = 1 · 2 · 3 · 4 soll berechnet werden. Rekursiv ruft sich die Funktion fakrek selbst mit kleinerer Eingabe auf. Das ist die Technik zum Prinzip **Teile und Herrsche**. fakrek(4) wartet auf 4 · fakrek(3), das auf 3 · fakrek(2), das auf 2 · fakrek(1). Bei n = 1 greift die **Abbruchbedingung** und liefert 1. Auf dem Rückweg entstehen 2, 6 und schließlich 24. Jeder offene Aufruf liegt dabei auf dem Aufrufstapel. Iterativ rechnest du dasselbe mit einer Schleife: sum beginnt bei 1 und wird nacheinander mit 1, 2, 3 und 4 malgenommen. Auch das ergibt 24. Der Compiler übersetzt den Code, der Linker bindet ihn mit den nötigen Bibliotheken zusammen, und der Lader lädt ihn zum Beispiel an Adresse 0x4000. Ein Sprung nach 0x0120 wird dabei zu 0x4120. Erst jetzt läuft ein Prozess. Fehlt die Abbruchbedingung, ruft sich die Funktion endlos auf, bis der Stapel überläuft.

### Das musst du können

- Algorithmus, Programm und Prozess definieren und abgrenzen
- Maschinensprache, Assembler und Hochsprache unterscheiden
- Syntax- und Semantikfehler an einem Beispiel erklären, auch die int-Division
- Compiler und Interpreter sowie Linker und Lader unterscheiden
- eine rekursive und eine iterative Funktion Schritt für Schritt nachvollziehen
