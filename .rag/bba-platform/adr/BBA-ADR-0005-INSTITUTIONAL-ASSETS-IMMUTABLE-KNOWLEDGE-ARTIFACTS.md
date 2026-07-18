---
schema_version: "1.0.0"
document_id: "BBA-ADR-0005"
aliases: []
document_type: "ADR"
title: "Institutional Assets Are Immutable Knowledge Artifacts"
summary: "Records the proposed domain decision that Asset identity is stable and each Asset version is an immutable content and meaning snapshot."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D1"
authority_scope: "BBA.PLATFORM.DOMAIN"
authority_level: "PROJECT"
author: "BBA Domain Governance"
owner: "BBA Domain Governance"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Domain Architecture Reviewer"]
business_reviewers: ["BBA Product Reviewer"]
security_reviewers: []
approver: null
created_date: "2026-07-18"
last_updated: "2026-07-18"
last_reviewed: null
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: [{type: "DEPENDS_ON", target: "BBAPLT-RPT-006"}, {type: "RELATES_TO", target: "BBAPLT-GDE-025"}, {type: "RELATES_TO", target: "BBA-ADR-0004"}]
related_epics: ["EPIC-002"]
related_requirements: ["REQ-002-02-012"]
related_adrs: ["BBA-ADR-0002", "BBA-ADR-0003", "BBA-ADR-0004"]
related_cores: ["Institutional Asset", "Mission", "Tenant"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# BBA-ADR-0005 — Institutional Assets Are Immutable Knowledge Artifacts

## Status

PROPOSED

## Context

The BBA Platform produces and governs documentation, editorial works, media,
brand material, learning material, data, models, templates, and other
institutional results. Treating each result as a file would lose stable
identity, lineage, authority, and the distinction between content history and
delivery representation.

## Problem

If published or approved content can be edited in place, the platform cannot
reliably answer which meaning was reviewed, who authorized it, what a
publication carried, or how a later result derived from an earlier one.

## Proposed Decision

Institutional Asset is the canonical domain Aggregate Root and an immutable
knowledge artifact boundary:

* Asset identity remains stable while institutional purpose and meaning remain
  materially the same;
* each Asset version is an immutable content and meaning snapshot;
* lifecycle, authority, review, and publication metadata may evolve without
  mutating a version's content;
* a content change creates a new version of the same Asset;
* a material identity or purpose change creates a new related Asset;
* representations and publication destinations do not create a new Asset or
  version by default.

## Consequences

The domain preserves historical meaning, review evidence, publication
accountability, and lineage. Agents and humans must create versions rather than
edit approved or published snapshots. The model can represent one Asset through
multiple formats, channels, and publications without confusing those carriers
with the governed artifact.

The decision requires later domain work to define agent actions, review gates,
rights policy, retention, and publication behavior while preserving immutable
version semantics.

## Alternatives Considered

* Treat every file or representation as an independent Asset: rejected because
  it fragments identity and lineage.
* Mutate one current Asset record in place: rejected because it destroys the
  historical meaning of reviewed and published content.
* Use technical source-control versioning as the domain model: rejected because
  commits and storage snapshots do not define institutional identity or
  authority.

## Open Questions

The exact legal retention and deletion rules, version numbering vocabulary,
representation equivalence criteria, and review quorum remain open domain or
governance decisions. They must not weaken this proposed invariant.
