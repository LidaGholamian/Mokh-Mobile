"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type NavItem = {
  lable: string;
  link?: string;
  children?: NavItem[];
  //   subChildren?: NavItem[];
};

const navItems: NavItem[] = [
  {
    lable: "موضوعات",
    link: "/",
    children: [
      {
        lable: "درسی",
        link: "/",
        children: [
          {
            lable: "پایه اول",
            link: "/",
          },
          {
            lable: "پایه دوم",
            link: "/",
          },
          {
            lable: "پایه سوم",
            link: "/",
          },
        ],
      },
      {
        lable: "زبان",
        link: "/",
      },
      {
        lable: "هنر",
        link: "/",
      },
      {
        lable: "ورزشی",
        link: "/",
      },
    ],
  },
  {
    lable: "تماس با ما",
    link: "/",
  },
  {
    lable: "درباره ما",
    link: "/",
  },
  {
    lable: "سئوالات متداول",
    link: "/",
  },
];

export default function NavItems() {
  return (
    <div className="hidden md:flex md:items-center gap-4 transition-all">
      {navItems.map((d, i) => (
        <Link
          className="text-primary font-bold px-2 py-3 transition-all relative group"
          href={d.link ?? "#"}
        >
          <p className="text-primary flex items-center cursor-pointer gap-2 group-hover:text-secondary">
            <span>{d.lable}</span>
            {d.children && (
              <IoIosArrowDown className="mt-1 transition-all rotate-180 group-hover:rotate-0" />
            )}
          </p>

          {d.children && (
            <div className="text-neutral-base absolute right-0 top-12 hidden w-[150px] flex-col bg-white pt-4 pb-3 px-3 transition-all group-hover:flex group gap-6 ">
              {d.children.map((ch, i) => (
                <div key={i} className="flex cursor-pointer items-center ">
                  <p className="flex justify-between items-center cursor-pointer gap-2 w-full hover:text-neutral_content">
                    <span>{ch.lable}</span>
                    {/* <IoIosArrowBack className=" transition-all" /> */}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* dropdown */}
        </Link>
      ))}
    </div>
  );
}

export function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed top-0 right-0 flex h-full w-full min-h-screen justify-start bg-neutral_content/60 md:hidden z-10">
      <div className="h-full w-[70%] bg-white px-4 py-4 rounded-l-lg">
        <section className="flex justify-end mb-4">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="text-neutral_content cursor-pointer text-2xl"
          />
        </section>

        {/* <NavItems /> */}
        <div className=" flex flex-col text-base  gap-2 transition-all">
          {navItems.map((d, i) => (
            <SingleNavItem key={i} lable={d.lable} link={d.link}>
              {d.children}
            </SingleNavItem>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SingleNavItem(d: NavItem) {
  const [isItemOpen, setIsItemOpen] = useState(false);

  const [animationParent] = useAutoAnimate();

  function toggleItem() {
    return setIsItemOpen(!isItemOpen);
  }
  return (
    <Link
      ref={animationParent}
      className="text-primary font-bold px-2 py-3 transition-all relative"
      href={d.link ?? "#"}
    >
      <p className="text-primary flex items-center cursor-pointer gap-2 group-hover:text-secondary">
        <span onClick={toggleItem}>{d.lable}</span>
        {d.children && (
          <IoIosArrowDown
            className={`mt-1 transition-all ${isItemOpen && "rotate-180"}`}
          />
        )}
      </p>

      {isItemOpen && d.children && (
        <div className="text-neutral-base w-[150px] flex-col bg-white pt-4 pb-3 px-3 transition-all flex group gap-6 ">
          {d.children.map((ch, i) => (
            <div key={i} className="flex cursor-pointer items-center ">
              <p className="flex justify-between items-center cursor-pointer gap-2 w-full hover:text-neutral_content">
                <span>{ch.lable}</span>
                {/* <IoIosArrowBack className=" transition-all" /> */}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* dropdown */}
    </Link>
  );
}
