import type { Meta, StoryObj } from "@storybook/react";

import { SegmentedControl } from "./SegmentedControl.js";

const meta = {
  title: "User Profile/SegmentedControl",
  component: SegmentedControl,
  args: {
    ariaLabel: "Language preference",
    options: [
      { label: "EN", value: "en" },
      { label: "SI", value: "si" }
    ],
    value: "en"
  },
  argTypes: {
    onChange: { action: "changed" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof SegmentedControl>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

