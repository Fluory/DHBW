"use client";

import { RATINGS, RATING_LABELS, type Rating } from "@/lib/lernen/leitner";

/** Selbsteinschätzung mit Tasten 1/2/3; klebt auf dem Handy unten, ohne Inhalt zu verdecken. */
export function RatingButtons({ onRate, label = "Wie gut wusstest du es?" }: { onRate: (rating: Rating) => void; label?: string }) {
  return (
    <div className="rating-bar" role="group" aria-label={label}>
      <p className="rating-question label">{label}</p>
      <div className="rating-buttons">
        {RATINGS.map((rating, index) => (
          <button key={rating} type="button" className="rating-button" data-rating={rating} onClick={() => onRate(rating)}>
            <span>{RATING_LABELS[rating]}</span>
            <kbd className="key-hint" aria-hidden="true">
              {index + 1}
            </kbd>
          </button>
        ))}
      </div>
    </div>
  );
}
