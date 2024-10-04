"use client";

import Image from "next/image";
import { CartIcon, SearchIcon, UserIcon } from "./icons";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`h-20 flex justify-between items-center p-2  bg-blue-800 `}>
      <Link href={"/"}>
        <Image
          src="/logo-boca.png"
          width={80}
          height={80}
          alt="Boca Logo"
          className="mx-4"
        />
      </Link>
      <div className="hidden md:block">
        <input type="text" className=" h-8 mx-2 rounded-lg " />
        <button>Search</button>
      </div>
      <div className="hidden md:block text-white">
        <CartIcon />
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
        <a href="" className="m-auto text-white flex-col gap-2">
          Buscar
          <SearchIcon />
        </a>
        <a
          href=""
          className="m-auto text-white flex-col  gap-2"
          onClick={handleMenu}
        >
          Cart
          <CartIcon />
        </a>
        <a href="" className="m-auto text-white flex-col gap-2">
          Iniciar Sesion
          <UserIcon />
        </a>
      </div>
    </div>
  );
}
