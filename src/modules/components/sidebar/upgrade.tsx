import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { routes } from "@/config/routes";
import { Crown, Sparkles } from "lucide-react";
import Link from "next/link";
import CoinsCredits from "@/modules/components/sidebar/coins-credits";

const Upgrade = ({ coins }: { coins: number | null | undefined }) => {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              size="sm"
              tooltip="Buy Coins"
              className="relative w-full"
            >
              <Link
                href={routes.home}
                className="flex h-auto w-full items-center justify-around gap-2 overflow-hidden border-orange-400/50 bg-linear-to-r from-orange-400/10 to-pink-500/10 text-orange-400 transition-all duration-300 hover:border-orange-500/70 hover:bg-linear-to-r hover:from-orange-500 hover:to-pink-600 hover:text-white hover:shadow-lg hover:shadow-orange-500/25 hover:[&>.crown]:rotate-12 hover:[&>.crown]:duration-300 hover:[&>.effect]:opacity-100 hover:[&>.sparkles]:rotate-24 hover:[&>.sparkles]:opacity-100"
              >
                <Crown className="crown size-4 transition-transform duration-300" />
                <span>Buy Coins</span>
                <Sparkles className="sparkles size-3 opacity-100 transition-transform duration-300" />
                <div className="effect absolute inset-0 rounded-md bg-linear-to-r from-orange-400/20 to-pink-500/20 opacity-0 transition-opacity duration-300" />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <CoinsCredits coins={coins} />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default Upgrade;
