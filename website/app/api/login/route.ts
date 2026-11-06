import { NextResponse } from "next/server";
import { z } from "zod";
import { AUTH_COOKIE, AUTH_MAX_AGE, getSitePassword, passwordMatches, safeNext, sessionToken } from "@/lib/auth";

const bodySchema = z.object({
  passwort: z.string().min(1).max(200),
  next: z.string().max(500).optional(),
});

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function POST(request: Request) {
  const password = getSitePassword();
  if (!password) return new NextResponse("Zugang ist nicht eingerichtet.", { status: 503 });

  const form = await request.formData().catch(() => null);
  const parsed = bodySchema.safeParse({
    passwort: form?.get("passwort"),
    next: form?.get("next") ?? undefined,
  });
  const next = safeNext(parsed.success ? parsed.data.next : undefined);

  if (!parsed.success || !passwordMatches(parsed.data.passwort, password)) {
    // Kleine Bremse gegen automatisches Durchprobieren.
    await wait(700);
    const retry = new URL("/login", request.url);
    retry.searchParams.set("fehler", "1");
    if (next !== "/") retry.searchParams.set("next", next);
    return NextResponse.redirect(retry, 303);
  }

  const target = new URL(next, request.url);
  // Zweite Absicherung: nie auf eine fremde Herkunft weiterleiten.
  const destination = target.origin === new URL(request.url).origin ? target : new URL("/", request.url);
  const response = NextResponse.redirect(destination, 303);
  response.cookies.set(AUTH_COOKIE, sessionToken(password), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: AUTH_MAX_AGE,
  });
  return response;
}
