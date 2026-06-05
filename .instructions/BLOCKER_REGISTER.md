# Documentation Blocker Register

Status: Active Recovery
Version: 0.1.0
Last Updated: 2026-06-04
Owner: Documentation Coordinator

---

| ID | Severity | Status | Description | Impact | Resolution Path |
|---|---|---|---|---|---|
| DOC-BLOCK-001 | High | Open | Documentation versioning path is not formally approved. | Documentation cannot claim final L4 or canonical global docs ownership. | Coordinator decision on Option B or C from REQ-01. |
| DOC-BLOCK-002 | Medium | Open | Empty placeholder global docs remain a gap. | Global governance/security/product docs may appear present without content. | Inventory and recovery in future global/docs request. |
| DOC-BLOCK-003 | High | Partially Resolved | VitePress documentation asset inventory and alignment baseline exists, but structural build/link validation is not complete. | Public documentation may drift from local/current source-of-truth docs until REQ-04 validates structure and links. | Execute REQ-04 - VitePress Structural Validation & Local Build Readiness. |
| DOC-BLOCK-004 | High | Open | Publication authority is documented as gated, not verified as granted. | Documentation cannot claim official publication approval. | Confirm approval workflow and approvers before publishing. |
| DOC-BLOCK-005 | Medium | Open | Root `/opt/Axodus` is not a Git repository and should not be initialized without explicit approval. | Global docs remain workspace-local; no root commit possible. | Follow REQ-01 versioning strategy decision. |
| DOC-BLOCK-006 | High | Open | Production and financial claims require additional review. | Risk of misleading public docs. | Apply publication boundaries, content guardrails, and safety review. |
| DOC-BLOCK-007 | Medium | Open | Legacy `/Documents` and historical material may contain obsolete assumptions. | Incorrect facts may be promoted if copied blindly. | Inventory, classify, and migrate only after review. |
| DOC-BLOCK-008 | Medium | Resolved in REQ-03 | VitePress asset inventory baseline completed. | Inventory unknowns are reduced, but final L4 still depends on build, link, publication, source-of-truth, and versioning validation. | Keep `.instructions/VITEPRESS_ASSET_INVENTORY.md` current during future VitePress changes. |
| DOC-BLOCK-009 | High | Open | VitePress local build has not been executed. | Documentation cannot claim successful local build validation. | Execute REQ-05 - VitePress Local Build Validation with no install, no publish, and no deployment changes. |
| DOC-BLOCK-010 | High | Open | VitePress publication not approved. | Documentation cannot be treated as officially published or production-release documentation. | Execute REQ-09 - Documentation Publication Governance & Release Workflow before publication. |
| DOC-BLOCK-011 | High | Open | Documentation publication authority is not finalized. | Publication target, approver, release process, rollback path, and post-publication audit are unverified. | Confirm publication authority and deployment ownership in REQ-09. |
| DOC-BLOCK-012 | Medium | Open | Root global docs are not formally versioned because `/opt/Axodus` is not a Git repository. | Portfolio docs remain workspace-local and cannot be committed from the root. | Resolve REQ-01 versioning decision before claiming formal global-doc versioning. |
| DOC-BLOCK-013 | Medium | Open | Placeholder VitePress documentation remains at `docs/security/disclosure-policy.md`. | Public security disclosure policy cannot be treated as complete. | Fill or replace the placeholder in a scoped security/docs request with proper review. |
| DOC-BLOCK-014 | Medium | Open | No source `docs/public`, `docs/assets`, `docs/images`, or `docs/img` directory was detected. | Asset ownership and static-file policy remain undefined for future publication. | Define source asset policy in REQ-04 or a dedicated docs asset request. |
| DOC-BLOCK-015 | Medium | Open | Navigation/sidebar structural build validation is not complete. | Static config link target inspection passed, but Markdown body links and VitePress build behavior are not validated. | Run approved structural and link validation in REQ-04. |
| DOC-BLOCK-016 | Medium | Open | Deployment target and repo-local publication workflow are unknown. | `og:url` references a Vercel URL, but no repo-local CI/deploy config was found. | Confirm deployment target and authority in REQ-09. |
| DOC-BLOCK-017 | Medium | Open | Package manager ownership is ambiguous. | `package-lock.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml`, and README npm commands coexist. | Decide canonical package manager before build/readiness standardization. |
| DOC-BLOCKER-CONTENT-001 | High | Open | Content inventory is not completed. | Public documentation content cannot be corrected systematically until each page, section, asset, nav entry, placeholder, duplicate, outdated page, and missing page is classified. | Execute REQ-06 - Documentation Content Inventory & Editorial Gap Analysis. |
| DOC-BLOCKER-CONTENT-002 | High | Open | Editorial gap analysis is not completed. | Content rewrites could miss outdated, duplicated, inconsistent, overpromising, or maturity-misaligned material. | Complete editorial gap register in REQ-06 before any rewrite. |
| DOC-BLOCKER-CONTENT-003 | Medium | Open | Draft content correction process has not been executed. | Known gaps and placeholders remain unresolved in public docs until controlled draft corrections are prepared. | Execute REQ-07 - Documentation Content Correction Drafts after REQ-06. |
| DOC-BLOCKER-CONTENT-004 | High | Open | Content validation is not completed. | Corrected draft/candidate content cannot be trusted for publication readiness. | Execute REQ-08 - Documentation Content Quality, Links & Consistency Validation. |
| DOC-BLOCKER-CONTENT-005 | High | Open | Publication governance is not approved. | Documentation cannot be published or treated as official public release. | Execute REQ-09 - Documentation Publication Governance & Release Workflow. |
| DOC-BLOCKER-CONTENT-006 | High | Open | Financial/governance/security claims require enhanced review. | Unsupported APY, return, treasury, tokenomics, governance, audit, security, production-readiness, wallet, trading, swap, payout, legal, or compliance claims could mislead readers. | Route high-risk content through coordinator, nucleus owner, governance, financial/compliance, and security review as applicable. |
| DOC-REQ04-BLOCK-001 | High | Open | VitePress local build not executed in REQ-04. | Build success is still unverified. | Execute REQ-05 with the documented local build command if conditions remain satisfied. |
| DOC-REQ04-BLOCK-002 | Medium | Open | Dependencies are present but unverified by build. | Existing `node_modules` and VitePress binary appear available, but no build has confirmed runtime behavior. | Confirm in REQ-05 without installing dependencies. |
| DOC-REQ04-BLOCK-003 | Medium | Open | REQ-05 handoff proceeds with conditions. | Build validation may still be blocked if package manager ambiguity, generated artifact handling, or dependency state changes before REQ-05. | Re-check package manager choice, dependency state, ignored output paths, and git status before build. |
| DOC-REQ04-BLOCK-004 | Medium | Open | Content inventory is not completed. | Structural validation does not validate content completeness or editorial quality. | Execute REQ-06 after REQ-05. |
| DOC-REQ04-BLOCK-005 | Medium | Open | Content correction has not started. | Placeholder/thin pages remain uncorrected. | Execute REQ-07 after REQ-06. |
| DOC-REQ04-BLOCK-006 | Medium | Open | Responsible disclosure/security contact is not finalized. | Security documentation cannot be treated as publication-ready while contact information remains `To be defined`. | Resolve security contact through a scoped security/docs request before publication governance. |
