import type { Meta, StoryObj } from "@storybook/react";

import { NavigationBar } from "./NavigationBar.js";

function StoryIcon({ symbol }: { symbol: string }) {
  return <span aria-hidden="true">{symbol}</span>;
}

const meta = {
  title: "Mothers/NavigationBar",
  component: NavigationBar,
  args: {
    activeItem: "mothers",
    ariaLabel: "Mothers navigation",
    items: [
      { label: "Home", value: "home", icon: <StoryIcon symbol="H" /> },
      { label: "Mothers", value: "mothers", icon: <StoryIcon symbol="M" /> },
      { label: "Visits", value: "visits", icon: <StoryIcon symbol="V" /> },
      { label: "Reports", value: "reports", icon: <StoryIcon symbol="R" /> },
      { label: "More", value: "more", icon: <StoryIcon symbol="•" /> }
    ]
  },
  argTypes: {
    activeItem: { control: "text" },
    items: { control: false },
    onChange: { action: "changed" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof NavigationBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
