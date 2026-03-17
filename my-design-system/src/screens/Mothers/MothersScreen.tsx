import { IconButton } from "../../components/IconButton/IconButton.js";
import { LanguageSwitcher } from "../../components/LanguageSwitcher/LanguageSwitcher.js";
import { FilterBar } from "../../components/FilterBar/FilterBar.js";
import { FloatingActionButton } from "../../components/FloatingActionButton/FloatingActionButton.js";
import { MotherCard } from "../../components/MotherCard/MotherCard.js";
import { MothersLayout } from "../../components/MothersLayout/MothersLayout.js";
import { NavigationBar } from "../../components/NavigationBar/NavigationBar.js";
import { SearchBar } from "../../components/SearchBar/SearchBar.js";
import { TopAppBar } from "../../components/TopAppBar/TopAppBar.js";

export function MothersScreen() {
  const topBar = (
    <TopAppBar
      actions={[
        <IconButton aria-label="Search" icon={<span aria-hidden="true">?</span>} variant="standard" />,
        <LanguageSwitcher aria-label="Choose language" options={[{ label: "EN", value: "en" }, { label: "??", value: "si" }]} value="en" />,
        <IconButton aria-label="Profile" icon={<span aria-hidden="true">RP</span>} variant="filled" />
      ]}
      navigationIcon={<IconButton aria-label="Go back" icon={<span aria-hidden="true">&lt;</span>} variant="standard" />}
      title="Mothers"
    />
  );

  const filters = (
    <FilterBar
      filters={[
        { label: "Clinic", value: "All" },
        { label: "Area", value: "Matara" },
        { label: "Trimester", value: "Second" },
        { label: "Risk Level", value: "High Risk" }
      ]}
    />
  );

  const list = (
    <>
      <MotherCard assignedMidwife="R. Perera" name="Ayesha Nadeesha" nic="982341234V" riskStatus="high-risk" showAlertIcon trimester="Second" />
      <MotherCard assignedMidwife="K. Silva" name="Nimali Perera" nic="951231234V" riskStatus="normal" trimester="Third" />
      <MotherCard assignedMidwife="S. Fernando" name="Hasini Madushika" nic="990441234V" riskStatus="high-risk" showAlertIcon trimester="First" />
    </>
  );

  const bottomNavigation = (
    <NavigationBar
      items={[
        { label: "Home", value: "home", icon: <span aria-hidden="true">H</span> },
        { label: "Mothers", value: "mothers", icon: <span aria-hidden="true">M</span> },
        { label: "Visits", value: "visits", icon: <span aria-hidden="true">V</span> },
        { label: "Reports", value: "reports", icon: <span aria-hidden="true">R</span> },
        { label: "More", value: "more", icon: <span aria-hidden="true">•</span> }
      ]}
      value="mothers"
    />
  );

  return (
    <MothersLayout
      bottomNavigation={bottomNavigation}
      fab={<FloatingActionButton aria-label="Add mother" label="Add Mother" />}
      filterBar={filters}
      list={list}
      searchBar={<SearchBar placeholder="Search by name or NIC" />}
      topBar={topBar}
    />
  );
}
