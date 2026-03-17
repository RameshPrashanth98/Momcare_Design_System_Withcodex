import type { ReactNode } from "react";

import { Bottomnavbar, type BottomnavbarDestination, type BottomnavbarProps } from "../Navigation/Bottomnavbar.js";

export type NavigationBarItem = BottomnavbarDestination;
export type NavigationBarProps = {
  items: NavigationBarItem[];
} & Omit<BottomnavbarProps, "destinations">;

export function NavigationBar({ items, ...rest }: NavigationBarProps) {
  return <Bottomnavbar destinations={items} {...rest} />;
}
