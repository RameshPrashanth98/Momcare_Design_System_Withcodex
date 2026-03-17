import type { Meta, StoryObj } from "@storybook/react";

import { FilterChipGroup } from "./FilterChipGroup.js";

const meta = {
  title: "Lab Reports/FilterChipGroup",
  component: FilterChipGroup,
  args: {
    ariaLabel: "Lab report categories",
    options: [
      { label: "All Reports", value: "all" },
      { label: "Blood Tests", value: "blood" },
      { label: "Urine Tests", value: "urine" },
      { label: "Ultrasound", value: "ultrasound" }
    ],
    selectedValue: "all"
  },
  argTypes: {
    onChange: { action: "changed" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof FilterChipGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
