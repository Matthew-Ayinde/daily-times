import React from "react";
import { Button } from "./ui/button";

const Story = () => {
  return (
    <section className="bg-[url('/story.webp')] bg-no-repeat bg-center bg-cover w-full h-full lg:p-20 p-10 text-white flex flex-col justify-center items-center">
      <div className="inset-0 bg-black-900 opacity-100 backdrop-filter backdrop-blur-lg backdrop-brightness-50 rounded-xl">
        <div className=" flex flex-col justify-center items-center p-6 lg:px-40 lg:py-10">
          <p className="text-2xl lg:text-5xl text-center font-bold mb-6">
            Unleash Your Voice, Ignite the Headlines
          </p>
          <p className="text-base lg:text-lg text-center">
            we believe that every extraordinary story deserves to be heard, and
            who better to share it than the trendsetters and news mavens like
            you!
          </p>

          <Button className="mt-10 px-14 py-6 bg-custom-red rounded-xl">
            Submit Story
          </Button>
        </div>
      </div>

      {/* <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-black-800 opacity-75 backdrop-filter backdrop-blur-lg"></div>
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="text-white text-center">
                <h1 className="text-4xl font-bold">Blurred Text</h1>
                <p className="text-lg mt-4">This text is written on a blurry background.</p>
                </div>
            </div>
            </div> */}
    </section>
  );
};

export default Story;
