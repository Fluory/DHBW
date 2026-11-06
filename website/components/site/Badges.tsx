import { KLAUSUR_LABELS, STAND_LABELS, type Klausur, type Stand } from "@/lib/content/schema";

export function StandBadge({ stand }: { stand: Stand }) {
  return (
    <span className="badge" data-stand={stand}>
      {STAND_LABELS[stand]}
    </span>
  );
}

export function KlausurBadge({ klausur }: { klausur: Klausur }) {
  return (
    <span className="badge" data-klausur={klausur}>
      {KLAUSUR_LABELS[klausur]}
    </span>
  );
}
