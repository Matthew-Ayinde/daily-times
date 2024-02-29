"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const Page = () => {
  const [selectedRadio, setSelectedRadio] = useState<string | null>(null);

  const handleRadioChange = (value: string) => {
    setSelectedRadio(value);
  };

  return (
    <div className="max-w-screen-xxl lg:px-100px px-6 pt-16 pb-[136px] flex flex-col items-center justify-center space-y-24 w-full mx-auto bg-custom-subscribe/60">
      <div className="flex flex-col justify-center">
        <h2 className="text-center lg:text-[40px] text-3xl font-bold mb-5">
          Elevate Your Reading Experience!
        </h2>
        <p className="text-center lg:text-xl text-base">
          Delve deeper into stories with access to subscriber-only content,
          interviews, and behind-the-scenes insights.
        </p>
      </div>

      <div className="w-full">
        <RadioGroup className="flex flex-col lg:flex-row lg:justify-between lg:gap-10 gap-6">
          {["first", "second", "third"].map((value) => (
            <div
            key={value}
            className={`${
              selectedRadio === value ? "bg-custom-red text-white" : "bg-white text-black"
            }  pl-5 pr-14 py-5 rounded-lg cursor-pointer`}
            onClick={() => handleRadioChange(value)}
          >
              <p className="ml-6 text-base">Business plan</p>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value={value}
                  id={`r${value}`}
                  onChange={() => handleRadioChange(value)}
                />
                <Label className="text-[28px] font-bold" htmlFor={`r${value}`}>
                  $1000 per month
                </Label>
              </div>
              <p className="ml-6 text-base">or $10000 yearly</p>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="flex flex-col items-center justify-center space-y-4 lg:w-[819px]">
        <p className="lg:text-xl text-base text-center ">
          Stay informed, stay empowered. Choose the subscription plan that fits
          your lifestyle and keeps you connected to the world.
        </p>
        <Button className="text-white bg-custom-red w-[204px] h-[52px] rounded-xl">
          Subscribe Now
        </Button>
      </div>
    </div>
  );
};

export default Page;
