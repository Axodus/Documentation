# Business Accountability

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: Axodus Business / Accountability

---

## Purpose

Business accountability ensures that requests, scopes, governance reviews, changes, deliveries, acceptances, and reports can be audited later by Axodus operators, governance participants, contributors, clients, DAOs, or future agents.

## Scope

This page covers records created by the Business runtime. Public reporting rules are defined by the broader [Accountability](../accountability/overview.md) layer.

## Required Record Types

- Intake records: preserve requester, objective, context, classification, missing information, risks, and next steps.
- Scope records: define approved deliverables, boundaries, assumptions, dependencies, milestones, and acceptance criteria.
- Governance review records: show why review was required, which layer reviewed, what decision was made, and what conditions apply.
- Change request records: preserve requested changes, impacts, decisions, approvals, and updated scope references.
- Delivery records: show what was delivered, by whom, against which scope, with which artifacts and limitations.
- Acceptance records: show accepted deliverables, unresolved items, support expectations, and final notes.
- Reporting records: summarize material status, risks, outcomes, and links to relevant governance or delivery artifacts.
- Archive records: preserve final references and lessons learned.

## Accountability Flow

1. Intake creates the first request record.
2. Classification adds risk, owner, and governance fields.
3. Scope establishes the executable baseline.
4. Governance review is attached where required.
5. Delivery records track milestones and artifacts.
6. Change requests update the baseline only after review.
7. Acceptance confirms completion or unresolved items.
8. Reporting publishes or stores material outcomes.
9. Archive preserves the complete reference trail.

## Relationship to Governance Accountability

Business accountability supports governance accountability by providing structured evidence for proposals, DAO service requests, plugin requests, treasury-sensitive requests, product access decisions, public claims, and execution receipts.

When a Business request has material governance impact, the Business record should link to the relevant governance record rather than replacing it.

## Minimum Records by Request Class

- Low-risk documentation or service work: intake, scope, delivery, and acceptance records.
- DAO service request: intake, authority context, governance review if sensitive, scope, delivery, and acceptance records.
- Plugin request: intake, ACS analysis, governance review, security review plan, technical scope, validation, registry update, and execution receipt if activated.
- BBA campaign: campaign scope, claim review, approval record, delivery report, and metric limitations.
- Trading or treasury-related request: risk disclosure, review record, scope, delivery record, and no-performance-promise language.
- Tokenomics or Academy reward request: policy review, contract-behavior validation notes where relevant, scope, risk disclosure, and acceptance record.

## Risk Considerations

Missing records create scope disputes, governance gaps, poor handoffs, weak public accountability, and future agent confusion. Acceptance should not depend on silence or private memory.

## Future Work

- Define record templates.
- Define retention rules and storage locations.
- Link Business records with governance records, release notes, and public accountability reports.
