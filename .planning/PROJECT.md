# Morph Maternity Design System

## What This Is

A React and TypeScript design system derived from the provided Morph Maternity HTML foundations document. It will convert the brand's tokens, layout rules, and component styling direction into a reusable Tailwind-powered component library with Storybook documentation and WCAG 2.1 AA accessibility expectations built in.

The primary consumers are the product team building Morph Maternity experiences and any future contributors extending the component library. The immediate source of truth is the supplied HTML file, including its token definitions, editorial tone, and documented grid, spacing, elevation, border, and radius rules.

## Core Value

Every UI component should express the Morph Maternity brand consistently through shared tokens while remaining accessible, documented, and straightforward to reuse.

## Requirements

### Validated

(None yet - ship to validate)

### Active

- [ ] Extract design tokens from the source HTML into a canonical token system for code use.
- [ ] Implement React and TypeScript components that consume tokens rather than hard-coded visual values.
- [ ] Document foundations and component variants in Storybook.
- [ ] Meet WCAG 2.1 AA expectations across color, focus states, semantics, and interaction patterns.

### Out of Scope

- Native mobile libraries - current request is web-focused with React, Tailwind CSS, and Storybook.
- A full brand rewrite beyond the supplied HTML foundations - the immediate task is systematization, not rebranding.
- Final verification of any assets explicitly marked for brand-guideline confirmation in the HTML - those require the official brand guide.

## Context

The source brief is an HTML design foundations document located at `D:\1.Product Development with AI\15.Claude code design system\morph-maternity-design-system.html`. It defines brand colors, semantic colors, typography families and scales, spacing, shadows, radii, border widths, grid behavior, and iconography notes.

The source establishes a warm, editorial visual language centered on rose, cream, sage, and neutral palettes, with `Cormorant Garamond` for display and `DM Sans` for body copy. It also documents responsive grid expectations, subtle border usage, soft circular radius language, and rose-tinted shadows that should become implementation constraints rather than loose inspiration.

The user has already fixed the implementation stack to React + TypeScript, Tailwind CSS, and Storybook. Accessibility is not optional; WCAG 2.1 AA compliance must shape token choices, focus indicators, semantic markup, and variant design. Some source sections include flags indicating they may need later validation against official brand guidelines, so the system should preserve those caveats rather than silently invent missing brand rules.

## Constraints

- **Tech stack**: React + TypeScript - required by the user for all component implementation.
- **Styling**: Tailwind CSS - tokens and component APIs must integrate cleanly with a Tailwind-based workflow.
- **Documentation**: Storybook - foundations and all component variants need first-class story coverage.
- **Accessibility**: WCAG 2.1 AA - color contrast, keyboard support, focus visibility, semantics, and state communication must be part of the system definition.
- **Source fidelity**: HTML foundations file is the primary artifact - design tokens and visual rules must trace back to it instead of being improvised.
- **Token discipline**: Components must consume design tokens exclusively - hard-coded colors, spacing, radii, and shadows are not acceptable in component implementations.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Use the provided HTML file as the initial design source of truth | The request is to build the design system from that file | - Pending |
| Standardize tokens before component work | Component APIs should be built on stable foundations rather than retrofitted later | - Pending |
| Use Tailwind as the token delivery mechanism | The requested stack requires utility-based implementation and theme integration | - Pending |
| Treat accessibility as a system-level requirement, not a cleanup phase | WCAG 2.1 AA affects tokens, states, semantics, and documentation from the start | - Pending |
| Document all variants in Storybook as part of delivery | Consumers need a browsable contract for usage and regression review | - Pending |

---
*Last updated: 2026-03-16 after initialization*
