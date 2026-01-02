"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Crown, Sparkles } from "lucide-react";
import CoinsCredits from "@/modules/components/sidebar/coins-credit";
import { authClient } from "@/lib/auth-client";

const Upgrade = ({ coins }: { coins: number | null | undefined }) => {
  const upgrade = async () => {
    await authClient.checkout({
      products: [
        "f13b7b8d-bb80-4ccd-9c94-5a730f2ca47c",
        "0bd2a4d5-9538-4a09-bf79-47c996bdfa71",
        "70b44651-fdae-4087-b799-496bccbe0ade",
      ],
    });
  };

  return (
    <SidebarGroup className="mt-auto">
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="default"
              tooltip="Buy Coins"
              className="relative w-full p-0!"
              onClick={upgrade}
            >
              <div className="flex h-full w-full cursor-pointer items-center justify-around gap-2 overflow-hidden border-orange-400/50 bg-linear-to-r from-orange-400/10 to-pink-500/10 text-orange-400 transition-all duration-300 hover:border-orange-500/70 hover:bg-linear-to-r hover:from-orange-500 hover:to-pink-600 hover:text-white hover:shadow-lg hover:shadow-orange-500/25 hover:[&>.crown]:rotate-12 hover:[&>.crown]:duration-300 hover:[&>.effect]:opacity-100 hover:[&>.sparkles]:rotate-24 hover:[&>.sparkles]:opacity-100">
                <Crown className="crown size-4 transition-transform duration-300" />
                <span>Buy Coins</span>
                <Sparkles className="sparkles size-3 opacity-100 transition-transform duration-300" />
                <div className="effect absolute inset-0 rounded-md bg-linear-to-r from-orange-400/20 to-pink-500/20 opacity-0 transition-opacity duration-300" />
              </div>
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
