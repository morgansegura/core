import clsx from "clsx";
import Link from "next/link";

import { ButtonGroup } from "./ButtonGroup";

import "./Button.css";

import type {
  CSSProperties,
  ElementType,
  ReactNode,
  SyntheticEvent,
} from "react";
import type {
  ColorProp,
  ButtonVariantProp,
  TargetProp,
  SizeProp,
} from "@/components";

export interface ButtonProps {
  active?: boolean;
  busy?: boolean;
  className?: string;
  children?: ReactNode;
  color?: ColorProp;
  component?: ElementType;
  disabled?: boolean;
  endIcon?: ReactNode;
  href?: string;
  fullwidth?: boolean;
  invert?: boolean;
  label?: string;
  onClick?: (e: SyntheticEvent) => void;
  startIcon?: ReactNode;
  target?: TargetProp;
  title?: string;
  size?: Extract<SizeProp, "xs" | "sm" | "md" | "lg" | "xl"> | "inherit";
  style?: CSSProperties;
  variant?: ButtonVariantProp;
}

export function Button({
  active,
  busy,
  children,
  className,
  color = "inherit",
  disabled = false,
  component = "div",
  endIcon,
  fullwidth,
  href,
  invert,
  label,
  onClick,
  startIcon,
  target,
  title,
  size,
  style,
  variant = "text",
}: ButtonProps) {
  const Component = component;

  const Children = (
    <>
      {startIcon && <span className={"startIcon"}>{startIcon}</span>}

      {Boolean(children || label) && (
        <span className="Button__text">
          {label}
          {children}
        </span>
      )}

      {endIcon && <span className={"endIcon"}>{endIcon}</span>}

      {busy && <div className="Laoding">Loading</div>}
    </>
  );

  const baseProps = {
    "aria-label": label,
    "aria-pressed": Boolean(active),
    "data-color": color,
    "data-title": title,
    "data-busy": busy,
    "data-invert": invert,
    "data-size": size,
    "data-variant": variant,
    "data-width": fullwidth,
    children: Children,
    className: clsx("Button", className),
    disabled: disabled || busy,
    target,
    style,
    onClick,
  };

  return href ? (
    <Link href={href} {...baseProps}>
      {children}
    </Link>
  ) : (
    <Component {...baseProps}>{children}</Component>
  );
}

Button.Group = ButtonGroup;
