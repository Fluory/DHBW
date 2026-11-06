import { describe, expect, it } from "vitest";
import { isIsoDate } from "@/lib/content/schema";
import { countdownLabel, daysUntil, formatDate, localToday } from "@/lib/dates";

describe("Datum", () => {
  it("formatiert ISO-Daten deutsch mit Wochentag", () => {
    expect(formatDate("2026-12-07")).toBe("Mo 07.12.2026");
    expect(formatDate("2026-12-28", false)).toBe("28.12.2026");
  });

  it("zählt Kalendertage, auch über die Zeitumstellung", () => {
    expect(daysUntil("2026-12-07", "2026-11-06")).toBe(31);
    expect(daysUntil("2026-11-02", "2026-10-20")).toBe(13);
    expect(daysUntil("2026-11-05", "2026-11-06")).toBe(-1);
  });

  it("beschriftet den Countdown", () => {
    expect(countdownLabel(12)).toBe("noch 12 Tage");
    expect(countdownLabel(1)).toBe("morgen");
    expect(countdownLabel(0)).toBe("heute");
    expect(countdownLabel(-3)).toBe("vorbei");
  });

  it("prüft echte Kalenderdaten", () => {
    expect(isIsoDate("2026-12-07")).toBe(true);
    expect(isIsoDate("2026-02-30")).toBe(false);
    expect(isIsoDate("07.12.2026")).toBe(false);
  });

  it("liefert das lokale Datum", () => {
    expect(localToday(new Date(2026, 0, 5, 23, 30))).toBe("2026-01-05");
  });
});
