"use client";

import { useCallback, useSyncExternalStore } from "react";
import { THEME_EVENT, THEME_STORAGE_KEY } from "@/lib/theme";

type Theme = "light" | "dark";

function subscribe(onChange: () => void) {
  window.addEventListener(THEME_EVENT, onChange);
  return () => window.removeEventListener(THEME_EVENT, onChange);
}

const getSnapshot = (): Theme => (document.documentElement.dataset.theme === "dark" ? "dark" : "light");

/** Umschalter Hell/Dunkel. Hell ist Standard; die Wahl wird in localStorage gemerkt. */
export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, () => "light" as Theme);
  const dark = theme === "dark";

  const toggle = useCallback(() => {
    const next: Theme = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Speichern nicht möglich: Wahl gilt nur für diese Seite
    }
    window.dispatchEvent(new Event(THEME_EVENT));
  }, [dark]);

  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-pressed={dark} aria-label="Dunkles Farbschema">
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
        {dark ? (
          <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" strokeLinejoin="round" />
        ) : (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" strokeLinecap="round" />
          </>
        )}
      </svg>
      <span className="label">{dark ? "Dunkel" : "Hell"}</span>
    </button>
  );
}
