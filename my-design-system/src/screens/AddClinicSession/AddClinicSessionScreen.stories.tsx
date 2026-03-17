import type { Meta, StoryObj } from "@storybook/react";

import { AddClinicSessionScreen } from "./AddClinicSessionScreen.js";

const meta = {
  title: "Screens/Add Clinic Session",
  component: AddClinicSessionScreen,
  tags: ["autodocs"]
} satisfies Meta<typeof AddClinicSessionScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
