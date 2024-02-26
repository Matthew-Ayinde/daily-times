import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { IArticle } from "@/types/articles";

// interface CardProps {
//   article: IArticle;
// }

interface CardProps {
  article: {
    img: string;
    category: string;
    Title: string;
  };
}

const NewCardComponent = ({ article }: CardProps) => {
  return (
    <Card className="w-min border-none mb-12">
      <CardHeader className="h-60 w-[350px] border relative">
        <Image
          src={article.img}
          alt={""}
          fill
          className="object-cover absolute"
        />
      </CardHeader>
      <CardContent className="min-h-100px mt-4 pr-5 text-center">
        <Link href="" className="text-custom-red text-xs font-normal">
          {article.category}
        </Link>
        <p className="text-custom-black leading-relaxed my-2 font-bold h-14 overflow-hidden line-clamp-2">
          {article.Title}
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
  );
};

export default NewCardComponent;
