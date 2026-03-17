import type { Meta, StoryObj } from "@storybook/react";

import { IconButton } from "../IconButton/IconButton.js";
import { SegmentedButton } from "../SegmentedButton/SegmentedButton.js";
import { TopAppBar } from "./TopAppBar.js";

function StoryIcon({ symbol }: { symbol: string }) {
  return <span aria-hidden="true">{symbol}</span>;
}

const meta = {
  title: "Notifications/TopAppBar",
  component: TopAppBar,
  args: {
    title: "Notifications"
  },
  argTypes: {
    actions: { control: false },
    navigationIcon: { control: false },
    title: { control: "text" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof TopAppBar>;

export default meta;

type Story = StoryObj<typeof meta>;

const languageSwitcher = (
  <SegmentedButton
    aria-label="Choose language"
    options={[{ label: "EN", value: "en" }, { label: "SI", value: "si" }]}
    value="en"
  />
);

export const NotificationsScreenExample: Story = {
  args: {
    navigationIcon: <IconButton aria-label="Go back" icon={<StoryIcon symbol="<" />} variant="standard" />,
    actions: [
      <IconButton aria-label="Filter notifications" icon={<StoryIcon symbol="=" />} variant="tonal" />,
      languageSwitcher,
      <IconButton aria-label="Open profile" icon={<StoryIcon symbol="P" />} variant="filled" />
    ]
  }
};

export const WithMultipleActions: Story = {
  args: {
    navigationIcon: <IconButton aria-label="Go back" icon={<StoryIcon symbol="<" />} variant="standard" />,
    actions: [
      <IconButton aria-label="Filter" icon={<StoryIcon symbol="=" />} variant="tonal" />,
      <IconButton aria-label="Open profile" icon={<StoryIcon symbol="P" />} variant="filled" />
    ]
  }
};

