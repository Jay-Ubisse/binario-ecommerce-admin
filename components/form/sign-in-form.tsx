"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";

interface Props {
  session: Session | null;
}

const formSchema = z.object({
  email: z.string().min(1, "O e-mail é obrigatório").email("Email inválido"),
  password: z
    .string()
    .min(1, "A palavra-passe é obrigatória")
    .min(8, "A palavra-passe deve ter 8 caracteres no mínimo")
    .max(16, "A palavra-passe deve der entre 8 a 16 caracteres"),
});

export const SignInForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    toast.loading("Carregando...", { id: "1" });
    signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    }).then((res) => {
      if (res?.error) {
        toast.error("Ocorreu um erro. Tente novamente.", { id: "1" });
        console.log(res);
        setLoading(false);
      } else {
        toast.success("Sessão iniciada com sucesso.", { id: "1" });
        router.push("/");
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="p-6 flex flex-col gap-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Palavra-Passe</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Digite a palavra-passe"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-fit ml-auto mt-4">
            <Button type="submit" disabled={loading}>
              Entrar
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
