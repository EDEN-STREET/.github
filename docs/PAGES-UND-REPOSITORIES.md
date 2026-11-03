# Veröffentlichung: GitHub Pages, Projekt-Repositories und Links

**Stand: 2026-11-03**

## Grundsätzliches
- Das Organisationsprofil in `EDEN-STREET/.github/profile/README.md` ist eine GitHub-README und kann keine eigenen GitHub-Menüreiter wie „Repositories“ oder „Wiki“ erstellen. Stattdessen bieten wir eine prominente Linknavigation.
- Das veröffentlichbare statische Portal liegt unter `EDEN-STREET/.github/docs/index.html`.
- Nach Aktivierung von **Settings → Pages → Deploy from a branch → main → /docs → Save** kann GitHub Pages diese Dateien als klickbare HTML-Vorschau ausliefern. Die tatsächliche URL ist erst nach erfolgreichem Deployment verbindlich. Dokumentation: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- Bis dahin sind `docs/index.html` und `docs/preview.html` öffentlich als Dateien, **nicht nachgewiesen als live gehostete Seite**.

## Noch ausstehende neue Repositories
In der verbundenen GitHub-Werkzeugmenge dieser Bearbeitung steht **kein Create-Repository-Vorgang** zur Verfügung. Deshalb keine falsche Anlage-Bestätigung. Zielnamen nach Sichtung:
- `EDEN-STREET/ROUTER`
- `EDEN-STREET/MOBILE`

Minimalvorgaben nach Erstellung: README mit Projektstand, Demo-URL, docs, src (nur falls implementiert), tests, SECURITY.md, CHANGELOG.md, Lizenzentscheidung und keine vertraulichen Geräteinformationen. Gemeinsame Module unter EDEN Suite verlinken, nicht duplizieren.

## Veröffentlichung der Original-PDF
Vorhandene geprüfte Original-PDF des EDEN-Gesamthandbuchs nötig; erst nach Datenschutz-/Lizenzprüfung öffentlich hosten. Kein Upload der Mudi-V2-Router-PDF anstelle des Handbuchs.

## Kontrollliste
- [x] Portal als statische HTML-Datei erstellt (Quellartefakt)
- [x] Wiki-/Router-/Mobile-Informationsbereiche vorbereitet
- [x] Veröffentlichungspfade und Demo-Status dokumentiert
- [ ] Pages-Einstellung im Repo aktivieren
- [ ] Live-URL per HTTP und Browser verifizieren
- [ ] ROUTER und MOBILE als separate GitHub-Repositories erstellen
- [ ] Original-110+-Seiten-PDF prüfen und im Wiki veröffentlichen
- [ ] Screenshots, Browser-E2E und Accessibility auf ausgelieferter Version abnehmen


## Tatsächlich angelegte Aufgaben und Repo-Vorlagen
- [Issue #2 – ROUTER/MOBILE-Repositories anlegen](https://github.com/EDEN-STREET/.github/issues/2)
- [Issue #3 – GitHub Pages aktivieren und Browser prüfen](https://github.com/EDEN-STREET/.github/issues/3)
- [ROUTER-Repo-Vorlage](repository-templates/ROUTER/README.md) mit [llms.txt](repository-templates/ROUTER/llms.txt) und [Workflows](repository-templates/ROUTER/docs/WORKFLOWS.md)
- [MOBILE-Repo-Vorlage](repository-templates/MOBILE/README.md) mit [llms.txt](repository-templates/MOBILE/llms.txt) und [Workflows](repository-templates/MOBILE/docs/WORKFLOWS.md)
- [15 Oberfläche mit Vorschaubildern](areas/README.md), [17 Workflow-Grafiken](workflows.html), [maschinelles Manifest](workflows/manifest.json)

**Wichtig:** Die erstellten Repository-Vorlagen und Projektseiten sind keine tatsächlich angelegten eigenständigen GitHub-Repositories. Ohne passenden GitHub-Admin-Endpunkt kann dieser Schritt nicht eigenmächtig abgeschlossen werden. Nach der echten Anlage müssen die öffentlichen Links umgestellt und die Frontseitenbilder wiederverwendet werden.

**Rendering:** GitHub-READMEs zeigen verlinkte Bilder, unterbinden jedoch die Ausführung von `iframe`-Applikationen. Für `iframe` ist das HTML-Portal über GitHub Pages oder einen anderen Webhost auszuliefern. Alle Screenshots müssen nach tatsächlichem Browser-Render belegt werden.
