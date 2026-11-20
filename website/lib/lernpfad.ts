import type { Element, ElementContent, Root } from "hast";
import { cheatsheetPdfHref } from "@/lib/cheatsheet";
import type { ChapterEntry, SubjectEntry } from "@/lib/content/loader";
import type { Card } from "@/lib/content/schema";
import type { Heading } from "@/lib/markdown/headings";
import { processMarkdown, type ProcessedMarkdown } from "@/lib/markdown/pipeline";
import { interactiveExams } from "@/lib/probeklausuren";

/**
 * Lernpfad: ein Fach als eine Seite, die Schritt für Schritt durchs Lernen führt.
 * Pro Kapitel die 7 Schritte aus dem Lernplan, dazu der ganze Inhalt, die Übungen mit
 * aufklappbaren Lösungen, die Karteikarten als Selbsttest und der Spickzettel.
 */

const pad = (value: number) => String(value).padStart(2, "0");

const STOPWORDS = new Set(["und", "der", "die", "das", "von", "mit", "fuer", "zum", "zur", "den", "des"]);

function normalize(value: string): string {
  return value
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss");
}

function tokens(value: string): string[] {
  return normalize(value)
    .split(/[^a-z0-9]+/)
    .filter((token) => token.length >= 3 && !STOPWORDS.has(token));
}

/** Ordnet ein Karteikarten-Thema dem Kapitel zu, dessen Slug die meisten Wörter des Themas enthält. */
export function chapterForTopic(topic: string, chapters: Pick<ChapterEntry, "slug">[]): string | null {
  const words = tokens(topic);
  let best: string | null = null;
  let bestScore = 0;
  for (const chapter of chapters) {
    const slugTokens = chapter.slug.split("-");
    const score = words.filter((word) => slugTokens.some((part) => part.startsWith(word) || word.startsWith(part))).length;
    if (score > bestScore) {
      best = chapter.slug;
      bestScore = score;
    }
  }
  return best;
}

/** Teilt eine geschriebene Zusammenfassung in Text und die Liste „Das musst du können“. */
export function splitMustKnow(summary: string): { text: string; mustKnow: string | null } {
  const match = /^###\s+Das musst du können\s*$/m.exec(summary);
  if (!match) return { text: summary.trim(), mustKnow: null };
  return { text: summary.slice(0, match.index).trim(), mustKnow: summary.slice(match.index + match[0].length).trim() };
}

/** Überschriften der zweiten Ebene eines Kapitels, ohne Übungen und Lösungen (Stichworte fürs Blurting). */
export function sectionTitles(body: string): string[] {
  return [...body.matchAll(/^##\s+(.+?)\s*$/gm)]
    .map((match) => match[1])
    .filter((title) => !/^(Übungen|Lösungen|Aufgaben)\b/i.test(title));
}

const text = (value: string): ElementContent => ({ type: "text", value });

function el(tagName: string, properties: Element["properties"], children: ElementContent[]): Element {
  return { type: "element", tagName, properties, children };
}

function md(markdown: string, options: Parameters<typeof processMarkdown>[1] = {}): ElementContent[] {
  return processMarkdown(markdown, options).tree.children as ElementContent[];
}

function step(id: string, number: number, title: string, minutes: string): Element {
  return el("h3", { id, className: ["path-step"] }, [
    el("span", { className: ["label", "path-step-no"] }, [text(`Schritt ${number}`)]),
    text(` ${title} `),
    el("span", { className: ["label", "muted"] }, [text(minutes)]),
  ]);
}

/** Aufklappbare Antwort im Stil der Lösungen unter Übungen. */
function answer(card: Card, idPrefix: string): Element {
  return el("div", { className: ["path-card"] }, [
    el("p", { className: ["path-card-q"] }, [el("strong", {}, [text(card.front)])]),
    el("details", { className: ["solution"] }, [
      el("summary", { className: ["solution-toggle"] }, [text("Antwort")]),
      el("div", { className: ["solution-body"] }, md(card.back.replace(/\n/g, "\n\n"), { idPrefix })),
    ]),
  ]);
}

function chapterBlock(subject: SubjectEntry, chapter: ChapterEntry, cards: Card[]): { heading: Heading; nodes: ElementContent[]; minutes: number; reading: number } {
  const id = `kapitel-${chapter.slug}`;
  const prefix = `${chapter.slug}-`;
  const title = `${pad(chapter.order)} · ${chapter.title}`;
  const optional = chapter.klausur === "nicht-relevant";
  const body = processMarkdown(chapter.body, { sourcePath: chapter.file, inlineSolutions: true, headingOffset: 2, idPrefix: prefix });
  const minutes = body.readingMinutes + 35;
  const nodes: ElementContent[] = [
    el("h2", { id, className: ["path-chapter"] }, [text(title)]),
    el("p", { className: ["path-meta", "muted"] }, [
      text(`${optional ? "Nicht klausurrelevant, nur überfliegen. " : ""}Etwa ${Math.round(minutes / 5) * 5} Minuten. `),
      el("a", { href: `/${subject.slug}/${chapter.slug}` }, [text("Kapitel einzeln öffnen")]),
    ]),
  ];

  const summary = chapter.writtenSummary ? splitMustKnow(chapter.writtenSummary.body) : null;

  nodes.push(step(`${prefix}schritt-1`, 1, "Überblick lesen", "10 Min"));
  nodes.push(...md("Worum geht es, und was musst du am Ende können? Nur lesen, noch nichts auswendig lernen."));
  if (summary) {
    nodes.push(el("div", { className: ["path-box"] }, md(summary.text, { headingOffset: 1, idPrefix: `${prefix}ueberblick-` })));
  } else {
    nodes.push(...md(chapter.summary));
  }

  nodes.push(step(`${prefix}schritt-2`, 2, "Durcharbeiten und Übungen rechnen", "30–45 Min"));
  nodes.push(
    ...md(
      "Lies Abschnitt für Abschnitt. Jede Übung zuerst **auf Papier** selbst rechnen, dann erst die Lösung aufklappen. Ein falscher Versuch zählt mehr als gar keiner.",
    ),
  );
  nodes.push(...(body.tree.children as ElementContent[]));

  const cues = sectionTitles(chapter.body);
  nodes.push(step(`${prefix}schritt-3`, 3, "Blurting", "5 Min"));
  nodes.push(
    ...md(
      `Scroll nicht zurück. Nimm ein leeres Blatt und schreib 5 Minuten lang alles auf, was du zu diesem Kapitel weißt: Begriffe, Formeln, Beispiele.${
        cues.length > 0 ? `\n\nStichworte, falls du hängst: ${cues.join(" · ")}` : ""
      }`,
    ),
  );

  nodes.push(step(`${prefix}schritt-4`, 4, "Vergleichen und Lücken markieren", "5 Min"));
  nodes.push(
    ...md(
      `Leg dein Blatt neben diese Liste. Was fehlt oder falsch ist, markierst du rot und schreibst es ins Fehlerlog.${
        summary?.mustKnow ? `\n\n**Das musst du können:**\n\n${summary.mustKnow}` : ""
      }`,
    ),
  );

  const feynman = cards.filter((card) => card.exam).slice(0, 2);
  nodes.push(step(`${prefix}schritt-5`, 5, "Feynman", "5–10 Min"));
  nodes.push(
    ...md(
      `Erklär laut oder schriftlich so einfach, dass es ein 12-Jähriger versteht. Wo du stockst, liest du nur diese Stelle nach und erklärst es noch einmal kürzer.${
        feynman.length > 0 ? `\n\n${feynman.map((card) => `- ${card.front}`).join("\n")}` : "\n\n- den schwierigsten Punkt aus deiner roten Liste"
      }`,
    ),
  );

  nodes.push(step(`${prefix}schritt-6`, 6, "Karteikarten", `${Math.max(5, Math.ceil(cards.length / 3))} Min`));
  if (cards.length > 0) {
    nodes.push(...md("Erst antworten, dann aufklappen. Was du nicht wusstest, übst du später im Lernbereich mit den Leitner-Boxen."));
    cards.forEach((card) => nodes.push(answer(card, `${prefix}${card.id}-`)));
  } else {
    nodes.push(...md("Zu diesem Kapitel gibt es keine eigenen Karteikarten."));
  }

  nodes.push(step(`${prefix}schritt-7`, 7, "Spickzettel abdecken", "5 Min"));
  if (chapter.cheatsheet) {
    nodes.push(
      ...md(
        `Deck jede Zeile mit der Hand ab und erklär sie. Was nicht geht, kommt ins Fehlerlog. [Als PDF zum Ausdrucken](${cheatsheetPdfHref(subject.slug, chapter.slug)})`,
      ),
    );
    nodes.push(el("div", { className: ["path-box", "path-sheet"] }, md(chapter.cheatsheet.body, { headingOffset: 2, idPrefix: `${prefix}sheet-` })));
  } else {
    nodes.push(...md("Für dieses Kapitel gibt es keinen Spickzettel. Geh stattdessen die Liste aus Schritt 4 noch einmal durch."));
  }

  nodes.push(...md("**In 3 Tagen:** 10 Minuten Blurting zu diesem Kapitel, dann mit Schritt 4 vergleichen."));
  return { heading: { id, text: title, depth: 2 }, nodes, minutes, reading: body.readingMinutes };
}

export function buildLernpfad(subject: SubjectEntry): ProcessedMarkdown & { totalMinutes: number } {
  const chapters = subject.chapters.filter((chapter) => chapter.slug !== "probeklausur");
  const exam = subject.chapters.find((chapter) => chapter.slug === "probeklausur");
  const cardsByChapter = new Map<string, Card[]>();
  for (const card of subject.deck?.cards ?? []) {
    const slug = chapterForTopic(card.topic, chapters);
    if (!slug) continue;
    cardsByChapter.set(slug, [...(cardsByChapter.get(slug) ?? []), card]);
  }

  const headings: Heading[] = [{ id: "so-gehts", text: "So benutzt du den Lernpfad", depth: 2 }];
  const children: Root["children"] = [
    el("h2", { id: "so-gehts" }, [text("So benutzt du den Lernpfad")]),
    ...md(
      [
        "Diese Seite enthält das ganze Fach. Jedes Kapitel hat dieselben **7 Schritte**:",
        "",
        "1. **Überblick lesen:** die Zusammenfassung des Kapitels.",
        "2. **Durcharbeiten:** der ganze Inhalt mit Übungen, Lösungen zum Aufklappen.",
        "3. **Blurting:** alles aus dem Kopf aufs leere Blatt.",
        "4. **Vergleichen:** mit „Das musst du können“, Lücken ins Fehlerlog.",
        "5. **Feynman:** einen schweren Punkt ganz einfach erklären.",
        "6. **Karteikarten:** Selbsttest mit aufklappbaren Antworten.",
        "7. **Spickzettel:** jede Zeile abdecken und erklären.",
        "",
        "Lern in Blöcken von 25 Minuten mit 5 Minuten Pause. Nach 4 Blöcken machst du eine lange Pause. Du brauchst Papier, einen Stift und ein Blatt als **Fehlerlog** (Datum, Aufgabe, was war falsch, warum, was ist richtig).",
        "",
        "Am Ende wartet die **Probeklausur**. Schreib sie erst, wenn alle Kapitel durch sind, und zwar unter Zeit und auf Papier.",
      ].join("\n"),
    ),
  ];

  if (subject.overview) {
    headings.push({ id: "roter-faden", text: "Der rote Faden", depth: 2 });
    children.push(el("h2", { id: "roter-faden" }, [text("Der rote Faden")]), ...md(subject.overview.body, { headingOffset: 1, idPrefix: "faden-" }));
  }

  let totalMinutes = 0;
  let readingMinutes = 0;
  for (const chapter of chapters) {
    const block = chapterBlock(subject, chapter, cardsByChapter.get(chapter.slug) ?? []);
    headings.push(block.heading);
    children.push(...block.nodes);
    totalMinutes += block.minutes;
    readingMinutes += block.reading;
  }

  if (exam) {
    headings.push({ id: "probeklausur", text: "Zum Schluss: Probeklausur", depth: 2 });
    children.push(
      el("h2", { id: "probeklausur", className: ["path-chapter"] }, [text("Zum Schluss: Probeklausur")]),
      ...md(
        `Erst schreiben, wenn alle Kapitel durch sind. Timer stellen, Handy weg, auf Papier. Danach streng korrigieren und jeden Fehler ins Fehlerlog.${
          interactiveExams(subject.slug).length > 0
            ? `\n\nZum Ausfüllen mit automatischer Auswertung: ${interactiveExams(subject.slug).map((item) => `[${item.label}](${item.href})`).join(" · ")}`
            : ""
        }`,
      ),
      ...(processMarkdown(exam.body, { sourcePath: exam.file, inlineSolutions: true, headingOffset: 1, idPrefix: "probe-" }).tree
        .children as ElementContent[]),
    );
  }

  const tree: Root = { type: "root", children };
  return { tree, headings, words: 0, readingMinutes, totalMinutes };
}
