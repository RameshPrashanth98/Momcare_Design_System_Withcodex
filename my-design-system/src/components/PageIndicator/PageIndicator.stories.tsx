import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { PageIndicator } from "./PageIndicator.js";

const meta = {
  title: "Onboarding/PageIndicator",
  component: PageIndicator,
  args: {
    total: 4,
    current: 0
  },
  argTypes: {
    count: {
      control: { type: "number", min: 1, max: 6, step: 1 }
    },
    current: {
      control: { type: "number", min: 0, max: 5, step: 1 }
    },
    currentIndex: {
      control: { type: "number", min: 0, max: 5, step: 1 }
    },
    onDotClick: { action: "dot clicked" },
    total: {
      control: { type: "number", min: 1, max: 6, step: 1 }
    },
    "aria-label": { control: "text" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof PageIndicator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ThreeDots: Story = {
  args: {
    total: 3,
    current: 1
  }
};

export const FourDots: Story = {
  args: {
    total: 4,
    current: 0
  }
};

export const DifferentActivePositions: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: spacingPrimitives.space4.value }}>
      <PageIndicator {...args} current={0} />
      <PageIndicator {...args} current={1} />
      <PageIndicator {...args} current={2} />
      <PageIndicator {...args} current={3} />
    </div>
  )
};

export const InteractiveExample: Story = {
  render: (args) => {
    const [index, setIndex] = useState(args.current ?? args.currentIndex ?? 0);

    return <PageIndicator {...args} current={index} onDotClick={setIndex} />;
  }
};
