import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface RecentOrderCardProps {
  name: string;
  email: string;
  amount: string;
}

export const RecentOrderCard = ({
  name,
  email,
  amount,
}: RecentOrderCardProps) => {
  return (
    <div className="flex gap-6">
      <Avatar>
        <AvatarImage src="" />
        <AvatarFallback>JU</AvatarFallback>
      </Avatar>
      <div className="flex flex-1 justify-between">
        <div>
          <h4 className="text-sm font-normal">{name}</h4>
          <p className="text-xs font-light">{email}</p>
        </div>
        <div>
          <h3 className="text-base font-normal">{amount}</h3>
        </div>
      </div>
    </div>
  );
};
