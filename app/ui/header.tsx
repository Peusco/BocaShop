import Image from "next/image";
import { CartIcon } from "./icons";
import Link from "next/link";

export function Header() {
  return (
    <div className=" h-20 flex justify-between items-center p-2  bg-blue-800">
      <Link href={"/"}>
        <Image
          src="/logo-boca.png"
          width={100}
          height={100}
          alt="Boca Logo"
          className="mx-4"
        />
      </Link>
      <div className="">
        <input type="text" className=" h-8 mx-2 rounded-lg" />
        <button>Search</button>
      </div>
      <a href="" className="mx-4 text-white ">
        <CartIcon />
      </a>
    </div>
  );
}
