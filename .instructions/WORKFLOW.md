# Documentation Nucleus Workflow

Status: Active Recovery
Version: 0.1.0
Last Updated: 2026-06-04
Owner: Documentation Coordinator

---

## Change Proposal Workflow

1. Identify the documentation scope.
2. Read root global `.instructions`.
3. Read Documentation `.instructions`.
4. Read affected nucleus `.instructions` when product-specific claims are involved.
5. Draft changes in the appropriate documentation state.
6. Record blockers or source conflicts.
7. Validate using `.instructions/VALIDATION.md`.
8. Request review and approval before publication.

## Review Workflow

Reviews must check:

- source-of-truth alignment;
- maturity/status claims;
- risk and compliance language;
- product/runtime claim accuracy;
- financial/token/treasury wording;
- links and navigation;
- status metadata;
- publication boundaries.

## Validation Workflow

Validation is staged:

- Candidate validation checks structure, metadata, source references, risk language, and no-execution boundaries.
- Approved validation checks owner/reviewer/approver evidence and unresolved blocker status.
- Published validation checks final publication target, links, and version metadata.

## Approval Workflow

Documentation can be drafted by authorized contributors. Approval depends on scope:

- Documentation-only quality changes: Documentation Coordinator.
- Nucleus-specific claims: affected Nucleus Owner.
- Portfolio-level claims: Portfolio Coordinator.
- Financial, treasury, tokenomics, compliance, wallet, trading, DEX, marketplace, mining, lottery, or execution claims: Safety Reviewer and Portfolio Coordinator.
- Governance-impacting claims: Governance owner or coordinator approval.

## Publication Workflow

1. Candidate package prepared.
2. Validation checklist completed.
3. Required reviews recorded.
4. Publication authority confirmed.
5. Publish only through approved documentation pipeline.
6. Record version, status, publication date, and source references.

REQ-02 does not approve publication.

## VitePress Workflow

1. Draft documentation change.
2. Local structural review.
3. VitePress inventory alignment.
4. Candidate validation.
5. Approval review.
6. Publication authorization.
7. Published release.
8. Post-publication audit.

Documentation source changes do not equal publication approval.

A successful local build does not equal publication approval.

Published docs must not contain unapproved financial, tokenomics, treasury, APY, governance, legal, or production-readiness claims.

REQ-03 completes inventory alignment only. It does not approve VitePress build, preview, deployment, publication, or release claims.

## Content Change Workflow

Documentation content changes must follow this workflow:

1. Inventory.
2. Editorial gap analysis.
3. Draft correction.
4. Candidate validation.
5. Approval review.
6. Publication authorization.
7. Publication.
8. Post-publication audit.

Rules:

- Draft content is not official documentation.
- Candidate content is not publication approval.
- Passing local build is not publication approval.
- Publication requires explicit approval.
- Financial, tokenomics, APY, treasury, governance, legal, security, and execution-sensitive claims require enhanced review.
- Content rewrites must not start before the content inventory and editorial gap analysis are documented.

## REQ-04 to REQ-05 Build Handoff Workflow

1. Complete structural validation without running a build.
2. Confirm package scripts and dependency evidence.
3. Confirm local build command appears local-only.
4. Confirm output directories are ignored/generated.
5. Record package manager ambiguity or decision.
6. Hand off to REQ-05 only with documented proceed status.

REQ-04 does not authorize build execution.

REQ-05 may run only the approved local build validation command and must not install dependencies, publish docs, start dev/preview servers, change package files, or change deployment configuration.

## Local Build Validation Workflow

Local VitePress build validation is allowed only after structural readiness is documented.

Rules:

- Local build does not equal publication.
- Local build does not approve content.
- Local build does not approve financial, tokenomics, APY, treasury, governance, legal, security, production-readiness, or execution claims.
- Build output must not be staged unless explicitly approved.
- Publication remains disabled until REQ-09 or a separately approved publication request.
- REQ-05 output may be used as evidence for REQ-06 content inventory, but not as publication authority.

## Documentation States

| State | Meaning |
|---|---|
| Draft | Work in progress; not official. |
| Candidate | Structurally complete and ready for review; not published or approved. |
| Approved | Reviewed and accepted for its scope; not necessarily published. |
| Published | Available through approved public documentation surface. |
| Deprecated | Replaced or retired; retained for history only. |

## Boundary

Documentation changes must not alter runtime behavior. Documentation cannot enable production execution, wallet signing, treasury movement, trading, swaps, payouts, settlement, credentials, or on-chain writes.
