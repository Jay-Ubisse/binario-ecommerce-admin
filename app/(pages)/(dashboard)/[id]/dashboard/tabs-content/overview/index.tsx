"use client";

import { BarChart } from "@/components/bar-chart";
import { Card } from "@/components/ui/card";
import { barChartData } from "@/data/bar-chart";
import { Activity, DollarSign, ShoppingCart, Users } from "lucide-react";
import { OverviewCard } from "./components/overview-card";
import { RecentOrderCard } from "./components/recent-order-card";

export const Overview = () => {
  return (
    <div>
      <div className="flex justify-between">
        <OverviewCard
          label="+20.1% em relação ao mês passado"
          subTitle="Rendimento Total"
          title="45,345.87 MT"
          icon={<DollarSign size={16} />}
          className="w-[24%]"
        />
        <OverviewCard
          label="+34.7% em relação ao mês passado"
          subTitle="Vendas"
          title="345"
          icon={<ShoppingCart size={16} />}
          className="w-[24%]"
        />
        <OverviewCard
          label="+7.1% em relação ao mês passado"
          subTitle="Clientes"
          title="245"
          icon={<Users size={16} />}
          className="w-[24%]"
        />
        <OverviewCard
          label="+21 desde a última hora"
          subTitle="Activos Agora"
          title="54"
          icon={<Activity size={16} />}
          className="w-[24%]"
        />
      </div>
      <div className="mt-5 flex justify-between">
        <Card className="w-[64%] lg:h-[20rem] 2xl:h-[26rem]">
          <BarChart data={barChartData} />
        </Card>
        <Card className="w-[34%] lg:h-[20rem] 2xl:h-[26rem] overflow-y-scroll p-4 text-slate-800">
          <h3 className="text-base font-normal">Últimos Pedidos</h3>
          <p className="text-xs font-light">
            Foram feitas 345 vendas este mês.
          </p>
          <div className="mt-8 flex flex-col gap-4">
            <RecentOrderCard
              name="Joaquim Ubisse"
              email="ubissejoaquim@mail.com"
              amount="2,540.98 MT"
            />
            <RecentOrderCard
              name="Joaquim Ubisse"
              email="ubissejoaquim@mail.com"
              amount="2,540.98 MT"
            />
            <RecentOrderCard
              name="Joaquim Ubisse"
              email="ubissejoaquim@mail.com"
              amount="2,540.98 MT"
            />
            <RecentOrderCard
              name="Joaquim Ubisse"
              email="ubissejoaquim@mail.com"
              amount="2,540.98 MT"
            />
            <RecentOrderCard
              name="Joaquim Ubisse"
              email="ubissejoaquim@mail.com"
              amount="2,540.98 MT"
            />
            <RecentOrderCard
              name="Joaquim Ubisse"
              email="ubissejoaquim@mail.com"
              amount="2,540.98 MT"
            />
            <RecentOrderCard
              name="Joaquim Ubisse"
              email="ubissejoaquim@mail.com"
              amount="2,540.98 MT"
            />
            <RecentOrderCard
              name="Joaquim Ubisse"
              email="ubissejoaquim@mail.com"
              amount="2,540.98 MT"
            />
          </div>
        </Card>
      </div>
    </div>
  );
};
