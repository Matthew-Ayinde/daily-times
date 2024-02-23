import React from "react";
import { Button } from "./ui/button";

const Story = () => {
  return (
    <section className="bg-gray-300 w-full flex-center">
      <div className="max-w-screen-xxl w-full mx-auto  lg:px-100px lg:py-[120px] p-10 text-white">
        <div className="inset-0 bg-[##33333] opacity-100 backdrop-filter backdrop-blur-lg backdrop-brightness-50 rounded-xl">
          <div className=" flex flex-col justify-center items-center p-6 lg:px-40 lg:py-10">
            <p className="text-2xl lg:text-5xl text-center font-bold mb-6">
              Unleash Your Voice, Ignite the Headlines
            </p>
            <p className="text-base lg:text-lg text-center">
              we believe that every extraordinary story deserves to be heard,
              and who better to share it than the trendsetters and news mavens
              like you!
            </p>

            <Button className="mt-10 px-14 py-6 bg-custom-red rounded-xl">
              Submit Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
