"use client";

import { useIsFetching, useQuery } from "@tanstack/react-query";
import React from "react";
import { BASE_URL } from "@/lib/constants";
import axios from "axios";
import { IArticleRoot } from "@/types/articles";
import { IContentCreatorRoot } from "@/types/contentCreators";
import ArticleCard from "./ArticleCard";

const ArticlesPage = () => {
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

  const fetchContentCreators = async (): Promise<IContentCreatorRoot> => {
    try {
      const response = await axios.get(`${BASE_URL}/api/content-creators`);
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

  const { data: contentCreatorsData } = useQuery<IContentCreatorRoot>({
    queryKey: ["contentCreators"],
    queryFn: fetchContentCreators,
    enabled: !!articlesData,
  });

  if (isFetching) return <div>Fetching...</div>;
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Articles</h1>

      {/* <div>
        {filteredData.map((item) => (
          <div key={item.id}>
            <h2>{item.attributes.Title}</h2>
            <p>{item.attributes.Details}</p>
          </div>
        ))}
      </div> */}

      <ul className="flex flex-wrap gap-5 items-center justify-center">
        {articlesData?.data.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </ul>
    </div>
  );
};

export default ArticlesPage;