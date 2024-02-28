"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import React, { useState } from "react";

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
        head: "kids Topwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Blouse", link: "/" },
          { name: "Gowns", link: "/" },
        ],
      },
      {
        head: "kids Clothes",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Blouse", link: "/" },
          { name: "Gowns", link: "/" },
        ],
      },
      {
        head: "kids shoes",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Blouse", link: "/" },
          { name: "Gowns", link: "/" },
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
                  className={`capitalize text-lg text-custom-black font-semibold cursor-pointer ${
                    isActive
                      ? "text-custom-red font-medium"
                      : "text-custom-darkgray"
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <p
                  className={`capitalize text-lg text-custom-black font-semibold cursor-pointer ${
                    isActive
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
                </p>
              )}

              {/* sublinks */}
              {link.submenu && (
                <div className="">
                  <div
                    className={`absolute top-24 group-hover:lg:block hover:lg:block w-full left-0 right-0 px-16 py-6 bg-white ${
                      heading === link.name ? "block" : "hidden"
                    }`}
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
              className={`${heading === link.name ? "lg:hidden" : "hidden"}`}
            >
              {link.sublinks?.map((slink) => (
                <div key={slink.head} className="">
                  <div className="lg:px-0 px-4 mt-1">
                    <h1>{slink.head}</h1>
                  </div>
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
