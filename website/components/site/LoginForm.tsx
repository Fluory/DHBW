"use client";

import { useSearchParams } from "next/navigation";
import { safeNext } from "@/lib/auth";

/** Formular der Anmeldeseite. Fehler und Ziel kommen aus der Adresse, weil die Seite statisch ist. */
export function LoginForm() {
  const params = useSearchParams();
  const fehler = params.get("fehler");
  const target = safeNext(params.get("next") ?? undefined);

  return (
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
  );
}
