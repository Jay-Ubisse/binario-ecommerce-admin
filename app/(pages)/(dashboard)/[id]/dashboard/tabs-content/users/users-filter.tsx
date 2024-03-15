"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProductsContext } from "@/contexts/products-context";

const FormSchema = z.object({
  filter: z.string({
    required_error: "Selecione um Filtro",
  }),
  value: z.string().optional(),
});

export function UsersFilter() {
  const { updateData } = useProductsContext();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    updateData(data);
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-4/5 space-y-2">
        <FormField
          control={form.control}
          name="filter"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Filtrar Por</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o filtro" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="id">ID</SelectItem>
                  <SelectItem value="name">Nome</SelectItem>
                  <SelectItem value="category">Categoria</SelectItem>
                  <SelectItem value="quantityInStock">
                    Quantidade em stock
                  </SelectItem>
                  <SelectItem value="quantitySold">
                    Quantidade vendida
                  </SelectItem>
                  <SelectItem value="createdAt">Data de catastro</SelectItem>
                  <SelectItem value="updatedAt">Ultima actualizacao</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="value"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Filtrar</Button>
      </form>
    </Form>
  );
}
