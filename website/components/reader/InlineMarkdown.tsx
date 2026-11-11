import { Markdown } from "@/components/reader/Markdown";
import { needsMarkdown, processInline } from "@/lib/markdown/inline";

/**
 * Rendert kurze Texte aus `karteikarten.json` über die Markdown-Pipeline (ohne
 * dangerouslySetInnerHTML). Reiner Text bleibt ein String.
 */
export function renderInline(text: string) {
  if (!needsMarkdown(text)) return text;
  return <Markdown tree={processInline(text)} />;
}
