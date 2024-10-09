import { lusitana } from "./ui/fonts";

import { fetchFirstFourProducts } from "./lib/data";
import { Card } from "./ui/Components/Card";
import { Product } from "./lib/definitions";

export default async function Home() {
  const data = await fetchFirstFourProducts();

  return (
    <div className="w-full h-full md:h-screen   ">
      <div className="  text-start  p-10 flex">
        <h1
          className={`${lusitana} text-2xl text-blue-800 border-b-4 border-l-2 border-y-blue-600 border-l-blue-400`}
        >
          Productos <span className="text-4xl text-white">Destacados</span>
        </h1>
      </div>
      <section className=" md:flex  md:justify-evenly">
        {data &&
          data.map((product: Product) => {
            return <Card product={product} key={product.id} />;
          })}
      </section>
    </div>
  );
}
