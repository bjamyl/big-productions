"use client";
import { useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import Menu from "./Menu";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <header>
      <nav className="fixed top-0 w-screen z-50 px-6 py-3 lg:py-5 md:px-8 lg:px-10 xl:px-20 2xl:px-40">
        <Menu toggle={toggle} setToggle={setToggle} />
        <div className="flex flex-row justify-between items-center">
          <Link className="z-50" href="/">
            <Image  src="/logo-mark.svg" alt="logo" width={35} height={35} />
          </Link>
          <h3 className="z-50">
            <Hamburger
              color="white"
              onToggle={(toggle) => {
                if (toggle) {
                  setToggle(true);
                } else {
                  setToggle(false);
                }
              }}
            />
          </h3>
        </div>
      </nav>
    </header>
  );
}
