import type { Meta, StoryObj } from "@storybook/react";

import { FilterSelect } from "./FilterSelect.js";

const meta = {
  title: "Mothers/FilterSelect",
  component: FilterSelect,
  args: {
    disabled: false,
    label: "Clinic",
    value: "All"
  },
  argTypes: {
    disabled: { control: "boolean" },
    label: { control: "text" },
    onClick: { action: "clicked" },
    value: { control: "text" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof FilterSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const SpecificValue: Story = { args: { label: "Risk Level", value: "High Risk" } };
