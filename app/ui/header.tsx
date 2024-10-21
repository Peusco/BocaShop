"use client";

import Image from "next/image";
import {
  CartIcon,
  CrossIcon,
  SearchIcon,
  UserIcon,
  ShopIcon,
  TrashIcon,
  MinusIcon,
  PlusIcon,
} from "./icons";
import Link from "next/link";
import { FormEvent, Suspense, useEffect, useState } from "react";
import Search from "./Components/search";
import { usePathname } from "next/navigation";
import { useCartContext } from "../context/cartContext";
import { signIn, signOut, useSession } from "next-auth/react";
import UserForm from "./Components/userForm";
import { addProductToUser, fetchUser } from "../lib/data";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(
    pathname.split("/")[1] == "products" ? true : false
  );
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const { data: session, status } = useSession();
  const [loginError, setLoginError] = useState(false);
  const [buyError, setBuyError] = useState(false);

  const { dataCart, removeFromCart, restQuantity, addToCart } =
    useCartContext();

  const handleCart = () => {
    setCartIsOpen(!cartIsOpen);
  };

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

  const handleSigIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status == "authenticated") {
      signOut();
      return;
    }
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const contraseña = formData.get("contraseña");
    if (email == "" || contraseña == "") return;
    try {
      const res = await signIn("credentials", {
        email: email,
        contraseña: contraseña,
        redirect: false,
      });

      if (!res?.error) {
        console.log("Succes");
      } else {
        setLoginError(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const buyProducts = async () => {
    try {
      if (status == "authenticated") {
        setBuyError(false);
        const email = session.user?.email;
        if (email) {
          const user = await fetchUser(email);
          if (user)
            dataCart.map(
              async (p) => await addProductToUser(user[0].id, p.data.id)
            );
        } else {
          console.log("Error fetch user");
          return;
        }
      } else {
        setBuyError(true);
        return;
      }
    } catch (error) {
      console.log(error);
    }
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
        <button onClick={handleCart}>
          <CartIcon />
        </button>
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
        className={`bg-blue-800 absolute w-full right-0 top-20 h-20  bg-opacity-65 flex justify-between md:hidden  ${
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
        <div
          className="m-auto text-white flex-col flex items-center "
          onClick={handleCart}
        >
          Cart
          <CartIcon />
        </div>
        <div
          className="m-auto text-white flex-col flex  items-center"
          onClick={handleIniciarSesion}
        >
          Iniciar Sesion
          <UserIcon />
        </div>
      </div>

      <UserForm
        loginIsOpen={loginIsOpen}
        handleIniciarSesion={handleIniciarSesion}
        handleSigIn={handleSigIn}
        loginError={loginError}
        cartIsOpen={cartIsOpen}
      />

      <div
        className={`${cartIsOpen ? "block" : "hidden"} ${
          dataCart.length == 0 ? "h-28 " : "h-auto"
        } ${
          isOpen ? "top-40" : "top-20"
        } absolute bg-blue-800 rounded-md w-72 right-0  md:top-20 md:w-96 flex-col`}
      >
        <div className=" float-end text-white md:hidden" onClick={handleCart}>
          <CrossIcon />
        </div>
        {dataCart.length > 0 ? (
          dataCart.map((product, index) => {
            return (
              <div
                key={index}
                className="flex py-2  border-t-2 border-t-yellow-400 my-1"
              >
                <div className="flex w-full justify-around gap-2">
                  <div className="w-1/3 h-full ps-2">
                    <Image
                      src={product.data.img[0]}
                      width={80}
                      height={80}
                      alt="camistea de boca"
                      className="m-auto py-4"
                    />
                    <h2 className="text-white text-center">
                      Talle: {product.size}
                    </h2>
                  </div>
                  <div className="flex-col">
                    <h1 className="text-white font-medium">
                      {product.data.name}
                    </h1>
                    <div className="flex py-4 justify-between">
                      <div className="flex gap-2">
                        <button
                          onClick={() => restQuantity(product.data)}
                          className="text-white bg-yellow-400 bg-opacity-40 rounded-lg"
                        >
                          <MinusIcon />
                        </button>
                        <h2 className="text-white">{product.data.quantity}</h2>
                        <button
                          onClick={() => addToCart(product.data, product.size)}
                          className="text-white bg-yellow-400 bg-opacity-40 rounded-lg"
                        >
                          <PlusIcon />
                        </button>
                      </div>
                      <h2 className="text-yellow-600 font-bold ">
                        $
                        {(product.data.price * product.data.quantity).toFixed(
                          2
                        )}
                      </h2>
                    </div>
                  </div>
                </div>
                <button
                  className=" self-center mx-2"
                  onClick={() => removeFromCart(product.data, product.size)}
                >
                  <TrashIcon />
                </button>
              </div>
            );
          })
        ) : (
          <h1 className="text-center text-lg my-4 text-white">
            No tiene productos en el carrito
          </h1>
        )}
        <div className="w-3/4 text-center border-t-2 border-t-yellow-400 m-auto flex-col flex justify-center items-center">
          <button
            className="bg-blue-600 rounded-md text-white text-lg w-40 my-4"
            onClick={buyProducts}
          >
            Realizar Compra
          </button>
          {buyError && dataCart.length > 0 ? (
            <h1 className="text-red-600 pb-4 text-base font-medium ">
              Inicia sesion para realizar la compra
            </h1>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
