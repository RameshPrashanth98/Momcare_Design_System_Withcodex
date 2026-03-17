import type { Meta, StoryObj } from "@storybook/react";

import { SearchBar } from "./SearchBar.js";

const meta = {
  title: "Mothers/SearchBar",
  component: SearchBar,
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
} satisfies Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithValue: Story = { args: { value: "Ayesha" } };
