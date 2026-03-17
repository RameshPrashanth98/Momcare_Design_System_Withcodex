import type { Meta, StoryObj } from "@storybook/react";

import { ShieldIcon } from "../MotherProfile/icons.js";
import { FooterInfo } from "./FooterInfo.js";

const meta = {
  title: "Login/FooterInfo",
  component: FooterInfo,
  args: {
    logo: <ShieldIcon />,
    organization: "Ministry of Health, Sri Lanka",
    version: "Version 1.0.0"
  },
  argTypes: {
    logo: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof FooterInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
