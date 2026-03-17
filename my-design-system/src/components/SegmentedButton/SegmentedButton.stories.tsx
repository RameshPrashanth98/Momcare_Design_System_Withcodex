import type { Meta, StoryObj } from "@storybook/react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { SegmentedButton } from "./SegmentedButton.js";

const languageOptions = [
  { label: "EN", value: "en" },
  { label: "??", value: "si" }
];

const notificationOptions = [
  { label: "All", value: "all" },
  { label: "High-Risk Alerts", value: "alerts" },
  { label: "Appointment Reminders", value: "appointments" }
];

const meta = {
  title: "Notifications/SegmentedButton",
  component: SegmentedButton,
  args: {
    "aria-label": "Notification filters",
    disabled: false,
    options: notificationOptions,
    defaultValue: "all"
  },
  argTypes: {
    "aria-label": { control: "text" },
    defaultValue: { control: "text" },
    disabled: { control: "boolean" },
    onChange: { action: "changed" },
    options: { control: false },
    value: { control: "text" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof SegmentedButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LanguageSwitcher: Story = {
  args: {
    "aria-label": "Choose language",
    defaultValue: "en",
    options: languageOptions
  }
};

export const NotificationFilters: Story = {
  args: {
    options: notificationOptions,
    value: "alerts"
  }
};

export const TwoOptionControls: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: spacingPrimitives.space4.value, maxWidth: `calc(${spacingPrimitives.space24.value} + ${spacingPrimitives.space24.value})` }}>
      <SegmentedButton {...args} aria-label="Choose language" options={languageOptions} value="si" />
      <SegmentedButton {...args} aria-label="Quick filter" options={[{ label: "All", value: "all" }, { label: "Unread", value: "unread" }]} value="unread" />
    </div>
  )
};
