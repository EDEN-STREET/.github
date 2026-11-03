# EDEN Suite – nachvollziehbarer Validierungsbericht

**Prüftag:** 03.11.2026 · **System:** EDEN-STREET/.github · **Prüfumfang:** Statische Portaldateien, Dokumentationsverweise und SVG-/Workflow-Register

## 1. Reproduzierbare Prüfbasis

- Hauptbranch zum Zeitpunkt der Kontrolle: `1534a03fa0ae897480526019f5b2865169fec4aa`.
- Validierungszweig: `chore/portal-validation-20261103`.
- Geprüfter Commit: `cf7a0907af2be5b85c3dbbb1afc7a99201b41f39`.
- [Draft PR #4](https://github.com/EDEN-STREET/.github/pull/4)
- [Tatsächlicher GitHub-Actions-Lauf](https://github.com/EDEN-STREET/.github/actions/runs/41684686003)
- Tool: [scripts/check_portal.py](https://github.com/EDEN-STREET/.github/blob/main/scripts/check_portal.py), Python 3.12 unter GitHub Actions, nur lesende Standardbibliothek.

## 2. Nachgewiesene Ergebnisse

Die GitHub-Actions-Joblogs melden für den Lauf `41684686003` den Zustand **completed / success**. Der Schritt „Validate portal without network or device access“ ist erfolgreich.

| Prüfung | Nachweis |
|---|---|
| Workflow-Manifest | **17** referenzierte Workflows |
| Oberflächenregister | **15** eigene Bereichseinträge |
| Vorschaugrafiken der Bereiche | **15** referenzierte SVG-Dateien |
| SVG-XML-Parsing | **37** erfolgreich geparste SVG-Dokumente |
| Interne Dokumentations- und Medienverweise | **739** geprüft |
| Ergebnis des statischen Scripts | **PASS** |
| Prüfjob GitHub Actions | **success** |

Die CI-Prüfung entstand auf einem **Draft PR**. Sie ist nicht automatisch eine endgültige Freigabe der Hauptversion.

## 3. Was geprüft wurde

- Eindeutige Workflow-IDs und 17 Einträge im JSON-Manifest
- Vorhandensein von Prompt, Diagramm, Preview und zugehöriger Bereichs-LLM-Anweisung
- `SIMULATION_ONLY` in allen öffentlichen Workflow-Registry-Einträgen
- Vorhandensein der 15 Bereichs-READMEs, `llms.txt` und Vorschaudateien
- Vorhandensein der erwarteten statischen historischen HTML-/CSS-/JS-Dateien
- XML-Wohlgeformtheit und SVG-`title`
- Existenz lokaler Markdown-/HTML-Referenzdateien

## 4. Explizit nicht geprüft

| Bereich | Status |
|---|---|
| GitHub-Pages-Live-URL | **NICHT VERIFIZIERT** |
| Browser-E2E und Screenshots echter Renderläufe | **NICHT AUSGEFÜHRT** |
| Bedienbarkeit aller historischen UI-Interaktionen | **NICHT UNABHÄNGIG GETESTET** |
| WCAG-/Accessibility-Abnahme | **OFFEN** |
| Originalhandbuch-PDF 110+ Seiten | **NICHT ALS ORIGINAL ÖFFENTLICH VERIFIZIERT** |
| Repo-Erstellung ROUTER/MOBILE | **OFFEN** |
| Windows-/Linux-/Qubes-/Router-/Mobile-Hardwaretests | **NICHT AUSGEFÜHRT** |
| Release-Freigabe | **NICHT ERTEILT** |

## 5. Offene Projektaktionen

- [Pages-Hosting und Browserabnahme – Issue #3](https://github.com/EDEN-STREET/.github/issues/3)
- [ROUTER/MOBILE-Repositories – Issue #2](https://github.com/EDEN-STREET/.github/issues/2)
- [Portal-PR #1](https://github.com/EDEN-STREET/.github/pull/1): Entstand auf älterer Baseline und berührt inzwischen bereits angelegte Dateien; vor einem Merge rebasen/konfliktprüfen.
- [CI-Validator PR #4](https://github.com/EDEN-STREET/.github/pull/4): Grüner Job, weiterhin Draft bis zur gesonderten Freigabe.
- [LAPTOP-OS Dokumentations-PR #11](https://github.com/EDEN-STREET/LAPTOP-OS/pull/11): nur Doku und Bilder, Draft, Hauptzweig unverändert.

## 6. Wiederholung

In einem lokal ausgecheckten Stand von `EDEN-STREET/.github`:

```bash
python scripts/check_portal.py
```

Bei erfolgreicher Prüfung enthält die JSON-Ausgabe `"result": "PASS"`. Das Verfahren benötigt keine zusätzlichen Python-Pakete, keinen Internetzugriff und verändert keine Geräte. Ein Browser-E2E-Test ist ein **separates** Verfahren.

## 7. Definition of Done für den Portal-Release

Freigabe erst nach: erfolgreich gehosteter HTML-Seite, Sichtprüfung in einem echten Browser, anklickbaren Vorschaurouten, Tastatur-/Mobiltest, geprüftem PDF-Veröffentlichungsstatus, Linkaudit, Reviewer und dokumentiertem Release-Commit. Statische CI allein genügt ausdrücklich nicht.
