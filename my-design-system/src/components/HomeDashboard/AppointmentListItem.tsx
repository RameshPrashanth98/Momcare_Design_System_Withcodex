import { ListItem } from "../ListItem/ListItem.js";

export type AppointmentListItemProps = {
  clinic: string;
  name: string;
  onClick?: () => void;
  time: string;
};

export function AppointmentListItem({ clinic, name, onClick, time }: AppointmentListItemProps) {
  return <ListItem onClick={onClick} primaryText={name} secondaryText={clinic} trailingText={time} />;
}
