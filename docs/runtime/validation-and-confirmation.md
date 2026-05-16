# Validation and Confirmation

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: Axodus Runtime

---

## Purpose

Validation and confirmation make Runtime trustworthy. Validation checks whether information, scope, assumptions, analysis, deliverables, or execution are correct. Confirmation records that the responsible authority accepted a step, decision, or output.

## Scope

This page applies to intake, classification, ACS output, scope, governance, security, treasury, delivery, acceptance, and archive workflows.

## Validation vs Confirmation

Validation is a quality and correctness check. Confirmation is an explicit approval, acceptance, or record by the responsible party.

Example: ACS summarizes a request, the Business owner validates the summary, the requester confirms the scope, Governance confirms approval if required, reviewers validate delivery, and the requester or owner confirms acceptance.

## Validation Types

- Intake validation: requester identity, objective, fields, and missing information.
- Classification validation: domain, risk level, owner, and governance requirement.
- ACS output validation: summary accuracy, assumptions, risk flags, missing information, and unsupported claims.
- Scope validation: deliverables, boundaries, dependencies, acceptance criteria, and change policy.
- Governance validation: constitutional alignment, proposal context, approval path, and decision record.
- Security validation: permissions, contracts, data, tool access, API keys, and secret handling.
- Treasury validation: capital impact, exposure, reporting, and governance approval.
- Delivery validation: output matches scope, reviews are complete, documentation exists, and known limitations are disclosed.
- Acceptance validation: requester or owner accepts delivery and unresolved items are recorded.

## Confirmation Gates

Confirmation gates include intake confirmation, scope confirmation, governance confirmation, execution confirmation, delivery confirmation, acceptance confirmation, and archive confirmation.

## Confirmation Record Fields

Confirmation records should include confirmation identifier, runtime identifier, confirmation type, confirmer, authority role, confirmed scope, conditions, timestamp, related record, and notes.

## Decision Types

Validation decisions may be `Validated`, `Validated With Notes`, `Needs Revision`, `Rejected`, `Escalated`, or `Blocked`.

## Who Validates What

Business owners validate client context, intake accuracy, business fit, and client communication. Product owners validate domain accuracy and product scope. Governance validates policy-sensitive items, DAO federation, plugin approval, treasury impact, and tokenomics impact. Security reviewers validate contracts, APIs, permissions, tool risk, and sensitive infrastructure. Treasury reviewers validate exposure and financial reporting. Requesters validate whether delivery matches requested scope.

ACS assists with analysis, consistency checks, and risk detection, but it does not final-validate sensitive items or approve its own output.

## Anti-Patterns

Avoid implicit confirmation, validation by an unqualified actor, ACS self-approval, scope confirmation after execution, delivery validation without acceptance criteria, and missing governance validation for sensitive decisions.

## Related Pages

- [ACS Integration](acs-integration.md)
- [Risk Controls](risk-controls.md)
- [Accountability Records](accountability-records.md)
