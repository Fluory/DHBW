import type { Metadata } from "next";
import { Suspense } from "react";
import { LoginForm } from "@/components/site/LoginForm";

export const metadata: Metadata = {
  title: "Anmelden",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <main id="inhalt" className="page login-page">
      <p className="label kicker">Semester 1</p>
      <h1 className="page-title">Anmelden</h1>
      <p className="page-lead">Diese Seite ist privat. Gib das Passwort ein, um weiterzulesen.</p>
      <Suspense fallback={null}>
        <LoginForm />
      </Suspense>
    </main>
  );
}
