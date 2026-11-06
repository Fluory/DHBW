import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Pager } from "@/components/reader/Pager";
import { ReaderLayout } from "@/components/reader/ReaderLayout";
import { getSubject, sourcesParams } from "@/lib/content/loader";
import { processMarkdown } from "@/lib/markdown/pipeline";

export const dynamicParams = false;

type Params = { fach: string };

export function generateStaticParams() {
  return sourcesParams();
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { fach } = await params;
  const subject = getSubject(fach);
  if (!subject?.sources) return {};
  return { title: subject.sources.title, description: subject.sources.summary, alternates: { canonical: `/${fach}/quellen` } };
}

export default async function SourcesPage({ params }: { params: Promise<Params> }) {
  const { fach } = await params;
  const subject = getSubject(fach);
  if (!subject?.sources) notFound();
  const sources = subject.sources;
  const content = processMarkdown(sources.body, { sourcePath: sources.file });
  const last = subject.chapters.at(-1);
  const base = `/${subject.slug}`;

  return (
    <main id="inhalt">
      <ReaderLayout
        crumbs={[{ href: "/", label: "Semester 1" }, { href: base, label: subject.short }, { label: "Quellen" }]}
        kicker={`${subject.title} · Quellen`}
        title={sources.title}
        summary={sources.summary}
        content={content}
        footer={
          <Pager
            prev={last ? { href: `${base}/${last.slug}`, kicker: `Kapitel ${String(last.order).padStart(2, "0")}`, title: last.title } : null}
            next={{ href: base, kicker: "Übersicht", title: subject.title }}
          />
        }
      />
    </main>
  );
}
