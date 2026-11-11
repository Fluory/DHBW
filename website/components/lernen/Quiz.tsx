"use client";

import { useEffect, useId, useRef, useState } from "react";
import { focusAndReveal, nativeActivation, shortcutAllowed } from "@/components/lernen/keys";
import type { QuestionView } from "@/components/lernen/types";
import {
  OPTION_LETTERS,
  isBetter,
  optionIndexFromKey,
  percent,
  pickInterleaved,
  pickQuestions,
  scoreQuiz,
  updateBest,
  type QuizResult,
} from "@/lib/lernen/quiz";
import { useBestScores } from "@/lib/lernen/storage";

type Phase = "start" | "question" | "result";

interface QuizProps {
  questions: QuestionView[];
  /** Schlüssel für den Bestwert (Fach-Slug oder „gemischt“). */
  bestKey: string;
  /** Gemischtes Quiz über mehrere Fächer: feste Länge, Fach je Frage sichtbar. */
  mixed?: boolean;
  /** Fragen je Runde (Standard 10). */
  roundSize?: number;
  /** Tastenkürzel nur, wenn der Modus sichtbar ist. */
  active?: boolean;
}

export function Quiz({ questions, bestKey, mixed = false, roundSize = 10, active = true }: QuizProps) {
  const [best, updateBestScores] = useBestScores();
  const [phase, setPhase] = useState<Phase>("start");
  const [list, setList] = useState<QuestionView[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<QuizResult | null>(null);
  const [isRetry, setIsRetry] = useState(false);
  const [newBest, setNewBest] = useState(false);
  const nextRef = useRef<HTMLButtonElement>(null);
  const questionRef = useRef<HTMLDivElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);
  const focusTarget = useRef<"next" | "question" | null>(null);
  const id = useId();

  useEffect(() => {
    const which = focusTarget.current;
    focusTarget.current = null;
    if (which === "next") focusAndReveal(nextRef.current, feedbackRef.current);
    else if (which === "question") focusAndReveal(questionRef.current, cardRef.current ?? questionRef.current);
  });

  const current = phase === "question" ? list[index] : undefined;
  const chosen = current ? answers[current.id] : undefined;
  const answered = chosen !== undefined;
  const bestScore = Object.prototype.hasOwnProperty.call(best, bestKey) ? best[bestKey] : undefined;

  const begin = (items: QuestionView[], retry: boolean) => {
    setList(items);
    setIndex(0);
    setAnswers({});
    setResult(null);
    setIsRetry(retry);
    setNewBest(false);
    setPhase("question");
    focusTarget.current = "question";
  };

  const start = (count: number | "all") =>
    begin(mixed ? pickInterleaved(questions, count === "all" ? questions.length : count, (question) => question.subject?.slug ?? "") : pickQuestions(questions, count), false);

  const choose = (option: number) => {
    if (!current || answered) return;
    setAnswers((value) => ({ ...value, [current.id]: option }));
    focusTarget.current = "next";
  };

  const next = () => {
    if (!answered) return;
    if (index + 1 < list.length) {
      setIndex(index + 1);
      focusTarget.current = "question";
      return;
    }
    const outcome = scoreQuiz(list, answers);
    setResult(outcome);
    if (!isRetry) {
      setNewBest(isBetter(outcome, bestScore));
      updateBestScores((value) => updateBest(value, bestKey, outcome));
    }
    setPhase("result");
    focusTarget.current = "question";
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (!active || !shortcutAllowed(event) || phase !== "question") return;
      if (!answered) {
        const option = optionIndexFromKey(event.key);
        if (option !== null && current && option < current.options.length) {
          event.preventDefault();
          choose(option);
        }
        return;
      }
      if (event.key === "ArrowRight" || ((event.key === "Enter" || event.key === " ") && !nativeActivation(event))) {
        event.preventDefault();
        next();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (questions.length === 0) return <p className="muted">Für dieses Fach gibt es noch keine Quizfragen.</p>;

  if (phase === "start") {
    return (
      <div className="study">
        <div className="quiz-start">
          <p>
            {mixed
              ? `${Math.min(roundSize, questions.length)} Fragen quer durch alle Fächer, abwechselnd gemischt. Zu jeder Frage siehst du das Fach.`
              : `${questions.length} Fragen im Fach. Du bekommst nach jeder Antwort sofort die Auflösung mit Begründung.`}
          </p>
          <p className="muted">Antworten per Klick oder mit den Tasten A–D bzw. 1–4, weiter mit Enter.</p>
          {bestScore ? (
            <p className="label">
              Bestwert: {bestScore.score} von {bestScore.total} ({percent(bestScore.score, bestScore.total)} %)
            </p>
          ) : null}
          <div className="quiz-start-actions">
            {mixed || questions.length > roundSize ? (
              <button type="button" className="button button-primary" onClick={() => start(roundSize)}>
                {Math.min(roundSize, questions.length)} zufällige Fragen
              </button>
            ) : null}
            {!mixed ? (
              <button type="button" className={`button${questions.length > roundSize ? "" : " button-primary"}`} onClick={() => start("all")}>
                Alle {questions.length} Fragen
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  if (phase === "result" && result) {
    const wrong = list.filter((question) => result.wrongIds.includes(question.id));
    return (
      <div className="study">
        <section className="round-end" aria-labelledby={`${id}-ergebnis`} ref={questionRef} tabIndex={-1}>
          <h3 id={`${id}-ergebnis`} className="study-title">
            {result.score} von {result.total} richtig
          </h3>
          <p className="quiz-score" aria-hidden="true">
            {percent(result.score, result.total)} %
          </p>
          {isRetry ? (
            <p className="muted">Wiederholungsrunde: zählt nicht für den Bestwert.</p>
          ) : newBest ? (
            <p>Neuer Bestwert.</p>
          ) : bestScore ? (
            <p className="muted">
              Bestwert: {bestScore.score} von {bestScore.total} ({percent(bestScore.score, bestScore.total)} %)
            </p>
          ) : null}
          {wrong.length > 0 ? (
            <>
              <h4 className="quiz-wrong-title">Diese solltest du dir noch einmal ansehen</h4>
              <ul className="quiz-wrong-list">
                {wrong.map((question) => (
                  <li key={question.id}>
                    <span className="label muted">
                      {question.subject ? `${question.subject.short} · ` : ""}
                      {question.topic}
                    </span>
                    <span className="card-text">{question.q}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p>Alles richtig.</p>
          )}
          <div className="quiz-start-actions">
            {wrong.length > 0 ? (
              <button type="button" className="button button-primary" onClick={() => begin(wrong, true)}>
                Falsche wiederholen ({wrong.length})
              </button>
            ) : null}
            <button type="button" className="button" onClick={() => setPhase("start")}>
              Neues Quiz
            </button>
          </div>
        </section>
      </div>
    );
  }

  if (!current) return null;
  const position = index + 1;
  const isCorrect = answered && chosen === current.correct;

  return (
    <div className="study">
      <div className="study-progress">
        <span className="label" aria-hidden="true">
          Frage {position} von {list.length}
        </span>
        <div
          className="progress-track"
          role="progressbar"
          aria-label={`Frage ${position} von ${list.length}`}
          aria-valuemin={1}
          aria-valuemax={list.length}
          aria-valuenow={position}
        >
          <span className="progress-fill" style={{ width: `${(position / list.length) * 100}%` }} />
        </div>
      </div>

      <article className="quiz-card" aria-labelledby={`${id}-frage`} ref={cardRef}>
        <div className="flashcard-meta">
          {current.subject ? (
            <span className="badge" data-klausur="relevant">
              {current.subject.title}
            </span>
          ) : null}
          <span className="label muted">{current.topic}</span>
        </div>
        <div id={`${id}-frage`} className="quiz-question card-text" ref={questionRef} tabIndex={-1}>
          {current.q}
        </div>
        {current.code ? (
          <pre className="quiz-code" tabIndex={0} aria-label="Code zur Frage">
            <code>{current.code}</code>
          </pre>
        ) : null}
        <ol className="quiz-options" aria-label="Antworten">
          {current.options.map((option, optionIndex) => {
            const state = !answered
              ? undefined
              : optionIndex === current.correct
                ? "correct"
                : optionIndex === chosen
                  ? "wrong"
                  : "other";
            return (
              <li key={optionIndex}>
                <button
                  type="button"
                  className="quiz-option"
                  data-state={state}
                  aria-disabled={answered || undefined}
                  onClick={() => choose(optionIndex)}
                >
                  <span className="quiz-letter" aria-hidden="true">
                    {OPTION_LETTERS[optionIndex]}
                  </span>
                  <span className="visually-hidden">Antwort {OPTION_LETTERS[optionIndex]}: </span>
                  <span className="quiz-option-text">{option}</span>
                  {state === "correct" ? <span className="quiz-mark">Richtig</span> : null}
                  {state === "wrong" ? <span className="quiz-mark">Deine Antwort</span> : null}
                </button>
              </li>
            );
          })}
        </ol>
      </article>

      <div aria-live="polite" className="quiz-feedback-slot">
        {answered ? (
          <div className="quiz-feedback" data-state={isCorrect ? "correct" : "wrong"} ref={feedbackRef}>
            <p className="quiz-verdict">
              {isCorrect ? "Richtig." : `Leider falsch. Richtig ist ${OPTION_LETTERS[current.correct]}.`}
            </p>
            <div className="card-text">{current.explain}</div>
          </div>
        ) : null}
      </div>

      {answered ? (
        <div className="rating-bar">
          <button type="button" className="button button-primary button-wide" ref={nextRef} onClick={next}>
            {position < list.length ? "Weiter" : "Zum Ergebnis"}
            <kbd className="key-hint" aria-hidden="true">
              Enter
            </kbd>
          </button>
        </div>
      ) : null}
    </div>
  );
}
