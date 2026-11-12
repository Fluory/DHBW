import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { scanContent } from "@/lib/content/loader";
import { DECK_FILE, SUBJECTS } from "@/lib/content/schema";
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

  it("hat zu jedem Spickzettel ein aktuelles A4-PDF in public/spickzettel/", () => {
    const publicDir = path.resolve(REAL_CONTENT, "..", "public", "spickzettel");
    const manifestFile = path.join(publicDir, "manifest.json");
    const manifest: Record<string, string> = fs.existsSync(manifestFile) ? JSON.parse(fs.readFileSync(manifestFile, "utf8")) : {};
    const sha = (text: string) => crypto.createHash("sha256").update(text).digest("hex");
    const stale: string[] = [];
    for (const subject of library.subjects) {
      const sheets = subject.chapters.filter((chapter) => chapter.cheatsheet);
      for (const chapter of sheets) {
        const key = `${subject.slug}/${chapter.slug}`;
        const raw = fs.readFileSync(path.join(REAL_CONTENT, chapter.cheatsheet!.file), "utf8");
        if (!fs.existsSync(path.join(publicDir, `${key}.pdf`)) || manifest[key] !== sha(raw)) stale.push(key);
      }
      if (sheets.length > 0) {
        const combined = sha(sheets.map((chapter) => manifest[`${subject.slug}/${chapter.slug}`] ?? "").join(""));
        if (!fs.existsSync(path.join(publicDir, `${subject.slug}.pdf`)) || manifest[subject.slug] !== combined) stale.push(subject.slug);
      }
    }
    expect(stale, "PDF fehlt oder ist veraltet: node scripts/spickzettel-seiten.mjs --pdf <fach> ausführen").toEqual([]);
  });

  it("ordnet jedes Fach dem festen Ordner seiner Nummer zu", () => {
    for (const subject of library.subjects) {
      const expected = SUBJECTS.find((entry) => entry.number === subject.number);
      expect(expected?.dir).toBe(subject.dir);
    }
  });

  it("lädt jede karteikarten.json (IDs eindeutig, 4 Optionen, correct 0–3 prüft der Loader)", () => {
    for (const subject of library.subjects) {
      const exists = fs.existsSync(path.join(REAL_CONTENT, "faecher", subject.dir, DECK_FILE));
      expect(subject.deck !== null, `${subject.dir}/${DECK_FILE}`).toBe(exists);
    }
  });

  it("nutzt die ID-Präfixe aus CONTENT_SPEC.md (Karten -kNNN, Quiz -qNNN)", () => {
    const prefixes: Record<string, string> = {
      "01-grundlagen-it": "git",
      "02-wirtschaftsinformatik": "wi",
      "03-programmierung": "prog",
      "04-recht": "recht",
      "05-bwl": "bwl",
      "06-marketing": "mkt",
      "07-mathematik": "mathe",
      "08-lernen-praesentieren": "lpk",
    };
    for (const subject of library.subjects) {
      if (!subject.deck) continue;
      const prefix = prefixes[subject.dir];
      const wrong = [
        ...subject.deck.cards.filter((card) => !new RegExp(`^${prefix}-k\\d{3,}$`).test(card.id)),
        ...subject.deck.quiz.filter((question) => !new RegExp(`^${prefix}-q\\d{3,}$`).test(question.id)),
      ].map((entry) => entry.id);
      expect(wrong, `${subject.dir}/${DECK_FILE}`).toEqual([]);
    }
  });
});
