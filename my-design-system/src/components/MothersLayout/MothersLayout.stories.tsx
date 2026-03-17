import type { Meta, StoryObj } from "@storybook/react";

import { FilterBar } from "../FilterBar/FilterBar.js";
import { FloatingActionButton } from "../FloatingActionButton/FloatingActionButton.js";
import { MotherCard } from "../MotherCard/MotherCard.js";
import { NavigationBar } from "../NavigationBar/NavigationBar.js";
import { SearchBar } from "../SearchBar/SearchBar.js";
import { TopAppBar } from "../TopAppBar/TopAppBar.js";
import { MothersLayout } from "./MothersLayout.js";

function StoryIcon({ symbol }: { symbol: string }) {
  return <span aria-hidden="true">{symbol}</span>;
}

const meta = {
  title: "Mothers/MothersLayout",
  component: MothersLayout,
  args: {
    topBar: <TopAppBar title="Mothers" navigationIcon={<span aria-hidden="true">&lt;</span>} actions={[<span key="actions">?</span>]} />,
    searchBar: <SearchBar placeholder="Search mothers" />,
    filterBar: <FilterBar filters={[{ label: "Clinic", value: "All" }, { label: "Area", value: "Galle" }, { label: "Trimester", value: "Second" }, { label: "Risk Level", value: "High Risk" }]} />,
    list: <MotherCard assignedMidwife="R. Perera" name="Ayesha Nadeesha" nic="982341234V" riskStatus="high-risk" showAlertIcon trimester="Second" />,
    fab: <FloatingActionButton aria-label="Add mother" label="Add Mother" />,
    bottomNavigation: <NavigationBar items={[{ label: "Home", value: "home", icon: <StoryIcon symbol="H" /> }, { label: "Mothers", value: "mothers", icon: <StoryIcon symbol="M" /> }, { label: "Visits", value: "visits", icon: <StoryIcon symbol="V" /> }, { label: "Reports", value: "reports", icon: <StoryIcon symbol="R" /> }, { label: "More", value: "more", icon: <StoryIcon symbol="•" /> }]} value="mothers" />
  },
  argTypes: {
    bottomNavigation: { control: false },
    fab: { control: false },
    filterBar: { control: false },
    list: { control: false },
    searchBar: { control: false },
    topBar: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof MothersLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
