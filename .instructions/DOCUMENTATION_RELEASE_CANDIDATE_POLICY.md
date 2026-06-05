# Documentation Release Candidate Policy

Status: Candidate
Version: 0.1.0
Last Updated: 2026-06-05
Owner: Documentation Coordinator

---

## Release Candidate Definition

Documentation qualifies as release candidate material when:

- source branch and commit are known;
- VitePress structure is validated;
- local build evidence exists or is explicitly accepted as current;
- content inventory is complete for the release scope;
- draft corrections are complete for scoped content;
- content quality, links/navigation, and claim-safety validation are complete;
- open warnings are documented;
- required reviewers are identified;
- publication target and rollback path are known.

## Disqualifying Conditions

Documentation is not release candidate material if:

- source state is dirty or unknown;
- build command or publication target is unknown;
- content contains unsupported high-risk claims;
- secrets or operational leakage are present;
- package/deployment/CI changes are required but unapproved;
- rollback path is missing;
- coordinator approval path is undefined;
- maturity claims exceed actual validation evidence.

## Required Validation Artifacts

- `VITEPRESS_STRUCTURE_VALIDATION.md`
- `VITEPRESS_LOCAL_BUILD_VALIDATION.md`
- `DOCUMENTATION_CONTENT_INVENTORY.md`
- `DOCUMENTATION_EDITORIAL_GAP_ANALYSIS.md`
- `DOCUMENTATION_DRAFT_CHANGELOG.md`
- `DOCUMENTATION_CONTENT_QUALITY_VALIDATION.md`
- `DOCUMENTATION_LINK_AND_NAV_VALIDATION.md`
- `DOCUMENTATION_CLAIM_SAFETY_VALIDATION.md`
- `VITEPRESS_RELEASE_APPROVAL_CHECKLIST.md`

## Required Approvals

- Coordinator approval is mandatory.
- Nucleus owner review is mandatory for domain pages.
- Security review is mandatory for security, wallet, API, contract, credential, and disclosure claims.
- Financial/compliance review is mandatory for APY, returns, treasury, tokenomics, payouts, trading, settlement, and value-transfer claims.
- Governance review is mandatory for governance authority, DAO approval, proposal, voting, execution receipt, and treasury authority claims.
- Legal/compliance review is mandatory for compliance, liability, legal status, bounty, public disclosure, securities-like, lottery, or jurisdictional claims.

## Version Label Policy

Release candidates should use an explicit label:

`docs-rc-YYYY-MM-DD-N`

Published releases should use an explicit label:

`docs-release-YYYY-MM-DD-N`

Labels do not authorize publication without approval.

## Release Notes Requirement

Every publication request must include release notes with:

- changed scope;
- validation evidence;
- high-risk claim disposition;
- known warnings;
- approval references;
- rollback reference.

## Handling Warnings

Warnings may be accepted only when:

- they are documented;
- owner and risk are identified;
- they do not contain critical safety, legal, financial, security, or production-readiness defects;
- coordinator explicitly accepts them for the publication request.

## Handling Unresolved Blockers

Unresolved critical blockers prevent publication. High or medium blockers may be accepted only with explicit coordinator decision and required domain review.

## Required Rule

A passing local build does not make documentation release-ready.

A passing content validation does not make documentation publication-approved.

Publication approval is a separate governance decision.
