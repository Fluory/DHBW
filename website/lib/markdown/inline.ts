import type { Root as HastRoot } from "hast";
import type { Break, Parent, PhrasingContent, Root, Text } from "mdast";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

/**
 * Zeilenumbrüche (`\n`) in kurzen Texten (Karteikarten, Quiz) sind gewollt: Aus jedem weichen
 * Umbruch im Fließtext wird ein `<br>`. Code (`inlineCode`) bleibt unberührt.
 */
function remarkHardBreaks() {
  return (tree: Root) => {
    const walk = (node: Parent) => {
      const next: typeof node.children = [];
      for (const child of node.children) {
        if (child.type === "text" && child.value.includes("\n")) {
          child.value.split("\n").forEach((part, index) => {
            if (index > 0) next.push({ type: "break" } satisfies Break);
            if (part) next.push({ type: "text", value: part } satisfies Text);
          });
          continue;
        }
        if ("children" in child) walk(child as Parent);
        next.push(child);
      }
      node.children = next as PhrasingContent[];
    };
    walk(tree);
  };
}

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkHardBreaks)
  .use(remarkRehype, { allowDangerousHtml: false });

/** Zeichen, bei denen ein Text Markdown enthalten könnte. Ohne sie bleibt er reiner Text. */
const MARKDOWN_HINT = /[*_`[\]\n\\~<>&|#]|^\s*(?:[-+]|\d+[.)])\s/;

/** Braucht der Text die Markdown-Pipeline? Reiner Text wird direkt als String gerendert. */
export function needsMarkdown(text: string): boolean {
  return MARKDOWN_HINT.test(text);
}

/**
 * Kurzer Markdown-Text (Inline-Markdown, `\n` = Zeilenumbruch) → hast.
 * Roher HTML-Code wird verworfen, wie im Leser.
 */
export function processInline(text: string): HastRoot {
  const mdast = processor.parse(text.trim());
  const tree = processor.runSync(mdast) as HastRoot;
  // Absätze auf oberster Ebene als <span class="md-p">: so darf der Text auch in Buttons stehen.
  for (const child of tree.children) {
    if (child.type === "element" && child.tagName === "p") {
      child.tagName = "span";
      child.properties = { ...child.properties, className: ["md-p"] };
    }
  }
  return tree;
}
