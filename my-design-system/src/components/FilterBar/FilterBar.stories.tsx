import type { Meta, StoryObj } from "@storybook/react";

import { FilterBar } from "./FilterBar.js";

const meta = {
  title: "Mothers/FilterBar",
  component: FilterBar,
  args: {
    filters: [
      { label: "Clinic", value: "All" },
      { label: "Area", value: "Matara" },
      { label: "Trimester", value: "Second" },
      { label: "Risk Level", value: "High Risk" }
    ]
  },
  argTypes: {
    filters: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof FilterBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
