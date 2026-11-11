/** Tastenkürzel nur, wenn nicht gerade getippt wird und keine Zusatztaste gedrückt ist. */
export function shortcutAllowed(event: KeyboardEvent): boolean {
  if (event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey) return false;
  const target = event.target as HTMLElement | null;
  if (!target) return true;
  if (target.isContentEditable) return false;
  return !["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName);
}

/** Leertaste/Enter auf Buttons und Links lösen diese selbst aus; dann nicht doppelt reagieren. */
export function nativeActivation(event: KeyboardEvent): boolean {
  if (event.key !== " " && event.key !== "Enter") return false;
  const target = event.target as HTMLElement | null;
  return Boolean(target?.closest("button, a, summary, [role='tab']"));
}

/**
 * Fokus setzen und das sichtbar machen, worum es geht (`reveal`, sonst das Element selbst),
 * ohne mehr als nötig zu scrollen. `scroll-margin` im CSS hält Platz für Kopf und Bewertungsleiste.
 */
export function focusAndReveal(target: HTMLElement | null, reveal: HTMLElement | null = target) {
  target?.focus({ preventScroll: true });
  reveal?.scrollIntoView({ block: "nearest" });
}
