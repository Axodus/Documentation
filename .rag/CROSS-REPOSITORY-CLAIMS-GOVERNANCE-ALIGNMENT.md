---
schema_version: "1.0.0"
document_id: "DOC-RPT-081"
aliases: []
document_type: "REPORT"
title: "Cross-Repository Claims Governance Alignment"
summary: "Aligns claim classes, authority, evidence, and publication state between Documentation and Institutional without strengthening or copying claims."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "DOCUMENTATION.EPIC_04.INSTITUTIONAL_INTAKE"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer", "Validation Framework Maintainer"]
business_reviewers: ["Institutional Editorial Reviewer", "Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-14"
last_updated: "2026-07-14"
last_reviewed: "2026-07-14"
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: []
related_epics: ["DOCUMENTATION-EPIC-04"]
related_requirements: ["DOCUMENTATION-REORG-INTAKE-REQ-02"]
related_adrs: ["DOC-ADR-014", "DOC-ADR-017"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Institutional", path: "research/claims-register.md", ref: "b921dace4d6be81b2233e09981108a6b29794e70", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: ".rag/DOCUMENTATION-EVIDENCE-FRAMEWORK.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: "institutional-disclosure/cross-core-disclosure-governance-standard.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Cross-Repository Claims Governance Alignment

## Control Flags

```text
Request: DOCUMENTATION-REORG-INTAKE-REQ-02
Cross-Repository Content Copy: NOT_AUTHORIZED
Controlled Absorption: NOT_AUTHORIZED
Institutional Mutation: NOT_AUTHORIZED
Paper Mutation: NOT_AUTHORIZED
Public Disclosure Expansion: NOT_AUTHORIZED
Private Disclosure Mutation: NOT_AUTHORIZED
Relationship Mutation: NOT_AUTHORIZED
Production: NOT_ENABLED
Financial Gates: PRESERVED_CLOSED
```

## Purpose

This report aligns how claims are classified, evidenced, and consumed across
Institutional and Documentation. It does not reproduce claim rows verbatim and
does not upgrade any claim's publication approval.

## Claim Authority Model

| Claim scope | Authority |
|---|---|
| Public Institutional and paper wording | Institutional |
| Documentation internal evidence or repository state | Documentation |
| Private Track B/C claims | Documentation private governance |
| Technical implementation claims | Evidence and scope owner, not merely prose |

## Claim Classes

| Class | Meaning |
|---|---|
| `INSTITUTIONAL_PUBLIC_CLAIM` | A public or paper claim owned by Institutional |
| `PAPER_CLAIM` | A claim specific to manuscript framing or paper readiness |
| `DOCUMENTATION_INTERNAL_CLAIM` | A Documentation repository claim about governance, validation, or state |
| `TECHNICAL_IMPLEMENTATION_CLAIM` | A claim that requires implementation or runtime evidence |
| `PRIVATE_CONTROLLED_CLAIM` | A private or restricted claim not eligible for public intake |
| `HISTORICAL_CLAIM` | A preserved statement about a past state |
| `CONFLICTING_CLAIM` | A claim whose wording, evidence, or authority conflicts across surfaces |
| `UNVERIFIED_CLAIM` | A claim lacking sufficient evidence or owner confirmation |

## Evidence Requirements

- Public or paper claims retain Institutional source revision and status.
- Technical implementation claims require technical evidence, not only approved
  wording.
- Internal Documentation claims require repository-local evidence.
- Private controlled claims stay out of public or paper outputs unless a
  separate disclosure decision authorizes them.

## Publication States

Institutional claim status remains source-controlled and revision-bound.
Documentation intake may record:

- source claim identifier;
- source revision;
- class;
- evidence status;
- consumer mode; and
- review dependencies.

It may not record an imported claim as globally approved public truth.

## Institutional Claims

Institutional claim records remain authoritative for:

- allowed wording within the Institutional source revision;
- blocked or conditional public/paper phrasing; and
- editorial or public-readiness qualifiers.

## Paper Claims

Paper claims remain a narrower subset with separate evidence and readiness
gates. A claim allowed institutionally may still remain blocked or abstracted
for paper use.

## Documentation Internal Claims

Documentation internal claims may describe repository facts such as:

- validation status;
- generator determinism;
- registry synchronization;
- documentary boundary enforcement.

Those claims remain distinct from Institutional external claims.

## Technical Implementation Claims

Any claim about implementation, operation, production, users, performance,
adoption, or execution must remain evidence-bound to technical or operational
proof. Source wording alone is insufficient.

## Private Controlled Claims

Private Track B/C, legal-sensitive, financial, or execution-sensitive claims
remain outside REQ-02 scope. They may be referenced only as excluded classes or
blocking dependencies.

## Historical Claims

Historical claims remain historical. Intake metadata may preserve provenance
but may not convert a historical record into a current approval.

## Conflict Handling

1. When a claim has different wording across scopes, keep each source scope.
2. When a claim lacks technical evidence, it cannot be upgraded to a technical
   implementation claim.
3. When a claim is blocked or contrary in the Institutional source, REQ-02 may
   not override it.

## Unverified Claim Handling

Unverified claims remain unverified after intake. They may be registered as:

- `UNVERIFIED_CLAIM`;
- `INSTITUTIONAL_PUBLIC_CLAIM` with bounded source status; or
- `CONFLICTING_CLAIM`

depending on source evidence and scope.

## Consumer Guidance

Documentation intake does not convert a claim into an approved public claim.

REQ-03 may only absorb claim metadata, scope, qualifiers, source identifiers,
and provenance rules. It must not:

- strengthen wording;
- remove qualifiers;
- infer implementation evidence; or
- imply broader approval than the Institutional source grants.

## Final Decision

```text
Knowledge family: claims register
Consumer mode: DUAL_AUTHORITY_BY_SCOPE
Mirror scope: claim metadata, provenance, class, and review state only
REQ-03 release: RELEASE_FOR_CONTROLLED_ABSORPTION
```

Claims intake remains metadata-only and explicitly non-authoritative until
Documentation review of the exact target surface.
