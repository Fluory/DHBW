import type { Element, ElementContent, Root, RootContent } from "hast";

const isHeading = (node: RootContent | ElementContent): node is Element =>
  node.type === "element" && /^h[2-4]$/.test(node.tagName);
const isBlank = (node: RootContent | ElementContent) => node.type === "text" && node.value.trim() === "";

/**
 * Fasst jede Überschrift mit dem ersten Block darunter in `<div class="sheet-keep">` zusammen,
 * damit beim zweispaltigen Druck keine Überschrift allein am Spaltenende steht.
 */
export function keepHeadingsWithNext(tree: Root): Root {
  const out: RootContent[] = [];
  const nodes = tree.children;
  for (let index = 0; index < nodes.length; index += 1) {
    const node = nodes[index];
    if (!isHeading(node)) {
      out.push(node);
      continue;
    }
    let next = index + 1;
    while (next < nodes.length && isBlank(nodes[next])) next += 1;
    const follower = nodes[next];
    if (!follower || follower.type !== "element" || isHeading(follower)) {
      out.push(node);
      continue;
    }
    out.push({
      type: "element",
      tagName: "div",
      properties: { className: ["sheet-keep"] },
      children: [node, follower as ElementContent],
    });
    index = next;
  }
  return { ...tree, children: out };
}
