// components/client-sidebar.tsx
"use client";

import { usePathname } from "next/navigation";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function ClientSidebar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hiddenSidebarRoutes = ["/", "/signin", "/signout", "/signup"];
  const showSidebar = !hiddenSidebarRoutes.includes(pathname);

  return (
    <>
      {showSidebar && <AppSidebar />}
      {showSidebar && <SidebarTrigger />}
      {children}
    </>
  );
}
