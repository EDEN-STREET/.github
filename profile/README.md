# 🌿 EDEN — Projektübersicht

**EDEN** ist ein modulares, dokumentationsorientiertes Plattformprojekt für Geräteinventar, sichere Konfiguration, nachvollziehbare Workflows, Lernmaterial und Support. **Status: Entwicklung / Vorschau.** Konzept, Implementierung und real getestete Funktionen sind getrennt zu betrachten.

> **Einstieg:** [LAPTOP-OS](https://github.com/EDEN-STREET/LAPTOP-OS) · [Handbuch-Navigation](https://github.com/EDEN-STREET/LAPTOP-OS/blob/main/docs/WIKI_UND_HANDBUCH.md) · [Gate-5-Installationsvorbereitung (Entwurf)](https://github.com/EDEN-STREET/LAPTOP-OS/pull/9)

## 🧭 EDEN auf einen Blick

```text
                              EDEN
                               |
          +--------------------+--------------------+
          |                    |                    |
      PLATTFORM             GERÄTE               WISSEN
          |                    |                    |
    +-----+-----+        +-----+-----+        +-----+-----+
    |           |        |     |     |        |     |     |
  Skills     Workflows  Laptop Router Pixel  Wiki Handbuch Academy
    |           |        |     |     |        |     |     |
  Tests     Freigaben   Qubes  Mudi  Mobile  Guides PDF* Übungen
    |           |
  Versionen  Recovery
```

*PDF-Verfügbarkeit: Das historische vollständige Handbuch ist **noch nicht als geprüftes öffentliches PDF verlinkt**. Seitenzahl, Dateiversion, Rechte und eventuelle sensible Inhalte müssen vor Veröffentlichung überprüft werden.*

## 🚀 Welcher Einstieg passt?

| Niveau | Einstieg | Was ist derzeit verfügbar? |
|---|---|---|
| **Einsteiger** | [Projekt-README](https://github.com/EDEN-STREET/LAPTOP-OS#readme) | Geführter npm-Vorschaustarter unter Windows, kein OS-Installer |
| **Fortgeschrittene** | [Wiki und Handbuch](https://github.com/EDEN-STREET/LAPTOP-OS/blob/main/docs/WIKI_UND_HANDBUCH.md) | Struktur, Begriffe und Navigationskonzept |
| **Entwickler** | [Quellcode und Tests](https://github.com/EDEN-STREET/LAPTOP-OS) | npm-Projekt, Tests, Entwicklungsversionen |
| **Security/Architektur** | [Gate 5 Draft PR](https://github.com/EDEN-STREET/LAPTOP-OS/pull/9) | Hardware-Preflight-Spezifikation; keine Installationsfreigabe |

## 🧱 Projektbereiche

- **LAPTOP-OS:** Qubes/Whonix als Zielarchitektur; Windows-Preflight und nicht-destruktiver npm-Starter als Ausgangspunkt. [Repository](https://github.com/EDEN-STREET/LAPTOP-OS).
- **ROUTER:** Geplante separate Geräte- und Konfigurationsstrecke für Mudi V2; noch kein eigenständiges Repository bestätigt.
- **PIXEL/MOBILE:** Geplante mobile Strecke; noch kein eigenständiges Repository bestätigt.
- **Plattformkern:** Vorgesehene Dienste für Inventar, Workflows, Richtlinien, Audit und Support; Architekturkonzept, nicht vollständig implementiert.
- **Academy / Handbuch / Wiki:** Lernpfade vom Einstieg bis zur technischen Vertiefung; vollständige PDF-Ausgabe noch zu verifizieren.
- **DkZ™ Terminal:** Gewünschter aktueller Name der Terminal-Oberfläche. In bestehendem Quellcode und README kann noch der historische Name NOUZ vorkommen.

## 🔄 Reproduzierbarer Workflow

```text
ANFORDERUNG
    |
    v
INVENTAR -> RISIKEN -> PREFLIGHT -> DRY-RUN
                                  |
                                  v
                            FREIGABE?
                            /      \
                         NEIN      JA
                          |         |
                       STOPP     AUSFÜHRUNG
                                    |
                                    v
                              TEST + AUDIT
                                    |
                             +------+------+
                             |             |
                          BESTANDEN    FEHLER
                             |             |
                         VERSION      RECOVERY
```

**Statusbegriffe:** `KONZEPT` → `IMPLEMENTIERT` → `GETESTET` → `FREIGEGEBEN`. Ohne belastbare Nachweise kein Statussprung.

## 📚 Dokumentationsstandard (geplant)

Jeder Bereich erhält eine Einstiegserklärung, eine technische Referenz, ASCII-Diagramme, Glossar, Voraussetzungen, Schrittfolgen, Sicherheitshinweise, Testfälle, Fehlerdiagnose, Wiederherstellung, Versionshistorie und Quellen. PDF-Dateien werden erst nach Sichtung auf vertrauliche Informationen, Herkunft und Veröffentlichungsrechte hochgeladen. Die GitHub-Startseite verlinkt PDFs; sie kann PDFs nicht vollständig als eingebettete Dokumente im README darstellen.

## 🔐 Sicherheit und Projektstatus

- **Keine automatische Festplattenlöschung oder Qubes-Installation** durch den aktuellen npm-Starter.
- **Kein automatischer Fernzugriff** allein durch Verbindung mit demselben Heimrouter.
- **Kein Anonymitätsversprechen** durch VPN, Tor oder zusätzliche Router.
- **Keine Veröffentlichung** von Passwörtern, Tokens, persönlichen Hardwarekennungen oder unveröffentlichtem Quellmaterial.
- Änderungen an stabilen Versionen über Branch, Review, Tests und dokumentierte Freigabe.

**Projektverwaltung:** [GitHub-Organisation](https://github.com/EDEN-STREET) · [LAPTOP-OS Issues](https://github.com/EDEN-STREET/LAPTOP-OS/issues) · [Gate-5-Entwicklung](https://github.com/EDEN-STREET/LAPTOP-OS/pull/9).

_Dies ist der übergreifende Projektindex. Weitere Repositories und das vollständige PDF-Handbuch werden erst nach tatsächlicher Erstellung bzw. Prüfung verlinkt._
