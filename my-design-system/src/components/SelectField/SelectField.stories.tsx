import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { SelectField } from "./SelectField.js";

const options = [
  { label: "Akuressa Rural Clinic", value: "akuressa" },
  { label: "Kamburupitiya Family Clinic", value: "kamburupitiya" },
  { label: "Weligama Maternal Care Unit", value: "weligama" }
];

const meta = {
  title: "Clinic Session/SelectField",
  component: SelectField,
  args: {
    label: "Clinic Name",
    options,
    placeholder: "Select clinic",
    supportingText: "Select the assigned clinic location.",
    value: "akuressa"
  },
  argTypes: {
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    label: { control: "text" },
    onChange: { action: "changed" },
    options: { control: false },
    placeholder: { control: "text" },
    supportingText: { control: "text" },
    value: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof SelectField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);

    return <SelectField {...args} onChange={setValue} value={value} />;
  }
};

export const PlaceholderOnly: Story = {
  render: (args) => {
    const [value, setValue] = useState("");

    return <SelectField {...args} onChange={setValue} value={value} />;
  }
};
