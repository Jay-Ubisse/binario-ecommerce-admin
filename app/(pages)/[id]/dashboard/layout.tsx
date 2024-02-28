"use client";

import { Header } from "@/components/header";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashbordLayout = ({ children }: DashboardLayoutProps) => {
  const router = useRouter();
  const { data: session } = useSession();

  if (!session) {
    router.push("/");
  }
  return (
    <div className="h-screen flex flex-col">
      <div className="border-b border-slate-200">
        <Header />
      </div>
      <section className="px-6 py-4 flex-1">{children}</section>
    </div>
  );
};

export default DashbordLayout;
