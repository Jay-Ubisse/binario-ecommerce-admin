import { authOption } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOption);

  if (session) {
    redirect(`/${session.user.id}/dashboard`);
  }

  return <main>Hello Nextjs</main>;
}
