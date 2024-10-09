"use client";

import { Product } from "@/app/lib/definitions";
import { useState } from "react";
import { Card } from "./Card";
import Search from "./search";

export default function SearchProduct() {
  const [data, setData] = useState<Product[]>([]);

  const handleData = (products: Product[]) => {
    setData(products);
  };

  return (
    <div className={`${data.length >= 2 ? "h-full" : "h-screen"} `}>
      <Search handleProducts={handleData} />
      <div className=" md:w-full ">
        <ul className=" md:flex md:flex-wrap   ">
          {data.length > 0
            ? data.map((product) => {
                return (
                  <li key={product.id} className="md:w-1/2 md:h-1/2 my-4">
                    <Card product={product} />
                  </li>
                );
              })
            : ""}
        </ul>
      </div>
    </div>
  );
}
