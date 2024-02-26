"use client";

import { useIsFetching, useQuery } from "@tanstack/react-query";
import React from "react";
import AdvertismentSection from "./AdvertismentSection";
import { IArticle } from "@/types/articles";
import axios from "axios";
import { BASE_URL } from "@/lib/constants";
import ContentCard from "./ContentCard";
import Banner from "./Banner";

const HomePage = () => {
  const isFetching = useIsFetching();

  const fetchArticles = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/articles?populate=*`);
      const articles: IArticle[] = response.data.data;
      const filteredTrendingItems = filterByTag(articles, "Trending");

      return filteredTrendingItems;
    } catch (error) {
      throw error;
    }
  };

  function filterByTag(array: IArticle[], tagName: string) {
    return array.filter((item) => {
      return item.attributes.tags.data.some(
        (tag) => tag.attributes.name === tagName
      );
    });
  }

  const {
    data: articlesData,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useQuery<IArticle[], Error>({
    queryKey: ["articles"],
    queryFn: fetchArticles,
    staleTime: 3600000,
  });

  if (isFetching) return <div>Fetching...</div>;
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="max-w-screen-xxl lg:px-100px px-6 pt-16 pb-[136px] w-full mx-auto">
      <div className="w-full h-40 flex items-center justify-center bg-custom-offwhite lg:mb-16 mb-10">
        <p className="text-custom-black text-xl text-center font-medium">
          ADVERTISEMENT SECTION
        </p>
      </div>

      <>
        {/* <AdvertismentSection /> */}

        {/* Getting content from backend */}

        {/* {articlesData?.slice(0, 3).map((article) => (
          <Banner article={article} key={article.id} />
        ))} */}
        <Banner />

        <div className="mt-52 flex flex-col justify-center items-center w-full">
          <p className="font-bold text-center text-3xl lg:text-5xl mb-20">
            Trending
          </p>

          {isSuccess && articlesData && (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
