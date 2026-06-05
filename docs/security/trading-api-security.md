# Trading API Security

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-06-05
Owner: Security

---

## Purpose

Trading API security protects user accounts and ecosystem trading systems.

## Requirements

- Use least-privilege API keys.
- Disable withdrawals.
- Prefer IP restrictions where available.
- Encrypt stored secrets.
- Support revocation.
- Document exchange and automation risk.

## User Responsibility

Users remain responsible for API permissions, account configuration, and capital exposure.

## Draft Controls

Trading API documentation must default to least privilege and paper/local or explicitly approved environments. It must not imply live trading, withdrawals, treasury movement, user account management, or production exchange execution unless a separate approved request and security review authorize that status.

Sensitive trading API guidance should preserve:

- withdrawal-disabled API key requirements;
- limited scopes and revocation paths;
- clear account-owner responsibility;
- no-profit and loss-risk language;
- separation between signal, simulation, assisted action, and execution;
- secure storage requirements for any approved credential flow.

## Publication Boundary

This page does not approve live trading or exchange access. Production trading claims require product owner, security, financial/compliance, and coordinator review.
