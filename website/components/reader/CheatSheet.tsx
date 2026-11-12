import type { Root } from "hast";
import { Markdown } from "@/components/reader/Markdown";
import { keepHeadingsWithNext } from "@/lib/markdown/keep";

interface CheatSheetProps {
  /** Kleine Zeile über dem Titel, z. B. „GIT · Kapitel 04 · Spickzettel“. */
  kicker: string;
  title: string;
  tree: Root;
  /** Überschriftenebene des Titels: h1 auf der Einzelseite, h2 in der Sammlung. */
  level?: 1 | 2;
  id?: string;
  /** Fußzeile, z. B. „Semester 1 · Grundlagen der IT · Kapitel 04“. */
  foot?: string;
}

/** Ein Spickzettel als eine DIN-A4-Seite: Kopfzeile und zweispaltiger, dichter Text. */
export function CheatSheet({ kicker, title, tree, level = 1, id, foot }: CheatSheetProps) {
  const Title = level === 1 ? "h1" : "h2";
  return (
    <article className="sheet" aria-labelledby={id ? `${id}-titel` : undefined}>
      <header className="sheet-head">
        <p className="label sheet-kicker">{kicker}</p>
        <Title className="sheet-title" id={id ? `${id}-titel` : undefined}>
          {title}
        </Title>
      </header>
      <div className="prose sheet-body">
        <Markdown tree={keepHeadingsWithNext(tree)} />
      </div>
      {foot ? <p className="sheet-foot">{foot}</p> : null}
    </article>
  );
}
