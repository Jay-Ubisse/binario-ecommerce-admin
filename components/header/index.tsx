"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import { Input } from "../ui/input";
import { DropdownMenuComponent } from "./dropdown-menu-component";
import { NavigationMenuComponent } from "./navigation-menu-component";

export const Header = () => {
  const { data: session } = useSession();
  return (
    <header className="p-4 flex justify-between items-center">
      <div className="flex gap-8 items-center">
        <div className="flex gap-2 items-center">
          <Avatar>
            <AvatarImage src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className="text-slate-800 font-medium text-xl">{`${session?.user.firstName} ${session?.user.lastName}`}</h1>
        </div>
        <NavigationMenuComponent />
      </div>
      <div className="flex gap-4 items-center">
        <Input type="email" placeholder="Pesquisar" />
        <DropdownMenuComponent />
      </div>
    </header>
  );
};
