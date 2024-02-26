"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export const UserAccountButton = () => {
  return (
    <Button
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: "/",
        })
      }
      variant={"destructive"}
    >
      Sair
    </Button>
  );
};
