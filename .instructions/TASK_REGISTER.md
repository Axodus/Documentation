# Documentation Task Register

Status: Active Recovery
Version: 0.1.0
Last Updated: 2026-06-04
Owner: Documentation Coordinator

---

| ID | Title | Status | Owner Role | Dependencies | Notes |
|---|---|---|---|---|---|
| DOC-TASK-001 | Recover Documentation `.instructions` | Complete in REQ-02 | Documentation Coordinator | REQ-01 global docs recovery | Required operational files created or completed. |
| DOC-TASK-002 | Map existing documentation assets | Partially Complete in REQ-03 | Documentation Coordinator | REQ-02A | VitePress `/docs`, config/navigation, scripts, generated output, and key root/docs files inventoried. Full `/Documents` classification remains future scope. |
| DOC-TASK-003 | Identify empty placeholder docs | Pending | Documentation Coordinator | REQ-01 BUB finding | Root global placeholders include `SECURITY.md`, `STANDARDS.md`, `PRODUCTS.md`, `MCP.md`, `TOKENOMICS.md`; Documentation placeholders require inventory. |
| DOC-TASK-004 | Align VitePress documentation surface with local docs | Complete in REQ-03 | Documentation Coordinator | DOC-TASK-002 | VitePress alignment baseline documented; build/publication remain blocked. |
| DOC-TASK-009 | Correct publication target from GitBook to VitePress | Complete in REQ-02A | Documentation Coordinator | REQ-02 | GitBook is legacy/not active; VitePress is active documentation platform. |
| DOC-TASK-005 | Define versioning implementation path | Pending | Portfolio Coordinator | REQ-01 versioning strategy | Option B preferred; Option C via Documentation acceptable fallback. |
| DOC-TASK-006 | Define publication approval flow | Candidate | Documentation Coordinator | OWNERSHIP.md and PUBLICATION_BOUNDARIES.md | Flow documented, not yet externally verified. |
| DOC-TASK-007 | Create documentation validation checklist | Complete in REQ-02 | Documentation Coordinator | VALIDATION.md | Candidate/approved/published validation stages defined. |
| DOC-TASK-008 | Prepare L4 validation package | Complete in REQ-02 | Documentation Coordinator | Required `.instructions` files | L4 candidate only; not final L4. |
| DOC-REQ03-001 | Inventory VitePress source structure | Complete in REQ-03 | Documentation Coordinator | REQ-02A | Source root, content directories, index page, generated output, and cache locations inventoried. |
| DOC-REQ03-002 | Inventory VitePress config and nav/sidebar | Complete in REQ-03 | Documentation Coordinator | REQ-02A | `docs/.vitepress/config.mts` and nav/sidebar declarations inventoried; static configured-link target check found no missing Markdown targets. |
| DOC-REQ03-003 | Inventory assets/public directories | Complete in REQ-03 | Documentation Coordinator | REQ-02A | No source `docs/public`, `docs/assets`, `docs/images`, or `docs/img` detected; generated dist assets exist and remain ignored. |
| DOC-REQ03-004 | Inventory package scripts and build command | Complete in REQ-03 | Documentation Coordinator | REQ-02A | `docs:dev`, `docs:build`, and `docs:preview` documented; build not run. |
| DOC-REQ03-005 | Identify placeholder/empty docs | Complete in REQ-03 | Documentation Coordinator | REQ-02A | No empty source docs detected; `docs/security/disclosure-policy.md` remains placeholder. |
| DOC-REQ03-006 | Define VitePress validation stages | Complete in REQ-03 | Documentation Coordinator | REQ-02A | Stage 0 through Stage 5 validation plan created. |
| DOC-REQ03-007 | Update Documentation status and blockers | Complete in REQ-03 | Documentation Coordinator | REQ-02A | STATUS and BLOCKER_REGISTER updated; final L4 remains blocked. |
| DOC-REQ03-008 | Prepare REQ-04 structural validation handoff | Complete in REQ-03 | Documentation Coordinator | REQ-03 | REQ-04 defined as VitePress Structural Validation & Local Build Readiness. |
| DOC-SPRINT01-001 | Define content change pipeline | Complete in Documentation Sprint 01 | Documentation Coordinator | REQ-03 | Created `DOCUMENTATION_CONTENT_CHANGE_PIPELINE.md`. |
| DOC-SPRINT01-002 | Update Documentation roadmap sequence | Complete in Documentation Sprint 01 | Documentation Coordinator | REQ-03 | REQ-04 through REQ-09 defined in corrected order. |
| DOC-SPRINT01-003 | Define content inventory request | Complete in Documentation Sprint 01 | Documentation Coordinator | REQ-03 | REQ-06 defines content inventory and editorial gap analysis. |
| DOC-SPRINT01-004 | Define editorial gap analysis request | Complete in Documentation Sprint 01 | Documentation Coordinator | REQ-03 | Editorial gap classifications and high-risk topics defined. |
| DOC-SPRINT01-005 | Define draft correction request | Complete in Documentation Sprint 01 | Documentation Coordinator | REQ-06 | REQ-07 defines controlled draft/candidate corrections. |
| DOC-SPRINT01-006 | Define content validation request | Complete in Documentation Sprint 01 | Documentation Coordinator | REQ-07 | REQ-08 defines quality, links, consistency, and claim validation. |
| DOC-SPRINT01-007 | Define publication governance request | Complete in Documentation Sprint 01 | Documentation Coordinator | REQ-08 | REQ-09 defines publication governance and release workflow. |
| DOC-SPRINT01-008 | Update blockers and status | Complete in Documentation Sprint 01 | Documentation Coordinator | REQ-03 | STATUS and BLOCKER_REGISTER updated for content pipeline blockers. |
| DOC-REQ04-001 | Validate VitePress source root and config | Complete in REQ-04 | Documentation Coordinator | REQ-03 | `docs/` and `docs/.vitepress/config.mts` validated by static inspection. |
| DOC-REQ04-002 | Validate theme/customization structure | Complete in REQ-04 | Documentation Coordinator | REQ-03 | `docs/.vitepress/theme/index.ts` and `custom.css` validated by static inspection. |
| DOC-REQ04-003 | Validate nav/sidebar route targets | Complete in REQ-04 | Documentation Coordinator | REQ-03 | 249 unique config links resolved to existing Markdown targets by static inspection. |
| DOC-REQ04-004 | Review internal markdown links statically | Complete in REQ-04 | Documentation Coordinator | REQ-03 | Static Markdown local-link inspection found no missing local targets. |
| DOC-REQ04-005 | Review asset references statically | Complete in REQ-04 | Documentation Coordinator | REQ-03 | No source asset references or missing asset targets found. |
| DOC-REQ04-006 | Determine package manager and build command | Complete in REQ-04 | Documentation Coordinator | REQ-03 | `npm run docs:build` recommended; npm/pnpm ambiguity documented. |
| DOC-REQ04-007 | Determine local build readiness | Complete in REQ-04 | Documentation Coordinator | REQ-03 | Build readiness classified `READY_WITH_CONDITIONS`. |
| DOC-REQ04-008 | Create REQ-05 local build validation handoff | Complete in REQ-04 | Documentation Coordinator | REQ-04 | Handoff classified `PROCEED_WITH_CONDITIONS`. |
| DOC-REQ05-001 | Verify REQ-04 build handoff | Complete in REQ-05 | Documentation Coordinator | REQ-04 | Handoff was `PROCEED_WITH_CONDITIONS`; conditions were documented before build. |
| DOC-REQ05-002 | Confirm package manager and build command | Complete in REQ-05 | Documentation Coordinator | REQ-04 | Used `npm run docs:build` from REQ-04 handoff. |
| DOC-REQ05-003 | Confirm dependencies are already available | Complete in REQ-05 | Documentation Coordinator | REQ-04 | `node_modules/`, VitePress binary, and VitePress package were present before build. |
| DOC-REQ05-004 | Record pre-build git status | Complete in REQ-05 | Documentation Coordinator | REQ-04 | Pre-build status was clean: `## main...origin/main`. |
| DOC-REQ05-005 | Execute local VitePress build if authorized | Complete in REQ-05 | Documentation Coordinator | REQ-04 | Build executed with exit code `0`; no install, dev, preview, publish, or deploy command run. |
| DOC-REQ05-006 | Review build output | Complete in REQ-05 | Documentation Coordinator | REQ-05 | Output exists under ignored `docs/.vitepress/dist/`; warning recorded for chunk size. |
| DOC-REQ05-007 | Record post-build git status | Complete in REQ-05 | Documentation Coordinator | REQ-05 | Post-build status remained clean before documentation updates. |
| DOC-REQ05-008 | Create REQ-06 content inventory handoff | Complete in REQ-05 | Documentation Coordinator | REQ-05 | Handoff created with status `PROCEED_WITH_WARNINGS`. |
| DOC-REQ06-001 | Resolve VitePress content root | Complete in REQ-06 | Documentation Coordinator | REQ-05 | Active content root resolved as `docs/`. |
| DOC-REQ06-002 | Inventory Markdown pages | Complete in REQ-06 | Documentation Coordinator | REQ-05 | 248 Markdown pages inventoried under `docs/`, excluding generated output. |
| DOC-REQ06-003 | Map nav/sidebar coverage | Complete in REQ-06 | Documentation Coordinator | REQ-05 | 248 nav/sidebar targets mapped; 0 missing targets and 0 orphan pages found. |
| DOC-REQ06-004 | Identify placeholders and empty pages | Complete in REQ-06 | Documentation Coordinator | REQ-05 | 6 placeholder/context pages flagged. |
| DOC-REQ06-005 | Identify duplicate or overlapping pages | Complete in REQ-06 | Documentation Coordinator | REQ-05 | 11 repeated page-title groups flagged for terminology consistency review. |
| DOC-REQ06-006 | Identify editorial gaps | Complete in REQ-06 | Documentation Coordinator | REQ-05 | 38 editorial gap records created. |
| DOC-REQ06-007 | Register high-risk claims | Complete in REQ-06 | Documentation Coordinator | REQ-05 | 17 sensitive claim categories registered by static keyword inspection. |
| DOC-REQ06-008 | Create REQ-07 correction handoff | Complete in REQ-06 | Documentation Coordinator | REQ-06 | Handoff created with status `PROCEED_WITH_CONDITIONS`. |
| DOC-REQ07-001 | Read REQ-06 correction handoff | Complete in REQ-07 | Documentation Coordinator | REQ-06 | Handoff was `PROCEED_WITH_CONDITIONS`. |
| DOC-REQ07-002 | Create correction plan | Complete in REQ-07 | Documentation Coordinator | REQ-06 | `DOCUMENTATION_CONTENT_CORRECTION_PLAN.md` created. |
| DOC-REQ07-003 | Apply draft content corrections | Complete in REQ-07 | Documentation Coordinator | REQ-06 | 15 authorized content pages corrected as draft/candidate. |
| DOC-REQ07-004 | Resolve or flag high-risk claims | Complete in REQ-07 | Documentation Coordinator | REQ-06 | Claims softened, disclaimed, marked draft, or left for review. |
| DOC-REQ07-005 | Update draft changelog | Complete in REQ-07 | Documentation Coordinator | REQ-07 | `DOCUMENTATION_DRAFT_CHANGELOG.md` created. |
| DOC-REQ07-006 | Create claim resolution notes | Complete in REQ-07 | Documentation Coordinator | REQ-07 | `DOCUMENTATION_CLAIM_RESOLUTION_NOTES.md` created. |
| DOC-REQ07-007 | Create REQ-08 validation handoff | Complete in REQ-07 | Documentation Coordinator | REQ-07 | Handoff created with status `PROCEED_WITH_WARNINGS`. |
| DOC-REQ07-008 | Validate documentation-only diff | Complete in REQ-07 | Documentation Coordinator | REQ-07 | Final validation performed before commit. |
