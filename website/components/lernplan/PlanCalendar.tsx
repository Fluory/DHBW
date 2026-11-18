"use client";

import { useState, useSyncExternalStore } from "react";
import { DayDetail } from "@/components/lernplan/DayDetail";
import { localToday } from "@/lib/dates";
import type { ViewDay } from "@/lib/lernplan-view";

const subscribe = () => () => {};
const WEEKDAYS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

function utc(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d));
}

function iso(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/** Wochen (Mo–So), die den Plan abdecken; Tage außerhalb sind null. */
export function buildWeeks(days: ViewDay[]): (ViewDay | null)[][] {
  if (days.length === 0) return [];
  const byDate = new Map(days.map((day) => [day.date, day]));
  const start = utc(days[0].date);
  start.setUTCDate(start.getUTCDate() - ((start.getUTCDay() + 6) % 7));
  const end = utc(days[days.length - 1].date);
  const weeks: (ViewDay | null)[][] = [];
  for (const cursor = start; cursor <= end; ) {
    const week: (ViewDay | null)[] = [];
    for (let i = 0; i < 7; i += 1) {
      week.push(byDate.get(iso(cursor)) ?? null);
      cursor.setUTCDate(cursor.getUTCDate() + 1);
    }
    weeks.push(week);
  }
  return weeks;
}

/** Kalender bis zu den Klausuren; ein Klick auf einen Tag zeigt darunter, was dran ist. */
export function PlanCalendar({ days }: { days: ViewDay[] }) {
  const today = useSyncExternalStore(subscribe, () => localToday(), () => "");
  const [picked, setPicked] = useState<string | null>(null);
  const weeks = buildWeeks(days);
  const fallback = days.find((day) => day.date === today)?.date ?? days[0]?.date;
  const selectedDate = picked ?? fallback;
  const selected = days.find((day) => day.date === selectedDate);

  return (
    <div className="plan-calendar">
      <div className="plan-grid" aria-label="Lernplan als Kalender">
        <div className="plan-row plan-head">
          {WEEKDAYS.map((name) => (
            <span key={name} className="label muted" aria-hidden="true">
              {name}
            </span>
          ))}
        </div>
        {weeks.map((week) => (
          <div key={week.find(Boolean)?.date} className="plan-row">
            {week.map((day, i) => {
              if (!day) return <span key={i} className="plan-cell plan-cell-empty" />;
              const [, , d] = day.date.split("-");
              const [, m] = day.date.split("-");
              return (
                <button
                  key={day.date}
                  type="button"
                 
                  className="plan-cell"
                  aria-pressed={day.date === selectedDate}
                  aria-label={day.label}
                  data-today={day.date === today ? "" : undefined}
                  data-exam={day.klausur ? "" : undefined}
                  data-past={today && day.date < today ? "" : undefined}
                  onClick={() => setPicked(day.date)}
                >
                  <span className="plan-date mono">
                    <span className="plan-wd">{WEEKDAYS[i]} </span>
                    {d}.{m}.
                  </span>
                  {day.klausur ? <span className="plan-cell-exam">Klausur {day.klausur.short}</span> : null}
                  {day.tasks.map((task) => (
                    <span key={`${task.short}-${task.thema}`} className="plan-cell-task">
                      <span className="plan-chip label">{task.short}</span> {task.thema}
                    </span>
                  ))}
                  {day.uni ? <span className="plan-cell-uni">{day.uni}</span> : null}
                </button>
              );
            })}
          </div>
        ))}
      </div>
      {selected ? (
        <section className="plan-selected" aria-live="polite" aria-labelledby="plan-tag">
          <h3 id="plan-tag" className="plan-selected-title">
            {selected.label}
            {selected.date === today ? " · heute" : ""}
          </h3>
          <DayDetail day={selected} />
        </section>
      ) : null}
    </div>
  );
}
