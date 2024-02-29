"use client";

import React from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { IVideo } from "../types/articles";
import axios from "axios";
import { BASE_URL } from "../lib/constants";

const VideoComponent = () => {
  const fetchVideos = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/videos?populate=*`);
      const articles: IVideo[] = response.data.data;

      // console.log("articles", articles);

      return articles;
    } catch (error) {
      throw error;
    }
  };

  const {
    data: videosData,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useQuery<IVideo[], Error>({
    queryKey: ["videos"],
    queryFn: fetchVideos,
    staleTime: 5000,
  });

  return (
    <div className="flex flex-col items-center justify-center mt-12 space-y-20">
      {isLoading ? (
        <Skeleton className="w-[290px] h-[380px] rounded-xl bg-gray-300" />
      ) : (
        videosData?.map((video, index) => (
          <div
            key={index}
            className="flex space-x-4 h-[340px] items-center justify-center "
          >
            <div className="flex-1 bg-black h-[380px]">
              <ReactPlayer
                url={video.attributes?.link?.data?.attributes?.url}
                // width="290px"
                // height="380px"
                width={290}
                height={380}
                controls

              />
            </div>
            <div className="flex flex-col space-y-4">
              <Image
                alt=""
                src={"/videos/likeImage.svg"}
                width={30}
                height={30}
                className="hover:cursor-pointer"
              />
              <Image
                alt=""
                src={"/videos/dislikeImage.svg"}
                width={30}
                height={30}
                className="hover:cursor-pointer"
              />
              <Image
                alt=""
                src={"/videos/commentImage.svg"}
                width={30}
                height={30}
                className="hover:cursor-pointer"
              />
              <Image
                alt=""
                src={"/videos/shareImage.svg"}
                width={30}
                height={30}
                className="hover:cursor-pointer"
              />
              <Image
                alt=""
                src={"/videos/optionsImage.svg"}
                width={30}
                height={30}
                className="hover:cursor-pointer"
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default VideoComponent;
