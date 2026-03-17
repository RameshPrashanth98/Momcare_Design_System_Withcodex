import type { Meta, StoryObj } from "@storybook/react";

import { DateField } from "../DateField/DateField.js";
import { FormSection } from "./FormSection.js";

const meta = {
  title: "Clinic Session/FormSection",
  component: FormSection,
  args: {
    children: undefined,
    title: "Clinic Information"
  },
  argTypes: {
    children: { control: false },
    title: { control: "text" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof FormSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: undefined,
    title: "Clinic Information"
  },
  render: (args) => (
    <FormSection {...args}>
      <DateField label="Clinic Date" placeholder="DD / MM / YYYY" supportingText="Match the clinic roster date." value="17 Mar 2026" />
    </FormSection>
  )
};
