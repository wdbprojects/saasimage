import DarkMode from "@/components/shared/dark-mode";
import { Button, buttonVariants } from "@/components/ui/button";
import { routes } from "@/config/routes";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="p-4">
      <h1>About Page</h1>
      <Button>Testing ShadCN</Button>
      <Link
        href={routes.home}
        className={buttonVariants({ size: "sm", variant: "outline" })}
      >
        Home
      </Link>
      <Link
        href={routes.dashboard}
        className={buttonVariants({ size: "sm", variant: "outline" })}
      >
        Dashboard
      </Link>
    </div>
  );
};

export default AboutPage;
