import type { Meta, StoryObj } from "@storybook/react";

import { ConditionChipGroup } from "./ConditionChipGroup.js";

const meta = {
  title: "Medical History/ConditionChipGroup",
  component: ConditionChipGroup,
  args: {
    items: ["Gestational diabetes", "Iron deficiency", "Previous C-section", "Rh negative"]
  },
  tags: ["autodocs"]
} satisfies Meta<typeof ConditionChipGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
