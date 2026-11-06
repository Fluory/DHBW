import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Pager } from "@/components/reader/Pager";
import { ReaderLayout } from "@/components/reader/ReaderLayout";
import { loadLibrary } from "@/lib/content/loader";
import { processMarkdown } from "@/lib/markdown/pipeline";

export function generateMetadata(): Metadata {
  const prolog = loadLibrary().prolog;
  if (!prolog) return {};
  return { title: prolog.title, description: prolog.summary, alternates: { canonical: "/prolog" } };
}

export default function PrologPage() {
  const library = loadLibrary();
  const prolog = library.prolog;
  if (!prolog) notFound();
  const content = processMarkdown(prolog.body, { sourcePath: prolog.file });
  const first = library.subjects[0];

  return (
    <main id="inhalt">
      <ReaderLayout
        crumbs={[{ href: "/", label: "Semester 1" }, { label: "Prolog" }]}
        kicker="Prolog"
        title={prolog.title}
        summary={prolog.summary}
        content={content}
        footer={
          <Pager
            next={first ? { href: `/${first.slug}`, kicker: `Fach ${String(first.number).padStart(2, "0")}`, title: first.title } : null}
          />
        }
      />
    </main>
  );
}
