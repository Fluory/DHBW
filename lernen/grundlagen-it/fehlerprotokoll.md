# Fehlerprotokoll – Grundlagen der IT

Fehler und Verwechslungen aus den Lernsitzungen. Jeder Eintrag ist eine Karteikarte: vor der Klausur wiederholen.

## 23.10.2026 – Block 4 Zahlendarstellung, Block 5 Logik

- **Oktal-Gruppen von rechts bilden.** 100₁₀ = 0110 0100₂ → `001 | 100 | 100` = **144₈** (nicht 344). Links mit Nullen auffüllen.
- **Bei a − b das Zweierkomplement von b bilden** (der Zahl hinter dem Minus): 30 − 45 = 30 + (−45).
- **Negative Zahl ablesen:** erstes Bit 1 → negativ. `1111 0001` → umdrehen +1 = `0000 1111` = 15 ist nur der Betrag → Ergebnis **−15**. Oder direkt: −128 + 64 + 32 + 16 + 1.
- **Überlauf:** 8 Bit Zweierkomplement = −128 … +127; 90 + 60 = 150 passt nicht → Überlauf (plus + plus ergibt scheinbar minus).
- **⚠ SCHWACHSTELLE: Boolesche Ausdrücke vereinfachen – unbedingt üben!** Kernregel: Zwei UND-Terme, die sich nur in einer Variablen unterscheiden (X und ¬X), zusammenfassen: (A∧B∧C) ∨ (A∧B∧¬C) = A∧B. Ein Term darf mehrfach benutzt werden (Idempotenz). Übungen: `klausur/git/zahlen_logik.html` (Abschnitt „Training Vereinfachen“, V1–V8) bzw. https://claude.ai/artifact/3tiqe3o9EDHk9ViDJ5f4Jf.
- **De Morgan:** ¬(A ∧ B) = ¬A ∨ ¬B (Operator tauschen UND jede Variable negieren); ¬(¬A ∨ B) = A ∧ ¬B.
