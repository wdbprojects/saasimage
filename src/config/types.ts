import { ReactNode } from "react";
import { User as AuthUser } from "better-auth";

export type LayoutPropsMain = {
  children: ReactNode;
};

export interface SidebarProps {
  role?: string | null | undefined;
  user?: AuthUser | null | undefined;
  coins?: number | null | undefined;
}

export interface ISettingsForm {
  id: string | undefined;
  name: string | undefined;
  email: string | undefined;
}
