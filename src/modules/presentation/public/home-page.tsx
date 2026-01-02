import { Button, buttonVariants } from "@/components/ui/button";
import { routes } from "@/config/routes";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="p-4">
      <h1>Welcome love and abundance</h1>
      <Button>Testing ShadCN</Button>

      <Link
        href={routes.about}
        className={buttonVariants({ size: "sm", variant: "outline" })}
      >
        About Us
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

export default HomePage;
