import type { ReactNode } from "react";
import type { ProcessedMarkdown } from "@/lib/markdown/pipeline";
import { formatReadingTime } from "@/lib/markdown/reading-time";
import { Breadcrumbs, type Crumb } from "@/components/site/Breadcrumbs";
import { Markdown } from "@/components/reader/Markdown";
import { ReadingProgress } from "@/components/reader/ReadingProgress";
import { TocInline, TocSidebar } from "@/components/reader/TableOfContents";

interface ReaderLayoutProps {
  crumbs: Crumb[];
  kicker: string;
  title: string;
  summary: string;
  content: ProcessedMarkdown;
  /** Zusätzliche Angaben neben der Lesezeit (z. B. Badge). */
  meta?: ReactNode;
  /** Navigation am Ende (Vor/Zurück). */
  footer?: ReactNode;
}

/** Gemeinsamer Leser für Kapitel, Quellen und den Prolog. */
export function ReaderLayout({ crumbs, kicker, title, summary, content, meta, footer }: ReaderLayoutProps) {
  return (
    <>
      <ReadingProgress targetId="lesetext" />
      <div className="reader">
        <aside className="reader-side">
          <TocSidebar headings={content.headings} />
        </aside>
        <div className="reader-main">
          <header className="reader-header">
            <Breadcrumbs crumbs={crumbs} />
            <p className="label kicker">{kicker}</p>
            <h1 className="reader-title">{title}</h1>
            <p className="reader-summary">{summary}</p>
            <div className="reader-meta">
              <span className="label">{formatReadingTime(content.readingMinutes)} Lesezeit</span>
              {meta}
            </div>
          </header>
          <TocInline headings={content.headings} />
          <article id="lesetext" className="prose">
            <Markdown tree={content.tree} />
          </article>
          {footer}
        </div>
      </div>
    </>
  );
}
