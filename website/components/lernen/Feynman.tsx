"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { focusAndReveal, shortcutAllowed } from "@/components/lernen/keys";
import { RatingButtons } from "@/components/lernen/RatingButtons";
import type { CardView } from "@/components/lernen/types";
import { BOX_LABELS, RATINGS, RATING_LABELS, boxOf, pickFeynmanCard, rate, type Rating } from "@/lib/lernen/leitner";
import { useProgress } from "@/lib/lernen/storage";

type Phase = "start" | "explain" | "compare" | "rated";

const CHECKS = [
  "Habe ich den Kern getroffen, also das, worauf es bei dem Begriff wirklich ankommt?",
  "Habe ich ein eigenes Beispiel genannt, nicht nur das aus den Unterlagen?",
  "Würde jemand ohne Vorwissen jedes Wort verstehen, oder habe ich Fachwörter nur wiederholt?",
  "Wo bin ich hängen geblieben? Genau diese Stelle im Kapitel nachlesen.",
] as const;

interface FeynmanProps {
  cards: CardView[];
  /** Ziel, wenn zu einem Thema kein Kapitel gefunden wird. */
  subjectHref: string;
  active?: boolean;
}

export function Feynman({ cards, subjectHref, active = true }: FeynmanProps) {
  const [progress, updateProgress] = useProgress();
  const [phase, setPhase] = useState<Phase>("start");
  const [card, setCard] = useState<CardView | null>(null);
  const [text, setText] = useState("");
  const [checked, setChecked] = useState<boolean[]>([false, false, false, false]);
  const [lastRating, setLastRating] = useState<Rating | null>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const compareRef = useRef<HTMLDivElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);
  const focusTarget = useRef<"text" | "compare" | "done" | null>(null);
  const id = useId();

  useEffect(() => {
    const target =
      focusTarget.current === "text"
        ? textRef.current
        : focusTarget.current === "compare"
          ? compareRef.current
          : focusTarget.current === "done"
            ? doneRef.current
            : null;
    focusTarget.current = null;
    focusAndReveal(target);
  });

  const draw = () => {
    const next = pickFeynmanCard(cards, progress, Math.random, card?.id ?? null);
    setCard(next);
    setText("");
    setChecked([false, false, false, false]);
    setLastRating(null);
    setPhase("explain");
    focusTarget.current = "text";
  };

  const compare = () => {
    setPhase("compare");
    focusTarget.current = "compare";
  };

  const rateCard = (rating: Rating) => {
    if (!card || phase !== "compare") return;
    updateProgress((value) => rate(value, card.id, rating));
    setLastRating(rating);
    setPhase("rated");
    focusTarget.current = "done";
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (!active || !shortcutAllowed(event) || phase !== "compare") return;
      const digit = ["1", "2", "3"].indexOf(event.key);
      if (digit >= 0) {
        event.preventDefault();
        rateCard(RATINGS[digit]);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (cards.length === 0) return <p className="muted">Für dieses Fach gibt es noch keine Karteikarten.</p>;

  if (phase === "start" || !card) {
    return (
      <div className="study">
        <div className="quiz-start">
          <p>
            Die Feynman-Methode: Du erklärst einen Begriff so einfach, als hättest du jemanden ohne Vorwissen vor dir. Wo
            die Erklärung stockt, ist die Lücke. Danach vergleichst du mit den Unterlagen.
          </p>
          <p className="muted">
            Gezogen wird ein Klausurpunkt, der noch nicht sitzt. Deine Erklärung bleibt nur auf dieser Seite und wird nicht
            gespeichert.
          </p>
          <div className="quiz-start-actions">
            <button type="button" className="button button-primary" onClick={draw}>
              Begriff ziehen
            </button>
          </div>
        </div>
      </div>
    );
  }

  const box = boxOf(progress, card.id);

  return (
    <div className="study">
      <article className="flashcard" aria-labelledby={`${id}-begriff`}>
        <div className="flashcard-meta">
          <span className="label muted">{card.topic}</span>
          {card.exam ? (
            <span className="badge" data-klausur="relevant">
              Klausurpunkt
            </span>
          ) : null}
          <span className="badge" data-box={box}>
            {BOX_LABELS[box]}
          </span>
        </div>
        <div id={`${id}-begriff`} className="flashcard-front card-text">
          {card.front}
        </div>
      </article>

      <div className="feynman-write">
        <label htmlFor={`${id}-text`} className="feynman-label">
          Erklär es einfach, als würdest du es jemandem ohne Vorwissen erklären.
        </label>
        <textarea
          id={`${id}-text`}
          ref={textRef}
          value={text}
          onChange={(event) => setText(event.target.value)}
          rows={6}
          placeholder="In eigenen Worten, mit einem Beispiel aus dem Alltag …"
          readOnly={phase !== "explain"}
        />
        {phase === "explain" ? (
          <div className="quiz-start-actions">
            <button type="button" className="button button-primary" onClick={compare}>
              Mit Unterlagen vergleichen
            </button>
          </div>
        ) : null}
      </div>

      {phase !== "explain" ? (
        <section className="feynman-compare" aria-labelledby={`${id}-vergleich`} ref={compareRef} tabIndex={-1}>
          <h3 id={`${id}-vergleich`} className="study-title">
            So steht es in den Unterlagen
          </h3>
          <div className="flashcard-back card-text">{card.back}</div>
          <h4 className="feynman-checks-title">Prüf deine Erklärung</h4>
          <ul className="feynman-checks">
            {CHECKS.map((check, index) => (
              <li key={check}>
                <label className="filter-check">
                  <input
                    type="checkbox"
                    checked={checked[index]}
                    onChange={(event) =>
                      setChecked((value) => value.map((item, i) => (i === index ? event.target.checked : item)))
                    }
                  />
                  <span>{check}</span>
                </label>
                {index === 3 ? (
                  <p className="feynman-reread">
                    {card.chapter ? (
                      <Link href={card.chapter.href}>Kapitel nachlesen: {card.chapter.title} →</Link>
                    ) : (
                      <Link href={subjectHref}>Zu den Kapiteln des Fachs →</Link>
                    )}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {phase === "compare" ? <RatingButtons onRate={rateCard} label="Wie gut konntest du es erklären?" /> : null}

      {phase === "rated" && lastRating ? (
        <div className="rating-bar" ref={doneRef} tabIndex={-1}>
          <p className="rating-question" aria-live="polite">
            Gespeichert: {RATING_LABELS[lastRating]}.
          </p>
          <button type="button" className="button button-primary button-wide" onClick={draw}>
            Nächster Begriff
          </button>
        </div>
      ) : null}
    </div>
  );
}
