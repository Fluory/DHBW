"use client";

import { BOX_LABELS, BOX_ORDER, countBoxes, type ProgressMap } from "@/lib/lernen/leitner";

/** Zähler für die vier Fächer (Nicht gewusst, Neu, Unsicher, Sitzt). */
export function BoxCounts({ ids, progress, compact = false }: { ids: readonly string[]; progress: ProgressMap; compact?: boolean }) {
  const counts = countBoxes(ids, progress);
  return (
    <ul className="box-counts" data-compact={compact || undefined} aria-label="Lernstand">
      {BOX_ORDER.map((box) => (
        <li key={box} data-box={box}>
          <span className="box-count">{counts[box]}</span>
          <span className="box-label">{BOX_LABELS[box]}</span>
        </li>
      ))}
    </ul>
  );
}
