# Security and Smart Contracts

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus Lottery / Security

---

## Purpose

Lottery smart contracts can hold funds, issue tickets, request randomness, calculate results, and settle prizes. Security review is mandatory before any production draw.

## Possible Components

Possible components include game mode registry, ticket manager, soulbound ticket contract if implemented, draw manager, VRF consumer, prize manager, prize vault, claims contract, Merkle claim contract, treasury fee router, and governance controller.

## Security Checklist

Rules must be immutable or versioned per draw. Ticket purchase must close before randomness request. Tickets must not be added after close. Randomness mapping, VRF callback access, prize accounting, payout logic, duplicate claim prevention, refund logic, reentrancy, access control, pause controls, upgradeability, Merkle proof logic, non-standard token behavior, tests, deployment verification, and incident response must be reviewed.

## Security Statuses

Statuses may include Not Reviewed, Internal Review, External Audit Pending, Audited, Testnet Only, Approved for Pilot, Approved for Production, and Paused. `Audited` must only be used when an audit exists with scope and report.

## Incident Response

Incident response should detect the issue, pause draw or claims where possible, preserve evidence, assess user, prize, and treasury impact, notify governance, security, and operations, determine remediation, publish or archive an incident report, and update contracts, tests, documentation, and policy.

## Related Pages

- [Security Overview](../security/overview.md)
- [Randomness and VRF](randomness-and-vrf.md)
- [Claims and Settlement](claims-and-settlement.md)
- [Risk and Compliance](risk-and-compliance.md)

