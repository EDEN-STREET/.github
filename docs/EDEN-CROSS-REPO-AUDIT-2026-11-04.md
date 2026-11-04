# EDEN STREET – Cross-Repository Zweit-Audit und Freigabegrenzen

**Auditdatum:** 2026-11-04  
**Auditprofil:** unabhängiger Read-only-Revisionscheck; nur versionierte GitHub-/npm-/HTML-/CI-Stände. Keine Änderung an realen Geräten.

## Verifizierte Hauptstände

| Repo | Aktueller integrierter Stand | Eigene ausführbare Tests? | Gültige Freigabe |
|---|---|---|---|
| `.github` | `b1fa069c77367d80c33843f9425fc7bf3a54d01c` | 38 GitHub-Actions-Browserchecks und statischer Portalvalidator auf diesem Stand, Pages-Deployment erfolgreich | Webportal / Demos, keine Gerätefunktion |
| `LAPTOP-OS` | [Audit-Fix PR #20](https://github.com/EDEN-STREET/LAPTOP-OS/pull/20), `v0.8.0-preview.8` | Node.js Windows/Linux **70/70**, CodeQL, realer npm-Paket-Smoke sowie 13 HTML-Screens pro Desktop/Mobile mit 30 PNGs in der PR-QA | Lokale npm-App und Read-only Gate-5/Reboot-Diagnose, keine OS-Installation |
| `ROUTER` | [Dokumentationsaudit PR #1](https://github.com/EDEN-STREET/ROUTER/pull/1) | Neuer eigenständiger Node22-Offline-Dokumentationscheck, CI erfolgreich | KONZEPT / DEMO |
| `MOBILE` | [Dokumentationsaudit PR #1](https://github.com/EDEN-STREET/MOBILE/pull/1) | Neuer eigenständiger Node22-Offline-Dokumentationscheck, CI erfolgreich | KONZEPT / DEMO |

Die Links zu PRs dienen der Versionsnachvollziehbarkeit; ein reiner CI-Erfolg belegt keine Hardware-, Firmware- oder Tor-Netzwerksicherheit.

## Bereinigte Fehler

1. **LAPTOP-OS:** Schnellstart meldete auch bei fehlenden Neben-HTML-Dateien eine vollständige Installation. Fix: **einheitliches Manifest aller 15 kopierten UI-Dateien**, kryptografischer Bytevergleich von App-Kopie und npm-Paket, Fail-Closed bei fehlenden oder manipulierten Seiten.
2. **LAPTOP-OS:** Manipulierte lokale Consent-Dateien konnten verbotene Flagwerte enthalten, ohne in der Vollständigkeitsprüfung aufzufallen. Fix: strikt `false` für OS-/Disk-/Firmware-/Tor-Freigabe in der lokalen Consent-Struktur.
3. **ROUTER + MOBILE:** je 15 kaputte Links, durch falsche relative Pfade aus der zentralen Portalstruktur. Fix: Links auf tatsächliche `.github/docs`-Quellen und öffentliches Demo-Routing.
4. **ROUTER + MOBILE:** falsch kodierter Versionsstring mit NUL-Zeichen und überholte Aussage `Repo noch anzulegen`. Fix: eigenständige Dokumentations-CI mit NUL- und Linkprüfung.
5. **Dokumentation:** ältere `preview.4`-/`preview.6`-Labels in aktuellen HTML-/Windows-Anleitungen auf Preview.8 aktualisiert; historische Entwicklungsabschnitte werden nicht rückwirkend verfälscht.

## Aktuelle testbare Komponenten

- EDEN npm-Start: `npm start` in einem lokalen Checkout oder [öffentlicher GitHub-Tarball](https://github.com/EDEN-STREET/LAPTOP-OS/blob/main/docs/EIN-KOMMANDO-START.md).
- Read-only Gate 5: `npm run gate5`; kombiniert mit Reboot-Plan: `node bin/eden.mjs assess --json`.
- Portal: `docs/index.html`, 15 EDEN-Bereiche, 17 Workflow-Demos.
- ROUTER/MOBILE: rein dokumentarische Geräteprofile und Demo-Links.

## Verbleibende Grenzen

- **Kein automatisierter Qubes-/Tails-Installer.** Windows wurde weder gelöscht noch neugestartet; Zielmedium, Wiederherstellung, echter Boot und Gerätekompatibilität fehlen als unabhängige Nachweise. [Hardware Gate #19](https://github.com/EDEN-STREET/LAPTOP-OS/issues/19).
- **Keine echte Tor-/Whonix-Kill-Switch-Prüfung.** Systemweite Anonymität kann nicht aus einer Browser-/VM-Simulation abgeleitet werden.
- **Tor VPS KVM8:** [Draft-PR #6](https://github.com/EDEN-STREET/.github/pull/6) ergänzt eine Konzept-Demo; das eigentliche Skriptpaket liegt laut PR-Angaben bisher **außerhalb** des Repositorys und wurde nicht auf einem VPS installiert.
- **Historisches Originalhandbuch:** `EDEN_HANDBUCH_v0.8.0.pdf` mit 104 Seiten und Markdownfassung bleiben lokal, bis eine eigene redaktionelle, Lizenz- und Datenschutzfreigabe vorliegt; die zehnseitige Router-PDF ist ein separates Archivdokument.
- **Portal Live-E2E:** Der frühere veröffentlichte Stand wurde mit 56 Live-Checks dokumentiert. Diese aktuelle Quellprüfung enthält **keinen neuen externen Live-Browserlauf des Pages-Portals**; nicht mit dem CI-Browser des npm-Pakets verwechseln.
- **ROUTER/MOBILE:** keine echten Geräteprüfungen, die Repo-CI prüft aktuell nur Dokumentationsstruktur.

## Reproduzierbarer Prüfworkflow

1. GitHub-`main`-Commit und PR-Basis-SHA der vier Repositories notieren.
2. Verfügbare Sourcefiles und Tests explizit inventarisieren.
3. Node-/Browser-/Docs-/CodeQL-Checks auf dem *exakten* Commit ausführen.
4. Screenshot-Artefakte aus dem jeweiligen CI-Lauf laden, Integrität prüfen und gerenderte Desktop-/Mobile-Oberflächen **tatsächlich ansehen**.
5. Fehlende UI-Dateien, manipulierte Consent-Werte, NUL-Zeichen, lokale Pfadfehler, gebrochene Links und untrusted Sicherheitsnachweise als Negativtests abdecken.
6. Änderungs-Versionschain und PR-Kommentare dokumentieren; nur geprüfte, nicht-destruktive Korrekturen integrieren.
7. Unbelegte Hardware-/Netzwerkschritte ausdrücklich als `NOT_VERIFIED` erfassen; keine implizite Upgrade-/Installationsfreigabe.
8. Für den Rückweg ausschließlich überprüfbare Git-Revert-Strategien und Datenerhalt, keine pauschalen Resets oder Löschungen.

**Auditregel:** Ein „grüner Build“ belegt die getestete Softwarefunktion auf dem CI-Runner, nicht eine vollständige Sicherheits-, Geräte- oder Anonymitätsgarantie.
