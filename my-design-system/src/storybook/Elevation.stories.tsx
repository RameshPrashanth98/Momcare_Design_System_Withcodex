import type { Meta, StoryObj } from "@storybook/react";

import { ElevationPage } from "./foundations-docs.js";

const meta = {
  title: "MomCare Design System/Styles/Elevation",
  component: ElevationPage,
  parameters: {
    controls: {
      disable: true
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof ElevationPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Reference: Story = {};

