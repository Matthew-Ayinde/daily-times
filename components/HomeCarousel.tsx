"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

const HomeCarousel = () => {
  const [currentSlideNumber, setCurrentSlideNumber] = useState(3);

  console.log(currentSlideNumber);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,

    // className: "center",
    centerMode: true,
    // centerPadding: "200px",

    initialSlide: currentSlideNumber,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 11,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-emerald-500 w-full flex-center" style={{ height: 800 }}>
      <div className="max-w-screen-xxl px-90px pt-28 pb-100px w-full mx-auto border">
        <Slider
          {...settings}
          afterChange={(nextSlide: number) => setCurrentSlideNumber(nextSlide)}
          className="w-full"
        >
          {slideData.map((data, index) => (
            <div
              key={index}
              className={`bg-gray-300  relative ${
                currentSlideNumber === index
                  ? "w-[320px] h-[400px]"
                  : "w-[220px] h-[340px]"
              }`}
            >
              <Image
                src={data.imgSrc}
                alt=""
                fill
                className="object-cover absolute rounded"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeCarousel;

const slideData = [
  {
    title: "Entertainment",
    content:
      "The latest entertainment news, TV, showbiz stories and gossip from Nigeria and worldwide.",
    imgSrc: "/carousel/carouselImg1.webp",
  },
  {
    title: "Art",
    content: "Art content",
    imgSrc: "/carousel/carouselImg2.webp",
  },
  {
    title: "Dance",
    content: "Music content",
    imgSrc: "/carousel/carouselImg3.webp",
  },
  {
    title: "Music",
    content: "Dance content",
    imgSrc: "/carousel/carouselImg4.webp",
  },
  {
    title: "Fashion",
    content: "Fasion content",
    imgSrc: "/carousel/carouselImg5.webp",
  },
];
