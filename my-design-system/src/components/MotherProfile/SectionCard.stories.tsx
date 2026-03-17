import type { Meta, StoryObj } from "@storybook/react";

import { InfoRow } from "./InfoRow.js";
import { MetricRow } from "./MetricRow.js";
import { SectionCard } from "./SectionCard.js";
import { ChevronRightIcon } from "./icons.js";

const meta = {
  title: "Mother Profile/SectionCard",
  component: SectionCard,
  args: {
    children: undefined,
    description: "Snapshot of key pregnancy details and assigned care.",
    title: "Pregnancy Overview"
  },
  argTypes: {
    children: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof SectionCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: (args) => (
    <SectionCard {...args}>
      <InfoRow label="Expected delivery date" onClick={() => undefined} trailingIcon={<ChevronRightIcon />} value="24 Jun 2026" />
      <InfoRow label="Clinic" onClick={() => undefined} trailingIcon={<ChevronRightIcon />} value="Matara MOH Clinic" />
      <InfoRow label="Blood group" onClick={() => undefined} trailingIcon={<ChevronRightIcon />} value="A positive" />
    </SectionCard>
  )
};

export const Metrics: Story = {
  args: {
    children: undefined,
    description: "Current monitoring metrics to support timely follow-up.",
    title: "Health Tracking"
  },
  render: (args) => (
    <SectionCard {...args}>
      <MetricRow indicatorValue={0.68} indicatorVariant="stable" label="Weight gain" value="7.4 kg of 10 kg target" />
      <MetricRow indicatorValue={0.52} indicatorVariant="watch" label="Blood pressure" value="128 / 82 mmHg" />
      <MetricRow indicatorValue={0.36} indicatorVariant="critical" label="Glucose control" value="Fasting average 108 mg/dL" />
    </SectionCard>
  )
};
