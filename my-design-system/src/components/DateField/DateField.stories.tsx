import type { Meta, StoryObj } from "@storybook/react";

import { DateField } from "./DateField.js";

const meta = {
  title: "Clinic Session/DateField",
  component: DateField,
  args: {
    label: "Clinic Date",
    placeholder: "DD / MM / YYYY",
    supportingText: "Choose the clinic session date.",
    value: "17 Mar 2026"
  },
  argTypes: {
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    label: { control: "text" },
    onChange: { action: "changed" },
    onOpenDatePicker: { action: "openDatePicker" },
    placeholder: { control: "text" },
    supportingText: { control: "text" },
    trailingIcon: { control: false },
    value: { control: "text" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof DateField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ErrorState: Story = {
  args: {
    error: true,
    supportingText: "Clinic date is required.",
    value: ""
  }
};
