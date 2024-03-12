"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type of your context data
interface DataProps {
  filter: string;
  value: string;
}
type ContextType = {
  data: DataProps;
  updateData: (data: DataProps) => void;
};

// Create the context
const ProductsContext = createContext<ContextType | undefined>(undefined);

// Define the provider component
export const ContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<DataProps>({
    filter: "",
    value: "",
  });

  const updateData = (data: DataProps) => {
    setData(data);
  };

  return (
    <ProductsContext.Provider value={{ data, updateData }}>
      {children}
    </ProductsContext.Provider>
  );
};

// Custom hook to consume the context
export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};
