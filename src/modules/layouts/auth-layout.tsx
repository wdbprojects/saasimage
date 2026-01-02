import Link from "next/link";
import { LayoutPropsMain } from "@/config/types";
import { routes } from "@/config/routes";
import DarkMode from "@/components/shared/dark-mode";
import { buttonVariants } from "@/components/ui/button";
import { ArrowBigLeft } from "lucide-react";

const AuthLayout = ({ children }: LayoutPropsMain) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-row items-center justify-between">
        <Link
          href={routes.home}
          className={buttonVariants({
            size: "sm",
            variant: "outline",
            className: "absolute top-4 left-4 text-xs",
          })}
        >
          <ArrowBigLeft className="size-3" />
          <span>Home</span>
        </Link>
        <DarkMode className="absolute top-5 right-4" />
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
