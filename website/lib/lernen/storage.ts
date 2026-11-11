"use client";

import { useCallback, useSyncExternalStore } from "react";
import { parseProgress, type ProgressMap } from "@/lib/lernen/leitner";
import { parseBest, type BestMap } from "@/lib/lernen/quiz";

/**
 * Lernstand im Browser (localStorage). Jeder Zugriff ist abgesichert: Ohne Speicher
 * (privater Modus, gesperrt) funktioniert alles, nur ohne Gedächtnis über die Seite hinaus.
 */

export const PROGRESS_KEY = "semester-lernen-v1:karten";
export const BEST_KEY = "semester-lernen-v1:quiz-bestwerte";
const EVENT = "semester-lernen-change";

/** Fallback, wenn localStorage nicht verfügbar ist (gilt bis zum Neuladen). */
const memory = new Map<string, string>();

function readRaw(key: string): string | null {
  try {
    const value = window.localStorage.getItem(key);
    if (value !== null) return value;
  } catch {
    // Speicher nicht verfügbar
  }
  return memory.get(key) ?? null;
}

function writeRaw(key: string, value: string) {
  memory.set(key, value);
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Speicher voll oder gesperrt: Wert bleibt bis zum Neuladen im Speicher der Seite
  }
  window.dispatchEvent(new Event(EVENT));
}

function subscribe(onChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === null || event.key === PROGRESS_KEY || event.key === BEST_KEY) onChange();
  };
  window.addEventListener(EVENT, onChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(EVENT, onChange);
    window.removeEventListener("storage", onStorage);
  };
}

/** Snapshot je Schlüssel nur neu parsen, wenn sich der gespeicherte Text ändert. */
function cachedReader<T>(key: string, parse: (raw: string | null) => T) {
  let lastRaw: string | null | undefined;
  let lastValue: T;
  return (): T => {
    const raw = readRaw(key);
    if (raw !== lastRaw) {
      lastRaw = raw;
      lastValue = parse(raw);
    }
    return lastValue;
  };
}

const EMPTY_PROGRESS: ProgressMap = {};
const EMPTY_BEST: BestMap = {};
const readProgress = cachedReader(PROGRESS_KEY, parseProgress);
const readBest = cachedReader(BEST_KEY, parseBest);

/** Server und erster Render: leer. Danach der gespeicherte Stand. */
export function useProgress(): [ProgressMap, (update: (current: ProgressMap) => ProgressMap) => void] {
  const progress = useSyncExternalStore(subscribe, readProgress, () => EMPTY_PROGRESS);
  const update = useCallback((fn: (current: ProgressMap) => ProgressMap) => {
    writeRaw(PROGRESS_KEY, JSON.stringify(fn(readProgress())));
  }, []);
  return [progress, update];
}

export function useBestScores(): [BestMap, (update: (current: BestMap) => BestMap) => void] {
  const best = useSyncExternalStore(subscribe, readBest, () => EMPTY_BEST);
  const update = useCallback((fn: (current: BestMap) => BestMap) => {
    writeRaw(BEST_KEY, JSON.stringify(fn(readBest())));
  }, []);
  return [best, update];
}
