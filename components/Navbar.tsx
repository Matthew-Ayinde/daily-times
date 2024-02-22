"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelectedLayoutSegment } from "next/navigation";

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

  const navbarHeight = 75;
  const fullScreenHeight = `calc(100vh - ${navbarHeight}px)`;

  return (
    <div className="bg-white shadow-md w-full transition-all duration-300 ease-in-out">
      <div
        className={`lg:flex items-center justify-between py-4 lg:px-20 px-6 bg-yellow-400`}
      >
        <div className="bg-red-500">
          <Link href={"/"}>
            <Image
              alt="alt Image"
              width={200}
              height={34.57}
              src={"/logo.svg"}
              className=""
            />
          </Link>
          <p className="font-semibold text-sm mt-0">Since 1926</p>
        </div>

        <div
          onClick={toggleMobileMenu}
          className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer lg:hidden"
        >
          {open ? <p>close</p> : <p>open</p>}
        </div>

        <ul
          className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white lg:bg-inherit lg:z-auto left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in-out ${
            open
              ? "top-[75px] opacity-100 z-50 lg:z-auto"
              : "top-[-490px] lg:opacity-100 opacity-0 z-[-1] lg:z-auto"
          }`}
          style={{ height: open ? fullScreenHeight : "" }}
        >
          {navLinks.map((nav, index) => {
            const isActive = segment === nav.url;
            const isHome = nav.url === "#";

            return (
              <li key={index} className="lg:ml-8 lg:my-0 my-7">
                <Link
                  href={`/${nav.url}`}
                  className={`text-sm hover:text-custom-green transition-all ease-in-out duration-300 cursor-pointer font-light ${
                    isActive || (isHome && segment === null)
                      ? "text-custom-green font-medium"
                      : "text-custom-darkgray lg:text-white"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {nav.link}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

export const navLinks: IAffiliatedLinks[] = [
  {
    link: "Home",
    url: "#",
  },
  {
    link: "About Us",
    url: "about-us",
  },
  {
    link: "Our Brands",
    url: "our-brands",
  },
  {
    link: "Sustainability",
    url: "sustainability",
  },
  {
    link: "News/Media",
    url: "news",
  },
  {
    link: "Career",
    url: "career",
  },
  {
    link: "Contact",
    url: "contact",
  },
  {
    link: "Buy Now",
    url: "buy-now",
  },
];
