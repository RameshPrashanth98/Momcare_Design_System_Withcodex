import type { Meta, StoryObj } from "@storybook/react";

import { RadiusPage } from "./foundations-docs.js";

const meta = {
  title: "MomCare Design System/Styles/Radius",
  component: RadiusPage,
  parameters: {
    controls: {
      disable: true
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof RadiusPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Reference: Story = {};

