"use client";

import { Icons } from "@/components/loading-spinner";
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
import { getProducts } from "@/services/products";
import { format } from "date-fns";
import { Info, RefreshCw } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";
import { useQuery } from "react-query";

export function ProductsTable() {
  const { data } = useSession();

  const { filtersData } = useProductsContext();

  useEffect(() => {
    refetch();
  }, [filtersData]);

  const {
    isLoading,
    error,
    data: productsData,
    refetch,
  } = useQuery("products", () => getProducts(filtersData));

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

  if (!productsData || productsData.length == 0 || productsData.length < 0)
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
            <TableHead>Categoria</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantidade em stock</TableHead>
            <TableHead>Quantidade vendida</TableHead>
            <TableHead>Data de registro</TableHead>
            <TableHead>Ultima actualizacao</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {productsData.map((productData) => (
            <TableRow key={productData.id}>
              <TableCell>{productData.id}</TableCell>
              <TableCell className="text-center">{productData.name}</TableCell>
              <TableCell className="text-center">
                {productData.category}
              </TableCell>
              <TableCell className="text-center">{productData.price}</TableCell>
              <TableCell className="text-center">
                {productData.quantityInStock}
              </TableCell>
              <TableCell className="text-center">
                {productData.quantitySold}
              </TableCell>
              <TableCell className="text-center">
                {format(productData.createdAt, "MM/dd/yyyy")}
              </TableCell>
              <TableCell className="text-center">
                {format(productData.updatedAt, "MM/dd/yyyy")}
              </TableCell>
              <TableCell className="flex gap-2 items-center">
                <Link href={"#"}>
                  <Button size={"sm"} className="flex gap-2 bg-green-500">
                    <Info size={20} />
                    <span>Ver detalhas</span>
                  </Button>
                </Link>
                <Link
                  href={"#"}
                  className={`${
                    data?.user.role === "admin" ? "flex" : "hidden"
                  }`}
                >
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
