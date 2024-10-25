"use client";

import { useCartContext } from "@/app/context/cartContext";
import { Product } from "@/app/lib/definitions";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchFilteredTypeProducts } from "@/app/lib/data";
import ImageSlider from "./Slider";

export const SpecificProduct = ({ product }: { product: Product }) => {
  const [focusSize, setFocusSize] = useState<string>("");
  const [similarProducts, setSimilarProducts] = useState<Product[]>();
  const size = product.size[0].split(",");
  const [showDescription, setShowDescrition] = useState(false);
  const { addToCart } = useCartContext();

  useEffect(() => {
    fetchFilteredTypeProducts(product.type).then((res) =>
      setSimilarProducts(res)
    );
  }, []);

  return (
    <article className="h-full  flex-col  justify-center items-center gap-3  ">
      <div className="flex  gap-3 h-3/5 flex-col justify-center items-center md:flex-row">
        <div className=" w-full h-full 2xl:h-full flex  justify-end items-center md:mt-4">
          <Image
            src={product.img[0]}
            width={200}
            height={200}
            alt={product.name}
            className="m-auto w-52 h-52 md:w-72 md:h-72 2xl:w-80 2xl:h-96 pt-4"
          />
        </div>
        <div className=" w-full h-full mx-2 content-center text-center md:text-start">
          <h1 className="text-lg text-blue-900 font-normal 2xl:text-2xl">
            {product.name}
          </h1>
          <p className="my-2 text-sm text-slate-500 2xl:text-lg">
            {product.sexo}
          </p>
          <h2 className="my-2 text-blue-900 font-bold text-lg 2xl:text-2xl">
            ${product.price}
          </h2>
          <p
            className={`text-sm my-2 text-slate-500 ${
              showDescription ? "block" : "hidden"
            } md:block  2xl:text-lg `}
          >
            {product.description}
          </p>
          <h1
            onClick={() => setShowDescrition(!showDescription)}
            className="text-blue-400 cursor-pointer md:hidden"
          >
            {showDescription ? "Cerrar Descripcion" : "Mostrar Descrpcion"}
          </h1>
        </div>
      </div>
      <div className="h-1/5 flex-col text-center my-6 :">
        <h3 className=" font-black 2xl:text-lg">TALLE</h3>
        <div className="m-auto">
          <ol className="flex gap-2 my-1 font-semibold  justify-center">
            {size.map((s, index) => {
              return (
                <li
                  className={`border-2 border-blue-900 min-w-10 text-center rounded-md hover:bg-blue-500 ${
                    focusSize == s ? "bg-blue-500" : ""
                  } 2xl:text-lg cursor-pointer`}
                  key={index}
                  onClick={() => setFocusSize(s)}
                >
                  {s}
                </li>
              );
            })}
          </ol>
        </div>
        <button
          className="my-3 bg-blue-600 w-32 rounded-xl text-white 2xl:text-2xl"
          onClick={() => addToCart(product, focusSize)}
        >
          Comprar
        </button>
      </div>
      <div className="w-full h-full">
        <h1 className="md:text-2xl text-center font-semibold text-xl">
          Productos Similares
        </h1>
        {similarProducts && similarProducts?.length > 0 ? (
          <ImageSlider products={similarProducts} />
        ) : (
          <div className="my-2">
            <h1 className="text-center">Cargando Productos...</h1>
          </div>
        )}
      </div>
    </article>
  );
};
