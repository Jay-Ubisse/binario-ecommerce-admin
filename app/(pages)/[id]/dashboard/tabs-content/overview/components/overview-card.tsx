import { Card } from "@/components/ui/card";

interface OverviewCardProps {
  subTitle: string;
  title: string;
  label: string;
  icon: React.ReactNode;
  className?: string;
}

export const OverviewCard = ({
  subTitle,
  title,
  label,
  icon,
  className,
}: OverviewCardProps) => {
  return (
    <Card className={`p-4 text-slate-800 ${className}`}>
      <div className="flex justify-between">
        <h3 className="text-base font-normal">{subTitle}</h3>
        {icon}
      </div>
      <h1 className="font-medium text-2xl mt-2">{title}</h1>
      <p className="text-xs font-light">{label}</p>
    </Card>
  );
};
