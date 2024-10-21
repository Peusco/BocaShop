"use client";

import { createContext, useContext, useState } from "react";
import { Product } from "../lib/definitions";
interface dataType {
  data: Product;
  size: string;
}

interface CartContextType {
  dataCart: dataType[];
  addToCart: (product: Product, size: string) => void;

  removeFromCart: (product: Product, size: string) => void;
  restQuantity: (product: Product) => void;
}

const cartContext = createContext<CartContextType | undefined>(undefined);

export function CartWrapper({ children }: { children: React.ReactNode }) {
  const [dataCart, setDataCart] = useState<dataType[]>([]);

  const addToCart = (product: Product, size: string) => {
    const productInCartIndex = dataCart.findIndex(
      (item) => item.data.id === product.id && item.size === size
    );
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(dataCart);
      newCart[productInCartIndex].data.quantity += 1;
      return setDataCart(newCart);
    }

    setDataCart((prevState) => [...prevState, { data: product, size }]);
  };

  const removeFromCart = (product: Product, size: string) => {
    setDataCart((prevDataCart) =>
      prevDataCart.filter(
        (item) => !(item.data.id === product.id && item.size === size)
      )
    );
  };

  const restQuantity = (product: Product) => {
    if (product.quantity == 1) return;
    const productInCartIndex = dataCart.findIndex(
      (item) => item.data.id === product.id
    );
    const newCart = structuredClone(dataCart);
    newCart[productInCartIndex].data.quantity -= 1;

    return setDataCart(newCart);
  };

  return (
    <cartContext.Provider
      value={{ dataCart, addToCart, removeFromCart, restQuantity }}
    >
      {children}
    </cartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(cartContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductWrapper");
  }
  return context;
}
