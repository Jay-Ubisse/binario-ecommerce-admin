import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { authOption } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Overview } from "./tabs-content/overview";
import { Products } from "./tabs-content/products";

const Dashboard = async () => {
  const session = await getServerSession(authOption);

  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <section>
        <h1 className="text-slate-800 font-semibold text-3xl">Dashboard</h1>
      </section>
      <Tabs defaultValue="overview" className="w-full mt-5">
        <TabsList className="grid max-w-[40rem] grid-cols-5 flex-none  mb-4">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="orders">Pedidos</TabsTrigger>
          <TabsTrigger value="products">Produtos</TabsTrigger>
          <TabsTrigger value="customers">Clientes</TabsTrigger>
          <TabsTrigger value="users">Usuarios</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="min-h-[30rem] max-h-[40rem]">
          <Overview />
        </TabsContent>
        <TabsContent value="orders" className="min-h-[30rem] max-h-[40rem]">
          <div className="min-h-[30rem] max-h-[40rem]">Pedidos</div>
        </TabsContent>
        <TabsContent value="products" className="min-h-[30rem] max-h-[40rem]">
          <Products />
        </TabsContent>
        <TabsContent value="customers" className="min-h-[30rem] max-h-[40rem]">
          <div className="min-h-[30rem] max-h-[40rem] p-4">Clientes</div>
        </TabsContent>
        <TabsContent value="users" className="min-h-[30rem] max-h-[40rem]">
          <div className="min-h-[30rem] max-h-[40rem] p-4">Usuarios</div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
