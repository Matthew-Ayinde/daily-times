// components/Card.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface CustomCardProps {
  imageSrc: string;
  imageAlt: string;
  width: number;
  height: number;
  category: string;
  description: string;
  readMoreLink: string;
}

const CustomContentCard: React.FC<CustomCardProps> = ({
  imageSrc,
  imageAlt,
  width,
  height,
  category,
  description,
  readMoreLink,
}) => {
  return (
    <Card  className="w-auto border-none shadow-none">
        <CardHeader className="p-0">
            <Image 
            src={imageSrc} 
            alt={imageAlt}  
            width={width} 
            height={height} 
            className="object-cover bg-green-500 rounded-sm" />

            {/* <CardTitle>
            <p className="text-[#7A0000] text-xs  mt-4 ">{category}</p>
            </CardTitle> */}
        </CardHeader>
        <CardContent className="p-0 h-[110px] border-none shadow-none">
           {/* <p className="text-red-500 text-xs font-bold">{category}</p> */}
           <p className="text-custom-red text-xs  mt-4 font-normal">{category}</p>
           <p className="text-custom-black leading-relaxed mt-4 font-bold max-w-[400px] flex-wrap">{description}</p>
           <Link href={readMoreLink}>
            <p className="text-custom-red hover:underline mt-1 block font-bold">Read More</p>
          </Link>
        </CardContent>
    </Card>


  );
};

export default CustomContentCard;
