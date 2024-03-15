"use client";

import { AddProductForm } from "@/components/add-product-form";
import { UsersFilter } from "./users-filter";
import { UsersTable } from "./users-table";

export const Users = () => {
  return (
    <div>
      <div className="ml-auto w-fit">
        <AddProductForm />
      </div>
      <div className="flex mt-8">
        <div className="w-1/5">
          <UsersFilter />
        </div>
        <div className="w-4/5">
          <UsersTable />
        </div>
      </div>
    </div>
  );
};
