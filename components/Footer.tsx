import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

const Footer = () => {
  const currentYear = moment().format("YYYY");
  return (
    <div className="max-w-screen-xxl lg:px-100px px-6 py-20 w-full mx-auto">
      <div className="">
        <div className="mb-8">
          <Image
            alt="alt Image"
            width={200}
            height={34.57}
            src={"/logo.svg"}
            className=""
          />
        </div>

        <div className="flex lg:items-center flex-col lg:flex-row lg:gap-8 gap-3">
          {["one", "two", "three", "four", "five"].map((link) => (
            <Link key={link} href={""} className="font-semibold capitalize whitespace-nowrap">
              Link {link}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16 flex flex-col lg:flex-row lg:items-center lg:justify-between pt-8 border-t border-custom-black gap-6">
        <div className="flex lg:items-center flex-col lg:flex-row lg:gap-6 gap-3 text-custom-black text-sm">
          <p className="underline whitespace-nowrap">Privacy Policy</p>
          <p className="underline whitespace-nowrap">Terms of service</p>
          <p className="underline whitespace-nowrap">Cookies Settings</p>
        </div>

        <div>
          <p className="text-custom-black text-sm">
            @{currentYear} Daily Times Nigeria. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
