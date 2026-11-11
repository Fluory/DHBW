import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LernenTabs } from "@/components/lernen/LernenTabs";
import { prepareCards, prepareQuestions } from "@/components/lernen/prepare";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { deckParams, getSubject } from "@/lib/content/loader";

export const dynamicParams = false;

type Params = { fach: string };

export function generateStaticParams() {
  return deckParams();
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { fach } = await params;
  const subject = getSubject(fach);
  if (!subject?.deck) return {};
  return {
    title: `Lernen · ${subject.title}`,
    description: `Karteikarten, Quiz und Feynman-Modus für ${subject.title}.`,
    alternates: { canonical: `/${fach}/lernen` },
  };
}

export default async function SubjectLearnPage({ params }: { params: Promise<Params> }) {
  const { fach } = await params;
  const subject = getSubject(fach);
  if (!subject?.deck) notFound();
  const cards = prepareCards(subject);
  const questions = prepareQuestions(subject);
  const examCards = subject.deck.cards.filter((card) => card.exam).length;

  return (
    <main id="inhalt" className="page page-study">
      <header className="subject-header">
        <Breadcrumbs
          crumbs={[
            { href: "/", label: "Semester 1" },
            { href: `/${subject.slug}`, label: subject.short },
            { label: "Lernen" },
          ]}
        />
        <p className="label kicker">{subject.title} · Lernen</p>
        <h1 className="page-title">Selbst abfragen</h1>
        <p className="page-lead study-lead">
          {cards.length} Karteikarten ({examCards} Klausurpunkte) und {questions.length} Quizfragen. Dein Lernstand bleibt nur
          in diesem Browser. <Link href="/lernen">Alle Fächer und Lernmethoden →</Link>
        </p>
      </header>
      <LernenTabs cards={cards} questions={questions} subjectSlug={subject.slug} />
    </main>
  );
}
