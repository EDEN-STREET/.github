# EDEN Suite · Vorlage für einen Einzelprompt und Workflow

**ID:** WF-<NN> · **Version:** <SEMVER> · **Bereich:** <AREA> · **Status:** DESIGN

[Workflow-Galerie](../workflows.html) · [Bedienungsanleitung](../SKILLS-UND-BEDIENUNG.md)

## 01 · Ausgangspunkt und Quellen
Repo, Branch, tatsächlicher HEAD, historische Originale, Datenschutzklasse, vorherige Tests und relevante Issues/PRs.

## 02 · Prompt zur Weitergabe
> Bearbeite ausschließlich <BEREICH>, schütze Bestehendes und führe zuerst eine read-only Bestandsaufnahme durch. Liefere Plan, Diff, Tests, Review und Rollback. Keine unautorisierten Änderungen an Systemen oder Credentials.

## 03 · Agentenrollen
Discovery · Planner · Implementer · Verifier · Reviewer · Publisher. Rollen und Berechtigungen pro Aufgabe festhalten.

## 04 · Konfigurierbare Parameter
```yaml
version: 0.1.0
mode: demo
inputs: {}
permissions: []
risk_level: L0
approval_required: false
llm:
  temperature: 0.2 # optional, vom jeweiligen Modellanbieter abhängig; keine garantierte Laufzeitsteuerung
```

## 05 · Workflow
1. Quellen prüfen
2. Ausgangszustand sichern
3. Änderung planen
4. Sicherheitsgates / Vorbedingungen prüfen
5. Branch / minimale Ergänzung
6. Tests und negative Fälle
7. Verifikation und Evidenz
8. Review
9. Veröffentlichung und Rollback-Dokumentation

## 06 · Ein-/Ausgabeschema
Eingaben, Ausgaben, Datentypen, Fehlerfälle und Datenklassifikation definieren.

## 07 · Abnahme und Stoppsignale
Keine unverifizierten Erfolgsstatus, fehlendes Backup, unbekannte Hardware oder Konflikte mit neueren Commits.

## 08 · Status und Nachweis
Baseline-SHA, geänderte Dateien, Testbefehle, echte Ergebnisse, Reviewer, Rollback und Changelog.
