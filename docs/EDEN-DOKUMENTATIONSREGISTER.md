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


## Lokal verifizierter Quellenbestand (Offline-Review-Archiv V0.8.0 · Stand 03.11.2026)

Im isolierten lokalen Review-Bestand (`EDEN-V0.8.0-ANTIGRAVITY-QUELLEN-UTF8-REPARIERT.zip`, 31.119.754 Bytes, SHA-256 `fb2a29c4dc7a07f8e1dfbe4adb73a0a7939e26cc3e47c25049ae24413de5705a`, 331/331 Prüfsummen bestätigt) wurden folgende historische Handbuch-PDFs, die 22-teilige Markdown-Fassung und der historische Terminal-Entwurf lokal nachgewiesen. Sie werden **nicht** ohne gesonderte Lizenz- und Datenschutzfreigabe öffentlich hochgeladen:

| Lokales Referenzartefakt | Umfang / Größe | SHA-256 | Metadaten / Klassifizierung / Status |
|---|---|---|---|
| `EDEN_Handbuch_v0.8.0/EDEN_HANDBUCH_v0.8.0.pdf` | 104 Seiten (458.395 B) | `ee9342c986fea7cdfe659b6529819388d6ac416e04e6914d8575c5026e254818` | `Producer: pypdf` · 0 PII/Tokens · LOKAL VERIFIZIERT (100 S. V0.7.5 + 4 S. Anhang) · Freigabe vor Upload erforderlich |
| `EDEN_Handbuch_v0.8.0/EDEN_HANDBUCH_v0.8.0.md` | 22 Teile / 1.996 Zeilen (260.721 B) | `064078d66709eae162c31ea56c9420d2bd3f269085cd64f21059ba8660d5bf60` | UTF-8 Markdown · 0 PII/Tokens · LOKAL VERIFIZIERT · Volltext-Referenz V0.8.0 |
| `EDEN_Handbuch_v0.8.0/EDEN_HANDBUCH_v0.7.5.pdf` | 100 Seiten (390.837 B) | `e0caeb0acc43e9a759778e355c6c188c4614f830d893b1b8d68a635f4fb28613` | `Producer: pypdf` · 0 PII/Tokens · LOKAL VERIFIZIERT · Historisches Original V0.7.5 (21 Teile) |
| `EDEN_Handbuch_v0.8.0/docs_v080/V0.8.0-ERGÄNZUNGSANHANG.pdf` | 4 Seiten (44.349 B) | `5a39c282db7b363ac41f9d2d61e84a984530c2b342e7f778eff4ccc135188d27` | ReportLab PDF · 0 PII/Tokens · LOKAL VERIFIZIERT · Teil XXII Ergänzungsanhang |
| `EDEN_Handbuch_v0.8.0/EDEN_HANDBUCH_v0.7.4.pdf` | 97 Seiten (469.964 B) | `48bcea7843b3554a5f7c0bab3a3801a8005dd7232d8b30bd116dbb30c4faee00` | `WeasyPrint 68.0` · 0 PII/Tokens · LOKAL VERIFIZIERT · Historisches Original V0.7.4 |
| `EDEN_Handbuch_v0.8.0/EDEN_HANDBUCH_v0.7.3.pdf` | 92 Seiten (445.734 B) | `3b14eb509f447fdc7cbfa7e72a1b268853ab030e9856734665bb3872f9f85b2c` | `WeasyPrint 68.0` · 0 PII/Tokens · LOKAL VERIFIZIERT · Historisches Original V0.7.3 |
| `EDEN_Handbuch_v0.8.0/EDEN_HANDBUCH_v0.7.2.pdf` | 86 Seiten (421.597 B) | `6c676bc7950296112c77d94ab54afa27c408c520bb04645fe6fabb151d260b44` | `WeasyPrint 68.0` · 0 PII/Tokens · LOKAL VERIFIZIERT · Historisches Original V0.7.2 |
| `EDEN_Handbuch_v0.8.0/EDEN_HANDBUCH_v0.6.0.pdf` | 44 Seiten (239.695 B) | `cf10b5e8aaa61017ea870984c536d1c1774ae3b8d89119190f417d8fc2aadfe5` | `WeasyPrint 68.0` · 0 PII/Tokens · LOKAL VERIFIZIERT · Historisches Original V0.6.0 |
| `EDEN_Handbuch_v0.8.0/legacy/v0.6.0/EDEN_HANDBUCH_v0.6.0.pdf` | 44 Seiten (185.730 B) | `e100a7769e4da4b0b68333ab3bdfe5d3389a7a854879529c93966abd1d6376f0` | `Title: EDEN Handbuch v0.6.0` · 0 PII/Tokens · LOKAL VERIFIZIERT · Legacy-Ausgabe V0.6.0 |
| `sources_v080/Originale-Projektquellen/#_MUDI_V2_MIT_BLUE-MERLE_DIE_ULTIMA_(1).PDF` | 10 Seiten (12.986.267 B) | `477b643d14328286225db3003b17a76aeaf9af66fb1d6c3511c870ebe5a58386` | Separate Hardware-/Router-Projektquelle (Mudi V2) · Nicht für öffentlichen Handbuch-Upload |
| Historischer EDEN-Term-Entwurf (Original im V0.8.0-Review-Archiv) | HTML-Original | `65df8c0dd4eb96a601b93fdb23a4c5b01e75175ce4112ea9c42764bb6b52e117` | LOKAL VERIFIZIERT · Historische Terminal-Designvorlage (separat archiviert) |
