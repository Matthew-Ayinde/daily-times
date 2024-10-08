import React from "react";
import { IArticle } from "../types/articles";
import Image from "next/image";
import Link from "next/link";
import NewCardComponent from "./NewCardComponent";
import parse from "html-react-parser";
import { shuffle } from "lodash";
import { formatDate } from "@/lib/helpers";

interface Props {
  articles: IArticle[];
}

const AdvertismentSection = ({ articles }: Props) => {
  return (
    <>
      <div className="">
        {articles.slice(0, 1).map((article) => (
          <div
            key={article.id}
            className="flex flex-col lg:flex-row gap-4 lg:gap-10 w-full h-[500px] mb-20"
          >
            <div className="relative w-full lg:w-3/5 h-full">
              <Image
                src={article.attributes.media_files.data.attributes.url}
                alt=""
                fill
                priority
                className="object-cover absolute object-top"
              />
            </div>

            <div className="flex flex-col items-center lg:justify-center gap-2 lg:items-start lg:w-2/5 pr-3">
              <p className="text-sm capitalize">
                {article.attributes.category.data.attributes.name}
              </p>
              <p className="text-xs text-custom-red">
                {formatDate(article.attributes.publishedAt)}
              </p>
              <p className="text-xl lg:text-3xl font-semibold lg:text-start text-center overflow-hidden line-clamp-2">
                {article.attributes.Title}
              </p>
              <p className="text-xs lg:text-base lg:text-start text-center overflow-hidden line-clamp-3">
                {parse(article.attributes.content, { trim: true })}
              </p>

              <Link
                href={`${article.attributes.category.data.attributes.name}/${article.id}`}
              >
                <p className="text-custom-red hover:underline mt-1 block font-bold">
                  Read More
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className=" flex flex-col lg:flex-row items-center lg:justify-between justify-center gap-4 lg:gap-10">
        {shuffle(articles)
          ?.slice(0, 3)
          .map((article, index) => (
            <NewCardComponent article={article} key={index} />
          ))}
      </div>
    </>
  );
};

export default AdvertismentSection;
