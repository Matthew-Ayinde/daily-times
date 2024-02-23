"use client";

import React, { useEffect, useState } from "react";
import CustomContentCard from "./CustomContentCard";
import { IArticleRoot } from "../types/articles";
import { BASE_URL } from "../lib/constants";
import axios from "axios";

const  AdvertismentSection = () => {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);
  const [fetchedArticles, setFetchedArticles] = useState([]);
  const [lastArticleSelected, setLastArticleSelected] = useState<any>({});

  const fetchArticlesHandler = async (): Promise<IArticleRoot> => {
    try {
      const response = await axios.get(`${BASE_URL}/api/articles?populate=*`);

      return response.data;
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    if (!fetchedArticles?.length) {
      fetchArticlesHandler().then((data: any) => {
        setFetchedArticles(data?.data);
      });
    }

    if (fetchedArticles?.length) {
      const lastArticle = fetchedArticles[fetchedArticles?.length - 1];

      setLastArticleSelected(lastArticle);
    }
  }, [fetchedArticles]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getHeight = () => {
    if (windowWidth && windowWidth < 1024) {
      // For mobile screens
      return 400;
    } else {
      // For larger screens
      return 940;
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-10 w-full items-center lg:items-start justify-between">
        <div className="w-full lg:w-1/2 flex flex-col gap-3 lg:gap-10 justify-between items-center">
          {fetchedArticles?.slice(0, 2)?.map((article: any, index) => (
            <CustomContentCard
              key={index}
              imageSrc={
                article?.attributes.MediaFiles.data[0].attributes.formats.small
                  .url
              }
              imageAlt="Image Alt Text"
              height={400}
              category={article?.attributes.category}
              description={
                article?.attributes.Details?.length > 60
                  ? `${article?.attributes.Details?.slice(0, 70)}...`
                  : article?.attributes.Details
              }
              readMoreLink="/story/123"
            />
          ))}
        </div>

        <div className="w-full lg:w-1/2">
          {lastArticleSelected && (
            <CustomContentCard
              imageSrc={
                lastArticleSelected?.attributes?.MediaFiles?.data[0]?.attributes
                  ?.formats?.small?.url
              }
              imageAlt="Image Alt Text"
              height={getHeight()}
              category={lastArticleSelected?.attributes?.category}
              description={
                lastArticleSelected?.attributes?.Details?.length > 60
                  ? `${lastArticleSelected?.attributes?.Details?.slice(
                      0,
                      70
                    )}...`
                  : lastArticleSelected?.attributes?.Details
              }
              readMoreLink="/story/123"
            />
          )}

          {/* <CustomContentCard
            imageSrc=""
            imageAlt="Image Alt Text"
            height={getHeight()}
            category="Category"
            description="Long Heading is what you see here in this feature section and it may exceed one line"
            readMoreLink="/story/123"
          /> */}
        </div>
      </div>
    </>
  );
};

export default AdvertismentSection;
