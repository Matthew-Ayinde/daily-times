import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { IArticle } from "@/types/articles";
// import { slugify } from "@/lib/helpers";

interface CardProps {
  article: IArticle;
}

const ContentCard = ({ article }: CardProps) => {
  const { attributes, id } = article;

  // const titleSlug = slugify(attributes.Title);
  // console.log(titleSlug);

  return (
    <Card className="w-full border-none mb-12">
      <CardHeader className="h-60 min-w-[350px] w-full border relative">
        <Image
          src={`${attributes.MediaFiles.data[0].attributes.formats.small.url}`}
          alt={""}
          fill
          className="object-cover absolute object-center"
        />
      </CardHeader>

      <CardContent className="min-h-100px mt-4 pr-5 text-center">
        <Link
          href={`${attributes.category}`}
          className="text-custom-red text-xs font-normal"
        >
          {attributes.category}
        </Link>
        <p className="text-custom-black leading-relaxed my-2 font-bold h-14 overflow-hidden line-clamp-2">
          {attributes.Title}
        </p>
        {/* <p className="text-custom-black leading-relaxed my-2">
          {attributes.Details?.length > 60
            ? `${attributes.Details?.slice(0, 60)}...`
            : attributes.Details}
        </p> */}
        <Link href={`${attributes.category}/${id}`}>
          <p className="text-custom-red hover:underline mt-1 block font-bold">
            Read More
          </p>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ContentCard;
