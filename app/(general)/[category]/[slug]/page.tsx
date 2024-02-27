"use client";

import { BASE_URL, markdownData } from "@/lib/constants";
import { IArticle, IArticleRoot } from "@/types/articles";
import axios from "axios";
import React, { useEffect, useState } from "react";

import parse from "html-react-parser";
import Image from "next/image";
import SinglePageDetails from "@/components/SinglePageDetails";
import SubscribeComponent from "@/components/SubscribeComponent";
import { links } from "@/data/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

const Page = ({ params }: { params: { slug: string } }) => {
  const originalTitle = params.slug;
  const [filteredArticle, setFilteredArticle] = useState<IArticle | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchArticles = async () => {
    try {
      setLoading(true);

      const response = await axios.get<IArticleRoot>(
        `${BASE_URL}/api/articles?populate=*`
      );
      const articles: IArticle[] = response.data.data;

      const filtered = articles.find(
        (article) => article.id.toString() === originalTitle
      );

      if (filtered) {
        setFilteredArticle(filtered);
        setLoading(false);
      } else {
        setFilteredArticle(null);
        setLoading(false);
      }
      // console.log(filtered);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [originalTitle]);

  return (
    <div className="max-w-screen-xxl w-full mx-auto">
      <>
        <SinglePageDetails article={filteredArticle} loading={loading} />

        <div className="mx-auto max-w-[768px] w-full pt-6 px-6 lg:pb-28 pb-10">
          <div className="w-full mb-16">
            {(loading || !filteredArticle) && (
              <div className="space-y-2">
                {Array(6)
                  .fill(null)
                  .map((item) => (
                    <Skeleton
                      key={item}
                      className="h-4 w-full bg-custom-lightgray rounded"
                    />
                  ))}
              </div>
            )}

            {filteredArticle && (
              <div>
                {parse(filteredArticle?.attributes.content, { trim: true })}
              </div>
            )}
          </div>

          {filteredArticle && (
            <div className="w-full pb-12 border-b border-custom-gray">
              <Link href={""} className="font-semibold text-lg">
                Share this post
              </Link>

              <div className="flex items-end justify-between gap-4 mt-4">
                <div className="flex items-center gap-2">
                  {links.map((link, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-custom-white"
                    >
                      <Image
                        src={link.imgSrc}
                        alt={""}
                        width={24}
                        height={24}
                      />
                    </div>
                  ))}
                </div>

                <div className="px-2 py-1 flex-center bg-custom-white">
                  <p className="text-sm font-semibold capitalize">
                    {filteredArticle?.attributes.category.data.attributes.name}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <SubscribeComponent />
      </>
    </div>
  );
};

export default Page;
