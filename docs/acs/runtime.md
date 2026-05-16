# ACS Runtime

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: ACS Nucleus

---

## Purpose

This document defines the expected ACS operating workflow.

## Scope

It covers entry points, runtime stages, risk-based routing, output types, review requirements, governance escalation, handoff, receipt, and archive.

## Entry Points

ACS may receive Business requests, Governance requests, documentation tasks, Academy review requests, Trading review requests, Treasury review requests, Marketplace review requests, or operational events such as incidents and monitoring alerts.

## Runtime Flow

1. Intake
2. Context loading
3. Classification
4. Agent assignment
5. Analysis
6. Adversarial review when risk requires it
7. Human review
8. Governance escalation when required
9. Execution handoff
10. Receipt and archive

## Risk-Based Routing

| Risk | Route |
| --- | --- |
| Low | Single-agent review, human review optional, no governance required by default. |
| Medium | Domain agent, human review, governance if policy is impacted. |
| High | Multi-agent review, Agent Smith adversarial review, human review required, governance likely. |
| Critical | ACS analysis only, mandatory human review, governance or security authority required. |

## Outputs

ACS outputs may include summaries, risk notes, scope questions, technical assumptions, governance impact, and recommended next steps.

Other output types may include proposal summaries, missing information lists, reason code suggestions, governance escalation notes, implementation briefs, documentation drafts, change request analysis, risk reviews, operational checklists, and accountability drafts.

## Limits

ACS must not execute security-sensitive, treasury-sensitive, or governance-sensitive actions without explicit validation.

## Completion Criteria

A task is complete only when output status is clear, assumptions and risks are recorded, review requirements are identified, handoff target is known, and material decisions have audit or accountability paths.
