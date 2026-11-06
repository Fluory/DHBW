import { z } from "zod";

// Fehlermeldungen von zod auf Deutsch, passend zu den übrigen Validierungsmeldungen.
z.config(z.locales.de());

/** Feste Fächer laut CONTENT_SPEC.md (Reihenfolge = Klausurtermin). */
export const SUBJECTS = [
  { number: 1, dir: "01-grundlagen-it", title: "Grundlagen der IT" },
  { number: 2, dir: "02-wirtschaftsinformatik", title: "Einführung in die Wirtschaftsinformatik" },
  { number: 3, dir: "03-programmierung", title: "Grundlagen der Programmierung" },
  { number: 4, dir: "04-recht", title: "Vertrags- und Schuldrecht" },
  { number: 5, dir: "05-bwl", title: "Einführung in die BWL" },
  { number: 6, dir: "06-marketing", title: "Marketing" },
  { number: 7, dir: "07-mathematik", title: "Mathematik I" },
  { number: 8, dir: "08-lernen-praesentieren", title: "Lernen, Präsentieren und Kommunizieren" },
] as const;

export const STAND = ["fertig", "laeuft", "vorbereitet"] as const;
export type Stand = (typeof STAND)[number];
export const STAND_LABELS: Record<Stand, string> = {
  fertig: "Fertig",
  laeuft: "Läuft",
  vorbereitet: "Vorbereitet",
};

export const KLAUSUR = ["relevant", "teilweise", "nicht-relevant"] as const;
export type Klausur = (typeof KLAUSUR)[number];
export const KLAUSUR_LABELS: Record<Klausur, string> = {
  relevant: "Klausurrelevant",
  teilweise: "Teilweise relevant",
  "nicht-relevant": "Nicht klausurrelevant",
};

export const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
/** `NN-slug` für Fach-Ordner. */
export const SUBJECT_DIR_PATTERN = /^(\d{2})-([a-z0-9]+(?:-[a-z0-9]+)*)$/;
/** `NN-slug.md` für Kapitel. */
export const NUMBERED_FILE_PATTERN = /^(\d{2})-([a-z0-9]+(?:-[a-z0-9]+)*)\.md$/;
/** Dateinamen mit fester Bedeutung in einem Fach-Ordner. */
export const SUBJECT_FILE = "_fach.md";
export const SOURCES_FILE = "quellen.md";

const text = z.string().trim().min(1, "darf nicht leer sein");
const slug = z.string().regex(SLUG_PATTERN, "muss kebab-case sein (a-z, 0-9, Bindestriche)");

/** Prüft ein ISO-Datum (YYYY-MM-DD) auf ein echtes Kalenderdatum. */
export function isIsoDate(value: string): boolean {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return false;
  const [y, m, d] = [Number(match[1]), Number(match[2]), Number(match[3])];
  const date = new Date(Date.UTC(y, m - 1, d));
  return date.getUTCFullYear() === y && date.getUTCMonth() === m - 1 && date.getUTCDate() === d;
}

/** YAML liest unquotierte Daten als Date; beides wird als ISO-String akzeptiert. */
const isoDate = z.preprocess(
  (value) => (value instanceof Date && !Number.isNaN(value.getTime()) ? value.toISOString().slice(0, 10) : value),
  z.string().refine(isIsoDate, "muss ein ISO-Datum sein (YYYY-MM-DD)"),
);

export const subjectSchema = z.object({
  number: z.number().int().min(1).max(8),
  slug,
  title: text,
  short: z.string().regex(/^[A-ZÄÖÜ]{2,6}$/, "muss aus 2–6 Großbuchstaben bestehen"),
  dozent: text,
  pruefung: text,
  pruefungsdatum: isoDate,
  moodle: z.number().int().positive(),
  stand: z.enum(STAND),
  description: text,
});

export const chapterSchema = z.object({
  title: text,
  order: z.number().int().min(1).max(99),
  summary: text,
  klausur: z.enum(KLAUSUR),
});

export const sourcesSchema = z.object({
  title: text,
  summary: text,
});

export const prologSchema = z.object({
  title: text,
  summary: text,
});

export type SubjectFrontmatter = z.infer<typeof subjectSchema>;
export type ChapterFrontmatter = z.infer<typeof chapterSchema>;

/** Formatiert zod-Fehler als kurze, deutschsprachige Zeilen. */
export function formatIssues(error: z.ZodError): string[] {
  return error.issues.map((issue) => {
    const where = issue.path.length > 0 ? issue.path.join(".") : "(Frontmatter)";
    return `${where}: ${issue.message}`;
  });
}
