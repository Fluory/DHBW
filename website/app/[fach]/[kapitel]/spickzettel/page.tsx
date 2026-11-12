import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheatSheet } from "@/components/reader/CheatSheet";
import { PrintButton } from "@/components/reader/PrintButton";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { cheatsheetParams, getChapter } from "@/lib/content/loader";
import { processMarkdown } from "@/lib/markdown/pipeline";

export const dynamicParams = false;

type Params = { fach: string; kapitel: string };

export function generateStaticParams() {
  return cheatsheetParams();
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { fach, kapitel } = await params;
  const context = getChapter(fach, kapitel);
  if (!context?.chapter.cheatsheet) return {};
  return {
    title: `Spickzettel: ${context.chapter.title} · ${context.subject.short}`,
    description: `Das Wichtigste aus „${context.chapter.title}“ auf einer DIN-A4-Seite.`,
    alternates: { canonical: `/${fach}/${kapitel}/spickzettel` },
  };
}

const pad = (value: number) => String(value).padStart(2, "0");

export default async function CheatSheetPage({ params }: { params: Promise<Params> }) {
  const { fach, kapitel } = await params;
  const context = getChapter(fach, kapitel);
  if (!context?.chapter.cheatsheet) notFound();
  const { subject, chapter } = context;
  const sheet = chapter.cheatsheet;
  if (!sheet) notFound();
  const base = `/${subject.slug}`;
  const content = processMarkdown(sheet.body, { sourcePath: sheet.file });

  return (
    <main id="inhalt" className="sheet-page">
      <div className="sheet-toolbar">
        <Breadcrumbs
          crumbs={[
            { href: "/", label: "Semester 1" },
            { href: base, label: subject.short },
            { href: `${base}/${chapter.slug}`, label: `Kapitel ${pad(chapter.order)}` },
            { label: "Spickzettel" },
          ]}
        />
        <div className="sheet-actions">
          <Link href={`${base}/${chapter.slug}`}>Zum Kapitel</Link>
          <Link href={`${base}/spickzettel`}>Alle Spickzettel</Link>
          <PrintButton />
        </div>
      </div>
      <CheatSheet
        kicker={`${subject.short} · Kapitel ${pad(chapter.order)} · Spickzettel`}
        title={chapter.title}
        tree={content.tree}
      />
    </main>
  );
}
