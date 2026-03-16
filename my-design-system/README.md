# Mom Care

This workspace contains the Mom Care design-system foundations derived from the Morph Maternity source document.

## Token Architecture

The token model uses three token layers:

- `primitive` for source-faithful values taken directly from the HTML foundations file
- `semantic` for reusable usage roles built on top of primitive values
- `componentAlias` for common cross-component mappings and state tokens

## Validation Commands

- `npm run typecheck`
- `npm run tokens:check`
- `npm run tailwind:check`

## Tailwind Contract

Semantic utilities are the default authoring surface for Tailwind consumption in this workspace. Primitive mappings remain available for audits and edge cases, but they are intentionally secondary to semantic roles and shared aliases.

The Tailwind contract exposes a typed theme bridge, named editorial utilities, and shared state/layout helpers derived from the token source of truth.

### Editorial Utilities

- `displayHero`
- `displaySection`
- `bodyLg`
- `bodyMd`
- `labelSm`
- `eyebrow`
- `caption`

### Layout Helpers

- container
- grid
- gutters
- margins

### Shared Alias Utilities

- button
- input
- card
- badge
- focus ring
