import { Sidebar } from "@/components/ui/sidebar";
import { SidebarProps } from "@/config/types";
import DashboardSidebarContent from "@/modules/components/sidebar/dashboard-sidebar-content";

const DashboardSidebar = ({ coins, user }: SidebarProps) => {
  return (
    <Sidebar
      className="z-40 rounded-sm border-none pt-15"
      variant="floating"
      collapsible="icon"
    >
      <DashboardSidebarContent user={user} coins={coins} />
    </Sidebar>
  );
};

export default DashboardSidebar;
