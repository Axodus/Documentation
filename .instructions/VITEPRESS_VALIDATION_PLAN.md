# VitePress Validation Plan

Status: Candidate
Version: 0.1.0
Last Updated: 2026-06-04
Owner: Documentation Coordinator

---

## Scope

This plan defines staged validation for the VitePress documentation surface.

REQ-03 status:

VitePress build: NOT RUN

Reason: inventory/alignment request only.

No docs were published.

No package files were changed.

## Stage 0 - Inventory Validation

| Field | Definition |
|---|---|
| Purpose | Confirm the VitePress source tree, config, scripts, nav/sidebar, assets, generated outputs, and blockers are inventoried. |
| Allowed commands | `pwd`, `git status --short --branch`, `git rev-parse HEAD`, `find`, `rg`, `test`, static config/link path checks. |
| Forbidden commands | `npm install`, `pnpm install`, `npm run docs:build`, `pnpm docs:build`, `npm run docs:dev`, preview server, publish, deploy. |
| Required evidence | `VITEPRESS_ASSET_INVENTORY.md`, `VITEPRESS_ALIGNMENT.md`, `VITEPRESS_VALIDATION_PLAN.md`, REQ-03 report, blocker updates. |
| Exit criteria | Required inventory docs exist, VitePress config/source/scripts are documented, unknowns are recorded, no runtime/package/publish changes occurred. |

## Stage 1 - Structural Validation

| Field | Definition |
|---|---|
| Purpose | Confirm source files referenced by nav/sidebar exist and documentation structure is coherent by static inspection. |
| Allowed commands | Static file existence checks, Markdown path scans, config link target checks, empty-file scans, GitBook legacy-only scan, secret keyword scan. |
| Forbidden commands | Package installs, build commands, dev server, preview server, deployment, publication, package-file edits. |
| Required evidence | Link target inventory, placeholder list, missing file list, source directory list, nav/sidebar map. |
| Exit criteria | No critical missing nav/sidebar targets, placeholders are recorded, GitBook remains legacy-only, sensitive content findings are blocked without value exposure. |

## Stage 2 - Local Build Validation

| Field | Definition |
|---|---|
| Purpose | Confirm the known local VitePress build command works in the approved environment. |
| Allowed commands | Future approved local build command, likely `npm run docs:build` or package-manager-specific equivalent after package manager ownership is decided. |
| Forbidden commands | Publishing, deployment, dependency installs unless explicitly approved, production environment configuration. |
| Required evidence | Build command, package manager used, exit code, warnings/errors, generated output path, no publication. |
| Exit criteria | Local build passes or failures are recorded with actionable blockers. |

Stage 2 was not run in REQ-03.

## Stage 3 - Link and Content Validation

| Field | Definition |
|---|---|
| Purpose | Validate internal links, risky public claims, stale GitBook references, placeholders, and sensitive content. |
| Allowed commands | Approved local link checker, Markdown lint if already available, static claim scans, targeted review checklists. |
| Forbidden commands | Publishing, deployment, automated rewrites of product claims without nucleus approval, secret exposure. |
| Required evidence | Link-check results, content-risk findings, owner routing for product claims, list of unresolved docs requiring review. |
| Exit criteria | Broken links are fixed or recorded, sensitive claims are routed, placeholders are planned, no unapproved production claims remain. |

## Stage 4 - Publication Readiness Validation

| Field | Definition |
|---|---|
| Purpose | Confirm the site is ready for an approved publication decision. |
| Allowed commands | Read-only deployment config inspection, release checklist, approval evidence review, publication target confirmation. |
| Forbidden commands | Publishing without approval, changing CI/CD, changing deployment config, claiming release readiness without evidence. |
| Required evidence | Publication authority, target, version, changelog, rollback path, owner approvals, safety review where needed. |
| Exit criteria | Coordinator can make a decision on publication with complete evidence. |

## Stage 5 - Approved Publication

| Field | Definition |
|---|---|
| Purpose | Publish only after explicit authorization. |
| Allowed commands | Only commands authorized by a specific publication request and approved workflow. |
| Forbidden commands | Any unapproved publish/deploy command, hidden production config changes, unreviewed financial/token/treasury claims. |
| Required evidence | Approval reference, exact command, operator, target, version, timestamp, post-publication audit. |
| Exit criteria | Published artifact is recorded, links and status are verified, rollback or correction path is documented. |

## REQ-03 Validation Summary

REQ-03 completes Stage 0 only and prepares Stage 1/2 handoff.

Final L4 is not granted by this file. Final L4 requires completion or formal acceptance of structural validation, local build readiness, publication authority, source-of-truth validation, and blocker disposition.
