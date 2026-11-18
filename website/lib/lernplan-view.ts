import type { Library } from "@/lib/content/loader";
import { formatDate } from "@/lib/dates";
import { EXAM_LABEL, PLAN, type PlanDay } from "@/lib/lernplan";

export type ViewLink = { href: string; label: string };

export type ViewTask = {
  short: string;
  fachTitle: string;
  fachHref: string;
  thema: string;
  detail: string;
  dauer: string;
  links: ViewLink[];
};

export type ViewDay = {
  date: string;
  label: string;
  uni?: string;
  klausur?: ViewLink & { short: string };
  frei?: PlanDay["frei"];
  tasks: ViewTask[];
};

/** Löst Fach- und Kapitel-Slugs in Titel und Links auf (läuft auf dem Server, das Ergebnis geht an Client-Komponenten). */
export function resolvePlan(library: Library, plan: PlanDay[] = PLAN): ViewDay[] {
  const subject = (slug: string) => {
    const found = library.subjects.find((entry) => entry.slug === slug);
    if (!found) throw new Error(`Lernplan: unbekanntes Fach „${slug}“`);
    return found;
  };

  return plan.map((day) => {
    const exam = day.klausur ? subject(day.klausur) : undefined;
    return {
      date: day.date,
      label: formatDate(day.date),
      uni: day.uni,
      frei: day.frei,
      klausur: exam ? { href: `/${exam.slug}`, label: EXAM_LABEL[exam.slug] ?? exam.title, short: exam.slug === "bwl" ? "BWL + MKT" : exam.short } : undefined,
      tasks: day.tasks.map((task) => {
        const s = subject(task.fach);
        const links = (task.kapitel ?? []).map((slug) => {
          const chapter = s.chapters.find((entry) => entry.slug === slug);
          if (!chapter) throw new Error(`Lernplan: unbekanntes Kapitel „${slug}“ in ${s.slug}`);
          return { href: `/${s.slug}/${chapter.slug}`, label: chapter.title };
        });
        return {
          short: s.short,
          fachTitle: s.title,
          fachHref: `/${s.slug}`,
          thema: task.thema,
          detail: task.detail,
          dauer: task.dauer,
          links,
        };
      }),
    };
  });
}
