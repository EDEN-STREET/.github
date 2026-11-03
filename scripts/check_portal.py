#!/usr/bin/env python3
"""EDEN Suite – offline, read-only documentation and preview validation."""
from __future__ import annotations
import json, re, sys, xml.etree.ElementTree as ET
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT=Path(__file__).resolve().parents[1]
DOCS=ROOT/"docs"
failures=[]
stats={"workflow_count":0,"area_count":0,"preview_count":0,"valid_svg":0,"links_checked":0}
LINK=re.compile(r"\]\(([^)]+)\)")
ATTR=re.compile(r"\b(?:src|href)\s*=\s*['\"]([^'\"]+)['\"]",re.I)

def check_link(source:Path,link:str):
    link=link.strip()
    if not link or link.startswith(("#","mailto:","data:","javascript:","//")): return
    if "$"+"{" in link or link.startswith(("http:","https:")): return
    link=link.strip("<>").split(' "',1)[0]
    parsed=urlsplit(link)
    if not parsed.path or parsed.scheme or parsed.path.startswith("/"): return
    target=(source.parent/unquote(parsed.path)).resolve()
    try: target.relative_to(ROOT)
    except ValueError:
        failures.append(str(source.relative_to(ROOT))+": path escapes repository: "+link)
        return
    if target.suffix.lower() not in {".md",".html",".svg",".js",".css",".json",".txt",".png",".jpg",".pdf"}: return
    stats["links_checked"]+=1
    if not target.is_file():
        failures.append(str(source.relative_to(ROOT))+": missing "+link)

def check_manifest():
    p=DOCS/"workflows"/"manifest.json"
    data=json.loads(p.read_text(encoding="utf-8"))
    workflows=data.get("workflows",[])
    stats["workflow_count"]=len(workflows)
    if len(workflows)!=17: failures.append("Expected 17 workflows")
    seen=set()
    for w in workflows:
        wid=w.get("id")
        if wid in seen: failures.append("Duplicate workflow "+str(wid))
        seen.add(wid)
        if w.get("execution_mode")!="SIMULATION_ONLY": failures.append(str(wid)+" not DEMO")
        for key in ("prompt","visualization","preview","area_guidance"):
            name=w.get(key,"").split("?",1)[0]
            if not name or not (ROOT/name).is_file(): failures.append(str(wid)+": missing "+key+" "+name)
        if len(w.get("required_gates",[]))<4: failures.append(str(wid)+": too few gates")

def check_areas():
    names="suite terminal laptop router mobile wiki handbuch builder academy projects setup quellen toolbox grimoire testlab".split()
    stats["area_count"]=len(names)
    for name in names:
        for path in (DOCS/"areas"/name/"README.md",DOCS/"areas"/name/"llms.txt",DOCS/"media"/"previews"/(name+".svg")):
            if not path.is_file(): failures.append("Missing "+str(path.relative_to(ROOT)))
        if (DOCS/"media"/"previews"/(name+".svg")).is_file(): stats["preview_count"]+=1
    for name in "index.html wiki.html handbuch.html projects.html setup.html builder.html quellen.html toolbox.html grimoire.html testlab.html eden-hub.css projects.js".split():
        if not (DOCS/"legacy"/name).is_file(): failures.append("Legacy dependency missing: "+name)

def check_svgs():
    for p in DOCS.rglob("*.svg"):
        try:
            root=ET.parse(p).getroot()
            if not root.tag.endswith("svg"): failures.append(str(p)+": not SVG")
            if not any(x.tag.endswith("title") for x in root.iter()):
                failures.append(str(p)+": missing title")
            stats["valid_svg"]+=1
        except ET.ParseError as e: failures.append(str(p)+": XML: "+str(e))

def check_docs():
    for p in ROOT.rglob("*"):
        if not p.is_file() or p.suffix.lower() not in (".md",".html"): continue
        text=p.read_text(encoding="utf-8")
        refs={m.group(1) for m in LINK.finditer(text)}
        refs|={m.group(1) for m in ATTR.finditer(text)}
        for ref in sorted(refs): check_link(p,ref)

def main():
    if not DOCS.is_dir(): return 2
    try:
        check_manifest()
        check_areas()
        check_svgs()
        check_docs()
    except (OSError,UnicodeError,ValueError) as e: failures.append(type(e).__name__+": "+str(e))
    result={"project":"EDEN Suite","mode":"READ_ONLY_STATIC_VALIDATION","stats":stats,
        "errors":failures,"result":"PASS" if not failures else "FAIL",
        "browser_e2e":"NOT_RUN","hardware_tests":"NOT_RUN","pages_deployment":"NOT_VERIFIED"}
    print(json.dumps(result,ensure_ascii=False,indent=2))
    return 0 if not failures else 1

if __name__=="__main__": sys.exit(main())
