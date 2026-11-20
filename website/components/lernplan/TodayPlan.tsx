"use client";

import Link from "@/components/site/Link";
import { useSyncExternalStore } from "react";
import { DayDetail } from "@/components/lernplan/DayDetail";
import { localToday } from "@/lib/dates";
import type { ViewDay } from "@/lib/lernplan-view";

const subscribe = () => () => {};

/** Wählt den heutigen Tag aus dem Plan (im Browser, weil die Seite statisch gebaut wird). */
export function pickDay(days: ViewDay[], today: string): { day: ViewDay | undefined; state: "before" | "during" | "after" } {
  if (days.length === 0) return { day: undefined, state: "after" };
  if (today < days[0].date) return { day: days[0], state: "before" };
  if (today > days[days.length - 1].date) return { day: undefined, state: "after" };
  return { day: days.find((entry) => entry.date === today), state: "during" };
}

/** Kasten „Heute dran“: Fach, Thema und was zu tun ist. */
export function TodayPlan({ days, compact = false }: { days: ViewDay[]; compact?: boolean }) {
  const today = useSyncExternalStore(subscribe, () => localToday(), () => "");
  if (!today) return <section className="plan-today" aria-label="Heute dran" />;

  const { day, state } = pickDay(days, today);
  const index = day ? days.indexOf(day) : -1;
  const next = index >= 0 ? days[index + 1] : undefined;

  return (
    <section className="plan-today" aria-labelledby="heute-titel">
      <p className="label kicker" id="heute-titel">
        {state === "before" ? `Der Plan startet am ${day?.label}` : state === "after" ? "Lernplan" : `Heute dran · ${day?.label}`}
      </p>
      {state === "after" || !day ? (
        <p>Alle Klausuren sind geschrieben. Geschafft.</p>
      ) : (
        <>
          {day.klausur && day.tasks.length === 0 ? <p className="plan-good-luck">Viel Erfolg!</p> : null}
          <DayDetail day={day} headingLevel={2} />
          <p className="plan-daily muted">Dazu jeden Tag: 15 Minuten Karteikarten.</p>
          {next && !compact ? (
            <p className="plan-next muted">
              Morgen:{" "}
              {next.klausur ? `Klausur ${next.klausur.label}` : next.tasks.map((task) => `${task.short} ${task.thema}`).join(" · ") || "frei"}
            </p>
          ) : null}
        </>
      )}
      {compact ? (
        <p className="plan-more">
          <Link href="/lernplan">Ganzer Lernplan und wie du lernst →</Link>
        </p>
      ) : null}
    </section>
  );
}
