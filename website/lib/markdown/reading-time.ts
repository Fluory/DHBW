import type { Root } from "mdast";
import { visit } from "unist-util-visit";

/** Lesegeschwindigkeit für Lerntexte mit Beispielen und Rechnungen (Wörter/Minute). */
export const WORDS_PER_MINUTE = 180;

/** Zählt Wörter: Token mit mindestens einem Buchstaben oder einer Ziffer. */
export function countWords(text: string): number {
  return text.split(/\s+/).filter((token) => /[\p{L}\p{N}]/u.test(token)).length;
}

/** Lesbarer Text eines mdast-Baums (inkl. Code); Blöcke durch Leerzeichen getrennt. */
export function plainText(tree: Root): string {
  const chunks: string[] = [];
  visit(tree, (node) => {
    if (node.type === "text" || node.type === "inlineCode" || node.type === "code") chunks.push(node.value);
  });
  return chunks.join(" ");
}

/** Lesezeit in ganzen Minuten, mindestens 1. */
export function readingMinutes(words: number, wpm: number = WORDS_PER_MINUTE): number {
  if (words <= 0) return 1;
  return Math.max(1, Math.round(words / wpm));
}

/** "1 Min." bzw. "12 Min." */
export function formatReadingTime(minutes: number): string {
  return `${minutes} Min.`;
}
