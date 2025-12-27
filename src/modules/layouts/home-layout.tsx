import { LayoutPropsMain } from "@/config/types";
import HeaderMain from "@/modules/components/layout/header-main";

const HomeLayout = ({ children }: LayoutPropsMain) => {
  return (
    <>
      <HeaderMain />
      <main className="container mx-auto block h-screen w-full pt-16">
        {children}
      </main>
    </>
  );
};

export default HomeLayout;
