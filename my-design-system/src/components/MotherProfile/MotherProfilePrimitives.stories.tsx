import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button/Button.js";
import { IconButton } from "../IconButton/IconButton.js";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher.js";
import { ListItem } from "../ListItem/ListItem.js";
import { NavigationBar } from "../NavigationBar/NavigationBar.js";
import { StatusChip } from "../StatusChip/StatusChip.js";
import { TopAppBar } from "../TopAppBar/TopAppBar.js";
import { Typography } from "../Typography/Typography.js";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  GlobeIcon,
  HomeIcon,
  MothersIcon,
  MoreIcon,
  RecordsIcon,
  SearchIcon,
  UserCircleIcon,
  VisitIcon
} from "./icons.js";
import { spacingPrimitives } from "../../tokens/primitives.js";
import { semanticTokens } from "../../tokens/semantic.js";

const meta = {
  title: "Mother Profile/Shared Primitives",
  tags: ["autodocs"]
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const TopAppBarExample: Story = {
  render: () => (
    <TopAppBar
      actions={[
        <IconButton aria-label="Search mothers" icon={<SearchIcon />} key="search" variant="standard" />,
        <LanguageSwitcher key="language" options={[{ label: "EN", value: "en" }, { label: "SI", value: "si" }]} value="en" />,
        <IconButton aria-label="Open mother account" icon={<UserCircleIcon />} key="profile" variant="filled" />
      ]}
      navigationIcon={<IconButton aria-label="Back to mothers" icon={<ArrowLeftIcon />} variant="standard" />}
      title="Mother Profile"
    />
  )
};

export const ButtonSet: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: spacingPrimitives.space3.value }}>
      <Button variant="text">View Profile</Button>
      <Button variant="filled">Record Visit</Button>
      <Button variant="tonal">Records</Button>
    </div>
  )
};

export const StatusChipExample: Story = {
  render: () => (
    <div style={{ display: "flex", gap: spacingPrimitives.space3.value }}>
      <StatusChip label="High Risk" tone="high-risk" />
      <StatusChip label="Normal" tone="normal" />
    </div>
  )
};

export const ListItemExample: Story = {
  render: () => (
    <ListItem
      leadingIcon={<GlobeIcon />}
      onClick={() => undefined}
      primaryText="Interpreter support"
      secondaryText="Sinhala language preference noted"
      trailingIcon={<ChevronRightIcon />}
    />
  )
};

export const NavigationBarExample: Story = {
  render: () => (
    <NavigationBar
      items={[
        { label: "Home", value: "home", icon: <HomeIcon /> },
        { label: "Mothers", value: "mothers", icon: <MothersIcon /> },
        { label: "Visits", value: "visits", icon: <VisitIcon /> },
        { label: "Records", value: "records", icon: <RecordsIcon /> },
        { label: "More", value: "more", icon: <MoreIcon /> }
      ]}
      value="mothers"
    />
  )
};

export const TypographyExample: Story = {
  render: () => (
    <div style={{ backgroundColor: semanticTokens.surface.base.value, display: "grid", gap: spacingPrimitives.space2.value, padding: spacingPrimitives.space4.value }}>
      <Typography as="h2" variant="headline">Sanduni Abeysinghe</Typography>
      <Typography color={semanticTokens.text.secondary.value} variant="body">Midwife assigned: N. Perera</Typography>
      <Typography color={semanticTokens.text.secondary.value} variant="caption">Mother profile detail screen</Typography>
    </div>
  )
};
