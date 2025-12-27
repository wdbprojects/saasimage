"use client";

import { usePathname } from "next/navigation";
import { sidebarData } from "@/lib/data";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

const NavMain = () => {
  const currentPathname = usePathname();
  const { navMain } = sidebarData;

  return (
    <>
      {navMain.map((item) => {
        const { title, items } = item;
        return (
          <SidebarGroup key={title}>
            <SidebarGroupLabel>{title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((link) => {
                  const { id, name, url } = link;
                  return (
                    <SidebarMenuItem key={id}>
                      <SidebarMenuButton
                        asChild
                        isActive={currentPathname === url}
                      >
                        <Link href={url}>
                          <div className="flex items-center justify-start gap-2">
                            <link.icon className="size-3.5" />
                            <span>{name}</span>
                          </div>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        );
      })}
    </>
  );
};

export default NavMain;
