const WEEKDAYS = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];

function parts(iso: string): [number, number, number] {
  const [y, m, d] = iso.split("-").map(Number);
  return [y, m, d];
}

/** „Mo 07.12.2026“ aus „2026-12-07“ (zeitzonenunabhängig). */
export function formatDate(iso: string, withWeekday = true): string {
  const [y, m, d] = parts(iso);
  const weekday = WEEKDAYS[new Date(Date.UTC(y, m - 1, d)).getUTCDay()];
  const date = `${String(d).padStart(2, "0")}.${String(m).padStart(2, "0")}.${y}`;
  return withWeekday ? `${weekday} ${date}` : date;
}

/** Ganze Kalendertage von `today` bis `target` (beide ISO), negativ, wenn vorbei. */
export function daysUntil(target: string, today: string): number {
  const [ty, tm, td] = parts(target);
  const [y, m, d] = parts(today);
  return Math.round((Date.UTC(ty, tm - 1, td) - Date.UTC(y, m - 1, d)) / 86_400_000);
}

/** „noch 12 Tage“, „morgen“, „heute“, „vorbei“. */
export function countdownLabel(days: number): string {
  if (days < 0) return "vorbei";
  if (days === 0) return "heute";
  if (days === 1) return "morgen";
  return `noch ${days} Tage`;
}

/** Heutiges Datum in lokaler Zeit als ISO-String. */
export function localToday(now: Date = new Date()): string {
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}
