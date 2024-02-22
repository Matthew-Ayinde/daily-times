import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface CustomCardProps {
  imageSrc: string;
  imageAlt: string;
  height: number;
  category: string;
  description: string;
  readMoreLink: string;
}

const CustomContentCard: React.FC<CustomCardProps> = ({
  imageSrc,
  imageAlt,
  height = 400,
  category,
  description,
  readMoreLink,
}) => {
  return (
    <Card className="w-full border-none">
      <CardHeader className="w-full relative" style={{ height: height }}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover absolute bg-gray-300 w-auto"
        />
      </CardHeader>

      <CardContent className="min-h-[86px] mt-4 pr-5">
        <p className="text-custom-red text-xs font-normal">{category}</p>
        <p className="text-custom-black leading-relaxed my-2 font-bold flex-wrap">
          {description}
        </p>
        <Link href={readMoreLink}>
          <p className="text-custom-red underline-offset-4 hover:underline font-bold">
            Read More
          </p>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CustomContentCard;
