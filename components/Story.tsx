import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Story = () => {
  return (
    <section className="bg-custom-lightgray w-full flex-center">
      <div className="max-w-screen-xxl w-full mx-auto  lg:px-100px lg:py-[120px] p-10 text-white">
        <div className="inset-0 opacity-100 backdrop-filter backdrop-blur-lg backdrop-brightness-50 rounded-xl bg-custom-gray/40">
          <div className=" flex flex-col justify-center items-center p-6 lg:px-40 lg:py-10">
            <p className="text-2xl lg:text-5xl text-center font-bold mb-4">
              Unleash Your Voice, Ignite the Headlines
            </p>
            <p className="lg:text-lg text-center">
              we believe that every extraordinary story deserves to be heard,
              and who better to share it than the trendsetters and news mavens
              like you!
            </p>

            <Button asChild className="mt-12 px-14 py-3 rounded-sm">
              <Link href={"/submit-story"}>Submit Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
