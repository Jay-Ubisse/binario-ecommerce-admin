import { SignUpForm } from "@/components/form/sign-up-form";
import { authOption } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SignUp = async () => {
  const session = await getServerSession(authOption);

  if (!session) {
    redirect("/");
  }

  if (session.user.role !== "admin") {
    redirect("/");
  }

  return (
    <div className="relative">
      <Link href="/" className="absolute -top-12">
        <Button>
          <ArrowLeft />
          <span>Voltar ao Dashboard</span>
        </Button>
      </Link>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
