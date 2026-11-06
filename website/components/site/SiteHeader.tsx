import Link from "next/link";
import { ThemeToggle } from "@/components/site/ThemeToggle";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="brand">
          <span className="brand-mark label">S1</span>
          <span className="brand-name">Semester 1</span>
        </Link>
        <nav aria-label="Hauptnavigation" className="site-nav">
          <Link href="/prolog" className="label">
            Prolog
          </Link>
          <Link href="/#faecher" className="label">
            Fächer
          </Link>
          <Link href="/#pruefungen" className="label">
            Prüfungen
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p className="label">Wirtschaftsinformatik Data Science · DHBW Heilbronn · Jahrgang 2026</p>
        <p className="footer-note">
          Eigene Lernzusammenfassungen. Verbindlich sind Vorlesung, Skript und Moodle-Kurs.{" "}
          <a href="https://github.com/fluory/dhbw" target="_blank" rel="noopener noreferrer">
            Quelltext auf GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
