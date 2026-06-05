# Smart Contract Security

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-06-05
Owner: Security

---

## Purpose

This document defines security expectations for smart contracts.

## Requirements

- Do not invent production addresses.
- Do not claim audits unless verified.
- Document upgradeability and admin permissions.
- Isolate treasury-sensitive flows.
- Validate token, reward, and governance behavior against implementation.

## Risk

Smart contracts can fail, be exploited, or behave differently than intended.

## Draft Controls

Smart contract documentation must distinguish planned, local, testnet, audited, deployed, paused, deprecated, and production-gated states. It must not publish production addresses, deployment status, audit status, upgrade authority, treasury controls, or execution claims without evidence.

Contract-facing documentation should identify:

- contract purpose and owner;
- deployment status if verified;
- audit or review status if verified;
- upgrade and pause assumptions;
- privileged roles;
- treasury or token movement sensitivity;
- known limitations and unresolved review items.

## Publication Boundary

This page does not certify any contract as audited, secure, deployed, or production-ready. Contract claims require implementation evidence, security review, and governance/coordinator approval where applicable.
