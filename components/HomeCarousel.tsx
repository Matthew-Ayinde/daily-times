"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";

const HomeCarousel = () => {
  const [currentSlideNumber, setCurrentSlideNumber] = useState(3);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
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
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      setCurrentSlideNumber((prevSlide) => prevSlide + 1);
    }
  };

  const handlePrevious = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
      setCurrentSlideNumber((prevSlide) => prevSlide - 1);
    }
  };

  return (
    <div className="w-full flex-center">
      <div className="max-w-screen-xxl px-4 lg:px-90px pt-28 pb-100px w-full mx-auto text-black">
        <p className="text-3xl lg:text-5xl text-center font-bold mb-6 lg:mb-12">
          Categories
        </p>

        <Slider
          {...settings}
          afterChange={(nextSlide: number) => {
            setCurrentSlideNumber(nextSlide);
          }}
          className="w-full h-[480px]"
          ref={sliderRef}
        >
          {slideData.map((data, index) => {
            const currentSlide = currentSlideNumber === index;

            return (
              <div
                key={index}
                className={`bg-gray-300 relative ${
                  currentSlide ? "w-[320px] h-[480px]" : "w-[220px] h-[340px]"
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

        <div className="mt-8 min-h-[85px]">
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

        <div className="mt-4 flex gap-4 justify-center">
          <button onClick={handlePrevious} className="border-none outline-none">
            <Image
              src="/carousel/leftBtn.svg"
              alt="left button"
              width={30}
              height={30}
            />
          </button>
          <button onClick={handleNext} className="border-none outline-none">
            <Image
              src="/carousel/rightBtn.svg"
              alt="left button"
              width={30}
              height={30}
            />
          </button>
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
    imgSrc: "/carousel/Img1.webp",
  },
  {
    title: "Art",
    content: "Art content",
    imgSrc: "/carousel/Img2.webp",
  },
  {
    title: "Dance",
    content: "Music content",
    imgSrc: "/carousel/Img3.webp",
  },
  {
    title: "Music",
    content: "Dance content",
    imgSrc: "/carousel/Img4.webp",
  },
  {
    title: "Fashion",
    content: "Fasion content",
    imgSrc: "/carousel/Img5.webp",
  },
];
