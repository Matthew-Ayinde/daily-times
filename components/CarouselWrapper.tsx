import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow } from "swiper/modules";

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

const CarouselWrapper = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<any>(null);

  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;
      setActiveIndex(swiperInstance.realIndex);
    }
  };

  return (
    <div className="relative w-full h-full">
      <Swiper
        modules={[EffectCoverflow]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={4}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 50,
          modifier: 2.5,
          scale: 1,
        }}
        onSlideChange={handleSlideChange}
        className=""
      >
        {slideData.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-center items-center">
              <div className="relative w-[220px] h-[340px]">
                <Image
                  src={data.imgSrc}
                  alt=""
                  fill
                  className="object-cover absolute"
                />
              </div>

              {activeIndex === index && (
                <div className="flex flex-col justify-center items-center mt-4">
                  <p className="text-2xl font-bold">{data.title}</p>
                  <p className="text-sm text-center">{data.content}</p>
                </div>
              )}
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
              src="/carousel/leftBtn.png"
              alt="left button"
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
              src="/carousel/rightBtn.png"
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

export default CarouselWrapper;
