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

/** Inhalt eines Alerts ohne `>`, ohne Marker-Zeile und ohne fettes Label. */
export function alertContent(source: string): string {
  const lines = source.split("\n").map((line) => line.replace(/^\s*>\s?/, ""));
  if (/^\s*\[![A-Za-z]+\]/.test(lines[0] ?? "")) {
    lines[0] = lines[0].replace(/^\s*\[![A-Za-z]+\]\s*/, "");
    if (lines[0].trim() === "") lines.shift();
  }
  while (lines.length > 0 && lines[0].trim() === "") lines.shift();
  if (/^\*\*[^*]+\*\*\s*$/.test(lines[0] ?? "")) lines.shift();
  return lines.join("\n").trim();
}

const LIST_ITEM = /^(\s*)([-*+]|\d+[.)])\s+/;
const MISTAKE_PREFIX = /^(?:\*\*)?(?:Typischer Fehler|Achtung|Falle)(?:\*\*)?\s*:\s*(?:\*\*)?\s*/i;

/**
 * Macht aus dem Inhalt eines Kastens Stichpunkte: Absätze werden zu Punkten, Listen bleiben Listen
 * (eine Liste nach einem Absatz mit Doppelpunkt rückt darunter ein), Tabellen und Code bleiben, wie sie sind.
 */
export function toBullets(markdown: string, options: { stripMistakePrefix?: boolean } = {}): string {
  const blocks = markdown.split(/\n\s*\n/).map((block) => block.replace(/\s+$/, "")).filter((block) => block.trim() !== "");
  const out: string[] = [];
  let indentNext = false;
  const clean = (text: string) => (options.stripMistakePrefix ? text.replace(MISTAKE_PREFIX, "") : text);

  for (const block of blocks) {
    const first = block.split("\n")[0];
    if (LIST_ITEM.test(first)) {
      const pad = indentNext ? "  " : "";
      const lines = block.split("\n").map((line) => {
        const match = LIST_ITEM.exec(line);
        const text = match && match[1] === "" ? line.slice(0, match[0].length) + clean(line.slice(match[0].length)) : line;
        return pad + text;
      });
      out.push(lines.join("\n"));
      continue;
    }
    if (/^\s*(\||```|~~~)/.test(first)) {
      out.push(`\n${block}\n`);
      indentNext = false;
      continue;
    }
    const text = clean(block.split("\n").map((line) => line.trim()).join(" "));
    out.push(`- ${text}`);
    indentNext = /:\s*$/.test(text);
  }
  return out.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

const indent = (text: string) =>
  text
    .split("\n")
    .map((line) => (line.trim() === "" ? "" : `  ${line}`))
    .join("\n");

/**
 * Baut die Zusammenfassung eines Kapitels aus seinen eigenen Merk- und Warnkästen
 * (`> [!IMPORTANT]`, `> [!WARNING]`), gruppiert nach Abschnitt. Es wird nichts hinzugefügt:
 * Der Inhalt der Kästen wird als Stichpunkte übernommen, ohne Kästen. Je Abschnitt stehen erst die
 * Merkpunkte, darunter eingerückt die typischen Fehler. Ohne Kästen gibt es keine Zusammenfassung (`null`).
 */
export function buildSummarySections(body: string): string | null {
  const tree = parseMarkdown(body);
  const groups: Array<{ title: string; points: string[]; mistakes: string[] }> = [];

  for (const node of tree.children) {
    if (node.type === "heading") {
      if (isExerciseHeading(node)) break;
      if (node.depth === 2) groups.push({ title: toString(node).trim(), points: [], mistakes: [] });
      continue;
    }
    if (node.type !== "blockquote" || groups.length === 0) continue;
    const alert = detectAlert(node);
    if (alert?.type !== "important" && alert?.type !== "warning") continue;
    const content = alertContent(slice(body, node));
    if (content === "") continue;
    const group = groups[groups.length - 1];
    if (alert.type === "important") group.points.push(toBullets(content));
    else group.mistakes.push(toBullets(content, { stripMistakePrefix: true }));
  }

  const parts = groups
    .filter((group) => group.points.length + group.mistakes.length > 0)
    .map((group) => {
      const lines = [...group.points];
      if (group.mistakes.length > 0) lines.push(`- *Typische Fehler:*\n${indent(group.mistakes.join("\n"))}`);
      return `**${group.title.replace(/\*/g, "")}**\n\n${lines.join("\n")}`;
    });
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
