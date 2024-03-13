"use client";

import React, { ReactNode, createContext, useContext, useState } from "react";

// Define the type of your context data
type ContextType = {
  filtersData: filtersDataProps;
  updateData: (data: filtersDataProps) => void;
};

// Create the context
const ProductsContext = createContext<ContextType | undefined>(undefined);

// Define the provider component
export const ContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [filtersData, setFiltersData] = useState<filtersDataProps>({
    filter: "all",
    value: "",
  });

  const updateData = (data: filtersDataProps) => {
    setFiltersData(data);
  };

  return (
    <ProductsContext.Provider value={{ filtersData, updateData }}>
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
