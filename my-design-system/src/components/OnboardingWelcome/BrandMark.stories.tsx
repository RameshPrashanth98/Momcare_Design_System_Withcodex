import type { Meta, StoryObj } from "@storybook/react";

import { HeartPulseIcon } from "../MotherProfile/icons.js";
import { Icon } from "./Icon.js";
import { BrandMark } from "./BrandMark.js";

const meta = {
  title: "Onboarding/BrandMark",
  component: BrandMark,
  args: {
    ariaLabel: "Mom Care brand mark",
    icon: <Icon><HeartPulseIcon /></Icon>
  },
  tags: ["autodocs"]
} satisfies Meta<typeof BrandMark>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

