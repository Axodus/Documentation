---
schema_version: "1.0.0"
document_id: "ACS-GDE-003"
aliases: []
document_type: "GUIDE"
title: "ACS Business Integration"
summary: "Defines the advisory, review-bound integration between ACS and Business."
version: "1.0.0"
publication_status: "DRAFT"
document_state: "CURRENT"
maturity_level: "D2"
authority_scope: "ACS"
authority_level: "CORE"
author: "Axodus ACS"
owner: "Axodus ACS"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: ["Portfolio Documentation Reviewer"]
security_reviewers: ["Security Reviewer"]
approver: null
created_date: "2026-05-16"
last_updated: "2026-07-16"
last_reviewed: null
review_cycle: "QUARTERLY"
next_review: "2026-10-16"
supersedes: []
relationships: [{type: "RELATES_TO", target: "ACS-GDE-001"}, {type: "RELATES_TO", target: "BUSINESS-GDE-008"}]
related_epics: ["DOCUMENTATION-EPIC-08"]
related_requirements: ["DOCUMENTATION-EPIC-08-REQ-05"]
related_adrs: []
related_cores: ["ACS", "BUSINESS"]
implementation_refs: [{repository: "Axodus/Documentation", path: "docs/acs/business-integration.md", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# ACS Business Integration

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: ACS Nucleus

---

## Purpose

This document explains how ACS supports the Business nucleus.

## Scope

It covers request intake, classification, scoping, governance touchpoints, risk analysis, delivery handoff, and change request handling.

## Overview

Business is expected to be one of the largest consumers of ACS. ACS helps transform vague client, DAO, partner, internal, and product requests into structured, reviewable, executable workflows.

ACS does not replace Business ownership, client communication responsibility, governance review, or human approval.

## Supported Request Types

- DAO service requests
- Client project requests
- BBA requests
- Academy requests
- Trading requests
- Marketplace requests
- Governance requests

## Intake Support

ACS may summarize the request, identify request type, identify responsible nucleus, extract required data, identify missing information, classify risk, identify governance touchpoints, suggest delivery phases, draft scope, identify change request risk, and prepare handoff.

## Runtime Flow

1. Business records initial request.
2. ACS creates a plain-language summary.
3. ACS classifies domain, type, risk, and nuclei.
4. ACS generates missing questions or required fields.
5. ACS drafts scope, deliverables, and boundaries.
6. ACS maps governance, security, treasury, or tokenomics touchpoints.
7. Business owner validates scope and client context.
8. Governance escalation occurs if required.
9. Approved scope is handed off.
10. Change requests are classified.
11. Acceptance and reporting are prepared.

## Change Requests

ACS may compare new requests to approved scope, classify them as in-scope, minor adjustment, scope expansion, governance impact, new project, or rejected, and draft change request summaries for review.

## Canonical Traceability

- Integration: `INTG-EP8-0008`
- Canonical counterpart: [Business ACS Integration](../business/acs-integration.md)
- Interfaces: `INT-EP7-006`, `INT-EP7-007`
- Authorities: `AUTH-EP8-0002`, `AUTH-EP8-0012`
- Evidence: `EVID-EP7-0006`, `EVID-EP7-0008`
- Status: advisory prototype/model; Business owns review and disposition.

ACS analysis does not approve scope, create a client commitment, activate a
service, or transfer Business authority.
