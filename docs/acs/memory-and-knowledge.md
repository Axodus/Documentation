# ACS Memory and Knowledge

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: ACS Nucleus

---

## Purpose

This document explains ACS semantic memory and knowledge packs.

## Scope

It covers `.knowledge`, public docs, planning documents, operational memory, validation rules, and memory risks.

## Overview

ACS needs persistent semantic memory because Axodus is too complex to rely only on live prompts or isolated conversations. Knowledge packs act as AI-native semantic memory for agents and documentation generation.

The `.knowledge` directory is not public documentation. Public docs should derive from validated knowledge packs, but knowledge packs may be denser, more explicit, and more operational.

## Memory Layers

- Semantic knowledge packs under `.knowledge`
- Public documentation under `/docs` and root files
- Planning documents under `/Documents`
- Operational memory, if implemented later
- Agent-local memory, if implemented later

## Knowledge Pack Lifecycle

1. Create domain context.
2. Review with human or domain owner.
3. Use for docs or tasks.
4. Compare outputs against invariants.
5. Update when project model changes.
6. Archive or supersede outdated packs.

## Validation Rules

Unverified agent output should not become knowledge. Major architecture changes require review. Outdated content should be marked Superseded or Deprecated. Knowledge packs should not include secrets. Agent memory should distinguish fact, plan, and hypothesis.

## Memory Risks

Risks include stale context, contamination, over-compression, duplicate conflicts, secret leakage, and overtrust in draft memory.
