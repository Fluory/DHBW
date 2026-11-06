import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_COOKIE, getSitePassword, isAuthorized } from "@/lib/auth";

const OPEN_PATHS = new Set(["/login", "/api/login"]);

/**
 * Schützt die ganze Website mit einem gemeinsamen Passwort. Ohne gesetztes `SITE_PASSWORD`
 * bleibt die Seite im Betrieb gesperrt (fail closed); nur `next dev` läuft ohne Passwort.
 */
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  if (OPEN_PATHS.has(pathname)) return NextResponse.next();

  const password = getSitePassword();
  if (!password) {
    if (process.env.NODE_ENV === "development") return NextResponse.next();
    return new NextResponse("Zugang ist nicht eingerichtet (SITE_PASSWORD fehlt).", {
      status: 503,
      headers: { "Cache-Control": "no-store" },
    });
  }

  if (isAuthorized(request.cookies.get(AUTH_COOKIE)?.value, password)) {
    const response = NextResponse.next();
    response.headers.set("Cache-Control", "private, no-store");
    return response;
  }

  const login = new URL("/login", request.url);
  if (pathname !== "/") login.searchParams.set("next", `${pathname}${search}`);
  return NextResponse.redirect(login);
}

export const config = {
  // Statische Next-Dateien (Schriften, Skripte, CSS) und das Icon brauchen keinen Login.
  matcher: ["/((?!_next/static|_next/image|icon.svg).*)"],
};
