import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { authOption } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Overview } from "./tabs-content/overview";
import { Products } from "./tabs-content/products";
import { Users } from "./tabs-content/users";

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
        <TabsContent
          value="overview"
          className="2xl:min-h-[30rem] 2xl:max-h-[40rem]"
        >
          <Overview />
        </TabsContent>
        <TabsContent
          value="orders"
          className="2xl:min-h-[30rem] 2xl:max-h-[40rem]"
        >
          Pedidos
        </TabsContent>
        <TabsContent
          value="products"
          className="2xl:min-h-[30rem] 2xl:max-h-[40rem]"
        >
          <Products />
        </TabsContent>
        <TabsContent
          value="customers"
          className="2xl:min-h-[30rem] 2xl:max-h-[40rem]"
        >
          Clientes
        </TabsContent>
        <TabsContent
          value="users"
          className="2xl:min-h-[30rem] 2xl:max-h-[40rem]"
        >
          <Users />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
