import { User } from "@/components/user";
import { UserAccountButton } from "@/components/user-account-button";
import { authOption } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await getServerSession(authOption);

  if (!session?.user) {
    redirect("/");
  }

  return (
    <>
      <div>
        Bem vindoo {`${session?.user.firstName} ${session?.user.lastName}`}.
      </div>
      <UserAccountButton />
      <User />
    </>
  );
};

export default Dashboard;
