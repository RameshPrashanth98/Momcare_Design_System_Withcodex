import { FloatingActionButton, type FloatingActionButtonProps } from "../FloatingActionButton/FloatingActionButton.js";

export type ExtendedFABProps = FloatingActionButtonProps;

export function ExtendedFAB(props: ExtendedFABProps) {
  return <FloatingActionButton {...props} />;
}
