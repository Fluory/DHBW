"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { BoxCounts } from "@/components/lernen/BoxCounts";
import { focusAndReveal, nativeActivation, shortcutAllowed } from "@/components/lernen/keys";
import { RatingButtons } from "@/components/lernen/RatingButtons";
import type { CardView } from "@/components/lernen/types";
import {
  BOX_LABELS,
  NO_FILTER,
  RATINGS,
  RATING_LABELS,
  boxOf,
  filterCards,
  orderCards,
  rate,
  resetProgress,
  topicsOf,
  type CardFilter,
  type Rating,
} from "@/lib/lernen/leitner";
import { useProgress } from "@/lib/lernen/storage";

interface Round {
  ids: string[];
  index: number;
  results: Record<Rating, number>;
}

const emptyResults = (): Record<Rating, number> => ({ nicht: 0, unsicher: 0, sitzt: 0 });

export function Flashcards({ cards, active = true }: { cards: CardView[]; active?: boolean }) {
  const [progress, updateProgress] = useProgress();
  const [filter, setFilter] = useState<CardFilter>(NO_FILTER);
  const [round, setRound] = useState<Round | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);
  const focusTarget = useRef<"front" | "back" | null>(null);
  const filterId = useId();

  const byId = useMemo(() => new Map(cards.map((card) => [card.id, card])), [cards]);
  const topics = useMemo(() => topicsOf(cards), [cards]);
  const allIds = useMemo(() => cards.map((card) => card.id), [cards]);

  // Vor der ersten Bewertung folgt die Reihenfolge dem aktuellen Lernstand; danach ist die Runde fest.
  const preview = useMemo(() => orderCards(filterCards(cards, progress, filter), progress), [cards, progress, filter]);
  const queue = round ? round.ids.map((id) => byId.get(id)).filter((card): card is CardView => Boolean(card)) : preview;
  const index = round?.index ?? 0;
  const done = round !== null && index >= queue.length;
  const current = done ? null : (queue[index] ?? null);

  useEffect(() => {
    const which = focusTarget.current;
    focusTarget.current = null;
    if (which === "back") focusAndReveal(backRef.current, cardRef.current);
    else if (which === "front") focusAndReveal(frontRef.current, cardRef.current ?? frontRef.current);
  });

  const changeFilter = (next: Partial<CardFilter>) => {
    setFilter((value) => ({ ...value, ...next }));
    setRound(null);
    setRevealed(false);
  };

  const reveal = () => {
    if (!current || revealed) return;
    focusTarget.current = "back";
    setRevealed(true);
  };

  const rateCurrent = (rating: Rating) => {
    if (!current || !revealed) return;
    updateProgress((value) => rate(value, current.id, rating));
    const base: Round = round ?? { ids: queue.map((card) => card.id), index: 0, results: emptyResults() };
    const nextIndex = base.index + 1;
    setRound({ ...base, index: nextIndex, results: { ...base.results, [rating]: base.results[rating] + 1 } });
    setRevealed(false);
    setAnnouncement(
      `${RATING_LABELS[rating]} gespeichert. ${nextIndex < queue.length ? `Karte ${nextIndex + 1} von ${queue.length}.` : "Runde beendet."}`,
    );
    focusTarget.current = "front";
  };

  const newRound = () => {
    setRound(null);
    setRevealed(false);
    setAnnouncement("Neue Runde.");
    focusTarget.current = "front";
  };

  // Tastatur: Leertaste/Enter zeigt die Antwort, 1/2/3 bewertet.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (!active || !shortcutAllowed(event) || !current) return;
      if ((event.key === " " || event.key === "Enter") && !revealed) {
        if (nativeActivation(event)) return;
        event.preventDefault();
        reveal();
        return;
      }
      const digit = ["1", "2", "3"].indexOf(event.key);
      if (digit >= 0 && revealed) {
        event.preventDefault();
        rateCurrent(RATINGS[digit]);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const total = queue.length;
  const activeFilters = (filter.topic ? 1 : 0) + (filter.examOnly ? 1 : 0) + (filter.wobblyOnly ? 1 : 0);
  const position = Math.min(index + 1, total);

  return (
    <div className="study">
      <div className="study-toolbar">
        <BoxCounts ids={allIds} progress={progress} />
        <details className="filter-details">
          <summary>
            Filter
            {activeFilters > 0 ? <span className="badge">{activeFilters} aktiv</span> : null}
          </summary>
          <fieldset className="filters">
            <legend className="visually-hidden">Karten filtern</legend>
            <label className="filter-select" htmlFor={`${filterId}-thema`}>
              <span className="label">Thema</span>
              <select
                id={`${filterId}-thema`}
                value={filter.topic ?? ""}
                onChange={(event) => changeFilter({ topic: event.target.value || null })}
              >
                <option value="">Alle Themen</option>
                {topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </label>
            <label className="filter-check">
              <input type="checkbox" checked={filter.examOnly} onChange={(event) => changeFilter({ examOnly: event.target.checked })} />
              <span>Nur Klausurpunkte</span>
            </label>
            <label className="filter-check">
              <input
                type="checkbox"
                checked={filter.wobblyOnly}
                onChange={(event) => changeFilter({ wobblyOnly: event.target.checked })}
              />
              <span>Nur Wackelkandidaten</span>
            </label>
          </fieldset>
        </details>
      </div>

      <p className="visually-hidden" aria-live="polite">
        {announcement}
      </p>

      {total === 0 ? (
        <div className="study-empty" ref={frontRef} tabIndex={-1}>
          <p>
            {filter.wobblyOnly
              ? "Keine Wackelkandidaten: Alles, was du bewertet hast, sitzt. Nimm den Filter heraus, um weiterzulernen."
              : "Für diese Auswahl gibt es keine Karten."}
          </p>
        </div>
      ) : done && round ? (
        <section className="round-end" aria-labelledby={`${filterId}-ende`} ref={frontRef} tabIndex={-1}>
          <h3 id={`${filterId}-ende`} className="study-title">
            Runde geschafft
          </h3>
          <p>
            {total} {total === 1 ? "Karte" : "Karten"} wiederholt.
          </p>
          <ul className="round-results">
            {RATINGS.map((rating) => (
              <li key={rating} data-rating={rating}>
                <span className="box-count">{round.results[rating]}</span> {RATING_LABELS[rating]}
              </li>
            ))}
          </ul>
          <p className="muted">
            In der nächsten Runde kommen zuerst die Karten, die du nicht wusstest, dann neue, dann unsichere.
          </p>
          <button type="button" className="button button-primary" onClick={newRound}>
            Neue Runde
          </button>
        </section>
      ) : current ? (
        <>
          <div className="study-progress">
            <span className="label" aria-hidden="true">
              Karte {position} von {total}
            </span>
            <div
              className="progress-track"
              role="progressbar"
              aria-label={`Karte ${position} von ${total}`}
              aria-valuemin={1}
              aria-valuemax={total}
              aria-valuenow={position}
            >
              <span className="progress-fill" style={{ width: `${(position / total) * 100}%` }} />
            </div>
          </div>

          <article className="flashcard" aria-labelledby={`${filterId}-front`} ref={cardRef}>
            <div className="flashcard-meta">
              <span className="label muted">{current.topic}</span>
              {current.exam ? (
                <span className="badge" data-klausur="relevant">
                  Klausurpunkt
                </span>
              ) : null}
              <span className="badge" data-box={boxOf(progress, current.id)}>
                {BOX_LABELS[boxOf(progress, current.id)]}
              </span>
            </div>
            <div id={`${filterId}-front`} className="flashcard-front card-text" ref={frontRef} tabIndex={-1}>
              {current.front}
            </div>
            {revealed ? (
              <div className="flashcard-back card-text" ref={backRef} tabIndex={-1} aria-label="Antwort">
                <p className="label muted flashcard-back-label">Antwort</p>
                {current.back}
              </div>
            ) : null}
          </article>

          {revealed ? (
            <RatingButtons onRate={rateCurrent} />
          ) : (
            <div className="rating-bar">
              <button type="button" className="button button-primary button-wide" onClick={reveal}>
                Antwort zeigen
                <kbd className="key-hint" aria-hidden="true">
                  Leertaste
                </kbd>
              </button>
            </div>
          )}
        </>
      ) : null}

      <div className="reset">
        {confirmReset ? (
          <div className="reset-confirm" role="alertdialog" aria-labelledby={`${filterId}-reset`}>
            <p id={`${filterId}-reset`}>Alle Bewertungen der Karten dieses Fachs löschen? Das lässt sich nicht rückgängig machen.</p>
            <div className="reset-actions">
              <button
                type="button"
                className="button"
                onClick={() => {
                  updateProgress((value) => resetProgress(value, allIds));
                  setConfirmReset(false);
                  setRound(null);
                  setRevealed(false);
                  setAnnouncement("Lernstand zurückgesetzt.");
                }}
              >
                Ja, zurücksetzen
              </button>
              <button type="button" className="button" onClick={() => setConfirmReset(false)} autoFocus>
                Abbrechen
              </button>
            </div>
          </div>
        ) : (
          <button type="button" className="text-button" onClick={() => setConfirmReset(true)}>
            Lernstand zurücksetzen
          </button>
        )}
      </div>
    </div>
  );
}
