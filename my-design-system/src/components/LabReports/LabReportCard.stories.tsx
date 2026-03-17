import type { Meta, StoryObj } from "@storybook/react";

import { RecordsIcon } from "../MotherProfile/icons.js";
import { LabReportCard } from "./LabReportCard.js";

const meta = {
  title: "Lab Reports/LabReportCard",
  component: LabReportCard,
  args: {
    date: "22 Mar 2026",
    leadingIcon: <RecordsIcon />,
    title: "Complete Blood Count",
    uploadedBy: "Nimali Perera"
  },
  argTypes: {
    leadingIcon: { control: false },
    onViewReport: { action: "viewed" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof LabReportCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
