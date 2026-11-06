import GithubSlugger from "github-slugger";
import type { Element, ElementContent, Root } from "hast";
import { visit } from "unist-util-visit";

export interface Heading {
  id: string;
  text: string;
  depth: 2 | 3;
}

const FOOTNOTE_LABEL_ID = "footnote-label";

/** Reiner Text eines Elements, ohne Fußnoten-Verweise (`<sup>`). */
export function headingText(node: Element): string {
  const walk = (children: ElementContent[]): string =>
    children
      .map((child) => {
        if (child.type === "text") return child.value;
        if (child.type === "element") return child.tagName === "sup" ? "" : walk(child.children);
        return "";
      })
      .join("");
  return walk(node.children).replace(/\s+/g, " ").trim();
}

/** Stabile, URL-taugliche ID aus einem Überschriftentext (GitHub-kompatibel). */
export function slugifyHeading(text: string, slugger = new GithubSlugger()): string {
  return slugger.slug(text) || "abschnitt";
}

/**
 * rehype-Plugin: vergibt IDs an h2–h4 und sammelt h2/h3 für das Inhaltsverzeichnis.
 * Die Fußnoten-Überschrift von remark-rehype wird als „Anmerkungen“ aufgenommen.
 */
export function rehypeHeadings(options: {
  collect: Heading[];
  /** Verschiebt h2–h4 um so viele Ebenen nach unten (für zusammengesetzte Seiten). */
  offset?: number;
  /** Präfix für alle IDs, damit mehrere Texte auf einer Seite keine IDs teilen. */
  idPrefix?: string;
}) {
  const offset = options.offset ?? 0;
  const prefix = options.idPrefix ?? "";
  return (tree: Root) => {
    const slugger = new GithubSlugger();
    slugger.slug(FOOTNOTE_LABEL_ID);
    visit(tree, "element", (node: Element) => {
      if (!/^h[2-4]$/.test(node.tagName)) return;
      if (node.properties?.id === FOOTNOTE_LABEL_ID) {
        options.collect.push({ id: FOOTNOTE_LABEL_ID, text: "Anmerkungen", depth: 2 });
        return;
      }
      const text = headingText(node);
      const id = `${prefix}${slugifyHeading(text, slugger)}`;
      const depth = Number(node.tagName[1]) + offset;
      node.properties = { ...node.properties, id };
      node.tagName = `h${Math.min(depth, 6)}`;
      if (depth === 2 || depth === 3) options.collect.push({ id, text, depth });
    });
  };
}
