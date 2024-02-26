import Image from "next/image";
import React from "react";
import Link from "next/link";
import ContentCard from "./ContentCard";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { IArticle } from "@/types/articles";
import NewCardComponent from "./NewCardComponent";

// interface CardProps {
//   article: IArticle;
// }

const Banner = () => {
  return (
    <div className="max-w-screen-xxl lg:px-100px px-6 pt-16 pb-[136px] w-full mx-auto">
      <div className="w-full h-40 flex items-center justify-center bg-custom-offwhite lg:mb-16 mb-10">
        <p className="text-custom-black text-xl text-center font-medium">
          ADVERTISEMENT SECTION
        </p>
      </div>

      <>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 w-full h-[500px] mb-20">
          <div className="relative lg:w-3/5 h-full">
            <Image
              src="/banner.webp"
              alt=""
              fill
              className="object-cover absolute"
            />
          </div>

          <div className="flex flex-col items-center lg:justify-center gap-2 lg:items-start lg:w-2/5">
            <p className="text-sm">Category</p>
            <p className="text-xs text-custom-red">12 Februrary 2024</p>
            <p className="text-xl lg:text-3xl font-semibold lg:text-start text-center">
              Long heading is what you see here in this feature section Area.
            </p>
            <p className="text-xs lg:text-base lg:text-start text-center">
              Long heading is what you see here in this section and it may
              exceed one line Long heading is what you see here in this section
              and it may exceed one line
            </p>
            <Link href="">
              <p className="text-custom-red hover:underline mt-1 block font-bold">
                Read More
              </p>
            </Link>
          </div>
        </div>

        <div className=" flex flex-col lg:flex-row items-center lg:justify-between justify-center gap-4 lg:gap-10">
          {attributes?.slice(0, 3).map((content, index) => (
            <NewCardComponent article={content} key={index} />
          ))}
        </div>

        <div className="mt-40 lg:mt-52 flex flex-col justify-center items-center w-full">
          <p className="font-bold text-center text-3xl lg:text-5xl mb-20">
            Trending
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {attributes.map((content, index) => (
              <NewCardComponent article={content} key={index} />
            ))}
          </ul>
        </div>
      </>
    </div>
  );
};

export default Banner;

const attributes = [
  {
    category: "Category",
    img: "/article1.webp",
    Title: "Long heading is what you see here in this feature section",
  },
  {
    category: "Category",
    img: "/article2.webp",
    Title: "Long heading is what you see here in this feature section",
  },
  {
    category: "Category",
    img: "/article3.webp",
    Title: "Long heading is what you see here in this feature section",
  },
  {
    category: "Category",
    img: "/article4.webp",
    Title: "Long heading is what you see here in this feature section",
  },
  {
    category: "Category",
    img: "/article5.webp",
    Title: "Long heading is what you see here in this feature section",
  },
  {
    category: "Category",
    img: "/article6.webp",
    Title: "Long heading is what you see here in this feature section",
  },
];
