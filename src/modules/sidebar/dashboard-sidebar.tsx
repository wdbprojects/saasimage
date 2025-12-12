import { FC } from "react";
import { SidebarProps } from "@/config/types";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";

const DashboardSidebar: FC<SidebarProps> = async ({ role, user }) => {
  return (
    <Sidebar
      className="z-40 rounded-sm border-none pt-18"
      variant="floating"
      collapsible="offcanvas"
    >
      <div className="p-1">
        <SidebarHeader>DASHBOARD HEADER</SidebarHeader>
        <SidebarContent>DASHBOARD CONTENT</SidebarContent>
      </div>
    </Sidebar>
  );
};

export default DashboardSidebar;
