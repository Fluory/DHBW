import type { Heading as MdHeading, Root } from "mdast";
import { toString } from "mdast-util-to-string";
import { detectAlert } from "@/lib/markdown/alerts";
import { parseMarkdown } from "@/lib/markdown/parse";

/** Ab dieser Überschrift (h2) beginnt der Übungsteil eines Kapitels. */
const EXERCISE_HEADING = /^(Übungen|Lösungen)\b/;

const isExerciseHeading = (node: MdHeading) => node.depth === 2 && EXERCISE_HEADING.test(toString(node).trim());

function slice(body: string, node: { position?: { start: { offset?: number }; end: { offset?: number } } }): string {
  const start = node.position?.start.offset;
  const end = node.position?.end.offset;
  return start === undefined || end === undefined ? "" : body.slice(start, end);
}

/** Kapiteltext ohne Übungen und Lösungen (alles vor `## Übungen`). */
export function stripExercises(body: string, tree: Root = parseMarkdown(body)): string {
  const cut = tree.children.find((node): node is MdHeading => node.type === "heading" && isExerciseHeading(node));
  const offset = cut?.position?.start.offset;
  return offset === undefined ? body.trim() : body.slice(0, offset).trim();
}

/**
 * Baut die Zusammenfassung eines Kapitels aus seinen eigenen Merk- und Warnkästen
 * (`> [!IMPORTANT]`, `> [!WARNING]`), gruppiert nach Abschnitt. Es wird nichts hinzugefügt:
 * Die Kästen werden unverändert übernommen. Ohne Kästen gibt es keine Zusammenfassung (`null`).
 */
export function buildSummarySections(body: string): string | null {
  const tree = parseMarkdown(body);
  const groups: Array<{ title: string; blocks: string[] }> = [];

  for (const node of tree.children) {
    if (node.type === "heading") {
      if (isExerciseHeading(node)) break;
      if (node.depth === 2) groups.push({ title: toString(node).trim(), blocks: [] });
      continue;
    }
    if (node.type !== "blockquote" || groups.length === 0) continue;
    const alert = detectAlert(node);
    if (alert?.type !== "important" && alert?.type !== "warning") continue;
    groups[groups.length - 1].blocks.push(slice(body, node));
  }

  const parts = groups
    .filter((group) => group.blocks.length > 0)
    .map((group) => `**${group.title.replace(/\*/g, "")}**\n\n${group.blocks.join("\n\n")}`);
  return parts.length === 0 ? null : parts.join("\n\n");
}

/** Wie `buildSummarySections`, mit der Überschrift „Zusammenfassung“ für das Kapitelende. */
export function buildSummaryMarkdown(body: string): string | null {
  const sections = buildSummarySections(body);
  return sections ? `## Zusammenfassung\n\n${sections}` : null;
}

/** Kapiteltext mit angehängter Zusammenfassung (falls es eine gibt). */
export function withSummary(body: string): string {
  const summary = buildSummaryMarkdown(body);
  return summary ? `${body.trim()}\n\n${summary}\n` : body;
}
