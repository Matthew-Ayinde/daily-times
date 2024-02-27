"use client";

import React from "react";
import NewCardComponent from "./NewCardComponent";
import axios from "axios";
import { BASE_URL } from "@/lib/constants";
import { IArticle } from "@/types/articles";
import { useIsFetching, useQuery } from "@tanstack/react-query";
import { filterByCategory } from "@/lib/helpers";

const NewsComponent = () => {
  const isFetching = useIsFetching();

  const fetchArticles = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/articles?populate=*`);
      const articles: IArticle[] = response.data.data;

      const filteredNewsArticles = filterByCategory(articles, "news");

      // console.log("articles", articles);

      return filteredNewsArticles;
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
    <div className="max-w-screen-xxl lg:px-100px px-6 pt-16 pb-[136px] w-full mx-auto">
      <div className="mt-2 lg:mt-5 flex flex-col justify-center items-center w-full">
        <p className="font-bold text-center text-3xl lg:text-5xl mb-20">News</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {newsData &&
            newsData.map((article, index) => (
              <NewCardComponent article={article} key={index} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default NewsComponent;
