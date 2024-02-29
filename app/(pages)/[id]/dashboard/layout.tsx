"use client";

import { Header } from "@/components/header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashbordLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="h-screen flex justify-center">
      <div className="min-h-[40rem] max-h-[50rem] min-w-[1280px] max-w-[1400px] flex flex-col shadow-lg">
        <div className="border-b border-slate-200">
          <Header />
        </div>
        <section className="px-6 py-4 flex-1">{children}</section>
      </div>
    </div>
  );
};

export default DashbordLayout;
