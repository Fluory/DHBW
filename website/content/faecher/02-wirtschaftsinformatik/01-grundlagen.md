---
title: "Grundlagen der Wirtschaftsinformatik"
order: 1
summary: "Womit sich die Wirtschaftsinformatik beschäftigt, was Daten, Information und Wissen unterscheidet, was ein Modell ist und warum ein Informationssystem mehr ist als Software."
klausur: "relevant"
---

Ein Leuchtenhändler mit etwa 80 Beschäftigten verkauft über einen Onlineshop, hat ein Lager und eine Montage. Eine Kundin bestellt die Stehleuchte 4711. Damit die Leuchte ankommt, müssen Shop, Lager, Versand und Buchhaltung zusammenarbeiten, und zwar Menschen und Software gemeinsam. Genau dieses Zusammenspiel untersucht die Wirtschaftsinformatik.

Dieser erste Block klärt die Grundbegriffe, auf denen das ganze Fach aufbaut. Klausurrelevant sind vor allem die Begriffspaare: Daten und Information, System und Modell, Informationssystem und Anwendungssystem sowie die beiden Forschungsrichtungen.

## Was die Wirtschaftsinformatik macht

**Was ist das?** Nach der Definition von Mertens beschäftigt sich die Wirtschaftsinformatik mit der **Konzeption, Entwicklung, Nutzung und Wartung von Informationssystemen** sowie mit dem **Management des Produktionsfaktors Information** für betriebliche Aufgaben in Wirtschaft und Verwaltung.

Beim Leuchtenhändler sieht das so aus:

| Tätigkeit | Beim Leuchtenhändler |
|---|---|
| Konzeption | Welches System braucht der Shop? |
| Entwicklung | Shop und Lagersystem verbinden |
| Nutzung | Beschäftigte bearbeiten Aufträge |
| Wartung | Updates einspielen, Fehler beheben |
| Information managen | Bestände, Kunden- und Verkaufsdaten |

> [!IMPORTANT]
> **Das Wichtigste**
> Fünf Teile der Definition: Konzeption, Entwicklung, Nutzung, Wartung von Informationssystemen und das Management der Information.

> [!WARNING]
> **Achtung**
> Hardware herstellen gehört nicht zur Wirtschaftsinformatik. Das ist eine typische falsche Option.

## Daten, Information, Wissen

**Was ist das?** Die drei Begriffe bauen als Pyramide aufeinander auf (nach Ackoff):

| Stufe | Bedeutung | Beispiel |
|---|---|---|
| Daten | Zeichen ohne Kontext | „4711 · 23“ |
| Information | Daten mit Kontext und Bedeutung | „Lagerbestand Leuchte 4711: 23 Stück“ |
| Wissen | vernetzte Information und Erfahrung, die Handeln ermöglicht | „Unter 30 Stück und 2 Wochen Lieferzeit: heute nachbestellen.“ |

Ob Daten für jemanden eine Information sind, hängt von seinem Wissen und Zweck ab. Dieselbe Zahl kann für eine Person Information sein und für eine andere nur Daten.

**Beispiel:** Die Wettervorhersage für den Sommer in Kanada ist für die meisten Menschen in Europa nur Daten. Für eine Getreidehändlerin ist sie eine Information, weil das Wetter die Ernte und damit die Preise beeinflusst.

> [!IMPORTANT]
> **Das Wichtigste**
> Daten → Information (mit Kontext) → Wissen (vernetzt, ermöglicht Handeln). Information ist zweck- und personenabhängig.

> [!WARNING]
> **Achtung**
> Ein Satz wie „unter 30 Stück: nachbestellen“ ist Wissen, nicht Information. Er sagt, was zu tun ist.

## System und Modell

**Was ist das?**

- Ein **System** ist eine Menge verknüpfter Elemente, die sich von ihrer Umwelt abgrenzt. Offene Systeme tauschen Input und Output mit der Umwelt aus: Der Leuchtenhändler bekommt Bestellungen und Ware und gibt Lieferungen und Rechnungen ab. **Wo die Systemgrenze liegt, hängt vom Zweck der Betrachtung ab.**
- Ein **Modell** ist eine vereinfachte Abbildung eines Systems für einen bestimmten Zweck. Unwichtiges wird bewusst weggelassen. **Beispiel:** Auf dem U-Bahn-Plan stimmen die Entfernungen nicht, aber zum Umsteigen ist er perfekt.

Die Qualität eines Modells ist seine Eignung für den Zweck. In der Wirtschaftsinformatik sind Modelle zentral: In Kapitel 3 kommt das Prozessmodell (EPK), in Kapitel 4 das Datenmodell (ER).

> [!IMPORTANT]
> **Das Wichtigste**
> Systemgrenze = abhängig vom Zweck. Modell = zweckorientierte Vereinfachung.

> [!WARNING]
> **Achtung**
> „Ein Modell ist umso besser, je vollständiger es ist“ ist falsch. Ein gutes Modell lässt bewusst weg, was für den Zweck unwichtig ist.

## Informationssystem und Anwendungssystem

**Was ist das?**

- Ein **Informationssystem (IS)** besteht aus menschlichen **und** maschinellen Elementen. Es versorgt seine Nutzer mit den richtigen Informationen zur richtigen Zeit.
- Ein **Anwendungssystem (AS)** ist nur der technische Teil: Anwendungssoftware, Basissoftware und Hardware.

```text
┌──────────── Informationssystem (Mensch + Maschine) ────────────┐
│  Mensch als Nutzer                                             │
│  ┌──────────── Anwendungssystem ────────────┐                  │
│  │  Anwendungssoftware                      │                  │
│  │  Basissoftware                           │                  │
│  │  Hardware                                │                  │
│  └──────────────────────────────────────────┘                  │
└────────────────────────────────────────────────────────────────┘
```

**Beispiel:** Shop-Software und Warenwirtschaft sind Anwendungssysteme. Zusammen mit den Menschen, die damit Aufträge bearbeiten, bilden sie das Informationssystem.

> [!IMPORTANT]
> **Das Wichtigste**
> Anwendungssystem = Technik. Informationssystem = Technik + Mensch.

> [!WARNING]
> **Achtung**
> „SAP S/4HANA ist ein Informationssystem“ und „Ein IS besteht aus Hardware und Software“ sind beide falsch. Das sind Anwendungssysteme. Erst mit den Menschen entsteht ein IS.

## Das IS als sozio-technisches System

**Was ist das?** Ein IS hat vier Komponenten:

1. **Mensch:** gestaltet und nutzt das System.
2. **Aufgabe:** der betriebliche Zweck, zum Beispiel Aufträge abwickeln.
3. **Technik:** das Anwendungssystem.
4. **Organisation:** Abläufe, Rollen und Regeln, in die das System eingebettet ist.

„Sozio-technisch“ heißt: Das soziale und das technische Teilsystem beeinflussen sich gegenseitig. Neue Software verändert Abläufe, und Abläufe bestimmen, wie Software genutzt wird. Deshalb gilt: Software allein reicht nicht.

**Beispiel:** Der Leuchtenhändler führt ein neues Warenwirtschaftssystem ein. Es läuft technisch fehlerfrei, trotzdem gehen Bestellungen zu spät raus. Mögliche Ursachen: Die Beschäftigten sind nicht geschult (Mensch), Sonderfälle sind ungeklärt (Aufgabe), Stammdaten wurden falsch übernommen (Technik), Abläufe wurden nicht angepasst (Organisation).

> [!IMPORTANT]
> **Das Wichtigste**
> Vier Komponenten: Mensch, Aufgabe, Technik, Organisation. Sie beeinflussen sich gegenseitig.

> [!WARNING]
> **Achtung**
> „Wenn die Software fehlerfrei läuft, funktioniert auch das Informationssystem“ ist falsch. Auch Mensch, Aufgabe und Organisation müssen passen.

## Wirtschaftsinformatik als Wissenschaft

**Was ist das?** Die Wirtschaftsinformatik ist eine Realwissenschaft, genauer eine Wirtschaftswissenschaft neben BWL und VWL. Sie gilt als „hybride“ Disziplin, weil sie Ansätze vor allem aus BWL und Informatik verbindet.

Es gibt zwei Forschungsrichtungen (Paradigmen), die sich ergänzen:

| | verhaltensorientiert | gestaltungsorientiert |
|---|---|---|
| Ziel | beobachten und erklären: Wie und warum nutzen Menschen IS? | entwerfen und bewerten: Welche Lösung verbessert die Praxis? |
| Ergebnis | Theorien, Erklärungsmodelle | Methoden, Modelle, Prototypen, Software |
| Beispiel | Warum akzeptieren Beschäftigte ein neues System? | kassenlose Selbstbedienung im Modehandel entwickeln und testen |

Das **Langfristziel** nach Mertens ist die „sinnhafte Vollautomation“: Was ein System mindestens so gut kann wie ein Mensch, übernimmt das System. Das **Berufsbild** ist eine Brücke: Wirtschaftsinformatiker übersetzen zwischen Fachbereich und IT.

> [!IMPORTANT]
> **Das Wichtigste**
> Verhaltensorientiert = erklären. Gestaltungsorientiert = entwerfen. Langfristziel: sinnhafte Vollautomation.

> [!WARNING]
> **Achtung**
> Das Langfristziel heißt nicht „alles automatisieren“. Es heißt „sinnhaft“: nur das, was das System mindestens so gut kann wie ein Mensch.

## Übungen

> [!TIP]
> **Übung 1 · leicht**
> Stimmt das? „SAP S/4HANA ist ein Informationssystem.“ Begründe kurz.
> *Quelle: Folie T1B2 F. 2 („Stimmt das?“), sinngemäß*

> [!TIP]
> **Übung 2 · leicht**
> Welches Beispiel ist auf der Stufe Wissen einzuordnen? A „4711 · 23“ · B „Lagerbestand Leuchte 4711: 23 Stück“ · C „Unter 30 Stück und 2 Wochen Lieferzeit: heute nachbestellen“ · D „Leuchte 4711“
> *Quelle: Lernseite WI, Aufgabe 1.6 (eigene Aufgabe nach T1B1 F. 18)*

> [!TIP]
> **Übung 3 · mittel**
> Aussage 1: „Ein Modell ist umso besser, je vollständiger es die Realität abbildet.“ Aussage 2: „Wo die Grenze eines Systems liegt, hängt vom Zweck der Betrachtung ab.“ Welche Aussagen sind richtig?
> *Quelle: Lernseite WI, Aufgabe 1.7 (eigene Aufgabe nach T1B1 F. 21)*

> [!TIP]
> **Übung 4 · mittel**
> Eine Studie untersucht mit Fragebögen, warum Beschäftigte ein neues CRM akzeptieren oder ablehnen. Welchem Paradigma folgt sie? Begründe.
> *Quelle: Lernseite WI, Aufgabe 1.10 (eigene Aufgabe nach T1B1 F. 32)*

> [!TIP]
> **Übung 5 · Prüfungsniveau**
> Ist die „Wettervorhersage für den kommenden Sommer in Kanada“ eine Information? Beantworte die Frage für a) die meisten Menschen in Europa, b) eine Getreidehändlerin, c) jemanden, der dort Urlaub plant.
> *Quelle: Folie T1B1 F. 19, sinngemäß*

> [!TIP]
> **Übung 6 · Prüfungsniveau**
> Der Leuchtenhändler führt ein neues Warenwirtschaftssystem ein. Die Software arbeitet technisch fehlerfrei, trotzdem gehen Bestellungen verspätet raus. Nenne zu jeder sozio-technischen Komponente eine mögliche Ursache. Liegt das Problem an der Software?
> *Quelle: Folie T1B1 F. 28, sinngemäß*

## Lösungen

### Übung 1

**Falsch.** SAP S/4HANA ist ein Anwendungssystem, also Technik. Erst mit Menschen, Aufgaben und Organisation entsteht ein Informationssystem.

### Übung 2

**C.** Wissen ist vernetzte Information mit Erfahrung, die Handeln ermöglicht. A und D sind Daten, B ist Information.

### Übung 3

**Nur Aussage 2 ist richtig.**

1. Aussage 1 ist falsch: Ein Modell lässt bewusst weg. Seine Qualität ist die Eignung für den Zweck (U-Bahn-Plan).
2. Aussage 2 ist richtig: Die Systemgrenze hängt vom Zweck ab.

### Übung 4

**Verhaltensorientiert.** Die Studie will erklären, wie und warum Menschen ein IS nutzen. Einen Prototyp bauen und testen wäre gestaltungsorientiert.

### Übung 5

- a) **Nein.** Die meisten haben keinen Zweck dafür, es bleiben Daten.
- b) **Ja.** Das Wetter beeinflusst die Ernte und damit die Getreidepreise.
- c) **Ja.** Sie hilft bei der Reiseplanung.

Kernaussage: Information ist zweck- und personenabhängig.

### Übung 6

- **Mensch:** nicht geschult, Widerstand, Arbeit weiter mit alten Excel-Listen.
- **Aufgabe:** Abläufe wie Kommissionierung oder Freigabe neu definiert, Sonderfälle ungeklärt.
- **Technik:** falsche Stammdaten übernommen, Schnittstelle zum Shop oder Paketdienst fachlich falsch eingestellt.
- **Organisation:** Abläufe nicht angepasst, Rollen und Rechte falsch verteilt.

**Nein**, die Software war fehlerfrei. Das Problem liegt im Zusammenspiel der Komponenten.
