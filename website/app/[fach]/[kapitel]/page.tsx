import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Pager } from "@/components/reader/Pager";
import { ReaderLayout } from "@/components/reader/ReaderLayout";
import { KlausurBadge } from "@/components/site/Badges";
import { chapterParams, getChapter } from "@/lib/content/loader";
import { processMarkdown } from "@/lib/markdown/pipeline";
import { withSummary } from "@/lib/markdown/summary";

export const dynamicParams = false;

type Params = { fach: string; kapitel: string };

export function generateStaticParams() {
  return chapterParams();
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { fach, kapitel } = await params;
  const context = getChapter(fach, kapitel);
  if (!context) return {};
  const title = `${context.chapter.title} · ${context.subject.short}`;
  return {
    title,
    description: context.chapter.summary,
    alternates: { canonical: `/${fach}/${kapitel}` },
    openGraph: { type: "article", title, description: context.chapter.summary },
  };
}

const pad = (value: number) => String(value).padStart(2, "0");

export default async function ChapterPage({ params }: { params: Promise<Params> }) {
  const { fach, kapitel } = await params;
  const context = getChapter(fach, kapitel);
  if (!context) notFound();
  const { subject, chapter, prev, next } = context;
  const content = processMarkdown(withSummary(chapter.body), { sourcePath: chapter.file });
  const base = `/${subject.slug}`;

  return (
    <main id="inhalt">
      <ReaderLayout
        crumbs={[
          { href: "/", label: "Semester 1" },
          { href: base, label: subject.short },
          { label: `Kapitel ${pad(chapter.order)}` },
        ]}
        kicker={`${subject.title} · Kapitel ${pad(chapter.order)} von ${pad(subject.chapters.length)}`}
        title={chapter.title}
        summary={chapter.summary}
        content={content}
        meta={<KlausurBadge klausur={chapter.klausur} />}
        footer={
          <Pager
            prev={
              prev
                ? { href: `${base}/${prev.slug}`, kicker: `Kapitel ${pad(prev.order)}`, title: prev.title }
                : { href: base, kicker: "Übersicht", title: subject.title }
            }
            next={
              next
                ? { href: `${base}/${next.slug}`, kicker: `Kapitel ${pad(next.order)}`, title: next.title }
                : subject.sources
                  ? { href: `${base}/quellen`, kicker: "Quellen", title: subject.sources.title }
                  : { href: base, kicker: "Übersicht", title: subject.title }
            }
          />
        }
      />
    </main>
  );
}
