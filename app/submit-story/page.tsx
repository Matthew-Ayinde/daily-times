import FormComponent from "@/components/FormComponent";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="bg-custom-offwhite w-full h-full">
      <div className="max-w-screen-xxl w-full mx-auto bg-white">
        <div className="bg-custom-brightred flex flex-col gap-2 items-center lg:px-20 px-6 lg:pt-16 lg:pb-100px pt-10 pb-12">
          <Image
            alt="alt Image"
            width={160}
            height={29}
            src={"/logo-white.svg"}
            className=""
          />

          <p className="font-semibold text-3xl lg:text-5xl text-white">
            Submit Your Story
          </p>
        </div>

        <FormComponent />
      </div>
    </div>
  );
};

export default Page;
