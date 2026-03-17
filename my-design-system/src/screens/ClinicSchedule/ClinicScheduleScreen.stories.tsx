import type { Meta, StoryObj } from "@storybook/react";

import { ClinicScheduleScreen } from "./ClinicScheduleScreen.js";

const meta = {
  title: "Screens/Clinic Schedule",
  component: ClinicScheduleScreen,
  tags: ["autodocs"]
} satisfies Meta<typeof ClinicScheduleScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
