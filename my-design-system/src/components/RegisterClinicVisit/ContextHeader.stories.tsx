import type { Meta, StoryObj } from "@storybook/react";

import { ContextHeader } from "./ContextHeader.js";

const meta = {
  title: "Register Clinic Visit/ContextHeader",
  component: ContextHeader,
  args: {
    subtitle: "17 Mar 2026",
    title: "Nethmi Perera"
  },
  argTypes: {
    onBack: { action: "back" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof ContextHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
