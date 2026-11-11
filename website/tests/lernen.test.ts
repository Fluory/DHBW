import { describe, expect, it } from "vitest";
import {
  NO_FILTER,
  boxOf,
  countBoxes,
  filterCards,
  isWobbly,
  orderCards,
  parseProgress,
  pickFeynmanCard,
  rate,
  resetProgress,
  topicsOf,
  type ProgressMap,
} from "@/lib/lernen/leitner";
import {
  isBetter,
  optionIndexFromKey,
  parseBest,
  percent,
  pickInterleaved,
  pickQuestions,
  scoreQuiz,
  shuffle,
  updateBest,
} from "@/lib/lernen/quiz";
import { matchChapter } from "@/lib/lernen/topics";

/** Deterministischer Zufall für Tests. */
function seeded(seed = 1) {
  let value = seed;
  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

const cards = [
  { id: "k1", topic: "A", exam: true },
  { id: "k2", topic: "A", exam: false },
  { id: "k3", topic: "B", exam: true },
  { id: "k4", topic: "B", exam: true },
  { id: "k5", topic: "C", exam: false },
];

describe("Leitner: Bewerten", () => {
  it("neue Karten liegen in „Neu“", () => {
    expect(boxOf({}, "k1")).toBe("neu");
  });

  it("legt nach Bewertung ins passende Fach, zählt Serie und Häufigkeit", () => {
    let progress: ProgressMap = {};
    progress = rate(progress, "k1", "sitzt", 10);
    progress = rate(progress, "k1", "sitzt", 20);
    expect(progress.k1).toEqual({ box: "sitzt", streak: 2, seen: 2, last: 20 });
    progress = rate(progress, "k1", "nicht", 30);
    expect(progress.k1).toEqual({ box: "nicht", streak: 0, seen: 3, last: 30 });
    progress = rate(progress, "k1", "unsicher", 40);
    expect(boxOf(progress, "k1")).toBe("unsicher");
  });

  it("verändert die alte Map nicht", () => {
    const before: ProgressMap = {};
    rate(before, "k1", "sitzt", 1);
    expect(before).toEqual({});
  });

  it("setzt nur die angegebenen Karten zurück", () => {
    const progress = rate(rate({}, "k1", "sitzt", 1), "x9", "nicht", 2);
    expect(Object.keys(resetProgress(progress, ["k1"]))).toEqual(["x9"]);
  });
});

describe("Leitner: Reihenfolge", () => {
  it("Nicht gewusst → Neu → Unsicher → Sitzt", () => {
    let progress: ProgressMap = {};
    progress = rate(progress, "k1", "sitzt", 1);
    progress = rate(progress, "k2", "unsicher", 2);
    progress = rate(progress, "k4", "nicht", 3);
    expect(orderCards(cards, progress).map((card) => card.id)).toEqual(["k4", "k3", "k5", "k2", "k1"]);
  });

  it("ohne Lernstand: Reihenfolge der Datei", () => {
    expect(orderCards(cards, {}).map((card) => card.id)).toEqual(["k1", "k2", "k3", "k4", "k5"]);
  });

  it("im selben Fach: am längsten nicht gesehen zuerst, bei „Sitzt“ kürzeste Serie zuerst", () => {
    let progress: ProgressMap = {};
    progress = rate(progress, "k1", "nicht", 50);
    progress = rate(progress, "k2", "nicht", 10);
    progress = rate(progress, "k3", "sitzt", 1);
    progress = rate(progress, "k3", "sitzt", 2);
    progress = rate(progress, "k4", "sitzt", 99);
    expect(orderCards(cards, progress).map((card) => card.id)).toEqual(["k2", "k1", "k5", "k4", "k3"]);
  });

  it("zählt die Fächer", () => {
    const progress = rate(rate({}, "k1", "sitzt", 1), "k2", "nicht", 1);
    expect(countBoxes(cards.map((card) => card.id), progress)).toEqual({ nicht: 1, neu: 3, unsicher: 0, sitzt: 1 });
  });
});

describe("Leitner: Filter und Themen", () => {
  const progress = rate(rate({}, "k1", "unsicher", 1), "k3", "sitzt", 1);

  it("filtert nach Thema, Klausurpunkt und Wackelkandidaten", () => {
    const ids = (filter: Partial<typeof NO_FILTER>) =>
      filterCards(cards, progress, { ...NO_FILTER, ...filter }).map((card) => card.id);
    expect(ids({})).toEqual(["k1", "k2", "k3", "k4", "k5"]);
    expect(ids({ topic: "B" })).toEqual(["k3", "k4"]);
    expect(ids({ examOnly: true })).toEqual(["k1", "k3", "k4"]);
    expect(ids({ wobblyOnly: true })).toEqual(["k1"]);
    expect(ids({ topic: "B", wobblyOnly: true })).toEqual([]);
  });

  it("Wackelkandidat = Nicht gewusst oder Unsicher, nicht Neu", () => {
    expect(isWobbly(progress, "k1")).toBe(true);
    expect(isWobbly(progress, "k2")).toBe(false);
    expect(isWobbly(rate({}, "k2", "nicht", 1), "k2")).toBe(true);
  });

  it("Themen in Reihenfolge des ersten Auftretens", () => {
    expect(topicsOf(cards)).toEqual(["A", "B", "C"]);
  });
});

describe("Feynman: Auswahl", () => {
  it("bevorzugt Klausurpunkte, die noch nicht sitzen", () => {
    const progress = rate(rate({}, "k1", "sitzt", 1), "k3", "sitzt", 1);
    for (let seed = 1; seed < 30; seed += 1) {
      expect(pickFeynmanCard(cards, progress, seeded(seed))?.id).toBe("k4");
    }
  });

  it("wiederholt die letzte Karte nicht, wenn es Alternativen gibt", () => {
    const rng = seeded(3);
    for (let i = 0; i < 20; i += 1) expect(pickFeynmanCard(cards, {}, rng, "k1")?.id).not.toBe("k1");
  });

  it("fällt auf Klausurpunkte und dann alle Karten zurück", () => {
    const allExamDone = ["k1", "k3", "k4"].reduce<ProgressMap>((progress, id) => rate(progress, id, "sitzt", 1), {});
    expect(["k1", "k3", "k4"]).toContain(pickFeynmanCard(cards, allExamDone, seeded(5))?.id);
    const noExam = cards.filter((card) => !card.exam);
    expect(["k2", "k5"]).toContain(pickFeynmanCard(noExam, {}, seeded(5))?.id);
    expect(pickFeynmanCard([], {}, seeded(5))).toBeNull();
  });
});

describe("Gespeicherter Lernstand", () => {
  it("liest gültige Einträge und verwirft den Rest", () => {
    const raw = JSON.stringify({
      k1: { box: "sitzt", streak: 2, seen: 3, last: 5 },
      k2: { box: "kaputt" },
      k3: "nein",
      k4: { box: "nicht", streak: -1 },
    });
    expect(parseProgress(raw)).toEqual({
      k1: { box: "sitzt", streak: 2, seen: 3, last: 5 },
      k4: { box: "nicht", streak: 0, seen: 0, last: 0 },
    });
  });

  it("verträgt leeren oder kaputten Speicher", () => {
    expect(parseProgress(null)).toEqual({});
    expect(parseProgress("{")).toEqual({});
    expect(parseProgress("[1,2]")).toEqual({});
  });
});

describe("Quiz", () => {
  const questions = Array.from({ length: 12 }, (_, i) => ({ id: `q${i}`, correct: i % 4, subject: i < 9 ? "a" : "b" }));

  it("mischt ohne Verlust und ohne die Eingabe zu ändern", () => {
    const input = [1, 2, 3, 4, 5, 6];
    const result = shuffle(input, seeded(7));
    expect([...result].sort()).toEqual(input);
    expect(input).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("zieht 10 zufällige oder alle Fragen", () => {
    const ten = pickQuestions(questions, 10, seeded(2));
    expect(ten).toHaveLength(10);
    expect(new Set(ten.map((question) => question.id)).size).toBe(10);
    expect(pickQuestions(questions, "all", seeded(2))).toHaveLength(12);
    expect(pickQuestions(questions.slice(0, 3), 10, seeded(2))).toHaveLength(3);
  });

  it("gemischtes Quiz wechselt die Fächer ab", () => {
    const picked = pickInterleaved(questions, 6, (question) => question.subject, seeded(4));
    expect(picked).toHaveLength(6);
    expect(picked.filter((question) => question.subject === "b")).toHaveLength(3);
    for (let i = 1; i < picked.length; i += 1) expect(picked[i].subject).not.toBe(picked[i - 1].subject);
    // Wenn ein Fach leer ist, kommen die übrigen weiter dran.
    expect(pickInterleaved(questions, 12, (question) => question.subject, seeded(4))).toHaveLength(12);
  });

  it("wertet aus und sammelt falsche Fragen", () => {
    const list = questions.slice(0, 4);
    expect(scoreQuiz(list, { q0: 0, q1: 1, q2: 0 })).toEqual({ score: 2, total: 4, wrongIds: ["q2", "q3"] });
  });

  it("übersetzt Tasten A–D und 1–4", () => {
    expect(["a", "B", "c", "D", "1", "2", "3", "4", "e", "5", " "].map(optionIndexFromKey)).toEqual([
      0, 1, 2, 3, 0, 1, 2, 3, null, null, null,
    ]);
  });

  it("merkt den Bestwert je Fach: höhere Quote, bei Gleichstand längere Runde", () => {
    let best = updateBest({}, "git", { score: 6, total: 10 });
    best = updateBest(best, "git", { score: 5, total: 10 });
    expect(best.git).toEqual({ score: 6, total: 10 });
    best = updateBest(best, "git", { score: 9, total: 10 });
    best = updateBest(best, "git", { score: 27, total: 30 });
    expect(best.git).toEqual({ score: 27, total: 30 });
    expect(isBetter({ score: 0, total: 0 }, undefined)).toBe(false);
    expect(updateBest(best, "wi", { score: 1, total: 4 }).wi).toEqual({ score: 1, total: 4 });
  });

  it("liest gespeicherte Bestwerte robust", () => {
    expect(parseBest(JSON.stringify({ a: { score: 3, total: 4 }, b: { score: 5, total: 4 }, c: null, d: { score: 1 } }))).toEqual({
      a: { score: 3, total: 4 },
    });
    expect(parseBest("kaputt")).toEqual({});
    expect(percent(2, 3)).toBe(67);
    expect(percent(0, 0)).toBe(0);
  });
});

describe("Thema → Kapitel", () => {
  const chapters = [
    { slug: "zahlendarstellung", title: "Zahlendarstellung und Rechnen" },
    { slug: "mooresches-gesetz", title: "Mooresches Gesetz und Treiber des Fortschritts" },
    { slug: "speicher-raid", title: "Speicher: Arten, Hierarchie, RAID" },
    { slug: "funktionen-und-rekursion", title: "Funktionen und Rekursion" },
  ];

  it("findet das passendste Kapitel", () => {
    expect(matchChapter("Zahlen", chapters)?.slug).toBe("zahlendarstellung");
    expect(matchChapter("Moore", chapters)?.slug).toBe("mooresches-gesetz");
    expect(matchChapter("Speicher/RAID", chapters)?.slug).toBe("speicher-raid");
    expect(matchChapter("VL4 Rekursion", chapters)?.slug).toBe("funktionen-und-rekursion");
  });

  it("liefert null, wenn nichts passt", () => {
    expect(matchChapter("Fall lösen", chapters)).toBeNull();
    expect(matchChapter("", chapters)).toBeNull();
  });
});
