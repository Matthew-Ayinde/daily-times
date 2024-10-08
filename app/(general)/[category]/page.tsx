"use client";

import { BASE_URL } from "@/lib/constants";
import { useIsFetching, useQuery } from "@tanstack/react-query";
import { IArticle, IArticleRoot } from "@/types/articles";
import axios from "axios";
import React, { useState } from "react";

const CategoryRoute = ({ params }: { params: { category: string } }) => {
  // console.log(params.category);
  const isFetching = useIsFetching();

  // const fetchArticles = async () => {
  //   try {
  //     const response = await axios.get<IArticleRoot>(
  //       `${BASE_URL}/api/articles?populate=*`
  //     );
  //     const articles: IArticle[] = response.data.data;

  //     const filteredData = articles.filter(
  //       (article) => article.attributes.category === params.category
  //     );
  //     // console.log(filteredData);

  //     return filteredData;
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  // const {
  //   data: articlesData,
  //   isLoading,
  //   isError,
  //   isSuccess,
  //   error,
  // } = useQuery<IArticle[], Error>({
  //   queryKey: ["articles"],
  //   queryFn: fetchArticles,
  //   staleTime: 120000,
  // });

  return (
    <div>
      {/* <h1>categoryName: {params.category}</h1> */}
      CategoryRoute
    </div>
  );
};

export default CategoryRoute;
