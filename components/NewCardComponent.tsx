import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { IArticle } from "@/types/articles";

interface CardProps {
  article: IArticle;
}

const NewCardComponent = ({ article }: CardProps) => {
  const { attributes, id } = article;

  return (
    <>
      <Card className="w-min border-none mb-12">
        <CardHeader className="h-60 w-[350px] relative border">
          <Image
            src={
              attributes.media_files.data.attributes.formats.small?.url ??
              attributes.media_files.data.attributes.formats.thumbnail.url
            }
            alt={""}
            fill
            className="object-cover absolute object-center"
          />
        </CardHeader>
        <CardContent className="min-h-100px mt-4 pr-5 text-center">
          <Link href="" className="text-custom-red text-xs font-normal capitalize">
            {attributes.category.data.attributes.name}
          </Link>
          <p className="text-custom-black leading-relaxed my-2 font-bold h-14 overflow-hidden line-clamp-2">
            {attributes.Title}
          </p>
          <p className="text-xs text-custom-red">12 Februrary 2024</p>
          {/* <p className="text-custom-black leading-relaxed my-2">
                {attributes.Details?.length > 60
                    ? `${attributes.Details?.slice(0, 60)}...`
                    : attributes.Details}
                </p> */}
          <Link href={`${attributes.category.data.attributes.name}/${id}`}>
            <p className="text-custom-red hover:underline mt-1 block font-bold">
              Read More
            </p>
          </Link>
        </CardContent>
      </Card>
    </>
  );
};

export default NewCardComponent;
