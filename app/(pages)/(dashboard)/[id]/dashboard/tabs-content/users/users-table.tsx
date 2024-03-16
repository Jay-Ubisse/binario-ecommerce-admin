"use client";

import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useUsersContext } from "@/contexts/users-context";
import { getUsers } from "@/services/users";
import { format } from "date-fns";
import { Info, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { Icons } from "@/components/loading-spinner";

export function UsersTable() {
  const { data } = useSession();

  const { filtersData } = useUsersContext();

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
      <div className="flex justify-between items-center px-4 py-2 w-full h-full">
        <Icons.spinner className="h-6 w-6 ml-[45%] animate-spin text-primary" />
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

  function getRole(role: String): string {
    let roleName: string;

    switch (role) {
      case "admin":
        roleName = "Administrador";
        break;
      case "manager":
        roleName = "Gestor";
        break;
      case "seller":
        roleName = "Vendedor";
        break;
      default:
        roleName = "";
        break;
    }

    return roleName;
  }

  return (
    <>
      <Button size={"sm"} className="flex gap-2 mb-6">
        <RefreshCw size={18} />
        <span>Actualizar</span>
      </Button>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Apelido</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Função</TableHead>
            <TableHead>Data de registro</TableHead>
            <TableHead
              className={`${data?.user.role === "admin" ? "block" : "hidden"}`}
            ></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {usersData.map((userData, index) => (
            <TableRow key={index}>
              <TableCell className="line-clamp-1">{userData.id}</TableCell>
              <TableCell>{userData.firstName}</TableCell>
              <TableCell>{userData.lastName}</TableCell>
              <TableCell>{userData.email}</TableCell>
              <TableCell>{getRole(userData.role)}</TableCell>
              <TableCell>{format(userData.updatedAt, "MM/dd/yyyy")}</TableCell>
              <TableCell
                className={`${
                  data?.user.role === "admin"
                    ? "flex gap-2 items-center"
                    : "hidden"
                }`}
              >
                <Link href={"#"}>
                  <Button size={"sm"} className="flex gap-2 bg-green-500">
                    <Info size={20} />
                    <span>Editar</span>
                  </Button>
                </Link>
                <Link href={"#"}>
                  <Button size={"sm"} className="flex gap-2 bg-red-500">
                    <Info size={20} />
                    <span>Eliminar</span>
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
