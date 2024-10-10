import { useProductContext } from "@/app/context";
import {
  fetchFilteredNameProducts,
  fetchFilteredSexoProducts,
  fetchFilteredTypeProducts,
} from "@/app/lib/data";
import { Product } from "@/app/lib/definitions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { SearchIcon } from "../icons";

export default function Search() {
  const { setData } = useProductContext();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const query = searchParams.get("query")?.toString();
  const search = searchParams.get("search")?.toString();

  const { replace } = useRouter();
  const [typeOfSearch, setTypeOfSearch] = useState(
    search == undefined ? "name" : search
  );
  const [type, setType] = useState(query == undefined ? "" : query);

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
      setData(products);
    }
  };

  const handleChangeTypeOfSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
      params.delete("query");
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
    <div className="flex md:h-14">
      <select
        name="typeOfSearch"
        id="typeOfSearch"
        onChange={(e) => handleChangeTypeOfSearch(e.target.value)}
        className="text-center h-1/2 m-auto bg-blue-700 text-yellow-400 rounded-sm"
        defaultValue={search}
      >
        <option value={"name"}>Nombre</option>
        <option value={"tipo"}>Tipo</option>
        <option value={"sexo"}>Sexo</option>
      </select>

      <form
        className="flex justify-center gap-4 p-3 w-full"
        onSubmit={(e) => handleSubmit(e)}
      >
        {typeOfSearch == "name" ? (
          <input
            type="text"
            name="name"
            className="w-1/2 rounded-md bg-blue-700 text-yellow-400 md:w-full text-center"
            onChange={(e) => handleChangeType(e.target.value)}
            value={type}
          />
        ) : typeOfSearch == "tipo" ? (
          <select
            className="text-center w-1/2  bg-blue-700 text-yellow-400 md:w-full"
            name="tipo"
            onChange={(e) => {
              handleChangeType(e.target.value);
            }}
            defaultValue={type}
          >
            <option value={""}>--- Tipo ---</option>
            <option value={"Futbol"}>Futbol</option>
            <option value={"Básquet"}>Basquet</option>
            <option value={"entrenamiento"}>Entrenamiento</option>
            <option value={"tiempo libre"}>Tiempo Libre</option>
            <option value={"accesorios"}>Accesorios</option>
          </select>
        ) : (
          <select
            className="text-center w-1/2 bg-blue-700 text-yellow-400 md:w-full"
            name="sexo"
            onChange={(e) => {
              handleChangeType(e.target.value);
            }}
            defaultValue={type}
          >
            <option value={""}>--- Sexo ---</option>
            <option value={"Hombre"}>Hombre</option>
            <option value={"Mujer"}>Mujer</option>
            <option value={"Niños"}>Niños</option>
            <option value={"Unisex"}>Unisex</option>
          </select>
        )}

        <button
          type="submit"
          className="w-1/2 bg-blue-600 rounded-md text-white md:w-1/5 text-center"
        >
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}
