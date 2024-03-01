"use client";

import React, { useState } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { IVideo } from "../types/articles";
import axios from "axios";
import { BASE_URL } from "../lib/constants";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";

const VideoComponent = () => {
  const [fetchedVideos, setFetchedVideos] = useState<IVideo[]>([]);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/videos?populate=*`);
      const videos: IVideo[] = response.data.data;

      setFetchedVideos(videos);

      return videos;
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
    staleTime: 120000,
  });

  const handleLikings = async (
    videoId: number,
    currentLikes: number,
    currentDislikes: number,
    action: string
  ) => {
    const liked = localStorage.getItem(`liked_${videoId}`) === "true";
    const disliked = localStorage.getItem(`disliked_${videoId}`) === "true";

    switch (action) {
      case "like":
        if (!liked && !disliked) {
          // Update local storage to indicate that the user has liked the video
          localStorage.setItem(`liked_${videoId}`, "true");

          const payload = {
            data: {
              likes: currentLikes + 1,
            },
          };

          return await axios
            .put(`${BASE_URL}/api/videos/${videoId}`, payload)
            .then(async () => {
              const updatedVideos = await fetchVideos()
                .then((res) => res)
                .catch((err) => err);
              setFetchedVideos(updatedVideos);
            });
        }

        if (liked) {
          localStorage.setItem(`liked_${videoId}`, "false");

          const payload = {
            data: {
              likes: currentLikes - 1,
            },
          };

          return await axios
            .put(`${BASE_URL}/api/videos/${videoId}`, payload)
            .then(async () => {
              const updatedVideos = await fetchVideos()
                .then((res) => res)
                .catch((err) => err);
              setFetchedVideos(updatedVideos);
            });
        }

        if (!liked && disliked) {
          // Update local storage to indicate that the user has liked the video
          localStorage.setItem(`liked_${videoId}`, "true");
          localStorage.setItem(`disliked_${videoId}`, "false");

          const payload = {
            data: {
              likes: currentLikes + 1,
              dislikes: currentDislikes - 1,
            },
          };

          return await axios
            .put(`${BASE_URL}/api/videos/${videoId}`, payload)
            .then(async () => {
              const updatedVideos = await fetchVideos()
                .then((res) => res)
                .catch((err) => err);
              setFetchedVideos(updatedVideos);
            });
        }
        break;
      case "dislike":
        if (!disliked && !liked) {
          // Update local storage to indicate that the user has liked the video
          localStorage.setItem(`disliked_${videoId}`, "true");

          const payload = {
            data: {
              dislikes: currentDislikes + 1,
            },
          };

          return await axios
            .put(`${BASE_URL}/api/videos/${videoId}`, payload)
            .then(async () => {
              const updatedVideos = await fetchVideos()
                .then((res) => res)
                .catch((err) => err);
              setFetchedVideos(updatedVideos);
            });
        }

        if (disliked) {
          // Update local storage to indicate that the user has liked the video
          localStorage.setItem(`disliked_${videoId}`, "false");

          const payload = {
            data: {
              dislikes: currentDislikes - 1,
            },
          };

          await axios
            .put(`${BASE_URL}/api/videos/${videoId}`, payload)
            .then(async () => {
              const updatedVideos = await fetchVideos()
                .then((res) => res)
                .catch((err) => err);
              setFetchedVideos(updatedVideos);
            });
        }

        if (!disliked && liked) {
          localStorage.setItem(`liked_${videoId}`, "false");
          localStorage.setItem(`disliked_${videoId}`, "true");

          const payload = {
            data: {
              likes: currentLikes - 1,
              dislikes: currentDislikes + 1,
            },
          };

          return await axios
            .put(`${BASE_URL}/api/videos/${videoId}`, payload)
            .then(async (res) => {
              const updatedVideos = await fetchVideos()
                .then((res) => res)
                .catch((err) => err);
              setFetchedVideos(updatedVideos);
            });
        }
      default:
        return;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-12 space-y-20">
      {isLoading ? (
        <Skeleton className="w-[290px] h-[380px] rounded-xl bg-gray-300" />
      ) : (
        fetchedVideos
          ?.sort((a, b) => a.id - b.id)
          ?.map((video, index) => (
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
                <div
                  onClick={() =>
                    handleLikings(
                      video?.id,
                      video.attributes?.likes,
                      video.attributes?.dislikes,
                      "like"
                    )
                  }
                  className="flex cursor-pointer"
                >
                  {localStorage.getItem(`liked_${video.id}`) === "true" ? (
                    <AiFillLike color="#7A0000" size={20} />
                  ) : (
                    <AiOutlineLike color="#7A0000" size={20} />
                  )}
                  <div className="rounded-full text-sky-500 text-center	 text-xs w-4 h-4 absolute ml-6 mt-1">
                    {video.attributes?.likes ? video.attributes?.likes : 0}
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleLikings(
                      video?.id,
                      video.attributes?.likes,
                      video.attributes?.dislikes,
                      "dislike"
                    )
                  }
                  className="flex cursor-pointer"
                >
                  {localStorage.getItem(`disliked_${video.id}`) === "true" ? (
                    <AiFillDislike color="#7A0000" size={20} />
                  ) : (
                    <AiOutlineDislike color="#7A0000" size={20} />
                  )}
                  <div className="rounded-full text-sky-500 text-center	 text-xs w-4 h-4 absolute ml-6 mt-1">
                    {video.attributes?.dislikes
                      ? video.attributes?.dislikes
                      : 0}
                  </div>
                </div>

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
