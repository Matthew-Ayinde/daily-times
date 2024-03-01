"use client";

import React, { useState } from "react";
import NewCardComponent from "./NewCardComponent";
import axios from "axios";
import { BASE_URL } from "@/lib/constants";
import { IArticle, IArticleRoot } from "@/types/articles";
import {
  keepPreviousData,
  useIsFetching,
  useQuery,
} from "@tanstack/react-query";
import { Skeleton } from "./ui/skeleton";
import { IPagination } from "@/types";
import PaginationComponent from "./PaginationComponent";

const NewsComponent = () => {
  const isFetching = useIsFetching();
  const [paginationData, setPaginationData] = useState<IPagination | null>(
    null
  );
  const [pageNum, setPageNum] = useState(1);

  const startIndex = paginationData
    ? (pageNum - 1) * (paginationData.pageSize ?? 0) + 1
    : 1;
  const endIndex = Math.min(
    startIndex + ((paginationData?.pageSize ?? 0) - 1),
    paginationData?.total ?? 25
  );

  const fetchArticles = async (page: number) => {
    try {
      const response = await axios.get<IArticleRoot>(
        `${BASE_URL}/api/articles?pagination[page]=${page}&filters[category][name][$eq]=news&populate=*`
      );
      const articles: IArticle[] = response.data.data;
      const pagination: IPagination = response.data.meta.pagination;

      setPaginationData(pagination);

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
    isPlaceholderData,
  } = useQuery<IArticle[], Error>({
    queryKey: ["newsArticles", pageNum],
    queryFn: () => fetchArticles(pageNum),
    placeholderData: keepPreviousData,
    staleTime: 120000,
  });

  return (
    <div className="max-w-screen-xxl lg:px-100px px-6 lg:py-[104px] py-7 w-full mx-auto">
      <div className="w-full flex flex-col justify-center items-center">
        <p className="font-bold text-center text-3xl lg:text-[56px] lg:mb-20 mb-10">
          News
        </p>

        <>
          {(isLoading || isFetching) && (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {Array(6)
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
          )}

          <>
            {newsData && (
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-y-20 gap-y-12">
                {newsData.map((article) => (
                  <NewCardComponent article={article} key={article.id} />
                ))}
              </ul>
            )}
          </>
        </>

        {newsData && paginationData && (
          <div className="lg:mt-20 mt-14">
            <p className="text-center text-xs text-custom-black mb-8">
              Showing {startIndex} - {endIndex}{" "}
              <span className="text-[#999CA0]">
                of {paginationData?.total ?? 0}
              </span>
            </p>

            <PaginationComponent
              paginationData={paginationData}
              pageNum={pageNum}
              setPageNum={setPageNum}
              isPlaceholderData={isPlaceholderData}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsComponent;
