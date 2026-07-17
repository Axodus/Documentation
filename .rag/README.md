---
schema_version: "1.0.0"
document_id: "DOC-REF-011"
aliases: []
document_type: "REFERENCE"
title: "Governed RAG Artifact Directory"
summary: "Defines the repository contract for versioned retrieval and governed knowledge artifacts stored under .rag."
version: "1.0.0"
publication_status: "ACTIVE"
document_state: "CURRENT"
maturity_level: "D3"
authority_scope: "DOCUMENTATION"
authority_level: "CORE"
author: "Axodus Documentation Core"
owner: "Axodus Documentation Core"
maintainer: "Documentation Maintainer"
technical_reviewers: ["Documentation Architecture Reviewer"]
business_reviewers: []
security_reviewers: ["Security Reviewer"]
approver: "Documentation Coordinator"
created_date: "2026-07-17"
last_updated: "2026-07-17"
last_reviewed: "2026-07-17"
review_cycle: "SEMIANNUAL"
next_review: "2027-01-17"
supersedes: []
relationships: []
related_epics: []
related_requirements: []
related_adrs: ["DOC-ADR-009"]
related_cores: ["DOCUMENTATION"]
implementation_refs: [{repository: "Axodus/Documentation", path: ".rag", ref: "main", kind: "SOURCE", environment: "LOCAL"}]
production_gate_impact: "PRESERVES_CLOSED"
---

# Governed RAG Artifact Directory

## Purpose

`.rag/` is the versioned repository surface for governed retrieval, inventory, decision, audit, and knowledge-evolution artifacts. It supports human review and machine retrieval without replacing the canonical public corpus under `docs/`.

## Repository Contract

- Treat every tracked artifact as governed source material, not as disposable cache output.
- Preserve document metadata, authority, status, evidence, and public/private boundaries.
- Use `tools/documentation/` for validation and generation code; `.rag/` stores artifacts, not tooling.
- Keep root `documentation.*.json` files under their existing artifact names.
- Do not infer implementation, activation, production, legal approval, security validation, or financial enablement from an artifact's presence here.

## Discovery

The documentation discovery pipeline intentionally scans `.rag/` even though it is a hidden directory. Generated Markdown reports in this directory remain excluded from recursive source discovery through the governed generated-path registry.
