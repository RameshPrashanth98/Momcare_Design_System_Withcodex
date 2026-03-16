import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { spacingPrimitives } from "../../tokens/primitives.js";
import { PageIndicator } from "./PageIndicator.js";

const meta = {
  title: "Onboarding/PageIndicator",
  component: PageIndicator,
  args: {
    count: 4,
    currentIndex: 0
  },
  argTypes: {
    count: {
      control: { type: "number", min: 1, max: 6, step: 1 }
    },
    currentIndex: {
      control: { type: "number", min: 0, max: 5, step: 1 }
    },
    onDotClick: { action: "dot clicked" },
    "aria-label": { control: "text" }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof PageIndicator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ThreeDots: Story = {
  args: {
    count: 3,
    currentIndex: 1
  }
};

export const FourDots: Story = {
  args: {
    count: 4,
    currentIndex: 0
  }
};

export const DifferentActivePositions: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: spacingPrimitives.space4.value }}>
      <PageIndicator {...args} currentIndex={0} />
      <PageIndicator {...args} currentIndex={1} />
      <PageIndicator {...args} currentIndex={2} />
      <PageIndicator {...args} currentIndex={3} />
    </div>
  )
};

export const InteractiveExample: Story = {
  render: (args) => {
    const [index, setIndex] = useState(args.currentIndex);

    return <PageIndicator {...args} currentIndex={index} onDotClick={setIndex} />;
  }
};
