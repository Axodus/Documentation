# Governance Plugin Requests

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: Governance Nucleus

---

## Purpose

This document explains how DAOs may request custom governance plugins or extensions.

## Scope

It covers DAO-specific voting plugins, governance extensions, dashboards, reporting tools, automation, and approval flows.

## Why Plugins Exist

Different DAOs may require different voting rules, execution rules, eligibility rules, telemetry modules, registry integrations, product access rules, or local governance workflows. Plugins make that flexibility possible, but they also introduce governance and security risk.

## Plugin Types

- Voting plugin
- Eligibility plugin
- Execution plugin
- Treasury plugin
- Registry plugin
- Telemetry plugin
- Local DAO plugin
- Product access plugin

## Intake Fields

Plugin requests should capture requester identity, requester DAO or organization, plugin name, plugin type, business objective, governance problem, affected DAO, affected chain or contracts if known, voting or execution changes, treasury impact, product access impact, user impact, risk level, security review requirement, dependencies, testing requirements, audit requirement if any, expected lifetime, local or global scope, rollback plan, and documentation requirement.

## Request Flow

1. DAO submits request through Business.
2. Business captures requester identity, objective, scope, governance impact, budget, timeline, and dependencies.
3. ACS may assist with plugin type identification, missing information detection, risk classification, and review questions.
4. Governance validates constitutional alignment, local or global scope, and review layer.
5. Technical scoping defines contract, frontend, backend, indexer, interface, test, and security requirements.
6. Security reviews permissions, execution paths, upgradeability, and attack surface.
7. Implementation proceeds only after scope approval.
8. Validation confirms behavior with the requesting DAO.
9. Governance finalizes deployment or activation.
10. Execution receipt, documentation, registry updates, and monitoring are published where relevant.

## Scope Classification

| Scope | Meaning |
| --- | --- |
| Local | Valid only for one DAO or specific context. |
| Shared | Available to multiple DAOs and requires stronger standardization. |
| Global | Affects core Axodus governance and should be high or critical risk. |
| Experimental | Tested under limited conditions and marked experimental. |
| Deprecated | No longer recommended for new DAOs. |

## Approval Criteria

- Clear problem statement
- Defined DAO or product scope
- Constitutional alignment
- Documented risk
- Security review plan
- No uncontrolled treasury authority
- No unbounded admin power
- Clear disable or rollback path
- Test plan
- Documentation plan
- Accountability record

## Plugin Registry Concept

A future plugin registry may record plugin ID, name, type, status, scope, supported DAOs, supported chains, contract addresses, version, audit status, risk level, approval authority, and execution receipts.

## Example

A DAO may request a custom voting plugin for its local community. A DAO-specific RP Voting plugin has been discussed historically as an example of a local requirement. This documentation does not claim any such plugin is deployed or globally approved. The request must be scoped, reviewed, and approved before being treated as an official Axodus-supported component.

## Risk Considerations

Plugins can affect voting power, execution authority, treasury movement, eligibility, product access, and public legitimacy. Security review is required whenever a plugin affects official governance, critical contracts, treasury execution, or access control.
