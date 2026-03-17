import type { Meta, StoryObj } from "@storybook/react";

import { WeightHealthTrackingScreen } from "./WeightHealthTrackingScreen.js";

const meta = {
  title: "Screens/Weight & Health Tracking",
  component: WeightHealthTrackingScreen,
  tags: ["autodocs"]
} satisfies Meta<typeof WeightHealthTrackingScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
