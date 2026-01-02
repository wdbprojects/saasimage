import { SidebarMenuSub } from "@/components/ui/sidebar";
import { Coins } from "lucide-react";

const CoinsCredits = ({ coins }: { coins: number | null | undefined }) => {
  return (
    <SidebarMenuSub className="mx-0 mt-2 flex w-full flex-row items-center justify-center gap-1.5 border-none">
      <Coins className="h-4 w-4 text-yellow-500 transition-colors duration-200 group-hover:text-yellow-400" />
      <span className="text-foreground text-sm font-bold transition-colors duration-200">
        {coins}
      </span>
      <span className="text-muted-foreground text-xs leading-tight">
        coins left
      </span>
    </SidebarMenuSub>
  );
};

export default CoinsCredits;
