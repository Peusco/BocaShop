"use client";

import { createContext, useContext, useState } from "react";
import { Product } from "../lib/definitions";
interface ProductContextType {
  data: Product[];
  setData: React.Dispatch<React.SetStateAction<Product[]>>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductWrapper({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<Product[]>([]);
  return (
    <ProductContext.Provider value={{ data, setData }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductWrapper");
  }
  return context;
}
