import DarkMode from "@/components/shared/dark-mode";
import SidebarTriggerCustom from "@/modules/components/misc/sidebar-trigger-custom";
import Link from "next/link";
import { routes } from "@/config/routes";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import SignOutButton from "../auth/sign-out-button";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LogIn } from "lucide-react";
import AppLogo from "@/components/shared/app-logo";

const HeaderDashboard = async () => {
  const session = await auth.api.getSession({ headers: await headers() });

  return (
    <header className="bg-background fixed top-0 right-0 z-50 h-auto w-full border-b px-2 py-2">
      <div className="container mx-auto flex w-full items-center justify-between gap-1 sm:gap-2">
        {/* // MENU & LOGO  & NAV LINKS */}
        <AppLogo />
        {/* // AUTH & BUTTONS */}
        <div className="flex shrink-0 items-center gap-4 p-1">
          <DarkMode />
          {!session ? (
            <Link
              href={routes.login}
              className={buttonVariants({
                size: "sm",
                variant: "secondary",
                className: "flex items-center justify-center gap-2",
              })}
            >
              <LogIn className="size-3.5" />
              <span>Login</span>
            </Link>
          ) : (
            <SignOutButton />
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderDashboard;
