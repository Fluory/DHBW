import { handleLogin } from "../../lib/auth";

type Context = { request: Request; env: { SITE_PASSWORD?: string } };

/** Cloudflare Pages: Login-Formular, setzt bei richtigem Passwort den Cookie. */
export const onRequestPost = ({ request, env }: Context) => handleLogin(request, env);
