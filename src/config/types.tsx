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

export interface IUser {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  emailVerified: boolean;
  name: string;
  image?: string | null | undefined;
  role?: string | null | undefined;
  banned: boolean | null | undefined;
  banReason?: string | null | undefined;
  banExpires?: Date | null | undefined;
}
