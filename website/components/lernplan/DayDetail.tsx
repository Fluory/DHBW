import Link from "next/link";
import type { ViewDay } from "@/lib/lernplan-view";

const FREI_TEXT = {
  ganz: "Heute ist frei.",
  abends: "Abends frei.",
  nachmittags: "Nachmittags frei.",
} as const;

/** Was an einem Tag dran ist: Klausur, Vorlesungen, Lernblöcke mit Kapitel-Links. */
export function DayDetail({ day, headingLevel = 3 }: { day: ViewDay; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <div className="plan-detail">
      {day.klausur ? (
        <p className="plan-exam">
          Klausur: <Link href={day.klausur.href}>{day.klausur.label}</Link>
        </p>
      ) : null}
      {day.uni ? <p className="plan-uni label">Uni: {day.uni}</p> : null}
      {day.tasks.length === 0 && !day.klausur ? <p className="muted">Kein Lernblock.</p> : null}
      <ul className="plan-tasks">
        {day.tasks.map((task) => (
          <li key={`${task.short}-${task.thema}`} className="plan-task">
            <p className="plan-task-head">
              <Link href={task.fachHref} className="plan-chip label" title={task.fachTitle}>
                {task.short}
              </Link>
              <span className="label muted">{task.dauer}</span>
            </p>
            <Heading className="plan-task-title">{task.thema}</Heading>
            <p className="plan-task-detail">{task.detail}</p>
            {task.links.length > 0 ? (
              <p className="plan-links">
                {task.links.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.label} →
                  </Link>
                ))}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
      {day.frei ? <p className="plan-free">{FREI_TEXT[day.frei]}</p> : null}
    </div>
  );
}
