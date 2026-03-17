import type { Meta, StoryObj } from "@storybook/react";

import { TimeField } from "./TimeField.js";

const meta = {
  title: "Clinic Session/TimeField",
  component: TimeField,
  args: {
    label: "Clinic Start Time",
    placeholder: "Select time",
    supportingText: "Use the clinic roster time slot.",
    value: "9:00 AM"
  },
  argTypes: {
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    label: { control: "text" },
    leadingIcon: { control: false },
    onOpenTimePicker: { action: "openTimePicker" },
    placeholder: { control: "text" },
    supportingText: { control: "text" },
    trailingIcon: { control: false },
    value: { control: "text" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof TimeField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const EmptyState: Story = {
  args: {
    value: ""
  }
};
