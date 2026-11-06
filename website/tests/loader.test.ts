import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  ContentError,
  chapterParams,
  getChapter,
  getContentDir,
  getSubject,
  loadLibrary,
  scanContent,
  sourcesParams,
  subjectParams,
} from "@/lib/content/loader";
import { FIXTURES, INVALID } from "./helpers";

describe("Loader (Fixtures)", () => {
  const { library, issues } = scanContent(FIXTURES);

  it("liest Fixtures ohne Probleme", () => {
    expect(issues).toEqual([]);
  });

  it("sortiert Fächer nach Nummer und erlaubt fehlende Fächer", () => {
    expect(library.subjects.map((subject) => subject.slug)).toEqual(["grundlagen-it", "programmierung"]);
  });

  it("liest Frontmatter und Einleitung", () => {
    const git = getSubject("grundlagen-it", library)!;
    expect(git.short).toBe("GIT");
    expect(git.moodle).toBe(18618);
    expect(git.intro).toContain("Dieses Fach legt die Grundlagen");
    expect(git.sources?.title).toBe("Quellen: Grundlagen der IT");
    expect(git.chapters.map((chapter) => chapter.slug)).toEqual(["zahlensysteme", "logik"]);
    expect(git.chapters[1].klausur).toBe("teilweise");
  });

  it("akzeptiert unquotierte YAML-Daten", () => {
    expect(getSubject("programmierung", library)!.pruefungsdatum).toBe("2026-12-11");
  });

  it("liefert Vor/Zurück im Fach", () => {
    const context = getChapter("grundlagen-it", "zahlensysteme", library)!;
    expect(context.prev).toBeNull();
    expect(context.next?.slug).toBe("logik");
    expect(getChapter("grundlagen-it", "gibt-es-nicht", library)).toBeUndefined();
  });

  it("liest den Prolog", () => {
    expect(library.prolog?.title).toBe("Testprolog");
  });

  it("liefert statische Parameter mit allen Segmenten, auch ohne Quellen", () => {
    expect(subjectParams(library)).toEqual([{ fach: "grundlagen-it" }, { fach: "programmierung" }]);
    expect(chapterParams(library)).toEqual([
      { fach: "grundlagen-it", kapitel: "zahlensysteme" },
      { fach: "grundlagen-it", kapitel: "logik" },
      { fach: "programmierung", kapitel: "variablen" },
    ]);
    expect(sourcesParams(library)).toEqual([{ fach: "grundlagen-it" }]);
  });

  it("Content-Root ist über Parameter oder CONTENT_DIR konfigurierbar", () => {
    expect(getContentDir(FIXTURES)).toBe(FIXTURES);
    const original = process.env.CONTENT_DIR;
    process.env.CONTENT_DIR = FIXTURES;
    try {
      expect(getContentDir()).toBe(FIXTURES);
      expect(loadLibrary().subjects).toHaveLength(2);
    } finally {
      if (original === undefined) delete process.env.CONTENT_DIR;
      else process.env.CONTENT_DIR = original;
    }
  });
});

describe("Loader (ungültiger Content)", () => {
  const { issues } = scanContent(INVALID);
  const messages = issues.map((issue) => `${issue.file}: ${issue.message}`);
  const has = (pattern: RegExp) => expect(messages.some((message) => pattern.test(message)), pattern.source).toBe(true);

  it("meldet Frontmatter-Fehler", () => {
    has(/^prolog\.md: title/);
    has(/^prolog\.md: summary/);
    has(/02-wirtschaftsinformatik\/_fach\.md: short/);
    has(/02-wirtschaftsinformatik\/_fach\.md: pruefungsdatum: muss ein ISO-Datum/);
    has(/02-wirtschaftsinformatik\/_fach\.md: stand/);
    has(/01-kapitel\.md: klausur/);
  });

  it("meldet Struktur- und Markdown-Fehler", () => {
    has(/99-unbekannt: Unbekannter Fach-Ordner/);
    has(/04-recht\/kapitel\.md: Dateiname/);
    has(/02-vertrag\.md: order \(3\) passt nicht/);
    has(/02-vertrag\.md: H1 im Body/);
    has(/02-vertrag\.md: Rohes HTML/);
    has(/02-vertrag\.md: Bilder/);
    has(/02-vertrag\.md: Unbekannter Alert-Typ \[!DANGER\]/);
    has(/01-kapitel\.md: H1 im Body/);
  });

  it("loadLibrary wirft einen ContentError", () => {
    expect(() => loadLibrary(INVALID)).toThrow(ContentError);
  });

  it("überspringt leere Fach-Ordner", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "semester-"));
    try {
      fs.mkdirSync(path.join(dir, "faecher", "06-marketing"), { recursive: true });
      expect(scanContent(dir)).toEqual({ library: { root: dir, subjects: [], prolog: null }, issues: [] });
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });

  it("meldet einen fehlenden Content-Ordner", () => {
    expect(scanContent("/gibt/es/nicht").issues[0].message).toMatch(/nicht gefunden/);
  });
});
