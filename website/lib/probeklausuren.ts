/** Interaktive Probeklausuren unter public/probeklausur/ (erzeugt mit scripts/probeklausuren.mjs). */
/** official: Antwortbogen zur offiziellen Klausur aus Moodle (Aufgaben stehen im Moodle-PDF). */
export type InteractiveExam = { href: string; label: string; official?: boolean };

const EXAMS: Record<string, InteractiveExam[]> = {
  "grundlagen-it": [{ href: "/probeklausur/grundlagen-it", label: "Probeklausur GIT (48 Min)" }],
  wirtschaftsinformatik: [{ href: "/probeklausur/wirtschaftsinformatik", label: "Probeklausur WI (48 Min)" }],
  programmierung: [
    { href: "/probeklausur/programmierung", label: "Probeklausur Programmierung, Teil 1 (60 Min)" },
    { href: "/probeklausur/programmierung-2", label: "Probeklausur Programmierung, Teil 2 (60 Min)" },
  ],
  recht: [{ href: "/probeklausur/recht", label: "Probeklausur Recht (60 Min)" }],
  bwl: [
    { href: "/probeklausur/bwl-offiziell", label: "Offizielle Musterklausur BWL 2025: Antwortbogen (72 Min)", official: true },
    { href: "/probeklausur/bwl", label: "Probeklausur BWL von mir (72 Min)" },
  ],
  marketing: [
    { href: "/probeklausur/marketing-offiziell", label: "Offizielle Musterklausur Marketing 2025: Antwortbogen (48 Min)", official: true },
    { href: "/probeklausur/marketing", label: "Probeklausur Marketing von mir (48 Min)" },
  ],
  mathematik: [{ href: "/probeklausur/mathematik", label: "Probeklausur Mathematik I (120 Min)" }],
};

export function interactiveExams(subjectSlug: string): InteractiveExam[] {
  return EXAMS[subjectSlug] ?? [];
}
