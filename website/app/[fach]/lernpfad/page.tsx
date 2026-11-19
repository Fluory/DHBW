import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Pager } from "@/components/reader/Pager";
import { ReaderLayout } from "@/components/reader/ReaderLayout";
import { getSubject, subjectParams } from "@/lib/content/loader";
import { buildLernpfad } from "@/lib/lernpfad";

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
    title: `Lernpfad · ${subject.title}`,
    description: `Das ganze Fach ${subject.title} Schritt für Schritt: Inhalt, Übungen, Karteikarten und Spickzettel in Lernreihenfolge.`,
    alternates: { canonical: `/${fach}/lernpfad` },
  };
}

function hours(minutes: number): string {
  const rounded = Math.round(minutes / 30) / 2;
  return `${String(rounded).replace(".", ",")} Stunden`;
}

export default async function LernpfadPage({ params }: { params: Promise<Params> }) {
  const { fach } = await params;
  const subject = getSubject(fach);
  if (!subject) notFound();
  const base = `/${subject.slug}`;
  const content = buildLernpfad(subject);

  return (
    <main id="inhalt">
      <ReaderLayout
        crumbs={[{ href: "/", label: "Semester 1" }, { href: base, label: subject.short }, { label: "Lernpfad" }]}
        kicker={`${subject.title} · Lernpfad`}
        title={`Lernpfad: ${subject.title}`}
        summary={`Das ganze Fach auf einer Seite, in der Reihenfolge, in der du lernst: pro Kapitel 7 Schritte mit Inhalt, Übungen, Karteikarten und Spickzettel, am Ende die Probeklausur. Insgesamt etwa ${hours(content.totalMinutes)}, verteilt auf mehrere Tage.`}
        content={content}
        footer={
          <Pager
            prev={{ href: base, kicker: "Übersicht", title: subject.title }}
            next={{ href: "/lernplan", kicker: "Lernplan", title: "Wann du was lernst" }}
          />
        }
      />
    </main>
  );
}
