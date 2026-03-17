import type { Meta, StoryObj } from "@storybook/react";

import { CalendarIcon } from "../MotherProfile/icons.js";
import { spacingPrimitives } from "../../tokens/primitives.js";
import { ClinicSessionCard } from "./ClinicSessionCard.js";
import { DateSelector } from "./DateSelector.js";
import { ExtendedFAB } from "./ExtendedFAB.js";

const meta = {
  title: "Clinic Schedule/ClinicSchedulePrimitives",
  tags: ["autodocs"]
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <div style={{ display: "grid", gap: spacingPrimitives.space4.value }}>
      <DateSelector items={[{ value: "mon-17", dayLabel: "Mon", dateLabel: "17" }, { value: "tue-18", dayLabel: "Tue", dateLabel: "18" }, { value: "wed-19", dayLabel: "Wed", dateLabel: "19" }]} selectedValue="mon-17" />
      <ClinicSessionCard clinicType="Antenatal Clinic" date="17 Mar 2026" expectedMothers="24 mothers" location="Akuressa MOH Office" midwife="Nimali Perera" status="active" time="9:00 AM - 1:00 PM" title="Akuressa Rural Clinic" />
      <ExtendedFAB aria-label="Add clinic session" icon={<CalendarIcon />} label="Add Clinic Session" />
    </div>
  )
};
