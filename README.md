# Mom Care Design System

Mom Care is a React, TypeScript, Tailwind CSS, and Storybook based design system workspace built from the Morph Maternity foundations reference. The goal of the project is to turn that source artifact into a reusable, documented, token-driven UI system that stays visually consistent, accessible, and easy to extend.

## Overview

This repository is focused on systemizing the visual language defined in the source HTML design foundations document. Instead of treating the source as a loose visual reference, the project converts it into implementation-ready foundations:

- design tokens for color, typography, spacing, elevation, border, radius, and layout
- Tailwind theme mappings and utilities based on those tokens
- reusable React components that consume tokens instead of hard-coded values
- Storybook documentation for both foundations and components
- accessibility expectations aligned to WCAG 2.1 AA

The repository currently contains the active implementation under `my-design-system/`.

## Current Stack

- React 19
- TypeScript 5
- Tailwind CSS 3
- Storybook 8 with React Vite
- PostCSS

## Project Goals

- Preserve source fidelity to the supplied design foundations document
- Centralize visual decisions in tokens rather than component-local styles
- Make Storybook the main documentation surface for foundations and components
- Provide a scalable base for future Mom Care UI primitives and composite components
- Keep accessibility as a core requirement, not a later cleanup step

## Repository Structure

```text
.
|-- my-design-system/
|   |-- .storybook/         # Storybook configuration
|   |-- scripts/            # Token and Tailwind contract checks
|   |-- src/
|   |   |-- components/     # React components and stories
|   |   |-- storybook/      # Foundations documentation stories
|   |   `-- tokens/         # Token source, semantic mappings, Tailwind bridge
|   |-- package.json
|   |-- tailwind.config.ts
|   `-- tsconfig.json
`-- .planning/              # Project planning and quick-task records
```

## What Is Already Implemented

### Foundations

The design system already includes tokenized foundations for:

- color primitives and semantic color roles
- typography families, sizes, weights, line heights, and tracking
- spacing scale
- elevation and shadow system
- border widths and border color roles
- radius scale
- responsive grid definitions
- component alias mappings for common UI patterns

### Storybook

Storybook currently documents:

- `Design System / Foundations / Overview`
- `Design System / Foundations / Design Tokens`
- `Design System / Styles / Color`
- `Design System / Styles / Typography`
- `Design System / Styles / Spacing`
- `Design System / Styles / Elevation`
- `Design System / Styles / Grid`
- `Design System / Styles / Iconography`
- `Design System / Styles / Border`
- `Design System / Styles / Radius`
- `Navigation / Bottomnavbar`

### Tooling

The workspace also includes:

- TypeScript validation
- token hardcode checks
- Tailwind contract checks
- Storybook production build support

## Getting Started

From the repository root:

```bash
cd my-design-system
npm install
```

Start Storybook:

```bash
npm run storybook
```

Build Storybook:

```bash
npm run build-storybook
```

Run validation:

```bash
npm run typecheck
npm run tokens:check
npm run tailwind:check
```

## Source Reference

The implementation is derived from the Morph Maternity design foundations artifact used as the initial source of truth for:

- brand palette
- semantic usage colors
- typography direction
- spacing rhythm
- shadows and elevation
- rounded corner language
- border usage
- responsive grid behavior
- iconography guidance

Some source decisions are still documented as provisional where the original artifact indicated they should be verified against formal brand guidelines.

## Development Principles

- Tokens first: components should consume tokens, not arbitrary visual values
- Storybook first: new components and foundation changes should remain visible and documented
- Accessibility first: focus states, contrast, semantics, and keyboard support are mandatory
- Source traceability: core styling choices should map back to the reference artifact

## Status

This repository is in active design system development. The foundations layer and initial Storybook documentation are in place, and the next work continues through component expansion, guardrails, and accessibility verification.
