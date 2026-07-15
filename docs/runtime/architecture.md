---
schema_version: "1.0.0"
document_id: "RUNTIME-GDE-007"
aliases: []
document_type: "GUIDE"
title: "Runtime Architecture"
summary: "Defines the layers, data objects, integration surfaces, and invariants of the Runtime documentation model."
version: "1.0.0"
publication_status: "APPROVED"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "RUNTIME"
authority_level: "CORE"
author: "Axodus Runtime"
owner: "Axodus Runtime"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-05-16"
last_updated: "2026-07-14"
last_reviewed: "2026-07-14"
review_cycle: "QUARTERLY"
next_review: "2026-10-14"
supersedes: []
relationships: [{type: "RELATES_TO", target: "RUNTIME-GDE-001"}, {type: "RELATES_TO", target: "RUNTIME-GDE-003"}]
related_epics: ["DOCUMENTATION-EPIC-03"]
related_requirements: ["AXODUS-DOCUMENTATION-EPIC-03-REQ-10"]
related_adrs: ["DOC-ADR-018", "DOC-ADR-023"]
related_cores: ["RUNTIME"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/runtime/architecture.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Runtime Architecture

---

## Purpose

Runtime architecture separates operational concerns so request intake, analysis, governance approval, scoping, execution, validation, and accountability do not collapse into one informal workflow.

## Scope

This architecture is transversal and can be reused by Business, Governance, ACS, Academy, Trading, Treasury, Marketplace, BBA, documentation, and technical delivery.

Its integration surfaces are conceptual and documentation-governed unless
separately verified. They do not, by themselves, prove live production
integration, active providers, or enabled execution channels.

## Architecture Layers

- Intake layer: captures request, requester, source, and initial context.
- Context layer: gathers existing documentation, knowledge packs, related nuclei, and previous records.
- Classification layer: assigns domain, request type, risk level, governance touchpoints, and required reviews.
- Analysis layer: supports ACS summaries, missing information detection, risk flags, and recommendations.
- Validation layer: handles human review, domain review, correction of agent output, and readiness confirmation.
- Governance layer: routes proposals, constitutional review, DAO federation review, treasury review, tokenomics review, and formal approval.
- Scoping layer: defines deliverables, boundaries, assumptions, acceptance criteria, and milestones.
- Execution layer: transfers approved work to Coder, operators, governance executors, or implementation teams.
- Monitoring layer: tracks milestones, blockers, delays, and status updates.
- Change control layer: records requested changes, classifies impact, and routes reapproval when needed.
- Acceptance layer: validates deliverables, records acceptance or rejection, and lists unresolved items.
- Accountability layer: creates execution receipts, governance records, delivery records, and archives final context.

```mermaid
flowchart TD
  A["Intake"] --> B["Context"]
  B --> C["Classification"]
  C --> D["Analysis"]
  D --> E["Validation"]
  E --> F{"Governance-sensitive?"}
  F -->|Yes| G["Governance Layer"]
  F -->|No| H["Scoping"]
  G --> H
  H --> I["Execution Handoff"]
  I --> J["Execution"]
  J --> K["Monitoring"]
  K --> L{"Change needed?"}
  L -->|Yes| M["Change Control"]
  M --> H
  L -->|No| N["Delivery"]
  N --> O["Acceptance"]
  O --> P["Accountability Archive"]
```

## Runtime Data Objects

Core runtime objects include `RuntimeItem`, `IntakeRecord`, `ClassificationRecord`, `ReviewRecord`, `ScopeRecord`, `MilestoneRecord`, `ChangeRequestRecord`, `HandoffRecord`, `AcceptanceRecord`, and `AccountabilityRecord`.

Each material object should include status, owner, risk level, next action, related records, and evidence links where applicable.

## Integration Surfaces

- Governance: proposal lifecycle, execution receipts, DAO federation, and governance records.
- Business: request intake, service scope, client lifecycle, change requests, and acceptance.
- ACS: task analysis, agent review, risk classification, documentation support, and handoff generation.
- Academy: course review, reward policy, tutor validation, and Marketplace course flows.
- Trading: strategy access, API key review, risk reports, and user readiness.
- Treasury: allocation review, exposure reporting, and treasury action approval.
- Marketplace: listing review, payment policy, dispute flows, and fee records.
- Documentation: docs generation, knowledge pack updates, navigation, and release notes.
- GitHub or Coder: implementation tasks, pull requests, review, and release records.

## Invariants

Classification precedes sensitive execution. Review precedes approval. Approval precedes execution. Scope precedes delivery. Change control prevents unrecorded expansion. Accountability closes material runtime items. ACS supports analysis and support layers, not unrestricted execution.

## Related Pages

- [Request Lifecycle](request-lifecycle.md)
- [Governance Escalation](governance-escalation.md)
- [Execution Handoff](execution-handoff.md)
- [Accountability Records](accountability-records.md)
