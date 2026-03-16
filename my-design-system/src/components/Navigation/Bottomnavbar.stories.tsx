import type { Meta, StoryObj } from "@storybook/react";

import { fontFamilyPrimitives, fontSizePrimitives, lineHeightPrimitives, spacingPrimitives } from "../../tokens/primitives.js";
import { Bottomnavbar, type BottomnavbarDestination } from "./Bottomnavbar.js";

function StoryIcon({ symbol }: { symbol: string }) {
  return (
    <span
      aria-hidden="true"
      style={{
        alignItems: "center",
        display: "inline-flex",
        fontFamily: fontFamilyPrimitives.body.value,
        fontSize: fontSizePrimitives.textLg.value,
        justifyContent: "center",
        lineHeight: String(lineHeightPrimitives.normal.value)
      }}
    >
      {symbol}
    </span>
  );
}

const destinations: BottomnavbarDestination[] = [
  { value: "home", label: "Home", icon: <StoryIcon symbol="H" />, activeIcon: <StoryIcon symbol="H*" /> },
  { value: "journey", label: "Journey", icon: <StoryIcon symbol="J" />, activeIcon: <StoryIcon symbol="J*" />, badge: "New" },
  { value: "care", label: "Care", icon: <StoryIcon symbol="C" />, activeIcon: <StoryIcon symbol="C*" /> },
  { value: "community", label: "Community", icon: <StoryIcon symbol="U" />, activeIcon: <StoryIcon symbol="U*" /> }
];

const meta = {
  title: "Navigation/Bottomnavbar",
  component: Bottomnavbar,
  args: {
    ariaLabel: "Mom Care primary navigation",
    destinations,
    labelBehavior: "always",
    size: "comfortable",
    value: "home",
    variant: "brand"
  },
  argTypes: {
    ariaLabel: { control: "text" },
    destinations: { control: "object" },
    labelBehavior: {
      control: "inline-radio",
      options: ["always", "selected", "none"]
    },
    onValueChange: { action: "value changed" },
    size: {
      control: "inline-radio",
      options: ["compact", "comfortable", "spacious"]
    },
    value: { control: "text" },
    variant: {
      control: "inline-radio",
      options: ["brand", "subtle"]
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Bottomnavbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Brand: Story = {};

export const Subtle: Story = {
  args: {
    variant: "subtle",
    value: "journey"
  }
};

export const SelectedLabelsOnly: Story = {
  args: {
    labelBehavior: "selected",
    value: "care"
  }
};

export const InteractionStates: Story = {
  args: {
    destinations: [
      { value: "default", label: "Default", icon: <StoryIcon symbol="D" /> },
      { value: "hover", label: "Hover", icon: <StoryIcon symbol="H" />, state: "hover" },
      { value: "active", label: "Active", icon: <StoryIcon symbol="A" />, activeIcon: <StoryIcon symbol="A*" />, state: "active" },
      { value: "focus", label: "Focus", icon: <StoryIcon symbol="F" />, state: "focus" },
      { value: "disabled", label: "Disabled", icon: <StoryIcon symbol="X" />, state: "disabled", disabled: true }
    ],
    value: "active"
  }
};

export const AllSizes: Story = {
  render: (args) => (
    <div
      style={{
        display: "grid",
        gap: spacingPrimitives.space6.value
      }}
    >
      <Bottomnavbar {...args} ariaLabel="Mom Care compact bottom navigation" size="compact" />
      <Bottomnavbar {...args} ariaLabel="Mom Care comfortable bottom navigation" size="comfortable" />
      <Bottomnavbar {...args} ariaLabel="Mom Care spacious bottom navigation" size="spacious" />
    </div>
  )
};

