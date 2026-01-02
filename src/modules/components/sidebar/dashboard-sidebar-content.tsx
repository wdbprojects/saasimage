import {
  SidebarContent,
  SidebarFooter,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { SidebarProps } from "@/config/types";
import NavMain from "@/modules/components/sidebar/nav-main";
import NavUser from "@/modules/components/sidebar/nav-user";
import Upgrade from "@/modules/components/sidebar/upgrade";

const DashboardSidebarContent = ({ coins, user }: SidebarProps) => {
  return (
    <>
      {/* <SidebarHeader>Sidebar Header</SidebarHeader> */}
      <SidebarContent>
        <NavMain />
        <Upgrade coins={coins} />
      </SidebarContent>
      <SidebarSeparator className="mt-2 ml-0!" />
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </>
  );
};

export default DashboardSidebarContent;
