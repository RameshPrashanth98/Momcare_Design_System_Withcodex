import type { Meta, StoryObj } from "@storybook/react";

import { BottomActionBar } from "./BottomActionBar.js";
import { ClinicSummaryCard } from "./ClinicSummaryCard.js";
import { MotherSessionCard } from "./MotherSessionCard.js";
import { Switch } from "../Switch/Switch.js";
import { MetadataRow } from "../MetadataRow/MetadataRow.js";
import { CalendarIcon } from "../MotherProfile/icons.js";
import { spacingPrimitives } from "../../tokens/primitives.js";

const meta = {
  title: "Clinic Session/ClinicSessionPrimitives",
  tags: ["autodocs"]
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <div style={{ display: "grid", gap: spacingPrimitives.space4.value }}>
      <Switch checked />
      <MetadataRow label="17 Mar 2026" leadingIcon={<CalendarIcon />} trailingContent="9:00 AM - 1:00 PM" />
      <ClinicSummaryCard assignedMidwife="Nimali Perera" date="17 Mar 2026" isActive location="Akuressa MOH Office" status="active" time="9:00 AM - 1:00 PM" title="Akuressa Rural Clinic" />
      <MotherSessionCard assignedStaff="Hasini Jayawardena" attendanceMeta="Waiting queue 3" date="17 Mar 2026" hasToggle identifier="PHM-2094 · Gravida 1" name="Sashini Fernando" status="waiting" thirdActionLabel="Check In" timeRange="10:00 AM - 10:30 AM" toggled={false} />
      <BottomActionBar />
    </div>
  )
};
