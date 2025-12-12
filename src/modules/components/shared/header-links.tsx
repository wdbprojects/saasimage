"use client";

import { buttonVariants } from "@/components/ui/button";
import { routes } from "@/config/routes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderLinks = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-center gap-2">
      <Link
        href={routes.home}
        className={cn(
          buttonVariants({ size: "sm", variant: "outline" }),
          pathname === routes.home && "coursor-default",
        )}
      >
        Features
      </Link>
      <Link
        href={routes.about}
        className={cn(
          buttonVariants({ size: "sm", variant: "outline" }),
          pathname === routes.about && "coursor-default",
        )}
      >
        Pricing
      </Link>
      <Link
        href={routes.about}
        className={cn(
          buttonVariants({ size: "sm", variant: "outline" }),
          pathname === routes.about && "coursor-default",
        )}
      >
        Reviews
      </Link>
      <Link
        href={routes.dashboard}
        className={cn(
          buttonVariants({ size: "sm", variant: "outline" }),
          pathname === routes.dashboard && "coursor-default",
        )}
      >
        Dashboard
      </Link>
    </div>
  );
};

export default HeaderLinks;
