---
title: "Programmierung"
order: 6
summary: "Algorithmus, Programm und Prozess, von der Maschinensprache zur Hochsprache, Syntax- und Semantikfehler, Compiler und Interpreter, Linker und Lader sowie Rekursion."
klausur: "relevant"
---

Ein Kuchenrezept ist eine Schritt-für-Schritt-Anleitung, die nach endlich vielen Schritten fertig ist. Genau das ist ein Algorithmus. Schreibst du das Rezept in einer Programmiersprache auf, wird daraus ein Programm. Und wenn das Programm gerade auf deinem Rechner läuft, ist es ein Prozess.

Dieser Block ist in der Klausur 2 Punkte wert, mit „allgemeinen Fragen“. Der Dozent sagt: „Dies ist KEIN Programmierkurs.“ Du musst keinen Code schreiben, aber kurzen Code lesen und Begriffe sauber abgrenzen können.

## Algorithmus, Programm, Prozess

**Was ist das?**

| Begriff | Definition | Beispiel |
|---|---|---|
| Algorithmus | eine Handlungsvorschrift, die ein Problem in **endlicher Zeit** löst | Kuchenrezept; Zahlen schrittweise sortieren |
| Programm | die Umsetzung eines oder mehrerer Algorithmen in einer Programmiersprache; darf endlos laufen | ein Webserver, der nie endet |
| Prozess | ein **laufendes** Programm mit seinen Daten, Variablenwerten und Verwaltungsinformationen des Betriebssystems | der geöffnete Browser im Taskmanager |

**Beispiel:** „Gib jede Sekunde eine um 1 erhöhte Zahl aus“ ist ein Programm, aber kein Algorithmus, weil es nie endet.

Einen Algorithmus kann man grafisch darstellen, zum Beispiel als Struktogramm oder als UML-Aktivitätsdiagramm.

> [!IMPORTANT]
> **Das Wichtigste**
> Algorithmus = Vorschrift, endlich. Programm = Umsetzung in einer Sprache, darf endlos laufen. Prozess = Programm, das gerade läuft.

> [!WARNING]
> **Achtung**
> „Ein Programm muss terminieren“ ist falsch. Nur der Algorithmus muss endlich sein.

## Von der Maschinensprache zur Hochsprache

**Was ist das?** Ein Prozessor versteht nur binäre Maschinenbefehle. Jeder Prozessortyp hat andere, und für Menschen sind sie kaum lesbar. Die erste Erleichterung war **Assembler**: Jeder Maschinenbefehl bekommt einen kurzen Namen wie ADD, und Speicheradressen bekommen Namen.

**Beispiel aus der Vorlesung** (6502-Prozessor, addiert zwei Zahlen):

```text
LDA NUM1   ; erste Zahl in das Register A laden
CLC        ; Übertrags-Flag löschen
ADC NUM2   ; zweite Zahl zu A addieren
STA RES    ; Ergebnis an der Adresse RES speichern
BRK        ; Programmende
```

Das Prinzip: Wert in ein Register laden, dort rechnen, Ergebnis zurückschreiben. Weil Assembler bei großen Programmen unübersichtlich wird, entstanden **Hochsprachen** wie Python, Java oder C++. Sie brauchen ein Übersetzungsprogramm: einen Compiler oder einen Interpreter.

> [!IMPORTANT]
> **Das Wichtigste**
> Maschinensprache (binär) → Assembler (symbolische Namen) → Hochsprache (für Menschen lesbar, braucht Compiler oder Interpreter).

> [!WARNING]
> **Achtung**
> Assembler ist keine Hochsprache. Jeder Assemblerbefehl entspricht genau einem Maschinenbefehl.

## Syntax, Semantik und die Typfalle

**Was ist das?** Jede Sprache hat Regeln für die **Syntax** (richtige Schreibweise) und die **Semantik** (richtige Bedeutung).

- Ein **Syntaxfehler** ist zum Beispiel eine fehlende Klammer. Der Compiler bemerkt ihn und übersetzt das Programm nicht.
- Ein **Semantikfehler** ist richtig geschrieben, bedeutet aber etwas Falsches. Das Programm läuft und liefert ein falsches Ergebnis, ohne Fehlermeldung.

Eine typische Fehlerquelle sind Datentypen. In Java ergibt die Division zweier int-Werte wieder ein int, der Rest wird abgeschnitten:

```java
int z1 = 10;
int z2 = 3;
double res  = z1 / z2;           // 3.0   erst int/int = 3, dann nach double
double res2 = (double) z1 / z2;  // 3.333…
```

> [!IMPORTANT]
> **Das Wichtigste**
> Syntaxfehler: falsch geschrieben, das Programm startet nicht. Semantikfehler: richtig geschrieben, aber falsches Ergebnis.

> [!WARNING]
> **Achtung**
> 7 / 2 ergibt in Java 3, nicht 3.5. Das ist ein Semantikfehler, kein Syntaxfehler.

## Variablen und Datentypen

**Was ist das?** Eine Variable ist ein Speicherplatz mit einem Namen und, in Java, einem Typ. Drei Schritte musst du unterscheiden:

```java
int zaehler;          // Deklaration: Typ Name;
int summe = 0;        // Deklaration mit Initialisierung
summe = summe + 5;    // Zuweisung: Name = neuer Wert;
```

Elementare Datentypen in Java:

| Typ | Größe | Wertebereich |
|---|---|---|
| byte | 8 Bit | −128 … 127 (Zweierkomplement, Kapitel 4) |
| short | 16 Bit | −32 768 … 32 767 |
| int | 32 Bit | etwa ±2,1 Milliarden |
| long | 64 Bit | etwa ±9,2 · 10¹⁸ |
| float / double | 32 / 64 Bit | Gleitkomma nach IEEE 754 |
| char | 16 Bit | ein Unicode-Zeichen |
| boolean | laut Folie 1 Bit | true, false |

> [!IMPORTANT]
> **Das Wichtigste**
> Deklaration legt Typ und Namen fest. Initialisierung gibt den ersten Wert. Zuweisung ändert den Wert.

> [!WARNING]
> **Achtung**
> Eine Variable kann erst gelesen werden, wenn ihr ein Wert zugewiesen wurde.

## Werkzeuge: Compiler, Interpreter, Linker, Lader, Debugger

**Was ist das?**

**Compilieren** übersetzt das ganze Programm vorab in Maschinenbefehle für eine bestimmte Hardware. **Interpretieren** übersetzt erst zur Laufzeit, Befehl für Befehl, und führt direkt aus. Als Zwischenschritt kann man in maschinenunabhängigen Bytecode übersetzen (Java, Python).

| | Compiler | Interpreter |
|---|---|---|
| Wann wird übersetzt? | vorab, das ganze Programm | zur Laufzeit, Befehl für Befehl |
| Ergebnis | Maschinenprogramm für eine bestimmte Hardware | direkte Ausführung, ggf. über Bytecode |

Die Phasen eines Compilers:

1. **Scanner:** lexikalische Analyse, zerlegt den Text in Grundsymbole.
2. **Parser:** syntaktische Analyse, baut einen Syntaxbaum.
3. **Semantische Analyse** und Optimierung.
4. **Codeerzeugung** und -optimierung, heraus kommt das Maschinenprogramm.

Große Programme bestehen aus vielen Modulen. Der **Linker** verbindet die einzeln übersetzten Teile zu einem lauffähigen Programm.

| | statisches Linken | dynamisches Linken |
|---|---|---|
| Prinzip | alle Funktionen werden in eine Datei gebunden | Funktionen werden erst zur Laufzeit gesucht |
| Vorteil | alles sicher vorhanden | gemeinsame Speichernutzung, Bibliotheken austauschbar |
| Nachteil | große Datei | fehlt eine Funktion, bricht das Programm ab |
| Beispiel | – | DLLs, Shared Libraries |

Der **Lader** bringt das Programm in den Arbeitsspeicher. Weil es an beliebiger Stelle landen kann, addiert er zu allen Adressen den Startwert (Offset). Wird ein Programm an 0x4000 geladen, wird aus einem Sprung nach 0x0120 ein Sprung nach 0x4120.

Ein **Debugger** lässt ein Programm Schritt für Schritt laufen und zeigt dabei Speicher, Register und Variablen. Eine **IDE** (zum Beispiel Eclipse) vereint Editor, Compiler und Debugger.

> [!IMPORTANT]
> **Das Wichtigste**
> Compiler: vorab alles übersetzen. Interpreter: zur Laufzeit Befehl für Befehl. Linker: Module verbinden. Lader: Programm in den Speicher bringen und Adressen um den Offset verschieben.

> [!WARNING]
> **Achtung**
> Linker und Lader nicht verwechseln. Der Linker baut das Programm aus Teilen zusammen, der Lader lädt es in den Arbeitsspeicher.

## Rekursion: Teile und Herrsche

**Was ist das?** **Teile und Herrsche** ist ein Prinzip: Eine Aufgabe wird in gleichartige, kleinere Teilaufgaben zerlegt. **Rekursion** ist die Technik dazu: Eine Funktion ruft sich selbst mit kleinerer Eingabe auf. Jede Rekursion braucht eine **Abbruchbedingung**.

Das Beispiel aus der Vorlesung ist die Fakultät N! = 1 · 2 · … · N mit 0! = 1! = 1:

```java
long fakrek(int n) {
    if (n == 1 || n == 0) {
        return 1;              // Abbruch
    }
    return n * fakrek(n - 1);  // Selbstaufruf
}
```

So läuft fakrek(4) ab:

1. fakrek(4) = 4 · fakrek(3), wartet.
2. fakrek(3) = 3 · fakrek(2), wartet.
3. fakrek(2) = 2 · fakrek(1), wartet.
4. fakrek(1) = 1, Abbruch.
5. Rückweg: 2 · 1 = 2, dann 3 · 2 = 6, dann 4 · 6 = **24**.

Jeder offene Aufruf liegt so lange auf dem Aufrufstapel (einem Stack, Kapitel 7).

> [!IMPORTANT]
> **Das Wichtigste**
> Teile und Herrsche = Prinzip (Aufgabe zerlegen). Rekursion = Technik (Funktion ruft sich selbst). Ohne Abbruchbedingung läuft sie endlos.

> [!WARNING]
> **Achtung**
> Die Begriffe nicht gleichsetzen. Und: Fehlt die Abbruchbedingung, ruft sich die Funktion endlos auf, bis der Aufrufstapel überläuft.

## Übungen

> [!TIP]
> **Übung 1 · leicht**
> Ist ein Programm, das jede Sekunde die Uhrzeit anzeigt, ein Algorithmus? Begründe.
> *Quelle: Lernseite GIT, Aufgabe 6.2 (eigene Aufgabe nach VL02 F. 74–75)*

> [!TIP]
> **Übung 2 · mittel**
> Syntax- oder Semantikfehler? a) `System.out.println("Hallo";` b) Eine Variable netto enthält den Bruttopreis. c) `double d = 7 / 2;` ergibt 3.0, gewünscht war 3.5.
> *Quelle: Lernseite GIT, Aufgabe 6.3 (eigene Aufgabe)*

> [!TIP]
> **Übung 3 · mittel**
> Nennen Sie zwei Unterschiede zwischen Compiler und Interpreter.
> *Quelle: Lernseite GIT, Aufgabe 6.4 (eigene Aufgabe nach VL02 F. 91)*

> [!TIP]
> **Übung 4 · mittel**
> a) Nennen Sie je einen Vor- und Nachteil des dynamischen Linkens. b) Ein Programm wird an Adresse 0x2000 geladen. Was macht der Lader aus einem Sprungziel 0x0040?
> *Quelle: Lernseite GIT, Aufgabe 6.6 (eigene Aufgabe)*

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> Grenzen Sie Algorithmus, Programm und Prozess voneinander ab.
> *Quelle: Lernseite GIT, Aufgabe 6.1 (eigene Aufgabe im Klausurstil)*

> [!TIP]
> **Übung 6 · Prüfungsniveau**
> Was liefert fakrek(5), und wie viele Aufrufe von fakrek gibt es insgesamt? Was passiert, wenn man die Abbruchbedingung weglässt?
> *Quelle: Lernseite GIT, Aufgabe 6.7 (eigene Aufgabe nach VL02 F. 141)*

## Lösungen

### Übung 1

Nein. Das Programm läuft endlos, ein Algorithmus muss aber in endlicher Zeit enden. Es ist ein Programm, aber kein Algorithmus.

### Übung 2

- a) **Syntaxfehler:** Die schließende Klammer fehlt.
- b) **Semantikfehler:** Richtig geschrieben, aber falsche Bedeutung.
- c) **Semantikfehler** durch die int/int-Typfalle. Richtig wäre `7.0 / 2` oder `(double) 7 / 2`.

### Übung 3

- Der Compiler übersetzt vorab das ganze Programm, der Interpreter erst zur Laufzeit Befehl für Befehl.
- Der Compiler erzeugt ein Maschinenprogramm für eine bestimmte Hardware, der Interpreter führt direkt aus (ggf. über maschinenunabhängigen Bytecode).

### Übung 4

- a) Vorteil: gemeinsame Speichernutzung, Bibliotheken austauschbar. Nachteil: Fehlt eine Bibliothek zur Laufzeit, bricht das Programm ab.
- b) Der Lader addiert den Offset: 0x2000 + 0x0040 = **0x2040**.

### Übung 5

Ein Algorithmus ist eine Handlungsvorschrift, die ein Problem in endlicher Zeit löst. Ein Programm ist die Umsetzung eines oder mehrerer Algorithmen in einer Programmiersprache und darf auch endlos laufen. Ein Prozess ist ein laufendes Programm mit seinen Daten, Variablenwerten und den Verwaltungsinformationen des Betriebssystems.

### Übung 6

1. fakrek(5) = 5 · fakrek(4) = 5 · 4 · 3 · 2 · 1 = **120**.
2. Aufrufe mit n = 5, 4, 3, 2, 1: **5 Aufrufe**. Bei n = 1 greift die Abbruchbedingung.
3. Ohne Abbruchbedingung ruft sich die Funktion endlos auf (0, −1, −2 …), bis der Aufrufstapel überläuft.
