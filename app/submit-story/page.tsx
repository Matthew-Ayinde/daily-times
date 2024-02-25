import FormComponent from "@/components/FormComponent";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="bg-custom-offwhite w-full h-full">
      <div className="max-w-screen-xxl w-full mx-auto bg-white">
        <div className="bg-custom-brightred lg:px-20 px-6 lg:pt-16 lg:pb-100px pt-10 pb-12">
          <Image
            alt="alt Image"
            width={356}
            height={69}
            src={"/logo-white.svg"}
            className=""
          />

          <p className="font-semibold text-xl lg:text-28px text-white">
            Since 1926
          </p>
        </div>

        <FormComponent />
      </div>
    </div>
  );
};

export default Page;
