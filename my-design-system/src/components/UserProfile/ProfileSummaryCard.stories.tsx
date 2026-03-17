import type { Meta, StoryObj } from "@storybook/react";

import { ProfileSummaryCard } from "./ProfileSummaryCard.js";

const meta = {
  title: "User Profile/ProfileSummaryCard",
  component: ProfileSummaryCard,
  args: {
    area: "PHM Area 12",
    clinic: "Matara Central Clinic",
    name: "Nimali Perera",
    role: "Public Health Midwife"
  },
  argTypes: {
    onAvatarClick: { action: "avatarClick" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof ProfileSummaryCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
