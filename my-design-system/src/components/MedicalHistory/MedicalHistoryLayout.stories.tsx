import type { Meta, StoryObj } from "@storybook/react";

import { MedicalHistoryLayout } from "./MedicalHistoryLayout.js";
import { ActionBar } from "./ActionBar.js";
import { SummaryCard } from "./SummaryCard.js";
import { SectionHeader } from "../SectionHeader/SectionHeader.js";
import { TopAppBar } from "../TopAppBar/TopAppBar.js";
import { IconButton } from "../IconButton/IconButton.js";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher.js";
import { NavigationBar } from "../NavigationBar/NavigationBar.js";
import { ArrowLeftIcon, HomeIcon, MoreIcon, MothersIcon, RecordsIcon, UserCircleIcon, VisitIcon } from "../MotherProfile/icons.js";

const meta = {
  title: "Medical History/MedicalHistoryLayout",
  component: MedicalHistoryLayout,
  args: {
    actionBar: undefined,
    bottomNavigation: undefined,
    sections: undefined,
    summaryCard: undefined,
    topBar: undefined
  },
  tags: ["autodocs"]
} satisfies Meta<typeof MedicalHistoryLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Composed: Story = {
  render: () => (
    <MedicalHistoryLayout
      actionBar={<ActionBar />}
      bottomNavigation={<NavigationBar items={[{ label: "Home", value: "home", icon: <HomeIcon /> }, { label: "Mothers", value: "mothers", icon: <MothersIcon /> }, { label: "Visits", value: "visits", icon: <VisitIcon /> }, { label: "Records", value: "records", icon: <RecordsIcon /> }, { label: "More", value: "more", icon: <MoreIcon /> }]} value="records" />}
      sections={<SectionHeader title="Previous Pregnancies" />}
      summaryCard={<SummaryCard midwife="N. Perera" name="Sanduni Abeysinghe" nic="199624512345" riskStatus="high-risk" timestamp="17 Mar 2026, 8:30 AM" trimester="Second trimester" />}
      topBar={<TopAppBar actions={[<LanguageSwitcher key="language" options={[{ label: "EN", value: "en" }, { label: "SI", value: "si" }]} value="en" />, <IconButton aria-label="Open mother account" icon={<UserCircleIcon />} key="avatar" variant="filled" />]} navigationIcon={<IconButton aria-label="Back to records" icon={<ArrowLeftIcon />} variant="standard" />} title="Medical History" />}
    />
  )
};
