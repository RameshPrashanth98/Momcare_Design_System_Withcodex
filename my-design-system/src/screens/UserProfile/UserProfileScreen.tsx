import { useState } from "react";

import { Avatar } from "../../components/Avatar/Avatar.js";
import { Button } from "../../components/Button/Button.js";
import { Divider } from "../../components/Divider/Divider.js";
import { IconButton } from "../../components/IconButton/IconButton.js";
import { LanguageSwitcher } from "../../components/LanguageSwitcher/LanguageSwitcher.js";
import { NavigationBar } from "../../components/NavigationBar/NavigationBar.js";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader.js";
import { SegmentedControl } from "../../components/SegmentedControl/SegmentedControl.js";
import { Switch } from "../../components/Switch/Switch.js";
import { TopAppBar } from "../../components/TopAppBar/TopAppBar.js";
import { ProfileSummaryCard, SettingsGroup, SettingsRow, UserProfileLayout } from "../../components/UserProfile/index.js";
import { ArrowLeftIcon, ChevronRightIcon, ClinicIcon, HomeIcon, MothersIcon, RecordsIcon, SearchIcon, UserCircleIcon } from "../../components/MotherProfile/icons.js";
import { spacingPrimitives } from "../../tokens/primitives.js";

const languageOptions = [
  { label: "EN", value: "en" },
  { label: "SI", value: "si" }
];

const navigationItems = [
  { label: "Home", value: "home", icon: <HomeIcon /> },
  { label: "Mothers", value: "mothers", icon: <MothersIcon /> },
  { label: "Clinics", value: "clinics", icon: <ClinicIcon /> },
  { label: "Records", value: "records", icon: <RecordsIcon /> },
  { label: "Profile", value: "profile", icon: <UserCircleIcon />, activeIcon: <UserCircleIcon /> }
];

export function UserProfileScreen() {
  const [language, setLanguage] = useState("en");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <UserProfileLayout
      bottomNavigation={<NavigationBar activeItem="profile" items={navigationItems} onChange={() => undefined} />}
      content={
        <div style={{ display: "grid", gap: spacingPrimitives.space4.value }}>
          <ProfileSummaryCard area="PHM Area 12" clinic="Matara Central Clinic" name="Nimali Perera" onAvatarClick={() => undefined} role="Public Health Midwife" />

          <div style={{ display: "grid", gap: spacingPrimitives.space3.value }}>
            <SectionHeader title="Account Information" />
            <SettingsGroup title="Account Information">
              <SettingsRow label="Staff ID" onClick={() => undefined} trailingIcon={<ChevronRightIcon />} value="PHM-2048" />
              <Divider />
              <SettingsRow label="Phone" onClick={() => undefined} trailingIcon={<ChevronRightIcon />} value="071 234 5678" />
              <Divider />
              <SettingsRow label="Email" onClick={() => undefined} trailingIcon={<ChevronRightIcon />} value="nimali.perera@momcare.lk" />
              <Divider />
              <SettingsRow label="District" onClick={() => undefined} trailingIcon={<ChevronRightIcon />} value="Matara" />
            </SettingsGroup>
          </div>

          <div style={{ display: "grid", gap: spacingPrimitives.space3.value }}>
            <SectionHeader title="App Preferences" />
            <SettingsGroup title="App Preferences">
              <SettingsRow label="Language" trailingContent={<SegmentedControl ariaLabel="Language preference" onChange={setLanguage} options={languageOptions} value={language} />} />
              <Divider />
              <SettingsRow label="Notifications" supportingText="Enabled for clinic reminders" trailingContent={<Switch checked={notificationsEnabled} onChange={setNotificationsEnabled} />} />
              <Divider />
              <SettingsRow label="Sync Status" supportingText="Last synced 5 minutes ago" value="Up to date" />
            </SettingsGroup>
          </div>

          <div style={{ display: "grid", gap: spacingPrimitives.space3.value }}>
            <SectionHeader title="Quick Access" />
            <SettingsGroup title="Quick Access">
              <SettingsRow label="Change Password" onClick={() => undefined} trailingIcon={<ChevronRightIcon />} />
              <Divider />
              <SettingsRow label="Help & Support" onClick={() => undefined} trailingIcon={<ChevronRightIcon />} />
              <Divider />
              <SettingsRow label="About Application" onClick={() => undefined} trailingIcon={<ChevronRightIcon />} />
            </SettingsGroup>
          </div>

          <Button variant="outlined">Logout</Button>
        </div>
      }
      topBar={
        <TopAppBar
          actions={[
            <LanguageSwitcher key="language" onChange={setLanguage} options={languageOptions} value={language} />,
            <IconButton aria-label="Open utility panel" icon={<SearchIcon />} key="utility" variant="standard" />,
            <Avatar key="avatar" />
          ]}
          navigationIcon={<IconButton aria-label="Go back" icon={<ArrowLeftIcon />} variant="standard" />}
          title="User Profile"
        />
      }
    />
  );
}
