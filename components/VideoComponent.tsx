"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import ReactPlayer from "react-player";

const VideoComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12 space-y-20">
      {videoLinks.map((video, index) => (
        <div
          key={index}
          className="flex space-x-4 h-[340px] items-center justify-center "
        >
          <div className="flex-1">
            {/* <Image 
                    alt=''
                    src={""}
                    width={320}
                    height={340}
                    className="bg-green-500"
                    /> */}
            <ReactPlayer
              url={video.url}
              width="290px"
              height="380px"
              controls
            />
            {/* <video ref={""} src={""} width="100%" controls /> */}
          </div>
          <div className="flex flex-col space-y-4">
            {/* <Button className="rounded-full"> */}
            <Image
              alt=""
              src={"/videos/likeImage.webp"}
              width={50}
              height={50}
              className="hover:cursor-pointer"
            />
            {/* </Button> */}
            {/* <Button className="rounded-full"> */}
            <Image
              alt=""
              src={"/videos/dislikeImage.webp"}
              width={50}
              height={50}
              className="hover:cursor-pointer"
            />
            {/* </Button> */}
            {/* <Button className="rounded-full"> */}
            <Image
              alt=""
              src={"/videos/comment.webp"}
              width={50}
              height={50}
              className="hover:cursor-pointer"
            />
            {/* </Button> */}
            {/* <Button className="rounded-full"> */}
            <Image
              alt=""
              src={"/videos/shareImage.webp"}
              width={50}
              height={50}
              className="hover:cursor-pointer"
            />
            {/* </Button> */}
            {/* <Button className="rounded-full"> */}
            <Image
              alt=""
              src={"/videos/options.webp"}
              width={50}
              height={50}
              className="hover:cursor-pointer"
            />
            {/* </Button> */}
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
