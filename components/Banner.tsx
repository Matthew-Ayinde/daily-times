import Image from "next/image";
import React from "react";
import Link from "next/link";
import ContentCard from "./ContentCard";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { IArticle } from "@/types/articles";

// interface CardProps {
//   article: IArticle;
// }

const Banner = () => {
  return (
    <div className="flex flex-col gap-10 px-4 lg:px-20">
      <div className="w-full h-40 flex items-center justify-center bg-custom-offwhite lg:mb-16 mb-10 lg:mt-16 mt-10">
        <p className="text-custom-black text-xl text-center font-medium">
          ADVERTISEMENT SECTION
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 w-full h-[500px]">
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
            Long heading is what you see here in this section and it may exceed
            one line Long heading is what you see here in this section and it
            may exceed one line
          </p>
          <Link href="">
            <p className="text-custom-red hover:underline mt-1 block font-bold">
              Read More
            </p>
          </Link>
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-10">
        {/* <ContentCard article={article} key={article.id} />   */}
        {attributes?.slice(0, 3).map((content, index) => (
          <Card key={index} className="w-min border-none mb-12">
            <CardHeader className="h-60 w-[350px] border relative">
              <Image
                src={content.img}
                alt={""}
                fill
                className="object-cover absolute"
              />
            </CardHeader>
            <CardContent className="min-h-100px mt-4 pr-5 text-center">
              <Link href="" className="text-custom-red text-xs font-normal">
                {content.category}
              </Link>
              <p className="text-custom-black leading-relaxed my-2 font-bold h-14 overflow-hidden line-clamp-2">
                {content.Title}
              </p>
              <p className="text-xs text-custom-red">12 Februrary 2024</p>
              {/* <p className="text-custom-black leading-relaxed my-2">
                {attributes.Details?.length > 60
                    ? `${attributes.Details?.slice(0, 60)}...`
                    : attributes.Details}
                </p> */}
              <Link href="">
                <p className="text-custom-red hover:underline mt-1 block font-bold">
                  Read More
                </p>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <div className="mt-30 lg:mt-40">
          <p className="font-bold text-center text-3xl lg:text-5xl mb-20">
            Trending
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {attributes.map((content, index) => (
              <Card key={index} className="w-min border-none mb-12">
                <CardHeader className="h-60 w-[350px] border relative">
                  <Image
                    src={content.img}
                    alt={""}
                    fill
                    className="object-cover absolute"
                  />
                </CardHeader>
                <CardContent className="min-h-100px mt-4 pr-5 text-center">
                  <Link href="" className="text-custom-red text-xs font-normal">
                    {content.category}
                  </Link>
                  <p className="text-custom-black leading-relaxed my-2 font-bold h-14 overflow-hidden line-clamp-2">
                    {content.Title}
                  </p>
                  <p className="text-xs text-custom-red">12 Februrary 2024</p>
                  {/* <p className="text-custom-black leading-relaxed my-2">
                {attributes.Details?.length > 60
                    ? `${attributes.Details?.slice(0, 60)}...`
                    : attributes.Details}
                </p> */}
                  <Link href="">
                    <p className="text-custom-red hover:underline mt-1 block font-bold">
                      Read More
                    </p>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </ul>
        </div>
      </div>
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
