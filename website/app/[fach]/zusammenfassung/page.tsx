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
    description: `Merkpunkte und typische Fehler aus allen Kapiteln von ${subject.title} auf einer Seite.`,
    alternates: { canonical: `/${fach}/zusammenfassung` },
  };
}

const pad = (value: number) => String(value).padStart(2, "0");

export default async function SummaryPage({ params }: { params: Promise<Params> }) {
  const { fach } = await params;
  const subject = getSubject(fach);
  if (!subject) notFound();
  const base = `/${subject.slug}`;

  const markdown = subject.chapters
    .map((chapter) => {
      const sections = buildSummarySections(chapter.body);
      const link = `[Zum Kapitel](${base}/${chapter.slug})`;
      return `## ${pad(chapter.order)} · ${chapter.title}\n\n${chapter.summary}\n\n${sections ?? "Zu diesem Kapitel gibt es noch keine Merkpunkte."}\n\n${link}`;
    })
    .join("\n\n");
  const content = processMarkdown(markdown);

  return (
    <main id="inhalt">
      <ReaderLayout
        crumbs={[{ href: "/", label: "Semester 1" }, { href: base, label: subject.short }, { label: "Zusammenfassung" }]}
        kicker={`${subject.title} · Zusammenfassung`}
        title={`Zusammenfassung: ${subject.title}`}
        summary="Pro Kapitel und Thema die Merkpunkte als Stichpunkte, darunter eingerückt die typischen Fehler. Für eine Seite pro Kapitel zum Ausdrucken gibt es die Spickzettel."
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
