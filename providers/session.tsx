"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

interface SessionProviderProps {
  children: React.ReactNode;
}

export const Session = ({ children }: SessionProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
