/** Quiz-Logik ohne React und ohne Browser-APIs. */

export const OPTION_LETTERS = ["A", "B", "C", "D"] as const;

/** Fisher-Yates; verändert die Eingabe nicht. */
export function shuffle<T>(items: readonly T[], rng: () => number = Math.random): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1)) % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/** `count` zufällige Fragen (oder alle, gemischt). */
export function pickQuestions<T>(items: readonly T[], count: number | "all", rng: () => number = Math.random): T[] {
  const shuffled = shuffle(items, rng);
  return count === "all" ? shuffled : shuffled.slice(0, Math.max(0, count));
}

/**
 * Gemischtes Quiz über mehrere Fächer (Interleaving): reihum aus jedem Fach eine zufällige Frage,
 * sodass die Fächer gleichmäßig vorkommen und sich abwechseln.
 */
export function pickInterleaved<T>(
  items: readonly T[],
  count: number,
  groupOf: (item: T) => string,
  rng: () => number = Math.random,
): T[] {
  const groups = new Map<string, T[]>();
  for (const item of shuffle(items, rng)) {
    const key = groupOf(item);
    const list = groups.get(key);
    if (list) list.push(item);
    else groups.set(key, [item]);
  }
  const queues = shuffle([...groups.values()], rng);
  const result: T[] = [];
  while (result.length < count && queues.some((queue) => queue.length > 0)) {
    for (const queue of queues) {
      const next = queue.shift();
      if (next !== undefined && result.length < count) result.push(next);
    }
  }
  return result;
}

/** Taste → Optionsindex: A–D oder 1–4 (Groß/klein egal). */
export function optionIndexFromKey(key: string): number | null {
  const lower = key.toLowerCase();
  const letter = ["a", "b", "c", "d"].indexOf(lower);
  if (letter >= 0) return letter;
  const digit = ["1", "2", "3", "4"].indexOf(lower);
  return digit >= 0 ? digit : null;
}

export interface QuizResult {
  score: number;
  total: number;
  wrongIds: string[];
}

/** Wertet Antworten aus (`answers`: Frage-ID → gewählter Index). Unbeantwortet zählt als falsch. */
export function scoreQuiz(
  questions: readonly { id: string; correct: number }[],
  answers: Readonly<Record<string, number>>,
): QuizResult {
  const wrongIds = questions.filter((question) => answers[question.id] !== question.correct).map((question) => question.id);
  return { score: questions.length - wrongIds.length, total: questions.length, wrongIds };
}

export interface BestScore {
  score: number;
  total: number;
}

export type BestMap = Readonly<Record<string, BestScore>>;

const ratio = (best: BestScore) => (best.total > 0 ? best.score / best.total : 0);

/** Ist `candidate` besser als `current`? Erst Quote, bei Gleichstand die längere Runde. */
export function isBetter(candidate: BestScore, current: BestScore | undefined): boolean {
  if (candidate.total <= 0) return false;
  if (!current) return true;
  const diff = ratio(candidate) - ratio(current);
  if (Math.abs(diff) > 1e-9) return diff > 0;
  return candidate.total > current.total;
}

export function updateBest(best: BestMap, key: string, result: BestScore): BestMap {
  const current = Object.prototype.hasOwnProperty.call(best, key) ? best[key] : undefined;
  return isBetter(result, current) ? { ...best, [key]: { score: result.score, total: result.total } } : best;
}

export function parseBest(raw: string | null): BestMap {
  if (!raw) return {};
  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch {
    return {};
  }
  if (!data || typeof data !== "object" || Array.isArray(data)) return {};
  const result: Record<string, BestScore> = {};
  for (const [key, value] of Object.entries(data as Record<string, unknown>)) {
    const entry = value as Record<string, unknown> | null;
    if (!entry || typeof entry !== "object") continue;
    const { score, total } = entry;
    if (typeof score !== "number" || typeof total !== "number") continue;
    if (!Number.isInteger(score) || !Number.isInteger(total) || total <= 0 || score < 0 || score > total) continue;
    result[key] = { score, total };
  }
  return result;
}

export function percent(score: number, total: number): number {
  return total > 0 ? Math.round((score / total) * 100) : 0;
}
