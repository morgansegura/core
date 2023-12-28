import "./Page.css";

import type { ReactNode } from "react";

export interface PageHeaderProps {
  children?: ReactNode;
}

export function PageHeader({ children }: PageHeaderProps) {
  return <header className="PageHeader">{children}</header>;
}
