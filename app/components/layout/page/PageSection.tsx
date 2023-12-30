import clsx from "clsx";

import "./Page.css";

import type { ElementType, ReactNode } from "react";
import type { TypographyLayoutProp } from "@/components";

export interface PageSectionProps {
  children?: ReactNode;
  className?: string;
  component?: ElementType;
  appearance?: TypographyLayoutProp;
}

export function PageSection({
  appearance = "layout",
  children,
  className,
  component = "section",
}: PageSectionProps) {
  const Component = component;
  const baseProps = {
    "data-appearance": appearance,
    className: clsx("PageSection", className),
  };
  return <Component {...baseProps}>{children}</Component>;
}
