import { handleRequest } from "../lib/auth";

type Context = { request: Request; env: { SITE_PASSWORD?: string }; next: () => Promise<Response> };

/** Cloudflare Pages: Jede Anfrage läuft hier durch, ohne gültigen Login geht es zur Anmeldeseite. */
export const onRequest = ({ request, env, next }: Context) => handleRequest(request, env, next);
