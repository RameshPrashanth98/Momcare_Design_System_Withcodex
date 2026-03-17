import type { Meta, StoryObj } from "@storybook/react";

import { ShieldIcon } from "../MotherProfile/icons.js";
import { PasswordField } from "./PasswordField.js";

const meta = {
  title: "Login/PasswordField",
  component: PasswordField,
  args: {
    isVisible: false,
    label: "Password",
    leadingIcon: <ShieldIcon />,
    placeholder: "Enter your password",
    value: ""
  },
  argTypes: {
    leadingIcon: { control: false },
    onChange: { action: "changed" },
    onToggleVisibility: { action: "toggleVisibility" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof PasswordField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Visible: Story = {
  args: {
    isVisible: true
  }
};
