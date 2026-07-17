---
schema_version: "1.0.0"
document_id: "PRIV-RPT-019"
aliases: []
document_type: "REPORT"
title: "ACS Sanitization Decision Register"
summary: "Private decision register classifying current public ACS references for future sanitization follow-up."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "EXPERIMENTAL"
maturity_level: "D1"
authority_scope: "DOCUMENTATION.PRIVATE_DISCLOSURE"
authority_level: "PROJECT"
author: "Axodus Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: []
business_reviewers: []
security_reviewers: []
approver: null
created_date: "2026-07-08"
last_updated: "2026-07-08"
last_reviewed: null
review_cycle: "EVENT_DRIVEN"
next_review: null
supersedes: []
relationships: []
related_epics: []
related_requirements: []
related_adrs: []
related_cores: ["ACS", "GOVERNANCE", "SECURITY", "TREASURY", "ACADEMY", "MARKETPLACE", "BUSINESS", "TRADING"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# ACS Sanitization Decision Register

## Control Flags

| Flag | Value |
| --- | --- |
| classification | INTERNAL_CONFIDENTIAL |
| distribution | RESTRICTED |
| external_use | PROHIBITED |
| public_documentation_update | NOT_AUTHORIZED |
| public_sanitization | NOT_AUTHORIZED |
| academic_paper_use | PROHIBITED |
| public_reference | PROHIBITED |
| fundraising_use | PROHIBITED |
| investor_material | false |
| legal_approval | NOT_GRANTED |
| production_enablement | false |
| provider_activation | false |
| wallet_signing | false |
| contract_writes | false |
| financial_execution | false |
| public_api_change | false |
| schema_change | false |
| runtime_interface_change | false |

## Purpose

This register records the disposition of current public ACS references so that
future boundary review or explicitly authorized sanitization can proceed
without reopening or exposing the private ACS baseline.

This request records ACS boundary findings and sanitization decisions only. It does not modify or remediate public files.

## Decision Criteria

- Conceptual accountability, anomaly detection, auditability, oversight, and
  agent-specialization language may be ACCEPTABLE_PUBLIC_ABSTRACTION.
- Permission, sensitive-action, runtime, automated-restriction, or financial
  agent language that could become operationally suggestive is MONITOR_ONLY.
- RedHat or private L1-L4 detail is SANITIZATION_REQUIRED or a
  BOUNDARY_BLOCKER, depending on whether direct private mechanics are exposed.
- Private veto heuristics, private artifact paths, or claims of enabled
  execution are BOUNDARY_BLOCKER.
- Public legal, regulatory, or enabled autonomous financial claims require
  LEGAL_REVIEW_REQUIRED or SANITIZATION_REQUIRED.

## Public Surface Inventory

| Surface | Material reviewed | Decision status |
| --- | --- | --- |
| docs/acs/ | Agent roles, runtime, risk, permissions, tooling, oversight, governance, and architecture | CLASSIFIED |
| docs/index.md | Public ACS entry | CLASSIFIED |
| README.md | Repository-level ACS references | CLASSIFIED |
| SUMMARY.md | Public ACS navigation references | CLASSIFIED |
| docs/.vitepress/ | Source navigation configuration | CLASSIFIED |
| .rag/DOCUMENTATION-MASTER-INDEX.md | Generated public ACS index entries | CLASSIFIED |
| Public generated indexes and navigation artifacts | Existing tracked outputs, inspected without regeneration | CLASSIFIED |
| papers/ | NOT_PRESENT | NOT_APPLICABLE |

## ACS Decision Register

| Public Surface | Observed Reference | Classification | Rationale | Required Action | Follow-Up Request | Dependency Owner | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| docs/acs/agent-smith.md | Smith adversarial review, abuse resistance, and recommendations for validation or blocking | ACCEPTABLE_PUBLIC_ABSTRACTION | Smith is expressly not a final veto authority or unrestricted blocker | Retain conceptual limits; review if enforcement language expands | Cross-core boundary matrix | Axodus Documentation Core / ACS | ACCEPTED |
| docs/acs/morpheus.md | Morpheus strategic alignment and governance-coherence analysis | ACCEPTABLE_PUBLIC_ABSTRACTION | The role is advisory and denies final governance, legal, and execution authority | Preserve advisory framing | Cross-core boundary matrix | Axodus Documentation Core / ACS | ACCEPTED |
| docs/acs/trinity.md | Trinity trading, financial intelligence, operational execution, and risk-monitoring archetype | MONITOR_ONLY | Explicit limitations are present, but the role framing could imply active financial execution if expanded | Preserve limitations and non-production language | ACS-PUBLIC-SANITIZATION-DECISION-REQ-01 if wording becomes operational | Axodus Documentation Core / ACS / Trading | MONITORED |
| docs/acs/architecture.md; docs/acs/risk-review.md | Risk scoring, risk classes, and generic review routing | MONITOR_ONLY | No private threshold is present; numeric or enforcement detail would cross the boundary | Keep categories generic and non-numeric | ACS-PUBLIC-SANITIZATION-DECISION-REQ-01 if private thresholds appear | Axodus Documentation Core / ACS / Security | MONITORED |
| docs/acs/overview.md; docs/acs/security-and-risk.md | Anomaly detection, behavioral monitoring, and cross-core risk awareness | ACCEPTABLE_PUBLIC_ABSTRACTION | The language is conceptual and discloses no private fraud heuristic | Preserve abstraction | Cross-core boundary matrix | Axodus Documentation Core / ACS / Security | ACCEPTED |
| docs/acs/agent-roles.md; docs/acs/tooling-and-mcp.md | Public authority and tool-permission levels | MONITOR_ONLY | Public labels differ from private L1-L4 but are operationally suggestive | Keep labels generic; prohibit private mappings and approval workflows | ACS-PUBLIC-SANITIZATION-DECISION-REQ-01 if mappings become specific | Axodus Documentation Core / ACS / Security | MONITORED |
| docs/acs/risk-review.md; docs/acs/security-and-risk.md | Sensitive treasury, contract, trading, secret, and production actions restricted by default | MONITOR_ONLY | The pages describe restrictions rather than enabled execution or private controls | Preserve closed-gate and review language | ACS-PUBLIC-SANITIZATION-DECISION-REQ-01 if enabled behavior is claimed | Axodus Documentation Core / ACS / Governance | MONITORED |
| docs/acs/human-oversight.md; docs/acs/accountability.md | Human review, decision records, audit trails, and receipts | ACCEPTABLE_PUBLIC_ABSTRACTION | No immutable backend, detailed private log schema, or autonomous authority is exposed | Preserve implementation-neutral framing | Cross-core boundary matrix | Axodus Documentation Core / ACS / Governance | ACCEPTED |
| docs/acs/governance-alignment.md | Advisory governance review and formal change control | ACCEPTABLE_PUBLIC_ABSTRACTION | ACS cannot vote, override DAOs, execute treasury actions, or activate plugins | Preserve explicit authority limits | Cross-core boundary matrix | Axodus Documentation Core / ACS / Governance | ACCEPTED |
| docs/acs/agent-smith.md; docs/acs/security-and-risk.md | Blocking pending validation and blocking unauthorized tool attempts | MONITOR_ONLY | The wording could imply live veto enforcement without its surrounding human-authority limits | Keep human accountability and non-production status explicit | ACS-PUBLIC-SANITIZATION-DECISION-REQ-01 if automatic enforcement is asserted | Axodus Documentation Core / ACS / Security | MONITORED |
| All scanned public ACS surfaces | No RedHat reference found | MONITOR_ONLY | Any RedHat name or operational role would breach the current private boundary | Repeat exact-term and semantic scans after public ACS changes | ACS-PUBLIC-SANITIZATION-DECISION-REQ-01 only if a reference appears | Axodus Documentation Core / ACS / Security | ABSENCE_CONFIRMED |
| All scanned public ACS surfaces | No L1-L4 permissioning reference found | MONITOR_ONLY | The private model remains absent and distinct from generic public permission labels | Repeat private-model boundary scan after permission edits | ACS-PUBLIC-SANITIZATION-DECISION-REQ-01 only if a reference appears | Axodus Documentation Core / ACS / Security | ABSENCE_CONFIRMED |
| All scanned public ACS surfaces | No private veto, fraud, or massive-account heuristic found | MONITOR_ONLY | Direct exposure would be a BOUNDARY_BLOCKER | Preserve exact-term and semantic regression checks | Boundary incident review if direct exposure appears | Axodus Documentation Core / ACS / Governance / Security | ABSENCE_CONFIRMED |

## Cross-Core Dependency Notes

- Governance owns formal authority, override, escalation, and change-control
  boundaries; ACS remains advisory in public framing.
- Security owns public least-privilege and sensitive-action abstractions while
  private ACS criteria and deep-execution controls remain undisclosed.
- Trading and Treasury must not infer autonomous financial execution from
  Trinity, risk-routing, or sensitive-action language.
- Business, Academy, and Marketplace must not disclose custom-agent pricing,
  Agent Mariana commercialization, or private productization mechanics through
  ACS cross-references.

## Recommended Future Requests

- Add ACS findings to PRIVATE-DISCLOSURE-BOUNDARY-MATRIX-REQ-01 when the
  cross-core disclosure matrix is authorized.
- Use ACS-PUBLIC-SANITIZATION-DECISION-REQ-01 only if a stricter public framing
  policy is adopted or a monitored reference becomes operationally specific.
- Use ACS-PUBLIC-SANITIZATION-REQ-01 only after explicit public-edit and
  sanitization authorization.
- Treat any direct private path, RedHat, L1-L4, private-veto, or enabled-
  execution reference as a boundary incident requiring immediate review.

## Deferred Items

- Public sanitization is deferred because no current finding requires it.
- Legal review is deferred because no public legal approval, enabled financial
  execution, or autonomous enforcement claim was found.
- Public permission and runtime language remains under monitoring; this request
  does not decide new ACS semantics or production controls.
- Private open decisions remain governed by the existing ACS private baseline.

## Gate Preservation

This request created private ACS boundary audit and sanitization decision
artifacts only. It did not modify or remediate public documentation, update
academic paper material, update investor material, update fundraising material,
expose private artifacts, change public navigation, modify public APIs, schemas
or runtime interfaces, activate providers or exchange APIs, enable wallet
signing, write contracts, perform financial execution, change production
systems or open operational gates.

Public disclosure, external use, and public sanitization remain unauthorized.
Legal approval is not granted. Production, provider activation, wallet signing,
contract writes, and financial execution remain disabled. Public APIs, schemas,
and runtime interfaces remain unchanged. Financial gates remain preserved
closed.
