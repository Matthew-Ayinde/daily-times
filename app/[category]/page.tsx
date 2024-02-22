"use client";

import { BASE_URL } from "@/lib/constants";
import { useIsFetching, useQuery } from "@tanstack/react-query";
import { IArticle, IArticleRoot } from "@/types/articles";
import axios from "axios";
import React, { useState } from "react";
import ContentCard from "@/components/ContentCard";

const CategoryRoute = ({ params }: { params: { category: string } }) => {
  // console.log(params.category);
  const isFetching = useIsFetching();

  const fetchArticles = async () => {
    try {
      const response = await axios.get<IArticleRoot>(
        `${BASE_URL}/api/articles?populate=*`
      );
      const articles: IArticle[] = response.data.data;

      const filteredData = articles.filter(
        (article) => article.attributes.category === params.category
      );
      // console.log(filteredData);

      return filteredData;
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
    <div>
      <h1>categoryName: {params.category}</h1>

      {articlesData && Array.isArray(articlesData) && (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articlesData.map((article) => (
            <ContentCard article={article} key={article.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryRoute;
