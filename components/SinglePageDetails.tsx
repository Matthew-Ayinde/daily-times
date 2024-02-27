import { IArticle } from "@/types/articles";
import Image from "next/image";
import React from "react";
import { Skeleton } from "./ui/skeleton";

interface Props {
  article: IArticle | null;
  loading: boolean;
}

const SinglePageDetails = ({ article, loading }: Props) => {
  return (
    <div className="lg:px-100px px-6 lg:py-28 py-7 w-full">
      {loading || !article ? (
        <>
          <div className="flex items-center gap-2 text-custom-gray mb-6 text-sm lg:text-base capitalize">
            <p>Category</p>
            <Image
              src={"/svg/chevron-right.svg"}
              alt={""}
              width={16}
              height={16}
            />
            <p className="font-semibold">News</p>
          </div>

          <Skeleton className="h-8 w-full bg-custom-lightgray rounded mb-12" />

          <div className="flex items-center gap-4 mb-6">
            <Skeleton className="h-12 w-12 rounded-full bg-custom-lightgray" />

            <Skeleton className="h-12 w-32 bg-custom-lightgray rounded" />
          </div>

          <Skeleton className="mt-6 w-full lg:h-[600px] h-[450px] bg-custom-lightgray" />
        </>
      ) : (
        <>
          <div className="flex items-center gap-2 text-custom-gray mb-6 text-sm lg:text-base capitalize">
            <p>Category</p>{" "}
            <Image
              src={"/svg/chevron-right.svg"}
              alt={""}
              width={16}
              height={16}
            />{" "}
            <p className="font-semibold capitalize">
              {article.attributes.category.data.attributes.name}
            </p>
          </div>

          <h2 className="font-bold text-3xl lg:text-5xl mb-12">
            {article.attributes.Title}
          </h2>

          <div className="flex lg:items-center flex-col lg:flex-row justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-400 relative">
                {/* <Image
                  src={""}
                  alt={""}
                  fill
                  className="object-cover absolute object-top"
                /> */}
              </div>

              <div className="text-sm">
                <p className="font-semibold">Full name</p>
                <div className="flex items-center gap-2">
                  <p>11 Jan 2022</p>
                  <p>•</p>
                  <p>5 min read</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {links.map((link, index) => (
                <div
                  key={index}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-custom-white"
                >
                  <Image src={link.imgSrc} alt={""} width={24} height={24} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 w-full lg:h-[600px] h-[450px] bg-gray-300 relative">
            <Image
              src={article.attributes.media_files.data.attributes.url}
              alt={""}
              fill
              className="object-cover absolute object-top"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default SinglePageDetails;

export const links = [
  {
    name: "website-link",
    url: "www.example.com",
    imgSrc: "/svg/link.svg",
  },
  {
    name: "linkedIn",
    url: "www.linkedin.com",
    imgSrc: "/svg/linkedIn.svg",
  },
  {
    name: "twitter",
    url: "www.twitter.com",
    imgSrc: "/svg/twitter.svg",
  },
  {
    name: "facebook",
    url: "www.facebook.com",
    imgSrc: "/svg/facebook.svg",
  },
];
