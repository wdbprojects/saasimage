"use client";

import { buttonVariants } from "@/components/ui/button";
import { routes } from "@/config/routes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderLinks = () => {
  const currentPathname = usePathname();

  return (
    <div className="flex items-center justify-center gap-2">
      <Link
        href={routes.home}
        className={cn(
          buttonVariants({ size: "sm", variant: "outline" }),
          currentPathname === routes.home &&
            "coursor-default! bg-background! hover:bg-background! hover:text-foreground! hover:cursor-default!",
        )}
      >
        Home
      </Link>
      <Link
        href={routes.about}
        className={cn(
          buttonVariants({ size: "sm", variant: "outline" }),
          currentPathname === routes.about &&
            "coursor-default! bg-background! hover:bg-background! hover:text-foreground! hover:cursor-default!",
        )}
      >
        Pricing
      </Link>
      <Link
        href={routes.about}
        className={cn(
          buttonVariants({ size: "sm", variant: "outline" }),
          currentPathname === routes.about &&
            "coursor-default! bg-background! hover:bg-background! hover:text-foreground! hover:cursor-default!",
        )}
      >
        About
      </Link>
      <Link
        href={routes.dashboardMain}
        className={cn(
          buttonVariants({ size: "sm", variant: "outline" }),
          currentPathname === routes.dashboardMain &&
            "coursor-default! bg-background! hover:bg-background! hover:text-foreground! hover:cursor-default!",
        )}
      >
        Dashboard
      </Link>
    </div>
  );
};

export default HeaderLinks;
