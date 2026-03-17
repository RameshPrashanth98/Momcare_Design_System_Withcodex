import type { Meta, StoryObj } from "@storybook/react";

import { LabReportsScreen } from "./LabReportsScreen.js";

const meta = {
  title: "Screens/Lab Reports",
  component: LabReportsScreen,
  tags: ["autodocs"]
} satisfies Meta<typeof LabReportsScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
