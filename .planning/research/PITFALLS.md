# Research: Pitfalls

## Pitfall 1: Copying source CSS literally into components

- Warning signs: components contain repeated hex values, spacing literals, or custom CSS fragments derived directly from the HTML.
- Prevention: define canonical token objects first and route all component styles through them.
- Phase: 1 and 2

## Pitfall 2: Treating accessibility as post-processing

- Warning signs: focus states appear late, token contrast is checked after components exist, or Storybook lacks accessibility review.
- Prevention: include semantic and contrast checks in the token and component definition process.
- Phase: 1 through 6

## Pitfall 3: Building composites before primitives

- Warning signs: multiple components reimplement the same spacing, typography, or surface logic.
- Prevention: establish typography, surface, layout, and interaction primitives first.
- Phase: 3

## Pitfall 4: Incomplete story coverage

- Warning signs: only default variants exist, disabled/loading/focus states are absent, and consumers cannot infer usage boundaries.
- Prevention: require story matrices and usage notes as part of component completion.
- Phase: 4 and 5

## Pitfall 5: Overcommitting to unverified brand details

- Warning signs: the system hard-codes iconography or illustrative rules that the source HTML already marks as provisional.
- Prevention: mark flagged areas clearly in documentation and defer final decisions until the official brand guide is available.
- Phase: 1 and 5
