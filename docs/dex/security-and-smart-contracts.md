# Security and Smart Contracts

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus DEX / Security

---

## Purpose

DEX smart contracts can handle swaps, pools, routing, liquidity, fees, approvals, and user funds. Security review is mandatory before production deployment or official use.

## Contract Components

Potential components include factory, pool contract, router, fee controller, incentive controller, listing registry, and treasury or fee receiver if implemented.

## Security Checklist

Security review should cover pool math, fee logic, rounding and precision, reentrancy, token approvals, non-standard ERC-20 behavior, price manipulation, oracle dependencies, access control, upgradeability, emergency pause, router path safety, MEV and sandwich risk, test coverage, deployment verification, and incident response.

## Statuses

Use `Not Reviewed`, `Internal Review`, `External Audit Pending`, `Audited`, `Issues Found`, `Approved For Test`, or `Approved For Production`. Do not claim `Audited` unless a real audit exists with scope and report.

## Incident Response

Incident response should detect the issue, pause contracts or UI if possible, assess user and treasury impact, notify required stakeholders, investigate root cause, mitigate or patch, publish or archive incident report as appropriate, and update policy, tests, or contracts.

## Related Pages

- [Security Overview](../security/overview.md)
- [Governance Alignment](governance-alignment.md)
- [Reporting and Accountability](reporting-and-accountability.md)
