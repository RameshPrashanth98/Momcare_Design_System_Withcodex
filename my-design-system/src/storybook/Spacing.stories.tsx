import type { Meta, StoryObj } from "@storybook/react";

import { SpacingPage } from "./foundations-docs.js";

const meta = {
  title: "MomCare Design System/Styles/Spacing",
  component: SpacingPage,
  parameters: {
    controls: {
      disable: true
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof SpacingPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Reference: Story = {};

