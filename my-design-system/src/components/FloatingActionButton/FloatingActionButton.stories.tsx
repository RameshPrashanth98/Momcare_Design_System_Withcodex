import type { Meta, StoryObj } from "@storybook/react";

import { FloatingActionButton } from "./FloatingActionButton.js";

const meta = {
  title: "Mothers/FloatingActionButton",
  component: FloatingActionButton,
  args: {
    "aria-label": "Add mother",
    label: "Add Mother"
  },
  argTypes: {
    "aria-label": { control: "text" },
    disabled: { control: "boolean" },
    icon: { control: false },
    label: { control: "text" },
    onClick: { action: "clicked" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof FloatingActionButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const IconOnly: Story = { args: { label: undefined } };
