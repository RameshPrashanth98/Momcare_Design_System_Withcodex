import type { CSSProperties } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button/Button.js";
import { PageIndicator } from "../PageIndicator/PageIndicator.js";
import { componentAliases } from "../../tokens/component-aliases.js";
import { borderWidthPrimitives, colorPrimitives, fontSizePrimitives, lineHeightPrimitives, radiusPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { typographyTokens } from "../../tokens/typography.js";
import { OnboardingLayout } from "./OnboardingLayout.js";

function MedicalIcon() {
  const size = spacingPrimitives.space16.value;
  const style: CSSProperties = {
    alignItems: "center",
    backgroundColor: semanticTokens.surface.muted.value,
    borderColor: semanticTokens.border.default.value,
    borderRadius: radiusPrimitives.radiusLg.value,
    borderStyle: "solid",
    borderWidth: borderWidthPrimitives.border1.value,
    color: semanticTokens.interactive.primaryHover.value,
    display: "inline-flex",
    fontFamily: typographyTokens.displaySection.fontFamily,
    fontSize: fontSizePrimitives.text3xl.value,
    fontWeight: typographyTokens.displaySection.fontWeight,
    height: size,
    justifyContent: "center",
    lineHeight: String(lineHeightPrimitives.tight.value),
    width: size
  };

  return <span aria-hidden="true" style={style}>?</span>;
}

function IllustrationPlaceholder() {
  return (
    <div
      aria-hidden="true"
      style={{
        alignItems: "center",
        color: semanticTokens.text.secondary.value,
        display: "grid",
        gap: spacingPrimitives.space4.value,
        justifyItems: "center",
        width: "100%"
      }}
    >
      <div
        style={{
          backgroundColor: colorPrimitives.roseMist.value,
          borderColor: semanticTokens.border.default.value,
          borderRadius: componentAliases.card.radius.value,
          borderStyle: "solid",
          borderWidth: borderWidthPrimitives.border1.value,
          display: "grid",
          gap: spacingPrimitives.space3.value,
          padding: spacingPrimitives.space6.value,
          width: "100%"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ backgroundColor: semanticTokens.border.default.value, borderRadius: radiusPrimitives.radiusFull.value, height: spacingPrimitives.space10.value, width: spacingPrimitives.space10.value }} />
          <div style={{ display: "grid", gap: spacingPrimitives.space2.value, width: "70%" }}>
            <div style={{ backgroundColor: semanticTokens.border.default.value, borderRadius: radiusPrimitives.radiusFull.value, height: spacingPrimitives.space2.value, width: "80%" }} />
            <div style={{ backgroundColor: semanticTokens.border.default.value, borderRadius: radiusPrimitives.radiusFull.value, height: spacingPrimitives.space2.value, width: "60%" }} />
          </div>
        </div>
        <div style={{ backgroundColor: semanticTokens.surface.base.value, borderRadius: componentAliases.card.radius.value, height: spacingPrimitives.space32.value }} />
      </div>
      <div style={{ fontFamily: typographyTokens.caption.fontFamily, fontSize: typographyTokens.caption.fontSize, lineHeight: String(typographyTokens.caption.lineHeight) }}>
        Illustration slot
      </div>
    </div>
  );
}

const meta = {
  title: "Onboarding/OnboardingLayout",
  component: OnboardingLayout,
  tags: ["autodocs"]
} satisfies Meta<typeof OnboardingLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

function baseLayoutArgs() {
  return {
    logo: <MedicalIcon />,
    title: "Welcome to Mom Care",
    description: "Helping healthcare teams manage maternal clinics, patient records, and antenatal care with clarity.",
    illustration: <IllustrationPlaceholder />,
    primaryAction: <Button variant="filled">Get Started</Button>,
    pageIndicator: <PageIndicator count={4} currentIndex={0} />
  };
}

export const FullOnboardingScreen: Story = {
  render: () => <OnboardingLayout {...baseLayoutArgs()} />
};

export const AlternativeContentLengths: Story = {
  render: () => (
    <OnboardingLayout
      {...baseLayoutArgs()}
      description="Track clinic operations, coordinate antenatal visits, and guide care teams through everyday maternal health workflows with a calmer, more consistent interface."
      title="Built for maternal health teams"
    />
  )
};

export const BottomNavigationWithBackNext: Story = {
  render: () => (
    <OnboardingLayout
      {...baseLayoutArgs()}
      pageIndicator={<PageIndicator count={4} currentIndex={1} />}
      primaryAction={undefined}
      secondaryNavigation={
        <div style={{ display: "flex", justifyContent: "space-between", gap: spacingPrimitives.space4.value }}>
          <Button variant="text">Back</Button>
          <Button trailingIcon={<span aria-hidden="true">?</span>} variant="text">Next</Button>
        </div>
      }
    />
  )
};

export const SkipNextLayout: Story = {
  render: () => (
    <OnboardingLayout
      {...baseLayoutArgs()}
      pageIndicator={<PageIndicator count={4} currentIndex={2} />}
      primaryAction={undefined}
      secondaryNavigation={
        <div style={{ display: "flex", justifyContent: "space-between", gap: spacingPrimitives.space4.value }}>
          <Button variant="text">Skip</Button>
          <Button trailingIcon={<span aria-hidden="true">?</span>} variant="text">Next</Button>
        </div>
      }
    />
  )
};
