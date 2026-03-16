import type { Meta, StoryObj } from "@storybook/react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { PasswordField } from "./PasswordField.js";

const meta = {
  title: "Authentication/PasswordField",
  component: PasswordField,
  args: {
    defaultVisible: false,
    disabled: false,
    errorText: undefined,
    label: "Password",
    placeholder: "Enter your password",
    supportingText: "Keep your password private."
  },
  argTypes: {
    "aria-describedby": { control: "text" },
    "aria-label": { control: "text" },
    defaultValue: { control: "text" },
    defaultVisible: { control: "boolean" },
    disabled: { control: "boolean" },
    errorText: { control: "text" },
    id: { control: "text" },
    invalid: { control: "boolean" },
    label: { control: "text" },
    name: { control: "text" },
    onBlur: { action: "blurred" },
    onChange: { action: "changed" },
    onFocus: { action: "focused" },
    onVisibilityChange: { action: "visibility changed" },
    placeholder: { control: "text" },
    readOnly: { control: "boolean" },
    required: { control: "boolean" },
    supportingText: { control: "text" },
    value: { control: "text" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof PasswordField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const VisiblePassword: Story = {
  args: {
    defaultValue: "nurse1234",
    defaultVisible: true
  }
};

export const HiddenPassword: Story = {
  args: {
    defaultValue: "nurse1234"
  }
};

export const ErrorState: Story = {
  args: {
    errorText: "Password must be at least 8 characters.",
    invalid: true,
    supportingText: undefined
  }
};

export const DisabledState: Story = {
  args: {
    defaultValue: "locked-value",
    disabled: true
  }
};

export const LoginFormExample: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: spacingPrimitives.space4.value, width: `calc(${spacingPrimitives.space32.value} + ${spacingPrimitives.space24.value})` }}>
      <PasswordField {...args} label="Password" placeholder="Enter your password" />
    </div>
  )
};
