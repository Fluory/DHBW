"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/lib/markdown/headings";

function useActiveHeading(headings: Heading[]): string | null {
  const [active, setActive] = useState<string | null>(headings[0]?.id ?? null);

  useEffect(() => {
    const elements = headings
      .map((heading) => document.getElementById(heading.id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;
    let frame = 0;
    // Aktiv ist die letzte Überschrift, die das obere Viertel des Fensters passiert hat.
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.25;
      let current = elements[0].id;
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
        else break;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [headings]);

  return active;
}

function TocList({ headings, active }: { headings: Heading[]; active: string | null }) {
  return (
    <ol className="toc-list">
      {headings.map((heading) => (
        <li key={heading.id} data-depth={heading.depth}>
          <a href={`#${heading.id}`} aria-current={heading.id === active ? "location" : undefined}>
            {heading.text}
          </a>
        </li>
      ))}
    </ol>
  );
}

/** Desktop: mitlaufend in der Randspalte. */
export function TocSidebar({ headings }: { headings: Heading[] }) {
  const active = useActiveHeading(headings);
  if (headings.length === 0) return null;
  return (
    <nav aria-label="Inhalt dieser Seite" className="toc-sidebar">
      <p className="label toc-heading">Auf dieser Seite</p>
      <TocList headings={headings} active={active} />
    </nav>
  );
}

/** Mobil: aufklappbares Inhaltsverzeichnis vor dem Text. */
export function TocInline({ headings }: { headings: Heading[] }) {
  if (headings.length === 0) return null;
  return (
    <details className="toc-inline">
      <summary className="label">Inhalt · {headings.filter((heading) => heading.depth === 2).length} Abschnitte</summary>
      <nav aria-label="Inhalt dieser Seite">
        <TocList headings={headings} active={null} />
      </nav>
    </details>
  );
}
