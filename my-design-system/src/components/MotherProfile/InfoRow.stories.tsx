import type { Meta, StoryObj } from "@storybook/react";

import { InfoRow } from "./InfoRow.js";
import { ChevronRightIcon } from "./icons.js";

const meta = {
  title: "Mother Profile/InfoRow",
  component: InfoRow,
  args: {
    label: "Expected delivery date",
    value: "24 Jun 2026",
    trailingIcon: <ChevronRightIcon />
  },
  argTypes: {
    onClick: { action: "clicked" },
    trailingIcon: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof InfoRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  args: {
    onClick: () => undefined
  }
};

export const Static: Story = {
  args: {
    onClick: undefined,
    trailingIcon: undefined,
    value: "Matara MOH Clinic"
  }
};
