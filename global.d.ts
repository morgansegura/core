import type { LinkProps } from "next/link";
import type { FunctionDeclaration } from "typescript";

interface EnvironmentVariables {
  NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID: string;
  NEXT_PUBLIC_SANITY_STUDIO_DATASET: string;
  NEXT_PUBLIC_GOOGLE_MAP_API_KEY: string;
  EMAIL_SIGN_UP_URL: string;
  PORT: string;
  WEB_UI_SERVICE_URL: string;
}

/** Google Tag Manager */
interface DataLayer {
  push: (args: any) => void;
}

/** These exist ONLY on window */
interface Window {
  __env__?: Partial<EnvironmentVariables>;
  dataLayer?: DataLayer;
}

declare module "calver" {
  function inc(format: string, previousVersion: string, operation: string);
}

declare namespace JSX {
  interface IntrinsicElements {
    div: unknown;
    "bp-icon": unknown;
  }
}

interface GlobalLinkProps extends LinkProps {
  _key?: any;
  id?: string | number;
  label?: string;
  onClick?: Function;
  target?: "_blank" | "_self" | "_parent" | "_top" | "framename";
  datatitle?: string;
}
