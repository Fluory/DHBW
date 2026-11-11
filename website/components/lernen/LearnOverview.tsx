"use client";

import Link from "next/link";
import { BoxCounts } from "@/components/lernen/BoxCounts";
import { percent } from "@/lib/lernen/quiz";
import { useBestScores, useProgress } from "@/lib/lernen/storage";

export interface OverviewSubject {
  slug: string;
  short: string;
  title: string;
  number: number;
  cardIds: string[];
  quizCount: number;
}

/** Übersicht aller Fächer mit Lernstand und Quiz-Bestwert (aus dem Browser). */
export function LearnOverview({ subjects }: { subjects: OverviewSubject[] }) {
  const [progress] = useProgress();
  const [best] = useBestScores();
  const mixed = Object.prototype.hasOwnProperty.call(best, "gemischt") ? best.gemischt : undefined;

  return (
    <>
      <ul className="learn-overview">
        {subjects.map((subject) => {
          const score = Object.prototype.hasOwnProperty.call(best, subject.slug) ? best[subject.slug] : undefined;
          return (
            <li key={subject.slug} className="learn-overview-item">
              <div className="learn-overview-head">
                <span className="subject-number label">
                  {String(subject.number).padStart(2, "0")} · {subject.short}
                </span>
                <Link href={`/${subject.slug}/lernen`} className="learn-overview-title">
                  {subject.title}
                </Link>
                <span className="label muted">
                  {subject.cardIds.length} Karten · {subject.quizCount} Fragen
                  {score ? ` · Quiz-Bestwert ${percent(score.score, score.total)} %` : ""}
                </span>
              </div>
              {subject.cardIds.length > 0 ? <BoxCounts ids={subject.cardIds} progress={progress} compact /> : null}
            </li>
          );
        })}
      </ul>
      {mixed ? (
        <p className="label muted learn-mixed-best">
          Gemischtes Quiz, Bestwert: {mixed.score} von {mixed.total} ({percent(mixed.score, mixed.total)} %)
        </p>
      ) : null}
    </>
  );
}
