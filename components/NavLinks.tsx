"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";

const links = [
  { name: "news", url: "news" },
  { name: "videos", url: "videos" },
  { name: "entertainment", url: "entertainment" },
  {
    name: "categories",
    url: "categories",
    submenu: true,
    sublinks: [
      {
        head: "Category One",
        sublink: [
          { name: "SUbcategory 1", link: "/" },
          { name: "SUbcategory 2", link: "/" },
          { name: "SUbcategory 3", link: "/" },
        ],
      },
      {
        head: "Category Two",
        sublink: [
          { name: "SUbcategory 1", link: "/" },
          { name: "SUbcategory 2", link: "/" },
          { name: "SUbcategory 3", link: "/" },
        ],
      },
      {
        head: "Category Three",
        sublink: [
          { name: "SUbcategory 1", link: "/" },
          { name: "SUbcategory 2", link: "/" },
          { name: "SUbcategory 3", link: "/" },
        ],
      },
      {
        head: "Category Four",
        sublink: [
          { name: "SUbcategory 1", link: "/" },
          { name: "SUbcategory 2", link: "/" },
          { name: "SUbcategory 3", link: "/" },
        ],
      },
      {
        head: "Category Five",
        sublink: [
          { name: "SUbcategory 1", link: "/" },
          { name: "SUbcategory 2", link: "/" },
          { name: "SUbcategory 3", link: "/" },
        ],
      },
    ],
  },
];

const NavLinks = () => {
  const segment = useSelectedLayoutSegment();

  const [heading, setHeading] = useState("");

  return (
    <>
      {links.map((link) => {
        const isActive = segment === link.url;

        return (
          <div key={link.name} className="">
            <div className="group">
              {!link.submenu ? (
                <Link
                  href={link.url}
                  className={`capitalize text-lg text-custom-black font-semibold cursor-pointer hover:text-custom-red lg:px-[6px] px-6 pt-1 pb-[11px] block ${
                    isActive && heading === link.name
                      ? "text-custom-red font-medium"
                      : "text-custom-darkgray"
                  }`}
                  onClick={() =>
                    heading !== link.name
                      ? setHeading(link.name)
                      : setHeading("")
                  }
                >
                  {link.name}
                </Link>
              ) : (
                <div
                  className={`capitalize text-lg text-custom-black font-semibold cursor-pointer lg:border-b-2 border-custom-black hover:border-custom-red hover:text-custom-red flex items-center gap-2 group transition-all duration-500 ease-in-out lg:px-[6px] px-6 pt-1 pb-[11px] justify-between lg:justify-normal ${
                    isActive || heading === link.name
                      ? "text-custom-red font-medium border-custom-red"
                      : "text-custom-darkgray"
                  }`}
                  onClick={() =>
                    heading !== link.name
                      ? setHeading(link.name)
                      : setHeading("")
                  }
                >
                  <p>{link.name}</p>
                  <Image
                    src={"/svg/chevron-down.svg"}
                    alt={""}
                    width={18}
                    height={18}
                    className={`rotate-180 group-hover:rotate-0 transition-all duration-500 ease-in-out ${
                      isActive || heading === link.name ? "rotate-0" : ""
                    }`}
                  />
                </div>
              )}

              {/* sublinks */}
              {link.submenu && (
                <div className="hidden lg:block">
                  <div
                    className={`absolute top-24 w-full left-0 right-0 px-16 py-6 bg-white z-10 border-b ${
                      heading === link.name ? "block" : "hidden"
                    }`}
                    // group-hover:lg:block hover:lg:block
                  >
                    <div className="w-full flex gap-8">
                      <ul className="flex flex-col gap-4 capitalize w-52">
                        <p className="text-[#565656] font-semibold text-sm">
                          Categories
                        </p>

                        {["one", "two", "three", "four", "five"].map(
                          (categoryItem, index) => (
                            <li key={categoryItem}>
                              <p
                                className={`font-medium ${
                                  index === 0
                                    ? "text-custom-red"
                                    : "text-custom-black"
                                }`}
                              >
                                Category {categoryItem}
                              </p>
                            </li>
                          )
                        )}
                      </ul>

                      <div className="flex-1">
                        <div className="w-full grid grid-cols-2 gap-x-8 gap-y-2">
                          {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="">
                              <div className="w-full flex gap-6 items-center">
                                <div className="w-40 h-[105px] bg-custom-lightgray"></div>

                                <div className="">
                                  <h3 className="font-semibold">
                                    Article Name
                                  </h3>
                                  <p className="mt-1 mb-2 text-sm text-[#464646]">
                                    Lorem ipsum dolor sit amet consectetur.
                                  </p>

                                  <Link
                                    href={""}
                                    className="text-custom-red text-sm hover:underline"
                                  >
                                    Read more
                                  </Link>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* mobile view */}
            <div
              className={`${
                heading === link.name ? "lg:hidden" : "hidden"
              } bg-[#F7F7F7] py-5 px-6 space-y-4`}
            >
              {link.sublinks?.map((slink) => (
                <div key={slink.head} className="">
                  <p className="text-custom-black cursor-pointer">
                    {slink.head}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default NavLinks;
