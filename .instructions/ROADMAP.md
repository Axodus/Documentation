# Documentation Nucleus Roadmap

Status: Active Recovery
Version: 0.1.0
Last Updated: 2026-06-04
Owner: Documentation Coordinator

---

## Immediate Recovery Tasks

1. Complete Documentation `.instructions` operational layer.
2. Record source-of-truth hierarchy and conflict rules.
3. Define ownership, review, approval, and escalation workflow.
4. Define validation checklist for candidate, approved, and published states.
5. Define publication boundaries and financial/security guardrails.
6. Record blockers and unresolved decisions.

## L4 Validation Tasks

1. Verify all required `.instructions` files exist and are non-empty.
2. Validate the documentation workflow against root global docs.
3. Confirm publication boundaries include VitePress, legacy GitBook handling, financial claims, tokenomics, treasury, and legal/compliance constraints.
4. Confirm source-of-truth rules do not exceed Core/Registry authority.
5. Confirm no runtime, package, build, publish, wallet, treasury, trading, swap, payout, settlement, or on-chain behavior was changed.

## L5 Readiness Tasks

1. Keep Documentation Asset Inventory current after REQ-03.
2. Complete VitePress structural validation and local build readiness.
3. Map `/docs`, `/Documents`, root files, and legacy materials into draft/candidate/approved/published/deprecated states.
4. Define versioning implementation path after coordinator decision.
5. Establish review evidence for canonical public claims.

## Publication Pipeline Tasks

1. Complete VitePress structural validation.
2. Complete local build validation.
3. Complete content inventory.
4. Complete editorial gap analysis.
5. Prepare controlled draft content corrections.
6. Validate content quality, links, and consistency.
7. Confirm publication governance and release workflow.
8. Publish only through separately approved publication action.
9. Record published version and source links.

## Governance Approval Tasks

1. Identify documentation changes with governance or financial impact.
2. Route production-sensitive claims for coordinator/governance review.
3. Record approval evidence before publication.
4. Keep unapproved claims in Draft or Candidate state.

## Next Request

REQ-04 - VitePress Structural Validation & Local Build Readiness.

## Request Sequence

| Request | Status | Purpose |
|---|---|---|
| REQ-03 - Documentation Asset Inventory & VitePress Alignment | Complete | Inventoried VitePress source/config/navigation/assets/scripts and documented alignment baseline. |
| REQ-04 - VitePress Structural Validation & Local Build Readiness | Complete | Validated source root, config, theme, nav/sidebar, assets, and build readiness without running a build. |
| REQ-05 - VitePress Local Build Validation | Pending | Run documented local VitePress build only if safe, dependencies are available, no install is required, and no publication is triggered. |
| REQ-06 - Documentation Content Inventory & Editorial Gap Analysis | Pending | Inventory all VitePress documentation content and identify editorial gaps before any rewrite. |
| REQ-07 - Documentation Content Correction Drafts | Pending | Create controlled draft/candidate content corrections based on REQ-06 findings. |
| REQ-08 - Documentation Content Quality, Links & Consistency Validation | Pending | Validate corrected draft/candidate content before publication governance. |
| REQ-09 - Documentation Publication Governance & Release Workflow | Pending | Define and validate approval, release, rollback, authority, and post-publication workflow. |

REQ-05 through REQ-09 are not complete.

## Active Documentation Sprint

### DOCUMENTATION SPRINT 01 - VitePress Validation & Documentation Content Change Pipeline

Sequence:

1. REQ-04 - VitePress Structural Validation & Local Build Readiness
2. REQ-05 - VitePress Local Build Validation
3. REQ-06 - Documentation Content Inventory & Editorial Gap Analysis
4. REQ-07 - Documentation Content Correction Drafts
5. REQ-08 - Documentation Content Quality, Links & Consistency Validation
6. REQ-09 - Documentation Publication Governance & Release Workflow

Execution policy:

- Structure before build.
- Build before content validation.
- Inventory before rewriting.
- Draft corrections before publication.
- Validation before approval.
- Approval before publication.
