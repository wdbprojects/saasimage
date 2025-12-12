import { LayoutPropsMain } from "@/config/types";
import HeaderMain from "@/modules/components/layout/header-main";

const HomeLayout = ({ children }: LayoutPropsMain) => {
  return (
    <div>
      <HeaderMain />
      <main className="container mx-auto block h-screen w-full pt-16">
        {children}
      </main>
    </div>
  );
};

export default HomeLayout;
