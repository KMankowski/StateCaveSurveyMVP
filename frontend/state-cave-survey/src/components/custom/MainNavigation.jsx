import { NavLink, useMatch } from "react-router";
import { Bell, FileText, Layers, Users } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { to: "/caves", label: "Caves", icon: Layers },
  { to: "/trips", label: "Trips", icon: FileText },
  { to: "/people", label: "People", icon: Users },
];

// Placeholder data until there's a logged-in user
const CURRENT_USER = { name: "Kevin Mankowski", initials: "KM" };
const NOTIFICATION_COUNT = 2;

function NavItem({ to, label, icon: Icon }) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        active={Boolean(useMatch({ path: to, end: false }))}
        render={<NavLink to={to} />}
        className="border border-transparent px-3 py-1.5 font-medium text-muted-foreground hover:text-foreground data-active:border-emerald-500/30 data-active:bg-emerald-500/10 data-active:text-emerald-400 data-active:hover:bg-emerald-500/15"
      >
        <Icon />
        {label}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

export default function MainNavigation({ className }) {
  return (
    <div className={cn("flex h-16 items-center gap-6", className)}>
      <NavigationMenu>
        <NavigationMenuList className="gap-1">
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.to} {...item} />
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="ml-auto flex items-center gap-4">
        <Button
          variant="outline"
          size="icon-lg"
          aria-label={`Notifications (${NOTIFICATION_COUNT} unread)`}
          className="relative text-muted-foreground"
        >
          <Bell />
          {NOTIFICATION_COUNT > 0 && (
            <Badge className="absolute -top-2 -right-2 h-4 min-w-4 bg-emerald-500 px-1 text-[10px] text-emerald-950">
              {NOTIFICATION_COUNT}
            </Badge>
          )}
        </Button>

        <Separator
          orientation="vertical"
          className="data-vertical:h-6 data-vertical:self-center"
        />

        <Button
          variant="outline"
          className="h-auto gap-2 rounded-full py-1 pr-3 pl-1"
        >
          <Avatar size="sm" className="size-7">
            <AvatarFallback className="text-xs">
              {CURRENT_USER.initials}
            </AvatarFallback>
          </Avatar>
          {CURRENT_USER.name}
        </Button>
      </div>
    </div>
  );
}
