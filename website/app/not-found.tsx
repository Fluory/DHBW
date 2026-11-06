import Link from "next/link";

export default function NotFound() {
  return (
    <main id="inhalt" className="page not-found">
      <p className="label kicker">Fehler 404</p>
      <h1 className="page-title">Diese Seite gibt es nicht.</h1>
      <p className="page-lead">Vielleicht ist das Kapitel noch nicht geschrieben oder der Link hat sich geändert.</p>
      <p>
        <Link href="/" className="button">
          Zur Übersicht →
        </Link>
      </p>
    </main>
  );
}
