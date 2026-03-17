import type { Meta, StoryObj } from "@storybook/react";

import { BellIcon, CalendarIcon, HomeIcon, MoreIcon, MothersIcon, RecordsIcon, UserCircleIcon, VisitIcon } from "../MotherProfile/icons.js";
import { Button } from "../Button/Button.js";
import { IconButton } from "../IconButton/IconButton.js";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher.js";
import { NavigationBar } from "../NavigationBar/NavigationBar.js";
import { SectionHeader } from "../SectionHeader/SectionHeader.js";
import { StatCard } from "../StatCard/StatCard.js";
import { TopAppBar } from "../TopAppBar/TopAppBar.js";
import { Typography } from "../Typography/Typography.js";
import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

const meta = {
  title: "Home Dashboard/Shared Primitives",
  tags: ["autodocs"]
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const TopAppBarExample: Story = {
  render: () => (
    <TopAppBar
      actions={[
        <IconButton aria-label="Notifications" icon={<BellIcon />} key="bell" variant="standard" />,
        <IconButton aria-label="Profile" icon={<UserCircleIcon />} key="avatar" variant="filled" />
      ]}
      title="Mom Care"
    />
  )
};

export const LanguageRowAndButtons: Story = {
  render: () => (
    <div style={{ display: "grid", gap: spacingPrimitives.space3.value }}>
      <LanguageSwitcher options={[{ label: "EN", value: "en" }, { label: "SI", value: "si" }]} value="en" />
      <div style={{ display: "flex", flexWrap: "wrap", gap: spacingPrimitives.space3.value }}>
        <Button variant="filled">Register Mother</Button>
        <Button variant="filled">Clinic Visit</Button>
        <Button variant="filled">Add Vaccination</Button>
      </div>
    </div>
  )
};

export const StatCardAndHeader: Story = {
  render: () => (
    <div style={{ display: "grid", gap: spacingPrimitives.space3.value }}>
      <SectionHeader title="Today's Clinics" />
      <StatCard icon={<CalendarIcon />} label="Today's Clinics" value="06" variant="default" />
    </div>
  )
};

export const NavigationAndType: Story = {
  render: () => (
    <div style={{ backgroundColor: semanticTokens.surface.base.value, display: "grid", gap: spacingPrimitives.space3.value, padding: spacingPrimitives.space4.value }}>
      <Typography as="h2" variant="headline">Home Dashboard</Typography>
      <Typography color={semanticTokens.text.secondary.value} variant="body">Daily clinic workload, alerts, and upcoming appointments at a glance.</Typography>
      <NavigationBar items={[{ label: "Home", value: "home", icon: <HomeIcon /> }, { label: "Mothers", value: "mothers", icon: <MothersIcon /> }, { label: "Visits", value: "visits", icon: <VisitIcon /> }, { label: "Records", value: "records", icon: <RecordsIcon /> }, { label: "More", value: "more", icon: <MoreIcon /> }]} value="home" />
    </div>
  )
};
