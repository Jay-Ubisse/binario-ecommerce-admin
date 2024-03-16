"use client";

import { ProductsContextProvider } from "@/contexts/products-context";
import { AddProductForm } from "@/components/add-product-form";
import { ProductsFilter } from "./products-filter";
import { ProductsTable } from "./products-table";

export const Products = () => {
  return (
    <ProductsContextProvider>
      <div className="ml-auto w-fit">
        <AddProductForm />
      </div>
      <div className="flex mt-8">
        <div className="w-1/5">
          <ProductsFilter />
        </div>
        <div className="w-4/5">
          <ProductsTable />
        </div>
      </div>
    </ProductsContextProvider>
  );
};
