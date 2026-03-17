import type { Meta, StoryObj } from "@storybook/react";

import { HeartPulseIcon } from "../MotherProfile/icons.js";
import { BrandHeader } from "./BrandHeader.js";

const meta = {
  title: "Login/BrandHeader",
  component: BrandHeader,
  args: {
    logo: <HeartPulseIcon />,
    subtitle: "Clinic Management",
    title: "Maternal Health"
  },
  argTypes: {
    logo: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof BrandHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
