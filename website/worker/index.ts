import { handleLogin, handleRequest } from "../lib/auth";

type Env = { SITE_PASSWORD?: string; ASSETS: { fetch: (request: Request) => Promise<Response> } };

/**
 * Cloudflare Worker mit statischen Assets (wrangler.jsonc): Login-Formular und Passwortschutz,
 * danach liefert ASSETS die fertigen Dateien aus out/. Gleiche Logik wie functions/ für Pages.
 */
const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/api/login") {
      if (request.method !== "POST") return new Response("Method Not Allowed", { status: 405, headers: { Allow: "POST" } });
      return handleLogin(request, env);
    }
    return handleRequest(request, env, () => env.ASSETS.fetch(request));
  },
};

export default worker;
