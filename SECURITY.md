# Axodus Security

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus Core

---

## Purpose

This document defines security principles and disclosure expectations for Axodus documentation and implementation planning.

## Scope

It covers smart contracts, frontend, wallet flows, API keys, trading bots, treasury execution, governance risks, ACS limitations, and responsible disclosure placeholders.

## Security Contact

Security Contact: To be defined.

Do not add a contact address until it is confirmed by Axodus Core.

## Smart Contract Security

Contracts, ABIs, addresses, token behavior, treasury flows, governance execution, staking, rewards, and marketplace settlement are security-sensitive. Documentation must not invent production addresses, audit claims, or final contract behavior.

## Frontend Security

Frontend applications should isolate wallet logic, avoid leaking sensitive state, validate user-visible network and contract information, and keep protected routes behind appropriate connection or authorization guards.

## Wallet Security

Wallet actions must be explicit. Users should be able to inspect transaction intent, network, permissions, and asset movement before signing. Documentation must not imply that wallet interactions are risk-free.

## API Key Security

Trading API keys require least privilege. Withdrawal permissions must be disabled. Keys should be revocable, scoped, encrypted at rest when stored, and never committed to repositories.

## Trading Bot API Risk

Users retain responsibility for their own accounts, exchange permissions, risk settings, and capital exposure. Trading bots must not be described as guaranteed-profit systems.

## Treasury Execution Security

Treasury movement should require governance-defined controls, multi-signature or equivalent approval processes where appropriate, reporting, execution receipts, and risk classification.

## Governance Attack Vectors

Governance design should consider vote capture, bribery, sybil behavior, malicious proposals, rushed execution, opaque treasury movement, plugin abuse, and emergency response procedures.

## AI Agent Limitations

ACS agents may assist with classification, review, and monitoring. AI outputs can be incomplete or wrong. Security-sensitive actions require explicit human, technical, and governance validation.

## Responsible Disclosure

A formal responsible disclosure process is planned. Until a confirmed channel exists, documentation must not publish fake contact details or claim a bug bounty program.
