/** Feste Angaben zur Website. */
export const SITE_NAME = "Semester 1";
export const SITE_TAGLINE = "Wirtschaftsinformatik Data Science · DHBW Heilbronn";
export const SITE_DESCRIPTION =
  "Der Stoff des ersten Semesters Wirtschaftsinformatik (Data Science) an der DHBW Heilbronn: acht Fächer, erklärt in Kapiteln mit Beispielen, Übungen und Lösungen.";

export const GITHUB_REPO_URL = "https://github.com/fluory/dhbw";
/** Basis für Links auf Dateien im Repo. */
export const GITHUB_BLOB_URL = `${GITHUB_REPO_URL}/blob/main`;
/** Pfad des Content-Ordners im Repo. */
export const CONTENT_REPO_PATH = "website/content";

export const MOODLE_COURSE_URL = "https://moodle.heilbronn.dhbw.de/course/view.php?id=";

export function moodleUrl(id: number): string {
  return `${MOODLE_COURSE_URL}${id}`;
}

export function siteUrl(): URL {
  const host = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  return new URL(host ? `https://${host}` : "http://localhost:3000");
}
