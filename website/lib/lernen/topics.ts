/** Ordnet ein Karten-Thema dem passendsten Kapitel zu (für „Kapitel nachlesen“). */

const STOP = new Set(["und", "der", "die", "das", "von", "mit", "für", "ein", "eine", "nicht", "kap", "rest"]);

function tokens(value: string): string[] {
  return value
    .toLowerCase()
    .normalize("NFC")
    .split(/[^a-z0-9äöüß]+/)
    .filter((token) => token.length >= 3 && !STOP.has(token) && !/^(?:vl)?\d+$/.test(token));
}

/** Gleich oder ein Wort beginnt mit dem anderen (mind. 4 Zeichen), z. B. „Zahlen“ ~ „Zahlendarstellung“. */
function related(a: string, b: string): boolean {
  if (a === b) return true;
  const [short, long] = a.length <= b.length ? [a, b] : [b, a];
  return short.length >= 4 && long.startsWith(short);
}

export function matchChapter<T extends { slug: string; title: string }>(topic: string, chapters: readonly T[]): T | null {
  const topicTokens = tokens(topic);
  if (topicTokens.length === 0) return null;
  let best: T | null = null;
  let bestScore = 0;
  for (const chapter of chapters) {
    const chapterTokens = [...tokens(chapter.title), ...tokens(chapter.slug.replace(/-/g, " "))];
    const score = topicTokens.filter((token) => chapterTokens.some((other) => related(token, other))).length;
    if (score > bestScore) {
      best = chapter;
      bestScore = score;
    }
  }
  return best;
}
