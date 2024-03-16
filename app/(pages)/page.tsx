import { authOption } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOption);

  if (session) {
    redirect(`/${session.user.id}/dashboard`);
  } else {
    return (
      <main className="h-screen w-screen bg-gradient-to-tr from-primary to-secondary flex justify-center items-center">
        <div className="bg-gradient-to-tr from-primary/20 to-secondary/20 shadow rounded-lg text-center p-4 py-8 text-white min-w-[30%] max-w-[40%]">
          <h1 className="text-4xl mb-8">Bem-Vindo(a) de volta!</h1>
          <p className="font-light mb-10">
            Este é o lado administrativo do Ecommerce e é apenas restrito a
            usuários com permissão.
          </p>
          <div>
            <Link
              href={"/sign-in"}
              className="bg-white rounded-lg px-4 py-2 text-primary hover:bg-white/80"
            >
              Iniciar Sessão
            </Link>
          </div>
        </div>
      </main>
    );
  }
}
