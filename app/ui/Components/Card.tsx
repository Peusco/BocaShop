import { Product } from "@/app/lib/definitions";
import Image from "next/image";
import React from "react";
interface Props {
  product: Product;
}

export const Card: React.FC<Props> = ({ product }) => {
  return (
    <div className=" flex-col h-full w-1/4 mx-4 p-1.5  hover:border-2 border-blue-800 ">
      <Image
        src={product.img[0]}
        width={400}
        height={400}
        alt={product.name}
        className=" size-fit w-full border-2 border-slate-500"
      />
      <p className="text-sm text-slate-500">{product.sexo}</p>
      <h2 className=" text-xs">{product.name}</h2>
      <h2 className="px-4 py-2 text-blue-900 font-bold">${product.price}</h2>
      <div className=" text-center">
        <button className="bg-blue-600 w-32 rounded-xl text-white">
          Comprar
        </button>
      </div>
    </div>
  );
};
