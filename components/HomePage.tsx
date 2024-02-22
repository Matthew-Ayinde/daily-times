"use client";

import { useIsFetching, useQuery } from "@tanstack/react-query";
import React from "react";
import AdvertismentSection from "./AdvertismentSection";
import { IArticle, IArticleRoot } from "@/types/articles";
import axios from "axios";
import { BASE_URL } from "@/lib/constants";
import ContentCard from "./ContentCard";

const HomePage = () => {
  const isFetching = useIsFetching();

  const fetchArticles = async () => {
    try {
      const response = await axios.get<IArticleRoot>(
        `${BASE_URL}/api/articles?populate=*`
      );

      const articles: IArticle[] = response.data.data;
      // console.log(response.data);
      return articles;
    } catch (error) {
      throw error;
    }
  };

  const {
    data: articlesData,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useQuery<IArticle[], Error>({
    queryKey: ["articles"],
    queryFn: fetchArticles,
    // staleTime: 5000,
  });

  if (isFetching) return <div>Fetching...</div>;
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="max-w-screen-xxl px-100px pt-16 pb-[136px] w-full mx-auto">
      <div className="w-full h-40 flex items-center justify-center bg-custom-gray mb-16">
        <p className="text-custom-black text-xl text-center font-medium">
          ADVERTISEMENT SECTION
        </p>
      </div>

      <>
        <AdvertismentSection />

        <div className="mt-52">
          <p className="font-bold text-center text-5xl mb-20">Trending</p>

          {isSuccess && articlesData && (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {articlesData.map((article) => (
                <ContentCard article={article} key={article.id} />
              ))}
            </ul>
          )}
        </div>
      </>
    </div>
  );
};

export default HomePage;
