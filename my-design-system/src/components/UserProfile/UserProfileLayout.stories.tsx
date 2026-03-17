import type { Meta, StoryObj } from "@storybook/react";

import { Divider } from "../Divider/Divider.js";
import { IconButton } from "../IconButton/IconButton.js";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher.js";
import { NavigationBar } from "../NavigationBar/NavigationBar.js";
import { SectionHeader } from "../SectionHeader/SectionHeader.js";
import { Switch } from "../Switch/Switch.js";
import { TopAppBar } from "../TopAppBar/TopAppBar.js";
import { Button } from "../Button/Button.js";
import { Avatar } from "../Avatar/Avatar.js";
import { SegmentedControl } from "../SegmentedControl/SegmentedControl.js";
import { ArrowLeftIcon, ChevronRightIcon, ClinicIcon, HomeIcon, MothersIcon, RecordsIcon, SearchIcon, UserCircleIcon } from "../MotherProfile/icons.js";
import { UserProfileLayout } from "./UserProfileLayout.js";
import { ProfileSummaryCard } from "./ProfileSummaryCard.js";
import { SettingsGroup } from "./SettingsGroup.js";
import { SettingsRow } from "./SettingsRow.js";
import { spacingPrimitives } from "../../tokens/primitives.js";

const meta = {
  title: "User Profile/UserProfileLayout",
  component: UserProfileLayout,
  args: {
    bottomNavigation: undefined,
    content: undefined,
    topBar: undefined
  },
  argTypes: {
    bottomNavigation: { control: false },
    content: { control: false },
    topBar: { control: false }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof UserProfileLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <UserProfileLayout
      bottomNavigation={<NavigationBar activeItem="profile" items={[{ label: "Home", value: "home", icon: <HomeIcon /> }, { label: "Mothers", value: "mothers", icon: <MothersIcon /> }, { label: "Clinics", value: "clinics", icon: <ClinicIcon /> }, { label: "Records", value: "records", icon: <RecordsIcon /> }, { label: "Profile", value: "profile", icon: <UserCircleIcon /> }]} onChange={() => undefined} />}
      content={<div style={{ display: "grid", gap: spacingPrimitives.space4.value }}><ProfileSummaryCard area="PHM Area 12" clinic="Matara Central Clinic" name="Nimali Perera" role="Public Health Midwife" /><SettingsGroup title="App Preferences"><SettingsRow label="Language" trailingContent={<SegmentedControl ariaLabel="Language preference" onChange={() => undefined} options={[{ label: "EN", value: "en" }, { label: "SI", value: "si" }]} value="en" />} /><Divider /><SettingsRow label="Notifications" supportingText="Enabled for clinic reminders" trailingContent={<Switch checked onChange={() => undefined} />} /></SettingsGroup><Button variant="outlined">Logout</Button></div>}
      topBar={<TopAppBar actions={[<LanguageSwitcher key="language" onChange={() => undefined} options={[{ label: "EN", value: "en" }, { label: "SI", value: "si" }]} value="en" />, <IconButton aria-label="Utility" icon={<SearchIcon />} key="utility" variant="standard" />, <Avatar key="avatar" />]} navigationIcon={<IconButton aria-label="Back" icon={<ArrowLeftIcon />} variant="standard" />} title="User Profile" />}
    />
  )
};

