import type { Root as HastRoot } from "hast";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { remarkAlerts } from "@/lib/markdown/alerts";
import { rehypeHeadings, type Heading } from "@/lib/markdown/headings";
import { rehypeContentLinks } from "@/lib/markdown/links";
import { remarkInlineSolutions } from "@/lib/markdown/solutions";
import { countWords, plainText, readingMinutes } from "@/lib/markdown/reading-time";

export interface ProcessedMarkdown {
  /** hast-Baum, bereit zum Rendern (roher HTML-Code wird verworfen). */
  tree: HastRoot;
  /** h2/h3 für das Inhaltsverzeichnis, in Dokumentreihenfolge. */
  headings: Heading[];
  words: number;
  readingMinutes: number;
}

export interface ProcessOptions {
  /** Pfad der Quelldatei relativ zum Content-Root, für das Umschreiben relativer Links. */
  sourcePath?: string;
  /** Überschriften um so viele Ebenen nach unten schieben (Standard 0). */
  headingOffset?: number;
  /** Präfix für Überschriften- und Fußnoten-IDs, wenn mehrere Texte auf einer Seite stehen. */
  idPrefix?: string;
  /** Lösungen aus `## Lösungen` aufklappbar unter die jeweilige Übung holen (Kapitelseiten). */
  inlineSolutions?: boolean;
}

/** Markdown → hast mit Alerts, Überschriften-IDs, Fußnoten und umgeschriebenen Links. */
export function processMarkdown(markdown: string, options: ProcessOptions = {}): ProcessedMarkdown {
  const headings: Heading[] = [];
  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(options.inlineSolutions ? [remarkInlineSolutions] : [])
    .use(remarkAlerts)
    .use(remarkRehype, {
      allowDangerousHtml: false,
      ...(options.idPrefix ? { clobberPrefix: `${options.idPrefix}fn-` } : {}),
      footnoteLabel: "Anmerkungen",
      footnoteLabelTagName: "h2",
      footnoteLabelProperties: { className: ["footnotes-title"] },
      footnoteBackLabel: (referenceIndex: number, rereferenceIndex: number) =>
        `Zurück zu Verweis ${referenceIndex + 1}${rereferenceIndex > 1 ? `-${rereferenceIndex}` : ""}`,
    })
    .use(rehypeHeadings, { collect: headings, offset: options.headingOffset, idPrefix: options.idPrefix })
    .use(rehypeContentLinks, { sourcePath: options.sourcePath });

  const mdast = processor.parse(markdown);
  const words = countWords(plainText(mdast));
  const tree = processor.runSync(mdast) as HastRoot;
  return { tree, headings, words, readingMinutes: readingMinutes(words) };
}
