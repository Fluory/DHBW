#!/usr/bin/env python3
"""Termine eines Tages aus dem Stundenplan, mit Fach-Zuordnung.

  python3 -I tools/heute.py              heute (Europe/Berlin)
  python3 -I tools/heute.py 2026-10-09   bestimmter Tag

Gibt JSON aus. Zusätzlich pro Fach: wievielter Termin des Fachs das ist und
wann der letzte Termin davor war.
"""
import json
import os
import re
import sys
from datetime import date, datetime
from zoneinfo import ZoneInfo

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ICS = os.path.join(ROOT, "stundenplan", "DHBW_DS26A2_1Semester.ics")


def unescape(v):
    return v.replace("\\,", ",").replace("\\;", ";").replace("\\n", "\n").replace("\\\\", "\\")


def events():
    with open(ICS, encoding="utf-8") as f:
        text = re.sub(r"\r?\n[ \t]", "", f.read())  # gefaltete Zeilen zusammenführen
    for block in re.findall(r"BEGIN:VEVENT(.*?)END:VEVENT", text, re.S):
        ev = {}
        for line in block.strip().splitlines():
            key, _, val = line.partition(":")
            ev[key.split(";")[0]] = unescape(val)
            if key.startswith("DTSTART") and "VALUE=DATE" in key:
                ev["GANZTAGS"] = True
        start = ev["DTSTART"]
        ev["datum"] = f"{start[:4]}-{start[4:6]}-{start[6:8]}"
        if not ev.get("GANZTAGS"):
            ev["von"] = f"{start[9:11]}:{start[11:13]}"
            ev["bis"] = f"{ev['DTEND'][9:11]}:{ev['DTEND'][11:13]}"
        yield ev


def main():
    tag = sys.argv[1] if len(sys.argv) > 1 else datetime.now(ZoneInfo("Europe/Berlin")).date().isoformat()
    with open(os.path.join(ROOT, "faecher.json"), encoding="utf-8") as f:
        cfg = json.load(f)
    alle = sorted(events(), key=lambda e: (e["datum"], e.get("von", "")))
    heute = []
    for ev in (e for e in alle if e["datum"] == tag):
        titel = ev.get("SUMMARY", "")
        eintrag = {"titel": titel, "von": ev.get("von"), "bis": ev.get("bis"),
                   "dozent": ev.get("DESCRIPTION"), "ort": ev.get("LOCATION")}
        fach = cfg["faecher"].get(titel)
        if fach:
            tage = sorted({e["datum"] for e in alle if e.get("SUMMARY") == titel})
            frueher = [d for d in tage if d < tag]
            eintrag.update(art="vorlesung", ordner=fach["ordner"], fach=fach["name"], moodle=fach["moodle"],
                           termin_nr=len(frueher) + 1, termine_gesamt=len(tage),
                           letzter_termin=frueher[-1] if frueher else None,
                           naechster_termin=next((d for d in tage if d > tag), None))
        elif re.sub(r"\s*\(.*\)$", "", titel) in cfg["klausuren"]:
            eintrag.update(art="klausur", ordner=cfg["klausuren"][re.sub(r"\s*\(.*\)$", "", titel)])
        else:
            eintrag["art"] = "sonstiges"
        heute.append(eintrag)
    print(json.dumps({"datum": tag, "wochentag": date.fromisoformat(tag).strftime("%A"),
                      "uni": bool(heute), "termine": heute}, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
