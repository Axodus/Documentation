# Contributing to Axodus Documentation

Status: Draft
Version: 0.1.0
Last Updated: 2026-05-16
Owner: Axodus Core

---

## Purpose

This document explains how contributors should work with the Axodus documentation repository.

## Required Language

All final-facing documentation must be written in English.

## Before Editing

Before major documentation changes:

- read `.instructions`;
- inspect `/Documents`;
- check the current `/docs` structure;
- review root-level canonical files;
- verify whether legacy content is historical or still useful.

## Pull Request Expectations

Use clear pull request descriptions. Explain what changed, why it changed, which files are canonical, which areas remain uncertain, and whether any legacy material was superseded.

## Uncertainty

Mark uncertainty clearly with `Draft`, `Needs Review`, `Planned`, or inline notes. Do not invent final governance parameters, token mechanics, legal status, audit results, partnerships, contract addresses, or deployment state.

## Historical Material

Do not overwrite or delete historical files without reason. If material is obsolete, preserve it as a historical reference or explain why it was archived.

## Content Guardrails

Do not add:

- guaranteed APY or profit claims;
- risk-free language;
- speculative token claims;
- fake contacts;
- fake audits;
- fake partnerships;
- unverified integrations;
- hardcoded sensitive secrets.

## VitePress

The current documentation framework is VitePress. Canonical site content should be added under `/docs` and linked from the VitePress sidebar when it is major documentation.
