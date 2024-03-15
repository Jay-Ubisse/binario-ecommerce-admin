"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useProductsContext } from "@/contexts/products-context";
import { getUsers } from "@/services/users";
import { format } from "date-fns";
import { Info } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useQuery } from "react-query";

export function UsersTable() {
  const { filtersData } = useProductsContext();

  useEffect(() => {
    refetch();
  }, [filtersData]);

  const {
    isLoading,
    error,
    data: usersData,
    refetch,
  } = useQuery("products", () => getUsers(filtersData));

  if (isLoading)
    return (
      <div className="flex justify-between items-center px-4 py-2">
        <p>A carregar...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-between items-center bg-red-200 px-4 py-2">
        <p>Ocorreu um erro</p>
        <Button
          variant={"outline"}
          size={"sm"}
          onClick={refetch as unknown as () => void}
        >
          Recarregar
        </Button>
      </div>
    );

  if (!usersData || usersData.length == 0 || usersData.length < 0)
    return (
      <div className="flex justify-between items-center bg-yellow-200 px-4 py-2">
        <p>Nenhum produto encontrado</p>
        <Button
          variant={"outline"}
          size={"sm"}
          onClick={refetch as unknown as () => void}
        >
          Recarregar
        </Button>
      </div>
    );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Apelido</TableHead>
          <TableHead>Permissão</TableHead>
          <TableHead>Última vez online</TableHead>
          <TableHead>Data de registro</TableHead>
          <TableHead>Ultima actualizacao</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {usersData.map((userData, index) => (
          <TableRow key={index}>
            <TableCell>{userData.id}</TableCell>
            <TableCell className="text-center">{userData.firstName}</TableCell>
            <TableCell className="text-center">{userData.lastName}</TableCell>
            <TableCell className="text-center">{userData.role}</TableCell>
            <TableCell className="text-center">
              {format(userData.createdAt, "MM/dd/yyyy")}
            </TableCell>
            <TableCell className="text-center">
              {format(userData.updatedAt, "MM/dd/yyyy")}
            </TableCell>
            <TableCell className="text-center">
              <Link href={"#"}>
                <Button size={"sm"} className="flex gap-2">
                  <Info size={20} />
                  <span>Ver detalhas</span>
                </Button>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
