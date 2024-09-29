"use client";

import { AiOutlineClose } from "react-icons/ai";
import NavbarNew from "./nav";

export const MobileNav: React.FC = () => {
  return (
    <div className=" fixed top-0 right-0 flex flex-col h-full w-full min-h-screen justify-end bg-neutral_content/60 md:hidden">
      <div className="h-full w-[85%] bg-white py-4 top-0 rounded-l-lg ">
        <section className="flex justify-end pl-4 text-primary mb-4">
          <AiOutlineClose className="cursor-pointer text-xl" />
        </section>
        <div className="w-[60%]">
          <NavbarNew />
        </div>
      </div>
    </div>
  );
};
