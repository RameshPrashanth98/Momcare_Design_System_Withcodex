import type { Meta, StoryObj } from "@storybook/react";

import { ClinicSessionScreen } from "./ClinicSessionScreen.js";

const meta = {
  title: "Screens/Clinic Session",
  component: ClinicSessionScreen,
  tags: ["autodocs"]
} satisfies Meta<typeof ClinicSessionScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
