# Business Runtime

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: Axodus Business

---

## Purpose

The Business runtime gives every request a beginning, middle, and end. It protects Axodus and requesters from informal promises, hidden scope expansion, governance bypass, unclear delivery, and missing records.

## Scope

This runtime applies to Business-managed requests across client services, DAO services, custom development, governance plugins, BBA campaigns, Academy programs, Marketplace integrations, Trading access support, ACS workflows, and internal nucleus requests.

## Lifecycle

1. Intake: capture the request, requester, objective, and initial context.
2. Classification: define request type, domain, risk, owner, and governance requirement.
3. ACS-assisted analysis: summarize context, identify gaps, flag risks, and draft questions.
4. Human review: validate ACS interpretation and decide whether the request is viable.
5. Governance requirement check: determine whether formal governance review is required.
6. Scope definition: define deliverables, boundaries, assumptions, dependencies, milestones, and acceptance criteria.
7. Cost and resource estimate: estimate effort, funding model, owners, and constraints.
8. Approval: record the correct client, DAO, internal, governance, or security authorization.
9. Execution: coordinate implementation, documentation, campaign, report, configuration, or service work.
10. Milestone validation: review progress against scope and acceptance criteria.
11. Change request handling: classify and decide new or changed demands.
12. Delivery: submit completed deliverables with relevant notes.
13. Acceptance: record approval, rejection, unresolved items, or support needs.
14. Reporting: create delivery, governance, accountability, or public updates where needed.
15. Archive: preserve final context, links, decisions, and lessons learned.

## Runtime Statuses

Business requests may use statuses such as `New`, `Intake Incomplete`, `Classified`, `Under ACS Analysis`, `Under Business Review`, `Governance Review Required`, `Ready for Scoping`, `Scoped`, `Estimate Pending`, `Pending Approval`, `Approved`, `In Delivery`, `Blocked`, `Change Request Open`, `Delivered`, `Accepted`, `Rejected`, and `Archived`.

## Decision Gates

- Intake gate: is there enough information to classify?
- Classification gate: what domain, risk, and owner apply?
- Governance gate: does this need governance review?
- Scope gate: are deliverables, boundaries, and acceptance criteria defined?
- Approval gate: has the correct authority approved execution?
- Delivery gate: do deliverables match scope?
- Acceptance gate: has the requester or owner accepted completion?
- Archive gate: are records, links, and reports preserved?

## Governance Escalation Triggers

Escalate requests involving custom DAO governance plugins, DAO federation or product access, treasury-sensitive actions, token rewards or unlock policy, Marketplace fee policy, Academy reward policy, Trading strategy access rules, ACS permission expansion, public claims about Axodus governance or tokenomics, or constitutional alignment questions.

## ACS Runtime Support

ACS may support intake summarization, classification, scoping, governance route suggestions, Coder handoffs, documentation drafts, change request comparison, report drafting, and accountability summaries. ACS support is advisory until reviewed.

## Change Request Logic

New requests after approval must be logged. Scope expansion requires review. Additional cost, time, risk, resources, or governance impact must be documented before work proceeds. Clients, DAOs, partners, and internal owners must receive transparent updates.

## Anti-Patterns

- Moving from intake directly to execution without scope.
- Ignoring the governance gate for sensitive requests.
- Treating ACS output as an approved commitment.
- Estimating work before scope is clear.
- Delivering without acceptance criteria.
- Handling change requests only in chat.
- Closing work without an archive record.

## Future Work

- Define canonical runtime status metadata.
- Add templates for scope, estimate, approval, delivery, acceptance, and archive records.
