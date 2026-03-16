import type { Meta, StoryObj } from "@storybook/react";

import { TypographyPage } from "./foundations-docs.js";

const meta = {
  title: "Design System/Styles/Typography",
  component: TypographyPage,
  parameters: {
    controls: {
      disable: true
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof TypographyPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Reference: Story = {};
