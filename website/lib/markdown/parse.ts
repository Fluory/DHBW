import type { Root as MdastRoot } from "mdast";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { unified } from "unified";

const parser = unified().use(remarkParse).use(remarkGfm);

/** Parst GFM-Markdown in einen mdast-Baum (ohne Transformationen). */
export function parseMarkdown(markdown: string): MdastRoot {
  return parser.parse(markdown);
}
