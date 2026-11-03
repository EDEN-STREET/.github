# EDEN Suite · Skill, Workflow und Agenten-Bedienungsanleitung

**Zweck:** Ein Bereich = ein eindeutiger Prompt + ein wiederholbarer Workflow + ein Nachweis.

## Einstieg
- [Alle 17 Prompts](prompts/README.md)
- [Agentenrollen](AGENTEN-UND-WORKFLOWS.md)
- [Masterdokumentation](EDEN-STREET-MASTERDOKUMENTATION.md)

## Ausführungsmodell
1. Passenden Bereich auswählen.
2. `<REPO>`, `<BASE_SHA>`, `<BRANCH>` und `<EVIDENCE_DIR>` mit realen Werten befüllen.
3. Agent **Discovery** startet read-only und erstellt ein Manifest der Ausgangsdateien.
4. **Planner** erzeugt Diff-Plan, Berechtigungsklasse und Risikogates.
5. Bei rein dokumentarischer Änderung kann die Umsetzung auf einem Branch erfolgen; kritische Systemaktionen benötigen eine getrennte, bewusste Freigabe.
6. **Verifier** führt echte Tests aus und protokolliert die Ergebnisse.
7. **Reviewer** prüft Diff, Provenienz, User Impact, Sicherheitsstatus und Rollback.
8. Veröffentlichen erst nach Freigabe – eine Demo ist kein Produktionsrelease.

## Ein eindeutiger Output pro Arbeit
```json
{
  "work_item": "eden.prompt.13",
  "status": "DEMO",
  "base_sha": "<verified commit>",
  "changed_files": [],
  "tests": [{"name":"browser-smoke","status":"NOT_RUN"}],
  "evidence_paths": [],
  "risks": [],
  "rollback": "<documented procedure>"
}
```

Statuswerte ohne tatsächlichen Nachweis nicht auf `PASS` setzen.

## Reproduzierbarkeit
Versionierte Source-Files, explizite Abhängigkeiten, maschinenlesbare Schemas, getestete Kommandos, feste Modulbezeichnungen, Dokumentation der Laufzeitumgebung und eine Wiederherstellungsanleitung müssen zusammen übergeben werden.

## Schnellnavigation
[Anleitung 01](prompts/01-strategy.md) · [Synchronisation 04](prompts/04-sync.md) · [Demos 13](prompts/13-previews.md) · [Qualität 15](prompts/15-quality.md) · [PR-Prüfung 16](prompts/16-github.md) · [Übergabe 17](prompts/17-handoff.md)
