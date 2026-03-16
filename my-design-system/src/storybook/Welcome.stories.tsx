import type { Meta, StoryObj } from "@storybook/react";

import { OverviewPage } from "./foundations-docs.js";

const meta = {
  title: "MomCare Design System/Foundations/Overview",
  component: OverviewPage,
  parameters: {
    controls: {
      disable: true
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof OverviewPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {};


