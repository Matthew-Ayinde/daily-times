"use client";

import { BASE_URL, markdownData } from "@/lib/constants";
import { IArticle, IArticleRoot } from "@/types/articles";
import axios from "axios";
import React, { useEffect, useState } from "react";

import parse from "html-react-parser";

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
      // console.log(filtered);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [originalTitle]);

  return (
    <div className="max-w-screen-xxl lg:px-100px px-6 pt-16 pb-[136px] w-full mx-auto">
      <div className="">{parse(markdownData, { trim: true })}</div>

      {/* <div className="">
        <h3>{filteredArticle?.attributes.Title ?? "Title"}</h3>
        <h3>{filteredArticle?.attributes.Details ?? "Details"}</h3>
      </div> */}
    </div>
  );
};

export default Page;
