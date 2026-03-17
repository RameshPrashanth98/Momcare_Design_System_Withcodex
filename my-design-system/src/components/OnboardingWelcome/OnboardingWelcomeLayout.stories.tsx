import type { CSSProperties } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button/Button.js";
import { PageIndicator } from "../PageIndicator/PageIndicator.js";
import { HeartPulseIcon, ShieldIcon, UserCircleIcon } from "../MotherProfile/icons.js";
import { BrandMark } from "./BrandMark.js";
import { Icon } from "./Icon.js";
import { IllustrationPanel } from "./IllustrationPanel.js";
import { OnboardingContent } from "./OnboardingContent.js";
import { OnboardingHeader } from "./OnboardingHeader.js";
import { OnboardingWelcomeLayout } from "./OnboardingWelcomeLayout.js";
import { borderWidthPrimitives, radiusPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

function IllustrationExample() {
  const shellStyle: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space4.value,
    width: "100%"
  };

  const rowStyle: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space3.value,
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))"
  };

  const tileStyle: CSSProperties = {
    alignItems: "center",
    backgroundColor: semanticTokens.surface.base.value,
    borderColor: semanticTokens.border.default.value,
    borderRadius: radiusPrimitives.radiusLg.value,
    borderStyle: "solid",
    borderWidth: borderWidthPrimitives.border1.value,
    color: semanticTokens.interactive.primaryHover.value,
    display: "inline-flex",
    justifyContent: "center",
    minHeight: spacingPrimitives.space16.value,
    width: "100%"
  };

  return (
    <div style={shellStyle}>
      <div style={rowStyle}>
        <div style={tileStyle}><Icon><UserCircleIcon /></Icon></div>
        <div style={tileStyle}><Icon><HeartPulseIcon /></Icon></div>
        <div style={tileStyle}><Icon><ShieldIcon /></Icon></div>
      </div>
    </div>
  );
}

const meta = {
  title: "Onboarding Welcome/OnboardingWelcomeLayout",
  component: OnboardingWelcomeLayout,
  args: {
    brand: <BrandMark ariaLabel="Mom Care brand mark" icon={<Icon><HeartPulseIcon /></Icon>} />,
    header: <OnboardingHeader subtitle="Clinic Management" title="Maternal Health" />,
    illustration: <IllustrationPanel alt="Maternal health dashboard illustration" aspectRatio="4 / 3" image={<IllustrationExample />} />,
    content: <OnboardingContent description="Manage clinic sessions, support mothers through each visit, and keep care teams aligned with one clear mobile workflow." heading="Welcome to the" title="Maternal Health Clinic System" />,
    action: <Button fullWidth variant="filled">Get Started</Button>,
    progress: <PageIndicator aria-label="Onboarding progress" current={0} total={4} />
  },
  tags: ["autodocs"]
} satisfies Meta<typeof OnboardingWelcomeLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
