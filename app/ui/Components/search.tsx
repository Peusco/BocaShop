import {
  fetchFilteredNameProducts,
  fetchFilteredSexoProducts,
  fetchFilteredTypeProducts,
} from "@/app/lib/data";
import { Product } from "@/app/lib/definitions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Search({
  handleProducts,
}: {
  handleProducts: (products: Product[]) => void;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [typeOfSearch, setTypeOfSearch] = useState(
    searchParams.get("search")?.toString() == undefined
      ? "name"
      : searchParams.get("search")?.toString()
  );
  const [type, setType] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let products: Product[] | undefined;

    if (type == "") return;
    if (typeOfSearch == "name") {
      products = await fetchFilteredNameProducts(type);
    } else if (typeOfSearch == "tipo") {
      products = await fetchFilteredTypeProducts(type);
    } else {
      products = await fetchFilteredSexoProducts(type);
    }

    if (products != undefined) {
      handleProducts(products);
    }
  };

  const handleChangeTypeOfSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
    setTypeOfSearch(term);
    setType("");
  };

  const handleChangeType = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
    console.log(term);
    setType(term);
  };

  return (
    <div className="md:flex md:h-14">
      <div className="flex justify-center py-4 gap-2 w-full">
        <label
          htmlFor="typeOfSearch"
          className="px-2 text-white text-lg font-medium md:w-1/2 md:text-end"
        >
          Buscar Producto por:
        </label>
        <select
          name="typeOfSearch"
          id="typeOfSearch"
          onChange={(e) => handleChangeTypeOfSearch(e.target.value)}
          className="text-center bg-blue-700 text-yellow-400 rounded-sm"
          defaultValue={searchParams.get("search")?.toString()}
        >
          <option value={"name"}>Nombre</option>
          <option value={"tipo"}>Tipo</option>
          <option value={"sexo"}>Sexo</option>
        </select>
      </div>
      <form
        className="flex justify-center gap-4 p-3 w-full"
        onSubmit={(e) => handleSubmit(e)}
      >
        {typeOfSearch == "name" ? (
          <input
            type="text"
            name="name"
            className="w-1/2 rounded-md bg-blue-700 text-yellow-400"
            onChange={(e) => handleChangeType(e.target.value)}
            defaultValue={searchParams.get("query")?.toString()}
          />
        ) : typeOfSearch == "tipo" ? (
          <select
            className="text-center w-1/2 md:w-1/5 bg-blue-700 text-yellow-400"
            name="tipo"
            onChange={(e) => {
              handleChangeType(e.target.value);
            }}
            defaultValue={searchParams.get("query")?.toString()}
          >
            <option value={""}>Seleccione Una Opcion</option>
            <option value={"Futbol"}>Futbol</option>
            <option value={"Básquet"}>Basquet</option>
            <option value={"entrenamiento"}>Entrenamiento</option>
            <option value={"tiempo libre"}>Tiempo Libre</option>
            <option value={"accesorios"}>Accesorios</option>
          </select>
        ) : (
          <select
            className="text-center w-1/2 bg-blue-700 text-yellow-400"
            name="sexo"
            onChange={(e) => {
              handleChangeType(e.target.value);
            }}
            defaultValue={searchParams.get("query")?.toString()}
          >
            <option value={""}>Seleccione Una Opcion</option>
            <option value={"Hombre"}>Hombre</option>
            <option value={"Mujer"}>Mujer</option>
            <option value={"Niños"}>Niños</option>
            <option value={"Unisex"}>Unisex</option>
          </select>
        )}

        <button
          type="submit"
          className="w-1/2 bg-blue-600 rounded-md text-white md:w-1/5"
        >
          Buscar
        </button>
      </form>
    </div>
  );
}
