# BUB_AGENTS.md

Operational guidance for using bub-agents inside the Documentation workspace.

## Purpose

Bub-agents are advisory execution-support agents for planning, architecture review, security review, QA, documentation, and implementation analysis. They do not override the latest user instruction, this workspace `.instructions`, repository reality, security constraints, or Axodus architecture principles.

The Coding Execution Agent remains responsible for final decisions, edits, validation, commit, and report.

## Workspace Context

Workspace: `Documentation`

Repository root: `/mnt/d/Rede/Github/Axodus/Documentation`

Primary responsibility: institutional documentation, wiki synchronization, source-of-truth maintenance, documentation drift handling, and agent-readable context material.

## When To Use Bub-Agents

Use bub-agents for multi-file documentation changes, source-of-truth updates, registry alignment, architecture documentation, governance/security docs, doc QA, drift analysis, or sprint-level documentation execution.

Do not use bub-agents for typo fixes, simple text changes, isolated formatting, or obvious one-line fixes.

## Roles

- Planner: documentation plan, affected docs, execution order, risks, acceptance criteria.
- Architect: information architecture, source hierarchy, ownership boundaries.
- Backend: only for registry/schema/document tooling boundaries.
- Frontend: only for documentation site UI if present.
- Web3: security-sensitive Web3 documentation review.
- Security: sensitive content, secrets, unsafe claims, policy language.
- QA: link checks, consistency checks, review checklist.
- Documentation: primary role for docs patches and decision tracking.

## Delegation Template

```md
# Bub-Agent Task
Role:
Workspace: Documentation
Repository: /mnt/d/Rede/Github/Axodus/Documentation
Task:
Relevant context:
Expected output:
- findings
- risks
- affected files
- recommended steps
- acceptance criteria
Constraints:
- Follow workspace `.instructions`.
- Preserve docs/wiki and registry source-of-truth rules.
- Mark uncertainty clearly.
```

## Workspace-Specific Rules

- Official facts must come from docs/wiki or Core Registry indexing.
- Documentation must distinguish implemented, planned, mock-first, read-only, deprecated, and production candidate states.
- Report drift instead of silently resolving conflicting docs.
- Do not convert sprint requests, agent memory, or unindexed drafts into official facts without source updates.
- Avoid publishing production claims without reviewed sources.
- Keep security, Governance, ACS, and product ownership boundaries explicit.
- Registry references must point to existing documents or be marked as pending.

## Conflict Resolution

Resolve conflicts in this order: latest user instruction, workspace `.instructions`, repository architecture, security requirements, smallest safe change, maintainability, bub-agent recommendation.

If unresolved, stop and report the blocker.

## Final Report

State whether bub-agents were used, roles used, key findings, accepted recommendations, rejected recommendations, tests run, and remaining risks.

## Commit Behavior

When a sprint is completed, run practical validation, check `git status`, commit the completed sprint, and report the commit hash.

Recommended commit format: `documentation: <short description>`

