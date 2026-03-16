import type { Meta, StoryObj } from "@storybook/react";

import { GridPage } from "./foundations-docs.js";

const meta = {
  title: "MomCare Design System/Styles/Grid",
  component: GridPage,
  parameters: {
    controls: {
      disable: true
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof GridPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Reference: Story = {};

