"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { Button } from "./ui/button";
import CloseIcon from "./CloseIcon";
import OpenIcon from "./OpenIcon";

const NewNavbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMobileMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="">
      <div className="flex items-center justify-between max-w-screen-xxl lg:px-[90px] px-6 py-5 w-full mx-auto bg-white lg:relative border-b">
        {/* logo */}
        <div className="lg:w-fit w-full z-10 flex items-center justify-between border-b lg:border-none pb-5 lg:pb-0">
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

          <div onClick={toggleMobileMenu} className="lg:hidden cursor-pointer">
            {open ? <CloseIcon /> : <OpenIcon />}
          </div>
        </div>

        {/* large screen links */}
        <div className="lg:flex hidden items-center justify-between gap-[66px]">
          <NavLinks />
        </div>

        <Button
          className="bg-custom-black px-12 py-[14px] rounded text-white hidden lg:flex lg:items-center lg:justify-center"
          asChild
        >
          <Link href="/subscribe">Subscribe</Link>
          {/* Subscribe */}
        </Button>

        {/* mobile view */}
        <ul
          className={`lg:hidden uppercase absolute w-full h-full left-0 bg-white px-6 py-32 duration-500 ease-in-out transition-all ${
            open ? "bottom-0" : "bottom-[-100%]"
          }`}
        >
          <div className=" space-y-8">
            <NavLinks />

            <Button
              className="bg-custom-black px-12 py-[14px] rounded text-white lg:hidden flex items-center justify-center"
              asChild
            >
              <Link href="/subscribe">Subscribe</Link>
            </Button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NewNavbar;
