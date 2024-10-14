"use client";

import { useSession } from "next-auth/react";
import { ArrowLeft, CrossIcon } from "../icons";
import { FormEvent, useState } from "react";
import { createUser } from "@/app/lib/data";

interface Props {
  loginIsOpen: boolean;
  handleIniciarSesion: () => void;
  handleSigIn: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  loginError: boolean;
}

export default function UserForm({
  loginIsOpen,
  handleIniciarSesion,
  handleSigIn,
  loginError,
}: Props) {
  const { data: session, status } = useSession();
  const [registrarseIsOpen, setRegistrarseIsOpen] = useState(false);

  const handleRegistrarse = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("contraseña") as string;

    await createUser("ivan", email, password, "user");
  };

  return (
    <div
      className={`${
        loginIsOpen ? "block" : "hidden"
      } absolute bg-slate-200 rounded-md w-52 h-auto right-0 top-40 md:top-20`}
    >
      {status == "unauthenticated" ? (
        <div>
          <div className="flex justify-between mx-4 my-1">
            <h1 className="text-lg font-medium">
              {registrarseIsOpen ? "Registrarse" : "Iniciar Sesion"}
            </h1>
            {registrarseIsOpen ? (
              <div onClick={() => setRegistrarseIsOpen(false)}>
                <ArrowLeft />
              </div>
            ) : (
              <div onClick={handleIniciarSesion}>
                <CrossIcon />
              </div>
            )}
          </div>
          <form
            className="text-center py-4 "
            onSubmit={registrarseIsOpen ? handleRegistrarse : handleSigIn}
          >
            <label
              htmlFor="email"
              className="text-lg  font-medium text-zinc-600"
            >
              Mail
            </label>
            <input
              id="email"
              type="text"
              name="email"
              className={`my-2 bg-slate-400 ${
                loginError ? "border-2 border-red-600" : ""
              }`}
            />
            <label
              htmlFor="contraseña"
              className="text-lg text-zinc-600 font-medium"
            >
              Contraseña
            </label>
            <input
              id="contraseña"
              type="password"
              name="contraseña"
              className={`${
                loginError ? "border-2 border-red-600" : ""
              } bg-slate-400 my-2`}
            />
            <h2 className="text-red-600 font-semibold">
              {loginError ? "Email o Contraseña incorrecto" : ""}
            </h2>
            {registrarseIsOpen ? (
              ""
            ) : (
              <button onClick={() => setRegistrarseIsOpen(true)}>
                Registrarse
              </button>
            )}
            <div className="text-center border-t-2 border-white">
              <button
                type="submit"
                className="bg-yellow-300 rounded-md w-20 h-7 my-2"
              >
                {registrarseIsOpen ? "Registrarse" : "Ingresar"}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <div className="flex justify-between mx-4 my-1">
            <h1 className="text-lg font-medium">
              {session && session.user?.name}
            </h1>
            <div onClick={handleIniciarSesion}>
              <CrossIcon />
            </div>
          </div>
          <div>
            <h2 className="px-2 text-slate-700 font-extralight">
              {session?.user?.email}
            </h2>
          </div>
          <form className="text-center py-4 " onSubmit={handleSigIn}>
            <button
              type="submit"
              className="bg-yellow-300 rounded-md w-36 h-7 my-2"
            >
              Cerrar Sesion
            </button>
          </form>
        </div>
      )}{" "}
    </div>
  );
}
