"use client";

import Image from "next/image";
import { CartIcon, CrossIcon, SearchIcon, UserIcon, ShopIcon } from "./icons";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import Search from "./Components/search";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(
    pathname.split("/")[1] == "products" ? true : false
  );

  const handleMenu = () => {
    setIsOpen(!isOpen);
    setLoginIsOpen(false);
  };

  const handleIniciarSesion = () => {
    setLoginIsOpen(!loginIsOpen);
  };

  const handleSearch = () => {
    setSearchIsOpen(!searchIsOpen);
  };

  useEffect(() => {
    setSearchIsOpen(pathname.split("/")[1] == "products" ? true : false);
  }, [pathname]);

  return (
    <div className={`h-20 flex justify-between items-center p-2  bg-blue-800 `}>
      <Link href={"/"}>
        <Image
          src="/logo-boca.png"
          width={80}
          height={80}
          alt="Boca Logo"
          className="mx-4 w-auto h-auto"
        />
      </Link>
      <div className="hidden md:block">
        {searchIsOpen ? (
          <div>
            <Suspense>
              <Search />
            </Suspense>
          </div>
        ) : (
          <Link href={"/products"} onClick={handleSearch}>
            <ShopIcon />
          </Link>
        )}
      </div>
      <div className="hidden text-white md:flex md:gap-4">
        <Link href={"/"}>
          <CartIcon />
        </Link>
        <div onClick={handleIniciarSesion}>
          <UserIcon />
        </div>
      </div>

      <button
        onClick={handleMenu}
        className="flex flex-col justify-center items-center md:hidden"
      >
        <span
          className={` bg-slate-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
        ></span>
        <span
          className={`bg-slate-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
        ></span>
        <span
          className={`bg-slate-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
        ></span>
      </button>

      <div
        className={`bg-blue-800 absolute w-full right-0 top-20 h-20  bg-opacity-65 flex justify-between  ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Link
          href={"/products"}
          className="m-auto text-white flex-col gap-2"
          onClick={handleMenu}
        >
          Buscar
          <SearchIcon />
        </Link>
        <a href="" className="m-auto text-white flex-col  gap-2">
          Cart
          <CartIcon />
        </a>
        <div
          className="m-auto text-white flex-col flex  items-center"
          onClick={handleIniciarSesion}
        >
          Iniciar Sesion
          <UserIcon />
        </div>
      </div>

      <div
        className={`${
          loginIsOpen ? "block" : "hidden"
        } absolute bg-slate-200 rounded-md w-52 h-64 right-0 top-40 md:top-20`}
      >
        <div className="flex justify-between mx-4 my-1">
          <h1 className="text-lg font-medium">Iniciar Sesion</h1>
          <div onClick={handleIniciarSesion}>
            <CrossIcon />
          </div>
        </div>
        <form className="text-center py-4 ">
          <label htmlFor="email" className="text-lg  font-medium text-zinc-600">
            Mail
          </label>
          <input type="text" name="email" className="my-2 bg-slate-400" />
          <label
            htmlFor="contraseña"
            className="text-lg text-zinc-600 font-medium"
          >
            Contraseña
          </label>
          <input type="text" name="contraseña" className="bg-slate-400 my-2" />
        </form>
        <div className="text-center border-t-2 border-white">
          <button className="bg-yellow-300 rounded-md w-20 h-7 my-2">
            Ingresar
          </button>
        </div>
      </div>
    </div>
  );
}
