import Link from "next/link";
import { Countdown } from "@/components/site/Countdown";
import { StandBadge } from "@/components/site/Badges";
import { loadLibrary } from "@/lib/content/loader";
import { formatDate } from "@/lib/dates";

export default function HomePage() {
  const library = loadLibrary();
  const subjects = library.subjects;
  const exams = [...subjects].sort((a, b) => a.pruefungsdatum.localeCompare(b.pruefungsdatum) || a.number - b.number);

  return (
    <main id="inhalt" className="page">
      <section className="hero">
        <p className="label kicker">Semester 1 · Wirtschaftsinformatik Data Science · DHBW Heilbronn</p>
        <h1 className="hero-title">Der Stoff des ersten Semesters, zum Lesen und Üben.</h1>
        <p className="hero-lead">
          Acht Fächer in Kapiteln: erst einfach erklärt, dann genau. Mit Beispielen, typischen Fehlern, Übungen und
          Lösungen.
        </p>
        {library.prolog ? (
          <p>
            <Link href="/prolog" className="button">
              Zum Prolog: {library.prolog.title} →
            </Link>
          </p>
        ) : null}
      </section>

      <section id="faecher" aria-labelledby="faecher-titel" className="section">
        <h2 id="faecher-titel" className="section-title">
          Fächer
        </h2>
        {subjects.length === 0 ? (
          <p className="muted">Noch keine Fächer veröffentlicht.</p>
        ) : (
          <ol className="subject-list">
            {subjects.map((subject) => (
              <li key={subject.slug}>
                <Link href={`/${subject.slug}`} className="subject-card">
                  <span className="subject-number label">
                    {String(subject.number).padStart(2, "0")} · {subject.short}
                  </span>
                  <span className="subject-body">
                    <span className="subject-title">{subject.title}</span>
                    <span className="subject-desc">{subject.description}</span>
                    <span className="subject-meta">
                      <StandBadge stand={subject.stand} />
                      <span className="label">{formatDate(subject.pruefungsdatum)}</span>
                      <Countdown date={subject.pruefungsdatum} />
                      <span className="label muted">
                        {subject.chapters.length} {subject.chapters.length === 1 ? "Kapitel" : "Kapitel"}
                      </span>
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        )}
      </section>

      {exams.length > 0 ? (
        <section id="pruefungen" aria-labelledby="pruefungen-titel" className="section">
          <h2 id="pruefungen-titel" className="section-title">
            Prüfungsplan
          </h2>
          <div className="table-scroll" role="region" aria-label="Prüfungsplan" tabIndex={0}>
            <table className="exam-table">
              <thead>
                <tr>
                  <th scope="col">Datum</th>
                  <th scope="col">Fach</th>
                  <th scope="col">Prüfung</th>
                  <th scope="col">
                    <span className="visually-hidden">Countdown</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {exams.map((subject) => (
                  <tr key={subject.slug}>
                    <td className="nowrap mono">{formatDate(subject.pruefungsdatum)}</td>
                    <td>
                      <Link href={`/${subject.slug}`}>{subject.title}</Link>
                    </td>
                    <td>{subject.pruefung}</td>
                    <td className="nowrap">
                      <Countdown date={subject.pruefungsdatum} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}
    </main>
  );
}
