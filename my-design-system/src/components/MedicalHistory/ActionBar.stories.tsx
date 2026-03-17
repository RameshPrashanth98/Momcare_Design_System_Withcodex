import type { Meta, StoryObj } from "@storybook/react";

import { ActionBar } from "./ActionBar.js";

const meta = {
  title: "Medical History/ActionBar",
  component: ActionBar,
  argTypes: {
    onAddComplication: { action: "addComplication" },
    onAddMedicalNote: { action: "addMedicalNote" },
    onUploadReport: { action: "uploadReport" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof ActionBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
