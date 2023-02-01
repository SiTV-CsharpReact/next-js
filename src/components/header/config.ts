import { ReactNode } from "react";

export type RouteType = {
  element: ReactNode,
  state: string,
  index?: boolean,
  path?: string,
  sidebarProps?: {
    displayText: string,
    icon?: ReactNode;
  };
};