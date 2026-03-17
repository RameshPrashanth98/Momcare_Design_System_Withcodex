import type { ReactNode } from "react";

import { ListItem } from "../ListItem/ListItem.js";

export type AlertListItemProps = {
  alertIcon?: ReactNode;
  condition: string;
  midwife: string;
  name: string;
  onClick?: () => void;
};

export function AlertListItem({ alertIcon, condition, midwife, name, onClick }: AlertListItemProps) {
  return <ListItem leadingIcon={alertIcon} onClick={onClick} primaryText={name} secondaryText={`${condition} • ${midwife}`} />;
}
