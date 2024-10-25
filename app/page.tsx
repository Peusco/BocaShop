import { lusitana } from "./ui/fonts";

import { fetchFirstFourProducts } from "./lib/data";
import { Card } from "./ui/Components/Card";
import { Product } from "./lib/definitions";

export default async function Home() {
  const data = await fetchFirstFourProducts();

  return (
    <div className="w-full h-screen md:min-h-screen   ">
      <div className="  text-start  p-10 flex">
        <h1
          className={`${lusitana} text-2xl text-blue-800 border-b-4 border-l-2 border-y-blue-600 border-l-blue-400 2xl:text-4xl`}
        >
          Productos{" "}
          <span className="text-4xl 2xl:text-5xl text-white">Destacados</span>
        </h1>
      </div>
      <div className="w-full flex justify-center md:h-[450px] 2xl:h-[500px]">
        <section className=" flex w-60  relative overflow-x-scroll snap-x gap-4 md:w-4/5 md:overflow-y-hidden">
          {data &&
            data.map((product: Product) => {
              return <Card product={product} key={product.id} />;
            })}
        </section>
      </div>
    </div>
  );
}
