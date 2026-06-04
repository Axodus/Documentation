# Documentation Source of Truth

Status: Active Recovery
Version: 0.1.0
Last Updated: 2026-06-04
Owner: Documentation Coordinator

---

## Purpose

This file defines source-of-truth boundaries for the Documentation nucleus.

## Hierarchy

| Source | Authority |
|---|---|
| Root global `.instructions` | Portfolio coordination, maturity framework, request queue, cross-nucleus blockers, global safety boundaries. |
| Documentation `.instructions` | Documentation workflow, validation, publishing standards, source alignment, and documentation quality. |
| Core `.instructions` / Core Registry | Ecosystem coordination semantics, architectural boundaries, registry/source-of-truth concepts. |
| Nucleus `.instructions` | Local product/workspace constraints, validation commands, implementation boundaries, status, and safety rules. |
| VitePress documentation source | Active Axodus technical documentation build and publication surface, candidate/published depending on approval state. |
| Legacy GitBook references | Deprecated historical references only; not the active publication target. |
| Local `/docs` | Current VitePress source tree for technical documentation. |
| `/Documents` | Planning, references, research, historical material; not canonical by default. |

## Documentation Platform

The active Axodus documentation system is VitePress.

VitePress is the technical documentation build and publication surface for the Documentation nucleus.

GitBook references, if found in older instructions or reports, are legacy references and must not be treated as the active publication target unless the coordinator explicitly re-approves GitBook.

Source-of-truth hierarchy:

1. Coordinator-approved portfolio instructions.
2. Global `/opt/Axodus/.instructions` governance and portfolio docs.
3. Documentation nucleus `.instructions`.
4. VitePress documentation source files.
5. Published documentation output.

REQ-03 creates the VitePress asset inventory and alignment baseline. It does not validate VitePress build output, approve publication, or grant final L4.

Official/public claims must not exceed reviewed and approved documentation. If legacy GitBook content conflicts with current local governance docs, record the drift and do not silently overwrite either source.

## Local Workspace Docs

Local workspace docs can be:

- Draft;
- Candidate;
- Approved;
- Published;
- Deprecated.

Local files are not public truth by default. Publication status must be explicit.

## Conflict Resolution

1. Use the latest coordinator-approved request for the same scope.
2. Apply the stricter safety boundary.
3. Respect affected nucleus `.instructions` for local product facts.
4. Use Core for architecture/source-of-truth semantics.
5. Use Documentation for tooling/publishing process.
6. Record unresolved conflicts as blockers.

## Official Claims Rule

Official/public claims must not exceed approved documentation.

Do not claim:

- production readiness;
- live integrations;
- financial returns;
- APY/yield guarantees;
- final token behavior;
- audits, partnerships, addresses, or deployments;
- governance approval;

unless verified through approved source-of-truth records.

## Core Registry Boundary

Core Registry presence does not authorize implementation, production approval, runtime activation, or policy approval. Registry/source references must be treated as evidence, not execution permission.
