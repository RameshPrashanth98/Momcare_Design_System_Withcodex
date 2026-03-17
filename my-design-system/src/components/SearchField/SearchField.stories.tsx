import type { Meta, StoryObj } from "@storybook/react";

import { SearchField } from "./SearchField.js";

const meta = {
  title: "Mothers/SearchField",
  component: SearchField,
  args: {
    "aria-label": "Search mothers",
    disabled: false,
    placeholder: "Search by name or NIC"
  },
  argTypes: {
    "aria-label": { control: "text" },
    disabled: { control: "boolean" },
    onChange: { action: "changed" },
    placeholder: { control: "text" },
    value: { control: "text" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof SearchField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithValue: Story = { args: { value: "Ayesha" } };
