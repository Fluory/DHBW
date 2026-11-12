## Grundoperatoren

- Nur zwei Werte: 0 (falsch, aus), 1 (wahr, an).
- **AND** (A ∧ B, A · B): nur 1, wenn alle Eingänge 1. **OR** (A ∨ B, A + B): nur 0, wenn alle Eingänge 0. **NOT** (¬A): dreht um.
- Rangfolge: ¬ vor ∧ vor ∨. Im Zweifel Klammern.
- Transistoren in Serie = AND, parallel = OR.

## Sieben Gatter

| A | B | AND | OR | XOR | NAND | NOR | XNOR |
|---|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 |
| 0 | 1 | 0 | 1 | 1 | 1 | 0 | 0 |
| 1 | 0 | 0 | 1 | 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 | 0 | 0 | 0 | 1 |

XOR = „ungleich“, XNOR = „gleich“. NAND/NOR/XNOR = AND/OR/XOR umgedreht.

**IEC 60617-12** (Kästchen mit Zeichen, Kreis am Ausgang = Negation):

| AND | OR | NOT | XOR | NAND | NOR | XNOR |
|---|---|---|---|---|---|---|
| & | ≥1 | 1 + Kreis | =1 | & + Kreis | ≥1 + Kreis | =1 + Kreis |

## Rechengesetze

| Gesetz | UND | ODER |
|---|---|---|
| Kommutativ | a ∧ b = b ∧ a | a ∨ b = b ∨ a |
| Distributiv | a ∧ (b ∨ c) = (a ∧ b) ∨ (a ∧ c) | a ∨ (b ∧ c) = (a ∨ b) ∧ (a ∨ c) |
| Idempotenz | a ∧ a = a | a ∨ a = a |
| Neutralität | a ∧ 1 = a | a ∨ 0 = a |
| Extremal | a ∧ 0 = 0 | a ∨ 1 = 1 |
| Komplement | a ∧ ¬a = 0 | a ∨ ¬a = 1 |
| Doppelnegation | ¬¬a = a | |
| De Morgan | ¬(a ∧ b) = ¬a ∨ ¬b | ¬(a ∨ b) = ¬a ∧ ¬b |
| Absorption | a ∨ (a ∧ b) = a | a ∧ (a ∨ b) = a |

**De Morgan:** Negation über die Klammer ziehen → ∧ wird ∨ (und umgekehrt), jede Variable negiert.
¬(¬A ∨ B) = ¬¬A ∧ ¬B = **A ∧ ¬B**.

## Text → Tabelle → DNF → Schaltung

**Tabelle:**
1. n Eingänge → 2ⁿ Zeilen.
2. Eingänge binär von 000 bis 111 hochzählen.
3. Je Zeile Ausgang 0 oder 1 bestimmen.

**DNF (disjunktive Normalform):**
1. Nur Zeilen mit Ausgang 1 nehmen.
2. Je 1-Zeile ein UND-Term: 1 → Variable, 0 → ¬Variable (101 → S ∧ ¬T ∧ F).
3. Alle Terme mit ∨ verbinden.

Unvereinfachte DNF ist korrekt, solange nicht „vereinfachen“ verlangt ist.

**Vereinfachen (Kernregel):** Zwei Terme, die sich nur in **einer** Variablen unterscheiden → diese fällt weg.
(A ∧ B) ∨ (A ∧ ¬B) = A ∧ (B ∨ ¬B) = A ∧ 1 = A
1. Paare suchen, die sich in genau einer Variablen unterscheiden.
2. Gemeinsames ausklammern, X ∨ ¬X = 1 streichen.
3. Wiederholen. Ein Term darf mehrfach benutzt werden (Idempotenz).
4. Probe mit einer 1-Zeile und einer 0-Zeile.

**Beispiel Alarmanlage** (Y, wenn scharf S und Tür T oder Fenster F offen): 1-Zeilen STF = 101, 110, 111.
Y = (S∧¬T∧F) ∨ (S∧T∧¬F) ∨ (S∧T∧F) → S∧F ∨ S∧T = **S ∧ (T ∨ F)**.

**Muster:** (¬A∧B) ∨ (A∧¬B) = XOR. (¬A∧¬B) ∨ (A∧B) = XNOR.

**Schaltung:** von innen nach außen, jede Operation ein Gatter. DNF direkt: NOT für negierte Eingänge, je Term ein UND, am Ende ein ODER.

**Analyse (Schaltung → Tabelle):** je Gatter eine Hilfsspalte, Zeile für Zeile von innen nach außen rechnen.

## NAND-Substitution

NAND ist ein Universalgatter:
- NOT A = NAND(A, A)
- A AND B = NAND, danach NAND als NOT (2 Gatter)
- A OR B = NAND(¬A, ¬B), 3 Gatter (De Morgan: ¬(¬A ∧ ¬B) = A ∨ B)

## Halbaddierer

| A | B | Summe s | Übertrag c |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

- Halbaddierer: s = **XOR**, c = **AND**.
- Volladdierer: zusätzlich Übertrag der vorigen Stelle; 2 Halbaddierer + 1 ODER. Mehrere hintereinander = Addierwerk.

## Typische Fehler

- ¬(A ∧ B) = ¬A ∧ ¬B. Falsch: ∧ muss zu ∨ werden.
- OR mit XOR verwechseln: bei A = B = 1 ist OR 1, XOR 0.
- 0-Zeilen in die DNF aufnehmen.
- Terme zusammenfassen, die sich in zwei Variablen unterscheiden.
- Probe mit einer Zeile vergessen.
- Rangfolge ignorieren (¬ vor ∧ vor ∨).
- AND aus nur einem NAND bauen. Es braucht ein zweites als NOT.
- Summe beim Halbaddierer als OR: bei 1 + 1 muss sie 0 sein.
