import type { Meta, StoryObj } from "@storybook/react";

import { BorderPage } from "./foundations-docs.js";

const meta = {
  title: "MomCare Design System/Styles/Border",
  component: BorderPage,
  parameters: {
    controls: {
      disable: true
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof BorderPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Reference: Story = {};

