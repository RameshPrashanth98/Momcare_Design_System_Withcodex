import type { Meta, StoryObj } from "@storybook/react";

import { RegisterClinicVisitScreen } from "./RegisterClinicVisitScreen.js";

const meta = {
  title: "Screens/Register Clinic Visit",
  component: RegisterClinicVisitScreen,
  tags: ["autodocs"]
} satisfies Meta<typeof RegisterClinicVisitScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
