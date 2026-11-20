/**
 * Die Website ist ein statischer Export; der Passwortschutz läuft nur auf Cloudflare Pages
 * (`functions/_middleware.ts`). Auf Vercel gäbe es keinen Schutz: Der Export wäre dort öffentlich.
 * Deshalb bricht der Build auf Vercel ab (Vercel setzt beim Build `VERCEL=1`).
 */
export function assertProtectedHost(env: Record<string, string | undefined>): void {
  if (env.VERCEL) {
    throw new Error(
      "Build auf Vercel abgebrochen: Der statische Export hat dort keinen Passwortschutz (der läuft nur in " +
        "Cloudflare Pages Functions). Siehe README, Abschnitt „Deployment“.",
    );
  }
}
