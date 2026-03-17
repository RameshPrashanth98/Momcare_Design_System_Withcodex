import type { Meta, StoryObj } from "@storybook/react";

import { BottomActionBar } from "./BottomActionBar.js";

const meta = {
  title: "Clinic Session/BottomActionBar",
  component: BottomActionBar,
  argTypes: {
    addDisabled: { control: "boolean" },
    endDisabled: { control: "boolean" },
    onAddWalkInMother: { action: "addWalkInMother" },
    onEndClinic: { action: "endClinic" },
    onStartClinic: { action: "startClinic" },
    startDisabled: { control: "boolean" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof BottomActionBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
