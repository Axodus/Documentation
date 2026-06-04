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
