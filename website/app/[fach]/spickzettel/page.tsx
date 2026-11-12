import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheatSheet } from "@/components/reader/CheatSheet";
import { PrintButton } from "@/components/reader/PrintButton";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { cheatsheetFileName, cheatsheetPdfHref, subjectCheatsheetPdfHref } from "@/lib/cheatsheet";
import { cheatsheetSubjectParams, getSubject } from "@/lib/content/loader";
import { processMarkdown } from "@/lib/markdown/pipeline";

export const dynamicParams = false;

type Params = { fach: string };

export function generateStaticParams() {
  return cheatsheetSubjectParams();
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { fach } = await params;
  const subject = getSubject(fach);
  if (!subject) return {};
  return {
    title: `Spickzettel · ${subject.title}`,
    description: `Zu jedem Kapitel von ${subject.title} eine DIN-A4-Seite mit dem Wichtigsten, zum Ausdrucken.`,
    alternates: { canonical: `/${fach}/spickzettel` },
  };
}

const pad = (value: number) => String(value).padStart(2, "0");

export default async function CheatSheetsPage({ params }: { params: Promise<Params> }) {
  const { fach } = await params;
  const subject = getSubject(fach);
  if (!subject) notFound();
  const chapters = subject.chapters.filter((chapter) => chapter.cheatsheet);
  if (chapters.length === 0) notFound();
  const base = `/${subject.slug}`;

  return (
    <main id="inhalt" className="sheet-page">
      <div className="sheet-toolbar">
        <Breadcrumbs crumbs={[{ href: "/", label: "Semester 1" }, { href: base, label: subject.short }, { label: "Spickzettel" }]} />
        <h1 className="sheet-collection-title">Spickzettel: {subject.title}</h1>
        <p className="sheet-collection-summary">
          Zu jedem Kapitel eine DIN-A4-Seite. Beim Drucken kommt jeder Spickzettel auf ein eigenes Blatt.
        </p>
        <nav aria-label="Spickzettel der Kapitel" className="sheet-index">
          {chapters.map((chapter) => (
            <a key={chapter.slug} href={`#sz-${chapter.slug}`}>
              {pad(chapter.order)} · {chapter.title}
            </a>
          ))}
        </nav>
        <div className="sheet-actions">
          <a className="sheet-download" href={subjectCheatsheetPdfHref(subject.slug)} download={cheatsheetFileName(subject.short, null, "alle Kapitel")}>
            Alle als PDF herunterladen ({chapters.length} Seiten)
          </a>
          <PrintButton label="Drucken" />
          <Link href={base}>Zur Übersicht</Link>
        </div>
      </div>
      {chapters.map((chapter) => {
        const sheet = chapter.cheatsheet!;
        const content = processMarkdown(sheet.body, { sourcePath: sheet.file, headingOffset: 1, idPrefix: `sz-${chapter.slug}-` });
        return (
          <div key={chapter.slug} id={`sz-${chapter.slug}`} className="sheet-wrap">
            <CheatSheet
              kicker={`${subject.short} · Kapitel ${pad(chapter.order)} · Spickzettel`}
              title={chapter.title}
              tree={content.tree}
              level={2}
              id={`sz-${chapter.slug}`}
              foot={`Semester 1 · ${subject.title} · Kapitel ${pad(chapter.order)} · Spickzettel`}
            />
            <p className="sheet-link">
              <a href={cheatsheetPdfHref(subject.slug, chapter.slug)} download={cheatsheetFileName(subject.short, chapter.order, chapter.title)}>
                Diese Seite als PDF
              </a>
              {" · "}
              <Link href={`${base}/${chapter.slug}`}>Zum Kapitel mit Erklärungen und Übungen</Link>
            </p>
          </div>
        );
      })}
    </main>
  );
}
