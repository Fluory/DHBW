"use client";

import { useCallback, useId, useRef, useSyncExternalStore, type KeyboardEvent } from "react";
import { Feynman } from "@/components/lernen/Feynman";
import { Flashcards } from "@/components/lernen/Flashcards";
import { Quiz } from "@/components/lernen/Quiz";
import type { CardView, QuestionView } from "@/components/lernen/types";

const TABS = [
  { id: "karteikarten", label: "Karteikarten" },
  { id: "quiz", label: "Quiz" },
  { id: "feynman", label: "Feynman" },
] as const;

type TabId = (typeof TABS)[number]["id"];

const HASH_EVENT = "semester-lernen-hash";

function subscribe(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  window.addEventListener(HASH_EVENT, onChange);
  return () => {
    window.removeEventListener("hashchange", onChange);
    window.removeEventListener(HASH_EVENT, onChange);
  };
}

const readHash = () => window.location.hash.slice(1);

interface LernenTabsProps {
  cards: CardView[];
  questions: QuestionView[];
  subjectSlug: string;
}

/** Drei Lernmodi als Tabs; der aktive Tab steht im URL-Hash (#karteikarten, #quiz, #feynman). */
export function LernenTabs({ cards, questions, subjectSlug }: LernenTabsProps) {
  const available = TABS.filter((tab) => (tab.id === "quiz" ? questions.length > 0 : cards.length > 0));
  const hash = useSyncExternalStore(subscribe, readHash, () => "");
  const active: TabId = available.find((tab) => tab.id === hash)?.id ?? available[0]?.id ?? "karteikarten";
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const id = useId();

  const select = useCallback((tab: TabId, focus = false) => {
    window.history.replaceState(null, "", `#${tab}`);
    window.dispatchEvent(new Event(HASH_EVENT));
    if (focus) tabRefs.current[tab]?.focus();
  }, []);

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const index = available.findIndex((tab) => tab.id === active);
    let next = -1;
    if (event.key === "ArrowRight") next = (index + 1) % available.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + available.length) % available.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = available.length - 1;
    if (next < 0) return;
    event.preventDefault();
    select(available[next].id, true);
  };

  return (
    <div className="lernen-tabs">
      <div role="tablist" aria-label="Lernmodus" className="tablist">
        {available.map((tab) => (
          <button
            key={tab.id}
            ref={(node) => {
              tabRefs.current[tab.id] = node;
            }}
            type="button"
            role="tab"
            id={`${id}-tab-${tab.id}`}
            aria-controls={`${id}-panel-${tab.id}`}
            aria-selected={tab.id === active}
            tabIndex={tab.id === active ? 0 : -1}
            className="tab"
            onClick={() => select(tab.id)}
            onKeyDown={onKeyDown}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {available.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${id}-panel-${tab.id}`}
          aria-labelledby={`${id}-tab-${tab.id}`}
          hidden={tab.id !== active}
          className="tabpanel"
        >
          {/* Alle Modi bleiben eingehängt (ein Quiz läuft beim Tab-Wechsel weiter); Tasten nur im aktiven. */}
          {tab.id === "karteikarten" ? (
            <Flashcards cards={cards} active={tab.id === active} />
          ) : tab.id === "quiz" ? (
            <Quiz questions={questions} bestKey={subjectSlug} active={tab.id === active} />
          ) : (
            <Feynman cards={cards} subjectHref={`/${subjectSlug}#kapitel`} active={tab.id === active} />
          )}
        </div>
      ))}
    </div>
  );
}
