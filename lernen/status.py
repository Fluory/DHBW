#!/usr/bin/env python3
"""Lernstatus aller Fächer: fällige Wiederholungen und Fortschritt.

  python3 -I lernen/status.py                     Stand heute (Europe/Berlin)
  python3 -I lernen/status.py 2026-10-20          Stand an einem bestimmten Tag
  python3 -I lernen/status.py --plot datei.png    zusätzlich Fortschrittsgrafik (braucht matplotlib)
  python3 -I lernen/status.py --karten            zusätzlich Themenkarte je Fach (grafiken/themenkarte.png)

Liest lernen/*/lernplan.md: die Themenzeilen „| T01 | … |“ (Spalten laut Tabellenkopf)
und den Kommentar <!-- klausur: JJJJ-MM-TT -->.

Wiederholungsstufen: 1 → 3 → 7 → 14 → 30 Tage. Ein Fehler setzt auf Stufe 1 zurück.
"""
import re
import sys
from datetime import date, datetime
from pathlib import Path
from zoneinfo import ZoneInfo

LERNEN = Path(__file__).resolve().parent
ABSTAND = {1: 1, 2: 3, 3: 7, 4: 14, 5: 30}
KURZ = {"grundlagen-it": "Grundlagen IT", "wirtschaftsinformatik": "Einführung WI",
        "programmierung": "Programmierung", "recht": "Recht", "bwl": "BWL", "marketing": "Marketing",
        "mathematik": "Mathe I", "lernen-praesentieren-kommunizieren": "LPK (Portfolio)"}
WOCHENTAG = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"]


def zellen(line):
    return [z.strip() for z in re.split(r"(?<!\\)\|", line.strip()[1:-1])]


def datum(text):
    m = re.search(r"(\d{1,2})\.(\d{1,2})\.(\d{4})", text)
    return date(int(m.group(3)), int(m.group(2)), int(m.group(1))) if m else None


def lies_plan(pfad):
    text = pfad.read_text(encoding="utf-8")
    name = re.search(r"^# Lernplan: (.+)$", text, re.M).group(1).strip()
    m = re.search(r"<!-- klausur: (\d{4}-\d{2}-\d{2}) -->", text)
    klausur = date.fromisoformat(m.group(1)) if m else None
    vorlaeufig = "**Vorläufig:**" in text
    themen, kopf, kapitel = [], None, ""
    for line in text.splitlines():
        s = line.strip()
        if line.startswith("## "):
            kopf = None
        if line.startswith("### "):
            kapitel = line[4:].strip()
        if s.startswith("| Nr |"):
            kopf = zellen(s)
        elif kopf and re.match(r"^\|\s*T\d+\s*\|", s):
            z = dict(zip(kopf, zellen(s)))
            stufe = re.sub(r"\D", "", z.get("Stufe", ""))
            themen.append({
                "nr": z["Nr"], "thema": z["Thema"],
                "relevanz": z.get("Relevanz", ""),
                "min": int(re.sub(r"\D", "", z.get("Min", "")) or 0),
                "status": z.get("Status", "neu").lower(),
                "stufe": int(stufe) if stufe else None,
                "naechste": datum(z.get("Nächste Wdh.", "")),
                "wartet": vorlaeufig or "material folgt" in z["Thema"].lower(),
                "kapitel": kapitel,
            })
    return {"ordner": pfad.parent.name, "name": name, "klausur": klausur, "themen": themen,
            "vorlaeufig": vorlaeufig}


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    plot = sys.argv[sys.argv.index("--plot") + 1] if "--plot" in sys.argv else None
    if plot in args:
        args.remove(plot)
    heute = date.fromisoformat(args[0]) if args else datetime.now(ZoneInfo("Europe/Berlin")).date()

    plaene = [lies_plan(p) for p in sorted(LERNEN.glob("*/lernplan.md"))]
    plaene.sort(key=lambda p: p["klausur"] or date.max)

    print(f"Stand: {WOCHENTAG[heute.weekday()]} {heute:%d.%m.%Y}\n")
    faellig = []
    for p in plaene:
        for t in p["themen"]:
            if t["naechste"] and t["naechste"] <= heute:
                faellig.append((t["naechste"], p, t))
    faellig.sort(key=lambda x: (x[0], x[1]["klausur"] or date.max))
    print(f"## Fällige Wiederholungen ({len(faellig)})\n")
    if faellig:
        print("| Fach | Nr | Thema | Stufe | fällig seit |")
        print("|---|---|---|---|---|")
        for d, p, t in faellig:
            seit = (heute - d).days
            print(f"| {p['name']} | {t['nr']} | {t['thema']} | {t['stufe'] or '–'} | "
                  f"{'heute' if seit == 0 else f'{seit} Tag(en)'} |")
    else:
        print("Keine.")

    print("\n## Fortschritt\n")
    print("| Fach | Prüfung | noch | Themen | neu | gelernt | sicher | warten auf Material | Lernzeit gelernt |")
    print("|---|---|---|---|---|---|---|---|---|")
    for p in plaene:
        ts = p["themen"]
        neu = sum(1 for t in ts if t["status"].startswith("neu") and not t["wartet"])
        gel = sum(1 for t in ts if t["status"].startswith("gelernt"))
        sic = sum(1 for t in ts if t["status"].startswith("sicher"))
        wart = sum(1 for t in ts if t["wartet"] and t["status"].startswith("neu"))
        m_ges = sum(t["min"] for t in ts)
        m_gel = sum(t["min"] for t in ts if not t["status"].startswith("neu"))
        kl = p["klausur"]
        print(f"| {p['name']} | {kl:%d.%m.} | {(kl - heute).days} T. | {len(ts)} | {neu} | {gel} | {sic} | {wart} | "
              f"{m_gel} / {m_ges} Min. |")

    kommend = sorted(((t["naechste"], p, t) for p in plaene for t in p["themen"]
                      if t["naechste"] and t["naechste"] > heute), key=lambda x: x[0])[:5]
    if kommend:
        print("\n## Als Nächstes fällig\n")
        for d, p, t in kommend:
            print(f"- {d:%d.%m.}: {p['name']} {t['nr']} {t['thema']}")

    if plot:
        zeichne(plaene, heute, plot)
        print(f"\nGrafik: {plot}")
    if "--karten" in sys.argv:
        for p in plaene:
            ziel = LERNEN / p["ordner"] / "grafiken" / "themenkarte.png"
            karte(p, heute, ziel)
            print(f"Themenkarte: {ziel.relative_to(LERNEN.parent)}")


def zeichne(plaene, heute, ziel):
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt

    farben = {"sicher": "#2e7d32", "gelernt": "#f9a825", "neu": "#b0bec5", "wartet": "#eceff1"}
    fig, ax = plt.subplots(figsize=(9, 0.55 * len(plaene) + 1.8), dpi=150)
    namen = []
    for i, p in enumerate(reversed(plaene)):
        ts = p["themen"]
        werte = {
            "sicher": sum(1 for t in ts if t["status"].startswith("sicher")),
            "gelernt": sum(1 for t in ts if t["status"].startswith("gelernt")),
            "neu": sum(1 for t in ts if t["status"].startswith("neu") and not t["wartet"]),
            "wartet": sum(1 for t in ts if t["wartet"] and t["status"].startswith("neu")),
        }
        links = 0
        for k in ("sicher", "gelernt", "neu", "wartet"):
            ax.barh(i, werte[k], left=links, color=farben[k], edgecolor="white",
                    hatch="//" if k == "wartet" else None, label=k if i == 0 else None)
            links += werte[k]
        kl = p["klausur"]
        ax.text(links + 0.6, i, f"{kl:%d.%m.} · noch {(kl - heute).days} T.", va="center", fontsize=8, color="#37474f")
        namen.append(KURZ.get(p["ordner"], p["name"]))
    ax.set_yticks(range(len(plaene)), namen, fontsize=9)
    ax.set_xlabel("Themen")
    ax.set_xlim(0, max(len(p["themen"]) for p in plaene) + 14)
    ax.legend(["sicher", "gelernt", "neu", "wartet auf Material"], loc="lower right", bbox_to_anchor=(1, 1.0),
              ncol=4, fontsize=8, frameon=False)
    ax.set_title(f"Lernfortschritt – Stand {heute:%d.%m.%Y}", fontsize=11, loc="left", pad=22)
    for s in ("top", "right"):
        ax.spines[s].set_visible(False)
    fig.tight_layout()
    fig.savefig(ziel)
    plt.close(fig)
    klein(ziel)


def kurz(thema, breite=27, zeilen=3):
    import textwrap
    t = re.sub(r"\s*\(Material folgt[^)]*\)", "", thema)
    t = re.sub(r"\s+–\s+vermutet:.*$", "", t)
    t = re.sub(r"[`*]", "", t)
    z = textwrap.wrap(t, breite)
    if len(z) > zeilen:
        z = z[:zeilen]
        z[-1] = z[-1][: breite - 2].rstrip(" ,;:") + " …"
    return "\n".join(z)


def karte(plan, heute, ziel):
    """Themenkarte: Kapitel als Spalten, Themen als Kästchen (Farbe = Relevanz, Rand = Status)."""
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    from matplotlib.patches import FancyBboxPatch

    fuell = {"hoch": "#ffcdd2", "mittel": "#fff3c4", "niedrig": "#eceff1", "offen": "#e3f2fd"}
    rand = {"hoch": "#c62828", "mittel": "#f9a825", "niedrig": "#90a4ae", "offen": "#64b5f6"}
    spalten = []  # (kapitel, [themen])
    for t in plan["themen"]:
        if not spalten or spalten[-1][0] != t["kapitel"] or len(spalten[-1][1]) >= 9:
            fort = bool(spalten) and spalten[-1][0] == t["kapitel"]
            spalten.append((t["kapitel"], [], fort))
        spalten[-1][1].append(t)
    pro_reihe = 5
    W, H, G, KOPF = 3.0, 0.78, 0.14, 0.62
    reihen = [spalten[i:i + pro_reihe] for i in range(0, len(spalten), pro_reihe)]
    hoehen = [KOPF + G + max(len(sp[1]) for sp in r) * (H + G) for r in reihen]
    breite = min(pro_reihe, len(spalten)) * (W + G) + G
    gesamt = sum(hoehen) + 0.5 * (len(reihen) - 1) + 1.6
    fig = plt.figure(figsize=(breite * 1.05, gesamt * 1.05), dpi=140)
    ax = fig.add_axes([0, 0, 1, 1])
    ax.set_xlim(0, breite)
    ax.set_ylim(-gesamt, 0)
    ax.axis("off")
    kl = plan["klausur"]
    titel = f"{plan['name']} – Themenkarte"
    unter = f"Prüfung {kl:%d.%m.%Y} · noch {(kl - heute).days} Tage · Stand {heute:%d.%m.%Y}"
    if plan.get("vorlaeufig"):
        unter += " · vorläufig (nach Modulhandbuch)"
    ax.text(G, -0.35, titel, fontsize=13, fontweight="bold", va="center", color="#1a237e")
    ax.text(G, -0.8, unter, fontsize=8.5, va="center", color="#455a64")
    y0 = -1.2
    for r, hoehe in zip(reihen, hoehen):
        for i, (kap, ts, fort) in enumerate(r):
            x = G + i * (W + G)
            ax.add_patch(FancyBboxPatch((x, y0 - KOPF), W, KOPF, boxstyle="round,pad=0,rounding_size=0.08",
                                        fc="#37474f", ec="#263238"))
            ax.text(x + W / 2, y0 - KOPF / 2, kurz(kap + (" (Forts.)" if fort else ""), 30, 2), ha="center",
                    va="center", fontsize=7.5, color="white", fontweight="bold")
            for j, t in enumerate(ts):
                y = y0 - KOPF - G - j * (H + G) - H
                rel = next((k for k in fuell if t["relevanz"].lower().find(k) != -1 and
                            t["relevanz"].lower().find(k) < 8), "offen")
                if t["wartet"] and not plan.get("vorlaeufig"):
                    fc, ec, ls = "white", "#90a4ae", (0, (3, 2))
                else:
                    fc, ec, ls = fuell[rel], rand[rel], "solid"
                lw = 1.0
                if t["status"].startswith("sicher"):
                    ec, lw = "#2e7d32", 2.6
                elif t["status"].startswith("gelernt"):
                    ec, lw = "#1565c0", 2.2
                ax.add_patch(FancyBboxPatch((x, y), W, H, boxstyle="round,pad=0,rounding_size=0.06",
                                            fc=fc, ec=ec, lw=lw, ls=ls))
                ax.text(x + 0.08, y + H - 0.12, t["nr"], fontsize=7, fontweight="bold", va="top", color="#263238")
                marke = {"sicher": "✓ sicher", "gelernt": "● gelernt"}.get(t["status"].split()[0], "")
                if marke:
                    ax.text(x + W - 0.08, y + H - 0.12, marke, fontsize=6.5, va="top", ha="right",
                            color="#2e7d32" if marke.startswith("✓") else "#1565c0", fontweight="bold")
                ax.text(x + 0.5, y + H / 2 - 0.02, kurz(t["thema"]), fontsize=6.6, va="center", color="#212121",
                        linespacing=1.15)
        y0 -= hoehe + 0.5
    # Legende
    lx, ly = G, -gesamt + 0.35
    eintraege = [("hoch", fuell["hoch"], rand["hoch"], "solid"), ("mittel", fuell["mittel"], rand["mittel"], "solid"),
                 ("niedrig", fuell["niedrig"], rand["niedrig"], "solid")]
    if plan.get("vorlaeufig"):
        eintraege = [("Relevanz offen", fuell["offen"], rand["offen"], "solid")]
    eintraege += [("Material folgt", "white", "#90a4ae", (0, (3, 2))), ("gelernt", "white", "#1565c0", "solid"),
                  ("sicher", "white", "#2e7d32", "solid")]
    for name, fc, ec, ls in eintraege:
        ax.add_patch(FancyBboxPatch((lx, ly - 0.12), 0.35, 0.24, boxstyle="round,pad=0,rounding_size=0.04",
                                    fc=fc, ec=ec, lw=1.8 if name in ("gelernt", "sicher") else 1, ls=ls))
        ax.text(lx + 0.45, ly, name, fontsize=7.5, va="center", color="#37474f")
        lx += 0.6 + 0.075 * len(name) + 0.3
    ziel.parent.mkdir(parents=True, exist_ok=True)
    fig.savefig(ziel)
    plt.close(fig)
    klein(ziel)


def klein(pfad):
    """PNG auf 64-Farben-Palette reduzieren (hält das Repo klein)."""
    try:
        from PIL import Image
    except ImportError:
        return
    with Image.open(pfad) as im:
        im.convert("RGB").quantize(colors=64, method=Image.Quantize.MEDIANCUT).save(pfad, optimize=True)


if __name__ == "__main__":
    main()
