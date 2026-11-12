import type { Element, Root } from "hast";
import { describe, expect, it } from "vitest";
import { calloutHead } from "@/components/reader/Callout";
import { contentPathToRoute, resolveContentHref } from "@/lib/markdown/links";
import { processMarkdown } from "@/lib/markdown/pipeline";
import { countWords, readingMinutes } from "@/lib/markdown/reading-time";

function find(tree: Root, predicate: (el: Element) => boolean): Element[] {
  const found: Element[] = [];
  const walk = (node: Root | Element) => {
    for (const child of node.children) {
      if (child.type === "element") {
        if (predicate(child)) found.push(child);
        walk(child);
      }
    }
  };
  walk(tree);
  return found;
}

describe("Alerts", () => {
  const md = [
    "> [!IMPORTANT]\n> **Das Wichtigste**\n> Merksatz.",
    "> [!WARNING]\n> **Achtung**\n> Falle.",
    "> [!NOTE]\n> **Beispiel: Die Bäckerei**\n> Brötchen.",
    "> [!TIP]\n> **Übung 1 · leicht**\n> Aufgabe.",
    "> [!CAUTION]\n> Nur Hintergrund.",
    "> Ein normales Zitat.",
  ].join("\n\n");
  const { tree } = processMarkdown(md);
  const asides = find(tree, (el) => el.tagName === "aside");

  it("werden zu aside mit Typ und Label", () => {
    expect(asides.map((el) => el.properties.dataCallout)).toEqual(["important", "warning", "note", "tip", "caution"]);
    expect(asides.map((el) => el.properties.dataLabel)).toEqual([
      "Das Wichtigste",
      "Achtung",
      "Beispiel: Die Bäckerei",
      "Übung 1 · leicht",
      "Nicht klausurrelevant",
    ]);
  });

  it("entfernen Marker und Label aus dem Text", () => {
    const text = JSON.stringify(asides[0].children);
    expect(text).not.toContain("[!IMPORTANT]");
    expect(text).not.toContain("Das Wichtigste");
    expect(text).toContain("Merksatz.");
  });

  it("lassen normale Blockzitate unverändert", () => {
    expect(find(tree, (el) => el.tagName === "blockquote")).toHaveLength(1);
  });

  it("zeigen ein Label allein, wenn es mit der Bedeutung beginnt", () => {
    expect(calloutHead("tip", "Übung 2 · mittel")).toEqual({ kicker: null, title: "Übung 2 · mittel" });
    expect(calloutHead("important", "Merksatz")).toEqual({ kicker: "Das Wichtigste", title: "Merksatz" });
    expect(calloutHead("caution", undefined)).toEqual({ kicker: null, title: "Nicht klausurrelevant" });
  });
});

describe("Überschriften", () => {
  it("vergeben GitHub-kompatible IDs und sammeln h2/h3", () => {
    const { headings, tree } = processMarkdown("## Zahlen & Systeme\n\n### Übung 1\n\n### Übung 1\n\n#### Klein");
    expect(headings).toEqual([
      { id: "zahlen--systeme", text: "Zahlen & Systeme", depth: 2 },
      { id: "übung-1", text: "Übung 1", depth: 3 },
      { id: "übung-1-1", text: "Übung 1", depth: 3 },
    ]);
    expect(find(tree, (el) => el.tagName === "h4")[0].properties.id).toBe("klein");
  });

  it("nehmen Fußnoten als Anmerkungen auf", () => {
    const { headings } = processMarkdown("Text[^1]\n\n[^1]: Fußnote.");
    expect(headings.at(-1)).toEqual({ id: "footnote-label", text: "Anmerkungen", depth: 2 });
  });
});

describe("Sicherheit", () => {
  it("verwirft rohes HTML", () => {
    const { tree } = processMarkdown("<script>alert(1)</script>\n\nText <b>fett</b>");
    expect(JSON.stringify(tree)).not.toContain("script");
    expect(find(tree, (el) => el.tagName === "b")).toHaveLength(0);
  });
});

describe("Links", () => {
  it("übersetzen Content-Pfade in Routen", () => {
    expect(contentPathToRoute("prolog.md")).toBe("/prolog");
    expect(contentPathToRoute("faecher/01-grundlagen-it/_fach.md")).toBe("/grundlagen-it");
    expect(contentPathToRoute("faecher/01-grundlagen-it")).toBe("/grundlagen-it");
    expect(contentPathToRoute("faecher/01-grundlagen-it/quellen.md")).toBe("/grundlagen-it/quellen");
    expect(contentPathToRoute("faecher/01-grundlagen-it/02-logik.md")).toBe("/grundlagen-it/logik");
    expect(contentPathToRoute("faecher/01-grundlagen-it/bild.png")).toBeNull();
  });

  it("lösen relative Links auf", () => {
    const source = "faecher/01-grundlagen-it/01-zahlensysteme.md";
    expect(resolveContentHref("02-logik.md#wahrheitstafeln", source)).toBe("/grundlagen-it/logik#wahrheitstafeln");
    expect(resolveContentHref("../03-programmierung/_fach.md", source)).toBe("/programmierung");
    expect(resolveContentHref("../../prolog.md", source)).toBe("/prolog");
    expect(resolveContentHref("#abschnitt", source)).toBe("#abschnitt");
    expect(resolveContentHref("https://example.org", source)).toBe("https://example.org");
    expect(resolveContentHref("../../../CONTENT_SPEC.md", source)).toBe("https://github.com/fluory/dhbw/blob/main/website/CONTENT_SPEC.md");
    expect(resolveContentHref("../../../../grundlagen-it/README.md", source)).toBe(
      "https://github.com/fluory/dhbw/blob/main/grundlagen-it/README.md",
    );
  });

  it("öffnen externe Links sicher", () => {
    const { tree } = processMarkdown("[Moodle](https://moodle.heilbronn.dhbw.de)");
    const link = find(tree, (el) => el.tagName === "a")[0];
    expect(link.properties.target).toBe("_blank");
    expect(link.properties.rel).toEqual(["noopener", "noreferrer"]);
  });
});

describe("GFM", () => {
  it("rendert Tabellen, Aufgabenlisten und Code", () => {
    const { tree } = processMarkdown("| a | b |\n|---|---|\n| 1 | 2 |\n\n- [x] erledigt\n\n```python\nprint(1)\n```");
    expect(find(tree, (el) => el.tagName === "table")).toHaveLength(1);
    expect(find(tree, (el) => el.tagName === "input")).toHaveLength(1);
    const code = find(tree, (el) => el.tagName === "code")[0];
    expect(code.properties.className).toEqual(["language-python"]);
  });
});

describe("Lesezeit", () => {
  it("zählt Wörter und rundet auf mindestens eine Minute", () => {
    expect(countWords("Ein Satz mit 5 Wörtern — und Zeichen.")).toBe(7);
    expect(readingMinutes(0)).toBe(1);
    expect(readingMinutes(900)).toBe(5);
    expect(processMarkdown("Eins zwei drei").words).toBe(3);
  });
});

describe("Lösungen unter den Übungen", () => {
  const chapter = [
    "## Thema",
    "",
    "Text.",
    "",
    "## Übungen",
    "",
    "> [!TIP]",
    "> **Übung 1 · leicht**",
    "> Rechne 1 + 1.",
    "",
    "> [!TIP]",
    "> **Übung 2 · mittel**",
    "> Rechne 2 + 2.",
    "",
    "## Lösungen",
    "",
    "### Übung 1",
    "",
    "Ergebnis 2.",
    "",
    "### Übung 2",
    "",
    "Ergebnis 4.",
    "",
    "## Zusammenfassung",
    "",
    "Ende.",
  ].join("\n");

  it("holt jede Lösung aufklappbar in ihre Übung und entfernt den Lösungsteil", () => {
    const { tree, headings } = processMarkdown(chapter, { inlineSolutions: true });
    const details = find(tree, (el) => el.tagName === "details");
    expect(details).toHaveLength(2);
    const asides = find(tree, (el) => el.tagName === "aside");
    expect(find(asides[0] as unknown as Root, (el) => el.tagName === "details")).toHaveLength(1);
    expect(JSON.stringify(asides[0])).toContain("Ergebnis 2.");
    expect(JSON.stringify(asides[1])).toContain("Ergebnis 4.");
    expect(find(tree, (el) => el.tagName === "summary")[0].children).toEqual([{ type: "text", value: "Lösung" }]);
    expect(headings.map((heading) => heading.text)).toEqual(["Thema", "Übungen", "Zusammenfassung"]);
  });

  it("hängt Lösungen bei Probeklausuren an den Aufgaben-Abschnitt", () => {
    const exam = [
      "## Aufgaben",
      "",
      "### Aufgabe 1 · Logik (3 Punkte)",
      "",
      "Frage eins.",
      "",
      "### Aufgabe 2 · SQL",
      "",
      "Frage zwei.",
      "",
      "## Lösungen und Bewertung",
      "",
      "Punkte je Teil.",
      "",
      "### Lösung Aufgabe 1 (3 Punkte)",
      "",
      "Antwort eins.",
      "",
      "### Aufgabe 2",
      "",
      "Antwort zwei.",
    ].join("\n");
    const { tree, headings } = processMarkdown(exam, { inlineSolutions: true });
    expect(find(tree, (el) => el.tagName === "details")).toHaveLength(2);
    const order = JSON.stringify(tree);
    expect(order.indexOf("Antwort eins.")).toBeGreaterThan(order.indexOf("Frage eins."));
    expect(order.indexOf("Antwort eins.")).toBeLessThan(order.indexOf("Frage zwei."));
    // Einleitung des Lösungsteils bleibt mit Überschrift stehen.
    expect(headings.map((heading) => heading.text)).toContain("Lösungen und Bewertung");
    expect(order).toContain("Punkte je Teil.");
  });

  it("ändert ohne Option nichts", () => {
    const { tree } = processMarkdown(chapter);
    expect(find(tree, (el) => el.tagName === "details")).toHaveLength(0);
  });
});
