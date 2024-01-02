import clsx from "clsx";

import "./Typography.css";

import type { ElementType, ReactNode } from "react";
import type {
  FontFamilyProp,
  FontStyleProp,
  LetterSizeProp,
  LetterSpacingProp,
  LineHeightProp,
  TextTransformProp,
  TypographyLayoutProp,
  WeightProp,
} from "@/components";

export interface TypographyProps {
  appearance?: ElementType;
  component?: ElementType;
  children?: ReactNode;
  className?: string;
  font?: FontFamilyProp;
  fontStyle?: FontStyleProp;
  height?: LineHeightProp;
  size?: LetterSizeProp;
  spacing?: LetterSpacingProp;
  transform?: TextTransformProp;
  weight?: WeightProp;
  variant?: TypographyLayoutProp;
}

export function Typography({
  appearance,
  children,
  className,
  component = "div",
  font,
  fontStyle,
  height,
  size,
  spacing,
  weight,
  transform,
  variant = "layout",
}: TypographyProps) {
  const Component = component;

  const baseProps = {
    className: clsx("Typography", className),
    "data-appearance": appearance ?? component,
    "data-bold": weight,
    "data-font": font,
    "data-spacing": spacing,
    "data-leading": height,
    "data-size": size,
    "data-style": fontStyle,
    "data-transform": transform,
    "data-variant": variant,
  };

  return <Component {...baseProps}>{children}</Component>;
}
