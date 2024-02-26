import Image from "next/image";
import React from "react";

const SinglePageDetails = () => {
  return (
    <div className="lg:px-100px px-6 lg:py-28 py-7 w-full">
      <div className="flex items-center gap-2 text-custom-gray mb-6 text-sm lg:text-base">
        <p>Category</p>{" "}
        <Image src={"/svg/chevron-right.svg"} alt={""} width={16} height={16} />{" "}
        <p className="font-semibold">News</p>
      </div>

      <h2 className="font-bold text-3xl lg:text-5xl mb-12">
        Blog title heading will go here
      </h2>

      <div className="flex lg:items-center flex-col lg:flex-row justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-gray-400">
            {/* <Image src={""} alt={""}  /> */}
          </div>

          <div className="text-sm">
            <p className="font-semibold">Full name</p>
            <div className="flex items-center gap-2">
              <p>11 Jan 2022</p>
              <p>•</p>
              <p>5 min read</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {links.map((link, index) => (
            <div
              key={index}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-custom-white"
            >
              <Image src={link.imgSrc} alt={""} width={24} height={24} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 w-full lg:h-[600px] h-[450px] bg-gray-300 relative">
        {/* <Image src={""} alt={""}  /> */}
      </div>
    </div>
  );
};

export default SinglePageDetails;

export const links = [
  {
    name: "website-link",
    url: "www.example.com",
    imgSrc: "/svg/link.svg",
  },
  {
    name: "linkedIn",
    url: "www.linkedin.com",
    imgSrc: "/svg/linkedIn.svg",
  },
  {
    name: "twitter",
    url: "www.twitter.com",
    imgSrc: "/svg/twitter.svg",
  },
  {
    name: "facebook",
    url: "www.facebook.com",
    imgSrc: "/svg/facebook.svg",
  },
];
