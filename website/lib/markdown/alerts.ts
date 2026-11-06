import type { Blockquote, Paragraph, PhrasingContent, Root } from "mdast";
import { toString } from "mdast-util-to-string";
import { visit } from "unist-util-visit";

/** GitHub-Alert-Typen und ihre Bedeutung auf der Website (siehe CONTENT_SPEC.md). */
export const ALERT_TYPES = {
  important: { label: "Das Wichtigste" },
  warning: { label: "Achtung" },
  note: { label: "Beispiel" },
  tip: { label: "Übung" },
  caution: { label: "Nicht klausurrelevant" },
} as const;

export type AlertType = keyof typeof ALERT_TYPES;

const MARKER = /^\s*\[!([A-Za-z]+)\]\s*/;

export interface AlertInfo {
  /** Normalisierter Typ oder `null`, wenn der Marker keinem bekannten Typ entspricht. */
  type: AlertType | null;
  /** Roh-Typ aus dem Marker, z. B. "TIP". */
  rawType: string;
  /** Fettes Label aus der ersten Zeile, falls vorhanden. */
  label: string | null;
}

export function isAlertType(value: unknown): value is AlertType {
  return typeof value === "string" && Object.prototype.hasOwnProperty.call(ALERT_TYPES, value);
}

/** Erkennt einen GitHub-Alert (`> [!TIP]`) in einem Blockzitat, ohne den Baum zu verändern. */
export function detectAlert(node: Blockquote): AlertInfo | null {
  const first = node.children[0];
  if (!first || first.type !== "paragraph") return null;
  const head = first.children[0];
  if (!head || head.type !== "text") return null;
  const match = MARKER.exec(head.value);
  if (!match) return null;
  const rawType = match[1];
  const normalized = rawType.toLowerCase();
  const rest = head.value.slice(match[0].length);

  let label: string | null = null;
  const next = rest.trim() === "" ? first.children[1] : undefined;
  if (next && next.type === "strong") label = toString(next).trim() || null;

  return { type: isAlertType(normalized) ? normalized : null, rawType, label };
}

function stripLeadingBreak(children: PhrasingContent[]): void {
  const head = children[0];
  if (head && head.type === "text") {
    head.value = head.value.replace(/^\s*\n?/, "");
    if (head.value === "") children.shift();
  }
  const br = children[0];
  if (br && br.type === "break") children.shift();
}

/**
 * remark-Plugin: verwandelt GitHub-Alerts in `<aside data-callout="…">`.
 * Das fette Label der ersten Zeile wird entfernt und als `data-label` übergeben.
 */
export function remarkAlerts() {
  return (tree: Root) => {
    visit(tree, "blockquote", (node: Blockquote) => {
      const info = detectAlert(node);
      if (!info || !info.type) return;

      const first = node.children[0] as Paragraph;
      const head = first.children[0];
      if (head.type === "text") {
        head.value = head.value.replace(MARKER, "");
        if (head.value.trim() === "") first.children.shift();
      }
      if (info.label && first.children[0]?.type === "strong") first.children.shift();
      stripLeadingBreak(first.children);
      if (first.children.length === 0) node.children.shift();

      node.data = {
        ...node.data,
        hName: "aside",
        hProperties: {
          dataCallout: info.type,
          dataLabel: info.label ?? ALERT_TYPES[info.type].label,
          className: ["callout", `callout-${info.type}`],
        },
      };
    });
  };
}
