import clsx from "clsx";

import "./Typography.css";

import type { ElementType, ReactNode } from "react";
import type {
  FontFamilyProp,
  LetterSpacingProp,
  LineHeightProp,
  WeightProp,
} from "@/components";

export interface TypographyProps {
  appearance?: ElementType;
  component?: ElementType;
  children?: ReactNode;
  className?: string;
  font?: FontFamilyProp;
  height?: LineHeightProp;
  spacing?: LetterSpacingProp;
  weight?: WeightProp;
}

export function Typography({
  appearance,
  children,
  className,
  component = "div",
  font,
  height,
  spacing,
  weight,
}: TypographyProps) {
  const Component = component;

  const baseProps = {
    "data-appearance": appearance ?? component,
    "data-font": font,
    "data-leading": height,
    "data-weight": weight,
    "data-spacing": spacing,
    className: clsx("Typography", className),
  };

  return <Component {...baseProps}>{children}</Component>;
}
