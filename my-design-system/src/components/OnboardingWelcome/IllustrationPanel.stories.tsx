import type { CSSProperties } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { borderWidthPrimitives, radiusPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { HeartPulseIcon, ShieldIcon, UserCircleIcon } from "../MotherProfile/icons.js";
import { Icon } from "./Icon.js";
import { IllustrationPanel } from "./IllustrationPanel.js";

function IllustrationExample() {
  const shellStyle: CSSProperties = {
    display: "grid",
    gap: spacingPrimitives.space4.value,
    justifyItems: "center",
    width: "100%"
  };

  const heroStyle: CSSProperties = {
    alignItems: "center",
    backgroundColor: semanticTokens.surface.subtle.value,
    borderColor: semanticTokens.border.default.value,
    borderRadius: radiusPrimitives.radiusLg.value,
    borderStyle: "solid",
    borderWidth: borderWidthPrimitives.border1.value,
    color: semanticTokens.interactive.primaryHover.value,
    display: "grid",
    gap: spacingPrimitives.space3.value,
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    padding: spacingPrimitives.space4.value,
    width: "100%"
  };

  const itemStyle: CSSProperties = {
    alignItems: "center",
    backgroundColor: semanticTokens.surface.base.value,
    borderColor: semanticTokens.border.subtle.value,
    borderRadius: radiusPrimitives.radiusLg.value,
    borderStyle: "solid",
    borderWidth: borderWidthPrimitives.border1.value,
    display: "inline-flex",
    justifyContent: "center",
    minHeight: spacingPrimitives.space16.value,
    width: "100%"
  };

  return (
    <div style={shellStyle}>
      <div style={heroStyle}>
        <div style={itemStyle}><Icon><UserCircleIcon /></Icon></div>
        <div style={itemStyle}><Icon><HeartPulseIcon /></Icon></div>
        <div style={itemStyle}><Icon><ShieldIcon /></Icon></div>
      </div>
    </div>
  );
}

const meta = {
  title: "Onboarding/IllustrationPanel",
  component: IllustrationPanel,
  args: {
    alt: "Maternal health dashboard illustration",
    aspectRatio: "4 / 3",
    image: <IllustrationExample />
  },
  tags: ["autodocs"]
} satisfies Meta<typeof IllustrationPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

