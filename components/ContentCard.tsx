import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { IArticle } from "@/types/articles";
import { slugify } from "@/lib/helpers";

interface CardProps {
  article: IArticle;
}

const ContentCard = ({ article }: CardProps) => {
  const { attributes, id } = article;

  const titleSlug = slugify(attributes.Title);
  // console.log(titleSlug);

  return (
    <Card className="w-min border-none">
      <CardHeader className="h-60 w-[350px] border relative">
        <Image
          src={`${attributes.MediaFiles.data[0].attributes.formats.small.url}`}
          alt={""}
          // width={350}
          // height={240}
          fill
          className="object-cover absolute"
        />
      </CardHeader>

      <CardContent className="min-h-[86px] mt-4 pr-5">
        <p className="text-custom-red text-xs font-normal">
          {attributes.category}
        </p>
        <p className="text-custom-black leading-relaxed my-2 font-bold">
          {attributes.Details?.length > 60
            ? `${attributes.Details?.slice(0, 70)}...`
            : attributes.Details}
        </p>
        <Link href={`${attributes.category}/${titleSlug}`}>
          <p className="text-custom-red hover:underline mt-1 block font-bold">
            Read More
          </p>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ContentCard;
