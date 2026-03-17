import type { Meta, StoryObj } from "@storybook/react";

import { DateSelectorItem } from "./DateSelectorItem.js";

const meta = {
  title: "Clinic Schedule/DateSelectorItem",
  component: DateSelectorItem,
  args: {
    dateLabel: "17",
    dayLabel: "Mon",
    selected: true
  },
  argTypes: {
    dateLabel: { control: "text" },
    dayLabel: { control: "text" },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
    selected: { control: "boolean" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof DateSelectorItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
