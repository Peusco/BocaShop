"use client";

import { Card } from "../ui/Components/Card";

import { useProductContext } from "@/app/context";
import Search from "../ui/Components/search";
import { Suspense } from "react";

export default function ProductPage() {
  const { data } = useProductContext();

  return (
    <div className="md:min-w-64 ">
      <div className={`${data.length >= 2 ? "h-full" : "h-screen"} `}>
        <div className="md:hidden">
          <Suspense>
            <Search />
          </Suspense>
        </div>
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
    </div>
  );
}
