import type { Meta, StoryObj } from "@storybook/react";

import { Divider } from "./Divider.js";

const meta = {
  title: "Core/Divider",
  component: Divider,
  args: {
    inset: false
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Inset: Story = {
  args: {
    inset: true
  }
};

