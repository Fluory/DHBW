import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Pager } from "@/components/reader/Pager";
import { ReaderLayout } from "@/components/reader/ReaderLayout";
import { getSubject, subjectParams } from "@/lib/content/loader";
import { processMarkdown } from "@/lib/markdown/pipeline";
import { buildSummarySections } from "@/lib/markdown/summary";

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
    title: `Zusammenfassung · ${subject.title}`,
    description: `Zusammenhängende Zusammenfassung aus allen Kapiteln von ${subject.title} auf einer Seite.`,
    alternates: { canonical: `/${fach}/zusammenfassung` },
  };
}

const pad = (value: number) => String(value).padStart(2, "0");

export default async function SummaryPage({ params }: { params: Promise<Params> }) {
  const { fach } = await params;
  const subject = getSubject(fach);
  if (!subject) notFound();
  const base = `/${subject.slug}`;

  const parts = subject.chapters.map((chapter) => {
    const link = `[Zum Kapitel mit Erklärungen und Übungen](${base}/${chapter.slug})`;
    const head = `## ${pad(chapter.order)} · ${chapter.title}`;
    // Geschriebene Zusammenfassung, sonst Stichpunkte aus den Merkkästen des Kapitels
    if (chapter.writtenSummary) return `${head}\n\n${chapter.writtenSummary.body.trim()}\n\n${link}`;
    const sections = buildSummarySections(chapter.body);
    return `${head}\n\n${chapter.summary}\n\n${sections ?? "Zu diesem Kapitel gibt es noch keine Merkpunkte."}\n\n${link}`;
  });
  if (subject.overview) parts.unshift(`## Der rote Faden\n\n${subject.overview.body.trim()}`);
  const markdown = parts.join("\n\n");
  const content = processMarkdown(markdown);

  return (
    <main id="inhalt">
      <ReaderLayout
        crumbs={[{ href: "/", label: "Semester 1" }, { href: base, label: subject.short }, { label: "Zusammenfassung" }]}
        kicker={`${subject.title} · Zusammenfassung`}
        title={`Zusammenfassung: ${subject.title}`}
        summary="Das ganze Fach als zusammenhängender Text: erst der rote Faden, dann jedes Kapitel in eigenen Worten mit Beispiel und dem, was du können musst. Für eine Seite pro Kapitel zum Ausdrucken gibt es die Spickzettel."
        content={content}
        footer={
          <Pager
            prev={{ href: base, kicker: "Übersicht", title: subject.title }}
            next={{ href: `${base}/alles`, kicker: "Alles lesen", title: `Alle Kapitel von ${subject.short} am Stück` }}
          />
        }
      />
    </main>
  );
}
