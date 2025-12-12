import { routes } from "@/config/routes";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import SignOutButton from "@/modules/components/auth/sign-out-button";
import DarkMode from "@/components/shared/dark-mode";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import HeaderLinks from "@/modules/components/shared/header-links";
import SidebarTriggerCustom from "@/modules/components/dashboard/shared/sidebar-trigger-custom";

const HeaderDashboard = async () => {
  const session = await auth.api.getSession({ headers: await headers() });

  return (
    <header className="bg-background fixed top-0 right-0 z-50 h-16 w-full border-b px-2 py-2">
      <div className="container mx-auto flex w-full items-center justify-between gap-1 sm:gap-2">
        {/* //INFO: MENU & LOGO  & NAV LINKS */}
        <div className="flex flex-1 shrink-0 items-center gap-2 p-1">
          <SidebarTriggerCustom />
          <Link href={routes.home} className="flex flex-row items-center gap-0">
            <h6 className="text-primary text-xl font-bold tracking-tight">
              Saas
            </h6>
            <h6 className="text-foreground text-xl font-bold tracking-tight">
              Image
            </h6>
          </Link>
        </div>
        <div className="flex-1">
          <HeaderLinks />
        </div>

        {/* //INFO: BUTTONS & AUTH */}
        <div className="flex flex-1 shrink-0 items-center justify-end gap-4 p-1">
          {session && (
            <div className="flex flex-1 items-center justify-end gap-2">
              <span className="text-xs">Signed in as:</span>
              <Badge variant="default">{session?.user.role}</Badge>
            </div>
          )}
          {!session ? (
            <Button variant="secondary" size="sm" asChild>
              <Link href={routes.login}>Login</Link>
            </Button>
          ) : (
            <SignOutButton />
          )}
          <DarkMode />
        </div>
      </div>
    </header>
  );
};

export default HeaderDashboard;
