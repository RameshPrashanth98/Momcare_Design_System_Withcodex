import type { Meta, StoryObj } from "@storybook/react";

import { LanguageSwitcher } from "./LanguageSwitcher.js";

const options = [
  { label: "EN", value: "en" },
  { label: "SI", value: "si" }
];

const meta = {
  title: "Dashboard/LanguageSwitcher",
  component: LanguageSwitcher,
  args: {
    "aria-label": "Choose dashboard language",
    disabled: false,
    options
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
} satisfies Meta<typeof LanguageSwitcher>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: "en"
  }
};

export const FirstOptionSelected: Story = {
  args: {
    value: "en"
  }
};

export const SecondOptionSelected: Story = {
  args: {
    value: "si"
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "en"
  }
};
