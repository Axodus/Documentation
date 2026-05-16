# Documentation Rebuild Protocol

Status: Active
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus Core

---

## Step 1 - Repository Audit

Inspect current files, legacy GitBook navigation, root documents, Markdown folders, framework configuration, and duplicated or obsolete content.

## Step 2 - Documents Folder Review

Read all files in `/Documents` before major rewrites. Extract current ecosystem principles, nuclei, governance model, product model, technical assumptions, standardized terms, and conflicts with old documentation.

## Step 3 - Create Documentation Map

Generate or update the target file tree before writing large new sections. Prefer VitePress under `/docs` as the current publishing framework.

## Step 4 - Rewrite Foundational Files

Prioritize:

- `README.md`
- `ARCHITECTURE.md`
- `GOVERNANCE.md`
- `ROADMAP.md`
- `SECURITY.md`
- `CONTRIBUTING.md`
- `GLOSSARY.md`

## Step 5 - Create Nucleus Documentation

Create or update documentation for Governance, Business, Academy, Trading, Mining, Marketplace, DaaS / DeFi, Treasury, ACS / AI Agents, Accountability, Tokenomics, and Risk Management.

## Step 6 - Link and Navigation Pass

Ensure documents are linked from the root README and from the VitePress sidebar. Each nucleus overview should link to its sub-documents.

## Step 7 - Review Pass

Apply `REVIEW_CHECKLIST.md`. Mark unresolved decisions as Draft or Needs Review instead of inventing final details.
