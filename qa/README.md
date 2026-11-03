# EDEN Suite · reproduzierbarer visueller Qualitätscheck

**Zweck:** HTML- und UI-Demonstrationen kontrollieren, ohne Geräteänderungen. Die Tests verwenden den Portal-Quellstand des geprüften Branches, nicht stillschweigend die öffentliche Hauptversion.

## Abdeckung
- 14 Demo-Routen einschließlich EDEN-Term, Builder, Wiki, Router und Mobile
- 17 Workflow-Routen, jeweils Grafik, Weiter-/Zurücksetzen-Schritte
- fünf Wiki-Bereiche und ehrlicher PDF-Veröffentlichungsstatus
- Standardansichten bei 1440px und Smartphone-Ansichten bei 390px
- elementare Accessibility-Prüfungen: Bild-Alt-Texte, Frame-Titel, Button-Namen, doppelte IDs, Breitenüberlauf
- vollständig gerenderte PNG-Screenshots in doppelter Pixeldichte
- maschinenlesbares `qa/artifacts/report.json`

## GitHub-Actions-Ablauf
1. Repository des PR auschecken.
2. Node.js 22 und Playwright 1.56.1 vorbereiten.
3. Chromium mit den notwendigen Systembibliotheken installieren.
4. Lokalen statischen Server aus `docs/` unter 127.0.0.1:8766 starten.
5. `node qa/portal.e2e.cjs` ausführen.
6. Screenshots und Bericht auch bei Testfehlern als Workflow-Artefakt anhängen.

## Lokal wiederholen

Node.js und npm müssen installiert sein. Im Repo-Root:

```bash
cd qa
npm install --no-audit --no-fund
npx playwright install chromium
cd ..
python3 -m http.server 8766 --directory docs
```

In einem **zweiten Terminal** im Repository:

```bash
cd qa
npm run test:e2e
```

Nur wenn ein unabhängiger Browser-Zugriff auf die öffentliche Website gegeben ist, kann alternativ `EDEN_SITE_BASE=https://eden-street.github.io/.github/ npm run test:e2e` eingesetzt werden. Das Testskript erfasst die tatsächlich verwendete Basis-URL.

## Abnahmegrenzen

Ein grüner Lauf beweist Browser-Rendering und die geprüften Demo-Interaktionen auf *dieser* Revision. Er beweist **nicht** Hardwarekompatibilität, einen Qubes-/Router-/Mobile-Installer, WCAG-Konformität, vollständige Security oder eine Freigabe der historischen Handbuch-PDF.

Bei rotem Lauf **nicht** den Test deaktivieren: Fehler mit Screenshot und Log reproduzieren, korrigieren und erneut ausführen. Nur echte Testberichte dürfen als PASS veröffentlicht werden.
