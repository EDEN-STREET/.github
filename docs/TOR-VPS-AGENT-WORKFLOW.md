# EDEN Tor VPS Testlab – konfigurierbarer Agenten- und Releaseworkflow

**Workflow-ID:** EDEN-TVPS-01 · **Version:** 0.1.0 · **Betriebsart:** DRY_RUN_STANDARD · **Freigabe:** manuell

## Auftrag

Eine wiederholbare, kontrolliert gehärtete Debian-12-/13-Testumgebung für einen KVM8-VPS vorbereiten. Kein Remote-Login, keine Änderungen an realen VPS ohne eigene Zustimmung und nachgewiesenen Provider-Rettungszugang.

## Agentenrollen

- **Discovery (read-only):** Debian-Version, Hostdaten, Tor-Repo-Kompatibilität, Provider-Grenzen und Benutzerziel festhalten.
- **Security Architect:** Datenflüsse, Host-/Client-Isolation, SSH-/Firewall-Risiken, Backups, Secrets, Trust-Quellen.
- **Implementer:** Skripte im separaten Branch entwickeln; `set -euo pipefail`; idempotente Dateiverwaltung mit Backup.
- **Verifier:** ShellCheck, Bash `-n`, negative Tests, Dry-Run, bei genehmigtem Test-VPS reale Status-/Portmessungen.
- **Reviewer:** SSH-Lockout, Keyring-Vertrauen, Tor-Relay-Freigabe und falsche DNS-Anonymitätszusagen verhindern.
- **Release Manager:** Checksumme/Version, Testbericht, Betriebshandbuch und Rollback dokumentieren.

## Eingaben

```yaml
id: EDEN-TVPS-01
version: 0.1.0
mode: dry-run
target_os: debian-13 # oder debian-12
ssh_port: 22022
admin_user: eden-node
tor_mode: client # client | onion | relay-plan
provider_console_confirmed: false
second_ssh_connection_confirmed: false
enable_ufw: false
upgrade_dist_packages: false
```

Keine privaten SSH-Keys oder Zugangstokens als Konfigurationswerte.

## Ablauf

**Host-Inventur → Snapshot/Rettungskonsole → Plan → Dry-Run → sichere Basis → Tor signiert installieren → Proxy- und Porttest → zweite SSH-Sitzung → finaler SSH-Schutz → Verifikation/Recovery**.

Jeder Schritt hat einen überprüfbaren Stopstatus; nie ungeprüft über Rot oder Unknown hinweggehen.

## Verbindliche Tests

- Syntax, Dry-Run und drei Tor-Modi.
- Negative Tests für unzulässigen SSH-Port und Tor-Modus.
- Keine öffentlich gebundenen SOCKS-/DNS-Ports.
- Tor Project GPG-Fingerprint und APT Signed-By.
- Kein root/password SSH final ohne bestätigten Zweitzugang.
- Test über `--socks5-hostname` ist ausschließlich ein Proxy- und nicht ein globaler DNS-Leak-Test.
- Keine automatische Relay-Aktivierung.

## Release

Skripte und Konfigurationen als lesbare Quellen im `labs/tor-vps/`-Pfad importieren, GitHub-Actions-CI tatsächlich ausführen, Belege/Version pinnen, Draft-PR reviewen. Ohne echte VPS-Tests keine Kennzeichnung `HARDWARE_VERIFIED`.

## Rückweg

Vor jedem realen Eingriff Provider-Snapshot und lokalen Rettungszugang nachweisen. Änderungen durch geteilte Backups unter `/var/backups/eden-tor-vps/` nachvollziehen. Ein `git reset` ist kein VPS-Rollback.
