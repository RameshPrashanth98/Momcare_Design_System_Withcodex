import type { Meta, StoryObj } from "@storybook/react";

import { FilterChip } from "./FilterChip.js";

const meta = {
  title: "Lab Reports/FilterChip",
  component: FilterChip,
  args: {
    label: "All Reports",
    selected: true
  },
  argTypes: {
    onClick: { action: "clicked" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof FilterChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Selected: Story = {};

export const Default: Story = {
  args: {
    selected: false
  }
};
