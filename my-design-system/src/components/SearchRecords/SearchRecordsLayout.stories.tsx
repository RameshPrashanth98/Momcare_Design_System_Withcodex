import type { Meta, StoryObj } from "@storybook/react";

import { SearchBar } from "../SearchBar/SearchBar.js";
import { SearchRecordsLayout } from "./SearchRecordsLayout.js";
import { RecordCard } from "./RecordCard.js";
import { SectionHeader } from "../SectionHeader/SectionHeader.js";
import { IconButton } from "../IconButton/IconButton.js";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher.js";
import { NavigationBar } from "../NavigationBar/NavigationBar.js";
import { ArrowLeftIcon, ClinicIcon, HomeIcon, MothersIcon, RecordsIcon, SearchIcon, UserCircleIcon } from "../MotherProfile/icons.js";
import { TopAppBar } from "../TopAppBar/TopAppBar.js";

const meta = {
  title: "Search Records/SearchRecordsLayout",
  component: SearchRecordsLayout,
  args: {
    bottomNavigation: undefined,
    records: undefined,
    searchBar: undefined,
    sectionHeader: undefined,
    topBar: undefined
  },
  argTypes: {
    bottomNavigation: { control: false },
    records: { control: false },
    searchBar: { control: false },
    sectionHeader: { control: false },
    topBar: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof SearchRecordsLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <SearchRecordsLayout
      bottomNavigation={<NavigationBar activeItem="records" items={[{ label: "Home", value: "home", icon: <HomeIcon /> }, { label: "Mothers", value: "mothers", icon: <MothersIcon /> }, { label: "Clinics", value: "clinics", icon: <ClinicIcon /> }, { label: "Records", value: "records", icon: <RecordsIcon /> }, { label: "Profile", value: "profile", icon: <UserCircleIcon /> }]} onChange={() => undefined} />}
      records={<RecordCard clinicNumber="CL-2048" midwife="Nimali Perera" name="Nethmi Perera" nic="199624512345" status="high-risk" trimester="Second" />}
      searchBar={<SearchBar placeholder="Search by name, NIC, or clinic number" value="" />}
      sectionHeader={<SectionHeader subtitle="Use search to refine the active mother record list" title="Pregnant Mothers List" />}
      topBar={<TopAppBar actions={[<LanguageSwitcher key="language" options={[{ label: "EN", value: "en" }, { label: "SI", value: "si" }]} value="en" />, <IconButton aria-label="Utility" icon={<SearchIcon />} key="utility" />, <IconButton aria-label="Profile" icon={<UserCircleIcon />} key="profile" variant="filled" />]} navigationIcon={<IconButton aria-label="Back" icon={<ArrowLeftIcon />} />} title="Search Records" />}
    />
  )
};
