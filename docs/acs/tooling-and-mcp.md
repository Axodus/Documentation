# ACS Tooling and MCP

Status: Draft  
Version: 0.1.0  
Last Updated: 2026-05-16  
Owner: ACS Nucleus

---

## Purpose

This document defines ACS tooling and MCP principles.

## Scope

It covers tool types, permission levels, MCP requirements, tool call records, safe patterns, and restricted actions.

## Overview

ACS becomes powerful when agents can use tools. It also becomes dangerous if tool access is unrestricted. Tools, MCP servers, connectors, scripts, APIs, repositories, databases, wallets, exchanges, and deployment systems are permissioned capability surfaces.

## Tool Types

- Read tools
- Write tools
- Execution tools
- Communication tools
- Analysis tools
- MCP servers

## Permission Principles

- Least privilege
- Explicit scope
- Review before sensitive writes
- No secret exposure
- Logging
- Revocation
- Environment separation

## Permission Levels

| Level | Description |
| --- | --- |
| READ_PUBLIC | Read public docs or repos. |
| READ_INTERNAL | Read internal non-secret project files. |
| DRAFT_WRITE | Generate drafts without production effect. |
| REVIEWED_WRITE | Modify files or create PRs under review. |
| LOW_RISK_ACTION | Perform reversible low-risk action under scope. |
| SENSITIVE_ACTION | Requires human approval and logs. |
| CRITICAL_ACTION | Prohibited by default without formal authority. |

## MCP Requirements

MCP tools should have clear schemas, scoped permissions, disabled or confirmed destructive actions, secret controls, logs, environment separation, governance context for governance-sensitive tools, trading boundaries, and treasury read-only defaults.

## Safe Patterns

Safe patterns include read-then-draft, PR instead of direct production changes, dry run first, approval reference required, scoped credentials, audit logs, and sandbox execution.
