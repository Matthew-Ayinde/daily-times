"use client";

import { useIsFetching, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import AdvertismentSection from "./AdvertismentSection";
import { IArticle } from "@/types/articles";
import axios from "axios";
import { BASE_URL } from "@/lib/constants";
import { Skeleton } from "@/components/ui/skeleton";
// import ContentCard from "./ContentCard";
// import Banner from "./Banner";
import NewCardComponent from "./NewCardComponent";
import { Card, CardHeader, CardContent } from "./ui/card";

const HomePage = () => {
  const isFetching = useIsFetching();
  const [articles, setArticles] = useState<IArticle[]>([]);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/articles?populate=*`);
      const articles: IArticle[] = response.data.data;

      // console.log("articles", articles);
      setArticles(articles);

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

  // if (isFetching) return <div>Fetching...</div>;
  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="max-w-screen-xxl lg:px-100px px-6 pt-16 pb-[136px] w-full mx-auto">
      <div className="w-full h-40 flex items-center justify-center bg-custom-offwhite lg:mb-16 mb-10">
        <p className="text-custom-black text-xl text-center font-medium">
          ADVERTISEMENT SECTION
        </p>
      </div>

      <>
        {isLoading || isFetching ? (
          <div className="flex flex-col gap-4 lg:gap-10 w-full mb-20" >

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 w-full h-[500px] mb-20">
            <Skeleton className="lg:w-3/5 h-full bg-gray-300" />
            <div className="flex flex-col items-center lg:justify-center gap-2 lg:items-start lg:w-2/5 pr-3">
              <Skeleton className="h-[14px] w-[46px] rounded-xl bg-gray-300 mt-4" />
              <Skeleton className="h-[14px] w-[78px] rounded-xl bg-gray-300 mt-2" />
              <Skeleton className="h-10 w-96 rounded-xl bg-gray-300 mt-2" />
              <Skeleton className="h-20 w-96 rounded-xl bg-gray-300 mt-2" />
              <Skeleton className="h-[14px] w-[76px] rounded-xl bg-gray-300 mt-2" />
            </div>
          </div>
          
          <div className=" flex flex-col lg:flex-row items-center lg:justify-between justify-center gap-4 lg:gap-10">
              {Array(3)
                .fill(null)
                .map((box) => (
                  <div key={box}>
                    <div className="flex flex-col w-[350px]">
                      <Skeleton className="w-full h-60 bg-gray-300" />
                      <div className="min-h-100px flex flex-col items-center justify-center mt-4">
                        <Skeleton className="h-[14px] w-[46px] rounded-xl bg-gray-300 mt-4" />
                        <Skeleton className="h-[14px] w-[289px] rounded-xl bg-gray-300 mt-4" />
                        <Skeleton className="h-[14px] w-[78px] rounded-xl bg-gray-300 mt-4" />
                        <Skeleton className="h-[14px] w-[76px] rounded-xl bg-gray-300 mt-4" />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <AdvertismentSection articles={articles} />
        )}

        <div className="mt-40 lg:mt-52 flex flex-col justify-center items-center w-full">
          <p className="font-bold text-center text-3xl lg:text-5xl mb-20">
            Trending
          </p>

          {isLoading || isFetching ? (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {Array(9)
                .fill(null)
                .map((box) => (
                  <div key={box}>
                    <div className="flex flex-col w-[350px]">
                      <Skeleton className="w-full h-60 bg-gray-300" />
                      <div className="min-h-100px flex flex-col items-center justify-center mt-4">
                        <Skeleton className="h-[14px] w-[46px] rounded-xl bg-gray-300 mt-4" />
                        <Skeleton className="h-[14px] w-[289px] rounded-xl bg-gray-300 mt-4" />
                        <Skeleton className="h-[14px] w-[78px] rounded-xl bg-gray-300 mt-4" />
                        <Skeleton className="h-[14px] w-[76px] rounded-xl bg-gray-300 mt-4" />
                      </div>
                    </div>
                  </div>
                ))}
            </ul>
          ) : (
            <>
              {isSuccess && articlesData && (
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                  {articlesData.map((article) => (
                    <NewCardComponent article={article} key={article.id} />
                  ))}
                </ul>
              )}
            </>
          )}

          {/* {isSuccess && articlesData && (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {articlesData.map((article) => (
                <NewCardComponent article={article} key={article.id} />
              ))}
            </ul>
          )} */}
        </div>
      </>
    </div>
  );
};

export default HomePage;
