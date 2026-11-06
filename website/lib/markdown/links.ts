import type { Element, Root } from "hast";
import path from "node:path";
import { NUMBERED_FILE_PATTERN, SOURCES_FILE, SUBJECT_DIR_PATTERN, SUBJECT_FILE } from "@/lib/content/schema";
import { CONTENT_REPO_PATH, GITHUB_BLOB_URL } from "@/lib/site";
import { visit } from "unist-util-visit";

/**
 * Übersetzt einen Pfad relativ zum Content-Root (POSIX, z. B. `faecher/01-grundlagen-it/02-x.md`)
 * in eine Website-Route. Gibt `null` zurück, wenn es keine passende Route gibt.
 */
export function contentPathToRoute(relPath: string): string | null {
  const clean = relPath.replace(/\\/g, "/").replace(/^\.\//, "").replace(/\/+$/, "");
  if (clean === "" || clean === ".") return "/";
  if (clean === "prolog.md") return "/prolog";
  const parts = clean.split("/");
  if (parts[0] !== "faecher") return null;
  if (parts.length === 1) return "/";
  const dir = SUBJECT_DIR_PATTERN.exec(parts[1]);
  if (!dir) return null;
  const base = `/${dir[2]}`;
  if (parts.length === 2) return base;
  if (parts.length === 3) {
    if (parts[2] === SUBJECT_FILE) return base;
    if (parts[2] === SOURCES_FILE) return `${base}/quellen`;
    const chapter = NUMBERED_FILE_PATTERN.exec(parts[2]);
    if (chapter) return `${base}/${chapter[2]}`;
  }
  return null;
}

const EXTERNAL = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;

/**
 * Löst einen Link aus einer Markdown-Datei auf.
 * @param href Link-Ziel wie im Markdown geschrieben
 * @param sourcePath Pfad der Quelldatei relativ zum Content-Root (POSIX)
 */
export function resolveContentHref(href: string, sourcePath: string | undefined): string {
  if (!href || href.startsWith("#") || EXTERNAL.test(href) || href.startsWith("/")) return href;
  if (!sourcePath) return href;

  const hashIndex = href.indexOf("#");
  const target = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : "";
  let decoded = target;
  try {
    decoded = decodeURI(target);
  } catch {
    // ungültige Kodierung: Pfad unverändert verwenden
  }

  const resolved = path.posix.normalize(path.posix.join(path.posix.dirname(sourcePath), decoded));
  if (!resolved.startsWith("../")) {
    const route = contentPathToRoute(resolved);
    if (route) return `${route}${hash}`;
  }
  // Datei ohne eigene Seite: auf GitHub zeigen (Pfad relativ zur Repo-Wurzel).
  const repoPath = path.posix.normalize(path.posix.join(CONTENT_REPO_PATH, resolved));
  if (repoPath.startsWith("../")) return href;
  return `${GITHUB_BLOB_URL}/${repoPath}${hash}`;
}

/** rehype-Plugin: schreibt `.md`-Links auf Website-Routen um und öffnet externe Links sicher. */
export function rehypeContentLinks(options: { sourcePath?: string }) {
  return (tree: Root) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName !== "a") return;
      const href = node.properties?.href;
      if (typeof href !== "string") return;
      const next = resolveContentHref(href, options.sourcePath);
      node.properties = { ...node.properties, href: next };
      if (/^https?:\/\//i.test(next)) {
        node.properties.target = "_blank";
        node.properties.rel = ["noopener", "noreferrer"];
      }
    });
  };
}
