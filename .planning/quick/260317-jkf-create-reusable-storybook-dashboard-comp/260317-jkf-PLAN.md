# Quick Task 260317-jkf: Create reusable Storybook dashboard components for the Mom Care home screen - Plan

**Date:** 2026-03-17
**Status:** In Progress

## Objective

Add token-driven React + TypeScript primitives and Storybook coverage for the dashboard flow so the Home screen can be assembled from reusable Mom Care components instead of one-off screen code.

## Tasks

### 1. Add dashboard primitive components
- Files: `my-design-system/src/components/IconButton/*`, `my-design-system/src/components/LanguageSwitcher/*`, `my-design-system/src/components/StatCard/*`, `my-design-system/src/components/SectionHeader/*`, `my-design-system/src/components/ListItem/*`
- Action: Implement reusable components with typed APIs, keyboard support, token-only visual styling, and barrel exports.
- Verify: Components compile under TypeScript and expose the requested props and state behavior.
- Done: New component modules exist with named exports and no hard-coded colors, spacing, radii, or focus-ring values.

### 2. Add Storybook stories for dashboard usage
- Files: `*.stories.tsx` under each new component directory
- Action: Add stories covering requested dashboard examples, states, and prop controls.
- Verify: Story files typecheck and demonstrate notification/profile buttons, language switching, metric cards, section headers, and dashboard row patterns.
- Done: Each component has Storybook stories aligned to the dashboard use cases.

### 3. Validate and document the quick task
- Files: `.planning/STATE.md`, `.planning/quick/260317-jkf-create-reusable-storybook-dashboard-comp/260317-jkf-SUMMARY.md`
- Action: Run repository checks, then record the completed quick-task outcome in planning artifacts.
- Verify: `npm run typecheck` and `npm run tokens:check` pass from `my-design-system/`.
- Done: Summary and state entries reflect the completed dashboard component task.
