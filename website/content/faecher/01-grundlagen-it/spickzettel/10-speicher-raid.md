## Speicherarten (schnell → langsam)

| Art | Eigenschaften |
|---|---|
| Register | in der CPU, extrem schnell, sehr klein, teuer |
| Cache (L1, L2, L3) | sehr schneller Zwischenspeicher für Daten und Programmteile, Teil der CPU, aus Kostengründen klein |
| Hauptspeicher (RAM) | Programme und Daten; ohne Strom Inhalt weg |
| Flash (früher ROM, EPROM) | meist nur gelesen (BIOS, Firmware); behält Inhalt ohne Strom |

## Cache und Lokalität

- CPU wird schneller, Hauptspeicher kommt nicht hinterher; alles auf die CPU wäre zu teuer → kleiner, schneller Cache.
- **Lokalität:** Programme greifen in kurzer Zeit nur auf einen kleinen Teil des Speichers zu; der nächste Befehl liegt meist direkt neben dem letzten → Nachbarn gleich mitladen.
- Beispiele: **Schleifen** (gleicher Programmteil mehrfach), **Arrays/Tabellen** (benachbarte Datensätze vorab holen).
- **Cache-Miss** (Folie: „Cache-fault“): Bereich fehlt im Cache, muss aus dem Hauptspeicher nachgeladen werden.

## Adressleitungen

Zelle = 8 Bit (1 Byte), jede mit Adresse. **n Leitungen → 2ⁿ Adressen (Byte).** Jede zusätzliche Leitung verdoppelt.

2¹⁰ = 1 KB · 2²⁰ = 1 MB · 2³⁰ = 1 GB · 2⁴⁰ = 1 TB (Faktor 1 024).

**Leitungen → Größe:**
1. Exponent in 10/20/30/40 + Rest zerlegen.
2. Rest als Zweierpotenz ausrechnen.
3. Mit der Einheit verbinden.

32 = 2 + 30 → 2² · 1 GB = **4 GB**. 16 → 64 KB. 24 → 16 MB. 48 → 256 TB.

**Größe → Leitungen:** Zahl und Einheit als Zweierpotenz schreiben, Exponenten addieren.
512 GB = 2⁹ · 2³⁰ → **39 Leitungen**. 16 GB = 2⁴ · 2³⁰ → 34.

## Speicherhierarchie

```text
Register
L1-Cache (kB)
L2-Cache (MB)
L3-Cache
RAM (GB)
──── volatil ↑ / persistent ↓ ────
Flash / SSD (TB)
Festplatte (TB)
Band, optisch, Cloud (Backup)
```

- Nach unten wachsen **Zugriffszeit** (langsamer), **Kapazität** und **Bits pro Euro** (billiger pro Bit).
- **Volatil:** Inhalt ohne Strom weg (Register, Cache, RAM). **Persistent:** bleibt (Flash, SSD, Festplatte, Band).
- **Festplatte:** magnetische Scheiben, Schreib-/Lesekopf. **SSD:** NAND-/NOR-Gatter, keine beweglichen Teile, sehr schnell, begrenzte Schreibzyklen. **Magnetband:** Backup.

## RAID

RAID (Redundant Array of Independent Disks): mehrere Platten als ein logisches Laufwerk; Ziel mehr Tempo und/oder Ausfallsicherheit.
- **Striping:** Daten in Stücke zerlegt, reihum verteilt, paralleles Lesen.
- **Mirroring:** Daten auf zweite Platte gespiegelt.

| Level | Prinzip | min. Platten | Ausfälle | Nutzkapazität (n Platten à C) |
|---|---|---|---|---|
| 0 | Striping ohne Redundanz | 2 | 0 | n · C |
| 1 | Mirroring | 2 | 1 je Spiegelpaar | n · C / 2 |
| 5 | Striping + 1 Paritätsblock je Zeile, reihum verteilt | 3 | 1 | (n − 1) · C |
| 6 | wie 5, doppelte Parität | 4 | 2 | (n − 2) · C |

**Nutzkapazität:** n und C ablesen, Formel wählen, einsetzen.

| | RAID 0 | RAID 1 | RAID 5 | RAID 6 |
|---|---|---|---|---|
| 4 × 2 TB | 8 TB | 4 TB | 6 TB | 4 TB |
| 5 × 4 TB | 20 TB | – | 16 TB | 12 TB |

## Parität mit XOR

1. Parität = alle Datenblöcke spaltenweise XOR (1 bei ungerader Anzahl Einsen).
2. Ausfall: übrige Blöcke und Parität XOR → fehlender Block.

```text
1011 ⊕ 0110 ⊕ 1100 = 0001   Parität
Platte 2 fällt aus:
1011 ⊕ 1100 ⊕ 0001 = 0110   wiederhergestellt
```

## Typische Fehler

- Register zum Hauptspeicher zählen. Sie sitzen in der CPU.
- „Cache lohnt sich, weil er groß ist.“ Er ist klein; Grund ist die Lokalität.
- Adressen als n · 8 oder 2 · n rechnen statt 2ⁿ.
- Grenze volatil/persistent falsch setzen: sie liegt zwischen RAM und Flash/SSD.
- „Nach unten kürzere Zugriffszeit“: sie wird länger.
- RAID 0 für ausfallsicher halten.
- Mindestplatten verwechseln: RAID 5 = 3, RAID 6 = 4.
- RAID für ein Backup halten: Löschen wird sofort auf alle Platten übertragen.
- Folie nennt Flash/SSD „Primärspeicher“; üblich: Primärspeicher = Arbeitsspeicher, SSD/Festplatte = Sekundärspeicher.
