import type { Meta, StoryObj } from "@storybook/react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { TextField } from "./TextField.js";

function StoryIcon({ symbol }: { symbol: string }) {
  return <span aria-hidden="true">{symbol}</span>;
}

const meta = {
  title: "Authentication/TextField",
  component: TextField,
  args: {
    disabled: false,
    error: false,
    label: "Staff ID",
    placeholder: "Enter your staff ID",
    required: false,
    supportingText: "Use your assigned employee number.",
    type: "text"
  },
  argTypes: {
    "aria-describedby": { control: "text" },
    "aria-label": { control: "text" },
    defaultValue: { control: "text" },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    errorText: { control: "text" },
    id: { control: "text" },
    invalid: { control: "boolean" },
    label: { control: "text" },
    leadingIcon: { control: false },
    name: { control: "text" },
    onBlur: { action: "blurred" },
    onChange: { action: "changed" },
    onFocus: { action: "focused" },
    placeholder: { control: "text" },
    readOnly: { control: "boolean" },
    required: { control: "boolean" },
    supportingText: { control: "text" },
    trailingIcon: { control: false },
    type: {
      control: "inline-radio",
      options: ["text", "password", "email"]
    },
    value: { control: "text" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLeadingIcon: Story = {
  args: {
    leadingIcon: <StoryIcon symbol="@" />
  }
};

export const WithTrailingIcon: Story = {
  args: {
    trailingIcon: <StoryIcon symbol="?" />
  }
};

export const ErrorState: Story = {
  args: {
    error: true,
    errorText: "Staff ID is required.",
    supportingText: undefined
  }
};

export const DisabledState: Story = {
  args: {
    defaultValue: "MOC-2471",
    disabled: true
  }
};

export const ClinicAttendanceExample: Story = {
  args: {
    label: "Expected Number of Mothers",
    placeholder: "Enter expected attendance",
    supportingText: "Estimate attendance from the confirmed appointment list."
  }
};

export const LoginFieldPair: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: spacingPrimitives.space4.value, width: `calc(${spacingPrimitives.space32.value} + ${spacingPrimitives.space24.value})` }}>
      <TextField {...args} label="Staff ID" leadingIcon={<StoryIcon symbol="@" />} placeholder="MOH-10248" />
      <TextField {...args} label="Password" leadingIcon={<StoryIcon symbol="*" />} placeholder="Enter your password" trailingIcon={<StoryIcon symbol="o" />} type="password" />
    </div>
  )
};
