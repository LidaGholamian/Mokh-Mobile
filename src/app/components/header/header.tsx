"use client";

import Image from "next/image";
import NavItems, { MobileNav } from "../navbar/navItem";
import { Button } from "../button";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export const Header: React.FC = () => {
  const [isSideMenuOpen, setSideMenue] = useState(false);
  const [animationParent] = useAutoAnimate();
  function openSideMenu() {
    setSideMenue(true);
  }

  function closeSideMenu() {
    setSideMenue(false);
  }
  return (
    <div className="container bg-white flex justify-between items-center mx-auto px-5 py-5 max-w-7xl">
      {/* menubar */}

      <section className="w-1/3 flex justify-start">
        <FiMenu
          onClick={openSideMenu}
          className="text-primary text-3xl md:hidden cursor-pointer"
        />
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <NavItems />
      </section>

      {/* logo in middle */}
      <section
        ref={animationParent}
        className="flex justify-center items-center gap-10 w-1/3"
      >
        <Image
          src="/image/logo.svg"
          width={37}
          height={40}
          alt="logo"
          className="w-[37px] h-10"
        />

        {/* logo */}
      </section>

      <section className="w-1/3 flex justify-end">
        <button>
          <Image
            src="/image/signin.svg"
            width={24}
            height={24}
            alt="signin"
            className="w-6 h-6"
          />
        </button>
      </section>
    </div>
  );
};
