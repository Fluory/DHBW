import type { Root } from "hast";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Pager } from "@/components/reader/Pager";
import { ReaderLayout } from "@/components/reader/ReaderLayout";
import { getSubject, subjectParams } from "@/lib/content/loader";
import type { Heading } from "@/lib/markdown/headings";
import { processMarkdown, type ProcessedMarkdown } from "@/lib/markdown/pipeline";
import { stripExercises } from "@/lib/markdown/summary";

export const dynamicParams = false;

type Params = { fach: string };

export function generateStaticParams() {
  return subjectParams();
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { fach } = await params;
  const subject = getSubject(fach);
  if (!subject) return {};
  return {
    title: `Alles lesen · ${subject.title}`,
    description: `Alle Kapitel von ${subject.title} nacheinander auf einer Seite, ohne Übungen und Lösungen.`,
    alternates: { canonical: `/${fach}/alles` },
  };
}

const pad = (value: number) => String(value).padStart(2, "0");

export default async function AllPage({ params }: { params: Promise<Params> }) {
  const { fach } = await params;
  const subject = getSubject(fach);
  if (!subject) notFound();
  const base = `/${subject.slug}`;

  const headings: Heading[] = [];
  const children: Root["children"] = [];
  let words = 0;
  let minutes = 0;
  for (const chapter of subject.chapters) {
    const id = `kapitel-${chapter.slug}`;
    const text = `${pad(chapter.order)} · ${chapter.title}`;
    const processed = processMarkdown(stripExercises(chapter.body), {
      sourcePath: chapter.file,
      headingOffset: 1,
      idPrefix: `${chapter.slug}-`,
    });
    headings.push({ id, text, depth: 2 });
    children.push(
      { type: "element", tagName: "h2", properties: { id }, children: [{ type: "text", value: text }] },
      {
        type: "element",
        tagName: "p",
        properties: {},
        children: [
          { type: "element", tagName: "a", properties: { href: `${base}/${chapter.slug}` }, children: [{ type: "text", value: "Zum Kapitel mit Übungen und Lösungen" }] },
        ],
      },
      ...processed.tree.children,
    );
    words += processed.words;
    minutes += processed.readingMinutes;
  }
  const content: ProcessedMarkdown = { tree: { type: "root", children }, headings, words, readingMinutes: minutes };

  return (
    <main id="inhalt">
      <ReaderLayout
        crumbs={[{ href: "/", label: "Semester 1" }, { href: base, label: subject.short }, { label: "Alles lesen" }]}
        kicker={`${subject.title} · Alles lesen`}
        title={`Alle Kapitel: ${subject.title}`}
        summary="Alle Kapitel nacheinander zum Durchscrollen. Die Übungen und Lösungen stehen in den einzelnen Kapiteln."
        content={content}
        footer={
          <Pager
            prev={{ href: `${base}/zusammenfassung`, kicker: "Zusammenfassung", title: `Zusammenfassung: ${subject.short}` }}
            next={{ href: base, kicker: "Übersicht", title: subject.title }}
          />
        }
      />
    </main>
  );
}
