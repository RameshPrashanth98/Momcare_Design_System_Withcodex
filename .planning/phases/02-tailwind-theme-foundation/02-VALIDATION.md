---
phase: 02
slug: tailwind-theme-foundation
status: ready
nyquist_compliant: true
wave_0_complete: true
created: 2026-03-16
---

# Phase 02 - Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | npm scripts + TypeScript compiler + Node validation script |
| **Config file** | `my-design-system/tsconfig.json` |
| **Quick run command** | `npm run tailwind:check` |
| **Full suite command** | `npm run typecheck && npm run tokens:check && npm run tailwind:check` |
| **Estimated runtime** | ~15 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npm run tailwind:check`
- **After every plan wave:** Run `npm run typecheck && npm run tokens:check && npm run tailwind:check`
- **Before `$gsd-verify-work`:** Full suite must be green
- **Max feedback latency:** 15 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 02-01-01 | 01 | 1 | THM-01 | static | `npm run typecheck` | W0 pending | pending |
| 02-01-02 | 01 | 1 | THM-01 | static | `npm run tailwind:check` | W0 pending | pending |
| 02-01-03 | 01 | 1 | THM-03 | static | `npm run tailwind:check` | W0 pending | pending |
| 02-02-01 | 02 | 2 | THM-02 | static | `npm run tailwind:check` | W0 pending | pending |
| 02-02-02 | 02 | 2 | THM-03 | static | `npm run typecheck` | W0 pending | pending |
| 02-02-03 | 02 | 2 | THM-01, THM-02, THM-03 | static | `npm run typecheck && npm run tokens:check && npm run tailwind:check` | W0 pending | pending |

*Status: pending / green / red / flaky*

---

## Wave 0 Requirements

- [ ] `my-design-system/package.json` - includes Tailwind validation scripts and dependencies
- [ ] `my-design-system/tailwind.config.ts` - package-local Tailwind contract entry point
- [ ] `my-design-system/src/tokens/tailwind-theme.ts` - typed theme extension adapter
- [ ] `my-design-system/scripts/check-tailwind-contract.mjs` - deterministic Tailwind contract validation

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Semantic utilities remain the primary authoring surface while primitive values stay available but secondary | THM-01, THM-03 | Naming and documentation emphasis need human review | Open `my-design-system/tailwind.config.ts`, `my-design-system/src/tokens/tailwind-theme.ts`, and any Tailwind usage docs; confirm semantic groups are first-class and primitive mappings are clearly namespaced secondary |
| Layout helpers preserve the source HTML desktop/tablet/mobile grid behavior with minimal cleanup | THM-02 | The source-fidelity judgment depends on comparing token behavior to the original source document | Compare `my-design-system/src/tokens/primitives.ts`, `my-design-system/src/tokens/tailwind-plugin.ts`, and `my-design-system/src/tokens/source-audit.md`; confirm container width, columns, gutters, and margins reflect the existing grid tokens |
| Editorial typography utilities preserve the Phase 1 token naming and responsive behavior | THM-01, THM-03 | Requires checking that named utilities still match the token contract rather than only compiler success | Compare `my-design-system/src/tokens/typography.ts` with `my-design-system/src/tokens/tailwind-plugin.ts`; verify named utilities exist for `displayHero`, `displaySection`, `bodyLg`, `bodyMd`, `labelSm`, `eyebrow`, and `caption` |

---

## Validation Sign-Off

- [x] All tasks have automated verification or Wave 0 dependencies
- [x] Sampling continuity: no 3 consecutive tasks without automated verify
- [x] Wave 0 covers all missing Tailwind contract references
- [x] No watch-mode flags
- [x] Feedback latency < 15s
- [x] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
