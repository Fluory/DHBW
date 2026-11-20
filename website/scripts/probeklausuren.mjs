// Macht aus den interaktiven Probeklausuren in klausur/probeklausuren/*.html eigenständige Seiten der Website
// unter public/probeklausur/<slug>.html (mit Doctype, Viewport und einem Link zurück zum Fach).
// Aufruf: node scripts/probeklausuren.mjs   (prüft nur, ob alles aktuell ist: --check)
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..", "..");
const sourceDir = path.join(root, "klausur", "probeklausuren");
const targetDir = path.resolve(import.meta.dirname, "..", "public", "probeklausur");

export const EXAMS = [
  { file: "probeklausur_git.html", slug: "grundlagen-it", fach: "grundlagen-it", short: "GIT" },
  { file: "probeklausur_wi.html", slug: "wirtschaftsinformatik", fach: "wirtschaftsinformatik", short: "WI" },
  { file: "offiziell_programmierung.html", slug: "programmierung-offiziell", fach: "programmierung", short: "PROG" },
  { file: "probeklausur_programmierung.html", slug: "programmierung", fach: "programmierung", short: "PROG" },
  { file: "probeklausur_programmierung_2.html", slug: "programmierung-2", fach: "programmierung", short: "PROG" },
  { file: "probeklausur_recht.html", slug: "recht", fach: "recht", short: "RECHT" },
  { file: "probeklausur_bwl.html", slug: "bwl", fach: "bwl", short: "BWL" },
  { file: "offiziell_bwl.html", slug: "bwl-offiziell", fach: "bwl", short: "BWL" },
  { file: "probeklausur_marketing.html", slug: "marketing", fach: "marketing", short: "MKT" },
  { file: "offiziell_marketing.html", slug: "marketing-offiziell", fach: "marketing", short: "MKT" },
  { file: "probeklausur_mathe.html", slug: "mathematik", fach: "mathematik", short: "MATHE" },
];

const NAV_STYLE = `.site-back { max-width: 860px; margin: 0 auto; padding: 12px 16px 0; font: 14px/1.4 var(--font-body); }
.site-back a { color: var(--accent); text-decoration: none; margin-right: 1rem; }
.site-back a:hover { text-decoration: underline; }
@media print { .site-back { display: none; } }
/* Handy: nichts darf breiter als der Bildschirm werden */
select { max-width: 100%; }
pre { max-width: 100%; overflow-x: auto; }
label, label code { white-space: normal; overflow-wrap: anywhere; }`;

export function wrap(source, exam) {
  const end = source.indexOf("</style>");
  if (end === -1) throw new Error(`${exam.file}: kein </style> gefunden`);
  const head = source
    .slice(0, end)
    .replace(/<meta name="claude:[^"]*"[^>]*>\n?/g, "")
    .trimEnd();
  const body = source.slice(end + "</style>".length).trim();
  return `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
${head}
${NAV_STYLE}
</style>
</head>
<body>
<nav class="site-back" aria-label="Website"><a href="/${exam.fach}">← Zurück zu ${exam.short}</a><a href="/lernplan">Lernplan</a><a href="/">Startseite</a></nav>
${body}
</body>
</html>
`;
}

const check = process.argv.includes("--check");
let stale = 0;
if (import.meta.url === `file://${process.argv[1]}`) {
  fs.mkdirSync(targetDir, { recursive: true });
  for (const exam of EXAMS) {
    const output = wrap(fs.readFileSync(path.join(sourceDir, exam.file), "utf8"), exam);
    const target = path.join(targetDir, `${exam.slug}.html`);
    const current = fs.existsSync(target) ? fs.readFileSync(target, "utf8") : null;
    if (current === output) continue;
    stale += 1;
    if (check) console.log(`veraltet: ${exam.slug}`);
    else {
      fs.writeFileSync(target, output);
      console.log(`geschrieben: public/probeklausur/${exam.slug}.html`);
    }
  }
  if (check && stale > 0) process.exit(1);
}
