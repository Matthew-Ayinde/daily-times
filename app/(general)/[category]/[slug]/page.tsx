"use client";

import { BASE_URL, markdownData } from "@/lib/constants";
import { IArticle, IArticleRoot } from "@/types/articles";
import axios from "axios";
import React, { useEffect, useState } from "react";

import parse from "html-react-parser";
import Image from "next/image";
import SinglePageDetails from "@/components/SinglePageDetails";
import SubscribeComponent from "@/components/SubscribeComponent";

const Page = ({ params }: { params: { slug: string } }) => {
  const originalTitle = params.slug;
  const [filteredArticle, setFilteredArticle] = useState<IArticle | null>(null);

  const fetchArticles = async () => {
    try {
      const response = await axios.get<IArticleRoot>(
        `${BASE_URL}/api/articles?populate=*`
      );
      const articles: IArticle[] = response.data.data;

      const filtered = articles.find(
        // (article) => deslugify(article.attributes.Title) === originalTitle
        (article) => article.id.toString() === originalTitle
      );

      if (filtered) {
        setFilteredArticle(filtered);
      } else {
        setFilteredArticle(null);
      }
      console.log(filtered);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [originalTitle]);

  return (
    <div className="max-w-screen-xxl w-full mx-auto">
      <SinglePageDetails />

      <div className="mx-auto max-w-[768px] w-full pt-6 px-6 lg:pb-28 pb-7">
        <div className="w-full mb-16">
          {parse(markdownData, { trim: true })}
        </div>

        <div className="w-full pb-12 border-b border-custom-gray">
          <p className="font-semibold text-lg">Share this post</p>

          <div className="flex items-end justify-between gap-4 mt-4">
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

            <div className="px-2 py-1 flex-center bg-custom-white">
              <p className="text-sm font-semibold">Category Name</p>
            </div>
          </div>
        </div>
      </div>

      <SubscribeComponent />

      {/* related articles */}

      {/* <div className="">
        <h3>{filteredArticle?.attributes.Title ?? "Title"}</h3>
        <h3>{filteredArticle?.attributes.Details ?? "Details"}</h3>
      </div> */}
    </div>
  );
};

export default Page;

export const links = [
  {
    name: "website-link",
    url: "www.example.com",
    imgSrc: "/svg/link-black.svg",
  },
  {
    name: "linkedIn",
    url: "www.linkedin.com",
    imgSrc: "/svg/linkedIn-black.svg",
  },
  {
    name: "twitter",
    url: "www.twitter.com",
    imgSrc: "/svg/twitter-black.svg",
  },
  {
    name: "facebook",
    url: "www.facebook.com",
    imgSrc: "/svg/facebook-black.svg",
  },
];
