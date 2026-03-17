import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { DateSelector } from "./DateSelector.js";

const items = [
  { value: "mon-17", dayLabel: "Mon", dateLabel: "17" },
  { value: "tue-18", dayLabel: "Tue", dateLabel: "18" },
  { value: "wed-19", dayLabel: "Wed", dateLabel: "19" },
  { value: "thu-20", dayLabel: "Thu", dateLabel: "20" },
  { value: "fri-21", dayLabel: "Fri", dateLabel: "21" }
];

const meta = {
  title: "Clinic Schedule/DateSelector",
  component: DateSelector,
  args: {
    items,
    selectedValue: "mon-17"
  },
  argTypes: {
    items: { control: false },
    onChange: { action: "changed" },
    onOpenCalendar: { action: "openCalendar" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof DateSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState(args.selectedValue);
    return <DateSelector {...args} onChange={setSelectedValue} selectedValue={selectedValue} />;
  }
};
