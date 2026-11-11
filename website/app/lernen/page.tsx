import type { Metadata } from "next";
import { LearnOverview, type OverviewSubject } from "@/components/lernen/LearnOverview";
import { prepareQuestions } from "@/components/lernen/prepare";
import { Quiz } from "@/components/lernen/Quiz";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { loadLibrary } from "@/lib/content/loader";

export const metadata: Metadata = {
  title: "Lernen",
  description: "Karteikarten, Quiz und Feynman-Modus für alle Fächer, dazu ein gemischtes Quiz und kurze Lernmethoden.",
  alternates: { canonical: "/lernen" },
};

const METHODS = [
  {
    title: "Active Recall",
    text: "Erst selbst erinnern, dann nachsehen. Das Abrufen aus dem Gedächtnis festigt Wissen stärker als erneutes Lesen. Deshalb zeigen die Karteikarten zuerst nur die Frage.",
  },
  {
    title: "Verteiltes Wiederholen",
    text: "Lieber jeden Tag 15 Minuten als einmal drei Stunden. Die Karteikarten merken sich, was du nicht wusstest, und legen es in der nächsten Runde nach vorn.",
  },
  {
    title: "Feynman-Methode",
    text: "Einen Begriff so erklären, dass ihn jemand ohne Vorwissen versteht. Wo die Erklärung hakt, ist die Lücke. Genau dort lohnt das Nachlesen.",
  },
  {
    title: "Interleaving",
    text: "Themen und Fächer mischen statt blockweise üben. Das ist anstrengender, aber du lernst, selbst zu erkennen, welches Verfahren gefragt ist. Dafür ist das gemischte Quiz da.",
  },
] as const;

export default function LearnPage() {
  const library = loadLibrary();
  const withDeck = library.subjects.filter((subject) => subject.deck);
  const overview: OverviewSubject[] = withDeck.map((subject) => ({
    slug: subject.slug,
    short: subject.short,
    title: subject.title,
    number: subject.number,
    cardIds: subject.deck?.cards.map((card) => card.id) ?? [],
    quizCount: subject.deck?.quiz.length ?? 0,
  }));
  const mixedQuestions = withDeck.flatMap((subject) => prepareQuestions(subject, true));

  return (
    <main id="inhalt" className="page page-study">
      <header>
        <Breadcrumbs crumbs={[{ href: "/", label: "Semester 1" }, { label: "Lernen" }]} />
        <p className="label kicker">Lernen</p>
        <h1 className="page-title">Selbst abfragen statt nur lesen</h1>
        <p className="page-lead">
          Je Fach Karteikarten, ein Quiz und ein Feynman-Modus. Der Lernstand bleibt nur in diesem Browser.
        </p>
      </header>

      <section aria-labelledby="lernstand" className="section">
        <h2 id="lernstand" className="section-title">
          Fächer
        </h2>
        {overview.length === 0 ? <p className="muted">Noch keine Karteikarten veröffentlicht.</p> : <LearnOverview subjects={overview} />}
      </section>

      {mixedQuestions.length > 0 ? (
        <section aria-labelledby="gemischt" className="section">
          <h2 id="gemischt" className="section-title">
            Gemischtes Quiz
          </h2>
          <Quiz questions={mixedQuestions} bestKey="gemischt" mixed roundSize={15} />
        </section>
      ) : null}

      <section aria-labelledby="methoden" className="section">
        <h2 id="methoden" className="section-title">
          Wie das Lernen hier gedacht ist
        </h2>
        <dl className="method-list">
          {METHODS.map((method) => (
            <div key={method.title}>
              <dt>{method.title}</dt>
              <dd>{method.text}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
