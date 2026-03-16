import React from "react";
import type { Preview } from "@storybook/react";

import "../src/storybook/tailwind.css";

import { spacingPrimitives } from "../src/tokens/primitives.js";
import { semanticTokens } from "../src/tokens/semantic.js";
import { typographyTokens } from "../src/tokens/typography.js";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          "MomCare Design System",
          [
            "Foundations",
            ["Overview", "Design Tokens"],
            "Styles",
            ["Color", "Typography", "Spacing", "Elevation", "Grid", "Iconography", "Border", "Radius"]
          ],
          "Navigation"
        ]
      }
    },
    layout: "fullscreen",
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    a11y: {
      test: "todo"
    },
    backgrounds: {
      default: "surface-subtle",
      values: [
        { name: "surface-subtle", value: semanticTokens.surface.subtle.value },
        { name: "surface-base", value: semanticTokens.surface.base.value },
        { name: "surface-muted", value: semanticTokens.surface.muted.value }
      ]
    }
  },
  decorators: [
    (Story) =>
      React.createElement(
        "div",
        {
          style: {
            backgroundColor: semanticTokens.surface.subtle.value,
            color: semanticTokens.text.primary.value,
            fontFamily: typographyTokens.bodyMd.fontFamily,
            minHeight: "100vh",
            padding: spacingPrimitives.space6.value
          }
        },
        React.createElement(Story)
      )
  ]
};

export default preview;


