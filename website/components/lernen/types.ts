import type { ReactNode } from "react";

/** Karte, fertig gerendert auf dem Server (Markdown → React), für die Client-Komponenten. */
export interface CardView {
  id: string;
  topic: string;
  exam: boolean;
  front: ReactNode;
  back: ReactNode;
  /** Passendes Kapitel zum Nachlesen, falls eines gefunden wurde. */
  chapter: { href: string; title: string } | null;
}

export interface SubjectRef {
  slug: string;
  short: string;
  title: string;
}

export interface QuestionView {
  id: string;
  topic: string;
  q: ReactNode;
  code: string | null;
  options: ReactNode[];
  correct: number;
  explain: ReactNode;
  /** Für das gemischte Quiz: aus welchem Fach die Frage stammt. */
  subject: SubjectRef | null;
}
