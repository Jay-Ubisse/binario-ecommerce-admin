"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  return (
    <div>
      <section>
        <h1 className="text-slate-800 font-semibold text-3xl">Dashboard</h1>
      </section>
      <Tabs defaultValue="overview" className="w-full mt-5">
        <TabsList className="grid max-w-[40rem] grid-cols-5">
          <TabsTrigger value="overview" className="!px-2">
            Visão Geral
          </TabsTrigger>
          <TabsTrigger value="orders">Pedidos</TabsTrigger>
          <TabsTrigger value="products">Produtos</TabsTrigger>
          <TabsTrigger value="customers">Clientes</TabsTrigger>
          <TabsTrigger value="users">Usuarios</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card className="min-h-[500px]">Visão Geral</Card>
        </TabsContent>
        <TabsContent value="orders">
          <Card className="min-h-[500px]">Pedidos</Card>
        </TabsContent>
        <TabsContent value="products">
          <Card className="min-h-[500px]">Produtos</Card>
        </TabsContent>
        <TabsContent value="customers">
          <Card className="min-h-[500px]">Clientes</Card>
        </TabsContent>
        <TabsContent value="users">
          <Card className="min-h-[500px]">Usuarios</Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
