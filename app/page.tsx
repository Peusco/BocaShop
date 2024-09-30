import { lusitana } from "./ui/fonts";
import { products } from "./lib/placeholder-data";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <div className="  text-start  p-10 flex">
        <h1
          className={`${lusitana} text-2xl text-blue-800 border-b-4 border-l-2 border-y-blue-600 border-l-blue-400`}
        >
          Productos <span className="text-4xl text-white">Destacados</span>
        </h1>
      </div>
      <section className=" flex  gap-10">
        {products.map((product) => {
          return (
            <div key={product.id} className=" flex-col w-1/4 mx-4 h-80">
              <Image
                src={product.img[0]}
                width={200}
                height={200}
                alt={product.name}
                className=" block mx-auto w-1/2"
              />
              <p className="text-sm text-slate-500">{product.sexo}</p>
              <h2 className=" text-sm">{product.name}</h2>
              <h2 className="px-4 py-2 text-blue-900 font-bold">
                ${product.price}
              </h2>
              <div className=" text-center">
                <button className="bg-blue-600 w-32 rounded-xl text-white">
                  Comprar
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
