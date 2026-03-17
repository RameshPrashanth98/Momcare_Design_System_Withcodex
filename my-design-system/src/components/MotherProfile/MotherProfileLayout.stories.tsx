import type { Meta, StoryObj } from "@storybook/react";

import { IconButton } from "../IconButton/IconButton.js";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher.js";
import { NavigationBar } from "../NavigationBar/NavigationBar.js";
import { TopAppBar } from "../TopAppBar/TopAppBar.js";
import { MotherProfileLayout } from "./MotherProfileLayout.js";
import { SectionCard } from "./SectionCard.js";
import { SummaryCard } from "./SummaryCard.js";
import { ArrowLeftIcon, HomeIcon, MoreIcon, MothersIcon, RecordsIcon, SearchIcon, UserCircleIcon, VisitIcon } from "./icons.js";

const meta = {
  title: "Mother Profile/MotherProfileLayout",
  component: MotherProfileLayout,
  args: {
    bottomNavigation: undefined,
    sections: undefined,
    summary: undefined,
    topBar: undefined
  },
  tags: ["autodocs"]
} satisfies Meta<typeof MotherProfileLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Composed: Story = {
  render: () => (
    <MotherProfileLayout
      bottomNavigation={
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
      }
      sections={<SectionCard description="Section content placeholder" title="Pregnancy Overview"><div /></SectionCard>}
      summary={<SummaryCard assignedMidwife="N. Perera" name="Sanduni Abeysinghe" nic="199624512345" riskStatus="high-risk" trimester="Second trimester" />}
      topBar={
        <TopAppBar
          actions={[
            <IconButton aria-label="Search mothers" icon={<SearchIcon />} key="search" variant="standard" />,
            <LanguageSwitcher key="language" options={[{ label: "EN", value: "en" }, { label: "SI", value: "si" }]} value="en" />,
            <IconButton aria-label="Open mother account" icon={<UserCircleIcon />} key="profile" variant="filled" />
          ]}
          navigationIcon={<IconButton aria-label="Back to mothers" icon={<ArrowLeftIcon />} variant="standard" />}
          title="Mother Profile"
        />
      }
    />
  )
};
