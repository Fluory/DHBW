## Von-Neumann-Architektur (1946)

- Daten **und** Programme binär im **gleichen Speicher**, Transport über den **gleichen Bus**.
- Folge: Programme wie Daten ladbar, änderbar, speicherbar → universell programmierbar (Stored-Program-Prinzip).
- Befehle der Reihe nach; Steuerung und Rechnen getrennt. **Bus:** Leitungsbündel für den Datenaustausch.

## Fünf Komponenten

| Komponente | Aufgabe |
|---|---|
| Rechenwerk (ALU) | Rechenoperationen, logische Verknüpfungen |
| Steuerwerk (Control Unit) | interpretiert Befehle, regelt die Befehlsfolge |
| Bussystem | verbindet alles (Steuer-, Adress-, Datenbus) |
| Speicherwerk (RAM) | Programme **und** Daten |
| Ein-/Ausgabewerk | Tastatur, Bildschirm, andere Systeme |

**CPU** = Steuerwerk + Rechenwerk (+ Register).

```text
┌────────── CPU ──────────┐
│ Steuerwerk │ Rechenwerk │
└────────────┬────────────┘
             ⇅
═════════════╪═════════════  ein gemeinsamer Bus
      ⇅              ⇅
┌────────────┐  ┌──────────┐
│Speicherwerk│  │Ein-/Aus- │
│Programme   │  │gabewerk  │
│UND Daten   │  │          │
└────────────┘  └──────────┘
```

Skizze: 5 Kästen beschriftet · CPU umrahmt · „Programme und Daten“ am Speicher · **ein** Bus · Pfeile in beide Richtungen.

## Register (schnelle Speicher in der CPU)

- **Akkumulator** (Rechenwerk): Operanden und Ergebnisse.
- **Befehlszähler** (Program Counter, Steuerwerk): **Adresse** des nächsten Befehls.
- **Befehlsregister** (Instruction Register, Steuerwerk): **aktueller Befehl** selbst.
- **Statusregister:** z. B. wahr/falsch nach einem Vergleich.

## Von-Neumann-Zyklus (5 Phasen)

1. **FETCH:** Befehl aus dem Speicher ins Befehlsregister laden.
2. **DECODE:** Steuerwerk entschlüsselt ihn in Schaltanweisungen.
3. **FETCH OPERANDS:** Operanden aus dem Speicher holen.
4. **EXECUTE:** Rechenwerk führt aus, schreibt ggf. Ergebnis in den Speicher.
5. **UPDATE INSTRUCTION POINTER:** Befehlszähler erhöhen oder bei Sprung neu setzen.

## Harvard

- **Getrennte Speicher** (eigene Adressen) **und getrennte Busse** für Befehle und Daten.
- **Einzelzyklus:** Befehl und Daten gleichzeitig holen → schneller, aber in der Regel teurer.
- Einsatz: Mikrocontroller, Signalverarbeitung, Rechner für maschinelles Lernen, zunehmend PCs und Server.

```text
┌──────────────┐        ┌─────────────┐
│Befehlsspeich.│        │Datenspeicher│
└──────┬───────┘        └──────┬──────┘
       ⇅ Befehlsbus            ⇅ Datenbus
┌──────┴───────── CPU ─────────┴──────┐
│   Steuerwerk      Rechenwerk (ALU)  │
└─────────────────┬───────────────────┘
                  ⇅
          ┌────────────────┐
          │Ein-/Ausgabewerk│
          └────────────────┘
```

## Pro und Contra

| Kriterium | Von Neumann | Harvard |
|---|---|---|
| Speicher / Bus | je einer, gemeinsam | getrennt |
| Ablauf | nacheinander, mind. 2 Takte | gleichzeitig, Einzelzyklus |
| Tempo | durch Flaschenhals begrenzt | schneller |
| Kosten | Pro: einfacher, billiger | Contra: teurer |
| Sicherheit | Contra: als Daten getarnter Code (Buffer Overflow) | Code und Daten getrennt |
| Einsatz | klassische PCs, Intel x86 | Mikrocontroller, Signalverarbeitung, KI-Rechner |

**Von-Neumann-Flaschenhals:** Code und Daten laufen nacheinander über den gemeinsamen Bus; der Engpass ist der **Bus**.

**Prozessoren:** Intel x86 = Von Neumann · AVR (Arduino) = Harvard · Apple A/M, ARM (Snapdragon) = **modifizierte Harvard**: zwischen CPU und Caches getrennt, Hauptspeicher gemeinsam.

## CPU und Busse

- Moderne CPUs schneller durch: mehrstufige Caches (L1–L3), Sprungvorhersage, spekulative Ausführung, Multicore.

| Bus | überträgt |
|---|---|
| Steuerbus | **ob** gelesen/geschrieben wird |
| Adressbus | **wo** |
| Datenbus | **was** |

Lesen: 1. Lesebefehl (Steuerbus) → 2. Adresse (Adressbus) → 3. Daten Zelle → CPU (Datenbus). Schreiben: in Schritt 3 Daten CPU → Zelle.

## Typische Fehler

- Bus in der Skizze vergessen.
- Befehlszähler (Adresse) mit Befehlsregister (Befehl) verwechseln.
- Nur „Fetch – Decode – Execute“ nennen statt fünf Phasen.
- Harvard nur mit „getrennte Speicher“ erklären (auch Busse!).
- „Flaschenhals, weil die ALU zu langsam ist“: Engpass ist der Bus.
- Adress- und Datenbus verwechseln.
- Pro und Contra nicht paarweise nennen.
