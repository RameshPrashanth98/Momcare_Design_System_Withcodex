import type { Meta, StoryObj } from "@storybook/react";

import { BloodDropIcon, CalendarIcon, ClinicIcon } from "../MotherProfile/icons.js";
import { PregnancyTimelineCard } from "./PregnancyTimelineCard.js";

const meta = {
  title: "Pregnancy Timeline/PregnancyTimelineCard",
  component: PregnancyTimelineCard,
  args: {
    ariaLabel: "Pregnancy timeline",
    items: [
      { date: "22 Mar 2026", title: "Blood Test Uploaded", description: "Complete blood count reviewed at the clinic visit.", icon: <BloodDropIcon />, actionLabel: "View Report" },
      { date: "18 Mar 2026", title: "Urine Test Reviewed", description: "Urine full report updated in the record.", icon: <ClinicIcon />, actionLabel: "View Report" },
      { date: "12 Mar 2026", title: "Ultrasound Summary", description: "Growth scan summary filed by the consultant.", icon: <CalendarIcon /> }
    ]
  },
  argTypes: {
    items: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof PregnancyTimelineCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
