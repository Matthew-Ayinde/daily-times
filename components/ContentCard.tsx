import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
  

interface CardProps {
  imageSrc: string;
  altText: string;
  category: string;
  description: string;
  readMoreLink: string;
}

const ContentCard: React.FC<CardProps> = ({ imageSrc, altText, category, description, readMoreLink }) => {
  
return (
    <Card className="w-[381px] border-none shadow-none ">
        <CardHeader className="p-0">
            <Image 
            src={imageSrc} 
            alt={altText} 
            width={381} 
            height={240} 
            className="object-cover bg-green-500 rounded-sm" />

            {/* <CardTitle>
            <p className="text-[#7A0000] text-xs  mt-4 ">{category}</p>
            </CardTitle> */}
        </CardHeader>
        <CardContent className="p-0 h-[110px] border-none shadow-none">
           {/* <p className="text-red-500 text-xs font-bold">{category}</p> */}
           <p className="text-custom-red text-xs  mt-4 font-normal">{category}</p>
           <p className="text-custom-black leading-relaxed mt-4 font-bold">{description}</p>
           <Link href={readMoreLink}>
            <p className="text-custom-red hover:underline mt-1 block font-bold">Read More</p>
          </Link>
        </CardContent>
        {/* <CardFooter className="p-0">
          <Link href={readMoreLink}>
            <p className="text-[#7A0000] hover:underline mt-1 block font-bold">Read More</p>
          </Link>
        </CardFooter> */}
    </Card>
    // <div className="w-[381px] mx-auto rounded-md overflow-hidden">
    // <Image 
    //   src={imageSrc} 
    //   alt={altText} 
    //   width={imageWidth} 
    //   height={imageHeight} 
    //   className="object-cover bg-green-500 rounded-sm" />
    //   <div className="p-4">
    //     <p className="text-red-500 text-xs font-bold">{category}</p>
    //     <p className="text-black leading-relaxed mt-2">{description}</p>
    //     <Link href={readMoreLink}>
    //       <p className="text-red-500 hover:underline mt-1 block">Read More</p>
    //     </Link>
    //   </div>
    // </div>
  );
};

export default ContentCard;



