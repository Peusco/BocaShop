"use client";

import { Product } from "@/app/lib/definitions";
import Image from "next/image";
import { useState } from "react";

export const SpecificProduct = ({ product }: { product: Product }) => {
  const [focusSize, setFocusSize] = useState<string>();
  const size = product.size[0].split(",");
  return (
    <article
      key={product.id}
      className="h-full  flex  justify-center items-center gap-3 "
    >
      <div className=" w-2/3 h-2/3 flex  justify-end">
        <Image
          src={product.img[0]}
          width={500}
          height={500}
          alt={product.name}
        />
      </div>
      <div className=" w-2/3 h-2/3 ">
        <h1 className="text-2xl text-blue-900 font-normal">{product.name}</h1>
        <p className="my-2 text-sm text-slate-500">Stock</p>
        <h2 className="my-2 text-blue-900 font-bold text-lg">
          ${product.price}
        </h2>
        <p className=" text-sm my-2 text-slate-500">{product.description}</p>
        <h3 className=" font-black">TALLE</h3>
        <ol className="flex gap-2 my-1 font-semibold">
          {size.map((s, index) => {
            return (
              <li
                className={`border-2 border-blue-900 min-w-10 text-center rounded-md hover:bg-blue-500 ${
                  focusSize == s ? "bg-blue-500" : ""
                } `}
                key={index}
                onClick={() => setFocusSize(s)}
              >
                {s}
              </li>
            );
          })}
        </ol>
        <button className="my-3 bg-blue-600 w-32 rounded-xl text-white">
          Comprar
        </button>
      </div>
    </article>
  );
};
