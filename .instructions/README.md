# Axodus Documentation Instructions

Status: Active
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus Core

---

## Purpose

This repository is the official documentation workspace for Axodus. It exists to maintain the operational knowledge base for the Axodus ecosystem, including governance, product nuclei, treasury, risk, ACS agents, Academy, Business, DeFi, Trading, and accountability.

The Documentation nucleus owns documentation tooling, content quality processes, publication workflow, source-of-truth alignment, and documentation drift handling. It does not approve product execution, production publication, treasury movement, wallet signing, trading, swaps, payouts, settlement, or on-chain writes by itself.

## Scope of `.instructions`

The `.instructions` directory is the operational layer for Documentation nucleus work. It defines:

- documentation status and roadmap;
- source-of-truth boundaries;
- ownership and approval workflow;
- versioning and validation workflow;
- publication boundaries;
- security and content constraints;
- task and blocker registers;
- request recovery reports.

## Relationship With Global Root `.instructions`

Root `/opt/Axodus/.instructions` owns portfolio coordination, maturity framework, request queue, cross-nucleus blockers, and portfolio allocation. Documentation `.instructions` owns documentation-specific tooling, quality, validation, publication boundaries, and local execution rules.

If global docs and Documentation docs conflict, apply the stricter safety boundary and record drift. Portfolio-level allocation does not publish documentation or approve production claims.

## Current Status

This repository is under active reconstruction. Older GitBook-era content may be obsolete, incomplete, or written from an early project model. The VitePress documentation under `/docs` is the preferred canonical documentation surface unless a document is explicitly marked as historical, draft, or superseded.

Documentation maturity target after REQ-02: L4 candidate.

L4 candidate means the operational `.instructions` layer is structurally complete and validation-ready. It does not mean official publication approval, production readiness, versioning migration completion, or governance approval.

## Required Language

All final-facing documentation must be written in English. Portuguese may appear only in temporary internal notes when necessary and must not remain in canonical documentation.

## How to Use This Repository

- Use root-level files for canonical entry points.
- Use `/docs` for structured VitePress documentation.
- Use `/Documents` for planning references, drafts, research notes, and historical materials.
- Use `.instructions` as the execution source of truth for future documentation work.

## Before Editing Documentation

Before major rewrites, inspect:

- the repository root;
- `/docs`;
- `/Documents`;
- existing root files;
- `.instructions`;
- relevant legacy folders.

Do not copy old material blindly. Extract useful intent, validate it against the current Axodus model, and mark uncertainty clearly.

## Required Standards

Contributors must follow:

- `DOCUMENTATION_STANDARDS.md`;
- `CONTENT_GUARDRAILS.md`;
- `REBUILD_PROTOCOL.md`;
- `REVIEW_CHECKLIST.md`.

No financial guarantees, speculative token claims, fake partnerships, fake audit claims, fake contacts, or invented production contract addresses are allowed.

## Review Requirements

Every major document must be reviewed for language, accuracy, risk language, governance alignment, technical accuracy, and navigation integrity before it is treated as canonical.

## Production and Publication Boundary

This workspace can prepare, validate, and recommend documentation. It cannot publish official production documentation, approve financial claims, approve tokenomics/APY statements, authorize product behavior, or promote draft material to official status without the required review and approval workflow.
