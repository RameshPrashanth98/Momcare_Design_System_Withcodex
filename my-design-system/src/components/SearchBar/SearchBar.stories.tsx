import type { Meta, StoryObj } from "@storybook/react";

import { SearchBar } from "./SearchBar.js";

const meta = {
  title: "Core/SearchBar",
  component: SearchBar,
  args: {
    placeholder: "Search by name, NIC, or clinic number",
    value: ""
  },
  argTypes: {
    disabled: { control: "boolean" },
    leadingIcon: { control: false },
    onChange: { action: "changed" },
    onSearch: { action: "searched" },
    placeholder: { control: "text" },
    trailingIcon: { control: false },
    value: { control: "text" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
