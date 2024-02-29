"use client";

import React from "react";
import NewCardComponent from "./NewCardComponent";
import axios from "axios";
import { BASE_URL } from "@/lib/constants";
import { IArticle } from "@/types/articles";
import { useIsFetching, useQuery } from "@tanstack/react-query";

const NewsComponent = () => {
  const isFetching = useIsFetching();

  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/articles?filters[category][name][$eq]=news&populate=*`
      );
      const articles: IArticle[] = response.data.data;

      // console.log("articles", articles);

      return articles;
    } catch (error) {
      throw error;
    }
  };

  const {
    data: newsData,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useQuery<IArticle[], Error>({
    queryKey: ["newsArticles"],
    queryFn: fetchArticles,
    staleTime: 5000,
  });

  return (
    <div className="max-w-screen-xxl lg:px-100px px-6 lg:py-[104px] py-7 w-full mx-auto">
      <div className="w-full bg-red-500 flex flex-col justify-center items-center">
        <p className="font-bold text-center text-3xl lg:text-[56px] lg:mb-20 mb-10">
          News
        </p>

        {newsData && (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {newsData.map((article) => (
              <NewCardComponent article={article} key={article.id} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NewsComponent;
