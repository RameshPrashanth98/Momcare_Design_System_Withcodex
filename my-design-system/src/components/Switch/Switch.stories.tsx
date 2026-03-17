import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "./Switch.js";

const meta = {
  title: "Core/Switch",
  component: Switch,
  args: {
    checked: true,
    disabled: false
  },
  argTypes: {
    checked: { control: "boolean" },
    defaultChecked: { control: "boolean" },
    disabled: { control: "boolean" },
    onChange: { action: "changed" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Off: Story = {
  args: {
    checked: false
  }
};
