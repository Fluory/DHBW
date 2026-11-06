import { Geist, Geist_Mono, Newsreader } from "next/font/google";

/** Überschriften: Newsreader mit optischen Größen, ruhig und gut lesbar auch groß. */
export const newsreader = Newsreader({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-newsreader",
  display: "swap",
});

/** Lesetext und Oberfläche. */
export const geist = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist",
  display: "swap",
});

/** Labels, Zahlen, Code. */
export const geistMono = Geist_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist-mono",
  display: "swap",
});
