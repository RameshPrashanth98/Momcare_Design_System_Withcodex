import type { Meta, StoryObj } from "@storybook/react";

import { ExtendedFAB } from "./ExtendedFAB.js";

const meta = {
  title: "Clinic Schedule/ExtendedFAB",
  component: ExtendedFAB,
  args: {
    "aria-label": "Add clinic session",
    label: "Add Clinic Session"
  },
  argTypes: {
    onClick: { action: "clicked" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof ExtendedFAB>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
