import { SidebarProvider } from "@/components/ui/sidebar";
import { LayoutPropsMain } from "@/config/types";
import { cookies, headers } from "next/headers";
import HeaderDashboard from "@/modules/components/layout/header-dashboard";
import DashboardSidebar from "@/modules/sidebar/dashboard-sidebar";
import { getCoinsAction } from "@/_actions/user-actions";
import { auth } from "@/lib/auth";
import Breadcrumbs from "@/modules/components/shared/breadcrumbs";

const DashboardLayout = async ({ children }: LayoutPropsMain) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  const session = await auth.api.getSession({ headers: await headers() });
  const user = session?.user;

  const coins = await getCoinsAction();

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <HeaderDashboard />
      <div className="flex w-full overflow-y-auto">
        <DashboardSidebar coins={coins} user={user} />
        <main className="w-full pt-16">
          <div className="p-4">
            <Breadcrumbs />
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
