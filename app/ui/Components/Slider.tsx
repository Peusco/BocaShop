"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "../icons";
import { Product } from "@/app/lib/definitions";
import { useRouter } from "next/navigation";

export default function ImageSlider({
  products,
}: {
  products: Product[];
}): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const router = useRouter();

  const handleClick = () => {
    router.push(`/products/${products[currentIndex].id}`);
  };

  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  return (
    <div className="">
      <div className="relative w-full mx-auto  mt-4 md:w-1/2  ">
        <div
          className="relative h-[200px]  group hover:-translate-y-2 flex gap-2 justify-center  md:w-full md:justify-evenly"
          onClick={handleClick}
        >
          <div className="w-1/3 h-full content-center ">
            <Image
              src={products[currentIndex].img[0]}
              alt={`Slider Image ${currentIndex + 1}`}
              width={150}
              height={150}
              className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer m-auto "
            />
          </div>

          <div className="w-1/3 h-full content-center">
            <h1 className="text-lg text-blue-900 font-normal 2xl:text-2xl">
              {products[currentIndex].name}
            </h1>
            <p className="my-2 text-sm text-slate-500 2xl:text-lg">
              {products[currentIndex].sexo}
            </p>
            <p className="my-2 text-blue-900 font-bold text-lg 2xl:text-2xl">
              ${products[currentIndex].price}
            </p>
          </div>
        </div>
        <button
          className="absolute left-0 top-1/2 transform h-[200px] rounded-xl hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-[#111927] text-white p-2 group opacity-25 "
          onClick={prevSlide}
        >
          <ArrowLeft />
        </button>
        <button
          className="absolute right-0 top-1/2 transform h-[200px] rounded-xl hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-[#111927] text-white p-2 group opacity-25 "
          onClick={nextSlide}
        >
          <ArrowRight />
        </button>
      </div>
      <div className="flex justify-center mt-4 ">
        {products.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-10 mx-1 ${
              index === currentIndex
                ? "bg-[#beff46] rounded-xl"
                : "bg-gray-300 rounded-xl"
            } transition-all duration-500 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
  );
}
