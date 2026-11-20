import NextLink from "next/link";
import type { ComponentProps } from "react";

/**
 * Link ohne automatisches Vorladen. Next.js lädt sonst für jeden sichtbaren Link die ganze Zielseite
 * im Hintergrund – auf einer Fachseite Dutzende Kapitel, die nie geöffnet werden. Jede dieser Anfragen
 * läuft durch den Passwortschutz (Rechenzeit, siehe README „Datenverkehr“). Geladen wird erst beim Klick.
 * Alle internen Links nutzen diese Komponente; `tests/transfer.test.ts` prüft das.
 */
export default function Link({ prefetch = false, ...props }: ComponentProps<typeof NextLink>) {
  return <NextLink prefetch={prefetch} {...props} />;
}
