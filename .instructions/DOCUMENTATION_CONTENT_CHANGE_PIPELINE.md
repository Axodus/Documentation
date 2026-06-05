# Documentation Content Change Pipeline

Status: Candidate
Version: 0.1.0
Last Updated: 2026-06-04
Owner: Documentation Coordinator

---

## Purpose

This pipeline controls documentation content changes for the Axodus VitePress documentation surface.

It separates inventory, analysis, draft correction, validation, and publication governance so content changes do not implicitly become official documentation.

Active platform: VitePress

GitBook status: legacy / not active

Publication status: DISABLED unless explicitly approved

## Stage 1 - Content Inventory

Purpose:

Identify all documentation pages, sections, assets, navigation entries, placeholders, duplicate pages, outdated pages, and missing pages.

Allowed actions:

- inspect VitePress source files;
- list Markdown files;
- list navigation/sidebar entries;
- classify pages by topic;
- detect empty or placeholder files;
- identify pages requiring review;
- identify legacy GitBook references;
- identify pages with financial/governance/security claims.

Forbidden actions:

- rewriting content;
- publishing;
- changing deployment config;
- changing package files;
- running production workflows.

Exit criteria:

- content inventory table exists;
- each page has a status;
- high-risk pages are flagged;
- pages requiring rewrite are identified.

## Stage 2 - Editorial Gap Analysis

Purpose:

Identify what content is missing, outdated, duplicated, inconsistent, overpromising, or misaligned with Axodus maturity.

Required classification:

- accurate;
- outdated;
- placeholder;
- duplicate;
- missing;
- inconsistent;
- high-risk claim;
- requires coordinator review;
- requires governance review;
- requires financial/compliance review.

High-risk topics:

- tokenomics;
- APY;
- returns;
- investment performance;
- treasury;
- governance authority;
- audits;
- production readiness;
- wallet/on-chain execution;
- trading;
- swaps;
- payouts;
- legal/compliance;
- security guarantees.

Exit criteria:

- editorial gap register exists;
- every high-risk content area has review requirements;
- no rewrite starts before gap analysis is documented.

## Stage 3 - Draft Content Corrections

Purpose:

Prepare controlled draft updates to documentation content.

Allowed content changes:

- fix outdated architecture descriptions;
- remove or soften unsupported claims;
- replace GitBook references with VitePress references;
- align terminology;
- add missing disclaimers;
- clarify maturity status;
- create draft pages for missing sections;
- mark pages as draft/candidate where needed;
- correct navigation if required for draft structure.

Forbidden content changes:

- APY promises;
- guaranteed return claims;
- investment advice;
- production-readiness claims without validation;
- security/audit claims without evidence;
- claims that execution, treasury, wallet, trading, swaps, payouts, or on-chain writes are enabled;
- claims that governance approval exists when it has not been verified;
- publishing directly to production.

Exit criteria:

- draft changes are clearly marked;
- changed pages are listed;
- risky claims are removed or flagged;
- validation request is prepared.

## Stage 4 - Content Quality, Links & Consistency Validation

Purpose:

Validate draft/candidate content before any publication approval.

Required checks:

- internal links;
- navigation/sidebar consistency;
- terminology consistency;
- no unsupported APY/return/security/production claims;
- no secrets;
- no private keys;
- no operational leakage;
- no execution instructions unless explicitly approved;
- alignment with root `.instructions`;
- alignment with nucleus `.instructions`;
- alignment with maturity register;
- alignment with Core/Governance boundaries.

Exit criteria:

- validation report exists;
- blockers are documented;
- content is marked candidate or returned for correction.

## Stage 5 - Publication Governance

Purpose:

Define when candidate documentation can become approved/published documentation.

Publication requires:

- coordinator approval;
- relevant nucleus owner review;
- governance review when governance claims are involved;
- financial/compliance review when tokenomics, treasury, APY, returns, or investment language is involved;
- security review when security, audit, wallet, credential, or on-chain language is involved;
- successful local build validation;
- publication target confirmation.

Forbidden:

- implicit publication from local build;
- automatic approval from passing validation;
- public claims exceeding actual maturity;
- publication of execution-sensitive instructions without approval.

Exit criteria:

- release candidate is approved;
- publication authority is documented;
- publication action is separately authorized.

## Pipeline Rules

- Structure before build.
- Build before content validation.
- Inventory before rewriting.
- Draft corrections before publication.
- Validation before approval.
- Approval before publication.

Documentation content changes may be prepared locally as draft or candidate only. Publication requires a separate explicit approval and publication request.
