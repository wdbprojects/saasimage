"use client";

import { FC } from "react";
import { SidebarProps } from "@/config/types";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";
import { sidebarData as data } from "@/lib/data";
import NavMain from "@/modules/components/sidebar/nav-main";
import NavUser from "@/modules/components/sidebar/nav-user";
import NavSecondary from "@/modules/components/sidebar/nav-secondary";
import Upgrade from "@/modules/components/sidebar/upgrade";

const DashboardSidebar: FC<SidebarProps> = ({ coins, user }) => {
  return (
    <Sidebar
      className="z-40 rounded-sm pt-18"
      variant="floating"
      collapsible="icon"
    >
      <div className="bg-sidebar flex h-full flex-col justify-between rounded-lg border-none!">
        {/* <SidebarHeader>DASHBOARD HEADER</SidebarHeader> */}
        <SidebarContent className="border-b">
          <NavMain />
          {/* <NavProjects projects={data.projects} /> */}
          <NavSecondary items={data.navSecondary} className="mt-auto" />
          <Upgrade coins={coins} />
        </SidebarContent>

        <SidebarFooter>{user && <NavUser user={user} />}</SidebarFooter>
        <SidebarRail />
      </div>
    </Sidebar>
  );
};

export default DashboardSidebar;
