"use client";

import { useIsFetching, useQuery } from "@tanstack/react-query";
import React from "react";
import { IArticleRoot } from "@/types/articles";
import axios from "axios";
import { BASE_URL } from "@/lib/constants";
import ContentCard from "@/components/ContentCard";

const CategoryRoute = ({ params }: { params: { category: string } }) => {
  
  const isFetching = useIsFetching();

  const fetchArticles = async (): Promise<IArticleRoot> => {
    try {
      const response = await axios.get(`${BASE_URL}/api/articles?populate=*`);
      // console.log(response.data);
      return response.data;
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
  } = useQuery<IArticleRoot>({
    queryKey: ["articles"],
    queryFn: fetchArticles,
    // staleTime: 5000,
  });

  return (
    <div>
      <h1>categoryName: {params.category}</h1>
      CategoryRoute

      <div className="mt-4 px-10">
          <p className="font-bold text-center text-5xl mb-20">Trending</p>

          {/* <TrendingSection /> */}

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {articlesData?.data.map((article) => (
              <ContentCard article={article} key={article.id} />
            ))}
          </ul>
        </div>
    </div>
  );
};

export default CategoryRoute;
