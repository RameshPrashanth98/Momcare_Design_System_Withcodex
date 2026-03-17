# Quick Task 260317-vlf: reorder storybook navigation to requested content order - Plan

**Date:** 2026-03-17
**Status:** Complete

## Objective

Reorder the Storybook sidebar so the MomCare sections follow the requested navigation sequence, while folding stray top-level groups into the intended buckets.

## Tasks

### 1. Inspect current Storybook grouping
- Read the global `storySort` configuration.
- Identify top-level story titles that fall outside the requested order.

### 2. Align grouping and sort order
- Expand the Storybook `storySort` order to the requested sequence.
- Move `Primitives` stories into `Core` and `Onboarding Welcome` component stories into `Onboarding`.
- Define explicit ordering for the `Screens` group.

### 3. Verify and record completion
- Run project type checking after the Storybook metadata changes.
- Write quick-task artifacts and update `.planning/STATE.md`.
