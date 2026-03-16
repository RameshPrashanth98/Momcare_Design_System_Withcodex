import type { Meta, StoryObj } from "@storybook/react";

import { IconographyPage } from "./foundations-docs.js";

const meta = {
  title: "MomCare Design System/Styles/Iconography",
  component: IconographyPage,
  parameters: {
    controls: {
      disable: true
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof IconographyPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Reference: Story = {};

