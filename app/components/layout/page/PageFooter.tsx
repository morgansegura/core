import "./Page.css";

import type { ReactNode } from "react";

export interface PageFooterProps {
  children?: ReactNode;
}

export function PageFooter({ children }: PageFooterProps) {
  return <footer className="PageFooter">{children}</footer>;
}
