import type { Meta, StoryObj } from "@storybook/react";

import { OnboardingWelcomeScreen } from "./OnboardingWelcomeScreen.js";

const meta = {
  title: "Screens/Onboarding Welcome",
  component: OnboardingWelcomeScreen,
  tags: ["autodocs"]
} satisfies Meta<typeof OnboardingWelcomeScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
