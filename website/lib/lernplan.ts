/**
 * Lernplan bis zu den Klausuren (Quelle: studium/lernplan_klausuren.md im Repo).
 * Ein Eintrag pro Kalendertag, lückenlos von START bis ENDE (wird in tests/lernplan.test.ts geprüft).
 */

export type PlanTask = {
  /** Fach-Slug, z. B. "grundlagen-it". */
  fach: string;
  /** Kurzes Thema, erscheint im Kalender. */
  thema: string;
  /** Was genau zu tun ist. */
  detail: string;
  dauer: string;
  /** Kapitel-Slugs dieses Fachs, werden als Links gezeigt. */
  kapitel?: string[];
};

export type PlanDay = {
  date: string;
  /** Vorlesungen an diesem Tag (Kurzform). */
  uni?: string;
  /** Klausur an diesem Tag (Fach-Slug). */
  klausur?: string;
  /** Frei oder halb frei. */
  frei?: "ganz" | "abends" | "nachmittags";
  tasks: PlanTask[];
};

export const PLAN_START = "2026-11-18";
export const PLAN_END = "2026-12-18";

const GIT = "grundlagen-it";
const WI = "wirtschaftsinformatik";
const PROG = "programmierung";
const RECHT = "recht";
const BWL = "bwl";
const MKT = "marketing";
const MATHE = "mathematik";

export const PLAN: PlanDay[] = [
  // Phase 1: Vorlesungszeit
  {
    date: "2026-11-18",
    uni: "Marketing, Recht",
    tasks: [
      {
        fach: GIT,
        thema: "Zahlendarstellung und Logik",
        detail: "Beide Kapitel nach den 7 Schritten, alle Übungen selbst rechnen. Feynman: Zweierkomplement.",
        dauer: "2 h",
        kapitel: ["zahlendarstellung", "logik"],
      },
    ],
  },
  {
    date: "2026-11-19",
    uni: "Marketing (vormittags)",
    tasks: [
      {
        fach: WI,
        thema: "Das ganze Fach an einem Nachmittag",
        detail: "Roter Faden lesen, dann Kap. 1–8 je: Zusammenfassung → Übungen → Blurting. EPK und ER-Modell frei zeichnen. Zum Schluss Karteikarten WI. Kap. 9 nur überfliegen (nicht klausurrelevant).",
        dauer: "4 h",
        kapitel: ["grundlagen", "arten-informationssysteme", "epk", "er-modell", "geschaeftsmodell", "informationsmanagement", "bi-data-science", "digitale-transformation"],
      },
      {
        fach: MATHE,
        thema: "Analysis aufarbeiten (vor der VL morgen)",
        detail: "Diagnose mit „Das musst du können“ aus Kap. 1–7, dann nur die Lücken: Beispiel nachrechnen → ähnliche Aufgabe → allein. Schwerpunkt Funktionen und Grenzwerte, weil morgen darauf aufgebaut wird.",
        dauer: "2 h",
        kapitel: ["folgen", "reihen", "funktionen-umkehrfunktion-monotonie", "grenzwerte-von-funktionen"],
      },
    ],
  },
  {
    date: "2026-11-20",
    uni: "Mathe (ganztags)",
    frei: "abends",
    tasks: [
      { fach: MATHE, thema: "Vorlesung nachbereiten", detail: "Zusammenfassung lesen, Blurting, 2 Aufgaben.", dauer: "20 Min" },
    ],
  },
  {
    date: "2026-11-21",
    tasks: [
      {
        fach: GIT,
        thema: "Logik, Datenstrukturen, Suchen/Sortieren, SQL",
        detail: "Zuerst Logik (Kap. 5) nach den 7 Schritten, offen seit Mittwoch. Dann die drei Kapitel. Am Ende 10 Min Blurting zu Zahlendarstellung.",
        dauer: "3,5 h",
        kapitel: ["logik", "datenstrukturen", "suchen-sortieren", "datenbanken-sql"],
      },
    ],
  },
  {
    date: "2026-11-22",
    frei: "nachmittags",
    tasks: [
      {
        fach: RECHT,
        thema: "Kaufrecht nachbereiten (vor dem letzten Termin)",
        detail: "Blurting zum Kaufrecht-Termin, dann das Schema der Käuferrechte (§ 437) frei auf Papier und 2 Fälle im Gutachtenstil.",
        dauer: "1 h",
        kapitel: ["leistungsstoerungen"],
      },
    ],
  },
  {
    date: "2026-11-23",
    uni: "Mathe, Recht (letzter Termin)",
    tasks: [
      {
        fach: RECHT,
        thema: "Letzten Termin nachbereiten",
        detail: "Alle Fälle des Tages im Gutachtenstil skizzieren: Obersatz, Prüfung, Ergebnis.",
        dauer: "30 Min",
      },
    ],
  },
  {
    date: "2026-11-24",
    uni: "Marketing, Mathe",
    tasks: [
      {
        fach: WI,
        thema: "EPK und ER-Modell zeichnen",
        detail: "Je ein Modell aus dem Kapitel abdecken und frei auf Papier zeichnen, dann vergleichen.",
        dauer: "45 Min",
        kapitel: ["epk", "er-modell"],
      },
    ],
  },
  {
    date: "2026-11-25",
    uni: "Studientag",
    tasks: [
      {
        fach: GIT,
        thema: "Erste Probeklausur unter Zeit",
        detail: "Vormittags: interaktive GIT-Probeklausur in 48 Min, auf Papier vorrechnen. Danach Fehlerlog anlegen und Lücken im Kapitel schließen.",
        dauer: "2,5 h",
      },
      {
        fach: WI,
        thema: "Grundlagen bis Informationsmanagement",
        detail: "Nachmittags: Kapitel 1–3, 5–6 nach den 7 Schritten. Feynman: Was ist ein Informationssystem?",
        dauer: "2,5 h",
        kapitel: ["grundlagen", "arten-informationssysteme", "geschaeftsmodell", "informationsmanagement"],
      },
    ],
  },
  {
    date: "2026-11-26",
    uni: "Marketing (vormittags)",
    tasks: [
      {
        fach: WI,
        thema: "BI/Data Science, Digitale Transformation + Probeklausur",
        detail: "Kapitel 7–8 nach den 7 Schritten, dann interaktive WI-Probeklausur in 48 Min. MC nur ankreuzen, wenn sicher.",
        dauer: "2 h",
        kapitel: ["bi-data-science", "digitale-transformation"],
      },
    ],
  },
  {
    date: "2026-11-27",
    uni: "Programmierung (ganztags, letzter Termin)",
    frei: "abends",
    tasks: [
      { fach: PROG, thema: "Letzten Termin nachbereiten", detail: "Zusammenfassung lesen, Blurting, 1 Funktion von Hand schreiben.", dauer: "20 Min" },
    ],
  },
  {
    date: "2026-11-28",
    tasks: [
      {
        fach: PROG,
        thema: "OOP und erste Probeklausur",
        detail: "Klassen und Vererbung nach den 7 Schritten. Interaktive Probeklausur Teil 1 auf Papier. Kaffeeshop Stufe 1 von Hand nachschreiben.",
        dauer: "3 h",
        kapitel: ["klassen-und-objekte", "vererbung-und-polymorphie", "projekt-kaffeeshop"],
      },
    ],
  },
  {
    date: "2026-11-29",
    frei: "nachmittags",
    tasks: [
      {
        fach: MATHE,
        thema: "Funktionen, Grenzwerte, Stetigkeit",
        detail: "Beispiele nachrechnen, je 2 Aufgaben. Feynman: Was ist ein Grenzwert?",
        dauer: "1,5 h",
        kapitel: ["funktionen-umkehrfunktion-monotonie", "grenzwerte-von-funktionen", "stetigkeit-verkettung-ln-e"],
      },
    ],
  },
  {
    date: "2026-11-30",
    uni: "Marketing, Mathe",
    tasks: [
      {
        fach: GIT,
        thema: "Gemischte Rechenaufgaben",
        detail: "Zahlensysteme, Logik, SQL durcheinander (Interleaving). Danach Fehlerlog lesen.",
        dauer: "45 Min",
      },
    ],
  },
  {
    date: "2026-12-01",
    uni: "Marketing (letzter Termin), Mathe",
    tasks: [
      {
        fach: WI,
        thema: "Karteikarten und Modelle",
        detail: "WI-Karteikarten, dann EPK, ER-Modell und Business Model Canvas noch einmal frei zeichnen.",
        dauer: "45 Min",
        kapitel: ["epk", "er-modell", "geschaeftsmodell"],
      },
    ],
  },
  {
    date: "2026-12-02",
    uni: "Mathe",
    tasks: [
      {
        fach: GIT,
        thema: "Rechnerarchitektur und Speicher",
        detail: "Beide Kapitel mit Feynman: Von-Neumann-Zyklus und RAID in eigenen Worten erklären.",
        dauer: "45 Min",
        kapitel: ["rechnerarchitektur", "speicher-raid"],
      },
    ],
  },
  // Phase 2: Endspurt GIT und WI
  {
    date: "2026-12-03",
    uni: "Prüfungsvorbereitung",
    tasks: [
      {
        fach: GIT,
        thema: "Spickzettel + zweite Probeklausur",
        detail: "Vormittags alle Spickzettel: jede Zeile abdecken und erklären. Nachmittags Probeklausur auf der Website unter Zeit, Fehler nacharbeiten.",
        dauer: "5 h",
        kapitel: ["probeklausur"],
      },
    ],
  },
  {
    date: "2026-12-04",
    uni: "Prüfungsvorbereitung",
    tasks: [
      { fach: GIT, thema: "Schwächen laut Fehlerlog", detail: "Vormittags nur die Themen aus dem Fehlerlog.", dauer: "2,5 h" },
      {
        fach: WI,
        thema: "Begriffe und Modelle",
        detail: "Nachmittags Feynman für die Begriffe, Modelle auf Papier.",
        dauer: "2,5 h",
      },
    ],
  },
  {
    date: "2026-12-05",
    tasks: [
      { fach: GIT, thema: "Fehlerlog und gemischtes Quiz", detail: "Kurz wiederholen.", dauer: "1 h" },
      {
        fach: WI,
        thema: "Zweite Probeklausur",
        detail: "Probeklausur auf der Website in 48 Min, danach nacharbeiten.",
        dauer: "2 h",
        kapitel: ["probeklausur"],
      },
    ],
  },
  {
    date: "2026-12-06",
    frei: "nachmittags",
    tasks: [
      {
        fach: GIT,
        thema: "Locker wiederholen",
        detail: "Spickzettel durchblättern, Fehlerlog lesen. Nichts Neues. Früh schlafen.",
        dauer: "1 h",
      },
    ],
  },
  // Phase 3: Klausurwochen
  {
    date: "2026-12-07",
    klausur: GIT,
    tasks: [{ fach: WI, thema: "Spickzettel und Fehlerlog", detail: "Nachmittags nach der Klausur.", dauer: "1,5 h" }],
  },
  {
    date: "2026-12-08",
    tasks: [
      { fach: WI, thema: "Spickzettel und Modelle zeichnen", detail: "Vormittags.", dauer: "3 h" },
      { fach: PROG, thema: "Code lesen", detail: "Nachmittags: „Was wird ausgegeben?“-Aufgaben aus den Kapiteln.", dauer: "1 h" },
    ],
  },
  {
    date: "2026-12-09",
    klausur: WI,
    tasks: [
      {
        fach: PROG,
        thema: "Probeklausur Teil 2",
        detail: "Nachmittags: interaktive Probeklausur Teil 2, auf Papier mit Kuli.",
        dauer: "2 h",
      },
    ],
  },
  {
    date: "2026-12-10",
    tasks: [
      {
        fach: PROG,
        thema: "Probeklausur 120 Min + Funktionen schreiben",
        detail: "Probeklausur auf der Website unter Zeit, Fehlerlog, offizielle Probeklausur ohne Lösung wiederholen, 3 Funktionen frei schreiben.",
        dauer: "6 h",
        kapitel: ["probeklausur"],
      },
    ],
  },
  { date: "2026-12-11", klausur: PROG, frei: "nachmittags", tasks: [] },
  {
    date: "2026-12-12",
    tasks: [
      {
        fach: RECHT,
        thema: "Prüfungsschema + Fälle Kap. 1–6",
        detail: "Roter Faden, Prüfungsschema auswendig, Fälle im Gutachtenstil schreiben. Gesetzestext markieren und mit Klebezetteln (nur §-Angaben) versehen.",
        dauer: "5 h",
        kapitel: ["fall-loesen", "willenserklaerung-vertrag", "nichtigkeit-anfechtung-geschaeftsfaehigkeit", "stellvertretung", "fristen-verjaehrung"],
      },
    ],
  },
  {
    date: "2026-12-13",
    tasks: [
      {
        fach: RECHT,
        thema: "Kap. 7–9 + Probeklausur",
        detail: "Vormittags Schuldverhältnis, Leistungsstörungen, Schadensersatz/AGB und Kaufrecht-Fälle. Nachmittags interaktive Probeklausur (60 Min) mit Gesetzestext.",
        dauer: "5 h",
        kapitel: ["schuldverhaeltnis", "leistungsstoerungen", "schadensersatz-agb"],
      },
    ],
  },
  {
    date: "2026-12-14",
    klausur: RECHT,
    tasks: [
      {
        fach: BWL,
        thema: "Rechnungen",
        detail: "Nachmittags: Andler, Meldebestand, Break-even, ROI. Erst Beispiel, dann mit Blick darauf, dann allein.",
        dauer: "2 h",
        kapitel: ["rechnungswesen", "planung-und-kontrolle", "materialwirtschaft"],
      },
    ],
  },
  {
    date: "2026-12-15",
    tasks: [
      {
        fach: BWL,
        thema: "Musterklausur 2025",
        detail: "Vormittags in 72 Min, dann mit der offiziellen Musterlösung korrigieren.",
        dauer: "2,5 h",
      },
      {
        fach: MKT,
        thema: "Musterklausur 2025",
        detail: "Nachmittags in 48 Min, dann die Rechenteile der interaktiven Probeklausur.",
        dauer: "2,5 h",
      },
    ],
  },
  {
    date: "2026-12-16",
    klausur: BWL,
    tasks: [{ fach: MATHE, thema: "Alle Spickzettel", detail: "Nachmittags jede Zeile abdecken und erklären.", dauer: "2 h" }],
  },
  {
    date: "2026-12-17",
    tasks: [
      {
        fach: MATHE,
        thema: "Probeklausur + Logik/Algebra",
        detail: "Vormittags interaktive Probeklausur, nachmittags Aufgaben zu Aussagenlogik und Mengen/Relationen, abends Fehlerlog. Früh schlafen.",
        dauer: "6 h",
        kapitel: ["aussagenlogik", "mengen-relationen-abbildungen"],
      },
    ],
  },
  { date: "2026-12-18", klausur: MATHE, tasks: [] },
];

/** Zusatz für Klausurtage: BWL und Marketing werden zusammen geschrieben. */
export const EXAM_LABEL: Record<string, string> = {
  [BWL]: "BWL + Marketing",
};

export const DAILY_RULES = [
  "15 Minuten Karteikarten (gemischtes Quiz), jeden Tag, auch an schlechten Tagen.",
  "Nach jeder Vorlesung am selben Tag 20–30 Minuten nachbereiten.",
  "Jede Lerneinheit endet mit Abfragen aus dem Kopf, nie mit Lesen.",
] as const;

export const METHODS = [
  {
    title: "Active Recall",
    text: "Material zu, selbst antworten, erst dann nachsehen. Blurting: nach einem Kapitel 5 Minuten alles aufs leere Blatt schreiben, dann mit der Zusammenfassung vergleichen. Was fehlt, ist deine Lernliste.",
  },
  {
    title: "Spaced Repetition",
    text: "In wachsenden Abständen wiederholen (1, 3, 7, 14 Tage). Die Karteikarten machen das automatisch. Ein neues Kapitel nach 3 Tagen noch einmal 10 Minuten blurten.",
  },
  {
    title: "Feynman",
    text: "Ein Thema so einfach erklären, dass es ein 12-Jähriger versteht. Wo du stockst, ist die Lücke: nur diese Stelle nachlesen, dann noch einmal kürzer erklären.",
  },
  {
    title: "Interleaving",
    text: "Aufgabentypen mischen statt 10 gleiche hintereinander. In der Klausur steht nicht dabei, welche Methode gefragt ist.",
  },
  {
    title: "Probeklausur + Fehlerlog",
    text: "Zwei pro Fach, unter Zeit, auf Papier. Jeden Fehler notieren: Was war falsch, warum (Wissen, Flüchtigkeit, falsch verstanden), was ist richtig. Am Vorabend nur das Fehlerlog lesen.",
  },
  {
    title: "Pomodoro und Schlaf",
    text: "25 Minuten lernen, 5 Minuten Pause, nach 4 Blöcken länger. Im Schlaf wird gespeichert: lieber weniger lernen als weniger schlafen.",
  },
] as const;

export const CHAPTER_STEPS = [
  "Zusammenfassung lesen (10 Min)",
  "Kapitel durcharbeiten, Übungen erst selbst rechnen (30–45 Min)",
  "Blurting: alles aufschreiben, was du weißt (5 Min)",
  "Mit „Das musst du können“ vergleichen, Lücken markieren (5 Min)",
  "Feynman für die ein bis zwei schwierigsten Punkte (5–10 Min)",
  "Karteikarten des Kapitels (5 Min)",
  "Spickzettel abdecken und jede Zeile erklären (5 Min)",
] as const;
