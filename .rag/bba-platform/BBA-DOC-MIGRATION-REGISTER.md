---
schema_version: "1.0.0"
document_id: "BBA-REF-003"
aliases: []
document_type: "REFERENCE"
title: "BBA Platform Documentation Migration Register"
summary: "Registers the controlled migration from Axodus-specific BBA material to the neutral BBA Platform documentation model."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D1"
authority_scope: "BBA.PLATFORM.DOCUMENTATION"
authority_level: "PROJECT"
author: "BBA Documentation Governance"
owner: "BBA Documentation Governance"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["BBA Product Reviewer"]
security_reviewers: []
approver: null
created_date: "2026-07-18"
last_updated: "2026-07-18"
last_reviewed: null
review_cycle: "QUARTERLY"
next_review: "2026-10-18"
supersedes: []
relationships: [{type: "RELATES_TO", target: "BBA-POL-001"}, {type: "RELATES_TO", target: "BBA-REF-002"}]
related_epics: ["EPIC-000", "EPIC-001", "EPIC-002"]
related_requirements: ["REQ-000-004"]
related_adrs: ["BBA-ADR-0001", "BBA-ADR-0003"]
related_cores: []
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/bba-agency/", ref: "main", kind: "SOURCE", environment: "LOCAL"}, {repository: "Axodus/Documentation", path: ".knowledge/bba/", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA Platform Documentation Migration Register

## Scope

The register covers current public BBA pages under `docs/bba-agency/`, semantic
knowledge under `.knowledge/bba/`, and Business-linked BBA knowledge under
`.knowledge/business/bba/`.

## Required Fields

| Field | Meaning |
| --- | --- |
| Origin | Existing source path and authority context. |
| Destination | Target private or public platform path. |
| Migration Strategy | Preserve, adapt, split, supersede, or defer. |
| Confidence | Evidence confidence in the classification. |
| Blocking Issues | Missing decisions, evidence, ownership, or review. |
| Replacement Document | Canonical target when one exists. |
| Publication Candidate | Whether a sanitized public projection may be considered. |
| Migration Phase | Foundation, Product, Domain, Architecture, Development, or Operations. |

## Initial Classification Rules

- Existing URLs are preserved until a reviewed replacement and redirect exist.
- Axodus-specific claims remain consumer documentation unless generalized and
  separately approved.
- Existing knowledge packs are inputs, not automatic platform authority.
- Conflicts with the Ubiquitous Language become blocking issues.
- No migration is authorized by this register alone.

## Register Status

The initial source inventory is established by the paths above. Individual
source entries will be added by a future migration REQ with evidence-backed
classification; this Sprint 0 document does not rewrite legacy content.
