"use client";

import React from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const VideoComponent = () => {


  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-12 space-y-20">
      {videoLinks.map((video, index) => (
        <div
          key={index}
          className="flex space-x-4 h-[340px] items-center justify-center "
        >
          <div className="flex-1">
            {loading ? (
              <Skeleton className="w-[290px] h-[380px] rounded-xl bg-gray-300" />
            ) : (
              <ReactPlayer
                url={video.url}
                width="290px"
                height="380px"
                controls

              />
            )}
          </div>
          <div className="flex flex-col space-y-4">
            <Image
              alt=""
              src={"/videos/likeImage.svg"}
              width={50}
              height={50}
              className="hover:cursor-pointer"
            />
            <Image
              alt=""
              src={"/videos/dislikeImage.svg"}
              width={50}
              height={50}
              className="hover:cursor-pointer"
            />
            <Image
              alt=""
              src={"/videos/commentImage.svg"}
              width={50}
              height={50}
              className="hover:cursor-pointer"
            />
            <Image
              alt=""
              src={"/videos/shareImage.svg"}
              width={50}
              height={50}
              className="hover:cursor-pointer"
            />
            <Image
              alt=""
              src={"/videos/optionsImage.svg"}
              width={50}
              height={50}
              className="hover:cursor-pointer"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const videoLinks = [
  {
    id: 1,
    title: "Video 1",
    url: "<https://www.youtube.com/watch?v=nLQ-9vfEjUI&t=16s>",
  },
  {
    id: 2,
    title: "Video 2",
    url: "<https://www.youtube.com/watch?v=nLQ-9vfEjUI&t=16s>",
  },
  {
    id: 3,
    title: "Video 3",
    url: "<https://www.youtube.com/watch?v=nLQ-9vfEjUI&t=16s>",
  },
  {
    id: 4,
    title: "Video 4",
    url: "<https://www.youtube.com/watch?v=nLQ-9vfEjUI&t=16s>",
  },
  {
    id: 5,
    title: "Video 5",
    url: "<https://www.youtube.com/watch?v=nLQ-9vfEjUI&t=16s>",
  },
  {
    id: 6,
    title: "Video 6",
    url: "<https://www.youtube.com/watch?v=nLQ-9vfEjUI&t=16s>",
  },
];

export default VideoComponent;
