# EDEN MOBILE · dokumentierte Workflows

[← Repository-Vorlage](../README.md) · [Verknüpfte EDEN Suite Aufgaben](https://github.com/EDEN-STREET/.github/blob/main/docs/prompts/11-mobile.md)

[![EDEN MOBILE – Ablaufmodell](https://raw.githubusercontent.com/EDEN-STREET/.github/main/docs/media/workflows/WF-11.svg)](https://github.com/EDEN-STREET/.github/blob/main/docs/workflow.html)

## Read-only Startpunkt
- Unterstützte Modelle und Betriebssystemversionen identifizieren.
- Risikozonen und Berechtigungen kartieren.
- Hersteller- und Veröffentlichungsnachweise prüfen.
- Konfigurationsplan als lesbaren, versionierten Entwurf erstellen.

## Sicherheitsvertrag
PREFLIGHT → RISK REVIEW → DRY-RUN (DEMO) → BACKUP + RESTORE-PROOF → EXPLIZITE ZUSTIMMUNG → ÄNDERUNG NUR NACH GERÄTESPEZIFISCHER FREIGABE → VERIFY → AUDIT/ROLLBACK.

## Tests
Benötigt werden Negativfälle für unbekannte Firmware/OS-Versionen, fehlendes Backup, unterbrochene Verbindung und fehlende Zustimmung. Geräteaktionen sind im aktuellen Projektstand **nicht implementiert**.

## Agenten
Discovery (lesend), Documentation, Engineer (Entwurf), Verifier, Security Review, Release.

[Bedienungsanleitung für Skills](https://github.com/EDEN-STREET/.github/blob/main/docs/SKILLS-UND-BEDIENUNG.md) · [17 Workflows](https://github.com/EDEN-STREET/.github/blob/main/docs/workflows.html)
