# Security and Custody

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-17
Owner: Axodus Mining / Security

---

## Purpose

Mining operations depend on wallets, payout addresses, pool accounts, validator keys, API keys, infrastructure access, hardware access, monitoring dashboards, and operator credentials.

## Security Scope

Scope includes payout wallets, treasury wallets, pool accounts, worker credentials, validator keys, node keys, API keys, hosting provider access, monitoring dashboards, hardware access, remote management, firmware updates, user dashboard access, and payout configuration.

## Custody Models

Custody models may include treasury custody, user direct payout if approved, pooled accounting if policy supports it, provider custody with counterparty risk, and validator key custody.

## Controls

Controls include multisig for treasury wallets, payout address verification, address change review, transaction monitoring, pool account 2FA if available, read-only pool APIs where possible, validator key separation, slashing protection if applicable, least privilege access, secure remote access, firmware integrity, logging, authentication, and privacy controls.

## Incident Types

Incidents include payout address compromise, pool account compromise, validator key issues, hardware tampering, dashboard data exposure, and monitoring failure.

## Security Note

Public documentation must not expose private keys, exact credentials, sensitive facility data, or exploitable procedures.

