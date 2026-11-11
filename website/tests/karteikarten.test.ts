import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import type { Element, Root } from "hast";
import { afterEach, describe, expect, it } from "vitest";
import { deckParams, getSubject, scanContent, scanDeck, type ContentIssue } from "@/lib/content/loader";
import { deckSchema } from "@/lib/content/schema";
import { needsMarkdown, processInline } from "@/lib/markdown/inline";
import { FIXTURES, INVALID } from "./helpers";

const card = (id: string, extra: Record<string, unknown> = {}) => ({
  id,
  topic: "Thema",
  front: "Vorderseite",
  back: "Rückseite",
  exam: true,
  ...extra,
});
const question = (id: string, extra: Record<string, unknown> = {}) => ({
  id,
  topic: "Thema",
  q: "Frage?",
  options: ["A", "B", "C", "D"],
  correct: 2,
  explain: "Darum.",
  ...extra,
});

describe("Schema karteikarten.json", () => {
  it("akzeptiert gültige Karten und Fragen, code ist optional", () => {
    const result = deckSchema.safeParse({ cards: [card("a-k001")], quiz: [question("a-q001"), question("a-q002", { code: "x = 1" })] });
    expect(result.success).toBe(true);
  });

  it("erlaubt eine Datei nur mit Karten oder nur mit Quiz, aber nicht leer", () => {
    expect(deckSchema.safeParse({ cards: [card("a-k001")] }).success).toBe(true);
    expect(deckSchema.safeParse({ quiz: [question("a-q001")] }).success).toBe(true);
    expect(deckSchema.safeParse({ cards: [], quiz: [] }).success).toBe(false);
  });

  it.each([
    ["3 Optionen", { quiz: [question("a-q001", { options: ["A", "B", "C"] })] }],
    ["5 Optionen", { quiz: [question("a-q001", { options: ["A", "B", "C", "D", "E"] })] }],
    ["correct 4", { quiz: [question("a-q001", { correct: 4 })] }],
    ["correct -1", { quiz: [question("a-q001", { correct: -1 })] }],
    ["correct 1.5", { quiz: [question("a-q001", { correct: 1.5 })] }],
    ["leere Option", { quiz: [question("a-q001", { options: ["A", " ", "C", "D"] })] }],
    ["leere Erklärung", { quiz: [question("a-q001", { explain: "" })] }],
    ["leerer Code", { quiz: [question("a-q001", { code: "" })] }],
    ["leere Vorderseite", { cards: [card("a-k001", { front: "  " })] }],
    ["exam fehlt", { cards: [{ id: "a-k001", topic: "T", front: "F", back: "B" }] }],
    ["exam kein Boolean", { cards: [card("a-k001", { exam: "ja" })] }],
    ["ID nicht kebab-case", { cards: [card("A K1")] }],
    ["unbekanntes Feld", { cards: [card("a-k001", { hint: "Tippfehler im Feldnamen" })] }],
  ])("lehnt ab: %s", (_name, data) => {
    expect(deckSchema.safeParse(data).success).toBe(false);
  });
});

describe("Loader: Karteikarten (Fixtures)", () => {
  const { library, issues } = scanContent(FIXTURES);

  it("liest die Datei ohne Probleme", () => {
    expect(issues).toEqual([]);
    const deck = getSubject("grundlagen-it", library)!.deck!;
    expect(deck.cards.map((entry) => entry.id)).toEqual(["git-k001", "git-k002", "git-k003"]);
    expect(deck.quiz[0].code).toBe("print(True and False)\nprint(not False)");
    expect(deck.cards[0].back).toBe("1101\n8 + 4 + 1 = 13");
  });

  it("Fächer ohne Datei haben keinen Lernen-Bereich", () => {
    expect(getSubject("programmierung", library)!.deck).toBeNull();
    expect(deckParams(library)).toEqual([{ fach: "grundlagen-it" }]);
  });
});

describe("Loader: ungültige Karteikarten", () => {
  const messages = scanContent(INVALID).issues.map((issue) => `${issue.file}: ${issue.message}`);
  const has = (pattern: RegExp) => expect(messages.some((message) => pattern.test(message)), pattern.source).toBe(true);

  it("meldet doppelte IDs in einer Datei", () => {
    has(/04-recht\/karteikarten\.json: id „recht-k001“ ist doppelt in dieser Datei/);
  });

  it("meldet Schemafehler mit Index und ID", () => {
    has(/02-wirtschaftsinformatik\/karteikarten\.json: cards\[0\] \(wi-k001\)\.topic: darf nicht leer sein/);
    has(/02-wirtschaftsinformatik\/karteikarten\.json: cards\[1\] \(recht-q002\)\.exam/);
    has(/02-wirtschaftsinformatik\/karteikarten\.json: quiz\[0\] \(wi-q001\)\.options: braucht genau 4 Optionen/);
    has(/02-wirtschaftsinformatik\/karteikarten\.json: quiz\[0\] \(wi-q001\)\.correct: muss 0–3 sein/);
  });

  describe("mit temporärem Content", () => {
    let dir: string | null = null;
    afterEach(() => {
      if (dir) fs.rmSync(dir, { recursive: true, force: true });
      dir = null;
    });
    const write = (subject: string, content: string) => {
      dir ??= fs.mkdtempSync(path.join(os.tmpdir(), "karten-"));
      fs.mkdirSync(path.join(dir, "faecher", subject), { recursive: true });
      fs.writeFileSync(path.join(dir, "faecher", subject, "karteikarten.json"), content);
      return dir;
    };

    it("meldet IDs, die schon in einem anderen Fach vergeben sind", () => {
      const root = write("01-grundlagen-it", JSON.stringify({ cards: [card("x-k001")] }));
      write("03-programmierung", JSON.stringify({ quiz: [question("x-k001")] }));
      const issues: ContentIssue[] = [];
      const seen = new Map<string, string>();
      scanDeck(root, "01-grundlagen-it", issues, seen);
      scanDeck(root, "03-programmierung", issues, seen);
      expect(issues).toEqual([
        {
          file: "faecher/03-programmierung/karteikarten.json",
          message: "id „x-k001“ ist doppelt (schon in faecher/01-grundlagen-it/karteikarten.json).",
        },
      ]);
    });

    it("meldet kaputtes JSON", () => {
      const root = write("01-grundlagen-it", '{ "cards": [ ');
      const issues: ContentIssue[] = [];
      expect(scanDeck(root, "01-grundlagen-it", issues)).toBeNull();
      expect(issues[0].message).toMatch(/^Kein gültiges JSON/);
    });

    it("ohne Datei: null, kein Problem", () => {
      const root = write("01-grundlagen-it", JSON.stringify({ cards: [card("x-k001")] }));
      const issues: ContentIssue[] = [];
      expect(scanDeck(root, "03-programmierung", issues)).toBeNull();
      expect(issues).toEqual([]);
    });
  });
});

describe("Inline-Markdown für Karten", () => {
  const html = (tree: Root | Element): string =>
    tree.children
      .map((child) => {
        if (child.type === "text") return child.value;
        if (child.type !== "element") return "";
        return `<${child.tagName}>${html(child)}</${child.tagName}>`;
      })
      .join("");

  it("erkennt reinen Text", () => {
    expect(needsMarkdown("Umsatz 36 Mio. €, Kosten 32 Mio. €.")).toBe(false);
    expect(needsMarkdown("Das ist **fett**")).toBe(true);
    expect(needsMarkdown("Zeile 1\nZeile 2")).toBe(true);
    expect(needsMarkdown("- Liste")).toBe(true);
  });

  it("rendert fett, kursiv und Code, Absätze als span.md-p", () => {
    const tree = processInline("Ein **Algorithmus** ist *endlich*: `x = 1`");
    expect(html(tree)).toBe("<span>Ein <strong>Algorithmus</strong> ist <em>endlich</em>: <code>x = 1</code></span>");
    const first = tree.children[0] as Element;
    expect(first.properties.className).toEqual(["md-p"]);
  });

  it("macht aus \\n einen Zeilenumbruch, aber nicht im Code", () => {
    expect(html(processInline("Zeile 1\nZeile 2"))).toBe("<span>Zeile 1<br></br>\nZeile 2</span>");
    expect(html(processInline("`a\nb`"))).toBe("<span><code>a b</code></span>");
  });

  it("verwirft rohes HTML", () => {
    expect(html(processInline("a <script>alert(1)</script> b"))).not.toContain("script");
  });
});
