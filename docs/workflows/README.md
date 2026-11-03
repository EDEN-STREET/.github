# EDEN Suite · Workflow-Registry (maschinenlesbar)

**Zweck:** Alle 17 Einzelaufträge sind als gemeinsame JSON-Manifestdatei registriert. Die grafischen Ansichten sind SVG-Dateien, die Ausführung bleibt **SIMULATION_ONLY**.

## Dateien
- [manifest.json](manifest.json) — 17 Workflow-IDs, zuständige Oberflächen, Prompt-Pfade, Diagramme und Sicherheitsgates
- [schema.json](schema.json) — Datenstruktur zur automatisierten Validierung
- [Workflows als HTML-Galerie](../workflows.html) — 17 klickbare Vorschauen
- [Workflow-Detailansicht](../workflow.html) — einzelne Stufen, keine echte Systemaktion
- [Alle Prompts](../prompts/README.md) und [Agenten](../AGENTEN-UND-WORKFLOWS.md)

## Wiederverwendbarer Workflow

1. Manifest-ID und zugehörigen Prompt auswählen.
2. Live-GitHub-HEAD und Arbeitskopie read-only ermitteln.
3. Eingaben, Berechtigungen, Datenklassen und Quellen dokumentieren.
4. Plan/Änderungsdiff, Stoppsignale, negative Tests und Rollback erstellen.
5. Änderungen im isolierten Branch ausführen; kein verdecktes Ersetzen.
6. Wirkliche Testbelege archivieren, PR und Review vorlegen.
7. Nach Freigabe Versionen, Wiki und Diagramm synchronisieren.

[**Statischer Testbericht mit GitHub-Actions-Nachweis**](../VALIDIERUNGSBERICHT-2026-11-03.md)

## Überprüfung

```bash
python -m json.tool docs/workflows/manifest.json >/dev/null
python -m json.tool docs/workflows/schema.json >/dev/null
```

Dies prüft **nur die JSON-Syntax**, nicht die vollständige JSON-Schema-Konformität. Für Schema-Prüfung mit einem freigegebenen Validator dessen Version und Ergebnis dokumentieren. Zusätzlich sicherstellen, dass jede referenzierte Datei wirklich existiert.

## Neue Workflows anlegen
- Nummer und `slug` reservieren, Prompt gemäß [Vorlage](../prompts/TEMPLATE.md) erzeugen.
- Diagramm, passende Bereichsseite und `llms.txt` hinzufügen.
- Manifest, Galerie, Masterdokumentation und Linkprüfungen aktualisieren.
- Historische Aufträge nicht wiederverwenden oder überschreiben; Version erhöhen.
