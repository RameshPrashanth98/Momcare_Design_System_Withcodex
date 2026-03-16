import type { Meta, StoryObj } from "@storybook/react";

import { ColorPage } from "./foundations-docs.js";

const meta = {
  title: "MomCare Design System/Styles/Color",
  component: ColorPage,
  parameters: {
    controls: {
      disable: true
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof ColorPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Reference: Story = {};

