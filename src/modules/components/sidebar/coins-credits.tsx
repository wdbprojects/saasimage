import { SidebarMenuSub } from "@/components/ui/sidebar";
import { Coins, Sparkles } from "lucide-react";

const CoinsCredits = () => {
  return (
    <SidebarMenuSub className="mt-2 flex flex-row items-center justify-center gap-1.5">
      <Coins className="h-4 w-4 text-yellow-500 transition-colors duration-200 group-hover:text-yellow-400" />

      <span className="text-foreground text-sm font-bold transition-colors duration-200">
        50
      </span>
      <span className="text-muted-foreground text-xs leading-tight">
        Coins left
      </span>
    </SidebarMenuSub>
  );
};

export default CoinsCredits;
