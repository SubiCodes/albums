import { User, Home, SunMoon, LogOut } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useUser } from "@stackframe/stack";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/home",
    icon: Home,
  },
  {
    title: "Profile",
    url: "#",
    icon: User,
  },
]

export function AppSidebar() {

  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const user = useUser();

  const handleLogout = async () => {
    try {
      await user?.signOut();
      router.replace('/');
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const handleChangeTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };  

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-pink-400 italic font-bold text-2xl mb-4">
            Albums
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <button
                    onClick={handleChangeTheme}
                    className="flex items-center gap-2 w-full text-left"
                  >
                    <SunMoon />
                    <span>Change Theme</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* Logout button */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 w-full text-left"
                  >
                    <LogOut />
                    <span>Logout</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
