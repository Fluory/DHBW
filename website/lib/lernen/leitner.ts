/**
 * Lernstand der Karteikarten nach dem Leitner-Prinzip, ohne React und ohne Browser-APIs.
 *
 * Jede Karte liegt in einem Fach („Box“), abhängig von der letzten Selbsteinschätzung:
 * „Nicht gewusst“, „Unsicher“ oder „Sitzt“. Karten ohne Bewertung sind „Neu“.
 * Wiederholt wird in der Reihenfolge Nicht gewusst → Neu → Unsicher → Sitzt.
 */

export type Rating = "nicht" | "unsicher" | "sitzt";
export type Box = "nicht" | "neu" | "unsicher" | "sitzt";

export const RATINGS: readonly Rating[] = ["nicht", "unsicher", "sitzt"];
/** Reihenfolge beim Wiederholen. */
export const BOX_ORDER: readonly Box[] = ["nicht", "neu", "unsicher", "sitzt"];

export const RATING_LABELS: Record<Rating, string> = {
  nicht: "Nicht gewusst",
  unsicher: "Unsicher",
  sitzt: "Wusste ich",
};

export const BOX_LABELS: Record<Box, string> = {
  nicht: "Nicht gewusst",
  neu: "Neu",
  unsicher: "Unsicher",
  sitzt: "Sitzt",
};

export interface CardProgress {
  box: Rating;
  /** Wie oft in Folge „Wusste ich“. */
  streak: number;
  /** Wie oft insgesamt bewertet. */
  seen: number;
  /** Zeitpunkt der letzten Bewertung (ms). */
  last: number;
}

/** Lernstand je Karten-ID (IDs sind fachübergreifend eindeutig). */
export type ProgressMap = Readonly<Record<string, CardProgress>>;

export interface LearnCard {
  id: string;
  topic: string;
  exam: boolean;
}

export function boxOf(progress: ProgressMap, id: string): Box {
  return Object.prototype.hasOwnProperty.call(progress, id) ? progress[id].box : "neu";
}

/** Neue Bewertung einer Karte; gibt eine neue Map zurück. */
export function rate(progress: ProgressMap, id: string, rating: Rating, now: number = Date.now()): ProgressMap {
  const previous = Object.prototype.hasOwnProperty.call(progress, id) ? progress[id] : undefined;
  return {
    ...progress,
    [id]: {
      box: rating,
      streak: rating === "sitzt" ? (previous?.streak ?? 0) + 1 : 0,
      seen: (previous?.seen ?? 0) + 1,
      last: now,
    },
  };
}

/** Lernstand für die angegebenen Karten löschen (z. B. ein Fach zurücksetzen). */
export function resetProgress(progress: ProgressMap, ids: Iterable<string>): ProgressMap {
  const next: Record<string, CardProgress> = { ...progress };
  for (const id of ids) delete next[id];
  return next;
}

/** Wackelkandidaten: zuletzt „Nicht gewusst“ oder „Unsicher“. */
export function isWobbly(progress: ProgressMap, id: string): boolean {
  const box = boxOf(progress, id);
  return box === "nicht" || box === "unsicher";
}

/**
 * Reihenfolge für eine Runde: Nicht gewusst → Neu → Unsicher → Sitzt. Innerhalb eines Fachs
 * zuerst, was am längsten nicht dran war (bei „Sitzt“ zuerst die kürzeste Serie); neue Karten
 * in der Reihenfolge der Datei. Stabil, verändert die Eingabe nicht.
 */
export function orderCards<T extends { id: string }>(cards: readonly T[], progress: ProgressMap): T[] {
  const rank = (id: string) => BOX_ORDER.indexOf(boxOf(progress, id));
  return cards
    .map((card, index) => ({ card, index }))
    .sort((a, b) => {
      const byBox = rank(a.card.id) - rank(b.card.id);
      if (byBox !== 0) return byBox;
      const pa = progress[a.card.id];
      const pb = progress[b.card.id];
      if (pa && pb) {
        if (pa.box === "sitzt" && pa.streak !== pb.streak) return pa.streak - pb.streak;
        if (pa.last !== pb.last) return pa.last - pb.last;
      }
      return a.index - b.index;
    })
    .map((entry) => entry.card);
}

export function countBoxes(ids: Iterable<string>, progress: ProgressMap): Record<Box, number> {
  const counts: Record<Box, number> = { nicht: 0, neu: 0, unsicher: 0, sitzt: 0 };
  for (const id of ids) counts[boxOf(progress, id)] += 1;
  return counts;
}

export interface CardFilter {
  /** Nur dieses Thema (`null` = alle). */
  topic: string | null;
  examOnly: boolean;
  wobblyOnly: boolean;
}

export const NO_FILTER: CardFilter = { topic: null, examOnly: false, wobblyOnly: false };

export function filterCards<T extends LearnCard>(cards: readonly T[], progress: ProgressMap, filter: CardFilter): T[] {
  return cards.filter(
    (card) =>
      (filter.topic === null || card.topic === filter.topic) &&
      (!filter.examOnly || card.exam) &&
      (!filter.wobblyOnly || isWobbly(progress, card.id)),
  );
}

/** Themen in der Reihenfolge ihres ersten Auftretens. */
export function topicsOf(cards: readonly { topic: string }[]): string[] {
  return [...new Set(cards.map((card) => card.topic))];
}

/**
 * Karte für den Feynman-Modus: bevorzugt klausurrelevant und noch nicht „Sitzt“.
 * Fallbacks: klausurrelevant (auch „Sitzt“), dann alle Karten. Die zuletzt gezeigte Karte
 * wird nach Möglichkeit nicht direkt wiederholt.
 */
export function pickFeynmanCard<T extends LearnCard>(
  cards: readonly T[],
  progress: ProgressMap,
  rng: () => number = Math.random,
  excludeId: string | null = null,
): T | null {
  const exam = cards.filter((card) => card.exam);
  const pools = [exam.filter((card) => boxOf(progress, card.id) !== "sitzt"), exam, [...cards]];
  for (const pool of pools) {
    const candidates = pool.length > 1 ? pool.filter((card) => card.id !== excludeId) : pool;
    if (candidates.length > 0) return candidates[Math.floor(rng() * candidates.length) % candidates.length];
  }
  return null;
}

const isRating = (value: unknown): value is Rating => value === "nicht" || value === "unsicher" || value === "sitzt";
const isCount = (value: unknown): value is number => typeof value === "number" && Number.isFinite(value) && value >= 0;

/** Liest einen gespeicherten Lernstand; Unbrauchbares wird still verworfen. */
export function parseProgress(raw: string | null): ProgressMap {
  if (!raw) return {};
  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch {
    return {};
  }
  if (!data || typeof data !== "object" || Array.isArray(data)) return {};
  const result: Record<string, CardProgress> = {};
  for (const [id, value] of Object.entries(data as Record<string, unknown>)) {
    if (!value || typeof value !== "object") continue;
    const entry = value as Record<string, unknown>;
    if (!isRating(entry.box)) continue;
    result[id] = {
      box: entry.box,
      streak: isCount(entry.streak) ? Math.floor(entry.streak) : 0,
      seen: isCount(entry.seen) ? Math.floor(entry.seen) : 0,
      last: isCount(entry.last) ? entry.last : 0,
    };
  }
  return result;
}
