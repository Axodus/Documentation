# Documentation Standards

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-18  
Owner: Axodus Core

---

## Purpose

This page summarizes public documentation standards for Axodus contributors and reviewers.

## Language

Final public documentation must be written in English.

## Structure

Major nucleus pages should include status, version, last updated date, owner, purpose, scope, ecosystem role, documentation map, and risk considerations.

## Tone

Documentation should be professional, transparent, technical, and operationally clear. It must avoid hype, vague crypto marketing, unsupported partnership claims, fake audit claims, and unrealistic financial expectations.

## Source Boundaries

Public documentation lives under `/docs`. Internal semantic memory under `.knowledge`, internal protocols under `.instructions`, and legacy or historical material under `legacy/` must not be treated as canonical public documentation unless intentionally reviewed and migrated.

## Token Language

Use `$Neurons` as the canonical public documentation name. Use `NEURONS` only when referencing the technical ERC-20 symbol.

## Risk Language

Sensitive pages must include appropriate risk context and must not promise guaranteed APY, yield, profit, ROI, payout, token appreciation, strategy performance, or risk-free outcomes.

## Minimum Substantive Standard

A public page should state its purpose and scope, identify the relevant actors
and authority, explain applicable inputs, outputs, process or components, name
dependencies, and distinguish current status from future direction. It must also
state material limitations, public/private boundaries, and failure or exception
behavior where those affect interpretation.

Not every field applies to every page. A glossary or index may remain concise
when its navigational function is explicit. An architecture or lifecycle page,
however, is incomplete if it only lists concepts without describing components,
handoffs, state, or unresolved interfaces.

When evidence is unavailable, authors document the gap and route it to the
appropriate backlog. They do not replace missing evidence with stronger prose.
