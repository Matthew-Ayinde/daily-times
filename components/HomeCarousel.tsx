"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

const HomeCarousel = () => {
  const [currentSlideNumber, setCurrentSlideNumber] = useState(3);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,

    initialSlide: currentSlideNumber,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <div
      className="bg-[url('/carousel/carousel.webp')] bg-no-repeat bg-center bg-cover bg-black w-full flex-center"
      //   style={{ height: 800 }}
    >
      <div className="max-w-screen-xxl lg:px-90px px-6 pt-28 pb-100px w-full mx-auto text-white">
        <p className="text-3xl lg:text-5xl text-center font-bold mb-6 lg:mb-12">
          Categories
        </p>

        <Slider
          {...settings}
          afterChange={(nextSlide: number) => {
            setCurrentSlideNumber(nextSlide);
          }}
          className="w-full min-h-[400px]"
        >
          {slideData.map((data, index) => {
            const currentSlide = currentSlideNumber === index;

            return (
              <div
                key={index}
                className={`bg-gray-300  relative ${
                  currentSlide ? "w-[320px] h-[400px]" : "w-[220px] h-[340px]"
                }`}
              >
                <Image
                  src={data.imgSrc}
                  alt=""
                  fill
                  className="object-cover absolute rounded w-auto"
                />
              </div>
            );
          })}
        </Slider>

        <div className=" mt-8">
          {slideData.map((data, index) => (
            <div key={index}>
              {currentSlideNumber === index && (
                <div className="flex flex-col justify-center items-center">
                  <p className="text-2xl font-bold">{data.title}</p>
                  <p className="text-sm text-center">{data.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
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
