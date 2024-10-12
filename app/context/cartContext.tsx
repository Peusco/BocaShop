"use client";

import { createContext, useContext, useState } from "react";
import { Product } from "../lib/definitions";

interface CartContextType {
  dataCart: Product[];
  addToCart: (product: Product) => void;
  clearCart: () => void;
  removeFromCart: (product: Product) => void;
  restQuantity: (product: Product) => void;
}

const cartContext = createContext<CartContextType | undefined>(undefined);

export function CartWrapper({ children }: { children: React.ReactNode }) {
  const [dataCart, setDataCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    console.log(product.quantity);
    const productInCartIndex = dataCart.findIndex(
      (item) => item.id === product.id
    );
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(dataCart);
      newCart[productInCartIndex].quantity += 1;
      console.log("no deberia pasar por aca");
      return setDataCart(newCart);
    }

    setDataCart((prevState) => [...prevState, product]);
  };

  const clearCart = () => {
    setDataCart([]);
  };

  const removeFromCart = (product: Product) => {
    return setDataCart((prevState) =>
      prevState.filter((item) => item.id != product.id)
    );
  };

  const restQuantity = (product: Product) => {
    if (product.quantity == 1) return;
    const productInCartIndex = dataCart.findIndex(
      (item) => item.id === product.id
    );
    const newCart = structuredClone(dataCart);
    newCart[productInCartIndex].quantity -= 1;
    console.log("no deberia pasar por aca");
    return setDataCart(newCart);
  };

  return (
    <cartContext.Provider
      value={{ dataCart, addToCart, clearCart, removeFromCart, restQuantity }}
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
