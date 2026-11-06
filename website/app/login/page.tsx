import type { Metadata } from "next";
import { safeNext } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Anmelden",
  robots: { index: false, follow: false },
};

type SearchParams = { fehler?: string; next?: string };

export default async function LoginPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const { fehler, next } = await searchParams;
  const target = safeNext(next);

  return (
    <main id="inhalt" className="page login-page">
      <p className="label kicker">Semester 1</p>
      <h1 className="page-title">Anmelden</h1>
      <p className="page-lead">Diese Seite ist privat. Gib das Passwort ein, um weiterzulesen.</p>

      <form method="post" action="/api/login" className="login-form">
        <input type="hidden" name="next" value={target} />
        <label htmlFor="passwort" className="label">
          Passwort
        </label>
        <input
          id="passwort"
          name="passwort"
          type="password"
          autoComplete="current-password"
          required
          maxLength={200}
          autoFocus
          aria-invalid={fehler ? true : undefined}
          aria-describedby={fehler ? "login-fehler" : undefined}
        />
        {fehler ? (
          <p id="login-fehler" role="alert" className="login-error">
            Das Passwort stimmt nicht.
          </p>
        ) : null}
        <button type="submit" className="button">
          Anmelden
        </button>
      </form>
    </main>
  );
}
