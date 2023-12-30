import clsx from "clsx";

import { Button, type ButtonProps } from "./Button";

import "./Button.css";

export interface ButtonGroupProps extends ButtonProps {}

export function ButtonGroup({ children, className }: ButtonGroupProps) {
  return <div className={clsx("ButtonGroup", className)}>{children}</div>;
}
