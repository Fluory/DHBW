import type { Blockquote, Heading, Root, RootContent } from "mdast";
import { toString } from "mdast-util-to-string";
import { detectAlert } from "@/lib/markdown/alerts";

/** Überschrift (h2) des Lösungsteils: „Lösungen“, „Lösungen und Bewertung“. */
const SOLUTIONS_HEADING = /^Lösungen\b/;
/** Schlüssel einer Übung oder Aufgabe: „Übung 3 · leicht“, „Lösung Aufgabe 2 (11 Punkte)“ → „übung 3“, „aufgabe 2“. */
const KEY = /^(?:Lösung\s+)?(Übung|Aufgabe)\s+(\d+)\b/i;

export function exerciseKey(text: string): string | null {
  const match = KEY.exec(text.trim());
  return match ? `${match[1].toLowerCase()} ${match[2]}` : null;
}

const isHeading = (node: RootContent | undefined, maxDepth: number): node is Heading =>
  node?.type === "heading" && node.depth <= maxDepth;

/** Aufklappbarer Lösungsblock: `<details class="solution"><summary>Lösung</summary>…</details>`. */
function solutionNode(children: RootContent[]): RootContent {
  return {
    type: "solution",
    data: { hName: "details", hProperties: { className: ["solution"] } },
    children: [
      {
        type: "paragraph",
        data: { hName: "summary", hProperties: { className: ["solution-toggle"] } },
        children: [{ type: "text", value: "Lösung" }],
      },
      { type: "solutionBody", data: { hName: "div", hProperties: { className: ["solution-body"] } }, children },
    ],
  } as unknown as RootContent;
}

/**
 * remark-Plugin: Holt jede Lösung aus dem Abschnitt `## Lösungen` direkt unter ihre Übung.
 * - Übungen sind `> [!TIP]`-Kästen mit dem Label „Übung N …“: Die Lösung kommt als letzter Teil in den Kasten.
 * - Probeklausur-Aufgaben sind `### Aufgabe N …`: Die Lösung kommt ans Ende dieses Unterabschnitts.
 * Lösungen ohne passende Übung bleiben, wo sie sind. Ist der Lösungsteil danach leer, fällt seine Überschrift weg.
 */
export function remarkInlineSolutions() {
  return (tree: Root) => {
    const nodes = tree.children;
    const start = nodes.findIndex((node) => isHeading(node, 2) && node.depth === 2 && SOLUTIONS_HEADING.test(toString(node).trim()));
    if (start === -1) return;
    let end = nodes.findIndex((node, index) => index > start && isHeading(node, 2));
    if (end === -1) end = nodes.length;

    // Lösungen nach Schlüssel einsammeln.
    const solutions = new Map<string, { from: number; to: number }>();
    for (let index = start + 1; index < end; index += 1) {
      const node = nodes[index];
      if (!isHeading(node, 3) || node.depth !== 3) continue;
      let to = index + 1;
      while (to < end && !isHeading(nodes[to], 3)) to += 1;
      const key = exerciseKey(toString(node));
      if (key && !solutions.has(key)) solutions.set(key, { from: index, to });
    }
    if (solutions.size === 0) return;

    // Ziele vor dem Lösungsteil: Übungskästen und Aufgaben-Unterabschnitte.
    const tipTargets = new Map<string, Blockquote>();
    const sectionTargets = new Map<string, number>(); // Schlüssel → Index, vor dem eingefügt wird
    for (let index = 0; index < start; index += 1) {
      const node = nodes[index];
      if (node.type === "blockquote") {
        const alert = detectAlert(node);
        const key = alert?.type === "tip" && alert.label ? exerciseKey(alert.label) : null;
        if (key && !tipTargets.has(key)) tipTargets.set(key, node);
      } else if (node.type === "heading" && node.depth === 3) {
        const key = exerciseKey(toString(node));
        if (!key || sectionTargets.has(key)) continue;
        let to = index + 1;
        while (to < start && !isHeading(nodes[to], 3)) to += 1;
        sectionTargets.set(key, to);
      }
    }

    const moved = new Set<number>();
    const inserts = new Map<number, RootContent[]>();
    for (const [key, range] of solutions) {
      const body = nodes.slice(range.from + 1, range.to);
      if (body.length === 0) continue;
      const tip = tipTargets.get(key);
      const at = sectionTargets.get(key);
      if (tip) tip.children.push(solutionNode(body) as Blockquote["children"][number]);
      else if (at !== undefined) inserts.set(at, [...(inserts.get(at) ?? []), solutionNode(body)]);
      else continue;
      for (let index = range.from; index < range.to; index += 1) moved.add(index);
    }
    if (moved.size === 0) return;

    const rest = nodes.slice(start + 1, end).filter((_, offset) => !moved.has(start + 1 + offset));
    const keepHeading = rest.some((node) => node.type !== "thematicBreak");
    const result: RootContent[] = [];
    nodes.forEach((node, index) => {
      result.push(...(inserts.get(index) ?? []));
      if (moved.has(index)) return;
      if (index === start && !keepHeading) return;
      if (index > start && index < end && !keepHeading) return;
      result.push(node);
    });
    result.push(...(inserts.get(nodes.length) ?? []));
    tree.children = result;
  };
}
