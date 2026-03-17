import type { Meta, StoryObj } from "@storybook/react";

import { MedicalHistoryScreen } from "./MedicalHistoryScreen.js";

const meta = {
  title: "Screens/Medical History",
  component: MedicalHistoryScreen,
  tags: ["autodocs"]
} satisfies Meta<typeof MedicalHistoryScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
