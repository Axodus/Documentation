# ACS Human Oversight

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: ACS Nucleus

---

## Purpose

This document explains human oversight for ACS.

## Scope

It covers accountability roles, review requirements, approval scopes, audit trail, and failure modes.

## Overview

ACS increases operational capacity, but responsibility remains with humans, governance bodies, and defined product owners. Human oversight is the safety system that makes ACS viable.

## Accountability Roles

- Agents produce scoped outputs, identify assumptions and risks, and respect permissions.
- Human operators review outputs, approve handoffs, correct errors, and decide lower-risk actions within role.
- Product owners validate domain accuracy and implementation alignment.
- Governance bodies approve governance-sensitive actions.
- Security reviewers review sensitive contract, tool, infrastructure, or API changes.
- Treasury reviewers review capital exposure and reporting.

## Approval Scopes

- Approve for draft
- Approve for internal use
- Approve for public docs
- Approve for implementation task
- Approve for governance review
- Approve for execution under defined authority

## Audit Trail

Material ACS outputs should preserve task ID, input context summary, agent outputs, assumptions, risks, tool calls, human review decision, governance reference if any, final output, handoff target, execution receipt if action occurred, and archive location.

## Failure Modes

Oversight can fail through rubber-stamp review, missing domain owner, unclear authority, unlogged approval, review after execution, or blame shifting to agents.
