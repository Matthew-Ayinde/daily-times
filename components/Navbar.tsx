"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import CloseIcon from "./CloseIcon";
import OpenIcon from "./OpenIcon";
import { Button } from "./ui/button";

export interface IAffiliatedLinks {
  link: string;
  url: string;
}

const Navbar = () => {
  const segment = useSelectedLayoutSegment();

  const [open, setOpen] = useState(false);
  const toggleMobileMenu = () => {
    setOpen(!open);
  };

  const navbarHeight = 96;
  const fullScreenHeight = `calc(100vh - ${navbarHeight}px)`;

  return (
    <div className="max-w-screen-xxl lg:px-[90px] px-6 py-5 w-full mx-auto border-b">
      <div className="flex items-center justify-between w-full">
        <div className="w-fit">
          <Link href={"/"}>
            <Image
              alt="alt Image"
              width={200}
              height={34.57}
              src={"/logo.svg"}
              className=""
            />

            <p className="text-sm font-semibold mt-0 text-custom-black">
              Since 1926
            </p>
          </Link>
        </div>

        <div onClick={toggleMobileMenu} className="lg:hidden cursor-pointer">
          {open ? <CloseIcon /> : <OpenIcon />}
        </div>

        <ul
          className={`lg:flex lg:items-center lg:justify-between absolute lg:static bg-white lg:z-auto left-0 w-full lg:w-auto transition-all duration-500 ease-in-out lg:pl-0 pl-9 lg:pt-0 pt-12 lg:gap-[66px] border-t lg:border-t-0 ${
            open
              ? "top-[96px] opacity-100 z-50 lg:z-auto"
              : "top-[-490px] lg:opacity-100 opacity-0 z-[-1] lg:z-auto"
          }`}
          style={{ height: open ? fullScreenHeight : "" }}
        >
          {navLinks.map((nav, index) => {
            const isActive = segment === nav.url;

            return (
              <li key={index} className="lg:mb-0 mb-7">
                <Link
                  href={`/${nav.url}`}
                  onClick={() => setOpen(false)}
                  className={`uppercase text-lg text-custom-black font-semibold cursor-pointer ${
                    isActive
                      ? "text-custom-green font-medium"
                      : "text-custom-darkgray"
                  }`}
                >
                  {nav.link}
                </Link>
              </li>
            );
          })}

          <Button className="bg-custom-black px-12 py-[14px] rounded text-white lg:hidden flex items-center justify-cente">
            Subscribe
          </Button>
        </ul>

        <Button className="bg-custom-black px-12 py-[14px] rounded text-white hidden lg:flex lg:items-center lg:justify-center">
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default Navbar;

export const navLinks: IAffiliatedLinks[] = [
  {
    link: "news",
    url: "news",
  },
  {
    link: "videos",
    url: "videos",
  },
  {
    link: "entertainment",
    url: "entertainment",
  },
  {
    link: "categories",
    url: "categories",
  },
];
