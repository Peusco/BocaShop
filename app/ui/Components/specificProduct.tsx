"use client";

import { Product } from "@/app/lib/definitions";
import Image from "next/image";
import { useState } from "react";

export const SpecificProduct = ({ product }: { product: Product }) => {
  const [focusSize, setFocusSize] = useState<string>();
  const size = product.size[0].split(",");
  return (
    <article className="h-full  flex-col  justify-center items-center gap-3  ">
      <div className="flex  gap-3 h-1/2 ">
        <div className=" w-full md:w-1/2 h-full 2xl:h-full flex content-center justify-end items-center ">
          <Image
            src={product.img[0]}
            width={200}
            height={200}
            alt={product.name}
            className="w-52 h-52 md:w-72 md:h-72 2xl:w-1/2 2xl:h-4/5"
          />
        </div>
        <div className=" w-1/3 h-full mx-2 content-center ">
          <h1 className="text-lg text-blue-900 font-normal">{product.name}</h1>
          <p className="my-2 text-sm text-slate-500">Stock</p>
          <h2 className="my-2 text-blue-900 font-bold text-lg">
            ${product.price}
          </h2>
          <p className=" text-sm my-2 text-slate-500 hidden md:block ">
            {product.description}
          </p>
        </div>
      </div>
      <div className="h-1/5 flex-col text-center my-6 :">
        <h3 className=" font-black">TALLE</h3>
        <div className="m-auto">
          <ol className="flex gap-2 my-1 font-semibold  justify-center">
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
        </div>
        <button className="my-3 bg-blue-600 w-32 rounded-xl text-white">
          Comprar
        </button>
      </div>
    </article>
  );
};
