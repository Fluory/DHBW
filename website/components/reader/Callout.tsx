import type { ReactNode } from "react";
import { ALERT_TYPES, isAlertType } from "@/lib/markdown/alerts";

type CalloutProps = {
  children?: ReactNode;
  className?: string;
  "data-callout"?: string;
  "data-label"?: string;
};

/**
 * Kopfzeile eines Alerts: Beginnt das Label mit der Bedeutung des Typs („Übung 2 · leicht“,
 * „Beispiel: Die Bäckerei“), steht es allein. Sonst steht die Bedeutung klein darüber.
 */
export function calloutHead(type: keyof typeof ALERT_TYPES, label: string | undefined): { kicker: string | null; title: string } {
  const meaning = ALERT_TYPES[type].label;
  const text = (label ?? "").trim() || meaning;
  if (text.toLowerCase().startsWith(meaning.toLowerCase())) return { kicker: null, title: text };
  return { kicker: meaning, title: text };
}

/** Gestalteter GitHub-Alert: Das Wichtigste, Achtung, Beispiel, Übung, Nicht klausurrelevant. */
export function Callout(props: CalloutProps) {
  const type = props["data-callout"];
  if (!isAlertType(type)) return <aside className={props.className}>{props.children}</aside>;
  const { kicker, title } = calloutHead(type, props["data-label"]);

  return (
    <aside className={`callout callout-${type}`} aria-label={kicker ? `${kicker}: ${title}` : title}>
      {kicker ? <p className="callout-kicker label">{kicker}</p> : null}
      <p className="callout-title">{title}</p>
      <div className="callout-body">{props.children}</div>
    </aside>
  );
}
