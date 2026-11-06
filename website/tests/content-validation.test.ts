import fs from "node:fs";
import { describe, expect, it } from "vitest";
import { scanContent } from "@/lib/content/loader";
import { SUBJECTS } from "@/lib/content/schema";
import { REAL_CONTENT } from "./helpers";

/**
 * Prüft den echten Content in website/content/ gegen CONTENT_SPEC.md.
 * Fehlende Fächer sind erlaubt; vorhandene Dateien müssen gültig sein.
 */
describe.runIf(fs.existsSync(REAL_CONTENT))("Content-Validierung (website/content)", () => {
  const { library, issues } = scanContent(REAL_CONTENT);

  it("hat keine Probleme", () => {
    expect(issues.map((issue) => `${issue.file}: ${issue.message}`)).toEqual([]);
  });

  it("ordnet jedes Fach dem festen Ordner seiner Nummer zu", () => {
    for (const subject of library.subjects) {
      const expected = SUBJECTS.find((entry) => entry.number === subject.number);
      expect(expected?.dir).toBe(subject.dir);
    }
  });
});
