import useRelativeTime from "@/hooks/useRelativeTime";
import { BASE_URL } from "@/lib/constants";
import { IArticle } from "@/types/articles";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  article: IArticle;
}

const ArticleCard = ({ article }: Props) => {
  const { attributes, id } = article;
  const publishedAt = useRelativeTime(attributes.publishedAt);

  return (
    <li className="w-80 border-2 border-blue-900 rounded-lg overflow-hidden shadow-lg shadow-gray-500/50 min-h-[396px]">
      <div className="h-40 w-80 border relative">
        <Image
          src={`${attributes.media_files.data.attributes.url}`}
          alt={""}
          // height={128}
          // width={320}
          fill
          className="object-cover absolute"
        />
      </div>
      <div className="px-5 py-6">
        <div className="flex justify-start">
          <p className="text-red-500 hover:underline underline-offset-2 cursor-pointer text-left">
            News
          </p>
        </div>

        <h3 className="mt-4 font-bold">{attributes.Title}</h3>
        <p className="mt-3 text-gray-500">{publishedAt}</p>
        {/* <p className="mt-4 text-gray-800 line-clamp-3">{attributes.Details}</p> */}

        <div className="mt-5 flex justify-end">
          <Link href={""} className="text-right font-semibold">
            Read More...
          </Link>
        </div>
      </div>
    </li>
  );
};

export default ArticleCard;
