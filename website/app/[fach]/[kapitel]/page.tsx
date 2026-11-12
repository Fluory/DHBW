import type { Metadata } from "next";
import Link from "next/link";
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
  const content = processMarkdown(withSummary(chapter.body), { sourcePath: chapter.file, inlineSolutions: true });
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
        side={
          <>
            {chapter.cheatsheet ? (
              <Link href={`${base}/${chapter.slug}/spickzettel`} className="side-learn">
                <span className="label">Spickzettel</span>
                <span>Das Kapitel auf einer A4-Seite</span>
              </Link>
            ) : null}
            {subject.deck ? (
              <Link href={`${base}/lernen`} className="side-learn">
                <span className="label">Lernen</span>
                <span>Karteikarten und Quiz zu {subject.short}</span>
              </Link>
            ) : null}
          </>
        }
        footer={
          <>
          {chapter.cheatsheet ? (
            <Link href={`${base}/${chapter.slug}/spickzettel`} className="learn-link reader-learn">
              <span className="label kicker">Spickzettel</span>
              <span className="chapter-title">Dieses Kapitel auf einer DIN-A4-Seite</span>
              <span className="chapter-summary">Formeln, Schemata und Fallen zum Wiederholen oder Ausdrucken.</span>
            </Link>
          ) : null}
          {subject.deck ? (
            <Link href={`${base}/lernen`} className="learn-link reader-learn">
              <span className="label kicker">Selbst abfragen</span>
              <span className="chapter-title">Karteikarten, Quiz und Feynman-Modus</span>
              <span className="chapter-summary">Prüf dich, ob es sitzt: {subject.deck.cards.length} Karten und {subject.deck.quiz.length} Quizfragen zu {subject.title}.</span>
            </Link>
          ) : null}
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
          </>
        }
      />
    </main>
  );
}
