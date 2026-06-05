# Documentation Publication Governance

Status: Candidate
Version: 0.1.0
Last Updated: 2026-06-05
Owner: Documentation Coordinator

---

## Purpose

This document defines the governance process required before Axodus VitePress documentation can be published or presented as official.

REQ-09 defines governance only. It does not publish documentation and does not authorize any publication command.

## Publication States

| State | Meaning |
|---|---|
| DRAFT | Work in progress; not official and not approved for publication. |
| CANDIDATE | Structurally prepared and ready for review; still not approved. |
| VALIDATED | Validation evidence exists, but approval is still required. |
| APPROVED_FOR_PUBLICATION | Coordinator approval and required domain reviews are recorded. |
| PUBLISHED | Released through the approved VitePress publication process. |
| DEPRECATED | Replaced or retired, retained for historical context. |
| RETRACTED | Removed or rolled back because of a defect, unsafe claim, or approval issue. |

## Required Rule

No documentation may be published or presented as official unless it reaches `APPROVED_FOR_PUBLICATION` with explicit coordinator approval and required domain reviews.

## Approval Flow

1. Draft content is prepared in the Documentation workspace.
2. Structural, build, inventory, correction, link, content, and claim-safety validation evidence is collected.
3. Domain reviewers approve their required areas.
4. Coordinator reviews the complete release package.
5. Publication command, target, operator, version, and rollback path are explicitly authorized.
6. Publication executes only in a separate approved publication request.
7. Post-publication audit confirms target, links, status, and rollback readiness.

## Review Roles

| Role | Responsibility |
|---|---|
| Documentation Coordinator | Owns release package, checklist, and publication governance. |
| Portfolio Coordinator | Approves portfolio-level publication posture and cross-nucleus conflicts. |
| Nucleus Owner | Reviews local domain accuracy and maturity claims. |
| Governance Reviewer | Reviews DAO, approval, execution receipt, and governance authority claims. |
| Security Reviewer | Reviews security, wallet, API, smart-contract, credential, and disclosure claims. |
| Financial/Compliance Reviewer | Reviews APY, returns, tokenomics, treasury, payouts, trading, and financial claims. |
| Legal/Compliance Reviewer | Reviews legal, liability, jurisdiction, disclosure, bounty, compliance, and public claim risk. |
| Release Operator | Runs publication only after separate authorization. |

## Release-Blocking Conditions

Publication is blocked if any condition exists:

- coordinator approval is missing;
- required domain review is missing;
- publication target is unknown or unapproved;
- publication command is not explicitly authorized;
- rollback owner or rollback process is undefined;
- package/deployment/CI changes are required but not approved;
- security contact is not approved for disclosure pages;
- tokenomics source-of-truth verification is incomplete;
- financial, governance, legal, security, or production-readiness claims lack evidence;
- secret, credential, private endpoint, wallet, or operational leakage is found;
- documentation claims exceed current maturity.

## VitePress Publication Boundaries

- VitePress is the active documentation platform.
- Local source changes are not publication.
- Local build success is not publication approval.
- Candidate validation is not publication approval.
- REQ-09 governance evidence is not publication execution.
- Publication requires a separate approved request.

## No-Publication Default

Publication is disabled by default. Any ambiguous publication state must be treated as not approved.

## Emergency Correction Process

Emergency correction may be proposed when published documentation contains unsafe or incorrect material. Emergency correction still requires:

- issue summary;
- affected page or route;
- rollback or patch recommendation;
- coordinator approval;
- security/legal/financial/governance review when relevant;
- post-correction audit record.

## Post-Publication Accountability

Every publication must leave an audit trail:

- release identifier;
- source commit;
- approval evidence;
- publication command;
- publication target;
- operator;
- timestamp;
- validation evidence;
- known warnings;
- rollback path;
- post-publication audit result.
