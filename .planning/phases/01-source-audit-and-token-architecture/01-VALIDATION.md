---
phase: 01
slug: source-audit-and-token-architecture
status: ready
nyquist_compliant: true
wave_0_complete: true
created: 2026-03-16
---

# Phase 01 - Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | npm scripts + TypeScript compiler + Node validation script |
| **Config file** | `my-design-system/tsconfig.json` |
| **Quick run command** | `npm run tokens:check` |
| **Full suite command** | `npm run typecheck && npm run tokens:check` |
| **Estimated runtime** | ~10 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npm run tokens:check`
- **After every plan wave:** Run `npm run typecheck && npm run tokens:check`
- **Before `$gsd-verify-work`:** Full suite must be green
- **Max feedback latency:** 10 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 01-01-01 | 01 | 1 | FND-03 | static | `npm run typecheck` | W0 pending | pending |
| 01-01-02 | 01 | 1 | FND-04 | static | `npm run tokens:check` | W0 pending | pending |
| 01-02-01 | 02 | 2 | FND-01 | static | `npm run tokens:check` | W0 pending | pending |
| 01-02-02 | 02 | 2 | FND-02 | static | `npm run typecheck` | W0 pending | pending |
| 01-02-03 | 02 | 2 | FND-04 | static | `npm run tokens:check` | W0 pending | pending |

*Status: pending / green / red / flaky*

---

## Wave 0 Requirements

- [ ] `my-design-system/package.json` - scripts for `typecheck` and `tokens:check`
- [ ] `my-design-system/tsconfig.json` - TypeScript config for token modules
- [ ] `my-design-system/scripts/check-token-hardcodes.mjs` - token validation and hard-coded value guardrail

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Extracted values match the source HTML sections they claim to represent | FND-01, FND-02, FND-03 | Source fidelity requires human comparison against the provided HTML artifact | Open `morph-maternity-design-system.html` and `my-design-system/src/tokens/source-audit.md`; confirm colors, typography scales, spacing, radius, shadows, borders, and grid values are mapped to the correct source sections and any flagged items remain marked provisional |

---

## Validation Sign-Off

- [x] All tasks have `<automated>` verify or Wave 0 dependencies
- [x] Sampling continuity: no 3 consecutive tasks without automated verify
- [x] Wave 0 covers all MISSING references
- [x] No watch-mode flags
- [x] Feedback latency < 10s
- [x] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
