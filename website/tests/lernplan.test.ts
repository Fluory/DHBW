import { describe, expect, it } from "vitest";
import { buildWeeks } from "@/components/lernplan/PlanCalendar";
import { pickDay } from "@/components/lernplan/TodayPlan";
import { loadLibrary } from "@/lib/content/loader";
import { PLAN, PLAN_END, PLAN_START } from "@/lib/lernplan";
import { resolvePlan } from "@/lib/lernplan-view";

function nextDay(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d + 1)).toISOString().slice(0, 10);
}

describe("Lernplan", { timeout: 30_000 }, () => {
  it("hat lückenlos einen Eintrag pro Tag", () => {
    expect(PLAN[0].date).toBe(PLAN_START);
    expect(PLAN[PLAN.length - 1].date).toBe(PLAN_END);
    for (let i = 1; i < PLAN.length; i += 1) expect(PLAN[i].date).toBe(nextDay(PLAN[i - 1].date));
  });

  it("löst alle Fächer und Kapitel auf", () => {
    expect(() => resolvePlan(loadLibrary())).not.toThrow();
  });

  it("legt die Klausuren auf das Prüfungsdatum des Fachs", () => {
    const library = loadLibrary();
    for (const day of PLAN.filter((entry) => entry.klausur)) {
      const subject = library.subjects.find((entry) => entry.slug === day.klausur);
      expect(subject?.pruefungsdatum, day.klausur).toBe(day.date);
    }
  });

  it("wählt den heutigen Tag, den Start oder nichts", () => {
    const days = resolvePlan(loadLibrary());
    expect(pickDay(days, "2026-11-18").day?.date).toBe("2026-11-18");
    expect(pickDay(days, "2026-11-01").state).toBe("before");
    expect(pickDay(days, "2026-12-24").state).toBe("after");
  });

  it("baut Wochen von Montag bis Sonntag", () => {
    const weeks = buildWeeks(resolvePlan(loadLibrary()));
    expect(weeks.every((week) => week.length === 7)).toBe(true);
    expect(weeks[0][2]?.date).toBe("2026-11-18");
    expect(weeks[0][0]).toBeNull();
  });
});
