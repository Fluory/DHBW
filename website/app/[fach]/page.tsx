import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Markdown } from "@/components/reader/Markdown";
import { KlausurBadge, StandBadge } from "@/components/site/Badges";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Countdown } from "@/components/site/Countdown";
import { getSubject, loadLibrary, subjectParams } from "@/lib/content/loader";
import { formatDate } from "@/lib/dates";
import { processMarkdown } from "@/lib/markdown/pipeline";
import { formatReadingTime } from "@/lib/markdown/reading-time";
import { moodleUrl } from "@/lib/site";

export const dynamicParams = false;

type Params = { fach: string };

export function generateStaticParams() {
  return subjectParams();
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { fach } = await params;
  const subject = getSubject(fach);
  if (!subject) return {};
  return { title: subject.title, description: subject.description, alternates: { canonical: `/${subject.slug}` } };
}

const pad = (value: number) => String(value).padStart(2, "0");

export default async function SubjectPage({ params }: { params: Promise<Params> }) {
  const { fach } = await params;
  const library = loadLibrary();
  const subject = getSubject(fach, library);
  if (!subject) notFound();
  const intro = subject.intro ? processMarkdown(subject.intro, { sourcePath: subject.file }) : null;

  return (
    <main id="inhalt" className="page">
      <header className="subject-header">
        <Breadcrumbs crumbs={[{ href: "/", label: "Semester 1" }, { label: subject.title }]} />
        <p className="label kicker">
          Fach {pad(subject.number)} · {subject.short}
        </p>
        <h1 className="page-title">{subject.title}</h1>
        <p className="page-lead">{subject.description}</p>
      </header>

      <dl className="meta-box">
        <div>
          <dt className="label">Dozent</dt>
          <dd>{subject.dozent}</dd>
        </div>
        <div>
          <dt className="label">Prüfung</dt>
          <dd>{subject.pruefung}</dd>
        </div>
        <div>
          <dt className="label">Datum</dt>
          <dd>
            {formatDate(subject.pruefungsdatum)} <Countdown date={subject.pruefungsdatum} />
          </dd>
        </div>
        <div>
          <dt className="label">Stand</dt>
          <dd>
            <StandBadge stand={subject.stand} />
          </dd>
        </div>
        <div>
          <dt className="label">Moodle</dt>
          <dd>
            <a href={moodleUrl(subject.moodle)} target="_blank" rel="noopener noreferrer">
              Kurs {subject.moodle} ↗
            </a>
          </dd>
        </div>
      </dl>

      {subject.deck ? (
        <section aria-label="Lernen" className="section">
          <Link href={`/${subject.slug}/lernen`} className="learn-link">
            <span className="label kicker">Selbst abfragen</span>
            <span className="chapter-title">Karteikarten, Quiz und Feynman-Modus</span>
            <span className="chapter-summary">
              {subject.deck.cards.length} Karteikarten und {subject.deck.quiz.length} Quizfragen. Merkt sich, was du noch
              nicht wusstest.
            </span>
          </Link>
        </section>
      ) : null}

      {subject.chapters.length > 0 ? (
        <section aria-label="Gesamtansichten" className="section">
          <ul className="chapter-list">
            <li>
              <Link href={`/${subject.slug}/zusammenfassung`} className="sources-link">
                <span className="chapter-title">Zusammenfassung des Fachs</span>
                <span className="chapter-summary">Das Wichtigste und die typischen Fehler aus allen Kapiteln auf einer Seite.</span>
              </Link>
            </li>
            <li>
              <Link href={`/${subject.slug}/alles`} className="sources-link">
                <span className="chapter-title">Alle Kapitel am Stück lesen</span>
                <span className="chapter-summary">Das ganze Fach zum Durchscrollen, ohne Übungen und Lösungen.</span>
              </Link>
            </li>
          </ul>
        </section>
      ) : null}

      {intro ? (
        <section aria-labelledby="zu-diesem-fach" className="section">
          <h2 id="zu-diesem-fach" className="section-title">
            Zu diesem Fach
          </h2>
          <div className="prose">
            <Markdown tree={intro.tree} />
          </div>
        </section>
      ) : null}

      <section aria-labelledby="kapitel" className="section">
        <h2 id="kapitel" className="section-title">
          Kapitel
        </h2>
        {subject.chapters.length === 0 ? (
          <p className="muted">Für dieses Fach sind noch keine Kapitel geschrieben.</p>
        ) : (
          <ol className="chapter-list">
            {subject.chapters.map((chapter) => (
              <li key={chapter.slug}>
                <Link href={`/${subject.slug}/${chapter.slug}`} className="chapter-card">
                  <span className="chapter-number label">{pad(chapter.order)}</span>
                  <span className="chapter-body">
                    <span className="chapter-title">{chapter.title}</span>
                    <span className="chapter-summary">{chapter.summary}</span>
                    <span className="chapter-meta">
                      <KlausurBadge klausur={chapter.klausur} />
                      <span className="label muted">{formatReadingTime(chapter.readingMinutes)}</span>
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        )}
      </section>

      {subject.sources ? (
        <section aria-labelledby="quellen" className="section">
          <h2 id="quellen" className="section-title">
            Quellen
          </h2>
          <Link href={`/${subject.slug}/quellen`} className="sources-link">
            <span className="chapter-title">{subject.sources.title}</span>
            <span className="chapter-summary">{subject.sources.summary}</span>
          </Link>
        </section>
      ) : null}
    </main>
  );
}
