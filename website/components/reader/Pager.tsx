import Link from "next/link";

export interface PagerLink {
  href: string;
  kicker: string;
  title: string;
}

/** Vor/Zurück am Ende eines Textes. */
export function Pager({ prev, next }: { prev?: PagerLink | null; next?: PagerLink | null }) {
  if (!prev && !next) return null;
  return (
    <nav aria-label="Weiterlesen" className="pager">
      {prev ? (
        <Link href={prev.href} rel="prev" className="pager-link pager-prev">
          <span className="label">← {prev.kicker}</span>
          <span className="pager-title">{prev.title}</span>
        </Link>
      ) : (
        <span aria-hidden="true" />
      )}
      {next ? (
        <Link href={next.href} rel="next" className="pager-link pager-next">
          <span className="label">{next.kicker} →</span>
          <span className="pager-title">{next.title}</span>
        </Link>
      ) : null}
    </nav>
  );
}
