/** Interaktive Probeklausuren unter public/probeklausur/ (erzeugt mit scripts/probeklausuren.mjs). */
export type InteractiveExam = { href: string; label: string };

const EXAMS: Record<string, InteractiveExam[]> = {
  "grundlagen-it": [{ href: "/probeklausur/grundlagen-it", label: "Probeklausur GIT (48 Min)" }],
  wirtschaftsinformatik: [{ href: "/probeklausur/wirtschaftsinformatik", label: "Probeklausur WI (48 Min)" }],
  programmierung: [
    { href: "/probeklausur/programmierung", label: "Probeklausur Programmierung, Teil 1 (60 Min)" },
    { href: "/probeklausur/programmierung-2", label: "Probeklausur Programmierung, Teil 2 (60 Min)" },
  ],
  recht: [{ href: "/probeklausur/recht", label: "Probeklausur Recht (60 Min)" }],
  bwl: [{ href: "/probeklausur/bwl", label: "Probeklausur BWL (72 Min)" }],
  marketing: [{ href: "/probeklausur/marketing", label: "Probeklausur Marketing (48 Min)" }],
  mathematik: [{ href: "/probeklausur/mathematik", label: "Probeklausur Mathematik I (120 Min)" }],
};

export function interactiveExams(subjectSlug: string): InteractiveExam[] {
  return EXAMS[subjectSlug] ?? [];
}
