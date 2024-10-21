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
    <div className=" group flex-col h-1/2  w-1/2 p-1.5  hover:border-2 border-blue-800 mx-auto md:flex  md:justify-between md:w-2/5  ">
      <div className="w-full   ">
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

        <ol className=" gap-2  h-8 font-semibold  justify-center hidden group-hover:flex">
          {size.map((s, index) => {
            return (
              <li
                className={`border-2 border-blue-900 min-w-10 text-center rounded-md hover:bg-blue-500 ${
                  focusSize == s ? "bg-blue-500" : ""
                } cursor-pointer`}
                key={index}
                onClick={() => setFocusSize(s)}
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
          className="bg-blue-600 w-32 rounded-xl text-white md:text-2xl"
          onClick={() => addProduct(product)}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};
