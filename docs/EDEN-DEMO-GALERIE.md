# EDEN Suite — Demo-Galerie und Projektansichten
Stand: 2026-11-03 · **Entwicklungsansichten, keine Produktivfreigabe**

Diese Galerie macht die vorhandenen, im Repository nachgewiesenen Demo-Oberflächen auffindbar. Die Layouts bleiben erhalten; auf dem Gate-5-Entwicklungszweig wurden ausschließlich ausgewählte sichtbare Markenbezeichnungen auf **EDEN-Term** aktualisiert. Nicht jede historische Zeichenfolge wurde ersetzt: interne Bezeichner, Pfade, Datenschemata und bestehende Integrationen dürfen nicht blind umbenannt werden.

## Gesamtprojekt
| Oberfläche | Zweck | Demo-Quelle | Zustand |
|---|---|---|---|
| **EDEN-Term / Workbench** | Terminalartige Arbeitsoberfläche, Navigation, Status und Entwickleransicht | [HTML auf Entwicklungszweig](https://github.com/EDEN-STREET/LAPTOP-OS/blob/feature/gate5-universal-preflight-v0.1.0/web/index.html) | Branding teilweise angepasst, Layout beibehalten |
| **Wiki** | Wissensportal und Quellenzugang | [HTML](https://github.com/EDEN-STREET/LAPTOP-OS/blob/feature/gate5-universal-preflight-v0.1.0/web/wiki.html) | Branding teilweise angepasst |
| **Handbuch** | Kapitel und Entwicklungsstand | [HTML](https://github.com/EDEN-STREET/LAPTOP-OS/blob/feature/gate5-universal-preflight-v0.1.0/web/handbuch.html) | Branding teilweise angepasst |
| **Projekte / Kanban** | Modulspuren und Aufgaben | [HTML](https://github.com/EDEN-STREET/LAPTOP-OS/blob/feature/gate5-universal-preflight-v0.1.0/web/projects.html) | unveränderte Ansicht |
| **Builder** | Entwurf von Assistenten und Workflows | [HTML](https://github.com/EDEN-STREET/LAPTOP-OS/blob/feature/gate5-universal-preflight-v0.1.0/web/builder.html) | Branding teilweise angepasst |
| **Quellen** | Quellennavigation und Nachweise | [HTML](https://github.com/EDEN-STREET/LAPTOP-OS/blob/feature/gate5-universal-preflight-v0.1.0/web/quellen.html) | Branding teilweise angepasst |

## Projekt LAPTOP-OS
- [Geführte Windows-Einrichtung — Demo](https://github.com/EDEN-STREET/LAPTOP-OS/blob/feature/gate5-universal-preflight-v0.1.0/web/setup.html)
- [EDEN-Term Workbench — Demo](https://github.com/EDEN-STREET/LAPTOP-OS/blob/feature/gate5-universal-preflight-v0.1.0/web/index.html)
- [Hardware-Preflight — Spezifikation](https://github.com/EDEN-STREET/LAPTOP-OS/blob/feature/gate5-universal-preflight-v0.1.0/docs/gate5/UNIVERSAL-HARDWARE-PREFLIGHT-v0.1.0.md)

## Projekt ROUTER
Eine historische Mudi-V2-PDF und weitere Router-Dokumente sind als Projektmaterial vorhanden. **Noch keine öffentlich geprüfte eigenständige Router-Demo auf GitHub verifiziert.** Nicht mit einer Laptop-Demo verwechseln.

## Projekt MOBILE / PIXEL
GrapheneOS-Anleitungen sind als Projektmaterial vorhanden. **Noch keine öffentlich geprüfte eigenständige Mobile-Demo auf GitHub verifiziert.**

## Weitere historische Entwürfe aus Projektmaterial
- **DkZ_NOUZ_Terminal_Demo.html**: separates HTML-Original mit dunkler Terminaloberfläche, Ghostty-/Zellij-/Herdr-Bezügen. Als Projektdatei verfügbar, aber nicht ungeprüft öffentlich kopiert. Die neue Markenbezeichnung ist **EDEN-Term**.
- **EDEN Security Platform v0.2/v0.3**: historische Demo-/Builder-Pakete werden in den Projektunterlagen beschrieben; ihre vollständigen Originalarchive sind hier noch nicht als öffentliche, überprüfte GitHub-Dateien nachgewiesen.
- **Mindmaps und Systemdiagramme** bezeichnen den Inhalt; die textbasierte Darstellung ist lediglich das Format.

## Darstellung im GitHub-Portal
GitHub zeigt HTML-Dateien primär als Quelltext und nicht als ausgeführte App. Die Links oben sind deshalb **Quellansichten**, keine Live-Demo-URLs. Für echte interaktive Vorschauen sind ein sicherer statischer Demo-Host oder der dokumentierte lokale npm-Start sowie Browser-/Sichtprüfungen erforderlich. Screenshots werden erst nach echter Renderprüfung als Abbildungen eingebunden. Keine Screenshots oder Qualitätsnachweise erfinden.

## Regeln für die schonende Überarbeitung
1. Historische Originale unverändert archivieren; bestehende Layouts, Farben und Interaktionen bewahren.
2. Sichtbare Namen auf EDEN STREET (Marke), EDEN Suite (Gesamtplattform), EDEN-Term (Terminal) korrigieren.
3. Mindmap, Architekturübersicht, Workflow-Diagramm und Netzwerkübersicht als **inhaltliche Titel** verwenden.
4. Interne IDs, API-Namen und Dateipfade nur mit Migrationsplan ändern.
5. Responsive Darstellung, Kontrast, Tastaturbedienung und Bildschärfe testen; keine ungeprüften „hochrendert“-Behauptungen.
6. Änderungen über Feature-Branch, Testbericht, Screenshots, Review und Freigabe nach `main` übernehmen.

## Noch offen
Vollständige historische Demo-Inventur, tatsächliche Browser-Screenshots, visuelle Vorher-/Nachher-Diffs, UI-End-to-End-Tests, Veröffentlichung von Live-Demos und getrennte Projektgalerien für Router und Mobile.
