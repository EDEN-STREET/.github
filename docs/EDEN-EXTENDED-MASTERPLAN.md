# EDEN Suite — Masterplan und Systemarchitektur
Version 0.1.0 · 2026-11-03 · Status: Dokumentationsentwurf, nicht Produktfreigabe

## 1. Vision und Umfang
EDEN vereint Wissensportal, Geräteinventar, geführte Konfiguration, reproduzierbare Skills, Workflow-Builder, Security Center, Support, Simulation Lab, Academy und Audit. LAPTOP-OS ist nur eine Teilstrecke. ROUTER (Mudi V2) und MOBILE/PIXEL sind eigene Domänen; eigenständige Repositories sind noch nicht bestätigt. EDEN-Term ist der Zielname; EDEN-Term ist historisch.

## 2. Herkunft und Grenzen
Aus den EDEN-Plattformplänen: Apps (Web/Desktop/Mobile), Services (API, Identity, Inventory, Workflow Engine, Policy Engine, Support, Audit), Agents (Windows/Linux/Router), Packages (Schemas/SDK/UI), Skills, Workflows, Profiles, Academy, Guides, Tests und Infrastruktur. Aus dem UX-Audit: gemeinsames Datenmodell für Guides, Fragebögen, Assistenten und Workflows; One-Click-Sicherheitsvertrag; Ist-/Soll-Trennung; Simulation niemals als echte Prüfung ausgeben. Dies sind Architekturziele, keine Behauptung vollständiger Implementierung.

## 3. Gesamtübersicht
```text
EDEN
+-- EXPERIENCE
|   +-- Portal / Wiki / Handbuch / PDFs
|   +-- Setup Wizard / EDEN-Term
|   +-- Academy / Support / Simulation Lab
+-- PLATFORM
|   +-- Identity / Policy / Inventory
|   +-- Workflow Engine / Skill Registry
|   +-- Evidence Store / Audit / Release Catalog
+-- DEVICES
|   +-- LAPTOP-OS -> Windows Preflight -> Qubes -> Whonix -> EDEN App Qube
|   +-- ROUTER -> Mudi V2 -> Firmware / LAN / WAN / VPN / Tests
|   +-- MOBILE -> Pixel / GrapheneOS (nur nach Geräteprüfung)
+-- OPERATIONS
    +-- Threat Model / CI / Tests / Rollback
    +-- Documentation / Versioning / Incident Response
```

## 4. Zielgruppen
**Einsteiger:** Was ist EDEN? Voraussetzungen, Begriffe, verständliche Entscheidungspunkte, bebilderte Schritte, typische Fehler, keine versteckten destruktiven Aktionen.
**Fortgeschrittene:** Konfigurationsprofile, Netzwerkpfade, Versionsmatrix, Diagnose, Nachweise, Wiederherstellung.
**Profis:** Schemas, APIs, Trust Boundaries, Rechte, signierte Releases, Threat Model, CI, reproduzierbare Builds, Security Review und Nachweisketten.

## 5. Modulkatalog
| Modul | Zweck | Soll-Artefakte | Nachweisstatus |
|---|---|---|---|
| Portal | Navigation, Suchindex | README, Glossar, Seitenregister | Dokumentationsausbau |
| Handbuch | Quellengebundene Guides | Markdown, PDF, Changelog, Hash | Vollständiges Original-PDF offen |
| Builder | Assistenten/Skills konfigurieren | Schema, Parameter, Vorschau | Historische Prototypen, nicht produktiv freigegeben |
| Workflow Engine | Deterministische Ausführung | DAG, Gates, Event Log | Konzept/Prototypen |
| Inventory | Read-only Erkennung | Redigierter Hardware-Report | Gate 5 nicht real getestet |
| Policy | Berechtigungen, Freigaben | Policy Rules, Approval Evidence | Konzept |
| Support | Diagnosebäume | Runbooks, Ticket-Datensparsamkeit | Konzept/Prototypen |
| Academy | Lernpfade | Übungen, Quiz, Verifikation | Konzept/Prototypen |
| LAPTOP-OS | Geräte-Setup | Qubes HCL, Backup, Installationscheck | npm-Vorschau; OS-Installer nicht vorhanden |
| ROUTER | Mudi V2 | Firmware-Matrix, Netztopologie, Tests | noch separat zu prüfen |
| MOBILE | Pixel/GrapheneOS | Geräte-Matrix, Update-/Backup-Plan | noch separat zu prüfen |
| Audit | Nachweise und Drift | Ereignisse, Hashes, Export | Konzept/Prototypen |

## 6. Datenmodell (Ziel)
- **Skill:** id, version, owner, description, input_schema, output_schema, permissions, preconditions, dry_run, test_ids, recovery, source_revision.
- **Workflow:** id, version, graph, skill_pins, inputs, policy, approvals, timeout, rollback, evidence_requirements.
- **Evidence:** run_id, timestamp, source, method, tool_version, device_alias, redaction, outcome, artifact_hash, reviewer.
- **Guide:** id, audience, prerequisites, steps, expected_outcomes, troubleshooting, sources, tested_on, revision.
- **Release:** git_commit, tag, artifact_hashes, dependencies, test_report, approvals, migration_notes, rollback.
Keines dieser Felder ersetzt eine reale Implementierung oder Tests.

## 7. One-Click-Sicherheitsvertrag
```text
DISCOVER (read-only)
   -> MODEL (Ist / Soll)
   -> PREFLIGHT (Hardware / Berechtigungen / Risiken)
   -> PLAN (Diff, Parameter, Folgen)
   -> DRY-RUN (als Simulation markiert)
   -> BACKUP + RESTORE-TEST
   -> EXPLIZITE FREIGABE
   -> EXECUTE (kleinstmögliche Rechte)
   -> VERIFY (unabhängige Messung)
   -> AUDIT / RECOVERY / RELEASE
```
**Fail closed:** unbekanntes Zielgerät, fehlende Datensicherung, ungeprüfte Signatur oder ungeklärter Ziel-Datenträger -> BLOCKED. Die Zustimmung zum langfristigen Windows-Ersatz ist keine pauschale Freigabe zum sofortigen Löschen.

## 8. Vertrauensgrenzen
- Browser-UI darf nicht direkt privilegierte Systemaktionen ausführen.
- Agenten erhalten minimale, zeitlich begrenzte Rechte.
- Sensible Konfigurationen nicht in GitHub-Logs oder öffentlichen Repositories speichern.
- Qubes dom0 minimal; EDEN in einem separaten App-Qube.
- Whonix und Tails sind unterschiedliche Betriebsmodelle; Tails ist kein Whonix-Qube.
- VPN, Tor und Router bieten keine garantierte Anonymität. Netzwerkpfade, DNS, IPv6, Updates, Identitätsverknüpfungen und Metadaten separat bewerten.

## 9. Repository-Strategie
Die GitHub-Organisation EDEN-STREET ist das übergreifende Portal. Aktuell verifiziert: `EDEN-STREET/LAPTOP-OS` und `EDEN-STREET/.github`. Zusätzliche Repositories werden erst angelegt, wenn Modulgrenzen, Verantwortlichkeit und Versionsregeln feststehen. Bestehende Historie niemals überschreiben; Änderungen via Feature-Branch, Draft PR, Review, Tests und Freigabe.

## 10. Dokumentationsmatrix
Jedes Modul erhält: 00-Überblick, 01-Schnellstart, 02-Grundlagen, 03-Architektur, 04-Setup, 05-Sicherheit, 06-Tests, 07-Fehlerbehebung, 08-Recovery, 09-API/Schemas, 10-FAQ, 11-Changelog, 12-Quellen, 13-PDF. Diagramme als Textdiagramme plus barrierearme textuelle Beschreibung.

## 11. Umsetzung in kontrollierten Phasen
P0: Inventar aller Quellen und Artefakte, Klassifizierung PUBLIC/PRIVATE, Herkunft und Versionsregister.
P1: Vollständiges Handbuch sichern, PDF prüfen, Kapitelindex, Querverweise, GitHub-Navigation.
P2: Geräte-/Skill-/Workflow-Register und Schemas definieren.
P3: Read-only vertikalen Prototyp mit realem Testbericht erstellen.
P4: Reversible Änderungen mit Backup und Recovery testen.
P5: Router-/Mobile-Domänen und integrierte Netzwerkprüfungen ergänzen.
P6: CI, Accessibility, Security Review, signierte Releases und Offline-Dokumentation.

## 12. Definition of Done
Keine Veröffentlichung ohne: vollständige Links, überprüfte Quellen, Versionsangabe, Datensparsamkeit, Nachweisstatus, Testprotokoll, Reviewer und Rollback. Historische Testzahlen aus verschiedenen Versionen nicht addieren. Kein Status GETESTET ohne tatsächliche Testausführung.

## 13. Quellenbasis
- EDEN Plattformplan (Projektdatei; Architektur-/Implementierungsplan)
- EDEN UX- und Builder-Audit (Projektdatei; Anforderungen und historische Prototypen)
- EDEN LAPTOP-OS README und Gate-5-Draft-PR
- Externe Referenzen für spätere technische Validierung: https://www.qubes-os.org/doc/ ; https://www.whonix.org/wiki/Documentation ; https://docs.gl-inet.com/ ; https://owasp.org/www-project-application-security-verification-standard/ ; https://csrc.nist.gov/Projects/ssdf ; https://www.w3.org/TR/WCAG22/
Diese externen Quellen sind Referenzziele, keine in diesem Commit vollständig verifizierte aktuelle Kompatibilitätsprüfung.
