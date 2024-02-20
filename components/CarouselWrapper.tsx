"use client";

import React, { useRef } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Parallax } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slideData = [
    {
        id: 1,
        title: "Entertainment",
        content: "The latest entertainment news, TV, showbiz stories and gossip from Nigeria and worldwide.",
        imgSrc: "/carousel/carouselImg1.webp",
    },
    {
        id: 2,
        title: "Art",
        content: "Art content",
        imgSrc: "/carousel/carouselImg2.webp",
    },
    {
        id: 3,
        title: "Dance",
        content: "Music content",
        imgSrc: "/carousel/carouselImg3.webp",
    },
    {
        id: 4,
        title: "Music",
        content: "Dance content",
        imgSrc: "/carousel/carouselImg4.webp",
    },
    {
        id: 5,
        title: "Fashion",
        content: "Fasion content",
        imgSrc: "/carousel/carouselImg5.webp",
    },
]

const CarouselBody = () => {
  const swiperRef = useRef<any>();
  return (
    <div className="w-full h-full">
      <div className="hidden lg:block">
        <div className="relative w-full h-full">
          <Swiper
            modules={[Pagination, Autoplay, Parallax]}
            // navigation
            loop={true}
            slidesPerView={3}
            spaceBetween={14}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            speed={600}
            parallax={true}
          >
            {slideData.map((data, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col justify-center items-center cursor-pointer">
                    <div className="relative w-[220px] h-[340px]">
                        <Image 
                            src={data.imgSrc || ''}
                            alt=""
                            fill
                            className="object-cover absolute "
                        />
                    </div>
                    
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-2xl font-bold">{data.title}</p>
                        <p className="text-sm text-center">{data.content}</p>
                    </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

            <div className="flex gap-4 justify-center mt-4">
                <div className="">
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="border-none outline-none"
                >
                  <Image
                    src='/carousel/leftBtn.png'
                    alt='left button'
                    width={30}
                    height={30}
                />
                </button>
                </div>
                <div className="">
                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  className="border-none outline-none"
                >
                  <Image
                    src='/carousel/rightBtn.png'
                    alt='left button'
                    width={30}
                    height={30}
                />
                </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselBody;
