/** Pfade der fertigen Spickzettel-PDFs in `public/spickzettel/` (erzeugt von scripts/spickzettel-seiten.mjs --pdf). */
export const cheatsheetPdfHref = (subject: string, chapter: string) => `/spickzettel/${subject}/${chapter}.pdf`;
export const subjectCheatsheetPdfHref = (subject: string) => `/spickzettel/${subject}.pdf`;

/** Dateiname beim Herunterladen, z. B. „Spickzettel GIT 04 Zahlendarstellung und Rechnen.pdf“. */
export function cheatsheetFileName(short: string, order: number | null, title: string): string {
  const number = order === null ? "" : ` ${String(order).padStart(2, "0")}`;
  const clean = title.replace(/[\\/:*?"<>|]/g, "").replace(/\s+/g, " ").trim();
  return `Spickzettel ${short}${number} ${clean}.pdf`;
}
