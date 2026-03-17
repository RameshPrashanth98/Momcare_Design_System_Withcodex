import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button/Button.js";
import { IconButton } from "../IconButton/IconButton.js";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher.js";
import { NavigationBar } from "../NavigationBar/NavigationBar.js";
import { SectionHeader } from "../SectionHeader/SectionHeader.js";
import { StatusChip } from "../StatusChip/StatusChip.js";
import { TopAppBar } from "../TopAppBar/TopAppBar.js";
import { Typography } from "../Typography/Typography.js";
import { ArrowLeftIcon, HomeIcon, MoreIcon, MothersIcon, RecordsIcon, UserCircleIcon, VisitIcon } from "../MotherProfile/icons.js";
import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

const meta = {
  title: "Medical History/Shared Primitives",
  tags: ["autodocs"]
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const TopAppBarExample: Story = {
  render: () => (
    <TopAppBar
      actions={[
        <LanguageSwitcher key="language" options={[{ label: "EN", value: "en" }, { label: "SI", value: "si" }]} value="en" />,
        <IconButton aria-label="Open mother account" icon={<UserCircleIcon />} key="avatar" variant="filled" />
      ]}
      navigationIcon={<IconButton aria-label="Back to records" icon={<ArrowLeftIcon />} variant="standard" />}
      title="Medical History"
    />
  )
};

export const ButtonSet: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: spacingPrimitives.space3.value }}>
      <Button variant="tonal">Add Medical Note</Button>
      <Button variant="filled">Add Complication</Button>
      <Button variant="text">Upload Report</Button>
    </div>
  )
};

export const StatusAndHeader: Story = {
  render: () => (
    <div style={{ display: "grid", gap: spacingPrimitives.space3.value }}>
      <SectionHeader title="Previous Pregnancies" />
      <StatusChip label="High Risk" tone="high-risk" />
    </div>
  )
};

export const NavigationBarExample: Story = {
  render: () => (
    <NavigationBar
      items={[{ label: "Home", value: "home", icon: <HomeIcon /> }, { label: "Mothers", value: "mothers", icon: <MothersIcon /> }, { label: "Visits", value: "visits", icon: <VisitIcon /> }, { label: "Records", value: "records", icon: <RecordsIcon /> }, { label: "More", value: "more", icon: <MoreIcon /> }]}
      value="records"
    />
  )
};

export const TypographyExample: Story = {
  render: () => (
    <div style={{ backgroundColor: semanticTokens.surface.base.value, display: "grid", gap: spacingPrimitives.space2.value, padding: spacingPrimitives.space4.value }}>
      <Typography as="h2" variant="headline">Medical History</Typography>
      <Typography color={semanticTokens.text.secondary.value} variant="body">Grouped records and attachments for ongoing maternal care.</Typography>
      <Typography color={semanticTokens.text.secondary.value} variant="caption">Token-driven supporting copy</Typography>
    </div>
  )
};
