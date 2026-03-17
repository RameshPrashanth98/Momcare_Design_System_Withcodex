import type { Meta, StoryObj } from "@storybook/react";

import { OnboardingContent } from "./OnboardingContent.js";

const meta = {
  title: "Onboarding Welcome/OnboardingContent",
  component: OnboardingContent,
  args: {
    align: "center",
    heading: "Welcome to the",
    title: "Maternal Health Clinic System",
    description: "Manage clinic sessions, support mothers through each visit, and keep care teams aligned with one clear mobile workflow."
  },
  tags: ["autodocs"]
} satisfies Meta<typeof OnboardingContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
