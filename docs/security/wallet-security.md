# Wallet Security

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-06-05
Owner: Security

---

## Purpose

Wallet security documentation helps users and developers understand signing and permission risks.

## Requirements

- Clearly show network and transaction intent.
- Avoid blind approvals.
- Document token approvals and revocation paths where applicable.
- Treat wallet-protected flows as sensitive.

## Draft Controls

Wallet documentation must distinguish education, preview, simulation, approval, signing, and execution. Draft pages must not imply that wallet signing, treasury movement, settlement, swaps, payouts, or on-chain writes are enabled unless the relevant product documentation and governance/security approvals support that status.

Wallet-facing content should describe:

- which network is expected;
- what action the user is reviewing;
- whether the action is read-only, simulated, testnet, or production-gated;
- what permissions or approvals may be requested;
- how users can identify risk before signing;
- where revocation or support guidance lives when applicable.

## Publication Boundary

This page does not approve any wallet flow for production use. Wallet execution claims require security review, product owner review, and explicit coordinator approval before publication.
