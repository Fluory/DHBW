import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Blockquote, Html, Root } from "mdast";
import { visit } from "unist-util-visit";
import {
  DECK_FILE,
  NUMBERED_FILE_PATTERN,
  SOURCES_FILE,
  SUBJECTS,
  SUBJECT_DIR_PATTERN,
  SUBJECT_FILE,
  chapterSchema,
  deckSchema,
  formatIssues,
  prologSchema,
  sourcesSchema,
  subjectSchema,
  type Deck,
  type Klausur,
  type SubjectFrontmatter,
} from "@/lib/content/schema";
import { detectAlert } from "@/lib/markdown/alerts";
import { parseMarkdown } from "@/lib/markdown/parse";
import { countWords, plainText, readingMinutes } from "@/lib/markdown/reading-time";

export interface ContentIssue {
  /** Pfad relativ zum Content-Root (POSIX). */
  file: string;
  message: string;
}

export class ContentError extends Error {
  readonly issues: ContentIssue[];
  constructor(issues: ContentIssue[]) {
    super(
      `Ungültiger Content (${issues.length} Problem${issues.length === 1 ? "" : "e"}):\n` +
        issues.map((issue) => `  - ${issue.file}: ${issue.message}`).join("\n"),
    );
    this.name = "ContentError";
    this.issues = issues;
  }
}

interface TextStats {
  body: string;
  words: number;
  readingMinutes: number;
}

export interface ChapterEntry extends TextStats {
  slug: string;
  order: number;
  title: string;
  summary: string;
  klausur: Klausur;
  /** Pfad relativ zum Content-Root. */
  file: string;
}

export interface SourcesEntry extends TextStats {
  title: string;
  summary: string;
  file: string;
}

export interface SubjectEntry extends SubjectFrontmatter {
  dir: string;
  file: string;
  /** Einleitung „Zu diesem Fach“ aus dem Body von `_fach.md`. */
  intro: string;
  chapters: ChapterEntry[];
  sources: SourcesEntry | null;
  /** Karteikarten und Quiz aus `karteikarten.json` (optional). */
  deck: Deck | null;
  words: number;
  readingMinutes: number;
}

export interface PrologEntry extends TextStats {
  title: string;
  summary: string;
  file: string;
}

export interface Library {
  /** Content-Root (absolut). */
  root: string;
  subjects: SubjectEntry[];
  prolog: PrologEntry | null;
}

/**
 * Content-Root: Parameter > Umgebungsvariable `CONTENT_DIR` > `content`
 * (relativ zum Arbeitsverzeichnis, also `website/`).
 */
export function getContentDir(override?: string): string {
  return path.resolve(/*turbopackIgnore: true*/ process.cwd(), override || process.env.CONTENT_DIR || "content");
}

const toPosix = (value: string) => value.split(path.sep).join("/");
const isHidden = (name: string) => name.startsWith(".");

function readFile(absolute: string): string {
  return fs.readFileSync(absolute, "utf8").replace(/^﻿/, "");
}

function parseFrontmatter(
  raw: string,
  file: string,
  issues: ContentIssue[],
): { data: Record<string, unknown>; content: string } | null {
  try {
    // Leeres Options-Objekt umgeht den Modul-Cache von gray-matter (Ergebnisse je Inhalt geteilt).
    const parsed = matter(raw, {});
    return { data: parsed.data as Record<string, unknown>, content: parsed.content };
  } catch (error) {
    const reason = error instanceof Error ? error.message.split("\n")[0] : String(error);
    issues.push({ file, message: `Frontmatter ist kein gültiges YAML (${reason})` });
    return null;
  }
}

const ALLOWED_ALERTS = "IMPORTANT, WARNING, NOTE, TIP, CAUTION";

/** Prüft die Markdown-Regeln aus CONTENT_SPEC.md und liefert Statistik zum Text. */
export function checkBody(body: string, file: string, issues: ContentIssue[]): TextStats {
  const tree: Root = parseMarkdown(body);
  const at = (line: number | undefined) => (line ? ` (Zeile ${line})` : "");

  visit(tree, "heading", (node) => {
    if (node.depth === 1) {
      issues.push({
        file,
        message: `H1 im Body${at(node.position?.start.line)}: Der Titel kommt aus dem Frontmatter, Gliederung ab ##.`,
      });
    }
  });

  visit(tree, "html", (node: Html) => {
    if (/^\s*<!--[\s\S]*-->\s*$/.test(node.value)) return; // Kommentare sind unsichtbar und erlaubt
    issues.push({
      file,
      message: `Rohes HTML ist nicht erlaubt${at(node.position?.start.line)}: ${node.value.trim().slice(0, 40)}`,
    });
  });

  visit(tree, "image", (node) => {
    issues.push({ file, message: `Bilder sind nicht vorgesehen${at(node.position?.start.line)}: ${node.url}` });
  });

  visit(tree, "blockquote", (node: Blockquote) => {
    const alert = detectAlert(node);
    if (alert && !alert.type) {
      issues.push({
        file,
        message: `Unbekannter Alert-Typ [!${alert.rawType}]${at(node.position?.start.line)}. Erlaubt: ${ALLOWED_ALERTS}.`,
      });
    }
  });

  const words = countWords(plainText(tree));
  return { body, words, readingMinutes: readingMinutes(words) };
}

function listDir(absolute: string): fs.Dirent[] {
  return fs
    .readdirSync(absolute, { withFileTypes: true })
    .filter((entry) => !isHidden(entry.name))
    .sort((a, b) => a.name.localeCompare(b.name));
}

const rel = (...segments: string[]) => toPosix(path.join(...segments));

/** Kapitel-Slugs, die als Fach-Unterseite vergeben sind. */
const RESERVED_SLUGS = new Set(["quellen", "zusammenfassung", "alles", "lernen"]);

function scanChapters(root: string, dirName: string, issues: ContentIssue[]): ChapterEntry[] {
  const absoluteDir = path.join(root, "faecher", dirName);
  const chapters: ChapterEntry[] = [];
  const seenOrder = new Map<number, string>();
  const seenSlug = new Map<string, string>();

  for (const entry of listDir(absoluteDir)) {
    const file = rel("faecher", dirName, entry.name);
    if (entry.name === SUBJECT_FILE || entry.name === SOURCES_FILE) continue;
    if (entry.isDirectory()) {
      issues.push({ file, message: "Unterordner sind in einem Fach nicht vorgesehen." });
      continue;
    }
    if (!entry.name.endsWith(".md")) continue;
    const name = NUMBERED_FILE_PATTERN.exec(entry.name);
    if (!name) {
      issues.push({ file, message: "Dateiname muss dem Muster NN-kapitel-slug.md folgen (oder _fach.md / quellen.md sein)." });
      continue;
    }
    const prefix = Number(name[1]);
    const slug = name[2];
    if (RESERVED_SLUGS.has(slug)) {
      issues.push({ file, message: `Der Kapitel-Slug „${slug}“ ist für eine Fach-Unterseite reserviert.` });
      continue;
    }

    const parsed = parseFrontmatter(readFile(path.join(absoluteDir, entry.name)), file, issues);
    if (!parsed) continue;
    const result = chapterSchema.safeParse(parsed.data);
    if (!result.success) {
      for (const message of formatIssues(result.error)) issues.push({ file, message });
      checkBody(parsed.content, file, issues);
      continue;
    }
    const meta = result.data;
    if (meta.order !== prefix) {
      issues.push({ file, message: `order (${meta.order}) passt nicht zum Dateipräfix (${name[1]}).` });
    }
    const orderOwner = seenOrder.get(meta.order);
    if (orderOwner) issues.push({ file, message: `order ${meta.order} ist bereits vergeben (${orderOwner}).` });
    else seenOrder.set(meta.order, file);
    const slugOwner = seenSlug.get(slug);
    if (slugOwner) issues.push({ file, message: `Slug „${slug}“ ist bereits vergeben (${slugOwner}).` });
    else seenSlug.set(slug, file);

    const stats = checkBody(parsed.content, file, issues);
    if (stats.words === 0) issues.push({ file, message: "Kapitel enthält keinen Text." });
    chapters.push({ slug, ...meta, file, ...stats });
  }

  return chapters.sort((a, b) => a.order - b.order);
}

function scanSources(root: string, dirName: string, issues: ContentIssue[]): SourcesEntry | null {
  const absolute = path.join(root, "faecher", dirName, SOURCES_FILE);
  if (!fs.existsSync(absolute)) return null;
  const file = rel("faecher", dirName, SOURCES_FILE);
  const parsed = parseFrontmatter(readFile(absolute), file, issues);
  if (!parsed) return null;
  const result = sourcesSchema.safeParse(parsed.data);
  if (!result.success) {
    for (const message of formatIssues(result.error)) issues.push({ file, message });
    return null;
  }
  const stats = checkBody(parsed.content, file, issues);
  if (stats.words === 0) issues.push({ file, message: "Quellen-Dossier enthält keinen Text." });
  return { ...result.data, file, ...stats };
}

/**
 * Liest `karteikarten.json` eines Fachs (optional). `seenIds` sammelt alle IDs über Fächer hinweg,
 * weil der Lernstand im Browser nur an der ID hängt.
 */
export function scanDeck(
  root: string,
  dirName: string,
  issues: ContentIssue[],
  seenIds: Map<string, string> = new Map(),
): Deck | null {
  const absolute = path.join(root, "faecher", dirName, DECK_FILE);
  if (!fs.existsSync(absolute)) return null;
  const file = rel("faecher", dirName, DECK_FILE);
  let raw: unknown;
  try {
    raw = JSON.parse(readFile(absolute));
  } catch (error) {
    const reason = error instanceof Error ? error.message.split("\n")[0] : String(error);
    issues.push({ file, message: `Kein gültiges JSON (${reason})` });
    return null;
  }
  const result = deckSchema.safeParse(raw);
  if (!result.success) {
    for (const issue of result.error.issues) {
      const [list, index, ...rest] = issue.path;
      let where = issue.path.length > 0 ? issue.path.join(".") : "(Datei)";
      if ((list === "cards" || list === "quiz") && typeof index === "number") {
        const entries = (raw as Record<string, unknown>)[list];
        const entry = Array.isArray(entries) ? (entries[index] as { id?: unknown } | undefined) : undefined;
        const id = typeof entry?.id === "string" ? ` (${entry.id})` : "";
        where = `${list}[${index}]${id}${rest.length > 0 ? `.${rest.join(".")}` : ""}`;
      }
      issues.push({ file, message: `${where}: ${issue.message}` });
    }
    return null;
  }
  const deck = result.data;
  for (const entry of [...deck.cards, ...deck.quiz]) {
    const owner = seenIds.get(entry.id);
    if (owner) {
      issues.push({
        file,
        message: `id „${entry.id}“ ist doppelt${owner === file ? " in dieser Datei" : ` (schon in ${owner})`}.`,
      });
    } else {
      seenIds.set(entry.id, file);
    }
  }
  return deck;
}

function scanSubjects(root: string, issues: ContentIssue[]): SubjectEntry[] {
  const deckIds = new Map<string, string>();
  const faecherDir = path.join(root, "faecher");
  if (!fs.existsSync(faecherDir)) return [];
  const known = new Map<string, number>(SUBJECTS.map((subject) => [subject.dir, subject.number]));
  const subjects: SubjectEntry[] = [];

  for (const entry of listDir(faecherDir)) {
    const dirFile = rel("faecher", entry.name);
    if (!entry.isDirectory()) {
      if (entry.name.endsWith(".md")) {
        issues.push({ file: dirFile, message: "Unerwartete Datei: Fächer liegen in Ordnern NN-slug/." });
      }
      continue;
    }
    const dirMatch = SUBJECT_DIR_PATTERN.exec(entry.name);
    if (!dirMatch || !known.has(entry.name)) {
      issues.push({
        file: dirFile,
        message: `Unbekannter Fach-Ordner. Erlaubt: ${SUBJECTS.map((subject) => subject.dir).join(", ")}.`,
      });
      continue;
    }
    // Leere Ordner (noch in Arbeit, von git ohnehin nicht erfasst) zählen als „Fach fehlt“.
    if (!listDir(path.join(faecherDir, entry.name)).some((child) => child.name.endsWith(".md"))) continue;
    const file = `${dirFile}/${SUBJECT_FILE}`;
    const absolute = path.join(faecherDir, entry.name, SUBJECT_FILE);
    if (!fs.existsSync(absolute)) {
      issues.push({ file, message: `${SUBJECT_FILE} fehlt.` });
      scanChapters(root, entry.name, issues);
      scanDeck(root, entry.name, issues, deckIds);
      continue;
    }
    const parsed = parseFrontmatter(readFile(absolute), file, issues);
    const result = parsed ? subjectSchema.safeParse(parsed.data) : null;
    if (!parsed || !result || !result.success) {
      if (result && !result.success) for (const message of formatIssues(result.error)) issues.push({ file, message });
      if (parsed) checkBody(parsed.content, file, issues);
      scanChapters(root, entry.name, issues);
      scanSources(root, entry.name, issues);
      scanDeck(root, entry.name, issues, deckIds);
      continue;
    }
    const meta = result.data;
    if (meta.slug !== dirMatch[2]) {
      issues.push({ file, message: `slug „${meta.slug}“ muss dem Ordnernamen ohne Präfix entsprechen („${dirMatch[2]}“).` });
    }
    if (meta.number !== known.get(entry.name)) {
      issues.push({ file, message: `number (${meta.number}) passt nicht zum Ordner (${known.get(entry.name)}).` });
    }
    const intro = checkBody(parsed.content, file, issues);
    const chapters = scanChapters(root, entry.name, issues);
    const sources = scanSources(root, entry.name, issues);
    const deck = scanDeck(root, entry.name, issues, deckIds);
    subjects.push({
      ...meta,
      dir: entry.name,
      file,
      intro: intro.body.trim(),
      chapters,
      sources,
      deck,
      words: chapters.reduce((sum, chapter) => sum + chapter.words, 0),
      readingMinutes: chapters.reduce((sum, chapter) => sum + chapter.readingMinutes, 0),
    });
  }

  return subjects.sort((a, b) => a.number - b.number);
}

function scanProlog(root: string, issues: ContentIssue[]): PrologEntry | null {
  const absolute = path.join(root, "prolog.md");
  if (!fs.existsSync(absolute)) return null;
  const file = "prolog.md";
  const parsed = parseFrontmatter(readFile(absolute), file, issues);
  if (!parsed) return null;
  const result = prologSchema.safeParse(parsed.data);
  if (!result.success) {
    for (const message of formatIssues(result.error)) issues.push({ file, message });
    return null;
  }
  return { ...result.data, file, ...checkBody(parsed.content, file, issues) };
}

/** Liest und prüft den Content-Ordner, ohne bei Fehlern abzubrechen. Fehlende Fächer sind erlaubt. */
export function scanContent(root: string = getContentDir()): { library: Library; issues: ContentIssue[] } {
  const issues: ContentIssue[] = [];
  if (!fs.existsSync(root)) {
    issues.push({ file: ".", message: `Content-Ordner nicht gefunden: ${root}` });
    return { library: { root, subjects: [], prolog: null }, issues };
  }
  for (const entry of listDir(root)) {
    if (entry.isDirectory() && entry.name !== "faecher") {
      issues.push({ file: entry.name, message: "Unerwarteter Ordner: Fächer liegen in faecher/." });
    } else if (!entry.isDirectory() && entry.name.endsWith(".md") && entry.name !== "prolog.md") {
      issues.push({ file: entry.name, message: "Unerwartete Datei: auf oberster Ebene ist nur prolog.md vorgesehen." });
    }
  }
  const prolog = scanProlog(root, issues);
  const subjects = scanSubjects(root, issues);
  return { library: { root, subjects, prolog }, issues };
}

/** Signatur des Content-Ordners (Pfade, Größen, Änderungszeiten), um Neu-Einlesen zu vermeiden. */
function contentSignature(root: string): string {
  const entries: string[] = [];
  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (isHidden(entry.name)) continue;
      const absolute = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(absolute);
      else {
        const stat = fs.statSync(absolute);
        entries.push(`${path.relative(root, absolute)}:${stat.size}:${stat.mtimeMs}`);
      }
    }
  };
  walk(root);
  return entries.sort().join("|");
}

const cache = new Map<string, { signature: string; library: Library }>();

/**
 * Lädt den Content. Wirft einen `ContentError`, wenn Content ungültig ist, damit fehlerhafte
 * Dateien den Build brechen. Zwischengespeichert, solange sich keine Datei ändert.
 */
export function loadLibrary(root: string = getContentDir()): Library {
  const signature = fs.existsSync(root) ? contentSignature(root) : "";
  const cached = cache.get(root);
  if (cached && cached.signature === signature) return cached.library;
  const { library, issues } = scanContent(root);
  if (issues.length > 0) throw new ContentError(issues);
  cache.set(root, { signature, library });
  return library;
}

export function getSubject(slug: string, library: Library = loadLibrary()): SubjectEntry | undefined {
  return library.subjects.find((subject) => subject.slug === slug);
}

export interface ChapterContext {
  subject: SubjectEntry;
  chapter: ChapterEntry;
  index: number;
  prev: ChapterEntry | null;
  next: ChapterEntry | null;
}

export function getChapter(
  subjectSlug: string,
  chapterSlug: string,
  library: Library = loadLibrary(),
): ChapterContext | undefined {
  const subject = getSubject(subjectSlug, library);
  if (!subject) return undefined;
  const index = subject.chapters.findIndex((chapter) => chapter.slug === chapterSlug);
  if (index < 0) return undefined;
  return {
    subject,
    chapter: subject.chapters[index],
    index,
    prev: subject.chapters[index - 1] ?? null,
    next: subject.chapters[index + 1] ?? null,
  };
}

/*
 * Statische Parameter je Seite, immer mit allen Segmenten. Jede Seite erzeugt ihre Parameter
 * vollständig selbst (nicht über ein Eltern-Layout), damit ein Fach ohne Kapitel oder ohne
 * Quellen die übrigen Seiten der Route nicht verhindert.
 */
export function subjectParams(library: Library = loadLibrary()): Array<{ fach: string }> {
  return library.subjects.map((subject) => ({ fach: subject.slug }));
}

export function chapterParams(library: Library = loadLibrary()): Array<{ fach: string; kapitel: string }> {
  return library.subjects.flatMap((subject) =>
    subject.chapters.map((chapter) => ({ fach: subject.slug, kapitel: chapter.slug })),
  );
}

export function sourcesParams(library: Library = loadLibrary()): Array<{ fach: string }> {
  return library.subjects.filter((subject) => subject.sources).map((subject) => ({ fach: subject.slug }));
}

/** Fächer mit Karteikarten oder Quiz: `/<fach>/lernen`. */
export function deckParams(library: Library = loadLibrary()): Array<{ fach: string }> {
  return library.subjects.filter((subject) => subject.deck).map((subject) => ({ fach: subject.slug }));
}
