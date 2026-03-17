import type { Meta, StoryObj } from "@storybook/react";

import { NoteCard } from "./NoteCard.js";

const meta = {
  title: "Medical History/NoteCard",
  component: NoteCard,
  args: {
    title: "Complications & Risk Notes",
    content: "Mother requires closer glucose review and additional counselling on hydration before the next clinic visit."
  },
  tags: ["autodocs"]
} satisfies Meta<typeof NoteCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
