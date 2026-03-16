import type { Meta, StoryObj } from "@storybook/react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { Checkbox } from "./Checkbox.js";

const meta = {
  title: "Authentication/Checkbox",
  component: Checkbox,
  args: {
    defaultChecked: false,
    disabled: false,
    indeterminate: false,
    label: "Remember me",
    required: false
  },
  argTypes: {
    "aria-describedby": { control: "text" },
    "aria-label": { control: "text" },
    checked: { control: "boolean" },
    defaultChecked: { control: "boolean" },
    disabled: { control: "boolean" },
    id: { control: "text" },
    indeterminate: { control: "boolean" },
    label: { control: "text" },
    name: { control: "text" },
    onChange: { action: "changed" },
    required: { control: "boolean" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true
  }
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const AuthExample: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: spacingPrimitives.space3.value }}>
      <Checkbox {...args} label="Remember me" />
      <Checkbox {...args} defaultChecked label="Keep me signed in on this device" />
    </div>
  )
};
