import Image from "next/image";
import React from "react";

const CustomModal = () => {
  return (
    <div className="h-screen w-screen bg-custom-black/50 absolute top-0 left-0 right-0">
      <div className="w-full h-full flex-center px-5 lg:px-0">
        <div className="max-w-screen-xxl w-full mx-auto bg-white">
          <div className="bg-custom-red lg:px-100px px-6 py-10">
            <Image
              alt="alt Image"
              width={160}
              height={29.38}
              src={"/logo-white.svg"}
              className=""
            />

            <p className="font-bold text-32px mt-4 text-white">
              We Value Your Privacy
            </p>
          </div>

          <div className="lg:pl-100px lg:pr-44 pr-6 lg:pt-20 lg:pb-48 pt-10 pb-16">
            {/* add your data here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
