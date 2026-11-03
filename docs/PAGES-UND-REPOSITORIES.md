# Veröffentlichung: GitHub Pages, Projekt-Repositories und Links

**Stand: 2026-11-03**

## Grundsätzliches
- Das Organisationsprofil in `EDEN-STREET/.github/profile/README.md` ist eine GitHub-README und kann keine eigenen GitHub-Menüreiter wie „Repositories“ oder „Wiki“ erstellen. Stattdessen bieten wir eine prominente Linknavigation.
- Das veröffentlichbare statische Portal liegt unter `EDEN-STREET/.github/docs/index.html`.
- GitHub Pages ist mit `main /docs` eingerichtet; der [Deployment-Lauf](https://github.com/EDEN-STREET/.github/actions/runs/41690248279) auf `e68337f` war erfolgreich. Die gemeldete URL ist https://eden-street.github.io/.github/. Ein neuer, unabhängiger Browser-QA-Lauf ist davon getrennt. Dokumentation: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- `docs/index.html` und `docs/preview.html` sind über den eingerichteten GitHub-Pages-Stand als Webportal vorgesehen. Screenshots, Frontend-Interaktion und Barrierefreiheit benötigen eigenständige Abnahme.

## Eigenständige Repositories – erstellt
Ein späterer, berechtigter GitHub-Client hat beide Repositories tatsächlich angelegt. Die vorbereiteten Vorlagen bleiben als historischer Herkunftsnachweis erhalten:
- [EDEN-STREET/ROUTER](https://github.com/EDEN-STREET/ROUTER)
- [EDEN-STREET/MOBILE](https://github.com/EDEN-STREET/MOBILE)

Minimalvorgaben nach Erstellung: README mit Projektstand, Demo-URL, docs, src (nur falls implementiert), tests, SECURITY.md, CHANGELOG.md, Lizenzentscheidung und keine vertraulichen Geräteinformationen. Gemeinsame Module unter EDEN Suite verlinken, nicht duplizieren.

## Veröffentlichung der Original-PDF
Vorhandene geprüfte Original-PDF des EDEN-Gesamthandbuchs nötig; erst nach Datenschutz-/Lizenzprüfung öffentlich hosten. Kein Upload der Mudi-V2-Router-PDF anstelle des Handbuchs.

## Kontrollliste
- [x] Portal als statische HTML-Datei erstellt (Quellartefakt)
- [x] Wiki-/Router-/Mobile-Informationsbereiche vorbereitet
- [x] Veröffentlichungspfade und Demo-Status dokumentiert
- [x] Pages-Einstellung im Repo aktivieren (GitHub Deployment erfolgreich)
- [ ] Aktuelle Version mit reproduzierbarem, unabhängigen Browser- und Screenshot-Test abnehmen
- [x] ROUTER und MOBILE als separate GitHub-Repositories erstellen
- [ ] Original-110+-Seiten-PDF prüfen und im Wiki veröffentlichen
- [ ] Screenshots, Browser-E2E und Accessibility auf ausgelieferter Version abnehmen


## Tatsächlich angelegte Aufgaben und Repo-Vorlagen
- [Issue #2 – ROUTER/MOBILE-Repositories anlegen](https://github.com/EDEN-STREET/.github/issues/2)
- [Issue #3 – GitHub Pages aktivieren und Browser prüfen](https://github.com/EDEN-STREET/.github/issues/3)
- [ROUTER-Repo-Vorlage](repository-templates/ROUTER/README.md) mit [llms.txt](repository-templates/ROUTER/llms.txt) und [Workflows](repository-templates/ROUTER/docs/WORKFLOWS.md)
- [MOBILE-Repo-Vorlage](repository-templates/MOBILE/README.md) mit [llms.txt](repository-templates/MOBILE/llms.txt) und [Workflows](repository-templates/MOBILE/docs/WORKFLOWS.md)
- [15 Oberfläche mit Vorschaubildern](areas/README.md), [17 Workflow-Grafiken](workflows.html), [maschinelles Manifest](workflows/manifest.json)

**Aktualisierte Einordnung:** Vorlagen sind historische Vorarbeit; ROUTER und MOBILE wurden inzwischen als eigenständige GitHub-Repositories angelegt. Die Geräte-Implementierung ist damit noch nicht produktiv freigegeben.

**Rendering:** GitHub-READMEs zeigen verlinkte Bilder, unterbinden jedoch die Ausführung von `iframe`-Applikationen. Für `iframe` ist das HTML-Portal über GitHub Pages oder einen anderen Webhost auszuliefern. Alle Screenshots müssen nach tatsächlichem Browser-Render belegt werden.


## Neue Audit-Verweise
- [Portal-Qualitätsbericht](QA-AUDIT-2026-11-03.md)
- [Browser- und Screenshot-Tests](../qa/README.md)
- PDF-Handbuch: lokal dokumentiert, aber noch nicht als öffentliches Original veröffentlicht; ein Scanner mit null Treffern ersetzt weder redaktionelle noch urheber-/datenschutzrechtliche Freigabe.
