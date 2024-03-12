"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Info } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useProductsContext } from "@/contexts/products-context";

interface Data {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  updatedAt: string;
  createdAt: string;
  category: string;
  quantityInStock: number;
  quantitySold: number;
}
export function ProductsTable() {
  const { data } = useProductsContext();
  const [rows = [], setRows] = useState<Data[]>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/product");
        console.log(response.data);
        setRows(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [data]);
  return (
    <Table>
      <h1>
        {data.filter}, {data.value}
      </h1>
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
          <TableHead>Ultima actualizacao</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row: Data) => (
          <TableRow key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell className="text-center">{row.name}</TableCell>
            <TableCell className="text-center">{row.category}</TableCell>
            <TableCell className="text-center">{row.price}</TableCell>
            <TableCell className="text-center">{row.quantityInStock}</TableCell>
            <TableCell className="text-center">{row.quantitySold}</TableCell>
            <TableCell className="text-center">
              {format(row.createdAt, "MM/dd/yyyy")}
            </TableCell>
            <TableCell className="text-center">
              {format(row.updatedAt, "MM/dd/yyyy")}
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
