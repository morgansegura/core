import "./Page.css";

import type { ReactNode } from "react";

export interface PageSectionProps {
  children?: ReactNode;
}

export function PageSection({ children }: PageSectionProps) {
  return <section className="PageSection">{children}</section>;
}
