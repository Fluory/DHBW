import type { Metadata } from "next";
import Link from "next/link";
import { PlanCalendar } from "@/components/lernplan/PlanCalendar";
import { TodayPlan } from "@/components/lernplan/TodayPlan";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { loadLibrary } from "@/lib/content/loader";
import { CHAPTER_STEPS, DAILY_RULES, METHODS } from "@/lib/lernplan";
import { resolvePlan } from "@/lib/lernplan-view";

export const metadata: Metadata = {
  title: "Lernplan",
  description: "Was heute dran ist, wie du lernst und der Kalender bis zu den Klausuren.",
  alternates: { canonical: "/lernplan" },
};

export default function LernplanPage() {
  const days = resolvePlan(loadLibrary());

  return (
    <main id="inhalt" className="page page-study">
      <header>
        <Breadcrumbs crumbs={[{ href: "/", label: "Semester 1" }, { label: "Lernplan" }]} />
        <p className="label kicker">Lernplan</p>
        <h1 className="page-title">Bis zu den Klausuren</h1>
        <p className="page-lead">
          Oben steht, was heute dran ist. Darunter, wie du lernst, und der ganze Plan als Kalender. Ein Klick auf einen Tag
          zeigt die Details.
        </p>
      </header>

      <TodayPlan days={days} />

      <section aria-labelledby="so-lernst-du" className="section info-box">
        <h2 id="so-lernst-du" className="section-title">
          So lernst du
        </h2>

        <h3 className="info-sub">Jeden Tag</h3>
        <ul className="info-list">
          {DAILY_RULES.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>

        <h3 className="info-sub">Ein Kapitel in 7 Schritten</h3>
        <ol className="info-list">
          {CHAPTER_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

        <h3 className="info-sub">Die Methoden</h3>
        <dl className="method-list">
          {METHODS.map((method) => (
            <div key={method.title}>
              <dt>{method.title}</dt>
              <dd>{method.text}</dd>
            </div>
          ))}
        </dl>

        <p className="muted">
          Karteikarten und Quiz findest du unter <Link href="/lernen">Lernen</Link>. Wenn es dir nicht gut geht, gelten nur
          die 15 Minuten Karteikarten. Was ausfällt, rutscht auf den nächsten freien Halbtag.
        </p>
      </section>

      <section aria-labelledby="kalender" className="section">
        <h2 id="kalender" className="section-title">
          Kalender
        </h2>
        <PlanCalendar days={days} />
      </section>
    </main>
  );
}
