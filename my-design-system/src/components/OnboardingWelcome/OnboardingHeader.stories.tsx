import type { Meta, StoryObj } from "@storybook/react";

import { OnboardingHeader } from "./OnboardingHeader.js";

const meta = {
  title: "Onboarding Welcome/OnboardingHeader",
  component: OnboardingHeader,
  args: {
    align: "center",
    title: "Maternal Health",
    subtitle: "Clinic Management"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof OnboardingHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
