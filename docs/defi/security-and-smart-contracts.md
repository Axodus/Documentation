# Security and Smart Contracts

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus DeFi / Security

---

## Purpose

DeFi products are only as trustworthy as their contracts, integrations, controls, and operational security. Security review must happen before production deployment or treasury exposure.

## Scope

Security scope includes smart contracts, protocol integrations, vaults, staking contracts, reward contracts, access control, upgradeability, oracle dependencies, bridge dependencies, admin roles, frontend transaction safety, monitoring, and incident response.

## Review Types

Review types may include internal review, external audit, formal verification for specific properties, test coverage review, economic security review, and protocol due diligence.

## Smart Contract Checklist

Review should cover access control, minimized admin roles, upgradeability, pause controls, reentrancy, oracle manipulation, precision and rounding, share accounting, fee logic, withdrawal logic, reward logic, external calls, tests, deployment verification, and incident response.

## Security Statuses

Use `Not Reviewed`, `Internal Review`, `External Audit Pending`, `Audited`, `Issues Found`, `Fixed Pending Verification`, `Approved For Test`, or `Approved For Production`.

Do not claim `Audited` unless a real audit exists with scope and report.

## Incident Response

Incident response should detect the issue, pause if possible, assess impact, protect users or Treasury, notify required stakeholders, investigate root cause, fix or mitigate, produce an incident report, and update policy or contracts if needed.

## Related Pages

- [Security Overview](../security/overview.md)
- [Governance Alignment](governance-alignment.md)
- [Runtime Overview](../runtime/overview.md)
- [Reporting and Accountability](reporting-and-accountability.md)
