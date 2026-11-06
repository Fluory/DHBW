import { describe, expect, it } from "vitest";
import { buildSummaryMarkdown, buildSummarySections, stripExercises, withSummary } from "@/lib/markdown/summary";

const chapter = [
  "Einstieg.",
  "",
  "## Erstes Thema",
  "",
  "Text.",
  "",
  "> [!IMPORTANT]",
  "> **Das Wichtigste**",
  "> Merksatz eins.",
  "",
  "> [!WARNING]",
  "> **Achtung**",
  "> Falle eins.",
  "",
  "> [!NOTE]",
  "> **Beispiel**",
  "> Wird nicht übernommen.",
  "",
  "## Ohne Kästen",
  "",
  "Nur Text.",
  "",
  "## Zweites Thema",
  "",
  "> [!IMPORTANT]",
  "> **Das Wichtigste**",
  "> Merksatz zwei.",
  "",
  "## Übungen",
  "",
  "> [!IMPORTANT]",
  "> **Das Wichtigste**",
  "> Gehört zu den Übungen und fehlt in der Zusammenfassung.",
  "",
  "## Lösungen",
  "",
  "### Übung 1",
  "",
  "Lösung.",
].join("\n");

describe("Kapitel-Zusammenfassung", () => {
  it("übernimmt Merk- und Warnkästen je Abschnitt unverändert", () => {
    const sections = buildSummarySections(chapter);
    expect(sections).toContain("**Erstes Thema**");
    expect(sections).toContain("> Merksatz eins.");
    expect(sections).toContain("> Falle eins.");
    expect(sections).toContain("**Zweites Thema**");
    expect(sections).toContain("> Merksatz zwei.");
  });

  it("lässt Beispiele, Abschnitte ohne Kästen und den Übungsteil aus", () => {
    const sections = buildSummarySections(chapter) ?? "";
    expect(sections).not.toContain("Wird nicht übernommen");
    expect(sections).not.toContain("Ohne Kästen");
    expect(sections).not.toContain("Gehört zu den Übungen");
  });

  it("hängt die Zusammenfassung ans Kapitelende", () => {
    const text = withSummary(chapter);
    expect(text.startsWith("Einstieg.")).toBe(true);
    expect(text.trimEnd().endsWith("> Merksatz zwei.")).toBe(true);
    expect(text.indexOf("## Zusammenfassung")).toBeGreaterThan(text.indexOf("## Lösungen"));
  });

  it("gibt ohne Kästen nichts zurück", () => {
    expect(buildSummaryMarkdown("## Thema\n\nNur Text.")).toBeNull();
    expect(withSummary("## Thema\n\nNur Text.")).toBe("## Thema\n\nNur Text.");
  });

  it("schneidet für die Gesamtansicht Übungen und Lösungen ab", () => {
    const text = stripExercises(chapter);
    expect(text).toContain("Merksatz zwei.");
    expect(text).not.toContain("## Übungen");
    expect(text).not.toContain("Lösung.");
  });
});
