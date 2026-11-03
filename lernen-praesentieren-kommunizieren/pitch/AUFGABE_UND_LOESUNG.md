# Rent your Child – Aufgabe und Lösung

Pitch-Website für die LPK-Portfolio-Präsentation (Geschäftsidee pitchen, 02.11.2026).

---

## Aufgabe

### Ursprünglicher Prompt (Florian)

> Mach eine animierte story telling website und landing page zu der startupmidee rent your child, wo man sein kind für ein tag oder tage vermieten kann. Derjenige der sein kind vermietet wird sie los und der mieter kann kinder haben aber nicht für immer.
> Nutze three js
> Animationen gasp
> Css
> Nutze motion graphics und motion design und bildgenerierung

### Ausgearbeiteter Auftrag (an den bauenden Agenten)

> Build an animated storytelling website + landing page for a FICTIONAL, tongue-in-cheek startup pitch idea "Rent your Child" (German-language site), for a university presentation exercise (DHBW, Fach "Lernen, Präsentieren, Kommunizieren", task: "Geschäftsidee pitchen" to decision makers/investors). Concept as the student describes it: parents can rent out their child for a day or a few days and get a break; renters get to "have kids" for a while, but not forever (test-drive parenthood). Keep it humorous and charming, but build a credible, prominent SAFETY concept into the product and story, because that is the first investor question: verified renters (Identitätsprüfung, erweitertes Führungszeugnis, Interview, Bewertungen), the child is asked and can say no (Kind-Veto), parents reachable 24/7 with live check-ins, short first dates only in daytime and in public/at the family's place before any longer stay, emergency button, insurance, trained "Familien-Coaches". Absolutely nothing sexualized; children shown only as friendly stylized illustrations, never photos. Add a small visible footer/banner "Fiktive Geschäftsidee – Pitch-Übung an der DHBW Heilbronn, kein echtes Angebot."
>
> Tech: single self-contained HTML file. Use three.js for a 3D hero scene (e.g. floating stylized toy blocks/balloons/a little low-poly house that reacts to scroll and mouse), GSAP 3.12.5 + ScrollTrigger for scroll-driven storytelling and motion graphics (pinned sections, text reveals, counters, SVG path drawing, morphing shapes), plus CSS. No image generation available: create all visuals procedurally (three.js geometry, inline SVG illustrations, CSS gradients). Fonts from Google Fonts only. Design: modern, warm, playful, light background with pleasant colors (avoid green as a main color), great typography, mobile responsive (no horizontal scroll at 375px), respects prefers-reduced-motion.
>
> Story structure (Heldenreise / storytelling; protagonist with a goal who must change; "make me care"): 1) Hook: "Einmal Eltern sein – aber nur bis Sonntag?" 2) Problem: exhausted parents, curious non-parents unsure about kids 3) Meet the two heroes (Lena, Mutter von 2, braucht ein Wochenende; Tim & Jonas, wollen wissen, ob Kinder was für sie sind) 4) Solution: how it works in 3 steps 5) Safety first section 6) Business model, market, competition 7) Traction/roadmap (fictional, labelled), team 8) The Ask (e.g. 500.000 € Seed für 10 %) 9) CTA + closing line that repeats the core message. Include a sticky progress indicator and a "Pitch-Modus" toggle that switches to full-screen slide-by-slide navigation with arrow keys.
>
> Verify by rendering with Playwright at 1440px and 390px: no console errors, take screenshots, look at them, fix layout issues.

### Nachträgliche Änderungswünsche

1. Team-/Gründer-Abschnitt entfernen.
2. Zu viele Folien für zu wenig Inhalt – unnötige Folien streichen.
3. Zusammenführungsfolie (Wendepunkt) zurückholen und deren Animation langsamer machen.
4. Sicherheitsfolie entfernen, Marktfolie zurückholen.
5. Handy-Demo (Live-Check-in) behalten, aber nicht als eigene Folie, sondern in eine bestehende Folie einbauen.
6. Preisberechnung (Preis pro Stufe) auf die Geschäftsmodell-Folie; den Satz „Eltern bekommen nichts“ wieder entfernen.
7. Sprechtext zusammenhängend, max. 2:30 Minuten, mit Produktformat (App).

---

## Lösung

- **Website:** [`rent-your-child.html`](rent-your-child.html) – eine Datei, three.js 0.160.0 (3D-Hero), GSAP 3.12.5 + ScrollTrigger, Google Fonts; Pitch-Modus mit Taste **P**, Pfeiltasten blättern, **Esc** beendet.
- **Online-Version:** https://claude.ai/artifact/GabwEMakxViciWZqcRkoWu (privat, über das Teilen-Menü freigeben)
- **Sprechtext (max. 2:30):** [`../vorbereitung/sprechskript_kurz.md`](../vorbereitung/sprechskript_kurz.md)
- **Ausführliche Pitch-Vorbereitung** (Zielgruppe, Storyline, kritische Fragen, Stakeholder): [`../vorbereitung/pitch_rent_your_child.md`](../vorbereitung/pitch_rent_your_child.md)

### Aufbau der finalen Version (9 Folien)

| Nr | Folie | Inhalt / Motion |
|---|---|---|
| 1 | Hook | „Einmal Eltern sein – aber nur bis Sonntag?“, 3D-Insel mit Spielzeughaus, Buchstabenwürfeln, Ballons (three.js, folgt Maus und Scroll) |
| 2 | Problem | „Eltern am Limit“ vs. „Neugierige ohne Testlauf“, Zähler, leerlaufender Akku (illustrative Zahlen) |
| 3 | Helden | Lena (Pflegekraft, 2 Kinder) und Tim & Jonas als SVG-Figuren |
| 4 | Wendepunkt | gepinnte Szene, ca. 9 s im Pitch-Modus: Lena → Tim & Jonas → Mia & Ben → Bogen und Herz |
| 5 | Lösung + Handy-Demo | 3 Schritte (Prüfen & Matchen, Kennenlernen, Familienzeit) links, rechts App-Mockup mit einlaufenden Live-Check-ins und Notfall-Knopf |
| 6 | Geschäftsmodell | 18 % Provision, Abo „Familien-Plus“ 12,99 €, Versicherungspartner; Preisbox Stufe 1–4 (25 / 60 / 120 / 250 €, +50 % je weiteres Kind, Ø 120 €); CAC 35 €, LTV 210 €, LTV/CAC 6× (fiktiv) |
| 7 | Markt & Wettbewerb | TAM/SAM/SOM-Kreise (~8 Mio. / ~2,4 Mio. / 24.000 Familien), Positionierungsmatrix gegen Babysitter-Plattformen, Au-pair, Freunde & Nachbarn |
| 8 | Ask | 500.000 € für 10 % (5 Mio. € Post-Money), Donut zur Mittelverwendung (40 % Sicherheit) |
| 9 | Happy End | Auflösung für Lena, Tim & Jonas, Mia & Ben; Kernbotschaft wiederholt |

Alle Zahlen sind fiktiv und auf der Seite so gekennzeichnet. Dauerhafter Hinweis unten links: „Fiktive Geschäftsidee – Pitch-Übung an der DHBW Heilbronn, kein echtes Angebot.“

### Geprüft

Headless Chromium (Playwright) bei 1440 px und 390 px: keine JavaScript-Fehler, kein horizontales Scrollen, Pitch-Modus läuft bis „9 / 9“.

### Hinweise

- Braucht Internet (three.js, GSAP und Schriften kommen per CDN). Ohne WebGL zeigt der Hero einen Verlauf statt der 3D-Szene.
- Bilder werden nicht generiert, alle Visuals entstehen im Code (three.js, SVG, CSS).
