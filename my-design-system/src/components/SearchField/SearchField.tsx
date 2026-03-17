import type { SearchBarProps } from "../SearchBar/SearchBar.js";
import { SearchBar } from "../SearchBar/SearchBar.js";

export type SearchFieldProps = SearchBarProps;

export function SearchField(props: SearchFieldProps) {
  return <SearchBar {...props} />;
}
