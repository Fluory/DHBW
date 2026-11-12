"use client";

/** Kleiner Knopf, der den Druckdialog öffnet (dort auch „Als PDF speichern“). */
export function PrintButton({ label = "Drucken oder als PDF speichern" }: { label?: string }) {
  return (
    <button type="button" className="sheet-print" onClick={() => window.print()}>
      {label}
    </button>
  );
}
