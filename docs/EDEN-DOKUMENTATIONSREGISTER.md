# EDEN Suite — Dokumentations- und PDF-Register
Stand 2026-11-03 · Status: im Aufbau

## Veröffentlichungsprinzip
Nichts entfernen, keine unbestätigten PDF-Links erfinden, keine privaten Daten veröffentlichen. Jede Datei bekommt: Titel, Bereich, Version, Stand, Quelle, SHA-256, Seitenzahl, Lizenz/Freigabe, Sichtbarkeitsklasse, Verantwortliche, Änderungsprotokoll.

| Artefakt | Status | Referenz |
|---|---|---|
| EDEN Suite Masterplan | VERÖFFENTLICHT ALS ENTWURF | [Masterplan](EDEN-EXTENDED-MASTERPLAN.md) |
| LAPTOP-OS Haupt-README | VORHANDEN | [README](https://github.com/EDEN-STREET/LAPTOP-OS) |
| LAPTOP-OS Wiki/Handbuch-Navigation | VORHANDEN | [Wiki/Handbuch](https://github.com/EDEN-STREET/LAPTOP-OS/blob/main/docs/WIKI_UND_HANDBUCH.md) |
| Gate-5-Hardware-Preflight | ENTWURF | [Draft PR #9](https://github.com/EDEN-STREET/LAPTOP-OS/pull/9) |
| EDEN-Gesamthandbuch 110+ Seiten | ORIGINAL UND ÖFFENTLICHE FREIGABE NICHT VERIFIZIERT | Kein Downloadlink |
| Mudi-V2-bezogenes PDF aus Projektmaterial | PROJEKTMATERIAL, NICHT ÖFFENTLICH ÜBERNOMMEN | Separat prüfen |
| EDEN Plattformplan | PROJEKTQUELLE | Nicht ungeprüft öffentlich hochladen |
| EDEN UX-/Builder-Audit | PROJEKTQUELLE | Nicht ungeprüft öffentlich hochladen |

## PDF-Workflow
1. Originaldatei identifizieren; Name, Umfang, Herkunft, Version und Änderungsdatum erfassen.
2. Rechte, personenbezogene Daten, Zugangsdaten, interne IPs und vertrauliche Informationen prüfen.
3. Prüfsumme und Seitenzahl automatisiert ermitteln; keine unbestätigte Seitenzahl übernehmen.
4. Inhaltsverzeichnis und Markdown-Kapitelindex erstellen; Querverweise zu Modulen und Glossar.
5. PDF für GitHub-Vorschau bereitstellen, sofern Dateigröße und Rechte passen; große Binärdateien gegebenenfalls als Release-Artefakte versionieren.
6. Öffentlichen Link auf Organisationsprofil, Repository-README und Modulindex aufnehmen.
7. Link-Check, Sichtprüfung, PDF-Lesbarkeit, Version und Checksummen in einem Review nachweisen.
8. Alte Ausgaben im Versionsarchiv erhalten; niemals still überschreiben.

## Lesepfade
**Einsteiger:** Überblick -> Begriffe -> Voraussetzungen -> erste sichere Prüfung -> FAQ.
**Fortgeschrittene:** Topologie -> Konfigurationsprofile -> Fehlerdiagnose -> Wiederherstellung.
**Profis:** Schemas -> Bedrohungsmodell -> Tests -> Evidenz -> Audit -> Release.

## Offene Blocker
- Original des über 110-seitigen Gesamt-Handbuchs samt Veröffentlichungsfreigabe fehlt als verifiziertes öffentliches Artefakt.
- Nicht alle historischen Projektdateien sind als veröffentlichbare Quellen klassifiziert.
- Link-/PDF-/CI-Prüfungen wurden für dieses Register noch nicht ausgeführt.
