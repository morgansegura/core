import { PageHeader } from "./PageHeader";
import { PageBody } from "./PageBody";
import { PageSection } from "./PageSection";
import { PageFooter } from "./PageFooter";

import "./Page.css";

import type { ReactNode } from "react";

export interface PageProps {
  children?: ReactNode;
}

export function Page({ children }: PageProps) {
  return <div className="Page">{children}</div>;
}

Page.Header = PageHeader;
Page.Body = PageBody;
Page.Section = PageSection;
Page.Footer = PageFooter;
