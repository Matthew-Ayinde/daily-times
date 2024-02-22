"use client";

import React, { useEffect, useState } from "react";
import CustomContentCard from "./CustomContentCard";

const AdvertismentSection = () => {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getHeight = () => {
    if (windowWidth && windowWidth < 1024) {
      // For mobile screens
      return 400;
    } else {
      // For larger screens
      return 940;
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-10 w-full items-center lg:items-start justify-between">
        <div className="w-full lg:w-1/2 flex flex-col gap-3 lg:gap-10 justify-between items-center">
          <CustomContentCard
            imageSrc=""
            imageAlt="Image Alt Text"
            height={400}
            category="Category"
            description="Long Heading is what you see here in this feature section and it may exceed one line"
            readMoreLink="/story/123"
          />

          <CustomContentCard
            imageSrc=""
            imageAlt="Image Alt Text"
            height={400}
            category="Category"
            description="Long Heading is what you see here in this feature section and it may exceed one line"
            readMoreLink="/story/123"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <CustomContentCard
            imageSrc=""
            imageAlt="Image Alt Text"
            height={getHeight()}
            category="Category"
            description="Long Heading is what you see here in this feature section and it may exceed one line"
            readMoreLink="/story/123"
          />
        </div>
      </div>
    </>
  );
};

export default AdvertismentSection;
