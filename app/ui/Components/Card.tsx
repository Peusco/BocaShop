"use client";

import { useCartContext } from "@/app/context/cartContext";
import { Product } from "@/app/lib/definitions";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
interface Props {
  product: Product;
}

export const Card: React.FC<Props> = ({ product }) => {
  const { addToCart } = useCartContext();
  const router = useRouter();
  const [focusSize, setFocusSize] = useState<string>("");
  const src = product.img[0].split(",");
  const size = product.size[0].split(",");

  const handleClick = (product: Product) => {
    router.push(`/products/${product.id}`);
  };

  const addProduct = (product: Product) => {
    if (focusSize != "") {
      addToCart(product, focusSize);
    }
  };

  return (
    <div className=" group flex-col flex justify-evenly h-[300px]  w-full p-1.5 left-0  snap-center  hover:border-2 border-blue-800 mx-auto md:min-w-80 md:min-h-full md:h-[300px]  ">
      <div className="w-full flex  ">
        <Image
          src={src[0]}
          width={250}
          height={250}
          alt={product.name}
          className=" size-fit w-full border-0 border-slate-500 pointer-events-auto md:w-4/5 md:h-full  md:m-auto "
          onClick={() => {
            handleClick(product);
          }}
        />

        <ol className="hidden gap-2  font-semibold  justify-evenly   flex-col md:flex h-full ">
          {size.map((s, index) => {
            return (
              <li
                className={`border-2 border-blue-900 min-w-10 text-center rounded-md hover:bg-blue-500 ${
                  focusSize == s ? "bg-blue-800" : ""
                } cursor-pointer`}
                key={index}
                onClick={() =>
                  s === focusSize ? setFocusSize("") : setFocusSize(s)
                }
              >
                {s}
              </li>
            );
          })}
        </ol>
      </div>
      <p className="text-sm md:text-base text-slate-500 ">{product.sexo}</p>
      <h2 className=" text-xs md:text-xl">{product.name}</h2>
      <h2 className="px-4 py-2 text-blue-900 font-bold md:text-xl">
        ${product.price}
      </h2>
      <div className=" text-center">
        <button
          className="bg-blue-600 w-32 rounded-xl text-white md:text-2xl hidden md:block m-auto"
          onClick={() => addProduct(product)}
        >
          Comprar
        </button>
        <button
          className="bg-blue-600 w-32 rounded-xl text-white md:text-2xl md:hidden"
          onClick={() => handleClick(product)}
        >
          Ver Producto
        </button>
      </div>
    </div>
  );
};
