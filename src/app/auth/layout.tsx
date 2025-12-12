import { routes } from "@/config/routes";
import { LayoutPropsMain } from "@/config/types";
import { requireUnauth } from "@/lib/auth-utils";

const AuthLayoutMain = async ({ children }: LayoutPropsMain) => {
  // await requireUnauth("home");
  return <div>{children}</div>;
};

export default AuthLayoutMain;
