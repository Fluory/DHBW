import { renderInline } from "@/components/reader/InlineMarkdown";
import type { CardView, QuestionView } from "@/components/lernen/types";
import type { SubjectEntry } from "@/lib/content/loader";
import { matchChapter } from "@/lib/lernen/topics";

/** Server: Karten eines Fachs für die Lernseite aufbereiten. */
export function prepareCards(subject: SubjectEntry): CardView[] {
  return (subject.deck?.cards ?? []).map((card) => {
    const chapter = matchChapter(card.topic, subject.chapters);
    return {
      id: card.id,
      topic: card.topic,
      exam: card.exam,
      front: renderInline(card.front),
      back: renderInline(card.back),
      chapter: chapter ? { href: `/${subject.slug}/${chapter.slug}`, title: chapter.title } : null,
    };
  });
}

/** Server: Quizfragen eines Fachs aufbereiten; `withSubject` für das gemischte Quiz. */
export function prepareQuestions(subject: SubjectEntry, withSubject = false): QuestionView[] {
  return (subject.deck?.quiz ?? []).map((question) => ({
    id: question.id,
    topic: question.topic,
    q: renderInline(question.q),
    code: question.code ?? null,
    options: question.options.map((option) => renderInline(option)),
    correct: question.correct,
    explain: renderInline(question.explain),
    subject: withSubject ? { slug: subject.slug, short: subject.short, title: subject.title } : null,
  }));
}
