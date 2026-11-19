import { describe, expect, it } from "vitest";
import { getSubject } from "@/lib/content/loader";
import { buildLernpfad, chapterForTopic, sectionTitles, splitMustKnow } from "@/lib/lernpfad";

describe("Lernpfad", { timeout: 30_000 }, () => {
  it("ordnet Karteikarten-Themen den Kapiteln zu", () => {
    const chapters = [{ slug: "zahlendarstellung" }, { slug: "logik" }, { slug: "arten-informationssysteme" }, { slug: "geschaeftsmodell" }];
    expect(chapterForTopic("Logik und Gatter", chapters)).toBe("logik");
    expect(chapterForTopic("Arten von IS", chapters)).toBe("arten-informationssysteme");
    expect(chapterForTopic("Geschäftsmodell und Organisation", chapters)).toBe("geschaeftsmodell");
    expect(chapterForTopic("Nicht klausurrelevant", chapters)).toBeNull();
  });

  it("trennt „Das musst du können“ ab und findet Abschnitte", () => {
    const { text, mustKnow } = splitMustKnow("Text.\n\n### Teil\n\nMehr.\n\n### Das musst du können\n\n- a\n- b");
    expect(text).toContain("Mehr.");
    expect(mustKnow).toBe("- a\n- b");
    expect(sectionTitles("## Eins\n\ntext\n\n## Übungen\n\n## Lösungen\n\n## Zwei")).toEqual(["Eins", "Zwei"]);
  });

  it("baut für GIT und WI jedes Kapitel mit 7 Schritten und ordnet fast alle Karten zu", () => {
    for (const slug of ["grundlagen-it", "wirtschaftsinformatik"]) {
      const subject = getSubject(slug);
      expect(subject).toBeDefined();
      if (!subject) continue;
      const path = buildLernpfad(subject);
      const chapters = subject.chapters.filter((chapter) => chapter.slug !== "probeklausur");
      expect(path.headings.filter((heading) => heading.id.startsWith("kapitel-"))).toHaveLength(chapters.length);
      const json = JSON.stringify(path.tree);
      expect(json.match(/schritt-7/g)?.length).toBe(chapters.length);
      expect(json).toContain("probeklausur");
      const assigned = (subject.deck?.cards ?? []).filter((card) => chapterForTopic(card.topic, chapters));
      const relevant = (subject.deck?.cards ?? []).filter((card) => card.topic !== "Nicht klausurrelevant");
      expect(assigned.length).toBe(relevant.length);
    }
  });
});
