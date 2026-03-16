import type { Meta, StoryObj } from "@storybook/react";

import { DesignTokensPage } from "./foundations-docs.js";

const meta = {
  title: "MomCare Design System/Foundations/Design Tokens",
  component: DesignTokensPage,
  parameters: {
    controls: {
      disable: true
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof DesignTokensPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Reference: Story = {};

