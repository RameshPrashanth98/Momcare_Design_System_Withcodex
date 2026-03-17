import type { Meta, StoryObj } from "@storybook/react";

import { PregnancyTimelineScreen } from "./PregnancyTimelineScreen.js";

const meta = {
  title: "Screens/Pregnancy Timeline",
  component: PregnancyTimelineScreen,
  tags: ["autodocs"]
} satisfies Meta<typeof PregnancyTimelineScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
