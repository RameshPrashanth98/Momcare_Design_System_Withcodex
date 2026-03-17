import type { Meta, StoryObj } from "@storybook/react";

import { VaccinationRecordsScreen } from "./VaccinationRecordsScreen.js";

const meta = {
  title: "Screens/Vaccination Records",
  component: VaccinationRecordsScreen,
  tags: ["autodocs"]
} satisfies Meta<typeof VaccinationRecordsScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
