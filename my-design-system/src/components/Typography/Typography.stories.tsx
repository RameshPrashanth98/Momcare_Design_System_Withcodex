import type { Meta, StoryObj } from "@storybook/react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";
import { Typography } from "./Typography.js";

const meta = {
  title: "Mothers/Typography",
  component: Typography,
  args: {
    as: "div",
    children: "Mother profile heading",
    variant: "body"
  },
  argTypes: {
    as: {
      control: "inline-radio",
      options: ["h1", "h2", "h3", "p", "span", "div"]
    },
    children: { control: "text" },
    color: { control: "text" },
    variant: {
      control: "inline-radio",
      options: ["display", "headline", "title", "body", "label", "caption"]
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: spacingPrimitives.space3.value }}>
      <Typography {...args} as="h1" variant="display">Mothers</Typography>
      <Typography {...args} as="h2" variant="headline">Assigned Mothers</Typography>
      <Typography {...args} as="h3" variant="title">Normal Risk</Typography>
      <Typography {...args} as="p" variant="body">Record visits, review risk, and keep clinic details current.</Typography>
      <Typography {...args} as="span" color={semanticTokens.text.secondary.value} variant="label">Midwife: R. Perera</Typography>
      <Typography {...args} as="span" color={semanticTokens.text.muted.value} variant="caption">Updated 10 min ago</Typography>
    </div>
  )
};
