"use client";

import { useSyncExternalStore } from "react";
import { countdownLabel, daysUntil, localToday } from "@/lib/dates";

// Das Datum ändert sich höchstens einmal am Tag; ein Abo ist nicht nötig.
const subscribe = () => () => {};

/** „noch X Tage“ bis zu einem ISO-Datum, berechnet im Browser (statische Seiten veralten sonst). */
export function Countdown({ date }: { date: string }) {
  const today = useSyncExternalStore(subscribe, () => localToday(), () => "");
  if (!today) return <span className="countdown" aria-hidden="true" />;
  const days = daysUntil(date, today);
  return (
    <span className="countdown" data-past={days < 0 ? "" : undefined} data-soon={days >= 0 && days <= 7 ? "" : undefined}>
      {countdownLabel(days)}
    </span>
  );
}
