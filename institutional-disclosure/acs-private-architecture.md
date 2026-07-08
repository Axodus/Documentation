---
schema_version: "1.0.0"
document_id: "PRIV-GDE-009"
aliases: []
document_type: "GUIDE"
title: "ACS Private Architecture"
summary: "Private institutional baseline for ACS strategic architecture, cross-core control role, and governed execution boundaries."
version: "0.1.0"
publication_status: "DRAFT"
document_state: "EXPERIMENTAL"
maturity_level: "D2"
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
related_cores: ["ACS", "ACADEMY", "MARKETPLACE", "GOVERNANCE", "BUSINESS", "TREASURY", "TRADING", "MINING", "LOTTERY"]
implementation_refs: []
production_gate_impact: "PRESERVES_CLOSED"
---

# ACS Private Architecture

## Control Flags

| Flag | Value |
| --- | --- |
| classification | INTERNAL_CONFIDENTIAL |
| distribution | RESTRICTED |
| external_use | PROHIBITED |
| academic_paper_use | PROHIBITED |
| public_reference | PROHIBITED |
| fundraising_use | PROHIBITED |
| investor_material | false |
| legal_review | REQUIRED_BEFORE_EXTERNAL_USE |
| production_enablement | false |
| financial_execution | false |
| wallet_signing | false |
| contract_writes | false |

This document is a private institutional baseline. It is not public
documentation, not academic-paper source material, not investor material, not
fundraising material, not legal approval, and not production authorization.

## Purpose and Disclosure Status

This document records the private strategic architecture for ACS
(Automated Scoring/Cognitive System) based on consolidated oral elicitation.
ACS is treated here as a Track B private operational-governance layer with
selected treasury, token, and execution boundaries only where necessary to
describe sensitive control points.

Disclosure status remains restricted. Nothing in this document is approved for
public release, public navigation, academic reuse, investor circulation,
fundraising narratives, legal reliance, or production activation.

## Strategic Positioning

ACS is the immune system of the Axodus ecosystem. It is not a business core, a
course surface, a marketplace, or a standalone commercial product. It is a
continuous operational-governance layer that monitors behavior, scores risk,
audits anomalies, and can recommend or enforce vetoes on sensitive actions when
fraud, mass-account behavior, manipulation, or systemic risk is detected.

Its intended operating direction is continuous cross-core supervision, ideally
24/7, subject to governance boundaries, permissions, logging, and human
approval requirements.

## Hierarchy and Layer Placement

ACS sits within the private ecosystem hierarchy as follows:

- Layer 0: Governance, including Executive DAO, Boardroom, and Community DAO.
- Layer 1: Academy, Marketplace, and ACS as the core operational triptych.
- Layer 2: Mining, Trading, Business, Lottery, and other downstream products.

ACS exists to protect Layer 1 integrity and detect destabilizing or abusive
patterns in any downstream layer.

## Cross-Core Operational Role

ACS is a transversal control layer acting across Academy, Marketplace, Mining,
Trading, Business, Lottery, and other cores.

Private examples of sensitive ACS actions include:

- veto or delay of `$Neurons` release from Academy reward flow;
- veto of certification completion where fraud or mass-account behavior is
  detected;
- block, hold, or flag of suspicious Marketplace transactions;
- anomaly review across Treasury, Trading, or other execution-sensitive
  surfaces.

Scoring criteria by core remain:
[TBD — pending governance decision with first adopters]

## Core Agent Architecture

ACS is architected around four core agent roles plus derivative agent patterns.

Core structure:

- Agent Smith: restrictive guardian and systemic-risk challenger.
- Morpheus: educational and transparency-oriented facilitator.
- Trinity: data-driven operational executor and strategist.
- RedHat: deep technical executor invoked for complex logic and controlled
  mutations.

Scale model:

- Smith operates as a singleton.
- Morpheus operates as a singleton.
- Trinity operates as a singleton with dynamically generated sub-agents for
  specialized execution.
- RedHat operates as a singleton activated on demand.

## Agent Smith

Smith is the strict guardian of process integrity. His role is to apply
restrictive criteria consistently, detect abuse, and say no where systemic risk
is present.

Smith responsibilities include:

- fraud detection;
- massive-account and pattern-abuse detection;
- manipulation challenge;
- veto recommendation or veto execution where policy permits;
- consistency of restrictive criteria across repeated cases.

Smith is intentionally difficult to satisfy in edge cases. He does not adjust
his criteria because of isolated pressure or exception requests.

## Agent Morpheus

Morpheus is the educational facilitator. His role is to provide context,
reduce unnecessary friction, and invite understanding without weakening safety
controls.

Morpheus responsibilities include:

- explanatory guidance;
- contextual feedback;
- transparency around why an action was limited or delayed;
- user-facing educational support where appropriate.

Morpheus serves as the dialectical counterweight to Smith. Smith says no on
strict criteria. Morpheus says yes when possible, but only with context and
without compromising safety.

## Agent Trinity

Trinity is the data-driven operational executor and strategist. Trinity
observes market signals, operational telemetry, and nucleus-specific data in
order to quantify reality, propose strategies, and coordinate execution.

Trinity responsibilities include:

- collection of market and operational telemetry;
- quantification of performance, demand, liquidity, and efficiency;
- strategy proposal;
- dynamic generation of sub-agents for specialized execution tasks;
- orchestration of custom-agent and product-delivery flows.

Trinity does not generate demand by herself. Demand enters through Business or
other ecosystem triggers. Trinity depends on the integrity and context produced
by Smith and Morpheus.

## Agent RedHat

RedHat is the deep technical executor. RedHat is invoked when complex logic,
architectural mutation, infrastructure operations, or high-complexity
transformation is required.

RedHat is not a primary-facing ecosystem actor. RedHat operates on demand under
graduated permissions, immutable logging, and human approval for critical
classes of action.

Detailed permissioning and execution boundaries are defined separately in
`acs-redhat-security-and-permissioning.md`.

## Derived Products and Client-Specific Agents

ACS may produce derivative or client-specific agents.

Private examples include:

- Agent Mariana as a client-oriented cognitive-agent case;
- Trinity-generated sub-agents such as arbitrage, liquidity,
  anomaly-detection, or demand-analysis agents.

These are not automatically public or productized by this document. They are
private directional models that may later become Marketplace-offered or
Business-scoped products under separate approval.

Mariana commercialization boundary remains:
[TBD — pending governance decision with first adopters]

Trinity sub-agent generation boundaries remain:
[TBD — pending governance decision with first adopters]

## Custom Agent Product Generation Flow

Private flow for a client-specific ACS-derived product:

1. Business receives and contextualizes the client request.
2. Business agents refine scope, context, and intent with the client.
3. Trinity estimates complexity, effort, timeline, and preliminary price
   boundary.
4. The client approves or rejects the scoped proposal.
5. Trinity orchestrates execution and generates sub-agents where needed.
6. The final output may later become a Marketplace-offered product or SaaS-like
   service if separately approved.

Final contract, pricing, and commercial packaging remain:
[TBD — pending governance decision with first adopters]

## Cross-Core Integrations

Academy integration direction:

- Smith monitors quiz abuse, automation, mass accounts, and questionable
  competence-skipping behavior.
- Morpheus provides educational feedback and low-friction explanatory context.
- Trinity collects completion, performance, and demand metrics.
- Smith may veto `$Neurons` release or certification outcome where fraud is
  detected.

Marketplace integration direction:

- Smith monitors suspicious transactions, auction manipulation, buyer/seller
  anomalies, wash-like behavior, and abusive pricing patterns.
- Morpheus supports transparent explanation and recommendation surfaces.
- Trinity collects sales, elasticity, and demand signals.
- Smith may block, revert, or flag transactions depending on policy and review
  authority.

Mining, Trading, Lottery, and Business:

- signal definitions remain provisional;
- fraud, manipulation, compliance, and anomaly criteria will be refined as real
  operating data emerges.

Cross-core exception escalation path remains:
[TBD — pending governance decision with first adopters]

## Scoring, Audit, and Veto Model

ACS is intended to score behavior, inspect patterns, preserve auditability, and
support veto logic where governance and security boundaries authorize it.

Private veto use cases include:

- reward release restriction;
- certification hold;
- transaction hold or block;
- deeper review before higher-risk operational action.

Veto thresholds and review triggers remain:
[TBD — pending governance decision with first adopters]

Massive-account and fraud detection thresholds remain:
[TBD — pending governance decision with first adopters]

Silent-drift detection and audit method remain:
[TBD — pending governance decision with first adopters]

## Governance and Override Boundaries

Agent behavior does not change because of a single operational exception. A DAO
or authorized governance body may override a specific decision, but that does
not silently rewrite the agent’s internal criteria.

Behavioral change requires:

1. formal proposal;
2. debate;
3. vote or approval through the relevant governance path;
4. audited implementation.

Likely authority path by scope:

- Community DAO for broader policy-level changes where appropriate;
- Boardroom for medium-scope governance review;
- Executive DAO for technical, security-sensitive, or early-stage control
  changes.

No silent drift is permitted.

DAO override recording model remains:
[TBD — pending governance decision with first adopters]

## Open Questions

The following items remain unresolved and must not be filled with invented
values:

- scoring model criteria by core:
  [TBD — pending governance decision with first adopters]
- veto thresholds and review triggers:
  [TBD — pending governance decision with first adopters]
- massive-account and fraud detection thresholds:
  [TBD — pending governance decision with first adopters]
- silent-drift detection and audit method:
  [TBD — pending governance decision with first adopters]
- DAO override recording model:
  [TBD — pending governance decision with first adopters]
- RedHat human-approval workflow:
  [TBD — pending governance decision with first adopters]
- immutable logging backend or pattern:
  [TBD — pending governance decision with first adopters]
- Trinity sub-agent generation boundaries:
  [TBD — pending governance decision with first adopters]
- Mariana commercialization boundary:
  [TBD — pending governance decision with first adopters]
- Academy-specific `$Neurons` release veto criteria:
  [TBD — pending governance decision with first adopters]
- Academy quiz and certification fraud criteria:
  [TBD — pending governance decision with first adopters]
- Marketplace suspicious-transaction and auction-manipulation criteria:
  [TBD — pending governance decision with first adopters]
- Mining, Trading, Lottery, and Business signal maturity model:
  [TBD — pending governance decision with first adopters]
- local versus in-Axodus default execution policy for RedHat:
  [TBD — pending governance decision with first adopters]
- legal framing of ACS veto and automated restriction language:
  [TBD — pending governance decision with first adopters]

## ADR Candidates

### ADR Candidate 1 - ACS as Ecosystem Immune System

Problem:
Without a transversal audit and anomaly layer, each nucleus would need to
independently detect fraud, manipulation, abuse, and governance bypass.

Alternatives:

1. Per-core isolated anti-abuse logic.
2. No unified control layer.
3. ACS as continuous cross-core control layer.
4. Manual review only.

Adopted direction:
Use ACS as a cross-core immune-system layer that monitors, scores, audits, and
can trigger veto boundaries across the ecosystem.

### ADR Candidate 2 - Stable Agent Behavior with Governance Override

Problem:
Ad hoc exceptions can create silent drift and inconsistent enforcement.

Alternatives:

1. Case-by-case agent behavior changes.
2. Silent adaptive drift.
3. Stable agent criteria with explicit governance override and formal change
   control.
4. Human-only override with no record.

Adopted direction:
Agent behavior stays stable unless formally changed. Specific decisions may be
overridden without silently mutating the agent.

### ADR Candidate 3 - RedHat as Deep Executor Under Graduated Permission

Problem:
Deep technical execution is useful but dangerous if unrestricted.

Alternatives:

1. No deep technical executor.
2. Unrestricted technical executor.
3. Graduated-permission deep executor with immutable logging and human approval
   for critical levels.
4. Human-only execution without agent participation.

Adopted direction:
RedHat exists as an on-demand technical executor under layered permission,
logging, and approval rules.

## Security and Compliance Risks

| Risk | Description | Mitigation |
| --- | --- | --- |
| Silent drift | Agent behavior changes without explicit governance trace | Require formal change control and logged override records |
| Fraud or abuse miss | ACS fails to detect mass-account or manipulation patterns | Keep thresholds under review and preserve adversarial challenge |
| Permission overreach | RedHat or other ACS agents gain excessive execution authority | Enforce graduated permissions, human approval, and immutable logging |
| Governance bypass | Operational exceptions are used to bypass formal authority | Preserve governance escalation and no-drift rule |
| Public overexposure | ACS private control semantics leak into public documentation | Keep detailed veto, RedHat, and permission models private |
| Logging tamper risk | Sensitive action records become mutable or incomplete | Require append-only or equivalent immutable audit pattern |
| Over-centralized veto risk | ACS restrictions are mistaken for unchecked autonomous rule | Preserve DAO, Boardroom, Executive, and human authority boundaries |

## Non-Paper Boundary and Disclosure Gate

This document must not be copied into public documentation, cited by academic
papers, summarized in public repositories, linked from public navigation, used
for fundraising, circulated to investors, or treated as legal approval.

Externalization requires a separate disclosure decision, governance review, and
legal review. Public APIs, schemas, runtime interfaces, production systems,
financial execution, provider activation, wallet signing, contract writes, and
production databases remain unchanged and not enabled by this document.
