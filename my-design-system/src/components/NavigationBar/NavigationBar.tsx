import type { ReactNode } from "react";

import { Bottomnavbar, type BottomnavbarDestination, type BottomnavbarProps } from "../Navigation/Bottomnavbar.js";

export type NavigationBarItem = BottomnavbarDestination;
export type NavigationBarProps = {
  activeItem?: string;
  items: NavigationBarItem[];
  onChange?: (value: string) => void;
} & Omit<BottomnavbarProps, "destinations">;

export function NavigationBar({ activeItem, items, onChange, onValueChange, value, ...rest }: NavigationBarProps & { children?: ReactNode }) {
  return <Bottomnavbar destinations={items} onValueChange={onChange ?? onValueChange} value={activeItem ?? value} {...rest} />;
}
