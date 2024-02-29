"use client";

import { BarChart } from "@/components/bar-chart";
import { Card } from "@/components/ui/card";
import { barChartData } from "@/data/bar-chart";
import { Activity, DollarSign, ShoppingCart, Users } from "lucide-react";
import { OverviewCard } from "./components/overview-card";

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
      <div className="mt-5">
        <Card className="w-[65%] h-[25rem]">
          <BarChart data={barChartData} />
        </Card>
      </div>
    </div>
  );
};
