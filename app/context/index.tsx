"use client";

import { createContext, useContext, useState } from "react";
import { Product } from "../lib/definitions";
interface ProductContextType {
  data: Product[];
  setData: React.Dispatch<React.SetStateAction<Product[]>>;
}

const ProcuctContext = createContext<ProductContextType | undefined>(undefined);

export function ProductWrapper({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<Product[]>([]);
  return (
    <ProcuctContext.Provider value={{ data, setData }}>
      {children}
    </ProcuctContext.Provider>
  );
}

export function useProductContext() {
  const context = useContext(ProcuctContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductWrapper");
  }
  return context;
}
