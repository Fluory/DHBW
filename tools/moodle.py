#!/usr/bin/env python3
"""Moodle-Zugriff (DHBW Heilbronn) über den Shibboleth-Login.

Liest Zugangsdaten aus MOODLE_USER / MOODLE_PASSWORD. Gibt sie nie aus.

  python3 -I tools/moodle.py courses                 Kurse der Kategorie auflisten
  python3 -I tools/moodle.py course <id>             Abschnitte + Materialien eines Kurses (JSON)
  python3 -I tools/moodle.py download <url> <ziel>   Datei herunterladen (folgt Moodle-Weiterleitungen)
"""
import html
import json
import os
import re
import sys

import requests
from bs4 import BeautifulSoup

BASE = "https://moodle.heilbronn.dhbw.de"
CATEGORY = 2462


def login():
    user, pw = os.environ.get("MOODLE_USER"), os.environ.get("MOODLE_PASSWORD")
    if not user or not pw:
        sys.exit("MOODLE_USER / MOODLE_PASSWORD fehlen in der Umgebung")
    s = requests.Session()
    r = s.get(f"{BASE}/auth/shibboleth/index.php")
    form = BeautifulSoup(r.text, "html.parser").find("form")
    action = requests.compat.urljoin(r.url, form["action"])
    r = s.post(action, data={"j_username": user, "j_password": pw,
                             "_eventId_proceed": "", "donotcache": "1"})
    soup = BeautifulSoup(r.text, "html.parser")
    saml = soup.find("input", {"name": "SAMLResponse"})
    if not saml:
        sys.exit("Login fehlgeschlagen (keine SAMLResponse) – Zugangsdaten prüfen")
    relay = soup.find("input", {"name": "RelayState"})
    s.post(html.unescape(soup.find("form")["action"]),
           data={"SAMLResponse": saml["value"], "RelayState": relay["value"] if relay else ""})
    if "logout.php" not in s.get(f"{BASE}/my/").text:
        sys.exit("Login fehlgeschlagen (keine Moodle-Sitzung)")
    return s


def courses(s):
    soup = BeautifulSoup(s.get(f"{BASE}/course/index.php?categoryid={CATEGORY}").text, "html.parser")
    seen = {}
    for a in soup.select('a[href*="/course/view.php?id="]'):
        cid = re.search(r"id=(\d+)", a["href"]).group(1)
        name = a.get_text(" ", strip=True)
        if name:
            seen[cid] = name
    return [{"id": int(k), "name": v} for k, v in seen.items()]


def course(s, cid):
    soup = BeautifulSoup(s.get(f"{BASE}/course/view.php?id={cid}").text, "html.parser")
    sections = []
    for sec in soup.select("li.section, li[data-for='section']"):
        title = sec.select_one(".sectionname, h3")
        summary = sec.select_one(".summary, .summarytext")
        items = []
        for act in sec.select("li.activity"):
            link = act.select_one("a[href]")
            name = act.select_one(".instancename, .activityname")
            if not link:
                continue
            label = name.get_text(" ", strip=True) if name else link.get_text(" ", strip=True)
            items.append({"name": re.sub(r"\s+(Datei|Verzeichnis|Link/URL|Textseite|Forum|Aufgabe|Test)$", "", label),
                          "type": next((c[len("modtype_"):] for c in act.get("class", []) if c.startswith("modtype_")), ""),
                          "url": link["href"]})
        sections.append({"title": title.get_text(" ", strip=True) if title else "",
                         "summary": summary.get_text(" ", strip=True) if summary else "",
                         "items": items})
    return sections


def download(s, url, dest):
    r = s.get(url, allow_redirects=True)
    ctype = r.headers.get("content-type", "")
    if "text/html" in ctype:
        # Ressourcen-Seite ohne direkte Weiterleitung: eingebetteten Dateilink suchen
        soup = BeautifulSoup(r.text, "html.parser")
        a = soup.select_one('a[href*="pluginfile.php"], object[data*="pluginfile.php"], iframe[src*="pluginfile.php"]')
        if not a:
            with open(dest, "w") as f:
                f.write(soup.select_one("#region-main").get_text("\n", strip=True) if soup.select_one("#region-main") else r.text)
            return dest
        r = s.get(a.get("href") or a.get("data") or a.get("src"))
    name = re.search(r'filename="?([^";]+)', r.headers.get("content-disposition", ""))
    if os.path.isdir(dest):
        dest = os.path.join(dest, name.group(1) if name else os.path.basename(r.url.split("?")[0]))
    with open(dest, "wb") as f:
        f.write(r.content)
    return dest


if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    sess = login()
    cmd = sys.argv[1]
    if cmd == "courses":
        print(json.dumps(courses(sess), ensure_ascii=False, indent=2))
    elif cmd == "course":
        print(json.dumps(course(sess, sys.argv[2]), ensure_ascii=False, indent=2))
    elif cmd == "download":
        print(download(sess, sys.argv[2], sys.argv[3]))
    else:
        sys.exit(__doc__)
