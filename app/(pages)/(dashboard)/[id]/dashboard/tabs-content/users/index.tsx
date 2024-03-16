"use client";

import { UsersContextProvider } from "@/contexts/users-context";
import { UsersFilter } from "./users-filter";
import { UsersTable } from "./users-table";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useSession } from "next-auth/react";

export const Users = () => {
  const { data } = useSession();

  return (
    <UsersContextProvider>
      <div className="ml-auto w-fit">
        <Link
          href={`/sign-up/${data?.user.id}`}
          className={`${data?.user.role === "admin" ? "block" : "hidden"}`}
        >
          <Button className="flex gap-1">
            <span>
              <PlusCircle className="h-5 w-5" />
            </span>
            <span>Novo Usuário</span>
          </Button>
        </Link>
      </div>
      <div className="flex mt-8">
        <div className="w-1/5">
          <UsersFilter />
        </div>
        <div className="w-4/5">
          <UsersTable />
        </div>
      </div>
    </UsersContextProvider>
  );
};
